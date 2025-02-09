#include <iostream>
#include <filesystem>
#include <curl/curl.h>
#include <pugixml.hpp>
#include <sstream>
#include <fstream>
#include <vector>
#include <cstring>
#include <string>
#include <algorithm>

namespace fs = std::filesystem;

size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* userp) {
    userp->append((char*)contents, size * nmemb);
    return size * nmemb;
}

class EcfrDownloader {
private:
    std::string base_path;
    std::string date;
    CURL* curl;

    void create_directory(const std::string& path) {
        fs::create_directories(path);
    }

    std::string get_app_directory() {
        fs::path current_path = fs::current_path();
        while (!fs::exists(current_path / "public")) {
            current_path = current_path.parent_path();
            if (current_path.empty()) {
                throw std::runtime_error("Could not find public directory");
            }
        }
        return (current_path / "public" / "ecfr").string();
    }

    std::string download_url(const std::string& url) {
        std::string response_string;
        curl_easy_setopt(curl, CURLOPT_URL, url.c_str());
        curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
        curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response_string);
        
        std::cout << "Fetching URL: " << url << std::endl;
        
        CURLcode res = curl_easy_perform(curl);
        if (res != CURLE_OK) {
            throw std::runtime_error(std::string("CURL error: ") + curl_easy_strerror(res));
        }

        long response_code;
        curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &response_code);
        if (response_code != 200) {
            throw std::runtime_error("HTTP error " + std::to_string(response_code) + " for URL: " + url);
        }

        return response_string;
    }

    std::string convert_to_markdown(pugi::xml_node node) {
        std::stringstream content;
        
        auto head = node.child("HEAD");
        if (head) {
            content << "# " << head.text().get() << "\n\n";
        }

        auto auth = node.child("AUTH");
        if (auth) {
            content << "## Authority\n\n";
            auto hed = auth.child("HED");
            if (hed) content << "**" << hed.text().get() << "** ";
            auto pspace = auth.child("PSPACE");
            if (pspace) content << pspace.text().get() << "\n\n";
        }

        for (auto p : node.children("P")) {
            std::string para;
            for (auto child : p.children()) {
                if (strcmp(child.name(), "I") == 0) {
                    para += "*" + std::string(child.text().get()) + "*";
                } else if (strcmp(child.name(), "E") == 0) {
                    para += "_" + std::string(child.text().get()) + "_";
                } else {
                    para += child.text().get();
                }
            }
            if (!p.first_child()) {
                para = p.text().get();
            }
            content << para << "\n\n";
        }

        for (auto cita : node.children("CITA")) {
            content << "\n---\n\n";
            if (cita.attribute("TYPE")) {
                content << "[" << cita.attribute("TYPE").value() << "] ";
            }
            content << cita.text().get() << "\n\n";
        }

        return content.str();
    }

    void process_node(pugi::xml_node node, const std::vector<std::string>& current_path) {
        if (!node) return;

        std::string full_path = base_path + "/" + date;
        for (const auto& path : current_path) {
            full_path += "/" + path;
        }
        create_directory(full_path);

        std::string content = convert_to_markdown(node);
        if (!content.empty()) {
            std::string filename = full_path + "/" + current_path.back() + ".md";
            std::ofstream file(filename);
            file << content;
        }

        for (auto child : node.children()) {
            std::string name = child.name();
            if (name.substr(0, 3) == "DIV") {
                std::vector<std::string> new_path = current_path;
                std::string identifier = child.attribute("N").value();
                if (identifier.empty()) {
                    identifier = child.attribute("TYPE").value();
                }
                new_path.push_back(identifier);
                process_node(child, new_path);
            }
        }
    }

    std::vector<int> get_available_titles() {
        std::string url = "https://www.ecfr.gov/api/versioner/v1/titles.json";
        std::string response = download_url(url);
        
        std::vector<int> titles;
        
        // Parse JSON manually since we're keeping dependencies minimal
        size_t pos = 0;
        while ((pos = response.find("\"number\":", pos)) != std::string::npos) {
            pos += 9; // Length of "\"number\":"
            // Skip whitespace
            while (pos < response.length() && (response[pos] == ' ' || response[pos] == '\n' || response[pos] == '\t')) {
                pos++;
            }
            size_t end = response.find_first_of(",}", pos);
            if (end != std::string::npos) {
                try {
                    std::string num = response.substr(pos, end - pos);
                    // Trim whitespace
                    num.erase(0, num.find_first_not_of(" \n\r\t"));
                    num.erase(num.find_last_not_of(" \n\r\t") + 1);
                    int title = std::stoi(num);
                    titles.push_back(title);
                } catch (...) {
                    // Skip invalid numbers
                }
            }
            pos = end;
        }

        if (titles.empty()) {
            throw std::runtime_error("No titles found in response");
        }
        
        std::sort(titles.begin(), titles.end());
        return titles;
    }

public:
    EcfrDownloader(const std::string& date) 
        : date(date) {
        base_path = get_app_directory();
        create_directory(base_path + "/" + date);
        curl = curl_easy_init();
        if (!curl) {
            throw std::runtime_error("Failed to initialize CURL");
        }
    }

    ~EcfrDownloader() {
        if (curl) curl_easy_cleanup(curl);
    }

    void download_title(int title_number) {
        try {
            std::string url = "https://www.ecfr.gov/api/versioner/v1/full/" + 
                             date + "/title-" + std::to_string(title_number) + ".xml";
            
            std::string xml_content = download_url(url);
            
            pugi::xml_document doc;
            if (!doc.load_string(xml_content.c_str())) {
                std::cerr << "Failed to parse XML for title " << title_number << std::endl;
                return;
            }

            auto div1 = doc.select_node("//DIV1").node();
            process_node(div1, {std::to_string(title_number)});
        } catch (const std::exception& e) {
            std::cerr << "Error downloading title " << title_number << ": " << e.what() << std::endl;
        }
    }

    void download_all_titles() {
        try {
            std::cout << "Fetching available titles..." << std::endl;
            std::vector<int> titles = get_available_titles();
            std::cout << "Found " << titles.size() << " titles to download." << std::endl;
            
            for (int title : titles) {
                std::cout << "Downloading title " << title << "..." << std::endl;
                try {
                    download_title(title);
                    std::cout << "Successfully downloaded title " << title << std::endl;
                } catch (const std::exception& e) {
                    std::cerr << "Error downloading title " << title << ": " << e.what() << std::endl;
                }
            }
        } catch (const std::exception& e) {
            std::cerr << "Error getting available titles: " << e.what() << std::endl;
            throw;
        }
    }
};

int main(int argc, char* argv[]) {
    if (argc != 2) {
        std::cerr << "Usage: " << argv[0] << " <date in YYYY-MM-DD format>" << std::endl;
        return 1;
    }

    std::string date = argv[1];
    try {
        EcfrDownloader downloader(date);
        downloader.download_all_titles();
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }
    return 0;
} 
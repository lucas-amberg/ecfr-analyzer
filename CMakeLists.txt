cmake_minimum_required(VERSION 3.10)
project(ecfr_downloader)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(CURL REQUIRED)
find_package(pugixml REQUIRED)

add_executable(ecfr_downloader ecfr_downloader.cpp)
target_link_libraries(ecfr_downloader PRIVATE CURL::libcurl pugixml) 
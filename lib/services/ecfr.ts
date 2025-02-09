import axios from "axios";

export interface CfrReferenceAgency {
    title: number;
    chapter: string;
}

export interface Agency {
    name: string;
    display_name: string;
    short_name?: string;
    slug: string;
    sortable_name: string;
    cfr_references: CfrReferenceAgency[];
    children?: Agency[];
}

export interface CfrHierarchy {
    appendix: string;
    chapter: string;
    part: string;
    subchapter: string;
    subpart: string;
    title: string;
}

export interface CfrReferenceDetail {
    cfr_reference: string;
    hierarchy: CfrHierarchy;
}

export interface CfrCorrection {
    cfr_references: CfrReferenceDetail[];
    corrective_action: string;
    display_in_toc: boolean;
    error_corrected: string; // Date format: YYYY-MM-DD
    error_occurred: string; // Date format: YYYY-MM-DD
    fr_citation: string;
    id: number;
    last_modified: string; // Date format: YYYY-MM-DD
    position: number;
    title: number;
    year: number;
}

export interface SearchHierarchy {
    title: string;
    subtitle: string | null;
    chapter: string | null;
    subchapter: string | null;
    part: string;
    subpart: string | null;
    subject_group: string | null;
    section: string | null;
    appendix: string | null;
}

export interface SearchResult {
    starts_on: string;
    ends_on: string;
    type: string;
    hierarchy: SearchHierarchy;
    hierarchy_headings: SearchHierarchy;
    headings: SearchHierarchy;
    full_text_excerpt: string;
    score: number;
    structure_index: number;
    reserved: boolean;
    removed: boolean;
    change_types: string[];
    agency_slugs: string[];
}

export interface SearchResponse {
    results: SearchResult[];
    total_results: number;
    current_page: number;
    total_pages: number;
}

export interface SearchCountResponse {
    meta: {
        total_count: number;
    };
}

interface SearchParams {
    query?: string;
    agencySlugs?: string[];
    date?: string;
    lastModifiedAfter?: string;
    lastModifiedOnOrAfter?: string;
    lastModifiedBefore?: string;
    lastModifiedOnOrBefore?: string;
    page?: number;
    perPage?: number;
}

export const ecfrApi = {
    getAgencies: async () => {
        const { data } = await axios.get<{ agencies: Agency[] }>(
            "/api/ecfr/agencies",
        );
        return data.agencies;
    },

    getCorrections: async (fromDate: string) => {
        const { data } = await axios.get<{ ecfr_corrections: CfrCorrection[] }>(
            `/api/ecfr/corrections?date=${fromDate}`,
        );
        console.log("corrections", data);
        return data.ecfr_corrections;
    },

    getTitleCorrections: async (title: number) => {
        const { data } = await axios.get<{ ecfr_corrections: CfrCorrection[] }>(
            `/api/ecfr/corrections/title?title=${title}`,
        );
        return data.ecfr_corrections;
    },

    search: async (params: SearchParams) => {
        const searchParams = new URLSearchParams();

        if (params.query) searchParams.append("query", params.query);
        if (params.date) searchParams.append("date", params.date);
        if (params.lastModifiedAfter)
            searchParams.append(
                "last_modified_after",
                params.lastModifiedAfter,
            );
        if (params.lastModifiedOnOrAfter)
            searchParams.append(
                "last_modified_on_or_after",
                params.lastModifiedOnOrAfter,
            );
        if (params.lastModifiedBefore)
            searchParams.append(
                "last_modified_before",
                params.lastModifiedBefore,
            );
        if (params.lastModifiedOnOrBefore)
            searchParams.append(
                "last_modified_on_or_before",
                params.lastModifiedOnOrBefore,
            );
        if (params.page) searchParams.append("page", params.page.toString());
        if (params.perPage)
            searchParams.append("per_page", params.perPage.toString());
        params.agencySlugs?.forEach((slug) =>
            searchParams.append("agency_slugs[]", slug),
        );

        const { data } = await axios.get(
            `/api/ecfr/search?${searchParams.toString()}`,
        );
        return data;
    },

    searchCount: async (params: SearchParams): Promise<SearchCountResponse> => {
        const searchParams = new URLSearchParams();

        if (params.query) searchParams.append("query", params.query);
        if (params.date) searchParams.append("date", params.date);
        if (params.lastModifiedAfter)
            searchParams.append(
                "last_modified_after",
                params.lastModifiedAfter,
            );
        if (params.lastModifiedBefore)
            searchParams.append(
                "last_modified_before",
                params.lastModifiedBefore,
            );
        params.agencySlugs?.forEach((slug) =>
            searchParams.append("agency_slugs[]", slug),
        );

        const { data } = await axios.get(
            `/api/ecfr/search/count?${searchParams.toString()}`,
        );
        return data;
    },
};

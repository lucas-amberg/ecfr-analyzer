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
};

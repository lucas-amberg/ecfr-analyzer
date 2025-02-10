import { supabase } from "../supabase";

export type AgencyWordCount = {
    slug: string;
    display_name: string;
    word_count: number;
    updated_at: string;
};

export const supabaseQueries = {
    getAgencyWordCount: async (slug: string) => {
        const response = await fetch(
            `/api/word-count?slug=${encodeURIComponent(slug)}`,
        );
        if (!response.ok) return null;
        return response.json();
    },

    updateAgencyWordCount: async (
        slug: string,
        displayName: string,
        wordCount: number,
    ) => {
        const response = await fetch("/api/word-count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                slug,
                displayName,
                wordCount,
            }),
        });
        if (!response.ok) throw new Error("Failed to update word count");
        return response.json();
    },

    getAllWordCounts: async () => {
        const { data, error } = await supabase
            .from("agency_word_counts")
            .select("*");
        if (error) throw error;
        return data;
    },
};

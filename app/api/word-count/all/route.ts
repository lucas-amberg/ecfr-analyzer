import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function GET() {
    try {
        const { data, error } = await supabase
            .from("agency_word_counts")
            .select("*")
            .order("word_count", { ascending: false });

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching word counts:", error);
        return NextResponse.json(
            { error: "Failed to fetch word counts" },
            { status: 500 },
        );
    }
}

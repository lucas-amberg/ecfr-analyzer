import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
        return NextResponse.json(
            { error: "Slug is required" },
            { status: 400 },
        );
    }

    try {
        const { data, error } = await supabase
            .from("agency_word_counts")
            .select("*")
            .eq("slug", slug)
            .single();

        if (error) {
            if (error.code === "PGRST116") {
                return NextResponse.json(null);
            }
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error fetching word count:", error);
        return NextResponse.json(
            { error: "Failed to fetch word count" },
            { status: 500 },
        );
    }
}

export async function POST(request: Request) {
    try {
        const { slug, displayName, wordCount } = await request.json();

        if (!slug || !displayName || typeof wordCount !== "number") {
            return NextResponse.json(
                { error: "Invalid request data" },
                { status: 400 },
            );
        }

        const { data, error } = await supabase
            .from("agency_word_counts")
            .upsert({
                slug,
                display_name: displayName,
                word_count: wordCount,
                updated_at: new Date().toISOString(),
            })
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error updating word count:", error);
        return NextResponse.json(
            { error: "Failed to update word count" },
            { status: 500 },
        );
    }
}

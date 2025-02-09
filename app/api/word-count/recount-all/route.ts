import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { ecfrApi } from "@/lib/services/ecfr";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function POST() {
    try {
        const agencies = await ecfrApi.getAgencies();

        for (const agency of agencies) {
            const wordCount = await ecfrApi.getAgencyWordCount(agency);
            await supabase.from("agency_word_counts").upsert({
                slug: agency.slug,
                display_name: agency.display_name,
                word_count: wordCount,
                updated_at: new Date().toISOString(),
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error recounting all agencies:", error);
        return NextResponse.json(
            { error: "Failed to recount agencies" },
            { status: 500 },
        );
    }
}

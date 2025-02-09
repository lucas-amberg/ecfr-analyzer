import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

interface Agency {
    name: string;
    display_name: string;
    short_name?: string;
    slug: string;
    sortable_name: string;
    cfr_references: Array<{ title: number; chapter: string }>;
    children?: Agency[];
    child_agencies?: Agency[];
}

export async function GET(request: NextRequest) {
    try {
        const response = await fetch(
            "https://www.ecfr.gov/api/admin/v1/agencies.json",
        );
        const data = await response.json();

        const slug = request.nextUrl.searchParams.get("slug");

        if (slug) {
            function findAgency(agencies: Agency[]): Agency | null {
                for (const agency of agencies) {
                    if (agency.slug === slug) {
                        return agency;
                    }
                    if (agency.children) {
                        const found = findAgency(agency.children);
                        if (found) return found;
                    }
                }
                return null;
            }

            const agency = findAgency(data.agencies);

            if (!agency) {
                return NextResponse.json(
                    { error: "Agency not found" },
                    { status: 404 },
                );
            }

            return NextResponse.json(agency);
        }

        return NextResponse.json(data.agencies);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch agencies" },
            { status: 500 },
        );
    }
}

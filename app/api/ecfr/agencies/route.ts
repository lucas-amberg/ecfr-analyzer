import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(
            "https://www.ecfr.gov/api/admin/v1/agencies.json",
        );
        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch agencies" },
            { status: 500 },
        );
    }
}

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = await fetch(
            "https://www.ecfr.gov/api/versioner/v1/titles.json",
        );
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch titles" },
            { status: 500 },
        );
    }
}

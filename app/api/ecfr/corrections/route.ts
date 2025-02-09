import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");

    try {
        const response = await fetch(
            `https://www.ecfr.gov/api/admin/v1/corrections.json?date=${date}`,
        );
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch corrections" },
            { status: 500 },
        );
    }
}

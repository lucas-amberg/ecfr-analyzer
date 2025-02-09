import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("title");

    if (!title) {
        return NextResponse.json(
            { error: "Title parameter is required" },
            { status: 400 },
        );
    }

    try {
        const response = await fetch(
            `https://www.ecfr.gov/api/admin/v1/corrections/title/${title}.json`,
        );
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch title corrections" },
            { status: 500 },
        );
    }
}

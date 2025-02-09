import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const date = searchParams.get("date");
    const title = searchParams.get("title");

    if (!date || !title) {
        return NextResponse.json(
            { error: "Missing date or title parameter" },
            { status: 400 },
        );
    }

    try {
        const response = await fetch(
            `https://www.ecfr.gov/api/versioner/v1/structure/${date}/title-${title}.json`,
        );
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch title structure" },
            { status: 500 },
        );
    }
}

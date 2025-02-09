import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const baseUrl = "https://www.ecfr.gov/api/search/v1/results";

    const apiUrl = new URL(baseUrl);
    searchParams.forEach((value, key) => {
        if (key === "agency_slugs[]" && Array.isArray(value)) {
            value.forEach((slug) =>
                apiUrl.searchParams.append("agency_slugs[]", slug),
            );
        } else {
            apiUrl.searchParams.append(key, value);
        }
    });

    try {
        const response = await fetch(apiUrl.toString());
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch search results" },
            { status: 500 },
        );
    }
}

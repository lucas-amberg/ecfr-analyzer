import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

interface RouteParams {
    params: {
        title: string;
    };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const title = await Promise.resolve(params.title);

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

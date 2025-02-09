import { NextResponse } from "next/server";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const title = searchParams.get("title");
    const date = searchParams.get("date");
    const path = searchParams.get("path");

    if (!title || !date || !path) {
        return NextResponse.json(
            { error: "Missing parameters" },
            { status: 400 },
        );
    }

    try {
        const pathParts = path.split("/");
        const cleanPath =
            pathParts[0] === title ? pathParts.slice(1).join("/") : path;
        const lastSegment = pathParts[pathParts.length - 1];

        const response = await fetch(
            `${request.nextUrl.origin}/ecfr/${date}/${title}/${cleanPath}/${lastSegment}.md`,
        );

        if (response.ok) {
            const content = await response.text();
            return NextResponse.json({ content });
        }

        return NextResponse.json({ content: "" });
    } catch (error) {
        return NextResponse.json({ content: "" });
    }
}

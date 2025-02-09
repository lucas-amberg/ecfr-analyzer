"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowLeft, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, use } from "react";
import { ecfrApi } from "@/lib/services/ecfr";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TitleSchema } from "@/lib/services/ecfr";
import { marked } from "marked";
import fs from "fs/promises";
import path from "path";

function SchemaNode({
    node,
    level = 0,
    titleNumber,
    date,
    parentPath = [],
}: {
    node: TitleSchema;
    level?: number;
    titleNumber: number;
    date: string;
    parentPath?: string[];
}) {
    const [isExpanded, setIsExpanded] = useState(level < 1);
    const hasChildren = node.children && node.children.length > 0;

    const currentPath = [...parentPath, node.identifier];

    const { data: content = "" } = useQuery({
        queryKey: ["content", titleNumber, date, currentPath.join("/")],
        queryFn: async () => {
            const response = await fetch(
                `/api/ecfr/content?title=${titleNumber}&date=${date}&path=${currentPath.join("/")}`,
            );
            const data = await response.json();
            return data.content;
        },
        enabled: !!node.identifier,
    });

    return (
        <div className="space-y-2">
            <div
                className={`flex items-center gap-2 ${
                    hasChildren ? "cursor-pointer" : "ml-6"
                }`}
                onClick={() => hasChildren && setIsExpanded(!isExpanded)}>
                {hasChildren && (
                    <div className="w-6">
                        {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </div>
                )}
                <div className="flex-1">
                    <span className="font-medium">{node.label}</span>
                    {node.label_description && (
                        <span className="text-gray-600">
                            {" "}
                            - {node.label_description}
                        </span>
                    )}
                    {node.reserved && (
                        <span className="text-yellow-600 ml-2">(Reserved)</span>
                    )}
                </div>
            </div>
            {content && (
                <div className="ml-6 mt-2 p-4 bg-gray-50 rounded-md">
                    <div
                        className="prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: marked(content) }}
                    />
                </div>
            )}
            {isExpanded && hasChildren && (
                <div className="ml-6 space-y-2">
                    {node.children?.map((child) => (
                        <SchemaNode
                            key={child.identifier}
                            node={child}
                            level={level + 1}
                            titleNumber={titleNumber}
                            date={date}
                            parentPath={currentPath}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function TitlePage({
    params,
}: {
    params: Promise<{ title: string }>;
}) {
    const resolvedParams = use(params);
    const titleNumber = parseInt(resolvedParams.title, 10);

    const { data: titles = [] } = useQuery({
        queryKey: ["titles"],
        queryFn: ecfrApi.getTitles,
    });

    const title = titles.find((t) => t.number === titleNumber);

    const { data: structure, isLoading } = useQuery({
        queryKey: ["titleStructure", titleNumber, title?.up_to_date_as_of],
        queryFn: () =>
            title?.up_to_date_as_of
                ? ecfrApi.getTitleStructure(titleNumber, title.up_to_date_as_of)
                : null,
        enabled: !!title?.up_to_date_as_of,
    });

    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen w-screen">
            <div className="flex items-center justify-start pl-10 pb-3 w-screen border-b-2 border-gray-100">
                <div className="flex items-center gap-4">
                    <Link href="/title-data">
                        <Button
                            variant="ghost"
                            size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">
                        Title {resolvedParams.title}: {title?.name}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto py-8">
                {isLoading ? (
                    <div className="text-center">Loading structure...</div>
                ) : structure && title ? (
                    <Card>
                        <CardHeader>
                            <CardTitle>Title Structure</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <SchemaNode
                                node={structure}
                                titleNumber={titleNumber}
                                date={title.up_to_date_as_of}
                                parentPath={[]}
                            />
                        </CardContent>
                    </Card>
                ) : null}
            </div>
        </div>
    );
}

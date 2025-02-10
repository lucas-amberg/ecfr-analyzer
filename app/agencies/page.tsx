"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowLeft, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ecfrApi } from "@/lib/services/ecfr";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AgencyWordCountGraph } from "../../components/ecfr/agency-word-count-graph";
import { AgencyCountStats } from "@/components/ecfr/agency-count-stats";

type CfrReference = {
    title: number;
    chapter: string;
};

type Agency = {
    name: string;
    display_name: string;
    short_name?: string;
    slug: string;
    sortable_name: string;
    cfr_references: CfrReference[];
    children?: Agency[];
};

function AgencyCard({ agency, level = 0 }: { agency: Agency; level?: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = agency.children && agency.children.length > 0;

    const titles = Array.from(
        new Set(agency.cfr_references.map((ref) => ref.title)),
    ).sort((a, b) => a - b);
    const chapters = Array.from(
        new Set(agency.cfr_references.map((ref) => ref.chapter)),
    ).sort();

    return (
        <Card className="w-full">
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold">
                        {agency.display_name}
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="space-y-4">
                    <div className="space-y-2 text-sm text-gray-600">
                        {titles.map((title) => {
                            const titleChapters = agency.cfr_references
                                .filter((ref) => ref.title === title)
                                .map((ref) => ref.chapter)
                                .sort();

                            return (
                                <div key={title}>
                                    <span className="font-medium">
                                        Title {title}
                                    </span>
                                    {titleChapters.length > 0 && (
                                        <span>
                                            {" - "}
                                            Chapters: {titleChapters.join(", ")}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {hasChildren && (
                                <>
                                    <span className="text-sm text-gray-500">
                                        {agency?.children?.length} sub-agencies
                                    </span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() =>
                                            setIsExpanded(!isExpanded)
                                        }
                                        className="p-0 h-auto hover:bg-transparent">
                                        {isExpanded ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </Button>
                                </>
                            )}
                        </div>
                        <Link href={`/agencies/${agency.slug}`}>
                            <Button
                                variant="outline"
                                size="sm">
                                View Stats and Info
                            </Button>
                        </Link>
                    </div>

                    {isExpanded && hasChildren && (
                        <Collapsible
                            open={isExpanded}
                            className="mt-4">
                            <CollapsibleContent>
                                <div className="pl-4 space-y-4 border-l-2 border-gray-200">
                                    {agency.children?.map((child) => (
                                        <AgencyCard
                                            key={child.slug}
                                            agency={child}
                                            level={level + 1}
                                        />
                                    ))}
                                </div>
                            </CollapsibleContent>
                        </Collapsible>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

function RecountAllButton() {
    const [isRecounting, setIsRecounting] = useState(false);
    const queryClient = useQueryClient();

    const recountAll = async () => {
        setIsRecounting(true);
        try {
            const response = await fetch("/api/word-count/recount-all", {
                method: "POST",
            });
            if (!response.ok) throw new Error("Failed to recount");
            await queryClient.invalidateQueries({
                queryKey: ["agencyWordCounts"],
            });
        } catch (error) {
            console.error("Error recounting:", error);
        }
        setIsRecounting(false);
    };

    return (
        <Button
            onClick={recountAll}
            disabled={isRecounting}
            variant="outline"
            className="w-auto">
            {isRecounting ? (
                <>
                    <span className="mr-2">Recounting all agencies...</span>
                    <span className="text-sm text-gray-500">
                        (This will take a few minutes)
                    </span>
                </>
            ) : (
                "Recount All Agencies"
            )}
        </Button>
    );
}

export default function AgenciesPage() {
    const { data: agencies = [], isLoading } = useQuery({
        queryKey: ["agencies"],
        queryFn: ecfrApi.getAgencies,
    });
    const [searchQuery, setSearchQuery] = useState("");

    const sortedAndFilteredAgencies = useMemo(() => {
        return [...agencies]
            .sort((a, b) => {
                const aHasChildren = a.children?.length ?? 0;
                const bHasChildren = b.children?.length ?? 0;
                if (aHasChildren !== bHasChildren) {
                    return bHasChildren - aHasChildren;
                }
                return a.display_name.localeCompare(b.display_name);
            })
            .filter((agency) =>
                agency.display_name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()),
            );
    }, [agencies, searchQuery]);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <div className="w-full border-b-2 border-gray-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                size="icon">
                                <ArrowLeft className="h-4 w-4" />
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Federal Agencies</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Federal Agencies</h1>
                    <RecountAllButton />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <AgencyCountStats />
                    </div>
                    <div className="md:col-span-2">
                        <AgencyWordCountGraph />
                    </div>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                        placeholder="Search agencies..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                    />
                </div>

                {isLoading ? (
                    <div className="text-center">Loading agencies...</div>
                ) : (
                    <div className="space-y-6">
                        {sortedAndFilteredAgencies.map((agency) => (
                            <AgencyCard
                                key={agency.slug}
                                agency={agency}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

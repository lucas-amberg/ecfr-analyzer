"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabaseQueries } from "@/lib/services/supabase";
import { Agency, ecfrApi } from "@/lib/services/ecfr";

export function AgencyCountStats() {
    const { data: agencies } = useQuery({
        queryKey: ["agencies"],
        queryFn: ecfrApi.getAgencies,
    });

    const { data: wordCounts } = useQuery({
        queryKey: ["agencyWordCounts"],
        queryFn: supabaseQueries.getAllWordCounts,
    });

    const topAgencies = wordCounts
        ?.sort((a, b) => b.word_count - a.word_count)
        .slice(0, 5)
        .map((count) => ({
            ...count,
            agency: agencies?.find((a) => a.slug === count.agency_slug),
        }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Agency Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold">
                        {agencies?.length || 0}
                    </div>
                    <div className="text-sm text-gray-500">
                        Total Federal Agencies
                    </div>
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold">
                        Largest Agencies by Content
                    </h3>
                    <div className="space-y-2">
                        {topAgencies?.map((agency: any, index: number) => (
                            <Link
                                key={agency.slug}
                                href={`/agencies/${agency.slug}`}
                                className="flex w-full items-center justify-between p-2 hover:bg-gray-50 rounded-md transition-colors">
                                <span className="text-sm text-blue-600 hover:text-blue-800">
                                    {index + 1}. {agency?.display_name}
                                </span>
                                <span className="text-sm text-right text-gray-500 ml-auto">
                                    {agency.word_count.toLocaleString()} <br />{" "}
                                    words
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

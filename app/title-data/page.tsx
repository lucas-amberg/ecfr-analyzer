"use client";

import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ecfrApi } from "@/lib/services/ecfr";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function formatDate(dateString: string) {
    try {
        return format(new Date(dateString + "T00:00:00"), "PP");
    } catch (e) {
        return dateString;
    }
}

export default function TitleDataPage() {
    const { data: titles = [], isLoading } = useQuery({
        queryKey: ["titles"],
        queryFn: ecfrApi.getTitles,
    });

    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen w-screen">
            <div className="flex items-center justify-start pl-10 pb-3 w-screen border-b-2 border-gray-100">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">eCFR Title Data</h1>
                </div>
            </div>

            <div className="container mx-auto py-8">
                {isLoading ? (
                    <div className="text-center">Loading titles...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {titles.map((title) => (
                            <Link
                                key={title.number}
                                href={`/title-data/${title.number}`}>
                                <Card className="h-full hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle>
                                            Title {title.number}: {title.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <p>
                                                <span className="font-medium">
                                                    Last Amended:
                                                </span>{" "}
                                                {formatDate(
                                                    title.latest_amended_on,
                                                )}
                                            </p>
                                            <p>
                                                <span className="font-medium">
                                                    Latest Issue:
                                                </span>{" "}
                                                {formatDate(
                                                    title.latest_issue_date,
                                                )}
                                            </p>
                                            <p>
                                                <span className="font-medium">
                                                    Up to Date As Of:
                                                </span>{" "}
                                                {formatDate(
                                                    title.up_to_date_as_of,
                                                )}
                                            </p>
                                            {title.reserved && (
                                                <p className="text-yellow-600 font-medium">
                                                    Reserved Title
                                                </p>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

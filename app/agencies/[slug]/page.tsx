"use client";

import { useQuery } from "@tanstack/react-query";
import {
    ArrowLeft,
    ChevronDown,
    ChevronRight,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { use, useState } from "react";
import { ecfrApi } from "@/lib/services/ecfr";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

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

function TitleChapterCard({
    title,
    chapter,
}: {
    title: number;
    chapter: string;
}) {
    const ecfrUrl = `https://www.ecfr.gov/current/title-${title}/chapter-${chapter}`;

    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <CardTitle className="text-base">
                    Title {title}, Chapter {chapter}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <a
                    href={ecfrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2">
                    <Button
                        variant="outline"
                        size="sm">
                        View on eCFR
                        <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </CardContent>
        </Card>
    );
}

export default function AgencyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const resolvedParams = use(params);
    const { data: agency, isLoading } = useQuery({
        queryKey: ["agency", resolvedParams.slug],
        queryFn: () => ecfrApi.getAgencyBySlug(resolvedParams.slug),
    });

    const [isReferencesExpanded, setIsReferencesExpanded] = useState(false);

    const references = agency
        ? agency.cfr_references
              .reduce(
                  (acc, ref) => {
                      const key = `${ref.title}-${ref.chapter}`;
                      if (
                          !acc.some(
                              (item) =>
                                  item.title === ref.title &&
                                  item.chapter === ref.chapter,
                          )
                      ) {
                          acc.push({ title: ref.title, chapter: ref.chapter });
                      }
                      return acc;
                  },
                  [] as { title: number; chapter: string }[],
              )
              .sort((a, b) => {
                  const titleDiff = a.title - b.title;
                  if (titleDiff !== 0) return titleDiff;
                  return a.chapter.localeCompare(b.chapter);
              })
        : [];

    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen w-screen">
            <div className="flex items-center justify-start pl-10 pb-3 w-screen border-b-2 border-gray-100">
                <div className="flex items-center gap-4">
                    <Link href="/agencies">
                        <Button
                            variant="ghost"
                            size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold">
                        {isLoading ? "Loading..." : agency?.display_name}
                    </h1>
                </div>
            </div>

            <div className="container mx-auto py-8">
                {isLoading ? (
                    <div className="text-center">Loading agency details...</div>
                ) : agency ? (
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Agency Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {references.length > 0 && (
                                    <Collapsible
                                        open={isReferencesExpanded}
                                        onOpenChange={setIsReferencesExpanded}
                                        className="space-y-4">
                                        <CollapsibleTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="flex items-center justify-between w-full">
                                                <span>Titles and Chapters</span>
                                                {isReferencesExpanded ? (
                                                    <ChevronDown className="h-4 w-4" />
                                                ) : (
                                                    <ChevronRight className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                {references.map((ref) => (
                                                    <TitleChapterCard
                                                        key={`${ref.title}-${ref.chapter}`}
                                                        title={ref.title}
                                                        chapter={ref.chapter}
                                                    />
                                                ))}
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                )}

                                {agency.children?.length &&
                                    agency.children?.length > 0 && (
                                        <Collapsible
                                            className="space-y-4"
                                            defaultOpen={false}>
                                            <CollapsibleTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="flex items-center justify-between w-full">
                                                    <span>
                                                        Sub-Agencies (
                                                        {
                                                            agency.children
                                                                ?.length
                                                        }
                                                        )
                                                    </span>
                                                    <ChevronRight className="h-4 w-4" />
                                                </Button>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="space-y-4">
                                                <div className="grid grid-cols-1 gap-4">
                                                    {agency.children?.map(
                                                        (child) => (
                                                            <Card
                                                                key={child.slug}
                                                                className="hover:shadow-md transition-shadow">
                                                                <CardHeader>
                                                                    <CardTitle className="text-lg">
                                                                        {
                                                                            child.display_name
                                                                        }
                                                                    </CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className="space-y-4">
                                                                        <div className="space-y-2 text-sm text-gray-600">
                                                                            {Array.from(
                                                                                new Set(
                                                                                    child.cfr_references.map(
                                                                                        (
                                                                                            ref,
                                                                                        ) =>
                                                                                            ref.title,
                                                                                    ),
                                                                                ),
                                                                            )
                                                                                .sort(
                                                                                    (
                                                                                        a,
                                                                                        b,
                                                                                    ) =>
                                                                                        a -
                                                                                        b,
                                                                                )
                                                                                .map(
                                                                                    (
                                                                                        title,
                                                                                    ) => {
                                                                                        const titleChapters =
                                                                                            child.cfr_references
                                                                                                .filter(
                                                                                                    (
                                                                                                        ref,
                                                                                                    ) =>
                                                                                                        ref.title ===
                                                                                                        title,
                                                                                                )
                                                                                                .map(
                                                                                                    (
                                                                                                        ref,
                                                                                                    ) =>
                                                                                                        ref.chapter,
                                                                                                )
                                                                                                .sort();

                                                                                        return (
                                                                                            <div
                                                                                                key={
                                                                                                    title
                                                                                                }>
                                                                                                <span className="font-medium">
                                                                                                    Title{" "}
                                                                                                    {
                                                                                                        title
                                                                                                    }
                                                                                                </span>
                                                                                                {titleChapters.length >
                                                                                                    0 && (
                                                                                                    <span>
                                                                                                        {
                                                                                                            " - "
                                                                                                        }
                                                                                                        Chapters:{" "}
                                                                                                        {titleChapters.join(
                                                                                                            ", ",
                                                                                                        )}
                                                                                                    </span>
                                                                                                )}
                                                                                            </div>
                                                                                        );
                                                                                    },
                                                                                )}
                                                                        </div>
                                                                        <Link
                                                                            href={`/agencies/${child.slug}`}>
                                                                            <Button
                                                                                variant="outline"
                                                                                size="sm">
                                                                                View
                                                                                Stats
                                                                                and
                                                                                Info
                                                                            </Button>
                                                                        </Link>
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        ),
                                                    )}
                                                </div>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    )}
                            </CardContent>
                        </Card>
                    </div>
                ) : (
                    <div className="text-center text-red-600">
                        Agency not found
                    </div>
                )}
            </div>
        </div>
    );
}

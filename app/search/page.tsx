"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ecfrApi } from "@/lib/services/ecfr";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Agency, SearchResponse, SearchResult } from "@/lib/services/ecfr";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

function getAgencyName(agencies: Agency[], slug: string): string {
    for (const agency of agencies) {
        if (agency.slug === slug) return agency.name;
        if (agency.children) {
            const childName = getAgencyName(agency.children, slug);
            if (childName) return childName;
        }
    }
    return slug;
}

function DatePicker({
    value,
    onChange,
    label,
}: {
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
    label: string;
}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-[240px] justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {value ? format(value, "PPP") : label}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className="w-auto p-0"
                align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}

function findAgenciesForResult(
    result: SearchResult,
    agencies: Agency[],
): string[] {
    const matches: string[] = [];

    function checkAgency(agency: Agency) {
        if (
            agency.cfr_references.some(
                (ref) =>
                    ref.title.toString() === result.hierarchy.title &&
                    (!ref.chapter || ref.chapter === result.hierarchy.chapter),
            )
        ) {
            matches.push(agency.name);
        }
        agency.children?.forEach(checkAgency);
    }

    agencies.forEach(checkAgency);
    return matches;
}

export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [selectedAgencies, setSelectedAgencies] = useState<string[]>([]);
    const [date, setDate] = useState<Date | undefined>();
    const [lastModifiedAfter, setLastModifiedAfter] = useState<
        Date | undefined
    >();
    const [lastModifiedBefore, setLastModifiedBefore] = useState<
        Date | undefined
    >();
    const [currentPage, setCurrentPage] = useState(1);
    const [isSearching, setIsSearching] = useState(false);
    const [searchSubmitted, setSearchSubmitted] = useState(false);
    const [selectedResult, setSelectedResult] = useState<SearchResult | null>(
        null,
    );

    const { data: agencies = [] } = useQuery({
        queryKey: ["agencies"],
        queryFn: ecfrApi.getAgencies,
    });

    const { data: totalCount } = useQuery({
        queryKey: [
            "searchCount",
            query,
            selectedAgencies,
            date,
            lastModifiedAfter,
            lastModifiedBefore,
        ],
        queryFn: () =>
            ecfrApi.searchCount({
                query,
                agencySlugs: selectedAgencies,
                date: date ? format(date, "yyyy-MM-dd") : undefined,
                lastModifiedAfter: lastModifiedAfter
                    ? format(lastModifiedAfter, "yyyy-MM-dd")
                    : undefined,
                lastModifiedBefore: lastModifiedBefore
                    ? format(lastModifiedBefore, "yyyy-MM-dd")
                    : undefined,
            }),
        enabled: isSearching && searchSubmitted,
    });

    const { data: searchResults, isLoading } = useQuery<SearchResponse>({
        queryKey: [
            "search",
            query,
            selectedAgencies,
            date,
            lastModifiedAfter,
            lastModifiedBefore,
            currentPage,
        ],
        queryFn: () =>
            ecfrApi
                .search({
                    query,
                    agencySlugs: selectedAgencies,
                    date: date ? format(date, "yyyy-MM-dd") : undefined,
                    lastModifiedAfter: lastModifiedAfter
                        ? format(lastModifiedAfter, "yyyy-MM-dd")
                        : undefined,
                    lastModifiedBefore: lastModifiedBefore
                        ? format(lastModifiedBefore, "yyyy-MM-dd")
                        : undefined,
                    page: currentPage,
                    perPage: 50,
                })
                .then((data) => {
                    setSearchSubmitted(false);
                    return data;
                }),
        enabled:
            isSearching && searchSubmitted && currentPage > 0 && !!totalCount,
    });

    const handleSearch = () => {
        setIsSearching(true);
        setSearchSubmitted(true);
        setCurrentPage(1);
    };

    const totalPages = Math.ceil((totalCount?.meta.total_count || 0) / 50);

    const getPageNumbers = (current: number, total: number) => {
        if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
        if (current <= 3) return [1, 2, 3, 4, "...", total];
        if (current >= total - 2)
            return [1, "...", total - 3, total - 2, total - 1, total];
        console.log(current, total);
        return [1, "...", current - 1, current, current + 1, "...", total];
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setSearchSubmitted(true);
    };

    const handleReset = () => {
        setQuery("");
        setSelectedAgencies([]);
        setDate(undefined);
        setLastModifiedAfter(undefined);
        setLastModifiedBefore(undefined);
        setCurrentPage(1);
        setIsSearching(false);
        setSearchSubmitted(false);
    };

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
                    <h1 className="text-3xl font-bold">eCFR Search</h1>
                </div>
            </div>

            <div className="container mx-auto py-8 space-y-6">
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <Input
                            placeholder="Search eCFR..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => {
                                if (e.key === "Enter") handleSearch();
                            }}
                        />
                        <Button onClick={handleSearch}>Search</Button>
                        <Button
                            variant="outline"
                            onClick={handleReset}
                            disabled={!isSearching}>
                            Clear
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Select
                            value={selectedAgencies[0] || "all"}
                            onValueChange={(value) =>
                                setSelectedAgencies(
                                    value === "all" ? [] : [value],
                                )
                            }>
                            <SelectTrigger className="w-[300px]">
                                <SelectValue placeholder="Select Agency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Agencies
                                </SelectItem>
                                {agencies.map((agency) => (
                                    <SelectItem
                                        key={agency.slug}
                                        value={agency.slug}>
                                        {agency.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <DatePicker
                            value={date}
                            onChange={setDate}
                            label="Content as of date"
                        />

                        <DatePicker
                            value={lastModifiedAfter}
                            onChange={setLastModifiedAfter}
                            label="Modified after"
                        />

                        <DatePicker
                            value={lastModifiedBefore}
                            onChange={setLastModifiedBefore}
                            label="Modified before"
                        />
                    </div>
                </div>

                {searchResults?.results && (
                    <div className="text-sm text-gray-600">
                        Showing page {currentPage} of {totalPages} (
                        {totalCount?.meta.total_count} total results)
                    </div>
                )}

                {isLoading ? (
                    <div className="text-center py-8">Loading...</div>
                ) : searchResults?.results ? (
                    <div className="space-y-6">
                        <div className="space-y-4">
                            {searchResults.results.map((result) => (
                                <Card
                                    key={`${result.structure_index}-${result.hierarchy.title}-${result.hierarchy.part}-${result.hierarchy.section || ""}-${result.starts_on}`}>
                                    <CardContent className="p-4">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2">
                                                <button
                                                    onClick={() =>
                                                        setSelectedResult(
                                                            result,
                                                        )
                                                    }
                                                    className="text-blue-600 hover:underline text-lg font-medium text-left">
                                                    {result.hierarchy_headings
                                                        .section ||
                                                        result
                                                            .hierarchy_headings
                                                            .part}
                                                </button>
                                                <div className="text-sm text-gray-600">
                                                    {findAgenciesForResult(
                                                        result,
                                                        agencies,
                                                    ).length > 0 && (
                                                        <p>
                                                            Agency:{" "}
                                                            {findAgenciesForResult(
                                                                result,
                                                                agencies,
                                                            ).join(", ")}
                                                        </p>
                                                    )}
                                                    {result.headings.title && (
                                                        <p>
                                                            Title:{" "}
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: result
                                                                        .headings
                                                                        .title,
                                                                }}
                                                            />
                                                        </p>
                                                    )}
                                                    {result.headings.part && (
                                                        <p>
                                                            Part:{" "}
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: result
                                                                        .headings
                                                                        .part,
                                                                }}
                                                            />
                                                        </p>
                                                    )}
                                                    {result.headings
                                                        .section && (
                                                        <p>
                                                            Section:{" "}
                                                            <span
                                                                dangerouslySetInnerHTML={{
                                                                    __html: result
                                                                        .headings
                                                                        .section,
                                                                }}
                                                            />
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                <p>
                                                    {result.ends_on
                                                        ? "Was valid from: "
                                                        : "Valid since: "}
                                                    {format(
                                                        new Date(
                                                            result.starts_on,
                                                        ),
                                                        "PP",
                                                    )}
                                                    {result.ends_on && (
                                                        <span className="font-bold">
                                                            {" "}
                                                            -{" "}
                                                            {format(
                                                                new Date(
                                                                    result.ends_on,
                                                                ),
                                                                "PP",
                                                            )}
                                                        </span>
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className="mt-4 text-sm text-gray-700 [&_strong]:font-bold"
                                            dangerouslySetInnerHTML={{
                                                __html: result.full_text_excerpt,
                                            }}
                                        />
                                        <div className="mt-2 flex gap-2">
                                            {result.change_types.map((type) => (
                                                <span
                                                    key={type}
                                                    className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <Button
                                            variant="outline"
                                            onClick={() => handlePageChange(1)}
                                            disabled={currentPage === 1}>
                                            First
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                handlePageChange(
                                                    Math.max(
                                                        1,
                                                        currentPage - 1,
                                                    ),
                                                )
                                            }
                                            disabled={currentPage === 1}>
                                            Previous
                                        </Button>
                                    </PaginationItem>
                                    {getPageNumbers(
                                        currentPage,
                                        totalPages,
                                    ).map((page, i) => (
                                        <PaginationItem key={i}>
                                            {page === "..." ? (
                                                <span className="px-4">
                                                    ...
                                                </span>
                                            ) : (
                                                <PaginationLink
                                                    onClick={() =>
                                                        handlePageChange(
                                                            page as number,
                                                        )
                                                    }
                                                    isActive={
                                                        currentPage === page
                                                    }>
                                                    {page}
                                                </PaginationLink>
                                            )}
                                        </PaginationItem>
                                    ))}
                                    <PaginationItem>
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                handlePageChange(
                                                    Math.min(
                                                        totalPages,
                                                        currentPage + 1,
                                                    ),
                                                )
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }>
                                            Next
                                        </Button>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <Button
                                            variant="outline"
                                            onClick={() =>
                                                handlePageChange(totalPages)
                                            }
                                            disabled={
                                                currentPage === totalPages
                                            }>
                                            Last
                                        </Button>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        )}
                    </div>
                ) : null}
            </div>

            <Dialog
                open={!!selectedResult}
                onOpenChange={() => setSelectedResult(null)}>
                <DialogContent className="max-w-3xl">
                    <DialogHeader>
                        <DialogTitle>
                            {selectedResult?.hierarchy_headings.section ||
                                selectedResult?.hierarchy_headings.part}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div className="text-sm space-y-2">
                            {selectedResult &&
                                findAgenciesForResult(selectedResult, agencies)
                                    .length > 0 && (
                                    <p>
                                        <span className="font-medium">
                                            Agency:
                                        </span>{" "}
                                        {findAgenciesForResult(
                                            selectedResult,
                                            agencies,
                                        ).join(", ")}
                                    </p>
                                )}
                            {selectedResult?.headings.title && (
                                <p>
                                    <span className="font-medium">Title:</span>{" "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: selectedResult.headings
                                                .title,
                                        }}
                                    />
                                </p>
                            )}
                            {selectedResult?.headings.part && (
                                <p>
                                    <span className="font-medium">Part:</span>{" "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: selectedResult.headings
                                                .part,
                                        }}
                                    />
                                </p>
                            )}
                            {selectedResult?.headings.section && (
                                <p>
                                    <span className="font-medium">
                                        Section:
                                    </span>{" "}
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: selectedResult.headings
                                                .section,
                                        }}
                                    />
                                </p>
                            )}
                            <p>
                                <span className="font-medium">
                                    {selectedResult?.ends_on
                                        ? "Was valid from"
                                        : "Valid since"}
                                    :
                                </span>{" "}
                                {selectedResult &&
                                    format(
                                        new Date(selectedResult.starts_on),
                                        "PP",
                                    )}
                                {selectedResult?.ends_on && (
                                    <span className="font-bold">
                                        {" "}
                                        -{" "}
                                        {format(
                                            new Date(selectedResult.ends_on),
                                            "PP",
                                        )}
                                    </span>
                                )}
                            </p>
                        </div>
                        {selectedResult && (
                            <div
                                className="text-sm text-gray-700 [&_strong]:font-bold"
                                dangerouslySetInnerHTML={{
                                    __html: selectedResult.full_text_excerpt,
                                }}
                            />
                        )}
                        <div className="flex gap-2">
                            {selectedResult?.change_types.map((type) => (
                                <span
                                    key={type}
                                    className="text-xs px-2 py-1 bg-gray-100 rounded-full">
                                    {type}
                                </span>
                            ))}
                        </div>
                        <div className="pt-4">
                            <a
                                href={`https://www.ecfr.gov/current/title-${selectedResult?.hierarchy.title}/part-${selectedResult?.hierarchy.part}${selectedResult?.hierarchy.section ? `#${selectedResult.hierarchy.section}` : ""}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline">
                                View on eCFR
                            </a>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}

"use client";

import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
} from "@/components/ui/pagination";
import { Agency, CfrCorrection } from "@/lib/services/ecfr";
import { ecfrApi } from "@/lib/services/ecfr";
import { findAgenciesForCorrection, buildEcfrUrl } from "@/lib/ecfr";
import { Button } from "@/components/ui/button";
import { format, parseISO } from "date-fns";
import { DateRange } from "react-day-picker";
import { subYears } from "date-fns";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const ITEMS_PER_PAGE = 10;
const TITLES = Array.from({ length: 50 }, (_, i) => i + 1);

interface TitleCorrectionsViewerProps {
    agencies: Agency[];
}

export function TitleCorrectionsViewer({
    agencies,
}: TitleCorrectionsViewerProps) {
    const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAgency, setSelectedAgency] = useState<string>("all");
    const [dateRange, setDateRange] = useState<DateRange | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    const { data: corrections = [], isLoading } = useQuery({
        queryKey: ["titleCorrections", selectedTitle],
        queryFn: () =>
            selectedTitle
                ? ecfrApi.getTitleCorrections(selectedTitle)
                : Promise.resolve([]),
        enabled: !!selectedTitle,
    });

    const dateRangeBounds = useMemo(() => {
        if (corrections.length === 0) return null;

        const dates = corrections.map((c) => new Date(c.error_corrected));
        return {
            from: new Date(Math.min(...dates.map((d) => d.getTime()))),
            to: new Date(Math.max(...dates.map((d) => d.getTime()))),
        };
    }, [corrections]);

    useEffect(() => {
        if (dateRangeBounds && !dateRange) {
            setDateRange(dateRangeBounds);
        }
    }, [dateRangeBounds, dateRange]);

    const filteredCorrections = corrections
        .filter((correction) => {
            const correctionDate = parseISO(correction.error_corrected);
            const isInDateRange =
                !dateRange ||
                (dateRange.from &&
                    dateRange.to &&
                    correctionDate >= dateRange.from &&
                    correctionDate <= dateRange.to);

            const isSelectedAgency =
                selectedAgency === "all" ||
                findAgenciesForCorrection(correction, agencies).some(
                    (agency) => agency === selectedAgency,
                );

            return isInDateRange && isSelectedAgency;
        })
        .sort((a, b) => {
            const comparison =
                new Date(b.error_corrected).getTime() -
                new Date(a.error_corrected).getTime();
            return sortDirection === "desc" ? comparison : -comparison;
        });

    const handleTitleChange = (value: string) => {
        setSelectedTitle(parseInt(value));
        setCurrentPage(1);
        setSelectedAgency("all");
        setDateRange(null);
    };

    const totalPages = Math.ceil(filteredCorrections.length / ITEMS_PER_PAGE);
    const paginatedCorrections = filteredCorrections.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    const agenciesWithCorrections = Array.from(
        new Set(
            corrections.flatMap((correction) =>
                findAgenciesForCorrection(correction, agencies),
            ),
        ),
    ).sort();

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Corrections by Title</CardTitle>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                            setSortDirection((prev) =>
                                prev === "desc" ? "asc" : "desc",
                            )
                        }
                        className="flex items-center gap-2">
                        <span>
                            Sort{" "}
                            {sortDirection === "desc" ? "Newest" : "Oldest"}{" "}
                            First
                        </span>
                        {sortDirection === "desc" ? (
                            <ArrowDownIcon className="h-4 w-4" />
                        ) : (
                            <ArrowUpIcon className="h-4 w-4" />
                        )}
                    </Button>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="flex gap-4">
                        <Select
                            value={selectedTitle?.toString() || ""}
                            onValueChange={handleTitleChange}>
                            <SelectTrigger className="w-[150px]">
                                <SelectValue placeholder="Select Title" />
                            </SelectTrigger>
                            <SelectContent>
                                {TITLES.map((title) => (
                                    <SelectItem
                                        key={title}
                                        value={title.toString()}>
                                        Title {title}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={selectedAgency}
                            onValueChange={setSelectedAgency}>
                            <SelectTrigger className="flex-1">
                                <SelectValue placeholder="Filter by agency" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    All Agencies
                                </SelectItem>
                                {agenciesWithCorrections.map((agency) => (
                                    <SelectItem
                                        key={agency}
                                        value={agency}>
                                        {agency}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="w-full">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {dateRange?.from ? (
                                    dateRange.to ? (
                                        <>
                                            {format(
                                                dateRange.from,
                                                "LLL dd, y",
                                            )}{" "}
                                            -{" "}
                                            {format(dateRange.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(dateRange.from, "LLL dd, y")
                                    )
                                ) : (
                                    <span>Pick a date range</span>
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent
                            className="w-auto p-0"
                            align="start">
                            <Calendar
                                initialFocus
                                mode="range"
                                defaultMonth={dateRange?.from}
                                selected={dateRange || undefined}
                                onSelect={(value) =>
                                    setDateRange(value || null)
                                }
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>
                </div>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="text-center py-8">Loading...</div>
                ) : paginatedCorrections.length > 0 ? (
                    <div className="space-y-6">
                        {paginatedCorrections.map((correction) => (
                            <div
                                key={correction.id}
                                className="border rounded-lg p-4 space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-medium">
                                            {correction.fr_citation}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {format(
                                                parseISO(
                                                    correction.error_occurred,
                                                ),
                                                "PP",
                                            )}{" "}
                                            -{" "}
                                            {format(
                                                parseISO(
                                                    correction.error_corrected,
                                                ),
                                                "PP",
                                            )}
                                        </p>
                                    </div>
                                    <div className="text-sm text-right">
                                        {findAgenciesForCorrection(
                                            correction,
                                            agencies,
                                        ).map((agency) => (
                                            <div
                                                key={agency}
                                                className={`${
                                                    selectedAgency === agency
                                                        ? "bg-accent font-medium"
                                                        : ""
                                                } px-2 py-1 rounded`}>
                                                {agency}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm">
                                    {correction.corrective_action}
                                </p>
                                <div className="space-y-1">
                                    {correction.cfr_references.map((ref, i) => (
                                        <a
                                            key={i}
                                            href={buildEcfrUrl(ref)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 hover:underline block">
                                            {ref.cfr_reference}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setCurrentPage((p) =>
                                                Math.max(1, p - 1),
                                            )
                                        }
                                        disabled={currentPage === 1}>
                                        Previous
                                    </Button>
                                </PaginationItem>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <PaginationItem key={i + 1}>
                                        <PaginationLink
                                            onClick={() =>
                                                setCurrentPage(i + 1)
                                            }
                                            isActive={currentPage === i + 1}>
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                ))}
                                <PaginationItem>
                                    <Button
                                        variant="outline"
                                        onClick={() =>
                                            setCurrentPage((p) =>
                                                Math.min(totalPages, p + 1),
                                            )
                                        }
                                        disabled={currentPage === totalPages}>
                                        Next
                                    </Button>
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground">
                        {selectedTitle ? "No corrections found" : ""}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

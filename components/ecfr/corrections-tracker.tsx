"use client";

import { useState, useMemo } from "react";
import { format, subMonths, parseISO } from "date-fns";
import { Calendar as CalendarIcon, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Agency, CfrCorrection } from "@/lib/services/ecfr";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { findAgenciesForCorrection, buildEcfrUrl } from "@/lib/ecfr";

interface CorrectionsTrackerProps {
    agencies: Agency[];
    corrections: CfrCorrection[];
    isLoading: boolean;
    date: DateRange | undefined;
    onDateChange: (date: DateRange | undefined) => void;
}

interface ChartDataItem {
    date: string;
    count: number;
    [key: string]: string | number;
}

interface MultiSelectProps {
    value: string[];
    onChange: (value: string[]) => void;
}

interface SelectedCorrection {
    date: string;
    corrections: CfrCorrection[];
}

export function CorrectionsTracker({
    agencies,
    corrections,
    isLoading,
    date,
    onDateChange,
}: CorrectionsTrackerProps) {
    const [selectedAgencies, setSelectedAgencies] = useState<string[]>([]);
    const [selectedPoint, setSelectedPoint] =
        useState<SelectedCorrection | null>(null);
    const [showOnlyCorrections, setShowOnlyCorrections] = useState(false);

    const hasActiveFilters = selectedAgencies.length > 0;

    const handleReset = () => {
        setSelectedAgencies([]);
    };

    const handleDateChange = (newDate: DateRange | undefined) => {
        onDateChange(newDate);
    };

    const getAgencyCounts = useMemo(() => {
        const counts: { [key: string]: number } = {};
        corrections.forEach((correction) => {
            const agencyNames = findAgenciesForCorrection(correction, agencies);
            agencyNames
                .filter((name) => !name.startsWith("Unknown Agency"))
                .forEach((name) => {
                    if (name.includes(",")) {
                        name.split(",").forEach((n) => {
                            const trimmed = n.trim();
                            counts[trimmed] = (counts[trimmed] || 0) + 1;
                        });
                    } else {
                        counts[name] = (counts[name] || 0) + 1;
                    }
                });
        });
        return counts;
    }, [corrections, agencies]);

    const filteredCorrections = corrections.filter((correction) => {
        const correctionDate = parseISO(correction.error_corrected);
        const isInDateRange =
            date?.from &&
            date?.to &&
            correctionDate >= date.from &&
            correctionDate <= date.to;

        const correctionAgencies = findAgenciesForCorrection(
            correction,
            agencies,
        );
        const individualAgencies = correctionAgencies.flatMap((agency) =>
            agency.includes(",")
                ? agency.split(",").map((a) => a.trim())
                : [agency],
        );

        const isSelectedAgency =
            selectedAgencies.length === 0 ||
            selectedAgencies.some((selected) =>
                individualAgencies.includes(selected),
            );

        return isInDateRange && isSelectedAgency;
    });

    const fillMissingDates = (data: ChartDataItem[]): ChartDataItem[] => {
        if (data.length === 0) return [];

        const filledData: ChartDataItem[] = [];
        const startDate = new Date(data[0].date);
        const endDate = new Date(data[data.length - 1].date);

        let currentDate = startDate;
        while (currentDate <= endDate) {
            const dateStr = format(currentDate, "MM/dd/yyyy");
            const existingData = data.find((item) => item.date === dateStr);

            if (existingData) {
                filledData.push(existingData);
            } else {
                filledData.push({
                    date: dateStr,
                    count: 0,
                    ...Object.fromEntries(
                        Array.from(new Set(data.flatMap(Object.keys)))
                            .filter((key) => key !== "date" && key !== "count")
                            .map((key) => [key, 0]),
                    ),
                });
            }

            currentDate = new Date(
                currentDate.setDate(currentDate.getDate() + 1),
            );
        }

        return filledData;
    };

    const processedChartData = useMemo(() => {
        const data = fillMissingDates(
            filteredCorrections
                .reduce((acc: ChartDataItem[], correction) => {
                    const date = format(
                        parseISO(correction.error_corrected),
                        "MM/dd/yyyy",
                    );
                    const agencyNames = findAgenciesForCorrection(
                        correction,
                        agencies,
                    );

                    const existing = acc.find((item) => item.date === date);
                    if (existing) {
                        existing.count++;
                        agencyNames.forEach((agencyName) => {
                            existing[agencyName] =
                                ((existing[agencyName] as number) || 0) + 1;
                        });
                    } else {
                        const newItem = { date, count: 1 } as ChartDataItem;
                        agencyNames.forEach((agencyName) => {
                            newItem[agencyName] = 1;
                        });
                        acc.push(newItem);
                    }

                    return acc;
                }, [])
                .sort(
                    (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime(),
                ),
        );

        return showOnlyCorrections
            ? data.filter((item) => item.count > 0)
            : data;
    }, [filteredCorrections, showOnlyCorrections, agencies]);

    const agenciesWithCorrections = useMemo(() => {
        const agencySet = new Set<string>();
        corrections.forEach((correction) => {
            const agencyNames = findAgenciesForCorrection(correction, agencies);
            agencyNames
                .filter((name) => !name.startsWith("Unknown Agency"))
                .forEach((name) => {
                    if (name.includes(",")) {
                        name.split(",").forEach((n) => agencySet.add(n.trim()));
                    } else {
                        agencySet.add(name);
                    }
                });
        });
        return Array.from(agencySet).sort();
    }, [corrections, agencies]);

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <CardTitle>Corrections Tracker</CardTitle>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">
                                        How to use:
                                    </h4>
                                    <p className="text-sm">
                                        Select a date range and filter by agency
                                        to view corrections. Click on any point
                                        in the graph to see detailed
                                        information. Hover over points to see
                                        quick summaries.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    {hasActiveFilters && (
                        <Button
                            variant="outline"
                            onClick={handleReset}
                            className="text-sm">
                            Reset Filters
                        </Button>
                    )}
                </div>
                <div className="flex gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                className="justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date?.from ? (
                                    date.to ? (
                                        <>
                                            {format(date.from, "LLL dd, y")} -{" "}
                                            {format(date.to, "LLL dd, y")}
                                        </>
                                    ) : (
                                        format(date.from, "LLL dd, y")
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
                                defaultMonth={date?.from}
                                selected={date}
                                onSelect={handleDateChange}
                                numberOfMonths={2}
                            />
                        </PopoverContent>
                    </Popover>

                    <Select
                        value={selectedAgencies[0] || ""}
                        onValueChange={(value) => {
                            if (selectedAgencies.includes(value)) {
                                setSelectedAgencies([]);
                            } else {
                                setSelectedAgencies([value]);
                            }
                        }}>
                        <SelectTrigger className="w-[280px]">
                            <SelectValue
                                placeholder={
                                    selectedAgencies.length > 0
                                        ? selectedAgencies[0]
                                        : "Filter by agency"
                                }
                            />
                        </SelectTrigger>
                        <SelectContent>
                            {agenciesWithCorrections.map((agencyName) => (
                                <SelectItem
                                    key={agencyName}
                                    value={agencyName}
                                    className={
                                        selectedAgencies.includes(agencyName)
                                            ? "bg-accent"
                                            : ""
                                    }>
                                    {agencyName} ({getAgencyCounts[agencyName]})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button
                        variant="outline"
                        onClick={() => setShowOnlyCorrections((prev) => !prev)}
                        className={showOnlyCorrections ? "bg-accent" : ""}>
                        {showOnlyCorrections
                            ? "Show All Days"
                            : "Show Only Corrections"}
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[400px]">
                    {filteredCorrections.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-muted-foreground">
                            No corrections for this date range
                        </div>
                    ) : (
                        <ResponsiveContainer
                            width="100%"
                            height="100%">
                            <LineChart
                                data={processedChartData}
                                onClick={(point) => {
                                    if (point.activePayload) {
                                        const date =
                                            point.activePayload[0].payload.date;
                                        const dateCorrections =
                                            filteredCorrections.filter(
                                                (c) =>
                                                    format(
                                                        parseISO(
                                                            c.error_corrected,
                                                        ),
                                                        "MM/dd/yyyy",
                                                    ) === date,
                                            );
                                        setSelectedPoint({
                                            date,
                                            corrections: dateCorrections,
                                        });
                                    }
                                }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis
                                    domain={[
                                        0,
                                        (dataMax: number) =>
                                            Math.max(
                                                1,
                                                Math.ceil(dataMax * 1.1),
                                            ),
                                    ]}
                                />
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (
                                            active &&
                                            payload &&
                                            payload.length
                                        ) {
                                            const data = payload[0]
                                                .payload as ChartDataItem;
                                            return (
                                                <div className="bg-white p-2 border rounded shadow">
                                                    <p className="font-medium">
                                                        {data.date}
                                                    </p>
                                                    {Object.entries(data)
                                                        .filter(
                                                            ([key, value]) =>
                                                                key !==
                                                                    "date" &&
                                                                key !==
                                                                    "count" &&
                                                                value !== 0,
                                                        )
                                                        .map(
                                                            ([
                                                                agency,
                                                                count,
                                                            ]) => (
                                                                <p
                                                                    key={agency}
                                                                    className="text-sm">
                                                                    {agency}:{" "}
                                                                    {count}
                                                                </p>
                                                            ),
                                                        )}
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="count"
                                    stroke="#8884d8"
                                    name="Total Corrections"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </CardContent>

            <Dialog
                open={selectedPoint !== null}
                onOpenChange={() => setSelectedPoint(null)}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>
                            Corrections for {selectedPoint?.date}
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        {selectedPoint?.corrections.map((correction, index) => (
                            <div
                                key={correction.id}
                                className="border-b pb-4 last:border-0">
                                <h4 className="font-medium mb-2">
                                    Correction {index + 1}
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <span className="font-medium">
                                            Action:
                                        </span>{" "}
                                        {correction.corrective_action}
                                    </p>
                                    <p>
                                        <span className="font-medium">
                                            Citation:
                                        </span>{" "}
                                        {correction.fr_citation}
                                    </p>
                                    <p>
                                        <span className="font-medium">
                                            Error Date:
                                        </span>{" "}
                                        {correction.error_occurred}
                                    </p>
                                    <p>
                                        <span className="font-medium">
                                            Corrected Date:
                                        </span>{" "}
                                        {correction.error_corrected}
                                    </p>
                                    <p>
                                        <span className="font-medium">
                                            References:
                                        </span>
                                    </p>
                                    <ul className="list-disc pl-5">
                                        {correction.cfr_references.map(
                                            (ref, i) => (
                                                <li key={i}>
                                                    <a
                                                        href={buildEcfrUrl(ref)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline">
                                                        {ref.cfr_reference}
                                                    </a>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </Card>
    );
}

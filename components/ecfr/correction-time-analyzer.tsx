"use client";

import { useState, useMemo } from "react";
import { format, subYears, parseISO } from "date-fns";
import { Calendar as CalendarIcon, Info } from "lucide-react";
import { DateRange } from "react-day-picker";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
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
import { Slider } from "@/components/ui/slider";
import {
    findAgenciesForCorrection,
    calculateCorrectionDays,
    buildEcfrUrl,
} from "@/lib/ecfr";

interface CorrectionTimeAnalyzerProps {
    agencies: Agency[];
    corrections: CfrCorrection[];
    isLoading: boolean;
    date: DateRange | undefined;
    onDateChange: (date: DateRange | undefined) => void;
}

interface ChartDataItem {
    citation: string;
    daysToCorrect: number;
    correction: CfrCorrection;
    agencies: string[];
}

export function CorrectionTimeAnalyzer({
    agencies,
    corrections,
    isLoading,
    date,
    onDateChange,
}: CorrectionTimeAnalyzerProps) {
    const [selectedAgencies, setSelectedAgencies] = useState<string[]>([]);
    const [selectedCorrection, setSelectedCorrection] =
        useState<CfrCorrection | null>(null);
    const [daysRange, setDaysRange] = useState<[number, number]>([0, 365]);

    const hasActiveFilters =
        selectedAgencies.length > 0 ||
        daysRange[0] !== 0 ||
        daysRange[1] !== 365;

    const handleReset = () => {
        setSelectedAgencies([]);
        setDaysRange([0, 365]);
    };

    const handleDateChange = (newDate: DateRange | undefined) => {
        onDateChange(newDate);
    };

    const filteredCorrections = useMemo(() => {
        return corrections.filter((correction) => {
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

            const daysToCorrect = calculateCorrectionDays(correction);
            const isInDaysRange =
                daysToCorrect >= daysRange[0] && daysToCorrect <= daysRange[1];

            return isInDateRange && isSelectedAgency && isInDaysRange;
        });
    }, [corrections, date, selectedAgencies, daysRange, agencies]);

    const chartData: ChartDataItem[] = useMemo(() => {
        return filteredCorrections
            .map((correction) => ({
                citation: correction.fr_citation,
                daysToCorrect: calculateCorrectionDays(correction),
                correction,
                agencies: findAgenciesForCorrection(correction, agencies),
            }))
            .sort((a, b) => a.daysToCorrect - b.daysToCorrect);
    }, [filteredCorrections, agencies]);

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

    const maxDays = useMemo(() => {
        return Math.max(...corrections.map(calculateCorrectionDays));
    }, [corrections]);

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

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <CardTitle>Correction Time Analysis</CardTitle>
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
                                        Analyze how long it takes for
                                        corrections to be fixed. Filter by
                                        agency, date range, and correction time.
                                        Click on bars to see correction details.
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
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4 flex-wrap">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-[300px]">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, "LLL dd, y")}{" "}
                                                - {format(date.to, "LLL dd, y")}
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
                                            selectedAgencies.includes(
                                                agencyName,
                                            )
                                                ? "bg-accent"
                                                : ""
                                        }>
                                        {agencyName} (
                                        {getAgencyCounts[agencyName]})
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium">
                            Days to Correct
                        </label>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Min:</span>
                                <input
                                    type="number"
                                    min={0}
                                    max={daysRange[1]}
                                    value={daysRange[0]}
                                    onChange={(e) =>
                                        setDaysRange([
                                            Math.min(
                                                parseInt(e.target.value) || 0,
                                                daysRange[1],
                                            ),
                                            daysRange[1],
                                        ])
                                    }
                                    className="w-24 h-9 rounded-md border border-input bg-background px-3 py-1"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm">Max:</span>
                                <input
                                    type="number"
                                    min={daysRange[0]}
                                    max={maxDays}
                                    value={daysRange[1]}
                                    onChange={(e) =>
                                        setDaysRange([
                                            daysRange[0],
                                            Math.max(
                                                parseInt(e.target.value) || 0,
                                                daysRange[0],
                                            ),
                                        ])
                                    }
                                    className="w-24 h-9 rounded-md border border-input bg-background px-3 py-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[400px] [&_.recharts-active-dot]:cursor-pointer">
                    {chartData.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-muted-foreground">
                            No corrections match the selected filters
                        </div>
                    ) : (
                        <ResponsiveContainer
                            width="100%"
                            height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="citation"
                                    angle={-45}
                                    textAnchor="end"
                                    height={100}
                                />
                                <YAxis
                                    label={{
                                        value: "Days to Correct",
                                        angle: -90,
                                        position: "insideLeft",
                                    }}
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
                                                        {data.citation}
                                                    </p>
                                                    <p className="text-sm">
                                                        Days to Correct:{" "}
                                                        {data.daysToCorrect}
                                                    </p>
                                                    <p className="text-sm font-medium mt-1">
                                                        Agencies:
                                                    </p>
                                                    {data.agencies.map(
                                                        (agency) => (
                                                            <p
                                                                key={agency}
                                                                className="text-sm">
                                                                {agency}
                                                            </p>
                                                        ),
                                                    )}
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Bar
                                    dataKey="daysToCorrect"
                                    fill="#8884d8"
                                    onClick={(data) =>
                                        setSelectedCorrection(data.correction)
                                    }
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </CardContent>

            <Dialog
                open={selectedCorrection !== null}
                onOpenChange={() => setSelectedCorrection(null)}>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Correction Details</DialogTitle>
                    </DialogHeader>
                    {selectedCorrection && (
                        <div className="space-y-4">
                            <div className="space-y-2 text-sm">
                                <div className="space-y-2 mb-4">
                                    <p className="font-medium">
                                        Responsible Agencies:
                                    </p>
                                    {findAgenciesForCorrection(
                                        selectedCorrection,
                                        agencies,
                                    ).map((agency) => (
                                        <p
                                            key={agency}
                                            className={`text-sm ${
                                                selectedAgencies.includes(
                                                    agency,
                                                )
                                                    ? "bg-accent font-medium"
                                                    : ""
                                            }`}>
                                            {agency}
                                        </p>
                                    ))}
                                </div>
                                <p>
                                    <span className="font-medium">Action:</span>{" "}
                                    {selectedCorrection.corrective_action}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Citation:
                                    </span>{" "}
                                    {selectedCorrection.fr_citation}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Error Date:
                                    </span>{" "}
                                    {selectedCorrection.error_occurred}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Corrected Date:
                                    </span>{" "}
                                    {selectedCorrection.error_corrected}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        Days to Correct:
                                    </span>{" "}
                                    {calculateCorrectionDays(
                                        selectedCorrection,
                                    )}
                                </p>
                                <p>
                                    <span className="font-medium">
                                        References:
                                    </span>
                                </p>
                                <ul className="list-disc pl-5">
                                    {selectedCorrection.cfr_references.map(
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
                    )}
                </DialogContent>
            </Dialog>
        </Card>
    );
}

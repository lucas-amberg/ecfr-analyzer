import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { ecfrApi } from "@/lib/services/ecfr";
import type { Agency } from "@/lib/services/ecfr";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    agency: Agency;
    wordCount: number;
};

export function AgencyEfficiencyScore({ agency, wordCount }: Props) {
    const { data: corrections, isLoading: isLoadingCorrections } = useQuery({
        queryKey: ["corrections", agency.slug],
        queryFn: async () => {
            const tenYearsAgo = new Date();
            tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
            const date = tenYearsAgo.toISOString().split("T")[0];

            // Don't go before 2000
            if (tenYearsAgo.getFullYear() < 2000) {
                tenYearsAgo.setFullYear(2000);
            }

            const allCorrections = await Promise.all(
                agency.cfr_references.map(async (ref) => {
                    const titleCorrections = await ecfrApi.getTitleCorrections(
                        ref.title,
                    );
                    return titleCorrections.filter((correction) =>
                        correction.cfr_references.some(
                            (cRef) => cRef.hierarchy.chapter === ref.chapter,
                        ),
                    );
                }),
            );

            return Array.from(
                new Set(allCorrections.flat().map((c) => JSON.stringify(c))),
            ).map((c) => JSON.parse(c));
        },
    });

    const metrics = useMemo(() => {
        if (!corrections) return null;

        const totalChapters = agency.cfr_references.length;
        const wordsPerChapter = wordCount / totalChapters;
        const wordScore = Math.min(100, (wordsPerChapter / 20000) * 100);

        if (corrections.length === 0) {
            return {
                efficiencyScore: wordScore,
                wordsPerChapter,
                correctionCount: 0,
                wordScore,
                timeScore: 0,
                hasCorrections: false,
                noCorrections: true,
            };
        }

        const correctionTimes = corrections.map((correction) => {
            const occurred = new Date(correction.error_occurred);
            const corrected = new Date(correction.error_corrected);
            return (
                (corrected.getTime() - occurred.getTime()) /
                (1000 * 60 * 60 * 24)
            );
        });

        const avgCorrectionTime =
            correctionTimes.length > 0
                ? correctionTimes.reduce((a, b) => a + b, 0) /
                  correctionTimes.length
                : 0;

        const timeScore = Math.min(100, (avgCorrectionTime / 30) * 100);
        const efficiencyScore = (timeScore + wordScore) / 2;

        return {
            efficiencyScore,
            avgCorrectionTime,
            wordsPerChapter,
            correctionCount: corrections.length,
            timeScore,
            wordScore,
            hasCorrections: true,
            correctionHistory: corrections
                .map((c) => ({
                    date: c.error_corrected,
                    timeToFix:
                        (new Date(c.error_corrected).getTime() -
                            new Date(c.error_occurred).getTime()) /
                        (1000 * 60 * 60 * 24),
                }))
                .sort(
                    (a, b) =>
                        new Date(a.date).getTime() - new Date(b.date).getTime(),
                ),
        };
    }, [corrections, agency, wordCount]);

    const [selectedCorrection, setSelectedCorrection] = useState<any>(null);

    const handlePointClick = (data: any) => {
        if (!data || !data.payload) return;
        setSelectedCorrection(data.payload);
    };

    if (isLoadingCorrections) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Agency Efficiency Score</CardTitle>
                    <CardDescription>
                        Loading efficiency data...
                    </CardDescription>
                </CardHeader>
            </Card>
        );
    }

    if (!metrics) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Agency Efficiency Score</CardTitle>
                    <CardDescription>
                        No efficiency data available
                    </CardDescription>
                </CardHeader>
            </Card>
        );
    }

    if ("noCorrections" in metrics) {
        return (
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Agency Efficiency Score</CardTitle>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">
                                        About the Efficiency Score
                                    </h4>
                                    <p className="text-sm">
                                        This score is based on content
                                        complexity:
                                    </p>
                                    <ul className="text-sm list-disc pl-4 space-y-1">
                                        <li>
                                            <span className="font-medium">
                                                Complexity Score:
                                            </span>{" "}
                                            Based on words per chapter (20,000
                                            words is the benchmark)
                                        </li>
                                    </ul>
                                    <p className="text-sm text-gray-500">
                                        Lower scores indicate better efficiency.
                                        No corrections were needed in the last
                                        10 years.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <CardDescription>
                        Based on content complexity (No corrections needed in 10
                        years)
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold">
                                {metrics.efficiencyScore.toFixed(1)}
                            </div>
                            <div className="text-sm text-gray-500">
                                Overall Score (lower is better)
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                0
                            </div>
                            <div className="text-sm text-gray-500">
                                Corrections Needed
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Score Breakdown</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span>Words per Chapter:</span>
                                <span>
                                    {Math.round(
                                        metrics.wordsPerChapter,
                                    ).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Complexity Score:</span>
                                <span>{metrics.wordScore.toFixed(1)}/100</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle>Agency Efficiency Score</CardTitle>
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Info className="h-4 w-4 text-gray-400 cursor-help" />
                            </HoverCardTrigger>
                            <HoverCardContent className="w-80">
                                <div className="space-y-2">
                                    <h4 className="font-semibold">
                                        About the Efficiency Score
                                    </h4>
                                    <p className="text-sm">
                                        {metrics.hasCorrections
                                            ? "This score combines two key metrics:"
                                            : "This score is based on content complexity:"}
                                    </p>
                                    <ul className="text-sm list-disc pl-4 space-y-1">
                                        {metrics.hasCorrections && (
                                            <li>
                                                <span className="font-medium">
                                                    Time Score:
                                                </span>{" "}
                                                How quickly the agency fixes
                                                errors (30 days is the
                                                benchmark)
                                            </li>
                                        )}
                                        <li>
                                            <span className="font-medium">
                                                Complexity Score:
                                            </span>{" "}
                                            Based on words per chapter (20,000
                                            words is the benchmark)
                                        </li>
                                    </ul>
                                    {metrics.hasCorrections && (
                                        <p className="text-sm">
                                            The graph shows correction history
                                            over time. Click any point to see
                                            detailed correction information.
                                        </p>
                                    )}
                                    <p className="text-sm text-gray-500">
                                        Lower scores indicate better efficiency.
                                    </p>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    </div>
                    <CardDescription>
                        Based on{" "}
                        {metrics.hasCorrections ? "correction speed and " : ""}
                        content complexity
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold">
                                {metrics.efficiencyScore.toFixed(1)}
                            </div>
                            <div className="text-sm text-gray-500">
                                Overall Score (lower is better)
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold">
                                {metrics.correctionCount}
                            </div>
                            <div className="text-sm text-gray-500">
                                Corrections in Last 10 Years
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-semibold">Score Breakdown</h3>
                        <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <span>Average Correction Time:</span>
                                <span>
                                    {metrics.avgCorrectionTime.toFixed(1)} days
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Words per Chapter:</span>
                                <span>
                                    {Math.round(
                                        metrics.wordsPerChapter,
                                    ).toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Time Score:</span>
                                <span>{metrics.timeScore.toFixed(1)}/100</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Complexity Score:</span>
                                <span>{metrics.wordScore.toFixed(1)}/100</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-[200px]">
                        <ResponsiveContainer
                            width="100%"
                            height="100%">
                            <LineChart data={metrics.correctionHistory}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="date"
                                    tickFormatter={(date) =>
                                        new Date(date).toLocaleDateString()
                                    }
                                />
                                <YAxis
                                    label={{
                                        value: "Days to Fix",
                                        angle: -90,
                                        position: "insideLeft",
                                    }}
                                />
                                <Tooltip
                                    labelFormatter={(date) =>
                                        new Date(date).toLocaleDateString()
                                    }
                                    formatter={(value: number) => [
                                        `${value.toFixed(1)} days`,
                                        "Time to Fix",
                                    ]}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="timeToFix"
                                    stroke="#4f46e5"
                                    dot={{ r: 4, strokeWidth: 2 }}
                                    onClick={handlePointClick}
                                    cursor="pointer"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            <Dialog
                open={!!selectedCorrection}
                onOpenChange={() => setSelectedCorrection(null)}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Correction Details</DialogTitle>
                        <DialogDescription>
                            Details about this regulatory correction
                        </DialogDescription>
                    </DialogHeader>
                    {selectedCorrection && (
                        <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="font-medium text-sm">
                                        Error Occurred
                                    </div>
                                    <div>
                                        {new Date(
                                            selectedCorrection.error_occurred,
                                        ).toLocaleDateString()}
                                    </div>
                                </div>
                                <div>
                                    <div className="font-medium text-sm">
                                        Error Corrected
                                    </div>
                                    <div>
                                        {new Date(
                                            selectedCorrection.error_corrected,
                                        ).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="font-medium text-sm">
                                    Error Description
                                </div>
                                <div className="mt-1 text-sm">
                                    {selectedCorrection.error_description}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium text-sm">
                                    Corrective Action
                                </div>
                                <div className="mt-1 text-sm">
                                    {selectedCorrection.corrective_action}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium text-sm">
                                    Federal Register Citation
                                </div>
                                <div className="mt-1 text-sm">
                                    {selectedCorrection.fr_citation}
                                </div>
                            </div>
                            <div>
                                <div className="font-medium text-sm">
                                    Time to Fix
                                </div>
                                <div className="mt-1 text-sm">
                                    {Math.round(
                                        (new Date(
                                            selectedCorrection.error_corrected,
                                        ).getTime() -
                                            new Date(
                                                selectedCorrection.error_occurred,
                                            ).getTime()) /
                                            (1000 * 60 * 60 * 24),
                                    )}{" "}
                                    days
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
}

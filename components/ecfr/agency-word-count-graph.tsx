import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AgencyWordCount = {
    slug: string;
    display_name: string;
    word_count: number;
};

export function AgencyWordCountGraph() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");
    const [chartType, setChartType] = useState<"bar" | "pie">("bar");

    const { data: wordCounts } = useQuery({
        queryKey: ["agencyWordCounts"],
        queryFn: async () => {
            const response = await fetch("/api/word-count/all");
            if (!response.ok) throw new Error("Failed to fetch word counts");
            return response.json() as Promise<AgencyWordCount[]>;
        },
    });

    const filteredData = wordCounts
        ?.filter((agency) =>
            agency.display_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase()),
        )
        .sort((a, b) => a.word_count - b.word_count);

    const handleBarClick = (data: any) => {
        router.push(`/agencies/${data.slug}`);
    };

    const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#93c5fd", "#bfdbfe"];

    const renderChart = () => {
        if (chartType === "bar") {
            const showLabels = filteredData && filteredData.length < 40;

            return (
                <BarChart
                    data={filteredData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 60,
                        bottom: showLabels ? 100 : 40,
                    }}>
                    <XAxis
                        dataKey="display_name"
                        angle={-45}
                        textAnchor="end"
                        height={showLabels ? 100 : 40}
                        interval={0}
                        tick={showLabels ? { fontSize: 10 } : false}
                        tickMargin={5}
                        label={{
                            value: "Agency",
                            position: "bottom",
                            offset: 0,
                        }}
                    />
                    <YAxis
                        width={80}
                        tickFormatter={(value) => value.toLocaleString()}
                    />
                    <Tooltip
                        formatter={(value: number) => value.toLocaleString()}
                        labelFormatter={(label) => `Agency: ${label}`}
                    />
                    <Bar
                        name="Total Word Count"
                        dataKey="word_count"
                        fill="#4f46e5"
                        onClick={handleBarClick}
                        cursor="pointer"
                    />
                </BarChart>
            );
        }

        const showLabels = filteredData && filteredData.length < 40;

        return (
            <PieChart>
                <Pie
                    data={filteredData}
                    dataKey="word_count"
                    nameKey="display_name"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    label={
                        showLabels
                            ? ({ display_name }) => display_name
                            : undefined
                    }
                    labelLine={showLabels}
                    onClick={handleBarClick}
                    cursor="pointer">
                    {filteredData?.map((_, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip
                    formatter={(value: number) => value.toLocaleString()}
                    labelFormatter={(label) => `Agency: ${label}`}
                />
            </PieChart>
        );
    };

    return (
        <Card className="w-full">
            <CardHeader>
                <div className="flex justify-between items-center">
                    <CardTitle>Agency Word Counts</CardTitle>
                    <div className="flex gap-2">
                        <Button
                            variant={
                                chartType === "bar" ? "default" : "outline"
                            }
                            onClick={() => setChartType("bar")}
                            size="sm">
                            Bar Chart
                        </Button>
                        <Button
                            variant={
                                chartType === "pie" ? "default" : "outline"
                            }
                            onClick={() => setChartType("pie")}
                            size="sm">
                            Pie Chart
                        </Button>
                    </div>
                </div>
                <Input
                    placeholder="Search agencies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />
            </CardHeader>
            <CardContent>
                <div className="h-[400px]">
                    <ResponsiveContainer
                        width="100%"
                        height="100%">
                        {renderChart()}
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}

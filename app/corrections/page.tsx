"use client";

import { useQuery } from "@tanstack/react-query";
import { format, subYears } from "date-fns";
import { useState } from "react";
import { CorrectionsTracker } from "@/components/ecfr/corrections-tracker";
import { ecfrApi } from "@/lib/services/ecfr";
import { CorrectionTimeAnalyzer } from "@/components/ecfr/correction-time-analyzer";
import { DateRange } from "react-day-picker";
import { TitleCorrectionsViewer } from "@/components/ecfr/title-corrections-viewer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CorrectionsPage() {
    const defaultDate = {
        from: subYears(new Date(new Date().setHours(0, 0, 0, 0)), 1),
        to: new Date(new Date().setHours(0, 0, 0, 0)),
    };

    const [dateRange, setDateRange] = useState<DateRange>(defaultDate);

    const { data: agencies = [], isLoading: isLoadingAgencies } = useQuery({
        queryKey: ["agencies"],
        queryFn: ecfrApi.getAgencies,
    });

    const {
        data: corrections = [],
        isLoading: isLoadingCorrections,
        refetch,
    } = useQuery({
        queryKey: ["corrections", dateRange.from],
        queryFn: () =>
            ecfrApi.getCorrections(format(dateRange.from!, "yyyy-MM-dd")),
        enabled: !!dateRange.from,
    });

    const handleDateChange = (newDate: DateRange | undefined) => {
        if (newDate?.from) {
            setDateRange(newDate);
            refetch();
        }
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
                    <h1 className="text-3xl font-bold">
                        eCFR Corrections Analysis
                    </h1>
                </div>
            </div>

            <div className="w-full max-w-7xl mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CorrectionsTracker
                        agencies={agencies}
                        corrections={corrections}
                        isLoading={isLoadingAgencies || isLoadingCorrections}
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />
                    <CorrectionTimeAnalyzer
                        agencies={agencies}
                        corrections={corrections}
                        isLoading={isLoadingAgencies || isLoadingCorrections}
                        date={dateRange}
                        onDateChange={handleDateChange}
                    />
                    <div className="md:col-span-2">
                        <TitleCorrectionsViewer agencies={agencies} />
                    </div>
                </div>
            </div>
        </div>
    );
}

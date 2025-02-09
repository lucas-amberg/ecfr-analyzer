"use client";

import { useQuery } from "@tanstack/react-query";
import { format, subMonths } from "date-fns";
import { useState } from "react";
import { CorrectionsTracker } from "@/components/ecfr/corrections-tracker";
import { ecfrApi } from "@/lib/services/ecfr";

export default function Home() {
    const [date, setDate] = useState<Date>(subMonths(new Date(), 1));

    const { data: agencies = [], isLoading: isLoadingAgencies } = useQuery({
        queryKey: ["agencies"],
        queryFn: ecfrApi.getAgencies,
    });

    const {
        data: corrections = [],
        isLoading: isLoadingCorrections,
        refetch,
    } = useQuery({
        queryKey: ["corrections", date],
        queryFn: () => ecfrApi.getCorrections(format(date, "yyyy-MM-dd")),
        enabled: true,
    });

    console.log("corrections page", corrections);
    console.log(
        "agencies",
        agencies.filter(
            (a) =>
                a.cfr_references.length > 0 &&
                a.cfr_references.filter((r) => r.title === 15).length > 0,
        ),
    );

    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen w-screen">
            <div className="flex items-center justify-start pl-10 pb-3 w-screen border-b-2 border-gray-100">
                <h1 className="text-3xl font-bold">eCFR Analyzer</h1>
            </div>

            <div className="w-full max-w-7xl mt-8">
                <CorrectionsTracker
                    agencies={agencies}
                    corrections={corrections}
                    isLoading={isLoadingAgencies || isLoadingCorrections}
                    onDateChange={(date) => {
                        if (date?.from) {
                            setDate(date.from);
                            refetch();
                        }
                    }}
                />
            </div>
        </div>
    );
}

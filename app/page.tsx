import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen w-screen">
            <div className="flex items-center justify-start pl-10 pb-3 w-screen border-b-2 border-gray-100">
                <h1 className="text-3xl font-bold">eCFR Analyzer</h1>
            </div>

            <div className="w-full max-w-4xl mt-16 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Corrections Analysis</CardTitle>
                        <CardDescription>
                            Analyze corrections made to the eCFR with various
                            tools:
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Track corrections over time with interactive
                                charts
                            </li>
                            <li>Analyze correction response times by agency</li>
                            <li>
                                Browse corrections by title with detailed
                                filtering
                            </li>
                            <li>View correction details and references</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/corrections">
                                <Button>View Corrections Analysis</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

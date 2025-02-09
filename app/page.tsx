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

            <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Corrections Analysis</CardTitle>
                        <CardDescription>
                            Analyze corrections made to the eCFR with various
                            tools
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

                <Card>
                    <CardHeader>
                        <CardTitle>eCFR Search</CardTitle>
                        <CardDescription>
                            Search the Electronic Code of Federal Regulations
                            with advanced filters
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Full-text search across all titles</li>
                            <li>Filter by agency and date ranges</li>
                            <li>Track content modifications</li>
                            <li>Direct links to official eCFR sections</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/search">
                                <Button>Open Search</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Title Data</CardTitle>
                        <CardDescription>
                            Browse and analyze the structure of eCFR titles
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li>View detailed title information</li>
                            <li>Access title structure and hierarchy</li>
                            <li>Track amendment and issue dates</li>
                            <li>Monitor content updates</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/title-data">
                                <Button>View Title Data</Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

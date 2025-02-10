import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Building2, BookOpen, Search, FileText } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start p-4 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center mb-12">
                    eCFR Explorer
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/title-data">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex items-center gap-2">
                                        <BookOpen className="h-5 w-5" />
                                        Title Data
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    Browse and explore eCFR titles and their
                                    structure
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>View title structure and content</li>
                                    <li>Navigate through sections and parts</li>
                                    <li>Read section content inline</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/agencies">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex items-center gap-2">
                                        <Building2 className="h-5 w-5" />
                                        Federal Agencies
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    Explore federal agencies and their
                                    regulations
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Browse all federal agencies</li>
                                    <li>View agency hierarchies</li>
                                    <li>See related titles and chapters</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/corrections">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-5 w-5" />
                                        Corrections Analysis
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    Analyze corrections made to the eCFR with
                                    various tools
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Track corrections over time</li>
                                    <li>Analyze correction response times</li>
                                    <li>Browse corrections by title</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>

                    <Link href="/search">
                        <Card className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>
                                    <div className="flex items-center gap-2">
                                        <Search className="h-5 w-5" />
                                        eCFR Search
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    Search the Electronic Code of Federal
                                    Regulations
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Full-text search across all titles</li>
                                    <li>Filter by agency and date</li>
                                    <li>Advanced search options</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            </div>
        </div>
    );
}

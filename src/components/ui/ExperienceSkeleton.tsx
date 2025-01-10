import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function ExperienceSkeleton() {
    return (
        <div className="py-4 px-4 w-full h-full">
            <Button
                className="bg-black hover:bg-gray-800 border-gray-800 border h-full w-full [&_svg]:size-10"
                variant="default"
            >
                <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex flex-col items-start md:flex-row md:items-center justify-between w-full py-4 px-4">
                        <div className="flex flex-row items-center justify-center">
                            <div>
                                <Skeleton className="h-10 w-10 bg-slate-600 rounded-full" />
                            </div>
                            <div className="font-bold text-xl text-wrap text-left px-4 py-2">
                                <Skeleton className="h-8 w-[250px] bg-slate-600" />
                            </div>
                        </div>
                        <div className="font-bold text-sm text-right py-2 min-w-[160px]">
                            <Skeleton className="h-6 w-full bg-slate-600" />
                        </div>
                    </div>
                    <div className="text-sm text-wrap text-left w-full px-4 py-4">
                        <Skeleton className="h-6 w-full bg-slate-600" />
                    </div>
                </div>
            </Button>
        </div>
    );
}

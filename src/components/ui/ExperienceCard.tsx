import React from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { JobExperience } from "@/lib/type";
import { CircleHelp } from "lucide-react";
import ArmitageComponent from "../svg/Armitage";
import NRIComponent from "../svg/NRI";

interface ExperienceCardProps {
    jobInfo: JobExperience;
}

const IconComponent: { [key: string]: React.JSX.Element } = {
    NRI: <NRIComponent className="fill-[#005CAB] h-[35px] w-[68px]" />,
    Armitage: <ArmitageComponent className="fill-green-500 w-16 h-16" />,
};

export default function ExperienceCard({ jobInfo }: ExperienceCardProps) {
    const CompanyIcon =
        jobInfo.icon && IconComponent[jobInfo.icon] ? (
            IconComponent[jobInfo.icon]
        ) : (
            <CircleHelp className="stroke-red-300 w-16 h-16" />
        );

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className="bg-black hover:bg-gray-800 border-gray-800 border h-full w-full [&_svg]:size-10"
                    variant="default"
                >
                    <div className="flex flex-col items-start justify-center w-full">
                        <div className="flex flex-col items-start md:flex-row md:items-center justify-between w-full py-4 px-4">
                            <div className="flex flex-row items-center justify-center">
                                <div>{CompanyIcon}</div>
                                <div className="font-bold text-xl text-wrap text-left px-4 py-2">
                                    {jobInfo.job_title} at {jobInfo.company}
                                </div>
                            </div>
                            <div className="font-bold text-sm text-right py-2 min-w-[160px]">
                                {jobInfo.time_period}
                            </div>
                        </div>
                        <div className="text-sm text-wrap text-left w-full px-4 py-4">
                            {jobInfo.description}
                        </div>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[95%] md:max-w-[720px] dark text-muted-foreground font-[family-name:var(--font-sora)]">
                <DialogHeader>
                    <DialogTitle>
                        <div className="flex flex-col items-start md:flex-row md:items-center justify-between w-full py-4 px-4">
                            <div className="flex flex-row items-center justify-center">
                                <div>{CompanyIcon}</div>
                                <div className="font-bold text-sm md:text-xl text-wrap text-left px-4 py-2">
                                    {jobInfo.job_title}
                                    <br />
                                    at {jobInfo.company}
                                </div>
                            </div>
                            <div className="font-bold text-xs md:text-sm text-left md:text-right py-2 min-w-[160px]">
                                {jobInfo.time_period}
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm">
                        {jobInfo.achievement?.map(
                            (item: string, idx: number) => {
                                return <li key={idx}>{item}</li>;
                            }
                        )}
                    </ul>
                </div>
                <DialogFooter></DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

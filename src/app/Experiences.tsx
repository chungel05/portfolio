"use client";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ExperienceCard from "@/components/ui/ExperienceCard";
import ExperienceSkeleton from "@/components/ui/ExperienceSkeleton";
import { SelectExperience } from "@/lib/supabase/experience";
import { JobExperience } from "@/lib/type";

export default function Experiences() {
    const [experiences, setExperiences] = useState<JobExperience[]>([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await SelectExperience();
            if (error) {
                toast({
                    title: "Oh! Something went wrong.",
                    description: error,
                    className: "dark",
                });
            } else {
                if (data) {
                    setExperiences(data);
                }
                setLoading(false);
            }
        }
        fetchData();
    }, [toast]);

    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-between h-full w-full md:max-w-[1280px] bg-black">
                <div>
                    <p className="text-white text-5xl py-12">
                        My <span className="font-extrabold">Experiences</span>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    {loading && <ExperienceSkeleton />}
                    {!loading &&
                        experiences
                            .sort((x, y) => x.seq - y.seq)
                            .map((item: JobExperience, idx: number) => {
                                return (
                                    <div
                                        key={idx}
                                        className="w-full py-4 px-4"
                                    >
                                        <ExperienceCard jobInfo={item} />
                                    </div>
                                );
                            })}
                </div>
            </div>
        </div>
    );
}

import ExperienceCard from "@/components/ui/ExperienceCard";
import experiences from "@/data/data";
import { JobExperience } from "@/lib/type";

export default function Experiences() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-between h-full w-full md:max-w-[1280px] bg-black">
                <div>
                    <p className="text-white text-5xl py-12">
                        My <span className="font-extrabold">Experiences</span>
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    {experiences.map((item: JobExperience, idx: number) => {
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

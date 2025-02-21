import SkillCard from "@/components/ui/SkillCard";
import { SiGit } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiAmazondocumentdb } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { GrServices } from "react-icons/gr";
import { TbDatabase } from "react-icons/tb";
import { SiRabbitmq } from "react-icons/si";

export default function Skills() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center h-full w-full  md:max-w-[1280px]">
                <div>
                    <p className="text-5x text-5xl py-12">
                        My <span className="font-extrabold">Skills</span>
                    </p>
                </div>
                <div className="grid grid-cols-2 place-items-center md:grid-cols-5 py-8 w-full">
                    <div className="py-4">
                        <SkillCard label="Git">
                            <SiGit className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="C#">
                            <SiDotnet className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="TypeScript">
                            <SiTypescript className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="SQL">
                            <TbDatabase className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="NoSQL">
                            <SiAmazondocumentdb className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="React">
                            <SiReact className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="Node.JS">
                            <SiNodedotjs className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="Microservice">
                            <GrServices className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="RabbitMQ">
                            <SiRabbitmq className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="Docker">
                            <SiDocker className="h-5 w-5" />
                        </SkillCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

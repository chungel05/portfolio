import SkillCard from "@/components/ui/SkillCard";
import { SiGit } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";

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
                        <SkillCard label="JavaScript">
                            <SiJavascript className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="TypeScript">
                            <SiTypescript className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="Node.JS">
                            <SiNodedotjs className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="React">
                            <SiReact className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="HTML">
                            <SiHtml5 className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="Tailwind">
                            <SiTailwindcss className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="SQL">
                            <TbSql className="h-5 w-5" />
                        </SkillCard>
                    </div>
                    <div className="py-4">
                        <SkillCard label="MongoDB">
                            <SiMongodb className="h-5 w-5" />
                        </SkillCard>
                    </div>
                </div>
            </div>
        </div>
    );
}

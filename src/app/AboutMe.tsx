import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import nextConfig from "../../next.config";

export default function AboutMe() {
    return (
        <div className="w-full flex flex-col md:flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-between h-[400px] w-full max-w-[400px] px-4 py-4">
                <div>
                    <Image
                        src={`${nextConfig.basePath}/IMG_4507_292x292.jpg`}
                        alt="myself"
                        width={200}
                        height={200}
                        className=" border-gray-300 border-[4px] rounded-full"
                    />
                </div>
                <div className="flex flex-col items-start justify-between w-full px-4">
                    <p className="text-xl md:text-3xl py-2">
                        <span>Hello, I am </span>
                        <span className="font-extrabold">Chung.</span>
                    </p>
                    <p className="text-xl md:text-3xl py-2">
                        <span className="font-extrabold">Software </span>
                        <span className="font-extrabold">Engineer</span>
                    </p>

                    <Link
                        href="https://drive.google.com/file/d/1a1Pr40CLq23g4mTJdwcUfiPDROAnI47g/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2"
                    >
                        <Button
                            className="hover:bg-white hover:text-black bg-black border-black border-2"
                            variant="default"
                            size="default"
                            aria-label="Resume"
                        >
                            Resume
                            <Download className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-start h-[400px] w-full md:max-w-[880px] px-4 bg-black">
                <p className="text-5xl text-white py-12">
                    About <span className="font-extrabold">Me</span>
                </p>
                <p className="text-sm text-gray-400 py-4 max-w-[600px]">
                    A highly skilled and self-motivated software engineer with
                    over <span className="font-bold">8 years</span> of
                    experience in the IT industry.
                    <br />
                    Proficient in both front-end and back-end development, with
                    a strong focus on the React library and large-scale API
                    architecture.
                    <br />
                    With more than 6 years of hands-on project experience
                    collaborating with stakeholders, I am committed to
                    delivering high-quality, user-centric solutions.
                </p>
            </div>
        </div>
    );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ui/ContactForm";
import { SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";

export default function ContactMe() {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <div className="flex flex-col-reverse md:flex-row items-start justify-center w-full py-16">
                <div className="flex flex-col items-start justify-center w-full max-w-[640px] px-4 py-4">
                    <ContactForm />
                </div>
                <div className="flex flex-col items-start justify-center w-full md:max-w-[640px] px-4">
                    <div className="py-8">
                        <div>
                            <p className="text-5xl font-bold py-4 px-4">
                                Let&apos;s talk with
                                <span className="font-extrabold"> ME</span>
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 py-4 px-4">
                                Feel free to contact with me and make a new
                                friend!
                            </p>
                        </div>
                    </div>
                    <div className="space-x-2 py-4 px-4 hidden md:flex">
                        <Link
                            href="mailto:chungzz0301@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="hover:bg-white hover:text-black bg-black border-black border-2"
                                variant="default"
                                size="icon"
                                aria-label="Mail"
                            >
                                <Mail className="h-5 w-5" />
                            </Button>
                        </Link>
                        <Link
                            href="https://linkedin.com/in/chungzz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                className="hover:bg-white hover:text-black bg-black border-black border-2"
                                variant="default"
                                size="icon"
                                aria-label="Linkedin"
                            >
                                <SiLinkedin className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

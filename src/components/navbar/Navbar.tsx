"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Download } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Navbar() {
    return (
        <nav className="sticky top-0 backdrop-blur-md bg-white/30">
            <div className="flex flex-row items-start justify-center py-[24px]">
                <div className="flex flex-row items-center justify-between py-0 w-full max-w-[1280px] h-[56px]">
                    <Link
                        href="/"
                        className="text-xl px-4 font-extrabold hover:text-blue-400 transition duration-300 ease-in-out"
                    >
                        CHUNGZZ
                    </Link>

                    <div className="hidden md:flex items-center justify-center">
                        <NavLinks />
                    </div>

                    <div className="flex items-center px-4">
                        <div className="hidden md:flex">
                            <Link
                                href="https://github.com/chungel05"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="GitHub"
                                >
                                    <SiGithub className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link
                                href="https://linkedin.com/in/chungzz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Linkedin"
                                >
                                    <SiLinkedin className="h-5 w-5" />
                                </Button>
                            </Link>
                            <Link
                                href="https://drive.google.com/file/d/1a1Pr40CLq23g4mTJdwcUfiPDROAnI47g/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    aria-label="Resume"
                                >
                                    <Download className="h-5 w-5" />
                                </Button>
                            </Link>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="md:hidden"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetTitle></SheetTitle>
                            <SheetDescription></SheetDescription>
                            <SheetContent side="right">
                                <div className="flex px-4">
                                    <Link
                                        href="https://github.com/chungel05"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            aria-label="GitHub"
                                        >
                                            <SiGithub className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link
                                        href="https://linkedin.com/in/chungzz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Linkedin"
                                        >
                                            <SiLinkedin className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                    <Link
                                        href="https://drive.google.com/file/d/1a1Pr40CLq23g4mTJdwcUfiPDROAnI47g/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            aria-label="Resume"
                                        >
                                            <Download className="h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                                <nav className="flex flex-col items-start justify-center py-4 font-[family-name:var(--font-sora)]">
                                    <NavLinks />
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLinks() {
    return (
        <>
            <Link
                href="#about"
                className="text-sm text-center font-medium px-4 py-2 md:py-0 hover:text-blue-400 transition duration-300 ease-in-out"
            >
                About Me
            </Link>
            <Link
                href="#skills"
                className="text-sm text-center font-medium px-4 py-2 md:py-0 hover:text-blue-400 transition duration-300 ease-in-out"
            >
                Skills
            </Link>
            <Link
                href="#experiences"
                className="text-sm text-center font-medium px-4 py-2 md:py-0 hover:text-blue-400 transition duration-300 ease-in-out"
            >
                Experiences
            </Link>
            <Link
                href="#contact"
                className="text-sm text-center font-medium px-4 py-2 md:py-0 hover:text-blue-400 transition duration-300 ease-in-out"
            >
                Contact Me
            </Link>
        </>
    );
}

/* function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                >
                    <User className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
} */

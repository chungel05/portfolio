import type { Metadata } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home",
    description: "Created by ChungzZ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${sora.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="font-[family-name:var(--font-sora)]">
                    <Navbar />
                    {children}
                    <Toaster />
                    <Footer />
                </div>
            </body>
        </html>
    );
}

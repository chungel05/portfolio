import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface SkillCardProps {
    className?: string;
    label: string;
    children: ReactNode;
}

export default function SkillCard({
    className,
    label,
    children,
}: SkillCardProps) {
    const cssClass =
        "bg-white text-black hover:bg-black hover:text-white border-black border-2 h-36 w-36 [&_svg]:size-10 flex-col items-center justify-center " +
        className;
    return (
        <Button
            className={cssClass}
            variant="default"
            size="lg"
            aria-label={label}
        >
            <div className="py-4">{children}</div>

            <span className="text-xl font-extrabold py-2">{label}</span>
        </Button>
    );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
    title: string;
    href: string;
}

export function SectionHeader({ title, href }: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <Link
                href={href}
                className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
                View All <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
        </div>
    );
}

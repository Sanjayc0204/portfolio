"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const items = [
    { title: "home", href: "/" },
    { title: "work", href: "/work" },
    { title: "blog", href: "/blog" },
    { title: "projects", href: "/projects" },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex flex-col gap-6 py-8">
            {/* Top row: Avatar + Name + Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* Avatar + Name */}
                <div className="flex items-center gap-3">
                    {/* Avatar placeholder - user can replace with real image */}
                    <div className="h-10 w-10 rounded-lg bg-muted overflow-hidden shrink-0">
                        {/* Replace with: <Image src="/avatar.jpg" alt="Sanjay" width={40} height={40} className="object-cover" /> */}
                    </div>
                    <Link href="/" className="font-medium text-lg tracking-tight hover:opacity-80 transition-opacity">
                        Sanjay Chunduru
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex items-center gap-5">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-[14px] transition-colors hover:text-foreground",
                                pathname === item.href
                                    ? "text-foreground font-medium"
                                    : "text-muted-foreground/60"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}

import Link from "next/link";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import { AnimatedContainer, AnimatedSection } from "@/components/ui/animated";

export default function ContactPage() {
    return (
        <AnimatedContainer>
            <AnimatedSection className="space-y-2">
                <h1 className="text-xl font-medium tracking-tight">contact</h1>
                <p className="text-muted-foreground text-sm">
                    feel free to reach out via email or social media.
                </p>
            </AnimatedSection>

            <AnimatedSection className="space-y-3">
                <Link href="mailto:contact@example.com" className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <span className="font-medium text-[15px]">Email</span>
                        <p className="text-xs text-muted-foreground">contact@example.com</p>
                    </div>
                </Link>

                <Link href="https://twitter.com" target="_blank" className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                        <Twitter className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <span className="font-medium text-[15px]">Twitter</span>
                        <p className="text-xs text-muted-foreground">@twitter_handle</p>
                    </div>
                </Link>

                <Link href="https://linkedin.com" target="_blank" className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                        <Linkedin className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <span className="font-medium text-[15px]">LinkedIn</span>
                        <p className="text-xs text-muted-foreground">/in/linkedin_handle</p>
                    </div>
                </Link>

                <Link href="https://github.com" target="_blank" className="flex items-center gap-3 p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
                    <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center">
                        <Github className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                        <span className="font-medium text-[15px]">GitHub</span>
                        <p className="text-xs text-muted-foreground">@github_handle</p>
                    </div>
                </Link>
            </AnimatedSection>
        </AnimatedContainer>
    );
}

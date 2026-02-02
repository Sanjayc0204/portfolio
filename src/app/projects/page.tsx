import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedContainer, AnimatedSection, AnimatedItem } from "@/components/ui/animated";

export default function ProjectsPage() {
    return (
        <AnimatedContainer>
            <AnimatedSection className="space-y-2">
                <h1 className="text-xl font-medium tracking-tight">projects</h1>
                <p className="text-muted-foreground text-sm">a collection of things i&apos;ve built.</p>
            </AnimatedSection>

            <AnimatedSection className="space-y-4">
                {projects.map((project) => (
                    <AnimatedItem
                        key={project.id}
                        className="group flex gap-4 items-start p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                    >
                        <div className="w-12 h-12 shrink-0 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground font-medium">
                            {project.title.substring(0, 2).toUpperCase()}
                        </div>

                        <div className="flex-1 space-y-2">
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.github && (
                                        <Link href={project.github} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                            <Github className="h-4 w-4" />
                                        </Link>
                                    )}
                                    {project.link && (
                                        <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex gap-2 pt-1 flex-wrap">
                                {project.techStack.map(stack => (
                                    <span key={stack} className="text-[10px] bg-secondary px-2 py-0.5 rounded text-secondary-foreground">
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </AnimatedItem>
                ))}
            </AnimatedSection>
        </AnimatedContainer>
    );
}

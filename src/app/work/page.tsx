import { workHistory } from "@/data/work";
import { AnimatedContainer, AnimatedSection, AnimatedItem } from "@/components/ui/animated";

export default function WorkPage() {
    return (
        <AnimatedContainer>
            <AnimatedSection className="space-y-2">
                <h1 className="text-xl font-medium tracking-tight">work</h1>
                <p className="text-muted-foreground text-sm">my professional journey.</p>
            </AnimatedSection>

            <AnimatedSection className="space-y-3">
                {workHistory.map((job) => (
                    <AnimatedItem
                        key={job.id}
                        className="group flex gap-4 items-start p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors"
                    >
                        <div className="w-12 h-12 shrink-0 bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground font-medium">
                            {job.company.substring(0, 2).toUpperCase()}
                        </div>

                        <div className="flex-1 min-w-0 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                                <span className="font-medium">{job.company}</span>
                                <span className="text-xs text-muted-foreground/50">{job.startDate} – {job.endDate}</span>
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">{job.role}</p>
                            <p className="text-xs text-muted-foreground/80 leading-relaxed">{job.description}</p>
                        </div>
                    </AnimatedItem>
                ))}
            </AnimatedSection>
        </AnimatedContainer>
    );
}

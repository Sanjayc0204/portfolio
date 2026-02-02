import Link from "next/link";
import { workHistory } from "@/data/work";
import { projects } from "@/data/projects";
import { getBlogPosts } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";
import { AnimatedContainer, AnimatedSection, AnimatedItem } from "@/components/ui/animated";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">{children}</h2>;
}

export default function Home() {
  const latestPosts = getBlogPosts().slice(0, 3);
  const featuredWork = workHistory.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);

  return (
    <AnimatedContainer>
      {/* Hero / Bio */}
      <AnimatedSection className="space-y-4">
        <h1 className="text-xl font-medium tracking-tight">
          hey, I&apos;m sanjay 👋
        </h1>
        <p className="text-muted-foreground leading-relaxed text-[15px]">
          I&apos;m a senior frontend engineer helping startups build profitable web apps.
          I care about accessibility, performance, and the little details that make products feel great.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/contact" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
            email me
          </Link>
          <Link href="https://twitter.com" target="_blank" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
            twitter
          </Link>
        </div>
      </AnimatedSection>

      {/* Work Section */}
      <AnimatedSection>
        <SectionTitle>Work</SectionTitle>
        <div className="space-y-3">
          {featuredWork.map((job) => (
            <AnimatedItem
              key={job.id}
              className="group flex gap-3 items-start p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-medium">
                {job.company.substring(0, 2).toUpperCase()}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-[15px]">{job.company}</span>
                  <span className="text-xs text-muted-foreground/50">{job.startDate}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">{job.role}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            see all work →
          </Link>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection>
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link || project.github || "#"}
              target="_blank"
              className="group flex gap-3 items-start p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors"
            >
              <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-medium overflow-hidden">
                {project.title.substring(0, 2).toUpperCase()}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-medium text-[15px] group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </span>
                  <ArrowUpRight className="h-3 w-3 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-muted-foreground line-clamp-1">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            see all projects →
          </Link>
        </div>
      </AnimatedSection>

      {/* Writing Section */}
      <AnimatedSection>
        <SectionTitle>Writing</SectionTitle>
        <div className="space-y-3">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-3 items-center p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
              <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-medium">
                📝
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-medium text-[15px] group-hover:text-foreground/80 transition-colors block truncate">
                  {post.title}
                </span>
              </div>

              <span className="text-xs text-muted-foreground/50 shrink-0">
                {post.publishedAt}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            read more →
          </Link>
        </div>
      </AnimatedSection>
    </AnimatedContainer>
  );
}

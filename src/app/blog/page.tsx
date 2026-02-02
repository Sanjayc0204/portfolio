import Link from "next/link";
import { getBlogPosts } from "@/lib/mdx";
import { AnimatedContainer, AnimatedSection } from "@/components/ui/animated";

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <AnimatedContainer>
            <AnimatedSection className="space-y-2">
                <h1 className="text-xl font-medium tracking-tight">writing</h1>
                <p className="text-muted-foreground text-sm">thoughts on engineering, design, and life.</p>
            </AnimatedSection>

            <AnimatedSection className="space-y-3">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-3 items-center p-3 -mx-3 rounded-lg hover:bg-secondary/30 transition-colors">
                        <div className="w-10 h-10 shrink-0 bg-muted rounded-lg flex items-center justify-center text-[10px] text-muted-foreground font-medium">
                            📝
                        </div>

                        <div className="flex-1 min-w-0">
                            <span className="font-medium text-[15px] group-hover:text-foreground/80 transition-colors block truncate">
                                {post.title}
                            </span>
                            <p className="text-xs text-muted-foreground line-clamp-1">{post.summary}</p>
                        </div>

                        <span className="text-xs text-muted-foreground/50 shrink-0">
                            {post.publishedAt}
                        </span>
                    </Link>
                ))}
            </AnimatedSection>
        </AnimatedContainer>
    );
}

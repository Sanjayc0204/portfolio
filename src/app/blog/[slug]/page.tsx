import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container py-12 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>

            <article className="prose prose-sm dark:prose-invert prose-neutral max-w-none prose-headings:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <div className="mb-8 not-prose">
                    <h1 className="text-2xl font-bold tracking-tight mb-2">{post.title}</h1>
                    <time className="text-sm text-muted-foreground flex items-center gap-2">
                        {post.publishedAt}
                    </time>
                </div>
                {post.content && <MDXRemote source={post.content} />}
            </article>
        </div>
    );
}

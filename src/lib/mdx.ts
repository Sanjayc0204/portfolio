import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "./types";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title,
            publishedAt: data.publishedAt,
            summary: data.summary,
        } as BlogPost;
    });

    return allPostsData.sort((a, b) => {
        if (a.publishedAt < b.publishedAt) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getBlogPost(slug: string): BlogPost | null {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        publishedAt: data.publishedAt,
        summary: data.summary,
        content,
    } as BlogPost;
}

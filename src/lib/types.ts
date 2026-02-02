export interface Job {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string; // "Present" if current
    description: string;
    logo?: string; // path to image
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string; // Live demo
    github?: string; // Repo
    image?: string; // Thumbnail path
}

export interface BlogPost {
    slug: string;
    title: string;
    publishedAt: string;
    summary: string;
    content?: string; // MDX content
}

import { Project } from "@/lib/types";

export const projects: Project[] = [
    {
        id: "1",
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://portfolio.com",
        github: "https://github.com/username/portfolio",
    },
    {
        id: "2",
        title: "E-commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, including inventory and sales tracking.",
        techStack: ["React", "Node.js", "Prisma"],
        github: "https://github.com/username/dashboard",
    },
    {
        id: "3",
        title: "Task Manager CLI",
        description: "A command-line interface tool for managing daily tasks and productivity.",
        techStack: ["Rust", "Clap"],
        github: "https://github.com/username/task-cli",
    },
];

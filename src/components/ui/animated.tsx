"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export function AnimatedContainer({ children }: { children: ReactNode }) {
    return (
        <motion.div
            className="space-y-14"
            initial="initial"
            animate="animate"
            variants={stagger}
        >
            {children}
        </motion.div>
    );
}

export function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.section className={className} variants={fadeInUp}>
            {children}
        </motion.section>
    );
}

export function AnimatedItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.div>
    );
}

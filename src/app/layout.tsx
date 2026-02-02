import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sanjay Chunduru",
    template: "%s | Sanjay Chunduru",
  },
  description: "Senior Frontend Engineer helping startups build profitable web apps.",
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground max-w-[630px] mx-auto px-4 md:px-0`}
      >
        <Navbar />
        <main className="flex-1 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

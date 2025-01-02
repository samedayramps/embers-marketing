import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Embers Marketing | Creative Digital Solutions",
  description: "Transform your online presence with engaging videos, photos, and designs that tell your story and connect with your ideal customers.",
  keywords: ["digital marketing", "web design", "video production", "brand storytelling"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geist.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}

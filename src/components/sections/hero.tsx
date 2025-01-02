"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <AnimatedSection className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Ignite Your Brand&apos;s Potential{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              and Fuel Your Growth
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            We believe every business&apos;s story starts as an ember—full of potential, waiting for the right spark to become a powerful flame. Our simple, strategic marketing approach clarifies your message, creates high-impact content, and delivers the tools you need—whether that&apos;s a fast, user-friendly website, engaging videos, or a memorable brand identity—to reach more of the right customers.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay="delay-200" className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Get Your Free Marketing Review
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="/#how-it-works"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            See Our Simple Process
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
} 
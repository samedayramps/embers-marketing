"use client";

import { Flame } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ProblemSection() {
  return (
    <section className="relative">
      {/* Primary gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-accent/5 to-transparent" />
      
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-20" />
      
      {/* Content container */}
      <div className="container relative py-24 sm:py-32">
        <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <div className="relative">
            {/* Glow effect behind icon */}
            <div className="absolute -inset-1 animate-pulse rounded-full bg-orange-500/20 blur-lg" />
            <div className="relative rounded-full bg-gradient-to-br from-orange-500 to-red-500 p-3 shadow-lg shadow-orange-500/25">
              <Flame className="h-6 w-6 text-white" />
            </div>
          </div>
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            The Challenge
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-5xl gap-16">
          <AnimatedSection
            animation="fade-up"
            delay="delay-100"
            className="mx-auto max-w-[680px] text-center"
          >
            <p className="text-xl text-muted-foreground">
              Most businesses struggle to stand out in a crowded marketplace. Customers might see a confusing message, unclear branding, or generic content—and move on. It&apos;s frustrating to watch potential clients slip away when you know you have so much to offer.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            delay="delay-200"
            className="group mx-auto max-w-[680px] overflow-hidden rounded-lg border bg-background/80 p-8 text-center shadow-lg backdrop-blur transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
          >
            {/* Card inner glow effect */}
            <div className="absolute inset-px rounded-lg bg-gradient-to-b from-white/50 to-white/0 transition-colors group-hover:from-white/25" />
            <div className="relative">
              <p className="text-lg font-medium">
                At its core, marketing is about real human connection. If people don&apos;t instantly understand how you can help them, they&apos;ll look elsewhere. That&apos;s why we focus on clarity and authenticity above all else.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 
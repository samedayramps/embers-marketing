"use client";

import { MessageSquare, Camera, Palette, Clock, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/animated-section";

const benefits = [
  {
    title: "A Clear, Compelling Story",
    description: "We help you pinpoint what makes your business unique, so customers instantly see why they should choose you.",
    icon: MessageSquare,
    gradient: "from-violet-500 to-purple-500",
    hoverGradient: "hover:bg-gradient-to-br hover:from-violet-500/10 hover:to-purple-500/10",
    shadowColor: "group-hover:shadow-violet-500/25",
  },
  {
    title: "Engaging Content and Media",
    description: "High-quality visuals—videos, photos, designs—that capture your essence and build trust.",
    icon: Camera,
    gradient: "from-blue-500 to-cyan-500",
    hoverGradient: "hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10",
    shadowColor: "group-hover:shadow-blue-500/25",
  },
  {
    title: "Consistent, Cohesive Branding",
    description: "From social media to email campaigns and beyond, we ensure your brand feels unified everywhere people find you.",
    icon: Palette,
    gradient: "from-emerald-500 to-teal-500",
    hoverGradient: "hover:bg-gradient-to-br hover:from-emerald-500/10 hover:to-teal-500/10",
    shadowColor: "group-hover:shadow-emerald-500/25",
  },
  {
    title: "Time & Cost Savings",
    description: "We handle everything—from strategy to content creation—so you're not juggling multiple vendors or DIY solutions.",
    icon: Clock,
    gradient: "from-orange-500 to-amber-500",
    hoverGradient: "hover:bg-gradient-to-br hover:from-orange-500/10 hover:to-amber-500/10",
    shadowColor: "group-hover:shadow-orange-500/25",
  },
  {
    title: "Trackable Progress & Results",
    description: "We'll measure what's working (like leads, calls, and conversions) and keep refining to ensure steady, sustainable growth.",
    icon: TrendingUp,
    gradient: "from-pink-500 to-rose-500",
    hoverGradient: "hover:bg-gradient-to-br hover:from-pink-500/10 hover:to-rose-500/10",
    shadowColor: "group-hover:shadow-pink-500/25",
  },
] as const;

const delays = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-400"] as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative bg-gradient-to-b from-background via-accent/10 to-background">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:20px_20px]" />
      <div className="container relative py-24 sm:py-32">
        <AnimatedSection className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Here&apos;s What You&apos;ll Get with Embers Marketing
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to stand out and turn more prospects into customers, under one roof
          </p>
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={delays[index]}
                className={cn(
                  "group relative overflow-hidden rounded-lg border bg-background/80 p-2 backdrop-blur transition-all duration-300",
                  benefit.hoverGradient,
                  "hover:shadow-lg",
                  benefit.shadowColor,
                  index === benefits.length - 1 && "sm:col-span-2 lg:col-span-1"
                )}
              >
                <div className="absolute inset-px rounded-lg bg-gradient-to-b from-white/50 to-white/0 transition-colors group-hover:from-white/25" />
                <div className="relative h-full rounded-[inherit] p-6">
                  <div className="relative z-10 space-y-4">
                    <div className={cn(
                      "inline-flex rounded-lg bg-gradient-to-br p-3",
                      benefit.gradient
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection 
          className="mx-auto mt-16 max-w-[58rem] text-center"
          animation="fade-up"
          delay="delay-400"
        >
          <p className="text-lg text-muted-foreground">
            Curious how we deliver these benefits? Let us show you our proven approach ↓
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 
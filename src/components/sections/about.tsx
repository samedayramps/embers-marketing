"use client";

import { Sparkles, Target, Palette, Rocket } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const approach = [
  {
    title: "Clarify Your Brand Story",
    description: "We cut out the fluff, uncover what makes you unique, and position you to stand out.",
    icon: Sparkles,
  },
  {
    title: "Create Engaging Content",
    description: "We craft photos, videos, and designs that speak directly to your ideal customers—like adding fuel to the ember of your potential.",
    icon: Target,
  },
  {
    title: "Build (or Refine) a Fast, Effective Website",
    description: "So visitors instantly &quot;get&quot; you and can&apos;t wait to learn more or buy.",
    icon: Palette,
  },
  {
    title: "Continually Refine",
    description: "We measure what works, improve what doesn&apos;t, and keep your brand fresh so it never loses its spark.",
    icon: Rocket,
  },
] as const;

const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="container py-24 sm:py-32">
        <AnimatedSection className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            How We Guide You
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Our proven approach combines clarity, creativity, and continuous improvement—rooted in first principles to ensure everything we do truly benefits your business.
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={delays[index]}
              >
                <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                  <div className="flex h-full flex-col justify-between rounded-md p-6">
                    <Icon className="h-12 w-12 text-primary" />
                    <div className="space-y-2">
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
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
            Ready to ignite your business? Let&apos;s discover how we can transform your website into a customer-generating machine ↓
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 
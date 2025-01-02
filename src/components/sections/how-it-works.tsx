"use client";

import { MessageCircle, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const steps = [
  {
    title: "Have a Quick Chat",
    description:
      "Tell us about your business and goals—no technical lingo, just a friendly conversation about where you are and where you want to go.",
    icon: MessageCircle,
  },
  {
    title: "Get Your Custom Plan",
    description:
      "We'll show you how to sharpen your brand story, create impactful content, and use the right platforms (including your website) to attract more of the customers you want.",
    icon: Lightbulb,
  },
  {
    title: "We Do the Heavy Lifting",
    description:
      "From branding and messaging to content production (photos, videos, designs) and, yes, a website if needed—we handle it all while you focus on running your business.",
    icon: Rocket,
  },
  {
    title: "Watch Your Business Grow",
    description:
      "Enjoy a cohesive marketing strategy that turns more prospects into clients. We'll keep refining each piece based on real results.",
    icon: TrendingUp,
  },
] as const;

const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative">
      <div className="container py-24 sm:py-32">
        <AnimatedSection className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Simple Steps to Grow Your Business
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            No confusing jargon. We make it easy to see exactly what you get and how it helps your business thrive.
          </p>
        </AnimatedSection>

        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
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
          <p className="text-muted-foreground">
            Stop losing customers to unclear marketing. Whether you need a refresh of your brand identity, a new approach to content, or a website that truly represents who you are, Embers Marketing can help you spark lasting growth.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Here&apos;s everything you&apos;ll get to make that happen ↓
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 
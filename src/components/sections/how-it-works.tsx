"use client";

import { Clock, FileText, LineChart, MessageSquare } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section } from "@/components/ui/section";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Share Your Story",
    subtitle: "(15 min)",
    description:
      "You'll tell us about your business and what makes it special. We'll listen and learn what sets you apart.",
  },
  {
    number: "02",
    icon: FileText,
    title: "We Do the Deep Work",
    description:
      "We talk to your best customers to understand why they chose you. We research what matters to the people you want to reach. This helps us create a message that really connects with them.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Get Your Growth Plan",
    description:
      "You'll get a clear plan that shows how to turn more people into customers. We'll show you exactly what needs to change in your marketing to make that happen.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Watch Your Business Grow",
    description:
      "Once you approve the plan, we handle all the work. You focus on your business while we put everything in place to help more people discover you.",
  },
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

export function HowItWorksSection() {
  return (
    <Section id="how-it-works">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Here&apos;s What Happens When You Work With Us
        </h2>
      </AnimatedSection>

      <div className="mx-auto mt-16 grid max-w-[680px] gap-12">
        {steps.map((step, index) => (
          <AnimatedSection
            key={index}
            animation="fade-up"
            delay={delays[index]}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                <step.icon className="h-6 w-6 text-white" />
              </div>
              <div className="mt-2 text-2xl font-bold text-orange-500/80">
                {step.number}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <span className="text-sm text-muted-foreground">
                    {step.subtitle}
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground text-justify">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </Section>
  );
} 
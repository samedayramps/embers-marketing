"use client";

import { MessageCircle, Image, Palette, Clock, LineChart } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section } from "@/components/ui/section";
import { typography } from "@/styles/typography";

const benefits = [
  {
    title: "Clear Message That Connects",
    description: "We help you explain what makes your business special in a way that instantly clicks with potential customers.",
    icon: MessageCircle,
  },
  {
    title: "Professional Photos, Videos & Design",
    description: "High-quality visuals that showcase your business at its best and help build trust with your audience.",
    icon: Image,
  },
  {
    title: "Consistent Brand Presence",
    description: "Your business will look professional and feel cohesive everywhere - from your website to social media to email.",
    icon: Palette,
  },
  {
    title: "Save 15+ Hours Per Week",
    description: "Stop juggling DIY marketing tasks or managing multiple vendors. We handle everything - from writing your emails to creating social posts - so you can focus on running your business.",
    icon: Clock,
  },
  {
    title: "Real Results You Can See",
    description: "Monthly reports show you exactly what's working - like website visits turning into leads, phone calls, and sales.",
    icon: LineChart,
  },
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-400"] as const;

export function ServicesSection() {
  return (
    <Section id="services">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className={typography.h2}>
          What You Get with Embers Marketing
        </h2>
        <p className={typography.subtitle}>
          Everything you need to stand out and attract more customers, all in one place:
        </p>
      </AnimatedSection>

      <div className="mx-auto mt-16 grid gap-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={delays[index]}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
            >
              {/* Card inner glow effect */}
              <div className="absolute inset-px rounded-lg bg-gradient-to-b from-white/50 to-white/0 transition-colors group-hover:from-white/25" />
              
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className={typography.h3}>
                    {benefit.title}
                  </h3>
                  <p className={typography.body.sm}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </Section>
  );
} 
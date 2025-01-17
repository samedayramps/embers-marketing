"use client";

import { Trophy, Heart, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Section } from "@/components/ui/section";
import { typography } from "@/styles/typography";

const stats = [
  {
    icon: Trophy,
    number: "200+",
    label: "Businesses Helped",
    description: "We&apos;ve helped hundreds of businesses find the right words to reach more customers."
  },
  {
    icon: Users,
    number: "10,000+",
    label: "New Customers",
    description: "Our clients have collectively reached thousands of new customers through clear messaging."
  },
  {
    icon: Heart,
    number: "97%",
    label: "Client Satisfaction",
    description: "Our clients love how we simplify their marketing and help them connect with customers."
  }
];

const delays = ["delay-0", "delay-100", "delay-200"] as const;

export function AuthoritySection() {
  return (
    <Section id="authority">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className={typography.h2}>
          You Deserve a Guide You Can Trust
        </h2>
        <p className={typography.subtitle}>
          We understand how frustrating it is to watch potential customers miss your message. You shouldn&apos;t have to struggle to communicate your value.
        </p>
      </AnimatedSection>

      <div className="mx-auto mt-16 grid gap-8 md:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={delays[index]}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 text-center transition-all duration-300 hover:border-accent/50 hover:bg-accent/5"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-orange-500">
                    {stat.number}
                  </div>
                  <div className="font-semibold">
                    {stat.label}
                  </div>
                  <p className={typography.body.sm}>
                    {stat.description}
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
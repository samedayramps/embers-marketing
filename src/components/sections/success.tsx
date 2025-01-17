"use client";

import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const successPoints = [
  "Customers instantly understand how you can help them",
  "You stop losing business to confusion or misunderstanding",
  "You spend less time explaining and more time serving customers",
  "Your business grows through word of mouth because people can easily tell others what you do"
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

export function SuccessSection() {
  return (
    <section id="success" className="relative">
      <div className="container space-y-8 py-12 md:py-16 lg:py-24">
        <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Here&apos;s What Success Looks Like
          </h2>
          <p className="text-xl text-muted-foreground">
            When your message is clear:
          </p>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-[680px] gap-6">
          {successPoints.map((point, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={delays[index]}
              className="flex items-start gap-4"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-sm shadow-orange-500/25">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="text-lg text-muted-foreground text-justify">
                {point}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
} 
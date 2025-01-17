"use client";

import { XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const failurePoints = [
  "Potential customers keep scrolling past your business",
  "You miss out on people who need what you offer",
  "Your competition might reach them first",
  "You keep feeling frustrated, knowing you could help more people if they just understood your value"
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300"] as const;

export function FailureSection() {
  return (
    <section id="failure" className="relative">
      <div className="container space-y-8 py-12 md:py-16 lg:py-24">
        <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Every Day You Wait
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-[680px] gap-6">
          {failurePoints.map((point, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={delays[index]}
              className="flex items-start gap-4"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-sm shadow-red-500/25">
                <XCircle className="h-4 w-4 text-white" />
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
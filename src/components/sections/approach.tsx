"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { Section } from "@/components/ui/section";
import { typography } from "@/styles/typography";

export function ApproachSection() {
  return (
    <Section id="approach">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className={typography.h2}>
          Here&apos;s How We Make It Happen
        </h2>
      </AnimatedSection>

      <div className="mx-auto mt-16 grid max-w-[680px] gap-12">
        <AnimatedSection
          animation="fade-up"
          delay="delay-100"
          className="space-y-3"
        >
          <h3 className={typography.h3}>
            We craft your core message
          </h3>
          <p className={typography.body.lg}>
            Together, we&apos;ll discover the most compelling way to share what makes your business special. You&apos;ll get words that resonate with your ideal customers and show them exactly how you can solve their problems.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          delay="delay-200"
          className="space-y-3"
        >
          <h3 className={typography.h3}>
            We amplify your story
          </h3>
          <p className={typography.body.lg}>
            We&apos;ll help your message reach the people who need to hear it. Your website, content, and brand will work together to showcase your value and draw in your ideal customers.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          delay="delay-300"
          className="space-y-3"
        >
          <h3 className={typography.h3}>
            We turn interest into growth
          </h3>
          <p className={typography.body.lg}>
            Your message will do more than attract attention - it will bring you customers. We create clear paths that guide interested people to take the next step with your business.
          </p>
        </AnimatedSection>

        <AnimatedSection
          animation="fade-up"
          delay="delay-400"
          className="mt-8 text-center"
        >
          <p className={typography.body.lg}>
            The best part? You don&apos;t have to figure this out alone. We handle all the marketing details while you focus on what you do best - running your business.
          </p>
        </AnimatedSection>
      </div>
    </Section>
  );
} 
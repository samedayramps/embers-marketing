"use client";

import { Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FAQSection } from "@/components/ui/faq-section";
import { Shield, Clock, ThumbsUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { typography } from "@/styles/typography";

const delays = ["delay-0", "delay-100", "delay-200"] as const;

const riskEliminators = [
  {
    icon: Clock,
    title: "Just 15 Minutes",
    description: "A quick, focused chat to explore how we can help."
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Free consultation with zero pressure to commit."
  },
  {
    icon: ThumbsUp,
    title: "Money-Back Guarantee",
    description: "Not happy with our work? Get a full refund."
  }
];

export function ContactSection() {
  return (
    <Section id="contact">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className={typography.h2}>
          Ready to Ignite Your Business?
        </h2>
        <p className={typography.subtitle}>
          It all starts with a quick, no-pressure conversation. Let&apos;s see how our holistic marketing approach can fan the ember of your business into a bright, lasting flame.
        </p>
      </AnimatedSection>

      <div className="mx-auto grid max-w-[680px] gap-8">
        <div className="grid gap-8 md:grid-cols-3">
          {riskEliminators.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection
                key={index}
                animation="fade-up"
                delay={delays[index]}
                className="text-center"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className={typography.h3}>
                  {item.title}
                </h3>
                <p className={typography.body.sm}>
                  {item.description}
                </p>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection 
          className="mx-auto max-w-[680px]"
          animation="fade-up"
          delay="delay-100"
        >
          <div className="mb-8 text-center">
            <h3 className={typography.h3}>Let&apos;s Talk About Your Business</h3>
            <p className={typography.body.lg}>
              Schedule Your Free 30-Minute Chat
            </p>
            <p className={typography.body.base}>
              No obligations—just a simple conversation about how Embers Marketing can help you grow.
            </p>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className={typography.body.sm}>
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className={typography.body.sm}>
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className={typography.body.sm}>
                Tell us about your business (optional)
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What kind of business do you run? What's your biggest challenge in attracting new customers?"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Schedule Your Free Call
            </button>
          </form>

          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:justify-center">
            <AnimatedSection 
              animation="fade-right"
              delay="delay-200"
              className="flex items-center justify-center gap-3"
            >
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:hello@embers.com"
                className={typography.link}
              >
                hello@embers.com
              </a>
            </AnimatedSection>
            <AnimatedSection 
              animation="fade-left"
              delay="delay-300"
              className="flex items-center justify-center gap-3"
            >
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+1234567890" className={typography.link}>
                (123) 456-7890
              </a>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection 
          className="mx-auto max-w-[680px] text-center"
          animation="fade-up"
          delay="delay-400"
        >
          <p className={typography.body.lg}>
            Not ready yet? That&apos;s okay! Save our info and reach out whenever you want to spark real growth.
          </p>
        </AnimatedSection>

        <FAQSection />
      </div>
    </Section>
  );
} 
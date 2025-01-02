"use client";

import { Mail, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export function ContactSection() {
  return (
    <section id="contact" className="relative">
      <div className="container py-24 sm:py-32">
        <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Ready to Ignite Your Business?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            It all starts with a quick, no-pressure conversation. Let&apos;s see how our holistic marketing approach—from messaging and visuals to websites and beyond—can fan the ember of your business into a bright, lasting flame.
          </p>
        </AnimatedSection>

        <AnimatedSection 
          className="mx-auto mt-16 max-w-2xl"
          animation="fade-up"
          delay="delay-100"
        >
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold">Let&apos;s Talk About Your Business</h3>
            <p className="mt-2 text-muted-foreground">
              Schedule Your Free 30-Minute Chat
            </p>
            <p className="text-sm text-muted-foreground">
              No obligations—just a simple conversation about how Embers Marketing can help you grow.
            </p>
          </div>

          <form className="grid gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium leading-none">
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
                <label htmlFor="email" className="text-sm font-medium leading-none">
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
              <label htmlFor="message" className="text-sm font-medium leading-none">
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

          <div className="mt-16 flex flex-col gap-8 sm:flex-row sm:gap-16">
            <AnimatedSection 
              animation="fade-right"
              delay="delay-200"
              className="flex items-center gap-3"
            >
              <Mail className="h-6 w-6 text-primary" />
              <a
                href="mailto:hello@embers.com"
                className="text-sm hover:text-primary"
              >
                hello@embers.com
              </a>
            </AnimatedSection>
            <AnimatedSection 
              animation="fade-left"
              delay="delay-300"
              className="flex items-center gap-3"
            >
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:+1234567890" className="text-sm hover:text-primary">
                (123) 456-7890
              </a>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        <AnimatedSection 
          className="mx-auto mt-16 max-w-[58rem] text-center"
          animation="fade-up"
          delay="delay-400"
        >
          <p className="text-lg text-muted-foreground">
            Not ready yet? That&apos;s okay! Save our info and reach out whenever you want to spark real growth.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 
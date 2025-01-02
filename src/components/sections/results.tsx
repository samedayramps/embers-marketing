"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

const testimonials = [
  {
    quote:
      "Our old website was confusing and we barely got any leads. Since working with them, our website is crystal clear and we&apos;re getting 3-4 qualified leads every week. The professional photos and videos they took make us look much more established.",
    author: "Sarah Johnson",
    role: "Owner, TechStart Solutions",
    image: "/testimonials/sarah.jpg",
  },
] as const;

export function ResultsSection() {
  return (
    <section id="results" className="relative">
      <div className="container py-24 sm:py-32">
        <AnimatedSection className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Real Results for Real Businesses
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Here&apos;s how we&apos;ve helped other business owners like you get more customers from their websites
          </p>
        </AnimatedSection>

        <div className="mx-auto max-w-[64rem]">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay="delay-100"
            >
              <div className="relative overflow-hidden rounded-lg border bg-background p-2">
                <div className="flex h-full flex-col justify-between rounded-md p-8 sm:p-10">
                  <div className="mb-4">
                    <Quote className="h-12 w-12 text-primary/50" />
                  </div>
                  <blockquote className="space-y-6">
                    <p className="text-xl text-muted-foreground sm:text-2xl">
                      {testimonial.quote}
                    </p>
                    <footer className="flex items-center space-x-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-lg">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection 
          className="mx-auto mt-16 max-w-[58rem] text-center"
          animation="fade-up"
          delay="delay-300"
        >
          <p className="text-lg text-muted-foreground">
            Want results like these for your business? Here&apos;s exactly what you&apos;ll get when you work with us ↓
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
} 
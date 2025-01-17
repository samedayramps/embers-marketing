"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSection } from "@/components/ui/animated-section";

const faqs = [
  {
    question: "What happens in the free 15-minute chat?",
    answer: "We&apos;ll discuss your business goals and current marketing challenges. You&apos;ll share what makes your business special, and we&apos;ll explore how we might help you reach more customers. No pressure, just a friendly conversation to see if we&apos;re a good fit."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients start seeing improvements within the first month as we implement their new messaging. However, the full impact of clear communication typically shows in 2-3 months as we refine and optimize your message across all channels."
  },
  {
    question: "Do I need to prepare anything for our first chat?",
    answer: "Just bring your knowledge of your business and customers. We&apos;ll guide the conversation with questions that help us understand your unique situation. No presentations or materials needed."
  },
  {
    question: "What if I&apos;m not sure what makes my business special?",
    answer: "That&apos;s exactly what we help with! We have a proven process to uncover what makes your business valuable to customers. Often, businesses have amazing strengths they don&apos;t even realize."
  },
  {
    question: "What makes your approach different?",
    answer: "We focus on clarity first, not fancy marketing tricks. Our process is based on proven communication frameworks that help businesses connect with customers naturally. We make marketing simple and effective."
  }
];

export function FAQSection() {
  return (
    <AnimatedSection
      animation="fade-up"
      delay="delay-100"
      className="mx-auto max-w-[680px] space-y-6"
    >
      <h3 className="text-xl font-bold text-center">
        Common Questions
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </AnimatedSection>
  );
} 
"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AnimatedPlayButton } from "@/components/ui/animated-play-button";
import { GlowEffect } from "@/components/ui/glow-effect";
import { Section } from "@/components/ui/section";
import { typography } from "@/styles/typography";

// Video popup component
const VideoPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Video container */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-[90vw] md:max-w-[800px] aspect-video bg-black rounded-lg shadow-2xl overflow-hidden"
            initial={{ 
              opacity: 0, 
              scale: 0.8, 
              x: "-50%",
              y: "-50%"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: "-50%",
              y: "-50%",
              transition: {
                type: "spring",
                damping: 25,
                stiffness: 200
              }
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              x: "-50%",
              y: "-50%"
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-sm transition-colors hover:bg-black/70 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Video iframe */}
            <div className="relative h-full w-full">
              <iframe
                src="https://www.youtube.com/embed/your-video-id?autoplay=1"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);

  return (
    <Section 
      id="home"
      className="min-h-[calc(100vh-4rem)]"
      containerClassName="flex flex-col items-center justify-center space-y-8"
    >
      <VideoPopup isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      <AnimatedSection className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
        <AnimatedPlayButton onClick={() => setIsVideoOpen(true)} />
        
        <h1 className={typography.h1}>
          Turn More Visitors into{" "}
          <span className="animate-gradient-shift bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent">
            Customers
          </span>
          {" "}with Clear, Compelling Marketing
        </h1>
        <p className={typography.subtitle}>
          You have a great business, but getting that message across to potential customers shouldn&apos;t be so hard. We make marketing simple and effective, helping you create a clear message, engaging content, and a website that actually brings in new customers.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="fade-up" delay="delay-200" className="flex flex-col gap-4 sm:flex-row">
        <GlowEffect isHovered={isCtaHovered} size="sm" className="rounded-md">
          <motion.div
            onHoverStart={() => setIsCtaHovered(true)}
            onHoverEnd={() => setIsCtaHovered(false)}
          >
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Get Your Free Marketing Review
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </GlowEffect>
        <button
          onClick={() => setIsVideoOpen(true)}
          className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          Watch Video
        </button>
      </AnimatedSection>
    </Section>
  );
} 
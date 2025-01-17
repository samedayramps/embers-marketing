"use client";

import { Flame } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutSection() {
  return (
    <section id="about" className="relative">
      <div className="container space-y-8 py-12 md:py-16 lg:py-24">
        <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <div className="relative group">
            {/* Hover target area */}
            <div className="absolute -inset-6 rounded-full" />
            
            {/* Outer glow layer */}
            <div className="absolute -inset-4 animate-[glow_2s_ease-in-out_infinite] rounded-full bg-orange-500/10 blur-3xl" />
            
            {/* Middle glow layer */}
            <div className="absolute -inset-3 animate-[glow_2.5s_ease-in-out_infinite_0.3s] rounded-full bg-orange-500/20 blur-2xl" />
            
            {/* Inner glow layer */}
            <div className="absolute -inset-2 animate-[glow_1.8s_ease-in-out_infinite_0.5s] rounded-full bg-orange-500/30 blur-xl" />
            
            {/* Additional flicker layers */}
            <div className="absolute -inset-1 animate-[flicker_2.2s_ease-in-out_infinite_0.2s] rounded-full bg-orange-400/40 blur-lg" />
            <div className="absolute -inset-1 animate-[flicker_2.7s_ease-in-out_infinite_0.7s] rounded-full bg-red-500/30 blur-lg" />
            
            {/* Icon container with gradient background */}
            <motion.div 
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25"
              animate={{ 
                x: 0,
                y: 0
              }}
              whileHover={{ 
                x: [0, -2, 1, -1, 2, 0],
                y: [0, -1, 1, -2, 1, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <Flame className="h-6 w-6 text-white" />
            </motion.div>
          </div>

          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Your Potential
          </h2>
        </AnimatedSection>

        <div className="mx-auto mt-16 grid max-w-[680px] gap-8">
          <AnimatedSection
            animation="fade-up"
            delay="delay-100"
            className="text-center"
          >
            <p className="text-xl text-muted-foreground">
              If you are like me, it can be frustrating to know what you are capable of if you could only get others to see it. Whether you have a small business, non-profit, or personal brand, clearly communicating the value you offer can be a challenge in today&apos;s overwhelming digital world.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-up"
            delay="delay-200"
            className="text-center"
          >
            <p className="text-xl text-muted-foreground">
              That&apos;s where we come in. We help you cut through the noise and confusion to create a clear, compelling message that resonates with your ideal audience. By combining strategic thinking with creative execution, we turn the ember of your potential into a bright, lasting flame that attracts and engages the right people.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 
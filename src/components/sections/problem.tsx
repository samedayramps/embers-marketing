"use client";

import { Flame } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";
import { GlowEffect } from "@/components/ui/glow-effect";
import { EmberParticle } from "@/components/ui/ember-particle";
import { Section } from "@/components/ui/section";
import { useState, useRef, useEffect } from "react";
import { typography } from "@/styles/typography";

export function ProblemSection() {
  const [isIconHovered, setIsIconHovered] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);
  const mouseIntensity = useMotionValue(0);
  const smoothIntensity = useSpring(mouseIntensity, {
    damping: 20,
    stiffness: 200
  });
  
  // Transform intensity to particle count (1-4 particles)
  const particleCount = useTransform(smoothIntensity, [0, 1], [1, 4]);
  
  // Transform intensity to particle delay (2.5s when far, 1.2s when close)
  const particleDelay = useTransform(smoothIntensity, [0, 1], [2.5, 1.2]);
  
  useEffect(() => {
    const updateMouseIntensity = (e: MouseEvent) => {
      if (!iconRef.current) return;
      
      // Get icon center and mouse position
      const rect = iconRef.current.getBoundingClientRect();
      const iconCenterX = rect.left + rect.width / 2;
      const iconCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to icon center
      const deltaX = e.clientX - iconCenterX;
      const deltaY = e.clientY - iconCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Transform distance to intensity (0-1)
      // Max distance for effect is 150px
      const maxDistance = 150;
      const intensity = Math.max(0, 1 - distance / maxDistance);
      mouseIntensity.set(intensity);
    };

    window.addEventListener('mousemove', updateMouseIntensity);
    return () => window.removeEventListener('mousemove', updateMouseIntensity);
  }, [mouseIntensity]);
  
  // Generate particles based on intensity with dynamic delay
  const particles = Array.from({ length: Math.round(particleCount.get()) }).map((_, i) => (
    <EmberParticle key={i} delay={i * particleDelay.get()} />
  ));

  return (
    <Section id="problem">
      <AnimatedSection className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <div className="relative group mb-4" ref={iconRef}>
          {/* Ember particles container */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {particles}
          </div>
          
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
          
          <GlowEffect isHovered={isIconHovered} size="lg" shape="circular" intensity={smoothIntensity}>
            {/* Icon container with gradient background */}
            <motion.div 
              className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25 cursor-pointer"
              whileTap={{ 
                scale: 0.95,
                transition: {
                  duration: 0.1,
                }
              }}
              onHoverStart={() => setIsIconHovered(true)}
              onHoverEnd={() => setIsIconHovered(false)}
            >
              <Flame className="h-6 w-6 text-white" />
            </motion.div>
          </GlowEffect>
        </div>
        <h2 className={typography.h2}>
          Your Problem Is Your Potential
        </h2>
      </AnimatedSection>

      <AnimatedSection
        animation="fade-up"
        delay="delay-100"
        className="mx-auto max-w-[680px] space-y-6"
      >
        <p className={typography.body.lg}>
          You&apos;re great at what you do. Your customers love you. But every day, potential customers are looking right past your business - not because of what you offer, but because of how it&apos;s being communicated.
        </p>
      </AnimatedSection>
    </Section>
  );
} 
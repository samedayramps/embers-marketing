"use client";

import { Play } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { EmberParticle } from "./ember-particle";
import { GlowEffect } from "./glow-effect";
import { useState, useRef, useEffect } from "react";

interface AnimatedPlayButtonProps {
  onClick: () => void;
}

export function AnimatedPlayButton({ onClick }: AnimatedPlayButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
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
      if (!buttonRef.current) return;
      
      // Get button center and mouse position
      const rect = buttonRef.current.getBoundingClientRect();
      const buttonCenterX = rect.left + rect.width / 2;
      const buttonCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to button center
      const deltaX = e.clientX - buttonCenterX;
      const deltaY = e.clientY - buttonCenterY;
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
    <div className="relative group mb-4" ref={buttonRef}>
      {/* Ember particles container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {particles}
      </div>
      
      {/* Hover target area */}
      <div className="absolute -inset-6 rounded-full" />
      
      <GlowEffect isHovered={isHovered} size="lg" shape="circular" intensity={smoothIntensity}>
        {/* Icon container with gradient background */}
        <motion.div 
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg shadow-orange-500/25 cursor-pointer"
          whileTap={{ 
            scale: 0.95,
            transition: {
              duration: 0.1,
            }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={onClick}
        >
          <Play className="h-6 w-6 text-white" />
        </motion.div>
      </GlowEffect>
    </div>
  );
} 
"use client";

import { motion } from "framer-motion";

interface EmberParticleProps {
  delay?: number;
}

export function EmberParticle({ delay = 0 }: EmberParticleProps) {
  const randomX = Math.random() * 30 - 15; // Smaller random X range
  const randomDuration = 2 + Math.random() * 1; // Random duration between 2-3s
  
  return (
    <motion.div
      className="absolute h-[2px] w-[2px] rounded-full bg-gradient-to-b from-orange-400 to-red-500"
      initial={{ 
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        x: [0, randomX/2, randomX, -randomX/3, 0],
        y: [0, -20, -40, -70, -90],
        opacity: [0, 0.9, 0.7, 0.3, 0],
        scale: [0.2, 1, 0.8, 0.4, 0],
        rotate: [0, 45, -45, 22, 0]
      }}
      transition={{
        duration: randomDuration,
        delay,
        ease: "easeOut",
        times: [0, 0.2, 0.4, 0.7, 1],
        repeat: Infinity,
      }}
    />
  );
} 
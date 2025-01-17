"use client";

import { motion, useTransform, MotionValue, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowEffectProps {
  children: ReactNode;
  className?: string;
  isHovered?: boolean;
  intensity?: MotionValue<number>;
  size?: "sm" | "md" | "lg";
  shape?: "rounded" | "circular";
}

export function GlowEffect({ 
  children, 
  className, 
  isHovered = false,
  intensity,
  size = "md",
  shape = "rounded"
}: GlowEffectProps): ReactNode {
  const sizeConfig = {
    sm: {
      inset: "-inset-1",
      blur: "blur-sm",
      hoverScale: 1.05
    },
    md: {
      inset: "-inset-2",
      blur: "blur-md",
      hoverScale: 1.08
    },
    lg: {
      inset: "-inset-3",
      blur: "blur-lg",
      hoverScale: 1.1
    }
  };

  const { inset, blur, hoverScale } = sizeConfig[size];
  const roundingClass = shape === "circular" ? "rounded-full" : "rounded-[inherit]";

  // Transform intensity (0-1) to opacity values
  const defaultMotionValue = useMotionValue(0);
  const primaryOpacity = useTransform(
    intensity || defaultMotionValue,
    [0, 0.5, 1],
    [0.08, 0.2, 0.4]
  );
  
  const secondaryOpacity = useTransform(
    intensity || defaultMotionValue,
    [0, 0.5, 1],
    [0.04, 0.1, 0.2]
  );

  const scale = useTransform(
    intensity || defaultMotionValue,
    [0, 1],
    [1, hoverScale]
  );

  const glowVariants = {
    normal: {
      scale: 1,
      opacity: [0.08, 0.1, 0.09],
      transition: {
        opacity: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    },
    hovered: {
      scale: hoverScale,
      opacity: [0.25, 0.3, 0.27],
      transition: {
        opacity: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        },
        scale: {
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }
  };

  return (
    <div className={cn("relative isolate", className)}>
      {/* Primary glow layer */}
      <motion.div 
        className={cn(
          "absolute",
          inset,
          blur,
          roundingClass,
          "bg-gradient-to-r from-orange-500 via-red-500 to-orange-500"
        )}
        style={{
          zIndex: -1,
          willChange: "transform, opacity",
          opacity: intensity ? primaryOpacity : undefined,
          scale: intensity ? scale : undefined
        }}
        {...(!intensity && {
          initial: "normal",
          animate: isHovered ? "hovered" : "normal",
          variants: glowVariants
        })}
      />
      
      {/* Secondary glow layer with slightly larger blur */}
      <motion.div 
        className={cn(
          "absolute",
          inset,
          "blur-lg",
          roundingClass,
          "bg-gradient-to-r from-orange-500/80 via-red-500/80 to-orange-500/80"
        )}
        style={{
          zIndex: -2,
          willChange: "transform, opacity",
          opacity: intensity ? secondaryOpacity : undefined,
          scale: intensity ? scale : undefined
        }}
        {...(!intensity && {
          initial: "normal",
          animate: isHovered ? "hovered" : "normal",
          variants: glowVariants
        })}
      />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
} 
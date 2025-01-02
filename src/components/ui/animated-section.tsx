"use client";

import { useIntersectionObserver } from "@/lib/hooks/use-intersection";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right";
  delay?: "delay-0" | "delay-100" | "delay-200" | "delay-300" | "delay-400";
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = "delay-0",
  ...props
}: AnimatedSectionProps) {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  const animations = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-down": "-translate-y-10 opacity-0",
    "fade-left": "translate-x-10 opacity-0",
    "fade-right": "-translate-x-10 opacity-0",
  };

  return (
    <section
      ref={elementRef}
      className={cn(
        "transition-all duration-700 ease-out",
        animations[animation],
        isIntersecting && "translate-x-0 translate-y-0 opacity-100",
        delay,
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
} 
"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ 
  id, 
  children, 
  className,
  containerClassName 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "relative py-16 md:py-24",
        className
      )}
    >
      <div className={cn(
        "container",
        "px-4 md:px-8", // Consistent horizontal padding
        "mx-auto", // Center the container
        "space-y-16", // Consistent vertical spacing between section parts
        containerClassName
      )}>
        {children}
      </div>
    </section>
  );
} 
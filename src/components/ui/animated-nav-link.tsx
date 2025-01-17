"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedNavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  isTarget: boolean;
  layoutId: string;
  onNavigate: () => void;
}

export function AnimatedNavLink({ 
  href, 
  children, 
  isActive, 
  isTarget,
  layoutId, 
  onNavigate 
}: AnimatedNavLinkProps) {
  return (
    <Link 
      href={href} 
      className="relative py-2"
      onClick={(e) => {
        e.preventDefault();
        onNavigate();
        const element = document.querySelector(href.replace('/', ''));
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className={cn(
        "text-base font-medium transition-colors hover:text-foreground/80",
        (isActive || isTarget) ? "text-foreground" : "text-foreground/60"
      )}>
        {children}
      </span>
      {(isActive || isTarget) && (
        <motion.div
          layoutId={layoutId}
          transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
          className="absolute -bottom-[2px] left-0 right-0 h-[2px] rounded-full"
        >
          {/* Outer glow layer */}
          <div className="absolute inset-0 -top-1 animate-[glow_1.8s_ease-in-out_infinite] bg-orange-500/15 blur-sm rounded-full" />
          
          {/* Middle glow layer */}
          <div className="absolute inset-0 -top-0.5 animate-[glow_2s_ease-in-out_infinite_0.2s] bg-orange-500/25 blur-[2px] rounded-full" />
          
          {/* Base line */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 animate-[glow_1.6s_ease-in-out_infinite_0.4s] rounded-full" />
        </motion.div>
      )}
    </Link>
  );
} 
"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 60% of the first viewport
      const shouldShow = window.scrollY > window.innerHeight * 0.6;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform"
        >
          <div className="flex items-center gap-3 rounded-full border bg-background/80 p-2 pr-6 shadow-lg backdrop-blur">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
            >
              Book Free Chat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <span className="text-sm text-muted-foreground">
              No obligation • 15 min
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 
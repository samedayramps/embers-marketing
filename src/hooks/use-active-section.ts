"use client";

import { useState, useEffect } from "react";

interface SectionState {
  activeSection: string;
  targetSection: string | null;
  setTargetSection: (sectionId: string) => void;
}

export function useActiveSection(): SectionState {
  const [state, setState] = useState<SectionState>({
    activeSection: "home",
    targetSection: null,
    setTargetSection: () => {}
  });

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const navHeight = 64; // height of the navbar

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only update active section if we're not currently navigating to a target
            if (!state.targetSection) {
              const sectionId = entry.target.id || "home";
              setState(prev => ({ ...prev, activeSection: sectionId }));
            }
          }
        });
      },
      {
        rootMargin: `-${navHeight}px 0px 0px 0px`,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Handle scroll end to clear target section
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setState(prev => ({ ...prev, targetSection: null }));
      }, 100); // Wait 100ms after scroll ends
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [state.targetSection]);

  const setTargetSection = (sectionId: string) => {
    setState(prev => ({ ...prev, targetSection: sectionId }));
  };

  return { ...state, setTargetSection };
} 
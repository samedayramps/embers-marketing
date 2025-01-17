"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AnimatedNavLink } from "@/components/ui/animated-nav-link";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  {
    name: "Home",
    href: "/#home",
    sectionId: "home"
  },
  {
    name: "Problem",
    href: "/#problem",
    sectionId: "problem"
  },
  {
    name: "Approach",
    href: "/#approach",
    sectionId: "approach"
  },
  {
    name: "How It Works",
    href: "/#how-it-works",
    sectionId: "how-it-works"
  },
  {
    name: "Get Started",
    href: "/#contact",
    sectionId: "contact"
  }
] as const;

export function MainNav() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeSection, targetSection, setTargetSection } = useActiveSection();
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Ensure we're mounted before rendering to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark");
  const logoSrc = isDark ? "/embers-logo-dark.svg" : "/embers-logo-light.svg";

  // If not mounted yet, show a placeholder for the logo
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="w-full border-b border-border">
          <div className="flex h-16 items-center justify-between px-4 md:px-8">
            <div className="relative h-8 w-[160px]" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-background"
    >
      <div className="w-full border-b border-border">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          <Link 
            href="/#home" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              setTargetSection("home");
              document.querySelector("#home")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="relative h-8 w-[160px]">
              <Image
                src={logoSrc}
                alt="Embers Marketing"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <nav className="hidden gap-6 md:flex z-50">
              {navItems.map((item) => (
                <AnimatedNavLink
                  key={item.href}
                  href={item.href}
                  isActive={activeSection === item.sectionId}
                  isTarget={targetSection === item.sectionId}
                  layoutId="nav-underline"
                  onNavigate={() => setTargetSection(item.sectionId)}
                >
                  {item.name}
                </AnimatedNavLink>
              ))}
            </nav>

            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="-mr-2 text-foreground hover:text-foreground/80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background border-border sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-foreground">Navigation Menu</SheetTitle>
                </SheetHeader>
                <nav className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <AnimatedNavLink
                      key={item.href}
                      href={item.href}
                      isActive={activeSection === item.sectionId}
                      isTarget={targetSection === item.sectionId}
                      layoutId="mobile-nav-underline"
                      onNavigate={() => {
                        setIsOpen(false);
                        setTargetSection(item.sectionId);
                      }}
                    >
                      <span className="text-lg">{item.name}</span>
                    </AnimatedNavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 

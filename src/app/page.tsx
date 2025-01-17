import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { AuthoritySection } from "@/components/sections/authority";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { ApproachSection } from "@/components/sections/approach";
import { SuccessSection } from "@/components/sections/success";
import { FailureSection } from "@/components/sections/failure";
import { ContactSection } from "@/components/sections/contact";
import { MainNav } from "@/components/layout/main-nav";
import { StickyCTA } from "@/components/ui/sticky-cta";

export const metadata: Metadata = {
  title: "Turn Your Hidden Potential into Real Growth | Embers Marketing",
  description: "We help great businesses reach more customers by turning their hidden potential into clear messages that connect. Book your free 15-minute chat today.",
};

export default function HomePage() {
  return (
    <>
      <MainNav />
      <main className="flex-1 relative">
        <HeroSection />
        <div className="mx-auto max-w-screen-xl">
          <ProblemSection />
          <AuthoritySection />
          <ApproachSection />
          <HowItWorksSection />
          <SuccessSection />
          <FailureSection />
          <ContactSection />
        </div>
      </main>
      <StickyCTA />
    </>
  );
}

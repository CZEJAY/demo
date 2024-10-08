import { Features } from "@/components/Landing Page/Features";
import { HeroSection } from "@/components/Landing Page/HeroSection";
import { HowItWorks } from "@/components/Landing Page/HowItWorks";
import { Reviews } from "@/components/Landing Page/Reviews";
import SolutionsForEveryone from "@/components/Landing Page/SolutionsForEveryone";
import { Teamwork } from "@/components/Landing Page/Teamwork";
import { UseCases } from "@/components/Landing Page/UseCases";
import { WhatWillYouCreate } from "@/components/Landing Page/WhatWillYouCreate";

export default function Home() {
  return (
    <main className="min-h-screen max-sm:mb-20 mb-40">
      <HeroSection />
      <div className=" max-sm:space-y-20 space-y-40 custom-container">
        <WhatWillYouCreate />
        <Reviews />
        <Features />
        <Teamwork />
        <SolutionsForEveryone />
        <HowItWorks />
        <UseCases />
      </div>
    </main>
  );
}

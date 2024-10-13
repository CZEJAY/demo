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
    <main className="mb-20 lg:mb-40">
      <HeroSection />
      <div className=" space-y-20 lg:space-y-40 custom-container">
        <WhatWillYouCreate />
        <Reviews />
        <Features />
        <Teamwork />
        <HowItWorks />
        <UseCases />
        <SolutionsForEveryone />
      </div>
    </main>
  );
}

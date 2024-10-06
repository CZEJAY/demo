import { Features } from "@/components/Landing Page/Features";
import { HeroSection } from "@/components/Landing Page/HeroSection";
import { HowItWorks } from "@/components/Landing Page/HowItWorks";
import { WhatWillYouCreate } from "@/components/Landing Page/WhatWillYouCreate";

export default function Home() {
  return (
    <main className="min-h-screen space-y-10">
      <HeroSection />

      <WhatWillYouCreate />

      <Features />
      <HowItWorks />
      {/* <HowItWorks />
      <HowItWorks />
      <HowItWorks /> */}
    </main>
  );
}

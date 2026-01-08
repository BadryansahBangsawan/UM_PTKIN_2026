"use client";

import HeroSection from "@/components/hero-section";
import InfoTabs from "@/components/info-tabs";
import AuthBoxes from "@/components/auth-boxes";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <InfoTabs />
      <AuthBoxes />
    </main>
  );
}

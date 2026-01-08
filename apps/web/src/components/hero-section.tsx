"use client";

import { Button } from "./ui/button";
import Countdown from "./countdown";

export default function HeroSection() {
  const targetDate = new Date("2026-05-30T16:00:00+09:00");

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Benner_primary.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white">
                UM-PTKIN 2026
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-medium">
                Ujian Masuk Perguruan Tinggi
              </p>
              <p className="text-xl md:text-2xl text-gray-200 font-medium">
                Keagamaan Islam Negeri
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  const element = document.getElementById("auth-section");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Daftar UM-PTKIN
              </Button>
            </div>

            <div className="pt-4">
              <Countdown targetDate={targetDate} />
            </div>
          </div>

          <div className="relative flex justify-center items-center"></div>
        </div>
      </div>
    </section>
  );
}

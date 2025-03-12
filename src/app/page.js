import React from "react";
import Hero from "@/components/homepage/hero/hero";
import Abt from "@/components/homepage/smabt/abt";
import Portfolio from "@/components/homepage/portfolio/portfolio";
import Services from "@/components/homepage/services/services";
import CTA from "@/components/homepage/CTA/CTA"; 
export default function Home() {
  return (
    <main>
      <Hero />
      <Abt />
      <Portfolio />
      <Services />
      <CTA />
    </main>
  )
}

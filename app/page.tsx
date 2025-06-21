'use client';

import React from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievement from "@/components/Achievement";
import Superior from "@/components/Superior";
import Car from "@/components/Car";
import Fact from "@/components/FactSearch";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Hero section - no animation needed as it's the first section */}
        <Hero />
        
        {/* Achievement section without animation */}
        <Achievement />
        
        {/* Animated sections */}
        <ScrollAnimation direction="up" delay={200}>
          <Superior />
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={100}>
          <Car />
        </ScrollAnimation>
        
        <ScrollAnimation direction="fade" delay={300}>
          <Fact />
        </ScrollAnimation>
      </main>
      
      {/* Footer with animation */}
      <ScrollAnimation direction="up" delay={0}>
        <Footer />
      </ScrollAnimation>
    </div>
  );
}
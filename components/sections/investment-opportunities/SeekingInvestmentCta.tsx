 

"use client";

import SplitFeatureSection from "@/components/shared/SplitFeatureSection";
import { Wallet, Compass, Users, TrendingUp } from "lucide-react";
 
export function SeekingInvestmentContent() {
  return (
    <SplitFeatureSection
      eyebrow="Seeking Investment"
      heading={
        <>
          You Build the Vision.
          <br />
          We Invest in the
          <br />
          <span className="text-accent-blue">Potential.</span>
        </>
      }
      paragraphs={[
        "Building a business with strong potential? Afaq Al Khaleej Management explores direct investment and strategic partnership opportunities with promising businesses across the UAE.",
        "We look beyond the idea—evaluating the market, business model, financial potential, leadership, and scalability to identify businesses where we believe meaningful long-term value can be built together.",
      ]}
      primaryCta={{ label: "Explore Investment Opportunities", href: "/services/afaq-investors" }}
      secondaryCta={{ label: "Submit your Business", href: "/contact-us" }}
      image={{
        src: "/images/investment/pitch-folder.png",
        alt: "Business pitch folder with charts",
        width: 500,
        height: 500,
      }}
      imagePosition="right"
      compactStats
      stats={[
        { icon: Wallet, title: "Capital" },
        { icon: Compass, title: "Strategy" },
        { icon: Users, title: "Connections" },
        { icon: TrendingUp, title: "Growth" },
      ]}
    />
  );
}

export default function SeekingInvestmentSplit() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/investment/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SeekingInvestmentContent />
    </section>
  );
}
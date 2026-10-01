"use client";

import { Sparkles, BarChart3, Compass, ShieldCheck } from "lucide-react";
import SplitFeatureSection from "@/components/shared/SplitFeatureSection";

export function InvestmentHighlightsContent() {
  return (
    <SplitFeatureSection
      eyebrow="Investment Service"
      heading={
        <>
          Discover Opportunities
          <br />
          With <span className="text-accent-blue">Growth Potential</span>
        </>
      }
      paragraphs={[
        "Afaq Al Khaleej connects investors with carefully selected business and investment opportunities across the UAE. Backed by market insights, feasibility analysis and strategic guidance, we help you make informed investment decisions.",
      ]}
                primaryCta={{ label: "Explore Afaq Investment Service", href: "/investment-opportunities#submit-business" }}
      secondaryCta={{ label: "Talk to our Consultant", href: "/contact-us" }}
      image={{
        src: "/images/investment/growth-chart.png",
        alt: "Investment growth chart with coins",
        width: 500,
        height: 500,
      }}
      imagePosition="left"
      stats={[
        { icon: Sparkles, title: "Curated Opportunities", description: "Handpicked investment opportunities with strong growth potential" },
        { icon: BarChart3, title: "Data Driven Insights", description: "In depth market research, analysis and financial evaluation" },
        { icon: Compass, title: "Strategic Guidance", description: "Expert advisory to help you invest with clarity and confidence" },
        { icon: ShieldCheck, title: "Risk Aware Approach", description: "Structured evaluation and risk assessment for informed decision making." },
      ]}
    />
  );
}

export default function InvestmentHighlights() {
  return (
    <section
      style={{
        backgroundImage: "url('/images/investment/bg-pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <InvestmentHighlightsContent />
    </section>
  );
}
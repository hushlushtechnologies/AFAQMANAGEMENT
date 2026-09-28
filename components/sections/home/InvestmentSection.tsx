"use client";

import { SeekingInvestmentContent } from "../investment-opportunities/SeekingInvestmentCta";
import { InvestmentHighlightsContent } from "./InvestmentHighlightsContent";
 
 
export default function InvestmentSection() {
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
      <SeekingInvestmentContent />
    </section>
  );
}
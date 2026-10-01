 import type { Metadata } from "next";
import WhyAfaq from "@/components/sections/home/WhyAfaq";
import ReadyForNextStage from "@/components/sections/investment-opportunities/ReadyForNextStage";
import SeekingInvestmentCta from "@/components/sections/investment-opportunities/SeekingInvestmentCta";
import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import InvestmentOverview from "@/components/services/investment-services/InvestmentOverview";
import InvestmentServiceHero from "@/components/services/investment-services/InvestmentServiceHero";
import SectorGrid from "@/components/services/investment-services/SectorGrid";
import ClosingCta from "@/components/shared/ClosingCta";

export const metadata: Metadata = {
  title: "Investment Services",
  description:
    "Afaq Al Khaleej Management Consultants connects investors with opportunities across real estate, hospitality, technology, and other sectors in the UAE.",
  alternates: {
    canonical: "/services/investment-services",
  },
  openGraph: {
    title: "Investment Services | Afaq Al Khaleej Management Consultants",
    description:
      "Explore investment opportunities across real estate, hospitality, technology, automotive, events, interiors, and other sectors in the UAE.",
    url: "/services/investment-services",
  },
};

export default function InvestmentServicesPage() {
  return (
    <main>
      <InvestmentServiceHero />
      <InvestmentOverview />
      <SectorGrid />
      <ReadyForNextStage />
      {/* <SeekingInvestmentCta /> */}
      <SeekingInvestmentSplit />
      <WhyAfaq />
      <Faq
        faqs={[
          {
            question:
              "What types of investment opportunities does Afaq provide?",
            answer:
              "We help investors explore opportunities across sectors such as real estate, hospitality, technology, automotive, events, interiors, and other business ventures in the UAE.",
          },
          {
            question: "Are investment returns guaranteed?",
            answer:
              "No. Investment returns are not guaranteed. Any ROI figures, forecasts, or projections presented are indicative and may vary depending on business performance, market conditions, investment terms, and other factors.",
          },
          {
            question: "How does Afaq evaluate investment opportunities?",
            answer:
              "Our evaluation may consider factors such as market potential, business model, financial outlook, competitive environment, potential risks, growth prospects, and strategic fit.",
          },
          {
            question:
              "Can international investors explore opportunities in the UAE?",
            answer:
              "Yes. We work with both UAE-based and international investors interested in exploring business and investment opportunities within the UAE.",
          },
          {
            question: "Is there a minimum amount required to invest?",
            answer:
              "Investment requirements vary depending on the individual opportunity. Each opportunity may have its own investment range, structure, terms, and eligibility requirements.",
          },
          {
            question: "Can I speak with the business owner before investing?",
            answer:
              "Where appropriate and subject to the opportunity and relevant parties, Afaq can help facilitate introductions between interested investors and business owners or representatives as part of the evaluation process.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}
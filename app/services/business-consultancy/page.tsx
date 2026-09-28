import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import BusinessChallenges from "@/components/services/business-consultancy/BusinessChallenges";
import BusinessConsultancyHero from "@/components/services/business-consultancy/BusinessConsultancyHero";
import ConsultancyExpertise from "@/components/services/business-consultancy/ConsultancyExpertise";
import MarketIntelligence from "@/components/services/business-consultancy/MarketIntelligence";
import ClosingCta from "@/components/shared/ClosingCta";

export default function BusinessConsultancyPage() {
  return (
    <main>
      <BusinessConsultancyHero />
      <BusinessChallenges />
      <ConsultancyExpertise />
      {/* <MarketIntelligence/> */}
      <SeekingInvestmentSplit />
      <Faq
        faqs={[
          {
            question: "What business consultancy services does Afaq provide?",
            answer:
              "We support businesses across strategy and planning, market research, growth and expansion, financial and operational strategy, restructuring, risk assessment, corporate structuring, and performance improvement.",
          },
          {
            question:
              "Who can benefit from Afaq's business consultancy services?",
            answer:
              "Our consultancy services are designed for entrepreneurs, startups, SMEs, established companies, international businesses entering the UAE, and organizations preparing for growth, expansion, or restructuring.",
          },
          {
            question: "Can you help a company enter the UAE market?",
            answer:
              "Yes. We can help businesses understand the UAE market, assess opportunities and competition, develop an appropriate market-entry strategy, and identify the business requirements needed to establish and operate in the UAE.",
          },
          {
            question:
              "Can Afaq help an existing business that is struggling to grow?",
            answer:
              "Yes. We can assess your current strategy, market position, operations, financial structure, competitive environment, and growth challenges to identify areas for improvement and develop practical recommendations.",
          },
          {
            question: "Do you provide market research and competitor analysis?",
            answer:
              "Yes. Our market intelligence services can include industry research, competitor analysis, customer insights, market trends, opportunity identification, market-entry analysis, and expansion assessment.",
          },
          {
            question:
              "Can you help us expand our business across the UAE or GCC?",
            answer:
              "Yes. Depending on your objectives, we can assess new markets, locations, customer segments, partnerships, and expansion opportunities and help develop a structured growth strategy.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}

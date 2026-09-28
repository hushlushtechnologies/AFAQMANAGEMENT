import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import FeasibilityHero from "@/components/services/feasibility-studies/FeasibilityHero";
import WhatInsideStudy from "@/components/services/feasibility-studies/WhatInsideStudy";
import WhoNeedsFeasibility from "@/components/services/feasibility-studies/WhoNeedsFeasibility";
import ClosingCta from "@/components/shared/ClosingCta";

export default function FeasibilityStudiesPage() {
  return (
    <main>
      <FeasibilityHero />
      <WhatInsideStudy />
      <WhoNeedsFeasibility />
      <SeekingInvestmentSplit />
      <Faq
        faqs={[
          {
            question: "What is included in an Afaq feasibility study?",
            answer:
              "Depending on the project, a feasibility study can cover market research, competitor analysis, business model assessment, financial analysis, operational requirements, risk assessment, and growth opportunities to provide a clearer picture of the project's viability.",
          },
          {
            question:
              "Why should I conduct a feasibility study before starting a business?",
            answer:
              "A feasibility study helps test your assumptions before making significant commitments. It can identify market demand, expected costs, potential revenue scenarios, competition, operational requirements, and key risks that may influence your decision.",
          },
          {
            question: "Can Afaq prepare feasibility studies for investors?",
            answer:
              "Yes. We can evaluate a proposed business or project from an investment perspective, examining its market environment, business model, financial assumptions, risks, and potential opportunities to support informed decision-making.",
          },
          {
            question:
              "Can you conduct a feasibility study for an existing business?",
            answer:
              "Yes. Feasibility studies can also support existing businesses considering expansion, a new branch, a new product or service, additional investment, or entry into a new market.",
          },
          {
            question:
              "Do you provide financial projections and break-even analysis?",
            answer:
              "Where relevant, our financial assessment can include estimated investment requirements, revenue and cost projections, cash-flow scenarios, break-even analysis, profitability scenarios, and potential return calculations based on available information and stated assumptions.",
          },
          {
            question: "Can you evaluate opportunities anywhere in the UAE?",
            answer:
              "Yes. Afaq can support feasibility assessments for opportunities across the UAE. The research approach will depend on the specific Emirate, sector, target customers, competitive environment, and nature of the project.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}

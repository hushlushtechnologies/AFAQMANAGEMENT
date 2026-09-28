import EvaluationProcess from "@/components/sections/investment-opportunities/EvaluationProcess";
import InvestmentCriteria from "@/components/sections/investment-opportunities/InvestmentCriteria";
import InvestmentPhilosophy from "@/components/sections/investment-opportunities/InvestmentPhilosophy";
import OpportunitiesHero from "@/components/sections/investment-opportunities/OpportunitiesHero";
import SubmitBusinessForm from "@/components/sections/investment-opportunities/SubmitBusinessForm";
import Faq from "@/components/sections/shared/Faq";
import WhyPartner from "@/components/sections/shared/WhyPartner";
import ClosingCta from "@/components/shared/ClosingCta";

export default function InvestmentOpportunitiesPage() {
  return (
    <main>
      <OpportunitiesHero />
      <InvestmentPhilosophy />
      <InvestmentCriteria />
      <EvaluationProcess />
       <WhyPartner />
       <SubmitBusinessForm />
       <Faq
        faqs={[
          {
            question: "Does Afaq Al Khaleej invest directly in businesses?",
            answer:
              "Yes. Afaq explores opportunities to invest directly in promising businesses where we see strong market potential, a sustainable business model, capable leadership, and long-term strategic value.",
          },
          {
            question: "What types of businesses does Afaq consider for investment?",
            answer:
              "We consider businesses across various industries in the UAE and wider GCC that show strong fundamentals, scalable models, and ambitious, capable founding teams.",
          },
          {
            question: "Does my business need to already be generating revenue?",
            answer:
              "Not necessarily. While a proven revenue model strengthens an application, we also evaluate market potential, business model viability, and team strength for earlier-stage opportunities.",
          },
          {
            question: "How much investment can I request?",
            answer:
              "Investment amounts vary depending on the opportunity, business stage, and growth plan. Our team reviews each submission individually to determine the right fit.",
          },
          {
            question: "What information should I provide when submitting my business?",
            answer:
              "Share your company details, industry, country of operation, a brief description of your business, and any supporting documents such as a pitch deck to help our team understand your opportunity.",
          },
          {
            question: "What does Afaq evaluate before making an investment?",
            answer:
              "We evaluate market opportunity, business model and financial health, leadership and team capability, scalability, and alignment with our long-term investment philosophy.",
          },
        ]}
      />
         <ClosingCta />
    </main>
  );
}

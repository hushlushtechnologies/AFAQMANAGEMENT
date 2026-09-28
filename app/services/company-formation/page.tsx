import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import CompanyFormationHero from "@/components/services/company-formation/CompanyFormationHero";
import MainlandVsFreezone from "@/components/services/company-formation/MainlandVsFreezone";
import WeHandleEverything from "@/components/services/company-formation/WeHandleEverything";
import WhyAfaqPartner from "@/components/services/company-formation/WhyAfaqPartner";
import ClosingCta from "@/components/shared/ClosingCta";

export default function CompanyFormationPage() {
  return (
    <main>
      <CompanyFormationHero />
      <MainlandVsFreezone />
      <WeHandleEverything />
      <WhyAfaqPartner />
       <SeekingInvestmentSplit />
       <Faq
        faqs={[
          {
            question: "Should I choose a Mainland or Free Zone company?",
            answer:
              "The right option depends on your business activity, target market, operational requirements, office needs, visa requirements, and preferred jurisdiction. Our team can understand your plans and help you compare the available setup options.",
          },
          {
            question: "Can a foreign national start a company in the UAE?",
            answer:
              "Yes. Foreign nationals can establish businesses in the UAE, subject to the rules applicable to the chosen business activity, legal structure, and jurisdiction. Ownership and setup requirements may vary.",
          },
          {
            question: "What documents are required to start a UAE company?",
            answer:
              "Requirements vary depending on the jurisdiction, business activity, shareholders, and company structure. Common requirements may include passport copies, identification documents, proposed trade names, business activity details, and other supporting documentation.",
          },
          {
            question: "How long does company formation take?",
            answer:
              "Formation timelines vary depending on the business activity, jurisdiction, required approvals, documentation, and relevant authorities. Once we understand your requirements, our team can explain the expected process and applicable steps.",
          },
          {
            question: "How much does it cost to establish a company in the UAE?",
            answer:
              "There is no single fixed cost. Setup costs depend on factors such as mainland or free zone jurisdiction, license type, business activities, office requirements, number of visas, government fees, and additional approvals.",
          },
          {
            question: "Can Afaq help with visas after the company is established?",
            answer:
              "Yes. We can assist with applicable investor, partner, employee, and dependent visa processes, along with related medical applications, Emirates ID procedures, and ongoing PRO requirements.",
          },
        ]}
      />
       <ClosingCta />
    </main>
  );
}

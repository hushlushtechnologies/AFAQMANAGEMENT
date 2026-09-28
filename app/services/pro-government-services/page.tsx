import Faq from "@/components/sections/shared/Faq";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import AllProServices from "@/components/services/pro-government-services/AllProServices";
import GovernmentAuthorities from "@/components/services/pro-government-services/GovernmentAuthorities";
import HowItWorks from "@/components/services/pro-government-services/HowItWorks";
import ProGovernmentHero from "@/components/services/pro-government-services/ProGovernmentHero";
import ClosingCta from "@/components/shared/ClosingCta";

export default function ProGovernmentServicesPage() {
  return (
    <main>
      <ProGovernmentHero />
      <AllProServices />
      <HowItWorks />
      <GovernmentAuthorities />
      <SeekingInvestmentSplit />
      <Faq
        faqs={[
          {
            question: "What PRO & Government Services does Afaq provide?",
            answer:
              "We assist with a wide range of services including business licensing, trade license renewals, visa services, Emirates ID applications, medical applications, government approvals, NOCs, work permits, document processing, VAT registration, corporate tax support, Ejari, attestations, and other PRO requirements.",
          },
          {
            question: "Do you provide PRO services across all seven Emirates?",
            answer:
              "Yes. Afaq supports businesses and individuals across the UAE. The exact process, documentation, fees, and authority involved will depend on the service and Emirate.",
          },
          {
            question: "Can Afaq assist with UAE visa services?",
            answer:
              "Yes. We can assist with various visa-related processes, including employment, investor or partner, family, Golden Visa, renewals, cancellations, and related Emirates ID and medical procedures, subject to applicable eligibility and authority requirements.",
          },
          {
            question: "Can you help with company licenses and renewals?",
            answer:
              "Yes. We assist with mainland and free zone licensing requirements, trade license renewals, selected specialized licenses, amendments, and related business documentation.",
          },
          {
            question: "Can you assist with government approvals and NOCs?",
            answer:
              "Yes. Depending on your requirement, our team can assist with applications and coordination involving relevant UAE authorities, including RTA, police authorities, MOI, economic departments, free zones, and other applicable entities.",
          },
          {
            question: "What documents do I need to start a PRO service?",
            answer:
              "Document requirements vary by service. Tell us what you need, and our team will identify the applicable requirements and guide you on the documents needed before processing begins.",
          },
        ]}
      />
       <ClosingCta />
    </main>
  );
}

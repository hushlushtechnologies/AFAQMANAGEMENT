import About from "@/components/sections/home/About";
import ClosingCta from "@/components/shared/ClosingCta";
import Faq from "@/components/sections/shared/Faq";
import FinalCta from "@/components/sections/home/FinalCta";
import Hero from "@/components/sections/home/Hero";
import InvestmentHighlights from "@/components/sections/home/InvestmentHighlights";
import NationwideReach from "@/components/sections/home/NationwideReach";
import ProServicesCloud from "@/components/sections/shared/ProServicesCloud";
import WhyAfaq from "@/components/sections/home/WhyAfaq";
import GroupCompanies from "@/components/shared/GroupCompanies";
import SeekingInvestmentSplit from "@/components/sections/shared/SeekingInvestmentSplit";
import Services from "@/components/shared/Services";
import InvestmentSection from "@/components/sections/home/InvestmentSection";
import { Metadata } from "next";



 

export default function Home() {
  return (
    <main>
      <Hero />
      <About />

      <Services />
      {/* <InvestmentHighlights />
      <SeekingInvestmentSplit /> */}
      <InvestmentSection />
      <WhyAfaq />
      <ProServicesCloud />
      <NationwideReach />
      <GroupCompanies />
      <FinalCta />
      <Faq
        faqs={[
          {
            question: "What services does Afaq Al Khaleej Management provide?",
            answer:
              "Afaq Al Khaleej Management provides investment advisory, business consultancy, company formation, feasibility studies, PRO and government services, digital business solutions, and investor-business connections across the UAE.",
          },
          {
            question: "Can Afaq help me start a business in the UAE?",
            answer:
              "Yes. We guide you through every step of business setup in the UAE, from choosing the right jurisdiction to licensing, registration, and ongoing compliance.",
          },
          {
            question:
              "Do you provide company formation services across the UAE?",
            answer:
              "Yes, we support company formation across UAE mainland and free zones, handling structuring, licensing, and registration end to end.",
          },
          {
            question: "Can Afaq connect investors with business opportunities?",
            answer:
              "Yes. Through Afaq Investors & Opportunities, we connect investors with carefully selected business and investment opportunities across the UAE.",
          },
          {
            question: "Do you help businesses find investors?",
            answer:
              "Yes, we help businesses with strong potential connect with investors through strategic partnership and direct investment opportunities.",
          },
          {
            question: "What PRO and government services do you provide?",
            answer:
              "We assist with licensing, visas, PRO services, government approvals, VAT and corporate tax registration, Emirates ID, and more.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}

import FinalCta from "@/components/sections/home/FinalCta";
import InvestmentSection from "@/components/sections/home/InvestmentSection";
import Faq from "@/components/sections/shared/Faq";
import CoreServices from "@/components/services/finance-management/CoreServices";
import FinanceBusinessNeed from "@/components/services/finance-management/FinanceBusinessNeed";
import FinanceManagementHero from "@/components/services/finance-management/FinanceManagementHero";
import FinancialClarityValue from "@/components/services/finance-management/FinancialClarityValue";
import ClosingCta from "@/components/shared/ClosingCta";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Management",
  description:
    "Afaq Al Khaleej Management Consultants provides finance management and CFO advisory — cash flow monitoring, budgeting, receivables oversight, and monthly management reporting for businesses in the UAE.",
  alternates: {
    canonical: "/services/finance-management",
  },
  openGraph: {
    title: "Finance Management | Afaq Al Khaleej Management Consultants",
    description:
      "Finance management and CFO advisory — performance review, cash flow monitoring, budgeting, expense control, and monthly management reporting.",
    url: "/services/finance-management",
  },
};

export default function FinanceManagementPage() {
  return (
    <main>
      <FinanceManagementHero />
      <FinanceBusinessNeed />
      <CoreServices />
      <FinancialClarityValue />
      <InvestmentSection />
      <Faq
        faqs={[
          {
            question: "What does your finance management service include?",
            answer:
              "We provide structured financial management covering performance review, cash flow monitoring, budgeting, expense control, receivables oversight, and monthly management reporting.",
          },
          {
            question:
              "Do you replace our existing accountant or bookkeeping team?",
            answer:
              "No. We work alongside your existing accounting team, using their records to deliver management-level insights, financial analysis, and CFO-level guidance.",
          },
          {
            question: "How often will we receive financial reports?",
            answer:
              "Reports and insights are typically delivered monthly, with ad-hoc updates whenever significant changes in cash flow, profitability, or receivables require attention.",
          },
          {
            question:
              "Can this service support group companies with multiple entities?",
            answer:
              "Yes. Our finance management model is designed to work across group structures, consolidating financial visibility for multiple related companies.",
          },
          {
            question: "Is our financial information kept confidential?",
            answer:
              "Absolutely. All financial data is handled under strict confidentiality, and access is limited to the dedicated team assigned to your account.",
          },
          {
            question: "Do you provide CFO-level advisory, not just reporting?",
            answer:
              "Yes. Beyond reporting, our team supports budgeting, cost control, financial planning, and business decisions with management-focused insights.",
          },
        ]}
      />
      <ClosingCta />
    </main>
  );
}

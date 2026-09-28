 "use client";
 
 import MarqueeBanner from "@/components/ui/MarqueeBanner";
 
import {
  TrendingUp,
  Handshake,
  Building2,
  Search,
  ShieldCheck,
  Laptop,
  Briefcase,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const marqueeItems = [
  "Verified High ROI Opportunities",
  "Business Setup Experts",
  "UAE Market Intelligence",
  "UAE-Wide Business Support",
  "Trusted Investor Connections",
  "Feasibility & Market Analysis",
  "Smarter Investment Decisions",
  "Building Sustainable Growth",
];

export default function Services() {
  return (
    <section className="my-16 lg:my-28  ">
      <MarqueeBanner items={marqueeItems} rotate />

      <div className="mx-auto mt-16 max-w-3xl px-6 text-center">
        <h2 className="font-heading text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
          Everything You Need to <span className="text-primary">Build,</span>
          <br />
          <span className="text-primary">Invest &amp; Grow</span> in the UAE
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base">
          From Investment planning to business setup and government services,
          Afaq Al Khaleej provides end to end solutions tailored to your goals.
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-14 max-w-7xl space-y-6 px-6">
        {/* row 1 — narrow left card, wide right card (6:11) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[6fr_11fr]">
          <ServiceCard
            image="/images/services/investment-services.png"
            title="Investment Services"
            description="Strategic investment planning, portfolio management, partnership opportunities, real estate advisory, and ROI evaluation designed to support informed investment decisions."
            href="/services/investment-services"
            icon={TrendingUp}
            delay={0}
          />
          <ServiceCard
            image="/images/services/afaq-investors.png"
            title="Afaq Investors & Opportunities"
            description="We help connect investors with business opportunities and facilitate strategic relationships between investors, entrepreneurs, and growing businesses."
            href="/services/afaq-investors"
            icon={Handshake}
            secondaryCta={{ label: "Interested with Afaq Investment", href: "/contact-us" }}
            delay={0.1}
          />
        </div>

        {/* row 2 — asymmetric bento: wide left column, narrow right card (7:4) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[7fr_4fr] md:items-stretch">
          <div className="flex flex-col gap-6">
            <ServiceCard
              image="/images/services/company-formation.png"
              title="Company Formation"
              description="End-to-end company formation support covering business structuring, licensing, registration, and setup across UAE mainland and free zones."
              href="/services/company-formation"
              icon={Building2}
              delay={0}
            />
            <ServiceCard
              image="/images/services/feasibility-studies.png"
              title="Feasibility Studies"
              description="Comprehensive market, financial, operational, and competitive analysis to help determine the viability, potential, and risks of your business idea."
              href="/services/feasibility-studies"
              icon={Search}
              delay={0.15}
            />
          </div>

          <ServiceCard
            image="/images/services/pro-government.png"
            title="PRO & Government Services"
            description="From licenses and visas to government approvals, tax registration, documentation, and corporate PRO requirements, we help businesses navigate UAE processes efficiently."
            href="/services/pro-government-services"
            icon={ShieldCheck}
            checklist={[
              "Licensing",
              "Visas",
              "PRO Services",
              "Government Approvals",
              "VAT & Corporate Tax",
              "Emirates ID & more...",
            ]}
            className="h-full"
            delay={0.1}
          />
        </div>

        {/* row 3 — narrow left card, wide right card (6:11), same ratio as row 1 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[6fr_11fr]">
          <ServiceCard
            image="/images/services/digital-business.png"
            title="Digital Business Solutions"
            description="Digital platforms, websites, software solutions, automation, and technology services that help businesses operate smarter and grow in a connected economy."
            href="/services/digital-business-solutions"
            icon={Laptop}
            delay={0}
          />
          <ServiceCard
            image="/images/services/business-consultancy.png"
            title="Business Consultancy"
            description="Market research, feasibility studies, financial planning, operational strategy, and risk assessment to help businesses build stronger foundations and sustainable growth."
            href="/services/business-consultancy"
            icon={Briefcase}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}
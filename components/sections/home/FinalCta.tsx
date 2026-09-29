"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, BarChart3, Compass, Users, Target, Building2 } from "lucide-react";
import AudienceCard from "./AudienceCard";

export default function FinalCta() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Let&apos;s Create the Next Opportunity</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Whether You&apos;re Investing or Building,
          <br />
          Start with the <span className="text-primary">Right Partner</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej Management connects investors with promising
          opportunities and helps entrepreneurs and businesses turn ambitious
          ideas into structured growth across the UAE
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="relative mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:gap-28">
        <AudienceCard
          eyebrow="For Investors"
          heading="Discover Opportunities with Potential"
          paragraph="Looking to invest in the UAE? we help investors identify, evaluate, and understand selected business and investment opportunities with strategic guidance throughout the decision making journey"
          features={[
            { icon: Sparkles, title: "Curated Opportunities", description: "Explore selected business and investment possibilities." },
            { icon: BarChart3, title: "Opportunities Evaluation", description: "Understand market potential, feasibility, and key considerations." },
            { icon: Compass, title: "Strategic Advisory", description: "Make informed decisions aligned with your investment objectives" },
          ]}
          primaryCta={{ label: "Explore Afaq Investment Service", href: "/services/investment-services" }}
          secondaryCta={{ label: "Speak with an Advisor", href: "/contact-us" }}
          image="/images/final-cta/investors.jpg"
          accent="blue"
        />

        <AudienceCard
          eyebrow="For Business"
          heading="Turn Your Business Vision into Growth"
          paragraph="Whether you're launching a new venue, seeking investment, or expanding an existing company, Afaq provides the strategy, connection and business support needed to move forward across the UAE"
          features={[
            { icon: Users, title: "Investor Connection", description: "Connect your business with potential investment partners" },
            { icon: Target, title: "Business Strategy", description: "Build a structured roadmap for sustainable growth" },
            { icon: Building2, title: "Setup & Corporate Support", description: "Access company formation, PRO, feasibility, and consultancy services" },
          ]}
          primaryCta={{ label: "Discuss Your Business", href: "/contact-us" }}
          secondaryCta={{ label: "Explore Our Services", href: "/services" }}
          image="/images/final-cta/business.jpg"
          accent="gold"
          delay={0.1}
        />

        {/* center connector badge — desktop only */}
         <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="relative h-24 w-24 rounded-full p-[4px]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{ background: "conic-gradient(#1D7BE0 0deg 180deg, #EBB811 180deg 360deg)" }}
            />
            <div className="relative flex h-full w-full items-center justify-center rounded-full bg-background">
              <Image src="/images/logo.svg" alt="AFAQ" width={56} height={56} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
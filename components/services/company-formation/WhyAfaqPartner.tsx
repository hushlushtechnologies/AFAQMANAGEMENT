"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProServicesCloud from "@/components/sections/shared/ProServicesCloud";
import FeatureCard from "@/components/sections/shared/FeatureCard";
 
const features = [
  {
    image: "/images/services/company-formation/business-setup-expertise.png",
    title: "Business Setup Expertise",
    description: "End to end support for company formation across mainland and freezones",
  },
  {
    image: "/images/services/company-formation/pro-government-support.png",
    title: "PRO & Government Support",
    description: "We handle licensing, visas, renewals and government processes efficiently and on time",
  },
  {
    image: "/images/services/company-formation/business-consultancy.png",
    title: "Business Consultancy",
    description: "Strategic insights and practical solutions to help you make confident business decisions",
  },
  {
    image: "/images/services/company-formation/feasibility-market-intelligence.png",
    title: "Feasibility & Market Intelligence",
    description: "Feasibility studies and market research to validate your ideas and reduce business risks",
  },
  {
    image: "/images/services/company-formation/digital-business-solutions.png",
    title: "Digital Business Solutions",
    description: "Technology and digital solutions to streamline operations and drive efficiency",
  },
  {
    image: "/images/services/company-formation/growth-focused-solutions.png",
    title: "Growth Focused Solutions",
    description: "Practical strategies and innovative solutions designed to drive sustainable growth and long term value and growth",
  },
];

export default function WhyAfaqPartner() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Why Afaq Al Khaleej</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          More Than Company Formation.
          <br />
          <span className="text-primary">A Partner for your Business Journey.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We go beyond setup. Afaq supports you at every stage so you can
          focus on building, growing and scaling your business with
          confidence
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} {...feature} delay={i * 0.08} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-8 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
            <Image src="/images/logo.svg" alt="" width={20} height={20} className="h-5 w-5 object-contain" />
          </span>
          <span className="hidden h-8 w-px bg-border sm:block" />
          <p className="text-sm text-foreground md:text-base">
            We don&apos;t just set up your company.{" "}
            <span className="font-semibold text-primary">We support what comes next.</span>
          </p>
        </div>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Connect with Us
          <ArrowRight size={16} />
        </Link>
      </motion.div>

      <div className="mt-16">
        <ProServicesCloud />
      </div>
    </section>
  );
}
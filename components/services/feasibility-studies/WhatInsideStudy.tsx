"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Swords, Layers, LineChart, Settings, ShieldAlert } from "lucide-react";
import CategoryChecklistCard from "@/components/shared/CategoryChecklistCard";

const categories = [
  { icon: BarChart3, title: "Market Research", image: "/images/services/feasibility-studies/market-research.png", items: ["Market Size & Demand", "Industry Overview", "Market Trends", "Customer Segments", "Growth Opportunities"] },
  { icon: Swords, title: "Competitor Analysis", image: "/images/services/feasibility-studies/competitor-analysis.png", items: ["Key Competitors", "Market Positioning", "Pricing Analysis", "Strengths & Weaknesses", "Market Gaps"] },
  { icon: Layers, title: "Business Model Analysis", image: "/images/services/feasibility-studies/business-model.png", items: ["Value Proposition", "Revenue Model", "Target Customer", "Cost Structure", "Commercial Potential"] },
  { icon: LineChart, title: "Financial Analysis", image: "/images/services/feasibility-studies/financial-analysis.png", items: ["Startup / Investment Requirements", "Revenue Projection", "Operating Costs", "Cash Flow Analysis", "Break Even Analysis", "Profitability Assessment"] },
  { icon: Settings, title: "Operational Assessment", image: "/images/services/feasibility-studies/operational-assessment.png", items: ["Resources", "Staffing", "Location", "Suppliers", "Infrastructure", "Operational Requirements"] },
  { icon: ShieldAlert, title: "Risk & Opportunities", image: "/images/services/feasibility-studies/risk-opportunities.png", items: ["Market Risks", "Financial Risks", "Operational Risks", "Competitive Risks", "Growth Opportunities", "Mitigation Considerations"] },
];

const closingPoints = [
  "360° Business Evaluation",
  "Data-Driven Analysis",
  "Actionable Recommendations",
  "Better Decisions, Lower Risk",
];

export default function WhatInsideStudy() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">What&apos;s Inside Our Study</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-background sm:text-4xl md:text-5xl"
        >
          Feasibility Study
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-background/70 md:text-base"
        >
          Our studies deliver comprehensive insight across every critical
          dimension so you can make confident, data driven decisions
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <CategoryChecklistCard key={category.title} {...category} delay={(i % 3) * 0.1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 flex max-w-7xl flex-col gap-6 rounded-2xl bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-center md:gap-14 lg:mx-auto"
      >
        {closingPoints.map((point) => (
          <div key={point} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground">
              <Image src="/images/logo.svg" alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
            </span>
            <span className="max-w-[160px] text-sm font-medium text-foreground">{point}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
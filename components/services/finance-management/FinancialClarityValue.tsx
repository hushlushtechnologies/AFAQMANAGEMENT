"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Eye,
  Wallet,
  Receipt,
  SearchCheck,
  ClipboardCheck,
  Sprout,
  Handshake,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

const values: { icon: LucideIcon; title: string; description: string; image: string }[] = [
  {
    icon: Eye,
    title: "Clear Financial Visibility",
    description: "Get a structured view of revenue, profitability, cash position, receivables, expenses, and overall financial performance.",
    image: "/images/services/finance-management/clear-financial-visibility.png",
  },
  {
    icon: Wallet,
    title: "Stronger Cash Flow Control",
    description: "Monitor cash movement, upcoming commitments, and outstanding receivables to support better day-to-day financial planning.",
    image: "/images/services/finance-management/stronger-cash-flow-control.png",
  },
  {
    icon: Receipt,
    title: "Better Expense Management",
    description: "Identify rising costs, review spending patterns, and bring greater discipline to expense monitoring and budget control.",
    image: "/images/services/finance-management/better-expense-management.png",
  },
  {
    icon: SearchCheck,
    title: "Improved Receivables Oversight",
    description: "Gain centralized visibility into outstanding customer balances, overdue payments, collection status, and expected receipts.",
    image: "/images/services/finance-management/improved-receivables-oversight.png",
  },
  {
    icon: ClipboardCheck,
    title: "Informed Management Decisions",
    description: "Receive clear monthly financial insights, observations, and recommended actions that help management make decisions with greater confidence.",
    image: "/images/services/finance-management/informed-management-decisions.png",
  },
  {
    icon: Sprout,
    title: "Support for Sustainable Growth",
    description: "Use structured financial reporting, planning, and CFO-level guidance to evaluate opportunities and prepare the business for its next stage.",
    image: "/images/services/finance-management/support-for-sustainable-growth.png",
  },
];

function ValueCard({ item, delay }: { item: (typeof values)[number]; delay: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="relative flex h-[280px] flex-col justify-center overflow-hidden rounded-2xl border border-border bg-card p-6"
    >
      <div className="absolute inset-0">
        <Image src={item.image} alt={item.title} fill unoptimized className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card via-card/90 to-card/30" />
      </div>

      <div className="relative z-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary">
          <Icon size={20} />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function FinancialClarityValue() {
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
          <span className="text-sm font-semibold text-primary">Business Value</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl"
        >
          Financial Clarity That Supports
          <br />
          Better Business Decisions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          Our finance management model goes beyond maintaining financial
          records. We turn financial information into clear management
          insights — helping businesses improve control, understand
          performance, and make more informed decisions.
        </motion.p>

        <div className="mx-auto mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-primary/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-px w-10 bg-primary/60" />
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item, i) => (
          <ValueCard key={item.title} item={item} delay={(i % 3) * 0.1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:flex-row"
      >
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
            <Handshake size={20} />
          </span>
          <div className="hidden h-10 w-px bg-border sm:block" />
          <p className="text-center text-sm leading-relaxed text-foreground sm:text-left sm:text-base">
            We help management move from simply knowing the numbers to
            understanding what those numbers mean for the business.
          </p>
        </div>

        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Discuss your Project
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Wallet } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const documents = [
  "Trade Licence / Commercial Registration / Certificate of Incorporation",
  "Memorandum of Association / Articles of Association",
  "Notarised audited financial statements for the last financial year",
  "Power of Attorney",
];

const costs = [
  "Investment registration and annual updates, where applicable",
  "Sector licence or permit fees, where applicable",
  "Commercial registration fees and renewals",
  "Company gazette publication",
  "Commercial certificates",
  "Chamber of Commerce registration and annual renewal",
  "Corporate bank account requirements (vary by bank)",
];

function ListCard({
  icon: Icon,
  title,
  intro,
  items,
  delay,
}: {
  icon: typeof FileText;
  title: string;
  intro: string;
  items: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col rounded-3xl border border-border bg-gradient-card p-8"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-background">
        <Icon size={22} />
      </span>
      <h3 className="font-heading mt-5 text-2xl font-light text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{intro}</p>
      <ol className="mt-6 space-y-3">
        {items.map((item, i) => (
          <li key={item} className="flex items-start gap-3 text-sm text-foreground">
            <span className="mt-0.5 font-heading text-primary">{String(i + 1).padStart(2, "0")}</span>
            {item}
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

export default function DocumentsAndCosts() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Documents & Costs"
        heading={
          <>
            What You&apos;ll Need — <span className="text-primary">and What It Costs</span>
          </>
        }
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
        <ListCard
          icon={FileText}
          title="Documents Needed"
          intro="Common documents for setting up in Saudi Arabia. Your exact list depends on your investor route."
          items={documents}
          delay={0}
        />
        <ListCard
          icon={Wallet}
          title="Cost of Company Formation"
          intro="Registration is designed to be straightforward, but the final cost depends on your location, workforce size and other factors."
          items={costs}
          delay={0.12}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-10 flex max-w-6xl flex-col gap-6 rounded-2xl border border-primary/40 bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <p className="max-w-2xl text-sm leading-relaxed text-foreground md:text-base">
          Request a Saudi setup assessment and get an itemised estimate that
          separates government charges, third-party expenses and advisory fees.
        </p>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Get an Itemised Estimate
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}

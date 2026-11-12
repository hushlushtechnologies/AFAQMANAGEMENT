"use client";

import { motion } from "framer-motion";
import { Factory, Globe, Info, LucideIcon, Receipt } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const pillars: { icon: LucideIcon; title: string; text: string; chips?: string[] }[] = [
  {
    icon: Globe,
    title: "Strategic Location",
    text: "Saudi Arabia links Europe, Asia and Africa — a natural bridge for people, goods and services, and the largest economy in the Middle East.",
  },
  {
    icon: Receipt,
    title: "Double-Taxation Treaties",
    text: "Treaties with many countries help prevent businesses and individuals from being taxed twice on the same income, making the Kingdom more attractive to foreign investors.",
  },
  {
    icon: Factory,
    title: "Economic & Industrial Cities",
    text: "Industrial Cities focus on manufacturing and collaboration, while Economic Cities are large developments with incentives for new business.",
    chips: [
      "King Abdullah Economic City",
      "Prince Abdulaziz Bin Mousaed Economic City",
      "Knowledge Economic City",
      "Jazan Economic City",
    ],
  },
];

// TODO(client): figures supplied with the page content — re-check against
// current official sources before launch.
const stats = [
  { value: "36.95M", label: "Population" },
  { value: "15.36M", label: "Labour force" },
  { value: "50%", label: "Of the population under 25" },
  { value: "USD 29,920", label: "GDP per capita" },
  { value: "$389B", label: "Inward FDI stock" },
];

const benefits = [
  "A robust, diversifying economy",
  "Investor-friendly policies",
  "Access to government projects and contracts",
  "Foreign ownership options by business activity",
];

export default function KsaAdvantages() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Why Saudi Arabia"
        heading={
          <>
            The Advantages of <span className="text-primary">Business Setup in KSA</span>
          </>
        }
        paragraph="The largest Arab economy is investing heavily in its investment climate and making real progress in ease of doing business."
      />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, text, chips }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="group rounded-2xl bg-gradient-card p-7"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
              <Icon size={22} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
            {chips && (
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span key={c} className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
                    {c}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-5"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="bg-card px-6 py-7 text-center"
          >
            <p className="text-shine font-heading text-3xl">{s.value}</p>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-3 px-6">
        {benefits.map((b) => (
          <span key={b} className="rounded-full border border-border bg-surface/60 px-4 py-2 text-sm text-foreground">
            {b}
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-10 flex max-w-4xl items-start gap-4 rounded-2xl border border-accent-blue/40 bg-accent-blue/10 px-6 py-5"
      >
        <Info size={20} className="mt-0.5 shrink-0 text-accent-blue" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Before choosing a company structure, confirm which ownership and
          registration rules apply to your activity — some activities need a
          local partner or additional approvals. The{" "}
          <a
            href="https://misa.gov.sa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-blue underline underline-offset-2 hover:text-foreground"
          >
            Saudi Ministry of Investment
          </a>{" "}
          explains how requirements vary by activity.
        </p>
      </motion.div>
    </section>
  );
}

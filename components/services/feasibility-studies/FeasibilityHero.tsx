"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, Calculator, ShieldAlert, LineChart, LucideIcon } from "lucide-react";

const stats: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: TrendingUp, title: "Market Analysis", description: "Understand demand and opportunity." },
  { icon: Users, title: "Competitor Intelligence", description: "Know the market landscape." },
  { icon: Calculator, title: "Financial Feasibility", description: "Evaluate costs, revenue, and financial scenarios." },
  { icon: ShieldAlert, title: "Risk Assessment", description: "Identify potential challenges before committing." },
  { icon: LineChart, title: "Growth Potential", description: "Understand scalability and future opportunities." },
];

export default function FeasibilityHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/feasibility-studies/hero-bg.png"
        alt="Abstract gold particle wave pattern"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/85" />

      <div className="relative mx-auto max-w-3xl px-6 pb-16 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-accent-blue pl-4"
        >
          <span className="text-sm font-semibold text-accent-blue">Feasibility Studies</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Before You Invest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Turn uncertainty into informed decisions. Afaq combines market
          research, financial analysis, competitive intelligence, and risk
          assessment to evaluate the viability of your business idea,
          investment, or expansion in the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Request Feasibility Studies
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Explore More Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto mb-16 max-w-5xl rounded-2xl border border-border bg-card px-8 py-8 sm:mx-6 lg:mx-auto"
      >
        <div className="flex flex-wrap items-start justify-center gap-x-14 gap-y-8">
          {stats.slice(0, 3).map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex max-w-[220px] items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={18} />
              </span>
              <div>
                <span className="block text-base font-semibold text-foreground">{title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-start justify-center gap-x-14 gap-y-8">
          {stats.slice(3, 5).map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex max-w-[220px] items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={18} />
              </span>
              <div>
                <span className="block text-base font-semibold text-foreground">{title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
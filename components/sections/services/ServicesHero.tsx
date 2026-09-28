"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tagline = ["Investment", "Consultancy", "PRO Services", "Company Formation", "Feasibility", "Digital Solutions", "Opportunities"];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[400px] rounded-full bg-accent-blue/10 blur-[110px]" />

      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Our Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Expertise for Every Stage of
          <br />
          Your Business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          From launching a company and navigating UAE government processes
          to evaluating opportunities, securing investment, building
          strategy, and transforming digitally, Afaq brings the expertise
          your business needs under one connected ecosystem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#all-services"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Explore Our Services
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/investment-opportunities"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Explore Afaq Investment Service
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 pb-16 text-center"
      >
        {tagline.map((word, i) => (
          <span key={word} className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
              {word}
            </span>
            {i < tagline.length - 1 && <span className="text-primary">•</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
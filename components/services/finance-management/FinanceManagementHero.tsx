 "use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinanceManagementHero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-[380px] w-[380px] rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[380px] w-[380px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-accent-blue">Finance Management &amp; CFO Advisory</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-white sm:text-5xl md:text-6xl"
        >
          Beyond Accounting. Into
          <br />
          Better Business Decisions.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
        >
          Gain a clearer picture of your finances with structured financial
          management, insightful reporting, cash flow monitoring, and
          CFO-level guidance designed for SMEs, growing businesses, and group
          companies across the UAE.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Enquiry Now
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Explore More Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
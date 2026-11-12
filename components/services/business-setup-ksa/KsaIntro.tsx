"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const assessment = [
  "Which registration route fits your activity and investor profile",
  "The right company structure for your budget and ownership plans",
  "Which documents to prepare — and which need authentication",
  "Up-to-date guidance on local market and licensing changes",
];

export default function KsaIntro() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Start Your Business in Saudi Arabia</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Request a <span className="text-primary">Saudi Setup Assessment</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 space-y-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          <p>
            Tell us what your company plans to do in Saudi Arabia and who will
            own it. The legal, regulatory and cultural landscape can be hard to
            navigate as a new entrant — we make the process clearer, faster and
            far less cumbersome.
          </p>
          <p>
            With government agencies actively widening opportunities to attract
            foreign direct investment, our team helps you pick the best business
            structure for your budget and plan a profitable entry.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Request an Assessment
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 sm:p-10"
      >
        <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex items-center gap-3">
          <Image src="/images/logo.svg" alt="AFAQ" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="h-8 w-px bg-border" />
          <p className="font-heading text-xl font-light text-foreground">Your assessment covers</p>
        </div>
        <ul className="relative mt-7 space-y-4">
          {assessment.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Check size={13} />
              </span>
              <span className="text-sm text-foreground md:text-base">{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="relative mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
          The documents you need depend on your investor profile and business
          activity. If you already operate a company abroad, tell us where it&apos;s
          registered.
        </p>
      </motion.div>
    </section>
  );
}

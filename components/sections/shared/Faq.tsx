"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Info, ArrowRight, ShieldCheck, Layers, Globe2, Lock, Handshake } from "lucide-react";

export type FaqItem = { question: string; answer: string };

const trustItems = [
  { icon: ShieldCheck, label: "Trusted by Investors" },
  { icon: Layers, label: "End to End Business Solutions" },
  { icon: Globe2, label: "UAE Wide Expertise" },
  { icon: Lock, label: "Privacy & Confidentiality" },
];

export default function Faq({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">Frequently Asked Questions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-6 text-3xl font-light leading-[1.2] sm:text-4xl"
          >
            <span className="text-primary">Questions Today.</span>
            <br />
            <span className="text-foreground">Clarity for What&apos;s Next.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Find answers to common questions about investing, setting up a
            business, company formation, PRO services, and working with Afaq
            Al Khaleej Management across the UAE.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 rounded-2xl border border-border bg-gradient-card p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
              <Info size={18} />
            </span>
            <h3 className="mt-4 text-lg font-semibold text-foreground">Have More Questions?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every business and investment journey is different. Speak with
              our team to discuss your requirements and understand the right
              way forward.
            </p>
            <Link
              href="/contact-us"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(235,184,17,0.5)]"
            >
              Talk to our Consultant
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* right column — accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-6 w-px shrink-0 bg-primary/50" />
                  <span className="flex-1 text-base font-semibold text-foreground sm:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[52px] text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-14 flex max-w-7xl flex-col gap-6 rounded-2xl border border-border bg-gradient-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white text-foreground">
              <Icon size={18} />
            </span>
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
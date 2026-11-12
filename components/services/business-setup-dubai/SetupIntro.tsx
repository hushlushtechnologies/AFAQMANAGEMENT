"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const points = [
  "Activity, customer and workspace review before any recommendation",
  "Itemised quotation and a document & approvals checklist",
  "PRO, accounting and tax support once your company is running",
];

export default function SetupIntro() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        <div aria-hidden className="absolute inset-10 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-float-slow relative">
          <Image
            src="/images/services/company-formation/business-setup-expertise.png"
            alt="Business setup consultation in Dubai"
            width={540}
            height={420}
            unoptimized
            className="h-auto w-full max-w-[520px] rounded-2xl"
          />
        </div>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Start Your Business Setup</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Start Your Dubai Company with{" "}
          <span className="text-primary">Afaq Al Khaleej</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 space-y-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          <p>
            We guide you through company formation in Dubai end to end — from
            picking the jurisdiction that suits your activity to preparing your
            licence and visa applications. Before recommending a route, our team
            takes time to understand your customers, workspace needs and budget.
          </p>
          <p>
            Ask us for a clear, itemised quotation along with a checklist of every
            document and approval your business will need. As you get started, we
            can also take care of PRO work, accounting and tax.
          </p>
        </motion.div>

        <div className="mt-7 space-y-3">
          {points.map((point, i) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Check size={13} />
              </span>
              <span className="text-sm text-foreground md:text-base">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Get an Itemised Quote
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact-us"
            className="rounded-full bg-gradient-silver px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
          >
            Explore UAE Residency Options
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Send, RefreshCw, CheckCircle, LucideIcon } from "lucide-react";
import MarqueeBanner from "@/components/ui/MarqueeBanner";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: MessageSquare, title: "Tell Us What you Need", description: "Share your requirement and the available documents with our team" },
  { icon: FileSearch, title: "Document Review", description: "We review your documents and identify the applicable requirements and process" },
  { icon: Send, title: "Application & Processing", description: "We prepare and submit the application and handle the process with the authorities" },
  { icon: RefreshCw, title: "Follow Up & Coordination", description: "We follow up with the relevant authorities and keep you updated at every step" },
  { icon: CheckCircle, title: "Completion", description: "Receive your completed documents or approvals, on time" },
];

const marqueeItems = [
  "Verified High ROI Opportunities",
  "Business Setup Experts",
  "UAE Market Intelligence",
  "UAE-Wide Business Support",
  "Trusted Investor Connections",
  "Feasibility & Market Analysis",
  "Smarter Investment Decisions",
  "Building Sustainable Growth",
];

export default function HowItWorks() {
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
          <span className="text-sm font-semibold text-primary">How It Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          From Requirement to <span className="text-primary">Completion</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We simplify complex government processes and handle the details,
          so you can focus on your business and life
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            className="flex flex-col items-center rounded-2xl bg-gradient-card px-6 py-10 text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={22} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </motion.div>
        ))}

        {/* closing pull-quote card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center justify-center rounded-2xl bg-surface px-6 py-10 text-center"
        >
          <p className="font-heading text-xl font-light leading-snug text-foreground sm:text-2xl">
            Less complexity. Clearer processes. One team supporting you
            throughout.
          </p>
        </motion.div>
      </div>

      <div className="mt-16">
        <MarqueeBanner items={marqueeItems} rotate />
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import {
  Target,
  Tag,
  FileCheck,
  FileText,
  FolderOpen,
  Building,
  IdCard,
  Users,
  Fingerprint,
  LucideIcon,
} from "lucide-react";
import MarqueeBanner from "@/components/ui/MarqueeBanner";

const items: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Target, title: "Business Activity Selection", description: "We help you choose the right business activity that aligns with your goals and authority requirements" },
  { icon: Tag, title: "Trade Name Assistance", description: "We assist with trade name availability checks and reservation as per UAE guidelines" },
  { icon: FileCheck, title: "Initial Approvals", description: "We obtain the required initial approvals from the relevant authorities to move your setup forward" },
  { icon: FileText, title: "Business Licensing", description: "We manage the end-to-end process of obtaining your business license from the relevant authorities" },
  { icon: FolderOpen, title: "Corporate Documentation", description: "We prepare and process all necessary documents for your company formation and compliance" },
  { icon: Building, title: "Office & Ejari", description: "We assist in finding the right office space and handle your Ejari registration seamlessly" },
  { icon: IdCard, title: "Establishment Card", description: "We obtain your establishment card and complete the required registrations" },
  { icon: Users, title: "Investors & Employee Visa", description: "We handle investor, employee and dependent visas with complete documentation support" },
  { icon: Fingerprint, title: "Emirates ID & Medical", description: "We assist with Emirates ID applications and mandatory medical tests for you and your employees" },
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

export default function WeHandleEverything() {
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
          <span className="text-sm font-semibold text-primary">What We Handle</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          We Handle Everything.
          <br />
          <span className="text-primary">You Focus on Growth.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          From documentation to approvals, licensing to visas — our experts
          manage every detail so you can start and run your business with
          confidence
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, description }, i) => (
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
      </div>

      <div className="mt-16">
        <MarqueeBanner items={marqueeItems} rotate />
      </div>
    </section>
  );
}
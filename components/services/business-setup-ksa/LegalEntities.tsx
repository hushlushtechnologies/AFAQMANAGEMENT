"use client";

import { motion } from "framer-motion";
import {
  Building,
  Building2,
  FlaskConical,
  GitBranch,
  Handshake,
  Landmark,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const entities: { icon: LucideIcon; name: string; short?: string }[] = [
  { icon: Building2, name: "Limited Liability Company", short: "LLC" },
  { icon: Landmark, name: "Joint Stock Company", short: "JSC" },
  { icon: GitBranch, name: "Branch of a Foreign Company" },
  { icon: Handshake, name: "General Partnership" },
  { icon: FlaskConical, name: "Office of Technical & Scientific Services" },
  { icon: Building, name: "Regional Headquarters", short: "RHQ" },
];

export default function LegalEntities() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Company Formation in KSA"
        heading={
          <>
            Main Types of <span className="text-primary">Legal Entities</span>
          </>
        }
        paragraph="Capital and shareholding requirements vary by legal structure and business activity — we help you compare the options before you commit."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {entities.map(({ icon: Icon, name, short }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -5 }}
            className="group flex items-center gap-5 rounded-2xl border border-border bg-gradient-card px-6 py-6 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-gold text-background">
              <Icon size={24} />
            </span>
            <div>
              {short && (
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{short}</span>
              )}
              <h3 className="text-base font-semibold leading-snug text-foreground">{name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

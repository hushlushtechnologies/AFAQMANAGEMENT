"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ClipboardCheck,
  CreditCard,
  FileCheck,
  FileText,
  Landmark,
  LucideIcon,
  MapPin,
  Plane,
  Stamp,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps: { icon: LucideIcon; title: string }[] = [
  { icon: FileText, title: "Business Plan Preparation" },
  { icon: Stamp, title: "Selecting a Unique Trade Name" },
  { icon: ClipboardCheck, title: "Initial Approval" },
  { icon: MapPin, title: "Securing Office Space" },
  { icon: Landmark, title: "Document Submission to Dubai DET" },
  { icon: FileCheck, title: "Obtaining the Trade Licence" },
  { icon: CreditCard, title: "Opening a Corporate Bank Account" },
  { icon: Plane, title: "Visa Processing" },
];

export default function SetupProcess() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Our Process"
        heading={
          <>
            How to Set Up a Business in Dubai —{" "}
            <span className="text-primary">Step by Step</span>
          </>
        }
        paragraph="When you work with Afaq Al Khaleej, this is how we take your company from idea to operation."
      />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.1, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="pointer-events-none absolute -right-2 -top-4 font-heading text-7xl font-light text-primary/10 transition-colors duration-300 group-hover:text-primary/20">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={20} />
            </span>
            <p className="relative mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
              Step {i + 1}
            </p>
            <h3 className="relative mt-1 text-lg font-semibold leading-snug text-foreground">
              {title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* trade name check */}
      <motion.div
        id="name-check"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto mt-20 max-w-6xl scroll-mt-28 overflow-hidden rounded-3xl border border-primary/40 bg-gradient-card px-8 py-12 sm:px-12"
      >
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="AFAQ" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="text-sm font-semibold text-primary">Free Trade Name Check</span>
            </div>
            <h3 className="font-heading mt-4 text-2xl font-light text-foreground sm:text-3xl">
              Check Your Trade Name <span className="text-primary">Availability</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Shortlist your company name with our free name check. Final
              availability, reservation and approval rest with the licensing
              authority, so we&apos;ll confirm the naming rules for your chosen
              jurisdiction before you apply.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Reserve Your Name
            <ArrowRight size={16} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

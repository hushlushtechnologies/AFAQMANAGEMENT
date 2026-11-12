"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  FileCheck,
  Landmark,
  ListChecks,
  LucideIcon,
  MapPin,
  Scale,
} from "lucide-react";

// TODO: swap for a Riyadh / KSA skyline photo when available
const HERO_IMAGE = "/images/services/pro-government-services/hero-bg.jpg";

const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: Landmark, label: "MISA Registration" },
  { icon: FileCheck, label: "Commercial Registration" },
  { icon: Scale, label: "Legal Structuring" },
  { icon: MapPin, label: "National Address" },
  { icon: Building2, label: "Bank Account Support" },
];

export default function KsaSetupHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Skyscrapers in a Saudi business district"
        fill
        priority
        unoptimized
        className="animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Business Setup in Saudi Arabia</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Expand into Saudi Arabia.
          <br />
          <span className="text-shine">With the Right Structure.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej helps overseas founders and companies plan their
          Saudi entry — choosing a company structure, preparing documents and
          confirming which registrations and approvals apply.
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
            Request a Saudi Setup Assessment
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#registration-steps"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            <ListChecks size={16} />
            View Registration Steps
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="relative mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 pb-16"
      >
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <span className="text-base font-semibold text-foreground">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

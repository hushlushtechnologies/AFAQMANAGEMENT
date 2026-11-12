"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Globe,
  Landmark,
  LucideIcon,
  Plane,
  Search,
  Wallet,
} from "lucide-react";

const highlights: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: "Free Zone" },
  { icon: Landmark, label: "Mainland" },
  { icon: Globe, label: "Offshore" },
  { icon: Plane, label: "Visas & PRO" },
  { icon: Wallet, label: "Bank Account Support" },
];

export default function DubaiSetupHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/company-formation/hero-bg.jpg"
        alt="Dubai skyline at night"
        fill
        priority
        unoptimized
        className="animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-background/65" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 pb-14 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Business Setup in Dubai, UAE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Launch Your Business in Dubai.
          <br />
          <span className="text-shine">With Expert Guidance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Afaq Al Khaleej helps entrepreneurs choose the right licence, jurisdiction
          and visa route for their Dubai company — then handles the paperwork and
          approvals that follow.
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
            Find My Setup Cost
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#name-check"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            <Search size={16} />
            Free Company Name Check
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

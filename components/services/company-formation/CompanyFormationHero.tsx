"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, FileText, Plane, Briefcase, LucideIcon } from "lucide-react";

const topRow: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: "Mainland" },
  { icon: Globe2, label: "Free Zone" },
  { icon: FileText, label: "Business Licensing" },
];

const bottomRow: { icon: LucideIcon; label: string }[] = [
  { icon: Plane, label: "Visas" },
  { icon: Briefcase, label: "PRO Support" },
];

export default function CompanyFormationHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/company-formation/hero-bg.jpg"
        alt="Dubai Marina skyline at night"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Company Formation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Start your Business In the UAE.
          <br />
          <span className="text-primary">With the Right Foundation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          From choosing the right jurisdiction to licensing, documentation,
          visas, and government approvals, Afaq helps simplify your UAE
          company formation journey
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
            Start your Company
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Explore More Services
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 pb-16"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {topRow.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={18} />
              </span>
              <span className="text-base font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {bottomRow.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={18} />
              </span>
              <span className="text-base font-semibold text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
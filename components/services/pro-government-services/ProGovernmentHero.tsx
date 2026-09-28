"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Plane,
  ShieldCheck,
  IdCard,
  FileCheck,
  Briefcase,
  LucideIcon,
} from "lucide-react";

const items: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: FileText, title: "Licensing", description: "Business & Trade License" },
  { icon: Plane, title: "Visas", description: "Employment, Family, Investors Visas" },
  { icon: ShieldCheck, title: "Government Approvals", description: "NOCs, RTA, Police & more" },
  { icon: IdCard, title: "Emirates ID", description: "New Application & renewals" },
  { icon: FileCheck, title: "Documentation", description: "Attestation, Contracts & More" },
  { icon: Briefcase, title: "Corporate PRO", description: "End to End Support" },
];

export default function ProGovernmentHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/pro-government-services/hero-bg.jpg"
        alt="Looking up at Dubai skyscrapers"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-24 text-center lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">PRO &amp; Government Services</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Government Processes.
          <br />
          <span className="text-primary">Made Simpler.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          From business setup to visas, approvals, and documentation, Afaq
          handles the process so you can focus on what matters most —
          growing your business
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
            Get PRO Assistance
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
        className="relative mx-auto grid max-w-4xl grid-cols-1 gap-x-10 gap-y-8 px-6 pb-16 sm:grid-cols-3"
      >
        {items.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <div>
              <span className="block text-base font-semibold text-foreground">{title}</span>
              <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{description}</span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
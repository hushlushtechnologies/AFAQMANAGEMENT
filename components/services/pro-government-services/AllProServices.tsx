"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gavel, Plane, ShieldCheck, Car, Receipt, FileSignature } from "lucide-react";
import CategoryChecklistCard from "@/components/shared/CategoryChecklistCard";

const categories = [
  { icon: Gavel, title: "Business Licensing", image: "/images/services/pro-government-services/business-licensing.png", items: ["Mainland License", "Freezone License", "Trade License Renewal", "Influencer License", "Business License Amendments"] },
  { icon: Plane, title: "Visa & Immigration", image: "/images/services/pro-government-services/visa-immigration.png", items: ["Employment Visa", "Investor / Partner Visa", "Family Visa", "Golden Visa", "Visa Renewal & Cancellation", "Medical Application", "Emirates ID Application"] },
  { icon: ShieldCheck, title: "Government Approvals", image: "/images/services/pro-government-services/government-approvals.png", items: ["RTA Approvals", "Police Approvals", "MOI Services", "NOCs", "Government Liaison", "Other Authority Approvals"] },
  { icon: Car, title: "Personal & Vehicle Services", image: "/images/services/pro-government-services/personal-vehicle.png", items: ["Vehicle Insurance Assistance", "Health Insurance Assistance", "Mulkiya Renewal", "Driving License Renewal", "Other Individual PRO Requirements"] },
  { icon: Receipt, title: "Corporate & Tax", image: "/images/services/pro-government-services/corporate-tax.png", items: ["VAT Registration", "Corporate Tax Support", "Work Permits", "Corporate Documentation", "Business-Related Government Applications"] },
  { icon: FileSignature, title: "Document & Legal Support", image: "/images/services/pro-government-services/document-legal.png", items: ["Certificate Attestation", "Power of Attorney", "Tenancy Contract", "Ejari", "Document Processing", "Government Documentation"] },
];

export default function AllProServices() {
  return (
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">All PRO Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] sm:text-4xl md:text-5xl"
        >
          <span className="text-background">Everything You Need.</span>
          <br />
          <span className="text-primary">In One Place.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-background/70 md:text-base"
        >
          A complete range of PRO &amp; Government Services to support your
          business and personal requirements across the UAE
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-x-6 gap-y-14 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => (
          <CategoryChecklistCard key={category.title} {...category} delay={(i % 3) * 0.1} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-16 flex max-w-7xl flex-col gap-6 rounded-2xl bg-card px-8 py-6 sm:mx-6 md:flex-row md:items-center md:justify-between lg:mx-auto"
      >
        <div className="flex items-center gap-4">
          <Image src="/images/logo.svg" alt="AFAQ" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="h-9 w-px bg-border" />
          <p className="text-base text-foreground">Can&apos;t find the service you need?</p>
        </div>
        <Link
          href="/contact-us"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Connect with Us
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
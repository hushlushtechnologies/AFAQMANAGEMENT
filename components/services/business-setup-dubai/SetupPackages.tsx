"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PACKAGE_PRICES } from "./data";

const packages = [
  {
    name: "Dubai Offshore",
    subtitle: "Business Licence",
    price: PACKAGE_PRICES.offshore,
    features: [
      "Foreign ownership subject to jurisdiction rules",
      "Step-by-step guidance",
      "Tax treatment subject to applicable rules",
      "Legal documentation support",
      "Free business consultation",
      "All fees confirmed in a written quotation",
    ],
    note: "Starting package example. Confirm current pricing, eligibility, inclusions and renewal terms in writing.",
  },
  {
    name: "Dubai Free Zone",
    subtitle: "Business Licence",
    price: PACKAGE_PRICES.freezone,
    featured: true,
    features: [
      "Full foreign ownership; activity conditions apply",
      "Included activities confirmed for your package",
      "0% on Qualifying Income; conditions apply",
      "Workspace and lease inclusions confirmed",
      "Free business consultation",
      "All fees confirmed in a written quotation",
    ],
    note: "Starting package example. Confirm current pricing, eligibility, inclusions and renewal terms in writing.",
  },
  {
    name: "Dubai Mainland",
    subtitle: "Business Licence — visa offer conditions apply",
    price: PACKAGE_PRICES.mainland,
    features: [
      "Professional trade licence",
      "Visa promotion subject to written offer terms",
      "Medical & Emirates ID offer: eligibility confirmed",
      "Full foreign ownership for eligible activities",
      "Bank account assistance",
      "Local service agent requirement confirmed",
    ],
    note: "Starting package example. Visa benefits depend on eligibility, current written offer terms and authority approval.",
  },
];

export default function SetupPackages() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Packages"
        heading={
          <>
            Our Dubai Company <span className="text-primary">Setup Packages</span>
          </>
        }
        paragraph="Competitively priced free zone, mainland and offshore packages, matched to what your business actually needs."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-stretch gap-6 px-6 lg:grid-cols-3">
        {packages.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className={`relative flex flex-col rounded-3xl p-[1.5px] ${
              p.featured ? "bg-gradient-gold lg:-my-4" : "bg-border"
            }`}
          >
            <div className="flex h-full flex-col rounded-[calc(1.5rem-1.5px)] bg-gradient-card p-8">
              <h3 className="font-heading text-2xl font-light text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">From</span>
                <span className={`font-heading text-4xl ${p.featured ? "text-shine" : "text-primary"}`}>
                  {p.price}
                </span>
              </div>

              <div className="my-6 h-px bg-border" />

              <ul className="flex-1 space-y-3.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check size={12} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact-us"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-gold text-background hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
                    : "border border-primary text-primary hover:bg-primary hover:text-background"
                }`}
              >
                Request a Package Quote
                <ArrowRight size={16} />
              </Link>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">{p.note}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/offers"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
        >
          View all offers & packages
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

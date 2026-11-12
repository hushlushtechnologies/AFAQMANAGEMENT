"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { PACKAGE_PRICES } from "./data";

const columns = ["Dubai Mainland", "Dubai Free Zone", "Dubai Offshore"] as const;
const HIGHLIGHT = 1; // free zone column

const rows: { label: string; values: [string, string, string] }[] = [
  {
    label: "Packages from*",
    values: [PACKAGE_PRICES.mainland, PACKAGE_PRICES.freezone, PACKAGE_PRICES.offshore],
  },
  {
    label: "Ownership",
    values: [
      "Full foreign ownership for many activities; conditions apply",
      "Full foreign ownership available; confirm structure and activity",
      "Confirm ownership and disclosure rules for the jurisdiction",
    ],
  },
  {
    label: "Operating scope",
    values: [
      "Licensed activities, subject to approvals",
      "Licensed activities; confirm permissions to work outside the zone",
      "Eligible international or holding activities; UAE operating limits apply",
    ],
  },
  {
    label: "Workspace",
    values: [
      "Depends on activity and licensing authority",
      "Flexi-desk or office, depending on zone and package",
      "Registered address and agent requirements apply",
    ],
  },
  {
    label: "Visas",
    values: [
      "Subject to eligibility, premises and approvals",
      "Depends on zone, workspace and package",
      "No automatic residence visa eligibility",
    ],
  },
  {
    label: "Corporate Tax",
    values: [
      "Standard rates; registration and filing duties apply",
      "0% on Qualifying Income for a Qualifying Free Zone Person; conditions apply",
      "No automatic exemption; assess tax and reporting obligations",
    ],
  },
  {
    label: "Setup time",
    values: [
      "Depends on documents, activity and approvals",
      "Depends on documents, activity and approvals",
      "Depends on documents, jurisdiction and approvals",
    ],
  },
];

export default function ComparisonTable() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Quick Comparison"
        heading={
          <>
            Mainland vs Free Zone <span className="text-primary">vs Offshore</span>
          </>
        }
        paragraph="Not sure which jurisdiction fits? Book a free 30-minute consultation and we'll help you choose the right structure for your industry, budget, target market and ownership plans."
      />

      {/* desktop table */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-16 hidden max-w-6xl overflow-hidden rounded-2xl border border-border bg-gradient-card md:block"
      >
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[22%] px-6 py-5 text-sm font-semibold text-muted-foreground">
                Comparison
              </th>
              {columns.map((c, i) => (
                <th
                  key={c}
                  className={`px-6 py-5 font-heading text-lg font-normal ${
                    i === HIGHLIGHT ? "bg-primary/10 text-primary" : "text-foreground"
                  }`}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row.label} className="border-t border-border">
                <th scope="row" className="px-6 py-4 align-top text-sm font-semibold text-foreground">
                  {row.label}
                </th>
                {row.values.map((v, i) => (
                  <td
                    key={i}
                    className={`px-6 py-4 align-top text-sm leading-relaxed ${
                      i === HIGHLIGHT ? "bg-primary/10" : ""
                    } ${
                      r === 0
                        ? "font-heading text-2xl text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {v}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* mobile cards */}
      <div className="mx-auto mt-12 grid max-w-xl gap-5 px-2 md:hidden">
        {columns.map((c, ci) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className={`rounded-2xl border bg-gradient-card p-6 ${
              ci === HIGHLIGHT ? "border-primary/60" : "border-border"
            }`}
          >
            <h3 className="font-heading text-xl text-foreground">{c}</h3>
            <p className="mt-1 font-heading text-2xl text-primary">{rows[0].values[ci]}</p>
            <dl className="mt-4 space-y-3">
              {rows.slice(1).map((row) => (
                <div key={row.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-primary/80">
                    {row.label}
                  </dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">{row.values[ci]}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        ))}
      </div>

      <p className="mx-auto mt-6 max-w-6xl px-6 text-xs leading-relaxed text-muted-foreground/80">
        *Starting prices are package examples, subject to eligibility and a current
        written quotation. Confirm inclusions, visa charges, additional fees and
        renewal costs before proceeding.
      </p>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact-us"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
        >
          Book a Free Consultation
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}

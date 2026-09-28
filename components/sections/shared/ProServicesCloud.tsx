"use client";

import { motion } from "framer-motion";
import MarqueeBanner from "@/components/ui/MarqueeBanner";

const tags = [
  { label: "Vehicle Insurance" },
  { label: "Power of Attorney" },
  { label: "Certificate Attestation", highlight: true },
  { label: "Tenancy Contract", highlight: true },
  { label: "VAT Registration" },
  { label: "Ejari Registration & Renewal" },
  { label: "Health Insurance" },
  { label: "NOC Processing" },
  { label: "MOI Services" },
  { label: "Police Approvals" },
  { label: "Mulkiya Renewal", highlight: true },
  { label: "Corporate Tax Registration" },
  { label: "Trade License Renewal", highlight: true },
  { label: "Mainland & Free Zone Licensing" },
  { label: "Influencer License" },
  { label: "Employment & Work Permits" },
  { label: "Visa Services" },
  { label: "RTA Approvals" },
  { label: "Driving License Renewal", highlight: true },
  { label: "Medical Fitness Applications" },
  { label: "Government Approvals & Clearances" },
  { label: "Corporate PRO Support" },
  { label: "Immigration & Labour Services", highlight: true },
  { label: "Business License Amendments" },
  { label: "Government Documentation" },
  { label: "Establishment Card Services" },
];

const rotations = [-3, 2, -2, 3, -1, 1, -4, 2, -2, 3, -3, 1];

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

export default function ProServicesCloud() {
  return (
    <section className="my-16 lg:my-24">
     <div className="flex w-full flex-wrap justify-center gap-3 px-6 py-8 sm:gap-4 md:px-10 lg:px-16">
        {tags.map((tag, i) => (
          <motion.span
            key={tag.label}
            initial={{ opacity: 0, y: 16, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
            whileHover={{ rotate: 0, scale: 1.08, y: -2 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.05, ease: "easeOut" }}
            className={`cursor-default whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold sm:text-sm ${
              tag.highlight
                ? "border-accent-blue bg-accent-blue text-foreground"
                : "border-primary/50 bg-card text-primary"
            }`}
          >
            {tag.label}
          </motion.span>
        ))}
      </div>

      <div className="mt-10">
        <MarqueeBanner items={marqueeItems} />
      </div>
    </section>
  );
}
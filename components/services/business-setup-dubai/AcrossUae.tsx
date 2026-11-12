"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, MapPin } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const emirates = [
  {
    place: "Abu Dhabi, UAE",
    title: "Business Setup in Abu Dhabi",
    text: "The UAE's capital and largest emirate — home to major government entities, sovereign wealth funds and a fast-growing private sector, with direct access to oil & gas, finance and real estate.",
    points: ["ADGM & KIZAD free zones", "Government tender eligibility checks", "Foreign ownership: activity conditions apply"],
  },
  {
    place: "Sharjah, UAE",
    title: "Business Setup in Sharjah",
    text: "The UAE's third-largest emirate borders Dubai, giving businesses lower operating costs while keeping easy access to the Dubai market.",
    points: ["SAIF Zone & SHAMS free zones", "Compare setup & operating costs", "Next door to Dubai"],
  },
  {
    place: "Ras Al Khaimah, UAE",
    title: "Business Setup in Ras Al Khaimah",
    text: "RAKEZ offers options for manufacturing, trading and service businesses. Compare packages by activity, workspace, visa allocation and renewal costs.",
    points: ["RAKEZ package comparison", "Strong for manufacturing & industrial", "Fast-growing investor destination"],
  },
  {
    place: "Umm Al Quwain, UAE",
    title: "Business Setup in Umm Al Quwain",
    text: "Explore Umm Al Quwain Free Trade Zone for your activity, comparing licence inclusions, workspace, visas and annual renewals against your shortlist.",
    points: ["UAQ Free Trade Zone", "Compare setup & renewal costs", "Options for startups & SMEs"],
  },
];

export default function AcrossUae() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="UAE Business Setup"
        heading={
          <>
            Set Up Your Business <span className="text-primary">Across the UAE</span>
          </>
        }
        paragraph="Our support goes beyond Dubai. Whether you want a cost-effective free zone, a strategic mainland licence or an offshore structure, we help you compare requirements across the emirates and prepare your application."
      />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
        {emirates.map((e, i) => (
          <motion.article
            key={e.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card p-8 transition-colors duration-300 hover:border-primary/50"
          >
            <span className="pointer-events-none absolute right-6 top-4 font-heading text-6xl font-light text-primary/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex items-center gap-2 text-sm text-primary">
              <MapPin size={15} />
              {e.place}
            </span>
            <h3 className="font-heading mt-3 text-2xl font-light text-foreground">{e.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            <ul className="mt-5 space-y-2.5">
              {e.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                    <Check size={12} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3"
            >
              Explore {e.place.split(",")[0]} Setup
              <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

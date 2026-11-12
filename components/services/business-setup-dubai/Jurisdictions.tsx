"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const jurisdictions = [
  {
    tag: "Free Zone",
    title: "Dubai Free Zone Company Setup",
    image: "/images/services/company-formation/freezone.jpg",
    body: "Compare Dubai's free zones on permitted activities, company structure, workspace and visa allocation. Most structures allow full foreign ownership, and a Qualifying Free Zone Person can benefit from 0% Corporate Tax on Qualifying Income when the conditions are met — other taxable income may be taxed at 9%.",
  },
  {
    tag: "Mainland",
    title: "Dubai Mainland Company Setup",
    image: "/images/services/company-formation/mainland.jpg",
    body: "A mainland licence covers the activities and locations approved by the licensing authority. Full foreign ownership is available for many activities, though strategic-impact activities can carry extra conditions. Employee visas depend on eligibility, premises and approvals — and government tenders have their own requirements.",
  },
  {
    tag: "Offshore",
    title: "Dubai Offshore Company Formation",
    image: "/images/services/investment-services/hero-bg.jpg",
    body: "Offshore structures can suit eligible international trading or holding activities. Permitted activities, ownership disclosure and reporting rules vary by jurisdiction. Registering offshore does not remove tax obligations or guarantee full confidentiality, so suitability should be confirmed first.",
  },
];

const milestones = [
  {
    year: "1985",
    text: "Dubai launches Jebel Ali Free Zone (JAFZA) — the first free zone in the UAE and the Middle East. Starting with 19 companies, it went on to earn ISO certification within a decade.",
  },
  {
    year: "2021",
    text: "Amendments to the UAE Commercial Companies Law open the door to 100% foreign ownership, with Dubai extending it to more than 1,000 commercial and industrial activities.",
  },
  {
    year: "Today",
    text: "Dubai's free zones now serve fintech, AI, manufacturing and digital commerce — home to thousands of foreign-owned companies and regional branches.",
  },
];

export default function Jurisdictions() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Business Setup Locations in Dubai"
        heading={
          <>
            Choosing the Right <span className="text-primary">Jurisdiction</span>
          </>
        }
        paragraph="Weigh mainland, free zone and offshore structures against your activities, customers, workspace and visa needs. Each authority sets its own rules, and your legal structure shapes liability, ownership and reporting — so tax obligations should be assessed separately from the licence package."
      />

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        {jurisdictions.map((j, i) => (
          <motion.article
            key={j.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card transition-colors duration-300 hover:border-primary/50"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={j.image}
                alt={j.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-background">
                {j.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col px-6 pb-7 pt-4">
              <h3 className="text-xl font-semibold text-foreground">{j.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{j.body}</p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* timeline */}
      <div className="relative mx-auto mt-20 max-w-6xl px-6">
        <div aria-hidden className="absolute left-6 right-6 top-[22px] hidden h-px bg-gradient-gold opacity-40 md:block" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <span className="relative z-10 inline-flex h-11 items-center rounded-full border border-primary bg-background px-5 font-heading text-lg text-primary">
                {m.year}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

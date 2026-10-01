 "use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const services = [
  {
    title: "Investment Advisory",
    heading: "Make Informed Investment Decisions.",
    paragraph:
      "Strategic support across investment planning, opportunity evaluation, portfolio considerations, partnerships, real estate advisory, ROI analysis, and financial forecasting.",
    bullets: ["Investment Planning", "Opportunity Evaluation", "Joint Ventures & Partnerships", "ROI & Financial Forecasting"],
  },
  {
    title: "Business Consultancy",
    heading: "Build Stronger Foundations for Growth.",
    paragraph:
      "Market research, feasibility studies, financial planning, operational strategy, and risk assessment to help businesses build stronger foundations and sustainable growth.",
    bullets: ["Market Research", "Operational Strategy", "Financial Planning", "Risk Assessment"],
  },
  {
    title: "PRO & Government Services",
    heading: "Navigate UAE Processes with Confidence.",
    paragraph:
      "From licenses and visas to government approvals, tax registration, documentation, and corporate PRO requirements, we help businesses navigate UAE processes efficiently.",
    bullets: ["Licensing & Visas", "Government Approvals", "VAT & Corporate Tax", "Documentation & Emirates ID"],
  },
  {
    title: "Company Formation",
    heading: "Launch Your Business the Right Way.",
    paragraph:
      "End-to-end company formation support covering business structuring, licensing, registration, and setup across UAE mainland and free zones.",
    bullets: ["Business Structuring", "Licensing & Registration", "Mainland & Free Zone Setup", "Ongoing Compliance"],
  },
  {
    title: "Feasibility & Market Intelligence",
    heading: "Validate Ideas Before You Invest.",
    paragraph:
      "Comprehensive market, financial, operational, and competitive analysis to help determine the viability, potential, and risks of your business idea.",
    bullets: ["Market Analysis", "Financial Feasibility", "Competitive Analysis", "Risk Evaluation"],
  },
  {
    title: "Digital Business Solutions",
    heading: "Operate Smarter in a Connected Economy.",
    paragraph:
      "Digital platforms, websites, software solutions, automation, and technology services that help businesses operate smarter and grow in a connected economy.",
    bullets: ["Digital Platforms & Websites", "Software Solutions", "Automation", "Technology Consulting"],
  },
  {
    title: "Investors & Opportunities",
    heading: "Connect Capital with the Right Opportunity.",
    paragraph:
      "We help connect investors with business opportunities and facilitate strategic relationships between investors, entrepreneurs, and growing businesses.",
    bullets: ["Curated Opportunities", "Investor Matching", "Strategic Partnerships", "Growth-Focused Deals"],
  },
];

export default function ServicesExpertise() {
  const [active, setActive] = useState(0);
  const current = services[active];

  // auto-advance to the next service every 10s; restarts whenever `active`
  // changes, whether from this timer or a manual click
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Expertise That Moves
          <br />
          <span className="text-primary">Business</span> Forward.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Our expertise brings together investment insight, business
          strategy, market intelligence, corporate services, and execution
          support to help investors and businesses navigate opportunities
          across the UAE with greater clarity.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-14">
        {/* left — tab list */}
        <div className="space-y-3">
          {services.map((service, i) => {
            const isActive = active === i;
            return (
              <motion.button
                key={service.title}
                onClick={() => setActive(i)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors duration-300 ${
                  isActive
                    ? "border-primary bg-surface"
                    : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <span className={`text-sm font-semibold ${isActive ? "text-primary" : "text-primary/70"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-5 w-px shrink-0 bg-border" />
                <span className="flex-1 text-base font-semibold text-foreground">{service.title}</span>
                <ChevronRight
                  size={18}
                  className={`shrink-0 transition-transform duration-300 ${isActive ? "translate-x-1 text-primary" : "text-muted-foreground"}`}
                />
              </motion.button>
            );
          })}
        </div>

        {/* right — active service detail */}
        <div className="lg:pt-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <div className="border-l-2 border-primary pl-4">
                <span className="text-sm font-semibold text-primary">{current.title}</span>
              </div>

              <h3 className="font-heading mt-5 text-3xl font-light leading-[1.15] text-foreground sm:text-4xl md:text-5xl">
                {current.heading}
              </h3>

              <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                {current.paragraph}
              </p>

              <ul className="mt-6 space-y-2.5">
                {current.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2.5 text-sm text-foreground/90 md:text-base">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
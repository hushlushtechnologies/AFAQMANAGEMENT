"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardList, Search, TrendingUp, Calculator, Users, Check, Info, ArrowRight, LucideIcon } from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  { icon: ClipboardList, title: "Initial Review", description: "We review the information you share with us to understand your business at a high level" },
  { icon: Search, title: "Deep Dive Analysis", description: "Our team conducts a detailed analysis of your business, market, financials, and competitive landscape." },
  { icon: TrendingUp, title: "Market & Opportunity Assessment", description: "We evaluate the market size, growth potential, positioning and the opportunity ahead" },
  { icon: Calculator, title: "Financial & Business Evaluation", description: "We assess financial health, unit economics, scalability and operational efficiency" },
  { icon: Users, title: "Leadership & Team Evaluation", description: "We evaluate the strength, experience and capability of the founding team" },
];

const indents = ["lg:ml-0", "lg:ml-16", "lg:ml-32", "lg:ml-16", "lg:ml-0"];

const lookForItems = [
  "Large and growing market opportunity",
  "Proven or potential for strong unit economics",
  "Scalable business model with defensible advantage",
  "Clear path to profitability and sustainable growth",
  "Integrity, passion and execution ability of the team",
  "Alignment of vision, values, and long term goals",
];

const NODE_GAP = 28; // px between a card's right edge and its timeline node

export default function EvaluationProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerBox = container.getBoundingClientRect();
    const next = cardRefs.current
      .map((el) => {
        if (!el) return null;
        const box = el.getBoundingClientRect();
        return {
          x: box.right - containerBox.left + NODE_GAP,
          y: box.top + box.height / 2 - containerBox.top,
        };
      })
      .filter((p): p is { x: number; y: number } => p !== null);
    setSize({ width: containerBox.width, height: containerBox.height });
    setPoints(next);
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const pathD =
    points.length > 1 ? points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") : "";

  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">How Afaq Evaluates your Business</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          A Rigorous Approach.
          <br />
          <span className="text-primary">A Fair &amp; Transparent Evaluation.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We follow a structured, data driven evaluation framework to
          understand your business thoroughly and make investment decisions
          with clarity and confidence
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        {/* left — zigzag timeline */}
        <div ref={containerRef} className="relative space-y-8">
          {size.width > 0 && pathD && (
            <svg
              width={size.width}
              height={size.height}
              className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
            >
              <path d={pathD} stroke="#EBB811" strokeWidth="1.5" fill="none" opacity="0.5" />
            </svg>
          )}

          {points.length === steps.length && (
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              {points.map((p, i) => (
                <span
                  key={i}
                  style={{ left: p.x, top: p.y }}
                  className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background text-xs font-semibold text-primary"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ))}
            </div>
          )}

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isBlue = i % 2 === 0;
            return (
              <motion.div
                key={step.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                onAnimationComplete={measure}
                className={`relative max-w-sm rounded-2xl border bg-card p-5 ${indents[i]} ${
                  isBlue ? "border-accent-blue" : "border-primary"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
                      isBlue ? "border-accent-blue text-accent-blue" : "border-primary text-primary"
                    }`}
                  >
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* right — collage + checklist */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="grid h-[380px] grid-cols-2 gap-4"
          >
            <div className="flex flex-col gap-4">
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <Image
                  src="/images/investment-opportunities/leadership-silhouette.png"
                  alt="Leadership evaluation"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl">
                <Image
                  src="/images/investment-opportunities/opportunity-doorway.png"
                  alt="Opportunity assessment"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/investment-opportunities/strategy-chess-knight.png"
                alt="Strategic evaluation"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Info size={14} />
              </span>
              <span className="text-base font-semibold text-foreground">What We Look For</span>
            </div>

            <ul className="mt-4 space-y-3">
              {lookForItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/70 text-primary">
                    <Check size={11} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(235,184,17,0.5)]"
              >
                Submit your Business
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-gradient-silver px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(180,180,180,0.5)]"
              >
                Talk to our Consultant
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
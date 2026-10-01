"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, Wallet, Receipt, Target, LucideIcon } from "lucide-react";

const needs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: TrendingUp,
    title: "Profitability & Performance",
    description: "Understand where your business earns, where margins are declining, and what drives profitability.",
  },
  {
    icon: Wallet,
    title: "Cash Flow & Cost Control",
    description: "Monitor available cash, identify rising expenses, and anticipate upcoming financial commitments.",
  },
  {
    icon: Receipt,
    title: "Receivables & Collections",
    description: "Track outstanding payments, identify overdue invoices, and improve collection visibility.",
  },
  {
    icon: Target,
    title: "Planning & Growth Readiness",
    description: "Evaluate budgets, forecast financial needs, and support expansion with structured financial planning.",
  },
];

const zigzagIndents = ["lg:ml-16", "lg:ml-8", "lg:ml-0", "lg:ml-8"];

const NODE_GAP = 48; // px between a card's left edge and the connector dot/line

export default function FinanceBusinessNeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerBox = container.getBoundingClientRect();
    const next = cardRefs.current
      .map((el) => {
        if (!el) return null;
        const box = el.getBoundingClientRect();
        return {
          x: box.left - containerBox.left - NODE_GAP,
          y: box.top + box.height / 2 - containerBox.top,
        };
      })
      .filter((p): p is { x: number; y: number } => p !== null);
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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        {/* left — copy + image */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">The Business Need</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
          >
            Having Financial Records
            <br />
            Isn&apos;t the Same as Having
            <br />
            Financial Clarity.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Many businesses maintain their accounts but still lack the
            financial visibility needed to control costs, manage cash flow,
            and plan their next stage of growth. We bridge that gap with
            structured financial management and actionable insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-10 h-[320px] w-full overflow-hidden rounded-[2rem] sm:h-[380px]"
          >
            <Image
              src="/images/services/finance-management/business-need.png"
              alt="Rising growth chart over a city skyline"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* right — zigzag business-need cards */}
        <div ref={containerRef} className="relative space-y-6 lg:pl-10">
          {pathD && (
            <svg className="pointer-events-none absolute inset-0 hidden h-full w-full overflow-visible lg:block">
              <path d={pathD} stroke="#EBB811" strokeWidth="1.5" fill="none" opacity="0.6" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={5} fill="#EBB811" />
              ))}
            </svg>
          )}

          {needs.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onAnimationComplete={measure}
              className={`relative max-w-sm rounded-2xl border border-accent-blue bg-card p-5 ${zigzagIndents[i]}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent-blue text-accent-blue">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
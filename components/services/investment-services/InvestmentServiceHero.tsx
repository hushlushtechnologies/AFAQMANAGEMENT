"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Users, Globe2, LucideIcon } from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Sparkles, title: "Curated Opportunities", description: "Carefully evaluated business and investment options" },
  { icon: ShieldCheck, title: "Due Diligence", description: "Structured evaluation and risk-aware approach" },
  { icon: Users, title: "Strategic Connections", description: "Connecting investors with trusted businesses and entrepreneurs" },
  { icon: Globe2, title: "UAE Market Insight", description: "Deep understanding of local markets and growth sectors" },
];

const opportunities = [
  { title: "Property Investment", amount: "AED 1.2M", image: "/images/services/investment-services/property-investment.png", pos: { top: "0%", right: "0%" } },
  { title: "Hospitality Venture", amount: "AED 1.8M", image: "/images/services/investment-services/hospitality-venture.png", pos: { top: "26%", right: "8%" } },
  { title: "Technology Invest", amount: "AED 950K", image: "/images/services/investment-services/technology-invest.png", pos: { top: "52%", right: "0%" } },
  { title: "Automobile", amount: "AED 1.2M", image: "/images/services/investment-services/automobile.png", pos: { top: "78%", right: "8%" } },
];

export default function InvestmentServiceHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
const NODE_GAP = 24;

  const measure = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerBox = container.getBoundingClientRect();
    const next = cardRefs.current
      .map((el) => {
        if (!el) return null;
        const box = el.getBoundingClientRect();
        return {
          // x: box.left - containerBox.left,
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

  // connect the cards bottom-to-top (Automobile -> ... -> Property Investment),
  // then extend a short arrow segment past the last (top) point
  let pathD = "";
  if (points.length === opportunities.length) {
    const order = [3, 2, 1, 0];
    const ordered = order.map((i) => points[i]);
    const [p1, p0] = ordered.slice(-2); // second-last -> last (top) point
    const dx = p0.x - p1.x;
    const dy = p0.y - p1.y;
    const len = Math.hypot(dx, dy) || 1;
    const extend = 55;
    const arrowEnd = { x: p0.x + (dx / len) * extend, y: p0.y + (dy / len) * extend };
    pathD =
      ordered.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ") +
      ` L ${arrowEnd.x} ${arrowEnd.y}`;
  }

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/investment-services/hero-bg.jpg"
        alt="Investment services in the UAE"
        fill
        priority
        unoptimized
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        {/* left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">Investment Services</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-6 text-4xl font-light leading-[1.15] text-foreground sm:text-5xl md:text-6xl"
          >
            Where Capital Meets
            <br />
            <span className="text-primary">Opportunity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-lg border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Discover carefully evaluated business and investment
            opportunities across the UAE with strategic insight, expertise,
            and guidance from Afaq Al Khaleej Management
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/investment-opportunities"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Explore More Opportunities
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
            >
              Speak with an Advisor
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={16} />
                </span>
                <div>
                  <span className="block text-sm font-semibold text-foreground">{title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{description}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right — zigzag opportunity cards, desktop only */}
        <div ref={containerRef} className="relative hidden h-[620px] lg:block">

                    {pathD && (
            <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                  <path d="M0,0 L8,4 L0,8 Z" fill="#EBB811" />
                </marker>
              </defs>
              <path d={pathD} stroke="#EBB811" strokeWidth="2" fill="none" opacity="0.8" markerEnd="url(#arrowhead)" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={6} fill="#EBB811" />
              ))}
            </svg>
          )}
          {opportunities.map((opp, i) => (
            <motion.div
              key={opp.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              onAnimationComplete={measure}
              style={opp.pos}
              className="absolute flex w-72 items-center gap-4 rounded-2xl border border-border bg-gradient-card p-4 shadow-xl"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <Image src={opp.image} alt={opp.title} fill unoptimized className="object-cover" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">{opp.title}</h3>
                <span className="mt-1 block text-xs text-muted-foreground">Invest From</span>
                <span className="text-lg font-bold text-primary">{opp.amount}</span>
              </div>
            </motion.div>
          ))}


        </div>
      </div>
    </section>
  );
}
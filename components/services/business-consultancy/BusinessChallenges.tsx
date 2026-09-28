 "use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Wallet,
  Users,
  Cog,
  RefreshCw,
  Swords,
  TrendingUp,
  Compass,
  Expand,
  MapPin,
  Lightbulb,
  Search,
  Target,
  Rocket,
  BarChart3,
  LucideIcon,
} from "lucide-react";

const challenges: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Wallet, title: "Financial Planning", description: "Managing cash flow, improving margins and strengthening finances" },
  { icon: Users, title: "Talent Management", description: "Attracting, developing, and retaining the right people" },
  { icon: Cog, title: "Operational Challenges", description: "Inefficient processes, high cost, and productivity issues" },
  { icon: RefreshCw, title: "Business Restructuring", description: "Reorganizing to improve performance, efficiency and sustainability" },
  { icon: Swords, title: "Intense Competition", description: "Staying ahead in a competitive and fast changing market" },
  { icon: TrendingUp, title: "Slow Growth", description: "Hitting a plateau and finding new ways to grow" },
  { icon: Compass, title: "Strategic Direction", description: "Unclear strategy or lack of a long term business direction" },
  { icon: Expand, title: "Expansion & Scaling", description: "Expanding to new markets, locations, or customer segments" },
  { icon: MapPin, title: "Market Entry", description: "Understanding the UAE market and entering with confidence" },
];

const processSteps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Search, title: "Challenge", description: "We understand your business challenge" },
  { icon: Lightbulb, title: "Insight", description: "We analyze, research and uncover key insights" },
  { icon: Target, title: "Strategy", description: "We build practical strategies aligned to your goals" },
  { icon: Rocket, title: "Actions", description: "We help you implement with clarity and focus" },
  { icon: BarChart3, title: "Growth", description: "We support sustainable growth and long term success" },
];

const processIndents = ["lg:ml-16", "lg:ml-8", "lg:ml-0", "lg:ml-8", "lg:ml-16"];

const NODE_GAP = 28; // px between a card's right edge and its timeline node

export default function BusinessChallenges() {
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
         x: box.left - containerBox.left - NODE_GAP,
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
    <section className="bg-foreground py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="inline-block border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Business Challenges</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] sm:text-4xl md:text-5xl"
        >
          <span className="text-background">Every Business Challenge</span>
          <br />
          <span className="text-primary">Needs the Right Perspective</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-background/70 md:text-base"
        >
          Businesses face complex situations every day. The right insight
          helps you see clearly, make confident decisions and create
          meaningful progress
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {challenges.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
            className="flex items-start gap-4 rounded-2xl border border-background/10 bg-foreground p-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={18} />
            </span>
            <div>
              <h3 className="text-base font-semibold text-background">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-background/70">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* map + process */}
      <div className="mx-auto mt-20 grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto h-[420px] w-full max-w-lg lg:order-1"
        >
          <Image
            src="/images/services/business-consultancy/uae-map-skyline.png"
            alt="UAE map illustration with city skyline"
            fill
            unoptimized
            className="object-contain"
          />
        </motion.div>

        <div ref={containerRef} className="relative space-y-8 lg:order-2 lg:pl-10">
          {size.width > 0 && pathD && (
            <svg
              width={size.width}
              height={size.height}
              className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
            >
              <path d={pathD} stroke="#EBB811" strokeWidth="1.5" fill="none" opacity="0.6" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={5} fill="#EBB811" />
              ))}
            </svg>
          )}

          {processSteps.map(({ icon: Icon, title, description }, i) => (
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
              className={`relative flex max-w-sm items-start gap-4 rounded-2xl bg-card p-5 shadow-xl ${processIndents[i]}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/40 text-foreground">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
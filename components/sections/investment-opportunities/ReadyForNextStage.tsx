"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  ClipboardCheck,
  Users,
  Presentation,
  Rocket,
  Handshake,
  TrendingUp,
  Info,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  { icon: FileText, title: "Share your Details", description: "Submit basic information about your business and investment requirment" },
  { icon: ClipboardCheck, title: "Initial Review", description: "Our team reviews your opportunity and ensures it aligns with investors interests" },
  { icon: Users, title: "Investor Match", description: "We connect you with relevant investors or strategic partners." },
  { icon: Presentation, title: "Present & Engage", description: "You get the opportunity to present your business to interested investors" },
  { icon: Rocket, title: "Explore & grow", description: "Build meaningful partnerships and take your business to the next level" },
];

const indents = ["lg:ml-0", "lg:ml-16", "lg:ml-32", "lg:ml-16", "lg:ml-0"];

const NODE_GAP = 28; // px between a card's right edge and its timeline node

export default function ReadyForNextStage() {
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
          <span className="text-sm font-semibold text-primary">For Business Owners – Seeking Investment</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Have a Business Ready
          <br />
          for its <span className="text-primary">Next Stage?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          We connect ambitious businesses with the right investors, strategic
          partners, and growth capital to accelerate success and create long
          term-goal value
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

        {/* right — image with floating badges + CTA panel */}
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] w-full overflow-hidden rounded-[2rem] sm:h-[480px]"
          >
            <Image
              src="/images/services/investment-services/boardroom-meeting.png"
              alt="Business owners presenting to investors in a boardroom"
              fill
              unoptimized
              className="object-cover"
            />

            <div className="absolute left-6 top-6 flex w-40 flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-card p-4 text-center shadow-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Handshake size={16} />
              </span>
              <span className="text-sm font-semibold text-foreground">Trusted Partnership</span>
            </div>

            <div className="absolute bottom-6 right-6 flex w-32 flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-card p-4 text-center shadow-xl">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <TrendingUp size={16} />
              </span>
              <span className="text-sm font-semibold text-foreground">Strategy Growth</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 -mt-14 ml-6 w-56 rounded-2xl border border-border bg-gradient-card p-5 shadow-xl sm:ml-10"
          >
            <span className="text-xs font-medium text-foreground">Investment Growth</span>
            <div className="mt-1 flex items-end justify-between gap-3">
              <span className="text-2xl font-bold text-primary">4 - 6% ROI</span>
              <div className="relative h-14 w-20 shrink-0">
                <Image
                  src="/images/investment-growth-chart.png"
                  alt="Investment growth chart"
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 rounded-2xl border border-border bg-surface p-6"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Info size={16} />
              </span>
              <div>
                <span className="block text-base font-semibold text-foreground">Share your opportunity</span>
                <span className="mt-0.5 block text-sm font-semibold text-primary">Let&apos;s explore what&apos;s possible</span>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Whether you are seeking equity investment, joint venture,
              strategic partnership, or growth capital tell us about your
              business and we&apos;ll take it forward from there
            </p>

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
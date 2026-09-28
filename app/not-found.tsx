"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ClosingCta from "@/components/shared/ClosingCta";

// fixed positions/delays — deterministic, not Math.random(), to avoid
// server/client hydration mismatches
const particles = [
  { top: "15%", left: "37%", delay: 0 },
  { top: "22%", left: "39%", delay: 0.4 },
  { top: "31%", left: "58%", delay: 0.8 },
  { top: "8%", left: "57%", delay: 1.2 },
  { top: "40%", left: "27%", delay: 0.6 },
  { top: "44%", left: "77%", delay: 1.6 },
  { top: "60%", left: "78%", delay: 0.2 },
  { top: "65%", left: "36%", delay: 1.0 },
  { top: "78%", left: "63%", delay: 1.4 },
  { top: "85%", left: "39%", delay: 0.9 },
  { top: "88%", left: "60%", delay: 1.8 },
  { top: "5%", left: "48%", delay: 0.5 },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 text-center">
      {/* radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-accent-blue/25 blur-[110px] sm:h-[520px] sm:w-[520px]" />
      </div>

      {/* floating particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          style={{ top: p.top, left: p.left, animationDelay: `${p.delay}s` }}
          className="animate-twinkle absolute h-1.5 w-1.5 rounded-full bg-primary/70"
        />
      ))}

      {/* illustration + overlaid text */}
      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        <div className="relative mx-auto h-[360px] w-full sm:h-[460px] md:h-[520px]">
          <Image
            src="/images/404-illustration.svg"
            alt="Signpost saying Ooops"
            fill
            unoptimized
            className="object-contain"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-7xl font-bold text-foreground sm:text-8xl md:text-9xl"
            >
              404
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="max-w-xs text-sm text-muted-foreground sm:text-base"
            >
              We Can&apos;t Find the Page That You&apos;re Looking for
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-7"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            Back To Home
            <ArrowRight size={16} />
          </Link>
          {/* <div className="mx-auto mt-6 h-px w-60 bg-primary" /> */}
        </motion.div>
      </div>
      <ClosingCta />
    </main>
  );
}
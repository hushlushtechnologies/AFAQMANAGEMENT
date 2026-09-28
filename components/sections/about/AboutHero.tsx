"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const tagline = ["Investment", "Strategy", "Partnership", "Growth"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow behind the illustration */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-16 lg:grid-cols-2 lg:gap-8 lg:pb-28 lg:pt-24">
        {/* left — copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">
              About Afaq Al Khaleej Management
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-heading mt-6 text-4xl font-light leading-[1.15] text-foreground sm:text-5xl md:text-6xl"
          >
            Build on Trust.
            <br />
            Driven by <span className="text-primary">Opportunity.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            Afaq Al Khaleej Management is a UAE based investment and business
            consultancy connecting investors, entrepreneurs, and businesses
            with trusted opportunities, strategic expertise, and the support
            needed to grow with confidence.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#our-story"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Discover Our Story
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
            >
              Talk to Our Team
            </Link>
          </motion.div>
        </motion.div>

        {/* right — isometric illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="animate-float-slow relative aspect-[3/2] w-full">
            <Image
              src="/images/about-hero-map.png"
              alt="Isometric illustration of Dubai"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* bottom tagline row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6 pb-16 text-center"
      >
        {tagline.map((word, i) => (
          <span key={word} className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
              {word}
            </span>
            {i < tagline.length - 1 && <span className="text-primary">•</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";

export default function OffersHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/services/investment-services/hero-bg.jpg"
        alt="Dubai skyline"
        fill
        priority
        unoptimized
        className="animate-hero-zoom object-cover"
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 pb-24 pt-24 text-center lg:pt-32">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
        >
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-primary">Offer Packages</span>
        </motion.nav>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-6 text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Business Setup
          <br />
          <span className="text-shine">Packages in Dubai</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          Affordable free zone and mainland company setup packages — licence,
          registration, visas and office solutions bundled to fit your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link
            href="#packages"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            View Latest Offers
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

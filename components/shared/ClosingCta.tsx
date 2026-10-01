"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ClosingCta() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 overflow-hidden rounded-[2.5rem] bg-gradient-blue px-8 py-12 lg:grid-cols-2 lg:gap-8 lg:px-14 lg:py-0"
      >
        {/* left — copy */}
        <div>
          <div className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">Your Next Move Starts Here</span>
          </div>

          <h2 className="font-heading mt-5 text-3xl font-light leading-[1.25] sm:text-4xl md:text-[2.75rem]">
            <span className="text-primary">Questions Today.</span>{" "}
            <span className="text-background">Clarity for What&apos;s Next.</span>
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/75 md:text-base">
            Find answers to common questions about investing, setting up a
            business, company formation, PRO services, and working with Afaq
            Al Khaleej Management across the UAE.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(235,184,17,0.5)]"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </Link>
            {/* <Link
              href="/contact-us"
              className="rounded-full bg-gradient-silver px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(180,180,180,0.5)]"
            >
              Contact Our Team
            </Link> */}
          </div>
        </div>

        {/* right — photo collage */}
        <div className="grid h-[380px] grid-cols-2 gap-3 sm:h-[420px] lg:h-[460px]">
          <div className="flex flex-col gap-3">
            <div className="relative flex-[0.42] overflow-hidden  ">
              <Image
                src="/images/closing-cta/strategy-chess.png"
                alt="Strategic planning"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="relative flex-[0.58] overflow-hidden  ">
              <Image
                src="/images/closing-cta/roundtable-meeting.png"
                alt="Team meeting"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative flex-[0.55] overflow-hidden  ">
              <Image
                src="/images/closing-cta/presenting-chart.png"
                alt="Business presentation"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="relative flex-[0.45] overflow-hidden  ">
              <Image
                src="/images/closing-cta/data-overview.png"
                alt="Data overview"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
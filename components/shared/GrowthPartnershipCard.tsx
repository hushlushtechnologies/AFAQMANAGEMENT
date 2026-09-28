"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, TrendingUp } from "lucide-react";

type GrowthPartnershipCardProps = {
  image: string;
  alt: string;
};

export default function GrowthPartnershipCard({ image, alt }: GrowthPartnershipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-md pb-14 lg:pb-16"
    >
      <div className="relative h-[380px] w-full overflow-hidden rounded-[2rem] sm:h-[440px]">
        <Image src={image} alt={alt} fill unoptimized className="object-cover" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute -left-6 top-[22%] flex w-32 flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-card px-4 py-4 text-center shadow-xl"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary">
          <Handshake size={16} />
        </span>
        <span className="text-xs font-semibold text-foreground">Trusted Partnership</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="absolute -bottom-2 -left-6 w-56 rounded-2xl border border-border bg-gradient-card p-5 shadow-xl"
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute -bottom-4 -right-2 flex w-32 flex-col items-center gap-2 rounded-2xl border border-border bg-gradient-card px-4 py-4 text-center shadow-xl"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary">
          <TrendingUp size={16} />
        </span>
        <span className="text-xs font-semibold text-foreground">Strategy Growth</span>
      </motion.div>
    </motion.div>
  );
}
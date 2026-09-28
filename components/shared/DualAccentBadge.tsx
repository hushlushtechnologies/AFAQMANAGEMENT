"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DualAccentBadge({ size = 96, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      style={{
        width: size,
        height: size,
        background: "conic-gradient(#1D7BE0 0deg 180deg, #EBB811 180deg 360deg)",
      }}
      className="rounded-full p-[3px]"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
        <Image src="/images/logo.svg" alt="AFAQ" width={size * 0.5} height={size * 0.5} />
      </div>
    </motion.div>
  );
}
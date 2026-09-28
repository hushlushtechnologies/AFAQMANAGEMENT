"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type FeatureCardProps = {
  image: string;
  title: string;
  description: string;
  delay?: number;
};

export default function FeatureCard({ image, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group mx-auto w-[95%] overflow-hidden rounded-2xl border border-surface bg-gradient-card"
    >
      <div className="p-3">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>
      <div className="px-6 pb-6 pt-1">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
}
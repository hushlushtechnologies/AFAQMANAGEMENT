"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  heading: React.ReactNode;
  paragraph?: React.ReactNode;
};

export default function SectionHeader({ eyebrow, heading, paragraph }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="inline-block border-l-2 border-primary pl-4"
      >
        <span className="text-sm font-semibold text-primary">{eyebrow}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-heading mt-6 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
      >
        {heading}
      </motion.h2>

      {paragraph && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-sm text-muted-foreground md:text-base"
        >
          {paragraph}
        </motion.p>
      )}

      <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />
    </div>
  );
}

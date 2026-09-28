"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, LucideIcon } from "lucide-react";

type CategoryChecklistCardProps = {
  icon: LucideIcon;
  image: string;
  title: string;
  items: string[];
  delay?: number;
  featured?: boolean;
};

export default function CategoryChecklistCard({
  icon: Icon,
  image,
  title,
  items,
  delay = 0,
  featured = false,
}: CategoryChecklistCardProps) {
  const content = (
    <>
      <div className="relative flex h-24 w-full overflow-hidden rounded-2xl bg-card">
        <div className="flex w-24 shrink-0 items-center justify-center">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
            <Icon size={18} />
          </span>
        </div>
        <div className="relative flex-1">
          <Image src={image} alt={title} fill unoptimized className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-card to-transparent" />
        </div>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-background">{title}</h3>

      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-background/75">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/60 text-primary">
              <Check size={11} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={featured ? "relative z-10 rounded-2xl bg-white p-5 shadow-2xl" : "relative z-10"}
    >
      {content}
    </motion.div>
  );
}
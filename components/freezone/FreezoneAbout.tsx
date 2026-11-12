"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { FreezoneData } from "@/lib/freezones/types";
import { fzIcons } from "./icons";

export default function FreezoneAbout({ data }: { data: FreezoneData }) {
  const { about } = data;
  if (!about) return null;
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="border-l-2 border-primary pl-4"
          >
            <span className="text-sm font-semibold text-primary">About {data.name}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
          >
            {about.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            {about.body}
          </motion.p>
          {about.facts && (
            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-7 overflow-hidden rounded-2xl border border-border bg-card"
            >
              {about.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[minmax(120px,40%)_1fr] gap-4 border-b border-border/60 px-5 py-3 last:border-0">
                  <dt className="text-sm text-muted-foreground">{f.label}</dt>
                  <dd className="text-sm font-semibold text-foreground">{f.value}</dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border"
        >
          <Image
            src={about.location.image}
            alt={`${about.location.name}, ${about.location.area}`}
            fill
            unoptimized
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur-md">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-background">
              <MapPin size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">{about.location.name}</p>
              <p className="text-xs text-muted-foreground">{about.location.area}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {about.features.length > 0 && (
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {about.features.map((f, i) => {
          const Icon = fzIcons[f.icon];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex gap-4 rounded-2xl border border-border bg-gradient-card p-6 transition-colors duration-300 hover:border-primary/50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-background">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      )}
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Building2, FileCheck, Landmark, Plane } from "lucide-react";

const inclusions = [
  { icon: FileCheck, label: "Trade licence & registration" },
  { icon: Plane, label: "Visa processing" },
  { icon: Building2, label: "Office space solutions" },
  { icon: Landmark, label: "Mainland, free zone & offshore" },
];

export default function OffersIntro() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-20">
      <div>
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="border-l-2 border-primary pl-4"
        >
          <span className="text-sm font-semibold text-primary">Company Setup Packages</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl"
        >
          Affordable Business Setup, <span className="text-primary">Tailored to You</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 space-y-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base"
        >
          <p>
            Starting a business in Dubai is simpler with Afaq Al Khaleej&apos;s
            tailored setup packages. Whether you want a mainland, free zone or
            offshore company, we bundle everything from trade licence and company
            registration to visa processing and office space — and our team
            handles the process end to end.
          </p>
          <p>
            The right licence depends on what your business does, and costs vary
            with the licence type and location. Mainland licences in Dubai are
            issued by the Department of Economy and Tourism (DET), while free zone
            licences come from each zone&apos;s own authority.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-4 self-center">
        {inclusions.map(({ icon: Icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            whileHover={{ y: -4 }}
            className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-card px-4 py-7 text-center"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary">
              <Icon size={20} />
            </span>
            <span className="text-sm font-semibold text-foreground">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

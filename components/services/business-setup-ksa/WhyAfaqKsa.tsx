"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Calculator, LucideIcon, Settings2, ShieldCheck } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Award,
    title: "KSA Formation Know-How",
    text: "Guidance on structures, registrations and approvals so you enter the Saudi market with confidence.",
  },
  {
    icon: Calculator,
    title: "Budgeting Your Saudi Setup",
    text: "Clear, itemised estimates so you know what government, third-party and advisory costs to expect.",
  },
  {
    icon: Settings2,
    title: "Customised Setup Solutions",
    text: "A route shaped around your activity, ownership and growth plans — not a one-size-fits-all package.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Formation Services",
    text: "From investment registration to commercial registration, bank account and post-setup registrations.",
  },
];

export default function WhyAfaqKsa() {
  return (
    <section className="relative mx-4 my-16 overflow-hidden rounded-3xl md:mx-8 lg:mx-12 lg:my-24">
      <Image
        src="/images/services/business-consultancy/uae-map-skyline.png"
        alt=""
        fill
        unoptimized
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-surface/90 via-card/95 to-background" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_1.5fr] lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="self-center"
        >
          <div className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">Starting a Company in Saudi Arabia?</span>
          </div>
          <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-5xl">
            <span className="text-primary">Afaq Al Khaleej</span> — Your Partner for
            Company Setup in Saudi Arabia
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
            If you plan to form a company in the Kingdom, we offer complete
            company formation support — from your first assessment to an
            operating business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.12 }}
              className="rounded-2xl border border-border bg-background/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={19} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

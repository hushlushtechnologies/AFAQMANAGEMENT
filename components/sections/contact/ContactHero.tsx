 "use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, Globe2 } from "lucide-react";

const highlights = [
  { icon: Compass, title: "Strategic Guidance", subtitle: "Personalized Support" },
  { icon: ShieldCheck, title: "Trusted Expertise", subtitle: "Proven Experience" },
  { icon: Globe2, title: "UAE Wide Support", subtitle: "Across 7 Emirates" },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-16 lg:pt-24">
      {/* ambient glow behind heading */}
      <div className="pointer-events-none absolute left-1/2 top-32 h-[380px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-4xl font-light leading-[1.2] text-foreground sm:text-5xl md:text-6xl"
        >
          Let&apos;s Start the
          <br />
          Right <span className="text-primary">Conversation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground md:text-base"
        >
          Short introduction positioning Afaq as ready to discuss investment,
          business setup, consultancy, PRO services, and opportunities
          across the UAE.
        </motion.p>

        <div className="mx-auto mt-6 h-px w-16 bg-primary/60" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="https://wa.me/971527094940"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
          >
            WhatsApp Us
            <ArrowRight size={16} />
          </Link>
          <Link
            href="#contact-form"
            className="rounded-full border-2 border-accent-blue px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-blue hover:shadow-[0_0_24px_rgba(29,123,224,0.45)]"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>

      {/* half-circle (dome) showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="relative mx-auto mt-16 aspect-[2/1] w-full max-w-4xl overflow-hidden rounded-t-full border-4 border-b-0 border-primary"
      >
        <Image
          src="/images/contact/hero-circle-bg.jpg"
          alt="Dubai skyline at dusk"
          fill
          unoptimized
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pb-10">
          <Image src="/images/logo.svg" alt="AFAQ" width={140} height={140} className="h-20 w-20 object-contain sm:h-28 sm:w-28" />
        </div>

        <div className="absolute inset-x-0 bottom-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 sm:bottom-6">
          {highlights.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                <Icon size={16} />
              </span>
              <div className="text-left">
                <span className="block text-sm font-semibold text-foreground">{title}</span>
                <span className="block text-xs text-muted-foreground">{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
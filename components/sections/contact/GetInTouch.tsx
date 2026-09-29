 "use client";

import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, LucideIcon } from "lucide-react";

type ContactMethod = {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  isWhatsapp?: boolean;
};

const methods: ContactMethod[] = [
  { icon: Phone, title: "Call Us", value: "+971 52 709 4940", href: "tel:+971527094940" },
  { icon: Mail, title: "Email Us", value: "info@afaqmanagement.com", href: "mailto:info@afaqmanagement.com" },
  { icon: MessageCircle, title: "WhatsApp Us", value: "", href: "https://wa.me/971527094940", isWhatsapp: true },
  { icon: MapPin, title: "Visit Us", value: "Office No. 501 Al Zarouni Business center Al Barsha 1, Sheikh Zayed Road, Dubai", href: "#" },
];

const tagline = ["Investment", "Strategy", "Partnership", "Growth"];

export default function GetInTouch() {
  return (
    <section className="mx-4 my-16 md:mx-8 lg:mx-12 lg:my-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <div className="border-l-2 border-primary pl-4">
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>

          <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl md:text-[2.75rem]">
            Choose the Way
            <br />
            You&apos;d Like to
            <br />
            <span className="text-primary">Connect.</span>
          </h2>

          <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            Whether you&apos;re exploring an investment, planning a business,
            looking for corporate support, or simply have a question, our
            team is ready to understand your requirements and guide you
            toward the right next step.
          </p>
        </motion.div>

        {/* right — contact method cards */}
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {methods.map(({ icon: Icon, title, value, href, isWhatsapp }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center rounded-2xl border border-border bg-card p-5 text-center"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary text-primary">
                  <Icon size={18} />
                </span>
                <span className="mt-3 block text-base font-semibold text-foreground">{title}</span>
                {isWhatsapp ? (
                  
                <a    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-full bg-gradient-silver px-4 py-1.5 text-xs font-semibold text-background transition-transform hover:scale-105"
                  >
                    Visit WhatsApp
                  </a>
                ) : (
                  <a href={href} className="mt-1 block text-sm leading-relaxed text-muted-foreground hover:text-primary">
                    {value}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 lg:justify-start"
          >
            {tagline.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  {word}
                </span>
                {i < tagline.length - 1 && <span className="text-primary">•</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* big glowing email */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-16 text-center"
      >
       <a 
          href="mailto:info@afaqmanagement.com"
          className="font-heading text-shine inline-block text-4xl font-bold sm:text-5xl md:text-6xl"
        >
          info@afaqmanagement.com
        </a>
      </motion.div>
    </section>
  );
}
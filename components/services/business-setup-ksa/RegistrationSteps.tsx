"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  { title: "Prepare incorporation paperwork", text: "Gather and authenticate the documents your investor route requires." },
  { title: "MISA investment registration", text: "Register with the Ministry of Investment where your investor route requires it." },
  { title: "Finalise legal documents", text: "Complete the articles of association and other company documents." },
  { title: "Incorporation & Commercial Registration", text: "Apply for incorporation and your CR through the Saudi Business Center." },
  { title: "Place of business & national address", text: "Choose your premises and register a national address." },
  { title: "Post-incorporation registrations", text: "Complete the registrations that follow incorporation." },
  { title: "General manager authorisation", text: "Check residence or work authorisation requirements for the general manager." },
  { title: "Employer & personnel registrations", text: "Complete any applicable employer and staff registrations." },
  { title: "Corporate bank account", text: "Confirm the documents and identity checks your chosen bank requires." },
];

export default function RegistrationSteps() {
  return (
    <section id="registration-steps" className="mx-4 my-16 scroll-mt-28 md:mx-8 lg:mx-12 lg:my-24">
      <SectionHeader
        eyebrow="Registration Steps"
        heading={
          <>
            How to Start a Business <span className="text-primary">in Saudi Arabia</span>
          </>
        }
        paragraph="A typical route from paperwork to an operating company. Exact steps depend on your activity, investor profile and structure."
      />

      <div className="relative mx-auto mt-16 max-w-4xl px-6">
        {/* vertical line */}
        <div aria-hidden className="absolute bottom-6 left-[2.875rem] top-6 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent md:left-1/2" />

        <ol className="space-y-8">
          {steps.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: right ? 32 : -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  right ? "md:ml-auto md:pl-12" : "md:flex-row-reverse md:pr-12 md:text-right"
                }`}
              >
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary bg-background font-heading text-primary md:absolute md:top-1 ${
                    right ? "md:-left-[22px]" : "md:-right-[22px]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-2xl border border-border bg-gradient-card px-6 py-5 transition-colors duration-300 hover:border-primary/50">
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

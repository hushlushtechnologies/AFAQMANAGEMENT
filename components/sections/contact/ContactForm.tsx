 "use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, ChevronDown, Clock, ShieldCheck, Headset, LucideIcon } from "lucide-react";

const trustItems: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Clock, title: "Quick Response", description: "We aim to respond within 24 hours" },
  { icon: ShieldCheck, title: "100% Confidential", description: "Your information safe with us" },
  { icon: User, title: "Expert Guidance", description: "Speak with specialists who understand your goals" },
  { icon: Headset, title: "Support", description: "All over UAE we will support for your business" },
];

const interestOptions = [
  "Investment Services",
  "Business Consultancy",
  "PRO & Government Services",
  "Company Formation",
  "Feasibility Studies",
  "Digital Business Solutions",
  "Investors & Opportunities",
];

const contactMethodOptions = ["Phone Call", "Email", "WhatsApp"];
const contactTimeOptions = ["Morning", "Afternoon", "Evening"];

function SelectField({
  label,
  placeholder,
  options,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-foreground">{label}</label>
      <div className="relative mt-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+971",
    phone: "",
    country: "",
    interest: "",
    interestedInAfaqInvestment: false,
    contactMethod: "",
    contactTime: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an email service (e.g. EmailJS) or API route once decided
    console.log("Contact form submitted:", form);
    setSubmitted(true);
  }

  return (
    <section id="contact-form" className="relative mx-4 mb-20 md:mx-8 lg:mx-12">
      {/* map background */}
      <div className="relative mx-auto h-[420px] w-full max-w-7xl overflow-hidden rounded-3xl opacity-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8041503113645!2d55.3861948!3d25.3443522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b4ad1f84c95%3A0x905e1932b1c879a2!2sAfaq%20Alkhaleej%20Management%20Consultants!5e0!3m2!1sen!2sin!4v1790539594874!5m2!1sen!2sin"
          title="Afaq Al Khaleej Management Consultants — location map"
         className="h-full w-full border-0 grayscale-[40%] invert-[92%] contrast-[90%]"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* floating form panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto -mt-64 max-w-6xl rounded-3xl border border-border bg-card p-8 sm:-mt-72 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* left — intro + trust items */}
          <div>
            <div className="border-l-2 border-primary pl-4">
              <span className="text-sm font-semibold text-primary">Consultation Form</span>
            </div>

            <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl">
              Tell Us What
              <br />
              You&apos;re <span className="text-primary">Looking For.</span>
            </h2>

            <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">
              Share a few details about your requirements and our team will
              get in touch with the right guidance and next step
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {trustItems.map(({ icon: Icon, title, description }) => (
                <div key={title} className="text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-primary text-primary">
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* right — form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {submitted && (
              <div className="rounded-xl border border-primary bg-surface px-4 py-3 text-sm text-foreground">
                Thanks — your enquiry has been received. Our team will be in touch shortly.
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="text"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="Enter your Name"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <User size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="Enter your Email ID"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <Mail size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <div className="mt-2 flex gap-2">
                  <select
                    value={form.countryCode}
                    onChange={(e) => update("countryCode", e.target.value)}
                    className="w-20 shrink-0 rounded-xl border border-border bg-surface px-2 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="+971">+971</option>
                    <option value="+966">+966</option>
                    <option value="+973">+973</option>
                    <option value="+974">+974</option>
                  </select>
                  <div className="relative flex-1">
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="Enter your Number"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                    />
                    <Phone size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <SelectField
                label="Country"
                placeholder="Pick your Country"
                options={["United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Other"]}
                value={form.country}
                onChange={(v) => update("country", v)}
              />
            </div>

            <SelectField
              label="Interested In"
              placeholder="Pick your Interest of your Service"
              options={interestOptions}
              value={form.interest}
              onChange={(v) => update("interest", v)}
            />

            <label className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                onClick={() => update("interestedInAfaqInvestment", !form.interestedInAfaqInvestment)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
                  form.interestedInAfaqInvestment ? "bg-gradient-gold" : "bg-border"
                }`}
              >
                <motion.span
                  animate={{ x: form.interestedInAfaqInvestment ? 20 : 2 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-1 h-4 w-4 rounded-full bg-background"
                />
              </button>
              <span className="text-sm font-medium text-foreground">Interest with Afaq Investment</span>
            </label>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <SelectField
                label="Preferred Contact Method"
                placeholder="Pick your Preference"
                options={contactMethodOptions}
                value={form.contactMethod}
                onChange={(v) => update("contactMethod", v)}
              />
              <SelectField
                label="Best Time to Contact You"
                placeholder="Pick your Day"
                options={contactTimeOptions}
                value={form.contactTime}
                onChange={(v) => update("contactTime", v)}
              />
            </div>

            <div>
              <label className="text-sm text-foreground">Tell Us More</label>
              <textarea
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="Write Something..."
                rows={4}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>

            <p className="text-xs leading-relaxed text-muted-foreground">
              By clicking &quot;Submit Enquiry,&quot; you agree to the privacy
              policy and consent to Afaq Al Khaleej Management Consultancy
              contacting you regarding your enquiry
            </p>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)]"
            >
              Send Enquiry →
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
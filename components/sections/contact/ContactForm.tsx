 "use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { countries } from "countries-list";
import { isValidPhoneNumber } from "libphonenumber-js";
import { User, Mail, Phone, ChevronDown, Clock, ShieldCheck, Headset, LucideIcon, CheckCircle2, X } from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// full country list, alphabetical — used for the "Country" select
const countryList = Object.values(countries)
  .map((c) => c.name)
  .sort((a, b) => a.localeCompare(b));

// unique dial codes only, numerically sorted — used for the phone country-code select
const phoneCountryCodes = Array.from(
  new Set(Object.values(countries).map((c) => `+${c.phone}`))
).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

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

const initialForm = {
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
};

type FormState = typeof initialForm;
type FormErrors = Partial<Record<keyof FormState, string>>;

function validate(values: FormState): FormErrors {
  const errs: FormErrors = {};

  if (!values.fullName.trim()) errs.fullName = "Full name is required";
  else if (values.fullName.trim().length < 2) errs.fullName = "Enter a valid name";

  if (!values.email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errs.email = "Enter a valid email address";

  const phoneDigits = values.phone.trim();
  if (!phoneDigits) errs.phone = "Phone number is required";
  else if (!isValidPhoneNumber(`${values.countryCode}${phoneDigits}`)) {
    errs.phone = "Enter a valid phone number for the selected country";
  }

  if (!values.country) errs.country = "Please select your country";
  if (!values.interest) errs.interest = "Please select a service";
  if (!values.contactMethod) errs.contactMethod = "Please select a contact method";
  if (!values.contactTime) errs.contactTime = "Please select a preferred time";

  return errs;
}

function SelectField({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  return (
    <div>
      <label className="text-sm text-foreground">{label}</label>
      <div className="relative mt-2">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-xl border bg-surface px-4 py-3 text-sm text-foreground focus:outline-none ${
            error ? "border-red-500" : "border-border focus:border-primary"
          }`}
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
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = phoneCountryCodes.filter((code) => code.includes(query.trim()));

  return (
    <div ref={ref} className="relative w-24 shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-1 rounded-xl border border-border bg-surface px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
      >
        {value}
        <ChevronDown size={14} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-20 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-card shadow-xl"
          >
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value.replace(/[^\d+]/g, ""))}
              placeholder="Search code"
              className="w-full border-b border-border bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <div className="max-h-48 overflow-y-auto">
              {filtered.length === 0 && <p className="px-3 py-2 text-xs text-muted-foreground">No match</p>}
              {filtered.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    onChange(code);
                    setOpen(false);
                    setQuery("");
                  }}
                  className={`block w-full px-3 py-2 text-left text-sm hover:bg-surface ${
                    code === value ? "text-primary" : "text-foreground"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SuccessModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 w-full max-w-sm rounded-2xl border border-primary bg-card p-8 text-center shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>

            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary">
              <CheckCircle2 size={28} />
            </span>

            <h3 className="mt-5 text-xl font-semibold text-foreground">Enquiry Received</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thanks — your enquiry has been received. Our team will be in touch shortly.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.01]"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: form.fullName,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`,
          country: form.country,
          interest: form.interest,
          interested_in_investment: form.interestedInAfaqInvestment ? "Yes" : "No",
          contact_method: form.contactMethod,
          contact_time: form.contactTime,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError("Something went wrong while sending your enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {submitError && (
              <div className="rounded-xl border border-red-500 bg-surface px-4 py-3 text-sm text-red-500">
                {submitError}
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm text-foreground">
                  Full Name <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    placeholder="Enter your Name"
                    className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                      errors.fullName ? "border-red-500" : "border-border focus:border-primary"
                    }`}
                  />
                  <User size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Email <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="Enter your Email ID"
                    className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                      errors.email ? "border-red-500" : "border-border focus:border-primary"
                    }`}
                  />
                  <Mail size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Phone Number <span className="text-primary">*</span>
                </label>
                <div className="mt-2 flex gap-2">
                  <CountryCodeSelect value={form.countryCode} onChange={(v) => update("countryCode", v)} />
                  <div className="relative flex-1">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 14))}
                      placeholder="Enter your Number"
                      maxLength={14}
                      className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                        errors.phone ? "border-red-500" : "border-border focus:border-primary"
                      }`}
                    />
                    <Phone size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>

              <SelectField
                label="Country"
                placeholder="Pick your Country"
                options={countryList}
                value={form.country}
                onChange={(v) => update("country", v)}
                error={errors.country}
              />
            </div>

            <SelectField
              label="Interested In"
              placeholder="Pick your Interest of your Service"
              options={interestOptions}
              value={form.interest}
              onChange={(v) => update("interest", v)}
              error={errors.interest}
            />

            <label className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={form.interestedInAfaqInvestment}
                onClick={() => update("interestedInAfaqInvestment", !form.interestedInAfaqInvestment)}
                className={`relative h-6 w-11 shrink-0 rounded-full p-[2px] transition-colors duration-300 ${
                  form.interestedInAfaqInvestment ? "bg-gradient-gold" : "bg-accent-blue/40"
                }`}
              >
                <motion.span
                  animate={{ x: form.interestedInAfaqInvestment ? 20 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="block h-5 w-5 rounded-full bg-background"
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
                error={errors.contactMethod}
              />
              <SelectField
                label="Best Time to Contact You"
                placeholder="Pick your Day"
                options={contactTimeOptions}
                value={form.contactTime}
                onChange={(v) => update("contactTime", v)}
                error={errors.contactTime}
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
              disabled={isSubmitting}
              className="w-full rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(235,184,17,0.5)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Enquiry →"}
            </button>
          </form>
        </div>
      </motion.div>

      <SuccessModal open={submitted} onClose={() => setSubmitted(false)} />
    </section>
  );
}
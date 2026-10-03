 "use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { countries } from "countries-list";
import { City } from "country-state-city";
import { isValidPhoneNumber } from "libphonenumber-js";
import { User, Mail, Phone, Store, Globe, Upload, TrendingUp, BarChart3, Users, ShieldCheck, LucideIcon, ChevronDown, CheckCircle2, X } from "lucide-react";
import FormSelect from "../shared/FormSelect";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SUBMIT_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_SUBMIT_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_SUBMIT_PUBLIC_KEY!;

const trustItems: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: TrendingUp, title: "Strong Market Opportunities", description: "Large addressable market with clear growth potential" },
  { icon: BarChart3, title: "Scalable Business Model", description: "A model that can grow profitability and create long term value" },
  { icon: Users, title: "Exceptional Team", description: "Passionate and capable and committed founders with execution ability" },
  { icon: ShieldCheck, title: "Sustainable Advantages", description: "Clear differential and barriers that create defensibility" },
];

// full country list, alphabetical — used for "Country" and "Country of Operation"
const countryList = Object.values(countries)
  .map((c) => c.name)
  .sort((a, b) => a.localeCompare(b));

// country name -> ISO2, needed to look up cities for the selected "Country of Operation"
const countryNameToIso2 = Object.fromEntries(
  Object.entries(countries).map(([iso2, c]) => [c.name, iso2])
) as Record<string, string>;

// unique dial codes only, numerically sorted — used for the phone country-code select
const phoneCountryCodes = Array.from(
  new Set(Object.values(countries).map((c) => `+${c.phone}`))
).sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

const industryOptions = ["Technology", "Real Estate", "Hospitality", "Automotive", "Retail", "Investment & Finance", "Other"];

const initialForm = {
  fullName: "",
  email: "",
  countryCode: "+971",
  phone: "",
  country: "",
  companyName: "",
  companyWebsite: "",
  countryOfOperation: "",
  city: "",
  industry: "",
  description: "",
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

  if (!values.companyName.trim()) errs.companyName = "Company name is required";

  if (!values.companyWebsite.trim()) errs.companyWebsite = "Company website is required";
  else if (!/^https?:\/\/[^\s]+\.[^\s]+$/.test(values.companyWebsite.trim()))
    errs.companyWebsite = "Enter a valid URL (starting with http:// or https://)";

  return errs;
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

function SearchableSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  error,
}: {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  error?: string;
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

  const filtered = options.filter((opt) => opt.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div>
      <label className="text-sm text-foreground">{label}</label>
      <div ref={ref} className="relative mt-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          className={`flex w-full items-center justify-between rounded-xl border bg-surface px-4 py-3 text-left text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${
            error ? "border-red-500" : "border-border focus:border-primary"
          } ${value ? "text-foreground" : "text-muted-foreground"}`}
        >
          {value || placeholder}
          <ChevronDown size={16} className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {open && !disabled && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl"
            >
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${label.toLowerCase()}`}
                className="w-full border-b border-border bg-transparent px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <div className="max-h-56 overflow-y-auto">
                {filtered.length === 0 && <p className="px-4 py-2.5 text-xs text-muted-foreground">No match</p>}
                {filtered.slice(0, 200).map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onChange(opt);
                      setOpen(false);
                      setQuery("");
                    }}
                    className={`block w-full px-4 py-2.5 text-left text-sm hover:bg-surface ${
                      opt === value ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
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

            <h3 className="mt-5 text-xl font-semibold text-foreground">Submission Received</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Thanks — your business submission has been received. Our team will review it and be in touch shortly.
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

export default function SubmitBusinessForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormState>(initialForm);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  // cities for the currently selected "Country of Operation"
  const cityOptions = useMemo(() => {
    const iso2 = countryNameToIso2[form.countryOfOperation];
    if (!iso2) return [];
    const cities = City.getCitiesOfCountry(iso2) ?? [];
    return Array.from(new Set(cities.map((c) => c.name))).sort((a, b) => a.localeCompare(b));
  }, [form.countryOfOperation]);

  function updateCountryOfOperation(v: string) {
    setForm((prev) => ({ ...prev, countryOfOperation: v, city: "" }));
    setErrors((prev) => ({ ...prev, countryOfOperation: undefined, city: undefined }));
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
          company_name: form.companyName,
          company_website: form.companyWebsite,
          country_of_operation: form.countryOfOperation || "Not specified",
          city: form.city || "Not specified",
          industry: form.industry || "Not specified",
          description: form.description || "Not provided",
          attachment_name: fileName ?? "No file attached",
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
      setFileName(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitError("Something went wrong while sending your submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mx-4 mb-20 md:mx-8 lg:mx-12" id="submit-business">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-6xl rounded-3xl border border-border bg-card p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* left — intro + trust items */}
          <div>
            <div className="border-l-2 border-primary pl-4">
              <span className="text-sm font-semibold text-primary">Consultation Form</span>
            </div>

            <h2 className="font-heading mt-5 text-3xl font-light leading-[1.2] text-foreground sm:text-4xl">
              Submit Your
              <br />
              Business
            </h2>

            <p className="mt-5 border-l-2 border-primary/50 pl-4 text-sm leading-relaxed text-muted-foreground">
              Please fill in the details below. The more information you
              share, the better we can understand your business
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

              <FormSelect
                label="Country"
                placeholder="Pick your Country"
                options={countryList}
                value={form.country}
                onChange={(v) => update("country", v)}
                required
                error={errors.country}
              />

              <div>
                <label className="text-sm text-foreground">
                  Company Name / Business Name <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    placeholder="Enter your Business Name"
                    className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                      errors.companyName ? "border-red-500" : "border-border focus:border-primary"
                    }`}
                  />
                  <Store size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName}</p>}
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Company Website <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    type="url"
                    value={form.companyWebsite}
                    onChange={(e) => update("companyWebsite", e.target.value)}
                    placeholder="Enter your Website URL"
                    className={`w-full rounded-xl border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none ${
                      errors.companyWebsite ? "border-red-500" : "border-border focus:border-primary"
                    }`}
                  />
                  <Globe size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
                {errors.companyWebsite && <p className="mt-1 text-xs text-red-500">{errors.companyWebsite}</p>}
              </div>

              <FormSelect
                label="Country of Operation"
                placeholder="Pick your Country"
                options={countryList}
                value={form.countryOfOperation}
                onChange={updateCountryOfOperation}
              />

              <SearchableSelect
                label="City"
                placeholder={form.countryOfOperation ? "Pick your City" : "Select a country first"}
                options={cityOptions}
                value={form.city}
                onChange={(v) => update("city", v)}
                disabled={!form.countryOfOperation}
                error={errors.city}
              />
            </div>

            <FormSelect
              label="Industry"
              placeholder="Pick your Business Sector"
              options={industryOptions}
              value={form.industry}
              onChange={(v) => update("industry", v)}
            />

            {/* File upload temporarily hidden — EmailJS free plan can't send the
                actual file, only its name, so this was misleading to submitters.
                Re-enable once a real upload path (e.g. Nodemailer + storage) is wired up. */}
            {/* <div>
              <label className="text-sm text-foreground">Pitch Deck / Supporting Document</label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 flex w-full items-center justify-between rounded-xl border border-primary bg-transparent px-4 py-4 text-left"
              >
                <span>
                  <span className="block text-sm font-medium text-primary">
                    {fileName ?? "Click to upload your file or drag or drop"}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">.PDF .Word . PPT .PPTX Upto 20 Mb</span>
                </span>
                <Upload size={18} className="shrink-0 text-primary" />
              </button>
            </div> */}

            <div>
              <label className="text-sm text-foreground">Brief Description about your business</label>
              <textarea
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Write Something...."
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
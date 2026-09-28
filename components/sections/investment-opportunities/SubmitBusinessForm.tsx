"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Store, Globe, Upload, TrendingUp, BarChart3, Users, ShieldCheck, LucideIcon } from "lucide-react";
import FormSelect from "../shared/FormSelect";
 

const trustItems: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: TrendingUp, title: "Strong Market Opportunities", description: "Large addressable market with clear growth potential" },
  { icon: BarChart3, title: "Scalable Business Model", description: "A model that can grow profitability and create long term value" },
  { icon: Users, title: "Exceptional Team", description: "Passionate and capable and committed founders with execution ability" },
  { icon: ShieldCheck, title: "Sustainable Advantages", description: "Clear differential and barriers that create defensibility" },
];

const countryOptions = ["United Arab Emirates", "Saudi Arabia", "Bahrain", "Qatar", "Other"];
const cityOptions = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Other"];
const industryOptions = ["Technology", "Real Estate", "Hospitality", "Automotive", "Retail", "Investment & Finance", "Other"];

export default function SubmitBusinessForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
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
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to an email service or API route once decided
    console.log("Submit your business form:", form, fileName);
    setSubmitted(true);
  }

  return (
    <section className="mx-4 mb-20 md:mx-8 lg:mx-12">
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
          <form onSubmit={handleSubmit} className="space-y-5">
            {submitted && (
              <div className="rounded-xl border border-primary bg-surface px-4 py-3 text-sm text-foreground">
                Thanks — your business submission has been received. Our team will review it and be in touch shortly.
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

              <FormSelect
                label="Country"
                placeholder="Pick your Country"
                options={countryOptions}
                value={form.country}
                onChange={(v) => update("country", v)}
                required
              />

              <div>
                <label className="text-sm text-foreground">
                  Company Name / Business Name <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="text"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    placeholder="Enter your Business Name"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <Store size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="text-sm text-foreground">
                  Company Website <span className="text-primary">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    required
                    type="url"
                    value={form.companyWebsite}
                    onChange={(e) => update("companyWebsite", e.target.value)}
                    placeholder="Enter your Website URL"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <Globe size={16} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                </div>
              </div>

              <FormSelect
                label="Country of Operation"
                placeholder="Pick your Country"
                options={countryOptions}
                value={form.countryOfOperation}
                onChange={(v) => update("countryOfOperation", v)}
              />

              <FormSelect
                label="City"
                placeholder="Pick your City"
                options={cityOptions}
                value={form.city}
                onChange={(v) => update("city", v)}
              />
            </div>

            <FormSelect
              label="Industry"
              placeholder="Pick your Business Sector"
              options={industryOptions}
              value={form.industry}
              onChange={(v) => update("industry", v)}
            />

            <div>
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
            </div>

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
 "use client";

import { ChevronDown } from "lucide-react";

type FormSelectProps = {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
};

export default function FormSelect({ label, placeholder, options, value, onChange, required, error }: FormSelectProps) {
  return (
    <div>
      <label className="text-sm text-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
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
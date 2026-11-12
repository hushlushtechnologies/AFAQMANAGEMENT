import type { FreezoneData } from "@/lib/freezones/types";
import { tradeLicense } from "./trade-license";
import { ecommerceLicense } from "./ecommerce-license";
import { generalTradingLicense } from "./general-trading-license";
import { professionalLicense } from "./professional-license";
import { commercialLicense } from "./commercial-license";
import { industrialLicense } from "./industrial-license";

// Licensing pages reuse the shared free-zone page template.
export const licences: Record<string, FreezoneData> = {
  "trade-license": tradeLicense,
  "ecommerce-license": ecommerceLicense,
  "general-trading-license": generalTradingLicense,
  "professional-license": professionalLicense,
  "commercial-license": commercialLicense,
  "industrial-license": industrialLicense,
};

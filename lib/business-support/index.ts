import type { FreezoneData } from "@/lib/freezones/types";
import { legalServices } from "./legal-services";
import { bankAccountOpening } from "./bank-account-opening";
import { goldenVisa } from "./golden-visa";
import { uaeFoundation } from "./uae-foundation";
import { trademarkRegistration } from "./trademark-registration";
import { proServices } from "./pro-services";

export const businessSupportPages: Record<string, FreezoneData> = {
  "legal-services": legalServices,
  "bank-account-opening": bankAccountOpening,
  "golden-visa": goldenVisa,
  "uae-foundation": uaeFoundation,
  "trademark-registration": trademarkRegistration,
  "pro-services": proServices,
};

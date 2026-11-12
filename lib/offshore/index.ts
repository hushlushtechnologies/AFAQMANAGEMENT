import type { FreezoneData } from "@/lib/freezones/types";
import { dubaiOffshore } from "./dubai";
import { rakicc } from "./rakicc";
import { bvi } from "./bvi";
import { caymanIslands } from "./cayman-islands";
import { mauritius } from "./mauritius";

// Offshore pages reuse the shared free-zone page template.
export const offshores: Record<string, FreezoneData> = {
  dubai: dubaiOffshore,
  rakicc,
  bvi,
  "cayman-islands": caymanIslands,
  mauritius,
};

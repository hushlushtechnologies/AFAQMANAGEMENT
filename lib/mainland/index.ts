import type { FreezoneData } from "@/lib/freezones/types";
import { dubaiMainland } from "./dubai";
import { sharjahMainland } from "./sharjah";
import { abuDhabiMainland } from "./abu-dhabi";
import { ajmanMainland } from "./ajman";
import { uaqMainland } from "./uaq";

// Mainland pages reuse the shared free-zone page template.
export const mainlands: Record<string, FreezoneData> = {
  dubai: dubaiMainland,
  sharjah: sharjahMainland,
  "abu-dhabi": abuDhabiMainland,
  ajman: ajmanMainland,
  uaq: uaqMainland,
};

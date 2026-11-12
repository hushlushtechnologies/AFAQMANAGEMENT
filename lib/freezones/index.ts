import type { FreezoneData } from "./types";
import { meydan } from "./meydan";
import { ifza } from "./ifza";
import { dmcc } from "./dmcc";
import { difc } from "./difc";
import { srtip } from "./srtip";
import { shams } from "./shams";
import { spc } from "./spc";
import { rakez } from "./rakez";
import { ajmanMediaCity } from "./ajman-media-city";
import { uaq } from "./uaq";
import { abuDhabi } from "./abu-dhabi";

export const freezones: Record<string, FreezoneData> = {
  meydan,
  ifza,
  dmcc,
  difc,
  srtip,
  shams,
  spc,
  rakez,
  "ajman-media-city": ajmanMediaCity,
  uaq,
  "abu-dhabi": abuDhabi,
};

export type { FreezoneData } from "./types";

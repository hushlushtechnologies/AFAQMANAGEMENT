import Faq from "@/components/sections/shared/Faq";
import ClosingCta from "@/components/shared/ClosingCta";
import type { FreezoneData } from "@/lib/freezones/types";
import FreezoneHero from "./FreezoneHero";
import FreezoneAbout from "./FreezoneAbout";
import FreezoneCost from "./FreezoneCost";
import FreezoneLicenceTypes from "./FreezoneLicenceTypes";
import FreezoneStructures from "./FreezoneStructures";
import FreezoneInfoBlock from "./FreezoneInfoBlock";
import FreezoneActivities from "./FreezoneActivities";
import { FreezoneOffice, FreezoneVisas } from "./FreezoneOfficeVisas";
import { FreezoneDocuments, FreezoneProcess } from "./FreezoneDocsProcess";
import { FreezoneBanking, FreezoneFeatures } from "./FreezoneBankingFeatures";
import { FreezoneCompare, FreezoneSupport, FreezoneTax } from "./FreezoneCompareSupport";

// Section order for every free-zone page. Optional sections render only when
// the zone's data includes them.
export default function FreezonePage({ data }: { data: FreezoneData }) {
  return (
    <main>
      <FreezoneHero data={data} />
      <FreezoneAbout data={data} />
      <FreezoneFeatures data={data} slot="early" />
      <FreezoneCost data={data} />
      <FreezoneStructures data={data} />
      <FreezoneLicenceTypes data={data} />
      <FreezoneActivities data={data} />
      <FreezoneOffice data={data} />
      <FreezoneVisas data={data} />
      <FreezoneProcess data={data} />
      <FreezoneDocuments data={data} />
      <FreezoneInfoBlock data={data} />
      <FreezoneBanking data={data} />
      <FreezoneFeatures data={data} />
      <FreezoneCompare data={data} />
      <FreezoneTax data={data} />
      <FreezoneSupport data={data} />
      <Faq faqs={data.faqs} />
      <ClosingCta />
    </main>
  );
}

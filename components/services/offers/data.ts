// ---------------------------------------------------------------------------
// Offer packages — edit this list to add, remove or re-price packages.
// TODO(client): confirm every price, jurisdiction and issue time before launch.
// Categories marked "(check)" were inferred from the package name.
// ---------------------------------------------------------------------------

export type OfferCategory = "freezone" | "mainland";

export type Offer = {
  title: string;
  /** authority / zone shown as a tag */
  zone: string;
  category: OfferCategory;
  price: string;
  priceNote?: string;
  visas?: string;
};

export const ISSUE_TIME = "Licence issued in 3–5 working days*";

export const offers: Offer[] = [
  { title: "E-commerce Package", zone: "SRTIP", category: "freezone", price: "AED 5,500" },
  { title: "Free Zone E-commerce Licence with Office", zone: "Free Zone", category: "freezone", price: "AED 5,750" },
  { title: "UAE Free Zone Package", zone: "RAKEZ", category: "freezone", price: "AED 5,999", visas: "0 Visa" },
  { title: "General Trading E-commerce", zone: "RAKEZ", category: "freezone", price: "AED 6,000", priceNote: "Upfront", visas: "1 Visa" },
  { title: "General Trading Package", zone: "Free Zone", category: "freezone", price: "AED 6,875" }, // (check)
  { title: "General Trading Licence Offer", zone: "SPC", category: "freezone", price: "AED 6,875", visas: "Up to 20 Visas" },
  { title: "General Trading Licence", zone: "SRTIP", category: "freezone", price: "AED 8,500" },
  { title: "Professional Licence", zone: "Dubai Mainland", category: "mainland", price: "AED 12,500" }, // (check)
  { title: "General Trading Licence", zone: "Meydan Free Zone", category: "freezone", price: "AED 12,500", visas: "0 Visa" },
  { title: "E-commerce Business Licence", zone: "Dubai Free Zone", category: "freezone", price: "AED 12,500", visas: "0 Visa" },
  { title: "Consultancy Licence", zone: "Dubai Free Zone", category: "freezone", price: "AED 12,500", visas: "0 Visa" },
  { title: "Dubai Trading Licence", zone: "Dubai Mainland", category: "mainland", price: "AED 12,900" }, // (check)
  { title: "Business Licence with Residence Visa", zone: "SRTIP", category: "freezone", price: "AED 15,400", visas: "Residence Visa" },
  { title: "Freelancer Package", zone: "Free Zone", category: "freezone", price: "AED 15,520" }, // (check)
  { title: "Commercial Licence", zone: "Dubai Mainland", category: "mainland", price: "AED 16,000" },
  { title: "Professional Licence with Visa", zone: "Dubai Mainland", category: "mainland", price: "AED 17,500", visas: "With Visa" },
  { title: "Mainland Licence with Lifetime Free Visa", zone: "Dubai Mainland", category: "mainland", price: "AED 18,999", visas: "Lifetime Visa Offer" },
  { title: "Commercial Licence with Visa", zone: "Dubai Mainland", category: "mainland", price: "AED 21,500", visas: "With Visa" },
  { title: "General Trading Licence", zone: "Dubai Mainland", category: "mainland", price: "AED 33,000" },
  { title: "General Trading Licence with Visa", zone: "Dubai Mainland", category: "mainland", price: "AED 38,000", visas: "With Visa" },
];

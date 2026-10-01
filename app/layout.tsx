import type { Metadata, Viewport } from "next";
import { Outfit, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// TODO: replace with your real production domain
const SITE_URL = "https://www.afaqalkhaleej.com";
const SITE_NAME = "Afaq Al Khaleej Management Consultants";
const SITE_DESCRIPTION =
  "Afaq Al Khaleej Management Consultants helps investors and businesses set up, grow, and stay compliant across the UAE — covering company formation, PRO & government services, investment advisory, business consultancy, feasibility studies, and digital business solutions.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // NOTE: no `alternates.canonical` here — it belongs on each page's own
  // metadata export, pointing at that page's own real path (e.g. "/about",
  // "/services/finance-management"). Hardcoding "/" on every page tells
  // Google every URL on the site is a duplicate of the homepage, which is
  // a real SEO bug, not just a placeholder.
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Afaq Al Khaleej",
    "business setup UAE",
    "company formation Dubai",
    "PRO services UAE",
    "government services Dubai",
    "investment advisory UAE",
    "business consultancy Dubai",
    "feasibility studies UAE",
    "investment opportunities Dubai",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    // Replace with a real 1200x630 social-preview image once available —
    // without one, shared links on WhatsApp/LinkedIn/Facebook show no image.
    images: [{ url: "/images/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E0E10",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { licences } from "@/lib/licensing";

// Only the licensing pages defined in lib/licensing are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(licences).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = licences[slug];
  if (!data) return {};
  const title = data.name;
  const description = data.hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `/licensing/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/licensing/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = licences[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

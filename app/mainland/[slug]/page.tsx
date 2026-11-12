import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { mainlands } from "@/lib/mainland";

// Only the mainland pages defined in lib/mainland are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(mainlands).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = mainlands[slug];
  if (!data) return {};
  const title = `${data.name} Company Setup`;
  const description = data.hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `/mainland/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/mainland/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = mainlands[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

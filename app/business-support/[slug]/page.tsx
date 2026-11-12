import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { businessSupportPages } from "@/lib/business-support";

// Only the pages defined in lib/business-support are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(businessSupportPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = businessSupportPages[slug];
  if (!data) return {};
  const title = data.name;
  const description = data.hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `/business-support/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/business-support/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = businessSupportPages[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

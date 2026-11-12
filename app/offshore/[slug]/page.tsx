import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { offshores } from "@/lib/offshore";

// Only the offshore pages defined in lib/offshore are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(offshores).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = offshores[slug];
  if (!data) return {};
  const title = `${data.name} Company Formation`;
  const description = data.hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `/offshore/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/offshore/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = offshores[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

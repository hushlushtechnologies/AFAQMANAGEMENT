import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { accountingPages } from "@/lib/accounting";

// Only the accounting pages defined in lib/accounting are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(accountingPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = accountingPages[slug];
  if (!data) return {};
  const title = data.name;
  const description = data.hero.subtitle;
  return {
    title,
    description,
    alternates: { canonical: `/accounting/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/accounting/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = accountingPages[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

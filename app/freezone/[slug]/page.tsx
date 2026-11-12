import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreezonePage from "@/components/freezone/FreezonePage";
import { freezones } from "@/lib/freezones";

// Only the free zones defined in lib/freezones are valid; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(freezones).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = freezones[slug];
  if (!data) return {};
  const title = `${data.name} Company Setup in Dubai`;
  const description = `${data.hero.subtitle} ${data.name} licences, costs, activities, visas and documents — with expert setup support from Afaq Al Khaleej.`;
  return {
    title,
    description,
    alternates: { canonical: `/freezone/${slug}` },
    openGraph: {
      title: `${title} | Afaq Al Khaleej Management Consultants`,
      description,
      url: `/freezone/${slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = freezones[slug];
  if (!data) notFound();
  return <FreezonePage data={data} />;
}

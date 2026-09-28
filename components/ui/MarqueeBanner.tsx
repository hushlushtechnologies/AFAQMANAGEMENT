 import { ShieldCheck } from "lucide-react";

type MarqueeBannerProps = {
  items: string[];
  rotate?: boolean;
};

export default function MarqueeBanner({ items, rotate = false }: MarqueeBannerProps) {
  // duplicated once so the -50% translateX loops seamlessly
  const track = [...items, ...items];

  const ribbon = (
    <div className="flex w-max animate-marquee bg-gradient-gold py-3  ">
      {track.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="mx-4 flex shrink-0 items-center gap-2 text-xs font-semibold text-background sm:text-sm"
        >
          <ShieldCheck size={14} />
          {item}
        </span>
      ))}
    </div>
  );

  if (!rotate) {
    return <div className="relative w-full overflow-hidden">{ribbon}</div>;
  }

  // fixed-height "stage" contains the diagonal swing instead of letting it
  // bleed into whatever section sits above/below
  return (
    <div className="relative h-36     w-full overflow-hidden sm:h-32">
      <div className="absolute left-1/2 top-1/2 w-[120vw] -translate-x-1/2 -translate-y-1/2 -rotate-2 sm:-rotate-3">
        {ribbon}
      </div>
    </div>
  );
}
import { skills } from "@/lib/data";

export default function Marquee() {
  const items = Object.values(skills).flat();
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line/10 bg-surface/30 py-4"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-10 font-mono text-sm text-muted">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            {item}
            <span className="text-violet">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

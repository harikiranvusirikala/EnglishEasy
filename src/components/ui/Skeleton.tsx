/** A soft block with the final shape of what is loading, so nothing jumps when the real thing arrives. `tone="onBrand"` inside the teal card. */
export function Skeleton({ className = "", tone = "page" }: { className?: string; tone?: "page" | "onBrand" }) {
  return <div aria-hidden="true" className={`animate-pulse rounded-2xl motion-reduce:animate-none ${tone === "onBrand" ? "bg-white/15" : "bg-line/70"} ${className}`} />;
}

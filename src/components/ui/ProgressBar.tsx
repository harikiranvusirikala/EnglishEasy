/** A progress bar. `label` is its accessible name (a string from strings.ts); the screen shows its own text beside it. `tone="onBrand"` is for the teal brand card. */
export function ProgressBar({
  label,
  value,
  max,
  className = "",
  tone = "brand",
  size = "md",
}: {
  label: string;
  value: number;
  max: number;
  className?: string;
  tone?: "brand" | "onBrand" | "accent";
  size?: "sm" | "md";
}) {
  const percent = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  const track = tone === "onBrand" ? "bg-white/20" : "bg-sunken ring-1 ring-inset ring-line";
  const fill =
    tone === "onBrand"
      ? "bg-[linear-gradient(90deg,#fde68a,#fbbf24)]"
      : tone === "accent"
        ? "bg-accent"
        : "bg-[linear-gradient(90deg,var(--brand),color-mix(in_srgb,var(--brand)_70%,var(--accent)))]";
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={`w-full overflow-hidden rounded-full ${size === "sm" ? "h-2" : "h-3"} ${track} ${className}`}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-500 ease-out motion-reduce:transition-none ${fill} ${percent > 0 ? "min-w-3" : ""}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

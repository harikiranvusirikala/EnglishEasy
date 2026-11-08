import type { ReactNode } from "react";

/**
 * A round progress meter (today's lesson on Home, a section's score). `label` is its accessible name;
 * `children` sit in the middle (the percent). `tone="onBrand"` draws it in light colours for the teal card.
 */
export function ProgressRing({
  label,
  value,
  max,
  size = 72,
  stroke = 7,
  tone = "brand",
  children,
  className = "",
}: {
  label: string;
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  tone?: "brand" | "onBrand" | "good";
  children?: ReactNode;
  className?: string;
}) {
  const fraction = max > 0 ? Math.min(1, Math.max(0, value / max)) : 0;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const track = tone === "onBrand" ? "rgb(255 255 255 / 0.22)" : "var(--sunken)";
  const color = tone === "onBrand" ? "#fcd34d" : tone === "good" ? "var(--good)" : "var(--brand)";
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true" className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - fraction)}
          className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
          opacity={fraction === 0 ? 0 : 1}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">{children}</span>
    </div>
  );
}

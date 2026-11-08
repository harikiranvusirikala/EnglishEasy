// Small labels: counts, "Soon", "New", "Today". Plain class strings, like button.ts.

const BASE = "inline-flex min-h-7 shrink-0 items-center gap-1 rounded-full px-2.5 text-sm font-semibold leading-none whitespace-nowrap";

const TONES = {
  brand: "bg-brand-soft text-brand-ink",
  accent: "bg-accent-soft text-accent-ink ring-1 ring-inset ring-accent/40",
  good: "bg-good-soft text-good ring-1 ring-inset ring-good-line",
  neutral: "bg-sunken text-ink-2 ring-1 ring-inset ring-line",
  /** On the teal brand card. */
  onBrand: "bg-white/15 text-white ring-1 ring-inset ring-white/25",
};

export type BadgeTone = keyof typeof TONES;

export function badge(tone: BadgeTone = "neutral"): string {
  return `${BASE} ${TONES[tone]}`;
}

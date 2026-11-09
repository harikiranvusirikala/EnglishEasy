// The app's buttons, for <button> and <Link> alike. A plain module: server components import it too.
// Colours are design tokens (globals.css), so they follow Day and Night by themselves. Every size keeps
// the touch target at 52 px or more. Variants and sizes are complete class strings: never add a
// conflicting utility (`px-2`) on top; add a variant instead.

const FOCUS = "outline-none focus-visible:ring-[3px] focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-page";

const BASE = `inline-flex shrink-0 select-none items-center justify-center gap-2.5 text-center font-semibold leading-tight transition-[background-color,box-shadow,transform,color] duration-150 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100 disabled:pointer-events-none disabled:opacity-55 ${FOCUS}`;

const VARIANTS = {
  /** The one main action of a screen. */
  primary: "bg-brand-fill text-on-brand shadow-[0_1px_0_rgb(255_255_255/0.15)_inset,0_6px_16px_-8px_var(--brand)] hover:bg-brand-fill-hover",
  /** A second action: a white button with a border. */
  secondary: "border border-line-strong bg-surface text-ink shadow-card hover:border-brand/50 hover:bg-sunken",
  /** A tinted action that belongs to the content (Listen, Hint, Share). */
  soft: "bg-brand-soft text-brand-ink hover:bg-brand-soft-hover",
  /** Text-only, for the least important actions (Not now). */
  ghost: "text-brand hover:bg-brand-soft",
  /** Celebrations and highlights (marigold). */
  accent: "bg-accent text-on-accent shadow-[0_6px_16px_-8px_var(--accent)] hover:brightness-105",
  /** The main action on the teal brand card (white, the same in Day and Night). */
  onBrand: "bg-white text-[#0b4f49] shadow-[0_10px_24px_-12px_rgb(0_0_0/0.55)] hover:bg-[#f0fdfa]",
  /** Red only for destructive actions (the Sign out confirmation). */
  danger: "bg-danger-fill text-on-danger hover:brightness-110",
};

const SIZES = {
  md: "min-h-13 rounded-2xl px-5 text-base",
  lg: "min-h-14 rounded-2xl px-6 text-lg",
  /** A rounded pill (Listen / Slow). */
  pill: "min-h-12 rounded-full px-4 text-base",
  /** A square holding only an icon (its name comes from aria-label), e.g. the phone header's My lessons. */
  icon: "size-13 rounded-2xl",
};

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export function button(variant: ButtonVariant = "secondary", size: ButtonSize = "md"): string {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]}`;
}

const ICON_BASE = `inline-flex size-13 shrink-0 items-center justify-center rounded-2xl transition-colors duration-150 disabled:opacity-55 ${FOCUS}`;

/** A square button holding only an icon (its name comes from aria-label). */
export const iconButton = `${ICON_BASE} text-ink-2 hover:bg-sunken hover:text-ink`;

/** An icon button with a border, for bars and headers. */
export const outlineIconButton = `${ICON_BASE} border border-line bg-surface text-ink-2 hover:border-line-strong hover:text-ink`;

/** A tinted square icon button (compact Listen / Slow beside an option). */
export const softIconButton = `${ICON_BASE} bg-brand-soft text-brand-ink hover:bg-brand-soft-hover`;

/** Listen and Slow: round tinted icon buttons (their names come from aria-label). `size="lg"` under explanations. */
export function listenButton(size: "md" | "lg" = "md"): string {
  return `inline-flex shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand-ink ring-1 ring-inset ring-brand/15 transition-[background-color,transform] duration-150 hover:bg-brand-soft-hover active:scale-95 motion-reduce:active:scale-100 disabled:opacity-55 ${FOCUS} ${size === "lg" ? "size-14" : "size-13"}`;
}

/**
 * A text-sized Listen / Slow at the end of a line (questions and feedback): a teal icon as big as the text, with an
 * invisible tap area of about 44 px around it (`before:`), so it is still easy to hit.
 */
export const inlineListenButton = `relative inline-flex translate-y-[0.15em] items-center justify-center rounded-md text-brand transition-colors duration-150 before:absolute before:-inset-3 before:content-[''] hover:text-brand-ink disabled:opacity-55 motion-reduce:transition-none ${FOCUS}`;

/** A button that stays chosen (reminder times, feedback faces and topics): teal when selected, set aria-pressed. */
export function choiceButton(selected: boolean): string {
  return `min-h-13 rounded-2xl border px-3 text-base font-medium transition-colors duration-150 motion-reduce:transition-none disabled:opacity-55 ${FOCUS} ${
    selected ? "border-brand bg-brand-fill text-on-brand shadow-card" : "border-line-strong bg-surface text-ink hover:border-brand/50 hover:bg-sunken"
  }`;
}

/** The focus ring every custom control uses, so they all look the same. */
export const focusRing = FOCUS;

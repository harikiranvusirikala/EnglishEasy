// The app's buttons, for <button> and <Link> alike. A plain module: server components import it too.
// Every size keeps the touch target at 52 px or more (`min-h-13`, `min-h-14`). Variants and sizes are
// complete class strings: never add a conflicting utility (`px-2`) on top; add a variant instead.

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl text-center font-semibold transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50 disabled:pointer-events-none disabled:opacity-60 dark:focus-visible:ring-teal-300 dark:focus-visible:ring-offset-stone-950";

const VARIANTS = {
  primary: "bg-teal-700 text-white shadow-sm hover:bg-teal-800 dark:bg-teal-400 dark:text-stone-950 dark:hover:bg-teal-300",
  secondary:
    "border border-stone-300 bg-white text-stone-900 shadow-sm hover:bg-stone-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100 dark:hover:bg-stone-800",
  ghost: "text-teal-800 hover:bg-stone-200/70 dark:text-teal-300 dark:hover:bg-stone-800",
  /** Red only for destructive actions (the Sign out confirmation). */
  danger: "bg-red-700 text-white shadow-sm hover:bg-red-800 dark:bg-red-500 dark:text-stone-950 dark:hover:bg-red-400",
};

const SIZES = {
  md: "min-h-13 px-5 text-base",
  lg: "min-h-14 px-6 text-lg",
};

export type ButtonVariant = keyof typeof VARIANTS;
export type ButtonSize = keyof typeof SIZES;

export function button(variant: ButtonVariant = "secondary", size: ButtonSize = "md"): string {
  return `${BASE} ${VARIANTS[variant]} ${SIZES[size]}`;
}

/** A square button holding only an icon (its name comes from aria-label). */
export const iconButton =
  "inline-flex size-13 shrink-0 items-center justify-center rounded-xl text-stone-700 transition-colors duration-150 outline-none hover:bg-stone-200/70 focus-visible:ring-2 focus-visible:ring-teal-700 disabled:opacity-60 dark:text-stone-300 dark:hover:bg-stone-800 dark:focus-visible:ring-teal-300";

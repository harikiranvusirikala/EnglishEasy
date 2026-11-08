// Cards: surfaces on the warm page. Day cards have a soft shadow, Night cards a border (tokens).
// Plain class strings, like button.ts; give a card a variant rather than combining conflicting utilities.

const SURFACE = "rounded-[1.25rem] border border-line bg-surface shadow-card";

export const card = `${SURFACE} p-5`;

/** A card without padding, for lists whose rows bring their own. */
export const cardFlush = `${SURFACE} overflow-hidden`;

/** A card holding a path (Journey's stages and tracks): less padding on phones, so lesson names get the width. */
export const cardPath = `${SURFACE} p-3 sm:p-5`;

/** A card that is a link or button as a whole. */
export const cardLink = `${SURFACE} block p-5 outline-none transition-[border-color,box-shadow,transform] duration-150 hover:border-brand/40 hover:shadow-raised active:scale-[0.99] focus-visible:ring-[3px] focus-visible:ring-brand/60 motion-reduce:transition-none motion-reduce:active:scale-100`;

/** The brand card: today's lesson on Home, the lesson hero. Teal, with light text. */
export const brandCard =
  "relative overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#0f766e_0%,#115e59_60%,#134e4a_100%)] p-5 text-white shadow-[0_18px_40px_-20px_rgb(15_118_110/0.9)] dark:bg-[linear-gradient(135deg,#134e4a_0%,#123c3a_60%,#0f2f2e_100%)] dark:shadow-none dark:ring-1 dark:ring-white/10";

/** A marigold card for celebrations and real-life missions (Try it today). */
export const accentCard = "rounded-[1.25rem] border border-accent/40 bg-accent-soft p-5 text-ink";

/** A quiet, sunken well inside a card (examples, the Telugu bridge). */
export const well = "rounded-2xl bg-sunken p-4";

export const cardTitle = "font-display text-xl font-semibold text-ink";

/** A sentence under a card's title. */
export const cardText = "text-base text-ink-2";

/** A small heading above a group of cards ("This week", "Practice something else"). */
export const sectionTitle = "font-display text-xl font-semibold text-ink";

import type { ReactNode } from "react";

/** A landing page section: a small coloured eyebrow, the headline, one sentence, then the content. */
export function Section({
  id,
  eyebrow,
  title,
  hint,
  children,
  tone = "page",
  align = "center",
}: {
  id: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  hint?: ReactNode;
  children: ReactNode;
  tone?: "page" | "band";
  align?: "center" | "start";
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 ${tone === "band" ? "border-y border-line bg-surface/60" : ""}`}>
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
        <div className={`flex flex-col gap-3 ${align === "center" ? "mx-auto max-w-2xl items-center text-center" : "max-w-2xl"}`}>
          {eyebrow && <p className="text-sm font-bold tracking-wider text-brand uppercase">{eyebrow}</p>}
          <h2 id={`${id}-title`} className="font-display text-[2rem] leading-tight font-bold text-ink sm:text-[2.6rem]">
            {title}
          </h2>
          {hint && <p className="text-lg text-ink-2">{hint}</p>}
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

/** A ✓ line in a spotlight's list. */
export function Tick({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-lg text-ink">
      <span aria-hidden="true" className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-good-soft text-good ring-1 ring-good-line">
        <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}

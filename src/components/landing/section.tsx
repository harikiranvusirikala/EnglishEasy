import type { ReactNode } from "react";

/** A landing page section: a centred column with a heading. */
export function Section({ id, title, hint, children }: { id: string; title: ReactNode; hint?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-5xl px-5 py-12 sm:py-16">
      <h2 id={`${id}-title`} className="text-3xl font-bold text-ink">
        {title}
      </h2>
      {hint && <p className="mt-2 text-lg text-ink-2">{hint}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}

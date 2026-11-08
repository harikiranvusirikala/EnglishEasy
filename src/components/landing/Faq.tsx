import { strings } from "@/lib/strings";
import { FAQ } from "./content";
import { Section } from "./section";

/** The questions and answers (English), each opening on a tap. Search engines read the answers either way. */
export function Faq() {
  return (
    <Section id="faq" eyebrow={strings.landingNavFaq.en} title={strings.landingFaqTitle.en}>
      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {FAQ.map(({ question, answer }) => (
          <details key={question} className="group rounded-[1.25rem] border border-line bg-surface shadow-card open:shadow-raised">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 text-left outline-none focus-visible:ring-[3px] focus-visible:ring-brand/60 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl font-semibold text-ink">{question}</h3>
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xl text-brand-ink transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="px-5 pb-5 text-lg text-ink-2">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

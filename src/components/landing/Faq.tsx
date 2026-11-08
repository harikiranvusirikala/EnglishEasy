import { Bi } from "@/components/ui/Bi";
import { strings } from "@/lib/strings";
import { FAQ } from "./content";
import { Section } from "./section";

/** The questions and answers (English), each opening on a tap. Search engines read the answers either way. */
export function Faq() {
  return (
    <Section id="faq" title={<Bi label={strings.landingFaqTitle} className="items-start" />}>
      <div className="divide-y divide-line border-y border-line">
        {FAQ.map(({ question, answer }) => (
          <details key={question} className="group py-1">
            <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-brand [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-semibold text-ink">{question}</h3>
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-2 transition-transform group-open:rotate-45 motion-reduce:transition-none"
              >
                +
              </span>
            </summary>
            <p className="pb-4 text-lg text-ink-2">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

import { Bi } from "@/components/ui/Bi";
import { strings } from "@/lib/strings";
import { FAQ } from "./content";
import { Section } from "./section";

/** The questions and answers (English), each opening on a tap. Search engines read the answers either way. */
export function Faq() {
  return (
    <Section id="faq" title={<Bi label={strings.landingFaqTitle} className="items-start" />}>
      <div className="divide-y divide-stone-200 border-y border-stone-200 dark:divide-stone-800 dark:border-stone-800">
        {FAQ.map(({ question, answer }) => (
          <details key={question} className="group py-1">
            <summary className="flex min-h-13 cursor-pointer list-none items-center justify-between gap-4 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-teal-700 dark:focus-visible:ring-teal-300 [&::-webkit-details-marker]:hidden">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">{question}</h3>
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-full border border-stone-300 text-stone-600 transition-transform group-open:rotate-45 motion-reduce:transition-none dark:border-stone-700 dark:text-stone-400"
              >
                +
              </span>
            </summary>
            <p className="pb-4 text-lg text-stone-700 dark:text-stone-300">{answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

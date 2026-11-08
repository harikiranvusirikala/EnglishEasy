import Link from "next/link";
import { Bi } from "@/components/ui/Bi";
import { BiText } from "@/components/ui/BiText";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icons";
import { course, releasedDayRefs } from "@/content/course";
import { writtenDayIds } from "@/content/load";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";
import { Section } from "./section";

function Heading({ label }: { label: BiLabel }) {
  return <Bi label={label} className="items-start" />;
}

const STEPS: { icon: IconName; title: BiLabel; text: BiLabel }[] = [
  { icon: "hint", title: strings.landingHowLearn, text: strings.landingHowLearnText },
  { icon: "check", title: strings.landingHowPractise, text: strings.landingHowPractiseText },
  { icon: "mic", title: strings.landingHowSpeak, text: strings.landingHowSpeakText },
  { icon: "speaker", title: strings.landingHowRolePlay, text: strings.landingHowRolePlayText },
];

export function HowItWorks() {
  return (
    <Section id="how" title={<Heading label={strings.landingHowTitle} />}>
      <ol className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={i} className={`${card} flex flex-col gap-2`}>
            <span className="flex items-center gap-2 text-brand">
              <Icon name={step.icon} />
              <span className="text-sm font-bold">{i + 1}</span>
            </span>
            <h3 className={cardTitle}>
              <Heading label={step.title} />
            </h3>
            <p className={cardText}>
              <BiText text={step.text} />
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** The five stages; Week 1's written lessons link to their overview pages. */
export function Journey() {
  const written = new Set(writtenDayIds());
  const released = releasedDayRefs().filter(({ lane, ref }) => lane === "main" && written.has(ref.id));
  return (
    <Section id="journey" title={<Heading label={strings.landingJourneyTitle} />} hint={<BiText text={strings.landingJourneyHint} />}>
      <ol className="flex flex-col gap-4">
        {course.stages.map((stage) => (
          <li key={stage.n} className={`${card} flex flex-col gap-2`}>
            <p className="text-sm font-semibold text-brand">
              <BiText text={fill(strings.landingStageLabel, { n: stage.n })} />
            </p>
            <h3 className={cardTitle}>
              <BiText text={stage.title} />
            </h3>
            <p className={cardText}>
              <BiText text={stage.canDo} />
            </p>
            {stage.n === 1 && (
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-base font-semibold text-ink">
                  <BiText text={strings.landingWeekOne} />
                </p>
                <ul className="flex flex-col gap-2">
                  {released.map(({ ref, week }) => (
                    <li key={ref.id}>
                      <Link
                        href={`/lessons/${encodeURIComponent(ref.id)}`}
                        className="flex min-h-13 items-center rounded-xl border border-line px-4 text-base font-semibold text-brand outline-none hover:bg-sunken focus-visible:ring-2 focus-visible:ring-brand"
                      >
                        <span>
                          {fill(strings.homeDayChip, { n: (week.n - 1) * 7 + week.days.indexOf(ref) + 1 }).en}: {ref.title.en}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className={cardText}>
                  <BiText text={strings.landingComingSoon} />
                </p>
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}

const REASONS: { title: BiLabel; text: BiLabel }[] = [
  { title: strings.landingWhyNoTyping, text: strings.landingWhyNoTypingText },
  { title: strings.landingWhyTelugu, text: strings.landingWhyTeluguText },
  { title: strings.landingWhyHear, text: strings.landingWhyHearText },
  { title: strings.landingWhyBig, text: strings.landingWhyBigText },
  { title: strings.landingWhyOffline, text: strings.landingWhyOfflineText },
];

export function WhyItWorks() {
  return (
    <Section id="why" title={<Heading label={strings.landingWhyTitle} />}>
      <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {REASONS.map((reason, i) => (
          <li key={i} className={`${card} flex flex-col gap-1`}>
            <h3 className={cardTitle}>
              <Heading label={reason.title} />
            </h3>
            <p className={cardText}>
              <BiText text={reason.text} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { badge } from "@/components/ui/badge";
import { focusRing } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon, type IconName } from "@/components/ui/icons";
import { course, releasedDayRefs } from "@/content/course";
import { writtenDayIds } from "@/content/load";
import { fill, strings, type Bi as BiLabel } from "@/lib/strings";
import { PhoneFrame } from "./PhoneFrame";
import { Section, Tick } from "./section";
import { StartButton } from "./StartButton";
import complete from "./images/complete.webp";
import explain from "./images/explain.webp";
import roleplay from "./images/roleplay.webp";
import tiles from "./images/tiles.webp";

// The landing page's sections (static; English, with the Telugu headline in the hero).

const STEPS: { icon: IconName; title: BiLabel; text: BiLabel }[] = [
  { icon: "book", title: strings.landingHowLearn, text: strings.landingHowLearnText },
  { icon: "tiles", title: strings.landingHowPractise, text: strings.landingHowPractiseText },
  { icon: "mic", title: strings.landingHowSpeak, text: strings.landingHowSpeakText },
  { icon: "chat", title: strings.landingHowRolePlay, text: strings.landingHowRolePlayText },
];

export function HowItWorks() {
  return (
    <Section id="how" eyebrow={strings.landingHowTitle.en} title={strings.landingHowHeading.en} hint={strings.landingHowHint.en} tone="band">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <li key={i} className={`${card} flex flex-col gap-3`}>
            {/* Icon, title and step number on one row (shorter cards on phones), the sentence under them. */}
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                <Icon name={step.icon} />
              </span>
              <h3 className="font-display min-w-0 flex-1 text-xl font-semibold text-ink">{step.title.en}</h3>
              <span className="font-display flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-base font-bold text-page">{i + 1}</span>
            </span>
            <p className="text-base text-ink-2">{step.text.en}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/** One feature told with a real screen: eyebrow, headline, a sentence, three ✓ lines; the screen alternates sides. */
function Spotlight({ id, eyebrow, title, text, points, shot, alt, flip = false }: { id: string; eyebrow: BiLabel; title: BiLabel; text: BiLabel; points: BiLabel[]; shot: StaticImageData; alt: BiLabel; flip?: boolean }) {
  return (
    <div id={id} className="grid scroll-mt-24 grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={`flex flex-col gap-4 ${flip ? "md:order-2" : ""}`}>
        <p className="text-sm font-bold tracking-wider text-brand uppercase">{eyebrow.en}</p>
        <h3 className="font-display text-[1.9rem] leading-tight font-bold text-ink sm:text-4xl">{title.en}</h3>
        <p className="text-lg text-ink-2">{text.en}</p>
        <ul className="mt-2 flex flex-col gap-3">
          {points.map((p) => (
            <Tick key={p.en}>{p.en}</Tick>
          ))}
        </ul>
      </div>
      <div className={`relative flex justify-center ${flip ? "md:order-1" : ""}`}>
        <div aria-hidden="true" className="absolute inset-x-8 top-10 bottom-0 -z-10 rounded-[3rem] bg-[linear-gradient(160deg,var(--brand-soft),var(--accent-soft))]" />
        <PhoneFrame src={shot} alt={alt.en} className="w-64 sm:w-72" />
      </div>
    </div>
  );
}

export function Spotlights() {
  return (
    <Section id="features" eyebrow={strings.landingNavFeatures.en} title={strings.landingSpotsHeading.en}>
      <div className="flex flex-col gap-24">
        <Spotlight
          id="telugu-help"
          eyebrow={strings.landingSpotTeluguEyebrow}
          title={strings.landingSpotTeluguTitle}
          text={strings.landingSpotTeluguText}
          points={[strings.landingSpotTelugu1, strings.landingSpotTelugu2, strings.landingSpotTelugu3]}
          shot={explain}
          alt={strings.landingShotExplain}
        />
        <Spotlight
          id="tap"
          eyebrow={strings.landingSpotTapEyebrow}
          title={strings.landingSpotTapTitle}
          text={strings.landingSpotTapText}
          points={[strings.landingSpotTap1, strings.landingSpotTap2, strings.landingSpotTap3]}
          shot={tiles}
          alt={strings.landingShotTiles}
          flip
        />
        <Spotlight
          id="speak"
          eyebrow={strings.landingSpotSpeakEyebrow}
          title={strings.landingSpotSpeakTitle}
          text={strings.landingSpotSpeakText}
          points={[strings.landingSpotSpeak1, strings.landingSpotSpeak2, strings.landingSpotSpeak3]}
          shot={roleplay}
          alt={strings.landingShotRoleplay}
        />
        <Spotlight
          id="progress"
          eyebrow={strings.landingSpotProgressEyebrow}
          title={strings.landingSpotProgressTitle}
          text={strings.landingSpotProgressText}
          points={[strings.landingSpotProgress1, strings.landingSpotProgress2, strings.landingSpotProgress3]}
          shot={complete}
          alt={strings.landingShotComplete}
          flip
        />
      </div>
    </Section>
  );
}

/** The five stages as a path; Week 1's lessons link to their overview pages, with a count of every released lesson (all are in the sitemap). */
export function Journey() {
  const written = new Set(writtenDayIds());
  const released = releasedDayRefs().filter(({ lane, ref }) => lane === "main" && written.has(ref.id));
  const weekOne = released.filter(({ week }) => week.n === 1);
  return (
    <Section id="journey" eyebrow={strings.landingJourneyTitle.en} title={strings.landingJourneyHeading.en} hint={strings.landingJourneyHint.en} tone="band">
      <ol className="relative grid gap-4 lg:grid-cols-5">
        {course.stages.map((stage) => (
          <li key={stage.n} className={`${card} relative flex flex-col gap-3 ${stage.n === 1 ? "ring-2 ring-brand lg:col-span-1" : ""}`}>
            <span className="flex items-center justify-between">
              <span
                className={`font-display flex size-11 items-center justify-center rounded-2xl text-xl font-bold ${stage.n === 1 ? "bg-[linear-gradient(135deg,#14b8a6,#0f766e)] text-white" : "bg-sunken text-ink-3 ring-1 ring-line"}`}
              >
                {stage.n}
              </span>
              <span className={badge(stage.n === 1 ? "good" : "neutral")}>{fill(strings.journeyWeeks, { n: stage.weeks.length }).en}</span>
            </span>
            <p className="text-sm font-semibold text-brand">{fill(strings.landingStageLabel, { n: stage.n }).en}</p>
            <h3 className="font-display text-xl leading-snug font-semibold text-ink">{stage.title.en}</h3>
            <p className="text-base text-ink-2">{stage.canDo.en}</p>
          </li>
        ))}
      </ol>
      <div className={`${card} mt-6 flex flex-col gap-4`}>
        <p className="font-display text-xl font-semibold text-ink">{strings.landingWeekOne.en}</p>
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {weekOne.map(({ ref, week }) => (
            <li key={ref.id}>
              <Link href={`/lessons/${encodeURIComponent(ref.id)}`} className={`flex min-h-13 items-center gap-3 rounded-2xl border border-line px-4 text-base font-semibold text-ink transition-colors hover:border-brand/50 hover:bg-sunken ${focusRing}`}>
                <span className="text-brand">
                  {fill(strings.homeDayChip, { n: (week.n - 1) * 7 + week.days.indexOf(ref) + 1 }).en}: {ref.title.en}
                </span>
                <Icon name="chevron" className="ml-auto size-5 text-ink-3" />
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-base text-ink-2">{fill(strings.landingLessonsReady, { n: released.length }).en}</p>
      </div>
    </Section>
  );
}

const REASONS: { icon: IconName; title: BiLabel; text: BiLabel }[] = [
  { icon: "tiles", title: strings.landingWhyNoTyping, text: strings.landingWhyNoTypingText },
  { icon: "globe", title: strings.landingWhyTelugu, text: strings.landingWhyTeluguText },
  { icon: "speaker", title: strings.landingWhyHear, text: strings.landingWhyHearText },
  { icon: "textSize", title: strings.landingWhyBig, text: strings.landingWhyBigText },
  { icon: "wifiOff", title: strings.landingWhyOffline, text: strings.landingWhyOfflineText },
  { icon: "heart", title: strings.landingWhyFree, text: strings.landingWhyFreeText },
];

export function WhyItWorks() {
  return (
    <Section id="why" eyebrow={strings.landingFeaturesEyebrow.en} title={strings.landingFeaturesHeading.en}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((reason) => (
          <li key={reason.title.en} className={`${card} flex flex-col gap-3`}>
            <span className="flex items-center gap-3">
              <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-ink">
                <Icon name={reason.icon} />
              </span>
              <h3 className="font-display min-w-0 flex-1 text-xl font-semibold text-ink">{reason.title.en}</h3>
            </span>
            <p className="text-base text-ink-2">{reason.text.en}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

const PRIVACY: BiLabel[] = [strings.landingPrivacy1, strings.landingPrivacy2, strings.landingPrivacy3, strings.landingPrivacy4];

export function Privacy() {
  return (
    <Section id="privacy-points" eyebrow={strings.landingPrivacyEyebrow.en} title={strings.landingPrivacyHeading.en} tone="band">
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {PRIVACY.map((p) => (
          <div key={p.en} className={`${card} flex items-start gap-4`}>
            <span aria-hidden="true" className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-good-soft text-good">
              <Icon name="shield" />
            </span>
            <p className="pt-1.5 text-lg text-ink">{p.en}</p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center">
        <Link href="/privacy" className={`inline-flex min-h-12 items-center gap-2 rounded-full px-4 text-base font-semibold text-brand hover:bg-brand-soft ${focusRing}`}>
          {strings.landingPrivacyMore.en}
          <Icon name="arrowRight" className="size-5" />
        </Link>
      </p>
    </Section>
  );
}

/** The last call to action: a teal band with Start. */
export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="px-5 py-16 sm:py-24">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0f766e_0%,#115e59_55%,#134e4a_100%)] px-6 py-14 text-center text-white shadow-[0_30px_60px_-30px_rgb(15_118_110/0.8)] dark:ring-1 dark:ring-white/10">
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-16 size-80 rounded-full bg-[radial-gradient(closest-side,rgb(251_191_36/0.35),transparent)]" />
        <h2 id="cta-title" className="font-display relative text-[2rem] leading-tight font-bold sm:text-5xl">
          {strings.landingCtaTitle.en}
        </h2>
        <p className="relative text-lg text-white/85">{strings.landingCtaText.en}</p>
        <div className="relative">
          <StartButton tone="onBrand" />
        </div>
      </div>
    </section>
  );
}

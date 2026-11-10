import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PatternChips } from "@/components/learn/PatternChips";
import { OverviewProgress } from "@/components/learn/OverviewProgress";
import { ListenInline } from "@/components/player/Narrate";
import { badge } from "@/components/ui/badge";
import { cardFlush } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { PublicHeader } from "@/components/landing/PublicHeader";
import { findDay, releasedDayRefs, type Week } from "@/content/course";
import { isWritten, loadDay, writtenDayIds } from "@/content/load";
import type {
  Activity,
  Bi as ContentBi,
  ConversationDay,
  CoreSentence,
  Day,
} from "@/content/types";
import { fill, strings } from "@/lib/strings";
import { siteUrl } from "@/server/site";

// One static page per released, written day (BUILD_PLAN Step 10). The Learn content is in the page in both languages so search
// engines can find "past tense explained in Telugu"; the Learn in setting shows one of them (globals.css). A Conversation Day
// shows its conversation, role plays and situations; a review day links to the days of its week.

export const dynamicParams = false;

export function generateStaticParams() {
  const released = new Set(releasedDayRefs().map((d) => d.ref.id));
  return writtenDayIds()
    .filter((id) => released.has(id))
    .map((id) => ({ id }));
}

async function dayFor(id: string): Promise<Day> {
  if (!isWritten(id) || !findDay(id)) notFound();
  return loadDay(id);
}

/** A review day has no summary of its own: "Practice everything from Week N again: <the week's title>." */
const reviewSummary = (week: Week): ContentBi => fill(strings.overviewReviewSummary, { n: week.n, title: week.title });

/** The line under the title and in search results. */
function summaryOf(day: Day, week: Week): ContentBi {
  return day.kind === "review" ? reviewSummary(week) : day.summary;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const id = (await params).id;
  const day = await dayFor(id);
  const title = day.kind === "lesson" ? day.seo.title : `${day.title.en} | ${strings.appName.en}`;
  const description = day.kind === "lesson" ? day.seo.description : summaryOf(day, findDay(id)!.week).en;
  // One address per lesson (canonical), and the same title and description in link previews.
  const path = `/lessons/${encodeURIComponent(id)}`;
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: "article" } };
}

/** Both languages in the page; CSS hides the one that is not selected. */
function Both({ text }: { text: ContentBi }) {
  return (
    <>
      <span lang="te" data-lang="te">
        {text.te}
      </span>
      <span data-lang="en">{text.en}</span>
    </>
  );
}

function Sentence({ sentence }: { sentence: CoreSentence }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3.5 text-xl">
      <ListenInline read={[sentence.en]} place="start" />
      <div className="min-w-0">
        <p className="font-semibold text-ink">{sentence.en}</p>
        <p lang="te" data-lang="te" className="text-base text-ink-2">
          {sentence.te}
        </p>
      </div>
    </li>
  );
}

function LearnActivity({ activity }: { activity: Activity }) {
  switch (activity.type) {
    case "explain":
      return (
        <section className="flex flex-col gap-4">
          <h3 className="font-display text-2xl leading-snug font-semibold text-ink">
            <Both text={activity.heading} />
          </h3>
          <p className="text-lg leading-relaxed text-ink">
            <Both text={activity.body} />
          </p>
          {activity.examples.length > 0 && (
            <ul className={`${cardFlush} divide-y divide-line`}>
              {activity.examples.map((sentence, i) => (
                <Sentence key={i} sentence={sentence} />
              ))}
            </ul>
          )}
        </section>
      );
    case "whenToUse":
      return (
        <section className="flex flex-col gap-4">
          <h3 className="font-display text-2xl leading-snug font-semibold text-ink">
            <Both text={activity.heading} />
          </h3>
          <ul className="flex flex-col gap-4">
            {activity.items.map((item, i) => (
              <li key={i} className={`${cardFlush} flex flex-col`}>
                <div className="flex flex-col gap-2 p-5">
                  <p className="font-display self-start rounded-xl bg-brand-soft px-3 py-1 text-xl font-bold text-brand-ink">{item.form}</p>
                  <p className="text-lg text-ink">
                    <Both text={item.useFor} />
                  </p>
                </div>
                <ul className="border-t border-line bg-sunken/50">
                  <Sentence sentence={item.example} />
                </ul>
              </li>
            ))}
          </ul>
        </section>
      );
    case "dontSay":
      return (
        <section className="grid gap-3 sm:grid-cols-2">
          <p className="flex items-baseline gap-2.5 rounded-[1.25rem] border-2 border-almost-line bg-almost-soft px-4 py-3.5 text-xl text-almost">
            <span aria-hidden="true" className="font-semibold">✗</span>
            <span className="sr-only">{strings.dontSay.en}: </span>
            <span className="line-through decoration-2">{activity.wrong}</span>
          </p>
          <p className="flex items-baseline gap-2.5 rounded-[1.25rem] border-2 border-good-line bg-good-soft px-4 py-3.5 text-xl font-semibold text-good">
            <span aria-hidden="true">✓</span>
            <span className="sr-only">{strings.say.en}: </span>
            <span>{activity.right}</span>
          </p>
          <p className="text-lg text-ink-2 sm:col-span-2">
            <Both text={activity.why} />
          </p>
        </section>
      );
    default:
      return null;
  }
}

const SECTION_TITLE = "text-sm font-bold tracking-wider text-brand uppercase";
/** The conversation is heard before it is read in the app, so the page shows its first lines and the rest behind a tap. */
const DIALOGUE_PREVIEW = 3;

type DialogueLine = Extract<Activity, { type: "dialogue" }>["lines"][number];

function Line({ line }: { line: DialogueLine }) {
  return (
    <li className="flex items-start gap-3 px-4 py-3 text-lg">
      <ListenInline read={[line.en]} voice={line.voice} place="start" />
      <div className="min-w-0">
        <p>
          <span className="font-semibold text-ink-2">{line.speaker.en}:</span> <span className="text-ink">{line.en}</span>
        </p>
        <p lang="te" data-lang="te" className="text-base text-ink-2">
          {line.te}
        </p>
      </div>
    </li>
  );
}

function ConversationBody({ day }: { day: ConversationDay }) {
  const dialogue = day.dialogue.type === "dialogue" ? day.dialogue : null;
  const people = dialogue ? [...new Map(dialogue.lines.map((l) => [l.speaker.en, l.speaker])).values()] : [];
  const roleplays = day.roleplays.filter((a) => a.type === "roleplay");
  const situations = day.situations.flatMap((a) => (a.type === "situation" ? [a] : []));
  return (
    <article className="flex flex-col gap-10">
      {dialogue && (
        <section className="flex flex-col gap-4">
          <h2 className={SECTION_TITLE}>{strings.overviewListen.en}</h2>
          <div className={`${cardFlush} flex flex-col`}>
            <div className="flex flex-col gap-1 px-4 pt-4 pb-2">
              <h3 className="font-display text-2xl leading-snug font-semibold text-ink">
                <Both text={dialogue.title} />
              </h3>
              <p className="text-base text-ink-3">
                <Both
                  text={fill(strings.overviewDialogueMeta, {
                    people: { en: people.map((p) => p.en).join(" and "), te: people.map((p) => p.te).join(", ") },
                    lines: dialogue.lines.length,
                    questions: dialogue.questions.length,
                  })}
                />
              </p>
            </div>
            <ul>
              {dialogue.lines.slice(0, DIALOGUE_PREVIEW).map((line, i) => (
                <Line key={i} line={line} />
              ))}
            </ul>
            {dialogue.lines.length > DIALOGUE_PREVIEW && (
              <details className="group">
                <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 px-4 pb-3 text-lg font-semibold text-brand [&::-webkit-details-marker]:hidden">
                  <Icon name="chevron" className="size-5 transition-transform group-open:rotate-90 motion-reduce:transition-none" />
                  {strings.overviewReadAll.en}
                </summary>
                <ul>
                  {dialogue.lines.slice(DIALOGUE_PREVIEW).map((line, i) => (
                    <Line key={i} line={line} />
                  ))}
                </ul>
              </details>
            )}
          </div>
        </section>
      )}

      {roleplays.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className={SECTION_TITLE}>{strings.overviewRolePlays.en}</h2>
          <ul className="flex flex-col gap-3">
            {roleplays.map((r) => (
              <li key={r.id} className={`${cardFlush} flex flex-col gap-1.5 p-5`}>
                <h3 className="font-display text-xl leading-snug font-semibold text-ink">
                  <Both text={r.title} />
                </h3>
                <p className="text-lg text-ink-2">
                  <Both text={r.scene} />
                </p>
                <p className="text-base text-ink-3">
                  <Both text={fill(strings.overviewWith, { partner: r.partner })} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {situations.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className={SECTION_TITLE}>{strings.overviewSituations.en}</h2>
          <ol className={`${cardFlush} flex list-decimal flex-col gap-3 py-5 pr-5 pl-11 text-lg text-ink marker:font-semibold marker:text-ink-3`}>
            {situations.map((a) => (
              <li key={a.id}>
                <Both text={a.situation} />
              </li>
            ))}
          </ol>
        </section>
      )}
    </article>
  );
}

/** A review day: the other days of its week, each a link to its page with its first key sentence. */
async function ReviewBody({ id, week }: { id: string; week: Week }) {
  const days = await Promise.all(
    week.days
      .filter((ref) => ref.id !== id && isWritten(ref.id))
      .map(async (ref) => ({ id: ref.id, day: await loadDay(ref.id), number: findDay(ref.id)!.number })),
  );
  return (
    <article className="flex flex-col gap-4">
      <h2 className={SECTION_TITLE}>{strings.overviewCovers.en}</h2>
      <ul className="flex flex-col gap-3">
        {days.map(({ id: dayId, day, number }) => (
          <li key={dayId}>
            <Link
              href={`/lessons/${encodeURIComponent(dayId)}`}
              className={`${cardFlush} flex items-center gap-4 p-4 transition-colors hover:border-brand/50 motion-reduce:transition-none`}
            >
              <span className="w-16 shrink-0 text-base font-bold text-brand">{fill(strings.overviewDayLabel, { n: number }).en}</span>
              <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                <span className="text-lg font-semibold text-ink">{day.title.en}</span>
                <span className="text-base text-ink-2">
                  {day.kind === "lesson" ? day.core[day.key[0] ?? 0].en : day.kind === "conversation" ? strings.overviewConversationDay.en : null}
                </span>
              </span>
              <Icon name="chevron" className="size-5 shrink-0 text-ink-3" />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const day = await dayFor(id);
  const place = findDay(id)!;
  const site = siteUrl(process.env);
  const url = `${site}/lessons/${encodeURIComponent(id)}`;
  // The lesson, and its breadcrumb (EnglishEasy › Day N: title), which Google can show above the result.
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        name: day.kind === "lesson" ? day.seo.title : day.title.en,
        description: day.kind === "lesson" ? day.seo.description : summaryOf(day, place.week).en,
        url,
        inLanguage: ["en", "te"],
        isAccessibleForFree: true,
        learningResourceType: "Lesson",
        isPartOf: { "@type": "Course", name: "English for Telugu speakers", url: `${site}/` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: strings.appName.en, item: `${site}/` },
          { "@type": "ListItem", position: 2, name: `${fill(strings.overviewDayLabel, { n: place.number }).en}: ${day.title.en}`, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <PublicHeader journeyDay={id} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
        <section aria-labelledby="lesson-title" className="relative overflow-hidden border-b border-line">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 -left-24 size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(20_184_166/0.18),transparent)]" />
            <div className="absolute -top-24 right-[-8rem] size-[28rem] rounded-full bg-[radial-gradient(closest-side,rgb(251_191_36/0.18),transparent)]" />
          </div>
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 pt-6 pb-8 sm:pt-10 sm:pb-12">
            <p className="flex flex-wrap items-center gap-2">
              <span className={badge("brand")}>{fill(strings.overviewDayLabel, { n: place.number }).en}</span>
              {day.kind === "lesson" && <span className={badge("neutral")}>{day.subtitle}</span>}
              {day.kind === "conversation" && <span className={badge("neutral")}>{strings.overviewConversationDay.en}</span>}
              {day.kind === "review" && <span className={badge("neutral")}>{fill(strings.overviewWeekReview, { n: place.week.n }).en}</span>}
            </p>
            <h1 id="lesson-title" className="font-display text-[2.5rem] leading-tight font-bold text-ink sm:text-5xl">
              {day.title.en}
            </h1>
            {/* The Telugu title: in the page for search engines, shown in Telugu mode only (globals.css). */}
            <p lang="te" data-lang="te" className="font-display -mt-2 text-2xl font-semibold text-ink-2">
              {day.title.te}
            </p>
            <p className="max-w-2xl text-xl text-ink-2">
              <Both text={summaryOf(day, place.week)} />
            </p>
            {day.kind === "lesson" && (
              <div className="mt-2">
                <PatternChips chips={day.pattern} size="lg" />
              </div>
            )}
          </div>
        </section>

        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-6 sm:gap-10 sm:py-10 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div className="order-2 flex flex-col gap-10 lg:order-1">
            {day.kind === "lesson" && (
              <article className="flex flex-col gap-10">
                <h2 className="text-sm font-bold tracking-wider text-brand uppercase">{strings.overviewLearn.en}</h2>
                {day.learn.map((activity) => (
                  <LearnActivity key={activity.id} activity={activity} />
                ))}
              </article>
            )}
            {day.kind === "conversation" && <ConversationBody day={day} />}
            {day.kind === "review" && <ReviewBody id={id} week={place.week} />}
          </div>
          <aside className="order-1 lg:sticky lg:top-24 lg:order-2">
            <OverviewProgress id={id} title={day.title} />
          </aside>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}

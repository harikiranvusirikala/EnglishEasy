import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PatternChips } from "@/components/learn/PatternChips";
import { OverviewProgress } from "@/components/learn/OverviewProgress";
import { Narrate } from "@/components/player/Narrate";
import { Bi } from "@/components/ui/Bi";
import { button } from "@/components/ui/button";
import { card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { findDay, releasedDayRefs } from "@/content/course";
import { isWritten, loadDay, writtenDayIds } from "@/content/load";
import type {
  Activity,
  Bi as ContentBi,
  CoreSentence,
  Day,
} from "@/content/types";
import { fill, strings } from "@/lib/strings";

// One static page per released, written day (BUILD_PLAN Step 10). The Learn content is in the page in both languages so search
// engines can find "past tense explained in Telugu"; the Learn in setting shows one of them (globals.css).

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const day = await dayFor((await params).id);
  if (day.kind === "lesson")
    return { title: day.seo.title, description: day.seo.description };
  return {
    title: `${day.title.en} | ${strings.appName.en}`,
    description: day.kind === "conversation" ? day.summary.en : undefined,
  };
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
    <li className={`${card} flex items-center justify-between gap-2`}>
      <div>
        <p className="text-xl font-semibold">{sentence.en}</p>
        <p lang="te" className="text-base text-stone-600 dark:text-stone-400">
          {sentence.te}
        </p>
      </div>
      <Narrate text={sentence.en} />
    </li>
  );
}

function LearnActivity({ activity }: { activity: Activity }) {
  switch (activity.type) {
    case "explain":
      return (
        <section className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">
            <Both text={activity.heading} />
          </h3>
          <p className="text-lg">
            <Both text={activity.body} />
          </p>
          <ul className="flex flex-col gap-2">
            {activity.examples.map((sentence, i) => (
              <Sentence key={i} sentence={sentence} />
            ))}
          </ul>
        </section>
      );
    case "whenToUse":
      return (
        <section className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">
            <Both text={activity.heading} />
          </h3>
          <ul className="flex flex-col gap-2">
            {activity.items.map((item, i) => (
              <li key={i} className="flex flex-col gap-2">
                <p className="text-lg font-semibold">
                  {item.form} — <Both text={item.useFor} />
                </p>
                <ul>
                  <Sentence sentence={item.example} />
                </ul>
              </li>
            ))}
          </ul>
        </section>
      );
    case "dontSay":
      return (
        <section className={`${card} flex flex-col gap-1`}>
          <p className="text-lg">
            <span className="font-semibold">
              <Both text={strings.dontSay} />:
            </span>{" "}
            <s>{activity.wrong}</s>
          </p>
          <p className="text-lg">
            <span className="font-semibold">
              <Both text={strings.say} />:
            </span>{" "}
            {activity.right}
          </p>
          <p className="text-base text-stone-600 dark:text-stone-400">
            <Both text={activity.why} />
          </p>
        </section>
      );
    default:
      return null;
  }
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const day = await dayFor(id);
  const place = findDay(id)!;
  return (
    <main className="mx-auto flex max-w-xl flex-col gap-6 p-4 pb-16">
      <nav>
        <Link href="/learn" className={button("ghost")}>
          <Icon name="home" />
          <Bi label={strings.overviewHome} />
        </Link>
      </nav>

      <header className="flex flex-col gap-3">
        <p className="text-base font-semibold text-teal-800 dark:text-teal-300">
          <Both text={fill(strings.overviewDayLabel, { n: place.number })} />
        </p>
        <h1 className="text-3xl font-bold">
          <Both text={day.title} />
        </h1>
        {day.kind === "lesson" && (
          <p className="text-xl text-stone-700 dark:text-stone-300">
            {day.subtitle}
          </p>
        )}
        {day.kind !== "review" && (
          <p className="text-lg">
            <Both text={day.summary} />
          </p>
        )}
        {day.kind === "lesson" && <PatternChips chips={day.pattern} />}
      </header>

      <OverviewProgress id={id} title={day.title} />

      {day.kind === "lesson" && (
        <article className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">
            <Bi label={strings.overviewLearn} className="items-start" />
          </h2>
          {day.learn.map((activity) => (
            <LearnActivity key={activity.id} activity={activity} />
          ))}
        </article>
      )}
    </main>
  );
}

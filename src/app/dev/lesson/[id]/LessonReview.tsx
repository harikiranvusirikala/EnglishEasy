import { Narrate } from "@/components/player/Narrate";
import { BiText } from "@/components/ui/BiText";
import { card } from "@/components/ui/card";
import type { Activity, Bi, PlayableDay } from "@/content/types";
import { strings } from "@/lib/strings";

/** Both language versions of an explanation, side by side. */
function Both({ text }: { text: Bi }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <p>
        <BiText text={text} mode="te" />
      </p>
      <p>
        <BiText text={text} mode="en" />
      </p>
    </div>
  );
}

const Options = ({ options, answer }: { options: string[]; answer: number }) => (
  <ol className="list-decimal pl-6">
    {options.map((option, i) => (
      <li key={i} data-answer={i === answer ? "" : undefined} className={i === answer ? "font-bold text-good" : ""}>
        {option}
        {i === answer && " ✓"}
      </li>
    ))}
  </ol>
);

function Body({ activity }: { activity: Activity }) {
  switch (activity.type) {
    case "explain":
      return (
        <>
          <Both text={activity.heading} />
          <Both text={activity.body} />
          {activity.bridge && (
            <p>
              {activity.bridge.te.join(" ")} → {activity.bridge.en.map((c) => `${c.text} [${c.role}]`).join(" ")}
            </p>
          )}
          <ul>
            {activity.examples.map((e, i) => (
              <li key={i}>
                {e.en} <span lang="te">{e.te}</span> <Narrate text={e.en} variant="compact" />
              </li>
            ))}
          </ul>
        </>
      );
    case "whenToUse":
      return (
        <>
          <Both text={activity.heading} />
          {activity.items.map((item, i) => (
            <div key={i}>
              <b>{item.form}</b>
              <Both text={item.useFor} />
              <p>
                {item.example.en} <Narrate text={item.example.en} variant="compact" />
              </p>
            </div>
          ))}
        </>
      );
    case "dontSay":
      return (
        <>
          <p>✗ {activity.wrong}</p>
          <p className="font-bold text-good">✓ {activity.right}</p>
          <Both text={activity.why} />
        </>
      );
    case "choose":
      return (
        <>
          <Both text={activity.prompt} />
          <Options options={activity.options} answer={activity.answer} />
          {activity.why && <Both text={activity.why} />}
        </>
      );
    case "fillBlank":
      return (
        <>
          <p>
            {activity.sentence} {activity.te && <span lang="te">{activity.te}</span>}
          </p>
          <Options options={activity.options} answer={activity.answer} />
          {activity.why && <Both text={activity.why} />}
        </>
      );
    case "findMistake":
      return (
        <>
          <p>
            {activity.sentence.split(" ").map((word, i) => (
              <span key={i} className={i === activity.wrongIndex ? "font-bold text-danger underline" : ""}>
                {word}{" "}
              </span>
            ))}
          </p>
          <p className="font-bold text-good">✓ {activity.fix}</p>
          <Both text={activity.why} />
        </>
      );
    default:
      return <pre className="overflow-x-auto text-sm">{JSON.stringify(activity, null, 1)}</pre>; // types a later step builds
  }
}

export function LessonReview({ day }: { day: PlayableDay }) {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-6 p-4">
      <h1 className="text-3xl font-bold">{day.title.en}</h1>
      <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-ink-2">
        <p>{strings.devTelugu.en}</p>
        <p>{strings.devEnglish.en}</p>
      </div>
      {day.sections.map((section, s) => (
        <section key={s} className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold capitalize">{section.kind}</h2>
          {section.activities.map((activity) => (
            <article key={activity.id} className={`${card} flex flex-col gap-2`}>
              <p className="text-sm text-ink-2">
                {activity.id} · {activity.type}
              </p>
              <Body activity={activity} />
            </article>
          ))}
        </section>
      ))}
    </main>
  );
}

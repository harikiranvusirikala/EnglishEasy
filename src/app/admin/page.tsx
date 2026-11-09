import { badge } from "@/components/ui/badge";
import { cardFlush } from "@/components/ui/card";
import { course } from "@/content/course";
import { getDatabase } from "@/server/db";
import type { FeedbackRating } from "@/server/feedback-schema";
import { requireSiteAdmin } from "@/server/permissions";
import { loadSiteStats } from "@/server/site-stats";
import { Bars, FACE, Figure, PageTitle, Panel, TOPIC, Tile, adminMain, shortDate } from "./parts";

/** How the site is used (owner request, 2026-11-09): counts only, never names or emails. */
export default async function AdminStatsPage() {
  await requireSiteAdmin();
  const { db } = await getDatabase();
  const stats = await loadSiteStats(db);
  const { learners, feedback, reminders, health } = stats;

  return (
    <main className={adminMain}>
      <PageTitle title="Site stats" text="Signed-in learners only: guests keep their progress on their phones. Counts only, no names or emails." />

      <section aria-label="Totals" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Tile label="Signed-in learners" value={learners.total} />
        <Tile label="Active, last 7 days" value={learners.active.week} />
        <Tile label="Feedback waiting" value={feedback.waiting} note={`${feedback.total} so far`} />
        <Tile label="Open problem reports" value={health.openReports} />
        <Tile label="App errors, 7 days" value={health.errorsThisWeek} />
        <Tile label="Reminder subscribers" value={reminders.total} />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Active signed-in learners" text="Progress saved in the period.">
          <dl className="grid grid-cols-3 gap-3">
            <Figure label="Last day" value={learners.active.day} />
            <Figure label="Last 7 days" value={learners.active.week} />
            <Figure label="Last 30 days" value={learners.active.month} />
          </dl>
        </Panel>
        <Panel title="New signed-in learners per week" text="The last 12 weeks, Monday to Sunday (UTC).">
          <Bars label="New learners per week" bars={learners.newPerWeek.map((w) => ({ key: w.week, label: `Week of ${shortDate(new Date(w.week))}`, value: w.count }))} />
        </Panel>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Feedback so far" text="Faces and topics from Settings → Send feedback, all messages.">
          <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(Object.keys(FACE) as FeedbackRating[]).map((r) => (
              <Figure key={r} label={FACE[r]} value={feedback.ratings[r]} />
            ))}
          </dl>
          {feedback.topics.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {feedback.topics.map((t) => (
                <li key={t.topic} className={badge("neutral")}>
                  {TOPIC[t.topic]} · {t.count}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-base text-ink-3">No topics ticked yet.</p>
          )}
        </Panel>
        <Panel title="Reminders by hour" text="The hour each subscriber chose, in their own time zone.">
          {reminders.byHour.length > 0 ? (
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {reminders.byHour.map((h) => (
                <Figure key={h.hour} label={`${String(h.hour).padStart(2, "0")}:00`} value={h.count} />
              ))}
            </dl>
          ) : (
            <p className="text-base text-ink-3">No subscribers yet.</p>
          )}
        </Panel>
      </div>

      <section aria-label="Lessons" className={cardFlush}>
        <div className="flex flex-col gap-1 p-5">
          <h2 className="font-display text-xl font-semibold text-ink">Lessons</h2>
          <p className="text-base text-ink-2">
            Each released day, by stage and week: signed-in learners who finished it and their average first-try score; how it felt to everyone who rated it; open problem reports. A week&apos;s row adds up its days.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[44rem] text-sm">
            <thead>
              <tr className="border-y border-line text-left text-ink-3">
                <th className="px-5 py-2 font-medium">Day</th>
                <th className="px-3 py-2 text-right font-medium">Finished</th>
                <th className="px-3 py-2 text-right font-medium">Score</th>
                <th className="px-3 py-2 text-right font-medium">Easy</th>
                <th className="px-3 py-2 text-right font-medium">Just right</th>
                <th className="px-3 py-2 text-right font-medium">Too hard</th>
                <th className="px-5 py-2 text-right font-medium">Reports</th>
              </tr>
            </thead>
            {course.stages.map((stage) =>
              stage.weeks
                .filter((week) => week.released)
                .map((week, i) => {
                  const rows = week.days.map((ref, d) => ({ ref, n: (week.n - 1) * 7 + d + 1, result: learners.days.get(ref.id), levels: stats.levels.get(ref.id), reports: stats.reportsByDay.get(ref.id) ?? 0 }));
                  const sum = (pick: (r: (typeof rows)[number]) => number) => rows.reduce((total, r) => total + pick(r), 0);
                  return (
                    <tbody key={week.n} className="divide-y divide-line border-t border-line">
                      {i === 0 && (
                        <tr className="bg-brand-soft">
                          <th colSpan={7} scope="rowgroup" className="px-5 py-2.5 text-left text-base font-bold text-brand-ink">
                            Stage {stage.n} · {stage.title.en}
                          </th>
                        </tr>
                      )}
                      <tr className="bg-sunken text-ink-2">
                        <th colSpan={3} scope="rowgroup" className="px-5 py-2 text-left font-semibold text-ink">
                          Week {week.n} · {week.title.en}
                        </th>
                        <td className="px-3 py-2 text-right font-semibold tabular-nums">{sum((r) => r.levels?.easy ?? 0)}</td>
                        <td className="px-3 py-2 text-right font-semibold tabular-nums">{sum((r) => r.levels?.right ?? 0)}</td>
                        <td className="px-3 py-2 text-right font-semibold tabular-nums">{sum((r) => r.levels?.hard ?? 0)}</td>
                        <td className="px-5 py-2 text-right font-semibold tabular-nums">{sum((r) => r.reports)}</td>
                      </tr>
                      {rows.map(({ ref, n, result, levels, reports }) => (
                        <tr key={ref.id}>
                          <td className="py-2 pr-5 pl-8">
                            <a href={`/lessons/${encodeURIComponent(ref.id)}`} className="font-semibold text-ink hover:text-brand">
                              Day {n}: {ref.title.en}
                            </a>
                          </td>
                          <td className="px-3 py-2 text-right tabular-nums">{result?.finished ?? 0}</td>
                          <td className="px-3 py-2 text-right tabular-nums">{result?.score == null ? "—" : `${result.score}%`}</td>
                          <td className="px-3 py-2 text-right tabular-nums">{levels?.easy ?? 0}</td>
                          <td className="px-3 py-2 text-right tabular-nums">{levels?.right ?? 0}</td>
                          <td className={`px-3 py-2 text-right tabular-nums ${levels && levels.hard > levels.easy + levels.right ? "font-bold text-danger" : ""}`}>{levels?.hard ?? 0}</td>
                          <td className={`px-5 py-2 text-right tabular-nums ${reports ? "font-bold text-almost" : ""}`}>{reports}</td>
                        </tr>
                      ))}
                    </tbody>
                  );
                }),
            )}
          </table>
        </div>
      </section>
    </main>
  );
}

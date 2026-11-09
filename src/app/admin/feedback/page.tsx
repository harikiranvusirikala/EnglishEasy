import { badge } from "@/components/ui/badge";
import { button } from "@/components/ui/button";
import { findDay } from "@/content/course";
import { strings } from "@/lib/strings";
import { getDatabase } from "@/server/db";
import { openFeedback } from "@/server/feedback-repo";
import { requireSiteAdmin } from "@/server/permissions";
import type { ReportReason } from "@/server/report-schema";
import { groupBy, openReports, recentClientErrors } from "@/server/reports-repo";
import { feedbackDone, reportsDone } from "../actions";
import { FACE, PageTitle, Panel, TOPIC, adminMain, shortDate } from "../parts";

const REASON: Record<ReportReason, string> = {
  telugu: strings.reportReasonTelugu.en,
  english: strings.reportReasonEnglish.en,
  audio: strings.reportReasonAudio.en,
  other: strings.reportReasonOther.en,
};

const ERROR_DAYS = 30;

/** What learners told us (owner request, 2026-11-09): messages, problem reports and app errors, each cleared with Done. */
export default async function AdminFeedbackPage() {
  await requireSiteAdmin();
  const { db } = await getDatabase();
  const [messages, reports, errors] = await Promise.all([openFeedback(db), openReports(db), recentClientErrors(db, ERROR_DAYS)]);
  const byDay = groupBy(reports, (r) => r.dayId);

  return (
    <main className={adminMain}>
      <PageTitle title="Feedback" text="What learners told us, newest first. Done clears an item from these lists." />

      <Panel title={`Messages · ${messages.length}`} text="From Settings → Send feedback. Spoken messages are the phone's transcript.">
        {messages.length === 0 ? (
          <p className="text-base text-ink-3">No messages waiting.</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {messages.map((m) => (
              <li key={m.id} data-testid="feedback-message" className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-4">
                <div className="flex min-w-0 flex-1 flex-col gap-2">
                  <p className="flex flex-wrap items-center gap-2 text-sm text-ink-3">
                    {m.rating && <span className="text-base font-semibold text-ink">{FACE[m.rating]}</span>}
                    <span>
                      {shortDate(m.at)} · {m.learnIn === "te" ? "Telugu mode" : "English mode"} · v{m.appVersion}
                    </span>
                  </p>
                  {m.topics.length > 0 && (
                    <ul className="flex flex-wrap gap-1.5">
                      {m.topics.map((t) => (
                        <li key={t} className={badge("neutral")}>
                          {TOPIC[t]}
                        </li>
                      ))}
                    </ul>
                  )}
                  {m.said && (
                    <p lang={m.learnIn === "te" ? "te" : undefined} className="rounded-2xl bg-sunken p-3 text-lg text-ink">
                      {m.said}
                    </p>
                  )}
                </div>
                <form action={feedbackDone}>
                  <input type="hidden" name="id" value={m.id} />
                  <button type="submit" className={button("secondary")}>
                    Done
                  </button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </Panel>

      <Panel title={`Problem reports · ${reports.length}`} text="⚑ in the player, by lesson and question. Done clears every report about that question.">
        {byDay.length === 0 ? (
          <p className="text-base text-ink-3">No open reports.</p>
        ) : (
          <div className="flex flex-col gap-5">
            {byDay.map((day) => {
              const place = findDay(day.key);
              return (
                <section key={day.key} aria-label={day.key} className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-ink">
                    <a href={`/lessons/${encodeURIComponent(day.key)}`} className="hover:text-brand">
                      {place ? `Day ${place.number}: ${place.ref.title.en}` : day.key}
                    </a>
                  </h3>
                  <ul className="flex flex-col divide-y divide-line rounded-2xl border border-line">
                    {groupBy(day.items, (r) => r.activityId).map((activity) => {
                      const reasons = groupBy(activity.items, (r) => r.reason);
                      return (
                        <li key={activity.key} data-testid="report-row" className="flex flex-wrap items-center gap-3 px-4 py-3">
                          <code className="text-sm text-ink-2">{activity.key.slice(day.key.length + 1)}</code>
                          <span className="flex flex-wrap gap-1.5">
                            {reasons.map((r) => (
                              <span key={r.key} className={badge(r.key === "audio" ? "accent" : "neutral")}>
                                {REASON[r.key as ReportReason]} · {r.items.length}
                              </span>
                            ))}
                          </span>
                          <span className="text-sm text-ink-3">latest {shortDate(activity.items[0].at)}</span>
                          <form action={reportsDone} className="ml-auto">
                            <input type="hidden" name="activityId" value={activity.key} />
                            <button type="submit" className={button("secondary")}>
                              Done
                            </button>
                          </form>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </Panel>

      <Panel title={`App errors · ${errors.length}`} text={`The last ${ERROR_DAYS} days, grouped by message.`}>
        {errors.length === 0 ? (
          <p className="text-base text-ink-3">No errors. 🎉</p>
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {groupBy(errors, (e) => e.message).map((group) => {
              const latest = group.items[0];
              return (
                <li key={group.key} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0">
                  <p className="font-semibold break-words text-ink">
                    {group.items.length} × {group.key || "(no message)"}
                  </p>
                  <p className="text-sm break-words text-ink-3">
                    latest {shortDate(latest.at)} · {latest.path} · v{latest.appVersion} · {latest.userAgent}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </Panel>
    </main>
  );
}

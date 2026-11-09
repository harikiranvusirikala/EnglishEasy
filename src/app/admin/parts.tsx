import type { ReactNode } from "react";
import { card, cardText, cardTitle } from "@/components/ui/card";
import { strings } from "@/lib/strings";
import type { FeedbackRating, FeedbackTopic } from "@/server/feedback-schema";

// Small building blocks of the admin pages (server components, no client code).

export const FACE: Record<FeedbackRating, string> = { love: "😍 Love it", good: "🙂 Good", okay: "😐 Okay", bad: "🙁 Not good" };
export const TOPIC: Record<FeedbackTopic, string> = {
  "too-hard": strings.feedbackTooHard.en,
  "too-easy": strings.feedbackTooEasy.en,
  voice: strings.feedbackVoice.en,
  speaking: strings.feedbackSpeaking.en,
  telugu: strings.feedbackTelugu.en,
  slow: strings.feedbackSlow.en,
  "more-lessons": strings.feedbackMoreLessons.en,
};

export const adminMain = "mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10";

/** "9 Nov 2026" in UTC, so the server and every reader agree. */
export const shortDate = (date: Date) => date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });

export function PageTitle({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="font-display text-3xl font-bold text-ink">{title}</h1>
      <p className="text-base text-ink-2">{text}</p>
    </div>
  );
}

export function Panel({ title, text, children }: { title: string; text?: string; children: ReactNode }) {
  return (
    <section aria-label={title} className={`${card} flex flex-col gap-4`}>
      <div className="flex flex-col gap-1">
        <h2 className={cardTitle}>{title}</h2>
        {text && <p className={cardText}>{text}</p>}
      </div>
      {children}
    </section>
  );
}

export function Tile({ label, value, note }: { label: string; value: number; note?: string }) {
  return (
    <div className={`${card} flex flex-col gap-1 px-4 py-3`}>
      <p className="text-sm text-ink-3">{label}</p>
      <p className="font-display text-2xl font-bold text-ink tabular-nums">{value.toLocaleString("en-IN")}</p>
      {note && <p className="text-xs text-ink-3">{note}</p>}
    </div>
  );
}

export function Figure({ label, value }: { label: string; value: number | string }) {
  return (
    <div>
      <dt className="text-sm text-ink-3">{label}</dt>
      <dd className="font-display text-xl font-bold text-ink tabular-nums">{typeof value === "number" ? value.toLocaleString("en-IN") : value}</dd>
    </div>
  );
}

/** A row of bars, the latest on the right; each bar's label and count are its tooltip and screen readers' text. */
export function Bars({ label, bars }: { label: string; bars: { key: string; label: string; value: number }[] }) {
  const most = Math.max(0, ...bars.map((b) => b.value));
  const highest = Math.max(1, most);
  return (
    <div>
      <ol aria-label={label} className="flex h-28 items-end gap-1">
        {bars.map((bar) => (
          <li key={bar.key} title={`${bar.label}: ${bar.value}`} className="flex h-full flex-1 flex-col justify-end">
            <span className="sr-only">
              {bar.label}: {bar.value}
            </span>
            <span
              aria-hidden="true"
              className={`block w-full rounded-t-sm ${bar.value ? "bg-brand" : "bg-line"}`}
              style={{ height: bar.value ? `${Math.max(4, (bar.value / highest) * 100)}%` : "2px" }}
            />
          </li>
        ))}
      </ol>
      <div aria-hidden="true" className="mt-1.5 flex justify-between text-xs text-ink-3">
        <span>{bars[0]?.label}</span>
        <span>Most: {most}</span>
        <span>{bars.at(-1)?.label}</span>
      </div>
    </div>
  );
}

import { act, render, screen, within, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Course } from "@/learning/recommend";
import { completeDay } from "@/learning/progress";
import { updateProgress } from "@/lib/progress-store";
import { updateSettings } from "@/lib/settings-store";
import { fixtureCourse, makePlayable, standardShape } from "../../../test/fixtures/course";
vi.mock("@/lib/account", () => ({ useAccount: () => ({ kind: "signedOut" }) }));

import { Home } from "./Home";
import { Journey } from "./Journey";

const bi = (en: string) => ({ en, te: `${en} తె` });
const ref = (id: string) => ({ id, kind: "lesson" as const, title: bi(`Title ${id}`) });

/** Three stages and many weeks, so Journey's open / folded / future states and "coming soon" rows all appear. */
const big: Course = {
  stages: [
    { n: 1, title: bi("One"), canDo: bi("Can one"), firstWeek: 1, lastWeek: 4, weeks: [
      { n: 1, title: bi("W1"), released: true, days: [ref("a1"), ref("a2")] },
      { n: 2, title: bi("W2"), released: true, days: [ref("b1")] },
      { n: 3, title: bi("W3"), released: false, days: [] },
      { n: 4, title: bi("W4"), released: false, days: [] },
    ] },
    { n: 2, title: bi("Two"), canDo: bi("Can two"), firstWeek: 5, lastWeek: 6, weeks: [
      { n: 5, title: bi("W5"), released: false, days: [] },
      { n: 6, title: bi("W6"), released: false, days: [] },
    ] },
    { n: 3, title: bi("Three"), canDo: bi("Can three"), firstWeek: 7, lastWeek: 7, weeks: [{ n: 7, title: bi("W7"), released: false, days: [] }] },
  ],
  tracks: [],
};

beforeEach(() => {
  localStorage.clear();
  updateProgress(() => ({ version: 1, activities: {}, completed: {}, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: "x" }));
  updateSettings({ learnIn: "en", onboarded: true });
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      const id = decodeURIComponent(url.split("/").pop()!.replace(".json", ""));
      return { ok: true, json: async () => makePlayable(id, standardShape) };
    }),
  );
});

describe("Home", () => {
  it("asks the learner how to learn on a first visit, then shows Home", async () => {
    updateSettings({ onboarded: false });
    render(<Home course={fixtureCourse} written={["a1", "a2", "b1"]} />);
    expect(screen.getByText("How would you like to learn?")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Explanations in English/ }));
    expect(await screen.findByRole("link", { name: /Start Day 78/ })).toBeTruthy();
    expect(document.documentElement.getAttribute("data-learn-in")).toBe("en");
  });

  it("shows Continue with progress for a day in progress and the week strip", async () => {
    updateProgress((p) => ({ ...p, activities: { "a1.learn1": { correct: true, attempts: 1, at: "x" } }, position: { dayId: "a1", activityId: "a1.learn2", at: "x" } }));
    render(<Home course={fixtureCourse} written={["a1", "a2", "b1"]} />);
    expect(await screen.findByRole("link", { name: /Continue Lesson/ })).toBeTruthy();
    expect(screen.getByText("1 of 5 done · 4 left")).toBeTruthy();
    const strip = screen.getByRole("region", { name: "This week" });
    expect(within(strip).getAllByRole("link")).toHaveLength(2);
  });

  it("says a day is not ready when its content is not written yet", async () => {
    updateProgress((p) => completeDay(p, makePlayable("a1", standardShape), "2026-11-07T10:00:00.000Z"));
    render(<Home course={fixtureCourse} written={["a1"]} />);
    expect(await screen.findByText("This lesson is not ready yet.")).toBeTruthy();
  });
});

describe("Journey", () => {
  it("opens the current stage, folds nothing yet, shows later stages as cards", async () => {
    render(<Journey course={big} written={["a1", "a2", "b1"]} />);
    const stage1 = (await screen.findByText(/Stage 1 · One/)).closest("details")!;
    expect(stage1.open).toBe(true);
    expect(screen.getByText(/Stage 2 · Two/).closest("details")).toBeNull(); // a card, not a folded section
    expect(screen.getByText("Can three")).toBeTruthy();
    expect(screen.getAllByText("coming soon").length).toBeGreaterThanOrEqual(2); // W3, W4
  });

  it("opens a week to its days with a % each", async () => {
    render(<Journey course={big} written={["a1", "a2", "b1"]} />);
    // Week 1 is open: it holds the recommended day.
    const week1 = await screen.findByRole("button", { name: /Week 1.*W1/ });
    expect(week1.getAttribute("aria-expanded")).toBe("true");
    expect(await screen.findAllByText("0%")).not.toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: /Week 2.*W2/ }));
    expect(screen.getByRole("link", { name: /Title b1/ })).toBeTruthy();
  });

  it("folds a finished stage", async () => {
    updateProgress((p) => ["a1", "a2", "b1"].reduce((acc, id) => completeDay(acc, makePlayable(id, standardShape), "2026-11-07T10:00:00.000Z"), p));
    const course: Course = { ...big, stages: big.stages.map((s) => (s.n === 1 ? { ...s, weeks: s.weeks.filter((w) => w.released) } : s)).map((s) => (s.n === 2 ? { ...s, weeks: [{ n: 5, title: bi("W5"), released: true, days: [ref("c1")] }] } : s)) };
    render(<Journey course={course} written={["a1", "a2", "b1", "c1"]} />);
    const stage1 = (await screen.findByText(/Stage 1 · One/)).closest("details")!;
    expect(stage1.open).toBe(false);
    expect((await screen.findByText(/Stage 2 · Two/)).closest("details")!.open).toBe(true);
    await act(async () => {});
  });
});

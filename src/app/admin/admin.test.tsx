import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import AdminFeedbackPage from "./feedback/page";
import AdminStatsPage from "./page";

// The owner's pages, rendered with a stand-in database: the owner check runs first, then the numbers show.

const requireSiteAdmin = vi.fn().mockResolvedValue({ id: "u1", name: "Owner", email: "owner@example.com", image: null });
vi.mock("@/server/permissions", () => ({ requireSiteAdmin: () => requireSiteAdmin() }));
vi.mock("@/server/db", () => ({ getDatabase: async () => ({ db: {} }) }));
vi.mock("next/cache", () => ({ refresh: vi.fn() }));
vi.mock("@/server/site-stats", () => ({
  loadSiteStats: async () => ({
    learners: {
      total: 12,
      newPerWeek: Array.from({ length: 12 }, (_, i) => ({ week: `2026-08-${String(i + 10).padStart(2, "0")}`, count: i % 3 })),
      active: { day: 2, week: 5, month: 9 },
      days: new Map([["sentence-basics", { finished: 7, score: 84 }]]),
    },
    levels: new Map([["sentence-basics", { easy: 1, right: 4, hard: 0 }], ["i-am-you-are", { easy: 0, right: 1, hard: 3 }]]),
    reportsByDay: new Map([["i-am-you-are", 2]]),
    feedback: { waiting: 3, total: 4, ratings: { love: 2, good: 1, okay: 1, bad: 0 }, topics: [{ topic: "more-lessons", count: 3 }] },
    reminders: { total: 2, byHour: [{ hour: 8, count: 2 }] },
    health: { openReports: 2, errorsThisWeek: 1 },
  }),
}));
vi.mock("@/server/feedback-repo", () => ({
  openFeedback: async () => [
    { id: "f1", rating: "love", topics: ["voice"], said: "పాఠాలు చాలా బాగున్నాయి", learnIn: "te", appVersion: "abc1234", at: new Date("2026-11-09T10:00:00Z") },
  ],
}));
vi.mock("@/server/reports-repo", async (original) => ({
  ...(await original<typeof import("@/server/reports-repo")>()),
  openReports: async () => [
    { activityId: "i-am-you-are.p2", dayId: "i-am-you-are", reason: "telugu", learnIn: "te", at: new Date("2026-11-08T10:00:00Z") },
    { activityId: "i-am-you-are.p2", dayId: "i-am-you-are", reason: "audio", learnIn: "en", at: new Date("2026-11-07T10:00:00Z") },
  ],
  recentClientErrors: async () => [{ message: "Boom", stack: "", path: "/learn/play", userAgent: "Chrome", appVersion: "abc1234", at: new Date("2026-11-09T09:00:00Z") }],
}));

describe("/admin", () => {
  it("checks the owner, then shows totals, activity and each lesson's results", async () => {
    render(await AdminStatsPage());
    expect(requireSiteAdmin).toHaveBeenCalled();
    const totals = screen.getByRole("region", { name: "Totals" });
    expect(within(totals).getByText("Signed-in learners").nextSibling?.textContent).toBe("12");
    expect(within(totals).getByText("Feedback waiting").nextSibling?.textContent).toBe("3");
    expect(screen.getByText(/More lessons · 3/)).toBeTruthy();
    const day1 = screen.getByRole("link", { name: "Day 1: Who Does What" }).closest("tr")!;
    expect(within(day1).getByText("84%")).toBeTruthy();
    const day2 = screen.getByRole("link", { name: "Day 2: I Am, You Are" }).closest("tr")!;
    expect(within(day2).getAllByText("3")[0].className).toMatch(/text-danger/); // mostly "Too hard"

    // Grouped by stage and week: a stage heading once, a week heading with its days' totals.
    expect(screen.getAllByRole("rowheader", { name: /^Stage 1 · Foundations$/ })).toHaveLength(1);
    expect(screen.getByRole("rowheader", { name: /^Stage 2 · Everyday Life$/ })).toBeTruthy();
    const week1 = screen.getByRole("rowheader", { name: "Week 1 · English Foundations" }).closest("tr")!;
    expect(Array.from(week1.querySelectorAll("td"), (td) => td.textContent)).toEqual(["1", "5", "3", "2"]); // easy, just right, too hard, reports
    expect(screen.getByRole("rowheader", { name: "Week 13 · Shopping at the Market" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 40 · Checkpoint: Stage 2 Review" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 49 · Online Shopping & Deliveries" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 58 · At the Enquiry Counter" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 67 · Checkpoint: Getting Things Done" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 76 · Chatting at the Park" })).toBeTruthy();
    expect(screen.getByRole("rowheader", { name: "Week 80 · Checkpoint: Stage 3 Review" })).toBeTruthy();
    expect(screen.queryByRole("rowheader", { name: /^Week 81/ })).toBeNull(); // not released
  });
});

describe("/admin/feedback", () => {
  it("lists messages with their spoken words, reports by question with reasons, and errors by message", async () => {
    render(await AdminFeedbackPage());
    const message = screen.getByTestId("feedback-message");
    expect(within(message).getByText("పాఠాలు చాలా బాగున్నాయి").getAttribute("lang")).toBe("te");
    expect(within(message).getByText(/Love it/)).toBeTruthy();
    expect(within(message).getByRole("button", { name: "Done" })).toBeTruthy();
    const report = screen.getByTestId("report-row");
    expect(within(report).getByText("p2")).toBeTruthy();
    expect(within(report).getByText(/Telugu is wrong · 1/)).toBeTruthy();
    expect(within(report).getByText(/Audio problem · 1/)).toBeTruthy();
    expect(screen.getByRole("link", { name: "Day 2: I Am, You Are" })).toBeTruthy();
    expect(screen.getByText("1 × Boom")).toBeTruthy();
  });
});

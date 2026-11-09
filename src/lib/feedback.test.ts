import { describe, expect, it, vi } from "vitest";
import { addFeedbackToState, FEEDBACK_KEY, flushFeedback, parseFeedbackState, submitFeedback, type AppFeedback, type LessonRating } from "./feedback";

const message = (at: string): AppFeedback => ({ kind: "app", rating: "good", topics: ["voice"], learnIn: "te", appVersion: "dev", at });
const rating = (dayId: string): LessonRating => ({ kind: "lesson", dayId, level: "hard", learnIn: "en", at: `2026-11-09T10:00:00.000Z` });
const stored = () => parseFeedbackState(localStorage.getItem(FEEDBACK_KEY));
const EMPTY = { sentOn: null, rated: {}, queue: [] };

describe("feedback state", () => {
  it("keeps one Settings message a day and one rating per lesson", () => {
    const sent = addFeedbackToState(EMPTY, message("2026-11-09T10:00:00.000Z"), "2026-11-09");
    expect(sent.sentOn).toBe("2026-11-09");
    expect(addFeedbackToState(sent, message("2026-11-09T11:00:00.000Z"), "2026-11-09")).toBe(sent);
    expect(addFeedbackToState(sent, message("2026-11-10T09:00:00.000Z"), "2026-11-10").queue).toHaveLength(2);

    const rated = addFeedbackToState(EMPTY, rating("a-kilo-of"), "2026-11-09");
    expect(rated.rated).toEqual({ "a-kilo-of": "hard" });
    expect(addFeedbackToState(rated, { ...rating("a-kilo-of"), level: "easy" }, "2026-11-10")).toBe(rated);
  });

  it("reads unreadable data as empty", () => {
    expect(parseFeedbackState(null)).toEqual(EMPTY);
    expect(parseFeedbackState("{oops")).toEqual(EMPTY);
    expect(parseFeedbackState(JSON.stringify({ sentOn: 3, rated: ["x"], queue: [{ nope: true }] }))).toEqual(EMPTY);
  });
});

describe("submitFeedback and flushFeedback", () => {
  it("queues offline, sends later, and drops what the server refuses", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    expect(submitFeedback(message("2026-11-09T10:00:00.000Z"), "2026-11-09")).toBe(true);
    expect(submitFeedback(message("2026-11-09T12:00:00.000Z"), "2026-11-09")).toBe(false);
    expect(submitFeedback(rating("fresh-and-ripe"), "2026-11-09")).toBe(true);
    await flushFeedback();
    expect(stored().queue).toHaveLength(2);

    const online = vi.fn().mockResolvedValueOnce({ status: 200 }).mockResolvedValueOnce({ status: 400 });
    await flushFeedback(online);
    expect(online).toHaveBeenCalledTimes(2);
    expect(online.mock.calls[0][0]).toBe("/api/feedback");
    expect(JSON.parse(online.mock.calls[0][1].body)).not.toHaveProperty("userId");
    expect(stored()).toMatchObject({ sentOn: "2026-11-09", rated: { "fresh-and-ripe": "hard" }, queue: [] });
    vi.unstubAllGlobals();
  });

  it("keeps feedback on a server error", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ status: 503 }));
    submitFeedback(rating("w13-review"), "2026-11-09");
    await new Promise((r) => setTimeout(r, 0));
    expect(stored().queue).toHaveLength(1);
    vi.unstubAllGlobals();
  });
});

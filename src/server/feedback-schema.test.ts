import { describe, expect, it } from "vitest";
import { MAX_SAID_CHARS, parseFeedback } from "./feedback-schema";

const at = "2026-11-09T10:00:00.000Z";
const app = { kind: "app", rating: "good", topics: ["voice"], said: "చాలా బాగుంది", learnIn: "te", appVersion: "abc1234", at };
const lesson = { kind: "lesson", dayId: "a-kilo-of", level: "hard", learnIn: "en", at };

describe("parseFeedback", () => {
  it("accepts a Settings message and a lesson rating, dropping unknown keys", () => {
    expect(parseFeedback(app)).toEqual(app);
    expect(parseFeedback(lesson)).toEqual(lesson);
    expect(parseFeedback({ ...app, email: "a@b.c" })).not.toHaveProperty("email");
  });

  it("needs at least a face, a topic or words; topics are not repeated", () => {
    expect(parseFeedback({ ...app, rating: undefined, topics: [], said: undefined })).toBeNull();
    expect(parseFeedback({ ...app, rating: undefined, topics: [], said: "   " })).toBeNull();
    expect(parseFeedback({ ...app, rating: undefined, said: undefined })).not.toBeNull();
    expect(parseFeedback({ ...app, topics: ["voice", "voice"] })).toMatchObject({ topics: ["voice"] });
  });

  it("rejects unknown faces, topics, levels and languages, a bad time, and long words", () => {
    expect(parseFeedback({ ...app, rating: "meh" })).toBeNull();
    expect(parseFeedback({ ...app, topics: ["rude"] })).toBeNull();
    expect(parseFeedback({ ...lesson, level: "medium" })).toBeNull();
    expect(parseFeedback({ ...lesson, learnIn: "hi" })).toBeNull();
    expect(parseFeedback({ ...lesson, at: "today" })).toBeNull();
    expect(parseFeedback({ ...lesson, dayId: "" })).toBeNull();
    expect(parseFeedback({ ...app, said: "అ".repeat(MAX_SAID_CHARS + 1) })).toBeNull();
    expect(parseFeedback(null)).toBeNull();
  });
});

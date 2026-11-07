import { describe, expect, it } from "vitest";
import { emptyProgress } from "@/learning/progress";
import { parseProgressBody } from "./progress-schema";

describe("parseProgressBody", () => {
  it("accepts real progress and drops unknown keys", () => {
    const p = { ...emptyProgress("2026-11-01T10:00:00.000Z"), activities: { "d.x": { correct: true, attempts: 1, at: "2026-11-01T10:00:00.000Z" } }, extra: 1 };
    const parsed = parseProgressBody(p);
    expect(parsed?.activities["d.x"].attempts).toBe(1);
    expect(parsed).not.toHaveProperty("extra");
  });
  it("rejects wrong versions, shapes and oversized lists", () => {
    expect(parseProgressBody(null)).toBeNull();
    expect(parseProgressBody({ ...emptyProgress(), version: 2 })).toBeNull();
    expect(parseProgressBody({ ...emptyProgress(), activities: { x: { correct: "yes" } } })).toBeNull();
    expect(parseProgressBody({ ...emptyProgress(), practiceDays: Array(61).fill("2026-11-01") })).toBeNull();
  });
});

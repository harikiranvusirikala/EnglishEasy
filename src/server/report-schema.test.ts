import { describe, expect, it } from "vitest";
import { MAX_REPORT_BYTES, MAX_STACK_CHARS, parseClientError, parseReport, readJsonBody } from "./report-schema";

const report = { activityId: "d.x", dayId: "d", reason: "telugu", learnIn: "te", at: "2026-11-07T10:00:00.000Z" };
const error = { message: "Boom", stack: "Error: Boom\n at x", path: "/learn", userAgent: "UA", appVersion: "abc1234" };

describe("parseReport", () => {
  it("accepts the four reasons and drops unknown keys", () => {
    for (const reason of ["telugu", "english", "audio", "other"]) expect(parseReport({ ...report, reason })?.reason).toBe(reason);
    expect(parseReport({ ...report, name: "Ravi" })).not.toHaveProperty("name");
  });
  it("rejects a bad reason, language, time, missing or oversized field", () => {
    expect(parseReport({ ...report, reason: "rude" })).toBeNull();
    expect(parseReport({ ...report, learnIn: "hi" })).toBeNull();
    expect(parseReport({ ...report, at: "yesterday" })).toBeNull();
    expect(parseReport({ ...report, activityId: "" })).toBeNull();
    expect(parseReport({ ...report, dayId: "x".repeat(201) })).toBeNull();
    expect(parseReport(null)).toBeNull();
  });
});

describe("parseClientError", () => {
  it("accepts an error and cuts the stack to 2 KB", () => {
    expect(parseClientError(error)).toEqual(error);
    expect(parseClientError({ ...error, stack: "s".repeat(10_000) })?.stack).toHaveLength(MAX_STACK_CHARS);
  });
  it("rejects missing or oversized fields", () => {
    expect(parseClientError({ ...error, message: undefined })).toBeNull();
    expect(parseClientError({ ...error, message: "m".repeat(1001) })).toBeNull();
    expect(parseClientError({ ...error, userAgent: "u".repeat(301) })).toBeNull();
  });
});

describe("readJsonBody", () => {
  const post = (body: string, headers: Record<string, string> = {}) => new Request("http://x/api", { method: "POST", body, headers });
  it("reads JSON within the limit", async () => {
    expect(await readJsonBody(post(JSON.stringify(report)), MAX_REPORT_BYTES)).toEqual({ value: report });
  });
  it("answers 413 for a body that is too large and 400 for text that is not JSON", async () => {
    expect(await readJsonBody(post("x".repeat(MAX_REPORT_BYTES + 1)), MAX_REPORT_BYTES)).toEqual({ status: 413 });
    expect(await readJsonBody(post("{}", { "content-length": "5000" }), MAX_REPORT_BYTES)).toEqual({ status: 413 });
    expect(await readJsonBody(post("not json"), MAX_REPORT_BYTES)).toEqual({ status: 400 });
  });
});

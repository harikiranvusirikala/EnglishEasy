import { describe, expect, it, vi } from "vitest";
import { addToState, flushReports, parseReportState, REPORTS_KEY, submitReport, type Report } from "./reports";

const report = (activityId: string): Report => ({ activityId, dayId: "d", reason: "english", learnIn: "en", at: `2026-11-07T10:00:0${activityId.length}.000Z` });
const stored = () => parseReportState(localStorage.getItem(REPORTS_KEY));

describe("report state", () => {
  it("keeps one report per activity", () => {
    const once = addToState({ reported: [], queue: [] }, report("d.a"));
    expect(once).toEqual({ reported: ["d.a"], queue: [report("d.a")] });
    expect(addToState(once, report("d.a"))).toBe(once);
  });
  it("reads unreadable data as empty", () => {
    expect(parseReportState(null)).toEqual({ reported: [], queue: [] });
    expect(parseReportState("{oops")).toEqual({ reported: [], queue: [] });
    expect(parseReportState(JSON.stringify({ reported: [1, "x"], queue: [{ nope: true }] }))).toEqual({ reported: ["x"], queue: [] });
  });
});

describe("submitReport and flushReports", () => {
  it("queues offline, keeps the queue on failure, and sends later", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    expect(submitReport(report("d.off"))).toBe(true);
    expect(submitReport(report("d.off"))).toBe(false);
    await flushReports();
    expect(stored().queue.map((r) => r.activityId)).toEqual(["d.off"]);
    expect(stored().reported).toEqual(["d.off"]);

    const online = vi.fn().mockResolvedValue({ status: 200 });
    await flushReports(online);
    expect(online).toHaveBeenCalledTimes(1);
    expect(online.mock.calls[0][0]).toBe("/api/report");
    expect(stored().queue).toEqual([]);
    expect(stored().reported).toEqual(["d.off"]);
    vi.unstubAllGlobals();
  });
  it("keeps a report on a server error and drops one the server refuses", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ status: 500 }));
    submitReport(report("d.five"));
    await new Promise((r) => setTimeout(r, 0));
    expect(stored().queue).toHaveLength(1);
    await flushReports(vi.fn().mockResolvedValue({ status: 400 }));
    expect(stored().queue).toEqual([]);
    vi.unstubAllGlobals();
  });
});

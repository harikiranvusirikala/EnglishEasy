import { afterEach, describe, expect, it, vi } from "vitest";
import { countError, describeError, ERRORS_KEY, reportError } from "./report-error";

describe("countError", () => {
  it("allows five a day and refuses the sixth", () => {
    let raw: string | null = null;
    for (let i = 0; i < 5; i++) {
      const r = countError(raw, "2026-11-07");
      expect(r.allowed).toBe(true);
      raw = r.next;
    }
    expect(countError(raw, "2026-11-07").allowed).toBe(false);
  });
  it("starts again on a new day and on unreadable data", () => {
    const full = JSON.stringify({ day: "2026-11-07", count: 5 });
    expect(countError(full, "2026-11-08").allowed).toBe(true);
    expect(countError("{oops", "2026-11-07").allowed).toBe(true);
    expect(countError(JSON.stringify({ day: "2026-11-07", count: -3 }), "2026-11-07")).toMatchObject({ allowed: true });
  });
});

describe("describeError", () => {
  it("takes message and stack from an Error, cutting the stack to 2 KB", () => {
    const e = new Error("Boom");
    e.stack = "s".repeat(5000);
    const d = describeError(e, "/learn", "UA");
    expect(d).toMatchObject({ message: "Boom", path: "/learn", userAgent: "UA" });
    expect(d.stack).toHaveLength(2048);
  });
  it("copes with strings, objects and nothing", () => {
    expect(describeError("plain", "/", "UA").message).toBe("plain");
    expect(describeError({ a: 1 }, "/", "UA").message).toBe('{"a":1}');
    expect(describeError("", "/", "UA").message).toBe("Unknown error");
  });
});

describe("reportError", () => {
  afterEach(() => vi.unstubAllGlobals());
  it("posts once, remembers the day's count, and ignores the same error again", () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal("fetch", fetchMock);
    reportError(new Error("Unique one"));
    reportError(new Error("Unique one"));
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock.mock.calls[0][0]).toBe("/api/client-error");
    expect(JSON.parse(localStorage.getItem(ERRORS_KEY) ?? "{}").count).toBe(1);
  });
  it("never throws, even when the network fails", () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("offline")));
    expect(() => reportError(new Error("Another one"))).not.toThrow();
  });
});

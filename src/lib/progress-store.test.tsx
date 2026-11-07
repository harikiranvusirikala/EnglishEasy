import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { markViewed, PROGRESS_KEY } from "@/learning/progress";
import { getProgress, updateProgress, useProgress } from "./progress-store";

function Count() {
  const p = useProgress();
  return <p>{p ? `${Object.keys(p.activities).length} done` : "loading"}</p>;
}

describe("progress store", () => {
  it("starts empty and saves each change under the versioned key", () => {
    expect(getProgress().activities).toEqual({});
    updateProgress((p) => markViewed(p, "d.e1", "2026-11-01T10:00:00.000Z"));
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY)!);
    expect(saved.version).toBe(1);
    expect(Object.keys(saved.activities)).toEqual(["d.e1"]);
    expect(getProgress().activities["d.e1"].correct).toBe(true);
  });

  it("reads progress that was saved earlier (a reload)", () => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ version: 1, activities: { "d.e2": { correct: true, attempts: 1, at: "t" } }, completed: {}, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: "t" }));
    expect(Object.keys(getProgress().activities)).toEqual(["d.e2"]);
  });

  it("corrupt data falls back to empty progress", () => {
    localStorage.setItem(PROGRESS_KEY, "{broken");
    expect(getProgress().activities).toEqual({});
    expect(getProgress().completed).toEqual({});
  });

  it("tells subscribed screens about a change", () => {
    render(<Count />);
    expect(screen.getByText("0 done")).toBeTruthy();
    act(() => updateProgress((p) => markViewed(p, "d.e3", "2026-11-01T10:00:00.000Z")));
    expect(screen.getByText("1 done")).toBeTruthy();
  });

  it("keeps progress in memory when storage is blocked", () => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
    try {
      updateProgress((p) => markViewed(p, "d.e4", "2026-11-01T10:00:00.000Z"));
      expect(getProgress().activities["d.e4"]).toBeTruthy();
    } finally {
      Storage.prototype.setItem = original;
    }
  });
});

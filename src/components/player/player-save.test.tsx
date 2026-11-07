import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import type { PlayableDay } from "@/content/types";
import { getProgress } from "@/lib/progress-store";
import { updateSettings } from "@/lib/settings-store";
import { LessonComplete } from "./LessonComplete";
import { Player } from "./Player";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("@/lib/speak", async (importOriginal) => ({ ...(await importOriginal<typeof import("@/lib/speak")>()), narrate: vi.fn() }));

const card = (id: string, wrong: string, right: string) => ({
  id: `tiny.${id}`,
  type: "dontSay" as const,
  wrong,
  right,
  why: { en: `Why ${id}.`, te: `ఎందుకు ${id}.` },
});

const day: PlayableDay = {
  id: "tiny",
  kind: "lesson",
  title: { en: "Tiny", te: "చిన్నది" },
  sections: [
    { kind: "learn", activities: [card("l1", "wrong one", "right one"), card("l2", "wrong two", "right two"), card("l3", "wrong three", "right three")] },
    { kind: "wrapup", activities: [] },
  ],
  wrapup: { key: [{ en: "Right one.", te: "సరైనది." }], tryToday: { en: "Try it.", te: "ప్రయత్నించండి." }, words: [{ en: "word", te: "పదం" }] },
};

const press = (name: RegExp) => fireEvent.click(screen.getByRole("button", { name }));

beforeEach(() => updateSettings({ learnIn: "en" }));

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});

describe("Player saves progress", () => {
  it("resumes at the activity the learner left (a reload)", () => {
    const first = render(<Player day={day} />);
    press(/^Start/);
    press(/^Continue/); // l1 viewed
    expect(screen.getByText("right two")).toBeTruthy();
    expect(getProgress().position?.activityId).toBe("tiny.l2");
    expect(Object.keys(getProgress().activities)).toEqual(["tiny.l1"]);
    first.unmount();

    render(<Player day={day} />);
    expect(screen.getByText("right two")).toBeTruthy(); // not the intro, not l1
    expect(screen.getByRole("progressbar").getAttribute("aria-valuenow")).toBe("1");
  });

  it("finishing completes the day, shows the complete screen and keeps the completion on replay", () => {
    render(<Player day={day} />);
    press(/^Start/);
    for (let i = 0; i < 3; i++) press(/^Continue/);
    expect(screen.getByRole("heading", { name: /complete/i })).toBeTruthy();
    expect(getProgress().completed.tiny).toMatchObject({ total: 3, correct: 3 });
    expect(getProgress().activities).toEqual({});
    expect(getProgress().position).toBeUndefined();
    expect(getProgress().practiceDays.length).toBe(1);
    expect(screen.getByText("Right one.")).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Share this lesson/ })).toBeTruthy();

    press(/^Review today's lesson/); // a replay starts at the beginning
    expect(screen.getByRole("heading", { name: /Learn/ })).toBeTruthy();
    press(/^Start/);
    press(/^Continue/);
    expect(getProgress().completed.tiny).toBeTruthy();
    expect(getProgress().activities).toEqual({}); // nothing from the replay is saved
  });

  it("starts at the end when every activity is done but the day was not finished", () => {
    localStorage.setItem(
      "englisheasy.progress.v1",
      JSON.stringify({
        version: 1,
        activities: Object.fromEntries(["l1", "l2", "l3"].map((id) => [`tiny.${id}`, { correct: true, attempts: 1, at: "t" }])),
        completed: {}, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: "t",
      }),
    );
    render(<Player day={day} />);
    expect(screen.getByRole("heading", { name: /complete/i })).toBeTruthy();
    expect(getProgress().completed.tiny).toBeTruthy();
  });
});

describe("LessonComplete", () => {
  it("shows Day N from the course position, with confetti and the share button", () => {
    const real = { ...day, id: "sentence-basics" };
    render(<LessonComplete day={real} onReview={vi.fn()} />);
    expect(screen.getByRole("heading", { name: "Day 1 Complete!" })).toBeTruthy();
    expect(screen.getByTestId("confetti").className).toContain("motion-reduce:hidden");
  });

  it("shares with the share sheet when the phone has one, else copies the link", async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", { value: share, configurable: true });
    render(<LessonComplete day={day} onReview={vi.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: /^Share this lesson/ }));
    await vi.waitFor(() => expect(share).toHaveBeenCalled());
    expect(share.mock.calls[0][0]).toMatchObject({ url: `${location.origin}/lessons/tiny`, text: expect.stringContaining("Free") });
    Object.defineProperty(navigator, "share", { value: undefined, configurable: true });

    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { value: { writeText }, configurable: true });
    fireEvent.click(screen.getByRole("button", { name: /^Share this lesson/ }));
    await vi.waitFor(() => expect(writeText).toHaveBeenCalledWith(`${location.origin}/lessons/tiny`));
    expect(await screen.findByRole("status")).toBeTruthy();
  });
});

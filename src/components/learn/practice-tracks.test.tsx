import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { completeDay } from "@/learning/progress";
import { getProgress, updateProgress, useProgress } from "@/lib/progress-store";
import { updateSettings } from "@/lib/settings-store";
import { fixtureCourse, makePlayable, standardShape } from "../../../test/fixtures/course";
import type { Course } from "@/learning/recommend";
import { Home } from "./Home";
import { Journey } from "./Journey";
import { PracticeAgain, PracticeHub, PracticeRolePlays, PracticeSentences } from "./Practice";
import { MyTracks } from "./Tracks";

const NOW = "2026-11-07T10:00:00.000Z";
const written = ["a1", "a2", "b1", "g1", "g2"];

beforeEach(() => {
  localStorage.clear();
  updateProgress(() => ({ version: 1, activities: {}, completed: {}, mistakes: {}, practiceDays: [], tracks: [], tracksAsked: false, updatedAt: "x" }));
  updateSettings({ learnIn: "en", onboarded: true });
  vi.stubGlobal(
    "fetch",
    vi.fn(async (url: string) => {
      const id = decodeURIComponent(url.split("/").pop()!.replace(".json", ""));
      const day = makePlayable(id, standardShape);
      day.sections.splice(day.sections.length - 1, 0, { kind: "speak", activities: [{ id: `${id}.rep`, type: "repeat", say: `Say ${id}.`, te: "చెప్పు" }] });
      day.wrapup = { key: [{ en: `Key of ${id}.`, te: "కీ" }], tryToday: { en: "t", te: "t తె" }, words: [] };
      return { ok: true, json: async () => day };
    }),
  );
});

const finish = (...ids: string[]) => updateProgress((p) => ids.reduce((acc, id) => completeDay(acc, makePlayable(id, standardShape), NOW), p));

describe("tracks (fixture course: one track released)", () => {
  it("is hidden before the offer week and with nothing released", async () => {
    const first = render(<Home course={fixtureCourse} written={written} />);
    await screen.findByText(/Week 12 • Day/);
    expect(screen.queryByText("Want extra lessons for your life?")).toBeNull();

    const unreleased: Course = { ...fixtureCourse, tracks: fixtureCourse.tracks.map((t) => ({ ...t, weeks: t.weeks.map((w) => ({ ...w, released: false, days: [] })) })) };
    first.unmount();
    finish("a1", "a2");
    render(<Home course={unreleased} written={written} />);
    await screen.findAllByText("Welcome back");
    expect(screen.queryByText("Want extra lessons for your life?")).toBeNull();
  });

  it("offers only released tracks at Week 13, saves the choice, then suggests the track lesson", async () => {
    finish("a1", "a2");
    render(<Home course={fixtureCourse} written={written} />);
    const region = await screen.findByRole("region", { name: "Want extra lessons for your life?" });
    expect(within(region).getByRole("button", { name: /Grandchildren/ })).toBeTruthy();
    expect(within(region).queryByRole("button", { name: /Abroad/ })).toBeNull();
    const save = within(region).getByRole("button", { name: "Save" }) as HTMLButtonElement;
    expect(save.disabled).toBe(true);
    fireEvent.click(within(region).getByRole("button", { name: /Grandchildren/ }));
    fireEvent.click(save);
    await waitFor(() => expect(getProgress().tracks).toEqual(["grandchildren"]));
    expect(getProgress().tracksAsked).toBe(true);
    expect(screen.queryByText("Want extra lessons for your life?")).toBeNull();
    const suggestion = await screen.findByRole("region", { name: "Your extra lesson" });
    expect(within(suggestion).getByText("g1")).toBeTruthy();
    expect(within(suggestion).getByRole("link", { name: "Start extra lesson" }).getAttribute("href")).toBe("/learn/play?l=g1");
  });

  it("None of these asks once and suggests nothing", async () => {
    finish("a1", "a2");
    render(<Home course={fixtureCourse} written={written} />);
    fireEvent.click(await screen.findByRole("button", { name: "None of these" }));
    await waitFor(() => expect(getProgress()).toMatchObject({ tracks: [], tracksAsked: true }));
    expect(screen.queryByRole("region", { name: "Your extra lesson" })).toBeNull();
  });

  it("My tracks in Settings toggles a track; Journey lists chosen tracks", async () => {
    const { unmount } = render(<MyTracksHarness />);
    fireEvent.click(await screen.findByRole("button", { name: /Grandchildren/ }));
    await waitFor(() => expect(getProgress().tracks).toEqual(["grandchildren"]));
    expect(screen.getByRole("button", { name: /Grandchildren/ }).getAttribute("aria-pressed")).toBe("true");
    unmount();

    render(<Journey course={fixtureCourse} written={written} />);
    const section = await screen.findByRole("region", { name: "My tracks" });
    expect(within(section).getByText("Grandchildren")).toBeTruthy();
    fireEvent.click(within(section).getByRole("button", { name: /T1.*Week 1/ }));
    expect(within(section).getByRole("link", { name: /g1/ })).toBeTruthy();
  });

  it("shows nothing for My tracks when no track is released", () => {
    const none: Course = { ...fixtureCourse, tracks: fixtureCourse.tracks.map((t) => ({ ...t, weeks: [{ ...t.weeks[0], released: false, days: [] }] })) };
    const progress = getProgress();
    const { container } = render(<MyTracks course={none} progress={progress} />);
    expect(container.innerHTML).toBe("");
  });
});

function MyTracksHarness() {
  const progress = useProgress();
  return progress ? <MyTracks course={fixtureCourse} progress={progress} /> : null;
}

describe("Practice", () => {
  it("lists a mistake in Practice again and removes it after a correct answer", async () => {
    finish("a1");
    updateProgress((p) => ({ ...p, mistakes: { "a1.practice1": NOW } }));
    render(<PracticeAgain />);
    expect(await screen.findByText("1 left")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    fireEvent.click(await screen.findByRole("button", { name: "a" })); // option 0 is right
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    await waitFor(() => expect(getProgress().mistakes).toEqual({}));
    fireEvent.click(await screen.findByRole("button", { name: /^Continue/ }));
    expect(await screen.findByText("Practice complete")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Done" }));
    expect(await screen.findByText("0 left")).toBeTruthy();
  });

  it("keeps a mistake that is answered wrong again", async () => {
    finish("a1");
    updateProgress((p) => ({ ...p, mistakes: { "a1.practice1": NOW } }));
    render(<PracticeAgain />);
    fireEvent.click(await screen.findByRole("button", { name: "Start" }));
    fireEvent.click(await screen.findByRole("button", { name: "b" }));
    fireEvent.click(screen.getByRole("button", { name: /^Check/ }));
    expect((await screen.findAllByText(/Almost|Try again/)).length).toBeGreaterThan(0);
    expect(Object.keys(getProgress().mistakes)).toEqual(["a1.practice1"]);
  });

  it("says so when there is nothing to practice again", async () => {
    render(<PracticeAgain />);
    expect(await screen.findByText("Nothing to practice again. Well done!")).toBeTruthy();
  });

  it("My Sentences lists the key sentences of finished lessons only", async () => {
    finish("a1");
    render(<PracticeSentences />);
    expect(await screen.findByText("Key of a1.")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Say it: Key of a1." })).toBeTruthy();
    expect(screen.queryByText("Key of a2.")).toBeNull();
  });

  it("asks to finish a lesson first when none is finished", async () => {
    render(<PracticeSentences />);
    expect(await screen.findByText("Finish a lesson first, and it will appear here.")).toBeTruthy();
  });

  it("the hub shows the five pages with counts", async () => {
    finish("a1");
    updateProgress((p) => ({ ...p, mistakes: { "a1.practice1": NOW } }));
    render(<PracticeHub />);
    const links = await screen.findAllByRole("link");
    expect(links.map((l) => l.getAttribute("href"))).toEqual(["/learn/practice/review", "/learn/practice/again", "/learn/practice/roleplays", "/learn/practice/sentences", "/learn/practice/speaking"]);
    expect(within(links[1]).getByText("1")).toBeTruthy(); // the count badge
  });

  it("Role plays shows the empty state when no finished day has one", async () => {
    finish("a1");
    render(<PracticeRolePlays />);
    expect(await screen.findByText("Finish a lesson first, and it will appear here.")).toBeTruthy();
  });
});

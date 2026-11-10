import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

const push = vi.fn();
const pushNow = vi.fn().mockResolvedValue("ok");
vi.mock("next/navigation", () => ({ useRouter: () => ({ push }) }));
vi.mock("@/lib/auth-client", () => ({ authClient: { useSession: vi.fn() } }));
vi.mock("@/lib/sync", () => ({ pushNow: () => pushNow() }));

import { course } from "@/content/course";
import { trackOfferKey } from "@/learning/recommend";
import { getProgress, updateProgress } from "@/lib/progress-store";
import { getSettings, updateSettings } from "@/lib/settings-store";
import { StartOverView } from "./StartOver";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
beforeEach(() => {
  push.mockClear();
  pushNow.mockClear();
  updateSettings({ learnIn: "en", theme: "dark", onboarded: true, dismissed: [trackOfferKey("abroad"), "save-progress-card"] });
  updateProgress((p) => ({
    ...p,
    completed: { "sentence-basics": { at: "2026-11-08T10:00:00.000Z", correct: 9, total: 10 } },
    tracks: ["abroad"],
    tracksAsked: true,
    tripSoon: true,
    practiceDays: ["2026-11-08"],
    updatedAt: "2026-11-08T10:00:00.000Z",
  }));
});

const open = () => fireEvent.click(screen.getByRole("button", { name: /^Reset progress/ }));
const confirm = () => fireEvent.click(screen.getAllByRole("button", { name: /^Reset progress/ }).at(-1)!);

describe("Start over", () => {
  it("asks first; Cancel changes nothing", () => {
    render(<StartOverView account={{ kind: "signedOut" }} course={course} />);
    open();
    expect(screen.getByText(/clears your progress on this phone and starts again/)).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /^Cancel/ }));
    expect(getProgress().completed).not.toEqual({});
    expect(push).not.toHaveBeenCalled();
  });

  it("signed out: clears this phone only (no reset time), goals included, and the welcome asks again", () => {
    render(<StartOverView account={{ kind: "signedOut" }} course={course} />);
    open();
    confirm();
    const p = getProgress();
    expect(p).toMatchObject({ completed: {}, activities: {}, practiceDays: [], tracks: [], tracksAsked: false });
    expect(p.tripSoon).toBeUndefined();
    expect(p.resetAt).toBeUndefined();
    expect(getSettings()).toMatchObject({ onboarded: false, theme: "dark", dismissed: ["save-progress-card"] });
    expect(pushNow).not.toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/learn");
  });

  it("signed in: names the account, keeps the reset time and sends it to the account at once", () => {
    render(<StartOverView account={{ kind: "signedIn", name: "Kiran", email: "kiran@x.com", image: null }} course={course} />);
    open();
    expect(screen.getByText(/in your account \(kiran@x.com\)/)).toBeTruthy();
    confirm();
    expect(getProgress().completed).toEqual({});
    expect(getProgress().resetAt).toEqual(expect.any(String));
    expect(pushNow).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith("/learn");
  });

  it("waits for the account before it can be used", () => {
    render(<StartOverView account={{ kind: "loading" }} course={course} />);
    expect(screen.getByRole("button", { name: /^Reset progress/ }).hasAttribute("disabled")).toBe(true);
  });
});

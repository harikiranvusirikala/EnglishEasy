import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SETTINGS_KEY } from "@/learning/settings";

const reminders = vi.hoisted(() => ({
  mode: "ready" as string | null,
  hour: null as number | null | undefined,
  enable: vi.fn(async (): Promise<string> => "on"),
  disable: vi.fn(async () => {}),
  refresh: vi.fn(async () => {}),
}));
vi.mock("@/lib/reminders", () => ({
  useReminderMode: () => reminders.mode,
  useReminderHour: () => reminders.hour,
  enableReminder: reminders.enable,
  disableReminder: reminders.disable,
  refreshReminder: reminders.refresh,
}));

import { ReminderCard, ReminderSettings, ReminderShell } from "./Reminder";

beforeEach(() => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify({ learnIn: "en" })); // BiText shows the Learn-in language
  reminders.mode = "ready";
  reminders.hour = null;
  reminders.enable.mockClear().mockResolvedValue("on");
  reminders.disable.mockClear();
  reminders.refresh.mockClear();
});

describe("ReminderSettings", () => {
  it("offers Off and the four times, with a note about the permission first", () => {
    render(<ReminderSettings />);
    expect(screen.getByText(/will ask permission/)).toBeTruthy();
    for (const name of [/^Off/, /^Morning 8:00/, /^Afternoon 1:00/, /^Evening 6:00/, /^Night 8:00/]) expect(screen.getByRole("button", { name })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Off/ }).getAttribute("aria-pressed")).toBe("true");
  });

  it("subscribes with the chosen hour and the Learn-in language, and Off unsubscribes", async () => {
    render(<ReminderSettings />);
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /^Evening 6:00/ })));
    expect(reminders.enable).toHaveBeenCalledWith(18, "en", null);
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /^Off/ })));
    expect(reminders.disable).toHaveBeenCalled();
  });

  it("explains a blocked permission", async () => {
    reminders.enable.mockResolvedValue("denied");
    render(<ReminderSettings />);
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /^Morning/ })));
    expect(screen.getByRole("alert").textContent).toMatch(/blocked/);
  });

  it("asks iPhone users outside the installed app to install first", () => {
    reminders.mode = "install";
    render(<ReminderSettings />);
    expect(screen.getByText("Install the app first to get reminders")).toBeTruthy();
    expect(screen.getByText(/Add to Home Screen/)).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Morning/ })).toBeNull();
  });

  it("says so when the browser has no push", () => {
    reminders.mode = "unsupported";
    render(<ReminderSettings />);
    expect(screen.getByText("This browser cannot show reminders.")).toBeTruthy();
  });
});

describe("ReminderCard", () => {
  it("waits for a finished lesson", () => {
    render(<ReminderCard finishedLessons={0} />);
    expect(screen.queryByText("Want a reminder every day?")).toBeNull();
  });

  it("shows after the first lesson, goes away once a time is chosen, and never returns", async () => {
    render(<ReminderCard finishedLessons={1} />);
    expect(screen.getByText("Want a reminder every day?")).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Off/ })).toBeNull();
    await act(async () => fireEvent.click(screen.getByRole("button", { name: /^Night 8:00/ })));
    expect(reminders.enable).toHaveBeenCalledWith(20, "en", null);
    expect(screen.queryByText("Want a reminder every day?")).toBeNull();
    expect(JSON.parse(localStorage.getItem(SETTINGS_KEY)!).dismissed).toContain("reminder-card");
  });

  it("Not now hides it for good", () => {
    render(<ReminderCard finishedLessons={3} />);
    fireEvent.click(screen.getByRole("button", { name: /^Not now/ }));
    expect(screen.queryByText("Want a reminder every day?")).toBeNull();
  });

  it("is hidden when reminders are already on or unavailable", () => {
    reminders.hour = 8;
    const { rerender } = render(<ReminderCard finishedLessons={1} />);
    expect(screen.queryByText("Want a reminder every day?")).toBeNull();
    reminders.hour = null;
    reminders.mode = "install";
    rerender(<ReminderCard finishedLessons={1} />);
    expect(screen.queryByText("Want a reminder every day?")).toBeNull();
  });
});

describe("ReminderShell", () => {
  it("refreshes the server copy only while reminders are on", () => {
    const { rerender } = render(<ReminderShell />);
    expect(reminders.refresh).not.toHaveBeenCalled();
    reminders.hour = 13;
    rerender(<ReminderShell />);
    expect(reminders.refresh).toHaveBeenCalledWith(13, "en", null);
  });
});

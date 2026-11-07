import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { REPORTS_KEY } from "@/lib/reports";
import { updateSettings } from "@/lib/settings-store";
import { ReportButton } from "./ReportButton";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () {
    this.setAttribute("open", "");
  };
  HTMLDialogElement.prototype.close = function () {
    this.removeAttribute("open");
  };
});
beforeEach(() => {
  updateSettings({ learnIn: "en" });
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ status: 200 }));
});

describe("ReportButton", () => {
  it("reports with a tapped reason, says thank you and is not offered again for that activity", () => {
    const { rerender } = render(<ReportButton dayId="d" activityId="d.a" />);
    fireEvent.click(screen.getByRole("button", { name: "Report a problem" }));
    fireEvent.click(screen.getByRole("button", { name: /^Audio problem/ }));
    expect(screen.getByRole("status").textContent).toContain("Thank you");
    expect(screen.queryByRole("button", { name: "Report a problem" })).toBeNull();
    const saved = JSON.parse(localStorage.getItem(REPORTS_KEY) ?? "{}");
    expect(saved.reported).toEqual(["d.a"]);
    expect(saved.queue[0]).toMatchObject({ activityId: "d.a", dayId: "d", reason: "audio", learnIn: "en" });

    rerender(<ReportButton dayId="d" activityId="d.b" />);
    expect(screen.getByRole("button", { name: "Report a problem" })).toBeTruthy();
    rerender(<ReportButton dayId="d" activityId="d.a" />);
    expect(screen.queryByRole("button", { name: "Report a problem" })).toBeNull();
  });

  it("offers nothing off an activity", () => {
    render(<ReportButton dayId="d" activityId={null} />);
    expect(screen.queryByRole("button", { name: "Report a problem" })).toBeNull();
  });
});

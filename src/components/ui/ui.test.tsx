import { fireEvent, render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, it, vi } from "vitest";
import { updateSettings } from "@/lib/settings-store";
import { Bi } from "./Bi";
import { BiText } from "./BiText";
import { Dialog } from "./Dialog";
import { ProgressBar } from "./ProgressBar";
import { SegmentedControl } from "./SegmentedControl";
import { Skeleton } from "./Skeleton";
import { StepList } from "./StepList";
import { Switch } from "./Switch";
import { Toast } from "./Toast";
import { ICON_NAMES, Icon } from "./icons";
import { button } from "./button";

const label = { en: "Continue", te: "కొనసాగించు" };
const same = { en: "A+", te: "A+" };

describe("Bi", () => {
  it("is English only, in Telugu mode too (simple words stay English; owner's decision 2026-11-08)", () => {
    updateSettings({ learnIn: "te" });
    const { container } = render(<Bi label={label} />);
    expect(container.textContent).toBe("Continue");
    expect(container.querySelector('[lang="te"]')).toBeNull();
  });

  it("ignores a forced mode", () => {
    const { container } = render(
      <>
        <Bi label={label} mode="te" />
        <Bi label={same} mode="te" />
      </>,
    );
    expect(container.textContent).toBe("ContinueA+");
  });
});

describe("BiText", () => {
  it("follows Learn in", () => {
    const text = { en: "Use the past form.", te: "past form వాడండి." };
    const { container, rerender } = render(<BiText text={text} />);
    expect(container.textContent).toBe(text.te);
    expect(container.querySelector('[lang="te"]')).not.toBeNull();
    updateSettings({ learnIn: "en" });
    rerender(<BiText text={text} />);
    expect(container.textContent).toBe(text.en);
    expect(container.querySelector('[lang="te"]')).toBeNull();
  });
});

describe("ProgressBar", () => {
  it("has a name and values", () => {
    render(<ProgressBar label="Lesson progress" value={3} max={12} />);
    const bar = screen.getByRole("progressbar", { name: "Lesson progress" });
    expect(bar.getAttribute("aria-valuenow")).toBe("3");
    expect(bar.getAttribute("aria-valuemax")).toBe("12");
  });
  it("does not divide by zero or overflow", () => {
    const { container, rerender } = render(<ProgressBar label="p" value={0} max={0} />);
    expect((container.querySelector("[style]") as HTMLElement).style.width).toBe("0%");
    rerender(<ProgressBar label="p" value={9} max={3} />);
    expect((container.querySelector("[style]") as HTMLElement).style.width).toBe("100%");
  });
});

describe("StepList", () => {
  it("marks the current step and says every state in words", () => {
    render(
      <StepList
        steps={[
          { id: "a", label: { en: "Meet", te: "పరిచయం" }, state: "done" },
          { id: "b", label: { en: "Try", te: "ప్రయత్నం" }, state: "current" },
          { id: "c", label: { en: "Say", te: "చెప్ప���డి" }, state: "todo" },
        ]}
      />,
    );
    const items = screen.getAllByRole("listitem");
    expect(items[1].getAttribute("aria-current")).toBe("step");
    expect(items[0].textContent).toContain("Done");
    expect(items[1].textContent).toContain("In progress");
    expect(items[2].textContent).toContain("Not started");
  });
});

describe("Switch", () => {
  it("toggles and reports its state", () => {
    const onChange = vi.fn();
    const { rerender } = render(<Switch checked={false} onChange={onChange} label={{ en: "Auto-play", te: "ఆటో" }} hint={{ en: "Hint", te: "సూచన" }} />);
    const toggle = screen.getByRole("switch", { name: /Auto-play/ });
    expect(toggle.getAttribute("aria-checked")).toBe("false");
    fireEvent.click(toggle);
    expect(onChange).toHaveBeenCalledWith(true);
    rerender(<Switch checked onChange={onChange} label={{ en: "Auto-play", te: "ఆటో" }} />);
    expect(screen.getByRole("switch").getAttribute("aria-checked")).toBe("true");
  });
});

describe("SegmentedControl", () => {
  it("marks the chosen option and calls back with another", () => {
    const onChange = vi.fn();
    render(
      <SegmentedControl
        name="Theme"
        value="light"
        onChange={onChange}
        options={[
          { value: "light", label: { en: "Day", te: "పగలు" } },
          { value: "dark", label: { en: "Night", te: "రాత్రి" } },
        ]}
      />,
    );
    expect(screen.getByRole("group", { name: "Theme" })).toBeTruthy();
    expect(screen.getByRole("button", { name: /Day/ }).getAttribute("aria-pressed")).toBe("true");
    fireEvent.click(screen.getByRole("button", { name: /Night/ }));
    expect(onChange).toHaveBeenCalledWith("dark");
  });
});

describe("Skeleton, Toast, icons, button", () => {
  it("Skeleton is hidden from screen readers", () => {
    const { container } = render(<Skeleton className="h-8" />);
    expect(container.firstElementChild?.getAttribute("aria-hidden")).toBe("true");
  });
  it("Toast is a status", () => {
    render(<Toast>Saved.</Toast>);
    expect(screen.getByRole("status").textContent).toBe("Saved.");
  });
  it("every icon renders decoratively", () => {
    expect(ICON_NAMES).toEqual(
      expect.arrayContaining(["home", "map", "practice", "gear", "speaker", "turtle", "mic", "check", "retry", "close", "hint", "flag", "share", "chevron"]),
    );
    for (const name of ICON_NAMES) {
      const { container } = render(<Icon name={name} />);
      expect(container.querySelector("svg")?.getAttribute("aria-hidden")).toBe("true");
    }
  });
  it("every button uses design tokens (they follow Night by themselves) and keeps a 52px target", () => {
    for (const variant of ["primary", "secondary", "soft", "ghost", "accent", "danger"] as const) {
      for (const size of ["md", "lg", "pill"] as const) {
        const classes = button(variant, size);
        // A raw palette colour would need a dark: twin; buttons use tokens only.
        expect(classes).not.toMatch(/(?:^|\s)(?:bg|text|border)-(?:stone|teal|zinc|gray|emerald|amber|red)-\d/);
        expect(classes).toMatch(/min-h-1[234]/);
      }
    }
  });
});

describe("Dialog", () => {
  beforeAll(() => {
    // jsdom has no modal dialogs
    HTMLDialogElement.prototype.showModal = function () {
      this.setAttribute("open", "");
    };
    HTMLDialogElement.prototype.close = function () {
      this.removeAttribute("open");
    };
  });

  it("shows its title and content when open, and closes with Close", () => {
    const onClose = vi.fn();
    render(
      <Dialog open onClose={onClose} title="A dialog">
        <p>Body</p>
      </Dialog>,
    );
    expect(screen.getByRole("dialog", { name: "A dialog" })).toBeTruthy();
    expect(screen.getByText("Body")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(onClose).toHaveBeenCalled();
  });

  it("renders no content when closed", () => {
    render(
      <Dialog open={false} onClose={() => {}} title="A dialog">
        <p>Body</p>
      </Dialog>,
    );
    expect(screen.queryByText("Body")).toBeNull();
  });
});

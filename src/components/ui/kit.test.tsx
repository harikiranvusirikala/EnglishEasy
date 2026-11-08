import { readFileSync } from "node:fs";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { EmptyState } from "./EmptyState";
import { Logo, LogoMark } from "./Logo";
import { Menu, menuItem } from "./Menu";
import { PageHeader } from "./PageHeader";
import { ProgressRing } from "./ProgressRing";
import { badge } from "./badge";
import { ILLUSTRATION_NAMES, Illustration } from "@/components/illustrations/Illustration";

describe("design tokens", () => {
  const css = readFileSync("src/app/globals.css", "utf8");
  const block = (selector: string) => {
    const start = css.indexOf(`\n${selector} {`);
    if (start < 0) throw new Error(`no ${selector} block in globals.css`);
    const body = css.slice(start, css.indexOf("\n}", start));
    return new Set([...body.matchAll(/--([\w-]+):/g)].map((m) => m[1]));
  };
  it("every colour is defined for Day (:root) and for Night (.dark)", () => {
    const day = block(":root");
    const night = block(".dark");
    expect(day.size).toBeGreaterThan(30);
    expect([...day].filter((name) => !night.has(name))).toEqual([]);
    expect([...night].filter((name) => !day.has(name))).toEqual([]);
  });
  it("every token is exposed to Tailwind", () => {
    const theme = css.match(/@theme inline \{([\s\S]*?)\n\}/)?.[1] ?? "";
    for (const name of block(":root")) {
      if (name.endsWith("shadow")) continue; // exposed as --shadow-card / --shadow-raised
      expect(theme, name).toContain(`var(--${name})`);
    }
  });
});

describe("ProgressRing", () => {
  it("has a name and values, and shows its middle", () => {
    render(
      <ProgressRing label="Today's lesson" value={6} max={10}>
        <span>60%</span>
      </ProgressRing>,
    );
    const ring = screen.getByRole("progressbar", { name: "Today's lesson" });
    expect(ring.getAttribute("aria-valuenow")).toBe("6");
    expect(ring.getAttribute("aria-valuemax")).toBe("10");
    expect(screen.getByText("60%")).toBeTruthy();
  });
  it("does not divide by zero", () => {
    render(<ProgressRing label="Empty" value={0} max={0} />);
    expect(screen.getByRole("progressbar", { name: "Empty" })).toBeTruthy();
  });
});

describe("Menu", () => {
  const renderMenu = () =>
    render(
      <Menu label="Theme" buttonLabel="Theme" button="☀" buttonClassName="">
        {(close) => (
          <>
            <button type="button" role="menuitemradio" aria-checked={false} className={menuItem} onClick={close}>
              Day
            </button>
            <button type="button" role="menuitemradio" aria-checked className={menuItem} onClick={close}>
              Night
            </button>
          </>
        )}
      </Menu>,
    );

  it("opens on the button, focuses the checked item, moves with arrows and closes with Escape", () => {
    renderMenu();
    const opener = screen.getByRole("button", { name: "Theme" });
    expect(opener.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(opener);
    expect(screen.getByRole("menu", { name: "Theme" })).toBeTruthy();
    expect(document.activeElement?.textContent).toBe("Night");
    fireEvent.keyDown(document.activeElement!, { key: "ArrowDown" });
    expect(document.activeElement?.textContent).toBe("Day");
    fireEvent.keyDown(document.activeElement!, { key: "Escape" });
    expect(screen.queryByRole("menu")).toBeNull();
    expect(document.activeElement).toBe(opener);
  });

  it("closes when an item is chosen", () => {
    renderMenu();
    fireEvent.click(screen.getByRole("button", { name: "Theme" }));
    fireEvent.click(screen.getByRole("menuitemradio", { name: "Day" }));
    expect(screen.queryByRole("menu")).toBeNull();
  });
});

describe("Logo, illustrations, empty state, page header, badges", () => {
  it("the logo's drawings are decorative and the word is there", () => {
    const { container } = render(<Logo />);
    expect(container.querySelector("svg")?.getAttribute("aria-hidden")).toBe("true");
    expect(container.textContent).toContain("EnglishEasy");
    const mark = render(<LogoMark />).container.querySelector("svg");
    expect(mark?.getAttribute("aria-hidden")).toBe("true");
  });

  it("every illustration renders decoratively", () => {
    for (const name of ILLUSTRATION_NAMES) {
      const { container } = render(<Illustration name={name} />);
      expect(container.querySelector("svg")?.getAttribute("aria-hidden"), name).toBe("true");
    }
  });

  it("an empty state has its heading level, text and action", () => {
    render(
      <EmptyState as="h1" illustration="empty" title="Nothing here yet" action={<button type="button">Go</button>}>
        Later.
      </EmptyState>,
    );
    expect(screen.getByRole("heading", { level: 1, name: "Nothing here yet" })).toBeTruthy();
    expect(screen.getByText("Later.")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Go" })).toBeTruthy();
  });

  it("a page header is the page's h1", () => {
    render(<PageHeader title="Practice">Sentence</PageHeader>);
    expect(screen.getByRole("heading", { level: 1, name: "Practice" })).toBeTruthy();
  });

  it("badges use tokens only", () => {
    for (const tone of ["brand", "accent", "good", "neutral", "onBrand"] as const) {
      expect(badge(tone)).not.toMatch(/(?:^|\s)(?:bg|text)-(?:stone|teal|emerald|amber)-\d/);
    }
  });
});

import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SETTINGS_KEY } from "@/learning/settings";
import { SETTINGS_SCRIPT } from "./settings-script";
import { getSettings, updateSettings, useLearnIn, useSettings } from "./settings-store";

function Probe() {
  const settings = useSettings();
  const learnIn = useLearnIn();
  return <p>{settings ? `${settings.theme}|${settings.textSize}|${learnIn}` : "loading"}</p>;
}

describe("settings store", () => {
  it("reads the defaults, then saves, applies and announces a change", () => {
    render(<Probe />);
    expect(screen.getByText("system|A|te")).toBeTruthy();

    act(() => updateSettings({ theme: "dark", textSize: "A++", learnIn: "en" }));

    expect(screen.getByText("dark|A++|en")).toBeTruthy();
    const root = document.documentElement;
    expect(root.classList.contains("dark")).toBe(true);
    expect(root.style.fontSize).toBe("22px");
    expect(root.getAttribute("data-learn-in")).toBe("en");
    expect(JSON.parse(localStorage.getItem(SETTINGS_KEY)!)).toMatchObject({ theme: "dark", textSize: "A++", learnIn: "en" });
  });

  it("keeps the other settings when one changes", () => {
    act(() => updateSettings({ autoPlay: false }));
    act(() => updateSettings({ noSpeaking: true }));
    expect(getSettings()).toMatchObject({ autoPlay: false, noSpeaking: true });
  });

  it("picks up a change made in another tab", () => {
    render(<Probe />);
    act(() => {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ theme: "light", textSize: "A+", learnIn: "en" }));
      window.dispatchEvent(new StorageEvent("storage", { key: SETTINGS_KEY }));
    });
    expect(screen.getByText("light|A+|en")).toBeTruthy();
  });
});

describe("settings script (runs before first paint)", () => {
  it("applies saved Night, text size and Learn in", () => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ theme: "dark", textSize: "A+", learnIn: "en" }));
    new Function(SETTINGS_SCRIPT)();
    const root = document.documentElement;
    expect(root.classList.contains("dark")).toBe(true);
    expect(root.style.fontSize).toBe("20px");
    expect(root.getAttribute("data-learn-in")).toBe("en");
  });

  it("falls back to Day, the default size and Telugu when nothing (or junk) is saved", () => {
    localStorage.setItem(SETTINGS_KEY, "{nope");
    new Function(SETTINGS_SCRIPT)();
    const root = document.documentElement;
    expect(root.classList.contains("dark")).toBe(false);
    expect(root.style.fontSize).toBe("");
    expect(root.getAttribute("data-learn-in")).toBe("te");
  });
});

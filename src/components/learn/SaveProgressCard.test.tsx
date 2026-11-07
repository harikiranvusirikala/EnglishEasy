import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { markViewed } from "@/learning/progress";
import { updateProgress } from "@/lib/progress-store";
import { SETTINGS_KEY } from "@/learning/settings";
import { SaveProgressCard } from "./SaveProgressCard";

const account = vi.hoisted(() => ({ state: { kind: "signedOut" } as { kind: string } }));
vi.mock("@/lib/account", () => ({ useAccount: () => account.state }));
vi.mock("@/lib/auth-client", () => ({ authClient: { signIn: { social: vi.fn() } } }));

beforeEach(() => {
  account.state = { kind: "signedOut" };
});

describe("SaveProgressCard", () => {
  it("is hidden for a brand-new guest", () => {
    render(<SaveProgressCard />);
    expect(screen.queryByText("Save your progress with Google")).toBeNull();
  });

  it("shows for a guest with progress and hides for good once dismissed", async () => {
    act(() => updateProgress((p) => markViewed(p, "d.x", "2026-11-01T10:00:00.000Z")));
    render(<SaveProgressCard />);
    expect(await screen.findByRole("button", { name: /Sign in with Google/ })).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: /Not now/ }));
    expect(screen.queryByText("Save your progress with Google")).toBeNull();
    expect(JSON.parse(localStorage.getItem(SETTINGS_KEY)!).dismissed).toContain("save-progress-card");
  });

  it("is hidden once signed in", () => {
    updateProgress((p) => markViewed(p, "d.x", "2026-11-01T10:00:00.000Z"));
    account.state = { kind: "signedIn" };
    render(<SaveProgressCard />);
    expect(screen.queryByText("Save your progress with Google")).toBeNull();
  });
});

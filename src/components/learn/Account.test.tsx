import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("next/navigation", () => ({ useSearchParams: () => new URLSearchParams() }));
vi.mock("@/lib/auth-client", () => ({ authClient: { signIn: { social: vi.fn() }, signOut: vi.fn(), useSession: vi.fn() } }));

import { AccountView } from "./Account";

describe("AccountView", () => {
  it("shows a skeleton and no buttons while loading", () => {
    render(<AccountView state={{ kind: "loading" }} />);
    expect(screen.queryByRole("button")).toBeNull();
    expect(screen.queryByRole("heading")).toBeNull();
  });

  it("offers Sign in with Google when signed out", () => {
    render(<AccountView state={{ kind: "signedOut" }} />);
    expect(screen.getByRole("heading", { name: /^Account/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Sign in with Google/ })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Sign out/ })).toBeNull();
  });

  it("shows photo, name, email and Sign out when signed in", () => {
    render(<AccountView state={{ kind: "signedIn", name: "Hari Kiran", email: "h@x.com", image: "https://lh3.googleusercontent.com/a" }} />);
    expect(screen.getByText("Hari Kiran")).toBeTruthy();
    expect(screen.getByText("h@x.com")).toBeTruthy();
    expect(screen.getByRole("img", { name: /Google photo/ })).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Sign out/ })).toBeTruthy();
    expect(screen.queryByRole("button", { name: /^Sign in with Google/ })).toBeNull();
  });

  it("shows an initial instead of a photo when there is none", () => {
    render(<AccountView state={{ kind: "signedIn", name: "hari", email: "h@x.com", image: null }} />);
    expect(screen.queryByRole("img")).toBeNull();
    expect(screen.getByText("H")).toBeTruthy();
  });
});

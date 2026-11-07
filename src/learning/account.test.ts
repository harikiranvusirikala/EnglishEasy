import { describe, expect, it } from "vitest";
import { accountState, firstName, greetWithName, SAVE_CARD_ID, saveCardVisible, signInErrorKind } from "./account";
import { emptyProgress } from "./progress";

const user = (u: object) => ({ data: { user: u }, isPending: false });

describe("accountState", () => {
  it("is loading before the session is known, never signed out", () => {
    expect(accountState(null)).toEqual({ kind: "loading" });
    expect(accountState({ data: null, isPending: true })).toEqual({ kind: "loading" });
  });

  it("is signed out when there is no user", () => {
    expect(accountState({ data: null, isPending: false })).toEqual({ kind: "signedOut" });
  });

  it("is signed in with name, email and photo", () => {
    expect(accountState(user({ name: "Hari Kiran", email: "h@x.com", image: "https://lh3.googleusercontent.com/a" }))).toEqual({
      kind: "signedIn",
      name: "Hari Kiran",
      email: "h@x.com",
      image: "https://lh3.googleusercontent.com/a",
    });
  });

  it("falls back to the email without a name, and drops a photo that is not https", () => {
    expect(accountState(user({ name: " ", email: "h@x.com", image: "http://evil/x.png" }))).toEqual({
      kind: "signedIn",
      name: "h@x.com",
      email: "h@x.com",
      image: null,
    });
  });
});

describe("greeting", () => {
  it("uses the first word of the Google name", () => {
    expect(firstName(accountState(user({ name: "Hari Kiran", email: "h@x.com" })))).toBe("Hari");
    expect(firstName({ kind: "signedOut" })).toBeNull();
    expect(firstName({ kind: "loading" })).toBeNull();
  });

  it("adds the name to both languages, or leaves the greeting alone", () => {
    const g = { en: "Good morning", te: "శుభోదయం" };
    expect(greetWithName(g, "Hari")).toEqual({ en: "Good morning, Hari", te: "శుభోదయం, Hari" });
    expect(greetWithName(g, null)).toBe(g);
  });
});

describe("signInErrorKind", () => {
  it("maps Better Auth's error codes", () => {
    expect(signInErrorKind(null)).toBeNull();
    expect(signInErrorKind("access_denied")).toBe("cancelled");
    expect(signInErrorKind("email_not_verified")).toBe("emailNotVerified");
    expect(signInErrorKind("state_mismatch")).toBe("other");
  });
});

describe("saveCardVisible", () => {
  const out = { kind: "signedOut" } as const;
  const done = { ...emptyProgress(), completed: { d: { at: "2026-11-01T10:00:00.000Z", correct: 1, total: 1 } } };
  it("shows for a guest who has done something", () => {
    expect(saveCardVisible(out, done, [])).toBe(true);
    expect(saveCardVisible(out, { ...emptyProgress(), activities: { "d.x": { correct: true, attempts: 1, at: "t" } } }, [])).toBe(true);
  });
  it("hides for new learners, signed-in learners, while loading, and once dismissed", () => {
    expect(saveCardVisible(out, emptyProgress(), [])).toBe(false);
    expect(saveCardVisible({ kind: "signedIn", name: "H", email: "h@x", image: null }, done, [])).toBe(false);
    expect(saveCardVisible({ kind: "loading" }, done, [])).toBe(false);
    expect(saveCardVisible(out, done, [SAVE_CARD_ID])).toBe(false);
  });
});

import { describe, expect, it } from "vitest";
import { accountState, firstName, greetWithName, signInErrorKind } from "./account";

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

import { describe, expect, it } from "vitest";
import { isSiteAdmin, normalizeEmail } from "./site-admin";

describe("who sees /admin", () => {
  const env = { SITE_ADMIN_EMAILS: " owner@example.com , Hari.Kiran+site@gmail.com" };

  it("only the listed addresses", () => {
    expect(isSiteAdmin("owner@example.com", env)).toBe(true);
    expect(isSiteAdmin("someone@example.com", env)).toBe(false);
  });

  it("ignores case, and Gmail dots and +tags", () => {
    expect(isSiteAdmin("OWNER@example.com", env)).toBe(true);
    expect(isSiteAdmin("harikiran@googlemail.com", env)).toBe(true);
    expect(normalizeEmail(" A.B+x@Gmail.com ")).toBe("ab@gmail.com");
    expect(normalizeEmail("a.b+x@example.com")).toBe("a.b+x@example.com");
  });

  it("nobody without the variable, or with an empty one", () => {
    expect(isSiteAdmin("owner@example.com", {})).toBe(false);
    expect(isSiteAdmin("owner@example.com", { SITE_ADMIN_EMAILS: " , " })).toBe(false);
    expect(isSiteAdmin("", { SITE_ADMIN_EMAILS: "," })).toBe(false);
  });
});

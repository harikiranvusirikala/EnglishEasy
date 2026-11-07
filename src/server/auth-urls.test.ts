import { describe, expect, test } from "vitest";
import { authUrls } from "./auth-urls";

const vercel = {
  VERCEL_URL: "english-easy-abc123-team.vercel.app",
  VERCEL_BRANCH_URL: "english-easy-git-feature-team.vercel.app",
  VERCEL_PROJECT_PRODUCTION_URL: "english-easy.vercel.app",
};

describe("authUrls", () => {
  test("locally, BETTER_AUTH_URL is the only origin and there is no proxy", () => {
    expect(authUrls({ BETTER_AUTH_URL: "http://localhost:3000" })).toEqual({
      baseURL: "http://localhost:3000",
      trustedOrigins: ["http://localhost:3000"],
    });
  });

  test("a trailing slash or path is dropped", () => {
    expect(authUrls({ BETTER_AUTH_URL: "http://localhost:3100/" }).trustedOrigins).toEqual(["http://localhost:3100"]);
  });

  test("in production, BETTER_AUTH_URL wins and the production host turns the proxy on", () => {
    expect(authUrls({ ...vercel, VERCEL_ENV: "production", BETTER_AUTH_URL: "https://english-easy.vercel.app" })).toEqual({
      baseURL: "https://english-easy.vercel.app",
      trustedOrigins: ["https://english-easy.vercel.app"],
      productionURL: "https://english-easy.vercel.app",
    });
  });

  test("in production without BETTER_AUTH_URL, the production host is used (an empty value counts as unset)", () => {
    expect(authUrls({ ...vercel, VERCEL_ENV: "production", BETTER_AUTH_URL: "" }).baseURL).toBe("https://english-easy.vercel.app");
  });

  test("on a preview, exactly the branch and deployment hosts are trusted, whatever BETTER_AUTH_URL says", () => {
    const urls = authUrls({ ...vercel, VERCEL_ENV: "preview", BETTER_AUTH_URL: "https://english-easy.vercel.app" });
    expect(urls).toEqual({
      baseURL: "https://english-easy-git-feature-team.vercel.app",
      trustedOrigins: ["https://english-easy-git-feature-team.vercel.app", "https://english-easy-abc123-team.vercel.app"],
      productionURL: "https://english-easy.vercel.app",
    });
  });

  test("a preview without a branch host trusts only its deployment host", () => {
    const { VERCEL_BRANCH_URL: _unused, ...noBranch } = vercel;
    void _unused;
    expect(authUrls({ ...noBranch, VERCEL_ENV: "preview" }).trustedOrigins).toEqual(["https://english-easy-abc123-team.vercel.app"]);
  });

  test("never trusts a wildcard", () => {
    for (const env of [{ ...vercel, VERCEL_ENV: "preview" }, { ...vercel, VERCEL_ENV: "production", BETTER_AUTH_URL: "https://english-easy.vercel.app" }]) {
      expect(authUrls(env).trustedOrigins.join(" ")).not.toContain("*");
    }
  });

  test("fails loudly when nothing says where the app runs", () => {
    expect(() => authUrls({})).toThrow(/BETTER_AUTH_URL is not set/);
    expect(() => authUrls({ VERCEL_ENV: "preview" })).toThrow(/VERCEL_URL is not set/);
  });
});

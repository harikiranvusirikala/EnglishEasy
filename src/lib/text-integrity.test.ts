import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// A broken save can turn a Telugu letter into U+FFFD (the replacement character), which then shows on screen
// (owner report, 2026-11-09: "ఫోన్" on the privacy page). No source or doc file should ever contain it.

const ROOTS = ["src", "e2e", "scripts", "docs"];
const TEXT = /\.(ts|tsx|mts|js|css|md|json)$/;

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const path = join(dir, e.name);
    return e.isDirectory() ? files(path) : TEXT.test(e.name) ? [path] : [];
  });
}

describe("text integrity", () => {
  it("has no U+FFFD replacement characters in source or docs", () => {
    const broken = ROOTS.flatMap((root) => files(join(process.cwd(), root)))
      .filter((file) => readFileSync(file, "utf8").includes("\uFFFD"))
      .map((file) => file.slice(process.cwd().length + 1));
    expect(broken).toEqual([]);
  });
});

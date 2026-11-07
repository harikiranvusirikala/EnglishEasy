import { describe, expect, it } from "vitest";
import { random, shuffle } from "./shuffle";

describe("shuffle", () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  it("is deterministic for a seed", () => {
    expect(shuffle(items, "x")).toEqual(shuffle(items, "x"));
    expect(random("x")()).toBe(random("x")());
  });
  it("keeps every item and leaves the input alone", () => {
    const copy = [...items];
    expect([...shuffle(items, "y")].sort()).toEqual(items);
    expect(items).toEqual(copy);
  });
  it("differs between seeds", () => {
    expect(shuffle(items, "a")).not.toEqual(shuffle(items, "b"));
  });
});

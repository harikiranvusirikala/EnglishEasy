import { describe, expect, it, vi } from "vitest";
import { emptyProgress, recordAnswer, type Progress } from "@/learning/progress";
import { pull, push, type SyncDeps } from "./sync";

const T = (n: number) => `2026-11-0${n}T10:00:00.000Z`;

function setup(local: Progress, server: { status?: number; progress?: Progress | null; putStatus?: number; offline?: boolean }) {
  let current = local;
  let stored = server.progress ?? null;
  const calls: string[] = [];
  const fetchMock = vi.fn(async (_url: string, init?: RequestInit) => {
    if (server.offline) throw new TypeError("offline");
    if (init?.method === "PUT") {
      calls.push("PUT");
      if ((server.putStatus ?? 200) === 200) stored = JSON.parse(init.body as string);
      return new Response("{}", { status: server.putStatus ?? 200 });
    }
    calls.push("GET");
    if (server.status && server.status !== 200) return new Response("{}", { status: server.status });
    return new Response(JSON.stringify({ progress: stored }), { status: 200 });
  });
  const deps: SyncDeps = {
    fetch: fetchMock as unknown as typeof fetch,
    get: () => current,
    update: (change) => {
      current = change(current);
    },
  };
  return { deps, calls, local: () => current, stored: () => stored };
}

describe("pull", () => {
  it("merges the account into the phone and sends the result back", async () => {
    const phone = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    const account = recordAnswer(emptyProgress(T(1)), "b.y", true, T(3));
    const s = setup(phone, { progress: account });
    const result = await pull(s.deps);
    expect(result.status).toBe("ok");
    expect(Object.keys(s.local().activities).sort()).toEqual(["a.x", "b.y"]);
    expect(Object.keys(s.stored()!.activities).sort()).toEqual(["a.x", "b.y"]);
    expect(s.calls).toEqual(["GET", "PUT"]);
  });

  it("a guest's progress becomes the account's the first time", async () => {
    const phone = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    const s = setup(phone, { progress: null });
    expect((await pull(s.deps)).status).toBe("ok");
    expect(s.stored()).toEqual(phone);
  });

  it("does not send anything when both sides already match", async () => {
    const same = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    const s = setup(same, { progress: same });
    expect((await pull(s.deps)).status).toBe("ok");
    expect(s.calls).toEqual(["GET"]);
  });

  it("pulling only what the account has saves it on the phone and sends nothing", async () => {
    const account = recordAnswer(emptyProgress(T(1)), "b.y", true, T(3));
    const s = setup(emptyProgress(T(1)), { progress: account });
    await pull(s.deps);
    expect(s.local().activities["b.y"]).toBeDefined();
    expect(s.calls).toEqual(["GET"]);
    expect(s.stored()).toEqual(s.local());
  });

  it("signed out, offline or failing: reports it and changes nothing", async () => {
    const phone = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    expect((await pull(setup(phone, { status: 401 }).deps)).status).toBe("signed-out");
    expect((await pull(setup(phone, { status: 500 }).deps)).status).toBe("failed");
    const offline = setup(phone, { offline: true });
    expect((await pull(offline.deps)).status).toBe("failed");
    expect(offline.local()).toBe(phone);
  });

  it("a failed save is reported so it can be retried", async () => {
    const phone = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    expect((await pull(setup(phone, { progress: null, putStatus: 500 }).deps)).status).toBe("failed");
  });
});

describe("push", () => {
  it("sends the phone's progress", async () => {
    const phone = recordAnswer(emptyProgress(T(1)), "a.x", true, T(2));
    const s = setup(phone, {});
    expect(await push(s.deps)).toEqual({ status: "ok", sent: phone });
    expect(s.stored()).toEqual(phone);
  });
  it("reports signed out and failures", async () => {
    expect((await push(setup(emptyProgress(), { putStatus: 401 }).deps)).status).toBe("signed-out");
    expect((await push(setup(emptyProgress(), { offline: true }).deps)).status).toBe("failed");
  });
});

import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { fixtureCourse } from "../../../test/fixtures/course";
import type { PlayableDay } from "@/content/types";
import { updateSettings } from "@/lib/settings-store";
import { WeekComplete } from "./WeekComplete";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("@/lib/speak", async (importOriginal) => ({ ...(await importOriginal<typeof import("@/lib/speak")>()), narrate: vi.fn() }));

const day = (id: string): PlayableDay => ({ id, kind: "lesson", title: { en: id, te: `${id} తె` }, sections: [{ kind: "wrapup", activities: [] }] });

beforeEach(() => updateSettings({ learnIn: "en" }));

describe("WeekComplete", () => {
  it("shows Week N complete with the days practiced and a share button", () => {
    render(<WeekComplete day={day("a2")} onReview={vi.fn()} course={fixtureCourse} />);
    expect(screen.getByRole("heading", { name: "Week 12 Complete!" })).toBeTruthy();
    expect(screen.getByText("2 / 2 days")).toBeTruthy();
    expect(screen.getByText("a1")).toBeTruthy();
    expect(screen.getByRole("button", { name: /^Share with family/ })).toBeTruthy();
    expect(screen.queryByTestId("stage-complete")).toBeNull();
    expect(screen.getByTestId("confetti").className).toContain("motion-reduce:hidden");
  });

  it("adds the stage celebration and its can-do list on the last week of a stage", () => {
    const stage = { ...fixtureCourse.stages[0], lastWeek: 13 };
    render(<WeekComplete day={day("b1")} onReview={vi.fn()} course={{ ...fixtureCourse, stages: [stage] }} />);
    expect(screen.getByRole("heading", { name: "Week 13 Complete!" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Stage 3 Complete!" })).toBeTruthy();
    expect(screen.getByText("Can do")).toBeTruthy();
  });
});

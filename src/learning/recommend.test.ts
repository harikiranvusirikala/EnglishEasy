import { describe, expect, it } from "vitest";
import { fixtureCourse, makePlayable, standardShape } from "../../test/fixtures/course";
import { chooseTracks, completeDay, emptyProgress, setPosition, type Progress } from "./progress";
import { offerableTracks, recommendedDay, trackOffer, trackOfferKey, trackSuggestion } from "./recommend";

const NOW = "2026-11-01T10:00:00.000Z";
const finish = (p: Progress, ...ids: string[]) => ids.reduce((q, id) => completeDay(q, makePlayable(id, standardShape), NOW), p);

describe("recommendedDay", () => {
  it("starts at the first day", () => {
    expect(recommendedDay(fixtureCourse, emptyProgress())).toEqual({ dayId: "a1", reason: "next" });
  });
  it("moves on across weeks", () => {
    expect(recommendedDay(fixtureCourse, finish(emptyProgress(), "a1"))).toMatchObject({ dayId: "a2" });
    expect(recommendedDay(fixtureCourse, finish(emptyProgress(), "a1", "a2"))).toMatchObject({ dayId: "b1" });
  });
  it("skips a day completed out of order", () => {
    expect(recommendedDay(fixtureCourse, finish(emptyProgress(), "a2"))).toMatchObject({ dayId: "a1" });
  });
  it("resumes at the saved position first", () => {
    const p = setPosition(finish(emptyProgress(), "a1"), "b1", "b1.practice2", NOW);
    expect(recommendedDay(fixtureCourse, p)).toEqual({ dayId: "b1", activityId: "b1.practice2", reason: "resume" });
  });
  it("ignores a position inside a finished day", () => {
    const p = setPosition(emptyProgress(), "a1", "a1.learn1", NOW);
    expect(recommendedDay(fixtureCourse, { ...finish(p, "a1"), position: p.position })).toMatchObject({ dayId: "a2", reason: "next" });
  });
  it("falls back to the last released main-path day when all are done, never an unreleased or track day", () => {
    expect(recommendedDay(fixtureCourse, finish(emptyProgress(), "a1", "a2", "b1"))).toEqual({ dayId: "b1", reason: "last" });
  });
  it("is null when nothing is released", () => {
    const none = { ...fixtureCourse, stages: [{ ...fixtureCourse.stages[0], weeks: [fixtureCourse.stages[0].weeks[2]] }] };
    expect(recommendedDay(none, emptyProgress())).toBeNull();
  });
});

describe("tracks", () => {
  it("offers only tracks with released content", () => {
    expect(offerableTracks(fixtureCourse).map((t) => t.id)).toEqual(["grandchildren"]);
  });
  it("suggests nothing for a track the learner has not chosen", () => {
    expect(trackSuggestion(fixtureCourse, emptyProgress())).toBeNull();
  });
  it("suggests the next day of a chosen track once it is started (the offer card opens it)", () => {
    let p = chooseTracks(emptyProgress(), ["grandchildren"], NOW);
    expect(trackSuggestion(fixtureCourse, p)).toBeNull(); // not started: "New for you" offers it
    p = finish(p, "g1");
    expect(trackSuggestion(fixtureCourse, p)).toEqual({ trackId: "grandchildren", dayId: "g2" });
    expect(trackSuggestion(fixtureCourse, finish(p, "g2"))).toBeNull();
  });
  it("suggests nothing for a chosen track that has no released content", () => {
    expect(trackSuggestion(fixtureCourse, chooseTracks(emptyProgress(), ["abroad"], NOW))).toBeNull();
  });
  it("the track days never become the recommended main-path day", () => {
    expect(recommendedDay(fixtureCourse, chooseTracks(finish(emptyProgress(), "a1", "a2", "b1"), ["grandchildren"], NOW))?.dayId).toBe("b1");
  });
  it("offers a chosen track once the learner reaches its week, until started or put off", () => {
    const chosen = chooseTracks(emptyProgress(), ["grandchildren"], NOW);
    expect(trackOffer(fixtureCourse, chosen, [])).toBeNull(); // Week 12: before the offer week (13)
    const atWeek13 = finish(chosen, "a1", "a2");
    expect(trackOffer(fixtureCourse, atWeek13, [])?.id).toBe("grandchildren");
    expect(trackOffer(fixtureCourse, atWeek13, [trackOfferKey("grandchildren")])).toBeNull(); // "Not now"
    expect(trackOffer(fixtureCourse, finish(atWeek13, "g1"), [])).toBeNull(); // started
    expect(trackOffer(fixtureCourse, finish(emptyProgress(), "a1", "a2"), [])).toBeNull(); // not chosen
  });
  it("offers a track from its earlier week when the trip is soon", () => {
    const course = { ...fixtureCourse, tracks: fixtureCourse.tracks.map((t) => ({ ...t, id: "abroad" as const, soonWeek: 12, weeks: fixtureCourse.tracks[0].weeks })) };
    expect(trackOffer(course, chooseTracks(emptyProgress(), ["abroad"], NOW), [])).toBeNull();
    expect(trackOffer(course, chooseTracks(emptyProgress(), ["abroad"], NOW, true), [])?.id).toBe("abroad");
  });
});

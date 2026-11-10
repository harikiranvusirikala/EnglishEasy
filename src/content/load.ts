import type { Day } from "./types";

/**
 * Maps a day id to its content file (BUILD_PLAN A4). Used by the build script, overview pages and tests.
 * Add one line per day file as it is written; a day listed in `course.ts` but not here is planned, not written yet.
 */
const dayFiles: Record<string, () => Promise<{ day: Day }>> = {
  "sentence-basics": () => import("./main/w01/sentence-basics"),
  "i-am-you-are": () => import("./main/w01/i-am-you-are"),
  "present-simple-every-day": () => import("./main/w01/present-simple-every-day"),
  "present-continuous-right-now": () => import("./main/w01/present-continuous-right-now"),
  "past-simple-yesterday": () => import("./main/w01/past-simple-yesterday"),
  "future-will-tomorrow": () => import("./main/w01/future-will-tomorrow"),
  "w1-review": () => import("./main/w01/w1-review"),
  "what-and-where": () => import("./main/w02/what-and-where"),
  "when-and-what-time": () => import("./main/w02/when-and-what-time"),
  "sorry-can-you-repeat": () => import("./main/w02/sorry-can-you-repeat"),
  "how-questions": () => import("./main/w02/how-questions"),
  "why-and-because": () => import("./main/w02/why-and-because"),
  "w2-conversation": () => import("./main/w02/w2-conversation"),
  "w2-review": () => import("./main/w02/w2-review"),
  "numbers-and-counting": () => import("./main/w03/numbers-and-counting"),
  "telling-the-time": () => import("./main/w03/telling-the-time"),
  "days-and-dates": () => import("./main/w03/days-and-dates"),
  "prices-and-money": () => import("./main/w03/prices-and-money"),
  "my-address": () => import("./main/w03/my-address"),
  "w3-conversation": () => import("./main/w03/w3-conversation"),
  "w3-review": () => import("./main/w03/w3-review"),
  "have-and-has": () => import("./main/w04/have-and-has"),
  "my-your-his-her": () => import("./main/w04/my-your-his-her"),
  "possessive-s": () => import("./main/w04/possessive-s"),
  "describing-people": () => import("./main/w04/describing-people"),
  "this-that-these-those": () => import("./main/w04/this-that-these-those"),
  "w4-conversation": () => import("./main/w04/w4-conversation"),
  "w4-review": () => import("./main/w04/w4-review"),
  "there-is-there-are": () => import("./main/w05/there-is-there-are"),
  "a-an-the": () => import("./main/w05/a-an-the"),
  "in-on-under-next-to": () => import("./main/w05/in-on-under-next-to"),
  "one-and-many": () => import("./main/w05/one-and-many"),
  "rooms-and-things": () => import("./main/w05/rooms-and-things"),
  "w5-conversation": () => import("./main/w05/w5-conversation"),
  "w5-review": () => import("./main/w05/w5-review"),
  "i-like-i-dont-like": () => import("./main/w06/i-like-i-dont-like"),
  "i-would-like": () => import("./main/w06/i-would-like"),
  "some-and-any": () => import("./main/w06/some-and-any"),
  "how-much-how-many": () => import("./main/w06/how-much-how-many"),
  "cooking-instructions": () => import("./main/w06/cooking-instructions"),
  "w6-conversation": () => import("./main/w06/w6-conversation"),
  "w6-review": () => import("./main/w06/w6-review"),
  "always-usually-never": () => import("./main/w07/always-usually-never"),
  "he-goes-she-watches": () => import("./main/w07/he-goes-she-watches"),
  "routine-questions": () => import("./main/w07/routine-questions"),
  "morning-to-night": () => import("./main/w07/morning-to-night"),
  "weekdays-and-weekends": () => import("./main/w07/weekdays-and-weekends"),
  "w7-conversation": () => import("./main/w07/w7-conversation"),
  "w7-review": () => import("./main/w07/w7-review"),
  "can-and-cant": () => import("./main/w08/can-and-cant"),
  "can-i": () => import("./main/w08/can-i"),
  "can-could-would": () => import("./main/w08/can-could-would"),
  "could-in-the-past": () => import("./main/w08/could-in-the-past"),
  "please-help-me": () => import("./main/w08/please-help-me"),
  "w8-conversation": () => import("./main/w08/w8-conversation"),
  "w8-review": () => import("./main/w08/w8-review"),
  "was-and-were": () => import("./main/w09/was-and-were"),
  "regular-past-verbs": () => import("./main/w09/regular-past-verbs"),
  "irregular-past-verbs": () => import("./main/w09/irregular-past-verbs"),
  "what-did-you-do": () => import("./main/w09/what-did-you-do"),
  "last-week-ago": () => import("./main/w09/last-week-ago"),
  "w9-conversation": () => import("./main/w09/w9-conversation"),
  "w9-review": () => import("./main/w09/w9-review"),
  "going-to-plans": () => import("./main/w10/going-to-plans"),
  "will-or-going-to": () => import("./main/w10/will-or-going-to"),
  "ill-help-you": () => import("./main/w10/ill-help-you"),
  "invitations": () => import("./main/w10/invitations"),
  "next-week-soon": () => import("./main/w10/next-week-soon"),
  "w10-conversation": () => import("./main/w10/w10-conversation"),
  "w10-review": () => import("./main/w10/w10-review"),
  "i-feel": () => import("./main/w11/i-feel"),
  "my-head-hurts": () => import("./main/w11/my-head-hurts"),
  "should-and-shouldnt": () => import("./main/w11/should-and-shouldnt"),
  "at-the-clinic": () => import("./main/w11/at-the-clinic"),
  "get-well-soon": () => import("./main/w11/get-well-soon"),
  "w11-conversation": () => import("./main/w11/w11-conversation"),
  "w11-review": () => import("./main/w11/w11-review"),
  "and-but": () => import("./main/w12/and-but"),
  "because-and-so": () => import("./main/w12/because-and-so"),
  "all-about-me": () => import("./main/w12/all-about-me"),
  "four-times-together": () => import("./main/w12/four-times-together"),
  "all-question-types": () => import("./main/w12/all-question-types"),
  "w12-conversation": () => import("./main/w12/w12-conversation"),
  "w12-review": () => import("./main/w12/w12-review"),
  "can-i-have-please": () => import("./main/w13/can-i-have-please"),
  "a-kilo-of": () => import("./main/w13/a-kilo-of"),
  "how-much-are-they": () => import("./main/w13/how-much-are-they"),
  "bargaining-politely": () => import("./main/w13/bargaining-politely"),
  "fresh-and-ripe": () => import("./main/w13/fresh-and-ripe"),
  "w13-conversation": () => import("./main/w13/w13-conversation"),
  "w13-review": () => import("./main/w13/w13-review"),
};

/** Ids of every written day, in registry order (which is course order). */
export function writtenDayIds(): string[] {
  return Object.keys(dayFiles);
}

export function isWritten(id: string): boolean {
  return Object.hasOwn(dayFiles, id);
}

export async function loadDay(id: string): Promise<Day> {
  if (!isWritten(id)) throw new Error(`No content file for day "${id}" (register it in src/content/load.ts)`);
  return (await dayFiles[id]()).day;
}

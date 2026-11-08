import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 8, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a can / could round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
});

export const day: ReviewDay = {
  id: "w8-review",
  kind: "review",
  title: { en: "Asking for Help", te: "సహాయం అడగడం" },
  extras: [
    pick("q1", "I can ___ pulihora.", "నేను పులిహోర చేయగలను.", ["cook", "cooks", "to cook"], 0, {
      en: "After can, the plain action word.",
      te: "can తర్వాత మామూలు పని పదం.",
    }),
    pick("q2", "___ I sit here?", "నేను ఇక్కడ కూర్చోవచ్చా?", ["Can", "Do", "Am"], 0, {
      en: "To ask if it is okay: Can I …?",
      te: "చేయవచ్చా అని అడగడానికి: Can I …?",
    }),
    pick("q3", "Could you ___ me, please?", "దయచేసి నాకు సహాయం చేయగలరా?", ["help", "helping", "helps"], 0, {
      en: "After could, help.",
      te: "could తర్వాత help.",
    }),
    pick("q4", "When I was young, I ___ swim.", "చిన్నప్పుడు నాకు ఈత వచ్చేది.", ["can", "could", "can't"], 1, {
      en: "In the past: could.",
      te: "గతంలో: could.",
    }),
    pick("q5", "Sorry, I don't ___.", "క్షమించండి, నాకు అర్థం కాలేదు.", ["understand", "understanding", "understands"], 0, {
      en: "Say: I don't understand.",
      te: "I don't understand అనాలి.",
    }),
    pick("q6", "Could you say that ___?", "మళ్ళీ ఒకసారి చెప్పగలరా?", ["again", "back", "more"], 0, {
      en: "Say that again.",
      te: "say that again అంటే మళ్ళీ చెప్పండి.",
    }),
  ],
};

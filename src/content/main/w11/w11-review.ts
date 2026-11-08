import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 11, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a body-parts match and a health round. */

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
  id: "w11-review",
  kind: "review",
  title: { en: "Take Care", te: "జాగ్రత్త" },
  extras: [
    {
      id: "m1",
      type: "match",
      pairs: [
        { en: "head", te: "తల" },
        { en: "knee", te: "మోకాలు" },
        { en: "back", te: "వీపు" },
        { en: "stomach", te: "కడుపు" },
      ],
    },
    pick("q1", "I ___ tired today.", "ఈ రోజు నాకు అలసటగా ఉంది.", ["feel", "feels", "feeling"], 0, {
      en: "With I, feel.",
      te: "I తో feel.",
    }),
    pick("q2", "My knee ___.", "నా మోకాలు నొప్పిగా ఉంది.", ["hurts", "paining", "hurt"], 0, {
      en: "Say my knee hurts.",
      te: "my knee hurts అనాలి.",
    }),
    pick("q3", "You ___ rest.", "మీరు విశ్రాంతి తీసుకోవాలి.", ["should", "should to", "shoulds"], 0, {
      en: "Advice: should + action.",
      te: "సలహా: should తర్వాత పని పదం.",
    }),
    pick("q4", "I ___ a fever yesterday.", "నిన్న నాకు జ్వరం వచ్చింది.", ["had", "have", "has"], 0, {
      en: "Yesterday: had.",
      te: "నిన్న: had.",
    }),
    pick("q5", "I'm sorry ___ hear that.", "అది విని బాధగా ఉంది.", ["to", "for", "of"], 0, {
      en: "Sorry to hear that.",
      te: "sorry to hear that అనాలి.",
    }),
  ],
};

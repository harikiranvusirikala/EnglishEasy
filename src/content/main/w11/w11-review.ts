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
      en: "With I, the verb has no s.",
      te: "I తో verb కి s రాదు.",
    }),
    pick("q2", "My knee ___.", "నా మోకాలు నొప్పిగా ఉంది.", ["hurts", "is paining", "hurting"], 0, {
      en: "One knee is like he or she, so add s.",
      te: "ఒక మోకాలు he, she లాంటిదే, అందుకే verb కి s.",
    }),
    pick("q3", "You ___ rest.", "మీరు విశ్రాంతి తీసుకోవాలి.", ["should", "should to", "shoulds"], 0, {
      en: "After should, the verb comes straight, with no to.",
      te: "should తర్వాత to రాదు, verb నేరుగా వస్తుంది.",
    }),
    pick("q4", "I ___ a fever yesterday.", "నిన్న నాకు జ్వరం వచ్చింది.", ["had", "have", "has"], 0, {
      en: "Yesterday is past, so have becomes had.",
      te: "నిన్న అంటే past, అందుకే have కాదు had.",
    }),
    pick("q5", "I'm sorry ___ hear that.", "అది విని బాధగా ఉంది.", ["to", "for", "of"], 0, {
      en: "After sorry, say to and then the verb.",
      te: "sorry తర్వాత to, ఆ తర్వాత verb.",
    }),
  ],
};

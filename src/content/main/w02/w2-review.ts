import type { Activity, ReviewDay } from "../../types";

/** Week 2, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a question-word round that also covers the clarifying phrases. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: { en: string; te: string }): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
});

export const day: ReviewDay = {
  id: "w2-review",
  kind: "review",
  title: { en: "Question Time", te: "ప్రశ్నల సమయం" },
  extras: [
    pick("q1", "___ do you live?", "మీరు ఎక్కడ ఉంటారు?", ["What", "Where", "Who"], 1, {
      en: "Where asks about a place, like ఎక్కడ in Telugu.",
      te: "ఎక్కడ అని చోటు గురించి అడగడానికి where వాడాలి.",
    }),
    pick("q2", "___ time does the bus come?", "బస్ ఎన్ని గంటలకు వస్తుంది?", ["When", "What", "How"], 1, {
      en: "What time asks for the clock time.",
      te: "గడియారంలో టైమ్ అడగడానికి what time.",
    }),
    pick("q3", "___ is that man?", "ఆయన ఎవరు?", ["Who", "Whose", "Whom"], 0, {
      en: "Who asks about a person, like ఎవరు in Telugu.",
      te: "ఒక మనిషి ఎవరో అడగడానికి who వాడాలి.",
    }),
    pick("q4", "___ do you say this in English?", "దీన్ని ఇంగ్లీష్‌లో ఎలా అంటారు?", ["How", "What", "Where"], 0, {
      en: "To ask for an English word, say How do you say, not What.",
      te: "ఇంగ్లీష్ పదం అడగడానికి How do you say అనాలి, What కాదు.",
    }),
    pick("q5", "How ___ is this saree?", "ఈ చీర ఎంత?", ["much", "far", "many"], 0, {
      en: "How much asks the price, like ఎంత in Telugu.",
      te: "ధర ఎంత అని అడగడానికి how much వాడాలి.",
    }),
    pick("q6", "___ are you late?", "మీరు ఎందుకు ఆలస్యంగా వచ్చారు?", ["Why", "What", "How"], 0, {
      en: "Why asks the reason, like ఎందుకు.",
      te: "కారణం అడగడానికి why, అంటే ఎందుకు.",
    }),
  ],
};

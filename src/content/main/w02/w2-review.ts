import type { Activity, ReviewDay } from "../../types";

/** Week 2, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a question-word round. */

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
      en: "Where asks about a place.",
      te: "చోటు గురించి అడగడానికి where.",
    }),
    pick("q2", "___ time does the bus come?", "బస్ ఎన్ని గంటలకు వస్తుంది?", ["When", "What", "How"], 1, {
      en: "What time asks for the clock time.",
      te: "గడియారంలో టైమ్ అడగడానికి what time.",
    }),
    pick("q3", "___ is that man?", "ఆ మనిషి ఎవరు?", ["Who", "Whose", "Where"], 0, {
      en: "Who asks about a person.",
      te: "ఒక మనిషి గురించి అడగడానికి who.",
    }),
    pick("q4", "___ bag is this?", "ఇది ఎవరి బ్యాగ్?", ["Who", "Whose", "What"], 1, {
      en: "Whose asks who owns a thing.",
      te: "వస్తువు ఎవరిదో అడగడానికి whose.",
    }),
    pick("q5", "How ___ is this saree?", "ఈ చీర ఎంత?", ["much", "far", "old"], 0, {
      en: "How much asks the price.",
      te: "ధర అడగడానికి how much.",
    }),
    pick("q6", "___ are you late?", "మీరు ఎందుకు ఆలస్యంగా వచ్చారు?", ["Why", "When", "How"], 0, {
      en: "Why asks the reason.",
      te: "కారణం అడగడానికి why.",
    }),
  ],
};

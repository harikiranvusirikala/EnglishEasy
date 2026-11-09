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
      en: "Where asks about a place: Where do you live?",
      te: "చోటు గురించి అడగడానికి where: Where do you live?",
    }),
    pick("q2", "___ time does the bus come?", "బస్ ఎన్ని గంటలకు వస్తుంది?", ["When", "What", "How"], 1, {
      en: "What time asks for the clock time: What time does the bus come?",
      te: "గడియారంలో టైమ్ అడగడానికి what time: What time does the bus come?",
    }),
    pick("q3", "___ is that man?", "ఆ ఆయన ఎవరు?", ["Who", "Whose", "Whom"], 0, {
      en: "Who asks about a person: Who is that man?",
      te: "ఒక మనిషి ఎవరో అడగడానికి who: Who is that man?",
    }),
    pick("q4", "___ bag is this?", "ఇది ఎవరి బ్యాగ్?", ["Who", "Whose", "Where"], 1, {
      en: "Whose asks who owns a thing: Whose bag is this?",
      te: "వస్తువు ఎవరిదో అడగడానికి whose: Whose bag is this?",
    }),
    pick("q5", "How ___ is this saree?", "ఈ చీర ఎంత?", ["much", "far", "many"], 0, {
      en: "How much asks the price: How much is this saree?",
      te: "ధర అడగడానికి how much: How much is this saree?",
    }),
    pick("q6", "___ are you late?", "మీరు ఎందుకు ఆలస్యంగా వచ్చారు?", ["Why", "What", "How"], 0, {
      en: "Why asks the reason, like ఎందుకు: Why are you late?",
      te: "కారణం అడగడానికి why, అంటే ఎందుకు: Why are you late?",
    }),
  ],
};

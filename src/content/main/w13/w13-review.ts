import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 13, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick market round. */

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
  id: "w13-review",
  kind: "review",
  title: { en: "Market Day", te: "సంత రోజు" },
  extras: [
    pick("q1", "Can I ___ a bag, please?", "ఒక సంచి ఇస్తారా?", ["have", "has", "having"], 0, {
      en: "After can, the verb stays plain, so have: Can I have a bag, please?",
      te: "can తర్వాత verb మారదు, అందుకే have: Can I have a bag, please?",
    }),
    pick("q2", "I need half a kilo ___ beans.", "నాకు అర కిలో బీన్స్ కావాలి.", ["of", "for", "in"], 0, {
      en: "An amount joins its thing with of: I need half a kilo of beans.",
      te: "ఎంతో చెప్పే మాటకీ వస్తువుకీ మధ్య of: I need half a kilo of beans.",
    }),
    pick("q3", "How much ___ these apples?", "ఈ ఆపిల్స్ ఎంత?", ["are", "is", "do"], 0, {
      en: "Apples are more than one, so use are: How much are these apples?",
      te: "ఆపిల్స్ ఒకటి కంటే ఎక్కువ, అందుకే are: How much are these apples?",
    }),
    pick("q4", "That ___ to 240 rupees.", "మొత్తం 240 రూపాయలు అవుతుంది.", ["comes", "come", "coming"], 0, {
      en: "That is one thing, like he or she, so comes, with s: That comes to 240 rupees.",
      te: "That ఒక్కటే (he, she లాగా), అందుకే comes: That comes to 240 rupees.",
    }),
    pick("q5", "Can you give it ___ fifty?", "యాభైకి ఇస్తారా?", ["for", "in", "on"], 0, {
      en: "Telugu says యాభైకి; in English a price takes for: Can you give it for fifty?",
      te: "'యాభైకి' లోని 'కి' ఇంగ్లీష్‌లో for అవుతుంది: Can you give it for fifty?",
    }),
    pick("q6", "These tomatoes are ___ soft.", "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి.", ["too", "too much", "very much"], 0, {
      en: "Too already means more than you want, so no much: These tomatoes are too soft.",
      te: "too అంటేనే అవసరానికి మించి, much అక్కర్లేదు: These tomatoes are too soft.",
    }),
  ],
};

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
    pick("q1", "Can I ___ a bag, please?", "ఒక సంచి ఇవ్వగలరా?", ["have", "has", "having"], 0, {
      en: "After Can I, say have.",
      te: "Can I తర్వాత have.",
    }),
    pick("q2", "I need half a kilo ___ beans.", "నాకు అర కిలో బీన్స్ కావాలి.", ["of", "for", "in"], 0, {
      en: "Half a kilo of.",
      te: "half a kilo of అనాలి.",
    }),
    pick("q3", "How much ___ these apples?", "ఈ ఆపిల్స్ ఎంత?", ["are", "is", "do"], 0, {
      en: "Many apples: are.",
      te: "చాలా ఆపిల్స్: are.",
    }),
    pick("q4", "That ___ to 240 rupees.", "మొత్తం 240 రూపాయలు అయింది.", ["comes", "come", "coming"], 0, {
      en: "That comes to: the total.",
      te: "That comes to: మొత్తం.",
    }),
    pick("q5", "Can you give it ___ fifty?", "యాభైకి ఇవ్వగలరా?", ["for", "in", "at"], 0, {
      en: "A price takes for.",
      te: "ధరకి for.",
    }),
    pick("q6", "These tomatoes are ___ soft.", "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి.", ["too", "too much", "very much"], 0, {
      en: "More than you want: too.",
      te: "కావలసిన దానికంటే ఎక్కువ: too.",
    }),
  ],
};

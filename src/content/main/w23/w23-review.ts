import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 23, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick ordering round. */

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
  id: "w23-review",
  kind: "review",
  title: { en: "Eating Out", te: "బయట భోజనం" },
  extras: [
    pick("q1", "A table ___ two, please.", "ఇద్దరికి ఒక టేబుల్ కావాలి.", ["for", "to", "of"], 0, {
      en: "Telugu ఇద్దరికి has కి, but a table for people takes for.",
      te: "'ఇద్దరికి' లో 'కి' ఉన్నా, ఇంగ్లీష్‌లో for వస్తుంది.",
    }),
    pick("q2", "I'll ___ a masala dosa, please.", "నాకు ఒక మసాలా దోసె ఇవ్వండి.", ["have", "having", "has"], 0, {
      en: "After I'll, the verb stays plain, with no -ing or s.",
      te: "I'll తర్వాత verb మారదు; -ing గానీ s గానీ రాదు.",
    }),
    pick("q3", "Can I have it ___ onions?", "ఉల్లిపాయలు లేకుండా ఇస్తారా?", ["without", "less", "no"], 0, {
      en: "Without means none at all; less means only a little.",
      te: "without అంటే అసలు వద్దు; less అంటే కొంచెం తక్కువ.",
    }),
    pick("q4", "Excuse me, this coffee ___ cold.", "ఏమండీ, ఈ కాఫీ చల్లగా ఉంది.", ["is", "are", "very"], 0, {
      en: "One coffee takes is, and English never drops it as Telugu does.",
      te: "కాఫీ ఒక్కటే, అందుకే is; తెలుగులా ఇంగ్లీష్‌లో దీన్ని వదిలేయకూడదు.",
    }),
    pick("q5", "Could I have ___ bill, please?", "బిల్ ఇస్తారా?", ["the", "a", "one"], 0, {
      en: "Your table has one bill that you both know, so say the.",
      te: "మీ టేబుల్ బిల్ ఒక్కటే, ఇద్దరికీ తెలిసినది, అందుకే the.",
    }),
    pick("q6", "Can I pay ___ UPI?", "UPI తో కట్టొచ్చా?", ["by", "in", "from"], 0, {
      en: "Card and UPI take by; only cash takes in.",
      te: "card, UPI కి by వస్తుంది; cash కి మాత్రమే in.",
    }),
  ],
};

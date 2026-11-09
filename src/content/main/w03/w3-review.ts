import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 3, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a numbers-and-time round. */

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
  id: "w3-review",
  kind: "review",
  title: { en: "Numbers Everywhere", te: "అంతటా సంఖ్యలు" },
  extras: [
    pick("q1", "I am sixty years ___.", "నాకు అరవై ఏళ్ళు.", ["old", "age", "olds"], 0, {
      en: "Say your age with am and years old.",
      te: "వయసు చెప్పడానికి am, years old వాడాలి.",
    }),
    pick("q2", "It is half ___ seven.", "ఏడున్నర అయింది.", ["past", "to", "at"], 0, {
      en: "Thirty minutes after seven is half past seven.",
      te: "ఏడు దాటి అరగంట అంటే half past seven.",
    }),
    pick("q3", "My birthday is ___ 15 August.", "నా పుట్టినరోజు ఆగస్టు 15న.", ["in", "on", "at"], 1, {
      en: "Use on with a date: on 15 August.",
      te: "తేదీకి on వాడాలి: on 15 August.",
    }),
    pick("q4", "Diwali is ___ November.", "దీపావళి నవంబర్‌లో వస్తుంది.", ["in", "on", "at"], 0, {
      en: "Use in with a month alone: in November.",
      te: "నెల ఒక్కటే అయితే in వాడాలి: in November.",
    }),
    pick("q5", "It costs two ___ rupees.", "దాని ధర రెండు వేల రూపాయలు.", ["thousand", "thousands", "lakhs"], 0, {
      en: "Before rupees, thousand has no s.",
      te: "rupees ముందు thousand కి s ఉండదు.",
    }),
    pick("q6", "Ten lakh is one ___.", "పది లక్షలు అంటే ఒక మిలియన్.", ["thousand", "million", "crore"], 1, {
      en: "Ten lakh and one million both have six zeros.",
      te: "పది లక్షలకి, million కి ఆరు సున్నాలు ఉంటాయి.",
    }),
  ],
};

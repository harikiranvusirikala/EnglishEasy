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
      en: "Say your age with years old.",
      te: "వయసు చెప్పడానికి years old.",
    }),
    pick("q2", "It is half ___ seven.", "ఏడున్నర అయింది.", ["past", "to", "at"], 0, {
      en: "7:30 is half past seven.",
      te: "7:30 అంటే half past seven.",
    }),
    pick("q3", "My birthday is ___ 15 August.", "నా పుట్టినరోజు ఆగస్టు 15న.", ["in", "on", "at"], 1, {
      en: "A date takes on.",
      te: "తేదీకి on.",
    }),
    pick("q4", "Diwali is ___ November.", "దీపావళి నవంబర్‌లో వస్తుంది.", ["in", "on", "at"], 0, {
      en: "A month takes in.",
      te: "నెలకి in.",
    }),
    pick("q5", "It costs two ___ rupees.", "దాని ధర రెండు వేల రూపాయలు.", ["thousand", "thousands", "lakhs"], 0, {
      en: "Before rupees, thousand has no s.",
      te: "rupees ముందు thousand కి s ఉండదు.",
    }),
    pick("q6", "Ten lakh is one ___.", "పది లక్షలు అంటే ఒక మిలియన్.", ["thousand", "million", "crore"], 1, {
      en: "Ten lakh is one million.",
      te: "పది లక్షలు = one million.",
    }),
  ],
};

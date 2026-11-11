import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 33, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick polite-requests round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: FixIt): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

export const day: ReviewDay = {
  id: "w33-review",
  kind: "review",
  title: { en: "Good Neighbours", te: "మంచి పొరుగువాళ్ళు" },
  extras: [
    pick("q1", "Could you please ___ my plants this week?", "ఈ వారం కొంచెం మా మొక్కలకి నీళ్ళు పోస్తారా?", ["water", "watering", "to water"], 0, {
      en: "After could, the verb stays plain, with no -ing and no to.",
      te: "could తర్వాత verb మారదు; -ing గానీ, to గానీ రావు.",
    }),
    pick("q2", "___ I carry that for you?", "అది నేను మోయనా?", ["Shall", "Will", "Do"], 0, {
      en: "An offer to do something yourself starts with Shall I; Telugu -నా? is Shall I.",
      te: "నేను చేయనా అని సాయం అడిగేటప్పుడు Shall I; తెలుగులోని '-నా?' అదే.",
    }),
    pick("q3", "Would you mind ___ the gate, please?", "కొంచెం గేటు వేస్తారా, ప్లీజ్?", ["closing", "close", "to close"], 0, {
      en: "Mind is always followed by the -ing form of the verb.",
      te: "mind తర్వాత ఎప్పుడూ verb యొక్క -ing రూపమే వస్తుంది.",
    }),
    pick("q4", "Can I help you ___ the bags?", "సంచులు మోయడంలో సాయం చేయనా?", ["with", "in", "for"], 0, {
      en: "You help someone with a job; Telugu లో makes people say in.",
      te: "help someone with something అంటారు; తెలుగులోని 'లో' వల్ల in అనేస్తాం.",
    }, "preposition"),
    pick("q5", "Sorry to bother you. Your car ___ blocking my gate.", "ఇబ్బంది పెడుతున్నందుకు సారీ. మీ కారు మా గేటుకి అడ్డంగా ఉంది.", ["is", "are", "has"], 0, {
      en: "Blocking needs is before it, and one car takes is, not are.",
      te: "blocking ముందు is కావాలి; ఒక్క కారు కాబట్టి are కాదు, is.",
    }, "be"),
    pick("q6", "We ___ this problem for two years.", "రెండేళ్ళుగా ఈ సమస్య ఉంది.", ["have had", "are having", "have"], 0, {
      en: "From the past up to now, English uses have had, not the present.",
      te: "గతం నుండి ఇప్పటి వరకు అంటే ఇంగ్లీష్‌లో have had; వర్తమానం సరిపోదు.",
    }, "duration"),
  ],
};

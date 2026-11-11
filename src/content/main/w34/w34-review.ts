import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 34, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick short-answers and negative-questions round. */

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
  id: "w34-review",
  kind: "review",
  title: { en: "Let's Chat", te: "కబుర్లు చెప్పుకుందాం" },
  extras: [
    pick("q1", "Did you watch the match? Yes, I ___.", "మీరు మ్యాచ్ చూశారా? అవును, చూశాను.", ["did", "do", "was"], 0, {
      en: "The question starts with did, so the short answer ends with did.",
      te: "ప్రశ్న did తో మొదలైంది, అందుకే చిన్న జవాబు did తో ముగుస్తుంది.",
    }),
    pick("q2", "Have you seen the new serial? No, I ___.", "కొత్త సీరియల్ చూశారా? లేదు, చూడలేదు.", ["haven't", "didn't", "don't"], 0, {
      en: "A question with have gets have in the answer, so haven't, not didn't.",
      te: "have తో అడిగితే జవాబులోనూ have; అందుకే haven't, didn't కాదు.",
    }),
    pick("q3", "You didn't eat? ___, I did. I had dosa.", "మీరు తినలేదా? తిన్నానండీ. దోసె తిన్నాను.", ["Yes", "No", "Not"], 0, {
      en: "You did eat, so say Yes; English answers the fact, not the question.",
      te: "మీరు తిన్నారు, అందుకే Yes; ఇంగ్లీష్‌లో జరిగింది చెప్తాం, ప్రశ్నతో ఒప్పుకోవడం కాదు.",
    }, "negative-answer"),
    pick("q4", "You didn't go? ___, I didn't. I was busy.", "మీరు వెళ్ళలేదా? వెళ్ళలేదు. పని ఉంది.", ["No", "Yes", "Not"], 0, {
      en: "Telugu says అవును here, but English needs No before didn't.",
      te: "తెలుగులో ఇక్కడ 'అవును' అంటాం, కానీ ఇంగ్లీష్‌లో didn't ముందు No రావాలి.",
    }, "negative-answer"),
    pick("q5", "Lovely morning, ___ it?", "ఉదయం చాలా బాగుంది కదా?", ["isn't", "is", "doesn't"], 0, {
      en: "To ask someone to agree, like Telugu కదా?, English adds isn't it, with not.",
      te: "'కదా?' లాగా ఒప్పుకోమని అడగాలంటే ఇంగ్లీష్‌లో not తో isn't it చేర్చాలి.",
    }),
    pick("q6", "Aren't you coming? Yes, I ___. I'm ready.", "మీరు రావట్లేదా? వస్తున్నాను. రెడీగా ఉన్నాను.", ["am", "do", "are"], 0, {
      en: "The question asks with are, so the answer for I uses am.",
      te: "ప్రశ్న are తో ఉంది, అందుకే I తో జవాబులో am.",
    }),
  ],
};

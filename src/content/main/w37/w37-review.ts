import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 37, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick must / mustn't / should / don't have to round. */

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
  id: "w37-review",
  kind: "review",
  title: { en: "Do's and Don'ts", te: "చేయాల్సినవి, చేయకూడనివి" },
  extras: [
    pick("q1", "You ___ wear a helmet on a bike.", "బైక్ మీద తప్పనిసరిగా హెల్మెట్ పెట్టుకోవాలి.", ["must", "mustn't", "don't have to"], 0, {
      en: "A helmet is the law, so it is a rule with no choice.",
      te: "హెల్మెట్ చట్టం, అంటే వేరే దారి లేని నియమం; అందుకే must.",
    }),
    pick("q2", "You ___ smoke inside the hospital.", "హాస్పిటల్ లోపల సిగరెట్ తాగకూడదు.", ["mustn't", "don't have to", "should"], 0, {
      en: "Smoking there is against the rule, so it is not allowed.",
      te: "అక్కడ సిగరెట్ తాగడం నియమానికి విరుద్ధం, అందుకే mustn't.",
    }),
    pick("q3", "Parking is free. You ___ pay.", "పార్కింగ్ ఉచితం. డబ్బులు కట్టక్కర్లేదు.", ["don't have to", "mustn't", "must"], 0, {
      en: "Free means there is no need; mustn't would mean paying is wrong.",
      te: "ఉచితం అంటే అవసరం లేదు; mustn't అంటే కట్టడమే తప్పు అని అర్థం వస్తుంది.",
    }),
    pick("q4", "You look tired. You ___ rest a little.", "మీరు అలసటగా కనిపిస్తున్నారు. కొంచెం విశ్రాంతి తీసుకుంటే మంచిది.", ["should", "mustn't", "don't have to"], 0, {
      en: "This is friendly advice: good for you, but your choice.",
      te: "ఇది స్నేహపూర్వక సలహా: మీకు మంచిది, కానీ మీ ఇష్టం; అందుకే should.",
    }),
    pick("q5", "Phones ___ not allowed inside.", "లోపలికి ఫోన్లకు అనుమతి లేదు.", ["are", "is", "do"], 0, {
      en: "Phones are many, so are must come before not allowed.",
      te: "phones చాలా, అందుకే not allowed ముందు are తప్పనిసరి.",
    }, "be"),
    pick("q6", "He ___ have to pay for the token.", "ఆయన టోకెన్‌కి డబ్బులు కట్టక్కర్లేదు.", ["doesn't", "don't", "isn't"], 0, {
      en: "With he or she, use doesn't, not don't.",
      te: "he, she తో don't కాదు, doesn't.",
    }, "he-she-s"),
    pick("q7", "It's late. You'd better ___ an auto.", "ఆలస్యం అయింది. ఆటోలో వెళ్ళడం మంచిది.", ["take", "to take", "taking"], 0, {
      en: "After you'd better, the verb stays plain, with no to or -ing.",
      te: "you'd better తర్వాత verb మారదు; to గానీ -ing గానీ రావు.",
    }),
  ],
};

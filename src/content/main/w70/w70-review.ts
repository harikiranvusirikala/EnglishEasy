import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 70, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick I wish / I should have round, and a story. */

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
  id: "w70-review",
  kind: "review",
  title: { en: "Wishes and Small Regrets", te: "కోరికలు, చిన్న బాధలు" },
  extras: [
    pick("q1", "I wish I ___ swim.", "నాకు ఈత వస్తే బాగుండేది.", ["could", "can", "will"], 0, {
      en: "After I wish, can changes to could, though the wish is about now.",
      te: "I wish తర్వాత can కాదు, could వస్తుంది; కోరిక ఇప్పటిదైనా.",
    }),
    pick("q2", "I wish it ___ so hot today.", "ఈ రోజు ఇంత ఎండ లేకపోతే బాగుండు.", ["wasn't", "isn't", "won't be"], 0, {
      en: "A wish about now still takes the past form, so is becomes was.",
      te: "ఇప్పటి కోరికకి కూడా past form వస్తుంది; అందుకే is కాదు, was.",
    }),
    pick("q3", "I should have ___ an umbrella.", "గొడుగు తెచ్చుకోవాల్సింది.", ["brought", "bring", "bringing"], 0, {
      en: "After should have, use brought, the form that follows have.",
      te: "should have తర్వాత have తో వచ్చే form brought వాడాలి.",
    }),
    pick(
      "q4",
      "Didn't you see the doctor? ___, I forgot.",
      "డాక్టర్‌ని కలవలేదా? లేదు, మర్చిపోయాను.",
      ["No, I didn't", "Yes, I didn't", "No, I don't"],
      0,
      {
        en: "English answers the fact: you did not go, so say no, not the Telugu అవును.",
        te: "ఇంగ్లీష్‌లో జవాబు నిజాన్ని బట్టి: కలవలేదు కాబట్టి No; తెలుగు 'అవును' లాగా Yes అనకూడదు.",
      },
      "negative-answer",
    ),
    pick(
      "q5",
      "My friend Prasad ___ he could sing.",
      "పాడగలిగితే బాగుండని మా స్నేహితుడు ప్రసాద్ గారు అనుకుంటారు.",
      ["wishes", "wish", "is wishing"],
      0,
      {
        en: "One person, like he or she, takes es here, and wish is a feeling, so no -ing.",
        te: "ఒక్కరైతే (he, she లాగా) ఇక్కడ es వస్తుంది; wish మనసులోని భావం, అందుకే -ing రాదు.",
      },
      "he-she-s",
    ),
    pick(
      "q6",
      "Is Swapna angry ___ me?",
      "స్వప్న గారికి నా మీద కోపంగా ఉందా?",
      ["with", "on", "to"],
      0,
      {
        en: "Angry takes with before a person; Telugu నా మీద pulls people to on.",
        te: "మనిషి మీద కోపానికి angry with; తెలుగు 'నా మీద' వల్ల on అనేస్తాం.",
      },
      "preposition",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "Swimming at Sixty", te: "అరవై ఏళ్ళకి ఈత" },
      teller: { en: "Satish", te: "సతీష్" },
      voice: "b",
      parts: [
        {
          en: "Every year, my friends and I go to Rushikonda beach. They all swim, but I never learned. I used to sit on the sand and watch them.",
          te: "ప్రతి సంవత్సరం నేను, నా స్నేహితులు రుషికొండ బీచ్‌కి వెళ్తాం. వాళ్ళందరికీ ఈత వచ్చు, కానీ నేను ఎప్పుడూ నేర్చుకోలేదు. ఇసుక మీద కూర్చుని వాళ్ళని చూస్తూ ఉండేవాణ్ణి.",
        },
        {
          en: "Last year, I watched my friend Imran in the waves. I thought, I wish I could swim too. Imran said I was never too old to learn.",
          te: "పోయిన సంవత్సరం నా స్నేహితుడు ఇమ్రాన్ గారు అలల్లో ఈదుతుంటే చూశాను. నాకూ ఈత వస్తే బాగుండేది అనుకున్నాను. నేర్చుకోవడానికి వయసు అడ్డం కాదని ఇమ్రాన్ గారు అన్నారు.",
        },
        {
          en: "So I joined a class at the swimming pool near my house. On the first day, I was very scared of the deep water.",
          te: "అందుకే మా ఇంటి దగ్గర స్విమ్మింగ్ పూల్‌లో ఒక క్లాస్‌లో చేరాను. మొదటి రోజు లోతైన నీళ్ళని చూసి చాలా భయపడ్డాను.",
        },
        {
          en: "The teacher gave me a life jacket. Slowly, I learned to float. After two months, I could swim across the pool!",
          te: "టీచర్ గారు నాకు ఒక లైఫ్ జాకెట్ ఇచ్చారు. మెల్లగా నీటి మీద తేలడం నేర్చుకున్నాను. రెండు నెలల తర్వాత, పూల్ ఈ చివరి నుంచి ఆ చివరి దాకా ఈదగలిగాను!",
        },
        {
          en: "Now I go to the pool three times a week. I should have learned years ago. But I'm glad I didn't give up.",
          te: "ఇప్పుడు వారానికి మూడుసార్లు పూల్‌కి వెళ్తున్నాను. ఎన్నో ఏళ్ళ ముందే నేర్చుకోవాల్సింది. కానీ మధ్యలో వదిలేయనందుకు సంతోషంగా ఉంది.",
        },
        {
          en: "This year at Rushikonda, I didn't sit on the sand. I went into the sea with my friends.",
          te: "ఈ సంవత్సరం రుషికొండలో నేను ఇసుక మీద కూర్చోలేదు. స్నేహితులతో పాటు సముద్రంలోకి వెళ్ళాను.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Learning to swim at sixty", "A holiday in Goa", "A friend who got lost at the beach"],
          answer: 0,
        },
        {
          prompt: { en: "What did Satish use to do at the beach?", te: "బీచ్‌లో సతీష్ గారు ఒకప్పుడు ఏం చేసేవారు?" },
          options: ["Sit on the sand and watch", "Swim with his friends", "Sell tea to people"],
          answer: 0,
        },
        {
          prompt: { en: "What did the teacher give him?", te: "టీచర్ గారు ఆయనకి ఏం ఇచ్చారు?" },
          options: ["A life jacket", "A new towel", "A swimming cap"],
          answer: 0,
        },
        {
          prompt: { en: "What did he do this year at Rushikonda?", te: "ఈ సంవత్సరం రుషికొండలో ఆయన ఏం చేశారు?" },
          options: ["He went into the sea", "He sat on the sand", "He stayed at home"],
          answer: 0,
        },
      ],
    },
  ],
};

import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 62, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), plus a quick round of formal requests, and a story to end. */

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
  id: "w62-review",
  kind: "review",
  title: { en: "Calling an Office", te: "ఆఫీసుకి ఫోన్ చేయడం" },
  extras: [
    pick("q1", "Would you mind ___ my application?", "నా application కొంచెం చూస్తారా?", ["checking", "to check", "check"], 0, {
      en: "After Would you mind, the action always takes -ing.",
      te: "Would you mind తర్వాత పనికి ఎప్పుడూ -ing వస్తుంది.",
    }),
    pick("q2", "Is it OK if I ___ on Thursday instead?", "బదులుగా గురువారం రావొచ్చా?", ["come", "will come", "coming"], 0, {
      en: "After if, the present already talks about the future, so will is not needed.",
      te: "if తర్వాత present తోనే రేపటి పని చెప్తాం, అందుకే will అక్కర్లేదు.",
    }),
    pick("q3", "Could you possibly ___ it by email?", "వీలైతే దాన్ని email లో పంపిస్తారా?", ["send", "sending", "to send"], 0, {
      en: "After could, use the plain verb, with no to and no -ing.",
      te: "could తర్వాత verb అలాగే వస్తుంది; to గానీ -ing గానీ రావు.",
    }),
    pick(
      "q4",
      "I'm calling ___ behalf of my neighbour.",
      "మా పక్కింటివారి తరఫున ఫోన్ చేస్తున్నాను.",
      ["on", "for", "in"],
      0,
      {
        en: "The fixed phrase is on behalf of, never for or in.",
        te: "ఈ మాట ఎప్పుడూ on behalf of; for గానీ in గానీ కాదు.",
      },
      "preposition",
    ),
    pick("q5", "I ___ last Monday about my certificate.", "నా certificate గురించి పోయిన సోమవారం ఫోన్ చేశాను.", ["called", "have called", "am calling"], 0, {
      en: "With a finished time like last Monday, English uses the past, not have.",
      te: "last Monday లాంటి అయిపోయిన టైమ్ ఉంటే past వాడాలి, have కాదు.",
    }),
    pick(
      "q6",
      "Could you tell me when ___?",
      "అది ఎప్పుడు రెడీ అవుతుందో చెప్తారా?",
      ["it will be ready", "will it be ready", "it ready"],
      0,
      {
        en: "Inside Could you tell me, the question part keeps normal order: it, then will.",
        te: "Could you tell me లోపల ప్రశ్న భాగం మామూలు వరుసలో ఉంటుంది: ముందు it, తర్వాత will.",
      },
      "question",
    ),
    {
      id: "st1",
      type: "story",
      title: { en: "The Wrong Name on the Bill", te: "బిల్లు మీద తప్పు పేరు" },
      teller: { en: "Padma", te: "పద్మ" },
      voice: "a",
      parts: [
        {
          en: "Last month, my house tax bill came by post. My name was not on it. It had the old owner's name.",
          te: "పోయిన నెల నా ఇంటి పన్ను బిల్లు పోస్ట్‌లో వచ్చింది. దాని మీద నా పేరు లేదు. పాత ఓనర్ పేరు ఉంది.",
        },
        {
          en: "I called the municipal office the next morning. I was angry, and I spoke very fast. The clerk said, Please call again later.",
          te: "మర్నాడు పొద్దున మున్సిపల్ ఆఫీసుకి ఫోన్ చేశాను. నాకు కోపం వచ్చింది, చాలా వేగంగా మాట్లాడాను. క్లర్క్ గారు, తర్వాత మళ్ళీ ఫోన్ చేయండి అన్నారు.",
        },
        {
          en: "My friend Geetha laughed when I told her. She said, Speak slowly and politely, and give the bill number first. So I wrote everything down on a piece of paper.",
          te: "నా స్నేహితురాలు గీత గారికి చెప్తే ఆవిడ నవ్వారు. నెమ్మదిగా, మర్యాదగా మాట్లాడండి, ముందు బిల్లు నంబర్ చెప్పండి అన్నారు. అందుకే అన్నీ ఒక కాగితం మీద రాసుకున్నాను.",
        },
        {
          en: "The next day, I called again. Good morning, I said. My name is Padma, and I'm calling about bill number six one three. Would you mind checking the name on it?",
          te: "మర్నాడు మళ్ళీ ఫోన్ చేశాను. నమస్కారం, నా పేరు పద్మ, బిల్లు నంబర్ 613 గురించి ఫోన్ చేశాను, దాని మీద పేరు కొంచెం చూస్తారా అని అడిగాను.",
        },
        {
          en: "This time, the clerk was very helpful. She said the change takes two weeks. I asked, Could you possibly send the new bill by email? She said, Of course.",
          te: "ఈసారి క్లర్క్ గారు చాలా సహాయం చేశారు. మార్పుకి రెండు వారాలు పడుతుందని చెప్పారు. కొత్త బిల్లు email లో పంపగలరా అని అడిగాను. తప్పకుండా అన్నారు.",
        },
        {
          en: "Two weeks passed, but I didn't hear back. So I called once more and asked for an update. The next day, the new bill came by email, with my name on it!",
          te: "రెండు వారాలు గడిచాయి, కానీ ఏ సమాచారం రాలేదు. అందుకే ఇంకోసారి ఫోన్ చేసి update అడిగాను. మర్నాడే నా పేరుతో కొత్త బిల్లు email లో వచ్చింది!",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Getting a wrong bill corrected", "Paying a bill late", "Buying a new house"],
          answer: 0,
        },
        {
          prompt: { en: "Whose name was on the bill?", te: "బిల్లు మీద ఎవరి పేరు ఉంది?" },
          options: ["The old owner's", "Padma's", "Geetha's"],
          answer: 0,
        },
        {
          prompt: { en: "What did Geetha tell Padma to do?", te: "గీత గారు పద్మ గారిని ఏం చేయమన్నారు?" },
          options: ["Speak slowly and politely", "Go to the office", "Write a letter"],
          answer: 0,
        },
        {
          prompt: { en: "How did the new bill come?", te: "కొత్త బిల్లు ఎలా వచ్చింది?" },
          options: ["By email", "By post", "By hand"],
          answer: 0,
        },
      ],
    },
  ],
};

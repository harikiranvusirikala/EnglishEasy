import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 47, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick comparing-and-choosing round, and a story. */

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
  id: "w47-review",
  kind: "review",
  title: { en: "Making a Choice", te: "ఎంపిక చేసుకోవడం" },
  extras: [
    pick("q1", "This phone is as good ___ that one.", "ఈ ఫోన్ ఆ ఫోన్ అంత బాగుంది.", ["as", "than", "like"], 0, {
      en: "Two equal things take as on both sides of the word.",
      te: "రెండూ సమానం అయితే పదానికి రెండు వైపులా as వస్తుంది.",
    }),
    pick("q2", "This plan is not ___ cheap as the old one.", "ఈ ప్లాన్ పాత దానంత చవకగా లేదు.", ["as", "more", "very"], 0, {
      en: "Not as cheap as keeps as on both sides; Telugu అంత is only one word.",
      te: "not as cheap as లో రెండు వైపులా as; తెలుగు 'అంత' ఒక్కటే కాబట్టి ఒక as మర్చిపోతాం.",
    }),
    pick("q3", "I prefer the train ___ the bus.", "నాకు బస్సు కంటే రైలే ఇష్టం.", ["to", "than", "from"], 0, {
      en: "Prefer takes to before the other thing; Telugu కంటే pulls us to than.",
      te: "prefer తో రెండోదాని ముందు to; తెలుగు 'కంటే' వల్ల than అనేస్తాం.",
    }),
    pick(
      "q4",
      "Padma ___ walking in the evening.",
      "పద్మ గారికి సాయంత్రం నడవడమే ఇష్టం.",
      ["prefers", "prefer", "is prefer"],
      0,
      {
        en: "Padma is one person, so the verb takes s, though Telugu ఇష్టం stays the same.",
        te: "పద్మ గారు ఒక్కరే కాబట్టి verb కి s; తెలుగు 'ఇష్టం' మారకపోయినా.",
      },
      "he-she-s",
    ),
    pick("q5", "I'd rather ___ a doctor near home.", "ఇంటి దగ్గర డాక్టర్‌కి చూపించుకోవడమే మేలు.", ["see", "to see", "seeing"], 0, {
      en: "After I'd rather, the verb stays plain, with no to and no -ing.",
      te: "I'd rather తర్వాత verb అలాగే; to గానీ -ing గానీ రావు.",
    }),
    pick(
      "q6",
      "I've had this phone ___ five years.",
      "ఈ ఫోన్ ఐదేళ్ళుగా నా దగ్గర ఉంది.",
      ["for", "since", "from"],
      0,
      {
        en: "A length of time takes for; since needs the day or year it started.",
        te: "ఎంత కాలమో చెప్తే for; since కి మొదలైన రోజు గానీ సంవత్సరం గానీ కావాలి.",
      },
      "duration",
    ),
    {
      id: "x-story",
      type: "story",
      title: { en: "Kamala's New Phone", te: "కమల గారి కొత్త ఫోన్" },
      teller: { en: "Kamala", te: "కమల" },
      voice: "a",
      parts: [
        {
          en: "I've had my old phone for seven years. It was a good phone, but it was slow. Last month, the battery stopped working. So I went to the mobile shop near the bus stand.",
          te: "నా పాత ఫోన్ ఏడేళ్ళుగా నా దగ్గర ఉంది. అది మంచి ఫోనే, కానీ నెమ్మదిగా పనిచేసేది. పోయిన నెల దాని బ్యాటరీ పనిచేయడం మానేసింది. అందుకే బస్ స్టాండ్ దగ్గర ఉన్న మొబైల్ షాపుకి వెళ్ళాను.",
        },
        {
          en: "The shop was very crowded on Saturday evening. I waited for twenty minutes. Then a young man came to help me. His name was Imran.",
          te: "శనివారం సాయంత్రం షాపు చాలా రద్దీగా ఉంది. నేను ఇరవై నిమిషాలు ఎదురుచూశాను. అప్పుడు ఒక యువకుడు నాకు సాయం చేయడానికి వచ్చారు. ఆయన పేరు ఇమ్రాన్.",
        },
        {
          en: "Imran showed me two phones. One was 22,000 rupees, and the other was only 10,000. They looked the same to me. I asked, Is the cheaper one as good as the expensive one?",
          te: "ఇమ్రాన్ గారు నాకు రెండు ఫోన్లు చూపించారు. ఒకటి 22,000 రూపాయలు, ఇంకోటి 10,000 మాత్రమే. నాకు రెండూ ఒకేలా కనిపించాయి. చవకది కూడా ఖరీదైనదాంత బాగుంటుందా? అని అడిగాను.",
        },
        {
          en: "Imran was very honest. He said, The camera is not as good, but the battery lasts longer. The screen is a bit smaller too.",
          te: "ఇమ్రాన్ గారు చాలా నిజాయితీగా చెప్పారు. కెమెరా అంత బాగుండదు, కానీ బ్యాటరీ ఎక్కువసేపు వస్తుంది అన్నారు. స్క్రీన్ కూడా కొంచెం చిన్నది అన్నారు.",
        },
        {
          en: "I thought about it. I don't take many photos. I prefer talking to my friends on the phone. And I'd rather not spend 22,000 rupees on a phone.",
          te: "నేను కొంచెం ఆలోచించాను. నేను ఫోటోలు పెద్దగా తీయను. ఫోన్‌లో స్నేహితులతో మాట్లాడటమే నాకు ఇష్టం. ఫోన్ కోసం 22,000 రూపాయలు ఖర్చు పెట్టడం నాకు వద్దు.",
        },
        {
          en: "So I said, I'll take the cheaper one, please. My new phone works very well. My cousin Radha says it's as good as hers! And I saved 12,000 rupees.",
          te: "అందుకే, చవకదే తీసుకుంటాను అని చెప్పాను. నా కొత్త ఫోన్ చాలా బాగా పనిచేస్తోంది. ఇది తన ఫోన్ అంత బాగుందని మా కజిన్ రాధ గారు అంటున్నారు! పైగా నాకు 12,000 రూపాయలు మిగిలాయి.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["Choosing a new phone", "Choosing a clinic", "A trip to Hyderabad"],
          answer: 0,
        },
        {
          prompt: { en: "Why did Kamala need a new phone?", te: "కమల గారికి కొత్త ఫోన్ ఎందుకు కావాల్సి వచ్చింది?" },
          options: ["The battery stopped working.", "She lost her old phone.", "She wanted a better camera."],
          answer: 0,
        },
        {
          prompt: { en: "What was not as good on the cheaper phone?", te: "చవక ఫోన్‌లో ఏది అంత బాగాలేదు?" },
          options: ["The camera", "The battery", "The price"],
          answer: 0,
        },
        {
          prompt: { en: "How much money did Kamala save?", te: "కమల గారికి ఎంత డబ్బు మిగిలింది?" },
          options: ["12,000 rupees", "10,000 rupees", "22,000 rupees"],
          answer: 0,
        },
      ],
    },
  ],
};

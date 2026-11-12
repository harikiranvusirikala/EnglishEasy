import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 69, Day 7 (CURRICULUM §5): the automatic review (with a role play from the Conversation Day), a quick if round, and a story. */

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
  id: "w69-review",
  kind: "review",
  title: { en: "Dreams and Advice", te: "కలలు, సలహాలు" },
  extras: [
    pick("q1", "If I ___ more time, I would learn the veena.", "నాకు ఇంకా టైమ్ ఉంటే, వీణ నేర్చుకుంటాను.", ["had", "have", "would have"], 0, {
      en: "An imagined situation takes the past after if, never would.",
      te: "ఊహించిన విషయంలో if తర్వాత past వస్తుంది; would ఎప్పుడూ రాదు.",
    }),
    pick("q2", "If I were you, I ___ take the morning train.", "నేనైతే, పొద్దుటి ట్రైన్‌లో వెళ్తాను.", ["would", "will", "am"], 0, {
      en: "After If I were you, the advice takes would, often said as I'd.",
      te: "If I were you తర్వాత సలహాలో would వస్తుంది; మాట్లాడేటప్పుడు I'd అంటారు.",
    }),
    pick(
      "q3",
      "What ___ you do if you found a wallet?",
      "మీకు ఒక పర్సు దొరికితే ఏం చేస్తారు?",
      ["would", "will", "do"],
      0,
      {
        en: "With found after if, the question needs would before you.",
        te: "if తర్వాత found ఉంది, అందుకే ప్రశ్నలో you ముందు would కావాలి.",
      },
      "question",
    ),
    pick("q4", "If it rains tomorrow, I ___ go by auto.", "రేపు వర్షం పడితే, ఆటోలో వెళ్తాను.", ["will", "would", "am"], 0, {
      en: "Rain tomorrow can really happen, so the real plan takes will.",
      te: "రేపు వర్షం నిజంగా పడొచ్చు, అందుకే ఆ ప్లాన్‌కి will వస్తుంది.",
    }),
    pick(
      "q5",
      "If I ___ the way, I'd take you there.",
      "నాకు దారి తెలిస్తే, మిమ్మల్ని అక్కడికి తీసుకెళ్తాను.",
      ["knew", "was knowing", "know"],
      0,
      {
        en: "Know is a state, so no -ing; in an imagined if, its past is used.",
        te: "know ఒక స్థితి, అందుకే -ing రాదు; ఊహించే if లో దాని past వస్తుంది.",
      },
      "state-ing",
    ),
    pick(
      "q6",
      "I ___ in this town for twenty years.",
      "నేను ఇరవై ఏళ్ళుగా ఈ ఊర్లో ఉంటున్నాను.",
      ["have lived", "am living", "live"],
      0,
      {
        en: "For a time from the past up to now, English uses have lived; Telugu uses the present.",
        te: "గతం నుంచి ఇప్పటిదాకా అయితే have lived వాడాలి; తెలుగులో 'ఉంటున్నాను' అని present లో అంటాం.",
      },
      "duration",
    ),
    {
      id: "st1",
      type: "story",
      title: { en: "A Small Dream", te: "ఒక చిన్న కల" },
      teller: { en: "Sarala", te: "సరళ" },
      voice: "a",
      parts: [
        {
          en: "Last month, our walking group played a game in the park. Everyone had to say one dream. Imran started first.",
          te: "పోయిన నెల, మా వాకింగ్ గ్రూప్ పార్క్‌లో ఒక ఆట ఆడింది. ప్రతి ఒక్కరూ ఒక కల చెప్పాలి. ఇమ్రాన్ గారు మొదలుపెట్టారు.",
        },
        {
          en: "He said, “If I had more time, I'd teach children to read.” Everyone clapped for him. Then it was my turn.",
          te: "ఆయన “నాకు ఇంకా టైమ్ ఉంటే, పిల్లలకి చదవడం నేర్పిస్తాను” అన్నారు. అందరూ చప్పట్లు కొట్టారు. తర్వాత నా వంతు వచ్చింది.",
        },
        {
          en: "I said, “If I could learn one thing, I'd learn the veena.” I have wanted to learn it since I was a child.",
          te: "నేను “ఒక్కటి నేర్చుకోగలిగితే, వీణ నేర్చుకుంటాను” అన్నాను. చిన్నప్పటి నుంచీ నాకు అది నేర్చుకోవాలని ఉంది.",
        },
        {
          en: "My friend Usha smiled. She said, “If I were you, I wouldn't wait.” Her cousin teaches the veena near the temple.",
          te: "నా స్నేహితురాలు ఉష గారు నవ్వారు. “నేనైతే, ఇంక ఆగను” అన్నారు. వాళ్ళ కజిన్ గుడి దగ్గర వీణ నేర్పిస్తారు.",
        },
        {
          en: "I was nervous, but I called her cousin the next day. Now I go to her class every Saturday morning.",
          te: "నాకు కొంచెం భయం వేసింది, కానీ మర్నాడే ఆవిడ కజిన్‌కి ఫోన్ చేశాను. ఇప్పుడు ప్రతి శనివారం పొద్దున క్లాస్‌కి వెళ్తున్నాను.",
        },
        {
          en: "My fingers are slow, and I make many mistakes. But I am very happy. My small dream is not just a dream now.",
          te: "నా వేళ్ళు నెమ్మదిగా కదులుతాయి, చాలా తప్పులు చేస్తాను. కానీ నాకు చాలా సంతోషంగా ఉంది. నా చిన్న కల ఇప్పుడు కేవలం కల కాదు.",
        },
      ],
      questions: [
        {
          prompt: { en: "What is the story about?", te: "ఈ కథ దేని గురించి?" },
          options: ["A small dream that came true", "A trip to the temple", "A lost veena"],
          answer: 0,
        },
        {
          prompt: { en: "What would Imran do with more time?", te: "ఇంకా టైమ్ ఉంటే ఇమ్రాన్ గారు ఏం చేస్తారు?" },
          options: ["Teach children to read", "Learn the veena", "Walk every morning"],
          answer: 0,
        },
        {
          prompt: { en: "What was Usha's advice?", te: "ఉష గారు ఏం సలహా ఇచ్చారు?" },
          options: ["Don't wait, start now", "Buy a new veena", "Ask the doctor first"],
          answer: 0,
        },
        {
          prompt: { en: "When does Sarala go to class?", te: "సరళ గారు క్లాస్‌కి ఎప్పుడు వెళ్తారు?" },
          options: ["Every Saturday morning", "Every evening", "On Sundays"],
          answer: 0,
        },
      ],
    },
  ],
};

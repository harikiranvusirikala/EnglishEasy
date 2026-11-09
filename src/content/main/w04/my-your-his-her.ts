import type { Lesson } from "../../types";

/** Week 4, Day 2 (CURRICULUM §3): my, your, his, her, our, their. */
export const day: Lesson = {
  id: "my-your-his-her",
  kind: "lesson",
  title: { en: "My, Your, His, Her", te: "నా, మీ, అతని, ఆమె" },
  subtitle: "my / your / his / her",
  summary: {
    en: "Learn to say whose something is with my, your, his, her, our and their.",
    te: "ఏదైనా ఎవరిదో my, your, his, her, our, their తో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "My, Your, His, Her in English for Telugu Speakers",
    description:
      "Say This is my brother and Her name is Padma in English. Simple lessons for Telugu speakers on my, your, his, her, our and their.",
  },
  pattern: [
    { text: "Her name", role: "who" },
    { text: "is", role: "action" },
    { text: "Padma", role: "what" },
  ],
  core: [
    { en: "This is my brother.", te: "ఇతను మా అన్నయ్య.", extra: ["me"] },
    { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ.", extra: ["His"] },
    { en: "His shop is near the temple.", te: "అతని షాప్ గుడి దగ్గర ఉంది.", extra: ["He"] },
    { en: "Is this your bag?", te: "ఇది మీ బ్యాగా?", extra: ["you"] },
    { en: "Our house is small.", te: "మా ఇల్లు చిన్నది.", extra: ["We"] },
    { en: "Their shop is very old.", te: "వాళ్ళ షాప్ చాలా పాతది.", extra: ["They"] },
    { en: "My sister lives in Guntur.", te: "మా చెల్లెలు గుంటూరులో ఉంటుంది.", extra: ["Me"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Show someone a photo and say: This is my … His name is … or Her name is …",
    te: "ఎవరికైనా ఒక ఫోటో చూపించి చెప్పండి: This is my … His name is … లేదా Her name is …",
  },
  words: [
    { en: "his", te: "అతని" },
    { en: "her", te: "ఆమె, ఆవిడ (ది)" },
    { en: "our", te: "మా, మన" },
    { en: "their", te: "వాళ్ళ" },
    { en: "photo", te: "ఫోటో" },
  ],
  grammar: ["have-has-possessives", "am-is-are"],
  topics: ["people", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "His for a man, her for a woman", te: "మగవారికి his, ఆడవారికి her" },
      body: {
        en: "These words come before the thing: my bag, your bag, his bag, her bag. His is for a man; her is for a woman. Our is for us; their is for them.",
        te: "ఈ పదాలు వస్తువు ముందు వస్తాయి: my bag, your bag, his bag, her bag. his అంటే అతని (మగవారు); her అంటే ఆమె (ఆడవారు). our అంటే మా, their అంటే వాళ్ళ.",
      },
      bridge: {
        te: ["ఆవిడ", "పేరు", "పద్మ"],
        en: [
          { text: "Her name", role: "who" },
          { text: "is", role: "action" },
          { text: "Padma", role: "what" },
        ],
      },
      examples: [
        { en: "This is my brother.", te: "ఇతను మా అన్నయ్య." },
        { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ." },
        { en: "His shop is near the temple.", te: "అతని షాప్ గుడి దగ్గర ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word?", te: "ఏ పదం వాడాలి?" },
      items: [
        {
          form: "my / your",
          useFor: {
            en: "My is yours, your is the other person's. Telugu often says మా, but English says my for one person.",
            te: "my అంటే నా, your అంటే మీ. తెలుగులో 'మా అన్నయ్య' అన్నా, ఒక్కరి గురించి ఇంగ్లీష్‌లో my అనాలి.",
          },
          example: { en: "My sister lives in Guntur.", te: "మా చెల్లెలు గుంటూరులో ఉంటుంది." },
        },
        {
          form: "his / her",
          useFor: { en: "His for a man, her for a woman.", te: "మగవారికి his, ఆడవారికి her." },
          example: { en: "Her name is Padma.", te: "ఆవిడ పేరు పద్మ." },
        },
        {
          form: "our / their",
          useFor: { en: "Our for us, their for them.", te: "మనకి/మాకు our, వాళ్ళకి their." },
          example: { en: "Our house is small.", te: "మా ఇల్లు చిన్నది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Padma is here. His bag is red.",
      right: "Padma is here. Her bag is red.",
      why: {
        en: "Padma is a woman, so say her.",
        te: "పద్మ ఆడవారు, కాబట్టి her అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "This is me brother.",
      right: "This is my brother.",
      why: {
        en: "Before a thing or person, say my, not me.",
        te: "వస్తువు లేదా మనిషి ముందు me కాదు, my అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Ravi is a man. Which sentence is correct?", te: "రవి మగవాడు. ఏ వాక్యం సరైనది?" },
      options: ["Her shop is big.", "His shop is big.", "He shop is big."],
      answer: 1,
      why: {
        en: "For a man, say his.",
        te: "మగవారికి his.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "This is Sita. ___ house is big.",
      te: "ఈమె సీత. ఆమె ఇల్లు పెద్దది.",
      options: ["His", "Her", "She"],
      answer: 1,
      why: {
        en: "Sita is a woman, so her.",
        te: "సీత ఆడవారు, కాబట్టి her.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: మా ఇల్లు చిన్నది (the family's house)?", te: "మా ఇల్లు చిన్నది (కుటుంబం అందరిదీ) — ఏది సరైనది?" },
      options: ["Our house is small.", "We house is small.", "Us house is small."],
      answer: 0,
      why: {
        en: "Before a thing, say our.",
        te: "వస్తువు ముందు our అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "This is Ravi. Her bike is new.",
      wrongIndex: 3,
      fix: "This is Ravi. His bike is new.",
      why: {
        en: "Ravi is a man, so his.",
        te: "రవి మగవాడు, కాబట్టి his.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You show a friend a photo of your sister Padma. Say her name.",
        te: "మీ చెల్లెలు పద్మ ఫోటో మీ స్నేహితులకు చూపిస్తున్నారు. ఆమె పేరు చెప్పండి.",
      },
      expected: ["Her name is Padma.", "This is my sister Padma.", "This is my sister."],
      options: ["His name is Padma.", "Her name is Padma.", "She name is Padma."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone points to your bag and asks: Is this your bag? Say yes.",
        te: "ఒకరు మీ బ్యాగ్ చూపించి అడుగుతున్నారు: Is this your bag? అవునని చెప్పండి.",
      },
      expected: ["Yes, it is my bag.", "Yes, this is my bag."],
      options: ["Yes, it is my bag.", "Yes, it is me bag.", "Yes, it is mine bag."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Showing a photo", te: "ఫోటో చూపించడం" },
    scene: {
      en: "You show your friend Sita a photo of your brother and sister.",
      te: "మీ స్నేహితురాలు సీతకు మీ అన్నయ్య, చెల్లెలి ఫోటో చూపిస్తున్నారు.",
    },
    partner: { en: "Sita (a friend)", te: "సీత (స్నేహితురాలు)" },
    skills: [{ id: "whose", label: { en: "my / his / her", te: "my / his / her వాడకం" } }],
    turns: [
      {
        partner: "Who is this in the photo?",
        te: "ఫోటోలో ఇతను ఎవరు?",
        hint: { en: "Say: This is my brother.", te: "ఇలా చెప్పండి: This is my brother." },
        replies: [
          { say: "This is my brother.", good: true, skill: "whose" },
          { say: "This is me brother.", good: false, skill: "whose" },
        ],
      },
      {
        partner: "What is his name?",
        te: "అతని పేరు ఏంటి?",
        hint: { en: "Say: His name is Ravi.", te: "ఇలా చెప్పండి: His name is Ravi." },
        replies: [
          { say: "His name is Ravi.", good: true, skill: "whose" },
          { say: "Her name is Ravi.", good: false, skill: "whose" },
        ],
      },
      {
        partner: "And who is she?",
        te: "మరి ఈమె ఎవరు?",
        hint: { en: "Say: She is my sister, Padma.", te: "ఇలా చెప్పండి: She is my sister, Padma." },
        replies: [
          { say: "She is my sister, Padma.", good: true, skill: "whose" },
          { say: "He is my sister, Padma.", good: false, skill: "whose" },
        ],
      },
      {
        partner: "Is that your house behind them?",
        te: "వాళ్ళ వెనకాల ఉన్నది మీ ఇల్లా?",
        hint: { en: "Say: Yes, that is our house.", te: "ఇలా చెప్పండి: Yes, that is our house." },
        replies: [
          { say: "Yes, that is our house.", good: true, skill: "whose" },
          { say: "Yes, that is we house.", good: false, skill: "whose" },
        ],
      },
    ],
  },
};

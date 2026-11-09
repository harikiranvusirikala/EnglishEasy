import type { Lesson } from "../../types";

/** Week 13, Day 2 (CURRICULUM §4): amounts — a kilo of, half a kilo of, a bunch of, a dozen, a packet of. */
export const day: Lesson = {
  id: "a-kilo-of",
  kind: "lesson",
  title: { en: "A Kilo Of, A Bunch Of", te: "కిలో, కట్ట, డజను" },
  subtitle: "a kilo of / a bunch of",
  summary: {
    en: "Learn to say how much you want: half a kilo of beans, a bunch of coriander, a dozen bananas.",
    te: "ఎంత కావాలో చెప్పడం నేర్చుకుందాం: half a kilo of beans, a bunch of coriander, a dozen bananas.",
  },
  seo: {
    title: "A Kilo Of, A Bunch Of in English for Telugu Speakers",
    description:
      "Say I need half a kilo of beans and Give me a bunch of coriander. Simple lessons for Telugu speakers on amounts at the market.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "half a kilo of beans", role: "what" },
  ],
  core: [
    { en: "I need half a kilo of beans.", te: "నాకు అర కిలో బీన్స్ కావాలి.", extra: ["am"] },
    { en: "Give me a bunch of coriander, please.", te: "ఒక కట్ట కొత్తిమీర ఇవ్వండి.", extra: ["bunches"] },
    { en: "A dozen bananas, please.", te: "ఒక డజను అరటిపండ్లు ఇవ్వండి.", extra: ["banana"] },
    { en: "I need a quarter kilo of ginger.", te: "నాకు పావు కిలో అల్లం కావాలి.", extra: ["kilos"] },
    { en: "Can I have two packets of milk?", te: "రెండు పాల ప్యాకెట్లు ఇవ్వగలరా?", extra: ["packet"] },
    { en: "Give me two hundred grams of chillies.", te: "రెండు వందల గ్రాముల మిరపకాయలు ఇవ్వండి.", extra: ["gram"] },
    { en: "That's enough, thank you.", te: "చాలు, థాంక్యూ.", extra: ["much"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "In your kitchen, name three things with a kilo of, a bunch of or a packet of.",
    te: "మీ వంటింట్లో మూడు వస్తువులను a kilo of, a bunch of, a packet of తో చెప్పండి.",
  },
  words: [
    { en: "half", te: "అర, సగం" },
    { en: "bunch", te: "కట్ట" },
    { en: "coriander", te: "కొత్తిమీర" },
    { en: "beans", te: "బీన్స్" },
    { en: "grams", te: "గ్రాములు" },
  ],
  grammar: ["plurals-countable"],
  topics: ["market", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How much do you want?", te: "ఎంత కావాలి?" },
      body: {
        en: "Say the amount, then of, then the thing: a kilo of onions, a bunch of coriander, a packet of milk. For half, say half a kilo of. A dozen needs no of: a dozen bananas.",
        te: "ముందు ఎంతో, తర్వాత of, తర్వాత వస్తువు: a kilo of onions, a bunch of coriander, a packet of milk. అర కిలో అంటే half a kilo of. డజనుకి of అక్కర్లేదు: a dozen bananas.",
      },
      bridge: {
        te: ["నాకు", "అర కిలో బీన్స్", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "half a kilo of beans", role: "what" },
        ],
      },
      examples: [
        { en: "I need half a kilo of beans.", te: "నాకు అర కిలో బీన్స్ కావాలి." },
        { en: "Give me a bunch of coriander, please.", te: "ఒక కట్ట కొత్తిమీర ఇవ్వండి." },
        { en: "A dozen bananas, please.", te: "ఒక డజను అరటిపండ్లు ఇవ్వండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which word for which thing", te: "ఏ వస్తువుకి ఏ పదం" },
      items: [
        {
          form: "a kilo of / half a kilo of",
          useFor: { en: "Vegetables, rice, sugar: by weight.", te: "కూరగాయలు, బియ్యం, చక్కెర: బరువుతో." },
          example: { en: "I need a quarter kilo of ginger.", te: "నాకు పావు కిలో అల్లం కావాలి." },
        },
        {
          form: "a bunch of",
          useFor: { en: "Greens: coriander, mint, spinach.", te: "ఆకుకూరలు: కొత్తిమీర, పుదీనా, పాలకూర." },
          example: { en: "Give me a bunch of coriander, please.", te: "ఒక కట్ట కొత్తిమీర ఇవ్వండి." },
        },
        {
          form: "a dozen",
          useFor: { en: "Bananas and eggs: twelve.", te: "అరటిపండ్లు, గుడ్లు: పన్నెండు." },
          example: { en: "A dozen bananas, please.", te: "ఒక డజను అరటిపండ్లు ఇవ్వండి." },
        },
        {
          form: "a packet of",
          useFor: { en: "Milk, biscuits, salt.", te: "పాలు, బిస్కెట్లు, ఉప్పు." },
          example: { en: "Can I have two packets of milk?", te: "రెండు పాల ప్యాకెట్లు ఇవ్వగలరా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Give half kg beans.",
      right: "Give me half a kilo of beans.",
      why: {
        en: "Say half a kilo of, not half kg.",
        te: "half kg కాదు, half a kilo of అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Two bunch coriander.",
      right: "Two bunches of coriander.",
      why: {
        en: "Two bunches, then of.",
        te: "రెండు అంటే bunches, తర్వాత of.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I need half kilo beans.", "I need half a kilo of beans.", "I need a half kilos of beans."],
      answer: 1,
      why: {
        en: "Half a kilo of: with a and of.",
        te: "half a kilo of: a, of రెండూ కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Give me a bunch ___ coriander.",
      te: "ఒక కట్ట కొత్తిమీర ఇవ్వండి.",
      options: ["of", "in", "for"],
      answer: 0,
      why: {
        en: "A bunch of coriander.",
        te: "a bunch of అనాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You want twelve bananas. What do you say?", te: "మీకు పన్నెండు అరటిపండ్లు కావాలి. ఏమంటారు?" },
      options: ["A dozen bananas, please.", "A dozen of banana, please.", "Twelve dozen bananas, please."],
      answer: 0,
      why: {
        en: "Twelve is a dozen, with no of.",
        te: "పన్నెండు అంటే a dozen; of అక్కర్లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can I have two packet of milk?",
      wrongIndex: 4,
      fix: "Can I have two packets of milk?",
      why: {
        en: "Two packets, with s.",
        te: "రెండు అంటే packets, s తో.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask for half a kilo of beans.",
        te: "అర కిలో బీన్స్ అడగండి.",
      },
      expected: ["Half a kilo of beans, please.", "I need half a kilo of beans.", "Can I have half a kilo of beans?"],
      options: ["Half a kilo of beans, please.", "Half kilo beans give.", "Half a kilos of bean, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask for a bunch of coriander.",
        te: "ఒక కట్ట కొత్తిమీర అడగండి.",
      },
      expected: ["A bunch of coriander, please.", "Give me a bunch of coriander, please.", "Can I have a bunch of coriander?"],
      options: ["A bunch of coriander, please.", "One bunches coriander, please.", "A bunch for coriander, please."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Greens and fruit", te: "ఆకుకూరలు, పండ్లు" },
    scene: {
      en: "At the market, Padma sells greens and fruit. Buy what you need.",
      te: "మార్కెట్‌లో పద్మ ఆకుకూరలు, పండ్లు అమ్ముతోంది. మీకు కావలసినవి కొనండి.",
    },
    partner: { en: "Padma (seller)", te: "పద్మ (అమ్మే ఆమె)" },
    skills: [{ id: "amount", label: { en: "Amounts", te: "ఎంత కావాలో" } }],
    turns: [
      {
        partner: "Come, come! Fresh greens today!",
        te: "రండి, రండి! ఈ రోజు తాజా ఆకుకూరలు!",
        hint: { en: "Say: Give me a bunch of coriander, please.", te: "ఇలా చెప్పండి: Give me a bunch of coriander, please." },
        replies: [
          { say: "Give me a bunch of coriander, please.", good: true, skill: "amount" },
          { say: "Give me a bunch for coriander.", good: false, skill: "amount" },
        ],
      },
      {
        partner: "Here. What else?",
        te: "ఇదిగోండి. ఇంకా ఏం కావాలి?",
        hint: { en: "Say: I need half a kilo of beans.", te: "ఇలా చెప్పండి: I need half a kilo of beans." },
        replies: [
          { say: "I need half a kilo of beans.", good: true, skill: "amount" },
          { say: "I need half kilo beans.", good: false, skill: "amount" },
        ],
      },
      {
        partner: "Okay. Do you want fruit too?",
        te: "సరే. పండ్లు కూడా కావాలా?",
        hint: { en: "Say: Yes, a dozen bananas, please.", te: "ఇలా చెప్పండి: Yes, a dozen bananas, please." },
        replies: [
          { say: "Yes, a dozen bananas, please.", good: true, skill: "amount" },
          { say: "Yes, a dozen of banana, please.", good: false, skill: "amount" },
        ],
      },
      {
        partner: "Here you are. Come again!",
        te: "ఇదిగోండి. మళ్ళీ రండి!",
        hint: { en: "Say: Thank you. See you next week.", te: "ఇలా చెప్పండి: Thank you. See you next week." },
        replies: [
          { say: "Thank you. See you next week.", good: true },
          { say: "Thanks you. See you next week.", good: false },
        ],
      },
    ],
  },
};

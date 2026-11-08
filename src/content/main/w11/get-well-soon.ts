import type { Lesson } from "../../types";

/** Week 11, Day 5 (CURRICULUM §3): sympathy phrases — I'm sorry to hear that, take care, get well soon. */
export const day: Lesson = {
  id: "get-well-soon",
  kind: "lesson",
  title: { en: "Get Well Soon", te: "సానుభూతి" },
  subtitle: "kind words",
  summary: {
    en: "Learn kind words for someone who is unwell: I'm sorry to hear that. Take care. Get well soon.",
    te: "ఒంట్లో బాగాలేని వారికి చెప్పే మంచి మాటలు నేర్చుకుందాం: I'm sorry to hear that. Take care. Get well soon.",
  },
  seo: {
    title: "Get Well Soon: Kind Words in English for Telugu Speakers",
    description:
      "Say I'm sorry to hear that, Take care and Get well soon in English. Simple lessons for Telugu speakers on sympathy, with Telugu explanations.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "sorry", role: "what" },
    { text: "to hear that", role: "action" },
  ],
  core: [
    { en: "I'm sorry to hear that.", te: "అది విని చాలా బాధగా ఉంది.", extra: ["listen"] },
    { en: "Take care.", te: "జాగ్రత్తగా ఉండండి.", extra: ["Keep"] },
    { en: "Get well soon.", te: "త్వరగా కోలుకోండి.", extra: ["good"] },
    { en: "How are you feeling now?", te: "ఇప్పుడు ఎలా ఉంది?", extra: ["feel"] },
    { en: "Do you need anything?", te: "మీకు ఏమైనా కావాలా?", extra: ["Are"] },
    { en: "I'll visit you tomorrow.", te: "రేపు మిమ్మల్ని చూడటానికి వస్తాను.", extra: ["visiting"] },
    { en: "Don't worry. You'll be fine.", te: "కంగారు పడకండి. మీకు బాగైపోతుంది.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Call or message someone who is unwell and say: Take care. Get well soon.",
    te: "ఒంట్లో బాగాలేని ఎవరికైనా ఫోన్ లేదా మెసేజ్ చేసి చెప్పండి: Take care. Get well soon.",
  },
  words: [
    { en: "sorry", te: "బాధగా, క్షమించండి" },
    { en: "hear", te: "వినడం" },
    { en: "take care", te: "జాగ్రత్తగా ఉండండి" },
    { en: "get well", te: "కోలుకోవడం" },
    { en: "fine", te: "బాగానే" },
  ],
  grammar: ["politeness-softening", "present-continuous", "will"],
  topics: ["health", "feelings", "family"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Kind words", te: "మంచి మాటలు" },
      body: {
        en: "When someone is unwell, say I'm sorry to hear that. Ask How are you feeling now? and offer help: Do you need anything? End with Take care and Get well soon.",
        te: "ఎవరికైనా ఒంట్లో బాగాలేకపోతే I'm sorry to hear that అనండి. How are you feeling now? అని అడిగి, Do you need anything? అని సహాయం చెప్పండి. చివర Take care, Get well soon అనండి.",
      },
      bridge: {
        te: ["అది విని", "చాలా బాధగా", "ఉంది"],
        en: [
          { text: "I'm", role: "who" },
          { text: "sorry", role: "what" },
          { text: "to hear that", role: "action" },
        ],
      },
      examples: [
        { en: "I'm sorry to hear that.", te: "అది విని చాలా బాధగా ఉంది." },
        { en: "How are you feeling now?", te: "ఇప్పుడు ఎలా ఉంది?" },
        { en: "Get well soon.", te: "త్వరగా కోలుకోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say, and when", te: "ఏమి, ఎప్పుడు చెప్పాలి" },
      items: [
        {
          form: "I'm sorry to hear that",
          useFor: { en: "When you hear sad news.", te: "బాధాకరమైన వార్త విన్నప్పుడు." },
          example: { en: "I'm sorry to hear that.", te: "అది విని చాలా బాధగా ఉంది." },
        },
        {
          form: "Do you need anything?",
          useFor: { en: "To offer help.", te: "సహాయం చేస్తామని చెప్పడానికి." },
          example: { en: "I'll visit you tomorrow.", te: "రేపు మిమ్మల్ని చూడటానికి వస్తాను." },
        },
        {
          form: "Take care / Get well soon",
          useFor: { en: "At the end of the talk.", te: "మాటల చివర." },
          example: { en: "Take care.", te: "జాగ్రత్తగా ఉండండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Sorry for hearing that.",
      right: "I'm sorry to hear that.",
      why: {
        en: "Say sorry to hear, not sorry for hearing.",
        te: "sorry for hearing కాదు, sorry to hear అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Take rest.",
      right: "Get some rest.",
      why: {
        en: "In English, say get some rest, or rest well.",
        te: "ఇంగ్లీష్‌లో get some rest లేదా rest well అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your friend says: I have a fever. What do you say?", te: "మీ స్నేహితురాలు 'నాకు జ్వరం' అంటోంది. మీరు ఏమంటారు?" },
      options: ["I'm sorry to hear that.", "Sorry for hearing that.", "Good to hear that."],
      answer: 0,
      why: {
        en: "Kind words: I'm sorry to hear that.",
        te: "మంచి మాట: I'm sorry to hear that.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Get well ___.",
      te: "త్వరగా కోలుకోండి.",
      options: ["soon", "fast", "early"],
      answer: 0,
      why: {
        en: "We always say get well soon.",
        te: "ఎప్పుడూ get well soon అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask your aunt how she feels now.", te: "ఇప్పుడు ఎలా ఉందో మీ అత్తని అడగండి." },
      options: ["How are you feeling now?", "How you are feeling now?", "How are you feel now?"],
      answer: 0,
      why: {
        en: "How are you feeling now?",
        te: "How are you feeling now? అని అడగాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'm sorry for hear that.",
      wrongIndex: 2,
      fix: "I'm sorry to hear that.",
      why: {
        en: "Sorry to hear, not for.",
        te: "for కాదు, to hear.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour says he is unwell. Say something kind.",
        te: "పొరుగాయన తనకు బాగాలేదని చెప్తున్నారు. మంచి మాట చెప్పండి.",
      },
      expected: ["I'm sorry to hear that.", "Sorry to hear that. Get well soon."],
      options: ["I'm sorry to hear that.", "Sorry for hearing that.", "I'm sorry to hearing that."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "End a phone call with a friend who is unwell.",
        te: "ఒంట్లో బాగాలేని స్నేహితుడితో ఫోన్ కాల్ ముగించండి.",
      },
      expected: ["Take care. Get well soon.", "Get well soon.", "Take care."],
      options: ["Take care. Get well soon.", "Take care. Get good soon.", "Taking care. Get well soon."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling your aunt", te: "అత్తకి ఫోన్" },
    scene: {
      en: "Your aunt Kamala is unwell. Call her and say kind words.",
      te: "మీ అత్త కమలకి ఒంట్లో బాగాలేదు. ఫోన్ చేసి మంచి మాటలు చెప్పండి.",
    },
    partner: { en: "Kamala (your aunt)", te: "కమల (మీ అత్త)" },
    skills: [{ id: "kind", label: { en: "Kind words", te: "మంచి మాటలు" } }],
    turns: [
      {
        partner: "Hello? I have a bad fever.",
        te: "హలో? నాకు బాగా జ్వరంగా ఉంది.",
        hint: { en: "Say: Oh, I'm sorry to hear that.", te: "ఇలా చెప్పండి: Oh, I'm sorry to hear that." },
        replies: [
          { say: "Oh, I'm sorry to hear that.", good: true, skill: "kind" },
          { say: "Oh, sorry for hearing that.", good: false, skill: "kind" },
        ],
      },
      {
        partner: "I was in bed all week.",
        te: "వారం అంతా మంచం మీదే ఉన్నాను.",
        hint: { en: "Ask: Did you see a doctor?", te: "అడగండి: Did you see a doctor?" },
        replies: [
          { say: "Did you see a doctor?", good: true },
          { say: "Did you saw a doctor?", good: false },
        ],
      },
      {
        partner: "Yes. He gave me some tablets.",
        te: "అవును. ఆయన కొన్ని మాత్రలు ఇచ్చారు.",
        hint: { en: "Offer help: Do you need anything?", te: "సహాయం చెప్పండి: Do you need anything?" },
        replies: [
          { say: "Do you need anything?", good: true, skill: "kind" },
          { say: "Are you need anything?", good: false, skill: "kind" },
        ],
      },
      {
        partner: "No, thank you. My sister is here.",
        te: "వద్దు, థాంక్యూ. మా చెల్లెలు ఇక్కడే ఉంది.",
        hint: { en: "Say: Take care. Get well soon.", te: "ఇలా చెప్పండి: Take care. Get well soon." },
        replies: [
          { say: "Take care. Get well soon.", good: true, skill: "kind" },
          { say: "Take care. Get good soon.", good: false, skill: "kind" },
        ],
      },
    ],
  },
};

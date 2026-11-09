import type { Lesson } from "../../types";

/** Week 8, Day 4 (CURRICULUM §3): could / couldn't for past ability ("When I was young" as a chunk). */
export const day: Lesson = {
  id: "could-in-the-past",
  kind: "lesson",
  title: { en: "I Could … (before)", te: "ఒకప్పుడు చేయగలిగేవాళ్ళం" },
  subtitle: "could / couldn't",
  summary: {
    en: "Learn to say what you could do before, and what you can or can't do now.",
    te: "ఒకప్పుడు ఏమి చేయగలిగేవారో, ఇప్పుడు ఏమి చేయగలరో, చేయలేరో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Could and Couldn't for the Past in English for Telugu Speakers",
    description:
      "Say When I was young, I could swim and I couldn't read English then. Simple lessons for Telugu speakers on could, with Telugu explanations.",
  },
  pattern: [
    { text: "When I was young", role: "when" },
    { text: "I", role: "who" },
    { text: "could swim", role: "action" },
  ],
  core: [
    { en: "I could run fast.", te: "నాకు వేగంగా పరిగెత్తడం వచ్చేది.", extra: ["can"] },
    { en: "When I was young, I could swim.", te: "చిన్నప్పుడు నాకు ఈత వచ్చేది.", extra: ["can"] },
    { en: "I couldn't read English then.", te: "అప్పుడు నాకు ఇంగ్లీష్ చదవడం వచ్చేది కాదు.", extra: ["can't"] },
    { en: "She could sing very well.", te: "ఆవిడ చాలా బాగా పాడేవారు.", extra: ["sang"] },
    { en: "Could you ride a bicycle?", te: "మీకు సైకిల్ తొక్కడం వచ్చేదా?", extra: ["rode"] },
    { en: "Now I can't run fast.", te: "ఇప్పుడు నేను వేగంగా పరిగెత్తలేను.", extra: ["couldn't"] },
    { en: "I could climb trees.", te: "నాకు చెట్లు ఎక్కడం వచ్చేది.", extra: ["climbed"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Tell someone one thing you could do when you were young.",
    te: "చిన్నప్పుడు మీరు చేయగలిగిన ఒక పని ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "young", te: "చిన్న వయసు, చిన్నప్పుడు" },
    { en: "run", te: "పరిగెత్తడం" },
    { en: "fast", te: "వేగంగా" },
    { en: "bicycle", te: "సైకిల్" },
    { en: "climb", te: "ఎక్కడం" },
  ],
  grammar: ["can-could", "past-simple"],
  topics: ["people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Could is can in the past", te: "could అంటే గతంలో can" },
      body: {
        en: "Can is for now. Could is for the past: When I was young, I could swim. Couldn't is the past of can't. After could, the action word stays plain: could run, not could ran.",
        te: "can ఇప్పటి గురించి. could గతం గురించి: When I was young, I could swim. couldn't అంటే గతంలో can't. could తర్వాత verb మారదు: could run, could ran కాదు.",
      },
      bridge: {
        te: ["చిన్నప్పుడు", "నాకు", "ఈత వచ్చేది"],
        en: [
          { text: "When I was young", role: "when" },
          { text: "I", role: "who" },
          { text: "could swim", role: "action" },
        ],
      },
      examples: [
        { en: "When I was young, I could swim.", te: "చిన్నప్పుడు నాకు ఈత వచ్చేది." },
        { en: "I couldn't read English then.", te: "అప్పుడు నాకు ఇంగ్లీష్ చదవడం వచ్చేది కాదు." },
        { en: "Now I can't run fast.", te: "ఇప్పుడు నేను వేగంగా పరిగెత్తలేను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Can or could?", te: "can ఆ, could ఆ?" },
      items: [
        {
          form: "can / can't",
          useFor: { en: "For now.", te: "ఇప్పటికి." },
          example: { en: "Now I can't run fast.", te: "ఇప్పుడు నేను వేగంగా పరిగెత్తలేను." },
        },
        {
          form: "could",
          useFor: { en: "For the past.", te: "గతానికి." },
          example: { en: "I could climb trees.", te: "నాకు చెట్లు ఎక్కడం వచ్చేది." },
        },
        {
          form: "couldn't",
          useFor: { en: "Not able, in the past.", te: "గతంలో చేయలేకపోవడం." },
          example: { en: "I couldn't read English then.", te: "అప్పుడు నాకు ఇంగ్లీష్ చదవడం వచ్చేది కాదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "When I was young, I can swim.",
      right: "When I was young, I could swim.",
      why: {
        en: "When I was young is the past, so can becomes could: I could swim.",
        te: "When I was young అంటే గతం, అందుకే can కాదు, could: I could swim.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I could ran fast.",
      right: "I could run fast.",
      why: {
        en: "After could, the verb stays plain, not past: I could run fast.",
        te: "could తర్వాత verb మారదు, past form రాదు: I could run fast.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["When I was young, I can swim.", "When I was young, I could swim.", "When I was young, I could swam."],
      answer: 1,
      why: {
        en: "Young days are the past, so could, and swim stays plain: I could swim.",
        te: "చిన్నప్పటి సంగతి గతం, అందుకే could; swim మారదు: I could swim.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I ___ read English then.",
      te: "అప్పుడు నాకు ఇంగ్లీష్ చదవడం వచ్చేది కాదు.",
      options: ["couldn't", "can't", "don't"],
      answer: 0,
      why: {
        en: "Telugu వచ్చేది కాదు is the past, so couldn't, not can't: I couldn't read English then.",
        te: "'వచ్చేది కాదు' గతం, అందుకే can't కాదు, couldn't: I couldn't read English then.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence is about the past?", te: "గతం గురించి చెప్పే వాక్యం ఏది?" },
      options: ["I can climb trees.", "I could climb trees.", "I am climbing trees."],
      answer: 1,
      why: {
        en: "Could is the past of can, so it tells about before: I could climb trees.",
        te: "could అంటే గతంలో can; అది ఒకప్పటి గురించి: I could climb trees.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She could sang very well.",
      wrongIndex: 2,
      fix: "She could sing very well.",
      why: {
        en: "After could, the verb stays plain, not past: She could sing very well.",
        te: "could తర్వాత verb మారదు, past form రాదు: She could sing very well.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Could you swim when you were young? Say yes.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Could you swim when you were young? అవునని చెప్పండి.",
      },
      expected: ["Yes, I could.", "Yes, I could swim."],
      options: ["Yes, I could.", "Yes, I can.", "Yes, I could swam."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say you could run fast before, but now you can't.",
        te: "ఒకప్పుడు వేగంగా పరిగెత్తేవారు, ఇప్పుడు పరిగెత్తలేరు అని చెప్పండి.",
      },
      expected: ["I could run fast. Now I can't.", "Now I can't run fast."],
      options: ["I could run fast. Now I can't.", "I can run fast. Now I couldn't.", "I could ran fast. Now I can't."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When we were young", te: "మనం చిన్నప్పుడు" },
    scene: {
      en: "An old friend, Prasad, asks what you could do when you were a child.",
      te: "పాత స్నేహితుడు ప్రసాద్, చిన్నప్పుడు మీరు ఏం చేయగలిగేవారో అడుగుతున్నారు.",
    },
    partner: { en: "Prasad (an old friend)", te: "ప్రసాద్ (పాత స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "could", label: { en: "could / couldn't", te: "could / couldn't వాడకం" } }],
    turns: [
      {
        partner: "What could you do as a child?",
        te: "చిన్నప్పుడు మీకు ఏం చేయడం వచ్చేది?",
        hint: { en: "Tell him one thing you could do as a child.", te: "చిన్నప్పుడు మీకు వచ్చిన ఒక పని చెప్పండి." },
        replies: [
          { say: "I could climb trees.", good: true, skill: "could" },
          { say: "I could climbed trees.", good: false, skill: "could" },
        ],
      },
      {
        partner: "Really? Could you swim too?",
        te: "నిజంగా? ఈత కూడా వచ్చేదా?",
        hint: { en: "Say yes, and how well you swam.", te: "అవునని, ఈత బాగా వచ్చేదని చెప్పండి." },
        replies: [
          { say: "Yes, I could swim very well.", good: true, skill: "could" },
          { say: "Yes, I can swim very well then.", good: false, skill: "could" },
          {
            say: "Of course! Better than you.",
            good: false,
            react: { en: "Ha! Okay, okay. You win.", te: "హహ! సరే, సరే. మీరే గెలిచారు." },
          },
        ],
      },
      {
        partner: "Can you swim now?",
        te: "ఇప్పుడు ఈత కొట్టగలరా?",
        hint: { en: "Answer about now, with can or can't.", te: "ఇప్పటి గురించి can లేదా can't తో చెప్పండి." },
        replies: [
          { say: "No, I can't swim now.", good: true, skill: "could" },
          { say: "Yes, I can still swim.", good: true, skill: "could" },
          { say: "No, I couldn't swim now.", good: false, skill: "could" },
        ],
      },
      {
        partner: "Could you read English then?",
        te: "అప్పట్లో మీకు ఇంగ్లీష్ చదవడం వచ్చేదా?",
        hint: { en: "Say no for then, and yes for now.", te: "అప్పట్లో రాదని, ఇప్పుడు వచ్చని చెప్పండి." },
        replies: [
          { say: "No, I couldn't. Now I can!", good: true, skill: "could" },
          { say: "No, I can't. Now I could!", good: false, skill: "could" },
        ],
      },
    ],
  },
};

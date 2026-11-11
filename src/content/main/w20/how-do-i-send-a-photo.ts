import type { Lesson } from "../../types";

/** Week 20, Day 1 (CURRICULUM §4): How do I …? — asking someone to help you with your phone. */
export const day: Lesson = {
  id: "how-do-i-send-a-photo",
  kind: "lesson",
  title: { en: "How Do I Send a Photo?", te: "ఫోటో ఎలా పంపాలి?" },
  subtitle: "How do I …?",
  summary: {
    en: "Learn to ask for help with your phone: How do I send a photo? Can you show me how, please?",
    te: "ఫోన్ విషయంలో సహాయం అడగడం నేర్చుకుందాం: How do I send a photo? Can you show me how, please?",
  },
  seo: {
    title: "Asking for Help with WhatsApp in English for Telugu Speakers",
    description:
      "Ask How do I send a photo? and Can you show me how, please? Simple lessons for Telugu speakers on asking for help with a phone.",
  },
  pattern: [
    { text: "How do", role: "action" },
    { text: "I", role: "who" },
    { text: "send", role: "action" },
    { text: "a photo?", role: "what" },
  ],
  core: [
    { en: "How do I send a photo?", te: "ఫోటో ఎలా పంపాలి?", extra: ["does"] },
    { en: "Can you show me how, please?", te: "ఎలాగో కొంచెం చూపిస్తారా?", extra: ["showing"] },
    { en: "How do I open this app?", te: "ఈ app ఎలా ఓపెన్ చేయాలి?", extra: ["did"] },
    { en: "How do I save a new number?", te: "కొత్త నంబర్ ఎలా save చేయాలి?", extra: ["saving"] },
    { en: "I want to send this photo to Padma.", te: "ఈ ఫోటో పద్మ గారికి పంపాలి.", extra: ["for"] },
    { en: "How do I forward this to the group?", te: "దీన్ని group కి ఎలా forward చేయాలి?", extra: ["in"] },
    { en: "Please show me once more, slowly.", te: "ఇంకోసారి మెల్లగా చూపించండి.", extra: ["one"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one thing you can't do on your phone. Ask someone: How do I …?",
    te: "ఫోన్‌లో మీకు రాని ఒక పని గుర్తు చేసుకోండి. ఎవరినైనా How do I …? అని అడగండి.",
  },
  words: [
    { en: "send", te: "పంపడం" },
    { en: "WhatsApp", te: "వాట్సాప్" },
    { en: "app", te: "యాప్ (ఫోన్‌లో ప్రోగ్రామ్)" },
    { en: "group", te: "గ్రూప్ (చాలా మంది ఉన్న chat)" },
    { en: "forward", te: "ఫార్వర్డ్ (వచ్చిన మెసేజ్ ఇంకొకరికి పంపడం)" },
  ],
  grammar: ["question-words", "can-could"],
  topics: ["phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking how", te: "ఎలా అని అడగడం" },
      body: {
        en: "To ask for help with your phone, say How do I and then the action: How do I send a photo? Telugu has no word like do here, but English needs it.",
        te: "ఫోన్‌లో సహాయం కావాలంటే How do I తర్వాత verb చెప్పండి: How do I send a photo? తెలుగులో do లాంటి మాట ఉండదు, కానీ ఇంగ్లీష్‌లో do కావాలి.",
      },
      bridge: {
        te: ["ఫోటో", "ఎలా", "పంపాలి?"],
        en: [
          { text: "How do", role: "action" },
          { text: "I", role: "who" },
          { text: "send", role: "action" },
          { text: "a photo?", role: "what" },
        ],
      },
      examples: [
        { en: "How do I send a photo?", te: "ఫోటో ఎలా పంపాలి?" },
        { en: "How do I open this app?", te: "ఈ app ఎలా ఓపెన్ చేయాలి?" },
        { en: "How do I forward this to the group?", te: "దీన్ని group కి ఎలా forward చేయాలి?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking for help", te: "సహాయం అడగడం" },
      items: [
        {
          form: "How do I …?",
          useFor: { en: "Asking for the steps.", te: "ఎలా చేయాలో అడగడానికి." },
          example: { en: "How do I save a new number?", te: "కొత్త నంబర్ ఎలా save చేయాలి?" },
        },
        {
          form: "Can you show me how?",
          useFor: { en: "Asking someone to do it once in front of you.", te: "ఒకసారి చేసి చూపించమని అడగడానికి." },
          example: { en: "Can you show me how, please?", te: "ఎలాగో కొంచెం చూపిస్తారా?" },
        },
        {
          form: "once more",
          useFor: { en: "Asking to see it one more time.", te: "ఇంకోసారి చూడాలంటే." },
          example: { en: "Please show me once more, slowly.", te: "ఇంకోసారి మెల్లగా చూపించండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How I send a photo?",
      right: "How do I send a photo?",
      why: {
        en: "Telugu ఎలా పంపాలి? has no do, but an English how question needs do before I.",
        te: "'ఎలా పంపాలి?' లో do లాంటి మాట లేదు; ఇంగ్లీష్‌లో How తర్వాత do I అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not knowing this app.",
      right: "I don't know this app.",
      why: {
        en: "Know is not an action happening now, so it never takes -ing. Say don't know.",
        te: "know ఇప్పుడు జరుగుతున్న పని కాదు, అందుకే దానికి -ing రాదు. don't know అనండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You want to send a photo. Ask for help.", te: "మీరు ఫోటో పంపాలి. సహాయం అడగండి." },
      options: ["How do I send a photo?", "How I send a photo?", "How do I sending a photo?"],
      answer: 0,
      why: {
        en: "A how question needs do before I, and the action stays plain.",
        te: "How ప్రశ్నలో I ముందు do కావాలి, verb మామూలుగానే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "How ___ I save a new number?",
      te: "కొత్త నంబర్ ఎలా save చేయాలి?",
      options: ["do", "does", "am"],
      answer: 0,
      why: {
        en: "With I, the helper word in a how question is do, never does.",
        te: "I తో ప్రశ్న అడిగితే do వస్తుంది; does రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour showed you once, but it was too fast. What do you say?",
        te: "పక్కింటి వారు ఒకసారి చూపించారు, కానీ చాలా వేగంగా అయిపోయింది. ఏమంటారు?",
      },
      options: ["Please show me once more, slowly.", "Once more show me, slowly.", "Please show me one more, slowly."],
      answer: 0,
      why: {
        en: "Once more means one more time, and in English the action comes first.",
        te: "once more అంటే ఇంకోసారి; ఇంగ్లీష్‌లో verb ముందు వస్తుంది, తెలుగులో లాగా చివర కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "How do I send photo to Padma?",
      wrongIndex: 4,
      fix: "How do I send a photo to Padma?",
      why: {
        en: "One photo needs a before it; Telugu has no word like this.",
        te: "ఒక్క ఫోటో అంటే ముందు a కావాలి; తెలుగులో ఇలాంటి మాట ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour how to send a photo.",
        te: "ఫోటో ఎలా పంపాలో పక్కింటి వారిని అడగండి.",
      },
      expected: ["How do I send a photo?", "How do I send a photo on WhatsApp?", "Can you show me how, please?"],
      options: ["How do I send a photo?", "How I send a photo?", "How do I sending photo?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Ask how to forward a message to the colony group.",
        te: "ఒక మెసేజ్ కాలనీ group కి ఎలా forward చేయాలో అడగండి.",
      },
      expected: ["How do I forward this to the group?", "How do I send this to the group?"],
      options: ["How do I forward this to the group?", "How do I forward this for the group?", "How forward this to group?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Help from a neighbour", te: "పక్కింటి వారి సహాయం" },
    scene: {
      en: "You want to send a photo to your friend Padma. Satish, your young neighbour, comes to help.",
      te: "మీ స్నేహితురాలు పద్మ గారికి ఒక ఫోటో పంపాలి. పక్కింట్లో ఉండే సతీష్ సహాయం చేయడానికి వచ్చారు.",
    },
    partner: { en: "Satish (young neighbour)", te: "సతీష్ (పక్కింటి అబ్బాయి)" },
    voice: "b",
    skills: [
      { id: "how", label: { en: "How do I …?", te: "How do I … అని అడగడం" } },
      { id: "polite", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello! Do you need help with something?",
        te: "నమస్కారం! మీకేమైనా సహాయం కావాలా?",
        hint: { en: "Say yes, and ask how to send a photo.", te: "అవునని, ఫోటో ఎలా పంపాలో అడగండి." },
        replies: [
          { say: "Yes, please. How do I send a photo?", good: true, skill: "how" },
          { say: "Yes. How I send a photo?", good: false, skill: "how", fixIt: "question" },
        ],
      },
      {
        partner: "It's easy! First, open WhatsApp.",
        te: "చాలా సులువు! ముందు WhatsApp ఓపెన్ చేయండి.",
        hint: { en: "Ask him politely to show you how.", te: "ఎలాగో చూపించమని ఆయన్ని మర్యాదగా అడగండి." },
        replies: [
          { say: "Can you show me how, please?", good: true, skill: "polite" },
          { say: "Please do the needful for me.", good: false, skill: "polite", fixIt: "indian-english" },
          {
            say: "Just do it for me. Quick.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! But please learn it too.", te: "సరే, సరే! కానీ మీరు కూడా నేర్చుకోండి." },
          },
        ],
      },
      {
        partner: "Open Padma's chat, then tap the camera. See?",
        te: "పద్మ గారి chat ఓపెన్ చేసి, camera నొక్కండి. చూశారా?",
        hint: { en: "Say sorry, it was fast. Ask to see it again slowly.", te: "Sorry చెప్పి, వేగంగా అయిపోయిందని చెప్పండి. ఇంకోసారి మెల్లగా చూపించమనండి." },
        replies: [
          { say: "Sorry, please show me once more, slowly.", good: true, skill: "polite" },
          { say: "Sorry, once more show me, slowly.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Done! Padma got your photo.",
        te: "అయిపోయింది! పద్మ గారికి మీ ఫోటో వెళ్ళింది.",
        hint: { en: "Thank him for his help.", te: "సహాయం చేసినందుకు ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help.", good: true, skill: "polite" },
          { say: "Thank you. You are very helpful person.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

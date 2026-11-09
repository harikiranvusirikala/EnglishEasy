import type { Lesson } from "../../types";

/** Week 8, Day 3 (CURRICULUM §3): polite requests — can / could / would (When do I use this?). */
export const day: Lesson = {
  id: "can-could-would",
  kind: "lesson",
  title: { en: "Can, Could, Would", te: "మర్యాదగా అడగడం" },
  subtitle: "can / could / would",
  summary: {
    en: "Learn to ask for help politely: can with friends, could and would with strangers and elders.",
    te: "మర్యాదగా సహాయం అడగడం నేర్చుకుందాం: స్నేహితులతో can, తెలియనివాళ్ళతో, పెద్దవాళ్ళతో could, would.",
  },
  seo: {
    title: "Can, Could, Would: Polite Requests in English for Telugu Speakers",
    description:
      "Say Could you help me, please? and Would you read this for me? in English. Simple lessons for Telugu speakers on polite requests.",
  },
  pattern: [
    { text: "Could", role: "action" },
    { text: "you", role: "who" },
    { text: "help me, please?", role: "action" },
  ],
  core: [
    { en: "Can you help me?", te: "మీరు నాకు సహాయం చేస్తారా?", extra: ["to"] },
    { en: "Could you help me, please?", te: "దయచేసి నాకు కొంచెం సహాయం చేయగలరా?", extra: ["helping"] },
    { en: "Would you read this for me?", te: "దయచేసి ఇది నాకు చదివి వినిపిస్తారా?", extra: ["reading"] },
    { en: "Could you speak slowly, please?", te: "దయచేసి నెమ్మదిగా మాట్లాడగలరా?", extra: ["slow"] },
    { en: "Can you open this bottle?", te: "ఈ సీసా తెరుస్తారా?", extra: ["opening"] },
    { en: "Would you close the door, please?", te: "దయచేసి తలుపు వేస్తారా?", extra: ["will"] },
    { en: "Sure, no problem.", te: "తప్పకుండా, పర్వాలేదు.", extra: ["problems"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone for help today with Could you …, please?",
    te: "ఈ రోజు Could you …, please? తో ఎవరినైనా సహాయం అడగండి.",
  },
  words: [
    { en: "help", te: "సహాయం" },
    { en: "could", te: "చేయగలరా (మర్యాదగా)" },
    { en: "slowly", te: "నెమ్మదిగా" },
    { en: "bottle", te: "సీసా" },
    { en: "sure", te: "తప్పకుండా, సరే" },
  ],
  grammar: ["can-could", "would-like", "politeness-softening"],
  topics: ["people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Polite requests", te: "మర్యాదగా అడగడం" },
      body: {
        en: "Can you …? is friendly. Could you …? and Would you …? are more polite: use them with strangers and elders. Add please to be kinder still.",
        te: "Can you …? స్నేహంగా ఉంటుంది. Could you …?, Would you …? ఇంకా మర్యాదగా ఉంటాయి: తెలియనివాళ్ళతో, పెద్దవాళ్ళతో వాడండి. please చేర్చితే ఇంకా బాగుంటుంది.",
      },
      bridge: {
        te: ["దయచేసి", "నాకు సహాయం", "చేయగలరా?"],
        en: [
          { text: "Could", role: "action" },
          { text: "you", role: "who" },
          { text: "help me, please?", role: "action" },
        ],
      },
      examples: [
        { en: "Can you help me?", te: "మీరు నాకు సహాయం చేస్తారా?" },
        { en: "Could you help me, please?", te: "దయచేసి నాకు కొంచెం సహాయం చేయగలరా?" },
        { en: "Would you read this for me?", te: "దయచేసి ఇది నాకు చదివి వినిపిస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "When do I use this?", te: "ఏది ఎప్పుడు వాడాలి?" },
      items: [
        {
          form: "can",
          useFor: { en: "With friends and people you know well.", te: "స్నేహితులు, బాగా తెలిసినవాళ్ళతో." },
          example: { en: "Can you open this bottle?", te: "ఈ సీసా తెరుస్తారా?" },
        },
        {
          form: "could",
          useFor: { en: "With strangers and elders: more polite.", te: "తెలియనివాళ్ళు, పెద్దవాళ్ళతో: ఇంకా మర్యాదగా." },
          example: { en: "Could you speak slowly, please?", te: "దయచేసి నెమ్మదిగా మాట్లాడగలరా?" },
        },
        {
          form: "would",
          useFor: { en: "Polite, when you ask a favour.", te: "మర్యాదగా, ఏదైనా సాయం కోరేటప్పుడు." },
          example: { en: "Would you close the door, please?", te: "దయచేసి తలుపు వేస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Help me.",
      right: "Could you help me, please?",
      why: {
        en: "Help me sounds like an order to a stranger. Ask politely.",
        te: "Help me అంటే తెలియనివాళ్ళకు ఆజ్ఞలా వినిపిస్తుంది. మర్యాదగా అడగండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Could you helping me?",
      right: "Could you help me?",
      why: {
        en: "After could, use the plain action word: help.",
        te: "could తర్వాత మామూలు పని పదం: help.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You need help from a stranger. Which is most polite?", te: "ఒక తెలియని వ్యక్తి సహాయం కావాలి. ఏది ఎక్కువ మర్యాదగా ఉంటుంది?" },
      options: ["Help me.", "Could you help me, please?", "You help me."],
      answer: 1,
      why: {
        en: "Could you …, please? is polite.",
        te: "Could you …, please? మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Could you ___ slowly, please?",
      te: "దయచేసి నెమ్మదిగా మాట్లాడగలరా?",
      options: ["speak", "speaking", "speaks"],
      answer: 0,
      why: {
        en: "After could, speak.",
        te: "could తర్వాత speak.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct request.", te: "సరైన అభ్యర్థనను ఎంచుకోండి." },
      options: ["Would you to read this?", "Would you read this for me?", "Would you reading this?"],
      answer: 1,
      why: {
        en: "Would you + read.",
        te: "Would you తర్వాత read (మామూలు పని పదం).",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Could you helping me, please?",
      wrongIndex: 2,
      fix: "Could you help me, please?",
      why: {
        en: "After could, help (no -ing).",
        te: "could తర్వాత help (-ing లేకుండా).",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You can't read a sign. Ask a stranger politely to read it for you.",
        te: "ఒక బోర్డు మీకు చదవడం రావడం లేదు. ఒక తెలియని వ్యక్తిని మర్యాదగా చదవమని అడగండి.",
      },
      expected: ["Could you read this for me?", "Would you read this for me?", "Could you read this, please?"],
      options: ["Read this.", "Could you read this for me?", "Could you reading this?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A shopkeeper speaks very fast. Ask him to speak slowly.",
        te: "షాప్ అతను చాలా వేగంగా మాట్లాడుతున్నాడు. నెమ్మదిగా మాట్లాడమని అడగండి.",
      },
      expected: ["Could you speak slowly, please?", "Can you speak slowly, please?"],
      options: ["Could you speak slowly, please?", "Could you speaking slowly?", "Speak slowly."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Please read this sign", te: "దయచేసి ఈ బోర్డు చదవండి" },
    scene: {
      en: "You cannot read a sign at the bank. Ask Mohan, a stranger, to help you politely.",
      te: "బ్యాంక్ దగ్గర ఒక బోర్డు మీకు చదవడం రావడం లేదు. మోహన్ అనే తెలియని వ్యక్తిని మర్యాదగా సహాయం అడగండి.",
    },
    partner: { en: "Mohan (a stranger)", te: "మోహన్ (తెలియని వ్యక్తి)" },
    skills: [{ id: "polite", label: { en: "Polite requests", te: "మర్యాదగా అడగడం" } }],
    turns: [
      {
        partner: "Yes? Do you need something?",
        te: "చెప్పండి? ఏమైనా కావాలా?",
        hint: { en: "Say: Could you help me, please?", te: "ఇలా చెప్పండి: Could you help me, please?" },
        replies: [
          { say: "Could you help me, please?", good: true, skill: "polite" },
          { say: "You help me.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Sure. What is it?",
        te: "తప్పకుండా. ఏంటి?",
        hint: { en: "Ask: Could you read this sign for me?", te: "అడగండి: Could you read this sign for me?" },
        replies: [
          { say: "Could you read this sign for me?", good: true, skill: "polite" },
          { say: "Could you reading this sign for me?", good: false, skill: "polite" },
        ],
      },
      {
        partner: "It says the bank is closed.",
        te: "బ్యాంక్ మూసి ఉందని రాసి ఉంది.",
        hint: { en: "Ask: Would you say that again, please?", te: "అడగండి: Would you say that again, please?" },
        replies: [
          { say: "Would you say that again, please?", good: true, skill: "polite" },
          { say: "Would you saying that again, please?", good: false, skill: "polite" },
        ],
      },
      {
        partner: "The bank is closed today.",
        te: "ఈ రోజు బ్యాంక్ మూసి ఉంది.",
        hint: { en: "Say: Thank you very much for your help.", te: "ఇలా చెప్పండి: Thank you very much for your help." },
        replies: [
          { say: "Thank you very much for your help.", good: true, skill: "polite" },
          { say: "Thank you very much for your helping.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

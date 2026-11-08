import type { Lesson } from "../../types";

/** Week 5, Day 5 (CURRICULUM §3): imperatives at home — switch on / off, open / close, don't. */
export const day: Lesson = {
  id: "rooms-and-things",
  kind: "lesson",
  title: { en: "Around the House", te: "ఇంట్లో" },
  subtitle: "switch on / open / close",
  summary: {
    en: "Learn to ask someone to do things at home: switch on the fan, close the door, come in and sit down.",
    te: "ఇంట్లో పనులు చేయమని అడగడం నేర్చుకుందాం: ఫ్యాన్ వేయండి, తలుపు వేయండి, లోపలికి వచ్చి కూర్చోండి.",
  },
  seo: {
    title: "Switch On, Open, Close: English at Home for Telugu Speakers",
    description:
      "Say Please switch on the fan and Close the door, please in English. Simple lessons for Telugu speakers on asking politely at home.",
  },
  pattern: [
    { text: "Please", role: "when" },
    { text: "switch on", role: "action" },
    { text: "the fan", role: "what" },
  ],
  core: [
    { en: "Please switch on the fan.", te: "దయచేసి ఫ్యాన్ వేయండి.", extra: ["off"] },
    { en: "Close the door, please.", te: "దయచేసి తలుపు వేయండి.", extra: ["Open"] },
    { en: "Switch off the light.", te: "లైట్ ఆపేయండి.", extra: ["on"] },
    { en: "Please open the window.", te: "దయచేసి కిటికీ తెరవండి.", extra: ["close"] },
    { en: "Come in and sit down.", te: "లోపలికి వచ్చి కూర్చోండి.", extra: ["sits"] },
    { en: "Don't touch the switch.", te: "స్విచ్ ముట్టుకోకండి.", extra: ["Not"] },
    { en: "This is the bedroom.", te: "ఇది పడకగది.", extra: ["an"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Ask someone at home to do one thing in English: Please switch on the light.",
    te: "ఇంట్లో ఎవరినైనా ఇంగ్లీష్‌లో ఒక పని చేయమని అడగండి: Please switch on the light.",
  },
  words: [
    { en: "fan", te: "ఫ్యాన్" },
    { en: "light", te: "లైట్" },
    { en: "door", te: "తలుపు" },
    { en: "window", te: "కిటికీ" },
    { en: "switch on", te: "వేయడం (ఫ్యాన్, లైట్)" },
  ],
  grammar: ["imperatives", "politeness-softening"],
  topics: ["home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Start with the action", te: "పని పదంతో మొదలుపెట్టండి" },
      body: {
        en: "To ask someone to do something, start with the action word: Close the door. Add please at the start or the end to be polite: Please close the door.",
        te: "ఎవరినైనా ఒక పని చేయమని అడగాలంటే పని పదంతో మొదలుపెట్టండి: Close the door. మర్యాదగా ఉండటానికి మొదట్లో లేదా చివర please చేర్చండి: Please close the door.",
      },
      bridge: {
        te: ["దయచేసి", "ఫ్యాన్", "వేయండి"],
        en: [
          { text: "Please", role: "when" },
          { text: "switch on", role: "action" },
          { text: "the fan", role: "what" },
        ],
      },
      examples: [
        { en: "Please switch on the fan.", te: "దయచేసి ఫ్యాన్ వేయండి." },
        { en: "Close the door, please.", te: "దయచేసి తలుపు వేయండి." },
        { en: "Come in and sit down.", te: "లోపలికి వచ్చి కూర్చోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Switch on or open?", te: "switch on ఆ, open ఆ?" },
      items: [
        {
          form: "switch on / switch off",
          useFor: { en: "For a fan, a light or a TV.", te: "ఫ్యాన్, లైట్, TV కి." },
          example: { en: "Switch off the light.", te: "లైట్ ఆపేయండి." },
        },
        {
          form: "open / close",
          useFor: { en: "For a door, a window or a box.", te: "తలుపు, కిటికీ, డబ్బాకి." },
          example: { en: "Please open the window.", te: "దయచేసి కిటికీ తెరవండి." },
        },
        {
          form: "don't + action",
          useFor: { en: "To ask someone not to do something.", te: "ఏదైనా చేయవద్దని చెప్పడానికి." },
          example: { en: "Don't touch the switch.", te: "స్విచ్ ముట్టుకోకండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Please on the fan.",
      right: "Please switch on the fan.",
      why: {
        en: "On is not an action word. Say switch on.",
        te: "on పని పదం కాదు. switch on అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Close the light.",
      right: "Switch off the light.",
      why: {
        en: "Lights and fans are switched off, not closed.",
        te: "లైట్, ఫ్యాన్‌కి close కాదు, switch off.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Please on the fan.", "Please switch on the fan.", "Please open the fan."],
      answer: 1,
      why: {
        en: "For a fan, say switch on.",
        te: "ఫ్యాన్‌కి switch on.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It is hot. Please ___ the window.",
      te: "వేడిగా ఉంది. దయచేసి కిటికీ తెరవండి.",
      options: ["open", "close", "switch off"],
      answer: 0,
      why: {
        en: "A window is opened.",
        te: "కిటికీని open చేస్తాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You are leaving the room. What do you say about the light?", te: "మీరు గది నుండి వెళ్తున్నారు. లైట్ గురించి ఏమంటారు?" },
      options: ["Close the light.", "Switch off the light.", "Off the light."],
      answer: 1,
      why: {
        en: "Lights are switched off.",
        te: "లైట్‌ని switch off చేస్తాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Please close the fan.",
      wrongIndex: 1,
      fix: "Please switch off the fan.",
      why: {
        en: "A fan is switched off, not closed.",
        te: "ఫ్యాన్‌ని close కాదు, switch off చేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A guest is at your door. Ask them to come in and sit down.",
        te: "ఒక అతిథి మీ తలుపు దగ్గర ఉన్నారు. లోపలికి వచ్చి కూర్చోమని చెప్పండి.",
      },
      expected: ["Come in and sit down.", "Please come in and sit down.", "Please come in."],
      options: ["Come in and sit down.", "Come inside and sitting.", "Coming in and sit down."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "It is dark. Ask your friend to switch on the light.",
        te: "చీకటిగా ఉంది. లైట్ వేయమని మీ స్నేహితుడిని అడగండి.",
      },
      expected: ["Please switch on the light.", "Switch on the light, please."],
      options: ["Please on the light.", "Please switch on the light.", "Please open the light."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A guest at the door", te: "తలుపు దగ్గర అతిథి" },
    scene: {
      en: "Mohan comes to visit. Welcome him and make him comfortable.",
      te: "మోహన్ మిమ్మల్ని చూడటానికి వచ్చారు. ఆయనకు స్వాగతం చెప్పి, సౌకర్యంగా ఉండేలా చూడండి.",
    },
    partner: { en: "Mohan (a guest)", te: "మోహన్ (అతిథి)" },
    skills: [{ id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } }],
    turns: [
      {
        partner: "Hello! Nice house!",
        te: "నమస్తే! ఇల్లు బాగుంది!",
        hint: { en: "Say: Thank you. Please come in.", te: "ఇలా చెప్పండి: Thank you. Please come in." },
        replies: [
          { say: "Thank you. Please come in.", good: true, skill: "ask" },
          { say: "Thank you. Please coming in.", good: false, skill: "ask" },
        ],
      },
      {
        partner: "It is very hot today.",
        te: "ఈ రోజు చాలా వేడిగా ఉంది.",
        hint: { en: "Say: I will switch on the fan.", te: "ఇలా చెప్పండి: I will switch on the fan." },
        replies: [
          { say: "I will switch on the fan.", good: true, skill: "ask" },
          { say: "I will on the fan.", good: false, skill: "ask" },
        ],
      },
      {
        partner: "Is this the kitchen?",
        te: "ఇది వంటగదా?",
        hint: { en: "Say: No, this is the bedroom.", te: "ఇలా చెప్పండి: No, this is the bedroom." },
        replies: [
          { say: "No, this is the bedroom.", good: true },
          { say: "No, this is bedroom.", good: false },
        ],
      },
      {
        partner: "Oh, it is raining now!",
        te: "అయ్యో, ఇప్పుడు వర్షం పడుతోంది!",
        hint: { en: "Ask him: Please close the window.", te: "ఆయనను అడగండి: Please close the window." },
        replies: [
          { say: "Please close the window.", good: true, skill: "ask" },
          { say: "Please off the window.", good: false, skill: "ask" },
        ],
      },
    ],
  },
};

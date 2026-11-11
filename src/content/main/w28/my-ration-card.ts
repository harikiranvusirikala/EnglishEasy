import type { Lesson } from "../../types";

/** Week 28, Day 2 (CURRICULUM §4): Is my name on …?; When does … come? — the ration card and the ration shop. */
export const day: Lesson = {
  id: "my-ration-card",
  kind: "lesson",
  title: { en: "My Ration Card", te: "నా రేషన్ కార్డు" },
  subtitle: "Is my name on …?",
  summary: {
    en: "Learn to ask about your ration card and your rations: Is my name on the card? When does the rice come?",
    te: "రేషన్ కార్డు, రేషన్ గురించి అడగడం నేర్చుకుందాం: Is my name on the card? When does the rice come?",
  },
  seo: {
    title: "Ration Card Questions in English for Telugu Speakers",
    description:
      "Ask Is my name on the card? and When does the rice come? at the ration shop. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Is", role: "action" },
    { text: "my name", role: "who" },
    { text: "on the card?", role: "what" },
  ],
  core: [
    { en: "Is my name on the card?", te: "కార్డులో నా పేరు ఉందా?", extra: ["in"] },
    { en: "My name is not on the card.", te: "కార్డులో నా పేరు లేదు.", extra: ["no"] },
    { en: "When does the rice come?", te: "బియ్యం ఎప్పుడు వస్తాయి?", extra: ["do"] },
    { en: "I want to add my mother's name.", te: "మా అమ్మ పేరు చేర్పించాలనుకుంటున్నాను.", extra: ["mother"] },
    { en: "The rice comes in the first week.", te: "నెల మొదటి వారంలో బియ్యం వస్తాయి.", extra: ["come"] },
    { en: "Is the ration shop open today?", te: "ఈ రోజు రేషన్ షాప్ తెరిచి ఉందా?", extra: ["opened"] },
    { en: "Do I need my Aadhaar card for this?", te: "దీనికి నా ఆధార్ కార్డ్ కావాలా?", extra: ["Am"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a neighbour about this month's rations: When does the rice come?",
    te: "ఈ నెల రేషన్ గురించి పక్కింటివాళ్ళని అడగండి: When does the rice come?",
  },
  words: [
    { en: "ration card", te: "రేషన్ కార్డు" },
    { en: "ration shop", te: "రేషన్ షాప్, చౌక ధరల దుకాణం" },
    { en: "member", te: "సభ్యులు (కార్డులో ఉన్నవాళ్ళు)" },
    { en: "missing", te: "లేదు, కనిపించట్లేదు" },
    { en: "list", te: "లిస్టు, జాబితా" },
  ],
  grammar: ["yes-no-questions", "prepositions", "present-simple"],
  topics: ["offices", "food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Is my name on …? When does … come?", te: "Is my name on …? When does … come? వాడకం" },
      body: {
        en: "To check a card or a list, ask Is my name on the card? A name is on a card, not in it. For something that comes every month, ask When does the rice come?",
        te: "కార్డులో పేరు ఉందా అని అడగాలంటే Is my name on the card? అనండి; ఇక్కడ 'లో' కి on వాడాలి. ప్రతి నెల వచ్చేది ఎప్పుడో అడగాలంటే When does the rice come?",
      },
      bridge: {
        te: ["కార్డులో", "నా పేరు", "ఉందా?"],
        en: [
          { text: "Is", role: "action" },
          { text: "my name", role: "who" },
          { text: "on the card?", role: "what" },
        ],
      },
      examples: [
        { en: "Is my name on the card?", te: "కార్డులో నా పేరు ఉందా?" },
        { en: "My name is not on the card.", te: "కార్డులో నా పేరు లేదు." },
        { en: "When does the rice come?", te: "బియ్యం ఎప్పుడు వస్తాయి?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking about your ration card", te: "రేషన్ కార్డు గురించి అడగడం" },
      items: [
        {
          form: "Is my name on …?",
          useFor: { en: "Checking a card or a list.", te: "కార్డులో, లిస్టులో పేరు ఉందా అని చూడటం." },
          example: { en: "Is my name on the card?", te: "కార్డులో నా పేరు ఉందా?" },
        },
        {
          form: "When does … come?",
          useFor: { en: "Asking about a regular time.", te: "ప్రతిసారి ఎప్పుడు వస్తుందో అడగడం." },
          example: { en: "When does the rice come?", te: "బియ్యం ఎప్పుడు వస్తాయి?" },
        },
        {
          form: "I want to add …",
          useFor: { en: "Asking to put a name on the card.", te: "కార్డులో పేరు చేర్చమని అడగడం." },
          example: { en: "I want to add my mother's name.", te: "మా అమ్మ పేరు చేర్పించాలనుకుంటున్నాను." },
        },
        {
          form: "Is … open today?",
          useFor: { en: "Checking before you go.", te: "వెళ్ళే ముందు తెలుసుకోవడం." },
          example: { en: "Is the ration shop open today?", te: "ఈ రోజు రేషన్ షాప్ తెరిచి ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "My name is not in the card.",
      right: "My name is not on the card.",
      why: {
        en: "Telugu says కార్డులో, but in English a name is written on a card.",
        te: "తెలుగులో 'కార్డులో' అంటాం; ఇంగ్లీష్‌లో పేరు కార్డు మీద రాసి ఉంటుంది, అందుకే on.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "When the rice comes?",
      right: "When does the rice come?",
      why: {
        en: "A Telugu question adds no extra word, but English adds does, and come loses its s.",
        te: "తెలుగు ప్రశ్నలో అదనపు పదం ఉండదు; ఇంగ్లీష్‌లో does చేర్చాలి, అప్పుడు come కి s పోతుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "You want to check the ration card. What do you ask?",
        te: "రేషన్ కార్డులో మీ పేరు ఉందో లేదో తెలుసుకోవాలి. ఏమని అడుగుతారు?",
      },
      options: ["Is my name on the card?", "Is my name in the card?", "Are my name on the card?"],
      answer: 0,
      why: {
        en: "A name is written on a card, so use on, and one name takes is.",
        te: "పేరు కార్డు మీద రాసి ఉంటుంది, అందుకే on; ఒక్క పేరుకి is.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "When ___ the rice come?",
      te: "బియ్యం ఎప్పుడు వస్తాయి?",
      options: ["does", "do", "is"],
      answer: 0,
      why: {
        en: "Rice counts as one thing, like he or she, so use does.",
        te: "rice ని ఒక్కటిగా లెక్కిస్తారు, he లేదా she లాగా; అందుకే does.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The dealer says: The rice comes in the first week. When do you go?",
        te: "డీలర్ The rice comes in the first week అన్నారు. మీరు ఎప్పుడు వెళ్ళాలి?",
      },
      options: ["Between the first and the seventh", "On the last day of the month", "Every Sunday"],
      answer: 0,
      why: {
        en: "The first week means the first seven days of the month.",
        te: "first week అంటే నెలలో మొదటి ఏడు రోజులు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Each member gets five kilo of rice.",
      wrongIndex: 4,
      fix: "Each member gets five kilos of rice.",
      why: {
        en: "Five is more than one, so kilo takes s.",
        te: "ఐదు అంటే ఒకటి కంటే ఎక్కువ; అందుకే kilo కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the dealer when the rice comes this month.",
        te: "ఈ నెల బియ్యం ఎప్పుడు వస్తాయో డీలర్‌ని అడగండి.",
      },
      expected: ["When does the rice come this month?", "When does the rice come?"],
      options: ["When does the rice come this month?", "When the rice comes this month?", "When is the rice come this month?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your mother's name is missing from the card. Say you want to add it.",
        te: "కార్డులో మీ అమ్మ పేరు లేదు. ఆ పేరు చేర్పించాలని చెప్పండి.",
      },
      expected: ["I want to add my mother's name.", "I want to add my mother's name, please."],
      options: ["I want to add my mother's name.", "I want to add my mother name.", "I want adding my mother's name."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the ration shop", te: "రేషన్ షాప్‌లో" },
    scene: {
      en: "It is the first week of the month. Salma runs the ration shop.",
      te: "ఇది నెల మొదటి వారం. సల్మా గారు రేషన్ షాప్ నడుపుతున్నారు.",
    },
    partner: { en: "Salma (ration shop dealer)", te: "సల్మా (రేషన్ షాప్ డీలర్)" },
    skills: [
      { id: "ask", label: { en: "Asking about rations", te: "రేషన్ గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Next, please. Your ration card?",
        te: "తర్వాత ఎవరు? మీ రేషన్ కార్డ్?",
        hint: { en: "Greet her, and give her your card.", te: "నమస్కారం చెప్పి, కార్డ్ ఇవ్వండి." },
        replies: [
          { say: "Good morning. Here is my card.", good: true, skill: "polite" },
          {
            say: "Take it. Give me rice fast.",
            good: false,
            skill: "polite",
            react: { en: "Please wait. Everyone is in the queue.", te: "కొంచెం ఆగండి. అందరూ లైన్‌లో ఉన్నారు." },
          },
        ],
      },
      {
        partner: "Please give your fingerprint on this machine.",
        te: "ఈ మెషిన్ మీద వేలిముద్ర వేయండి.",
        hint: { en: "Say okay, and ask about the sugar.", te: "సరే అని, చక్కెర గురించి అడగండి." },
        replies: [
          { say: "Okay. When does the sugar come?", good: true, skill: "ask" },
          { say: "Okay. When the sugar comes?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "The sugar comes next week. Anything else?",
        te: "చక్కెర వచ్చే వారం వస్తుంది. ఇంకేమైనా?",
        hint: { en: "Say your mother's name is missing from the card.", te: "కార్డులో మీ అమ్మ పేరు లేదని చెప్పండి." },
        replies: [
          { say: "Yes. My mother's name is not on the card.", good: true, skill: "ask" },
          { say: "Yes. My mother name is not in the card.", good: false, skill: "ask", fixIt: "preposition" },
        ],
      },
      {
        partner: "For that, you have to go to the ward secretariat.",
        te: "దానికి మీరు వార్డ్ సచివాలయానికి వెళ్ళాలి.",
        hint: { en: "Thank her, and say when you will go.", te: "థాంక్స్ చెప్పి, ఎప్పుడు వెళ్తారో చెప్పండి." },
        replies: [
          { say: "Thank you. I will go there tomorrow.", good: true, skill: "polite" },
          { say: "Thank you. I will going there tomorrow.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

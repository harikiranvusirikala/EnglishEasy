import type { Lesson } from "../../types";

/** Week 8, Day 1 (CURRICULUM §3): can / can't for ability; Can you …? */
export const day: Lesson = {
  id: "can-and-cant",
  kind: "lesson",
  title: { en: "Can & Can't", te: "చేయగలను" },
  subtitle: "can / can't",
  summary: {
    en: "Learn to say what you can and can't do, and to ask others: Can you swim?",
    te: "మీరు ఏమి చేయగలరో, ఏమి చేయలేరో చెప్పడం, ఇతరులను Can you …? అని అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Can and Can't in English for Telugu Speakers",
    description:
      "Say I can cook, I can't drive and Can you swim? in English. Simple lessons for Telugu speakers on can and can't, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "can", role: "action" },
    { text: "cook", role: "action" },
  ],
  core: [
    { en: "I can cook.", te: "నేను వంట చేయగలను.", extra: ["cooks"] },
    { en: "I can't drive.", te: "నాకు డ్రైవింగ్ రాదు.", extra: ["don't"] },
    { en: "Can you swim?", te: "మీకు ఈత వచ్చా?", extra: ["Do"] },
    { en: "She can sing very well.", te: "ఆమె చాలా బాగా పాడగలదు.", extra: ["sings"] },
    { en: "He can't read English.", te: "అతనికి ఇంగ్లీష్ చదవడం రాదు.", extra: ["reads"] },
    { en: "Yes, I can.", te: "అవును, వచ్చు.", extra: ["do"] },
    { en: "I can help you on Sunday.", te: "ఆదివారం నేను మీకు సహాయం చేయగలను.", extra: ["to"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Tell someone two things you can do and one thing you can't do.",
    te: "మీరు చేయగలిగే రెండు పనులు, చేయలేని ఒక పని ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "can", te: "చేయగలను, వచ్చు" },
    { en: "can't", te: "చేయలేను, రాదు" },
    { en: "drive", te: "డ్రైవ్ చేయడం, నడపడం" },
    { en: "swim", te: "ఈత కొట్టడం" },
    { en: "sing", te: "పాడటం" },
  ],
  grammar: ["can-could"],
  topics: ["people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Can means able to", te: "can అంటే చేయగలను" },
      body: {
        en: "Telugu says చేయగలను or వచ్చు. English says can, then the action: I can cook. After can, no to and no s: She can sing. Can't means cannot.",
        te: "తెలుగులో 'చేయగలను' లేదా 'వచ్చు' అంటాం. ఇంగ్లీష్‌లో can, తర్వాత పని పదం: I can cook. can తర్వాత to రాదు, s రాదు: She can sing. can't అంటే చేయలేను.",
      },
      bridge: {
        te: ["నేను", "వంట", "చేయగలను"],
        en: [
          { text: "I", role: "who" },
          { text: "can", role: "action" },
          { text: "cook", role: "action" },
        ],
      },
      examples: [
        { en: "I can cook.", te: "నేను వంట చేయగలను." },
        { en: "I can't drive.", te: "నాకు డ్రైవింగ్ రాదు." },
        { en: "Can you swim?", te: "మీకు ఈత వచ్చా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Can, can't, Can you …?", te: "can, can't, Can you …? — ఎలా వాడాలి" },
      items: [
        {
          form: "can + action",
          useFor: { en: "No to and no s after can.", te: "can తర్వాత to, s రావు." },
          example: { en: "She can sing very well.", te: "ఆమె చాలా బాగా పాడగలదు." },
        },
        {
          form: "can't + action",
          useFor: { en: "To say you are not able.", te: "చేయలేమని చెప్పడానికి." },
          example: { en: "He can't read English.", te: "అతనికి ఇంగ్లీష్ చదవడం రాదు." },
        },
        {
          form: "Can you …? → Yes, I can",
          useFor: { en: "Ask with can first; answer with can.", te: "can ముందు పెట్టి అడగాలి; జవాబులో can." },
          example: { en: "Yes, I can.", te: "అవును, వచ్చు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I can able to cook.",
      right: "I can cook.",
      why: {
        en: "Can already means able. Just say I can cook.",
        te: "can అంటేనే able. I can cook చాలు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She can sings.",
      right: "She can sing.",
      why: {
        en: "After can, the action word has no s.",
        te: "can తర్వాత పని పదానికి s ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I can able to cook.", "I can cook.", "I can to cook."],
      answer: 1,
      why: {
        en: "Can + action: I can cook.",
        te: "can + పని పదం: I can cook.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She can ___ very well.",
      te: "ఆమె చాలా బాగా పాడగలదు.",
      options: ["sing", "sings", "singing"],
      answer: 0,
      why: {
        en: "After can, sing (no s).",
        te: "can తర్వాత sing (s లేకుండా).",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask a friend if he can swim.", te: "మీ స్నేహితుడికి ఈత వచ్చా అని అడగండి." },
      options: ["Can you swim?", "Do you can swim?", "You can swimming?"],
      answer: 0,
      why: {
        en: "Put can first: Can you swim?",
        te: "can ముందు: Can you swim?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "He can reads English.",
      wrongIndex: 2,
      fix: "He can read English.",
      why: {
        en: "After can, read has no s.",
        te: "can తర్వాత read కి s ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A neighbour asks: Can you cook? Say yes.",
        te: "పొరుగువారు అడుగుతున్నారు: Can you cook? అవునని చెప్పండి.",
      },
      expected: ["Yes, I can.", "Yes, I can cook."],
      options: ["Yes, I can.", "Yes, I can able.", "Yes, I cans."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks you to drive. Say you can't drive.",
        te: "ఒకరు మిమ్మల్ని డ్రైవ్ చేయమని అడుగుతున్నారు. మీకు డ్రైవింగ్ రాదని చెప్పండి.",
      },
      expected: ["I can't drive.", "Sorry, I can't drive.", "I cannot drive."],
      options: ["I can't drive.", "I don't can drive.", "I can't to drive."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Help with a function", te: "ఫంక్షన్‌లో సహాయం" },
    scene: {
      en: "Your neighbour Kamala has a function on Sunday. Offer to help and say what you can do.",
      te: "పొరుగింటి కమలకు ఆదివారం ఫంక్షన్ ఉంది. సహాయం చేస్తానని చెప్పి, మీరు ఏం చేయగలరో చెప్పండి.",
    },
    partner: { en: "Kamala (a neighbour)", te: "కమల (పొరుగింటావిడ)" },
    skills: [{ id: "can", label: { en: "can / can't", te: "can / can't వాడకం" } }],
    turns: [
      {
        partner: "We have a function on Sunday.",
        te: "ఆదివారం మా ఇంట్లో ఫంక్షన్ ఉంది.",
        hint: { en: "Say: Oh, nice! Can I help?", te: "ఇలా చెప్పండి: Oh, nice! Can I help?" },
        replies: [
          { say: "Oh, nice! Can I help?", good: true, skill: "can" },
          { say: "Oh, nice! Can I helping?", good: false, skill: "can" },
        ],
      },
      {
        partner: "Yes! Can you cook?",
        te: "అవును! మీరు వంట చేయగలరా?",
        hint: { en: "Say: Yes, I can cook pulihora.", te: "ఇలా చెప్పండి: Yes, I can cook pulihora." },
        replies: [
          { say: "Yes, I can cook pulihora.", good: true, skill: "can" },
          { say: "Yes, I can able to cook.", good: false, skill: "can" },
        ],
      },
      {
        partner: "Can you drive to the market?",
        te: "మార్కెట్‌కి కారు నడపగలరా?",
        hint: { en: "Say no: Sorry, I can't drive.", te: "లేదని చెప్పండి: Sorry, I can't drive." },
        replies: [
          { say: "Sorry, I can't drive.", good: true, skill: "can" },
          { say: "Sorry, I don't can drive.", good: false, skill: "can" },
        ],
      },
      {
        partner: "No problem. Ravi can drive.",
        te: "పర్వాలేదు. రవి నడపగలడు.",
        hint: { en: "Say: Okay. I can come at nine.", te: "ఇలా చెప్పండి: Okay. I can come at nine." },
        replies: [
          { say: "Okay. I can come at nine.", good: true, skill: "can" },
          { say: "Okay. I can to come at nine.", good: false, skill: "can" },
        ],
      },
    ],
  },
};

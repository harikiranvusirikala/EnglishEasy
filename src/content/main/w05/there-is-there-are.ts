import type { Lesson } from "../../types";

/** Week 5, Day 1 (CURRICULUM §3): there is / there are, is there …? */
export const day: Lesson = {
  id: "there-is-there-are",
  kind: "lesson",
  title: { en: "There Is, There Are", te: "ఉంది, ఉన్నాయి" },
  subtitle: "there is / there are",
  summary: {
    en: "Learn to say what is in a place with there is and there are, and to ask with is there.",
    te: "ఒక చోట ఏమి ఉందో there is, there are తో చెప్పడం, is there తో అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "There Is and There Are in English for Telugu Speakers",
    description:
      "Say There is a temple near my house and There are three rooms in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "There is", role: "action" },
    { text: "a temple", role: "who" },
    { text: "near my house", role: "what" },
  ],
  core: [
    { en: "There is a temple near my house.", te: "మా ఇంటి దగ్గర ఒక గుడి ఉంది.", extra: ["are"] },
    { en: "There are three rooms.", te: "మూడు గదులు ఉన్నాయి.", extra: ["is"] },
    { en: "There is a park nearby.", te: "దగ్గర్లో ఒక పార్క్ ఉంది.", extra: ["are"] },
    { en: "Is there a bank near here?", te: "ఇక్కడ దగ్గర్లో బ్యాంక్ ఉందా?", extra: ["Are"] },
    { en: "There are two shops on my street.", te: "మా వీధిలో రెండు షాపులు ఉన్నాయి.", extra: ["is"] },
    { en: "There isn't a lift.", te: "లిఫ్ట్ లేదు.", extra: ["aren't"] },
    { en: "Are there buses at night?", te: "రాత్రిపూట బస్సులు ఉన్నాయా?", extra: ["Is"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Tell someone two things near your house: There is … There are …",
    te: "మీ ఇంటి దగ్గర ఉన్న రెండు విషయాలు ఎవరికైనా చెప్పండి: There is … There are …",
  },
  words: [
    { en: "room", te: "గది" },
    { en: "park", te: "పార్క్" },
    { en: "bank", te: "బ్యాంక్" },
    { en: "lift", te: "లిఫ్ట్" },
    { en: "street", te: "వీధి" },
  ],
  grammar: ["there-is-are", "articles"],
  topics: ["home", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Start with there is", te: "there is తో మొదలుపెట్టండి" },
      body: {
        en: "Telugu says ఉంది at the end: మా ఇంటి దగ్గర ఒక గుడి ఉంది. English starts with There is for one thing, or There are for many: There is a temple near my house.",
        te: "తెలుగులో 'ఉంది' చివర వస్తుంది: మా ఇంటి దగ్గర ఒక గుడి ఉంది. ఇంగ్లీష్‌లో మొదట్లోనే There is (ఒకటి) లేదా There are (చాలా): There is a temple near my house.",
      },
      bridge: {
        te: ["మా ఇంటి దగ్గర", "ఒక గుడి", "ఉంది"],
        en: [
          { text: "There is", role: "action" },
          { text: "a temple", role: "who" },
          { text: "near my house", role: "what" },
        ],
      },
      examples: [
        { en: "There is a temple near my house.", te: "మా ఇంటి దగ్గర ఒక గుడి ఉంది." },
        { en: "There are three rooms.", te: "మూడు గదులు ఉన్నాయి." },
        { en: "Is there a bank near here?", te: "ఇక్కడ దగ్గర్లో బ్యాంక్ ఉందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "There is, there are, is there", te: "there is, there are, is there — ఏది?" },
      items: [
        {
          form: "there is + one",
          useFor: { en: "For one thing.", te: "ఒక్క వస్తువుకి." },
          example: { en: "There is a park nearby.", te: "దగ్గర్లో ఒక పార్క్ ఉంది." },
        },
        {
          form: "there are + many",
          useFor: { en: "For more than one thing.", te: "ఒకటి కంటే ఎక్కువకి." },
          example: { en: "There are two shops on my street.", te: "మా వీధిలో రెండు షాపులు ఉన్నాయి." },
        },
        {
          form: "is there / are there …?",
          useFor: { en: "To ask, put is or are first.", te: "అడగాలంటే is లేదా are ముందు పెట్టాలి." },
          example: { en: "Are there buses at night?", te: "రాత్రిపూట బస్సులు ఉన్నాయా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Near my house one temple is there.",
      right: "There is a temple near my house.",
      why: {
        en: "Do not keep the Telugu order. Start with There is.",
        te: "తెలుగు వరుసలో చెప్పకండి. There is తో మొదలుపెట్టండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "There is three rooms.",
      right: "There are three rooms.",
      why: {
        en: "Three rooms are many, so there are.",
        te: "మూడు గదులు అంటే చాలా, కాబట్టి there are.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["There is two shops.", "There are two shops.", "There have two shops."],
      answer: 1,
      why: {
        en: "Two shops are many: there are.",
        te: "రెండు షాపులు అంటే చాలా: there are.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ there a bank near here?",
      te: "ఇక్కడ దగ్గర్లో బ్యాంక్ ఉందా?",
      options: ["Is", "Are", "Has"],
      answer: 0,
      why: {
        en: "One bank, so ask with is.",
        te: "ఒక బ్యాంక్, కాబట్టి is తో అడగాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: మా ఇంటి దగ్గర ఒక పార్క్ ఉంది?", te: "మా ఇంటి దగ్గర ఒక పార్క్ ఉంది — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["Near my house one park is there.", "There is a park near my house.", "There are a park near my house."],
      answer: 1,
      why: {
        en: "Start with There is for one thing.",
        te: "ఒక్క వస్తువుకి There is తో మొదలుపెట్టాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "There is three rooms.",
      wrongIndex: 1,
      fix: "There are three rooms.",
      why: {
        en: "Many rooms, so are.",
        te: "చాలా గదులు, కాబట్టి are.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Is there a temple near your house? Say yes.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Is there a temple near your house? అవునని చెప్పండి.",
      },
      expected: ["Yes, there is.", "Yes, there is a temple."],
      options: ["Yes, there is.", "Yes, there are.", "Yes, there have."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Describe your house: it has two rooms.",
        te: "మీ ఇంటిని వర్ణించండి: రెండు గదులు ఉన్నాయి.",
      },
      expected: ["There are two rooms.", "My house has two rooms."],
      options: ["There is two rooms.", "There are two rooms.", "There have two rooms."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My new house", te: "నా కొత్త ఇల్లు" },
    scene: {
      en: "Your friend Anitha asks about your new house and the area around it.",
      te: "మీ స్నేహితురాలు అనిత మీ కొత్త ఇల్లు, దాని చుట్టుపక్కల గురించి అడుగుతోంది.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [{ id: "there", label: { en: "there is / there are", te: "there is / there are వాడకం" } }],
    turns: [
      {
        partner: "Is your new house big?",
        te: "మీ కొత్త ఇల్లు పెద్దదా?",
        hint: { en: "Say: There are three rooms.", te: "ఇలా చెప్పండి: There are three rooms." },
        replies: [
          { say: "There are three rooms.", good: true, skill: "there" },
          { say: "There is three rooms.", good: false, skill: "there" },
        ],
      },
      {
        partner: "Is there a balcony?",
        te: "బాల్కనీ ఉందా?",
        hint: { en: "Say yes: Yes, there is a small balcony.", te: "అవునని చెప్పండి: Yes, there is a small balcony." },
        replies: [
          { say: "Yes, there is a small balcony.", good: true, skill: "there" },
          { say: "Yes, there are a small balcony.", good: false, skill: "there" },
        ],
      },
      {
        partner: "Is there a temple nearby?",
        te: "దగ్గర్లో గుడి ఉందా?",
        hint: { en: "Say: Yes, there is one nearby.", te: "ఇలా చెప్పండి: Yes, there is one nearby." },
        replies: [
          { say: "Yes, there is one nearby.", good: true, skill: "there" },
          { say: "Yes, nearby one is there.", good: false, skill: "there" },
        ],
      },
      {
        partner: "Are there shops on your street?",
        te: "మీ వీధిలో షాపులు ఉన్నాయా?",
        hint: { en: "Say: Yes, there are two shops.", te: "ఇలా చెప్పండి: Yes, there are two shops." },
        replies: [
          { say: "Yes, there are two shops.", good: true, skill: "there" },
          { say: "Yes, there is two shops.", good: false, skill: "there" },
        ],
      },
    ],
  },
};

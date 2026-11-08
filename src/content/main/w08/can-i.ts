import type { Lesson } from "../../types";

/** Week 8, Day 2 (CURRICULUM §3): Can I …? for permission; Yes, of course / Sorry, you can't. */
export const day: Lesson = {
  id: "can-i",
  kind: "lesson",
  title: { en: "Can I …?", te: "అనుమతి" },
  subtitle: "Can I …?",
  summary: {
    en: "Learn to ask if something is okay with Can I …?, and to answer yes or no politely.",
    te: "Can I …? తో ఏదైనా చేయవచ్చా అని అడగడం, మర్యాదగా సరే లేదా వద్దు అనడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Can I …? Asking Permission in English for Telugu Speakers",
    description:
      "Ask Can I sit here? and Can I use your phone? in English, and answer Yes, of course. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "I", role: "who" },
    { text: "sit here?", role: "action" },
  ],
  core: [
    { en: "Can I sit here?", te: "నేను ఇక్కడ కూర్చోవచ్చా?", extra: ["sitting"] },
    { en: "Can I use your phone?", te: "మీ ఫోన్ వాడుకోవచ్చా?", extra: ["to"] },
    { en: "Yes, of course.", te: "తప్పకుండా.", extra: ["sure"] },
    { en: "Can I come in?", te: "నేను లోపలికి రావచ్చా?", extra: ["coming"] },
    { en: "Sorry, you can't park here.", te: "క్షమించండి, ఇక్కడ పార్క్ చేయకూడదు.", extra: ["don't"] },
    { en: "Can I open the window?", te: "కిటికీ తెరవచ్చా?", extra: ["opening"] },
    { en: "Can I pay by card?", te: "కార్డ్‌తో కట్టవచ్చా?", extra: ["paying"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask for something politely today with Can I …? For example: Can I sit here?",
    te: "ఈ రోజు Can I …? తో మర్యాదగా ఏదైనా అడగండి. ఉదాహరణకు: Can I sit here?",
  },
  words: [
    { en: "seat", te: "సీటు" },
    { en: "use", te: "వాడుకోవడం" },
    { en: "of course", te: "తప్పకుండా" },
    { en: "card", te: "కార్డ్ (బ్యాంక్ కార్డ్)" },
    { en: "borrow", te: "తీసుకోవడం (తిరిగి ఇచ్చేలా)" },
  ],
  grammar: ["can-could", "politeness-softening"],
  topics: ["transport", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking if it is okay", te: "చేయవచ్చా అని అడగడం" },
      body: {
        en: "To ask if something is okay, say Can I, then the action: Can I sit here? Answer Yes, of course, or Sorry, you can't.",
        te: "ఏదైనా చేయవచ్చా అని అడగడానికి Can I, తర్వాత పని పదం: Can I sit here? జవాబు: Yes, of course లేదా Sorry, you can't.",
      },
      bridge: {
        te: ["నేను", "ఇక్కడ", "కూర్చోవచ్చా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "I", role: "who" },
          { text: "sit here?", role: "action" },
        ],
      },
      examples: [
        { en: "Can I sit here?", te: "నేను ఇక్కడ కూర్చోవచ్చా?" },
        { en: "Can I use your phone?", te: "మీ ఫోన్ వాడుకోవచ్చా?" },
        { en: "Yes, of course.", te: "తప్పకుండా." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Can I …?",
          useFor: { en: "To ask if you may do something.", te: "ఏదైనా చేయవచ్చా అని అడగడానికి." },
          example: { en: "Can I open the window?", te: "కిటికీ తెరవచ్చా?" },
        },
        {
          form: "Yes, of course",
          useFor: { en: "To say yes kindly.", te: "ప్రేమగా సరే అనడానికి." },
          example: { en: "Yes, of course.", te: "తప్పకుండా." },
        },
        {
          form: "Sorry, you can't",
          useFor: { en: "To say no politely.", te: "మర్యాదగా వద్దనడానికి." },
          example: { en: "Sorry, you can't park here.", te: "క్షమించండి, ఇక్కడ పార్క్ చేయకూడదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I can sit here?",
      right: "Can I sit here?",
      why: {
        en: "In a question, can comes first.",
        te: "ప్రశ్నలో can ముందు వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Can I to use your phone?",
      right: "Can I use your phone?",
      why: {
        en: "No to after can.",
        te: "can తర్వాత to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["I can sit here?", "Can I sit here?", "Can I sitting here?"],
      answer: 1,
      why: {
        en: "Can first, then I, then the action.",
        te: "ముందు can, తర్వాత I, తర్వాత పని పదం.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ I come in?",
      te: "నేను లోపలికి రావచ్చా?",
      options: ["Can", "Do", "Am"],
      answer: 0,
      why: {
        en: "To ask if it is okay: Can I …?",
        te: "చేయవచ్చా అని అడగడానికి: Can I …?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Someone asks: Can I sit here? Say yes politely.", te: "ఒకరు అడుగుతున్నారు: Can I sit here? మర్యాదగా సరే అనండి." },
      options: ["Yes, of course.", "Yes, you can sitting.", "Yes, I can."],
      answer: 0,
      why: {
        en: "They ask about themselves, so say: Yes, of course.",
        te: "వాళ్ళు తమ గురించి అడుగుతున్నారు, కాబట్టి: Yes, of course.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can I to use your phone?",
      wrongIndex: 2,
      fix: "Can I use your phone?",
      why: {
        en: "Drop to after can.",
        te: "can తర్వాత to తీసేయాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "On a bus, ask a woman if you can sit next to her.",
        te: "బస్‌లో ఒకావిడ పక్కన కూర్చోవచ్చా అని అడగండి.",
      },
      expected: ["Can I sit here?", "Can I sit here, please?"],
      options: ["I can sit here?", "Can I sit here?", "Can I sitting here?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your phone is off. Ask a shopkeeper if you can use his phone.",
        te: "మీ ఫోన్ ఆఫ్ అయింది. షాప్ అతని ఫోన్ వాడుకోవచ్చా అని అడగండి.",
      },
      expected: ["Can I use your phone?", "Can I use your phone, please?"],
      options: ["Can I use your phone?", "Can I using your phone?", "I can use your phone?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A seat on the bus", te: "బస్‌లో సీటు" },
    scene: {
      en: "The RTC bus is full. You see a free seat next to Sita. Ask politely.",
      te: "RTC బస్ నిండుగా ఉంది. సీత పక్కన ఒక ఖాళీ సీటు కనిపించింది. మర్యాదగా అడగండి.",
    },
    partner: { en: "Sita (a passenger)", te: "సీత (ప్రయాణికురాలు)" },
    skills: [{ id: "can-i", label: { en: "Can I …?", te: "Can I …? వాడకం" } }],
    turns: [
      {
        partner: "Are you looking for a seat?",
        te: "సీటు కోసం చూస్తున్నారా?",
        hint: { en: "Ask: Can I sit here?", te: "అడగండి: Can I sit here?" },
        replies: [
          { say: "Can I sit here?", good: true, skill: "can-i" },
          { say: "I can sit here?", good: false, skill: "can-i" },
        ],
      },
      {
        partner: "Yes, of course. Please sit.",
        te: "తప్పకుండా. కూర్చోండి.",
        hint: { en: "Say: Thank you. Can I open the window?", te: "ఇలా చెప్పండి: Thank you. Can I open the window?" },
        replies: [
          { say: "Thank you. Can I open the window?", good: true, skill: "can-i" },
          { say: "Thank you. Can I opening the window?", good: false, skill: "can-i" },
        ],
      },
      {
        partner: "Sorry, it is very windy.",
        te: "క్షమించండి, చాలా గాలిగా ఉంది.",
        hint: { en: "Say: Okay, no problem.", te: "ఇలా చెప్పండి: Okay, no problem." },
        replies: [
          { say: "Okay, no problem.", good: true },
          { say: "Okay, not problem.", good: false },
        ],
      },
      {
        partner: "Do you need anything?",
        te: "మీకు ఏమైనా కావాలా?",
        hint: { en: "Ask: Can I borrow your pen?", te: "అడగండి: Can I borrow your pen?" },
        replies: [
          { say: "Can I borrow your pen?", good: true, skill: "can-i" },
          { say: "Can I lend your pen?", good: false, skill: "can-i" },
        ],
      },
    ],
  },
};

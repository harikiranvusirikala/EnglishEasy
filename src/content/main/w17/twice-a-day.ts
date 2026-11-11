import type { Lesson } from "../../types";

/** Week 17, Day 1 (CURRICULUM §4): once / twice / three times a day; before / after food — understanding a prescription. */
export const day: Lesson = {
  id: "twice-a-day",
  kind: "lesson",
  title: { en: "Twice a Day", te: "రోజుకు రెండుసార్లు" },
  subtitle: "once / twice a day",
  summary: {
    en: "Learn to understand how to take a medicine: Take one tablet twice a day after food.",
    te: "మందు ఎలా వేసుకోవాలో అర్థం చేసుకోవడం నేర్చుకుందాం: Take one tablet twice a day after food.",
  },
  seo: {
    title: "Once and Twice a Day in English for Telugu Speakers",
    description:
      "Understand Take one tablet twice a day after food. Simple lessons for Telugu speakers on medicine timings and prescriptions.",
  },
  pattern: [
    { text: "Take", role: "action" },
    { text: "one tablet", role: "what" },
    { text: "twice a day", role: "when" },
    { text: "after food", role: "when" },
  ],
  core: [
    { en: "Take this tablet once a day.", te: "ఈ మాత్ర రోజుకు ఒకసారి వేసుకోండి.", extra: ["one"] },
    { en: "Take one tablet twice a day after food.", te: "రోజుకు రెండుసార్లు, భోజనం తర్వాత ఒక్కో మాత్ర వేసుకోండి.", extra: ["in"] },
    { en: "Take it half an hour before food.", te: "భోజనానికి అరగంట ముందు వేసుకోండి.", extra: ["a"] },
    { en: "Take it three times a day.", te: "రోజుకు మూడుసార్లు వేసుకోండి.", extra: ["time"] },
    { en: "How many tablets should I take at night?", te: "రాత్రికి ఎన్ని మాత్రలు వేసుకోవాలి?", extra: ["much"] },
    { en: "One tablet in the morning, one at night.", te: "ఉదయం ఒక మాత్ర, రాత్రి ఒక మాత్ర.", extra: ["on"] },
    { en: "Is this tablet before food or after food?", te: "ఈ మాత్ర భోజనానికి ముందా, తర్వాతా?", extra: ["are"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Pick up any medicine at home and say how to take it: Take one tablet twice a day.",
    te: "ఇంట్లో ఏదైనా ఒక మందు తీసుకుని, ఎలా వేసుకోవాలో ఇంగ్లీష్‌లో చెప్పండి: Take one tablet twice a day.",
  },
  words: [
    { en: "once", te: "ఒకసారి" },
    { en: "twice", te: "రెండుసార్లు" },
    { en: "before food", te: "భోజనానికి ముందు" },
    { en: "after food", te: "భోజనం తర్వాత" },
    { en: "prescription", te: "డాక్టర్ రాసిచ్చిన మందుల చీటీ" },
  ],
  grammar: ["imperatives", "adverbs-frequency"],
  topics: ["pharmacy", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How often, and when", te: "ఎన్నిసార్లు, ఎప్పుడు" },
      body: {
        en: "A prescription first says how often: once, twice or three times a day. Then it says when: before food or after food.",
        te: "prescription లో ముందు ఎన్నిసార్లో ఉంటుంది: once (ఒకసారి), twice (రెండుసార్లు), three times (మూడుసార్లు) a day. తర్వాత ఎప్పుడో: before food (భోజనానికి ముందు) లేదా after food (భోజనం తర్వాత).",
      },
      bridge: {
        te: ["రోజుకు రెండుసార్లు", "భోజనం తర్వాత", "ఒక మాత్ర", "వేసుకోండి"],
        en: [
          { text: "Take", role: "action" },
          { text: "one tablet", role: "what" },
          { text: "twice a day", role: "when" },
          { text: "after food", role: "when" },
        ],
      },
      examples: [
        { en: "Take one tablet twice a day after food.", te: "రోజుకు రెండుసార్లు, భోజనం తర్వాత ఒక్కో మాత్ర వేసుకోండి." },
        { en: "Take this tablet once a day.", te: "ఈ మాత్ర రోజుకు ఒకసారి వేసుకోండి." },
        { en: "Take it three times a day.", te: "రోజుకు మూడుసార్లు వేసుకోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Once, twice, three times", te: "ఒకసారి, రెండుసార్లు, మూడుసార్లు" },
      items: [
        {
          form: "once a day",
          useFor: { en: "One time every day.", te: "రోజుకు ఒక్కసారి." },
          example: { en: "Take this tablet once a day.", te: "ఈ మాత్ర రోజుకు ఒకసారి వేసుకోండి." },
        },
        {
          form: "twice a day",
          useFor: { en: "Two times: morning and night.", te: "రెండుసార్లు: ఉదయం, రాత్రి." },
          example: { en: "One tablet in the morning, one at night.", te: "ఉదయం ఒక మాత్ర, రాత్రి ఒక మాత్ర." },
        },
        {
          form: "three times a day",
          useFor: { en: "Morning, afternoon and night.", te: "ఉదయం, మధ్యాహ్నం, రాత్రి." },
          example: { en: "Take it three times a day.", te: "రోజుకు మూడుసార్లు వేసుకోండి." },
        },
        {
          form: "before food",
          useFor: { en: "Take the tablet first, then eat.", te: "ముందు మాత్ర, తర్వాత భోజనం." },
          example: { en: "Take it half an hour before food.", te: "భోజనానికి అరగంట ముందు వేసుకోండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Take tablet after food.",
      right: "Take the tablet after food.",
      why: {
        en: "Telugu has no a or the, but English needs one before tablet.",
        te: "తెలుగులో a, the ఉండవు; ఇంగ్లీష్‌లో tablet ముందు the కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Take one tablet twice in a day.",
      right: "Take one tablet twice a day.",
      why: {
        en: "Telugu says రోజులో, but for how often English says a day, with no in.",
        te: "తెలుగులో 'రోజులో' అంటాం; ఎన్నిసార్లో చెప్పేటప్పుడు ఇంగ్లీష్‌లో in లేకుండా a day అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The doctor says: twice a day. What does it mean?", te: "డాక్టర్ twice a day అన్నారు. అంటే ఏంటి?" },
      options: ["Two times every day", "One time every day", "Once in two days"],
      answer: 0,
      why: {
        en: "Twice means two times, and once means one time.",
        te: "twice అంటే రెండుసార్లు, once అంటే ఒకసారి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Take one tablet ___ a day after food.",
      te: "రోజుకు రెండుసార్లు, భోజనం తర్వాత ఒక్కో మాత్ర వేసుకోండి.",
      options: ["twice", "two", "second"],
      answer: 0,
      why: {
        en: "For how often, say once, twice or three times.",
        te: "ఎన్నిసార్లో చెప్పడానికి once, twice, three times వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The doctor wrote: before food. When do you take the tablet?", te: "డాక్టర్ before food అని రాశారు. మాత్ర ఎప్పుడు వేసుకోవాలి?" },
      options: ["Before you eat", "After you eat", "In the middle of eating"],
      answer: 0,
      why: {
        en: "Before food means the tablet comes first, then the meal.",
        te: "before food అంటే ముందు మాత్ర, తర్వాత భోజనం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Take it three time a day.",
      wrongIndex: 3,
      fix: "Take it three times a day.",
      why: {
        en: "Three is more than one, so time needs an s.",
        te: "మూడు అంటే ఒకటి కంటే ఎక్కువ, అందుకే time కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Ask the pharmacist if this tablet is before food or after food.",
        te: "ఈ మాత్ర భోజనానికి ముందా, తర్వాతా అని మందుల షాపులో అడగండి.",
      },
      expected: ["Is this tablet before food or after food?", "Is it before food or after food?"],
      options: ["Is this tablet before food or after food?", "This tablet before food or after food?", "Is this tablet before food and after food?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell your friend Rani how to take her tablet: two times each day, after eating.",
        te: "మీ స్నేహితురాలు రాణికి మాత్ర ఎలా వేసుకోవాలో చెప్పండి: రోజుకు రెండుసార్లు, తిన్న తర్వాత.",
      },
      expected: ["Take one tablet twice a day after food.", "Take it twice a day after food."],
      options: ["Take one tablet twice a day after food.", "Take one tablet twice in a day after food.", "Take one tablet twice a day before food."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Reading the prescription", te: "prescription అర్థం చేసుకోవడం" },
    scene: {
      en: "The doctor gave you a prescription. Jyothi, the nurse, explains it to you.",
      te: "డాక్టర్ మీకు prescription ఇచ్చారు. నర్సు జ్యోతి దాన్ని మీకు వివరిస్తున్నారు.",
    },
    partner: { en: "Jyothi (nurse)", te: "జ్యోతి (నర్సు)" },
    skills: [
      { id: "ask", label: { en: "Asking about timings", te: "ఎప్పుడు వేసుకోవాలో అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello. Let me explain your prescription.",
        te: "నమస్కారం. మీ prescription వివరిస్తాను.",
        hint: { en: "Thank her, and ask her to go slowly.", te: "థాంక్స్ చెప్పి, నెమ్మదిగా చెప్పమని అడగండి." },
        replies: [
          { say: "Thank you. Please explain slowly.", good: true, skill: "polite" },
          {
            say: "Tell fast. I am in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Okay, but please listen carefully.", te: "సరే, కానీ కొంచెం జాగ్రత్తగా వినండి." },
          },
        ],
      },
      {
        partner: "This white tablet is for your BP.",
        te: "ఈ తెల్ల మాత్ర మీ BP కోసం.",
        hint: { en: "Ask how often you take it.", te: "రోజుకు ఎన్నిసార్లు వేసుకోవాలో అడగండి." },
        replies: [
          { say: "How many times a day should I take it?", good: true, skill: "ask" },
          { say: "How much times I take it?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Once a day, in the morning.",
        te: "రోజుకు ఒకసారి, ఉదయం.",
        hint: { en: "Ask whether to take it before or after eating.", te: "తినడానికి ముందు వేసుకోవాలా, తర్వాతా అని అడగండి." },
        replies: [
          { say: "Is it before food or after food?", good: true, skill: "ask" },
          { say: "It before food or after food?", good: false, skill: "ask", fixIt: "be" },
        ],
      },
      {
        partner: "After food. Any other questions?",
        te: "భోజనం తర్వాత. ఇంకేమైనా అడగాలా?",
        hint: { en: "Say that is all, and thank her.", te: "అంతే అని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you very much.", good: true, skill: "polite" },
          { say: "Nothing. You can go now.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

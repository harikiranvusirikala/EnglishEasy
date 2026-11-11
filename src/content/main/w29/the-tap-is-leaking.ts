import type { Lesson } from "../../types";

/** Week 29, Day 4 (CURRICULUM §4): faults at home — leaking, not working, making a noise; I need someone to fix it. */
export const day: Lesson = {
  id: "the-tap-is-leaking",
  kind: "lesson",
  title: { en: "The Tap Is Leaking", te: "నీళ్ళు కారుతున్నాయి" },
  subtitle: "is leaking / has burst",
  summary: {
    en: "Learn to explain a fault at home: The tap is leaking. I need someone to fix it.",
    te: "ఇంట్లో రిపేర్ సమస్య చెప్పడం నేర్చుకుందాం: The tap is leaking. I need someone to fix it.",
  },
  seo: {
    title: "Calling a Plumber or Electrician in English for Telugu Speakers",
    description:
      "Say The tap is leaking and I need someone to fix it. Simple lessons for Telugu speakers on calling a plumber or an electrician.",
  },
  pattern: [
    { text: "The tap", role: "who" },
    { text: "is leaking", role: "action" },
  ],
  core: [
    { en: "The tap is leaking.", te: "కుళాయి కారుతోంది.", extra: ["leak"] },
    { en: "I need someone to fix it.", te: "దీన్ని బాగు చేయడానికి ఎవరైనా కావాలి.", extra: ["fixing"] },
    { en: "The fan is making a noise.", te: "ఫ్యాన్ శబ్దం చేస్తోంది.", extra: ["doing"] },
    { en: "The switch is not working.", te: "స్విచ్ పని చేయట్లేదు.", extra: ["works"] },
    { en: "The bathroom pipe has burst.", te: "బాత్రూమ్ పైపు పగిలిపోయింది.", extra: ["bursted"] },
    { en: "Can you send a plumber today?", te: "ఈ రోజు ఒక plumber ని పంపిస్తారా?", extra: ["an"] },
    { en: "There is a spark in the switch.", te: "స్విచ్‌లో నిప్పురవ్వ వస్తోంది.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Save the phone number of a plumber or an electrician near you.",
    te: "మీ దగ్గర్లో ఉండే ఒక plumber లేదా electrician ఫోన్ నంబర్ సేవ్ చేసుకోండి.",
  },
  words: [
    { en: "leaking", te: "కారడం (నీళ్ళు)" },
    { en: "plumber", te: "ప్లంబర్ (కుళాయిలు, పైపులు బాగు చేసేవారు)" },
    { en: "electrician", te: "ఎలక్ట్రీషియన్" },
    { en: "pipe", te: "పైపు, గొట్టం" },
    { en: "spark", te: "నిప్పురవ్వ, స్పార్క్" },
  ],
  grammar: ["present-continuous", "present-perfect"],
  topics: ["home", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What is wrong?", te: "ఏం సమస్య?" },
      body: {
        en: "For a problem going on now, use is with -ing: The tap is leaking. For something broken now, use has: The pipe has burst. Then ask for help: I need someone to fix it.",
        te: "ఇప్పుడు జరుగుతున్న సమస్యకి is + -ing: The tap is leaking. పాడైపోయి అలాగే ఉంటే has: The pipe has burst. తర్వాత సహాయం అడగండి: I need someone to fix it.",
      },
      bridge: {
        te: ["కుళాయి", "కారుతోంది"],
        en: [
          { text: "The tap", role: "who" },
          { text: "is leaking", role: "action" },
        ],
      },
      examples: [
        { en: "The tap is leaking.", te: "కుళాయి కారుతోంది." },
        { en: "The fan is making a noise.", te: "ఫ్యాన్ శబ్దం చేస్తోంది." },
        { en: "The switch is not working.", te: "స్విచ్ పని చేయట్లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Is leaking or has burst?", te: "is leaking ఆ, has burst ఆ?" },
      items: [
        {
          form: "is leaking / is making a noise",
          useFor: { en: "It is going on right now.", te: "ఇప్పుడే జరుగుతోంది." },
          example: { en: "The tap is leaking.", te: "కుళాయి కారుతోంది." },
        },
        {
          form: "is not working",
          useFor: { en: "It does not work now.", te: "ఇప్పుడు పని చేయట్లేదు." },
          example: { en: "The switch is not working.", te: "స్విచ్ పని చేయట్లేదు." },
        },
        {
          form: "has burst / has broken",
          useFor: { en: "It broke, and it is still broken.", te: "పాడైపోయింది, ఇంకా అలాగే ఉంది." },
          example: { en: "The bathroom pipe has burst.", te: "బాత్రూమ్ పైపు పగిలిపోయింది." },
        },
        {
          form: "I need someone to fix …",
          useFor: { en: "Ask for a repair person.", te: "రిపేర్ చేసేవాళ్ళని అడగడానికి." },
          example: { en: "I need someone to fix it.", te: "దీన్ని బాగు చేయడానికి ఎవరైనా కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The tap leaking.",
      right: "The tap is leaking.",
      why: {
        en: "Telugu కారుతోంది is one word, but English needs is before leaking.",
        te: "తెలుగులో 'కారుతోంది' ఒక్క మాటే; ఇంగ్లీష్‌లో leaking ముందు is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The fan is doing noise.",
      right: "The fan is making a noise.",
      why: {
        en: "English says make a noise, not do; Telugu చేస్తోంది makes us say doing.",
        te: "ఇంగ్లీష్‌లో noise కి make వాడతారు, do కాదు; 'చేస్తోంది' వల్ల doing అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I need a plumber today.", "I am needing a plumber today.", "I needing a plumber today."],
      answer: 0,
      why: {
        en: "Need is not an action you do, so it never takes -ing, even for now.",
        te: "need చేసే పని కాదు; అందుకే ఇప్పటి గురించి అయినా -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The fan is ___ a noise.",
      te: "ఫ్యాన్ శబ్దం చేస్తోంది.",
      options: ["making", "doing", "giving"],
      answer: 0,
      why: {
        en: "English pairs noise with make; Telugu చేయడం makes us say doing.",
        te: "ఇంగ్లీష్‌లో noise తో make వస్తుంది; 'చేయడం' వల్ల doing అనేస్తాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Water is coming out under the sink. Who do you call?", te: "సింక్ కింద నుండి నీళ్ళు వస్తున్నాయి. ఎవరికి ఫోన్ చేస్తారు?" },
      options: ["A plumber", "An electrician", "A carpenter"],
      answer: 0,
      why: {
        en: "A plumber fixes taps and pipes; an electrician fixes switches and wires.",
        te: "plumber కుళాయిలు, పైపులు బాగు చేస్తారు; electrician స్విచ్‌లు, వైర్లు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Can you send a electrician today?",
      wrongIndex: 3,
      fix: "Can you send an electrician today?",
      why: {
        en: "Electrician starts with a vowel sound, so it takes an, not a.",
        te: "electrician అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే a కాదు, an.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Water drips from the tap all day. Tell the plumber.",
        te: "రోజంతా కుళాయి నుండి నీళ్ళు కారుతున్నాయి. plumber కి చెప్పండి.",
      },
      expected: ["The tap is leaking.", "My tap is leaking."],
      options: ["The tap is leaking.", "The tap leaking.", "The tap is leak."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Ask for someone to repair the fan.",
        te: "ఫ్యాన్ బాగు చేయడానికి ఎవరినైనా పంపమని అడగండి.",
      },
      expected: ["I need someone to fix the fan.", "Can you send someone to fix the fan?", "I need someone to fix it."],
      options: ["I need someone to fix the fan.", "I am needing someone to fix the fan.", "I need someone for fixing fan."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling a plumber", te: "plumber కి ఫోన్" },
    scene: {
      en: "Your kitchen tap is leaking badly. You call Raju, a plumber near your house.",
      te: "మీ వంటింటి కుళాయి బాగా కారుతోంది. మీ ఇంటి దగ్గర్లో ఉండే plumber రాజుకి ఫోన్ చేశారు.",
    },
    partner: { en: "Raju (plumber)", te: "రాజు (ప్లంబర్)" },
    voice: "b",
    skills: [
      { id: "fault", label: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" } },
      { id: "visit", label: { en: "Asking for a visit", te: "రమ్మని అడగడం" } },
    ],
    turns: [
      {
        partner: "Hello, Raju here. Tell me.",
        te: "హలో, రాజు మాట్లాడుతున్నాను. చెప్పండి.",
        hint: { en: "Say who you are, and what is wrong with your kitchen tap.", te: "మీరు ఎవరో, మీ వంటింటి కుళాయికి ఏమైందో చెప్పండి." },
        replies: [
          { say: "This is Kiran. My kitchen tap is leaking.", good: true, skill: "fault" },
          { say: "This is Kiran. My kitchen tap leaking.", good: false, skill: "fault", fixIt: "be" },
        ],
      },
      {
        partner: "Is it a small leak or a big one?",
        te: "కొంచెం కారుతోందా, ఎక్కువగానా?",
        hint: { en: "Say it is big, and the pipe has broken open too.", te: "ఎక్కువగా అని, పైపు కూడా పగిలిపోయిందని చెప్పండి." },
        replies: [
          { say: "It is big. The pipe has burst too.", good: true, skill: "fault" },
          { say: "It is big. The pipe has bursted too.", good: false, skill: "fault" },
        ],
      },
      {
        partner: "Okay. I can come in the evening.",
        te: "సరే. సాయంత్రం రాగలను.",
        hint: { en: "Ask him politely to come sooner. Water is everywhere.", te: "ఇంకా ముందే రమ్మని మర్యాదగా అడగండి. నీళ్ళు అంతా పాకుతున్నాయి." },
        replies: [
          { say: "Can you come sooner, please? Water is everywhere.", good: true, skill: "visit" },
          {
            say: "Evening? No, come now itself!",
            good: false,
            skill: "visit",
            fixIt: "indian-english",
            react: { en: "Okay, okay. I will try to come at twelve.", te: "సరే, సరే. పన్నెండుకి రావడానికి ప్రయత్నిస్తాను." },
          },
        ],
      },
      {
        partner: "Okay, I'll come at twelve. Close the main valve.",
        te: "సరే, పన్నెండుకి వస్తాను. మెయిన్ వాల్వ్ కట్టేయండి.",
        hint: { en: "Say you will close it, and thank him.", te: "కట్టేస్తానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll close it. Thank you.", good: true, skill: "visit" },
          { say: "Okay, I'll closing it. Thank you.", good: false, skill: "visit" },
        ],
      },
    ],
  },
};

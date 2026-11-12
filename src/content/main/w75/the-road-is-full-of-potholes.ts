import type { Lesson } from "../../types";

/** Week 75, Day 3 (CURRICULUM §5): describing a problem clearly — where, since when, who is affected — The road near the school is full of potholes. */
export const day: Lesson = {
  id: "the-road-is-full-of-potholes",
  kind: "lesson",
  title: { en: "The Road Is Full of Potholes", te: "రోడ్డంతా గుంతలే" },
  subtitle: "where, since when, who is affected",
  summary: {
    en: "Learn to describe a problem clearly: where it is, since when, and who it affects. The road near the school is full of potholes.",
    te: "సమస్యని స్పష్టంగా చెప్పడం నేర్చుకుందాం: ఎక్కడ, ఎప్పటి నుంచి, ఎవరికి ఇబ్బంది. The road near the school is full of potholes.",
  },
  seo: {
    title: "Describing a Road Problem in English for Telugu Speakers",
    description:
      "Say The road near the school is full of potholes and It has been like this since the rains. Simple English for Telugu speakers.",
  },
  pattern: [
    { text: "The road near the school", role: "who" },
    { text: "is full of", role: "action" },
    { text: "potholes", role: "what" },
  ],
  core: [
    { en: "The road near the school is full of potholes.", te: "బడి దగ్గర రోడ్డంతా గుంతలే.", extra: ["are"] },
    { en: "Two people have fallen off their bikes this week.", te: "ఈ వారం ఇద్దరు బైక్ మీద నుంచి పడిపోయారు.", extra: ["fell"] },
    { en: "It has been like this since the rains.", te: "వర్షాలు పడినప్పటి నుంచి ఇలాగే ఉంది.", extra: ["is"] },
    { en: "The road gets waterlogged when it rains.", te: "వర్షం పడితే రోడ్డు మీద నీళ్ళు నిలిచిపోతాయి.", extra: ["get"] },
    { en: "Schoolchildren and elders use this road every day.", te: "బడి పిల్లలూ, పెద్దవాళ్ళూ రోజూ ఈ రోడ్డు మీదే వెళ్తారు.", extra: ["uses"] },
    { en: "It is dangerous, especially at night.", te: "ముఖ్యంగా రాత్రిపూట ఇది చాలా ప్రమాదం.", extra: ["danger"] },
    { en: "About two hundred families are affected by this road.", te: "దాదాపు రెండొందల కుటుంబాలకి ఈ రోడ్డుతో ఇబ్బంది.", extra: ["affect"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one problem on a road you use. Say aloud where it is and since when: The … near the … has been … since …",
    te: "మీరు వెళ్ళే ఏదైనా రోడ్డు మీద ఒక సమస్య గుర్తు చేసుకోండి. అది ఎక్కడ ఉందో, ఎప్పటి నుంచో గట్టిగా చెప్పండి: The … near the … has been … since …",
  },
  words: [
    { en: "affected", te: "ఇబ్బంది పడినవాళ్ళు, ప్రభావం పడిన" },
    { en: "dangerous", te: "ప్రమాదకరమైన" },
    { en: "waterlogged", te: "నీళ్ళు నిలిచిపోయిన" },
    { en: "ward member", te: "వార్డ్ మెంబర్" },
    { en: "fall off", te: "బండి మీద నుంచి కింద పడిపోవడం" },
  ],
  grammar: ["present-perfect", "prepositions", "articles"],
  topics: ["neighbours", "directions", "transport"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Describing a problem clearly", te: "సమస్యని స్పష్టంగా చెప్పడం" },
      body: {
        en: "Say three things: where the problem is, since when, and who it affects. Start with the place: The road near the school is full of potholes.",
        te: "మూడు విషయాలు చెప్పండి: సమస్య ఎక్కడ ఉంది, ఎప్పటి నుంచి, ఎవరికి ఇబ్బంది. చోటుతో మొదలుపెట్టండి: The road near the school is full of potholes.",
      },
      bridge: {
        te: ["బడి దగ్గర", "రోడ్డంతా", "గుంతలే"],
        en: [
          { text: "The road near the school", role: "who" },
          { text: "is full of", role: "action" },
          { text: "potholes", role: "what" },
        ],
      },
      examples: [
        { en: "The road near the school is full of potholes.", te: "బడి దగ్గర రోడ్డంతా గుంతలే." },
        { en: "It has been like this since the rains.", te: "వర్షాలు పడినప్పటి నుంచి ఇలాగే ఉంది." },
        { en: "Two people have fallen off their bikes this week.", te: "ఈ వారం ఇద్దరు బైక్ మీద నుంచి పడిపోయారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Where, since when, who", te: "ఎక్కడ, ఎప్పటి నుంచి, ఎవరికి" },
      items: [
        {
          form: "near / in front of + a place",
          useFor: { en: "Say exactly where the problem is.", te: "సమస్య సరిగ్గా ఎక్కడ ఉందో చెప్పడానికి." },
          example: { en: "The pothole in front of the temple is very deep.", te: "గుడి ముందు ఉన్న గుంత చాలా లోతుగా ఉంది." },
        },
        {
          form: "has been like this since …",
          useFor: { en: "Say how long it has been a problem.", te: "ఎంతకాలంగా ఈ సమస్య ఉందో చెప్పడానికి." },
          example: { en: "It has been like this since the rains.", te: "వర్షాలు పడినప్పటి నుంచి ఇలాగే ఉంది." },
        },
        {
          form: "have fallen, have been hurt",
          useFor: { en: "Say what has happened so far.", te: "ఇప్పటివరకు ఏం జరిగిందో చెప్పడానికి." },
          example: { en: "Two people have fallen off their bikes this week.", te: "ఈ వారం ఇద్దరు బైక్ మీద నుంచి పడిపోయారు." },
        },
        {
          form: "… are affected",
          useFor: { en: "Say who has the trouble.", te: "ఎవరికి ఇబ్బందో చెప్పడానికి." },
          example: { en: "About two hundred families are affected by this road.", te: "దాదాపు రెండొందల కుటుంబాలకి ఈ రోడ్డుతో ఇబ్బంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The road very bad near the school.",
      right: "The road is very bad near the school.",
      why: {
        en: "Telugu రోడ్డు బాలేదు needs no extra word, but English needs is before a describing word.",
        te: "తెలుగులో 'రోడ్డు బాలేదు' అని ఏ పదమూ లేకుండా అంటాం; ఇంగ్లీష్‌లో describing word ముందు is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Two peoples have fallen off their bikes.",
      right: "Two people have fallen off their bikes.",
      why: {
        en: "People already means more than one person, so it never takes s.",
        te: "people అంటేనే ఒకరి కంటే ఎక్కువమంది; అందుకే దానికి s రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell the ward member what happens to the road every time it rains.",
        te: "వర్షం పడిన ప్రతిసారీ రోడ్డుకి ఏమవుతుందో వార్డ్ మెంబర్‌కి చెప్పండి.",
      },
      options: ["It gets waterlogged when it rains.", "It get waterlogged when it rains.", "It is getting waterlogged when it rains."],
      answer: 0,
      why: {
        en: "Something that happens every time takes the plain present, and it needs s on the verb.",
        te: "ప్రతిసారీ జరిగే దానికి మామూలు present వాడాలి; it తో verb కి s వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Two people have ___ off their bikes this week.",
      te: "ఈ వారం ఇద్దరు బైక్ మీద నుంచి పడిపోయారు.",
      options: ["fallen", "fell", "fall"],
      answer: 0,
      why: {
        en: "After have, use the done form of the verb; fell is only for the plain past.",
        te: "have తర్వాత verb పూర్తయిన రూపం వస్తుంది; fell మామూలు past కి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "The ward member asks how long the road has been bad. Say it started with the rains.",
        te: "రోడ్డు ఎంతకాలంగా ఇలా ఉందని వార్డ్ మెంబర్ అడిగారు. వర్షాలప్పటి నుంచి అని చెప్పండి.",
      },
      options: ["It has been like this since the rains.", "It is like this since the rains.", "It has been like this from the rains."],
      answer: 0,
      why: {
        en: "From a start up to now takes has been, and since marks the start. Telugu uses the present here.",
        te: "ఒక సమయం నుంచి ఇప్పటివరకు అంటే has been; మొదలైన సమయానికి since. తెలుగులో ఇక్కడ present వాడతాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Pothole in front of the temple is very deep.",
      wrongIndex: 0,
      fix: "The pothole in front of the temple is very deep.",
      why: {
        en: "A pothole you both know needs the before it. Telugu has no word for the.",
        te: "ఇద్దరికీ తెలిసిన గుంత ముందు the రావాలి. తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The ward member asks about the road near the school. Say it has potholes everywhere.",
        te: "బడి దగ్గర రోడ్డు గురించి వార్డ్ మెంబర్ అడిగారు. రోడ్డంతా గుంతలే అని చెప్పండి.",
      },
      expected: ["The road near the school is full of potholes.", "It's full of potholes.", "The road is full of potholes."],
      options: ["The road near the school is full of potholes.", "The road near the school full of potholes.", "The road near the school is full with potholes."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell the ward member that many families depend on this road every day.",
        te: "చాలా కుటుంబాలకి రోజూ ఈ రోడ్డే దిక్కు అని వార్డ్ మెంబర్‌కి చెప్పండి.",
      },
      expected: ["Many families need this road every day.", "Many families depend on this road every day.", "A lot of families need this road every day."],
      options: ["Many families need this road every day.", "Many families are needing this road every day.", "Many families needs this road every day."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The ward member visits", te: "వార్డ్ మెంబర్ వచ్చారు" },
    scene: {
      en: "Kavitha, your ward member, is visiting the colony this evening. You show her the road near the school.",
      te: "మీ వార్డ్ మెంబర్ కవిత గారు ఈ సాయంత్రం కాలనీకి వచ్చారు. బడి దగ్గర రోడ్డుని మీరు ఆవిడకి చూపిస్తున్నారు.",
    },
    partner: { en: "Kavitha (the ward member)", te: "కవిత (వార్డ్ మెంబర్)" },
    skills: [
      { id: "describe", label: { en: "Describing a problem", te: "సమస్య వివరించడం" } },
      { id: "polite", label: { en: "Firm and polite", te: "గట్టిగా, మర్యాదగా" } },
    ],
    turns: [
      {
        partner: "Good evening, everyone. I'm Kavitha, your ward member. What's the problem here?",
        te: "అందరికీ నమస్కారం. నేను కవిత, మీ వార్డ్ మెంబర్‌ని. ఇక్కడ సమస్య ఏంటి?",
        hint: { en: "Greet her, and say where the bad road is and what is wrong with it.", te: "నమస్కారం చెప్పి, పాడైన రోడ్డు ఎక్కడుందో, దానికి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Good evening, madam. The road near the school is full of potholes.", good: true, skill: "describe" },
          { say: "Good evening, madam. Road near school is full of potholes.", good: false, skill: "describe", fixIt: "article" },
        ],
      },
      {
        partner: "I see. How long has it been like this?",
        te: "అలాగా. ఎంతకాలంగా ఇలా ఉంది?",
        hint: { en: "Say it started with the rains, about three months ago.", te: "వర్షాలప్పుడు, దాదాపు మూడు నెలల క్రితం మొదలైందని చెప్పండి." },
        replies: [
          { say: "It has been like this since the rains, for about three months.", good: true, skill: "describe" },
          { say: "It is like this for about three months.", good: false, skill: "describe", fixIt: "duration" },
        ],
      },
      {
        partner: "Has anyone been hurt?",
        te: "ఎవరికైనా దెబ్బలు తగిలాయా?",
        hint: { en: "Say what has happened to two bike riders this week.", te: "ఈ వారం ఇద్దరు బైక్ నడిపేవాళ్ళకి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Yes, two people have fallen off their bikes this week.", good: true, skill: "describe" },
          {
            say: "Yes! Do you people even care?",
            good: false,
            skill: "polite",
            react: { en: "I do care. That's why I came here today.", te: "పట్టించుకుంటాను కాబట్టే ఈ రోజు ఇక్కడికి వచ్చాను." },
          },
        ],
      },
      {
        partner: "I'll send the engineer on Monday. The work will start soon.",
        te: "సోమవారం ఇంజనీర్‌ని పంపిస్తాను. త్వరలోనే పని మొదలవుతుంది.",
        hint: { en: "Thank her, and say the whole colony will be thankful.", te: "థాంక్స్ చెప్పి, కాలనీ అంతా రుణపడి ఉంటుందని చెప్పండి." },
        replies: [
          { say: "Thank you, madam. The whole colony will be grateful.", good: true, skill: "polite" },
          { say: "Thank you, madam. Whole colony will be grateful.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

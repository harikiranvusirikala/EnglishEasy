import type { Lesson } from "../../types";

/** Week 5, Day 4 (CURRICULUM §3): plurals — -s, -es, and men, women, people, children. */
export const day: Lesson = {
  id: "one-and-many",
  kind: "lesson",
  title: { en: "One and Many", te: "ఒకటి, చాలా" },
  subtitle: "cup → cups, person → people",
  summary: {
    en: "Learn to talk about more than one: cups, plates, boxes, and special words like people and children.",
    te: "ఒకటి కంటే ఎక్కువ గురించి మాట్లాడటం నేర్చుకుందాం: cups, plates, boxes; people, children లాంటి ప్రత్యేక పదాలు.",
  },
  seo: {
    title: "Plurals in English for Telugu Speakers: One Cup, Two Cups",
    description:
      "Say ten cups, five boxes, fifty people and two children in English. Simple lessons for Telugu speakers on plurals, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "ten cups", role: "what" },
  ],
  core: [
    { en: "I need ten cups.", te: "నాకు పది కప్పులు కావాలి.", extra: ["cup"] },
    { en: "There are fifty people.", te: "యాభై మంది ఉన్నారు.", extra: ["peoples"] },
    { en: "We need twenty plates.", te: "మాకు ఇరవై ప్లేట్లు కావాలి.", extra: ["plate"] },
    { en: "One man and two women came.", te: "ఒక మగాయన, ఇద్దరు ఆడవాళ్ళు వచ్చారు.", extra: ["womans"] },
    { en: "These spoons are clean.", te: "ఈ స్పూన్లు శుభ్రంగా ఉన్నాయి.", extra: ["spoon"] },
    { en: "Two children are playing.", te: "ఇద్దరు పిల్లలు ఆడుకుంటున్నారు.", extra: ["childs"] },
    { en: "Please bring five boxes.", te: "దయచేసి ఐదు డబ్బాలు తీసుకురండి.", extra: ["boxs"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Count things in your kitchen in English: two cups, three plates, four spoons.",
    te: "మీ వంటగదిలో వస్తువులను ఇంగ్లీష్‌లో లెక్కపెట్టండి: two cups, three plates, four spoons.",
  },
  words: [
    { en: "cup", te: "కప్పు" },
    { en: "plate", te: "ప్లేట్, పళ్ళెం" },
    { en: "spoon", te: "స్పూన్, చెంచా" },
    { en: "box", te: "డబ్బా, పెట్టె" },
    { en: "people", te: "మనుషులు, జనం" },
  ],
  grammar: ["plurals-countable", "there-is-are"],
  topics: ["home", "festivals"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "One cup, two cups", te: "ఒక కప్పు, రెండు కప్పులు" },
      body: {
        en: "Telugu adds లు: కప్పు, కప్పులు. English adds s: cup, cups. A few words change instead: one man, two men; one woman, two women; one person, two people; one child, two children.",
        te: "తెలుగులో 'లు' చేరుస్తాం: కప్పు, కప్పులు. ఇంగ్లీష్‌లో s చేరుస్తారు: cup, cups. కొన్ని పదాలు మాత్రం మారిపోతాయి: man → men, woman → women, person → people, child → children.",
      },
      bridge: {
        te: ["నాకు", "పది కప్పులు", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "ten cups", role: "what" },
        ],
      },
      examples: [
        { en: "I need ten cups.", te: "నాకు పది కప్పులు కావాలి." },
        { en: "There are fifty people.", te: "యాభై మంది ఉన్నారు." },
        { en: "Two children are playing.", te: "ఇద్దరు పిల్లలు ఆడుకుంటున్నారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "-s, -es or a new word?", te: "-s ఆ, -es ఆ, కొత్త పదమా?" },
      items: [
        {
          form: "+ s",
          useFor: { en: "Most words add s.", te: "చాలా పదాలకు s." },
          example: { en: "We need twenty plates.", te: "మాకు ఇరవై ప్లేట్లు కావాలి." },
        },
        {
          form: "+ es",
          useFor: { en: "Words ending in s, x, ch or sh add es.", te: "s, x, ch, sh తో ముగిసే పదాలకు es." },
          example: { en: "Please bring five boxes.", te: "దయచేసి ఐదు డబ్బాలు తీసుకురండి." },
        },
        {
          form: "men, women, people, children",
          useFor: { en: "These words change. Never add s to them.", te: "ఈ పదాలు మారిపోతాయి. వీటికి s చేర్చకూడదు." },
          example: { en: "One man and two women came.", te: "ఒక మగాయన, ఇద్దరు ఆడవాళ్ళు వచ్చారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "There are fifty peoples.",
      right: "There are fifty people.",
      why: {
        en: "People already means many. Do not add s.",
        te: "people అంటేనే చాలా మంది. s చేర్చకండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I need ten cup.",
      right: "I need ten cups.",
      why: {
        en: "Ten is more than one, so cups.",
        te: "పది అంటే ఒకటి కంటే ఎక్కువ, కాబట్టి cups.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Two childs are playing.", "Two children are playing.", "Two childrens are playing."],
      answer: 1,
      why: {
        en: "Child changes to children.",
        te: "child → children గా మారుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Please bring five ___.",
      te: "దయచేసి ఐదు డబ్బాలు తీసుకురండి.",
      options: ["box", "boxs", "boxes"],
      answer: 2,
      why: {
        en: "Box ends in x, so add es: boxes.",
        te: "box చివర x ఉంది, కాబట్టి es: boxes.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which word fits? Fifty … came to the function.", te: "ఏ పదం సరిపోతుంది? ఫంక్షన్‌కి యాభై … వచ్చారు." },
      options: ["person", "people", "peoples"],
      answer: 1,
      why: {
        en: "Many persons are people.",
        te: "చాలా మంది అంటే people.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "One man and two womans came.",
      wrongIndex: 4,
      fix: "One man and two women came.",
      why: {
        en: "Woman changes to women.",
        te: "woman → women గా మారుతుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You are ordering for a function. Say you need twenty plates.",
        te: "మీరు ఫంక్షన్ కోసం ఆర్డర్ చేస్తున్నారు. ఇరవై ప్లేట్లు కావాలని చెప్పండి.",
      },
      expected: ["We need twenty plates.", "I need twenty plates.", "Twenty plates, please."],
      options: ["We need twenty plate.", "We need twenty plates.", "We need twenty plateses."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the cook that fifty people are coming.",
        te: "యాభై మంది వస్తున్నారని వంటవారికి చెప్పండి.",
      },
      expected: ["Fifty people are coming."],
      options: ["Fifty peoples are coming.", "Fifty people are coming.", "Fifty people is coming."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Plates and cups for a function", te: "ఫంక్షన్‌కి ప్లేట్లు, కప్పులు" },
    scene: {
      en: "You are calling Venkat's tent house to order plates, cups and chairs for a function.",
      te: "ఫంక్షన్ కోసం ప్లేట్లు, కప్పులు, కుర్చీలు ఆర్డర్ చేయడానికి వెంకట్ టెంట్ హౌస్‌కి ఫోన్ చేస్తున్నారు.",
    },
    partner: { en: "Venkat (tent house owner)", te: "వెంకట్ (టెంట్ హౌస్ యజమాని)" },
    skills: [{ id: "many", label: { en: "One and many", te: "ఒకటి, చాలా" } }],
    turns: [
      {
        partner: "Hello, Venkat Tent House.",
        te: "హలో, వెంకట్ టెంట్ హౌస్.",
        hint: { en: "Say: I need plates for a function.", te: "ఇలా చెప్పండి: I need plates for a function." },
        replies: [
          { say: "I need plates for a function.", good: true, skill: "many" },
          { say: "I need plate for a function.", good: false, skill: "many" },
        ],
      },
      {
        partner: "How many people are coming?",
        te: "ఎంత మంది వస్తున్నారు?",
        hint: { en: "Say: Fifty people are coming.", te: "ఇలా చెప్పండి: Fifty people are coming." },
        replies: [
          { say: "Fifty people are coming.", good: true, skill: "many" },
          { say: "Fifty peoples are coming.", good: false, skill: "many" },
        ],
      },
      {
        partner: "So, fifty plates. Cups also?",
        te: "అయితే యాభై ప్లేట్లు. కప్పులు కూడానా?",
        hint: { en: "Say: Yes, sixty cups, please.", te: "ఇలా చెప్పండి: Yes, sixty cups, please." },
        replies: [
          { say: "Yes, sixty cups, please.", good: true, skill: "many" },
          { say: "Yes, sixty cup, please.", good: false, skill: "many" },
        ],
      },
      {
        partner: "And chairs?",
        te: "మరి కుర్చీలు?",
        hint: { en: "Say: Yes, fifty chairs, please.", te: "ఇలా చెప్పండి: Yes, fifty chairs, please." },
        replies: [
          { say: "Yes, fifty chairs, please.", good: true, skill: "many" },
          { say: "Yes, fifty chair, please.", good: false, skill: "many" },
        ],
      },
    ],
  },
};

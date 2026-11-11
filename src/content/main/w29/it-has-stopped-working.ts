import type { Lesson } from "../../types";

/** Week 29, Day 1 (CURRICULUM §4): present perfect for results — My fridge has stopped working. The screen has cracked. */
export const day: Lesson = {
  id: "it-has-stopped-working",
  kind: "lesson",
  title: { en: "It Has Stopped Working", te: "పని చేయడం ఆగిపోయింది" },
  subtitle: "has stopped / has broken",
  summary: {
    en: "Learn to say what is broken now: My fridge has stopped working. The TV screen has cracked.",
    te: "ఇప్పుడు ఏది పాడై ఉందో చెప్పడం నేర్చుకుందాం: My fridge has stopped working. The TV screen has cracked.",
  },
  seo: {
    title: "It Has Stopped Working in English for Telugu Speakers",
    description:
      "Say My fridge has stopped working and The TV screen has cracked. Simple lessons for Telugu speakers on explaining a fault to customer care.",
  },
  pattern: [
    { text: "My fridge", role: "who" },
    { text: "has stopped", role: "action" },
    { text: "working", role: "what" },
  ],
  core: [
    { en: "My fridge has stopped working.", te: "మా ఫ్రిజ్ పని చేయడం ఆగిపోయింది.", extra: ["is"] },
    { en: "The TV screen has cracked.", te: "టీవీ స్క్రీన్ పగిలిపోయింది.", extra: ["crack"] },
    { en: "The door handle has broken.", te: "తలుపు హ్యాండిల్ విరిగిపోయింది.", extra: ["break"] },
    { en: "It has stopped cooling.", te: "చల్లబడటం ఆగిపోయింది.", extra: ["is"] },
    { en: "The geyser has stopped heating water.", te: "గీజర్ నీళ్ళు వేడి చేయడం ఆగిపోయింది.", extra: ["heat"] },
    { en: "The TV remote has stopped working.", te: "టీవీ రిమోట్ పని చేయడం ఆగిపోయింది.", extra: ["stop"] },
    { en: "It stopped working yesterday.", te: "నిన్న పని చేయడం ఆగిపోయింది.", extra: ["has"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look around your home. Say one thing that has stopped working, with has.",
    te: "మీ ఇంట్లో చుట్టూ చూడండి. పాడైన ఒక వస్తువు గురించి has తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "stopped working", te: "పని చేయడం ఆగిపోయింది" },
    { en: "cracked", te: "పగిలిన, బీటలు వారిన" },
    { en: "cooling", te: "చల్లబరచడం" },
    { en: "remote", te: "రిమోట్" },
    { en: "handle", te: "హ్యాండిల్, పిడి" },
  ],
  grammar: ["present-perfect"],
  topics: ["home", "technology", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Broken now", te: "ఇప్పుడు పాడై ఉంది" },
      body: {
        en: "When something broke and is still broken now, say has with stopped, broken or cracked: My fridge has stopped working. One thing takes has; I, you, we and they take have.",
        te: "ఏదైనా పాడై, ఇప్పటికీ అలాగే ఉంటే has తో stopped, broken, cracked వాడండి: My fridge has stopped working. ఒక్క వస్తువుకి has; I, you, we, they కి have.",
      },
      bridge: {
        te: ["మా ఫ్రిజ్", "పని చేయడం", "ఆగిపోయింది"],
        en: [
          { text: "My fridge", role: "who" },
          { text: "has stopped", role: "action" },
          { text: "working", role: "what" },
        ],
      },
      examples: [
        { en: "My fridge has stopped working.", te: "మా ఫ్రిజ్ పని చేయడం ఆగిపోయింది." },
        { en: "The TV screen has cracked.", te: "టీవీ స్క్రీన్ పగిలిపోయింది." },
        { en: "It has stopped cooling.", te: "చల్లబడటం ఆగిపోయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Has stopped or stopped?", te: "has stopped ఆ, stopped ఆ?" },
      items: [
        {
          form: "has stopped",
          useFor: { en: "The problem is still there now.", te: "సమస్య ఇప్పటికీ ఉంది." },
          example: { en: "My fridge has stopped working.", te: "మా ఫ్రిజ్ పని చేయడం ఆగిపోయింది." },
        },
        {
          form: "has broken / has cracked",
          useFor: { en: "Broken now; it needs a repair.", te: "ఇప్పుడు పాడై ఉంది; రిపేర్ కావాలి." },
          example: { en: "The door handle has broken.", te: "తలుపు హ్యాండిల్ విరిగిపోయింది." },
        },
        {
          form: "stopped + yesterday",
          useFor: { en: "With a time word like yesterday, use the past.", te: "yesterday లాంటి సమయం చెప్తే past వాడండి." },
          example: { en: "It stopped working yesterday.", te: "నిన్న పని చేయడం ఆగిపోయింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "My fridge is stopped working.",
      right: "My fridge has stopped working.",
      why: {
        en: "Is goes with -ing words, but stopped, broken and cracked go with has.",
        te: "is తో -ing పదాలు వస్తాయి; stopped, broken, cracked కి has కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "My fridge not working.",
      right: "My fridge is not working.",
      why: {
        en: "Telugu పని చేయట్లేదు needs no extra word, but English needs is before not working.",
        te: "తెలుగులో 'పని చేయట్లేదు' ఒక్క మాటే; ఇంగ్లీష్‌లో not working ముందు is తప్పకుండా కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["My fridge has stopped working.", "My fridge have stopped working.", "My fridge has stop working."],
      answer: 0,
      why: {
        en: "A fridge is one thing, like he or she, so it takes has, and stop becomes stopped.",
        te: "ఫ్రిజ్ ఒక్కటే (he, she లాగా), అందుకే has; stop కాస్తా stopped అవుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The geyser ___ stopped heating water.",
      te: "గీజర్ నీళ్ళు వేడి చేయడం ఆగిపోయింది.",
      options: ["has", "is", "have"],
      answer: 0,
      why: {
        en: "Stopped takes has, and one geyser takes has, not have.",
        te: "stopped కి has కావాలి; ఒక్క గీజర్ కాబట్టి have కాదు, has.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The repair man says: The screen has cracked. What does it mean?",
        te: "రిపేర్ చేసే ఆయన The screen has cracked అన్నారు. అర్థం ఏంటి?",
      },
      options: ["The screen is broken now.", "The screen will break soon.", "The screen was fixed today."],
      answer: 0,
      why: {
        en: "Has cracked shows the result now: the crack is there today.",
        te: "has cracked అంటే ఫలితం ఇప్పుడూ ఉంది: పగులు ఈ రోజూ కనిపిస్తోంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "It has stopped working yesterday.",
      wrongIndex: 1,
      fix: "It stopped working yesterday.",
      why: {
        en: "Yesterday gives the time, so use the past alone; has is for the result now.",
        te: "yesterday సమయం చెప్తోంది, అందుకే past ఒక్కటే చాలు; has ఇప్పటి ఫలితానికి మాత్రమే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your fridge is not cold any more. Tell customer care.",
        te: "మీ ఫ్రిజ్ ఇక చల్లగా ఉండట్లేదు. కస్టమర్ కేర్‌కి చెప్పండి.",
      },
      expected: ["My fridge has stopped cooling.", "My fridge has stopped working.", "It has stopped cooling."],
      options: ["My fridge has stopped cooling.", "My fridge is stopped cooling.", "My fridge stopping cooling."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your geyser gives only cold water. Tell the shop.",
        te: "మీ గీజర్ చల్ల నీళ్ళు మాత్రమే ఇస్తోంది. షాప్ వాళ్ళకి చెప్పండి.",
      },
      expected: ["My geyser is not working.", "My geyser has stopped working.", "The geyser has stopped heating water."],
      options: ["My geyser is not working.", "My geyser not working.", "My geyser is not works."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A fridge that has stopped", te: "ఆగిపోయిన ఫ్రిజ్" },
    scene: {
      en: "Your fridge has stopped working. You call Cool Home customer care. Swapna answers.",
      te: "మీ ఫ్రిజ్ పని చేయడం ఆగిపోయింది. Cool Home కస్టమర్ కేర్‌కి ఫోన్ చేశారు. స్వప్న మాట్లాడుతున్నారు.",
    },
    partner: { en: "Swapna (customer care)", te: "స్వప్న (కస్టమర్ కేర్)" },
    skills: [{ id: "fault", label: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" } }],
    turns: [
      {
        partner: "Good morning, Cool Home customer care. How can I help?",
        te: "నమస్కారం, Cool Home కస్టమర్ కేర్. చెప్పండి, ఏం సహాయం కావాలి?",
        hint: { en: "Say what has happened to your fridge.", te: "మీ ఫ్రిజ్‌కి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Good morning. My fridge has stopped working.", good: true, skill: "fault" },
          { say: "Good morning. My fridge is stopped working.", good: false, skill: "fault" },
          {
            say: "Your fridges are useless. Mine has stopped again!",
            good: false,
            skill: "fault",
            react: { en: "I'm very sorry. Let me help you.", te: "చాలా sorry అండీ. నేను సహాయం చేస్తాను." },
          },
        ],
      },
      {
        partner: "I'm sorry to hear that. What is the problem?",
        te: "అయ్యో, sorry అండీ. సమస్య ఏంటి?",
        hint: { en: "Say it is not cold inside any more.", te: "లోపల ఇక చల్లగా లేదని చెప్పండి." },
        replies: [
          { say: "It has stopped cooling.", good: true, skill: "fault" },
          { say: "It is not cooling at all.", good: true, skill: "fault" },
          { say: "It not cooling.", good: false, skill: "fault", fixIt: "be" },
        ],
      },
      {
        partner: "When did you buy it?",
        te: "ఎప్పుడు కొన్నారు?",
        hint: { en: "Say you bought it two years ago.", te: "రెండేళ్ళ క్రితం కొన్నారని చెప్పండి." },
        replies: [
          { say: "I bought it two years ago.", good: true, skill: "fault" },
          { say: "I have bought it two years ago.", good: false, skill: "fault" },
        ],
      },
      {
        partner: "Okay. A technician will call you today.",
        te: "సరే. ఈ రోజు ఒక technician మీకు ఫోన్ చేస్తారు.",
        hint: { en: "Thank her, and say you will wait for the call.", te: "ఆవిడకి థాంక్స్ చెప్పి, కాల్ కోసం ఎదురుచూస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll wait for the call.", good: true },
          { say: "Okay. Please do the needful.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};

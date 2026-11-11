import type { Lesson } from "../../types";

/** Week 20, Day 5 (CURRICULUM §4): small phone problems — slow, battery, charger, storage — at a mobile repair shop. */
export const day: Lesson = {
  id: "my-phone-is-slow",
  kind: "lesson",
  title: { en: "My Phone Is Slow", te: "ఫోన్ సమస్యలు" },
  subtitle: "phone problems",
  summary: {
    en: "Learn to explain small phone problems: My phone is very slow. The battery finishes very quickly.",
    te: "ఫోన్ చిన్న సమస్యలు చెప్పడం నేర్చుకుందాం: My phone is very slow. The battery finishes very quickly.",
  },
  seo: {
    title: "Phone Problems in English for Telugu Speakers",
    description:
      "Say My phone is very slow and My charger is not working. Simple lessons for Telugu speakers on explaining phone problems at a repair shop.",
  },
  pattern: [
    { text: "My phone", role: "who" },
    { text: "is", role: "action" },
    { text: "very slow", role: "what" },
  ],
  core: [
    { en: "My phone is very slow.", te: "నా phone చాలా slow గా ఉంది.", extra: ["slowly"] },
    { en: "The battery finishes very quickly.", te: "battery చాలా త్వరగా అయిపోతుంది.", extra: ["finish"] },
    { en: "My charger is not working.", te: "నా charger పని చేయట్లేదు.", extra: ["no"] },
    { en: "The storage is full.", te: "storage నిండిపోయింది.", extra: ["are"] },
    { en: "You should delete old videos.", te: "మీరు పాత videos డిలీట్ చేయాలి.", extra: ["deleting"] },
    { en: "Can you check my phone, please?", te: "నా phone ఒకసారి చూస్తారా?", extra: ["checking"] },
    { en: "How much will it cost?", te: "ఎంత అవుతుంది?", extra: ["many"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at your phone. Say one thing about it: The battery is fine, or My phone is slow.",
    te: "మీ phone చూడండి. దాని గురించి ఒక మాట చెప్పండి: The battery is fine, లేదా My phone is slow.",
  },
  words: [
    { en: "slow", te: "నెమ్మదిగా ఉండే" },
    { en: "battery", te: "బ్యాటరీ" },
    { en: "charger", te: "ఛార్జర్" },
    { en: "storage", te: "స్టోరేజ్ (ఫోటోలు, videos ఉంచే చోటు)" },
    { en: "delete", te: "డిలీట్ చేయడం, తీసేయడం" },
  ],
  grammar: ["am-is-are", "present-simple", "should-must-have-to"],
  topics: ["phone", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" },
      body: {
        en: "Name the thing first, then say what is wrong: My phone is very slow. My charger is not working. For one thing, use is.",
        te: "ముందు వస్తువు పేరు, తర్వాత సమస్య చెప్పండి: My phone is very slow. My charger is not working. ఒక్క వస్తువుకి is వాడండి.",
      },
      bridge: {
        te: ["నా phone", "చాలా slow గా", "ఉంది"],
        en: [
          { text: "My phone", role: "who" },
          { text: "is", role: "action" },
          { text: "very slow", role: "what" },
        ],
      },
      examples: [
        { en: "My phone is very slow.", te: "నా phone చాలా slow గా ఉంది." },
        { en: "My charger is not working.", te: "నా charger పని చేయట్లేదు." },
        { en: "The storage is full.", te: "storage నిండిపోయింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which problem?", te: "ఏ సమస్య?" },
      items: [
        {
          form: "slow",
          useFor: { en: "Apps take a long time to open.", te: "app లు ఓపెన్ అవడానికి చాలా టైమ్ పడుతుంది." },
          example: { en: "My phone is very slow.", te: "నా phone చాలా slow గా ఉంది." },
        },
        {
          form: "The battery finishes quickly.",
          useFor: { en: "The charge does not last the day.", te: "charge రోజంతా ఉండట్లేదు." },
          example: { en: "The battery finishes very quickly.", te: "battery చాలా త్వరగా అయిపోతుంది." },
        },
        {
          form: "The storage is full.",
          useFor: { en: "There is no space for new photos.", te: "కొత్త ఫోటోలకి చోటు లేదు." },
          example: { en: "The storage is full.", te: "storage నిండిపోయింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "My phone is not having space.",
      right: "My phone has no space.",
      why: {
        en: "Have for owning something never takes -ing. Telugu ఉండట్లేదు makes people say having.",
        te: "'ఉండట్లేదు' అనే అలవాటు వల్ల having అనేస్తాం; ఉండటం అనే అర్థంలో have కి -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Please check and do the needful.",
      right: "Please check it and fix it.",
      why: {
        en: "Do the needful sounds old and unclear. Say exactly what you want done.",
        te: "do the needful పాత, అస్పష్టమైన మాట. మీకు ఏం కావాలో సూటిగా చెప్పండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Apps take a long time to open. Tell the repair person.",
        te: "app లు ఓపెన్ అవడానికి చాలా టైమ్ పడుతోంది. రిపేర్ చేసే వారికి చెప్పండి.",
      },
      options: ["My phone is very slow.", "My phone very slow.", "My phone is very slowly."],
      answer: 0,
      why: {
        en: "Telugu needs no is here, but English does; slow tells us about the phone.",
        te: "తెలుగులో 'ఉంది' లేకుండా అనేస్తాం, ఇంగ్లీష్‌లో is కావాలి; phone ఎలా ఉందో slow చెప్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The battery ___ very quickly.",
      te: "battery చాలా త్వరగా అయిపోతుంది.",
      options: ["finishes", "finish", "finishing"],
      answer: 0,
      why: {
        en: "The battery is one thing, like he or she, so the verb takes es.",
        te: "battery ఒక్కటే (he, she లాగా), అందుకే verb కి es వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The repair person says: The storage is full. What does it mean?",
        te: "రిపేర్ చేసే వారు The storage is full అన్నారు. అర్థం ఏంటి?",
      },
      options: ["There is no space on your phone.", "Your battery is empty.", "Your phone is too old."],
      answer: 0,
      why: {
        en: "Storage is the space for photos and videos; full means no space is left.",
        te: "storage అంటే ఫోటోలు, videos ఉంచే చోటు; full అంటే ఖాళీ లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "You should deleting old videos.",
      wrongIndex: 2,
      fix: "You should delete old videos.",
      why: {
        en: "After should, the verb stays plain, with no -ing.",
        te: "should తర్వాత verb మామూలుగానే ఉంటుంది, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your charger does not charge the phone. Tell the shopkeeper.",
        te: "మీ charger తో phone charge అవ్వట్లేదు. షాపు వారికి చెప్పండి.",
      },
      expected: ["My charger is not working.", "My charger is not working properly."],
      options: ["My charger is not working.", "My charger not working.", "My charger is not work."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the repair person how much it will cost.",
        te: "ఎంత అవుతుందో రిపేర్ చేసే వారిని అడగండి.",
      },
      expected: ["How much will it cost?", "How much does it cost?"],
      options: ["How much will it cost?", "How much it will cost?", "How many will it cost?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the mobile repair shop", te: "మొబైల్ రిపేర్ షాపులో" },
    scene: {
      en: "Your phone is slow and the battery is weak. Fatima runs the mobile shop near the bus stand.",
      te: "మీ phone slow గా ఉంది, battery కూడా త్వరగా అయిపోతోంది. bus stand దగ్గర మొబైల్ షాపు ఫాతిమా గారిది.",
    },
    partner: { en: "Fatima (mobile shop owner)", te: "ఫాతిమా (మొబైల్ షాపు యజమాని)" },
    skills: [
      { id: "problem", label: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" } },
      { id: "polite", label: { en: "Being polite", te: "మర్యాదగా ఉండటం" } },
    ],
    turns: [
      {
        partner: "Good evening. What's the problem?",
        te: "నమస్కారం. ఏంటి సమస్య?",
        hint: { en: "Greet her, and say your phone takes a long time to open apps.", te: "నమస్కారం చెప్పి, మీ phone లో app లు ఓపెన్ అవడానికి చాలా టైమ్ పడుతోందని చెప్పండి." },
        replies: [
          { say: "Good evening. My phone is very slow.", good: true, skill: "problem" },
          { say: "Good evening. My phone very slow.", good: false, skill: "problem", fixIt: "be" },
        ],
      },
      {
        partner: "Let me see. Your storage is full.",
        te: "చూడనివ్వండి. మీ storage నిండిపోయింది.",
        hint: { en: "Ask her what you should do.", te: "మీరు ఏం చేయాలో ఆవిడని అడగండి." },
        replies: [
          { say: "Oh! What should I do?", good: true, skill: "problem" },
          { say: "Oh! What I should do?", good: false, skill: "problem", fixIt: "question" },
        ],
      },
      {
        partner: "Delete old videos. And your battery is very weak.",
        te: "పాత videos డిలీట్ చేయండి. మీ battery కూడా చాలా weak గా ఉంది.",
        hint: { en: "Agree: it finishes quickly. Then ask the price of a new one.", te: "అవును, త్వరగా అయిపోతుందని చెప్పి, కొత్త దాని ధర అడగండి." },
        replies: [
          { say: "Yes, it finishes quickly. How much is a new one?", good: true, skill: "problem" },
          { say: "Yes, it finish quickly. How much new one?", good: false, skill: "problem", fixIt: "he-she-s" },
          {
            say: "New battery? You just want my money!",
            good: false,
            skill: "polite",
            react: { en: "No, no! Only if you want one.", te: "లేదండీ! మీకు కావాలంటేనే." },
          },
        ],
      },
      {
        partner: "1200 rupees. It takes one hour.",
        te: "1200 రూపాయలు. ఒక గంట పడుతుంది.",
        hint: { en: "Say okay, and that you will come back in an hour.", te: "సరే అని, గంటలో మళ్ళీ వస్తానని చెప్పండి." },
        replies: [
          { say: "Okay. I'll come back in an hour.", good: true, skill: "polite" },
          { say: "Okay. I'll come back after one hour only.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};

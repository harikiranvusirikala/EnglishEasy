import type { Lesson } from "../../types";

/** Week 15, Day 2 (CURRICULUM §4): present simple for timetables — The train leaves at 6:15. It reaches Hyderabad at noon. */
export const day: Lesson = {
  id: "the-train-leaves-at",
  kind: "lesson",
  title: { en: "The Train Leaves at Six", te: "రైలు ఆరింటికి" },
  subtitle: "The train leaves at …",
  summary: {
    en: "Learn to talk about timetables: The train leaves at 6:15. It reaches Hyderabad at noon.",
    te: "టైమ్‌టేబుల్ గురించి మాట్లాడటం నేర్చుకుందాం: The train leaves at 6:15. It reaches Hyderabad at noon.",
  },
  seo: {
    title: "Train Times in English for Telugu Speakers",
    description:
      "Say The train leaves at 6:15 and It reaches Hyderabad at noon. Simple lessons for Telugu speakers on train and bus timetables.",
  },
  pattern: [
    { text: "The train", role: "who" },
    { text: "leaves", role: "action" },
    { text: "at 6:15", role: "when" },
  ],
  core: [
    { en: "The train leaves at 6:15.", te: "రైలు ఆరుంబావుకి బయల్దేరుతుంది.", extra: ["leave"] },
    { en: "It reaches Hyderabad at noon.", te: "మధ్యాహ్నం పన్నెండింటికి హైదరాబాద్ చేరుతుంది.", extra: ["to"] },
    { en: "What time does the train leave?", te: "రైలు ఎన్నింటికి బయల్దేరుతుంది?", extra: ["leaves"] },
    { en: "Which platform does it leave from?", te: "అది ఏ ప్లాట్‌ఫామ్ నుంచి బయల్దేరుతుంది?", extra: ["on"] },
    { en: "The train arrives at half past four.", te: "రైలు నాలుగున్నరకి వస్తుంది.", extra: ["arrive"] },
    { en: "Is the train on time today?", te: "ఈ రోజు రైలు టైమ్‌కే వస్తుందా?", extra: ["in"] },
    { en: "The train is twenty minutes late.", te: "రైలు ఇరవై నిమిషాలు లేటు.", extra: ["minute"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say the times of two buses or trains you know: The bus leaves at …",
    te: "మీకు తెలిసిన రెండు బస్సులు లేదా రైళ్ళ సమయాలు చెప్పండి: The bus leaves at …",
  },
  words: [
    { en: "train", te: "రైలు" },
    { en: "platform", te: "ప్లాట్‌ఫామ్" },
    { en: "arrive", te: "వచ్చి చేరడం" },
    { en: "reach", te: "చేరుకోవడం" },
    { en: "on time", te: "సమయానికి, టైమ్‌కి" },
  ],
  grammar: ["present-simple", "prepositions", "question-words"],
  topics: ["transport", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Timetables use every-day verbs", te: "టైమ్‌టేబుల్‌కి రోజూ వాడే verb" },
      body: {
        en: "For a timetable, use the every-day form of the verb, even for tomorrow's train. One train is like he or she, so add s: leaves, reaches, arrives.",
        te: "టైమ్‌టేబుల్ చెప్పేటప్పుడు రోజూ వాడే verb రూపమే వాడండి, రేపటి రైలుకి కూడా. ఒక్క రైలు he, she లాంటిదే, అందుకే s: leaves, reaches, arrives.",
      },
      bridge: {
        te: ["రైలు", "ఆరుంబావుకి", "బయల్దేరుతుంది"],
        en: [
          { text: "The train", role: "who" },
          { text: "leaves", role: "action" },
          { text: "at 6:15", role: "when" },
        ],
      },
      examples: [
        { en: "The train leaves at 6:15.", te: "రైలు ఆరుంబావుకి బయల్దేరుతుంది." },
        { en: "It reaches Hyderabad at noon.", te: "మధ్యాహ్నం పన్నెండింటికి హైదరాబాద్ చేరుతుంది." },
        { en: "The train arrives at half past four.", te: "రైలు నాలుగున్నరకి వస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Leave, reach, arrive", te: "leave, reach, arrive తేడా" },
      items: [
        {
          form: "leaves",
          useFor: { en: "When the train starts.", te: "రైలు బయల్దేరే సమయం." },
          example: { en: "The train leaves at 6:15.", te: "రైలు ఆరుంబావుకి బయల్దేరుతుంది." },
        },
        {
          form: "reaches",
          useFor: { en: "When it gets to a town; no to after it.", te: "ఊరికి చేరే సమయం; తర్వాత to రాదు." },
          example: { en: "It reaches Hyderabad at noon.", te: "మధ్యాహ్నం పన్నెండింటికి హైదరాబాద్ చేరుతుంది." },
        },
        {
          form: "arrives",
          useFor: { en: "When it comes into the station.", te: "స్టేషన్‌కి వచ్చే సమయం." },
          example: { en: "The train arrives at half past four.", te: "రైలు నాలుగున్నరకి వస్తుంది." },
        },
        {
          form: "What time does … leave?",
          useFor: { en: "To ask the time.", te: "సమయం అడగడానికి." },
          example: { en: "What time does the train leave?", te: "రైలు ఎన్నింటికి బయల్దేరుతుంది?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "It reaches to Hyderabad at noon.",
      right: "It reaches Hyderabad at noon.",
      why: {
        en: "Telugu says హైదరాబాద్‌కి, so we add to. But reach never takes to after it.",
        te: "తెలుగులో 'హైదరాబాద్‌కి' అంటాం, అందుకే to చేరుస్తాం. కానీ reach తర్వాత to రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "The train is leaving daily at six.",
      right: "The train leaves at six every day.",
      why: {
        en: "For a timetable that is the same every day, use leaves, not is leaving.",
        te: "రోజూ ఒకేలా జరిగే టైమ్‌టేబుల్‌కి -ing వాడం; leaves అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["The bus leaves at half past seven.", "The bus leave at half past seven.", "The bus leaving at half past seven."],
      answer: 0,
      why: {
        en: "One bus is like he or she, so the verb takes s.",
        te: "ఒక్క బస్ he, she లాంటిదే, అందుకే verb కి s.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Departures",
      lines: ["Ratnachal Express · 6:15 · Platform 3", "Godavari Express · 17:45 · Platform 2", "Simhadri Express · 18:30 · Platform 4"],
      prompt: {
        en: "You are taking the Simhadri Express. Which platform do you go to?",
        te: "మీరు Simhadri Express ఎక్కాలి. ఏ ప్లాట్‌ఫామ్‌కి వెళ్తారు?",
      },
      options: ["Platform 4", "Platform 2", "Platform 3"],
      answer: 0,
      why: {
        en: "On the board, the Simhadri Express line shows Platform 4 at 18:30.",
        te: "బోర్డు మీద Simhadri Express వరుసలో Platform 4, 18:30 అని ఉంది.",
      },
      say: "The Simhadri Express leaves from platform 4.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask what time the train leaves.", te: "రైలు ఎన్నింటికి బయల్దేరుతుందో అడగండి." },
      options: ["What time does the train leave?", "What time the train leaves?", "When time does the train leave?"],
      answer: 0,
      why: {
        en: "A what time question needs does, and then leave without s.",
        te: "What time ప్రశ్నలో does వస్తుంది; ఆ తర్వాత leave కి s ఉండదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "The train is twenty minute late.",
      wrongIndex: 4,
      fix: "The train is twenty minutes late.",
      why: {
        en: "After twenty, minute needs s, because it is more than one.",
        te: "twenty తర్వాత minute కి s కావాలి; ఒకటి కంటే ఎక్కువ కదా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks about the Hyderabad bus. Say it leaves at half past eight.",
        te: "మీ స్నేహితులు హైదరాబాద్ బస్ గురించి అడిగారు. అది ఎనిమిదిన్నరకి బయల్దేరుతుందని చెప్పండి.",
      },
      expected: ["It leaves at half past eight.", "The bus leaves at half past eight.", "It leaves at 8:30."],
      options: ["It leaves at half past eight.", "It leave at half past eight.", "It leaves on half past eight."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "At the enquiry counter, ask if the train is on time today.",
        te: "ఎంక్వైరీ కౌంటర్‌లో, ఈ రోజు రైలు టైమ్‌కే వస్తుందా అని అడగండి.",
      },
      expected: ["Is the train on time today?", "Is the train on time?"],
      options: ["Is the train on time today?", "Does the train on time today?", "Train is on time today?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the enquiry counter", te: "ఎంక్వైరీ కౌంటర్ దగ్గర" },
    scene: {
      en: "You want to take a train to Hyderabad tomorrow. Ask Imran at the railway enquiry counter.",
      te: "మీరు రేపు హైదరాబాద్‌కి రైలులో వెళ్ళాలి. రైల్వే ఎంక్వైరీ కౌంటర్‌లో ఇమ్రాన్‌ని అడగండి.",
    },
    partner: { en: "Imran (enquiry counter)", te: "ఇమ్రాన్ (ఎంక్వైరీ కౌంటర్)" },
    voice: "b",
    skills: [
      { id: "time", label: { en: "Train times", te: "రైలు సమయాలు" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes, please. How can I help you?",
        te: "చెప్పండి. ఏం కావాలి?",
        hint: {
          en: "Greet him, and ask the time of tomorrow's train to Hyderabad.",
          te: "నమస్కారం చెప్పి, రేపు హైదరాబాద్ రైలు ఎన్నింటికో అడగండి.",
        },
        replies: [
          { say: "Good morning. What time does the Hyderabad train leave?", good: true, skill: "time" },
          { say: "Good morning. What time the Hyderabad train leaves?", good: false, skill: "time", fixIt: "question" },
          {
            say: "Hyderabad train. Time?",
            good: false,
            skill: "polite",
            react: { en: "Good morning to you too! Tomorrow's train?", te: "మీకు కూడా నమస్కారం! రేపటి రైలా?" },
          },
        ],
      },
      {
        partner: "The Godavari Express leaves at 5:45 in the evening.",
        te: "గోదావరి ఎక్స్‌ప్రెస్ సాయంత్రం 5:45 కి బయల్దేరుతుంది.",
        hint: { en: "Ask what time it gets to Hyderabad.", te: "హైదరాబాద్‌కి ఎన్నింటికి చేరుతుందో అడగండి." },
        replies: [
          { say: "What time does it reach Hyderabad?", good: true, skill: "time" },
          { say: "What time does it reach to Hyderabad?", good: false, skill: "time", fixIt: "preposition" },
        ],
      },
      {
        partner: "It reaches Hyderabad at 6:15 in the morning.",
        te: "ఉదయం ఆరుంబావుకి హైదరాబాద్ చేరుతుంది.",
        hint: { en: "Ask about the platform.", te: "ఏ ప్లాట్‌ఫామో అడగండి." },
        replies: [
          { say: "Which platform does it leave from?", good: true, skill: "time" },
          { say: "Which platform it leaves from?", good: false, skill: "time" },
        ],
      },
      {
        partner: "Platform 2. Please come thirty minutes early.",
        te: "ప్లాట్‌ఫామ్ 2. అరగంట ముందే రండి.",
        hint: { en: "Thank him, and promise to come early.", te: "థాంక్స్ చెప్పి, ముందే వస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll come early.", good: true, skill: "polite" },
          { say: "Thank you. I'll coming early.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

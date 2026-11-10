import type { Lesson } from "../../types";

/** Week 3, Day 2 (CURRICULUM §3): half past, quarter past, quarter to. */
export const day: Lesson = {
  id: "telling-the-time",
  kind: "lesson",
  title: { en: "Telling the Time", te: "సమయం చెప్పడం" },
  subtitle: "half past / quarter to",
  summary: {
    en: "Learn to tell the time with half past, quarter past and quarter to.",
    te: "half past, quarter past, quarter to తో టైమ్ చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Telling the Time in English for Telugu Speakers: Half Past, Quarter To",
    description:
      "Say It is half past six and quarter to nine in English. Simple lessons for Telugu speakers on telling the time, with Telugu explanations.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is", role: "action" },
    { text: "half past six", role: "when" },
  ],
  core: [
    { en: "It is half past six.", te: "ఆరున్నర అయింది.", extra: ["at"] },
    { en: "It is quarter past nine.", te: "తొమ్మిదింబావు అయింది.", extra: ["to"] },
    { en: "It is quarter to ten.", te: "పదికి పావుగంట తక్కువ ఉంది.", extra: ["past"] },
    { en: "The bus comes at quarter to nine.", te: "బస్ ఎనిమిది ముప్పావుకి వస్తుంది.", extra: ["on"] },
    { en: "Is it five o'clock?", te: "ఐదు గంటలు అయిందా?", extra: ["Are"] },
    { en: "I sleep at half past ten.", te: "నేను పదిన్నరకి పడుకుంటాను.", extra: ["on"] },
    { en: "My watch is slow.", te: "నా వాచీ వెనకబడి ఉంది.", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at a clock three times today and say the time in English.",
    te: "ఈ రోజు మూడుసార్లు గడియారం చూసి, టైమ్ ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "half past", te: "…న్నర (30 నిమిషాలు)" },
    { en: "quarter past", te: "…ంబావు (15 నిమిషాలు)" },
    { en: "quarter to", te: "పావు తక్కువ (45 నిమిషాలు)" },
    { en: "watch", te: "వాచీ, చేతి గడియారం" },
    { en: "minute", te: "నిమిషం" },
  ],
  grammar: ["prepositions", "am-is-are"],
  topics: ["time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Past and to", te: "past అంటే దాటి, to అంటే ముందు" },
      body: {
        en: "English looks at the clock. Past means after the hour; to means before the next hour. Half past six is 6:30. Quarter past is fifteen minutes after; quarter to is fifteen minutes before.",
        te: "ఇంగ్లీష్‌లో గడియారం చూసి చెప్తారు. past అంటే ఆ గంట దాటిన తర్వాత; to అంటే తర్వాతి గంటకు ముందు. half past six = ఆరున్నర. quarter past = పదిహేను నిమిషాలు దాటింది; quarter to = పదిహేను నిమిషాలు తక్కువ.",
      },
      bridge: {
        te: ["ఆరున్నర", "అయింది"],
        en: [
          { text: "It", role: "who" },
          { text: "is", role: "action" },
          { text: "half past six", role: "when" },
        ],
      },
      examples: [
        { en: "It is half past six.", te: "ఆరున్నర అయింది." },
        { en: "It is quarter past nine.", te: "తొమ్మిదింబావు అయింది." },
        { en: "It is quarter to ten.", te: "పదికి పావుగంట తక్కువ ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Half past, quarter past, quarter to", te: "అర, పావు, ముప్పావు" },
      items: [
        {
          form: "half past = :30",
          useFor: { en: "Thirty minutes after the hour.", te: "గంట దాటి ముప్పై నిమిషాలు." },
          example: { en: "I sleep at half past ten.", te: "నేను పదిన్నరకి పడుకుంటాను." },
        },
        {
          form: "quarter past = :15",
          useFor: { en: "Fifteen minutes after the hour.", te: "గంట దాటి పదిహేను నిమిషాలు." },
          example: { en: "It is quarter past nine.", te: "తొమ్మిదింబావు అయింది." },
        },
        {
          form: "quarter to = :45",
          useFor: { en: "Fifteen minutes before the next hour.", te: "తర్వాతి గంటకు పదిహేను నిమిషాలు తక్కువ." },
          example: { en: "The bus comes at quarter to nine.", te: "బస్ ఎనిమిది ముప్పావుకి వస్తుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "It is six and half.",
      right: "It is half past six.",
      why: {
        en: "Say half past, then the hour: half past six.",
        te: "ముందు half past, తర్వాత గంట చెప్పాలి: half past six.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Now time is six.",
      right: "It is six o'clock now.",
      why: {
        en: "Start the time with It is: It is six o'clock.",
        te: "టైమ్ చెప్పేటప్పుడు It is తో మొదలుపెట్టాలి: It is six o'clock.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "How do you say 7:30?", te: "7:30 ని ఇంగ్లీష్‌లో ఎలా చెప్తారు?" },
      options: ["It is seven and half.", "It is half past seven.", "It is half to seven."],
      answer: 1,
      why: {
        en: "Thirty minutes after seven is half past seven, not seven and half.",
        te: "ఏడు దాటి అరగంట అంటే half past seven. 'ఏడున్నర' ని seven and half అనరు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It is quarter ___ ten.",
      te: "పదికి పావుగంట తక్కువ ఉంది (9:45).",
      options: ["past", "to", "at"],
      answer: 1,
      why: {
        en: "9:45 is fifteen minutes before ten, so say to.",
        te: "9:45 అంటే పదికి పదిహేను నిమిషాలు తక్కువ, కాబట్టి to.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Bus Times",
      lines: ["Guntur 7:30", "Vijayawada 8:15", "Tenali 9:45"],
      prompt: { en: "When does the bus to Vijayawada come?", te: "విజయవాడ బస్ ఎన్నింటికి వస్తుంది?" },
      options: ["At quarter past eight.", "At quarter to eight.", "At half past seven."],
      answer: 0,
      why: {
        en: "Fifteen minutes after eight is quarter past eight: The bus comes at quarter past eight.",
        te: "ఎనిమిది దాటి పదిహేను నిమిషాలు అంటే quarter past eight: The bus comes at quarter past eight.",
      },
      say: "The bus comes at quarter past eight.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Now time is six.",
      wrongIndex: 0,
      fix: "It is six now.",
      why: {
        en: "Begin with It is: It is six now.",
        te: "It is తో మొదలుపెట్టాలి: It is six now.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the bus stop, someone asks: What time is it? It is 6:30. Answer.",
        te: "బస్ స్టాప్‌లో ఒకరు అడుగుతున్నారు: What time is it? ఆరున్నర అయింది. జవాబు చెప్పండి.",
      },
      expected: ["It is half past six.", "Half past six."],
      options: ["It is six and half.", "It is half past six.", "It is half to six."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend asks: What time do you sleep? You sleep at 10:30. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: What time do you sleep? మీరు పదిన్నరకి పడుకుంటారు. జవాబు చెప్పండి.",
      },
      expected: ["I sleep at half past ten.", "At half past ten."],
      options: ["I sleep at half past ten.", "I sleep on half past ten.", "I sleeping at half past ten."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "What time is it?", te: "టైమ్ ఎంత?" },
    scene: {
      en: "You are waiting at a bus stop. Salma is waiting too. Ask her the time and about the bus.",
      te: "మీరు బస్ స్టాప్‌లో ఎదురుచూస్తున్నారు. సల్మా గారు కూడా అక్కడే ఉన్నారు. ఆవిడని టైమ్, బస్ గురించి అడగండి.",
    },
    partner: { en: "Salma (at the bus stop)", te: "సల్మా (బస్ స్టాప్‌లో)" },
    skills: [
      { id: "ask", label: { en: "Ask", te: "ప్రశ్న అడగడం" } },
      { id: "time", label: { en: "Time", te: "టైమ్ చెప్పడం" } },
    ],
    turns: [
      {
        partner: "Are you waiting for the bus?",
        te: "బస్ కోసం ఎదురుచూస్తున్నారా?",
        hint: { en: "Say yes, then ask her the time.", te: "అవునని చెప్పి, టైమ్ ఎంతో అడగండి." },
        replies: [
          { say: "Yes. What time is it?", good: true, skill: "ask" },
          { say: "Yes. What is time?", good: false, skill: "ask" },
          {
            say: "Why do you ask?",
            good: false,
            skill: "ask",
            react: { en: "Oh, just asking. I am waiting too.", te: "ఊరికే అడిగాను. నేను కూడా వెయిట్ చేస్తున్నాను." },
          },
        ],
      },
      {
        partner: "It is quarter to nine.",
        te: "తొమ్మిదికి పావుగంట తక్కువ.",
        hint: { en: "Ask when the bus comes. Use does.", te: "బస్ ఎప్పుడు వస్తుందో అడగండి. does వాడండి." },
        replies: [
          { say: "When does the bus come?", good: true, skill: "ask" },
          { say: "When the bus comes?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "It comes at nine o'clock.",
        te: "తొమ్మిది గంటలకి వస్తుంది.",
        hint: { en: "Say how many minutes are left, and thank her.", te: "ఇంకా ఎన్ని నిమిషాలు ఉందో చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "So, fifteen minutes. Thank you.", good: true, skill: "time" },
          { say: "So, fifteen minute. Thank you.", good: false, skill: "time" },
        ],
      },
    ],
  },
};

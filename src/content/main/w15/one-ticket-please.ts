import type { Lesson } from "../../types";

/** Week 15, Day 5 (CURRICULUM §4): tickets, return tickets and seats — One ticket to Tirupati, please. Is this seat free? */
export const day: Lesson = {
  id: "one-ticket-please",
  kind: "lesson",
  title: { en: "One Ticket, Please", te: "టికెట్" },
  subtitle: "One ticket to …, please.",
  summary: {
    en: "Learn to buy tickets and find a seat: One ticket to Tirupati, please. Is this seat free?",
    te: "టికెట్ కొనడం, సీటు చూసుకోవడం నేర్చుకుందాం: One ticket to Tirupati, please. Is this seat free?",
  },
  seo: {
    title: "Buying a Ticket in English for Telugu Speakers",
    description:
      "Say One ticket to Tirupati, please and Is this seat free? Simple lessons for Telugu speakers on bus and train tickets.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "need", role: "action" },
    { text: "a return ticket", role: "what" },
    { text: "to Nellore", role: "what" },
  ],
  core: [
    { en: "One ticket to Tirupati, please.", te: "తిరుపతికి ఒక టికెట్ ఇవ్వండి.", extra: ["tickets"] },
    { en: "Two tickets to Guntur, please.", te: "గుంటూరుకి రెండు టికెట్లు ఇవ్వండి.", extra: ["ticket"] },
    { en: "Is this seat free?", te: "ఈ సీటు ఖాళీగా ఉందా?", extra: ["Are"] },
    { en: "I need a return ticket to Nellore.", te: "నాకు నెల్లూరుకి రానూపోనూ టికెట్ కావాలి.", extra: ["tickets"] },
    { en: "Sorry, this seat is for ladies.", te: "సారీ, ఈ సీటు ఆడవాళ్ళకి.", extra: ["are"] },
    { en: "Can I have a window seat, please?", te: "కిటికీ పక్క సీటు ఇస్తారా?", extra: ["has"] },
    { en: "How much is a ticket to Kurnool?", te: "కర్నూలుకి టికెట్ ఎంత?", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a town you visit. Say aloud how you ask for a ticket: One ticket to …, please.",
    te: "మీరు వెళ్ళే ఒక ఊరి గురించి ఆలోచించండి. టికెట్ ఎలా అడుగుతారో గట్టిగా చెప్పండి: One ticket to …, please.",
  },
  words: [
    { en: "ticket", te: "టికెట్" },
    { en: "return ticket", te: "రానూపోనూ టికెట్" },
    { en: "conductor", te: "కండక్టర్" },
    { en: "free", te: "ఖాళీ (సీటు)" },
    { en: "window seat", te: "కిటికీ పక్క సీటు" },
  ],
  grammar: ["plurals-countable", "yes-no-questions", "can-could"],
  topics: ["transport", "travel", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Buying a ticket", te: "టికెట్ కొనడం" },
      body: {
        en: "Say how many tickets, then to and the place, then please. For more than one, add s: two tickets. To go and come back, ask for a return ticket.",
        te: "ఎన్ని టికెట్లో, తర్వాత to, ఊరి పేరు, చివర please. ఒకటి కంటే ఎక్కువ అయితే s: two tickets. వెళ్ళి తిరిగి రావడానికి return ticket అడగండి.",
      },
      bridge: {
        te: ["నాకు", "నెల్లూరుకి రానూపోనూ టికెట్", "కావాలి"],
        en: [
          { text: "I", role: "who" },
          { text: "need", role: "action" },
          { text: "a return ticket to Nellore", role: "what" },
        ],
      },
      examples: [
        { en: "One ticket to Tirupati, please.", te: "తిరుపతికి ఒక టికెట్ ఇవ్వండి." },
        { en: "Two tickets to Guntur, please.", te: "గుంటూరుకి రెండు టికెట్లు ఇవ్వండి." },
        { en: "I need a return ticket to Nellore.", te: "నాకు నెల్లూరుకి రానూపోనూ టికెట్ కావాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Tickets and seats", te: "టికెట్లు, సీట్లు" },
      items: [
        {
          form: "one ticket / two tickets",
          useFor: { en: "How many people are going.", te: "ఎంతమంది వెళ్తున్నారో." },
          example: { en: "Two tickets to Guntur, please.", te: "గుంటూరుకి రెండు టికెట్లు ఇవ్వండి." },
        },
        {
          form: "a return ticket",
          useFor: { en: "To go and come back.", te: "వెళ్ళి తిరిగి రావడానికి." },
          example: { en: "I need a return ticket to Nellore.", te: "నాకు నెల్లూరుకి రానూపోనూ టికెట్ కావాలి." },
        },
        {
          form: "Is this seat free?",
          useFor: { en: "Free here means nobody is sitting there.", te: "ఇక్కడ free అంటే ఉచితం కాదు, ఎవరూ కూర్చోలేదని." },
          example: { en: "Is this seat free?", te: "ఈ సీటు ఖాళీగా ఉందా?" },
        },
        {
          form: "a window seat",
          useFor: { en: "The seat next to the window.", te: "కిటికీ పక్కన సీటు." },
          example: { en: "Can I have a window seat, please?", te: "కిటికీ పక్క సీటు ఇస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "One up and down ticket to Nellore.",
      right: "One return ticket to Nellore.",
      why: {
        en: "Up and down comes from Telugu రానూపోనూ. In English, ask for a return ticket.",
        te: "రానూపోనూ ని up and down అనకండి; ఇంగ్లీష్‌లో return ticket అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Two ticket to Guntur, please.",
      right: "Two tickets to Guntur, please.",
      why: {
        en: "For two or more tickets, add s, and say it clearly.",
        te: "రెండు లేదా ఎక్కువ టికెట్లకి s చేర్చి, స్పష్టంగా పలకండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "There is an empty seat next to a man. Ask him politely.",
        te: "ఒకాయన పక్కన సీటు ఖాళీగా ఉంది. ఆయనని మర్యాదగా అడగండి.",
      },
      options: ["Excuse me, is this seat free?", "Excuse me, this seat free?", "Move your bag. I'm sitting here."],
      answer: 0,
      why: {
        en: "A question needs is at the front, and Excuse me makes it polite.",
        te: "ప్రశ్నకి is ముందు కావాలి; Excuse me అంటే మర్యాద.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "One ticket ___ Tirupati, please.",
      te: "తిరుపతికి ఒక టికెట్ ఇవ్వండి.",
      options: ["to", "at", "in"],
      answer: 0,
      why: {
        en: "Telugu కి becomes to here: a ticket takes you to a place.",
        te: "ఇక్కడ తెలుగు 'కి' ఇంగ్లీష్‌లో to: ఊరికి టికెట్ అంటే to.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The conductor says: Sorry, the bus is full. What does it mean?",
        te: "కండక్టర్ Sorry, the bus is full అన్నారు. అర్థం ఏంటి?",
      },
      options: ["There is no space for more people.", "The ticket is free today.", "The bus does not go there."],
      answer: 0,
      why: {
        en: "Full means no more seats and no more space inside.",
        te: "full అంటే లోపల ఇంకా సీట్లు, చోటు లేవు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Can I has a window seat, please?",
      wrongIndex: 2,
      fix: "Can I have a window seat, please?",
      why: {
        en: "After can, the verb stays plain; has goes only with he or she.",
        te: "can తర్వాత verb మారదు; has అనేది he, she తో మాత్రమే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the counter, ask for one ticket to Tirupati.",
        te: "కౌంటర్‌లో తిరుపతికి ఒక టికెట్ అడగండి.",
      },
      expected: ["One ticket to Tirupati, please.", "Can I have one ticket to Tirupati?", "One ticket to Tirupati."],
      options: ["One ticket to Tirupati, please.", "One tickets to Tirupati, please.", "Tirupati one ticket give."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Ask for a ticket to Nellore and back.",
        te: "నెల్లూరుకి వెళ్ళి రావడానికి టికెట్ అడగండి.",
      },
      expected: ["One return ticket to Nellore, please.", "I need a return ticket to Nellore.", "A return ticket to Nellore, please."],
      options: ["One return ticket to Nellore, please.", "One up and down ticket to Nellore.", "One return ticket at Nellore, please."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "On the bus to Kurnool", te: "కర్నూలు బస్‌లో" },
    scene: {
      en: "You are on an RTC bus to Kurnool. Ramesh, the conductor, comes for tickets.",
      te: "మీరు కర్నూలు వెళ్ళే RTC బస్‌లో ఉన్నారు. కండక్టర్ రమేష్ టికెట్ల కోసం వస్తున్నారు.",
    },
    partner: { en: "Ramesh (conductor)", te: "రమేష్ (కండక్టర్)" },
    voice: "b",
    skills: [
      { id: "ticket", label: { en: "Buying a ticket", te: "టికెట్ కొనడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Tickets, tickets! Where are you going?",
        te: "టికెట్లు, టికెట్లు! ఎక్కడికి వెళ్తున్నారు?",
        hint: { en: "Say where you are going, and ask the price.", te: "ఎక్కడికో చెప్పి, టికెట్ ఎంతో అడగండి." },
        replies: [
          { say: "To Kurnool. How much is a ticket?", good: true, skill: "ticket" },
          { say: "To Kurnool. How much is ticket?", good: false, skill: "ticket", fixIt: "article" },
        ],
      },
      {
        partner: "It's 180 rupees.",
        te: "180 రూపాయలు.",
        hint: { en: "Ask for one ticket, and give him 200 rupees.", te: "ఒక టికెట్ అడిగి, 200 రూపాయలు ఇవ్వండి." },
        replies: [
          { say: "One ticket, please. Here is 200.", good: true, skill: "ticket" },
          {
            say: "Give ticket fast. I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Please wait a minute. Everyone needs a ticket.", te: "కొంచెం ఆగండి. అందరికీ టికెట్ కావాలి కదా." },
          },
        ],
      },
      {
        partner: "Here is your ticket and 20 rupees change.",
        te: "ఇదిగోండి మీ టికెట్, 20 రూపాయల చిల్లర.",
        hint: { en: "Thank him, and ask about empty seats.", te: "థాంక్స్ చెప్పి, ఖాళీ సీట్లు ఉన్నాయా అని అడగండి." },
        replies: [
          { say: "Thank you. Are there any free seats?", good: true, skill: "ticket" },
          { say: "Thank you. Any seats are free?", good: false, skill: "ticket", fixIt: "question" },
        ],
      },
      {
        partner: "The bus is full now. Wait till the next stop.",
        te: "ఇప్పుడు బస్ నిండుగా ఉంది. తర్వాతి స్టాప్ వరకు ఆగండి.",
        hint: { en: "Say okay, and ask him to tell you at Kurnool.", te: "సరే అని, కర్నూలు వచ్చినప్పుడు చెప్పమని అడగండి." },
        replies: [
          { say: "Okay. Please tell me when we reach Kurnool.", good: true, skill: "polite" },
          { say: "Okay. Please tell me when we reach to Kurnool.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

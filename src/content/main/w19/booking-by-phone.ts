import type { Lesson } from "../../types";

/** Week 19, Day 5 (CURRICULUM §4): booking by phone — a gas cylinder, a doctor's appointment, a cab; I'd like to book …; on Monday, at six. */
export const day: Lesson = {
  id: "booking-by-phone",
  kind: "lesson",
  title: { en: "Booking by Phone", te: "ఫోన్‌లో బుకింగ్" },
  subtitle: "I'd like to book …",
  summary: {
    en: "Learn to book things by phone: I'd like to book a gas cylinder, please. Is the doctor available on Monday?",
    te: "ఫోన్‌లో బుక్ చేయడం నేర్చుకుందాం: I'd like to book a gas cylinder, please. Is the doctor available on Monday?",
  },
  seo: {
    title: "Booking by Phone in English for Telugu Speakers",
    description:
      "Say I'd like to book a gas cylinder, please. Book a doctor's appointment or a cab. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "I'd", role: "who" },
    { text: "like to book", role: "action" },
    { text: "a gas cylinder", role: "what" },
  ],
  core: [
    { en: "I'd like to book a gas cylinder, please.", te: "ఒక గ్యాస్ సిలిండర్ బుక్ చేయాలండీ.", extra: ["booking"] },
    { en: "I'd like an appointment with Dr Prasad.", te: "డాక్టర్ ప్రసాద్ గారి దగ్గర appointment కావాలి.", extra: ["to"] },
    { en: "Is the doctor available on Monday?", te: "సోమవారం డాక్టర్ గారు ఉంటారా?", extra: ["in"] },
    { en: "What time should I come?", te: "ఎన్ని గంటలకి రావాలి?", extra: ["do"] },
    { en: "Can you confirm the time, please?", te: "టైం ఒకసారి confirm చేస్తారా?", extra: ["confirming"] },
    { en: "I need a cab at six tomorrow morning.", te: "రేపు ఉదయం ఆరు గంటలకి cab కావాలి.", extra: ["on"] },
    { en: "When will the cylinder come?", te: "సిలిండర్ ఎప్పుడు వస్తుంది?", extra: ["comes"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find your gas book and read your consumer number aloud in English.",
    te: "మీ గ్యాస్ బుక్ తీసి, మీ consumer number ని ఇంగ్లీష్‌లో గట్టిగా చదవండి.",
  },
  words: [
    { en: "booking", te: "బుకింగ్" },
    { en: "refill", te: "రీఫిల్, నిండు సిలిండర్" },
    { en: "confirm", te: "ఖాయం చేయడం, confirm చేయడం" },
    { en: "consumer number", te: "కన్స్యూమర్ నంబర్, వినియోగదారు నంబర్" },
    { en: "available", te: "అందుబాటులో ఉండటం" },
  ],
  grammar: ["would-like", "prepositions", "question-words"],
  topics: ["phone", "home", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Booking politely", te: "మర్యాదగా బుక్ చేయడం" },
      body: {
        en: "To book something, start with I'd like to book: I'd like to book a gas cylinder, please. For a doctor, say I'd like an appointment. I'd like is softer than I want.",
        te: "ఏదైనా బుక్ చేయాలంటే I'd like to book తో మొదలుపెట్టండి: I'd like to book a gas cylinder, please. డాక్టర్ దగ్గర I'd like an appointment అనండి. I want కంటే I'd like మెత్తగా ఉంటుంది.",
      },
      bridge: {
        te: ["ఒక గ్యాస్ సిలిండర్", "బుక్ చేయాలి"],
        en: [
          { text: "I'd", role: "who" },
          { text: "like to book", role: "action" },
          { text: "a gas cylinder", role: "what" },
        ],
      },
      examples: [
        { en: "I'd like to book a gas cylinder, please.", te: "ఒక గ్యాస్ సిలిండర్ బుక్ చేయాలండీ." },
        { en: "I need a cab at six tomorrow morning.", te: "రేపు ఉదయం ఆరు గంటలకి cab కావాలి." },
        { en: "When will the cylinder come?", te: "సిలిండర్ ఎప్పుడు వస్తుంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "On or at?", te: "on ఆ, at ఆ?" },
      items: [
        {
          form: "on Monday",
          useFor: { en: "Days and dates.", te: "రోజులు, తేదీలు." },
          example: { en: "Is the doctor available on Monday?", te: "సోమవారం డాక్టర్ గారు ఉంటారా?" },
        },
        {
          form: "at six",
          useFor: { en: "Clock times.", te: "గడియారంలో టైం." },
          example: { en: "I need a cab at six tomorrow morning.", te: "రేపు ఉదయం ఆరు గంటలకి cab కావాలి." },
        },
        {
          form: "tomorrow morning",
          useFor: { en: "No on or at before tomorrow.", te: "tomorrow ముందు on, at రావు." },
          example: { en: "I need a cab at six tomorrow morning.", te: "రేపు ఉదయం ఆరు గంటలకి cab కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Can I prepone my appointment?",
      right: "Can I move my appointment to an earlier day?",
      why: {
        en: "Prepone is heard only in India. Everyone understands move to an earlier day.",
        te: "prepone అనేది మన దగ్గరే వింటాం. move to an earlier day అంటే అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I'd like an appointment to Dr Prasad.",
      right: "I'd like an appointment with Dr Prasad.",
      why: {
        en: "Telugu says డాక్టర్ గారికి, but in English an appointment is with a person.",
        te: "తెలుగులో 'డాక్టర్ గారికి' అన్నా, ఇంగ్లీష్‌లో appointment with అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: { en: "Ask if the doctor is free on Monday.", te: "సోమవారం డాక్టర్ గారు ఉంటారా అని అడగండి." },
      options: ["Is the doctor available on Monday?", "Is the doctor available in Monday?", "The doctor is available Monday?"],
      answer: 0,
      why: {
        en: "Days take on. Telugu adds nothing to సోమవారం, so on is easy to forget.",
        te: "రోజుల ముందు on వస్తుంది. తెలుగులో 'సోమవారం' కి ఏమీ చేర్చం, అందుకే on మర్చిపోతాం.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Vijaya Gas Agency",
      lines: ["Your LPG refill booking is confirmed.", "Booking No. 4821", "Delivery within 2 days.", "Do not pay extra to the delivery person."],
      prompt: {
        en: "The delivery person asks for 50 rupees extra. What does the message say?",
        te: "సిలిండర్ తెచ్చిన ఆయన 50 రూపాయలు ఎక్కువ అడిగారు. మెసేజ్ ఏం చెప్తోంది?",
      },
      options: ["Do not pay anything extra.", "Pay him 50 rupees more.", "Book the cylinder again."],
      answer: 0,
      why: {
        en: "The last line says not to pay extra; the bill amount is enough.",
        te: "చివరి లైన్ ఎక్కువ డబ్బులు ఇవ్వొద్దని చెప్తోంది; బిల్లులో ఉన్నంతే చాలు.",
      },
      say: "Do not pay extra to the delivery person.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "indian-english",
      prompt: {
        en: "Your appointment is on Friday. You want Wednesday. What do you say?",
        te: "మీ appointment శుక్రవారం. మీకు బుధవారం కావాలి. ఏమంటారు?",
      },
      options: [
        "Can I move my appointment to Wednesday?",
        "Can I prepone my appointment to Wednesday?",
        "I want Wednesday appointment. Change it.",
      ],
      answer: 0,
      why: {
        en: "Prepone is heard only in India; move is understood everywhere.",
        te: "prepone మన దగ్గరే వింటాం; move అంటే అందరికీ అర్థమవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Please send a cab on six o'clock.",
      wrongIndex: 4,
      fix: "Please send a cab at six o'clock.",
      why: {
        en: "Clock times take at. On is for days and dates.",
        te: "గడియారం టైం ముందు at వస్తుంది. on రోజులకి, తేదీలకి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Call the gas agency. Book a cylinder politely.",
        te: "గ్యాస్ ఏజెన్సీకి ఫోన్ చేశారు. మర్యాదగా సిలిండర్ బుక్ చేయండి.",
      },
      expected: ["I'd like to book a gas cylinder, please.", "I would like to book a gas cylinder.", "I'd like to book a cylinder, please."],
      options: ["I'd like to book a gas cylinder, please.", "I'd like to booking a gas cylinder.", "Send one cylinder fast."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clinic what time you should come.",
        te: "ఎన్ని గంటలకి రావాలో క్లినిక్‌లో అడగండి.",
      },
      expected: ["What time should I come?", "What time should I come to the clinic?"],
      options: ["What time should I come?", "What time I should come?", "What time should I coming?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Booking a gas cylinder", te: "గ్యాస్ సిలిండర్ బుకింగ్" },
    scene: {
      en: "Your gas cylinder is almost empty. You call the gas agency. Fatima answers.",
      te: "మీ గ్యాస్ సిలిండర్ దాదాపు అయిపోయింది. మీరు గ్యాస్ ఏజెన్సీకి ఫోన్ చేశారు. ఫాతిమా గారు ఫోన్ తీశారు.",
    },
    partner: { en: "Fatima (gas agency)", te: "ఫాతిమా (గ్యాస్ ఏజెన్సీ)" },
    skills: [{ id: "book", label: { en: "Booking", te: "బుకింగ్" } }],
    turns: [
      {
        partner: "Good morning, Vijaya Gas Agency. How can I help?",
        te: "నమస్కారం, విజయ గ్యాస్ ఏజెన్సీ. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say politely what you want to book.", te: "ఏం బుక్ చేయాలో మర్యాదగా చెప్పండి." },
        replies: [
          { say: "I'd like to book a gas cylinder, please.", good: true, skill: "book" },
          { say: "I'd like to booking a gas cylinder.", good: false, skill: "book" },
          { say: "Myself Kiran. Book one cylinder.", good: false, skill: "book", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Sure. What is your consumer number?",
        te: "సరే. మీ consumer number ఎంత?",
        hint: { en: "Give the number on your gas book.", te: "మీ గ్యాస్ బుక్ మీద ఉన్న నంబర్ చెప్పండి." },
        replies: [
          { say: "My consumer number is four five two one.", good: true, skill: "book" },
          { say: "My consumer number four five two one.", good: false, skill: "book", fixIt: "be" },
        ],
      },
      {
        partner: "Thank you. The cylinder will come in two days.",
        te: "థాంక్యూ. రెండు రోజుల్లో సిలిండర్ వస్తుంది.",
        hint: { en: "Ask politely for the booking number.", te: "బుకింగ్ నంబర్ మర్యాదగా అడగండి." },
        replies: [
          { say: "Can I have the booking number, please?", good: true, skill: "book" },
          {
            say: "Two days? That's too late. Send it today!",
            good: false,
            skill: "book",
            react: { en: "Sorry, two days is the same for everyone.", te: "Sorry అండీ, అందరికీ రెండు రోజులే పడుతుంది." },
          },
        ],
      },
      {
        partner: "It's four eight two one. Anything else?",
        te: "నాలుగు ఎనిమిది రెండు ఒకటి. ఇంకేమైనా?",
        hint: { en: "Say that is all, and thank her.", te: "అంతే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you.", good: true },
          { say: "No, that is all only. Thank you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};

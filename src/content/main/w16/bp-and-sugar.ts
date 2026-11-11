import type { Lesson } from "../../types";

/** Week 16, Day 3 (CURRICULUM §4): BP and sugar — long-term conditions and regular check-ups (I have diabetes; My BP is high). */
export const day: Lesson = {
  id: "bp-and-sugar",
  kind: "lesson",
  title: { en: "BP and Sugar", te: "BP, షుగర్" },
  subtitle: "I have diabetes. My BP is high.",
  summary: {
    en: "Learn to talk about BP and sugar at a check-up: I have diabetes. My BP is high in the morning.",
    te: "చెకప్‌లో BP, షుగర్ గురించి చెప్పడం నేర్చుకుందాం: I have diabetes. My BP is high in the morning.",
  },
  seo: {
    title: "BP and Sugar in English for Telugu Speakers",
    description:
      "Say I have diabetes and My BP is high in the morning. Simple lessons for Telugu speakers on BP, sugar and regular check-ups.",
  },
  pattern: [
    { text: "My BP", role: "who" },
    { text: "is", role: "action" },
    { text: "high", role: "what" },
    { text: "in the morning", role: "when" },
  ],
  core: [
    { en: "I have diabetes and high BP.", te: "నాకు షుగర్, హై BP రెండూ ఉన్నాయి.", extra: ["am"] },
    { en: "My BP is high in the morning.", te: "పొద్దున పూట నా BP ఎక్కువగా ఉంటుంది.", extra: ["are"] },
    { en: "I check my sugar every month.", te: "ప్రతి నెలా నా షుగర్ చెక్ చేసుకుంటాను.", extra: ["checks"] },
    { en: "My sugar is under control now.", te: "ఇప్పుడు నా షుగర్ కంట్రోల్‌లో ఉంది.", extra: ["in"] },
    { en: "My father also had high BP.", te: "మా నాన్నగారికి కూడా హై BP ఉండేది.", extra: ["have"] },
    { en: "When was your last check-up?", te: "మీరు చివరిసారి చెకప్ ఎప్పుడు చేయించుకున్నారు?", extra: ["were"] },
    { en: "Please check my weight too.", te: "నా బరువు కూడా చూడండి.", extra: ["checking"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one sentence about your own BP or sugar: My BP is normal, or I have diabetes.",
    te: "మీ BP, షుగర్ గురించి ఒక వాక్యం ఇంగ్లీష్‌లో చెప్పండి: My BP is normal, లేదా I have diabetes.",
  },
  words: [
    { en: "diabetes", te: "షుగర్ వ్యాధి, మధుమేహం" },
    { en: "blood pressure", te: "రక్తపోటు, BP" },
    { en: "check-up", te: "చెకప్, ఆరోగ్య పరీక్ష" },
    { en: "under control", te: "కంట్రోల్‌లో, అదుపులో" },
    { en: "weight", te: "బరువు" },
  ],
  grammar: ["have-has-possessives", "adverbs-frequency", "question-words"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "BP and sugar", te: "BP, షుగర్" },
      body: {
        en: "We say sugar, but doctors say diabetes: I have diabetes. BP is short for blood pressure. For the numbers, say is high, is low or is under control: My BP is high.",
        te: "మనం షుగర్ అంటాం; డాక్టర్లు diabetes అంటారు: I have diabetes. BP అంటే blood pressure. రీడింగ్ గురించి is high, is low, is under control అనండి.",
      },
      bridge: {
        te: ["పొద్దున పూట", "నా BP", "ఎక్కువగా ఉంటుంది"],
        en: [
          { text: "My BP", role: "who" },
          { text: "is", role: "action" },
          { text: "high", role: "what" },
          { text: "in the morning", role: "when" },
        ],
      },
      examples: [
        { en: "I have diabetes and high BP.", te: "నాకు షుగర్, హై BP రెండూ ఉన్నాయి." },
        { en: "My BP is high in the morning.", te: "పొద్దున పూట నా BP ఎక్కువగా ఉంటుంది." },
        { en: "My sugar is under control now.", te: "ఇప్పుడు నా షుగర్ కంట్రోల్‌లో ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Have or is?", te: "have ఆ, is ఆ?" },
      items: [
        {
          form: "I have …",
          useFor: { en: "The illness itself: diabetes, high BP.", te: "జబ్బు పేరు చెప్పడానికి: diabetes, high BP." },
          example: { en: "I have diabetes and high BP.", te: "నాకు షుగర్, హై BP రెండూ ఉన్నాయి." },
        },
        {
          form: "My … is …",
          useFor: { en: "Today's number: high, low, under control.", te: "ఈ రోజు రీడింగ్: high, low, under control." },
          example: { en: "My sugar is under control now.", te: "ఇప్పుడు నా షుగర్ కంట్రోల్‌లో ఉంది." },
        },
        {
          form: "every month",
          useFor: { en: "How often you check.", te: "ఎన్నిసార్లు చెక్ చేస్తారో చెప్పడానికి." },
          example: { en: "I check my sugar every month.", te: "ప్రతి నెలా నా షుగర్ చెక్ చేసుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I am a sugar patient.",
      right: "I have diabetes.",
      why: {
        en: "Sugar patient is heard only in India; everywhere else, people say diabetes.",
        te: "sugar patient అనేది మన దగ్గరే వింటాం; బయట అందరికీ అర్థమయ్యే మాట diabetes.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My mother check her sugar every day.",
      right: "My mother checks her sugar every day.",
      why: {
        en: "My mother is one person, like she, so the verb takes s.",
        te: "my mother అంటే ఒక్కరు (she), అందుకే verb కి s చేర్చాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the nurse what your BP is today.", te: "ఈ రోజు మీ BP ఎంతో నర్సుని అడగండి." },
      options: ["What is my BP today?", "My BP is how much today?", "What my BP is today?"],
      answer: 0,
      why: {
        en: "Telugu puts ఎంత at the end; an English question starts with What, then is.",
        te: "తెలుగులో 'ఎంత' చివర వస్తుంది; ఇంగ్లీష్ ప్రశ్నలో ముందు What, తర్వాత is.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "My sugar is ___ control now.",
      te: "ఇప్పుడు నా షుగర్ కంట్రోల్‌లో ఉంది.",
      options: ["under", "in", "on"],
      answer: 0,
      why: {
        en: "Telugu says కంట్రోల్‌లో, but English says under control, not in control.",
        te: "తెలుగులో 'కంట్రోల్‌లో' అంటాం; ఇంగ్లీష్‌లో under control, in control కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The doctor asks: When was your last check-up? What does it mean?",
        te: "డాక్టర్ When was your last check-up? అని అడిగారు. అర్థం ఏంటి?",
      },
      options: ["When did you last have a check-up?", "When is your next check-up?", "Why did you have a check-up?"],
      answer: 0,
      why: {
        en: "Last means the one before now, so the doctor asks about the past.",
        te: "last అంటే ఇంతకు ముందు జరిగినది; డాక్టర్ గతం గురించి అడుగుతున్నారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My BP are high in the morning.",
      wrongIndex: 2,
      fix: "My BP is high in the morning.",
      why: {
        en: "BP is one thing, so use is, not are.",
        te: "BP ఒక్కటే, అందుకే is వాడాలి, are కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A new doctor asks about your health. Tell her you have sugar.",
        te: "కొత్త డాక్టర్ మీ ఆరోగ్యం గురించి అడుగుతున్నారు. మీకు షుగర్ ఉందని చెప్పండి.",
      },
      expected: ["I have diabetes.", "I am diabetic.", "I have diabetes, doctor."],
      options: ["I have diabetes.", "I am sugar patient.", "I am having diabetes."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the doctor your BP goes up in the mornings.",
        te: "పొద్దున పూట BP ఎక్కువగా ఉంటుందని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["My BP is high in the morning.", "My BP is high in the mornings."],
      options: ["My BP is high in the morning.", "My BP is high on the morning.", "My BP high in the morning."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A routine check-up", te: "మామూలు చెకప్" },
    scene: {
      en: "It is time for your check-up. Dr Imran asks about your health.",
      te: "మీ చెకప్ సమయం వచ్చింది. డాక్టర్ ఇమ్రాన్ మీ ఆరోగ్యం గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Dr Imran (a doctor)", te: "డాక్టర్ ఇమ్రాన్" },
    voice: "b",
    skills: [{ id: "health", label: { en: "Talking about BP and sugar", te: "BP, షుగర్ గురించి చెప్పడం" } }],
    turns: [
      {
        partner: "Good morning. Please sit. Any health problems?",
        te: "నమస్కారం. కూర్చోండి. ఏమైనా ఆరోగ్య సమస్యలు ఉన్నాయా?",
        hint: { en: "Tell him about your sugar, with the word doctors use.", te: "మీ షుగర్ గురించి, డాక్టర్లు వాడే పదంతో చెప్పండి." },
        replies: [
          { say: "Yes, doctor. I have diabetes.", good: true, skill: "health" },
          { say: "Yes, doctor. I am sugar patient.", good: false, skill: "health", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. When was your last check-up?",
        te: "సరే. చివరిసారి చెకప్ ఎప్పుడు చేయించుకున్నారు?",
        hint: { en: "Tell him how many months ago (past).", te: "ఎన్ని నెలల క్రితమో చెప్పండి (past)." },
        replies: [
          { say: "About three months ago.", good: true, skill: "health" },
          { say: "It is three months ago.", good: false, skill: "health" },
        ],
      },
      {
        partner: "Let me check your BP. Hmm, it's a bit high.",
        te: "మీ BP చూస్తాను. హ్మ్, కొంచెం ఎక్కువగా ఉంది.",
        hint: { en: "Say when it is usually high.", te: "మామూలుగా ఎప్పుడు ఎక్కువగా ఉంటుందో చెప్పండి." },
        replies: [
          { say: "Yes, it's usually high in the morning.", good: true, skill: "health" },
          { say: "Yes, usually it high in the morning.", good: false, skill: "health", fixIt: "be" },
          {
            say: "Your machine is wrong. My BP is fine.",
            good: false,
            skill: "health",
            react: { en: "The machine is fine. Let's check again in ten minutes.", te: "మెషిన్ బాగానే ఉంది. పది నిమిషాల తర్వాత మళ్ళీ చూద్దాం." },
          },
        ],
      },
      {
        partner: "Okay. Please check your sugar every month.",
        te: "సరే. ప్రతి నెలా షుగర్ చెక్ చేయించుకోండి.",
        hint: { en: "Say yes, you will, and thank him.", te: "తప్పకుండా చేస్తానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, doctor. I will. Thank you.", good: true },
          { say: "Sure, doctor. I will doing it.", good: false },
        ],
      },
    ],
  },
};

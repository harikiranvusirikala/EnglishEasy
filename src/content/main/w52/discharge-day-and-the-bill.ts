import type { Lesson } from "../../types";

/** Week 52, Day 5 (CURRICULUM §5): discharge day and the final bill — Is the discharge summary ready? Is this covered by …? */
export const day: Lesson = {
  id: "discharge-day-and-the-bill",
  kind: "lesson",
  title: { en: "Discharge and the Bill", te: "డిశ్చార్జ్, బిల్లు" },
  subtitle: "When can I go home? · Is this covered by …?",
  summary: {
    en: "Learn to handle discharge day calmly: Is the discharge summary ready? Is this covered by the health scheme?",
    te: "డిశ్చార్జ్ రోజుని ప్రశాంతంగా చక్కబెట్టుకోవడం నేర్చుకుందాం: Is the discharge summary ready? Is this covered by the health scheme?",
  },
  seo: {
    title: "Hospital Discharge and Bills in English for Telugu Speakers",
    description:
      "Say When can I go home? and Is this covered by the health scheme? Simple lessons for Telugu speakers on discharge day.",
  },
  pattern: [
    { text: "Is", role: "action" },
    { text: "this", role: "who" },
    { text: "covered", role: "action" },
    { text: "by the health scheme?", role: "what" },
  ],
  core: [
    { en: "When can I go home, doctor?", te: "డాక్టర్ గారూ, నేను ఇంటికి ఎప్పుడు వెళ్ళొచ్చు?", extra: ["to"] },
    { en: "Is the discharge summary ready?", te: "discharge summary రెడీ అయ్యిందా?", extra: ["Does"] },
    { en: "Is this covered by the health scheme?", te: "ఇది health scheme లో కవర్ అవుతుందా?", extra: ["cover"] },
    { en: "Could I see the final bill, please?", te: "ఫైనల్ బిల్లు ఒకసారి చూపిస్తారా, ప్లీజ్?", extra: ["show"] },
    { en: "Your follow-up date is next Monday.", te: "మీ follow-up తేదీ వచ్చే సోమవారం.", extra: ["on"] },
    { en: "Do I have to pay the full amount today?", te: "మొత్తం డబ్బు ఈ రోజే కట్టాలా?", extra: ["Am"] },
    { en: "Could you explain this charge? I don't understand it.", te: "ఈ charge ఏంటో కొంచెం వివరిస్తారా? నాకు అర్థం కాలేదు.", extra: ["understanding"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find any bill at home. Point to one line and say aloud: Could you explain this charge, please?",
    te: "ఇంట్లో ఏదైనా ఒక బిల్లు తీయండి. అందులో ఒక లైన్ చూపిస్తూ గట్టిగా అనండి: Could you explain this charge, please?",
  },
  words: [
    { en: "discharge", te: "ఆసుపత్రి నుంచి పంపించడం, డిశ్చార్జ్" },
    { en: "discharge summary", te: "డిశ్చార్జ్ అప్పుడు డాక్టర్ ఇచ్చే వివరాల కాగితం" },
    { en: "final bill", te: "చివరి మొత్తం బిల్లు, ఫైనల్ బిల్లు" },
    { en: "health scheme", te: "ప్రభుత్వం లేదా కంపెనీ ఇచ్చే ఆరోగ్య పథకం, health scheme" },
    { en: "covered", te: "scheme లేదా insurance కడుతుంది, కవర్ అవుతుంది" },
  ],
  grammar: ["yes-no-questions", "can-could", "should-must-have-to"],
  topics: ["health", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The last questions before home", te: "ఇంటికి వెళ్ళే ముందు అడగాల్సినవి" },
      body: {
        en: "On discharge day, ask short yes or no questions. Is this covered by …? asks if a scheme or a card pays.",
        te: "డిశ్చార్జ్ రోజు చిన్న ప్రశ్నలు అడగండి. ఏదైనా scheme గానీ card గానీ డబ్బు కడుతుందా అని అడగడానికి Is this covered by …? అనండి.",
      },
      bridge: {
        te: ["ఇది", "health scheme లో", "కవర్ అవుతుందా?"],
        en: [
          { text: "Is", role: "action" },
          { text: "this", role: "who" },
          { text: "covered", role: "action" },
          { text: "by the health scheme?", role: "what" },
        ],
      },
      examples: [
        { en: "When can I go home, doctor?", te: "డాక్టర్ గారూ, నేను ఇంటికి ఎప్పుడు వెళ్ళొచ్చు?" },
        { en: "Is the discharge summary ready?", te: "discharge summary రెడీ అయ్యిందా?" },
        { en: "Is this covered by the health scheme?", te: "ఇది health scheme లో కవర్ అవుతుందా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Papers on discharge day", te: "డిశ్చార్జ్ రోజు కాగితాలు" },
      items: [
        {
          form: "discharge summary",
          useFor: { en: "The doctor's note about your stay and your medicines.", te: "మీ stay, మందుల గురించి డాక్టర్ రాసే నోట్." },
          example: { en: "Please keep the discharge summary safe.", te: "discharge summary ని జాగ్రత్తగా దాచుకోండి." },
        },
        {
          form: "final bill",
          useFor: { en: "All the charges, from the first day to the last.", te: "మొదటి రోజు నుంచి చివరి రోజు దాకా అన్ని charges." },
          example: { en: "Could I see the final bill, please?", te: "ఫైనల్ బిల్లు ఒకసారి చూపిస్తారా, ప్లీజ్?" },
        },
        {
          form: "follow-up date",
          useFor: { en: "The day to come back and see the doctor.", te: "మళ్ళీ వచ్చి డాక్టర్ గారికి చూపించుకోవాల్సిన రోజు." },
          example: { en: "Your follow-up date is next Monday.", te: "మీ follow-up తేదీ వచ్చే సోమవారం." },
        },
        {
          form: "Is this covered by …?",
          useFor: { en: "Ask if a scheme or a card pays. Never guess; always ask.", te: "ఏదైనా scheme లేదా card కడుతుందా అని అడగడానికి. ఊహించకండి; అడిగి తెలుసుకోండి." },
          example: { en: "Is this covered by any health scheme?", te: "ఇది ఏదైనా health scheme లో కవర్ అవుతుందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "When can I go to home?",
      right: "When can I go home?",
      why: {
        en: "After go, home takes no to; Telugu ఇంటికి makes us add one.",
        te: "go తర్వాత home కి to రాదు; తెలుగు 'ఇంటికి' వల్ల to చేర్చేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Is discharge summary ready?",
      right: "Is the discharge summary ready?",
      why: {
        en: "A paper you both know about takes the; Telugu has no such word.",
        te: "ఇద్దరికీ తెలిసిన కాగితం ముందు the కావాలి; తెలుగులో అలాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You want to know if a health scheme pays for your stay. Ask at the billing counter.",
        te: "మీ stay కి ఏదైనా health scheme డబ్బు కడుతుందా అని తెలుసుకోవాలి. billing counter దగ్గర అడగండి.",
      },
      options: ["Is this covered by the health scheme?", "Is this cover by the health scheme?", "Does this covered by the health scheme?"],
      answer: 0,
      why: {
        en: "With covered, the question starts with is, never does, and covered keeps its -ed.",
        te: "covered తో ప్రశ్న is తో మొదలవుతుంది, does తో కాదు; covered చివర -ed ఉండాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "Could I see ___ final bill, please?",
      te: "ఫైనల్ బిల్లు ఒకసారి చూపిస్తారా, ప్లీజ్?",
      options: ["the", "a", "an"],
      answer: 0,
      why: {
        en: "There is only one final bill for your stay, so it takes the.",
        te: "మీ stay కి ఫైనల్ బిల్లు ఒక్కటే ఉంటుంది, అందుకే the.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "One charge on the bill is not clear to you. Ask the clerk politely.", te: "బిల్లులో ఒక charge మీకు అర్థం కాలేదు. క్లర్క్‌ని మర్యాదగా అడగండి." },
      options: ["Could you explain this charge, please?", "Could you explain me this charge, please?", "What is this charge? You are cheating me!"],
      answer: 0,
      why: {
        en: "Explain never takes me straight after it; say explain it to me instead.",
        te: "explain తర్వాత నేరుగా me రాదు; explain it to me అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "question",
      sentence: "When I can collect the discharge summary?",
      wrongIndex: 2,
      fix: "When can I collect the discharge summary?",
      why: {
        en: "In a question, can comes before I; Telugu keeps the same order.",
        te: "ప్రశ్నలో can, I కంటే ముందు వస్తుంది; తెలుగులో వరుస మారదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: { en: "The doctor says you are much better. Ask when you can go home.", te: "మీరు చాలా కోలుకున్నారని డాక్టర్ గారు చెప్పారు. ఇంటికి ఎప్పుడు వెళ్ళొచ్చో అడగండి." },
      expected: ["When can I go home, doctor?", "When can I go home?", "Can I go home today?"],
      options: ["When can I go home, doctor?", "When can I go to home, doctor?", "When I can go home, doctor?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: { en: "The clerk gives you the final bill. Ask if you must pay all of it today.", te: "క్లర్క్ ఫైనల్ బిల్లు ఇచ్చారు. మొత్తం ఈ రోజే కట్టాలా అని అడగండి." },
      expected: ["Do I have to pay the full amount today?", "Do I have to pay everything today?", "Do I have to pay it all today?"],
      options: ["Do I have to pay the full amount today?", "Am I have to pay the full amount today?", "Do I have to paying the full amount today?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the billing counter", te: "billing counter దగ్గర" },
    scene: {
      en: "It is your discharge day. You go to the billing counter to pay and collect your papers. Srinivas is at the counter.",
      te: "ఈ రోజు మీ డిశ్చార్జ్. డబ్బు కట్టి, కాగితాలు తీసుకోవడానికి billing counter కి వెళ్ళారు. counter దగ్గర శ్రీనివాస్ గారు ఉన్నారు.",
    },
    partner: { en: "Srinivas (billing clerk)", te: "శ్రీనివాస్ (బిల్లింగ్ క్లర్క్)" },
    voice: "b",
    skills: [
      { id: "bill", label: { en: "Asking about the bill", te: "బిల్లు గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Your name and bed number, please?",
        te: "నమస్కారం. మీ పేరు, బెడ్ నంబర్ చెప్తారా?",
        hint: { en: "Greet him. Give your name and say bed number twelve.", te: "పలకరించండి. మీ పేరు చెప్పి, బెడ్ నంబర్ పన్నెండు అని చెప్పండి." },
        replies: [
          { say: "Good morning. I'm Sai, bed number twelve.", good: true, skill: "bill" },
          { say: "Good morning. Myself Sai, bed number twelve.", good: false, skill: "bill", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Here is your final bill. It comes to forty-two thousand rupees.",
        te: "ఇదిగోండి మీ ఫైనల్ బిల్లు. నలభై రెండు వేల రూపాయలు అయ్యింది.",
        hint: { en: "Ask if any health scheme pays for it.", te: "దీనికి ఏదైనా health scheme డబ్బు కడుతుందా అని అడగండి." },
        replies: [
          { say: "Is this covered by any health scheme?", good: true, skill: "bill" },
          { say: "Is this covered by the health scheme?", good: true, skill: "bill" },
          { say: "Is this covered by health scheme?", good: false, skill: "bill", fixIt: "article" },
        ],
      },
      {
        partner: "Do you have a health card or insurance?",
        te: "మీ దగ్గర health card గానీ insurance గానీ ఉందా?",
        hint: { en: "Give your own answer: show the card if you have one, or say you don't.", te: "మీ నిజమైన జవాబు చెప్పండి: card ఉంటే చూపించండి, లేకపోతే లేదని చెప్పండి." },
        replies: [
          { say: "Yes, here is my health card.", good: true, skill: "bill" },
          { say: "No, I don't. I'll pay by UPI.", good: true, skill: "bill" },
          {
            say: "Why so many questions? Just take the money.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I'm only trying to save you money.", te: "సారీ అండీ, మీకు డబ్బులు మిగలాలనే అడుగుతున్నాను." },
          },
        ],
      },
      {
        partner: "Thank you. Your discharge summary will be ready in one hour.",
        te: "థాంక్యూ. మీ discharge summary ఒక గంటలో రెడీ అవుతుంది.",
        hint: { en: "Thank him for his help.", te: "సాయం చేసినందుకు ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay. Thank you for your help.", good: true, skill: "polite" },
          { say: "Okay, I'll wait. Thank you very much.", good: true, skill: "polite" },
          { say: "Okay. Thank you for help.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

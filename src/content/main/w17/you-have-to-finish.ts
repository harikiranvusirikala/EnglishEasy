import type { Lesson } from "../../types";

/** Week 17, Day 2 (CURRICULUM §4): have to / don't have to — the pharmacist explains a course of medicine. */
export const day: Lesson = {
  id: "you-have-to-finish",
  kind: "lesson",
  title: { en: "You Have to Finish It", te: "పూర్తిగా వేసుకోవాలి" },
  subtitle: "have to / don't have to",
  summary: {
    en: "Learn what have to and don't have to mean: You have to finish all the tablets.",
    te: "have to (తప్పకుండా చేయాలి), don't have to (అక్కర్లేదు) అర్థం నేర్చుకుందాం: You have to finish all the tablets.",
  },
  seo: {
    title: "Have To and Don't Have To in English for Telugu Speakers",
    description:
      "Understand You have to finish all the tablets and You don't have to take it at night. Simple lessons for Telugu speakers on a course of medicine.",
  },
  pattern: [
    { text: "You", role: "who" },
    { text: "have to finish", role: "action" },
    { text: "all the tablets", role: "what" },
  ],
  core: [
    { en: "You have to finish all the tablets.", te: "మీరు మాత్రలన్నీ పూర్తిగా వేసుకోవాలి.", extra: ["finishing"] },
    { en: "You don't have to take it at night.", te: "రాత్రి వేసుకోనక్కర్లేదు.", extra: ["haven't"] },
    { en: "Do I have to take it every day?", te: "రోజూ వేసుకోవాలా?", extra: ["must"] },
    { en: "You have to take it for five days.", te: "ఐదు రోజులు వేసుకోవాలి.", extra: ["since"] },
    { en: "She has to take two tablets a day.", te: "ఆవిడ రోజుకు రెండు మాత్రలు వేసుకోవాలి.", extra: ["have"] },
    { en: "Does he have to take it after food?", te: "ఆయన భోజనం తర్వాతే వేసుకోవాలా?", extra: ["has"] },
    { en: "No, he doesn't have to. Any time is fine.", te: "అక్కర్లేదు. ఎప్పుడైనా పరవాలేదు.", extra: ["don't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say two things you have to do today, and one you don't have to do.",
    te: "ఈ రోజు మీరు తప్పకుండా చేయాల్సిన రెండు పనులు, చేయనక్కర్లేని ఒక పని ఇంగ్లీష్‌లో చెప్పండి.",
  },
  words: [
    { en: "have to", te: "తప్పకుండా చేయాలి" },
    { en: "don't have to", te: "చేయనక్కర్లేదు" },
    { en: "course", te: "కోర్సు (ఇన్ని రోజులు వేసుకునే మందులు)" },
    { en: "dose", te: "ఒకసారి వేసుకునే మందు, మోతాదు" },
    { en: "pharmacist", te: "మందుల షాపులో మందులు ఇచ్చేవారు" },
  ],
  grammar: ["should-must-have-to", "present-simple"],
  topics: ["pharmacy", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Have to and don't have to", te: "have to, don't have to అంటే" },
      body: {
        en: "Have to means it is needed: You have to finish all the tablets. Don't have to means it is not needed. It is your choice.",
        te: "have to అంటే తప్పకుండా చేయాలి. don't have to అంటే చేయనక్కర్లేదు; అది మీ ఇష్టం.",
      },
      bridge: {
        te: ["మీరు", "మాత్రలన్నీ", "పూర్తిగా వేసుకోవాలి"],
        en: [
          { text: "You", role: "who" },
          { text: "have to finish", role: "action" },
          { text: "all the tablets", role: "what" },
        ],
      },
      examples: [
        { en: "You have to finish all the tablets.", te: "మీరు మాత్రలన్నీ పూర్తిగా వేసుకోవాలి." },
        { en: "You don't have to take it at night.", te: "రాత్రి వేసుకోనక్కర్లేదు." },
        { en: "You have to take it for five days.", te: "ఐదు రోజులు వేసుకోవాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Needed or not needed", te: "తప్పనిసరా, అక్కర్లేదా" },
      items: [
        {
          form: "I / you / we / they have to",
          useFor: { en: "It is needed.", te: "తప్పకుండా చేయాలి." },
          example: { en: "You have to finish all the tablets.", te: "మీరు మాత్రలన్నీ పూర్తిగా వేసుకోవాలి." },
        },
        {
          form: "he / she has to",
          useFor: { en: "For one other person, say has to.", te: "ఆయన, ఆవిడ అయితే has to." },
          example: { en: "She has to take two tablets a day.", te: "ఆవిడ రోజుకు రెండు మాత్రలు వేసుకోవాలి." },
        },
        {
          form: "don't have to",
          useFor: { en: "Not needed; it is your choice.", te: "అక్కర్లేదు; మీ ఇష్టం." },
          example: { en: "You don't have to take it at night.", te: "రాత్రి వేసుకోనక్కర్లేదు." },
        },
        {
          form: "Do I have to …?",
          useFor: { en: "Asking if something is needed.", te: "అవసరమా అని అడగడానికి." },
          example: { en: "Do I have to take it every day?", te: "రోజూ వేసుకోవాలా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "She have to take two tablets a day.",
      right: "She has to take two tablets a day.",
      why: {
        en: "With he or she, have becomes has, just as go becomes goes.",
        te: "he, she తో have కాదు, has వాడాలి; go బదులు goes లాగానే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "You no need to take it at night.",
      right: "You don't have to take it at night.",
      why: {
        en: "You no need is heard only in India; English uses don't have to here.",
        te: "You no need అనేది మన దగ్గరే వినిపిస్తుంది; ఇంగ్లీష్‌లో ఇక్కడ don't have to అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The pharmacist says: You have to finish all the tablets. What does it mean?",
        te: "pharmacist You have to finish all the tablets అన్నారు. అంటే ఏంటి?",
      },
      options: ["Take all of them, till none are left.", "Stop them when you feel better.", "Take them only when you want."],
      answer: 0,
      why: {
        en: "Have to means it is needed, so you cannot stop early.",
        te: "have to అంటే తప్పనిసరి; మధ్యలో ఆపకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Do I ___ to take it every day?",
      te: "రోజూ వేసుకోవాలా?",
      options: ["have", "has", "must"],
      answer: 0,
      why: {
        en: "After Do I, use have to; must never comes after do.",
        te: "Do I తర్వాత have to వస్తుంది; do తర్వాత must రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The doctor says: You don't have to take it at night. What does it mean?",
        te: "డాక్టర్ You don't have to take it at night అన్నారు. అంటే ఏంటి?",
      },
      options: ["A night dose is not needed.", "A night dose is dangerous.", "Take it only at night."],
      answer: 0,
      why: {
        en: "Don't have to means not needed, not that it is wrong.",
        te: "don't have to అంటే అవసరం లేదు అని; తప్పు అని కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "You have to take it since five days.",
      wrongIndex: 5,
      fix: "You have to take it for five days.",
      why: {
        en: "For how long something lasts, use for, not since.",
        te: "ఎన్ని రోజులో చెప్పడానికి for వాడాలి, since కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the pharmacist if you need to take it every day.",
        te: "రోజూ వేసుకోవాలా అని pharmacist ని అడగండి.",
      },
      expected: ["Do I have to take it every day?", "Do I have to take it daily?"],
      options: ["Do I have to take it every day?", "I have to take it every day?", "Do I must take it every day?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend Kamala wants to stop her tablets early. Tell her it is needed to finish them.",
        te: "మీ స్నేహితురాలు కమల మాత్రలు మధ్యలో ఆపేయాలనుకుంటున్నారు. అన్నీ పూర్తి చేయాలని చెప్పండి.",
      },
      expected: ["You have to finish all the tablets.", "You have to finish the tablets."],
      options: ["You have to finish all the tablets.", "You have finish all the tablets.", "You don't have to finish the tablets."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A five-day course", te: "ఐదు రోజుల కోర్సు" },
    scene: {
      en: "You are at a medical shop with a new prescription. Imran, the pharmacist, explains the course.",
      te: "మీరు కొత్త prescription తో మెడికల్ షాపులో ఉన్నారు. pharmacist ఇమ్రాన్ కోర్సు గురించి చెప్తున్నారు.",
    },
    partner: { en: "Imran (pharmacist)", te: "ఇమ్రాన్ (pharmacist)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Do I have to …?", te: "Do I have to … అని అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "These tablets are a five-day course.",
        te: "ఇవి ఐదు రోజుల కోర్సు మాత్రలు.",
        hint: { en: "Ask if they are needed every day.", te: "రోజూ వేసుకోవాలా అని అడగండి." },
        replies: [
          { say: "Do I have to take them every day?", good: true, skill: "ask" },
          { say: "I must take them every day?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes. One tablet twice a day, after food.",
        te: "అవును. రోజుకు రెండుసార్లు, భోజనం తర్వాత ఒక్కో మాత్ర.",
        hint: { en: "Ask if you can stop when you feel better.", te: "నయమైపోతే ఆపేయొచ్చా అని అడగండి." },
        replies: [
          { say: "Can I stop when I feel better?", good: true, skill: "ask" },
          {
            say: "I'll stop when I'm okay. Too many tablets!",
            good: false,
            skill: "polite",
            react: { en: "Please don't. You have to finish the course.", te: "అలా చేయకండి. కోర్సు పూర్తి చేయాలి." },
          },
        ],
      },
      {
        partner: "No, you have to finish all ten.",
        te: "లేదు, పదీ పూర్తిగా వేసుకోవాలి.",
        hint: { en: "Say okay, and promise not to miss a dose.", te: "సరే అని, ఒక్క dose కూడా మానను అని మాటివ్వండి." },
        replies: [
          { say: "Okay. I won't skip a dose.", good: true, skill: "polite" },
          { say: "Okay. I will not skip dose.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "Good. Get well soon!",
        te: "మంచిది. త్వరగా కోలుకోండి!",
        hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "Thank you very much. Bye.", good: true, skill: "polite" },
          {
            say: "Thank you. Same to you.",
            good: false,
            skill: "polite",
            react: { en: "Ha ha, I am not sick! Take care.", te: "హహ్హా, నాకు ఒంట్లో బాగానే ఉంది! జాగ్రత్త." },
          },
        ],
      },
    ],
  },
};

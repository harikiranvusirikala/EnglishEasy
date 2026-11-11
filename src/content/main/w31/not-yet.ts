import type { Lesson } from "../../types";

/** Week 31, Day 3 (CURRICULUM §4): yet in questions and negatives; the short answer Not yet. */
export const day: Lesson = {
  id: "not-yet",
  kind: "lesson",
  title: { en: "Not Yet", te: "ఇంకా లేదు" },
  subtitle: "Have you … yet? Not yet.",
  summary: {
    en: "Learn to ask if something has happened and to say it has not: Have you had breakfast yet? Not yet.",
    te: "ఒక పని అయిందా అని అడగడం, ఇంకా కాలేదని చెప్పడం నేర్చుకుందాం: Have you had breakfast yet? Not yet.",
  },
  seo: {
    title: "Using Yet and Not Yet in English for Telugu Speakers",
    description:
      "Ask Have you had breakfast yet? and answer Not yet. Simple lessons for Telugu speakers on saying what is not done yet.",
  },
  pattern: [
    { text: "Have", role: "action" },
    { text: "you", role: "who" },
    { text: "had breakfast", role: "what" },
    { text: "yet?", role: "when" },
  ],
  core: [
    { en: "Have you had breakfast yet?", te: "మీరు టిఫిన్ చేశారా?", extra: ["taken"] },
    { en: "I haven't had breakfast yet.", te: "నేను ఇంకా టిఫిన్ చేయలేదు.", extra: ["didn't"] },
    { en: "Has the bus come yet?", te: "బస్ వచ్చేసిందా?", extra: ["came"] },
    { en: "Not yet. Five more minutes.", te: "ఇంకా లేదు. ఇంకో ఐదు నిమిషాలు.", extra: ["minute"] },
    { en: "The courier hasn't come yet.", te: "కొరియర్ ఇంకా రాలేదు.", extra: ["isn't"] },
    { en: "Are you ready yet? The auto is here.", te: "రెడీ అయ్యారా? ఆటో వచ్చేసింది.", extra: ["Is"] },
    { en: "I haven't packed my bag yet.", te: "నేను ఇంకా బ్యాగ్ సర్దుకోలేదు.", extra: ["already"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask someone today: Have you had lunch yet?",
    te: "ఈ రోజు ఎవరినైనా అడగండి: Have you had lunch yet?",
  },
  words: [
    { en: "yet", te: "ఇంకా, ఇప్పటికి" },
    { en: "not yet", te: "ఇంకా లేదు" },
    { en: "courier", te: "కొరియర్" },
    { en: "packed", te: "సర్దుకున్నారు" },
    { en: "getting ready", te: "రెడీ అవుతున్నారు" },
  ],
  grammar: ["present-perfect", "yes-no-questions"],
  topics: ["home", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Yet: at the end", te: "yet: చివర్లో" },
      body: {
        en: "Use yet at the end of a question or a not sentence, for something you expect to happen. The short answer is Not yet.",
        te: "జరుగుతుందని ఎదురుచూసే పనికి, ప్రశ్న చివర లేదా not ఉన్న వాక్యం చివర yet పెట్టండి. చిన్న జవాబు: Not yet (ఇంకా లేదు).",
      },
      bridge: {
        te: ["మీరు", "టిఫిన్", "చేశారా?"],
        en: [
          { text: "Have", role: "action" },
          { text: "you", role: "who" },
          { text: "had breakfast", role: "what" },
          { text: "yet?", role: "when" },
        ],
      },
      examples: [
        { en: "Have you had breakfast yet?", te: "మీరు టిఫిన్ చేశారా?" },
        { en: "The courier hasn't come yet.", te: "కొరియర్ ఇంకా రాలేదు." },
        { en: "I haven't packed my bag yet.", te: "నేను ఇంకా బ్యాగ్ సర్దుకోలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Just, already or yet?", te: "just ఆ, already ఆ, yet ఆ?" },
      items: [
        {
          form: "just",
          useFor: { en: "It happened a moment ago.", te: "ఇప్పుడే జరిగింది." },
          example: { en: "The bus has just come.", te: "బస్ ఇప్పుడే వచ్చింది." },
        },
        {
          form: "already",
          useFor: { en: "It is done, maybe sooner than expected.", te: "అయిపోయింది, అనుకున్నదానికంటే ముందే." },
          example: { en: "I have already had breakfast.", te: "నేను ఇప్పటికే టిఫిన్ చేసేశాను." },
        },
        {
          form: "… yet? / not … yet",
          useFor: { en: "Asking, or saying it is not done.", te: "అయిందా అని అడగడానికి, ఇంకా కాలేదని చెప్పడానికి." },
          example: { en: "Has the bus come yet?", te: "బస్ వచ్చేసిందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Have you taken breakfast?",
      right: "Have you had breakfast?",
      why: {
        en: "Take breakfast is heard mostly in India; people everywhere say have breakfast.",
        te: "take breakfast అనడం మన దగ్గరే; మిగతా అందరూ have breakfast అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "He is not come yet.",
      right: "He hasn't come yet.",
      why: {
        en: "Telugu రాలేదు has no have, but English needs has not, never is not, before come.",
        te: "'రాలేదు' లో have లేదు, కానీ ఇంగ్లీష్‌లో come ముందు is not కాదు, has not కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend asks: Has the doctor come? He hasn't come. What do you say?",
        te: "డాక్టర్ వచ్చారా అని స్నేహితుడు అడుగుతున్నారు. ఆయన ఇంకా రాలేదు. ఏమంటారు?",
      },
      options: ["Not yet.", "Yet not.", "No yet."],
      answer: 0,
      why: {
        en: "The short answer is not, then yet; this order never changes.",
        te: "చిన్న జవాబులో ముందు not, తర్వాత yet; ఈ వరుస మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I haven't packed my bag ___.",
      te: "నేను ఇంకా బ్యాగ్ సర్దుకోలేదు.",
      options: ["yet", "already", "still"],
      answer: 0,
      why: {
        en: "In a not sentence, yet goes at the end; already is for jobs that are done.",
        te: "not ఉన్న వాక్యం చివర yet వస్తుంది; already అయిపోయిన పనులకి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask your neighbour if the courier has come.", te: "కొరియర్ వచ్చిందా అని పక్కింటివారిని అడగండి." },
      options: ["Has the courier come yet?", "The courier has come yet?", "Is the courier come yet?"],
      answer: 0,
      why: {
        en: "In a question, has comes first; Telugu keeps the normal order and just changes the end.",
        te: "ప్రశ్నలో has ముందుకి వస్తుంది; తెలుగులో వరుస మారదు, చివర మాత్రమే మారుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "indian-english",
      sentence: "Have you taken lunch yet?",
      wrongIndex: 2,
      fix: "Have you had lunch yet?",
      why: {
        en: "In English you have lunch; take lunch is an Indian habit.",
        te: "ఇంగ్లీష్‌లో have lunch అంటారు; take lunch అనడం మన అలవాటు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your friend asks: Are you ready? You need a little more time. Answer.",
        te: "రెడీయా అని స్నేహితుడు అడుగుతున్నారు. మీకు ఇంకొంచెం టైమ్ కావాలి. జవాబు చెప్పండి.",
      },
      expected: ["Not yet. Five more minutes.", "Not yet.", "Not yet. Five more minutes, please.", "Not yet. I am getting ready."],
      options: ["Not yet. Five more minutes.", "Yet not. Five more minutes.", "Not yet. Five more minute."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "A guest has come at lunch time. Ask if he has had lunch.",
        te: "భోజనం టైమ్‌కి ఒక అతిథి వచ్చారు. ఆయన భోజనం చేశారా అని అడగండి.",
      },
      expected: ["Have you had lunch yet?", "Have you had lunch?"],
      options: ["Have you had lunch yet?", "You had lunch yet?", "Have you lunch yet?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Are you ready yet?", te: "రెడీ అయ్యారా?" },
    scene: {
      en: "Your friend Ramesh is taking you to a wedding in his car. He is at your gate.",
      te: "మీ స్నేహితుడు రమేష్ మిమ్మల్ని కారులో పెళ్ళికి తీసుకెళ్తున్నారు. ఆయన మీ గేటు దగ్గర ఉన్నారు.",
    },
    partner: { en: "Ramesh (your friend)", te: "రమేష్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "yet", label: { en: "Saying not yet", te: "not yet వాడటం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I'm at the gate. Are you ready yet?",
        te: "గుడ్ మార్నింగ్! గేటు దగ్గర ఉన్నాను. రెడీ అయ్యారా?",
        hint: { en: "Say you are not ready, and ask for a few minutes.", te: "ఇంకా రెడీ కాలేదని చెప్పి, కొన్ని నిమిషాలు అడగండి." },
        replies: [
          { say: "Not yet. Five more minutes, please.", good: true, skill: "yet" },
          { say: "Yet not. Five more minute, please.", good: false, skill: "yet" },
        ],
      },
      {
        partner: "No problem. Have you had breakfast?",
        te: "పర్లేదు. టిఫిన్ చేశారా?",
        hint: { en: "Say no, you haven't eaten.", te: "లేదు, ఇంకా తినలేదని చెప్పండి." },
        replies: [
          { say: "No, I haven't had breakfast yet.", good: true, skill: "yet" },
          { say: "No, I didn't take breakfast yet.", good: false, skill: "yet", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Then we'll eat on the way. Is the gift packed?",
        te: "అయితే దారిలో తిందాం. గిఫ్ట్ ప్యాక్ అయిందా?",
        hint: { en: "Say yes, that is done.", te: "అవును, అది అయిపోయిందని చెప్పండి." },
        replies: [
          { say: "Yes, I have already packed it.", good: true, skill: "yet" },
          {
            say: "Why are you hurrying me? Just wait!",
            good: false,
            skill: "polite",
            react: { en: "Sorry, sorry! Take your time.", te: "సారీ, సారీ! నిదానంగా రండి." },
          },
        ],
      },
      {
        partner: "Great. I'll wait in the car.",
        te: "బాగుంది. నేను కారులో వెయిట్ చేస్తాను.",
        hint: { en: "Thank him, and say you are coming soon.", te: "థాంక్స్ చెప్పి, త్వరగా వస్తున్నానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'm coming in a minute.", good: true, skill: "polite" },
          { say: "Thank you. I am come in a minute.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/**
 * Week 1, Day 3 (CURRICULUM §3, lightened 2026-11-09): present simple with I / we / you / they, and Do you …? Yes, I do.
 * he / she + s and don't / doesn't are recognition only here (a Learn card); they are built in Week 7.
 */
export const day: Lesson = {
  id: "present-simple-every-day",
  kind: "lesson",
  title: { en: "Every Day", te: "రోజూ" },
  subtitle: "Present simple",
  summary: {
    en: "Talk about things you do every day, and ask a friend about their day with Do you.",
    te: "మీరు రోజూ చేసే పనుల గురించి చెప్పడం, Do you తో ఇతరుల అలవాట్ల గురించి అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Present Simple in English for Telugu Speakers: Every Day",
    description:
      "Learn the present simple for daily habits: I walk, we go, and questions with Do you. Simple examples with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "walk", role: "action" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "I walk every morning.", te: "నేను ప్రతి ఉదయం నడుస్తాను.", extra: ["walks"] },
    { en: "We go to the temple on Fridays.", te: "మేము ప్రతి శుక్రవారం గుడికి వెళ్తాం.", extra: ["goes"] },
    { en: "They watch the news.", te: "వాళ్లు వార్తలు చూస్తారు.", extra: ["watches"] },
    { en: "We eat early.", te: "మేము తొందరగా తింటాం.", extra: ["are"] },
    { en: "Do you watch the news?", te: "మీరు వార్తలు చూస్తారా?", extra: ["Are"] },
    { en: "Do you drink coffee?", te: "మీరు కాఫీ తాగుతారా?", extra: ["Are"] },
    { en: "Yes, I do.", te: "అవును, తాగుతాను.", extra: ["am"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Tell someone your morning routine. For example: I wake up early. I drink tea. I walk every morning.",
    te: "మీ ఉదయపు దినచర్యను ఎవరికైనా చెప్పండి. ఉదాహరణ: I wake up early. I drink tea. I walk every morning.",
  },
  words: [
    { en: "walk", te: "నడవడం" },
    { en: "morning", te: "ఉదయం" },
    { en: "temple", te: "గుడి" },
    { en: "coffee", te: "కాఫీ" },
    { en: "office", te: "ఆఫీసు" },
  ],
  grammar: ["present-simple", "yes-no-questions"],
  topics: ["time", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Things you do every day", te: "రోజూ చేసే పనులు" },
      body: {
        en: "Use the present simple for habits, things you do again and again. With I, we, you and they, the action word stays the same: I walk, we go.",
        te: "రోజూ చేసే అలవాట్లకు present simple వాడతాం. I, we, you, they తో verb మారదు: I walk, we go.",
      },
      bridge: {
        te: ["నేను", "ప్రతి ఉదయం", "నడుస్తాను"],
        en: [
          { text: "I", role: "who" },
          { text: "walk", role: "action" },
          { text: "every morning", role: "when" },
        ],
      },
      examples: [
        { en: "I walk every morning.", te: "నేను ప్రతి ఉదయం నడుస్తాను." },
        { en: "We go to the temple on Fridays.", te: "మేము ప్రతి శుక్రవారం గుడికి వెళ్తాం." },
        { en: "They watch the news.", te: "వాళ్లు వార్తలు చూస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Do you + action?",
          useFor: {
            en: "To ask about a habit, put Do first. Telugu adds ఆ at the end, English adds Do at the start.",
            te: "అలవాటు గురించి అడగాలంటే Do ముందు పెట్టాలి. తెలుగులో చివర 'ఆ' వస్తుంది, ఇంగ్లీష్‌లో మొదట Do.",
          },
          example: { en: "Do you drink coffee?", te: "మీరు కాఫీ తాగుతారా?" },
        },
        {
          form: "Yes, I do.",
          useFor: { en: "The short way to say yes to a Do you question.", te: "Do you ప్రశ్నకి అవును అని చిన్నగా చెప్పే పద్ధతి." },
          example: { en: "Do you walk? Yes, I do.", te: "మీరు నడుస్తారా? అవును, నడుస్తాను." },
        },
        {
          form: "No, I don't.",
          useFor: {
            en: "You will also hear the short no. Just understand it for now; you will practice it in Week 7.",
            te: "లేదు అనే చిన్న జవాబు కూడా వినిపిస్తుంది. ఇప్పటికి అర్థం చేసుకుంటే చాలు; 7వ వారంలో practice చేస్తాం.",
          },
          example: { en: "Do you eat late? No, I don't.", te: "మీరు ఆలస్యంగా తింటారా? లేదు, తినను." },
        },
        {
          form: "he, she → walks",
          useFor: {
            en: "With he and she, you will hear an s on the action word. Just notice it now; you will practice it in Week 7.",
            te: "he, she తో verb చివర s వినిపిస్తుంది. ఇప్పటికి గమనిస్తే చాలు; 7వ వారంలో practice చేస్తాం.",
          },
          example: { en: "He works in an office.", te: "ఆయన ఆఫీసులో పని చేస్తారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am walking every day.",
      right: "I walk every day.",
      why: {
        en: "For a habit, use the plain action word, not am with -ing. Every day means a habit: I walk every day.",
        te: "అలవాటుకి am, -ing వద్దు, మామూలు verb చాలు. every day అంటే అలవాటు: I walk every day.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "You drink coffee?",
      right: "Do you drink coffee?",
      why: {
        en: "In Telugu the voice alone makes a question, but English needs Do at the start: Do you drink coffee?",
        te: "తెలుగులో స్వరంతోనే ప్రశ్న అవుతుంది, కానీ ఇంగ్లీష్‌లో మొదట Do కావాలి: Do you drink coffee?",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am walk every morning.", "I walk every morning.", "I walking every morning."],
      answer: 1,
      why: {
        en: "For a habit, say who and then the plain action word, with no am: I walk every morning.",
        te: "అలవాటుకి ముందు ఎవరు, తర్వాత మామూలు verb; am వద్దు: I walk every morning.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ you drink coffee?",
      te: "మీరు కాఫీ తాగుతారా?",
      options: ["Do", "Are", "Is"],
      answer: 0,
      why: {
        en: "To ask about a habit, start with Do. Telugu just adds ఆ, but English needs Do: Do you drink coffee?",
        te: "అలవాటు గురించి అడగాలంటే Do తో మొదలుపెట్టాలి. తెలుగులో 'ఆ' చాలు, ఇంగ్లీష్‌లో Do కావాలి: Do you drink coffee?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: మేము ప్రతి శుక్రవారం గుడికి వెళ్తాం?", te: "మేము ప్రతి శుక్రవారం గుడికి వెళ్తాం — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["We going to the temple on Fridays.", "We go to the temple on Fridays.", "We went to the temple on Friday."],
      answer: 1,
      why: {
        en: "Every Friday is a habit, so use the plain action word with we: We go to the temple on Fridays.",
        te: "ప్రతి శుక్రవారం అంటే అలవాటు, కాబట్టి we తో మామూలు verb: We go to the temple on Fridays.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Do you watching the news?",
      wrongIndex: 2,
      fix: "Do you watch the news?",
      why: {
        en: "After Do you, use the plain action word, not -ing: Do you watch the news?",
        te: "Do you తర్వాత మామూలు verb వాడాలి, -ing వద్దు: Do you watch the news?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Do you walk in the morning? Say yes, in English.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Do you walk in the morning? అవును అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["Yes, I do.", "Yes, I walk every morning."],
      options: ["Yes, I am.", "Yes, I do.", "Yes, I walking."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask a new friend if they drink coffee. Ask in English.",
        te: "కొత్త స్నేహితులు కాఫీ తాగుతారా అని ఇంగ్లీష్‌లో అడగండి.",
      },
      expected: ["Do you drink coffee?"],
      options: ["You drink coffee?", "Are you drink coffee?", "Do you drink coffee?"],
      answer: 2,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the doctor's", te: "డాక్టర్ దగ్గర" },
    scene: {
      en: "The doctor asks about your daily routine. Answer with short sentences.",
      te: "డాక్టర్ మీ దినచర్య గురించి అడుగుతున్నారు. చిన్న వాక్యాలతో జవాబు చెప్పండి.",
    },
    partner: { en: "Doctor", te: "డాక్టర్" },
    skills: [
      { id: "habits", label: { en: "Daily habits", te: "రోజువారీ అలవాట్లు" } },
      { id: "polite", label: { en: "Polite phrases", te: "మర్యాద మాటలు" } },
    ],
    turns: [
      {
        partner: "Do you walk every day?",
        te: "మీరు రోజూ నడుస్తారా?",
        hint: { en: "Say yes, the short way.", te: "అవును అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "Yes, I do.", good: true, skill: "habits" },
          { say: "Yes, I am.", good: false, skill: "habits" },
          { say: "Yes, I walking.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Good. Do you drink coffee?",
        te: "మంచిది. మీరు కాఫీ తాగుతారా?",
        hint: { en: "Say yes in a full sentence, and add every morning.", te: "అవును అని పూర్తి వాక్యంలో చెప్పి, every morning చేర్చండి." },
        replies: [
          { say: "Yes, I drink coffee every morning.", good: true, skill: "habits" },
          { say: "Yes, I am drink coffee every morning.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Do you eat early or late?",
        te: "మీరు తొందరగా తింటారా, ఆలస్యంగానా?",
        hint: { en: "Say that you eat early. Start with I.", te: "మీరు తొందరగా తింటారని చెప్పండి. I తో మొదలుపెట్టండి." },
        replies: [
          { say: "I eat early.", good: true, skill: "habits" },
          { say: "I am eat early.", good: false, skill: "habits" },
          {
            say: "Just give me tablets, doctor.",
            good: false,
            skill: "polite",
            react: { en: "Please, first tell me about your food.", te: "మాత్రలు తర్వాత. ముందు మీ భోజనం గురించి చెప్పండి." },
          },
        ],
      },
      {
        partner: "Good. Walk every day, and eat early.",
        te: "మంచిది. రోజూ నడవండి, తొందరగా తినండి.",
        hint: { en: "Thank the doctor politely.", te: "డాక్టర్ గారికి మర్యాదగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you, doctor.", good: true, skill: "polite" },
          { say: "Okay, okay. Bye.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 1, Day 3 (CURRICULUM §3): present simple with I / we / you / they and he / she; don't / doesn't; Do / Does. */
export const day: Lesson = {
  id: "present-simple-every-day",
  kind: "lesson",
  title: { en: "Every Day", te: "రోజూ" },
  subtitle: "Present simple",
  summary: {
    en: "Talk about things you do every day. Learn the -s with he and she, and don't, doesn't, do and does.",
    te: "మీరు రోజూ చేసే పనుల గురించి చెప్పడం నేర్చుకుందాం. he, she తో -s, అలాగే don't, doesn't, do, does.",
  },
  seo: {
    title: "Present Simple in English for Telugu Speakers: Every Day",
    description:
      "Learn the present simple for daily habits: walk and walks, don't and doesn't, Do and Does questions. Simple examples with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "walk", role: "action" },
    { text: "every morning", role: "when" },
  ],
  core: [
    { en: "I walk every morning.", te: "నేను ప్రతి ఉదయం నడుస్తాను.", extra: ["walks"] },
    { en: "She goes to the temple on Fridays.", te: "ఆవిడ ప్రతి శుక్రవారం గుడికి వెళ్తారు.", extra: ["go"] },
    { en: "He doesn't drink coffee.", te: "ఆయన కాఫీ తాగరు.", extra: ["don't"] },
    { en: "We don't eat late.", te: "మేము ఆలస్యంగా తినం.", extra: ["doesn't"] },
    { en: "Do you watch the news?", te: "మీరు వార్తలు చూస్తారా?", extra: ["Does"] },
    { en: "Does she go to the temple?", te: "ఆవిడ గుడికి వెళ్తారా?", extra: ["goes"] },
    { en: "Yes, I do.", te: "అవును, చూస్తాను.", extra: ["does"] },
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
        en: "Use the present simple for habits. With I, we, you and they, the action stays the same: I walk. With he and she, add -s: she walks, he goes.",
        te: "రోజూ చేసే అలవాట్లకు present simple వాడతాం. I, we, you, they తో verb మారదు: I walk. he, she తో verb చివర -s వస్తుంది: she walks, he goes.",
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
        { en: "She goes to the temple on Fridays.", te: "ఆవిడ ప్రతి శుక్రవారం గుడికి వెళ్తారు." },
        { en: "He works in an office.", te: "ఆయన ఆఫీసులో పని చేస్తారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "don't or doesn't? Do or Does?", te: "don't లేదా doesn't? Do లేదా Does?" },
      items: [
        {
          form: "I, we, you, they → don't, Do",
          useFor: { en: "Use don't and Do with I, we, you and they.", te: "I, we, you, they తో don't, Do వాడాలి." },
          example: { en: "We don't eat late.", te: "మేము ఆలస్యంగా తినం." },
        },
        {
          form: "he, she → doesn't, Does",
          useFor: {
            en: "Use doesn't and Does with he and she. Then the action has no -s.",
            te: "he, she తో doesn't, Does వాడాలి. అప్పుడు verb కి -s రాదు.",
          },
          example: { en: "He doesn't drink coffee.", te: "ఆయన కాఫీ తాగరు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "He go to the temple.",
      right: "He goes to the temple.",
      why: {
        en: "With he or she, the action gets -s: He goes to the temple.",
        te: "he, she తో verb కి -s వస్తుంది: He goes to the temple.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "He don't drink coffee.",
      right: "He doesn't drink coffee.",
      why: {
        en: "With he and she, use doesn't, not don't: He doesn't drink coffee.",
        te: "he, she తో don't కాదు, doesn't వాడాలి: He doesn't drink coffee.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["She go to the temple.", "She goes to the temple.", "She going to the temple."],
      answer: 1,
      why: {
        en: "With she, add -s to the action: goes.",
        te: "she తో verb కి -s చేర్చాలి: goes.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He ___ drink coffee.",
      te: "ఆయన కాఫీ తాగరు.",
      options: ["don't", "doesn't", "isn't"],
      answer: 1,
      why: {
        en: "He is one person, so use doesn't: He doesn't drink coffee.",
        te: "he అంటే ఒక్కరు, కాబట్టి doesn't: He doesn't drink coffee.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: మీరు వార్తలు చూస్తారా?", te: "మీరు వార్తలు చూస్తారా? — ఇంగ్లీష్‌లో ఏది సరైనది?" },
      options: ["Are you watch the news?", "Does you watch the news?", "Do you watch the news?"],
      answer: 2,
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She walk every morning.",
      wrongIndex: 1,
      fix: "She walks every morning.",
      why: {
        en: "She is one person, so the action gets -s: She walks every morning.",
        te: "she అంటే ఒక్కరు, కాబట్టి verb కి -s: She walks every morning.",
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
      options: ["Yes, I does.", "Yes, I do.", "Yes, I am."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A neighbour asks: Do you drink coffee? Say no, in English.",
        te: "పక్కింటి వాళ్లు అడుగుతున్నారు: Do you drink coffee? లేదు అని ఇంగ్లీష్‌లో చెప్పండి.",
      },
      expected: ["No, I don't.", "No, I don't drink coffee."],
      options: ["No, I doesn't.", "No, I don't.", "No, I not."],
      answer: 1,
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
    skills: [{ id: "habits", label: { en: "Daily habits", te: "రోజువారీ అలవాట్లు" } }],
    turns: [
      {
        partner: "Do you walk every day?",
        te: "మీరు రోజూ నడుస్తారా?",
        hint: { en: "Say yes, the short way.", te: "అవును అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "Yes, I do.", good: true, skill: "habits" },
          { say: "Yes, I walks.", good: false, skill: "habits" },
          { say: "Yes, I does.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Do you drink coffee?",
        te: "మీరు కాఫీ తాగుతారా?",
        hint: { en: "Say no, the short way.", te: "లేదు అని చిన్నగా చెప్పండి." },
        replies: [
          { say: "No, I don't.", good: true, skill: "habits" },
          { say: "No, I doesn't.", good: false, skill: "habits" },
          { say: "No, I not drink.", good: false, skill: "habits" },
        ],
      },
      {
        partner: "Do you eat late?",
        te: "మీరు ఆలస్యంగా తింటారా?",
        hint: { en: "Say no, in a full sentence.", te: "లేదు అని పూర్తి వాక్యంలో చెప్పండి." },
        replies: [
          { say: "No, I don't eat late.", good: true, skill: "habits" },
          { say: "No, I doesn't eat late.", good: false, skill: "habits" },
          {
            say: "Just give me tablets, doctor.",
            good: false,
            react: { en: "Please, first tell me about your food.", te: "మాత్రలు తర్వాత. ముందు మీ భోజనం గురించి చెప్పండి." },
          },
        ],
      },
    ],
  },
};

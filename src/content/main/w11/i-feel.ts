import type { Lesson } from "../../types";

/** Week 11, Day 1 (CURRICULUM §3): feel + word; Are you okay? You look … */
export const day: Lesson = {
  id: "i-feel",
  kind: "lesson",
  title: { en: "I Feel …", te: "నాకు … గా ఉంది" },
  subtitle: "feel / look",
  summary: {
    en: "Learn to say how you feel, and to ask kindly how others feel.",
    te: "మీకు ఎలా అనిపిస్తోందో చెప్పడం, ఇతరులకు ఎలా ఉందో ప్రేమగా అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "I Feel …: Talking About Feelings in English for Telugu Speakers",
    description:
      "Say I feel tired, I feel much better and Are you okay? in English. Simple, gentle lessons for Telugu speakers on feelings.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "feel", role: "action" },
    { text: "tired", role: "what" },
  ],
  core: [
    { en: "I feel tired.", te: "నాకు అలసటగా ఉంది.", extra: ["am"] },
    { en: "Are you okay?", te: "మీరు బాగానే ఉన్నారా?", extra: ["Is"] },
    { en: "I feel much better today.", te: "ఈ రోజు నాకు చాలా బాగుంది.", extra: ["more"] },
    { en: "She feels sad.", te: "ఆవిడకి బాధగా ఉంది.", extra: ["feel"] },
    { en: "You look worried.", te: "మీరు దిగులుగా కనిపిస్తున్నారు.", extra: ["looking"] },
    { en: "I'm a little nervous.", te: "నాకు కొంచెం కంగారుగా ఉంది.", extra: ["feel"] },
    { en: "I feel lonely sometimes.", te: "నాకు అప్పుడప్పుడు ఒంటరిగా అనిపిస్తుంది.", extra: ["feels"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Ask someone today: Are you okay? How do you feel?",
    te: "ఈ రోజు ఎవరినైనా అడగండి: Are you okay? How do you feel?",
  },
  words: [
    { en: "feel", te: "అనిపించడం" },
    { en: "okay", te: "బాగానే, సరే" },
    { en: "sad", te: "బాధగా" },
    { en: "worried", te: "దిగులుగా" },
    { en: "lonely", te: "ఒంటరిగా" },
  ],
  grammar: ["present-simple", "am-is-are"],
  topics: ["feelings", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I feel, she feels", te: "I feel, she feels — నాకు అనిపిస్తోంది" },
      body: {
        en: "Telugu says నాకు అలసటగా ఉంది. In English, say I feel tired (or I am tired). With he or she, say feels. To ask kindly: Are you okay? How do you feel?",
        te: "తెలుగులో 'నాకు అలసటగా ఉంది' అంటాం. ఇంగ్లీష్‌లో I feel tired (లేదా I am tired). he, she అయితే feels. ప్రేమగా అడగడానికి: Are you okay? How do you feel?",
      },
      bridge: {
        te: ["నాకు", "అలసటగా", "ఉంది"],
        en: [
          { text: "I", role: "who" },
          { text: "feel", role: "action" },
          { text: "tired", role: "what" },
        ],
      },
      examples: [
        { en: "I feel tired.", te: "నాకు అలసటగా ఉంది." },
        { en: "I feel much better today.", te: "ఈ రోజు నాకు చాలా బాగుంది." },
        { en: "Are you okay?", te: "మీరు బాగానే ఉన్నారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Feel, feels, look", te: "feel, feels, look — ఎప్పుడు ఏది?" },
      items: [
        {
          form: "I feel + word",
          useFor: { en: "How you feel inside.", te: "మీకు లోపల ఎలా అనిపిస్తోందో." },
          example: { en: "I feel lonely sometimes.", te: "నాకు అప్పుడప్పుడు ఒంటరిగా అనిపిస్తుంది." },
        },
        {
          form: "he / she feels",
          useFor: { en: "How one other person feels.", te: "ఇంకొకరికి ఎలా అనిపిస్తోందో." },
          example: { en: "She feels sad.", te: "ఆవిడకి బాధగా ఉంది." },
        },
        {
          form: "you look + word",
          useFor: { en: "How someone seems to you.", te: "ఒకరు మీకు ఎలా కనిపిస్తున్నారో." },
          example: { en: "You look worried.", te: "మీరు దిగులుగా కనిపిస్తున్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am feel tired.",
      right: "I feel tired.",
      why: {
        en: "Feel is already the verb, so drop am: I feel tired. Or say I am tired.",
        te: "feel అనేదే verb, దానితో am అక్కర్లేదు: I feel tired. లేదా I am tired అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I feel very better.",
      right: "I feel much better.",
      why: {
        en: "Before better, say much, not very: I feel much better.",
        te: "better ముందు very రాదు, much వస్తుంది: I feel much better.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am feel tired.", "I feel tired.", "I feeling tired."],
      answer: 1,
      why: {
        en: "Feel is the verb here, so it needs no am: I feel tired.",
        te: "ఇక్కడ feel అనేదే verb, am అక్కర్లేదు: I feel tired.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "She ___ sad today.",
      te: "ఈ రోజు ఆవిడకి బాధగా ఉంది.",
      options: ["feel", "feels", "feeling"],
      answer: 1,
      why: {
        en: "One person (he, she): add s to the verb. She feels sad today.",
        te: "ఒక్కరి గురించి (he, she) అయితే verb కి s చేర్చాలి: She feels sad today.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your friend looks unwell. Ask kindly.", te: "మీ స్నేహితురాలు బాగాలేనట్టు కనిపిస్తున్నారు. ప్రేమగా అడగండి." },
      options: ["Are you okay?", "Is you okay?", "Do you okay?"],
      answer: 0,
      why: {
        en: "With you, the question starts with are: Are you okay?",
        te: "you తో ప్రశ్న are తో మొదలవుతుంది: Are you okay?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I feel very better today.",
      wrongIndex: 2,
      fix: "I feel much better today.",
      why: {
        en: "Very goes with good; with better, use much: I feel much better today.",
        te: "very అనేది good తో వస్తుంది; better తో much వాడాలి: I feel much better today.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: How do you feel today? Say much better.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: How do you feel today? చాలా బాగుందని చెప్పండి.",
      },
      expected: ["I feel much better.", "I feel much better today."],
      options: ["I feel very better.", "I feel much better.", "I am feel better."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend looks worried. Tell her so, kindly.",
        te: "మీ స్నేహితురాలు దిగులుగా కనిపిస్తున్నారు. ప్రేమగా ఆ మాట చెప్పండి.",
      },
      expected: ["You look worried.", "You look worried. Are you okay?"],
      options: ["You look worried.", "You looking worried.", "You look worry."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "You look tired", te: "మీరు అలసిపోయినట్టున్నారు" },
    scene: {
      en: "Your friend Salma says you look tired. Tell her how you feel.",
      te: "మీరు అలసిపోయినట్టు కనిపిస్తున్నారని మీ స్నేహితురాలు సల్మా అంటున్నారు. మీకు ఎలా ఉందో చెప్పండి.",
    },
    partner: { en: "Salma (a friend)", te: "సల్మా (స్నేహితురాలు)" },
    skills: [{ id: "feel", label: { en: "Feelings", te: "భావాలు" } }],
    turns: [
      {
        partner: "You look tired today.",
        te: "ఈ రోజు మీరు అలసిపోయినట్టు కనిపిస్తున్నారు.",
        hint: { en: "Agree, and say how you feel.", te: "అవునని ఒప్పుకుని, మీకు ఎలా ఉందో చెప్పండి." },
        replies: [
          { say: "Yes, I feel very tired.", good: true, skill: "feel" },
          { say: "Yes, I am feel very tired.", good: false, skill: "feel" },
        ],
      },
      {
        partner: "Did you sleep well?",
        te: "బాగా నిద్రపోయారా?",
        hint: { en: "Say no, about last night (past).", te: "లేదని చెప్పండి, నిన్న రాత్రి గురించి (past)." },
        replies: [
          { say: "No, I didn't sleep well.", good: true },
          { say: "No, I didn't slept well.", good: false },
        ],
      },
      {
        partner: "Are you worried about something?",
        te: "దేని గురించైనా దిగులుగా ఉన్నారా?",
        hint: { en: "Say a little, and tell her why.", te: "కొంచెం అని, ఎందుకో ఆవిడకి చెప్పండి." },
        replies: [
          { say: "A little. My friend is unwell.", good: true, skill: "feel" },
          { say: "A little. My friend unwell.", good: false, skill: "feel" },
          {
            say: "That is not your business.",
            good: false,
            skill: "feel",
            react: { en: "Sorry. I only asked because I care.", te: "Sorry అండీ. మీ మీద శ్రద్ధతోనే అడిగాను." },
          },
        ],
      },
      {
        partner: "Oh! I hope she feels better soon.",
        te: "అయ్యో! ఆవిడ త్వరగా కోలుకోవాలి.",
        hint: { en: "Thank her for her kind words.", te: "ఆవిడ మంచి మాటకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you. You are very kind.", good: true },
          { say: "Thank you. You very kind.", good: false },
        ],
      },
    ],
  },
};

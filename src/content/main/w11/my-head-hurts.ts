import type { Lesson } from "../../types";

/** Week 11, Day 2 (CURRICULUM §3): body parts, I have a …, my … hurts. */
export const day: Lesson = {
  id: "my-head-hurts",
  kind: "lesson",
  title: { en: "My Head Hurts", te: "శరీరం, నొప్పి" },
  subtitle: "I have a … / … hurts",
  summary: {
    en: "Learn to say what is wrong: I have a headache, I have a cold, my knee hurts.",
    te: "ఏమైందో చెప్పడం నేర్చుకుందాం: I have a headache, I have a cold, my knee hurts.",
  },
  seo: {
    title: "My Head Hurts: Body and Pain in English for Telugu Speakers",
    description:
      "Say I have a headache, I have a cold and My knee hurts in English. Simple lessons for Telugu speakers on talking about pain.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have", role: "action" },
    { text: "a headache", role: "what" },
  ],
  core: [
    { en: "I have a headache.", te: "నాకు తలనొప్పిగా ఉంది.", extra: ["am"] },
    { en: "My knee hurts.", te: "నా మోకాలు నొప్పిగా ఉంది.", extra: ["paining"] },
    { en: "I have a cold.", te: "నాకు జలుబు చేసింది.", extra: ["am"] },
    { en: "My back hurts a lot.", te: "నా వీపు చాలా నొప్పిగా ఉంది.", extra: ["paining"] },
    { en: "I have a stomach ache.", te: "నాకు కడుపు నొప్పిగా ఉంది.", extra: ["am"] },
    { en: "Do you have a fever?", te: "మీకు జ్వరం ఉందా?", extra: ["Are"] },
    { en: "I have a cough.", te: "నాకు దగ్గు ఉంది.", extra: ["am"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Point to five parts of your body and say their names in English: head, hand, knee, back, stomach.",
    te: "మీ శరీరంలో ఐదు భాగాలు చూపిస్తూ ఇంగ్లీష్ పేర్లు చెప్పండి: head, hand, knee, back, stomach.",
  },
  words: [
    { en: "headache", te: "తలనొప్పి" },
    { en: "knee", te: "మోకాలు" },
    { en: "cold", te: "జలుబు" },
    { en: "fever", te: "జ్వరం" },
    { en: "cough", te: "దగ్గు" },
  ],
  grammar: ["have-has-possessives", "present-simple"],
  topics: ["health", "pharmacy"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "I have a …, my … hurts", te: "నాకు … ఉంది, నా … నొప్పిగా ఉంది" },
      body: {
        en: "For an illness, say I have a …: I have a headache, I have a cold. For a part of the body, say My … hurts: My knee hurts.",
        te: "జబ్బు చెప్పడానికి I have a …: I have a headache, I have a cold. శరీర భాగం నొప్పి చెప్పడానికి My … hurts: My knee hurts.",
      },
      bridge: {
        te: ["నాకు", "తలనొప్పిగా", "ఉంది"],
        en: [
          { text: "I", role: "who" },
          { text: "have", role: "action" },
          { text: "a headache", role: "what" },
        ],
      },
      examples: [
        { en: "I have a headache.", te: "నాకు తలనొప్పిగా ఉంది." },
        { en: "My knee hurts.", te: "నా మోకాలు నొప్పిగా ఉంది." },
        { en: "I have a cold.", te: "నాకు జలుబు చేసింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying what is wrong", te: "ఏమైందో చెప్పడం" },
      items: [
        {
          form: "I have a + illness",
          useFor: { en: "Headache, cold, fever, cough.", te: "తలనొప్పి, జలుబు, జ్వరం, దగ్గు." },
          example: { en: "I have a cough.", te: "నాకు దగ్గు ఉంది." },
        },
        {
          form: "my + body part + hurts",
          useFor: { en: "Pain in one part of the body.", te: "శరీరంలో ఒక భాగంలో నొప్పి." },
          example: { en: "My back hurts a lot.", te: "నా వీపు చాలా నొప్పిగా ఉంది." },
        },
        {
          form: "Do you have a …?",
          useFor: { en: "To ask about an illness.", te: "జబ్బు గురించి అడగడానికి." },
          example: { en: "Do you have a fever?", te: "మీకు జ్వరం ఉందా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "My head is paining.",
      right: "I have a headache.",
      why: {
        en: "Is paining comes from Telugu; in English say I have a headache, or My head hurts.",
        te: "'నొప్పిగా ఉంది' ని is paining అని మార్చకండి: I have a headache లేదా My head hurts అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having fever.",
      right: "I have a fever.",
      why: {
        en: "For an illness, use have a, not am having: I have a fever.",
        te: "జబ్బు గురించి am having కాదు, have a వాడాలి: I have a fever.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["My knee is paining.", "My knee hurts.", "My knee hurting."],
      answer: 1,
      why: {
        en: "Hurts already means it is in pain, so no is paining.",
        te: "hurts అంటేనే నొప్పిగా ఉంది; is paining అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I have a ___.",
      te: "నాకు దగ్గు ఉంది.",
      options: ["cough", "cold", "fever"],
      answer: 0,
      why: {
        en: "A cough is దగ్గు; a cold is జలుబు.",
        te: "దగ్గు అంటే cough; జలుబు అంటే cold.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "Tell the pharmacist you have a headache.", te: "మీకు తలనొప్పిగా ఉందని ఫార్మసిస్ట్‌కి చెప్పండి." },
      options: ["I have a headache.", "I am headache.", "My head is paining."],
      answer: 0,
      why: {
        en: "Telugu says నాకు తలనొప్పి, but English needs have.",
        te: "తెలుగులో 'నాకు తలనొప్పి' అంటాం; ఇంగ్లీష్‌లో have కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "My back is paining a lot.",
      wrongIndex: 3,
      fix: "My back hurts a lot.",
      why: {
        en: "For pain in a body part, English says hurts, not is paining.",
        te: "శరీరంలో నొప్పికి ఇంగ్లీష్‌లో hurts అంటారు, is paining కాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "At the pharmacy, say you have a cold.",
        te: "మందుల షాపులో మీకు జలుబు చేసిందని చెప్పండి.",
      },
      expected: ["I have a cold."],
      options: ["I am having cold.", "I have a cold.", "I have cold."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Tell the doctor your back hurts.",
        te: "మీ వీపు నొప్పిగా ఉందని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["My back hurts.", "My back hurts a lot."],
      options: ["My back is paining.", "My back hurts.", "My back hurting."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the pharmacy", te: "మందుల షాపులో" },
    scene: {
      en: "You are not well. Tell Fatima, the pharmacist, what is wrong.",
      te: "మీకు ఒంట్లో బాగాలేదు. ఫార్మసిస్ట్ ఫాతిమా గారికి ఏమైందో చెప్పండి.",
    },
    partner: { en: "Fatima (a pharmacist)", te: "ఫాతిమా (ఫార్మసిస్ట్)" },
    skills: [{ id: "pain", label: { en: "Saying what is wrong", te: "ఏమైందో చెప్పడం" } }],
    turns: [
      {
        partner: "Good evening. How can I help?",
        te: "గుడ్ ఈవెనింగ్. మీకు ఏం కావాలి?",
        hint: { en: "Tell her what is wrong: a cold and a cough.", te: "ఏమైందో చెప్పండి: జలుబు, దగ్గు." },
        replies: [
          { say: "I have a cold and a cough.", good: true, skill: "pain" },
          { say: "I am cold and cough.", good: false, skill: "pain" },
          {
            say: "Give me cold tablets.",
            good: false,
            skill: "pain",
            react: { en: "Sure. But first, what is wrong?", te: "సరే. కానీ ముందు చెప్పండి, ఏమైంది?" },
          },
        ],
      },
      {
        partner: "Do you have a fever?",
        te: "మీకు జ్వరం ఉందా?",
        hint: { en: "Say no, but your head hurts.", te: "లేదని చెప్పి, తల నొప్పిగా ఉందని చెప్పండి." },
        replies: [
          { say: "No, but my head hurts.", good: true, skill: "pain" },
          { say: "No, but my head is paining.", good: false, skill: "pain", fixIt: "indian-english" },
        ],
      },
      {
        partner: "When did it start?",
        te: "ఎప్పుడు మొదలైంది?",
        hint: { en: "Tell her the day it started (past).", te: "ఏ రోజు మొదలైందో చెప్పండి (past)." },
        replies: [
          { say: "It started yesterday.", good: true },
          { say: "It is started yesterday.", good: false },
        ],
      },
      {
        partner: "Take this syrup and rest well.",
        te: "ఈ సిరప్ తీసుకుని, బాగా విశ్రాంతి తీసుకోండి.",
        hint: { en: "Ask the price.", te: "ధర ఎంతో అడగండి." },
        replies: [
          { say: "How much is it?", good: true },
          { say: "How much it is?", good: false, fixIt: "question" },
        ],
      },
    ],
  },
};

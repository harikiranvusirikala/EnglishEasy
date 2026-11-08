import type { Lesson } from "../../types";

/** Week 11, Day 4 (CURRICULUM §3): at the clinic — describing symptoms simply, now and in the past. */
export const day: Lesson = {
  id: "at-the-clinic",
  kind: "lesson",
  title: { en: "At the Clinic", te: "క్లినిక్‌లో" },
  subtitle: "telling the doctor",
  summary: {
    en: "Learn to tell the doctor simply what you feel now and what happened before.",
    te: "ఇప్పుడు ఎలా ఉందో, ముందు ఏం జరిగిందో డాక్టర్‌కి సులభంగా చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "At the Clinic: Talking to the Doctor in English for Telugu Speakers",
    description:
      "Say I had a fever yesterday and I feel dizzy in the morning to the doctor in English. Simple lessons for Telugu speakers at the clinic.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "had", role: "action" },
    { text: "a fever yesterday", role: "what" },
  ],
  core: [
    { en: "I had a fever yesterday.", te: "నిన్న నాకు జ్వరం వచ్చింది.", extra: ["have"] },
    { en: "The pain started on Monday.", te: "నొప్పి సోమవారం మొదలైంది.", extra: ["in"] },
    { en: "I can't sleep at night.", te: "నాకు రాత్రి నిద్ర పట్టడం లేదు.", extra: ["don't"] },
    { en: "I feel dizzy in the morning.", te: "ఉదయం నాకు కళ్ళు తిరుగుతున్నాయి.", extra: ["feels"] },
    { en: "I have an appointment at ten.", te: "నాకు పది గంటలకు అపాయింట్‌మెంట్ ఉంది.", extra: ["a"] },
    { en: "Please check my BP.", te: "దయచేసి నా BP చెక్ చేయండి.", extra: ["checking"] },
    { en: "How many times a day?", te: "రోజుకు ఎన్నిసార్లు?", extra: ["much"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Get ready for a doctor's visit: say I feel … and It started … in English.",
    te: "డాక్టర్‌కి ఏం చెప్తారో ఇంగ్లీష్‌లో అనుకోండి: I feel … It started …",
  },
  words: [
    { en: "dizzy", te: "కళ్ళు తిరగడం" },
    { en: "check", te: "చెక్ చేయడం, పరీక్షించడం" },
    { en: "BP", te: "BP (రక్తపోటు)" },
    { en: "times", te: "సార్లు" },
    { en: "medicine", te: "మందు" },
  ],
  grammar: ["past-simple", "present-simple", "can-could"],
  topics: ["doctor", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Now and before", te: "ఇప్పుడు, ముందు" },
      body: {
        en: "Tell the doctor what you feel now with the present: I feel dizzy. Tell what happened with the past: I had a fever yesterday. The pain started on Monday. Short, simple sentences are best.",
        te: "ఇప్పుడు ఎలా ఉందో వర్తమానంలో చెప్పండి: I feel dizzy. ముందు ఏం జరిగిందో గతంలో: I had a fever yesterday. The pain started on Monday. చిన్న, సులభమైన వాక్యాలు చాలు.",
      },
      bridge: {
        te: ["నిన్న", "నాకు", "జ్వరం వచ్చింది"],
        en: [
          { text: "I", role: "who" },
          { text: "had", role: "action" },
          { text: "a fever yesterday", role: "what" },
        ],
      },
      examples: [
        { en: "I had a fever yesterday.", te: "నిన్న నాకు జ్వరం వచ్చింది." },
        { en: "The pain started on Monday.", te: "నొప్పి సోమవారం మొదలైంది." },
        { en: "I feel dizzy in the morning.", te: "ఉదయం నాకు కళ్ళు తిరుగుతున్నాయి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Telling the doctor", te: "డాక్టర్‌కి చెప్పడం" },
      items: [
        {
          form: "now: I feel / I can't",
          useFor: { en: "How you are now.", te: "ఇప్పుడు ఎలా ఉన్నారో." },
          example: { en: "I can't sleep at night.", te: "నాకు రాత్రి నిద్ర పట్టడం లేదు." },
        },
        {
          form: "before: I had / it started",
          useFor: { en: "What happened, and when.", te: "ఏం జరిగిందో, ఎప్పుడో." },
          example: { en: "I had a fever yesterday.", te: "నిన్న నాకు జ్వరం వచ్చింది." },
        },
        {
          form: "about the medicine",
          useFor: { en: "Ask how to take it.", te: "ఎలా వేసుకోవాలో అడగండి." },
          example: { en: "How many times a day?", te: "రోజుకు ఎన్నిసార్లు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Yesterday I have fever.",
      right: "I had a fever yesterday.",
      why: {
        en: "Yesterday is the past: had a fever.",
        te: "నిన్న అంటే గతం: had a fever.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I am not getting sleep.",
      right: "I can't sleep at night.",
      why: {
        en: "Say it simply: I can't sleep.",
        te: "సులభంగా చెప్పండి: I can't sleep.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Yesterday I have a fever.", "I had a fever yesterday.", "I having fever yesterday."],
      answer: 1,
      why: {
        en: "The past: had.",
        te: "గతం: had.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "The pain ___ on Monday.",
      te: "నొప్పి సోమవారం మొదలైంది.",
      options: ["started", "starts", "start"],
      answer: 0,
      why: {
        en: "It happened before: started.",
        te: "ముందు జరిగింది: started.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The doctor gives you tablets. Ask how often to take them.", te: "డాక్టర్ మాత్రలు ఇచ్చారు. ఎన్నిసార్లు వేసుకోవాలో అడగండి." },
      options: ["How many times a day?", "How much times a day?", "How many time a day?"],
      answer: 0,
      why: {
        en: "Times are counted: how many times.",
        te: "సార్లు లెక్కపెడతాం: how many times.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I feels dizzy in the morning.",
      wrongIndex: 1,
      fix: "I feel dizzy in the morning.",
      why: {
        en: "With I, feel (no s).",
        te: "I తో feel (s లేకుండా).",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell the receptionist you have an appointment at ten.",
        te: "మీకు పది గంటలకు అపాయింట్‌మెంట్ ఉందని రిసెప్షనిస్ట్‌కి చెప్పండి.",
      },
      expected: ["I have an appointment at ten."],
      options: ["I have an appointment at ten.", "I have a appointment at ten.", "I am appointment at ten."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell the doctor you can't sleep at night.",
        te: "రాత్రి నిద్ర పట్టడం లేదని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["I can't sleep at night.", "I can't sleep."],
      options: ["I can't sleep at night.", "I am not getting sleep.", "I can't sleeping at night."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Seeing the doctor", te: "డాక్టర్‌ని కలవడం" },
    scene: {
      en: "You are seeing Dr Prasad. Tell him how you feel and what happened.",
      te: "మీరు డాక్టర్ ప్రసాద్‌ని కలుస్తున్నారు. మీకు ఎలా ఉందో, ఏం జరిగిందో చెప్పండి.",
    },
    partner: { en: "Dr Prasad (a doctor)", te: "డాక్టర్ ప్రసాద్" },
    skills: [{ id: "tell", label: { en: "Telling the doctor", te: "డాక్టర్‌కి చెప్పడం" } }],
    turns: [
      {
        partner: "Good morning. What is the problem?",
        te: "గుడ్ మార్నింగ్. ఏమిటి సమస్య?",
        hint: { en: "Say: I had a fever yesterday.", te: "ఇలా చెప్పండి: I had a fever yesterday." },
        replies: [
          { say: "I had a fever yesterday.", good: true, skill: "tell" },
          { say: "I have fever yesterday.", good: false, skill: "tell" },
        ],
      },
      {
        partner: "Do you have a fever now?",
        te: "ఇప్పుడు జ్వరం ఉందా?",
        hint: { en: "Say: No, but I feel weak.", te: "ఇలా చెప్పండి: No, but I feel weak." },
        replies: [
          { say: "No, but I feel weak.", good: true, skill: "tell" },
          { say: "No, but I am feel weak.", good: false, skill: "tell" },
        ],
      },
      {
        partner: "Do you sleep well?",
        te: "బాగా నిద్రపోతారా?",
        hint: { en: "Say: No, I can't sleep at night.", te: "ఇలా చెప్పండి: No, I can't sleep at night." },
        replies: [
          { say: "No, I can't sleep at night.", good: true, skill: "tell" },
          { say: "No, I am not getting sleep.", good: false, skill: "tell" },
        ],
      },
      {
        partner: "Take this tablet after food.",
        te: "భోజనం తర్వాత ఈ మాత్ర వేసుకోండి.",
        hint: { en: "Ask: How many times a day?", te: "అడగండి: How many times a day?" },
        replies: [
          { say: "How many times a day?", good: true, skill: "tell" },
          { say: "How much times a day?", good: false, skill: "tell" },
        ],
      },
    ],
  },
};

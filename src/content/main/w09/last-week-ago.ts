import type { Lesson } from "../../types";

/** Week 9, Day 5 (CURRICULUM §3): past time words — last week, two days ago, last night. */
export const day: Lesson = {
  id: "last-week-ago",
  kind: "lesson",
  title: { en: "Last Week, Two Days Ago", te: "పోయిన వారం, రెండు రోజుల క్రితం" },
  subtitle: "last / ago",
  summary: {
    en: "Learn to say when something happened: last week, last month, two days ago, last night.",
    te: "ఏదైనా ఎప్పుడు జరిగిందో చెప్పడం నేర్చుకుందాం: last week, last month, two days ago, last night.",
  },
  seo: {
    title: "Last Week and Two Days Ago in English for Telugu Speakers",
    description:
      "Say It started two days ago and I went to Tirupati last month in English. Simple lessons for Telugu speakers on last and ago.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "started", role: "action" },
    { text: "two days ago", role: "when" },
  ],
  core: [
    { en: "I went to Tirupati last month.", te: "నేను పోయిన నెల తిరుపతి వెళ్ళాను.", extra: ["before"] },
    { en: "It started two days ago.", te: "అది రెండు రోజుల క్రితం మొదలైంది.", extra: ["before"] },
    { en: "I saw him last week.", te: "నేను అతన్ని పోయిన వారం చూశాను.", extra: ["ago"] },
    { en: "We moved here five years ago.", te: "మేము ఐదేళ్ల క్రితం ఇక్కడికి వచ్చాం.", extra: ["before"] },
    { en: "When did the pain start?", te: "నొప్పి ఎప్పుడు మొదలైంది?", extra: ["started"] },
    { en: "I had a fever last night.", te: "నిన్న రాత్రి నాకు జ్వరం వచ్చింది.", extra: ["yesterday"] },
    { en: "I met her an hour ago.", te: "నేను గంట క్రితం ఆమెను కలిశాను.", extra: ["before"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Say two things with time words: … last week. … two days ago.",
    te: "సమయం పదాలతో రెండు విషయాలు చెప్పండి: … last week. … two days ago.",
  },
  words: [
    { en: "ago", te: "క్రితం" },
    { en: "last", te: "పోయిన, గత" },
    { en: "start", te: "మొదలవడం, మొదలుపెట్టడం" },
    { en: "move", te: "మారడం (ఇల్లు, ఊరు)" },
    { en: "year", te: "సంవత్సరం" },
  ],
  grammar: ["past-simple", "prepositions"],
  topics: ["time", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Last and ago", te: "last, ago — పోయిన, క్రితం" },
      body: {
        en: "Last goes before week, month or year: last week, last month. Ago goes after the time: two days ago, five years ago. For the night before today, say last night, not yesterday night.",
        te: "last ని week, month, year ముందు పెడతారు: last week, last month. ago ని సమయం తర్వాత పెడతారు: two days ago, five years ago. నిన్న రాత్రికి last night అనాలి, yesterday night కాదు.",
      },
      bridge: {
        te: ["అది", "రెండు రోజుల క్రితం", "మొదలైంది"],
        en: [
          { text: "It", role: "who" },
          { text: "started", role: "action" },
          { text: "two days ago", role: "when" },
        ],
      },
      examples: [
        { en: "It started two days ago.", te: "అది రెండు రోజుల క్రితం మొదలైంది." },
        { en: "I saw him last week.", te: "నేను అతన్ని పోయిన వారం చూశాను." },
        { en: "I had a fever last night.", te: "నిన్న రాత్రి నాకు జ్వరం వచ్చింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Last, ago, last night", te: "పోయిన, క్రితం, నిన్న రాత్రి" },
      items: [
        {
          form: "last + week / month / year",
          useFor: { en: "The one before this one.", te: "ఇప్పటిదానికి ముందుది." },
          example: { en: "I went to Tirupati last month.", te: "నేను పోయిన నెల తిరుపతి వెళ్ళాను." },
        },
        {
          form: "time + ago",
          useFor: { en: "How long before now.", te: "ఇప్పటికి ఎంత ముందు." },
          example: { en: "We moved here five years ago.", te: "మేము ఐదేళ్ల క్రితం ఇక్కడికి వచ్చాం." },
        },
        {
          form: "last night",
          useFor: { en: "The night before today.", te: "నిన్న రాత్రి." },
          example: { en: "I had a fever last night.", te: "నిన్న రాత్రి నాకు జ్వరం వచ్చింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "It started before two days.",
      right: "It started two days ago.",
      why: {
        en: "Say the time, then ago: two days ago.",
        te: "ముందు సమయం, తర్వాత ago: two days ago.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I had a fever yesterday night.",
      right: "I had a fever last night.",
      why: {
        en: "In English, say last night.",
        te: "ఇంగ్లీష్‌లో last night అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["It started before two days.", "It started two days ago.", "It started ago two days."],
      answer: 1,
      why: {
        en: "Two days ago.",
        te: "two days ago అనాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I saw him ___ week.",
      te: "నేను అతన్ని పోయిన వారం చూశాను.",
      options: ["last", "ago", "before"],
      answer: 0,
      why: {
        en: "Last week.",
        te: "last week అనాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I had a fever yesterday night.", "I had a fever last night.", "I had a fever night last."],
      answer: 1,
      why: {
        en: "Last night.",
        te: "last night అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "We moved here before five years.",
      wrongIndex: 3,
      fix: "We moved here five years ago.",
      why: {
        en: "Five years ago, not before five years.",
        te: "before five years కాదు, five years ago.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "The doctor asks: When did the pain start? Say two days ago.",
        te: "డాక్టర్ అడుగుతున్నారు: When did the pain start? రెండు రోజుల క్రితం అని చెప్పండి.",
      },
      expected: ["It started two days ago.", "Two days ago."],
      options: ["It started before two days.", "It started two days ago.", "It starts two days ago."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say that you went to Tirupati last month.",
        te: "మీరు పోయిన నెల తిరుపతి వెళ్ళారని చెప్పండి.",
      },
      expected: ["I went to Tirupati last month."],
      options: ["I went to Tirupati last month.", "I went to Tirupati before one month.", "I go to Tirupati last month."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "When did it start?", te: "ఎప్పుడు మొదలైంది?" },
    scene: {
      en: "Your leg hurts. Dr Sita asks you questions about it.",
      te: "మీ కాలు నొప్పిగా ఉంది. డాక్టర్ సీత దాని గురించి ప్రశ్నలు అడుగుతున్నారు.",
    },
    partner: { en: "Dr Sita (a doctor)", te: "డాక్టర్ సీత" },
    skills: [{ id: "when", label: { en: "last / ago", te: "last / ago వాడకం" } }],
    turns: [
      {
        partner: "What is the problem?",
        te: "ఏమిటి సమస్య?",
        hint: { en: "Say: I have a pain in my leg.", te: "ఇలా చెప్పండి: I have a pain in my leg." },
        replies: [
          { say: "I have a pain in my leg.", good: true },
          { say: "I am having pain in my leg.", good: false },
        ],
      },
      {
        partner: "When did it start?",
        te: "అది ఎప్పుడు మొదలైంది?",
        hint: { en: "Say: It started two days ago.", te: "ఇలా చెప్పండి: It started two days ago." },
        replies: [
          { say: "It started two days ago.", good: true, skill: "when" },
          { say: "It started before two days.", good: false, skill: "when" },
        ],
      },
      {
        partner: "Did you fall?",
        te: "మీరు కింద పడ్డారా?",
        hint: { en: "Say: No. I walked a lot last week.", te: "ఇలా చెప్పండి: No. I walked a lot last week." },
        replies: [
          { say: "No. I walked a lot last week.", good: true, skill: "when" },
          { say: "No. I walked a lot before week.", good: false, skill: "when" },
        ],
      },
      {
        partner: "Did you take any tablets?",
        te: "ఏమైనా మాత్రలు వేసుకున్నారా?",
        hint: { en: "Say: Yes, I took one last night.", te: "ఇలా చెప్పండి: Yes, I took one last night." },
        replies: [
          { say: "Yes, I took one last night.", good: true, skill: "when" },
          { say: "Yes, I took one yesterday night.", good: false, skill: "when" },
        ],
      },
    ],
  },
};

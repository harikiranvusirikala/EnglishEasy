import type { Lesson } from "../../types";

/** Week 6, Day 1 (CURRICULUM §3): like / don't like, Do you like …? */
export const day: Lesson = {
  id: "i-like-i-dont-like",
  kind: "lesson",
  title: { en: "I Like, I Don't Like", te: "నాకు ఇష్టం, ఇష్టం లేదు" },
  subtitle: "like / don't like",
  summary: {
    en: "Learn to say what food you like and don't like, and to ask others.",
    te: "మీకు ఏ ఆహారం ఇష్టమో, ఏది ఇష్టం లేదో చెప్పడం, ఇతరులను అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "I Like, I Don't Like in English for Telugu Speakers",
    description:
      "Say I like idli, I don't like spicy food and Do you like dosa? in English. Simple lessons for Telugu speakers, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "like", role: "action" },
    { text: "idli", role: "what" },
  ],
  core: [
    { en: "I like idli.", te: "నాకు ఇడ్లీ ఇష్టం.", extra: ["likes"] },
    { en: "I don't like spicy food.", te: "నాకు కారంగా ఉండే ఆహారం ఇష్టం లేదు.", extra: ["doesn't"] },
    { en: "Do you like dosa?", te: "మీకు దోసె ఇష్టమా?", extra: ["Does"] },
    { en: "She likes sweets.", te: "ఆమెకు స్వీట్లు ఇష్టం.", extra: ["like"] },
    { en: "He doesn't like coffee.", te: "అతనికి కాఫీ ఇష్టం లేదు.", extra: ["likes"] },
    { en: "I love pesarattu.", te: "నాకు పెసరట్టు అంటే చాలా ఇష్టం.", extra: ["loves"] },
    { en: "What is your favourite food?", te: "మీకు ఇష్టమైన ఆహారం ఏది?", extra: ["like"] },
  ],
  key: [0, 1, 2, 6],
  tryToday: {
    en: "Tell someone one food you like and one you don't like.",
    te: "మీకు ఇష్టమైన ఒక ఆహారం, ఇష్టం లేని ఒక ఆహారం ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "like", te: "ఇష్టపడటం" },
    { en: "love", te: "చాలా ఇష్టపడటం" },
    { en: "food", te: "ఆహారం, భోజనం" },
    { en: "spicy", te: "కారంగా" },
    { en: "favourite", te: "ఇష్టమైన" },
  ],
  grammar: ["gerunds-infinitives", "present-simple"],
  topics: ["food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying what you like", te: "నాకు ఇష్టం = I like" },
      body: {
        en: "Telugu says నాకు ఇడ్లీ ఇష్టం. English puts the person first, then like: I like idli. With he or she, say likes.",
        te: "తెలుగులో 'నాకు ఇడ్లీ ఇష్టం' అంటాం. ఇంగ్లీష్‌లో ముందు మనిషి, తర్వాత like: I like idli. he, she అయితే likes.",
      },
      bridge: {
        te: ["నాకు", "ఇడ్లీ", "ఇష్టం"],
        en: [
          { text: "I", role: "who" },
          { text: "like", role: "action" },
          { text: "idli", role: "what" },
        ],
      },
      examples: [
        { en: "I like idli.", te: "నాకు ఇడ్లీ ఇష్టం." },
        { en: "She likes sweets.", te: "ఆమెకు స్వీట్లు ఇష్టం." },
        { en: "I don't like spicy food.", te: "నాకు కారంగా ఉండే ఆహారం ఇష్టం లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Like, likes, love", te: "like, likes, love — ఎప్పుడు ఏది?" },
      items: [
        {
          form: "I, you, we, they → like",
          useFor: { en: "With I, you, we and they.", te: "I, you, we, they తో like." },
          example: { en: "Do you like dosa?", te: "మీకు దోసె ఇష్టమా?" },
        },
        {
          form: "he, she → likes / doesn't like",
          useFor: { en: "For one person, likes; to say no, doesn't like.", te: "ఒక్కరికి likes; లేదంటే doesn't like." },
          example: { en: "He doesn't like coffee.", te: "అతనికి కాఫీ ఇష్టం లేదు." },
        },
        {
          form: "love",
          useFor: { en: "Love means like very much.", te: "love అంటే చాలా ఇష్టం." },
          example: { en: "I love pesarattu.", te: "నాకు పెసరట్టు అంటే చాలా ఇష్టం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am liking idli.",
      right: "I like idli.",
      why: {
        en: "Like is not used with am … -ing. Say I like.",
        te: "like ని am … -ing తో వాడరు. I like అనాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She like sweets.",
      right: "She likes sweets.",
      why: {
        en: "With she or he, add s: likes.",
        te: "she, he తో s చేర్చాలి: likes.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am liking idli.", "I like idli.", "Me like idli."],
      answer: 1,
      why: {
        en: "Say I like, not I am liking.",
        te: "I am liking కాదు, I like.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He doesn't ___ coffee.",
      te: "అతనికి కాఫీ ఇష్టం లేదు.",
      options: ["like", "likes", "liking"],
      answer: 0,
      why: {
        en: "After doesn't, say like.",
        te: "doesn't తర్వాత like.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask a friend if she likes dosa.", te: "మీ స్నేహితురాలికి దోసె ఇష్టమా అని అడగండి." },
      options: ["Do you like dosa?", "Are you like dosa?", "You like dosa is?"],
      answer: 0,
      why: {
        en: "Ask with do: Do you like …?",
        te: "do తో అడగాలి: Do you like …?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She like sweets.",
      wrongIndex: 1,
      fix: "She likes sweets.",
      why: {
        en: "She is one person: likes.",
        te: "she ఒక్కరు: likes.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks: Do you like coffee? Say no, you like tea.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Do you like coffee? లేదు, మీకు టీ ఇష్టమని చెప్పండి.",
      },
      expected: ["No, I like tea.", "I don't like coffee."],
      options: ["No, I am liking tea.", "No, I like tea.", "No, I likes tea."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Someone asks: What is your favourite food? Say idli.",
        te: "ఒకరు అడుగుతున్నారు: What is your favourite food? ఇడ్లీ అని చెప్పండి.",
      },
      expected: ["My favourite food is idli.", "I like idli."],
      options: ["My favourite food is idli.", "My favourite food idli is.", "I favourite idli."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your favourite food", te: "మీకు ఇష్టమైన ఆహారం" },
    scene: {
      en: "Your friend Usha asks what food you like.",
      te: "మీ స్నేహితురాలు ఉష మీకు ఏ ఆహారం ఇష్టమో అడుగుతోంది.",
    },
    partner: { en: "Usha (a friend)", te: "ఉష (స్నేహితురాలు)" },
    skills: [{ id: "like", label: { en: "like / likes", te: "like / likes వాడకం" } }],
    turns: [
      {
        partner: "What is your favourite food?",
        te: "మీకు ఇష్టమైన ఆహారం ఏది?",
        hint: { en: "Say: My favourite food is pesarattu.", te: "ఇలా చెప్పండి: My favourite food is pesarattu." },
        replies: [
          { say: "My favourite food is pesarattu.", good: true, skill: "like" },
          { say: "My favourite food pesarattu.", good: false, skill: "like" },
        ],
      },
      {
        partner: "Do you like spicy food?",
        te: "మీకు కారంగా ఉండేవి ఇష్టమా?",
        hint: { en: "Say no: No, I don't like spicy food.", te: "లేదని చెప్పండి: No, I don't like spicy food." },
        replies: [
          { say: "No, I don't like spicy food.", good: true, skill: "like" },
          { say: "No, I not like spicy food.", good: false, skill: "like" },
        ],
      },
      {
        partner: "Does your brother like sweets?",
        te: "మీ అన్నయ్యకి స్వీట్లు ఇష్టమా?",
        hint: { en: "Say yes: Yes, he likes sweets.", te: "అవునని చెప్పండి: Yes, he likes sweets." },
        replies: [
          { say: "Yes, he likes sweets.", good: true, skill: "like" },
          { say: "Yes, he like sweets.", good: false, skill: "like" },
        ],
      },
      {
        partner: "I love sweets too!",
        te: "నాకు కూడా స్వీట్లు అంటే చాలా ఇష్టం!",
        hint: { en: "Invite her: Then come for lunch on Sunday.", te: "ఆహ్వానించండి: Then come for lunch on Sunday." },
        replies: [
          { say: "Then come for lunch on Sunday.", good: true },
          { say: "Then come for lunch in Sunday.", good: false },
        ],
      },
    ],
  },
};

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
    { en: "She likes sweets.", te: "ఆవిడకి స్వీట్లు ఇష్టం.", extra: ["like"] },
    { en: "He doesn't like coffee.", te: "ఆయనకి కాఫీ ఇష్టం లేదు.", extra: ["likes"] },
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
        { en: "She likes sweets.", te: "ఆవిడకి స్వీట్లు ఇష్టం." },
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
          useFor: {
            en: "For one person, likes; when they don't like it, doesn't like.",
            te: "ఒక్కరి గురించి likes; ఇష్టం లేకపోతే doesn't like.",
          },
          example: { en: "He doesn't like coffee.", te: "ఆయనకి కాఫీ ఇష్టం లేదు." },
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
      fixIt: "state-ing",
      wrong: "I am liking idli.",
      right: "I like idli.",
      why: {
        en: "Like is a feeling, so it takes no am … -ing: I like idli.",
        te: "like ఒక భావన, దానికి am … -ing రాదు: I like idli.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She like sweets.",
      right: "She likes sweets.",
      why: {
        en: "For one person (he, she), add s to the verb: She likes sweets.",
        te: "ఒక్కరి గురించి (he, she) అయితే verb కి s చేర్చాలి: She likes sweets.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I am liking idli.", "I like idli.", "I likes idli."],
      answer: 1,
      why: {
        en: "With I, like has no s and no am … -ing: I like idli.",
        te: "I తో like కి s రాదు, am … -ing రాదు: I like idli.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He doesn't ___ coffee.",
      te: "ఆయనకి కాఫీ ఇష్టం లేదు.",
      options: ["like", "likes", "liking"],
      answer: 0,
      why: {
        en: "Doesn't already has the s, so the verb stays plain: He doesn't like coffee.",
        te: "doesn't లోనే s ఉంది, అందుకే like కి s రాదు: He doesn't like coffee.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Ask a friend if she likes dosa.", te: "మీ స్నేహితురాలికి దోసె ఇష్టమా అని అడగండి." },
      options: ["Do you like dosa?", "Are you like dosa?", "Do you likes dosa?"],
      answer: 0,
      why: {
        en: "Telugu just ends with ఆ (ఇష్టమా?), but English starts with Do: Do you like dosa?",
        te: "తెలుగులో చివర 'ఆ' (ఇష్టమా?) చేరుస్తాం; ఇంగ్లీష్‌లో ముందు Do: Do you like dosa?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She like sweets.",
      wrongIndex: 1,
      fix: "She likes sweets.",
      why: {
        en: "She is one person, so the verb takes s: She likes sweets.",
        te: "she ఒక్కరు, అందుకే verb కి s: She likes sweets.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
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
      fixIt: "be",
      situation: {
        en: "Someone asks: What is your favourite food? Say idli.",
        te: "ఒకరు అడుగుతున్నారు: What is your favourite food? ఇడ్లీ అని చెప్పండి.",
      },
      expected: ["My favourite food is idli.", "I like idli."],
      options: ["My favourite food is idli.", "My favourite food idli is.", "My favourite food idli."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Your favourite food", te: "మీకు ఇష్టమైన ఆహారం" },
    scene: {
      en: "Your friend Salma asks what food you like.",
      te: "మీ స్నేహితురాలు సల్మా మీకు ఏ ఆహారం ఇష్టమో అడుగుతున్నారు.",
    },
    partner: { en: "Salma (a friend)", te: "సల్మా (స్నేహితురాలు)" },
    skills: [{ id: "like", label: { en: "like / likes", te: "like / likes వాడకం" } }],
    turns: [
      {
        partner: "What is your favourite food?",
        te: "మీకు ఇష్టమైన ఆహారం ఏది?",
        hint: {
          en: "Tell her your favourite food. Start with My favourite food is.",
          te: "మీకు ఇష్టమైన ఆహారం చెప్పండి. My favourite food is తో మొదలుపెట్టండి.",
        },
        replies: [
          { say: "My favourite food is pesarattu.", good: true, skill: "like" },
          { say: "My favourite food pesarattu.", good: false, skill: "like", fixIt: "be" },
        ],
      },
      {
        partner: "Do you like spicy food?",
        te: "మీకు కారంగా ఉండేవి ఇష్టమా?",
        hint: {
          en: "Say kindly that spicy food is not for you.",
          te: "కారం మీకు ఇష్టం లేదని మర్యాదగా చెప్పండి.",
        },
        replies: [
          { say: "No, I don't like spicy food.", good: true, skill: "like" },
          { say: "No, I not like spicy food.", good: false, skill: "like" },
          {
            say: "Spicy food? Yuck!",
            good: false,
            react: { en: "Oh! I cook spicy food every day.", te: "అయ్యో! నేను రోజూ కారంగానే వండుతాను." },
          },
        ],
      },
      {
        partner: "Does our neighbour Imran like sweets?",
        te: "మన పక్కింటి ఇమ్రాన్ గారికి స్వీట్లు ఇష్టమా?",
        hint: {
          en: "Say yes. Remember: one person takes likes.",
          te: "అవునని చెప్పండి. ఒక్కరి గురించి likes అనాలి.",
        },
        replies: [
          { say: "Yes, he likes sweets.", good: true, skill: "like" },
          { say: "Yes, he like sweets.", good: false, skill: "like" },
        ],
      },
      {
        partner: "I love sweets too!",
        te: "నాకు కూడా స్వీట్లు అంటే చాలా ఇష్టం!",
        hint: { en: "Invite her for lunch on Sunday.", te: "ఆదివారం భోజనానికి రమ్మని పిలవండి." },
        replies: [
          { say: "Then come for lunch on Sunday.", good: true },
          { say: "Then come for lunch in Sunday.", good: false, fixIt: "preposition" },
        ],
      },
    ],
  },
};

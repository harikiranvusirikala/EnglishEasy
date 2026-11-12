import type { Lesson } from "../../types";

/** Week 66, Day 2 (CURRICULUM §5): tidying up — pick up, put away, put back, throw away. */
export const day: Lesson = {
  id: "pick-up-put-away-tidying",
  kind: "lesson",
  title: { en: "Pick Up, Put Away", te: "తీయడం, సర్దడం" },
  subtitle: "pick up, put away, put back, throw away",
  summary: {
    en: "Learn to tidy up with someone: Could you put the plates away, please? Don't throw away that box.",
    te: "ఎవరితోనైనా కలిసి ఇల్లు సర్దడం నేర్చుకుందాం: Could you put the plates away, please? Don't throw away that box.",
  },
  seo: {
    title: "Pick Up and Put Away in English for Telugu Speakers",
    description:
      "Say Could you put the plates away? and Don't throw away that box. Simple lessons for Telugu speakers on tidying up at home.",
  },
  pattern: [
    { text: "Could you", role: "who" },
    { text: "put", role: "action" },
    { text: "the plates", role: "what" },
    { text: "away", role: "action" },
  ],
  core: [
    { en: "Could you put the plates away, please?", te: "కొంచెం ప్లేట్లు లోపల సర్దేస్తారా?", extra: ["plate"] },
    { en: "Don't throw away that box. I need it.", te: "ఆ డబ్బా పారేయకండి. అది నాకు కావాలి.", extra: ["throwing"] },
    { en: "Please pick up those papers from the floor.", te: "కింద పడిన ఆ కాగితాలు కొంచెం తీయండి.", extra: ["paper"] },
    { en: "Put the remote back on the table.", te: "రిమోట్ మళ్ళీ టేబుల్ మీదే పెట్టండి.", extra: ["in"] },
    { en: "I'll throw the old newspapers away tomorrow.", te: "పాత న్యూస్‌పేపర్లు రేపు పారేస్తాను.", extra: ["throws"] },
    { en: "Let's tidy up before the guests come.", te: "అతిథులు వచ్చే లోపు ఇల్లు సర్దేద్దాం.", extra: ["came"] },
    { en: "Where shall I put these glasses?", te: "ఈ గ్లాసులు ఎక్కడ పెట్టమంటారు?", extra: ["do"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Put three things back in their place today, and say each one aloud: I'm putting the keys back.",
    te: "ఈ రోజు మూడు వస్తువులని వాటి చోటులో పెడుతూ, ప్రతిసారీ గట్టిగా చెప్పండి: I'm putting the keys back.",
  },
  words: [
    { en: "put away", te: "లోపల సర్దడం" },
    { en: "put back", te: "తీసిన చోటే మళ్ళీ పెట్టడం" },
    { en: "throw away", te: "పారేయడం" },
    { en: "tidy up", te: "ఇల్లు సర్దడం" },
    { en: "cupboard", te: "అలమారా, కప్‌బోర్డ్" },
  ],
  grammar: ["phrasal-verbs", "articles", "plurals-countable"],
  topics: ["home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Put it away", te: "సర్దడం: put away" },
      body: {
        en: "Put away means put a thing in its place. Put back means return it to where it was. Throw away means put it in the dustbin.",
        te: "put away అంటే వస్తువుని దాని చోటులో సర్దడం. put back అంటే తీసిన చోటే మళ్ళీ పెట్టడం. throw away అంటే పారేయడం.",
      },
      bridge: {
        te: ["కొంచెం", "ప్లేట్లు", "లోపల సర్దేస్తారా?"],
        en: [
          { text: "Could you", role: "who" },
          { text: "put", role: "action" },
          { text: "the plates", role: "what" },
          { text: "away", role: "action" },
        ],
      },
      examples: [
        { en: "Could you put the plates away, please?", te: "కొంచెం ప్లేట్లు లోపల సర్దేస్తారా?" },
        { en: "Don't throw away that box. I need it.", te: "ఆ డబ్బా పారేయకండి. అది నాకు కావాలి." },
        { en: "Let's tidy up before the guests come.", te: "అతిథులు వచ్చే లోపు ఇల్లు సర్దేద్దాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Away, back or up?", te: "away, back, up: తేడా" },
      items: [
        {
          form: "put away",
          useFor: { en: "Put it in the cupboard or in its place.", te: "అలమారాలో, లేదా దాని చోటులో సర్దడానికి." },
          example: { en: "Please put your clothes away in the cupboard.", te: "మీ బట్టలు అలమారాలో సర్దండి." },
        },
        {
          form: "put back",
          useFor: { en: "Put it in the same place again.", te: "తీసిన చోటే మళ్ళీ పెట్టడానికి." },
          example: { en: "Put the remote back on the table.", te: "రిమోట్ మళ్ళీ టేబుల్ మీదే పెట్టండి." },
        },
        {
          form: "pick up",
          useFor: { en: "Take something from the floor.", te: "కింద నుంచి ఏదైనా తీయడానికి." },
          example: { en: "Please pick up those papers from the floor.", te: "కింద పడిన ఆ కాగితాలు కొంచెం తీయండి." },
        },
        {
          form: "throw away",
          useFor: { en: "Put it in the dustbin.", te: "చెత్తబుట్టలో పారేయడానికి." },
          example: { en: "I'll throw the old newspapers away tomorrow.", te: "పాత న్యూస్‌పేపర్లు రేపు పారేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "Put the plates in cupboard.",
      right: "Put the plates in the cupboard.",
      why: {
        en: "The cupboard you both know needs the; Telugu has no word like the.",
        te: "ఇద్దరికీ తెలిసిన అలమారా కాబట్టి the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Put the old bills in a cover.",
      right: "Put the old bills in a bag.",
      why: {
        en: "In English, a cover is for a book or a phone; things go in a bag.",
        te: "ఇంగ్లీష్‌లో cover అంటే పుస్తకానికి, ఫోన్‌కి వేసేది; సామాన్లు bag లో పెడతాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend Anitha used your scissors. Ask her to return them to the same place.",
        te: "మీ స్నేహితురాలు అనిత గారు మీ కత్తెర వాడారు. దాన్ని తీసిన చోటే పెట్టమని అడగండి.",
      },
      options: ["Could you put them back, please?", "Could you put back them, please?", "Could you keep them back, please?"],
      answer: 0,
      why: {
        en: "With them, back comes after them. Keep back means hold on to it, so it is the wrong meaning.",
        te: "them వస్తే back దాని తర్వాత వస్తుంది. keep back అంటే దగ్గరే ఉంచుకోవడం, అర్థం మారిపోతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Kumar always ___ his shoes away near the door.",
      te: "కుమార్ గారు ఎప్పుడూ తన బూట్లు తలుపు దగ్గర సర్దిపెడతారు.",
      options: ["puts", "put", "putting"],
      answer: 0,
      why: {
        en: "One person with always takes s on the verb, like he goes.",
        te: "ఒక్కరు, always తో: verb కి s వస్తుంది, he goes లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend is about to throw away an old tin. You still need it. What do you say?",
        te: "మీ స్నేహితులు ఒక పాత డబ్బా పారేయబోతున్నారు. అది మీకు ఇంకా కావాలి. ఏమంటారు?",
      },
      options: ["Please don't throw that away. I need it.", "Please don't throw away it. I need it.", "Hey! Don't touch my things."],
      answer: 0,
      why: {
        en: "With that or it, away goes last, and please keeps a stop request kind.",
        te: "that, it వస్తే away చివరికి వెళ్తుంది; please అంటే ఆపమనడం కూడా మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Please put all the book back on the shelf.",
      wrongIndex: 4,
      fix: "Please put all the books back on the shelf.",
      why: {
        en: "All the means more than one, so book takes s; Telugu adds లు in the same way.",
        te: "all the అంటే ఒకటి కంటే ఎక్కువ, అందుకే book కి s; తెలుగులోనూ పుస్తకాలు అని లు చేరుస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend asks where to keep the clean plates. Say in the cupboard.",
        te: "కడిగిన ప్లేట్లు ఎక్కడ పెట్టాలని మీ స్నేహితులు అడుగుతున్నారు. అలమారాలో అని చెప్పండి.",
      },
      expected: ["Please put them in the cupboard.", "Put them away in the cupboard, please.", "In the cupboard, please."],
      options: ["Please put them in the cupboard.", "Please put them in cupboard.", "Please put in the cupboard them."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend picks up a box of old bills. You need them. Ask her not to throw it away.",
        te: "మీ స్నేహితురాలు పాత బిల్లుల డబ్బా తీశారు. అవి మీకు కావాలి. దాన్ని పారేయొద్దని అడగండి.",
      },
      expected: ["Please don't throw it away. I need it.", "Don't throw it away, please.", "Please don't throw that box away."],
      options: ["Please don't throw it away. I need it.", "Please don't throw away it. I need it.", "Please not throw it away. I need it."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "After the get-together", te: "గెట్-టుగెదర్ తర్వాత" },
    scene: {
      en: "Your friends came for a get-together at your house. Everyone has gone, but Rahim stays to help.",
      te: "మీ ఇంట్లో స్నేహితుల గెట్-టుగెదర్ అయింది. అందరూ వెళ్ళిపోయారు, కానీ రహీమ్ గారు సాయం చేయడానికి ఉన్నారు.",
    },
    partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "tidy", label: { en: "Asking for help", te: "సాయం అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "What a nice evening! Now, shall I help you tidy up?",
        te: "ఎంత మంచి సాయంత్రం! ఇప్పుడు ఇల్లు సర్దడానికి సాయం చేయనా?",
        hint: { en: "Thank him, and say yes.", te: "ఆయనకి థాంక్స్ చెప్పి, సరే అనండి." },
        replies: [
          { say: "Thank you, Rahim. Yes, please.", good: true, skill: "polite" },
          {
            say: "Yes. You do all of it. I'm tired.",
            good: false,
            skill: "polite",
            react: { en: "All of it? Let's do it together, okay?", te: "అంతా నేనేనా? ఇద్దరం కలిసి చేద్దాం, సరేనా?" },
          },
        ],
      },
      {
        partner: "Where do these plates go?",
        te: "ఈ ప్లేట్లు ఎక్కడ పెట్టాలి?",
        hint: { en: "Ask him to put them in the cupboard.", te: "వాటిని అలమారాలో సర్దమని అడగండి." },
        replies: [
          { say: "Could you put them away in the cupboard, please?", good: true, skill: "tidy" },
          { say: "Could you put away them in the cupboard, please?", good: false, skill: "tidy" },
        ],
      },
      {
        partner: "And these paper cups? Shall I keep them?",
        te: "మరి ఈ పేపర్ కప్పులు? ఉంచనా?",
        hint: { en: "Say no: they are used, so they go in the dustbin.", te: "వద్దని చెప్పండి: అవి వాడేసినవి, చెత్తబుట్టలో వేయాలి." },
        replies: [
          { say: "No, please throw them away. They're used.", good: true, skill: "tidy" },
          { say: "No, please throw them. They're used.", good: false, skill: "tidy" },
        ],
      },
      {
        partner: "Done! The house looks clean again.",
        te: "అయిపోయింది! ఇల్లు మళ్ళీ శుభ్రంగా ఉంది.",
        hint: { en: "Thank him warmly for his help.", te: "ఆయన సాయానికి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help, Rahim.", good: true, skill: "polite" },
          { say: "Thanks a lot, Rahim. You've been a great help.", good: true, skill: "polite" },
          { say: "Thank you so much for help, Rahim.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

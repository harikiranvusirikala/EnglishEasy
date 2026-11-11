import type { Lesson } from "../../types";

/** Week 31, Day 4 (CURRICULUM §4): since / for with the present perfect, to say how long up to now. */
export const day: Lesson = {
  id: "since-and-for",
  kind: "lesson",
  title: { en: "Since and For", te: "నుండి, గా" },
  subtitle: "I have lived here for … / since …",
  summary: {
    en: "Learn to say how long something has been true up to now: I have lived here for twenty years.",
    te: "ఇప్పటి వరకు ఎంత కాలంగా అని చెప్పడం నేర్చుకుందాం: I have lived here for twenty years.",
  },
  seo: {
    title: "Since and For in English for Telugu Speakers",
    description:
      "Say I have lived here for twenty years and since 2005, not I am living here since. Simple lessons for Telugu speakers on how long.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "have lived", role: "action" },
    { text: "here", role: "what" },
    { text: "for twenty years.", role: "when" },
  ],
  core: [
    { en: "I have lived here for twenty years.", te: "నేను ఇరవై ఏళ్ళుగా ఇక్కడ ఉంటున్నాను.", extra: ["since"] },
    { en: "I have lived here since two thousand five.", te: "నేను 2005 నుండి ఇక్కడ ఉంటున్నాను.", extra: ["from"] },
    { en: "She has worked at the bank for ten years.", te: "ఆవిడ పదేళ్ళుగా బ్యాంక్‌లో పని చేస్తున్నారు.", extra: ["is"] },
    { en: "We have known them since childhood.", te: "వాళ్ళు మాకు చిన్నప్పటి నుండి తెలుసు.", extra: ["knowing"] },
    { en: "How long have you lived in Guntur?", te: "మీరు ఎంత కాలంగా గుంటూరులో ఉంటున్నారు?", extra: ["since"] },
    { en: "He has been a teacher for thirty years.", te: "ఆయన ముప్పై ఏళ్ళుగా టీచర్‌గా ఉన్నారు.", extra: ["is"] },
    { en: "I have had this phone since last year.", te: "ఈ ఫోన్ పోయిన సంవత్సరం నుండి నా దగ్గర ఉంది.", extra: ["having"] },
  ],
  key: [0, 1, 3, 4],
  tryToday: {
    en: "Tell someone how long you have lived in your town: I have lived here for …",
    te: "మీ ఊరిలో ఎంత కాలంగా ఉంటున్నారో ఎవరికైనా చెప్పండి: I have lived here for …",
  },
  words: [
    { en: "since", te: "నుండి (మొదలైన సమయం)" },
    { en: "childhood", te: "చిన్నతనం" },
    { en: "for a long time", te: "చాలా కాలంగా" },
    { en: "all my life", te: "నా జీవితమంతా" },
    { en: "settled", te: "స్థిరపడ్డారు" },
  ],
  grammar: ["present-perfect", "prepositions"],
  topics: ["home", "time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How long, up to now", te: "ఇప్పటి వరకు ఎంత కాలం" },
      body: {
        en: "To say how long, up to now, use have or has + the third form. Use for with an amount of time (for 20 years) and since with the start (since 2005).",
        te: "ఇప్పటి వరకు ఎంత కాలం అని చెప్పడానికి have / has + మూడో రూపం. ఎంత కాలమో for తో (for 20 years), ఎప్పటి నుండో since తో (since 2005).",
      },
      bridge: {
        te: ["నేను", "ఇక్కడ", "ఇరవై ఏళ్ళుగా", "ఉంటున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "have lived", role: "action" },
          { text: "here", role: "what" },
          { text: "for twenty years.", role: "when" },
        ],
      },
      examples: [
        { en: "I have lived here for twenty years.", te: "నేను ఇరవై ఏళ్ళుగా ఇక్కడ ఉంటున్నాను." },
        { en: "I have lived here since two thousand five.", te: "నేను 2005 నుండి ఇక్కడ ఉంటున్నాను." },
        { en: "We have known them since childhood.", te: "వాళ్ళు మాకు చిన్నప్పటి నుండి తెలుసు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "For or since?", te: "for ఆ, since ఆ?" },
      items: [
        {
          form: "for + how much time",
          useFor: { en: "Years, months, days, a long time.", te: "ఏళ్ళు, నెలలు, రోజులు: ఎంత కాలమో." },
          example: { en: "He has been a teacher for thirty years.", te: "ఆయన ముప్పై ఏళ్ళుగా టీచర్‌గా ఉన్నారు." },
        },
        {
          form: "since + the start",
          useFor: { en: "A year, a day, childhood: when it began.", te: "ఒక సంవత్సరం, ఒక రోజు, చిన్నతనం: ఎప్పుడు మొదలైందో." },
          example: { en: "I have had this phone since last year.", te: "ఈ ఫోన్ పోయిన సంవత్సరం నుండి నా దగ్గర ఉంది." },
        },
        {
          form: "How long have you …?",
          useFor: { en: "Asking how long.", te: "ఎంత కాలంగా అని అడగడానికి." },
          example: { en: "How long have you lived in Guntur?", te: "మీరు ఎంత కాలంగా గుంటూరులో ఉంటున్నారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am here since two thousand ten.",
      right: "I have lived here since two thousand ten.",
      why: {
        en: "Telugu ఉంటున్నాను sounds like now, but up to now English needs have lived, not am.",
        te: "'ఉంటున్నాను' ఇప్పటి మాటలా ఉన్నా, ఇప్పటి వరకు అనే అర్థానికి ఇంగ్లీష్‌లో am కాదు, have lived కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I have lived here since twenty years.",
      right: "I have lived here for twenty years.",
      why: {
        en: "Twenty years is an amount of time, so use for; since needs a starting point.",
        te: "ఇరవై ఏళ్ళు అనేది ఎంత కాలమో చెప్తుంది, అందుకే for; since కి మొదలైన సమయం కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: { en: "Tell a new neighbour how long you have lived here.", te: "మీరు ఇక్కడ ఎంత కాలంగా ఉంటున్నారో కొత్త పక్కింటివారికి చెప్పండి." },
      options: ["I have lived here for ten years.", "I am living here for ten years.", "I live here since ten years."],
      answer: 0,
      why: {
        en: "Time up to now needs have or has with the third form, not am living or live.",
        te: "ఇప్పటి వరకు ఉన్న కాలానికి have / has + మూడో రూపం కావాలి; am living, live సరిపోవు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Kavitha has taught here ___ two thousand fifteen.",
      te: "కవిత గారు 2015 నుండి ఇక్కడ పాఠాలు చెప్తున్నారు.",
      options: ["since", "for", "from"],
      answer: 0,
      why: {
        en: "A year is when it started, so use since; Telugu నుండి becomes since here, not from.",
        te: "సంవత్సరం అంటే మొదలైన సమయం, అందుకే since; ఇక్కడ 'నుండి' అంటే from కాదు, since.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Narayana says: I have lived in Nellore all my life. What does it mean?",
        te: "నారాయణ గారు I have lived in Nellore all my life అన్నారు. అర్థం ఏంటి?",
      },
      options: ["He has always lived in Nellore, and still does.", "He lived in Nellore long ago.", "He is going to live in Nellore."],
      answer: 0,
      why: {
        en: "Have lived means it started in the past and is still true now.",
        te: "have lived అంటే గతంలో మొదలై, ఇప్పటికీ నిజమే అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "We have known them for childhood.",
      wrongIndex: 4,
      fix: "We have known them since childhood.",
      why: {
        en: "Childhood is when it started, so use since, not for.",
        te: "చిన్నతనం అంటే మొదలైన సమయం, అందుకే for కాదు, since.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have lived in this colony. Say fifteen years.",
        te: "ఈ కాలనీలో ఎంత కాలంగా ఉంటున్నారని కొత్త పక్కింటివారు అడుగుతున్నారు. పదిహేనేళ్ళు అని చెప్పండి.",
      },
      expected: ["I have lived here for fifteen years.", "I've lived here for fifteen years.", "For fifteen years."],
      options: ["I have lived here for fifteen years.", "I am living here since fifteen years.", "I live here from fifteen years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Ask Imran, the shopkeeper, how long he has had his shop.",
        te: "షాపు ఎంత కాలంగా నడుపుతున్నారో షాపు ఓనర్ ఇమ్రాన్ గారిని అడగండి.",
      },
      expected: ["How long have you had this shop?", "How long have you had your shop?"],
      options: ["How long have you had this shop?", "Since how long you are having this shop?", "How long you have this shop?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new neighbour", te: "కొత్త పక్కింటాయన" },
    scene: {
      en: "Joseph has just moved in next door. He comes to say hello.",
      te: "జోసెఫ్ గారు ఇప్పుడే పక్కింట్లోకి వచ్చారు. పలకరించడానికి వచ్చారు.",
    },
    partner: { en: "Joseph (new neighbour)", te: "జోసెఫ్ (కొత్త పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "howlong", label: { en: "Saying how long", te: "ఎంత కాలంగా అని చెప్పడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm Joseph. We moved in yesterday.",
        te: "నమస్కారం! నేను జోసెఫ్. నిన్ననే ఇక్కడికి వచ్చాం.",
        hint: { en: "Welcome him, and say your name.", te: "ఆయనకి స్వాగతం చెప్పి, మీ పేరు చెప్పండి." },
        replies: [
          { say: "Welcome! I'm Kiran. Nice to meet you.", good: true, skill: "polite" },
          { say: "Welcome! Myself Kiran.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
      {
        partner: "You too! How long have you lived here?",
        te: "మిమ్మల్ని కలవడం నాకూ సంతోషం. మీరు ఇక్కడ ఎంత కాలంగా ఉంటున్నారు?",
        hint: { en: "Say how many years, with for.", te: "for వాడి, ఎన్నేళ్ళుగానో చెప్పండి." },
        replies: [
          { say: "I have lived here for twenty years.", good: true, skill: "howlong" },
          { say: "I am living here since twenty years.", good: false, skill: "howlong", fixIt: "duration" },
          {
            say: "Why do you want to know?",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry! I'm only trying to make friends.", te: "అయ్యో, సారీ! స్నేహం చేద్దామని అడిగానంతే." },
          },
        ],
      },
      {
        partner: "Twenty years! You're well settled. You know everyone, then.",
        te: "ఇరవై ఏళ్ళా! బాగా స్థిరపడ్డారు. అయితే అందరూ మీకు తెలుసన్నమాట.",
        hint: { en: "Say yes, you have known them a long time.", te: "అవును, చాలా కాలంగా తెలుసని చెప్పండి." },
        replies: [
          { say: "Yes, I have known them for a long time.", good: true, skill: "howlong" },
          { say: "Yes, I am knowing them for long time.", good: false, skill: "howlong", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Please come for tea some day.",
        te: "ఎప్పుడైనా టీకి రండి.",
        hint: { en: "Thank him, say yes, and welcome him to the colony.", te: "థాంక్స్ చెప్పి, వస్తానని చెప్పి, కాలనీకి స్వాగతం చెప్పండి." },
        replies: [
          { say: "Thank you, I will. Welcome to the colony!", good: true, skill: "polite" },
          { say: "Thank you, I will. Welcome to colony!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

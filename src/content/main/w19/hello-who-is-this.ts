import type { Lesson } from "../../types";

/** Week 19, Day 1 (CURRICULUM §4): opening a call — Hello, this is …; May I speak to …?; Who is speaking?; Speaking. */
export const day: Lesson = {
  id: "hello-who-is-this",
  kind: "lesson",
  title: { en: "Hello, Who's Speaking?", te: "ఎవరు మాట్లాడుతున్నారు?" },
  subtitle: "This is … / May I speak to …?",
  summary: {
    en: "Learn to start a phone call politely: Hello, this is Kiran. May I speak to Mohan, please?",
    te: "ఫోన్ కాల్ మర్యాదగా మొదలుపెట్టడం నేర్చుకుందాం: Hello, this is Kiran. May I speak to Mohan, please?",
  },
  seo: {
    title: "Starting a Phone Call in English for Telugu Speakers",
    description:
      "Say Hello, this is Kiran and May I speak to Mohan, please? Simple lessons for Telugu speakers on starting a phone call.",
  },
  pattern: [
    { text: "May", role: "action" },
    { text: "I", role: "who" },
    { text: "speak to", role: "action" },
    { text: "Mohan, please?", role: "what" },
  ],
  core: [
    { en: "Hello, this is Kiran.", te: "హలో, నేను కిరణ్‌ని మాట్లాడుతున్నాను.", extra: ["Myself"] },
    { en: "May I speak to Mohan, please?", te: "మోహన్ గారితో మాట్లాడొచ్చా?", extra: ["speaking"] },
    { en: "Who is speaking, please?", te: "ఎవరు మాట్లాడుతున్నారండీ?", extra: ["are"] },
    { en: "Is Mohan there?", te: "మోహన్ గారు ఉన్నారా?", extra: ["Are"] },
    { en: "Hold on, I'll call him.", te: "ఒక్క నిమిషం ఆగండి, ఆయన్ని పిలుస్తాను.", extra: ["calling"] },
    { en: "Hello, is this Sita's house?", te: "హలో, ఇది సీత గారి ఇల్లేనా?", extra: ["Sita"] },
    { en: "Yes, speaking. How are you?", te: "అవును, నేనే మాట్లాడుతున్నాను. ఎలా ఉన్నారు?", extra: ["am"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time you call someone, start with Hello, this is, and your name.",
    te: "ఈసారి ఎవరికైనా ఫోన్ చేసినప్పుడు Hello, this is అని, మీ పేరుతో మొదలుపెట్టండి.",
  },
  words: [
    { en: "hello", te: "హలో" },
    { en: "speaking", te: "మాట్లాడుతున్నాను, నేనే" },
    { en: "this is", te: "నేను … (ఫోన్‌లో)" },
    { en: "may", te: "… చేయొచ్చా (మర్యాదగా అడగడం)" },
    { en: "hold on", te: "ఒక్క నిమిషం ఆగండి" },
  ],
  grammar: ["question-words", "this-that", "politeness-softening"],
  topics: ["phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Starting a call", te: "ఫోన్ కాల్ మొదలుపెట్టడం" },
      body: {
        en: "On the phone, people can't see you. So first say who you are: Hello, this is Kiran. Then ask for the person: May I speak to Mohan, please? May I is the most polite way to ask.",
        te: "ఫోన్‌లో మనం కనిపించం, అందుకే ముందు మీరెవరో చెప్పండి: Hello, this is Kiran. తర్వాత ఎవరు కావాలో మర్యాదగా అడగండి: May I speak to Mohan, please?",
      },
      bridge: {
        te: ["మోహన్ గారితో", "మాట్లాడొచ్చా?"],
        en: [
          { text: "May", role: "action" },
          { text: "I", role: "who" },
          { text: "speak to", role: "action" },
          { text: "Mohan?", role: "what" },
        ],
      },
      examples: [
        { en: "Hello, this is Kiran.", te: "హలో, నేను కిరణ్‌ని మాట్లాడుతున్నాను." },
        { en: "May I speak to Mohan, please?", te: "మోహన్ గారితో మాట్లాడొచ్చా?" },
        { en: "Yes, speaking. How are you?", te: "అవును, నేనే మాట్లాడుతున్నాను. ఎలా ఉన్నారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who is on the phone?", te: "ఫోన్‌లో ఎవరు?" },
      items: [
        {
          form: "This is …",
          useFor: { en: "Say who you are.", te: "మీరెవరో చెప్పడానికి." },
          example: { en: "Hello, this is Kiran.", te: "హలో, నేను కిరణ్‌ని మాట్లాడుతున్నాను." },
        },
        {
          form: "Who is speaking?",
          useFor: { en: "Ask who is calling.", te: "ఎవరు ఫోన్ చేశారో అడగడానికి." },
          example: { en: "Who is speaking, please?", te: "ఎవరు మాట్లాడుతున్నారండీ?" },
        },
        {
          form: "Speaking.",
          useFor: { en: "Say: yes, it's me.", te: "'అవును, నేనే' అని చెప్పడానికి." },
          example: { en: "Yes, speaking. How are you?", te: "అవును, నేనే మాట్లాడుతున్నాను. ఎలా ఉన్నారు?" },
        },
        {
          form: "Hold on.",
          useFor: { en: "Ask the caller to wait.", te: "ఫోన్ చేసినవాళ్ళని కాసేపు ఆగమనడానికి." },
          example: { en: "Hold on, I'll call him.", te: "ఒక్క నిమిషం ఆగండి, ఆయన్ని పిలుస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Hello, myself Kiran.",
      right: "Hello, this is Kiran.",
      why: {
        en: "Myself is never used to give your name. On the phone, start with this is.",
        te: "పేరు చెప్పడానికి myself వాడరు. ఫోన్‌లో this is తో మొదలుపెట్టండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "Who you are?",
      right: "Who is speaking, please?",
      why: {
        en: "Who you are? keeps the Telugu word order and sounds rude. Put is after who, and add please.",
        te: "'Who you are?' తెలుగు వరుసలో ఉంది, మొరటుగా కూడా ఉంటుంది. who తర్వాత is పెట్టి, please చేర్చండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You call Mohan's house. What do you say first?", te: "మీరు మోహన్ గారి ఇంటికి ఫోన్ చేశారు. ముందు ఏమంటారు?" },
      options: [
        "Hello, this is Kiran. May I speak to Mohan?",
        "Hello, myself Kiran. Give the phone to Mohan.",
        "Hello, who is this? Call Mohan quickly.",
      ],
      answer: 0,
      why: {
        en: "First say who you are with this is, then ask politely with May I.",
        te: "ముందు this is తో మీరెవరో చెప్పి, తర్వాత May I తో మర్యాదగా అడగండి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "May I speak ___ Mohan, please?",
      te: "మోహన్ గారితో మాట్లాడొచ్చా?",
      options: ["to", "on", "at"],
      answer: 0,
      why: {
        en: "After speak, use to before the person you want.",
        te: "speak తర్వాత, కావలసిన మనిషి పేరు ముందు to వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The caller asks: May I speak to Kiran? You are Kiran. What do you say?",
        te: "ఫోన్ చేసినవాళ్ళు May I speak to Kiran? అని అడిగారు. కిరణ్ మీరే. ఏమంటారు?",
      },
      options: ["Yes, speaking.", "Yes, myself only.", "Yes, I'll call him."],
      answer: 0,
      why: {
        en: "Speaking alone means yes, I am the person you want.",
        te: "speaking అంటే 'మీకు కావలసింది నేనే, మాట్లాడుతున్నాను' అని.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "May I speaking to Mohan, please?",
      wrongIndex: 2,
      fix: "May I speak to Mohan, please?",
      why: {
        en: "After may, the verb stays plain, with no -ing.",
        te: "may తర్వాత verb మారదు, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You call your friend Mohan's house. Say hello and who you are.",
        te: "మీ స్నేహితుడు మోహన్ గారి ఇంటికి ఫోన్ చేశారు. హలో అని, మీరెవరో చెప్పండి.",
      },
      expected: ["Hello, this is Kiran.", "Hello, this is Sai.", "Hello, this is Kiran speaking."],
      options: ["Hello, this is Kiran.", "Hello, myself Kiran.", "Hello, Kiran is me."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask politely to speak to Mohan.",
        te: "మోహన్ గారితో మాట్లాడాలని మర్యాదగా అడగండి.",
      },
      expected: ["May I speak to Mohan, please?", "May I speak to Mohan?", "Can I speak to Mohan, please?"],
      options: ["May I speak to Mohan, please?", "Give the phone to Mohan.", "May I speak at Mohan, please?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Calling a friend's house", te: "స్నేహితుడి ఇంటికి ఫోన్" },
    scene: {
      en: "You call your friend Mohan's house. His sister Usha answers the phone.",
      te: "మీరు మీ స్నేహితుడు మోహన్ గారి ఇంటికి ఫోన్ చేశారు. ఆయన చెల్లెలు ఉష ఫోన్ తీశారు.",
    },
    partner: { en: "Usha (your friend's sister)", te: "ఉష (మీ స్నేహితుడి చెల్లెలు)" },
    skills: [{ id: "open", label: { en: "Starting a call", te: "కాల్ మొదలుపెట్టడం" } }],
    turns: [
      {
        partner: "Hello? Who is speaking, please?",
        te: "హలో? ఎవరు మాట్లాడుతున్నారండీ?",
        hint: { en: "Say hello, and say who you are.", te: "హలో అని, మీరెవరో చెప్పండి." },
        replies: [
          { say: "Hello, this is Kiran.", good: true, skill: "open" },
          { say: "Hello, myself Kiran.", good: false, skill: "open", fixIt: "indian-english" },
          {
            say: "Who are you? Give the phone to Mohan.",
            good: false,
            skill: "open",
            react: { en: "Oh! Please tell me your name first.", te: "అయ్యో! ముందు మీ పేరు చెప్పండి." },
          },
        ],
      },
      {
        partner: "Oh, hello! How are you?",
        te: "ఓ, హలో! ఎలా ఉన్నారు?",
        hint: { en: "Say you are fine, and ask for Mohan politely.", te: "బాగున్నానని చెప్పి, మోహన్ గారిని మర్యాదగా అడగండి." },
        replies: [
          { say: "I'm fine, thank you. May I speak to Mohan?", good: true, skill: "open" },
          { say: "I'm fine, thank you. May I speak at Mohan?", good: false, skill: "open", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, he's here. Hold on, please.",
        te: "ఉన్నారు. ఒక్క నిమిషం ఆగండి.",
        hint: { en: "Say okay, and thank her.", te: "సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, thank you.", good: true },
          {
            say: "Quickly, please. I don't have time.",
            good: false,
            react: { en: "Okay, okay! I'm calling him now.", te: "సరే, సరే! ఇప్పుడే పిలుస్తున్నాను." },
          },
        ],
      },
      {
        partner: "He's coming now. Bye!",
        te: "వస్తున్నారు. ఉంటాను!",
        hint: { en: "Thank her, and say you will wait.", te: "థాంక్స్ చెప్పి, ఆగుతానని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll wait.", good: true },
          { say: "Thank you. I'm waiting him.", good: false, fixIt: "preposition" },
        ],
      },
    ],
  },
};

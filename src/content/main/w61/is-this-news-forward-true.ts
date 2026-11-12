import type { Lesson } from "../../types";

/** Week 61, Day 5 (CURRICULUM §5): checking news — Is it true that banks are closed for a week? I don't think so. Let's check. */
export const day: Lesson = {
  id: "is-this-news-forward-true",
  kind: "lesson",
  title: { en: "Is It True?", te: "ఇది నిజమేనా?" },
  subtitle: "Is it true that …? Let's check.",
  summary: {
    en: "Learn to check news before you believe it: Is it true that banks are closed for a week? I don't think so. Let's check.",
    te: "వార్తని నమ్మే ముందు చెక్ చేయడం నేర్చుకుందాం: Is it true that banks are closed for a week? I don't think so. Let's check.",
  },
  seo: {
    title: "Checking Fake News in English for Telugu Speakers",
    description:
      "Ask Is it true that banks are closed? and say Let's check the bank's website. Simple lessons for Telugu speakers on checking forwards.",
  },
  pattern: [
    { text: "Is it true", role: "action" },
    { text: "that banks", role: "who" },
    { text: "are closed", role: "action" },
    { text: "for a week?", role: "when" },
  ],
  core: [
    { en: "Is it true that banks are closed for a week?", te: "బ్యాంకులు వారం రోజులు మూసి ఉంటాయట, నిజమేనా?", extra: ["closing"] },
    { en: "I don't think so. Let's check the bank's website.", te: "నాకలా అనిపించట్లేదు. బ్యాంక్ website చూద్దాం.", extra: ["checking"] },
    { en: "Where did you read this message?", te: "ఈ మెసేజ్ మీరు ఎక్కడ చదివారు?", extra: ["see"] },
    { en: "Please don't forward it before you check.", te: "చెక్ చేయకుండా దాన్ని ఫార్వర్డ్ చేయకండి.", extra: ["checked"] },
    { en: "This message is fake. The bank never said that.", te: "ఈ మెసేజ్ ఫేక్. బ్యాంక్ అలా ఎప్పుడూ చెప్పలేదు.", extra: ["say"] },
    {
      en: "The official website says the banks are open as usual.",
      te: "బ్యాంకులు మామూలుగానే తెరిచి ఉన్నాయని official website లో ఉంది.",
      extra: ["say"],
    },
    { en: "It's only a rumour. Please don't spread it.", te: "అది ఉత్త పుకారు. అందరికీ పంపకండి, ప్లీజ్.", extra: ["spreading"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When a forward reaches you today, ask yourself: Is it true? Where did it come from? Check before you send it on.",
    te: "ఈ రోజు ఏదైనా forward వస్తే మిమ్మల్ని మీరే అడగండి: Is it true? ఇది ఎక్కడి నుంచి వచ్చింది? పంపే ముందు చెక్ చేయండి.",
  },
  words: [
    { en: "rumour", te: "పుకారు" },
    { en: "website", te: "website, వెబ్‌సైట్" },
    { en: "official", te: "అధికారిక, official" },
    { en: "false", te: "తప్పు, అబద్ధం" },
    { en: "spread", te: "వ్యాపింపజేయడం, అందరికీ పంపడం" },
  ],
  grammar: ["yes-no-questions", "present-simple", "imperatives"],
  topics: ["bank", "technology", "phone"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Checking the news", te: "వార్త నిజమా కాదా చూడటం" },
      body: {
        en: "To check news, ask Is it true that … and add the news. To doubt it politely, say I don't think so, and Let's check the official website.",
        te: "వార్త నిజమేనా అని అడగాలంటే Is it true that … తర్వాత ఆ వార్త చెప్పండి. నమ్మకం లేకపోతే మర్యాదగా I don't think so, Let's check the official website అనండి.",
      },
      bridge: {
        te: ["బ్యాంకులు", "వారం రోజులు", "మూసి ఉంటాయట,", "నిజమేనా?"],
        en: [
          { text: "Is it true", role: "action" },
          { text: "that banks", role: "who" },
          { text: "are closed", role: "action" },
          { text: "for a week?", role: "when" },
        ],
      },
      examples: [
        { en: "Is it true that banks are closed for a week?", te: "బ్యాంకులు వారం రోజులు మూసి ఉంటాయట, నిజమేనా?" },
        { en: "I don't think so. Let's check the bank's website.", te: "నాకలా అనిపించట్లేదు. బ్యాంక్ website చూద్దాం." },
        { en: "The official website says the banks are open as usual.", te: "బ్యాంకులు మామూలుగానే తెరిచి ఉన్నాయని official website లో ఉంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ask, doubt, check", te: "అడగడం, అనుమానించడం, చెక్ చేయడం" },
      items: [
        {
          form: "Is it true that …?",
          useFor: { en: "Ask if some news is true.", te: "ఒక వార్త నిజమేనా అని అడగడానికి." },
          example: { en: "Is it true that the school is closed tomorrow?", te: "రేపు స్కూల్ మూసేస్తారట, నిజమేనా?" },
        },
        {
          form: "Where did you read it?",
          useFor: { en: "Ask where the news came from.", te: "వార్త ఎక్కడి నుంచి వచ్చిందో అడగడానికి." },
          example: { en: "Where did you read this message?", te: "ఈ మెసేజ్ మీరు ఎక్కడ చదివారు?" },
        },
        {
          form: "I don't think so.",
          useFor: { en: "Doubt it, politely.", te: "మర్యాదగా అనుమానం చెప్పడానికి." },
          example: { en: "I don't think so. It sounds false.", te: "నాకలా అనిపించట్లేదు. అది అబద్ధంలా ఉంది." },
        },
        {
          form: "Let's check …",
          useFor: { en: "Suggest checking an official place.", te: "అధికారిక చోట చూద్దామని చెప్పడానికి." },
          example: { en: "Let's check the bank's website.", te: "బ్యాంక్ website చూద్దాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not believing this message.",
      right: "I don't believe this message.",
      why: {
        en: "Believe is a thought, not an action, so it takes no -ing; Telugu నమ్మట్లేదు sounds like -ing.",
        te: "believe ఒక ఆలోచన, పని కాదు; అందుకే -ing రాదు. తెలుగు 'నమ్మట్లేదు' -ing లాగా వినిపిస్తుంది, అందుకే ఈ తప్పు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "This message fake.",
      right: "This message is fake.",
      why: {
        en: "English needs is between the thing and the word about it; Telugu ఈ మెసేజ్ ఫేక్ needs no such word.",
        te: "ఇంగ్లీష్‌లో వస్తువుకి, దాని గురించి చెప్పే పదానికి మధ్య is కావాలి; తెలుగులో 'ఈ మెసేజ్ ఫేక్' అంటే చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your neighbour sends a message: All banks closed for a week. Ask her if it is true.",
        te: "పక్కింటావిడ ఒక మెసేజ్ పంపారు: All banks closed for a week. అది నిజమేనా అని ఆవిడని అడగండి.",
      },
      options: [
        "Is it true that banks are closed for a week?",
        "It is true that banks are closed for a week?",
        "Is it true that banks is closed for a week?",
      ],
      answer: 0,
      why: {
        en: "A yes or no question puts is before it, and many banks take are.",
        te: "అవునా కాదా ప్రశ్నలో is, it కంటే ముందు వస్తుంది; చాలా బ్యాంకులు కాబట్టి are కావాలి.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "message",
      heading: "Colony Friends",
      lines: [
        "Anitha: Forwarded many times",
        "URGENT! All banks closed for 7 days from Monday.",
        "Take out all your cash today.",
        "Send this to 10 groups now!",
      ],
      prompt: { en: "Anitha sent this to the group. What should you do first?", te: "అనిత గారు గ్రూప్‌లో ఇది పంపారు. మీరు ముందు ఏం చేయాలి?" },
      options: ["Check the bank's official website", "Take out all your cash today", "Send it to ten groups"],
      answer: 0,
      why: {
        en: "A message that says urgent and was forwarded many times is often false, so check first.",
        te: "urgent అని, చాలాసార్లు forward అయిన మెసేజ్ చాలాసార్లు అబద్ధమే; అందుకే ముందు చెక్ చేయాలి.",
      },
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "state-ing",
      sentence: "I ___ this message is true.",
      te: "ఈ మెసేజ్ నిజమని నాకు అనిపించట్లేదు.",
      options: ["don't think", "am not thinking", "not think"],
      answer: 0,
      why: {
        en: "Think here means believe, so it takes no -ing, and not needs do before it.",
        te: "ఇక్కడ think అంటే నమ్మడం; అందుకే -ing రాదు, not ముందు do కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The bank never ask for your PIN on the phone.",
      wrongIndex: 3,
      fix: "The bank never asks for your PIN on the phone.",
      why: {
        en: "One bank, like he or she, takes s on the verb, even after never.",
        te: "ఒక్క బ్యాంక్ (he, she లాగా); never ఉన్నా verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend forwards a message about free gold coins from a bank. Tell him it is fake.",
        te: "బ్యాంక్ ఫ్రీగా బంగారు నాణేలు ఇస్తోందని మీ స్నేహితుడు ఒక మెసేజ్ forward చేశారు. అది ఫేక్ అని ఆయనకి చెప్పండి.",
      },
      expected: ["This message is fake.", "It's fake. Please don't forward it.", "This is a fake message."],
      options: ["This message is fake.", "This message fake.", "This message is faking."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour wants to send a scary message to everyone. Ask her politely to check first.",
        te: "భయపెట్టే ఒక మెసేజ్‌ని పక్కింటావిడ అందరికీ పంపాలనుకుంటున్నారు. ముందు చెక్ చేయమని మర్యాదగా అడగండి.",
      },
      expected: ["Please don't forward it before you check.", "Let's check first before we forward it.", "Please check it first."],
      options: ["Please don't forward it before you check.", "Don't forward! You are spreading lies!", "Please don't forwarding it before you check."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A message about the banks", te: "బ్యాంకుల గురించి ఒక మెసేజ్" },
    scene: {
      en: "Your neighbour Ramesh comes over with his phone. He looks worried about a message.",
      te: "పక్కింటి రమేష్ గారు ఫోన్ పట్టుకుని వచ్చారు. ఒక మెసేజ్ చూసి కంగారుగా ఉన్నారు.",
    },
    partner: { en: "Ramesh (your neighbour)", te: "రమేష్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "check", label: { en: "Checking news", te: "వార్త చెక్ చేయడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Did you see this message? All banks are closed for a week!",
        te: "ఈ మెసేజ్ చూశారా? వారం రోజులు బ్యాంకులన్నీ మూసేస్తారట!",
        hint: { en: "Say you haven't, and ask him where he got it.", te: "చూడలేదని చెప్పి, ఆయనకి అది ఎక్కడ వచ్చిందో అడగండి." },
        replies: [
          { say: "No, I haven't. Where did you get it?", good: true, skill: "check" },
          { say: "No, I haven't. Where you got it?", good: false, skill: "check", fixIt: "question" },
        ],
      },
      {
        partner: "It came on our colony group. Is it true?",
        te: "మన కాలనీ గ్రూప్‌లో వచ్చింది. ఇది నిజమేనా?",
        hint: { en: "Say you doubt it, and suggest looking at the bank's website together.", te: "మీకు అనుమానంగా ఉందని చెప్పి, కలిసి బ్యాంక్ website చూద్దామని చెప్పండి." },
        replies: [
          { say: "I don't think so. Let's check the bank's website.", good: true, skill: "check" },
          { say: "I am not thinking so. Let's check the bank's website.", good: false, skill: "check", fixIt: "state-ing" },
        ],
      },
      {
        partner: "You're right. The website says the banks are open as usual.",
        te: "మీరు చెప్పింది నిజమే. బ్యాంకులు మామూలుగానే తెరిచి ఉన్నాయని website లో ఉంది.",
        hint: { en: "Say it was only a rumour, and ask him kindly not to send it on.", te: "అది ఉత్త పుకారు అని చెప్పి, ఇంకెవరికీ పంపొద్దని మర్యాదగా అడగండి." },
        replies: [
          { say: "It was only a rumour. Please don't forward it.", good: true, skill: "polite" },
          {
            say: "See? You believe everything on WhatsApp!",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. I'll be more careful.", te: "సరే, సరే. ఇంకా జాగ్రత్తగా ఉంటాను." },
          },
        ],
      },
      {
        partner: "I won't. I'll tell the group it's fake.",
        te: "పంపను. అది ఫేక్ అని గ్రూప్‌లో చెప్తాను.",
        hint: { en: "Thank him, ask him to tell them soon, and say goodbye.", te: "థాంక్స్ చెప్పి, త్వరగా అందరికీ చెప్పమని, బై చెప్పండి." },
        replies: [
          { say: "Thank you. Please tell them today. Bye!", good: true, skill: "polite" },
          { say: "Thank you. Please do the needful today. Bye!", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 59, Day 1 (CURRICULUM §5): which and that for things — I know a shop which repairs old radios. */
export const day: Lesson = {
  id: "the-shop-which-repairs-radios",
  kind: "lesson",
  title: { en: "The Shop Which Repairs Radios", te: "రేడియోలు రిపేర్ చేసే షాపు" },
  subtitle: "which / that for things",
  summary: {
    en: "Learn to talk about shops and things with which and that: I know a shop which repairs old radios.",
    te: "షాపులు, వస్తువుల గురించి which, that తో చెప్పడం నేర్చుకుందాం: I know a shop which repairs old radios.",
  },
  seo: {
    title: "Which and That for Things in English for Telugu Speakers",
    description:
      "Say I know a shop which repairs old radios. Simple lessons for Telugu speakers on using which and that for shops and things.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "know", role: "action" },
    { text: "a shop which", role: "what" },
    { text: "repairs old radios", role: "action" },
  ],
  core: [
    { en: "I know a shop which repairs old radios.", te: "పాత రేడియోలు రిపేర్ చేసే షాపు ఒకటి నాకు తెలుసు.", extra: ["repair"] },
    { en: "Is this the bus that goes to the hospital?", te: "హాస్పిటల్‌కి వెళ్ళే బస్సు ఇదేనా?", extra: ["who"] },
    { en: "Do you know a shop that repairs mixer grinders?", te: "మిక్సీలు రిపేర్ చేసే షాపు ఏదైనా మీకు తెలుసా?", extra: ["repairing"] },
    { en: "The radio which I bought there still works.", te: "అక్కడ కొన్న రేడియో ఇప్పటికీ పనిచేస్తుంది.", extra: ["it"] },
    { en: "The shop which is near the bus stand is very reliable.", te: "బస్ స్టాండ్ దగ్గర ఉన్న ఆ షాపు చాలా నమ్మకమైనది.", extra: ["are"] },
    { en: "The mechanic there fixes radios which are fifty years old.", te: "అక్కడి మెకానిక్ యాభై ఏళ్ళ నాటి రేడియోలు కూడా బాగుచేస్తారు.", extra: ["fix"] },
    { en: "It's a small workshop which charges a reasonable price.", te: "అది ఒక చిన్న workshop, అక్కడ ధరలు న్యాయంగా ఉంటాయి.", extra: ["charge"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one good shop near your home. Say aloud what it does: I know a shop which …",
    te: "మీ ఇంటి దగ్గర ఒక మంచి షాపు గుర్తు చేసుకోండి. అది ఏం చేస్తుందో గట్టిగా చెప్పండి: I know a shop which …",
  },
  words: [
    { en: "mechanic", te: "మెకానిక్, రిపేర్ చేసే మనిషి" },
    { en: "reliable", te: "నమ్మకమైన, నమ్మదగిన" },
    { en: "reasonable", te: "న్యాయమైన, మరీ ఎక్కువ కాని" },
    { en: "second-hand", te: "సెకండ్ హ్యాండ్, ఇంతకుముందు ఎవరో వాడిన" },
    { en: "workshop", te: "రిపేర్లు చేసే చిన్న షాపు, workshop" },
  ],
  grammar: ["relative-clauses", "present-simple", "articles"],
  topics: ["shopping", "neighbours", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "which and that for things", te: "వస్తువులకి which, that" },
      body: {
        en: "For people we say who. For things, shops and buses, say which or that, and then what it does: a shop which repairs radios.",
        te: "మనుషులకి who అంటాం. వస్తువులు, షాపులు, బస్సులకి which లేదా that, తర్వాత అది ఏం చేస్తుందో చెప్పండి: a shop which repairs radios (రేడియోలు రిపేర్ చేసే షాపు).",
      },
      bridge: {
        te: ["పాత రేడియోలు", "రిపేర్ చేసే", "షాపు ఒకటి", "నాకు తెలుసు"],
        en: [
          { text: "I", role: "who" },
          { text: "know", role: "action" },
          { text: "a shop which", role: "what" },
          { text: "repairs old radios", role: "action" },
        ],
      },
      examples: [
        { en: "I know a shop which repairs old radios.", te: "పాత రేడియోలు రిపేర్ చేసే షాపు ఒకటి నాకు తెలుసు." },
        { en: "Is this the bus that goes to the hospital?", te: "హాస్పిటల్‌కి వెళ్ళే బస్సు ఇదేనా?" },
        { en: "The radio which I bought there still works.", te: "అక్కడ కొన్న రేడియో ఇప్పటికీ పనిచేస్తుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "who, which or that", te: "who, which, that ఎప్పుడు" },
      items: [
        {
          form: "who",
          useFor: { en: "For people: a mechanic, a tailor, a doctor.", te: "మనుషులకి: మెకానిక్, టైలర్, డాక్టర్." },
          example: { en: "Do you know a mechanic who repairs radios?", te: "రేడియోలు రిపేర్ చేసే మెకానిక్ ఎవరైనా మీకు తెలుసా?" },
        },
        {
          form: "which",
          useFor: { en: "For things, shops and buses.", te: "వస్తువులు, షాపులు, బస్సులకి." },
          example: { en: "I know a shop which repairs old radios.", te: "పాత రేడియోలు రిపేర్ చేసే షాపు ఒకటి నాకు తెలుసు." },
        },
        {
          form: "that",
          useFor: { en: "For things too, in everyday talk.", te: "రోజూ మాట్లాడేటప్పుడు వస్తువులకి that కూడా అంటారు." },
          example: { en: "They sell second-hand radios that work well.", te: "బాగా పనిచేసే సెకండ్ హ్యాండ్ రేడియోలు కూడా అమ్ముతారు." },
        },
        {
          form: "which is …",
          useFor: { en: "Say where a thing is, or what it is like.", te: "ఒక వస్తువు ఎక్కడ ఉందో, ఎలా ఉంటుందో చెప్పడానికి." },
          example: { en: "The shop which is near the bus stand is very reliable.", te: "బస్ స్టాండ్ దగ్గర ఉన్న ఆ షాపు చాలా నమ్మకమైనది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "I know a shop which repair radios.",
      right: "I know a shop which repairs radios.",
      why: {
        en: "The shop is one thing, so the verb after which takes s.",
        te: "షాపు ఒక్కటే కాబట్టి which తర్వాత వచ్చే verb కి s వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Is this the bus who goes to the hospital?",
      right: "Is this the bus that goes to the hospital?",
      why: {
        en: "Who is only for people; a bus or a shop takes that or which.",
        te: "who మనుషులకి మాత్రమే; బస్సు, షాపు లాంటి వాటికి that లేదా which.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Your neighbour's old radio is not working. Tell her about a good shop.",
        te: "పక్కింటావిడ పాత రేడియో పనిచేయట్లేదు. ఒక మంచి షాపు గురించి ఆవిడకి చెప్పండి.",
      },
      options: ["I know a shop which repairs old radios.", "I know shop which repairs old radios.", "I know a shop who repairs old radios."],
      answer: 0,
      why: {
        en: "One shop needs a before it, and a thing takes which, not who.",
        te: "ఒక షాపు కాబట్టి a కావాలి; వస్తువులకి who కాదు, which వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Is this the bus ___ goes to the hospital?",
      te: "హాస్పిటల్‌కి వెళ్ళే బస్సు ఇదేనా?",
      options: ["that", "who", "where"],
      answer: 0,
      why: {
        en: "A bus is a thing, so use that or which; who is for people.",
        te: "బస్సు ఒక వస్తువు, అందుకే that లేదా which; who మనుషులకే.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Tell a friend about the good shop near the bus stand.",
        te: "బస్ స్టాండ్ దగ్గర ఉన్న మంచి షాపు గురించి స్నేహితులకి చెప్పండి.",
      },
      options: [
        "The shop which is near the bus stand is reliable.",
        "The shop which near the bus stand is reliable.",
        "The shop which are near the bus stand is reliable.",
      ],
      answer: 0,
      why: {
        en: "Telugu దగ్గర ఉన్న needs no extra word, but English needs is after which.",
        te: "తెలుగులో 'దగ్గర ఉన్న' అంటే చాలు; ఇంగ్లీష్‌లో which తర్వాత is కావాలి, షాపు ఒక్కటే కాబట్టి are కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The radio which I bought it there still works.",
      wrongIndex: 5,
      fix: "The radio which I bought there still works.",
      why: {
        en: "Which already stands for the radio, so do not say it again.",
        te: "which అంటేనే ఆ రేడియో; అందుకే మళ్ళీ it అనకూడదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your mixer grinder is broken. Ask your neighbour about a repair shop.",
        te: "మీ మిక్సీ పాడైపోయింది. రిపేర్ షాపు గురించి పక్కింటివారిని అడగండి.",
      },
      expected: [
        "Do you know a shop that repairs mixer grinders?",
        "Do you know a shop which repairs mixer grinders?",
        "Is there a shop that repairs mixer grinders?",
        "Is there a shop which repairs mixer grinders?",
      ],
      options: [
        "Do you know a shop that repairs mixer grinders?",
        "Do you know a shop that repair mixer grinders?",
        "You know a shop that repairs mixer grinders?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At the bus stop, check with a man that this bus goes to the hospital.",
        te: "బస్ స్టాప్‌లో, ఈ బస్సు హాస్పిటల్‌కి వెళ్తుందా అని ఒకాయన్ని అడిగి తెలుసుకోండి.",
      },
      expected: [
        "Is this the bus that goes to the hospital?",
        "Is this the bus which goes to the hospital?",
        "Excuse me, is this the bus that goes to the hospital?",
        "Does this bus go to the hospital?",
      ],
      options: ["Is this the bus that goes to the hospital?", "Is this the bus that go to the hospital?", "Is this the bus who goes to the hospital?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A shop for an old radio", te: "పాత రేడియోకి ఒక షాపు" },
    scene: {
      en: "Your neighbour Narayana meets you at the gate. He is holding an old radio.",
      te: "పక్కింటి నారాయణ గారు గేటు దగ్గర కలిశారు. ఆయన చేతిలో ఒక పాత రేడియో ఉంది.",
    },
    partner: { en: "Narayana (your neighbour)", te: "నారాయణ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "recommend", label: { en: "Recommending a shop", te: "మంచి షాపు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! My radio has stopped working. Do you know a good shop?",
        te: "గుడ్ మార్నింగ్! నా రేడియో పనిచేయడం ఆగిపోయింది. మీకు మంచి షాపు ఏదైనా తెలుసా?",
        hint: { en: "Say yes, you know a shop for old radios.", te: "తెలుసు అని, పాత రేడియోలు బాగుచేసే షాపు గురించి చెప్పండి." },
        replies: [
          { say: "Yes, I know a shop which repairs old radios.", good: true, skill: "recommend" },
          { say: "Yes, there's a shop that repairs old radios.", good: true, skill: "recommend" },
          { say: "Yes, I know a shop which repair old radios.", good: false, skill: "recommend", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Oh, good! Where is it?",
        te: "ఓ, మంచిది! అది ఎక్కడ ఉంది?",
        hint: { en: "Say it is the small workshop next to the post office.", te: "పోస్ట్ ఆఫీస్ పక్కన ఉన్న చిన్న workshop అని చెప్పండి." },
        replies: [
          { say: "It's the small workshop next to the post office.", good: true, skill: "recommend" },
          { say: "It's small workshop next to the post office.", good: false, skill: "recommend", fixIt: "article" },
        ],
      },
      {
        partner: "Are they expensive? It's a very old radio.",
        te: "వాళ్ళు ఎక్కువ తీసుకుంటారా? ఇది చాలా పాత రేడియో.",
        hint: { en: "Say their charges are fair, and the mechanic is reliable.", te: "వాళ్ళ ఛార్జీలు న్యాయంగా ఉంటాయని, మెకానిక్ నమ్మకమైనవారని చెప్పండి." },
        replies: [
          { say: "No, their charges are reasonable. The mechanic is very reliable.", good: true, skill: "recommend" },
          {
            say: "Old radio? Just throw it away and buy a new one.",
            good: false,
            skill: "polite",
            react: { en: "No, no! That radio was my father's. I want to keep it.", te: "అయ్యో, వద్దండీ! ఆ రేడియో మా నాన్నగారిది. దాన్ని అలాగే ఉంచుకోవాలి." },
          },
        ],
      },
      {
        partner: "Thank you so much! I'll take it there this evening.",
        te: "చాలా థాంక్స్! ఈ సాయంత్రం దాన్ని అక్కడికి తీసుకెళ్తాను.",
        hint: { en: "Say he is welcome, and tell him to mention your name there.", te: "పర్లేదు అని, అక్కడ మీ పేరు చెప్పమని ఆయనకి చెప్పండి." },
        replies: [
          { say: "You're welcome. Tell them I sent you.", good: true, skill: "polite" },
          { say: "You're welcome. Tell them I send you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

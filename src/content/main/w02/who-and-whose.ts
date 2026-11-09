import type { Lesson } from "../../types";

/** Week 2, Day 3 (CURRICULUM §3): who / whose. Who as the doer takes no do / did. */
export const day: Lesson = {
  id: "who-and-whose",
  kind: "lesson",
  title: { en: "Who & Whose", te: "ఎవరు, ఎవరిది" },
  subtitle: "who / whose",
  summary: {
    en: "Learn to ask who someone is with who, and who owns something with whose.",
    te: "ఒకరు ఎవరో who తో, ఒక వస్తువు ఎవరిదో whose తో అడగడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Who and Whose Questions in English for Telugu Speakers",
    description:
      "Ask Who is that man? and Whose bag is this? in English. Simple lessons for Telugu speakers on who and whose, with Telugu explanations.",
  },
  pattern: [
    { text: "Whose bag", role: "who" },
    { text: "is", role: "action" },
    { text: "this?", role: "what" },
  ],
  core: [
    { en: "Who is that man?", te: "ఆ ఆయన ఎవరు?", extra: ["Whose"] },
    { en: "Whose bag is this?", te: "ఇది ఎవరి బ్యాగ్?", extra: ["Who"] },
    { en: "Who is your doctor?", te: "మీ డాక్టర్ ఎవరు?", extra: ["Whose"] },
    { en: "He is my neighbour.", te: "ఆయన మా పక్కింటాయన.", extra: ["am"] },
    { en: "Whose phone is ringing?", te: "ఎవరి ఫోన్ మోగుతోంది?", extra: ["Who"] },
    { en: "Who made this sweet?", te: "ఈ స్వీట్ ఎవరు చేశారు?", extra: ["did"] },
    { en: "It is Sita's bag.", te: "అది సీత బ్యాగ్.", extra: ["Sita"] },
  ],
  key: [0, 1, 3, 5],
  tryToday: {
    en: "Point to something and ask someone: Whose … is this? Then ask about a person: Who is he?",
    te: "ఏదైనా వస్తువు చూపించి ఎవరినైనా అడగండి: Whose … is this? తర్వాత ఒక మనిషి గురించి అడగండి: Who is he?",
  },
  words: [
    { en: "who", te: "ఎవరు" },
    { en: "whose", te: "ఎవరి, ఎవరిది" },
    { en: "bag", te: "బ్యాగ్, సంచి" },
    { en: "neighbour", te: "పొరుగువారు" },
    { en: "sweet", te: "స్వీట్, మిఠాయి" },
  ],
  grammar: ["question-words", "am-is-are", "have-has-possessives"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Who is a person, whose is the owner", te: "who అంటే ఎవరు, whose అంటే ఎవరిది" },
      body: {
        en: "Who asks about a person. Whose asks who owns something, and the thing comes right after it: Whose bag is this?",
        te: "who అంటే ఎవరు: ఒక మనిషి గురించి. whose అంటే ఎవరి: వస్తువు ఎవరిదో. whose తర్వాత వెంటనే ఆ వస్తువు వస్తుంది: Whose bag is this?",
      },
      bridge: {
        te: ["ఇది", "ఎవరి", "బ్యాగ్?"],
        en: [
          { text: "Whose bag", role: "who" },
          { text: "is", role: "action" },
          { text: "this?", role: "what" },
        ],
      },
      examples: [
        { en: "Who is that man?", te: "ఆ ఆయన ఎవరు?" },
        { en: "Whose bag is this?", te: "ఇది ఎవరి బ్యాగ్?" },
        { en: "Whose phone is ringing?", te: "ఎవరి ఫోన్ మోగుతోంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who or whose?", te: "who ఆ, whose ఆ?" },
      items: [
        {
          form: "who",
          useFor: { en: "Use who to ask about a person.", te: "ఒక మనిషి ఎవరో అడగడానికి who." },
          example: { en: "Who is your doctor?", te: "మీ డాక్టర్ ఎవరు?" },
        },
        {
          form: "whose + thing",
          useFor: { en: "Use whose to ask who owns a thing.", te: "ఒక వస్తువు ఎవరిదో అడగడానికి whose." },
          example: { en: "Whose bag is this?", te: "ఇది ఎవరి బ్యాగ్?" },
        },
        {
          form: "who + action",
          useFor: {
            en: "When who did the action, put the action right after who. No do or did.",
            te: "పని ఎవరు చేశారో అడిగితే who తర్వాత వెంటనే verb వస్తుంది. do, did రావు.",
          },
          example: { en: "Who made this sweet?", te: "ఈ స్వీట్ ఎవరు చేశారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Who is this bag?",
      right: "Whose bag is this?",
      why: {
        en: "Who is for a person. For the owner, say whose, then the thing: Whose bag is this?",
        te: "who మనిషి కోసం. వస్తువు ఎవరిదో అడగాలంటే whose, తర్వాత ఆ వస్తువు: Whose bag is this?",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Who did make this sweet?",
      right: "Who made this sweet?",
      why: {
        en: "When who is the doer, do not add did. Say the past action: made.",
        te: "పని చేసింది ఎవరో అడిగితే did పెట్టకండి. verb ని past లో చెప్పండి: made.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "You find a phone on a chair. What do you ask?", te: "కుర్చీ మీద ఒక ఫోన్ ఉంది. ఏమని అడుగుతారు?" },
      options: ["Who phone is this?", "Whose phone is this?", "This phone is whose?"],
      answer: 1,
      why: {
        en: "Whose, then the thing: Whose phone is this?",
        te: "ముందు whose, తర్వాత వస్తువు: Whose phone is this?",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ is that woman?",
      te: "ఆ ఆవిడ ఎవరు?",
      options: ["Who", "Whose", "What"],
      answer: 0,
      why: {
        en: "To ask about a person, use who: Who is that woman?",
        te: "ఒక మనిషి గురించి అడగడానికి who: Who is that woman?",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct question.", te: "సరైన ప్రశ్నను ఎంచుకోండి." },
      options: ["Who did cook this?", "Who cooked this?", "Who cook this?"],
      answer: 1,
      why: {
        en: "Who is the doer, so no did: Who cooked this?",
        te: "పని చేసింది ఎవరో అడుగుతున్నాం, కాబట్టి did ఉండదు: Who cooked this?",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Who umbrella is this?",
      wrongIndex: 0,
      fix: "Whose umbrella is this?",
      why: {
        en: "To ask who owns the umbrella, say whose: Whose umbrella is this?",
        te: "గొడుగు ఎవరిదో అడగాలంటే whose అనాలి: Whose umbrella is this?",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Someone asks about Rahim: Who is he? Rahim lives next door. Answer.",
        te: "రహీమ్ గారి గురించి ఒకరు అడుగుతున్నారు: Who is he? రహీమ్ గారు మీ పక్కింట్లో ఉంటారు. జవాబు చెప్పండి.",
      },
      expected: ["He is my neighbour.", "He is Rahim.", "He is my neighbour Rahim."],
      options: ["He my neighbour.", "He is my neighbour.", "His is my neighbour."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You see a bag on a bus seat. Ask whose bag it is.",
        te: "బస్ సీటు మీద ఒక బ్యాగ్ ఉంది. అది ఎవరిదో అడగండి.",
      },
      expected: ["Whose bag is this?"],
      options: ["Who bag is this?", "Whose bag is this?", "Whose this bag?"],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Who is that?", te: "ఆయన ఎవరు?" },
    scene: {
      en: "At a function, you sit next to Kamala. Ask her about the people and things around you.",
      te: "ఒక ఫంక్షన్‌లో మీరు కమల పక్కన కూర్చున్నారు. చుట్టూ ఉన్న మనుషులు, వస్తువుల గురించి అడగండి.",
    },
    partner: { en: "Kamala (a guest)", te: "కమల (అతిథి)" },
    skills: [
      { id: "who", label: { en: "who", te: "who వాడకం" } },
      { id: "whose", label: { en: "whose", te: "whose వాడకం" } },
    ],
    turns: [
      {
        partner: "This function is very nice!",
        te: "ఈ ఫంక్షన్ చాలా బాగుంది!",
        hint: { en: "Agree, then ask about a man near you.", te: "అవునని చెప్పి, దగ్గర్లో ఉన్న ఒకాయన ఎవరని అడగండి." },
        replies: [
          { say: "Yes. Who is that man?", good: true, skill: "who" },
          { say: "Yes. That man is who?", good: false, skill: "who" },
          {
            say: "No, the food is bad.",
            good: false,
            react: { en: "Oh! Please don't say that so loudly.", te: "అయ్యో! అలా గట్టిగా అనకండి." },
          },
        ],
      },
      {
        partner: "He is Prasad, my brother.",
        te: "ఆయన ప్రసాద్, మా అన్నయ్య.",
        hint: { en: "Ask about his work.", te: "ఆయన ఏం పని చేస్తారో అడగండి." },
        replies: [
          { say: "What does he do?", good: true, skill: "who" },
          { say: "What he does?", good: false, skill: "who" },
        ],
      },
      {
        partner: "He is a doctor in Vijayawada.",
        te: "ఆయన విజయవాడలో డాక్టర్.",
        hint: { en: "You see a bag on a chair. Ask who owns it.", te: "కుర్చీ మీద ఒక బ్యాగ్ కనిపించింది. అది ఎవరిదో అడగండి." },
        replies: [
          { say: "Whose bag is this?", good: true, skill: "whose" },
          { say: "Who bag is this?", good: false, skill: "whose" },
          { say: "Whose this bag is?", good: false, skill: "whose" },
        ],
      },
      {
        partner: "Oh, it is my bag. Thank you!",
        te: "అయ్యో, అది నా బ్యాగే. థాంక్యూ!",
        hint: { en: "Answer her thanks politely.", te: "ఆవిడ thank you కి మర్యాదగా జవాబు చెప్పండి." },
        replies: [
          { say: "You are welcome.", good: true },
          { say: "You welcome.", good: false },
        ],
      },
    ],
  },
};

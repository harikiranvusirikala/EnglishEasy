import type { Lesson } from "../../types";

/** Week 33, Day 2 (CURRICULUM §4): offers — Shall I …? Can I help …? — and saying yes or no to them. */
export const day: Lesson = {
  id: "shall-i-carry-that",
  kind: "lesson",
  title: { en: "Shall I Carry That?", te: "మోయనా?" },
  subtitle: "Shall I …? / Can I help …?",
  summary: {
    en: "Learn to offer help kindly: Shall I carry that for you? Can I help you with the bags?",
    te: "ఆప్యాయంగా సాయం చేస్తాననడం నేర్చుకుందాం: Shall I carry that for you? Can I help you with the bags?",
  },
  seo: {
    title: "Offering Help in English for Telugu Speakers",
    description:
      "Say Shall I carry that for you? and Can I help you with the bags? Simple lessons for Telugu speakers on offering help to neighbours.",
  },
  pattern: [
    { text: "Shall", role: "action" },
    { text: "I", role: "who" },
    { text: "carry", role: "action" },
    { text: "that for you?", role: "what" },
  ],
  core: [
    { en: "Shall I carry that for you?", te: "అది నేను మోయనా?", extra: ["Will"] },
    { en: "Can I help you with the bags?", te: "సంచులు మోయడంలో సాయం చేయనా?", extra: ["in"] },
    { en: "Shall I call an auto for you?", te: "మీ కోసం ఒక ఆటో పిలవనా?", extra: ["a"] },
    { en: "Can I give you a hand?", te: "కొంచెం సాయం చేయనా?", extra: ["help"] },
    { en: "These groceries are heavy. Let me help.", te: "ఈ సరుకులు బరువుగా ఉన్నాయి. నేను సాయం చేస్తాను.", extra: ["is"] },
    { en: "Thank you. That would be a big help.", te: "థాంక్యూ. చాలా సాయంగా ఉంటుంది.", extra: ["will"] },
    { en: "No, thank you. I can manage.", te: "వద్దు, థాంక్యూ. నేను చూసుకోగలను.", extra: ["managing"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Offer to help someone today with Shall I …? or Can I help …?",
    te: "ఈ రోజు Shall I …? లేదా Can I help …? తో ఎవరికైనా సాయం చేస్తానని అడగండి.",
  },
  words: [
    { en: "shall", te: "…నా? (చేయనా?)" },
    { en: "heavy", te: "బరువైన" },
    { en: "groceries", te: "సరుకులు" },
    { en: "give a hand", te: "సాయం చేయడం" },
    { en: "manage", te: "చేసుకోగలగడం" },
  ],
  grammar: ["can-could", "politeness-softening", "will"],
  topics: ["neighbours", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Offering help", te: "సాయం చేస్తాననడం" },
      body: {
        en: "To offer help, say Shall I …? or Can I help …? Telugu మోయనా? or పిలవనా? becomes Shall I carry …? or Shall I call …? After shall, the verb stays plain.",
        te: "సాయం చేస్తానని అడగడానికి Shall I …? లేదా Can I help …? అనండి. 'మోయనా?', 'పిలవనా?' అంటే Shall I carry …?, Shall I call …?",
      },
      bridge: {
        te: ["అది", "నేను", "మోయనా?"],
        en: [
          { text: "Shall", role: "action" },
          { text: "I", role: "who" },
          { text: "carry", role: "action" },
          { text: "that for you?", role: "what" },
        ],
      },
      examples: [
        { en: "Shall I carry that for you?", te: "అది నేను మోయనా?" },
        { en: "Can I help you with the bags?", te: "సంచులు మోయడంలో సాయం చేయనా?" },
        { en: "Shall I call an auto for you?", te: "మీ కోసం ఒక ఆటో పిలవనా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Offering and answering", te: "సాయం అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Shall I …?",
          useFor: { en: "Offering to do one thing.", te: "ఒక పని చేయనా అని అడగడానికి." },
          example: { en: "Shall I bring you some water?", te: "మీకు కొంచెం నీళ్ళు తీసుకురానా?" },
        },
        {
          form: "Can I help you with …?",
          useFor: { en: "Offering help with a job.", te: "ఒక పనిలో సాయం చేయనా అని అడగడానికి." },
          example: { en: "Can I help you with the bags?", te: "సంచులు మోయడంలో సాయం చేయనా?" },
        },
        {
          form: "That would be a big help.",
          useFor: { en: "Saying yes to an offer, with thanks.", te: "సాయానికి ఒప్పుకుంటూ థాంక్స్ చెప్పడం." },
          example: { en: "Thank you. That would be a big help.", te: "థాంక్యూ. చాలా సాయంగా ఉంటుంది." },
        },
        {
          form: "No, thank you. I can manage.",
          useFor: { en: "Saying no to an offer, kindly.", te: "సాయం వద్దని మర్యాదగా చెప్పడం." },
          example: { en: "No, thank you. I can manage.", te: "వద్దు, థాంక్యూ. నేను చూసుకోగలను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Will I carry that for you?",
      right: "Shall I carry that for you?",
      why: {
        en: "Telugu మోయనా? is an offer, and an offer with I takes shall, not will.",
        te: "'మోయనా?' అనేది సాయం చేస్తాననే మాట; I తో అలా అడగాలంటే will కాదు, shall వాడాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Shall I call auto for you?",
      right: "Shall I call an auto for you?",
      why: {
        en: "Telugu has no a or an, but English needs an before one auto.",
        te: "తెలుగులో a / an ఉండవు, కానీ ఇంగ్లీష్‌లో ఒక ఆటో అంటే an auto అనాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "An elderly neighbour has two heavy bags. Offer to carry them.",
        te: "పెద్దవయసు పక్కింటాయన దగ్గర రెండు బరువైన సంచులు ఉన్నాయి. మీరు మోస్తానని అడగండి.",
      },
      options: ["Shall I carry them for you?", "Shall I to carry them for you?", "Can you carry them for me?"],
      answer: 0,
      why: {
        en: "Shall I offers your help, and the verb after it comes with no to.",
        te: "Shall I అంటే మీరు సాయం చేస్తాననడం; దాని తర్వాత to లేకుండా verb వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Our neighbour Narayana ___ alone upstairs.",
      te: "మా పక్కింటి నారాయణ గారు పైన ఒక్కరే ఉంటారు.",
      options: ["lives", "live", "living"],
      answer: 0,
      why: {
        en: "One person takes s on the verb; Telugu ఉంటారు is plural only for respect.",
        te: "ఒక్క మనిషి అయితే verb కి s వస్తుంది; తెలుగులో 'ఉంటారు' గౌరవం కోసమే, ఎక్కువమంది అని కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "You offer to help. Your neighbour says: No, thank you. I can manage. What does she mean?",
        te: "మీరు సాయం చేస్తానన్నారు. పక్కింటావిడ No, thank you. I can manage అన్నారు. అర్థం ఏంటి?",
      },
      options: ["She can do it herself.", "She wants you to call the manager.", "She is angry with you."],
      answer: 0,
      why: {
        en: "I can manage means I can do it myself; it is a kind no.",
        te: "I can manage అంటే నేనే చేసుకోగలను అని; ఇది మర్యాదగా వద్దనడం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "Can I help you in the bags?",
      wrongIndex: 4,
      fix: "Can I help you with the bags?",
      why: {
        en: "In English you help someone with a job; Telugu లో makes people say in.",
        te: "ఇంగ్లీష్‌లో help someone with something అంటారు; తెలుగులోని 'లో' వల్ల in అనేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A neighbour is waiting with heavy bags. Offer to call an auto.",
        te: "పక్కింటావిడ బరువైన సంచులతో ఎదురుచూస్తున్నారు. ఆటో పిలవనా అని అడగండి.",
      },
      expected: ["Shall I call an auto for you?", "Shall I call an auto?", "Can I call an auto for you?"],
      options: ["Shall I call an auto for you?", "Shall I call auto for you?", "Will you call an auto for me?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend offers to carry your bag. Say yes, and thank him.",
        te: "మీ స్నేహితుడు మీ సంచి మోస్తానన్నారు. సరే అని, థాంక్స్ చెప్పండి.",
      },
      expected: ["Thank you. That would be a big help.", "Thank you, that would be a big help.", "Yes, please. Thank you."],
      options: ["Thank you. That would be a big help.", "Okay, take it. Carry it carefully.", "Thanks you. That would be a big help."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Heavy bags", te: "బరువైన సంచులు" },
    scene: {
      en: "Narayana, your elderly neighbour, is coming back from the market with two heavy bags.",
      te: "పెద్దవయసు పక్కింటి నారాయణ గారు రెండు బరువైన సంచులతో మార్కెట్ నుండి వస్తున్నారు.",
    },
    partner: { en: "Narayana (elderly neighbour)", te: "నారాయణ (పెద్దవయసు పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "offer", label: { en: "Offering help", te: "సాయం చేస్తాననడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh, these bags are so heavy today!",
        te: "అయ్యో, ఈ రోజు సంచులు చాలా బరువుగా ఉన్నాయి!",
        hint: { en: "Offer to carry them for him.", te: "మీరు మోస్తానని ఆయనని అడగండి." },
        replies: [
          { say: "Shall I carry them for you?", good: true, skill: "offer" },
          { say: "Can I help you with the bags?", good: true, skill: "offer" },
          {
            say: "Why do you buy so much at your age?",
            good: false,
            skill: "polite",
            react: { en: "My age? I can still shop, thank you!", te: "నా వయసా? ఇంకా షాపింగ్ చేయగలను లెండి!" },
          },
        ],
      },
      {
        partner: "Oh, thank you! That would be a big help.",
        te: "అయ్యో, థాంక్యూ! చాలా సాయంగా ఉంటుంది.",
        hint: { en: "Ask which floor he lives on.", te: "ఆయన ఏ అంతస్తులో ఉంటారో అడగండి." },
        replies: [
          { say: "Which floor do you live on?", good: true, skill: "polite" },
          { say: "Which floor you are living?", good: false, skill: "polite", fixIt: "question" },
        ],
      },
      {
        partner: "Third floor. And the lift is not working.",
        te: "మూడో అంతస్తు. పైగా లిఫ్ట్ పని చేయట్లేదు.",
        hint: { en: "Say it is no problem, and offer to take them up.", te: "పర్లేదని చెప్పి, సంచులు పైకి తీసుకెళ్ళనా అని అడగండి." },
        replies: [
          { say: "No problem. Shall I take them up for you?", good: true, skill: "offer" },
          { say: "No problem. I'll taking them up.", good: false, skill: "offer" },
        ],
      },
      {
        partner: "Here we are. You are very kind. Thank you!",
        te: "వచ్చేశాం. మీరు చాలా మంచివారు. థాంక్యూ!",
        hint: { en: "Say it was nothing, and offer help any time.", te: "అది పెద్ద విషయం కాదని, ఎప్పుడు కావాలన్నా సాయం చేస్తానని చెప్పండి." },
        replies: [
          { say: "You're welcome. Call me any time you need help.", good: true, skill: "polite" },
          { say: "Welcome, welcome. Call me any time.", good: false, skill: "polite", fixIt: "indian-english" },
        ],
      },
    ],
  },
};

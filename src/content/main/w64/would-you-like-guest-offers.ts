import type { Lesson } from "../../types";

/** Week 64, Day 1 (CURRICULUM §5): offers — Would you like …? Can I get you …? and the replies Yes, please / No, thank you. */
export const day: Lesson = {
  id: "would-you-like-guest-offers",
  kind: "lesson",
  title: { en: "Would You Like Some Coffee?", te: "కాఫీ తాగుతారా?" },
  subtitle: "Would you like …? / Can I get you …?",
  summary: {
    en: "Learn to offer a guest something kindly, and to answer offers: Would you like some filter coffee? Yes, please.",
    te: "ఇంటికి వచ్చిన అతిథికి ఆప్యాయంగా ఏదైనా ఇవ్వడం, ఎవరైనా ఇస్తే జవాబు చెప్పడం నేర్చుకుందాం: Would you like some filter coffee? Yes, please.",
  },
  seo: {
    title: "Offering Guests Food and Drinks in English for Telugu Speakers",
    description:
      "Say Would you like some filter coffee? and Can I get you some water? Simple lessons for Telugu speakers on offering things to guests.",
  },
  pattern: [
    { text: "Would you", role: "who" },
    { text: "like", role: "action" },
    { text: "some filter coffee?", role: "what" },
  ],
  core: [
    { en: "Would you like some filter coffee?", te: "ఫిల్టర్ కాఫీ తాగుతారా?", extra: ["Do"] },
    { en: "Can I get you some water first?", te: "ముందు కొంచెం మంచినీళ్ళు తెమ్మంటారా?", extra: ["give"] },
    { en: "No, thank you. I'm fine.", te: "వద్దండి, థ్యాంక్స్. నాకేం అక్కర్లేదు.", extra: ["not"] },
    { en: "Yes, please. With less sugar.", te: "అలాగే, ఇవ్వండి. చక్కెర తక్కువగా.", extra: ["sugars"] },
    { en: "What would you like, tea or coffee?", te: "మీకు ఏం కావాలి, టీ నా కాఫీ నా?", extra: ["will"] },
    { en: "Can I get you something to eat?", te: "తినడానికి ఏమైనా తెమ్మంటారా?", extra: ["eating"] },
    { en: "Would you like to sit near the fan?", te: "ఫ్యాన్ దగ్గర కూర్చుంటారా?", extra: ["sitting"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When a neighbour or visitor comes today, offer them something with Would you like …?",
    te: "ఈ రోజు పక్కింటివారు గానీ ఎవరైనా గానీ వస్తే, Would you like …? అని ఏదైనా ఇవ్వండి.",
  },
  words: [
    { en: "guest", te: "అతిథి, ఇంటికి వచ్చినవారు" },
    { en: "welcome", te: "స్వాగతం, రండి" },
    { en: "Can I get you", te: "… తెమ్మంటారా?" },
    { en: "Yes, please", te: "అలాగే, ఇవ్వండి" },
    { en: "No, thank you", te: "వద్దండి, థ్యాంక్స్" },
  ],
  grammar: ["would-like", "can-could", "politeness-softening"],
  topics: ["home", "food", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Offering a guest", te: "అతిథికి ఇవ్వడం" },
      body: {
        en: "To offer a guest something, ask Would you like …? or Can I get you …? The guest says Yes, please or No, thank you.",
        te: "అతిథికి ఏదైనా ఇవ్వాలంటే Would you like …? లేదా Can I get you …? అని అడగండి. వచ్చినవారు Yes, please లేదా No, thank you అంటారు.",
      },
      bridge: {
        te: ["ఫిల్టర్ కాఫీ", "తాగుతారా?"],
        en: [
          { text: "Would you", role: "who" },
          { text: "like", role: "action" },
          { text: "some filter coffee?", role: "what" },
        ],
      },
      examples: [
        { en: "Would you like some filter coffee?", te: "ఫిల్టర్ కాఫీ తాగుతారా?" },
        { en: "Can I get you some water first?", te: "ముందు కొంచెం మంచినీళ్ళు తెమ్మంటారా?" },
        { en: "No, thank you. I'm fine.", te: "వద్దండి, థ్యాంక్స్. నాకేం అక్కర్లేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Offers and replies", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "Would you like …?",
          useFor: { en: "Offer something, very politely.", te: "చాలా మర్యాదగా ఏదైనా ఇవ్వడానికి." },
          example: { en: "Would you like to sit near the fan?", te: "ఫ్యాన్ దగ్గర కూర్చుంటారా?" },
        },
        {
          form: "Can I get you …?",
          useFor: { en: "Offer to bring something.", te: "ఏదైనా తెచ్చి ఇస్తానని అడగడానికి." },
          example: { en: "Can I get you something to eat?", te: "తినడానికి ఏమైనా తెమ్మంటారా?" },
        },
        {
          form: "Yes, please.",
          useFor: { en: "Say yes to an offer.", te: "ఇస్తామంటే సరే అనడానికి." },
          example: { en: "Yes, please. With less sugar.", te: "అలాగే, ఇవ్వండి. చక్కెర తక్కువగా." },
        },
        {
          form: "No, thank you.",
          useFor: { en: "Say no to an offer, kindly.", te: "వద్దని మర్యాదగా చెప్పడానికి." },
          example: { en: "No, thank you. I'm fine.", te: "వద్దండి, థ్యాంక్స్. నాకేం అక్కర్లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you will take, tea or coffee?",
      right: "What would you like, tea or coffee?",
      why: {
        en: "In a question, would comes before you; Telugu keeps the verb at the end.",
        te: "ప్రశ్నలో would, you కంటే ముందు వస్తుంది; తెలుగులో verb చివర ఉంటుంది కాబట్టి ఈ తప్పు వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Yes, I would like.",
      right: "Yes, please. I'd like some.",
      why: {
        en: "Would like needs a thing after it, so you cannot stop at like.",
        te: "would like తర్వాత ఏం కావాలో చెప్పాలి; like దగ్గర ఆపేయకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "You are a guest. Your host asks: Don't you take sugar in your coffee? You never take sugar. What do you say?",
        te: "మీరు అతిథిగా వెళ్ళారు. Don't you take sugar in your coffee? అని అడిగారు. మీరు ఎప్పుడూ చక్కెర వేసుకోరు. ఏమంటారు?",
      },
      options: ["No, I don't. Thank you.", "Yes, I don't. Thank you.", "No, I am not. Thank you."],
      answer: 0,
      why: {
        en: "You don't take sugar, so start with No, even when Telugu starts with అవును.",
        te: "మీరు చక్కెర వేసుకోరు కాబట్టి No తో మొదలుపెట్టాలి; తెలుగులోలా 'అవును' అంటే అర్థం తిరగబడుతుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___ I get you some water first?",
      te: "ముందు కొంచెం మంచినీళ్ళు తెమ్మంటారా?",
      options: ["Can", "Do", "Am"],
      answer: 0,
      why: {
        en: "To offer to bring something, start with Can I get you; Do I is not an offer.",
        te: "ఏదైనా తెస్తానని అడగాలంటే Can I get you తో మొదలుపెట్టాలి; Do I అంటే అది ఇవ్వజూపడం కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "You offer your guest some filter coffee, but she doesn't want any. What should she say?",
        te: "మీరు అతిథికి ఫిల్టర్ కాఫీ ఇస్తామన్నారు, కానీ ఆవిడకి వద్దు. ఆవిడ ఏమనాలి?",
      },
      options: ["No, thank you. I'm fine.", "No, I don't like.", "No, I am not wanting."],
      answer: 0,
      why: {
        en: "No, thank you is the kind way to say no; I don't like sounds rude.",
        te: "No, thank you అంటే మర్యాదగా ఉంటుంది; I don't like అంటే మొరటుగా, I am not wanting తప్పుగా వినిపిస్తాయి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Would you like cup of tea?",
      wrongIndex: 3,
      fix: "Would you like a cup of tea?",
      why: {
        en: "One cup needs a before it; Telugu has no word like a, so we drop it.",
        te: "ఒక్క కప్పు అంటే ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు కాబట్టి వదిలేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A neighbour drops in on a hot afternoon. Offer her some water first.",
        te: "ఎండగా ఉన్న మధ్యాహ్నం పక్కింటావిడ వచ్చారు. ముందు మంచినీళ్ళు తెమ్మంటారా అని అడగండి.",
      },
      expected: ["Can I get you some water first?", "Would you like some water?", "Would you like a glass of water?"],
      options: ["Can I get you some water first?", "You want water?", "Can I get you some waters first?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your cousin's friend is visiting from Kerala. Ask what she would like: tea or coffee.",
        te: "మీ కజిన్ స్నేహితురాలు కేరళ నుంచి వచ్చారు. టీ కావాలా, కాఫీ కావాలా అని అడగండి.",
      },
      expected: ["What would you like, tea or coffee?", "Would you like tea or coffee?", "Tea or coffee?"],
      options: ["What would you like, tea or coffee?", "What you would like, tea or coffee?", "What will you like, tea or coffee?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A guest from Kerala", te: "కేరళ నుంచి అతిథి" },
    scene: {
      en: "Your cousin's friend Grace is visiting Vijayawada from Kochi. She comes to your home for the first time.",
      te: "మీ కజిన్ స్నేహితురాలు గ్రేస్ గారు కొచ్చి నుంచి విజయవాడ వచ్చారు. మొదటిసారి మీ ఇంటికి వచ్చారు.",
    },
    partner: { en: "Grace (your cousin's friend)", te: "గ్రేస్ (మీ కజిన్ స్నేహితురాలు)" },
    skills: [
      { id: "offer", label: { en: "Offering", te: "ఇవ్వజూపడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm Grace. Your cousin gave me your address.",
        te: "హలో! నేను గ్రేస్. మీ కజిన్ మీ అడ్రస్ ఇచ్చారు.",
        hint: { en: "Welcome her, and ask her to come in.", te: "ఆవిడకి స్వాగతం చెప్పి, లోపలికి రమ్మనండి." },
        replies: [
          { say: "Welcome, Grace! Please come in and sit down.", good: true, skill: "polite" },
          {
            say: "Oh, it's you. Okay, come.",
            good: false,
            skill: "polite",
            react: { en: "Oh! Is this a bad time? I can come later.", te: "ఓ! ఇప్పుడు కుదరదా? తర్వాత వస్తాను." },
          },
        ],
      },
      {
        partner: "Thank you. It's very hot outside today!",
        te: "థ్యాంక్స్. ఈ రోజు బయట చాలా ఎండగా ఉంది!",
        hint: { en: "Offer to bring her some water first.", te: "ముందు మంచినీళ్ళు తెమ్మంటారా అని అడగండి." },
        replies: [
          { say: "Can I get you some water first?", good: true, skill: "offer" },
          { say: "Would you like some cold water?", good: true, skill: "offer" },
          { say: "Can I get you some waters first?", good: false, skill: "offer", fixIt: "plural" },
        ],
      },
      {
        partner: "Yes, please. That's very kind of you.",
        te: "అలాగే, ఇవ్వండి. మీరు చాలా మంచివారు.",
        hint: { en: "Offer her some filter coffee too.", te: "ఫిల్టర్ కాఫీ కూడా తాగుతారా అని అడగండి." },
        replies: [
          { say: "Would you like some filter coffee too?", good: true, skill: "offer" },
          { say: "You want filter coffee also?", good: false, skill: "offer", fixIt: "question" },
        ],
      },
      {
        partner: "I'd love some! Just a little sugar, please.",
        te: "తప్పకుండా! చక్కెర కొంచెమే వేయండి.",
        hint: { en: "Say you will bring it soon, and ask her to relax.", te: "కాసేపట్లో తెస్తానని చెప్పి, హాయిగా కూర్చోమనండి." },
        replies: [
          { say: "Sure. I'll bring it in two minutes. Please relax.", good: true, skill: "polite" },
          { say: "Sure. I'll bringing it in two minutes. Please relax.", good: false, skill: "offer" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 56, Day 4 (CURRICULUM §5): questions in the passive — Are these sarees woven by hand? Where is this pickle made? */
export const day: Lesson = {
  id: "are-these-handwoven-questions",
  kind: "lesson",
  title: { en: "Are These Woven by Hand?", te: "ఇవి చేనేతవేనా?" },
  subtitle: "Is it made …? Where is it made?",
  summary: {
    en: "Learn to ask how and where things are made: Are these sarees woven by hand? Where is this pickle made?",
    te: "వస్తువులు ఎలా, ఎక్కడ తయారవుతాయో అడగడం నేర్చుకుందాం: Are these sarees woven by hand? Where is this pickle made?",
  },
  seo: {
    title: "Asking About Handloom and Local Products in English for Telugu Speakers",
    description:
      "Ask Are these sarees woven by hand? and Where is this pickle made? Simple lessons for Telugu speakers on questions at shops and stalls.",
  },
  pattern: [
    { text: "Are", role: "action" },
    { text: "these sarees", role: "who" },
    { text: "woven", role: "action" },
    { text: "by hand?", role: "what" },
  ],
  core: [
    { en: "Are these sarees woven by hand?", te: "ఈ చీరలు చేతితో నేసినవేనా?", extra: ["Is"] },
    { en: "Where is this pickle made?", te: "ఈ పచ్చడి ఎక్కడ తయారు చేస్తారు?", extra: ["does"] },
    { en: "Are they sold in shops too?", te: "ఇవి షాపుల్లో కూడా అమ్ముతారా?", extra: ["Do"] },
    { en: "Is it made at home?", te: "ఇది ఇంట్లో చేసిందేనా?", extra: ["in"] },
    { en: "These are woven in Pochampally, near Hyderabad.", te: "ఇవి హైదరాబాద్ దగ్గర పోచంపల్లిలో నేస్తారు.", extra: ["weave"] },
    { en: "Is this woven by hand or on a power loom?", te: "ఇది చేతితో నేసిందా, పవర్ లూమ్ మీదా?", extra: ["weaved"] },
    { en: "How long does it take to weave one saree?", te: "ఒక చీర నేయడానికి ఎంత టైమ్ పడుతుంది?", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a shop today, ask about one thing: Where is this made?",
    te: "ఈ రోజు ఏదైనా షాపులో ఒక వస్తువు గురించి అడగండి: Where is this made?",
  },
  words: [
    { en: "woven", te: "నేసిన" },
    { en: "by hand", te: "చేతితో" },
    { en: "weaver", te: "నేసేవారు, నేత కార్మికులు" },
    { en: "power loom", te: "పవర్ లూమ్, మెషిన్ మగ్గం" },
    { en: "pure", te: "స్వచ్ఛమైన, అసలైన" },
  ],
  grammar: ["passive-voice", "yes-no-questions", "question-words"],
  topics: ["shopping", "market"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking how it is made", te: "ఎలా తయారవుతుందో అడగడం" },
      body: {
        en: "To ask, put is or are first: Are these sarees woven by hand? With where or how, that word comes first: Where is this pickle made?",
        te: "అడగాలంటే is లేదా are ముందు పెట్టండి: Are these sarees woven by hand? where, how ఉంటే అవి మొదట వస్తాయి: Where is this pickle made?",
      },
      bridge: {
        te: ["ఈ చీరలు", "చేతితో", "నేసినవేనా?"],
        en: [
          { text: "Are", role: "action" },
          { text: "these sarees", role: "who" },
          { text: "woven", role: "action" },
          { text: "by hand?", role: "what" },
        ],
      },
      examples: [
        { en: "Are these sarees woven by hand?", te: "ఈ చీరలు చేతితో నేసినవేనా?" },
        { en: "Where is this pickle made?", te: "ఈ పచ్చడి ఎక్కడ తయారు చేస్తారు?" },
        { en: "Are they sold in shops too?", te: "ఇవి షాపుల్లో కూడా అమ్ముతారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Questions at a stall", te: "స్టాల్ దగ్గర ప్రశ్నలు" },
      items: [
        {
          form: "Is it …?",
          useFor: { en: "One thing: a saree, a bottle, a box.", te: "ఒక్క వస్తువుకి: చీర, సీసా, డబ్బా." },
          example: { en: "Is it made at home?", te: "ఇది ఇంట్లో చేసిందేనా?" },
        },
        {
          form: "Are they …?",
          useFor: { en: "Many things: sarees, toys, bangles.", te: "చాలా వస్తువులకి: చీరలు, బొమ్మలు, గాజులు." },
          example: { en: "Are they sold in shops too?", te: "ఇవి షాపుల్లో కూడా అమ్ముతారా?" },
        },
        {
          form: "Where is … made?",
          useFor: { en: "Ask the place.", te: "ఎక్కడో అడగడానికి." },
          example: { en: "Where are these bangles made?", te: "ఈ గాజులు ఎక్కడ తయారవుతాయి?" },
        },
        {
          form: "by hand / on a power loom",
          useFor: { en: "Ask how: by a person or by a machine.", te: "ఎలా చేశారో: మనిషి చేత్తోనా, మెషిన్ మీదా." },
          example: { en: "Is this woven by hand or on a power loom?", te: "ఇది చేతితో నేసిందా, పవర్ లూమ్ మీదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Where this pickle is made?",
      right: "Where is this pickle made?",
      why: {
        en: "In a question, is comes before the thing, not after it as in Telugu.",
        te: "ప్రశ్నలో is వస్తువు పేరు కంటే ముందు రావాలి; తెలుగు వరుసలో లాగా వెనక పెట్టకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Usha weave sarees at home.",
      right: "Usha weaves sarees at home.",
      why: {
        en: "One person, like she, takes s on the verb: weave becomes weaves.",
        te: "ఒక్కరి గురించి చెప్తే, she లాగా, verb కి s వస్తుంది: weave కాస్తా weaves.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "At a stall, you like a saree. Ask if it is woven by hand.",
        te: "ఒక స్టాల్‌లో మీకు ఒక చీర నచ్చింది. అది చేతితో నేసిందా అని అడగండి.",
      },
      options: ["Is this saree woven by hand?", "Does this saree woven by hand?", "Is this saree weave by hand?"],
      answer: 0,
      why: {
        en: "Ask with is and the done form woven; does never goes with woven.",
        te: "is తో అడిగి, పూర్తయిన రూపం woven వాడాలి; woven తో does రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Our neighbour Sita ___ cotton sarees on a handloom.",
      te: "మా పక్కింటి సీత గారు చేనేత మగ్గం మీద కాటన్ చీరలు నేస్తారు.",
      options: ["weaves", "weave", "weaving"],
      answer: 0,
      why: {
        en: "One person's habit, like she, needs s on the verb.",
        te: "ఒక్కరి అలవాటు గురించి చెప్తే, she లాగా, verb కి s కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: { en: "Ask the seller where these bangles are made.", te: "ఈ గాజులు ఎక్కడ తయారవుతాయో అమ్మేవారిని అడగండి." },
      options: ["Where are these bangles made?", "Where is these bangles made?", "Where are these bangle made?"],
      answer: 0,
      why: {
        en: "These bangles are many, so the question takes are, and bangle takes s.",
        te: "ఈ గాజులు చాలా కాబట్టి are; bangle కి s కూడా కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Are these sarees weaved by hand?",
      wrongIndex: 3,
      fix: "Are these sarees woven by hand?",
      why: {
        en: "For cloth, weave has a special done form, woven, like speak and spoken.",
        te: "బట్ట నేయడానికి weave కి ప్రత్యేకమైన పూర్తయిన రూపం woven: speak, spoken లాగా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At a food stall, you like a mango pickle. Ask where it is made.",
        te: "ఒక ఫుడ్ స్టాల్‌లో మీకు మామిడి పచ్చడి నచ్చింది. అది ఎక్కడ తయారు చేస్తారో అడగండి.",
      },
      expected: ["Where is this pickle made?", "Where is it made?", "Excuse me, where is this pickle made?"],
      options: ["Where is this pickle made?", "Where this pickle is made?", "Where does this pickle made?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You like the wooden toys at a fair. Ask the seller if they are sold in Hyderabad too.",
        te: "ఒక మేళాలో చెక్క బొమ్మలు మీకు నచ్చాయి. ఇవి హైదరాబాద్‌లో కూడా అమ్ముతారా అని అమ్మేవారిని అడగండి.",
      },
      expected: ["Are these sold in Hyderabad too?", "Are these toys sold in Hyderabad too?", "Are they sold in Hyderabad too?"],
      options: ["Are these toys sold in Hyderabad too?", "Are these toys sell in Hyderabad too?", "Do these toys sold in Hyderabad too?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At a handloom stall", te: "చేనేత స్టాల్ దగ్గర" },
    scene: {
      en: "At a crafts fair in Warangal, you stop at Satish's handloom stall. You want a cotton saree as a gift for a friend.",
      te: "వరంగల్‌లో ఒక చేతివృత్తుల మేళాలో సతీష్ గారి చేనేత స్టాల్ దగ్గర ఆగారు. ఒక స్నేహితురాలికి గిఫ్ట్‌గా కాటన్ చీర కావాలి.",
    },
    partner: { en: "Satish (weaver and seller)", te: "సతీష్ (నేసేవారు, అమ్మేవారు)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking how it is made", te: "ఎలా చేశారో అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Namaste! Please come and see. All these sarees are from our village.",
        te: "నమస్తే! రండి, చూడండి. ఈ చీరలన్నీ మా ఊరివే.",
        hint: { en: "Greet him, and ask if they are made by hand.", te: "నమస్తే చెప్పి, ఇవి చేతితో నేసినవా అని అడగండి." },
        replies: [
          { say: "Namaste! Are these sarees woven by hand?", good: true, skill: "ask" },
          { say: "Namaste! These sarees woven by hand?", good: false, skill: "ask", fixIt: "be" },
        ],
      },
      {
        partner: "Yes. My brother and I weave them on handlooms at home.",
        te: "అవునండీ. నేను, మా అన్నయ్య ఇంట్లో మగ్గాల మీద నేస్తాం.",
        hint: { en: "Say they are lovely, and ask how long one saree takes.", te: "చాలా బాగున్నాయని చెప్పి, ఒక చీరకి ఎంత టైమ్ పడుతుందో అడగండి." },
        replies: [
          { say: "They're lovely! How long does it take to weave one?", good: true, skill: "ask" },
          { say: "They're lovely! How long it takes to weave one?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "About five days for one cotton saree.",
        te: "ఒక కాటన్ చీరకి దాదాపు ఐదు రోజులు.",
        hint: { en: "Ask the price of the blue one, kindly.", te: "నీలం రంగు చీర ధర మర్యాదగా అడగండి." },
        replies: [
          { say: "How much is the blue one, please?", good: true, skill: "polite" },
          {
            say: "Only five days? Then give it to me cheap.",
            good: false,
            skill: "polite",
            react: { en: "Five days of hard work by hand! But I'll give you a fair price.", te: "ఐదు రోజుల చేతి శ్రమ అండీ! అయినా మీకు న్యాయమైన ధరకే ఇస్తాను." },
          },
        ],
      },
      {
        partner: "That one is 1800 rupees. It's pure cotton.",
        te: "అది 1800 రూపాయలు. స్వచ్ఛమైన కాటన్.",
        hint: { en: "Say you will buy it, and thank him.", te: "తీసుకుంటానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "I'll take it. Thank you so much!", good: true, skill: "polite" },
          { say: "I'll taking it. Thank you so much!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 36, Day 3 (CURRICULUM §4): that (and which) for things — I'm looking for the shop that sells silk sarees. */
export const day: Lesson = {
  id: "the-shop-that-sells",
  kind: "lesson",
  title: { en: "The Shop That Sells Silk", te: "సిల్క్ అమ్మే షాపు" },
  subtitle: "that for things",
  summary: {
    en: "Learn to ask for a particular shop or thing with that: I'm looking for the shop that sells silk sarees.",
    te: "ఒక ప్రత్యేకమైన షాపు, వస్తువు గురించి that తో అడగడం నేర్చుకుందాం: I'm looking for the shop that sells silk sarees.",
  },
  seo: {
    title: "Using That for Things in English for Telugu Speakers",
    description:
      "Say I'm looking for the shop that sells silk sarees. Simple lessons for Telugu speakers on asking for a particular shop with that.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "am looking for", role: "action" },
    { text: "the shop that sells silk sarees", role: "what" },
  ],
  core: [
    { en: "Is there a shop that sells bangles?", te: "గాజులు అమ్మే షాపు ఏదైనా ఉందా?", extra: ["who"] },
    { en: "I'm looking for the shop that sells silk sarees.", te: "సిల్క్ చీరలు అమ్మే షాపు కోసం చూస్తున్నాను.", extra: ["sell"] },
    { en: "Where is the shop that repairs watches?", te: "వాచీలు రిపేర్ చేసే షాపు ఎక్కడ ఉంది?", extra: ["repair"] },
    { en: "This is the bus that goes to Guntur.", te: "గుంటూరు వెళ్ళే బస్సు ఇదే.", extra: ["go"] },
    { en: "Do you have a phone that has big buttons?", te: "పెద్ద బటన్లు ఉన్న ఫోన్ మీ దగ్గర ఉందా?", extra: ["who"] },
    { en: "The shop that sells handloom sarees is closed today.", te: "చేనేత చీరలు అమ్మే షాపు ఈ రోజు మూసేశారు.", extra: ["close"] },
    { en: "Do you know a tailor who stitches blouses?", te: "బ్లౌజులు కుట్టే టైలర్ ఎవరైనా మీకు తెలుసా?", extra: ["which"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Name two shops near your home with that: the shop that sells…",
    te: "మీ ఇంటి దగ్గర రెండు షాపుల గురించి that తో చెప్పండి: the shop that sells…",
  },
  words: [
    { en: "silk", te: "సిల్క్, పట్టు" },
    { en: "handloom", te: "చేనేత" },
    { en: "bangles", te: "గాజులు" },
    { en: "stitch", te: "కుట్టడం" },
    { en: "sells", te: "అమ్ముతుంది, అమ్ముతారు" },
  ],
  grammar: ["relative-clauses", "articles"],
  topics: ["shopping", "market", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "That shows which thing", te: "that: ఏ వస్తువో చెప్తుంది" },
      body: {
        en: "For a thing or a place, use that, the way you use who for people: the shop that sells silk sarees. Which also works for things, but in speech that is more common.",
        te: "వస్తువుకి, చోటుకి that వాడండి, మనుషులకి who లాగా: the shop that sells silk sarees. which కూడా సరిపోతుంది, కానీ మాటల్లో that ఎక్కువ.",
      },
      bridge: {
        te: ["సిల్క్ చీరలు అమ్మే షాపు కోసం", "చూస్తున్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "am looking for", role: "action" },
          { text: "the shop that sells silk sarees", role: "what" },
        ],
      },
      examples: [
        { en: "I'm looking for the shop that sells silk sarees.", te: "సిల్క్ చీరలు అమ్మే షాపు కోసం చూస్తున్నాను." },
        { en: "Where is the shop that repairs watches?", te: "వాచీలు రిపేర్ చేసే షాపు ఎక్కడ ఉంది?" },
        { en: "This is the bus that goes to Guntur.", te: "గుంటూరు వెళ్ళే బస్సు ఇదే." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Who or that?", te: "who ఆ, that ఆ?" },
      items: [
        {
          form: "who",
          useFor: { en: "People: a tailor, a doctor.", te: "మనుషులకి: టైలర్, డాక్టర్." },
          example: { en: "Do you know a tailor who stitches blouses?", te: "బ్లౌజులు కుట్టే టైలర్ ఎవరైనా మీకు తెలుసా?" },
        },
        {
          form: "that",
          useFor: { en: "Things and places: a shop, a bus.", te: "వస్తువులు, చోట్లకి: షాపు, బస్సు." },
          example: { en: "Is there a shop that sells bangles?", te: "గాజులు అమ్మే షాపు ఏదైనా ఉందా?" },
        },
        {
          form: "which",
          useFor: { en: "Things too, but less common in speech.", te: "వస్తువులకి కూడా; కానీ మాటల్లో తక్కువ." },
          example: { en: "I want a phone which has big buttons.", te: "నాకు పెద్ద బటన్లు ఉన్న ఫోన్ కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I'm looking for shop that sells silk sarees.",
      right: "I'm looking for the shop that sells silk sarees.",
      why: {
        en: "Telugu has no the. In English, the one shop you have in mind needs the.",
        te: "తెలుగులో the ఉండదు. మనసులో ఉన్న ఆ ఒక్క షాపు గురించి అయితే ఇంగ్లీష్‌లో the కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I want the shop who sells silk sarees.",
      right: "I want the shop that sells silk sarees.",
      why: {
        en: "Who is only for people. A shop is a place, so it takes that.",
        te: "who మనుషులకి మాత్రమే. షాపు ఒక చోటు, అందుకే that.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Your watch has stopped. Ask where to get it fixed.", te: "మీ వాచీ ఆగిపోయింది. ఎక్కడ రిపేర్ చేయించాలో అడగండి." },
      options: ["Where is the shop that repairs watches?", "Where is the shop who repairs watches?", "Where the shop that repairs watches is?"],
      answer: 0,
      why: {
        en: "A shop takes that, and in a question is comes right after where.",
        te: "షాపుకి that వాడాలి; ప్రశ్నలో where తర్వాత వెంటనే is వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Gandhi Road Shopping Complex",
      lines: ["Shop 1: Lakshmi Bangles", "Shop 2: Sri Venkateswara Silks and Handloom", "Shop 3: Raju Watch Repairs", "Shop 4: Kumar Tailors"],
      prompt: { en: "You want the shop that sells silk sarees. Which shop do you go to?", te: "సిల్క్ చీరలు అమ్మే షాపుకి వెళ్ళాలి. ఏ షాపుకి వెళ్తారు?" },
      options: ["Shop 2", "Shop 1", "Shop 4"],
      answer: 0,
      why: {
        en: "Silks in a shop's name tells you it sells silk sarees.",
        te: "షాపు పేరులో Silks ఉంటే అక్కడ సిల్క్ చీరలు అమ్ముతారని అర్థం.",
      },
      say: "Shop 2 is the shop that sells silk sarees.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["This is the bus that goes to Guntur.", "This is the bus who goes to Guntur.", "This is the bus that go to Guntur."],
      answer: 0,
      why: {
        en: "A bus is a thing, so use that; and one bus goes, with es.",
        te: "బస్సు ఒక వస్తువు, అందుకే that; ఒక్క బస్సు కాబట్టి goes.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Is there a shop that sells silk saree?",
      wrongIndex: 7,
      fix: "Is there a shop that sells silk sarees?",
      why: {
        en: "A shop sells many sarees, so the word needs s at the end.",
        te: "షాపు చాలా చీరలు అమ్ముతుంది, అందుకే saree కి s చేర్చాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You need bangles for a function. Ask someone on the street about a shop.",
        te: "ఫంక్షన్ కోసం గాజులు కావాలి. వీధిలో ఒకరిని షాపు గురించి అడగండి.",
      },
      expected: ["Is there a shop that sells bangles?", "Is there a shop that sells bangles near here?", "Where is the bangle shop, please?"],
      options: ["Is there a shop that sells bangles?", "Is there shop that sells bangles?", "Is there a shop who sells bangles?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At a big bus stand, ask a conductor if this bus goes to Guntur.",
        te: "పెద్ద బస్ స్టాండ్‌లో, ఈ బస్సు గుంటూరు వెళ్తుందా అని కండక్టర్‌ని అడగండి.",
      },
      expected: ["Is this the bus that goes to Guntur?", "Does this bus go to Guntur?"],
      options: ["Is this the bus that goes to Guntur?", "Is this the bus who goes to Guntur?", "This bus is going Guntur?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Looking for the silk shop", te: "సిల్క్ షాపు కోసం" },
    scene: {
      en: "You are on a busy market street in Vijayawada. You want silk sarees for a wedding. Imran runs a tea stall there.",
      te: "మీరు విజయవాడలో రద్దీగా ఉన్న మార్కెట్ వీధిలో ఉన్నారు. పెళ్ళి కోసం సిల్క్ చీరలు కావాలి. ఇమ్రాన్ గారు అక్కడ టీ కొట్టు నడుపుతున్నారు.",
    },
    partner: { en: "Imran (tea stall owner)", te: "ఇమ్రాన్ (టీ కొట్టు యజమాని)" },
    voice: "b",
    skills: [
      { id: "that", label: { en: "That for things", te: "వస్తువులకి that" } },
      { id: "polite", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
    ],
    turns: [
      {
        partner: "Good morning! Tea or coffee?",
        te: "నమస్కారం! టీ నా, కాఫీ నా?",
        hint: { en: "Say no politely, and ask him for some help.", te: "మర్యాదగా వద్దని, కొంచెం సహాయం అడగండి." },
        replies: [
          { say: "No, thank you. Can you help me, please?", good: true, skill: "polite" },
          {
            say: "No tea. Just tell me the way.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! Where do you want to go?", te: "సరే, సరే! ఎక్కడికి వెళ్ళాలి?" },
          },
        ],
      },
      {
        partner: "Sure. What are you looking for?",
        te: "తప్పకుండా. దేని కోసం చూస్తున్నారు?",
        hint: { en: "Say which shop you want: silk sarees.", te: "మీకు ఏ షాపు కావాలో చెప్పండి: సిల్క్ చీరలు." },
        replies: [
          { say: "I'm looking for the shop that sells silk sarees.", good: true, skill: "that" },
          { say: "I'm looking for shop that sells silk sarees.", good: false, skill: "that", fixIt: "article" },
        ],
      },
      {
        partner: "There are two. The big one is very expensive.",
        te: "రెండు ఉన్నాయి. పెద్దది చాలా ఖరీదు.",
        hint: { en: "Ask about a shop with handloom sarees at lower prices.", te: "తక్కువ ధరకి చేనేత చీరలు అమ్మే షాపు గురించి అడగండి." },
        replies: [
          { say: "Is there a shop that sells cheaper handloom sarees?", good: true, skill: "that" },
          { say: "Is there a shop that sell cheaper handloom sarees?", good: false, skill: "that", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "Yes. Go straight. It's next to the temple.",
        te: "ఉంది. నేరుగా వెళ్ళండి. గుడి పక్కనే.",
        hint: { en: "Thank him for his help, and say goodbye.", te: "సహాయం చేసినందుకు థాంక్స్ చెప్పి, బై చెప్పండి." },
        replies: [
          { say: "Thank you so much for your help. Bye!", good: true, skill: "polite" },
          { say: "Thanks you for your help. Bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

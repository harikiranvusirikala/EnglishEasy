import type { Lesson } from "../../types";

/** Week 23, Day 2 (CURRICULUM §4): ordering — I'll have …, I'd like …, What do you recommend? */
export const day: Lesson = {
  id: "ill-have-the-dosa",
  kind: "lesson",
  title: { en: "I'll Have the Dosa", te: "ఆర్డర్ చేయడం" },
  subtitle: "I'll have …",
  summary: {
    en: "Learn to order food: I'll have two plates of idli. What do you recommend?",
    te: "హోటల్‌లో ఆర్డర్ చేయడం నేర్చుకుందాం: I'll have two plates of idli. What do you recommend?",
  },
  seo: {
    title: "Ordering Food in English for Telugu Speakers",
    description:
      "Say I'll have a masala dosa, please and ask What do you recommend? Simple lessons for Telugu speakers on ordering at a restaurant.",
  },
  pattern: [
    { text: "I'll", role: "who" },
    { text: "have", role: "action" },
    { text: "a masala dosa, please.", role: "what" },
  ],
  core: [
    { en: "I'll have a masala dosa, please.", te: "నాకు ఒక మసాలా దోసె ఇవ్వండి.", extra: ["having"] },
    { en: "What do you recommend?", te: "ఏది బాగుంటుందో మీరే చెప్పండి.", extra: ["are"] },
    { en: "I'll have two plates of idli.", te: "నాకు రెండు ప్లేట్ల ఇడ్లీ ఇవ్వండి.", extra: ["plate"] },
    { en: "I'd like a filter coffee, please.", te: "నాకు ఒక ఫిల్టర్ కాఫీ కావాలి.", extra: ["liking"] },
    { en: "What is today's special?", te: "ఈ రోజు స్పెషల్ ఏంటి?", extra: ["today"] },
    { en: "Are you ready to order?", te: "ఆర్డర్ చెప్తారా అండీ?", extra: ["for"] },
    { en: "Does the dosa come with chutney?", te: "దోసెతో పాటు చట్నీ వస్తుందా?", extra: ["Do"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of your breakfast today, and order it aloud: I'll have …, please.",
    te: "ఈ రోజు మీ టిఫిన్ గుర్తు చేసుకుని, గట్టిగా ఆర్డర్ చేయండి: I'll have …, please.",
  },
  words: [
    { en: "order", te: "ఆర్డర్ (చేయడం)" },
    { en: "recommend", te: "ఏది బాగుంటుందో చెప్పడం" },
    { en: "today's special", te: "ఈ రోజు ప్రత్యేక వంటకం" },
    { en: "meals", te: "మీల్స్, భోజనం" },
    { en: "chutney", te: "చట్నీ, పచ్చడి" },
  ],
  grammar: ["will", "would-like", "politeness-softening"],
  topics: ["food"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ordering food", te: "ఆర్డర్ చేయడం" },
      body: {
        en: "To order, say I'll have and the dish: I'll have a masala dosa. I'd like is just as polite. Not sure what to eat? Ask the waiter: What do you recommend? At lunch, many places serve meals: rice and curries on one plate.",
        te: "ఆర్డర్ చేయాలంటే I'll have అని, తర్వాత వంటకం పేరు: I'll have a masala dosa. I'd like అన్నా మర్యాదగానే ఉంటుంది. ఏం తినాలో తెలియకపోతే అడగండి: What do you recommend? మధ్యాహ్నం చాలా హోటళ్ళలో meals ఉంటాయి: ఒకే ప్లేట్‌లో అన్నం, కూరలు.",
      },
      bridge: {
        te: ["నాకు", "ఒక మసాలా దోసె", "ఇవ్వండి"],
        en: [
          { text: "I'll", role: "who" },
          { text: "have", role: "action" },
          { text: "a masala dosa", role: "what" },
        ],
      },
      examples: [
        { en: "I'll have a masala dosa, please.", te: "నాకు ఒక మసాలా దోసె ఇవ్వండి." },
        { en: "What do you recommend?", te: "ఏది బాగుంటుందో మీరే చెప్పండి." },
        { en: "I'll have two plates of idli.", te: "నాకు రెండు ప్లేట్ల ఇడ్లీ ఇవ్వండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to order", te: "ఆర్డర్ చేసే మాటలు" },
      items: [
        {
          form: "I'll have …",
          useFor: { en: "Order what you choose.", te: "మీరు ఎంచుకున్నది ఆర్డర్ చేయడానికి." },
          example: { en: "I'll have two plates of idli.", te: "నాకు రెండు ప్లేట్ల ఇడ్లీ ఇవ్వండి." },
        },
        {
          form: "I'd like …",
          useFor: { en: "The same, and a little softer.", te: "అదే అర్థం, కొంచెం మెత్తగా." },
          example: { en: "I'd like a filter coffee, please.", te: "నాకు ఒక ఫిల్టర్ కాఫీ కావాలి." },
        },
        {
          form: "What do you recommend?",
          useFor: { en: "Ask the waiter to choose for you.", te: "మీ కోసం ఎంచుకోమని వెయిటర్‌ని అడగడానికి." },
          example: { en: "What do you recommend?", te: "ఏది బాగుంటుందో మీరే చెప్పండి." },
        },
        {
          form: "today's special",
          useFor: { en: "A dish made only today.", te: "ఈ రోజు మాత్రమే చేసిన వంటకం." },
          example: { en: "What is today's special?", te: "ఈ రోజు స్పెషల్ ఏంటి?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am wanting a dosa.",
      right: "I'd like a dosa, please.",
      why: {
        en: "Want never takes -ing, and I'd like is the polite way to order.",
        te: "want కి -ing రాదు; ఆర్డర్ చేయడానికి I'd like మర్యాదైన మాట.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Can I see menu?",
      right: "Can I see the menu?",
      why: {
        en: "Telugu has no word for the, but English needs it: the restaurant has one menu.",
        te: "తెలుగులో the లాంటి మాట లేదు; కానీ ఆ హోటల్ మెనూ ఒక్కటే, అందుకే the కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Order one plate of idli politely.", te: "ఒక ప్లేట్ ఇడ్లీ మర్యాదగా ఆర్డర్ చేయండి." },
      options: ["I'll have one plate of idli, please.", "I am wanting one plate of idli.", "I'll having one plate of idli."],
      answer: 0,
      why: {
        en: "After I'll, the verb stays plain, and want never takes -ing.",
        te: "I'll తర్వాత verb మారదు; want కి -ing రాదు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Sri Sai Tiffins: Menu",
      lines: ["Idli, 2 pieces ₹40", "Plain dosa ₹50", "Masala dosa ₹70", "Pesarattu ₹60", "Filter coffee ₹20", "Today's special: Upma ₹45"],
      prompt: {
        en: "You want a masala dosa and a filter coffee. How much is that?",
        te: "మీకు ఒక మసాలా దోసె, ఒక ఫిల్టర్ కాఫీ కావాలి. ఎంత అవుతుంది?",
      },
      options: ["90 rupees", "70 rupees", "110 rupees"],
      answer: 0,
      why: {
        en: "Masala dosa is 70 and coffee is 20, so add them.",
        te: "మసాలా దోసె 70, కాఫీ 20; రెండూ కలపండి.",
      },
      say: "That comes to 90 rupees.",
    },
    {
      id: "p3",
      type: "fillBlank",
      sentence: "What do you ___?",
      te: "ఏది బాగుంటుందో మీరే చెప్పండి.",
      options: ["recommend", "recommends", "recommending"],
      answer: 0,
      why: {
        en: "After do, the verb stays plain, with no s or -ing.",
        te: "do తర్వాత verb మారదు; s గానీ -ing గానీ రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "Does the dosa comes with chutney?",
      wrongIndex: 3,
      fix: "Does the dosa come with chutney?",
      why: {
        en: "Does already carries the s, so the verb after it stays plain.",
        te: "does లోనే s ఉంది; దాని తర్వాత verb కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Order a masala dosa.",
        te: "ఒక మసాలా దోసె ఆర్డర్ చేయండి.",
      },
      expected: ["I'll have a masala dosa, please.", "I'd like a masala dosa, please.", "One masala dosa, please."],
      options: ["I'll have a masala dosa, please.", "I'll having a masala dosa, please.", "Masala dosa one, bring."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You don't know what is good here. Ask the waiter.",
        te: "ఇక్కడ ఏది బాగుంటుందో మీకు తెలియదు. వెయిటర్‌ని అడగండి.",
      },
      expected: ["What do you recommend?", "What is good here?", "What is today's special?"],
      options: ["What do you recommend?", "What you recommend?", "What are you recommend?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Breakfast at a tiffin centre", te: "టిఫిన్ సెంటర్‌లో టిఫిన్" },
    scene: {
      en: "You are at a tiffin centre for breakfast. Jyothi runs it and takes your order.",
      te: "మీరు టిఫిన్ కోసం ఒక టిఫిన్ సెంటర్‌కి వచ్చారు. జ్యోతి గారు దాన్ని నడుపుతున్నారు, ఆర్డర్ తీసుకుంటున్నారు.",
    },
    partner: { en: "Jyothi (tiffin centre owner)", te: "జ్యోతి (టిఫిన్ సెంటర్ యజమాని)" },
    skills: [{ id: "order", label: { en: "Ordering", te: "ఆర్డర్ చేయడం" } }],
    turns: [
      {
        partner: "Good morning! Are you ready to order?",
        te: "నమస్కారం! ఆర్డర్ చెప్తారా?",
        hint: { en: "Ask her what is good here.", te: "ఇక్కడ ఏది బాగుంటుందో ఆవిడనే అడగండి." },
        replies: [
          { say: "What do you recommend?", good: true, skill: "order" },
          { say: "What you recommend?", good: false, skill: "order", fixIt: "question" },
        ],
      },
      {
        partner: "Our pesarattu is very good. It's today's special.",
        te: "మా పెసరట్టు చాలా బాగుంటుంది. ఈ రోజు స్పెషల్ అదే.",
        hint: { en: "Order one pesarattu.", te: "ఒక పెసరట్టు ఆర్డర్ చేయండి." },
        replies: [
          { say: "Okay, I'll have one pesarattu, please.", good: true, skill: "order" },
          { say: "I'd like one pesarattu, please.", good: true, skill: "order" },
          { say: "I am wanting one pesarattu.", good: false, skill: "order", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Sure. Anything to drink?",
        te: "సరే. తాగడానికి ఏమైనా?",
        hint: { en: "Ask for a filter coffee politely.", te: "ఒక ఫిల్టర్ కాఫీ మర్యాదగా అడగండి." },
        replies: [
          { say: "I'd like a filter coffee, please.", good: true, skill: "order" },
          {
            say: "Coffee. Fast, I'm in a hurry.",
            good: false,
            skill: "order",
            react: { en: "Okay, okay! Coffee in two minutes.", te: "సరే, సరే! రెండు నిమిషాల్లో కాఫీ." },
          },
        ],
      },
      {
        partner: "One pesarattu and one filter coffee. Anything else?",
        te: "ఒక పెసరట్టు, ఒక ఫిల్టర్ కాఫీ. ఇంకేమైనా?",
        hint: { en: "Say that is all, and thank her.", te: "అంతే అని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you.", good: true },
          { say: "No, that's all only. Thank you.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};

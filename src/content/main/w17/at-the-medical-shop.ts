import type { Lesson } from "../../types";

/** Week 17, Day 4 (CURRICULUM §4): at the medical shop — Do you have …?, strips, a cheaper brand, a month's medicines. */
export const day: Lesson = {
  id: "at-the-medical-shop",
  kind: "lesson",
  title: { en: "At the Medical Shop", te: "మెడికల్ షాపులో" },
  subtitle: "Do you have …? Is there a cheaper one?",
  summary: {
    en: "Learn to buy medicines: Do you have this medicine? Is there a cheaper one?",
    te: "మెడికల్ షాపులో మందులు కొనడం నేర్చుకుందాం: Do you have this medicine? Is there a cheaper one?",
  },
  seo: {
    title: "At the Medical Shop in English for Telugu Speakers",
    description:
      "Ask Do you have this medicine? and Is there a cheaper one? Simple lessons for Telugu speakers on buying medicines, strips and a cheaper brand.",
  },
  pattern: [
    { text: "Do", role: "action" },
    { text: "you", role: "who" },
    { text: "have", role: "action" },
    { text: "this medicine?", role: "what" },
  ],
  core: [
    { en: "Do you have this medicine?", te: "ఈ మందు మీ దగ్గర ఉందా?", extra: ["Are"] },
    { en: "Is there a cheaper one?", te: "ఇంకా తక్కువ ధరది ఏదైనా ఉందా?", extra: ["more"] },
    { en: "Can I have two strips, please?", te: "రెండు strips ఇస్తారా?", extra: ["strip"] },
    { en: "I need these medicines for one month.", te: "నాకు ఈ మందులు ఒక నెలకు కావాలి.", extra: ["this"] },
    { en: "It's the same medicine from another brand.", te: "ఇదే మందు, వేరే కంపెనీది.", extra: ["an"] },
    { en: "Sorry, this one is out of stock today.", te: "సారీ, ఇది ఈ రోజు స్టాక్ లేదు.", extra: ["no"] },
    { en: "I'll come back in the evening.", te: "సాయంత్రం మళ్ళీ వస్తాను.", extra: ["coming"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At a medical shop or any shop, ask Do you have …? for one thing.",
    te: "మెడికల్ షాపులో గానీ, ఏ షాపులో అయినా గానీ ఒక వస్తువు కోసం Do you have …? అని అడగండి.",
  },
  words: [
    { en: "medical shop", te: "మెడికల్ షాపు, మందుల షాపు" },
    { en: "strip", te: "మాత్రల షీట్, strip" },
    { en: "tube", te: "ట్యూబ్ (క్రీమ్, ఆయింట్‌మెంట్ ఉండేది)" },
    { en: "eye drops", te: "కంటి చుక్కల మందు" },
    { en: "ointment", te: "పూసే మందు, ఆయింట్‌మెంట్" },
  ],
  grammar: ["yes-no-questions", "plurals-countable"],
  topics: ["pharmacy", "shopping", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for medicines", te: "మందులు అడగడం" },
      body: {
        en: "Show the prescription and ask Do you have this medicine? To pay less, ask Is there a cheaper one? It is often the same medicine from another brand.",
        te: "prescription చూపించి Do you have this medicine? అని అడగండి. తక్కువ ధరకు కావాలంటే Is there a cheaper one? అనండి.",
      },
      bridge: {
        te: ["ఈ మందు", "మీ దగ్గర", "ఉందా?"],
        en: [
          { text: "Do", role: "action" },
          { text: "you", role: "who" },
          { text: "have", role: "action" },
          { text: "this medicine?", role: "what" },
        ],
      },
      examples: [
        { en: "Do you have this medicine?", te: "ఈ మందు మీ దగ్గర ఉందా?" },
        { en: "Is there a cheaper one?", te: "ఇంకా తక్కువ ధరది ఏదైనా ఉందా?" },
        { en: "Can I have two strips, please?", te: "రెండు strips ఇస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Strips, bottles and tubes", te: "strips, సీసాలు, ట్యూబ్‌లు" },
      items: [
        {
          form: "a strip of …",
          useFor: { en: "Tablets in a sheet, often ten.", te: "షీట్‌లో ఉండే మాత్రలు, మామూలుగా పది." },
          example: { en: "Can I have two strips, please?", te: "రెండు strips ఇస్తారా?" },
        },
        {
          form: "a bottle of …",
          useFor: { en: "Syrup or eye drops.", te: "సిరప్ లేదా కంటి చుక్కల మందు." },
          example: { en: "Can I have a bottle of eye drops?", te: "కంటి చుక్కల మందు ఒక సీసా ఇస్తారా?" },
        },
        {
          form: "a tube of …",
          useFor: { en: "Cream or ointment.", te: "క్రీమ్ లేదా ఆయింట్‌మెంట్." },
          example: { en: "I need a tube of this ointment.", te: "నాకు ఈ ఆయింట్‌మెంట్ ఒక ట్యూబ్ కావాలి." },
        },
        {
          form: "another brand",
          useFor: { en: "The same medicine from another company.", te: "అదే మందు, వేరే కంపెనీది." },
          example: { en: "It's the same medicine from another brand.", te: "ఇదే మందు, వేరే కంపెనీది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "You have this medicine?",
      right: "Do you have this medicine?",
      why: {
        en: "Telugu asks with the voice alone, but English questions start with Do.",
        te: "తెలుగులో గొంతుతోనే ప్రశ్న అడుగుతాం; ఇంగ్లీష్‌లో ముందు Do కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am having diabetes.",
      right: "I have diabetes.",
      why: {
        en: "Having an illness is a state, not an action, so no -ing.",
        te: "జబ్బు ఉండటం ఒక స్థితి, చేసే పని కాదు; అందుకే -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "The medicine is expensive. Ask for one with a lower price.", te: "మందు ధర ఎక్కువగా ఉంది. తక్కువ ధరది అడగండి." },
      options: ["Is there a cheaper one?", "Is there a more cheaper one?", "There is a cheaper one?"],
      answer: 0,
      why: {
        en: "Cheaper already means more cheap, so do not add more.",
        te: "cheaper అంటేనే 'ఇంకా తక్కువ ధర'; more అక్కర్లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Can I have three ___ of this tablet?",
      te: "ఈ మాత్ర మూడు strips ఇస్తారా?",
      options: ["strips", "strip", "piece"],
      answer: 0,
      why: {
        en: "After a number above one, add s: one strip, three strips.",
        te: "ఒకటి కంటే ఎక్కువ అయితే s వస్తుంది: one strip, three strips.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The pharmacist says: Sorry, it is out of stock. What does it mean?",
        te: "pharmacist Sorry, it is out of stock అన్నారు. అంటే ఏంటి?",
      },
      options: ["The shop has none right now.", "It is very expensive.", "It is the wrong medicine."],
      answer: 0,
      why: {
        en: "Out of stock means the shop has none left right now.",
        te: "out of stock అంటే ప్రస్తుతం షాపులో అది లేదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "It's the same medicine from an another brand.",
      wrongIndex: 5,
      fix: "It's the same medicine from another brand.",
      why: {
        en: "Another already has an inside it, so never add an.",
        te: "another లోనే an ఉంది; మళ్ళీ an అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Ask for two strips of this tablet.",
        te: "ఈ మాత్ర రెండు strips అడగండి.",
      },
      expected: ["Can I have two strips, please?", "Can I have two strips of this tablet?", "Two strips, please."],
      options: ["Can I have two strips, please?", "Can I have two strip, please?", "Two strips give me."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell the pharmacist you need these medicines for one month.",
        te: "ఈ మందులు ఒక నెలకు కావాలని pharmacist కి చెప్పండి.",
      },
      expected: ["I need these medicines for one month.", "I need these for one month.", "I need them for one month."],
      options: ["I need these medicines for one month.", "I am needing these medicines for one month.", "I need this medicines for one month."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A month's medicines", te: "నెలకు సరిపడా మందులు" },
    scene: {
      en: "You need your BP medicines for a month. Satish runs the medical shop.",
      te: "మీకు ఒక నెలకు BP మందులు కావాలి. సతీష్ మెడికల్ షాపు నడుపుతున్నారు.",
    },
    partner: { en: "Satish (medical shop owner)", te: "సతీష్ (మెడికల్ షాపు యజమాని)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking for medicines", te: "మందులు అడగడం" } },
      { id: "price", label: { en: "Asking for a cheaper one", te: "తక్కువ ధరది అడగడం" } },
    ],
    turns: [
      {
        partner: "Good evening. How can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Show the prescription, and ask if he has these medicines.", te: "prescription చూపించి, ఈ మందులు ఉన్నాయా అని అడగండి." },
        replies: [
          { say: "Do you have these medicines?", good: true, skill: "ask" },
          { say: "You have these medicines?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "Yes. For how many days?",
        te: "ఉన్నాయి. ఎన్ని రోజులకు?",
        hint: { en: "Say you need them for a month.", te: "ఒక నెలకు కావాలని చెప్పండి." },
        replies: [
          { say: "For one month, please.", good: true, skill: "ask" },
          { say: "Since one month, please.", good: false, skill: "ask", fixIt: "preposition" },
        ],
      },
      {
        partner: "This BP tablet is 300 rupees a month.",
        te: "ఈ BP మాత్ర నెలకు 300 రూపాయలు.",
        hint: { en: "Ask politely for a cheaper brand.", te: "తక్కువ ధర brand ఉందా అని మర్యాదగా అడగండి." },
        replies: [
          { say: "Is there a cheaper one, please?", good: true, skill: "price" },
          { say: "Do you have a cheaper brand?", good: true, skill: "price" },
          {
            say: "300? Too much! You are looting people.",
            good: false,
            skill: "price",
            react: { en: "No, no! That is the MRP printed here.", te: "లేదండీ! ఇక్కడ ముద్రించిన MRP అదే." },
          },
        ],
      },
      {
        partner: "Yes, this brand is 180. Same medicine.",
        te: "ఉంది, ఈ brand 180. అదే మందు.",
        hint: { en: "Say you will take that one, and thank him.", te: "అదే తీసుకుంటానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Okay, I'll take that one. Thank you.", good: true, skill: "price" },
          { say: "Okay, I'll take that. Thanks you.", good: false, skill: "price" },
        ],
      },
    ],
  },
};

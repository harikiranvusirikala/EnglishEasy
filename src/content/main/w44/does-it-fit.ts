import type { Lesson } from "../../types";

/** Week 44, Day 4 (CURRICULUM §5): trying clothes on, sizes, too tight and too loose — Can I try this on? It's too tight. */
export const day: Lesson = {
  id: "does-it-fit",
  kind: "lesson",
  title: { en: "Does It Fit?", te: "సరిపోతుందా?" },
  subtitle: "try on, size, too tight, too loose",
  summary: {
    en: "Learn to try clothes on and talk about the size: Can I try this on? It's too tight. Do you have a bigger size?",
    te: "బట్టలు వేసుకుని చూడటం, సైజు గురించి మాట్లాడటం నేర్చుకుందాం: Can I try this on? It's too tight. Do you have a bigger size?",
  },
  seo: {
    title: "Trying On Clothes in English for Telugu Speakers",
    description:
      "Say Can I try this on? It's too tight. Do you have a bigger size? Simple lessons for Telugu speakers on sizes and trying on clothes.",
  },
  pattern: [
    { text: "Can", role: "action" },
    { text: "I", role: "who" },
    { text: "try", role: "action" },
    { text: "this on?", role: "what" },
  ],
  core: [
    { en: "Can I try this on?", te: "ఇది వేసుకుని చూడొచ్చా?", extra: ["wear"] },
    { en: "It's too tight. Do you have a bigger size?", te: "ఇది చాలా బిగుతుగా ఉంది. ఇంకా పెద్ద సైజు ఉందా?", extra: ["big"] },
    { en: "Where is the trial room?", te: "ట్రయల్ రూమ్ ఎక్కడ ఉంది?", extra: ["are"] },
    { en: "It fits well. I'll take it.", te: "బాగా సరిపోతోంది. ఇది తీసుకుంటాను.", extra: ["fit"] },
    { en: "This kurta is too loose at the shoulders.", te: "ఈ కుర్తా భుజాల దగ్గర చాలా లూజుగా ఉంది.", extra: ["lose"] },
    { en: "What size are you? I think you're a medium.", te: "మీది ఏ సైజు? మీది medium అనుకుంటా.", extra: ["is"] },
    { en: "These trousers are too short. Do you have a longer pair?", te: "ఈ ప్యాంటు మరీ పొట్టిగా ఉంది. ఇంకా పొడుగాటిది ఉందా?", extra: ["pant"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say aloud three times: Can I try this on? It's too tight. Do you have a bigger size?",
    te: "గట్టిగా మూడుసార్లు చెప్పండి: Can I try this on? It's too tight. Do you have a bigger size?",
  },
  words: [
    { en: "try on", te: "వేసుకుని చూడటం" },
    { en: "size", te: "సైజు" },
    { en: "fit", te: "సరిపోవడం" },
    { en: "tight", te: "బిగుతు" },
    { en: "loose", te: "లూజు, వదులు" },
  ],
  grammar: ["can-could", "comparatives-superlatives", "yes-no-questions"],
  topics: ["shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Trying clothes on", te: "వేసుకుని చూడటం" },
      body: {
        en: "Ask Can I try this on? to wear it in the shop first. If it is not right, say too tight or too loose, and ask for a bigger or smaller size.",
        te: "షాపులోనే వేసుకుని చూడాలంటే Can I try this on? అని అడగండి. సరిపోకపోతే too tight, too loose అని చెప్పి, bigger లేదా smaller సైజు అడగండి.",
      },
      bridge: {
        te: ["ఇది", "వేసుకుని చూడొచ్చా?"],
        en: [
          { text: "Can", role: "action" },
          { text: "I", role: "who" },
          { text: "try", role: "action" },
          { text: "this on?", role: "what" },
        ],
      },
      examples: [
        { en: "Can I try this on?", te: "ఇది వేసుకుని చూడొచ్చా?" },
        { en: "It's too tight. Do you have a bigger size?", te: "ఇది చాలా బిగుతుగా ఉంది. ఇంకా పెద్ద సైజు ఉందా?" },
        { en: "Where is the trial room?", te: "ట్రయల్ రూమ్ ఎక్కడ ఉంది?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Tight, loose or just right?", te: "బిగుతా, లూజా, సరిగ్గా ఉందా?" },
      items: [
        {
          form: "too tight",
          useFor: { en: "Smaller than your body; hard to move in.", te: "మీ ఒంటి కంటే చిన్నది; కదలడం కష్టం." },
          example: { en: "This shirt is too tight at the neck.", te: "ఈ చొక్కా మెడ దగ్గర చాలా బిగుతుగా ఉంది." },
        },
        {
          form: "too loose",
          useFor: { en: "Bigger than your body.", te: "మీ ఒంటి కంటే పెద్దది." },
          example: { en: "This kurta is too loose at the shoulders.", te: "ఈ కుర్తా భుజాల దగ్గర చాలా లూజుగా ఉంది." },
        },
        {
          form: "It fits well.",
          useFor: { en: "The size is just right.", te: "సైజు సరిగ్గా ఉంది." },
          example: { en: "It fits well. I'll take it.", te: "బాగా సరిపోతోంది. ఇది తీసుకుంటాను." },
        },
        {
          form: "a pair of trousers",
          useFor: { en: "Trousers and jeans always have s; count them in pairs.", te: "trousers, jeans కి ఎప్పుడూ s ఉంటుంది; pair అని లెక్కపెడతారు." },
          example: { en: "I need a pair of black trousers.", te: "నాకు ఒక నల్ల ప్యాంటు కావాలి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I bought two pants.",
      right: "I bought two pairs of trousers.",
      why: {
        en: "We say one pant, but English trousers always has s, so you count pairs.",
        te: "మనం ఒక pant అంటాం; ఇంగ్లీష్‌లో trousers కి ఎప్పుడూ s ఉంటుంది, అందుకే pairs అని లెక్కపెడతారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "It doesn't fit to me.",
      right: "It doesn't fit me.",
      why: {
        en: "Fit takes no to after it; Telugu నాకు makes us add one.",
        te: "fit తర్వాత to రాదు; తెలుగులో 'నాకు' అంటాం కాబట్టి to కలిపేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You like a kurta at the shop. Ask if you can wear it there first, to check.",
        te: "షాపులో మీకు ఒక కుర్తా నచ్చింది. ముందు అక్కడే వేసుకుని చూడొచ్చా అని అడగండి.",
      },
      options: ["Can I try this on?", "I can try this on?", "Can I wear and see this?"],
      answer: 0,
      why: {
        en: "A question starts with Can, and English says try on, not wear and see.",
        te: "ప్రశ్న Can తో మొదలవుతుంది; 'వేసుకుని చూడటం' ని ఇంగ్లీష్‌లో try on అంటారు.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "label",
      heading: "Sri Lakshmi Garments",
      lines: ["Kurta", "Size: Large", "Pure cotton", "Wash in cold water", "Do not iron on the print", "MRP: Rs 899"],
      prompt: { en: "You bought this kurta. How should you wash it?", te: "మీరు ఈ కుర్తా కొన్నారు. దాన్ని ఎలా ఉతకాలి?" },
      options: ["In cold water", "In hot water", "Only at a dry cleaner"],
      answer: 0,
      why: {
        en: "The label asks for cold water, because hot water can spoil cotton.",
        te: "లేబుల్ మీద చల్లటి నీళ్ళు అని ఉంది; వేడి నీళ్ళు కాటన్‌ని పాడు చేయొచ్చు.",
      },
      say: "Wash in cold water.",
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "This kurta ___ me well.",
      te: "ఈ కుర్తా నాకు బాగా సరిపోతోంది.",
      options: ["fits", "fit", "is fitting"],
      answer: 0,
      why: {
        en: "One kurta, like he or she, takes s; fit is a state, so no -ing.",
        te: "ఒక్క కుర్తా (he, she లాగా), అందుకే s; fit ఒక స్థితి, అందుకే -ing రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "It's too tight. Do you have bigger size?",
      wrongIndex: 6,
      fix: "It's too tight. Do you have a bigger size?",
      why: {
        en: "One size needs a before it; Telugu has no word like a.",
        te: "ఒక్క సైజు కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The shop assistant asks: Doesn't it fit? It is too tight for you. Answer.",
        te: "షాపులో అసిస్టెంట్ Doesn't it fit? అని అడుగుతున్నారు. అది మీకు చాలా బిగుతుగా ఉంది. జవాబు చెప్పండి.",
      },
      expected: ["No, it doesn't. It's too tight.", "No, it's too tight.", "No, it doesn't fit."],
      options: ["No, it doesn't. It's too tight.", "Yes, it doesn't. It's too tight.", "No, it does. It's too tight."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The shirt is too small. Ask the shop assistant for a bigger size.",
        te: "చొక్కా చాలా చిన్నగా ఉంది. ఇంకా పెద్ద సైజు అడగండి.",
      },
      expected: ["Do you have a bigger size?", "Do you have this in a bigger size?", "Can I have a bigger size, please?", "It's too tight. Do you have a bigger size?"],
      options: ["Do you have a bigger size?", "You have bigger size?", "Do you have a more big size?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Trying on a kurta", te: "కుర్తా వేసుకుని చూడటం" },
    scene: {
      en: "You are buying a kurta for Diwali. Anitha works at the shop.",
      te: "దీపావళికి మీరు ఒక కుర్తా కొంటున్నారు. అనిత గారు ఆ షాపులో పని చేస్తారు.",
    },
    partner: { en: "Anitha (shop assistant)", te: "అనిత (షాపు అసిస్టెంట్)" },
    skills: [
      { id: "size", label: { en: "Talking about size", te: "సైజు గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! This kurta is new. Do you like it?",
        te: "హలో! ఈ కుర్తా కొత్తది. మీకు నచ్చిందా?",
        hint: { en: "Say you like it, and ask to wear it here first.", te: "నచ్చిందని చెప్పి, ముందు ఇక్కడే వేసుకుని చూడొచ్చా అని అడగండి." },
        replies: [
          { say: "Yes, it's nice. Can I try it on?", good: true, skill: "size" },
          { say: "I like it. Can I try this on?", good: true, skill: "size" },
          { say: "Yes, it's nice. I can try it on?", good: false, skill: "size", fixIt: "question" },
        ],
      },
      {
        partner: "How is it? Does it fit?",
        te: "ఎలా ఉంది? సరిపోయిందా?",
        hint: { en: "Say it is tight, and ask for one size up.", te: "బిగుతుగా ఉందని చెప్పి, ఒక సైజు పెద్దది అడగండి." },
        replies: [
          { say: "It's too tight. Do you have a bigger size?", good: true, skill: "size" },
          { say: "It's too tight. Do you have more bigger size?", good: false, skill: "size" },
          {
            say: "Your kurtas are all useless!",
            good: false,
            skill: "polite",
            react: { en: "Oh! Don't worry, let me get you another size.", te: "అయ్యో! కంగారు పడకండి, వేరే సైజు తెస్తాను." },
          },
        ],
      },
      {
        partner: "Here's a large. How does it fit now?",
        te: "ఇదిగోండి large. ఇప్పుడు ఎలా సరిపోయింది?",
        hint: { en: "Say it is just right, and you will buy it.", te: "సరిగ్గా సరిపోయిందని, కొంటానని చెప్పండి." },
        replies: [
          { say: "It fits well. I'll take it.", good: true, skill: "size" },
          { say: "It's fitting well. I'll take it.", good: false, skill: "size", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Very good. Please pay at the billing counter.",
        te: "చాలా మంచిది. బిల్లింగ్ కౌంటర్ దగ్గర డబ్బు కట్టండి.",
        hint: { en: "Thank her for her help.", te: "సహాయం చేసినందుకు ఆవిడకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you for your help!", good: true, skill: "polite" },
          { say: "Thank you for your helps!", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};

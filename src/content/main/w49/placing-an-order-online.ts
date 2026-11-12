import type { Lesson } from "../../types";

/** Week 49, Day 1 (CURRICULUM §5): ordering online — I'm going to order a mixer online. Is cash on delivery available? */
export const day: Lesson = {
  id: "placing-an-order-online",
  kind: "lesson",
  title: { en: "Placing an Order", te: "ఆర్డర్ పెట్టడం" },
  subtitle: "add to cart, place an order",
  summary: {
    en: "Learn to order online and ask about paying at the door: I'm going to order a mixer online. Is cash on delivery available?",
    te: "ఆన్‌లైన్‌లో ఆర్డర్ పెట్టడం, ఇంటి దగ్గర డబ్బు కట్టడం గురించి అడగడం నేర్చుకుందాం: I'm going to order a mixer online. Is cash on delivery available?",
  },
  seo: {
    title: "Placing an Order Online in English for Telugu Speakers",
    description:
      "Say I'm going to order a mixer online and Is cash on delivery available? Simple lessons for Telugu speakers on ordering online.",
  },
  pattern: [
    { text: "I'm", role: "who" },
    { text: "going to order", role: "action" },
    { text: "a mixer", role: "what" },
    { text: "online", role: "what" },
  ],
  core: [
    { en: "I'm going to order a mixer online.", te: "నేను ఆన్‌లైన్‌లో ఒక mixer ఆర్డర్ చేయబోతున్నాను.", extra: ["ordering"] },
    { en: "Is cash on delivery available for this item?", te: "ఈ వస్తువుకి cash on delivery ఉందా?", extra: ["Does"] },
    { en: "First, add it to the cart.", te: "ముందు దాన్ని cart లో వేయండి.", extra: ["in"] },
    { en: "Then I'll place the order.", te: "తర్వాత ఆర్డర్ పెడతాను.", extra: ["put"] },
    { en: "How much is the delivery charge?", te: "డెలివరీ ఛార్జ్ ఎంత?", extra: ["many"] },
    { en: "I'd like two packets of rice, please.", te: "నాకు రెండు packets బియ్యం కావాలి, please.", extra: ["packet"] },
    { en: "Can you deliver it by Saturday, please?", te: "శనివారం లోపు డెలివరీ చేస్తారా?", extra: ["until"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at a shopping app or a shop's price list. Choose one thing and say aloud: I'm going to order …",
    te: "ఏదైనా shopping app గానీ, షాపు ధరల లిస్ట్ గానీ చూడండి. ఒక వస్తువు ఎంచుకుని గట్టిగా చెప్పండి: I'm going to order …",
  },
  words: [
    { en: "add to cart", te: "cart లో వేయడం (కొనే లిస్ట్‌లో పెట్టడం)" },
    { en: "place an order", te: "ఆర్డర్ పెట్టడం" },
    { en: "cash on delivery", te: "వస్తువు ఇంటికి వచ్చాక డబ్బు కట్టడం" },
    { en: "delivery charge", te: "డెలివరీ ఛార్జ్, ఇంటికి తెచ్చినందుకు డబ్బు" },
    { en: "home delivery", te: "ఇంటికే తెచ్చి ఇవ్వడం" },
  ],
  grammar: ["going-to", "will", "articles"],
  topics: ["shopping", "technology", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Ordering online", te: "ఆన్‌లైన్‌లో ఆర్డర్ చేయడం" },
      body: {
        en: "Say your plan with I'm going to + verb. On the app, add the item to the cart, then place the order. To pay at the door, choose cash on delivery.",
        te: "మీ ప్లాన్ చెప్పడానికి I'm going to + verb వాడండి. app లో వస్తువుని cart లో వేసి ఆర్డర్ పెట్టండి; ఇంటి దగ్గర డబ్బు కట్టాలంటే cash on delivery ఎంచుకోండి.",
      },
      bridge: {
        te: ["నేను", "ఆన్‌లైన్‌లో", "ఒక mixer", "ఆర్డర్ చేయబోతున్నాను"],
        en: [
          { text: "I'm", role: "who" },
          { text: "going to order", role: "action" },
          { text: "a mixer", role: "what" },
          { text: "online", role: "what" },
        ],
      },
      examples: [
        { en: "I'm going to order a mixer online.", te: "నేను ఆన్‌లైన్‌లో ఒక mixer ఆర్డర్ చేయబోతున్నాను." },
        { en: "First, add it to the cart.", te: "ముందు దాన్ని cart లో వేయండి." },
        { en: "Then I'll place the order.", te: "తర్వాత ఆర్డర్ పెడతాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Plan, decide and pay", te: "ప్లాన్, నిర్ణయం, డబ్బు కట్టడం" },
      items: [
        {
          form: "I'm going to …",
          useFor: { en: "A plan you made before.", te: "ముందే అనుకున్న ప్లాన్." },
          example: { en: "I'm going to order a gift for my friend.", te: "నా స్నేహితులకి ఒక గిఫ్ట్ ఆర్డర్ చేయబోతున్నాను." },
        },
        {
          form: "I'll …",
          useFor: { en: "You decide right now, while you talk.", te: "మాట్లాడుతూ అప్పటికప్పుడు నిర్ణయించినప్పుడు." },
          example: { en: "Okay, I'll add one more packet.", te: "సరే, ఇంకో packet వేస్తాను." },
        },
        {
          form: "cash on delivery",
          useFor: { en: "Pay the delivery person at your door.", te: "ఇంటి దగ్గర డెలివరీ చేసేవారికి డబ్బు ఇవ్వడానికి." },
          example: { en: "Is cash on delivery available for this item?", te: "ఈ వస్తువుకి cash on delivery ఉందా?" },
        },
        {
          form: "pay online",
          useFor: { en: "Pay now on the app, by UPI or card.", te: "ఇప్పుడే app లో UPI తో గానీ, card తో గానీ కట్టడానికి." },
          example: { en: "I don't want to pay online. I'll pay at the door.", te: "ఆన్‌లైన్‌లో కట్టాలని లేదు. ఇంటి దగ్గర కడతాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "I'm going to order mixer online.",
      right: "I'm going to order a mixer online.",
      why: {
        en: "One thing you can count takes a before it; Telugu often drops ఒక here.",
        te: "లెక్కపెట్టగలిగే ఒక్క వస్తువు ముందు a కావాలి; తెలుగులో 'ఒక' చాలాసార్లు వదిలేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I'll put the order now.",
      right: "I'll place the order now.",
      why: {
        en: "In English you place an order; Telugu పెట్టడం makes us say put.",
        te: "ఇంగ్లీష్‌లో ఆర్డర్‌ని place చేస్తారు; తెలుగు 'పెట్టడం' వల్ల put అనేస్తాం.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "You want to pay at the door when the mixer comes. Ask the shop.",
        te: "mixer ఇంటికి వచ్చినప్పుడు డబ్బు కట్టాలని ఉంది. షాపు వాళ్ళని అడగండి.",
      },
      options: ["Is cash on delivery available?", "Cash on delivery is available?", "Cash on delivery is there or not?"],
      answer: 0,
      why: {
        en: "A question puts is before the thing; Telugu only adds ఆ at the end.",
        te: "ప్రశ్నలో is ముందుకు వస్తుంది; తెలుగులో చివర 'ఆ?' చేరిస్తే చాలు, ఇంగ్లీష్‌లో అలా కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Please send three ___ of milk.",
      te: "మూడు packets పాలు పంపండి.",
      options: ["packets", "packet", "a packet"],
      answer: 0,
      why: {
        en: "More than one packet, so add s; Telugu also says ప్యాకెట్లు.",
        te: "ఒకటి కంటే ఎక్కువ కాబట్టి s చేర్చాలి; తెలుగులోనూ ప్యాకెట్ కాదు, ప్యాకెట్లు అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks: Will you buy the mixer at a shop? You have already decided to buy it online.",
        te: "mixer షాపులో కొంటారా? అని స్నేహితులు అడిగారు. ఆన్‌లైన్‌లో కొనాలని మీరు ముందే అనుకున్నారు.",
      },
      options: ["No, I'm going to order it online.", "No, I'm going to ordering it online.", "No, I going to order it online."],
      answer: 0,
      why: {
        en: "A plan is am going to with the plain verb; Telugu has no word for am.",
        te: "ప్లాన్‌కి am going to, తర్వాత verb అలాగే; తెలుగులో am లాంటి పదం ఉండదు, కానీ ఇంగ్లీష్‌లో వదలకూడదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "First add it in the cart, then place the order.",
      wrongIndex: 3,
      fix: "First add it to the cart, then place the order.",
      why: {
        en: "Add takes to, like putting something into a basket; Telugu cart లో makes us say in.",
        te: "add తర్వాత to వస్తుంది; తెలుగు 'cart లో' వల్ల in అనేస్తాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell your neighbour your plan: you are going to buy a pressure cooker online.",
        te: "మీ ప్లాన్ పక్కింటివారికి చెప్పండి: ఆన్‌లైన్‌లో ఒక pressure cooker కొనబోతున్నారు.",
      },
      expected: [
        "I'm going to order a pressure cooker online.",
        "I'm going to buy a pressure cooker online.",
        "I'm going to order a new pressure cooker online.",
      ],
      options: [
        "I'm going to order a pressure cooker online.",
        "I'm going to order pressure cooker online.",
        "I'm going to ordering a pressure cooker online.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You want to know how much extra money they take to bring it home. Ask.",
        te: "ఇంటికి తెచ్చినందుకు ఎంత extra తీసుకుంటారో తెలుసుకోవాలి. అడగండి.",
      },
      expected: ["How much is the delivery charge?", "Is there a delivery charge?", "What is the delivery charge?"],
      options: ["How much is the delivery charge?", "How many is the delivery charge?", "Delivery charge how much?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Ordering groceries by phone", te: "ఫోన్‌లో సరుకులు ఆర్డర్ చేయడం" },
    scene: {
      en: "You call the home delivery line of Fresh Mart, the supermarket near your colony. Ayesha answers.",
      te: "మీ కాలనీ దగ్గర ఉన్న Fresh Mart సూపర్ మార్కెట్ home delivery నంబర్‌కి ఫోన్ చేశారు. ఆయేషా గారు మాట్లాడుతున్నారు.",
    },
    partner: { en: "Ayesha (Fresh Mart)", te: "ఆయేషా (Fresh Mart)" },
    skills: [
      { id: "order", label: { en: "Ordering", te: "ఆర్డర్ చేయడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning, Fresh Mart home delivery. How can I help you?",
        te: "గుడ్ మార్నింగ్, Fresh Mart home delivery. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Greet her, and say you want to order some groceries.", te: "ఆవిడకి నమస్కారం చెప్పి, కొన్ని సరుకులు ఆర్డర్ చేయాలని చెప్పండి." },
        replies: [
          { say: "Good morning. I'd like to order some groceries, please.", good: true, skill: "order" },
          { say: "Good morning. I want to place an order, please.", good: true, skill: "order" },
          {
            say: "Listen, write my list fast.",
            good: false,
            skill: "polite",
            react: { en: "Sure. One moment, please. Okay, I'm ready now.", te: "సరే. ఒక్క నిమిషం అండీ. ఆ, ఇప్పుడు రెడీ." },
          },
        ],
      },
      {
        partner: "Sure. What would you like?",
        te: "సరే. మీకు ఏం కావాలి?",
        hint: { en: "Ask for two packets of rice and one litre of oil.", te: "రెండు packets బియ్యం, ఒక లీటర్ నూనె అడగండి." },
        replies: [
          { say: "Two packets of rice and a litre of oil, please.", good: true, skill: "order" },
          { say: "I'd like two packets of rice and one litre of oil.", good: true, skill: "order" },
          { say: "Two packet of rice and one litre of oil, please.", good: false, skill: "order", fixIt: "plural" },
        ],
      },
      {
        partner: "Anything else? Delivery is free above 500 rupees.",
        te: "ఇంకా ఏమైనా కావాలా? 500 రూపాయల పైన డెలివరీ ఫ్రీ.",
        hint: { en: "Say that's all, and ask if you can pay when the things come.", te: "అంతే అని చెప్పి, సరుకులు వచ్చాక డబ్బు కట్టొచ్చా అని అడగండి." },
        replies: [
          { say: "That's all. Is cash on delivery available?", good: true, skill: "order" },
          { say: "That's all, thank you. Can I pay cash on delivery?", good: true, skill: "order" },
          { say: "That's all. Cash on delivery is there?", good: false, skill: "order", fixIt: "question" },
        ],
      },
      {
        partner: "Yes, it is. Your order will reach you in two hours.",
        te: "ఉందండీ. రెండు గంటల్లో మీ ఆర్డర్ మీకు చేరుతుంది.",
        hint: { en: "Thank her, and say you will be at home.", te: "ఆవిడకి థాంక్స్ చెప్పి, మీరు ఇంట్లోనే ఉంటారని చెప్పండి." },
        replies: [
          { say: "Thank you. I'll be at home.", good: true, skill: "polite" },
          { say: "Thank you very much. I'll be at home all morning.", good: true, skill: "polite" },
          { say: "Thank you. I am being at home.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};

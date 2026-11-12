import type { Lesson } from "../../types";

/** Week 46, Day 4 (CURRICULUM §5): disagreeing politely — I see your point, but plastic bags are a big problem. */
export const day: Lesson = {
  id: "disagreeing-politely-plastic-ban",
  kind: "lesson",
  title: { en: "I'm Not So Sure", te: "నాకు అలా అనిపించడం లేదు" },
  subtitle: "I see your point, but …",
  summary: {
    en: "Learn to disagree kindly: I see your point, but plastic bags are a big problem. I'm not so sure the shops will lose customers.",
    te: "మర్యాదగా ఒప్పుకోకపోవడం నేర్చుకుందాం: I see your point, but plastic bags are a big problem. I'm not so sure the shops will lose customers.",
  },
  seo: {
    title: "Disagreeing Politely in English for Telugu Speakers",
    description:
      "Say I see your point, but plastic bags are a big problem and I'm not so sure. Simple lessons for Telugu speakers on disagreeing kindly.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "see", role: "action" },
    { text: "your point,", role: "what" },
    { text: "but plastic bags are a big problem", role: "what" },
  ],
  core: [
    { en: "I see your point, but plastic bags are a big problem.", te: "మీరు చెప్పేది అర్థమైంది, కానీ ప్లాస్టిక్ సంచులు పెద్ద సమస్య.", extra: ["is"] },
    { en: "I'm not so sure the shops will lose customers.", te: "షాపులకి కస్టమర్లు తగ్గిపోతారని నాకు అంత నమ్మకం లేదు.", extra: ["customer"] },
    { en: "I don't really agree. A cloth bag is easy to carry.", te: "నేను అంతగా ఒప్పుకోను. గుడ్డ సంచి మోయడం తేలిక.", extra: ["carrying"] },
    { en: "Sorry, I disagree. The ban is good for our town.", te: "సారీ, నేను ఒప్పుకోను. ఈ నిషేధం మన ఊరికి మంచిదే.", extra: ["am"] },
    { en: "Plastic bags block the drains in the rainy season.", te: "వర్షాకాలంలో ప్లాస్టిక్ సంచులు డ్రైనేజీలను అడ్డుకుంటాయి.", extra: ["blocks"] },
    { en: "I see your point, but people will soon bring their own bags.", te: "మీరు చెప్పేది అర్థమైంది, కానీ జనం త్వరలోనే సొంత సంచులు తెచ్చుకుంటారు.", extra: ["brings"] },
    { en: "I'm not so sure. Paper bags tear very easily.", te: "నాకు అంత నమ్మకం లేదు. పేపర్ సంచులు చాలా తేలిగ్గా చిరిగిపోతాయి.", extra: ["tears"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Take a cloth bag when you go shopping today. If anyone talks about plastic, say I see your point, but …",
    te: "ఈ రోజు షాపింగ్‌కి గుడ్డ సంచి తీసుకెళ్ళండి. ఎవరైనా ప్లాస్టిక్ గురించి మాట్లాడితే I see your point, but … అనండి.",
  },
  words: [
    { en: "disagree", te: "ఒప్పుకోకపోవడం" },
    { en: "I see your point", te: "మీరు చెప్పేది అర్థమైంది" },
    { en: "ban", te: "నిషేధం" },
    { en: "plastic bag", te: "ప్లాస్టిక్ సంచి, ప్లాస్టిక్ కవర్" },
    { en: "cloth bag", te: "గుడ్డ సంచి" },
  ],
  grammar: ["politeness-softening", "connectors", "will", "articles"],
  topics: ["shopping", "neighbours", "market"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Saying no kindly", te: "మర్యాదగా ఒప్పుకోకపోవడం" },
      body: {
        en: "To disagree politely, first show you heard: I see your point, but … Or say I'm not so sure. Never say You are wrong; it sounds rude.",
        te: "ఒప్పుకోకపోతే ముందు I see your point, but … అనండి, లేదా I'm not so sure అనండి. You are wrong అనకండి; అది మొరటుగా ఉంటుంది.",
      },
      bridge: {
        te: ["మీరు చెప్పేది అర్థమైంది,", "కానీ", "ప్లాస్టిక్ సంచులు పెద్ద సమస్య"],
        en: [
          { text: "I", role: "who" },
          { text: "see", role: "action" },
          { text: "your point,", role: "what" },
          { text: "but plastic bags are a big problem", role: "what" },
        ],
      },
      examples: [
        { en: "I see your point, but plastic bags are a big problem.", te: "మీరు చెప్పేది అర్థమైంది, కానీ ప్లాస్టిక్ సంచులు పెద్ద సమస్య." },
        { en: "I'm not so sure the shops will lose customers.", te: "షాపులకి కస్టమర్లు తగ్గిపోతారని నాకు అంత నమ్మకం లేదు." },
        { en: "I don't really agree. A cloth bag is easy to carry.", te: "నేను అంతగా ఒప్పుకోను. గుడ్డ సంచి మోయడం తేలిక." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Soft or clear?", te: "మెత్తగానా, స్పష్టంగానా?" },
      items: [
        {
          form: "I see your point, but …",
          useFor: { en: "Show you listened, then give your view.", te: "విన్నానని చూపించి, తర్వాత మీ అభిప్రాయం చెప్పడానికి." },
          example: { en: "I see your point, but people will soon bring their own bags.", te: "మీరు చెప్పేది అర్థమైంది, కానీ జనం త్వరలోనే సొంత సంచులు తెచ్చుకుంటారు." },
        },
        {
          form: "I'm not so sure …",
          useFor: { en: "Gently say you doubt it.", te: "మీకు నమ్మకం లేదని మెత్తగా చెప్పడానికి." },
          example: { en: "I'm not so sure. Paper bags tear very easily.", te: "నాకు అంత నమ్మకం లేదు. పేపర్ సంచులు చాలా తేలిగ్గా చిరిగిపోతాయి." },
        },
        {
          form: "I don't really agree.",
          useFor: { en: "A soft no, among friends.", te: "స్నేహితుల మధ్య మెత్తగా 'ఒప్పుకోను' అనడానికి." },
          example: { en: "I don't really agree. A cloth bag is easy to carry.", te: "నేను అంతగా ఒప్పుకోను. గుడ్డ సంచి మోయడం తేలిక." },
        },
        {
          form: "Sorry, I disagree.",
          useFor: { en: "A clear no, but still polite.", te: "స్పష్టంగా 'ఒప్పుకోను', అయినా మర్యాదగా." },
          example: { en: "Sorry, I disagree. The ban is good for our town.", te: "సారీ, నేను ఒప్పుకోను. ఈ నిషేధం మన ఊరికి మంచిదే." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "You are wrong. Plastic bags are a big problem.",
      right: "I see your point, but plastic bags are a big problem.",
      why: {
        en: "You are wrong sounds rude in English; first show you understood, then disagree.",
        te: "You are wrong అంటే మొరటుగా ఉంటుంది; ముందు అర్థమైందని చెప్పి, తర్వాత మీ మాట చెప్పండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Plastic bags are big problem.",
      right: "Plastic bags are a big problem.",
      why: {
        en: "One problem needs a before it, even with big in the middle; Telugu has no word for a.",
        te: "ఒక సమస్యకి ముందు a కావాలి, మధ్యలో big ఉన్నా సరే; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend says the plastic ban is bad for small shops. You disagree. Say it kindly.",
        te: "ప్లాస్టిక్ నిషేధం చిన్న షాపులకి మంచిది కాదని స్నేహితులు అంటున్నారు. మీరు ఒప్పుకోవట్లేదు. మర్యాదగా చెప్పండి.",
      },
      options: [
        "I see your point, but the ban is good for our town.",
        "You are wrong. The ban is good for our town.",
        "I see your point, so the ban is good for our town.",
      ],
      answer: 0,
      why: {
        en: "Show that you heard first, then use but for the other side; You are wrong sounds rude.",
        te: "ముందు విన్నానని చూపించి, వేరే వైపు చెప్పడానికి but వాడండి; You are wrong మొరటుగా ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "readIt",
      kind: "sign",
      heading: "Sri Venkateswara Kirana Store",
      lines: ["No plastic bags here.", "Please bring your own cloth bag.", "Cloth bags: 10 rupees each."],
      prompt: { en: "You see this at the kirana shop. What should you do?", te: "కిరాణా షాపులో ఇది కనిపించింది. మీరు ఏం చేయాలి?" },
      options: ["Bring your own bag", "Ask for a plastic bag", "Bring a paper bag"],
      answer: 0,
      why: {
        en: "The second line asks every customer to carry a cloth bag from home.",
        te: "రెండో లైన్‌లో ఇంటి నుంచి గుడ్డ సంచి తెచ్చుకోమని ఉంది.",
      },
      say: "Please bring your own cloth bag.",
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The shopkeeper asks how many cloth bags you want. Say three.",
        te: "ఎన్ని గుడ్డ సంచులు కావాలని షాపు యజమాని అడుగుతున్నారు. మూడు అని చెప్పండి.",
      },
      options: ["Three cloth bags, please.", "Three cloth bag, please.", "Cloth bag three, please."],
      answer: 0,
      why: {
        en: "After three, the thing takes s, and in English the number comes first.",
        te: "మూడు తర్వాత వస్తువుకి s వస్తుంది; ఇంగ్లీష్‌లో సంఖ్య ముందు వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Plastic bags block the drains in rainy season.",
      wrongIndex: 6,
      fix: "Plastic bags block the drains in the rainy season.",
      why: {
        en: "Seasons like the rainy season take the; Telugu వర్షాకాలంలో has no such word.",
        te: "the rainy season లాగా ఋతువులకి the కావాలి; తెలుగులో 'వర్షాకాలంలో' కి అలాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour says the shops will lose customers. You doubt it. Say so gently.",
        te: "షాపులకి కస్టమర్లు తగ్గిపోతారని పక్కింటివారు అంటున్నారు. మీకు నమ్మకం లేదు. మెత్తగా చెప్పండి.",
      },
      expected: ["I'm not so sure the shops will lose customers.", "I'm not so sure about that.", "I'm not so sure."],
      options: [
        "I'm not so sure the shops will lose customers.",
        "I'm not so sure the shops will losing customers.",
        "Nonsense. The shops will not lose customers.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: Don't you like the plastic ban? You do like it. Answer.",
        te: "స్నేహితులు అడుగుతున్నారు: Don't you like the plastic ban? మీకు నచ్చింది. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I do. It keeps our town clean.", "Yes, I do.", "Yes, I like it."],
      options: ["Yes, I do. It keeps our town clean.", "No, I do. It keeps our town clean.", "No. It keeps our town clean."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A friendly disagreement", te: "స్నేహంగా భిన్నాభిప్రాయం" },
    scene: {
      en: "You go to Rani's kirana shop. From today, the town does not allow plastic bags.",
      te: "మీరు రాణి గారి కిరాణా షాపుకి వెళ్ళారు. ఈ రోజు నుంచి ఊర్లో ప్లాస్టిక్ సంచులు నిషేధం.",
    },
    partner: { en: "Rani (the kirana shop owner)", te: "రాణి (కిరాణా షాపు యజమాని)" },
    skills: [
      { id: "disagree", label: { en: "Disagreeing politely", te: "మర్యాదగా ఒప్పుకోకపోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Sorry, from today I can't give plastic bags.",
        te: "నమస్కారం! సారీ, ఈ రోజు నుంచి ప్లాస్టిక్ సంచులు ఇవ్వలేను.",
        hint: { en: "Greet her, and say it's fine: you brought your own bag.", te: "నమస్కారం చెప్పి, పర్లేదు, సొంత సంచి తెచ్చుకున్నానని చెప్పండి." },
        replies: [
          { say: "Good morning! No problem, I brought my own bag.", good: true, skill: "polite" },
          { say: "Good morning! No problem, I bringed my own bag.", good: false, skill: "polite" },
        ],
      },
      {
        partner: "Good. But I think the ban is bad for small shops like mine.",
        te: "మంచిది. కానీ ఈ నిషేధం నా లాంటి చిన్న షాపులకి మంచిది కాదని నాకు అనిపిస్తోంది.",
        hint: { en: "Show you understand her, but say plastic bags are a big problem.", te: "ఆవిడ మాట అర్థమైందని చెప్పి, ప్లాస్టిక్ సంచులు పెద్ద సమస్య అని చెప్పండి." },
        replies: [
          { say: "I see your point, but plastic bags are a big problem.", good: true, skill: "disagree" },
          {
            say: "You are wrong. Plastic is a big problem.",
            good: false,
            skill: "polite",
            react: { en: "Wrong? I'm only telling you my worry.", te: "తప్పా? నా బాధ మీకు చెప్తున్నాను, అంతే." },
          },
        ],
      },
      {
        partner: "Customers will go to the big supermarket now.",
        te: "ఇప్పుడు కస్టమర్లు పెద్ద సూపర్‌మార్కెట్‌కి వెళ్ళిపోతారు.",
        hint: { en: "Say gently that you doubt it, and that people like her shop.", te: "మీకు నమ్మకం లేదని మెత్తగా చెప్పి, జనానికి ఆవిడ షాపు ఇష్టమని చెప్పండి." },
        replies: [
          { say: "I'm not so sure. People like your shop.", good: true, skill: "disagree" },
          { say: "I'm not so sure. People likes your shop.", good: false, skill: "disagree" },
        ],
      },
      {
        partner: "Maybe you're right. Here are your things. Two hundred rupees.",
        te: "మీరు చెప్పింది నిజమేనేమో. ఇదిగోండి మీ సరుకులు. రెండు వందల రూపాయలు.",
        hint: { en: "Give her the money, and thank her.", te: "డబ్బులిచ్చి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Here are two hundred rupees. Thank you!", good: true, skill: "polite" },
          { say: "Here are two hundreds rupees. Thank you!", good: false, skill: "polite", fixIt: "plural" },
        ],
      },
    ],
  },
};

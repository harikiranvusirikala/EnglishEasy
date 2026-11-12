import type { Lesson } from "../../types";

/** Week 71, Day 4 (CURRICULUM §5): the present perfect for changes in daily life — Most people have started paying by UPI. */
export const day: Lesson = {
  id: "the-way-we-shop-has-changed",
  kind: "lesson",
  title: { en: "The Way We Shop Has Changed", te: "మనం కొనే తీరు మారింది" },
  subtitle: "have started, have stopped",
  summary: {
    en: "Learn to talk about changes in daily life: Most people have started paying by UPI. We have stopped writing letters.",
    te: "రోజువారీ జీవితంలో మార్పుల గురించి చెప్పడం నేర్చుకుందాం: Most people have started paying by UPI. We have stopped writing letters.",
  },
  seo: {
    title: "Talking About Changes in Daily Life in English for Telugu Speakers",
    description: "Say Most people have started paying by UPI and We have stopped writing letters. Simple lessons for Telugu speakers on how life has changed.",
  },
  pattern: [
    { text: "Most people", role: "who" },
    { text: "have started", role: "action" },
    { text: "paying by UPI", role: "what" },
  ],
  core: [
    { en: "Most people have started paying by UPI.", te: "చాలామంది UPI తో డబ్బులు కట్టడం మొదలుపెట్టారు.", extra: ["pay"] },
    { en: "We have stopped writing letters.", te: "మనం ఉత్తరాలు రాయడం మానేశాం.", extra: ["write"] },
    { en: "The way we shop has changed.", te: "మనం కొనే తీరు మారింది.", extra: ["have"] },
    { en: "Has your business changed a lot?", te: "మీ వ్యాపారం చాలా మారిందా?", extra: ["Have"] },
    { en: "Many people have started ordering groceries online.", te: "చాలామంది ఆన్‌లైన్‌లో సరుకులు ఆర్డర్ చేయడం మొదలుపెట్టారు.", extra: ["order"] },
    { en: "Fewer customers pay in cash these days.", te: "ఈ రోజుల్లో cash ఇచ్చే కస్టమర్లు తక్కువ.", extra: ["less"] },
    { en: "I have run this shop for thirty years.", te: "ముప్పై ఏళ్ళుగా నేను ఈ షాపు నడుపుతున్నాను.", extra: ["since"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Notice one thing people do differently now from ten years ago. Say it aloud: People have started …",
    te: "పదేళ్ళ క్రితానికి, ఇప్పటికి ప్రజలు వేరేగా చేస్తున్న ఒక పని గమనించండి. గట్టిగా చెప్పండి: People have started …",
  },
  words: [
    { en: "the way", te: "తీరు, పద్ధతి" },
    { en: "cash", te: "నగదు, cash" },
    { en: "customers", te: "కస్టమర్లు, కొనేవాళ్ళు" },
    { en: "business", te: "వ్యాపారం" },
    { en: "fewer", te: "ఇంకా తక్కువ మంది" },
  ],
  grammar: ["present-perfect", "gerunds-infinitives"],
  topics: ["shopping", "technology", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Changes in daily life", te: "రోజువారీ జీవితంలో మార్పులు" },
      body: {
        en: "For a change that began in the past and is true now, say have started or have stopped with -ing: We have stopped writing letters.",
        te: "ముందు మొదలై ఇప్పటికీ నిజమైన మార్పుకి have started, have stopped తర్వాత -ing వాడండి: We have stopped writing letters.",
      },
      bridge: {
        te: ["చాలామంది", "UPI తో కట్టడం", "మొదలుపెట్టారు"],
        en: [
          { text: "Most people", role: "who" },
          { text: "have started", role: "action" },
          { text: "paying by UPI", role: "what" },
        ],
      },
      examples: [
        { en: "Most people have started paying by UPI.", te: "చాలామంది UPI తో డబ్బులు కట్టడం మొదలుపెట్టారు." },
        { en: "We have stopped writing letters.", te: "మనం ఉత్తరాలు రాయడం మానేశాం." },
        { en: "The way we shop has changed.", te: "మనం కొనే తీరు మారింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Started, stopped or changed", te: "మొదలైంది, ఆగిపోయింది, మారింది" },
      items: [
        {
          form: "have started + -ing",
          useFor: { en: "Something new that people do now.", te: "ఇప్పుడు కొత్తగా చేస్తున్న పని." },
          example: { en: "Many people have started ordering groceries online.", te: "చాలామంది ఆన్‌లైన్‌లో సరుకులు ఆర్డర్ చేయడం మొదలుపెట్టారు." },
        },
        {
          form: "have stopped + -ing",
          useFor: { en: "Something people don't do any more.", te: "ఇప్పుడు ఎవరూ చేయని పని." },
          example: { en: "We have stopped writing letters.", te: "మనం ఉత్తరాలు రాయడం మానేశాం." },
        },
        {
          form: "has changed",
          useFor: { en: "Something is different now.", te: "ఏదైనా ఇప్పుడు వేరేగా ఉంది." },
          example: { en: "The way we shop has changed.", te: "మనం కొనే తీరు మారింది." },
        },
        {
          form: "have … for",
          useFor: { en: "How long, up to now.", te: "ఇప్పటి వరకూ ఎంత కాలంగా." },
          example: { en: "I have run this shop for thirty years.", te: "ముప్పై ఏళ్ళుగా నేను ఈ షాపు నడుపుతున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am running this shop for thirty years.",
      right: "I have run this shop for thirty years.",
      why: {
        en: "For time up to now, English uses have; don't copy Telugu నడుపుతున్నాను as am running.",
        te: "ఇప్పటి వరకూ ఉన్న కాలానికి ఇంగ్లీష్‌లో have వాడాలి; 'నడుపుతున్నాను' ని am running అని మార్చకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "We have stopped to write letters.",
      right: "We have stopped writing letters.",
      why: {
        en: "Stopped to write means you paused in order to write; for a habit that ended, use -ing.",
        te: "stopped to write అంటే రాయడానికి ఆగారని అర్థం; అలవాటు మానేశారంటే -ing వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Usha owns a kirana shop. Tell a visitor about her.", te: "ఉష గారికి ఒక కిరాణా షాపు ఉంది. వచ్చినవారికి ఆవిడ గురించి చెప్పండి." },
      options: ["She has a small kirana shop.", "She is having a small kirana shop.", "She have a small kirana shop."],
      answer: 0,
      why: {
        en: "Have for owning is a state, so it takes no -ing; with she, use has.",
        te: "సొంతంగా ఉండటం (have) ఒక స్థితి, అందుకే -ing రాదు; she తో has వాడాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Most people have started ___ by UPI.",
      te: "చాలామంది UPI తో కట్టడం మొదలుపెట్టారు.",
      options: ["paying", "pay", "paid"],
      answer: 0,
      why: {
        en: "After started, the action takes -ing or to, never the plain verb.",
        te: "started తర్వాత పనికి -ing లేదా to కావాలి; verb అలాగే రాదు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Usha Kirana Store",
      lines: ["Dear customers,", "Now you can order on WhatsApp.", "Send your list before 11 am.", "Free home delivery above 500 rupees.", "Pay by UPI or cash."],
      prompt: { en: "Usha sent this message. When must you send your list?", te: "ఉష గారు ఈ మెసేజ్ పంపారు. మీ సరుకుల లిస్ట్ ఎప్పటిలోగా పంపాలి?" },
      options: ["Before 11 am", "After 11 am", "Above 500 rupees"],
      answer: 0,
      why: {
        en: "The third line asks for the list before eleven in the morning.",
        te: "మూడో లైన్‌లో పొద్దున పదకొండు లోపు లిస్ట్ పంపమని ఉంది.",
      },
      say: "Send your list before 11 am.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My neighbour pay all his bills by UPI now.",
      wrongIndex: 2,
      fix: "My neighbour pays all his bills by UPI now.",
      why: {
        en: "One person, like he or she, takes s on the verb: pays, buys, orders.",
        te: "ఒక్కరైతే (he, she) verb కి s వస్తుంది: pays, buys, orders.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A visitor asks how people pay at shops now. Say most people use UPI.",
        te: "ఇప్పుడు షాపుల్లో డబ్బులు ఎలా కడుతున్నారని ఒకరు అడిగారు. చాలామంది UPI వాడుతున్నారని చెప్పండి.",
      },
      expected: ["Most people have started paying by UPI.", "Most people have started using UPI.", "Most people pay by UPI now.", "Most people use UPI now."],
      options: ["Most people have started paying by UPI.", "Most people have started pay by UPI.", "Most people has started paying by UPI."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have lived here. Say twenty years.",
        te: "మీరు ఇక్కడ ఎంత కాలంగా ఉంటున్నారని కొత్తగా వచ్చిన పక్కింటివారు అడిగారు. ఇరవై ఏళ్ళు అని చెప్పండి.",
      },
      expected: ["I have lived here for twenty years.", "I've lived here for twenty years.", "I have been living here for twenty years.", "For twenty years."],
      options: ["I have lived here for twenty years.", "I am living here for twenty years.", "I have lived here since twenty years."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "At the kirana shop", te: "కిరాణా షాపులో" },
    scene: {
      en: "You buy rice and dal at Usha's kirana shop. She has run it for many years. You chat about her business.",
      te: "మీరు ఉష గారి కిరాణా షాపులో బియ్యం, పప్పు కొంటున్నారు. ఆవిడ చాలా ఏళ్ళుగా ఈ షాపు నడుపుతున్నారు. ఆవిడ వ్యాపారం గురించి మాట్లాడుతున్నారు.",
    },
    partner: { en: "Usha (kirana shop owner)", te: "ఉష (కిరాణా షాపు యజమాని)" },
    skills: [
      { id: "change", label: { en: "Talking about change", te: "మార్పుల గురించి మాట్లాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! The usual rice and dal today?",
        te: "హలో! ఈ రోజు కూడా ఎప్పటిలాగే బియ్యం, పప్పేనా?",
        hint: { en: "Say yes, and ask if her business is very different now.", te: "అవునని చెప్పి, ఆవిడ వ్యాపారం ఇప్పుడు చాలా మారిందా అని అడగండి." },
        replies: [
          { say: "Yes, please. Has your business changed a lot?", good: true, skill: "change" },
          { say: "Yes, please. Your business has changed a lot?", good: false, skill: "change", fixIt: "question" },
        ],
      },
      {
        partner: "Yes! Most customers have started paying by UPI.",
        te: "అవునండీ! చాలామంది కస్టమర్లు UPI తో కట్టడం మొదలుపెట్టారు.",
        hint: { en: "Ask if anyone still pays with notes and coins.", te: "ఇంకా ఎవరైనా నోట్లు, చిల్లరతో కడుతున్నారా అని అడగండి." },
        replies: [
          { say: "Do people still pay in cash?", good: true, skill: "change" },
          { say: "People still paying in cash?", good: false, skill: "change", fixIt: "be" },
        ],
      },
      {
        partner: "Very few. Many order on WhatsApp now, so I've started home delivery.",
        te: "చాలా తక్కువ మంది. చాలామంది ఇప్పుడు WhatsApp లో ఆర్డర్ చేస్తున్నారు, అందుకే నేను home delivery మొదలుపెట్టాను.",
        hint: { en: "Praise the idea, and say it helps older people.", te: "ఆ ఆలోచనని మెచ్చుకుని, పెద్దవాళ్ళకి ఉపయోగమని చెప్పండి." },
        replies: [
          { say: "That's great! It's very useful for older people.", good: true, skill: "polite" },
          {
            say: "Delivery? Old shops like yours will close soon.",
            good: false,
            skill: "polite",
            react: { en: "I hope not! I've been here for thirty years.", te: "అలా జరగకూడదండీ! ముప్పై ఏళ్ళుగా ఇక్కడే ఉన్నాను." },
          },
        ],
      },
      {
        partner: "Thank you! Here's your rice and dal. That's 450 rupees.",
        te: "థాంక్యూ! ఇదిగోండి మీ బియ్యం, పప్పు. మొత్తం 450 రూపాయలు.",
        hint: { en: "Say how you will pay, and thank her.", te: "ఎలా కడతారో చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "I'll pay by UPI. Thank you!", good: true, skill: "polite" },
          { say: "I'll pay in UPI. Thank you!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

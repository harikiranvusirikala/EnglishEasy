import type { Lesson } from "../../types";

/** Week 48, Day 4 (CURRICULUM §5): What will you do if …? questions and answers — getting ready for a festival evening. */
export const day: Lesson = {
  id: "what-if-the-power-goes-off",
  kind: "lesson",
  title: { en: "What Will You Do If …?", te: "ఒకవేళ … అయితే?" },
  subtitle: "What will you do if …?",
  summary: {
    en: "Learn to ask and answer about plans for problems: What will you do if the power goes off? If it goes off, I'll use the emergency light.",
    te: "సమస్య వస్తే ప్లాన్ ఏంటని అడగడం, జవాబు చెప్పడం నేర్చుకుందాం: What will you do if the power goes off? If it goes off, I'll use the emergency light.",
  },
  seo: {
    title: "What Will You Do If in English for Telugu Speakers",
    description:
      "Ask What will you do if the power goes off? and answer If it goes off, I'll use the emergency light. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "What will", role: "action" },
    { text: "you", role: "who" },
    { text: "do", role: "action" },
    { text: "if the power goes off?", role: "when" },
  ],
  core: [
    { en: "What will you do if the power goes off?", te: "కరెంట్ పోతే మీరు ఏం చేస్తారు?", extra: ["go"] },
    { en: "If the power goes off, I'll use the emergency light.", te: "కరెంట్ పోతే, ఎమర్జెన్సీ లైట్ వాడతాను.", extra: ["will"] },
    { en: "What will you do if it rains on Diwali?", te: "దీపావళి రోజు వర్షం పడితే మీరు ఏం చేస్తారు?", extra: ["in"] },
    { en: "If the inverter stops, we'll light some lamps.", te: "ఇన్వర్టర్ ఆగిపోతే, కొన్ని దీపాలు వెలిగిస్తాం.", extra: ["stop"] },
    { en: "What will we do if the guests come early?", te: "అతిథులు తొందరగా వస్తే మనం ఏం చేద్దాం?", extra: ["comes"] },
    { en: "If my phone battery is low, I'll use the power bank.", te: "నా ఫోన్ బ్యాటరీ తక్కువగా ఉంటే, పవర్ బ్యాంక్ వాడతాను.", extra: ["was"] },
    { en: "What will you do if the shops are closed?", te: "షాపులు మూసి ఉంటే మీరు ఏం చేస్తారు?", extra: ["is"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Ask a neighbour or friend one question today: What will you do if …?",
    te: "ఈ రోజు పక్కింటివారిని గానీ స్నేహితులని గానీ ఒక ప్రశ్న అడగండి: What will you do if …?",
  },
  words: [
    { en: "what if", te: "ఒకవేళ … అయితే?" },
    { en: "emergency light", te: "ఎమర్జెన్సీ లైట్" },
    { en: "inverter", te: "ఇన్వర్టర్" },
    { en: "power bank", te: "పవర్ బ్యాంక్" },
    { en: "fully charged", te: "పూర్తిగా చార్జ్ అయి ఉండటం" },
  ],
  grammar: ["conditionals", "question-words", "will"],
  topics: ["home", "festivals", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What will you do if …?", te: "ఒకవేళ … అయితే ఏం చేస్తారు?" },
      body: {
        en: "To ask about a plan for a problem, say What will you do if …? The if part stays in the present. Answer with If …, I'll …",
        te: "ఏదైనా సమస్య వస్తే ప్లాన్ ఏంటని అడగాలంటే What will you do if …? అనండి. if భాగం present లోనే ఉంటుంది. జవాబు: If …, I'll …",
      },
      bridge: {
        te: ["కరెంట్ పోతే", "మీరు", "ఏం", "చేస్తారు?"],
        en: [
          { text: "What will", role: "action" },
          { text: "you", role: "who" },
          { text: "do", role: "action" },
          { text: "if the power goes off?", role: "when" },
        ],
      },
      examples: [
        { en: "What will you do if the power goes off?", te: "కరెంట్ పోతే మీరు ఏం చేస్తారు?" },
        { en: "If the power goes off, I'll use the emergency light.", te: "కరెంట్ పోతే, ఎమర్జెన్సీ లైట్ వాడతాను." },
        { en: "What will you do if it rains on Diwali?", te: "దీపావళి రోజు వర్షం పడితే మీరు ఏం చేస్తారు?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking and answering", te: "అడగడం, జవాబు చెప్పడం" },
      items: [
        {
          form: "What will you do if …?",
          useFor: { en: "Ask about someone's plan.", te: "ఎదుటివారి ప్లాన్ అడగడానికి." },
          example: { en: "What will you do if the shops are closed?", te: "షాపులు మూసి ఉంటే మీరు ఏం చేస్తారు?" },
        },
        {
          form: "What if …?",
          useFor: { en: "A short, friendly way to ask the same.", te: "అదే ప్రశ్న, చిన్నగా, స్నేహంగా." },
          example: { en: "What if the guests come early?", te: "ఒకవేళ అతిథులు తొందరగా వస్తే?" },
        },
        {
          form: "If …, I'll …",
          useFor: { en: "Give your answer.", te: "మీ జవాబు చెప్పడానికి." },
          example: { en: "If my phone battery is low, I'll use the power bank.", te: "నా ఫోన్ బ్యాటరీ తక్కువగా ఉంటే, పవర్ బ్యాంక్ వాడతాను." },
        },
        {
          form: "Will you … if …?",
          useFor: { en: "A yes or no question.", te: "అవును, లేదు అని జవాబు వచ్చే ప్రశ్న." },
          example: { en: "Will you come if it rains?", te: "వర్షం పడితే మీరు వస్తారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you will do if the power goes off?",
      right: "What will you do if the power goes off?",
      why: {
        en: "In a question, will comes before you; Telugu keeps the normal order.",
        te: "ప్రశ్నలో will, you కంటే ముందు వస్తుంది; తెలుగులో మాటల వరుస మారదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "What will you do if the power go off?",
      right: "What will you do if the power goes off?",
      why: {
        en: "The power is one thing, like he or she, so go takes es.",
        te: "కరెంట్ ఒక్కటే, he, she లాగా; అందుకే go కి es వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your neighbour asks your plan if the power goes off tonight. Answer.",
        te: "ఈ రాత్రి కరెంట్ పోతే మీ ప్లాన్ ఏంటని పక్కింటివారు అడుగుతున్నారు. జవాబు చెప్పండి.",
      },
      options: [
        "If the power goes off, I'll use the emergency light.",
        "If the power will go off, I'll use the emergency light.",
        "If the power goes off, I'll using the emergency light.",
      ],
      answer: 0,
      why: {
        en: "The if part stays in the present, and I'll takes a plain verb.",
        te: "if భాగం present లోనే ఉంటుంది; I'll తర్వాత verb అలాగే వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "If the inverter stops, we'll light ten ___.",
      te: "ఇన్వర్టర్ ఆగిపోతే, పది దీపాలు వెలిగిస్తాం.",
      options: ["lamps", "lamp", "a lamp"],
      answer: 0,
      why: {
        en: "After ten, lamp takes s; Telugu దీపాలు also shows more than one.",
        te: "పది తర్వాత lamp కి s వస్తుంది; తెలుగులోనూ 'దీపం' కాదు, 'దీపాలు' అంటాం.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "notice",
      heading: "Power Cut Notice",
      lines: [
        "Dear residents of Gandhi Nagar,",
        "There will be no power on Sunday, from 9 am to 2 pm.",
        "Our team will repair the line near the water tank.",
        "If the work finishes early, the power will come back early.",
        "If it rains heavily, the work will move to Monday.",
        "Please keep your phones and emergency lights fully charged.",
        "For help, call one nine one two.",
        "Assistant Engineer, Electricity Department",
      ],
      questions: [
        {
          prompt: { en: "When will there be no power?", te: "కరెంట్ ఎప్పుడు ఉండదు?" },
          options: ["On Sunday, from 9 am to 2 pm", "On Monday, all day", "On Sunday evening"],
          answer: 0,
        },
        {
          prompt: { en: "What will happen if it rains heavily?", te: "జోరుగా వర్షం పడితే ఏమవుతుంది?" },
          options: ["The work will move to Monday", "The power will come back early", "The work will start at night"],
          answer: 0,
          why: {
            en: "The fifth line says heavy rain will push the work to the next day.",
            te: "జోరు వర్షం పడితే పని మరుసటి రోజుకి వెళ్తుందని ఐదో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "What should the residents do before Sunday?", te: "ఆదివారం లోపు కాలనీ వాళ్ళు ఏం చేయాలి?" },
          options: ["Charge their phones and emergency lights", "Call the engineer", "Buy new lamps"],
          answer: 0,
          why: {
            en: "The notice asks everyone to keep their phones and lights ready with full charge.",
            te: "ఫోన్లు, లైట్లు పూర్తిగా చార్జ్ చేసి ఉంచమని నోటీసులో అడిగారు.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "If the shops closed, we'll buy sweets tomorrow.",
      wrongIndex: 3,
      fix: "If the shops are closed, we'll buy sweets tomorrow.",
      why: {
        en: "Closed describes the shops, so English needs are before it; Telugu మూసి ఉంటే hides it.",
        te: "closed షాపుల స్థితి చెప్తోంది, అందుకే ముందు are కావాలి; తెలుగు 'మూసి ఉంటే' లో అది కనిపించదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour what she will do if it rains on Diwali.",
        te: "దీపావళి రోజు వర్షం పడితే ఏం చేస్తారని పక్కింటావిడని అడగండి.",
      },
      expected: ["What will you do if it rains on Diwali?", "What if it rains on Diwali?", "What will you do if it rains?"],
      options: ["What will you do if it rains on Diwali?", "What you will do if it rains on Diwali?", "What will you do if it will rain on Diwali?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A friend asks: Will you come to the Diwali party if it rains? Say yes, you'll come with an umbrella.",
        te: "వర్షం పడితే దీపావళి పార్టీకి వస్తారా? అని స్నేహితులు అడుగుతున్నారు. వస్తాను, గొడుగు తెచ్చుకుంటాను అని చెప్పండి.",
      },
      expected: ["Yes, I'll come with an umbrella.", "Yes, if it rains, I'll bring an umbrella.", "Yes, I'll still come."],
      options: ["Yes, I'll come with an umbrella.", "Yes, I'll come with umbrella.", "Yes, if it will rain, I'll come with an umbrella."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Ready for Diwali evening", te: "దీపావళి సాయంత్రానికి రెడీ" },
    scene: {
      en: "It is Diwali. Your neighbour Ramesh is hosting the colony's evening pooja on his terrace. He asks if you're ready.",
      te: "ఈ రోజు దీపావళి. పక్కింటి రమేష్ గారు వాళ్ళ డాబా మీద కాలనీ వాళ్ళకి సాయంత్రం పూజ పెడుతున్నారు. మీరు రెడీనా అని ఆయన అడుగుతున్నారు.",
    },
    partner: { en: "Ramesh (your neighbour)", te: "రమేష్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "whatif", label: { en: "Asking What if", te: "What if అని అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Are you ready for this evening? Everyone is coming at seven.",
        te: "హలో! ఈ సాయంత్రానికి రెడీనా? అందరూ ఏడింటికి వస్తున్నారు.",
        hint: { en: "Say yes, and ask what he'll do if the power goes off.", te: "రెడీ అని, కరెంట్ పోతే ఏం చేస్తారని ఆయన్ని అడగండి." },
        replies: [
          { say: "Yes! But what will you do if the power goes off?", good: true, skill: "whatif" },
          { say: "Almost! What if the power goes off?", good: true, skill: "whatif" },
          { say: "Yes! But what you will do if the power goes off?", good: false, skill: "whatif", fixIt: "question" },
        ],
      },
      {
        partner: "Don't worry. If the power goes off, the inverter will work.",
        te: "కంగారు పడకండి. కరెంట్ పోతే, ఇన్వర్టర్ పనిచేస్తుంది.",
        hint: { en: "Ask what you'll all do if the inverter stops too.", te: "ఇన్వర్టర్ కూడా ఆగిపోతే ఏం చేద్దామని అడగండి." },
        replies: [
          { say: "And if the inverter stops, what will we do?", good: true, skill: "whatif" },
          { say: "And if the inverter will stop, what will we do?", good: false, skill: "whatif" },
        ],
      },
      {
        partner: "Then we'll light the lamps! I've bought fifty.",
        te: "అప్పుడు దీపాలు వెలిగిద్దాం! యాభై కొన్నాను.",
        hint: { en: "Say that's great, and offer to bring your emergency light and power bank.", te: "చాలా బాగుందని, మీ ఎమర్జెన్సీ లైట్, పవర్ బ్యాంక్ తెస్తానని చెప్పండి." },
        replies: [
          { say: "Great! I'll bring my emergency light and power bank too.", good: true, skill: "polite" },
          {
            say: "Fifty lamps? What a waste of money!",
            good: false,
            skill: "polite",
            react: { en: "It's Diwali! Lamps are never a waste.", te: "దీపావళి కదండీ! దీపాలు ఎప్పుడూ వృథా కాదు." },
          },
        ],
      },
      {
        partner: "Thank you! Is your emergency light fully charged?",
        te: "థాంక్యూ! మీ ఎమర్జెన్సీ లైట్ పూర్తిగా చార్జ్ అయి ఉందా?",
        hint: { en: "Say yes, and say you'll see him at seven.", te: "అవును అని, ఏడింటికి కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Yes, it's fully charged. See you at seven!", good: true, skill: "polite" },
          { say: "Yes, it fully charged. See you at seven!", good: false, skill: "polite", fixIt: "be" },
        ],
      },
    ],
  },
};

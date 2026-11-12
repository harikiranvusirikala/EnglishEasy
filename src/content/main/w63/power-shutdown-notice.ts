import type { Lesson } from "../../types";

/** Week 63, Day 3 (CURRICULUM §5): notices with will be + done form — Power supply will be interrupted from ten to two. */
export const day: Lesson = {
  id: "power-shutdown-notice",
  kind: "lesson",
  title: { en: "Supply Will Be Interrupted", te: "కరెంట్ ఉండదు" },
  subtitle: "notices about power cuts and closures",
  summary: {
    en: "Understand notices about power cuts and closures: Power supply will be interrupted from ten to two.",
    te: "కరెంట్ కోత, ఆఫీసు సెలవుల నోటీసులు అర్థం చేసుకుందాం: Power supply will be interrupted from ten to two.",
  },
  seo: {
    title: "Reading Notices in English for Telugu Speakers",
    description:
      "Understand notices like Power supply will be interrupted and The office will remain closed. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "Power supply", role: "who" },
    { text: "will be interrupted", role: "action" },
    { text: "from ten to two", role: "when" },
  ],
  core: [
    { en: "There will be a power cut on Sunday.", te: "ఆదివారం కరెంట్ కోత ఉంటుంది.", extra: ["in"] },
    { en: "Power supply will be interrupted from ten to two.", te: "పది నుంచి రెండు వరకు కరెంట్ సరఫరా ఆగిపోతుంది.", extra: ["interrupt"] },
    { en: "The office will remain closed on Monday.", te: "సోమవారం ఆఫీసు మూసే ఉంటుంది.", extra: ["close"] },
    { en: "What does the notice say?", te: "నోటీసులో ఏం ఉంది?", extra: ["says"] },
    { en: "Water will not be supplied tomorrow morning.", te: "రేపు పొద్దున నీళ్ళు రావు.", extra: ["supply"] },
    { en: "Please store enough water on Saturday night.", te: "శనివారం రాత్రే సరిపడా నీళ్ళు పట్టి పెట్టుకోండి.", extra: ["much"] },
    { en: "We regret the inconvenience caused to residents.", te: "ఇక్కడ ఉండేవారికి ఇబ్బంది కలిగినందుకు చింతిస్తున్నాం.", extra: ["sorry"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Read one notice near your home, at a shop, bank or temple. Tell someone what it says.",
    te: "మీ ఇంటి దగ్గర, షాపులో, బ్యాంక్‌లో లేదా గుడి దగ్గర ఏదైనా ఒక నోటీసు చదవండి. అందులో ఏముందో ఎవరికైనా చెప్పండి.",
  },
  words: [
    { en: "interrupted", te: "మధ్యలో ఆగిపోవడం" },
    { en: "remain closed", te: "మూసే ఉంటుంది" },
    { en: "notice board", te: "నోటీసు బోర్డు" },
    { en: "inconvenience", te: "ఇబ్బంది, అసౌకర్యం" },
    { en: "residents", te: "అక్కడ ఉండేవారు, నివాసితులు" },
  ],
  grammar: ["passive-voice", "will", "there-is-are"],
  topics: ["neighbours", "home", "offices"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How notices tell what will happen", te: "జరగబోయేది నోటీసులు ఎలా చెప్తాయి" },
      body: {
        en: "Notices tell what will happen with will be + done form. Power supply will be interrupted means there will be no power for some time.",
        te: "జరగబోయేది నోటీసులు will be + పూర్తయిన రూపంతో చెప్తాయి. Power supply will be interrupted అంటే కొంతసేపు కరెంట్ ఉండదు.",
      },
      bridge: {
        te: ["పది నుంచి రెండు వరకు", "కరెంట్ సరఫరా", "ఆగిపోతుంది"],
        en: [
          { text: "Power supply", role: "who" },
          { text: "will be interrupted", role: "action" },
          { text: "from ten to two", role: "when" },
        ],
      },
      examples: [
        { en: "Power supply will be interrupted from ten to two.", te: "పది నుంచి రెండు వరకు కరెంట్ సరఫరా ఆగిపోతుంది." },
        { en: "Water will not be supplied tomorrow morning.", te: "రేపు పొద్దున నీళ్ళు రావు." },
        { en: "Please store enough water on Saturday night.", te: "శనివారం రాత్రే సరిపడా నీళ్ళు పట్టి పెట్టుకోండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What the notice really means", te: "నోటీసు అసలు అర్థం" },
      items: [
        {
          form: "will be interrupted",
          useFor: { en: "It will stop for some time, then come back.", te: "కొంతసేపు ఆగి, మళ్ళీ వస్తుంది." },
          example: { en: "Power supply will be interrupted from ten to two.", te: "పది నుంచి రెండు వరకు కరెంట్ సరఫరా ఆగిపోతుంది." },
        },
        {
          form: "will remain closed",
          useFor: { en: "It will not open that day.", te: "ఆ రోజు తెరవరు." },
          example: { en: "The office will remain closed on Monday.", te: "సోమవారం ఆఫీసు మూసే ఉంటుంది." },
        },
        {
          form: "will not be supplied",
          useFor: { en: "It will not come at all at that time.", te: "ఆ సమయంలో అస్సలు రాదు." },
          example: { en: "Water will not be supplied tomorrow morning.", te: "రేపు పొద్దున నీళ్ళు రావు." },
        },
        {
          form: "We regret the inconvenience",
          useFor: { en: "We are sorry for the trouble.", te: "ఇబ్బందికి సారీ." },
          example: { en: "We regret the inconvenience caused to residents.", te: "ఇక్కడ ఉండేవారికి ఇబ్బంది కలిగినందుకు చింతిస్తున్నాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "There will be power cut on Sunday.",
      right: "There will be a power cut on Sunday.",
      why: {
        en: "One power cut is one event, so it needs a; Telugu has no word like a.",
        te: "ఒక కరెంట్ కోత ఒక సంఘటన, కాబట్టి ముందు a కావాలి; తెలుగులో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "Are you knowing about the power cut?",
      right: "Do you know about the power cut?",
      why: {
        en: "Know is a state, not an action, so it never takes -ing; ask with Do you.",
        te: "know ఒక స్థితి, పని కాదు; దానికి -ing రాదు. Do you తో అడగాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour asks about the notice on the board. Tell her what it says.",
        te: "బోర్డు మీద నోటీసు గురించి పక్కింటావిడ అడుగుతున్నారు. అందులో ఏముందో చెప్పండి.",
      },
      options: [
        "The notice says there will be no water tomorrow.",
        "The notice say there will be no water tomorrow.",
        "The notice says there will no water tomorrow.",
      ],
      answer: 0,
      why: {
        en: "One notice takes says, with s, and will always needs be after it.",
        te: "ఒక్క నోటీసు కాబట్టి says, s తో; will తర్వాత ఎప్పుడూ be రావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "be",
      sentence: "The bank will ___ closed on Tuesday for Sankranti.",
      te: "సంక్రాంతి సెలవు కాబట్టి మంగళవారం బ్యాంక్ మూసి ఉంటుంది.",
      options: ["be", "is", "been"],
      answer: 0,
      why: {
        en: "After will, use be before a done form like closed; is and been never follow will.",
        te: "will తర్వాత, closed లాంటి పూర్తయిన రూపం ముందు be వస్తుంది; will తర్వాత is, been రావు.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "NOTICE",
      lines: [
        "Power supply will be interrupted",
        "on Sunday, 14 July, from 10 am to 2 pm,",
        "for repair work on the line.",
        "Water pumps will not work during this time.",
        "We regret the inconvenience.",
        "Colony Secretary",
      ],
      prompt: {
        en: "This notice is on your colony board. When will there be no power?",
        te: "మీ కాలనీ బోర్డు మీద ఈ నోటీసు ఉంది. కరెంట్ ఎప్పుడు ఉండదు?",
      },
      options: ["On Sunday, from 10 am to 2 pm", "On Monday, the whole day", "On Sunday night"],
      answer: 0,
      why: {
        en: "The second line gives both the day and the hours of the cut.",
        te: "రెండో లైన్‌లో కరెంట్ కోత ఉండే రోజు, సమయం రెండూ ఉన్నాయి.",
      },
      say: "Power supply will be interrupted on Sunday, from 10 am to 2 pm.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The office will remain closed in Monday.",
      wrongIndex: 5,
      fix: "The office will remain closed on Monday.",
      why: {
        en: "Days like Monday always take on; in is for months and years.",
        te: "Monday లాంటి రోజులకి ఎప్పుడూ on వస్తుంది; in నెలలకి, సంవత్సరాలకి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your neighbour Imran missed the notice. Tell him there will be no power on Sunday.",
        te: "పక్కింటి ఇమ్రాన్ గారు నోటీసు చూడలేదు. ఆదివారం కరెంట్ ఉండదని ఆయనకి చెప్పండి.",
      },
      expected: [
        "There will be no power on Sunday.",
        "There will be a power cut on Sunday.",
        "The power will be off on Sunday.",
        "There's a power cut on Sunday.",
      ],
      options: ["There will be no power on Sunday.", "There will no power on Sunday.", "There will be no power in Sunday."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A man at the office gate asks if the office is open on Monday. Tell him it will remain closed.",
        te: "ఆఫీసు గేటు దగ్గర ఒకాయన సోమవారం ఆఫీసు తెరుస్తారా అని అడుగుతున్నారు. ఆ రోజు మూసే ఉంటుందని చెప్పండి.",
      },
      expected: [
        "No, it will remain closed on Monday.",
        "It will remain closed on Monday.",
        "No, it will be closed on Monday.",
        "Sorry, it's closed on Monday.",
      ],
      options: ["No, it will remain closed on Monday.", "No, it will closed on Monday.", "No, it will remain close on Monday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A notice on the colony board", te: "కాలనీ బోర్డు మీద నోటీసు" },
    scene: {
      en: "A new notice is on the colony board. Your neighbour Rani stops to ask you about it.",
      te: "కాలనీ బోర్డు మీద కొత్త నోటీసు పెట్టారు. పక్కింటి రాణి గారు ఆగి దాని గురించి మిమ్మల్ని అడుగుతున్నారు.",
    },
    partner: { en: "Rani (your neighbour)", te: "రాణి (పక్కింటావిడ)" },
    skills: [
      { id: "explain", label: { en: "Explaining a notice", te: "నోటీసు వివరించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! What is this new notice on the board?",
        te: "హలో! బోర్డు మీద ఈ కొత్త నోటీసు ఏంటి?",
        hint: { en: "Greet her, and say it is about a power cut on Sunday.", te: "పలకరించి, ఇది ఆదివారం కరెంట్ కోత గురించి అని చెప్పండి." },
        replies: [
          { say: "Hello! It's about a power cut on Sunday.", good: true, skill: "explain" },
          { say: "It says there will be a power cut on Sunday.", good: true, skill: "explain" },
          { say: "Hello! It's about power cut on Sunday.", good: false, skill: "explain", fixIt: "article" },
        ],
      },
      {
        partner: "Oh no. For how long? I have guests coming that day.",
        te: "అయ్యో. ఎంతసేపు? ఆ రోజు మా ఇంటికి అతిథులు వస్తున్నారు.",
        hint: { en: "Tell her the hours written on the notice.", te: "నోటీసులో రాసిన సమయం ఆవిడకి చెప్పండి." },
        replies: [
          { say: "From ten in the morning to two in the afternoon.", good: true, skill: "explain" },
          { say: "The supply will be interrupted from ten to two.", good: true, skill: "explain" },
          {
            say: "Why are you asking me? Read it yourself.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I left my glasses at home.", te: "సారీ, కళ్ళజోడు ఇంట్లో మర్చిపోయాను." },
          },
        ],
      },
      {
        partner: "Will the water pump work?",
        te: "నీళ్ళ మోటార్ పని చేస్తుందా?",
        hint: { en: "Say no, and suggest storing water the night before.", te: "పని చేయదని చెప్పి, ముందు రాత్రే నీళ్ళు పట్టుకోమని సూచించండి." },
        replies: [
          { say: "No, it won't. Please store some water on Saturday night.", good: true, skill: "explain" },
          { say: "I don't think so. Let's fill our buckets on Saturday.", good: true, skill: "explain" },
          { say: "No, it won't. Please store some waters on Saturday night.", good: false, skill: "explain", fixIt: "plural" },
        ],
      },
      {
        partner: "Thank you so much for telling me!",
        te: "చెప్పినందుకు చాలా థాంక్స్!",
        hint: { en: "Say it is no problem, and offer to remind her on Saturday.", te: "పర్లేదని చెప్పి, శనివారం గుర్తు చేస్తానని చెప్పండి." },
        replies: [
          { say: "You're welcome. I'll remind you on Saturday.", good: true, skill: "polite" },
          { say: "No problem. I'll call you on Saturday evening.", good: true, skill: "polite" },
          { say: "You're welcome. I'll reminding you on Saturday.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

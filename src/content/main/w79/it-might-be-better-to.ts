import type { Lesson } from "../../types";

/** Week 79, Day 2 (CURRICULUM §5): softer suggestions — It might be better to take the train. Have you thought about …? */
export const day: Lesson = {
  id: "it-might-be-better-to",
  kind: "lesson",
  title: { en: "It Might Be Better To", te: "అలా చేస్తే మంచిదేమో" },
  subtitle: "It might be better to … / Have you thought about …?",
  summary: {
    en: "Learn to suggest something softly: It might be better to take the train. Have you thought about getting your eyes checked?",
    te: "ఏదైనా మెత్తగా సూచించడం నేర్చుకుందాం: It might be better to take the train. Have you thought about getting your eyes checked?",
  },
  seo: {
    title: "Soft Suggestions in English for Telugu Speakers",
    description:
      "Say It might be better to take the train and Have you thought about it? Simple lessons for Telugu speakers on suggesting gently.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "might be better", role: "action" },
    { text: "to take the train", role: "what" },
    { text: "tonight", role: "when" },
  ],
  core: [
    { en: "It might be better to take the train.", te: "రైల్లో వెళ్తే మంచిదేమో.", extra: ["taking"] },
    { en: "Have you thought about getting your eyes checked?", te: "కళ్ళు చెక్ చేయించుకోవడం గురించి ఆలోచించారా?", extra: ["get"] },
    { en: "It might be better to go in the morning.", te: "పొద్దున వెళ్తే మంచిదేమో.", extra: ["at"] },
    { en: "Have you thought about taking the bus?", te: "బస్సులో వెళ్ళడం గురించి ఆలోచించారా?", extra: ["take"] },
    { en: "The highway is very dark at night.", te: "రాత్రిపూట హైవే చాలా చీకటిగా ఉంటుంది.", extra: ["in"] },
    { en: "It might be better not to drive after dark.", te: "చీకటి పడ్డాక డ్రైవ్ చేయకపోవడమే మంచిదేమో.", extra: ["don't"] },
    { en: "If you leave early, you'll reach before lunch.", te: "పొద్దున్నే బయలుదేరితే, భోజనం టైమ్‌కి ముందే చేరుకుంటారు.", extra: ["will"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "If a friend tells you a plan today, suggest one small change gently: It might be better to …",
    te: "ఈ రోజు ఎవరైనా స్నేహితులు ఒక ప్లాన్ చెప్తే, ఒక చిన్న మార్పు మెత్తగా సూచించండి: It might be better to …",
  },
  words: [
    { en: "it might be better to", te: "… చేస్తే మంచిదేమో" },
    { en: "have you thought about", te: "… గురించి ఆలోచించారా?" },
    { en: "safer", te: "ఇంకా సురక్షితం" },
    { en: "risky", te: "ప్రమాదం ఉన్న, రిస్క్" },
    { en: "highway", te: "హైవే, జాతీయ రహదారి" },
  ],
  grammar: ["might-may", "politeness-softening", "gerunds-infinitives"],
  topics: ["people", "travel", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A softer way to suggest", te: "మెత్తగా సూచించడం" },
      body: {
        en: "When should sounds too strong, say It might be better to and the plain verb. Or ask Have you thought about, with an -ing word.",
        te: "should మరీ గట్టిగా అనిపిస్తే It might be better to తర్వాత verb అలాగే వాడండి. లేదా Have you thought about తర్వాత -ing తో అడగండి.",
      },
      bridge: {
        te: ["రైల్లో వెళ్తే", "మంచిదేమో"],
        en: [
          { text: "It", role: "who" },
          { text: "might be better", role: "action" },
          { text: "to take the train", role: "what" },
        ],
      },
      examples: [
        { en: "It might be better to take the train.", te: "రైల్లో వెళ్తే మంచిదేమో." },
        { en: "Have you thought about getting your eyes checked?", te: "కళ్ళు చెక్ చేయించుకోవడం గురించి ఆలోచించారా?" },
        { en: "It might be better to go in the morning.", te: "పొద్దున వెళ్తే మంచిదేమో." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Strong or soft?", te: "గట్టిగానా, మెత్తగానా?" },
      items: [
        {
          form: "You should really …",
          useFor: { en: "Strong advice, to a close friend.", te: "దగ్గరి స్నేహితులకి గట్టి సలహా." },
          example: { en: "You should really see a doctor.", te: "మీరు తప్పకుండా డాక్టర్‌కి చూపించుకోవాలి." },
        },
        {
          form: "It might be better to …",
          useFor: { en: "A soft idea; your friend can still say no.", te: "మెత్తని సూచన; స్నేహితులు కాదనొచ్చు కూడా." },
          example: { en: "It might be better not to drive after dark.", te: "చీకటి పడ్డాక డ్రైవ్ చేయకపోవడమే మంచిదేమో." },
        },
        {
          form: "Have you thought about + -ing?",
          useFor: { en: "Bring up an idea gently, as a question.", te: "ఒక ఆలోచనని ప్రశ్నలాగా మెల్లగా ముందుకు తేవడానికి." },
          example: { en: "Have you thought about taking the bus?", te: "బస్సులో వెళ్ళడం గురించి ఆలోచించారా?" },
        },
        {
          form: "It's safer to …",
          useFor: { en: "Give a safety reason.", te: "భద్రత కారణం చెప్పడానికి." },
          example: { en: "It's safer to travel during the day.", te: "పగలు ప్రయాణం చేయడం ఇంకా సురక్షితం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "It might be better to take rest today.",
      right: "It might be better to get some rest today.",
      why: {
        en: "Take rest is an Indian habit; other English speakers say get some rest.",
        te: "take rest అనేది మన అలవాటు మాట; మిగతా ఇంగ్లీష్ మాట్లాడేవాళ్ళు get some rest అంటారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Have you thought about take the train?",
      right: "Have you thought about taking the train?",
      why: {
        en: "After about, an action takes -ing, never the plain verb.",
        te: "about తర్వాత పని వస్తే -ing చేర్చాలి; verb అలాగే రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "indian-english",
      prompt: {
        en: "Your neighbour plans to drive to Guntur tonight. Suggest the train softly.",
        te: "పక్కింటాయన ఈ రాత్రి గుంటూరుకి కారులో వెళ్ళాలనుకుంటున్నారు. రైలు అని మెత్తగా సూచించండి.",
      },
      options: ["It might be better to take the train tonight.", "It might be better to take the train today night.", "It might better to take the train tonight."],
      answer: 0,
      why: {
        en: "Say tonight, not today night, and keep be after might.",
        te: "today night కాదు, tonight అనాలి; might తర్వాత be ఉండాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Have you thought about ___ your eyes checked?",
      te: "కళ్ళు చెక్ చేయించుకోవడం గురించి ఆలోచించారా?",
      options: ["getting", "get", "to get"],
      answer: 0,
      why: {
        en: "After thought about, the verb takes -ing, because about comes just before it.",
        te: "thought about తర్వాత verb కి -ing వస్తుంది, ఎందుకంటే దాని ముందే about ఉంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend Kumar says: I'll drive to Ongole tonight. You are worried. What is the kind way to say it?",
        te: "మీ స్నేహితుడు కుమార్ గారు: ఈ రాత్రి ఒంగోలుకి డ్రైవ్ చేసి వెళ్తాను అన్నారు. మీకు కంగారుగా ఉంది. మర్యాదగా ఎలా చెప్తారు?",
      },
      options: ["It might be better to go in the morning. The highway is dark.", "Are you mad? Nobody drives at night.", "Don't go. Listen to me for once."],
      answer: 0,
      why: {
        en: "It might be better sounds soft and gives a reason, so he will listen.",
        te: "It might be better మెత్తగా ఉంటుంది, కారణం కూడా చెప్తుంది; అందుకే ఆయన వింటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The ghat road very risky at night.",
      wrongIndex: 3,
      fix: "The ghat road is very risky at night.",
      why: {
        en: "Telugu needs no extra word here, but English needs is before a describing word.",
        te: "తెలుగులో ఇక్కడ ఏ అదనపు పదమూ అక్కర్లేదు; ఇంగ్లీష్‌లో describing word ముందు is కావాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend Ramesh holds the newspaper very far away to read it. Suggest gently that he gets his eyes checked.",
        te: "మీ స్నేహితుడు రమేష్ గారు పేపర్‌ని చాలా దూరం పట్టుకుని చదువుతున్నారు. కళ్ళు చెక్ చేయించుకోమని మెల్లగా సూచించండి.",
      },
      expected: ["Have you thought about getting your eyes checked?", "It might be better to get your eyes checked.", "Why don't you get your eyes checked?"],
      options: ["Have you thought about getting your eyes checked?", "Have you thought about get your eyes checked?", "Your eyes are bad. Go to a doctor now."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your neighbour Fatima has a fever but wants to go out. Suggest softly that she gets some rest.",
        te: "పక్కింటావిడ ఫాతిమా గారికి జ్వరం, అయినా బయటికి వెళ్ళాలనుకుంటున్నారు. విశ్రాంతి తీసుకోమని మెత్తగా సూచించండి.",
      },
      expected: ["It might be better to get some rest today.", "It might be better to stay at home today.", "You should really get some rest."],
      options: ["It might be better to get some rest today.", "It might be better to take rest today.", "It might be better to getting some rest today."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Not at night!", te: "రాత్రి వద్దు!" },
    scene: {
      en: "Your neighbour Srinivas wants to drive alone to Nellore tonight for a function. He is tired after a long day.",
      te: "పక్కింటాయన శ్రీనివాస్ గారు ఒక function కోసం ఈ రాత్రి ఒక్కరే నెల్లూరుకి డ్రైవ్ చేసి వెళ్ళాలనుకుంటున్నారు. రోజంతా పనితో ఆయన అలిసిపోయారు.",
    },
    partner: { en: "Srinivas (your neighbour)", te: "శ్రీనివాస్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "suggest", label: { en: "Suggesting softly", te: "మెత్తగా సూచించడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I'm driving to Nellore tonight for my friend's function.",
        te: "హలో! మా స్నేహితుడి function కోసం ఈ రాత్రి నెల్లూరుకి డ్రైవ్ చేసి వెళ్తున్నాను.",
        hint: { en: "Ask what time he is leaving.", te: "ఎన్ని గంటలకి బయలుదేరుతున్నారో అడగండి." },
        replies: [
          { say: "Oh, nice! What time are you leaving?", good: true, skill: "suggest" },
          { say: "Oh, nice! What time you are leaving?", good: false, skill: "suggest", fixIt: "question" },
        ],
      },
      {
        partner: "Around ten. I'll reach by three in the morning.",
        te: "పది గంటలకి. తెల్లవారుజాము మూడింటికల్లా చేరుకుంటాను.",
        hint: { en: "Say gently that the train might be better, and give a reason.", te: "రైలు మంచిదేమో అని మెల్లగా చెప్పి, కారణం చెప్పండి." },
        replies: [
          { say: "It might be better to take the train. The highway is dark at night.", good: true, skill: "suggest" },
          { say: "Have you thought about taking the night train?", good: true, skill: "suggest" },
          {
            say: "Driving at night? That's a stupid idea.",
            good: false,
            skill: "polite",
            react: { en: "Stupid? I've been driving for thirty years!", te: "తెలివితక్కువ ఆలోచనా? ముప్పై ఏళ్ళుగా డ్రైవ్ చేస్తున్నాను!" },
          },
        ],
      },
      {
        partner: "But the train is slow, and I don't have a ticket.",
        te: "కానీ రైలు నెమ్మది, నా దగ్గర టికెట్ కూడా లేదు.",
        hint: { en: "Say there is a fast train at nine, and it is much safer.", te: "తొమ్మిదింటికి ఒక fast train ఉందని, అది చాలా సురక్షితమని చెప్పండి." },
        replies: [
          { say: "There's a fast train at nine. It's much safer, and you can sleep.", good: true, skill: "suggest" },
          { say: "There's a fast train at nine. It's more safer, and you can sleep.", good: false, skill: "suggest" },
        ],
      },
      {
        partner: "Hmm, you're right. I'll book a ticket now. Thank you!",
        te: "హ్మ్, మీరు చెప్పింది నిజమే. ఇప్పుడే టికెట్ బుక్ చేస్తాను. థాంక్యూ!",
        hint: { en: "Say you are glad, and wish him a safe journey.", te: "సంతోషంగా ఉందని చెప్పి, ప్రయాణం జాగ్రత్తగా సాగాలని చెప్పండి." },
        replies: [
          { say: "I'm glad. Have a safe journey!", good: true, skill: "polite" },
          {
            say: "Good. Next time, listen to me first.",
            good: false,
            skill: "polite",
            react: { en: "Ha! Okay, okay, I will.", te: "హహ! సరే, సరే, అలాగే." },
          },
        ],
      },
    ],
  },
};

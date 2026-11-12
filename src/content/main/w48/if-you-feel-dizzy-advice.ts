import type { Lesson } from "../../types";

/** Week 48, Day 3 (CURRICULUM §5): If + present, then an instruction — health advice (If you feel dizzy, sit down at once). */
export const day: Lesson = {
  id: "if-you-feel-dizzy-advice",
  kind: "lesson",
  title: { en: "If You Feel Dizzy", te: "కళ్ళు తిరిగితే" },
  subtitle: "If …, do this",
  summary: {
    en: "Learn to give and understand health advice: If you feel dizzy, sit down at once. If the fever doesn't come down, see a doctor.",
    te: "ఆరోగ్య సలహాలు ఇవ్వడం, అర్థం చేసుకోవడం నేర్చుకుందాం: If you feel dizzy, sit down at once. If the fever doesn't come down, see a doctor.",
  },
  seo: {
    title: "Health Advice with If in English for Telugu Speakers",
    description:
      "Say If you feel dizzy, sit down at once and If the fever doesn't come down, see a doctor. Simple health lessons for Telugu speakers.",
  },
  pattern: [
    { text: "If you feel dizzy,", role: "when" },
    { text: "sit down", role: "action" },
    { text: "at once", role: "when" },
  ],
  core: [
    { en: "If you feel dizzy, sit down at once.", te: "కళ్ళు తిరిగితే, వెంటనే కూర్చోండి.", extra: ["will"] },
    { en: "If the fever doesn't come down, see a doctor.", te: "జ్వరం తగ్గకపోతే, డాక్టర్‌కి చూపించుకోండి.", extra: ["don't"] },
    { en: "If you feel weak, drink some water.", te: "నీరసంగా అనిపిస్తే, కొంచెం నీళ్ళు తాగండి.", extra: ["feels"] },
    { en: "If you have chest pain, call one zero eight.", te: "ఛాతీలో నొప్పి వస్తే, 108 కి ఫోన్ చేయండి.", extra: ["has"] },
    { en: "If you feel better tomorrow, you can go for a walk.", te: "రేపు ఒంట్లో బాగుంటే, నడకకి వెళ్ళొచ్చు.", extra: ["felt"] },
    { en: "Lie down for a while if you start sweating.", te: "చెమటలు పట్టడం మొదలైతే, కాసేపు పడుకోండి.", extra: ["sweat"] },
    { en: "If the pain gets worse, don't wait. Go to the hospital.", te: "నొప్పి ఎక్కువైతే, ఆలస్యం చేయకండి. ఆసుపత్రికి వెళ్ళండి.", extra: ["more"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one piece of health advice aloud for a friend: If you feel …, please …",
    te: "స్నేహితులకి ఇచ్చేలా ఒక ఆరోగ్య సలహా గట్టిగా చెప్పండి: If you feel …, please …",
  },
  words: [
    { en: "at once", te: "వెంటనే" },
    { en: "come down", te: "తగ్గడం, జ్వరం దిగడం" },
    { en: "lie down", te: "పడుకోవడం, నడుం వాల్చడం" },
    { en: "chest pain", te: "ఛాతీ నొప్పి" },
    { en: "sweating", te: "చెమటలు పట్టడం" },
  ],
  grammar: ["conditionals", "imperatives", "present-simple"],
  topics: ["health", "doctor"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "If …, do this", te: "ఇలా అయితే, ఇలా చేయండి" },
      body: {
        en: "For advice, say If and the problem, then the plain verb with no will: If you feel dizzy, sit down at once. Add don't for what to avoid.",
        te: "సలహా ఇవ్వాలంటే If తర్వాత సమస్య, ఆ తర్వాత verb నేరుగా; will అక్కర్లేదు. చేయకూడనిది చెప్పాలంటే don't చేర్చండి.",
      },
      bridge: {
        te: ["కళ్ళు తిరిగితే,", "వెంటనే", "కూర్చోండి"],
        en: [
          { text: "If you feel dizzy,", role: "when" },
          { text: "sit down", role: "action" },
          { text: "at once", role: "when" },
        ],
      },
      examples: [
        { en: "If you feel dizzy, sit down at once.", te: "కళ్ళు తిరిగితే, వెంటనే కూర్చోండి." },
        { en: "If the fever doesn't come down, see a doctor.", te: "జ్వరం తగ్గకపోతే, డాక్టర్‌కి చూపించుకోండి." },
        { en: "If you feel weak, drink some water.", te: "నీరసంగా అనిపిస్తే, కొంచెం నీళ్ళు తాగండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Advice or a plan?", te: "సలహానా, ప్లానా?" },
      items: [
        {
          form: "If …, sit down.",
          useFor: { en: "Advice: tell someone what to do.", te: "సలహా: ఏం చేయాలో చెప్పడం." },
          example: { en: "If you feel dizzy, sit down at once.", te: "కళ్ళు తిరిగితే, వెంటనే కూర్చోండి." },
        },
        {
          form: "If …, don't …",
          useFor: { en: "Advice: what not to do.", te: "సలహా: ఏం చేయకూడదో చెప్పడం." },
          example: { en: "If you feel dizzy, don't climb the stairs.", te: "కళ్ళు తిరిగితే, మెట్లు ఎక్కకండి." },
        },
        {
          form: "If …, you can …",
          useFor: { en: "Say it is okay to do something.", te: "ఏదైనా చేయొచ్చు అని చెప్పడం." },
          example: { en: "If you feel better tomorrow, you can go for a walk.", te: "రేపు ఒంట్లో బాగుంటే, నడకకి వెళ్ళొచ్చు." },
        },
        {
          form: "If …, I'll …",
          useFor: { en: "Your own plan, with will.", te: "మీ సొంత ప్లాన్, will తో." },
          example: { en: "If the fever comes back, I'll call the doctor.", te: "జ్వరం మళ్ళీ వస్తే, డాక్టర్‌కి ఫోన్ చేస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "article",
      wrong: "If the fever doesn't come down, see doctor.",
      right: "If the fever doesn't come down, see a doctor.",
      why: {
        en: "English says see a doctor, with a; Telugu డాక్టర్‌కి చూపించుకోండి has no such word.",
        te: "ఇంగ్లీష్‌లో see a doctor అంటారు; తెలుగులో a లాంటి పదం లేదు, అందుకే మర్చిపోతాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am feeling dizzy every morning.",
      right: "I feel dizzy every morning.",
      why: {
        en: "For something that happens every day, use the plain verb, not am with -ing.",
        te: "రోజూ జరిగే దానికి am + -ing కాదు, verb నేరుగా వాడాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The nurse tells you what to do if you feel dizzy. Which is right?",
        te: "కళ్ళు తిరిగితే ఏం చేయాలో నర్సు గారు చెప్తున్నారు. ఏది సరైనది?",
      },
      options: ["If you feel dizzy, sit down at once.", "If you will feel dizzy, sit down at once.", "If you feel dizzy, sitting down at once."],
      answer: 0,
      why: {
        en: "After if, use the present; the advice part is the plain verb, like an order.",
        te: "if తర్వాత present; సలహా భాగంలో verb నేరుగా, ఆజ్ఞ లాగా వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "If you feel weak, eat two ___ and rest.",
      te: "నీరసంగా అనిపిస్తే, రెండు అరటిపళ్ళు తిని విశ్రాంతి తీసుకోండి.",
      options: ["bananas", "banana", "a banana"],
      answer: 0,
      why: {
        en: "After two, banana takes s; Telugu అరటిపళ్ళు also shows more than one.",
        te: "రెండు తర్వాత banana కి s వస్తుంది; తెలుగులోనూ 'అరటిపండు' కాదు, 'అరటిపళ్ళు' అంటాం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask the nurse what to do if the fever comes back.", te: "జ్వరం మళ్ళీ వస్తే ఏం చేయాలని నర్సు గారిని అడగండి." },
      options: ["What should I do if the fever comes back?", "What I should do if the fever comes back?", "What should I do if the fever will come back?"],
      answer: 0,
      why: {
        en: "In a question, should comes before I, and the if part stays in the present.",
        te: "ప్రశ్నలో should, I కంటే ముందు వస్తుంది; if భాగం present లోనే ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "If the pain get worse, go to the hospital.",
      wrongIndex: 3,
      fix: "If the pain gets worse, go to the hospital.",
      why: {
        en: "The pain is one thing, like he or she, so get takes s.",
        te: "నొప్పి ఒక్కటే, he, she లాగా; అందుకే get కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend Mohan is going out in the hot sun. Tell him what to do if he feels dizzy.",
        te: "మీ స్నేహితుడు మోహన్ గారు మండే ఎండలో బయటికి వెళ్తున్నారు. కళ్ళు తిరిగితే ఏం చేయాలో ఆయనకి చెప్పండి.",
      },
      expected: [
        "If you feel dizzy, sit down at once.",
        "If you feel dizzy, sit down and drink some water.",
        "If you feel dizzy, please sit down in the shade.",
        "Sit down at once if you feel dizzy.",
      ],
      options: ["If you feel dizzy, sit down at once.", "If you will feel dizzy, sit down at once.", "If you are feel dizzy, sit down at once."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour has had a fever for two days. Tell her to see a doctor if it doesn't come down.",
        te: "పక్కింటావిడకి రెండు రోజులుగా జ్వరం. తగ్గకపోతే డాక్టర్‌కి చూపించుకోమని ఆవిడకి చెప్పండి.",
      },
      expected: [
        "If the fever doesn't come down, see a doctor.",
        "Please see a doctor if the fever doesn't come down.",
        "If it doesn't come down, please see a doctor.",
      ],
      options: ["If the fever doesn't come down, see a doctor.", "If the fever doesn't come down, see doctor.", "If the fever won't come down, see a doctor."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Advice after a check-up", te: "చెకప్ తర్వాత సలహా" },
    scene: {
      en: "You are at the clinic for a check-up. Nurse Grace checks your BP and gives you advice.",
      te: "మీరు చెకప్ కోసం క్లినిక్‌కి వచ్చారు. నర్సు గ్రేస్ గారు మీ BP చూసి సలహా ఇస్తున్నారు.",
    },
    partner: { en: "Grace (the nurse)", te: "గ్రేస్ (నర్సు)" },
    skills: [
      { id: "advice", label: { en: "Understanding advice", te: "సలహా అర్థం చేసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning. Your BP is a little low today. Do you feel dizzy sometimes?",
        te: "నమస్తే. ఈ రోజు మీ BP కొంచెం తక్కువగా ఉంది. అప్పుడప్పుడు కళ్ళు తిరుగుతుంటాయా?",
        hint: { en: "Say yes, it happens when you get up quickly.", te: "అవును, తొందరగా లేచినప్పుడు అలా అవుతుందని చెప్పండి." },
        replies: [
          { say: "Yes, sometimes, when I get up quickly.", good: true, skill: "advice" },
          { say: "Yes, sometimes, when I am getting up quickly.", good: false, skill: "advice", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Then here is my advice. If you feel dizzy, sit down at once.",
        te: "అయితే నా సలహా ఇది. కళ్ళు తిరిగితే, వెంటనే కూర్చోండి.",
        hint: { en: "Say okay, and ask what else you should do.", te: "సరే అని, ఇంకా ఏం చేయాలని అడగండి." },
        replies: [
          { say: "Okay. What else should I do?", good: true, skill: "advice" },
          { say: "Okay. What else I should do?", good: false, skill: "advice", fixIt: "question" },
        ],
      },
      {
        partner: "Drink enough water, and don't skip meals. You don't skip breakfast?",
        te: "సరిపడా నీళ్ళు తాగండి, భోజనం మానకండి. మీరు టిఫిన్ మానరు కదా?",
        hint: { en: "Say you don't; you always have breakfast.", te: "మానను అని, ఎప్పుడూ టిఫిన్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "No, I don't. I always have breakfast.", good: true, skill: "advice" },
          { say: "Yes, I don't. I always have breakfast.", good: false, skill: "advice", fixIt: "negative-answer" },
        ],
      },
      {
        partner: "Good. If you still feel dizzy next week, come back.",
        te: "మంచిది. వచ్చే వారం కూడా కళ్ళు తిరుగుతుంటే, మళ్ళీ రండి.",
        hint: { en: "Thank her, and promise to come again if you are still dizzy.", te: "ఆవిడకి థాంక్స్ చెప్పి, ఇంకా కళ్ళు తిరుగుతుంటే మళ్ళీ వస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "Thank you. If it doesn't stop, I'll come back.", good: true, skill: "polite" },
          { say: "Thank you. If it won't stop, I'll come back.", good: false, skill: "advice" },
          {
            say: "Okay, okay. I know all this already.",
            good: false,
            skill: "polite",
            react: { en: "Good! Then please follow it too.", te: "మంచిది! అయితే దాన్ని పాటించండి కూడా." },
          },
        ],
      },
    ],
  },
};

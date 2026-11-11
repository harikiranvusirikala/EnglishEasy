import type { Lesson } from "../../types";

/** Week 24, Day 3 (CURRICULUM §4): while + past continuous — what happened during a longer action. */
export const day: Lesson = {
  id: "while-i-was-walking",
  kind: "lesson",
  title: { en: "While I Was Walking", te: "నడుస్తూ ఉండగా" },
  subtitle: "while + was …ing",
  summary: {
    en: "Learn to say what happened during a longer action: While I was walking, I saw an old friend.",
    te: "ఒక పని జరుగుతూ ఉండగా ఏం జరిగిందో చెప్పడం నేర్చుకుందాం: While I was walking, I saw an old friend.",
  },
  seo: {
    title: "While I Was Walking: Using While in English for Telugu Speakers",
    description:
      "Say While I was walking, I saw an old friend and It started raining while we were waiting. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "While I was walking,", role: "when" },
    { text: "I", role: "who" },
    { text: "saw", role: "action" },
    { text: "an old friend", role: "what" },
  ],
  core: [
    { en: "While I was walking, I saw an old friend.", te: "నేను నడుస్తూ ఉండగా, నా పాత స్నేహితులు ఒకరు కనిపించారు.", extra: ["walk"] },
    { en: "It started raining while we were waiting.", te: "మేము ఎదురుచూస్తూ ఉండగా వర్షం మొదలైంది.", extra: ["waited"] },
    { en: "I was waiting at the bus stop.", te: "నేను బస్ స్టాప్‌లో ఎదురుచూస్తూ ఉన్నాను.", extra: ["in"] },
    { en: "I didn't recognise you at first.", te: "మొదట మిమ్మల్ని గుర్తుపట్టలేదు.", extra: ["recognised"] },
    { en: "She waved at me from the bus.", te: "ఆవిడ బస్సులో నుంచి నా వైపు చేయి ఊపారు.", extra: ["on"] },
    { en: "We were classmates at school.", te: "మేము స్కూల్లో ఒకే క్లాసులో చదువుకున్నాం.", extra: ["classmate"] },
    { en: "What a surprise! How are you?", te: "ఎంత ఆశ్చర్యం! ఎలా ఉన్నారు?", extra: ["What's"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "On your walk today, notice one thing. Later, say: While I was walking, I saw …",
    te: "ఈ రోజు నడిచేటప్పుడు ఒక విషయం గమనించండి. తర్వాత చెప్పండి: While I was walking, I saw …",
  },
  words: [
    { en: "while", te: "… ఉండగా, … చేస్తూ ఉన్నప్పుడు" },
    { en: "surprise", te: "ఆశ్చర్యం" },
    { en: "recognise", te: "గుర్తుపట్టడం" },
    { en: "classmate", te: "క్లాస్‌మేట్, కలిసి చదువుకున్నవారు" },
    { en: "wave", te: "చేయి ఊపడం" },
  ],
  grammar: ["past-continuous", "past-simple", "connectors"],
  topics: ["people", "transport", "weather"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "While: during the long action", te: "while: పని జరుగుతూ ఉండగా" },
      body: {
        en: "While means during. Put it before the long action with -ing: While I was walking. Then say the short thing in the past: I saw an old friend.",
        te: "while అంటే '… ఉండగా'. -ing ఉన్న పొడవైన పని ముందు while పెట్టండి: While I was walking. తర్వాత చిన్న సంఘటన past లో: I saw an old friend.",
      },
      bridge: {
        te: ["నేను నడుస్తూ ఉండగా", "నా పాత స్నేహితులు ఒకరు", "కనిపించారు"],
        en: [
          { text: "While I was walking,", role: "when" },
          { text: "I", role: "who" },
          { text: "saw", role: "action" },
          { text: "an old friend", role: "what" },
        ],
      },
      examples: [
        { en: "While I was walking, I saw an old friend.", te: "నేను నడుస్తూ ఉండగా, నా పాత స్నేహితులు ఒకరు కనిపించారు." },
        { en: "It started raining while we were waiting.", te: "మేము ఎదురుచూస్తూ ఉండగా వర్షం మొదలైంది." },
        { en: "She waved at me from the bus.", te: "ఆవిడ బస్సులో నుంచి నా వైపు చేయి ఊపారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "When or while?", te: "when ఆ, while ఆ?" },
      items: [
        {
          form: "while + was / were …ing",
          useFor: { en: "Before the long action.", te: "పొడవైన పని ముందు." },
          example: { en: "It started raining while we were waiting.", te: "మేము ఎదురుచూస్తూ ఉండగా వర్షం మొదలైంది." },
        },
        {
          form: "when + the past",
          useFor: { en: "Before the short action.", te: "చిన్న సంఘటన ముందు." },
          example: { en: "I was waiting when it started raining.", te: "నేను ఎదురుచూస్తూ ఉంటే వర్షం మొదలైంది." },
        },
        {
          form: "What a surprise!",
          useFor: { en: "When you meet someone you didn't expect.", te: "అనుకోకుండా ఎవరైనా కలిసినప్పుడు." },
          example: { en: "What a surprise! How are you?", te: "ఎంత ఆశ్చర్యం! ఎలా ఉన్నారు?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I was waiting the bus.",
      right: "I was waiting for the bus.",
      why: {
        en: "Telugu says బస్ కోసం; that కోసం is for, and waiting needs it.",
        te: "'బస్ కోసం' లోని 'కోసం' ఇంగ్లీష్‌లో for; waiting తర్వాత for తప్పదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "While I walking, I saw him.",
      right: "While I was walking, I saw him.",
      why: {
        en: "After while, keep was or were before the -ing verb.",
        te: "while తర్వాత కూడా -ing verb ముందు was / were ఉండాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: [
        "While I was walking, I saw an old friend.",
        "While I was walking, I saw old friend.",
        "While I walking, I saw an old friend.",
      ],
      answer: 0,
      why: {
        en: "One friend needs an before old, and while needs was before the -ing verb.",
        te: "ఒక్కరే అయితే old ముందు an కావాలి; while తర్వాత -ing ముందు was కూడా ఉండాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It started raining ___ we were waiting.",
      te: "మేము ఎదురుచూస్తూ ఉండగా వర్షం మొదలైంది.",
      options: ["while", "during", "at"],
      answer: 0,
      why: {
        en: "During needs a thing after it, like during lunch; before we were, use while.",
        te: "during తర్వాత ఒక విషయం వస్తుంది (during lunch); we were ముందు while వాడాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "At first, you didn't know your old classmate's face. What do you say?",
        te: "మొదట మీ పాత క్లాస్‌మేట్ ముఖం మీకు గుర్తు రాలేదు. ఏమంటారు?",
      },
      options: ["Sorry, I didn't recognise you at first.", "Sorry, I didn't recognised you at first.", "Sorry, I am not recognising you at first."],
      answer: 0,
      why: {
        en: "After didn't, the verb stays plain, with no -ed at the end.",
        te: "didn't తర్వాత verb మారదు; చివర -ed రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "I was waiting in the bus stop.",
      wrongIndex: 3,
      fix: "I was waiting at the bus stop.",
      why: {
        en: "A stop or a point on the way takes at; Telugu లో is used for both in and at.",
        te: "బస్ స్టాప్ లాంటి ఒక చోటుకి at; తెలుగులో 'లో' రెండింటికీ వాడతాం కాబట్టి తప్పు వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell a neighbour you saw an old friend on your walk.",
        te: "నడుస్తూ ఉండగా పాత స్నేహితులు ఒకరు కనిపించారని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["While I was walking, I saw an old friend.", "I saw an old friend while I was walking."],
      options: [
        "While I was walking, I saw an old friend.",
        "While I was walk, I saw an old friend.",
        "While I am walking, I saw an old friend.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say it started raining while you were waiting for the bus.",
        te: "మీరు బస్సు కోసం ఎదురుచూస్తూ ఉండగా వర్షం మొదలైందని చెప్పండి.",
      },
      expected: ["It started raining while I was waiting.", "It started raining while I was waiting for the bus."],
      options: [
        "It started raining while I was waiting.",
        "It started raining while I am waiting.",
        "It started raining while I was wait.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A surprise at the bus stop", te: "బస్ స్టాప్‌లో అనుకోని కలయిక" },
    scene: {
      en: "You are waiting at a bus stop in Guntur. A man waves at you. It is Imran, your old classmate.",
      te: "మీరు గుంటూరులో బస్ స్టాప్‌లో ఎదురుచూస్తున్నారు. ఒకాయన మీ వైపు చేయి ఊపుతున్నారు. ఆయన మీ పాత క్లాస్‌మేట్ ఇమ్రాన్.",
    },
    partner: { en: "Imran (old classmate)", te: "ఇమ్రాన్ (పాత క్లాస్‌మేట్)" },
    voice: "b",
    skills: [
      { id: "while", label: { en: "While and when", te: "while, when వాడకం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Kiran? Is that really you?",
        te: "హలో! కిరణ్? నిజంగా మీరేనా?",
        hint: { en: "Say yes, say his name, and show you are happy and surprised.", te: "అవునని, ఆయన పేరు చెప్పి, సంతోషంగా, ఆశ్చర్యంగా పలకరించండి." },
        replies: [
          { say: "Yes! Imran? What a surprise! How are you?", good: true, skill: "polite" },
          { say: "Yes! Imran? What surprise! How are you?", good: false, skill: "polite", fixIt: "article" },
        ],
      },
      {
        partner: "I'm fine! Did you recognise me?",
        te: "బాగున్నాను! నన్ను గుర్తుపట్టారా?",
        hint: { en: "Say honestly that you didn't, at first.", te: "మొదట గుర్తుపట్టలేదని నిజం చెప్పండి." },
        replies: [
          { say: "Sorry, I didn't recognise you at first.", good: true, skill: "while" },
          { say: "Sorry, I didn't recognised you at first.", good: false, skill: "while" },
          {
            say: "No. You look very old now!",
            good: false,
            skill: "polite",
            react: { en: "Ha! Thirty years, my friend. You too!", te: "హ్హ! ముప్పై ఏళ్ళు అయింది కదండీ. మీరు కూడా!" },
          },
        ],
      },
      {
        partner: "I was passing in an auto, and I saw you!",
        te: "నేను ఆటోలో వెళ్తూ ఉంటే మిమ్మల్ని చూశాను!",
        hint: { en: "Tell him what you were doing at the stop.", te: "స్టాప్‌లో మీరు ఏం చేస్తూ ఉన్నారో చెప్పండి." },
        replies: [
          { say: "I was waiting for the bus to the market.", good: true, skill: "while" },
          { say: "I was waiting the bus to the market.", good: false, skill: "while", fixIt: "preposition" },
        ],
      },
      {
        partner: "Come, let's have tea first. Then I'll drop you.",
        te: "రండి, ముందు టీ తాగుదాం. తర్వాత నేను మిమ్మల్ని దింపుతాను.",
        hint: { en: "Agree happily, and thank him.", te: "సంతోషంగా ఒప్పుకుని, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sure, thank you. That's very kind of you.", good: true, skill: "polite" },
          { say: "Sure, thanks you. That's very kind of you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

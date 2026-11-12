import type { Lesson } from "../../types";

/** Week 58, Day 5 (CURRICULUM §5): indirect questions for someone else — which ward, if visitors are allowed. */
export const day: Lesson = {
  id: "enquiring-for-a-neighbour",
  kind: "lesson",
  title: { en: "Asking for Someone Else", te: "ఇంకొకరి కోసం అడగడం" },
  subtitle: "Could you tell me which ward …? Can you tell me if …?",
  summary: {
    en: "Learn to ask at a hospital desk for a neighbour: Could you tell me which ward Mr Narayana is in?",
    te: "పక్కింటివారి కోసం ఆసుపత్రి డెస్క్‌లో అడగడం నేర్చుకుందాం: Could you tell me which ward Mr Narayana is in?",
  },
  seo: {
    title: "Asking for Someone Else in English for Telugu Speakers",
    description:
      "Ask Could you tell me which ward Mr Narayana is in? and if visitors are allowed now. Hospital desk English for Telugu speakers.",
  },
  pattern: [
    { text: "Could you tell me", role: "action" },
    { text: "which ward", role: "what" },
    { text: "Mr Narayana", role: "who" },
    { text: "is in?", role: "action" },
  ],
  core: [
    { en: "Could you tell me which ward Mr Narayana is in?", te: "నారాయణ గారు ఏ వార్డులో ఉన్నారో కొంచెం చెప్తారా?", extra: ["does"] },
    { en: "Can you tell me if visitors are allowed now?", te: "ఇప్పుడు లోపలికి వెళ్ళి చూడొచ్చో లేదో చెప్తారా?", extra: ["is"] },
    { en: "Do you know how he is today?", te: "ఈ రోజు ఆయన ఎలా ఉన్నారో మీకు తెలుసా?", extra: ["are"] },
    { en: "I'm asking on behalf of my neighbour.", te: "మా పక్కింటివారి తరఫున అడుగుతున్నాను.", extra: ["to"] },
    { en: "He was admitted on Monday with chest pain.", te: "ఛాతీ నొప్పితో ఆయన్ని సోమవారం చేర్చారు.", extra: ["in"] },
    { en: "Could you tell me when the doctor will see him?", te: "డాక్టర్ గారు ఆయన్ని ఎప్పుడు చూస్తారో చెప్తారా?" },
    { en: "The nurse said only one attendant was allowed.", te: "ఒక్క అటెండెంట్‌నే ఉండనిస్తారని నర్సు గారు చెప్పారు." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a neighbour or friend you could help. Say aloud how you would ask about them at a hospital desk.",
    te: "మీరు సహాయం చేయగల ఒక పక్కింటివారిని గానీ స్నేహితుల్ని గానీ తలుచుకోండి. ఆసుపత్రి డెస్క్‌లో వారి గురించి ఎలా అడుగుతారో గట్టిగా చెప్పి చూడండి.",
  },
  words: [
    { en: "on behalf of", te: "… తరఫున" },
    { en: "general ward", te: "జనరల్ వార్డు" },
    { en: "ICU", te: "ICU, తీవ్రమైన జబ్బుకి ప్రత్యేక వార్డు" },
    { en: "bed number", te: "బెడ్ నంబర్" },
    { en: "attendant", te: "అటెండెంట్, రోగితో పాటు ఉండేవారు" },
  ],
  grammar: ["indirect-tag-questions", "reported-speech", "politeness-softening"],
  topics: ["health", "neighbours", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Asking for someone else", te: "ఇంకొకరి కోసం అడగడం" },
      body: {
        en: "To ask about a patient, say Could you tell me, then the question in normal order: which ward he is in. For yes or no, use if.",
        te: "రోగి గురించి అడగాలంటే Could you tell me తర్వాత ప్రశ్నని మామూలు వరుసలో చెప్పండి: which ward he is in. అవునా కాదా ప్రశ్నకి if వాడండి.",
      },
      bridge: {
        te: ["నారాయణ గారు", "ఏ వార్డులో ఉన్నారో", "చెప్తారా?"],
        en: [
          { text: "Could you tell me", role: "action" },
          { text: "which ward", role: "what" },
          { text: "Mr Narayana", role: "who" },
          { text: "is in?", role: "action" },
        ],
      },
      examples: [
        { en: "Could you tell me which ward Mr Narayana is in?", te: "నారాయణ గారు ఏ వార్డులో ఉన్నారో కొంచెం చెప్తారా?" },
        { en: "Can you tell me if visitors are allowed now?", te: "ఇప్పుడు లోపలికి వెళ్ళి చూడొచ్చో లేదో చెప్తారా?" },
        { en: "Do you know how he is today?", te: "ఈ రోజు ఆయన ఎలా ఉన్నారో మీకు తెలుసా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Questions about a patient", te: "రోగి గురించి అడిగే ప్రశ్నలు" },
      items: [
        {
          form: "which ward / what his bed number is",
          useFor: { en: "Find the patient.", te: "రోగి ఎక్కడ ఉన్నారో తెలుసుకోవడానికి." },
          example: { en: "Could you tell me what his bed number is?", te: "ఆయన బెడ్ నంబర్ ఏంటో చెప్తారా?" },
        },
        {
          form: "if visitors are allowed",
          useFor: { en: "Check the rules before you go in.", te: "లోపలికి వెళ్ళేముందు రూల్స్ తెలుసుకోవడానికి." },
          example: { en: "Can you tell me if visitors are allowed now?", te: "ఇప్పుడు లోపలికి వెళ్ళి చూడొచ్చో లేదో చెప్తారా?" },
        },
        {
          form: "how he is / when the doctor will see him",
          useFor: { en: "Ask about his health and the doctor's visit.", te: "ఆయన ఆరోగ్యం, డాక్టర్ గారు చూసే టైమ్ అడగడానికి." },
          example: { en: "Could you tell me when the doctor will see him?", te: "డాక్టర్ గారు ఆయన్ని ఎప్పుడు చూస్తారో చెప్తారా?" },
        },
        {
          form: "I'm asking on behalf of …",
          useFor: { en: "Say who you are asking for.", te: "ఎవరి కోసం అడుగుతున్నారో చెప్పడానికి." },
          example: { en: "I'm asking on behalf of my neighbour.", te: "మా పక్కింటివారి తరఫున అడుగుతున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "Could you tell me which ward is he in?",
      right: "Could you tell me which ward he is in?",
      why: {
        en: "Inside Could you tell me, he comes before is, so the question order goes away.",
        te: "Could you tell me లోపల he ముందు, is తర్వాత; ప్రశ్న వరుస పోతుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Can you tell me if he need anything?",
      right: "Can you tell me if he needs anything?",
      why: {
        en: "After if, he is one person, so need takes s.",
        te: "if తర్వాత he ఒక్కరే కాబట్టి need కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "At the desk, ask which ward your neighbour Mr Narayana is in.",
        te: "డెస్క్ దగ్గర, మీ పక్కింటివారు నారాయణ గారు ఏ వార్డులో ఉన్నారో అడగండి.",
      },
      options: [
        "Could you tell me which ward Mr Narayana is in?",
        "Could you tell me which ward is Mr Narayana in?",
        "Could you tell me which ward Mr Narayana in?",
      ],
      answer: 0,
      why: {
        en: "After Could you tell me, the name comes first and is goes near the end.",
        te: "Could you tell me తర్వాత ముందు పేరు, is చివర్లో వస్తాయి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Only two ___ can go in at a time.",
      te: "ఒకసారి ఇద్దరు మాత్రమే లోపలికి వెళ్ళొచ్చు.",
      options: ["visitors", "visitor", "visitor's"],
      answer: 0,
      why: {
        en: "Two people means more than one, so visitor needs s.",
        te: "ఇద్దరు అంటే ఒకరి కంటే ఎక్కువ, అందుకే visitor కి s కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "The nurse says: Visitors are allowed only from four to six. What does she mean?",
        te: "Visitors are allowed only from four to six అని నర్సు గారు చెప్పారు. ఆవిడ ఉద్దేశం ఏంటి?",
      },
      options: ["You can see him between four and six.", "Four to six visitors can go in.", "Visitors must leave at four."],
      answer: 0,
      why: {
        en: "From four to six gives the time when visitors may go in, not a number of people.",
        te: "from four to six అంటే లోపలికి వెళ్ళొచ్చే సమయం; ఎంతమంది అని కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "The nurse told to me that he was better.",
      wrongIndex: 3,
      fix: "The nurse told me that he was better.",
      why: {
        en: "Told needs no to before me; only said takes to, as in said to me.",
        te: "told తర్వాత to రాదు, told me అనాలి; said అయితేనే said to me.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the nurse if visitors are allowed now.",
        te: "ఇప్పుడు లోపలికి వెళ్ళి చూడొచ్చో లేదో నర్సు గారిని అడగండి.",
      },
      expected: ["Can you tell me if visitors are allowed now?", "Could you tell me if visitors are allowed now?", "Are visitors allowed now?"],
      options: ["Can you tell me if visitors are allowed now?", "Can you tell me are visitors allowed now?", "Can you tell me if visitors allowed now?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The nurse asks who you are. Say you are his neighbour.",
        te: "మీరు ఎవరని నర్సు గారు అడిగారు. ఆయన పక్కింటివారు అని చెప్పండి.",
      },
      expected: ["I'm his neighbour.", "I am his neighbour.", "I'm his neighbour, Kiran."],
      options: ["I'm his neighbour.", "Myself his neighbour.", "I'm neighbour of him."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Visiting a neighbour in hospital", te: "ఆసుపత్రిలో పక్కింటివారిని చూడటానికి" },
    scene: {
      en: "Your neighbour Mr Narayana was admitted yesterday. You go to the hospital. Fatima is at the desk.",
      te: "మీ పక్కింటివారు నారాయణ గారిని నిన్న ఆసుపత్రిలో చేర్చారు. మీరు చూడటానికి వెళ్ళారు. డెస్క్ దగ్గర ఫాతిమా గారు ఉన్నారు.",
    },
    partner: { en: "Fatima (at the hospital desk)", te: "ఫాతిమా (ఆసుపత్రి డెస్క్ దగ్గర)" },
    skills: [
      { id: "ask", label: { en: "Asking for someone else", te: "ఇంకొకరి కోసం అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. Can I help you?",
        te: "నమస్కారం. చెప్పండి, ఏం కావాలి?",
        hint: { en: "Ask politely which ward Mr Narayana is in.", te: "నారాయణ గారు ఏ వార్డులో ఉన్నారో మర్యాదగా అడగండి." },
        replies: [
          { say: "Could you tell me which ward Mr Narayana is in?", good: true, skill: "ask" },
          { say: "Could you tell me which ward is Mr Narayana in?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "He was in the ICU. Now he's in the general ward, bed number twelve.",
        te: "మొదట ఆయన్ని ICU లో ఉంచారు. ఇప్పుడు జనరల్ వార్డులో, బెడ్ నంబర్ పన్నెండులో ఉన్నారు.",
        hint: { en: "Ask whether you can visit him now.", te: "ఇప్పుడు ఆయన్ని చూడటానికి వెళ్ళొచ్చో లేదో అడగండి." },
        replies: [
          { say: "Can you tell me if visitors are allowed now?", good: true, skill: "ask" },
          { say: "Can you tell me if visitors allowed now?", good: false, skill: "ask", fixIt: "be" },
        ],
      },
      {
        partner: "Not now, sorry. Visiting hours are from four to six.",
        te: "ఇప్పుడు కాదు, సారీ. visiting hours నాలుగు నుంచి ఆరు వరకు.",
        hint: { en: "It is only three. Ask very politely if you could wait here.", te: "ఇప్పుడు మూడే అయింది. ఇక్కడ ఆగొచ్చేమో అని చాలా మర్యాదగా అడగండి." },
        replies: [
          { say: "I was wondering if I could wait here.", good: true, skill: "ask" },
          { say: "Okay. Can I wait here till four?", good: true, skill: "ask" },
          {
            say: "But I'm his neighbour! Let me go in now.",
            good: false,
            skill: "polite",
            react: { en: "Please understand. The patients need rest now.", te: "కొంచెం అర్థం చేసుకోండి. ఇప్పుడు రోగులకి విశ్రాంతి కావాలి." },
          },
        ],
      },
      {
        partner: "Of course. Please sit in the waiting area.",
        te: "తప్పకుండా. వెయిటింగ్ ఏరియాలో కూర్చోండి.",
        hint: { en: "Thank her kindly.", te: "ఆవిడకి మర్యాదగా థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Thank you very much. You've been very kind.", good: true, skill: "polite" },
          { say: "Thank you very much. You are very kind lady.", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

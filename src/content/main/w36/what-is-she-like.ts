import type { Lesson } from "../../types";

/** Week 36, Day 1 (CURRICULUM §4): personality words — What is she like? She's very patient and friendly. He's a bit strict. */
export const day: Lesson = {
  id: "what-is-she-like",
  kind: "lesson",
  title: { en: "What Is She Like?", te: "ఆమె ఎలాంటి మనిషి?" },
  subtitle: "personality words",
  summary: {
    en: "Learn to say what a person is like: She's very patient and friendly. He's a bit strict.",
    te: "ఒక మనిషి స్వభావం ఎలాంటిదో చెప్పడం నేర్చుకుందాం: She's very patient and friendly. He's a bit strict.",
  },
  seo: {
    title: "Describing Character in English for Telugu Speakers",
    description:
      "Ask What is she like? and say She's very patient and friendly. Simple lessons for Telugu speakers on personality words.",
  },
  pattern: [
    { text: "She", role: "who" },
    { text: "is", role: "action" },
    { text: "very patient and friendly", role: "what" },
  ],
  core: [
    { en: "She's very patient and friendly.", te: "ఆవిడ చాలా ఓపికగా, స్నేహంగా ఉంటారు.", extra: ["patience"] },
    { en: "What is your new neighbour like?", te: "మీ కొత్త పక్కింటివారు ఎలాంటి మనిషి?", extra: ["How"] },
    { en: "He's a bit strict, but very kind.", te: "ఆయన కొంచెం strict, కానీ చాలా మంచివారు.", extra: ["little"] },
    { en: "She's a bit shy, but very hard-working.", te: "ఆవిడకి కొంచెం బిడియం, కానీ చాలా కష్టపడతారు.", extra: ["hard-work"] },
    { en: "Our postman is always cheerful.", te: "మా పోస్ట్‌మ్యాన్ ఎప్పుడూ నవ్వుతూ, సంతోషంగా ఉంటారు.", extra: ["are"] },
    { en: "My friend Radha is very honest.", te: "నా స్నేహితురాలు రాధ చాలా నిజాయితీ గల మనిషి.", extra: ["honesty"] },
    { en: "Is he friendly? Yes, very friendly.", te: "ఆయన స్నేహంగా ఉంటారా? అవును, చాలా స్నేహంగా ఉంటారు.", extra: ["Does"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one neighbour. Say two words for what they are like.",
    te: "ఒక పక్కింటివారిని గుర్తు చేసుకోండి. వారు ఎలాంటి మనిషో రెండు పదాలతో చెప్పండి.",
  },
  words: [
    { en: "friendly", te: "స్నేహంగా ఉండే" },
    { en: "strict", te: "కఠినంగా, కచ్చితంగా ఉండే" },
    { en: "shy", te: "బిడియం ఉన్న, సిగ్గుపడే" },
    { en: "cheerful", te: "ఎప్పుడూ నవ్వుతూ, సంతోషంగా ఉండే" },
    { en: "hard-working", te: "కష్టపడి పని చేసే" },
  ],
  grammar: ["am-is-are", "question-words"],
  topics: ["people", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What is she like?", te: "ఆవిడ ఎలాంటి మనిషి?" },
      body: {
        en: "What is she like? asks about a person's nature, not the face. Answer with is and a word: She's very patient. A bit makes a word softer: a bit strict, a bit shy.",
        te: "What is she like? అంటే స్వభావం గురించి, ముఖం గురించి కాదు. జవాబు is + ఒక పదం: She's very patient. a bit (కొంచెం) చేరిస్తే మాట మెత్తగా ఉంటుంది.",
      },
      bridge: {
        te: ["ఆవిడ", "చాలా ఓపికగా, స్నేహంగా", "ఉంటారు"],
        en: [
          { text: "She", role: "who" },
          { text: "is", role: "action" },
          { text: "very patient and friendly", role: "what" },
        ],
      },
      examples: [
        { en: "She's very patient and friendly.", te: "ఆవిడ చాలా ఓపికగా, స్నేహంగా ఉంటారు." },
        { en: "He's a bit strict, but very kind.", te: "ఆయన కొంచెం strict, కానీ చాలా మంచివారు." },
        { en: "Our postman is always cheerful.", te: "మా పోస్ట్‌మ్యాన్ ఎప్పుడూ నవ్వుతూ, సంతోషంగా ఉంటారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Nature or face?", te: "స్వభావమా, రూపమా?" },
      items: [
        {
          form: "What is she like?",
          useFor: { en: "Her nature: kind, strict, funny.", te: "ఆవిడ స్వభావం: మంచివారా, strict ఆ, సరదా మనిషా." },
          example: { en: "What is your new neighbour like?", te: "మీ కొత్త పక్కింటివారు ఎలాంటి మనిషి?" },
        },
        {
          form: "What does she look like?",
          useFor: { en: "Her face and body: tall, grey hair.", te: "ఆవిడ రూపం: పొడుగా, జుట్టు నెరిసిందా." },
          example: { en: "She's tall, and she has grey hair.", te: "ఆవిడ పొడుగ్గా ఉంటారు, జుట్టు నెరిసింది." },
        },
        {
          form: "a bit / very",
          useFor: { en: "A bit is a little; very is a lot.", te: "a bit అంటే కొంచెం; very అంటే చాలా." },
          example: { en: "She's a bit shy, but very hard-working.", te: "ఆవిడకి కొంచెం బిడియం, కానీ చాలా కష్టపడతారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "How is she like?",
      right: "What is she like?",
      why: {
        en: "Telugu says ఎలా, which sounds like how. But with like, English always asks with what.",
        te: "తెలుగులో 'ఎలా' అంటాం కాబట్టి how అనేస్తాం. కానీ like తో ఇంగ్లీష్‌లో ఎప్పుడూ what తోనే అడుగుతారు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "He is very strict type.",
      right: "He is very strict.",
      why: {
        en: "Strict type is heard only in India. The describing word alone is enough, with no type.",
        te: "'strict type' అనడం మన దగ్గరే. ఆ పదం ఒక్కటే చాలు, type అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a friend about her new neighbour's nature.", te: "స్నేహితురాలిని ఆవిడ కొత్త పక్కింటివారి స్వభావం గురించి అడగండి." },
      options: ["What is your new neighbour like?", "How is your new neighbour like?", "What your new neighbour is like?"],
      answer: 0,
      why: {
        en: "With like, ask with what, and put is before the person.",
        te: "like తో what వాడాలి; is ముందు, ఆ మనిషి తర్వాత వస్తారు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He's ___ strict, but very kind.",
      te: "ఆయన కొంచెం strict, కానీ చాలా మంచివారు.",
      options: ["a bit", "little", "bit"],
      answer: 0,
      why: {
        en: "For a small amount before a describing word, say a bit, always with a.",
        te: "describing పదం ముందు 'కొంచెం' అంటే a bit; a తప్పకుండా ఉండాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Your neighbour makes everyone laugh. What do you say?", te: "మీ పక్కింటివారు అందరినీ నవ్విస్తారు. ఏమంటారు?" },
      options: ["He's very funny.", "He's very shy.", "He's very strict."],
      answer: 0,
      why: {
        en: "Funny is the word for someone who makes people laugh.",
        te: "అందరినీ నవ్వించే మనిషిని funny అంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "She is very hard-work and honest.",
      wrongIndex: 3,
      fix: "She is very hard-working and honest.",
      why: {
        en: "Hard work is the job you do; the person who does it is hard-working.",
        te: "hard work అంటే చేసే పని; అలా పని చేసే మనిషి hard-working.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend what the new doctor is like.",
        te: "కొత్త డాక్టర్ గారు ఎలాంటి మనిషి అని మీ స్నేహితులను అడగండి.",
      },
      expected: ["What is the new doctor like?", "What's the new doctor like?"],
      options: ["What is the new doctor like?", "How is the new doctor like?", "What the new doctor is like?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your neighbour Mohan is kind, but a little strict. Describe him.",
        te: "మీ పక్కింటి మోహన్ గారు మంచివారు, కానీ కొంచెం strict. ఆయన గురించి చెప్పండి.",
      },
      expected: ["He's kind, but a bit strict.", "He is kind, but a bit strict.", "He's a bit strict, but very kind."],
      options: ["He's kind, but a bit strict.", "He's kind, but little strict.", "He kind, but a bit strict."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The new neighbours", te: "కొత్త పక్కింటివారు" },
    scene: {
      en: "Your neighbour Kamala meets you at the gate. She asks about the new family next door.",
      te: "మీ పక్కింటి కమల గారు గేటు దగ్గర కలిశారు. పక్కింట్లోకి కొత్తగా వచ్చినవారి గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Kamala (neighbour)", te: "కమల (పక్కింటావిడ)" },
    skills: [
      { id: "describe", label: { en: "Describing people", te: "మనుషుల స్వభావం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మంచిగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Did you meet the new neighbours?",
        te: "హలో! కొత్త పక్కింటివారిని కలిశారా?",
        hint: { en: "Say yes, and that it was yesterday.", te: "అవునని, నిన్న కలిశానని చెప్పండి." },
        replies: [
          { say: "Yes, I met them yesterday.", good: true },
          { say: "Yes, I meet them yesterday.", good: false },
        ],
      },
      {
        partner: "What are they like?",
        te: "వారు ఎలాంటివారు?",
        hint: { en: "Say something good about their nature.", te: "వారి స్వభావం గురించి ఒక మంచి మాట చెప్పండి." },
        replies: [
          { say: "They're very friendly and kind.", good: true, skill: "describe" },
          { say: "They are very friendly type.", good: false, skill: "describe", fixIt: "indian-english" },
          {
            say: "Friendly? They talk too much!",
            good: false,
            skill: "polite",
            react: { en: "Oh, please don't say that. They are new here.", te: "అయ్యో, అలా అనకండి. వారు ఇక్కడికి కొత్త." },
          },
        ],
      },
      {
        partner: "And Satish? He doesn't smile much.",
        te: "మరి సతీష్ గారు? పెద్దగా నవ్వరు.",
        hint: { en: "Agree a little, then add something good about him.", te: "కొంచెం ఒప్పుకుని, ఆయన గురించి ఒక మంచి మాట చేర్చండి." },
        replies: [
          { say: "He's a bit strict, but very kind.", good: true, skill: "describe" },
          { say: "He's little strict, but very kind.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Good. It's nice to have good neighbours.",
        te: "మంచిది. మంచి పొరుగువారు ఉండటం సంతోషం.",
        hint: { en: "Agree with her, and say goodbye.", te: "ఆవిడతో ఒప్పుకుని, బై చెప్పండి." },
        replies: [
          { say: "Yes, it is. See you later!", good: true, skill: "polite" },
          { say: "Yes, it is. See you after!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

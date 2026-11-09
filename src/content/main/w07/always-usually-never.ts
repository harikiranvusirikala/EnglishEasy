import type { Lesson } from "../../types";

/** Week 7, Day 1 (CURRICULUM §3): adverbs of frequency — always, usually, sometimes, never. */
export const day: Lesson = {
  id: "always-usually-never",
  kind: "lesson",
  title: { en: "Always, Usually, Never", te: "ఎప్పుడూ, మామూలుగా, ఎన్నడూ" },
  subtitle: "how often",
  summary: {
    en: "Learn to say how often you do things with always, usually, sometimes and never.",
    te: "always, usually, sometimes, never తో ఏదైనా ఎన్నిసార్లు చేస్తారో చెప్పడం నేర్చుకుందాం.",
  },
  seo: {
    title: "Always, Usually, Sometimes, Never in English for Telugu Speakers",
    description:
      "Say I always drink tea in the morning and I never eat late in English. Simple lessons for Telugu speakers on how often, with Telugu explanations.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "always", role: "when" },
    { text: "drink", role: "action" },
    { text: "tea", role: "what" },
  ],
  core: [
    { en: "I always drink tea in the morning.", te: "నేను రోజూ ఉదయం తప్పకుండా టీ తాగుతాను.", extra: ["drinks"] },
    { en: "I never eat late.", te: "నేను ఎప్పుడూ ఆలస్యంగా తినను.", extra: ["not"] },
    { en: "She usually walks after dinner.", te: "ఆవిడ మామూలుగా రాత్రి భోజనం తర్వాత నడుస్తారు.", extra: ["walk"] },
    { en: "I sometimes watch TV.", te: "నేను అప్పుడప్పుడు TV చూస్తాను.", extra: ["watching"] },
    { en: "He is always on time.", te: "ఆయన ఎప్పుడూ టైంకే వస్తారు.", extra: ["does"] },
    { en: "Do you often go out?", te: "మీరు ఎక్కువగా బయటకు వెళ్తుంటారా?", extra: ["Are"] },
    { en: "I usually sleep at ten.", te: "నేను మామూలుగా పది గంటలకు పడుకుంటాను.", extra: ["sleeping"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say three habits in English: one with always, one with sometimes, one with never.",
    te: "మీ మూడు అలవాట్లు ఇంగ్లీష్‌లో చెప్పండి: ఒకటి always తో, ఒకటి sometimes తో, ఒకటి never తో.",
  },
  words: [
    { en: "always", te: "ఎప్పుడూ, ప్రతిసారీ" },
    { en: "usually", te: "మామూలుగా" },
    { en: "sometimes", te: "అప్పుడప్పుడు" },
    { en: "never", te: "ఎప్పుడూ … చేయను" },
    { en: "often", te: "ఎక్కువసార్లు, ఎక్కువగా" },
  ],
  grammar: ["adverbs-frequency", "present-simple"],
  topics: ["health", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How often", te: "ఎన్నిసార్లు?" },
      body: {
        en: "Always is every time, usually is most days, sometimes is some days, and never is no day. Put the word before the action: I always drink tea. With am, is or are, put it after: He is always on time.",
        te: "always = ప్రతిసారీ, usually = చాలా రోజులు, sometimes = కొన్ని రోజులు, never = ఎప్పుడూ … చేయను (never లోనే 'లేదు' ఉంది). ఈ పదం verb ముందు వస్తుంది: I always drink tea. am, is, are ఉంటే వాటి తర్వాత: He is always on time.",
      },
      bridge: {
        te: ["నేను", "ఎప్పుడూ", "టీ తాగుతాను"],
        en: [
          { text: "I", role: "who" },
          { text: "always", role: "when" },
          { text: "drink", role: "action" },
          { text: "tea", role: "what" },
        ],
      },
      examples: [
        { en: "I always drink tea in the morning.", te: "నేను రోజూ ఉదయం తప్పకుండా టీ తాగుతాను." },
        { en: "I sometimes watch TV.", te: "నేను అప్పుడప్పుడు TV చూస్తాను." },
        { en: "I never eat late.", te: "నేను ఎప్పుడూ ఆలస్యంగా తినను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Where the word goes", te: "ఈ పదం ఎక్కడ వస్తుంది" },
      items: [
        {
          form: "before the action",
          useFor: { en: "Put always, usually, never before the action word.", te: "always, usually, never ని verb ముందు పెట్టాలి." },
          example: { en: "She usually walks after dinner.", te: "ఆవిడ మామూలుగా రాత్రి భోజనం తర్వాత నడుస్తారు." },
        },
        {
          form: "after am / is / are",
          useFor: { en: "With am, is or are, put it after them.", te: "am, is, are ఉంటే వాటి తర్వాత." },
          example: { en: "He is always on time.", te: "ఆయన ఎప్పుడూ టైంకే వస్తారు." },
        },
        {
          form: "never = not ever",
          useFor: { en: "Never already has the no inside. Don't add not.", te: "never లోనే 'లేదు' ఉంది. not చేర్చకండి." },
          example: { en: "I never eat late.", te: "నేను ఎప్పుడూ ఆలస్యంగా తినను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I drink always tea.",
      right: "I always drink tea.",
      why: {
        en: "Always goes before the action word, not after it: I always drink tea.",
        te: "always verb ముందు వస్తుంది, తర్వాత కాదు: I always drink tea.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I don't never eat late.",
      right: "I never eat late.",
      why: {
        en: "Never already has the no inside, so don't add don't: I never eat late.",
        te: "never లోనే 'లేదు' ఉంది, అందుకే don't అక్కర్లేదు: I never eat late.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I drink always tea.", "I always drink tea.", "I am always drink tea."],
      answer: 1,
      why: {
        en: "Always goes just before the verb, with no am: I always drink tea.",
        te: "always నేరుగా verb ముందు వస్తుంది, am రాదు: I always drink tea.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He is ___ on time.",
      te: "ఆయన ఎప్పుడూ టైంకే వస్తారు.",
      options: ["always", "sometimes", "never"],
      answer: 0,
      why: {
        en: "The Telugu verb is yes (వస్తారు), so ఎప్పుడూ means every time: He is always on time.",
        te: "'వస్తారు' అని ఉంది, 'రారు' కాదు; అందుకే ఇక్కడ ఎప్పుడూ = always: He is always on time.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which word means: అప్పుడప్పుడు?", te: "అప్పుడప్పుడు — ఇంగ్లీష్‌లో ఏ పదం?" },
      options: ["always", "sometimes", "never"],
      answer: 1,
      why: {
        en: "Sometimes means some days, not every day.",
        te: "sometimes అంటే కొన్ని రోజులు, ప్రతిరోజూ కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I don't never eat late.",
      wrongIndex: 1,
      fix: "I never eat late.",
      why: {
        en: "Telugu puts the no in the verb (తినను); English puts it in never: I never eat late.",
        te: "తెలుగులో 'లేదు' verb లో ఉంటుంది (తినను); ఇంగ్లీష్‌లో never లోనే ఉంది: I never eat late.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A doctor asks: Do you eat late? Say never.",
        te: "డాక్టర్ అడుగుతున్నారు: Do you eat late? ఎప్పుడూ తిననని చెప్పండి.",
      },
      expected: ["I never eat late.", "No, I never eat late."],
      options: ["I never eat late.", "I don't never eat late.", "I eat never late."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell a friend you usually walk in the morning.",
        te: "మీరు మామూలుగా ఉదయం నడుస్తారని మీ స్నేహితులకు చెప్పండి.",
      },
      expected: ["I usually walk in the morning."],
      options: ["I walk usually in the morning.", "I usually walk in the morning.", "I am usually walk in the morning."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The doctor asks about your habits", te: "డాక్టర్ మీ అలవాట్లు అడుగుతున్నారు" },
    scene: {
      en: "At a check-up, Dr Salma asks about your daily habits.",
      te: "చెకప్‌లో డాక్టర్ సల్మా మీ రోజువారీ అలవాట్ల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Dr Salma (a doctor)", te: "డాక్టర్ సల్మా" },
    skills: [{ id: "often", label: { en: "How often", te: "ఎన్నిసార్లు" } }],
    turns: [
      {
        partner: "Do you walk every day?",
        te: "మీరు రోజూ నడుస్తారా?",
        hint: { en: "Say yes, on most days, and when you walk.", te: "అవును, మామూలుగా అని చెప్పి, ఎప్పుడు నడుస్తారో చెప్పండి." },
        replies: [
          { say: "Yes, I usually walk in the morning.", good: true, skill: "often" },
          { say: "Yes, I walk usually in the morning.", good: false, skill: "often" },
        ],
      },
      {
        partner: "Do you drink coffee?",
        te: "మీరు కాఫీ తాగుతారా?",
        hint: { en: "Say you drink it on some days only.", te: "కొన్ని రోజులు మాత్రమే తాగుతానని చెప్పండి." },
        replies: [
          { say: "I sometimes drink coffee.", good: true, skill: "often" },
          { say: "I drink sometimes coffee.", good: false, skill: "often" },
          {
            say: "Why do you ask so many questions?",
            good: false,
            react: { en: "It helps me check your health.", te: "మీ ఆరోగ్యం చూడడానికే అడుగుతున్నానండీ." },
          },
        ],
      },
      {
        partner: "Do you eat late at night?",
        te: "రాత్రి ఆలస్యంగా తింటారా?",
        hint: { en: "Say no, not even once. Use never.", te: "ఒక్కసారి కూడా తిననని చెప్పండి. never వాడండి." },
        replies: [
          { say: "No, I never eat late.", good: true, skill: "often" },
          { say: "No, I don't never eat late.", good: false, skill: "often" },
        ],
      },
      {
        partner: "Good. Do you sleep well?",
        te: "మంచిది. బాగా నిద్రపోతారా?",
        hint: { en: "Say yes, and what time you usually sleep.", te: "అవునని, మామూలుగా ఎన్ని గంటలకు పడుకుంటారో చెప్పండి." },
        replies: [
          { say: "Yes, I usually sleep at ten.", good: true, skill: "often" },
          { say: "Yes, I usually sleeping at ten.", good: false, skill: "often" },
        ],
      },
    ],
  },
};

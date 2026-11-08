import type { Lesson } from "../../types";

/** Week 7, Day 1 (CURRICULUM §3): adverbs of frequency — always, usually, sometimes, never. */
export const day: Lesson = {
  id: "always-usually-never",
  kind: "lesson",
  title: { en: "Always, Usually, Never", te: "ఎప్పుడూ, సాధారణంగా, ఎప్పుడూ కాదు" },
  subtitle: "how often",
  summary: {
    en: "Learn to say how often you do things with always, usually, sometimes and never.",
    te: "always, usually, sometimes, never తో ఏదైనా ఎంత తరచుగా చేస్తారో చెప్పడం నేర్చుకుందాం.",
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
    { en: "I always drink tea in the morning.", te: "నేను ఎప్పుడూ ఉదయం టీ తాగుతాను.", extra: ["drinks"] },
    { en: "I never eat late.", te: "నేను ఎప్పుడూ ఆలస్యంగా తినను.", extra: ["not"] },
    { en: "She usually walks after dinner.", te: "ఆమె సాధారణంగా రాత్రి భోజనం తర్వాత నడుస్తుంది.", extra: ["walk"] },
    { en: "I sometimes watch TV.", te: "నేను అప్పుడప్పుడు TV చూస్తాను.", extra: ["watching"] },
    { en: "He is always on time.", te: "అతను ఎప్పుడూ సమయానికి వస్తాడు.", extra: ["does"] },
    { en: "Do you often go out?", te: "మీరు తరచుగా బయటకు వెళ్తారా?", extra: ["Are"] },
    { en: "I usually sleep at ten.", te: "నేను సాధారణంగా పది గంటలకు పడుకుంటాను.", extra: ["sleeping"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say three habits in English: one with always, one with sometimes, one with never.",
    te: "మీ మూడు అలవాట్లు ఇంగ్లీష్‌లో చెప్పండి: ఒకటి always తో, ఒకటి sometimes తో, ఒకటి never తో.",
  },
  words: [
    { en: "always", te: "ఎప్పుడూ" },
    { en: "usually", te: "సాధారణంగా" },
    { en: "sometimes", te: "అప్పుడప్పుడు" },
    { en: "never", te: "ఎప్పుడూ కాదు" },
    { en: "often", te: "తరచుగా" },
  ],
  grammar: ["adverbs-frequency", "present-simple"],
  topics: ["health", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "How often", te: "ఎంత తరచుగా" },
      body: {
        en: "Always is every time, usually is most days, sometimes is some days, and never is no day. Put the word before the action: I always drink tea. With am, is or are, put it after: He is always on time.",
        te: "always = ప్రతిసారీ, usually = చాలా రోజులు, sometimes = కొన్ని రోజులు, never = ఎప్పుడూ కాదు. ఈ పదం పని పదం ముందు వస్తుంది: I always drink tea. am, is, are ఉంటే దాని తర్వాత: He is always on time.",
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
        { en: "I always drink tea in the morning.", te: "నేను ఎప్పుడూ ఉదయం టీ తాగుతాను." },
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
          useFor: { en: "Put always, usually, never before the action word.", te: "always, usually, never ని పని పదం ముందు పెట్టాలి." },
          example: { en: "She usually walks after dinner.", te: "ఆమె సాధారణంగా రాత్రి భోజనం తర్వాత నడుస్తుంది." },
        },
        {
          form: "after am / is / are",
          useFor: { en: "With am, is or are, put it after them.", te: "am, is, are ఉంటే వాటి తర్వాత." },
          example: { en: "He is always on time.", te: "అతను ఎప్పుడూ సమయానికి వస్తాడు." },
        },
        {
          form: "never = not ever",
          useFor: { en: "Never already means no. Do not add not.", te: "never అంటేనే 'కాదు'. not చేర్చకండి." },
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
        en: "Always comes before the action word.",
        te: "always పని పదం ముందు వస్తుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I don't never eat late.",
      right: "I never eat late.",
      why: {
        en: "Never already means no. Use only never.",
        te: "never అంటేనే 'కాదు'. never ఒక్కటే చాలు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I drink always tea.", "I always drink tea.", "Always I drinking tea."],
      answer: 1,
      why: {
        en: "Always before the action: I always drink tea.",
        te: "always పని పదం ముందు: I always drink tea.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "He is ___ on time.",
      te: "అతను ఎప్పుడూ సమయానికి వస్తాడు.",
      options: ["always", "sometimes", "never"],
      answer: 0,
      why: {
        en: "Every time is always.",
        te: "ఎప్పుడూ (ప్రతిసారీ) = always.",
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
        en: "Do not use don't with never.",
        te: "never తో don't వాడకండి.",
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
        te: "మీరు సాధారణంగా ఉదయం నడుస్తారని మీ స్నేహితులకు చెప్పండి.",
      },
      expected: ["I usually walk in the morning."],
      options: ["I walk usually in the morning.", "I usually walk in the morning.", "Usually I walking in the morning."],
      answer: 1,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The doctor asks about your habits", te: "డాక్టర్ మీ అలవాట్లు అడుగుతున్నారు" },
    scene: {
      en: "At a check-up, Dr Anitha asks about your daily habits.",
      te: "చెకప్‌లో డాక్టర్ అనిత మీ రోజువారీ అలవాట్ల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Dr Anitha (a doctor)", te: "డాక్టర్ అనిత" },
    skills: [{ id: "often", label: { en: "How often", te: "ఎంత తరచుగా" } }],
    turns: [
      {
        partner: "Do you walk every day?",
        te: "మీరు రోజూ నడుస్తారా?",
        hint: { en: "Say: Yes, I usually walk in the morning.", te: "ఇలా చెప్పండి: Yes, I usually walk in the morning." },
        replies: [
          { say: "Yes, I usually walk in the morning.", good: true, skill: "often" },
          { say: "Yes, I walk usually in the morning.", good: false, skill: "often" },
        ],
      },
      {
        partner: "Do you drink coffee?",
        te: "మీరు కాఫీ తాగుతారా?",
        hint: { en: "Say: I sometimes drink coffee.", te: "ఇలా చెప్పండి: I sometimes drink coffee." },
        replies: [
          { say: "I sometimes drink coffee.", good: true, skill: "often" },
          { say: "I drink sometimes coffee.", good: false, skill: "often" },
        ],
      },
      {
        partner: "Do you eat late at night?",
        te: "రాత్రి ఆలస్యంగా తింటారా?",
        hint: { en: "Say: No, I never eat late.", te: "ఇలా చెప్పండి: No, I never eat late." },
        replies: [
          { say: "No, I never eat late.", good: true, skill: "often" },
          { say: "No, I don't never eat late.", good: false, skill: "often" },
        ],
      },
      {
        partner: "Good. Do you sleep well?",
        te: "మంచిది. బాగా నిద్రపోతారా?",
        hint: { en: "Say: Yes, I usually sleep at ten.", te: "ఇలా చెప్పండి: Yes, I usually sleep at ten." },
        replies: [
          { say: "Yes, I usually sleep at ten.", good: true, skill: "often" },
          { say: "Yes, I usually sleeping at ten.", good: false, skill: "often" },
        ],
      },
    ],
  },
};

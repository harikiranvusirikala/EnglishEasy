import type { Lesson } from "../../types";

/** Week 13, Day 5 (CURRICULUM §4): describing produce — fresh, ripe, soft, raw, too big (and too vs very). */
export const day: Lesson = {
  id: "fresh-and-ripe",
  kind: "lesson",
  title: { en: "Fresh and Ripe", te: "తాజాగా, పండినవి" },
  subtitle: "fresh, ripe, soft, too big",
  summary: {
    en: "Learn to choose good fruit and vegetables: Are these mangoes ripe? These tomatoes are too soft.",
    te: "మంచి పండ్లు, కూరగాయలు ఎంచుకోవడం నేర్చుకుందాం: Are these mangoes ripe? These tomatoes are too soft.",
  },
  seo: {
    title: "Fresh and Ripe: Choosing Fruit in English for Telugu Speakers",
    description:
      "Ask Are these mangoes ripe? and say These tomatoes are too soft. Simple lessons for Telugu speakers on choosing fruit and vegetables.",
  },
  pattern: [
    { text: "These tomatoes", role: "who" },
    { text: "are", role: "action" },
    { text: "too soft", role: "what" },
  ],
  core: [
    { en: "Are these mangoes ripe?", te: "ఈ మామిడిపండ్లు పండాయా?", extra: ["Is"] },
    { en: "These tomatoes are too soft.", te: "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి.", extra: ["is"] },
    { en: "Is the spinach fresh today?", te: "ఈ రోజు పాలకూర తాజాగా ఉందా?", extra: ["Are"] },
    { en: "This papaya is too big for me.", te: "ఈ బొప్పాయి నాకు మరీ పెద్దది.", extra: ["much"] },
    { en: "These bananas are still raw.", te: "ఈ అరటిపండ్లు ఇంకా పచ్చిగా ఉన్నాయి.", extra: ["is"] },
    { en: "Can I choose them myself?", te: "నేనే ఏరుకోవచ్చా?", extra: ["me"] },
    { en: "Give me the ripe ones, please.", te: "పండినవి ఇవ్వండి, ప్లీజ్.", extra: ["one"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "At home, look at one fruit and say: It is ripe, or It is still raw.",
    te: "ఇంట్లో ఒక పండు చూసి చెప్పండి: It is ripe, లేదా It is still raw.",
  },
  words: [
    { en: "fresh", te: "తాజా" },
    { en: "ripe", te: "పండిన" },
    { en: "soft", te: "మెత్తని" },
    { en: "raw", te: "పచ్చి, పండని" },
    { en: "too", te: "మరీ (అవసరానికి మించి)" },
  ],
  grammar: ["am-is-are", "yes-no-questions"],
  topics: ["market", "food", "shopping"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Is it good?", te: "బాగుందా?" },
      body: {
        en: "To check fruit, ask: Is it ripe? Are they fresh? Too means more than you want: too soft, too big. Very just means a lot: very sweet.",
        te: "పండ్లు చూడాలంటే అడగండి: Is it ripe? Are they fresh? too అంటే కావలసిన దానికంటే ఎక్కువ: too soft (మరీ మెత్తగా), too big (మరీ పెద్దది). very అంటే చాలా: very sweet.",
      },
      bridge: {
        te: ["ఈ టమాటాలు", "మరీ మెత్తగా", "ఉన్నాయి"],
        en: [
          { text: "These tomatoes", role: "who" },
          { text: "are", role: "action" },
          { text: "too soft", role: "what" },
        ],
      },
      examples: [
        { en: "Are these mangoes ripe?", te: "ఈ మామిడిపండ్లు పండాయా?" },
        { en: "These tomatoes are too soft.", te: "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి." },
        { en: "This papaya is too big for me.", te: "ఈ బొప్పాయి నాకు మరీ పెద్దది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Too or very?", te: "too ఆ, very ఆ?" },
      items: [
        {
          form: "very",
          useFor: { en: "A lot, and that is fine.", te: "చాలా; అది బాగానే ఉంది." },
          example: { en: "These mangoes are very sweet.", te: "ఈ మామిడిపండ్లు చాలా తియ్యగా ఉన్నాయి." },
        },
        {
          form: "too",
          useFor: { en: "More than you want: a problem.", te: "కావలసిన దానికంటే ఎక్కువ: సమస్య." },
          example: { en: "These tomatoes are too soft.", te: "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి." },
        },
        {
          form: "still raw",
          useFor: { en: "Not ripe yet.", te: "ఇంకా పండలేదు." },
          example: { en: "These bananas are still raw.", te: "ఈ అరటిపండ్లు ఇంకా పచ్చిగా ఉన్నాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "This papaya is too much big.",
      right: "This papaya is too big.",
      why: {
        en: "Say too big, not too much big.",
        te: "too much big కాదు, too big అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "These mangoes are too sweet. I'll take them.",
      right: "These mangoes are very sweet. I'll take them.",
      why: {
        en: "Sweet is good here: very, not too.",
        te: "తీపి ఇక్కడ మంచిదే: too కాదు, very.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Ask if the mangoes are ready to eat.", te: "మామిడిపండ్లు తినడానికి సిద్ధంగా ఉన్నాయా అని అడగండి." },
      options: ["Are these mangoes ripe?", "Is these mangoes ripe?", "These mangoes ripe?"],
      answer: 0,
      why: {
        en: "Many mangoes: are.",
        te: "చాలా మామిడిపండ్లు: are.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "These tomatoes are ___ soft. I don't want them.",
      te: "ఈ టమాటాలు మరీ మెత్తగా ఉన్నాయి. నాకు వద్దు.",
      options: ["too", "much", "so much"],
      answer: 0,
      why: {
        en: "A problem: too.",
        te: "సమస్య: too.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The bananas are green and hard. What do you say?", te: "అరటిపండ్లు పచ్చగా, గట్టిగా ఉన్నాయి. ఏమంటారు?" },
      options: ["These bananas are still raw.", "These bananas are too ripe.", "These bananas are very soft."],
      answer: 0,
      why: {
        en: "Green and hard: still raw.",
        te: "పచ్చగా, గట్టిగా: still raw.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Are the spinach fresh today?",
      wrongIndex: 0,
      fix: "Is the spinach fresh today?",
      why: {
        en: "Spinach counts as one thing: is.",
        te: "spinach ని ఒక్కటిగా లెక్కిస్తాం: is.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask the seller if these mangoes are ripe.",
        te: "ఈ మామిడిపండ్లు పండాయా అని అమ్మేవారిని అడగండి.",
      },
      expected: ["Are these mangoes ripe?", "Are they ripe?"],
      options: ["Are these mangoes ripe?", "Is these mangoes ripe?", "These mangoes are ripe is?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The tomatoes are too soft. Tell the seller.",
        te: "టమాటాలు మరీ మెత్తగా ఉన్నాయి. అమ్మేవారికి చెప్పండి.",
      },
      expected: ["These tomatoes are too soft.", "They are too soft."],
      options: ["These tomatoes are too soft.", "These tomatoes are too much soft.", "These tomatoes is too soft."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Choosing good fruit", te: "మంచి పండ్లు ఎంచుకోవడం" },
    scene: {
      en: "You want mangoes for today. Rani, the fruit seller, shows you some.",
      te: "ఈ రోజుకి మీకు మామిడిపండ్లు కావాలి. పండ్లు అమ్మే రాణి కొన్ని చూపిస్తోంది.",
    },
    partner: { en: "Rani (fruit seller)", te: "రాణి (పండ్లు అమ్మే ఆమె)" },
    skills: [{ id: "describe", label: { en: "Describing fruit", te: "పండ్ల వర్ణన" } }],
    turns: [
      {
        partner: "These mangoes came today. Very sweet!",
        te: "ఈ మామిడిపండ్లు ఈ రోజే వచ్చాయి. చాలా తియ్యగా ఉంటాయి!",
        hint: { en: "Ask: Are they ripe?", te: "అడగండి: Are they ripe?" },
        replies: [
          { say: "Are they ripe?", good: true, skill: "describe" },
          { say: "Is they ripe?", good: false, skill: "describe" },
        ],
      },
      {
        partner: "These two are ripe. These are still raw.",
        te: "ఈ రెండూ పండాయి. ఇవి ఇంకా పచ్చిగా ఉన్నాయి.",
        hint: { en: "Say: Give me the ripe ones, please.", te: "ఇలా చెప్పండి: Give me the ripe ones, please." },
        replies: [
          { say: "Give me the ripe ones, please.", good: true, skill: "describe" },
          { say: "Give me the ripe one, please.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Do you want this big papaya too?",
        te: "ఈ పెద్ద బొప్పాయి కూడా కావాలా?",
        hint: { en: "Say: No, it's too big for me.", te: "ఇలా చెప్పండి: No, it's too big for me." },
        replies: [
          { say: "No, it's too big for me.", good: true, skill: "describe" },
          { say: "No, it's too much big for me.", good: false, skill: "describe" },
        ],
      },
      {
        partner: "Okay. Anything else?",
        te: "సరే. ఇంకేమైనా?",
        hint: { en: "Ask: Can I choose the tomatoes myself?", te: "అడగండి: Can I choose the tomatoes myself?" },
        replies: [
          { say: "Can I choose the tomatoes myself?", good: true },
          { say: "Can I choose the tomatoes me?", good: false },
        ],
      },
    ],
  },
};

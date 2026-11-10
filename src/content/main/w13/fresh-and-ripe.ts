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
    en: "At home, look at one fruit and say: It is ripe, or It is not ripe yet.",
    te: "ఇంట్లో ఒక పండు చూసి చెప్పండి: It is ripe, లేదా It is not ripe yet.",
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
        en: "To check fruit, ask: Is it ripe? Are they fresh? Too means more than you want: too soft, too big. Very just means a lot: very sweet. In India we say still raw for fruit that is not ripe; people abroad say still green, or not ripe yet.",
        te: "పండ్లు చూడాలంటే అడగండి: Is it ripe? Are they fresh? too అంటే కావలసిన దానికంటే ఎక్కువ: too soft (మరీ మెత్తగా), too big (మరీ పెద్దది). very అంటే చాలా: very sweet. పండని పండుని మనం still raw అంటాం; బయటి దేశాల వాళ్ళు still green లేదా not ripe yet అంటారు.",
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
          useFor: { en: "Not ripe yet. Abroad, say still green.", te: "ఇంకా పండలేదు. బయటి దేశాల్లో still green అంటారు." },
          example: { en: "These bananas are still raw.", te: "ఈ అరటిపండ్లు ఇంకా పచ్చిగా ఉన్నాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "This papaya is too much big.",
      right: "This papaya is too big.",
      why: {
        en: "Too already means more than you want, so no much: This papaya is too big.",
        te: "too అంటేనే అవసరానికి మించి; much అక్కర్లేదు: This papaya is too big.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "These mangoes are too sweet. I'll take them.",
      right: "These mangoes are very sweet. I'll take them.",
      why: {
        en: "Too means a problem; sweet mangoes are good, so very: These mangoes are very sweet.",
        te: "too అంటే సమస్య; తీపి మంచిదే, అందుకే very: These mangoes are very sweet.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "Ask if the mangoes are ready to eat.", te: "మామిడిపండ్లు తినడానికి సిద్ధంగా ఉన్నాయా అని అడగండి." },
      options: ["Are these mangoes ripe?", "Is these mangoes ripe?", "These mangoes ripe?"],
      answer: 0,
      why: {
        en: "Mangoes are more than one, so the question starts with are: Are these mangoes ripe?",
        te: "మామిడిపండ్లు చాలా ఉన్నాయి, అందుకే ప్రశ్న are తో: Are these mangoes ripe?",
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
        en: "Too soft is a problem, which is why you don't want them: These tomatoes are too soft.",
        te: "మరీ మెత్తగా ఉంటే సమస్య, అందుకే too: These tomatoes are too soft.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "The bananas are green and hard. What do you say?", te: "అరటిపండ్లు పచ్చగా, గట్టిగా ఉన్నాయి. ఏమంటారు?" },
      options: ["These bananas are still raw.", "These bananas are too ripe.", "These bananas are very soft."],
      answer: 0,
      why: {
        en: "Green and hard means not ripe yet: These bananas are still raw. Abroad, people say still green.",
        te: "పచ్చగా, గట్టిగా ఉంటే ఇంకా పండలేదు: These bananas are still raw. బయట still green అంటారు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Are the spinach fresh today?",
      wrongIndex: 0,
      fix: "Is the spinach fresh today?",
      why: {
        en: "We don't count spinach, we see it as one heap, so is: Is the spinach fresh today?",
        te: "spinach ని లెక్కపెట్టం, ఒక్కటిగానే చూస్తాం, అందుకే is: Is the spinach fresh today?",
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
      options: ["Are these mangoes ripe?", "Is these mangoes ripe?", "Do these mangoes ripe?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
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
      te: "ఈ రోజుకి మీకు మామిడిపండ్లు కావాలి. పండ్లు అమ్మే రాణి కొన్ని చూపిస్తున్నారు.",
    },
    partner: { en: "Rani (fruit seller)", te: "రాణి (పండ్లు అమ్మే ఆవిడ)" },
    skills: [{ id: "describe", label: { en: "Describing fruit", te: "పండ్ల వర్ణన" } }],
    turns: [
      {
        partner: "These mangoes came today. Very sweet!",
        te: "ఈ మామిడిపండ్లు ఈ రోజే వచ్చాయి. చాలా తియ్యగా ఉంటాయి!",
        hint: { en: "Ask if they are ready to eat.", te: "తినడానికి పండాయా అని అడగండి." },
        replies: [
          { say: "Are they ripe?", good: true, skill: "describe" },
          { say: "Is they ripe?", good: false, skill: "describe" },
        ],
      },
      {
        partner: "These two are ripe. These are still raw.",
        te: "ఈ రెండూ పండాయి. ఇవి ఇంకా పచ్చిగా ఉన్నాయి.",
        hint: { en: "Ask politely for the two that are ripe.", te: "పండిన ఆ రెండూ ఇవ్వమని మర్యాదగా అడగండి." },
        replies: [
          { say: "Give me the ripe ones, please.", good: true, skill: "describe" },
          { say: "Give me ripe one, please.", good: false, skill: "describe", fixIt: "article" },
        ],
      },
      {
        partner: "Do you want this big papaya too?",
        te: "ఈ పెద్ద బొప్పాయి కూడా కావాలా?",
        hint: { en: "Say no, and give the reason: its size.", te: "వద్దని, కారణం చెప్పండి: దాని సైజు." },
        replies: [
          { say: "No, it's too big for me.", good: true, skill: "describe" },
          { say: "No, it's too much big for me.", good: false, skill: "describe", fixIt: "indian-english" },
        ],
      },
      {
        partner: "Okay. Anything else?",
        te: "సరే. ఇంకేమైనా?",
        hint: { en: "Ask if you can pick the tomatoes yourself.", te: "టమాటాలు మీరే ఏరుకోవచ్చా అని అడగండి." },
        replies: [
          { say: "Can I choose the tomatoes myself?", good: true },
          { say: "Myself I will choose the tomatoes.", good: false, fixIt: "indian-english" },
          {
            say: "Let me choose. You give bad ones.",
            good: false,
            react: { en: "Bad ones? Never! But okay, choose yourself.", te: "చెడ్డవా? ఎప్పుడూ ఇవ్వను! సరే, మీరే ఏరుకోండి." },
          },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 72, Day 5 (CURRICULUM §5): maybe and perhaps for flexible plans — Maybe we can go to Bhadrachalam next month. */
export const day: Lesson = {
  id: "maybe-next-month-plans",
  kind: "lesson",
  title: { en: "Maybe Next Month", te: "వచ్చే నెల కావచ్చు" },
  subtitle: "Maybe … / Perhaps …",
  summary: {
    en: "Learn to make flexible plans: Maybe we can go to Bhadrachalam next month. Perhaps the bank will extend the date.",
    te: "ఖాయం కాని, మార్చుకోగలిగే ప్లాన్లు చెప్పడం నేర్చుకుందాం: Maybe we can go to Bhadrachalam next month. Perhaps the bank will extend the date.",
  },
  seo: {
    title: "Maybe and Perhaps in English for Telugu Speakers",
    description:
      "Say Maybe we can go next month and Perhaps the bank will extend the date. Simple lessons for Telugu speakers on flexible plans.",
  },
  pattern: [
    { text: "Maybe we", role: "who" },
    { text: "can go", role: "action" },
    { text: "to Bhadrachalam", role: "what" },
    { text: "next month", role: "when" },
  ],
  core: [
    { en: "Maybe next month. We'll see.", te: "వచ్చే నెల కావచ్చు. చూద్దాం.", extra: ["seeing"] },
    { en: "Maybe we can go to Bhadrachalam next month.", te: "వచ్చే నెల భద్రాచలం వెళ్ళొచ్చేమో.", extra: ["in"] },
    { en: "Perhaps the bank will extend the date.", te: "బ్యాంక్ వాళ్ళు తేదీని పొడిగిస్తారేమో.", extra: ["extends"] },
    { en: "I'm flexible. Any day is fine for me.", te: "నేను ఎలాగైనా సర్దుకుంటాను. నాకు ఏ రోజైనా పర్లేదు.", extra: ["days"] },
    { en: "If it rains, perhaps we can go after Dasara.", te: "వర్షం పడితే, దసరా తర్వాత వెళ్ళొచ్చేమో.", extra: ["rain"] },
    { en: "Let's fix the day sometime next week.", te: "వచ్చే వారంలో ఎప్పుడైనా రోజు ఖాయం చేద్దాం.", extra: ["on"] },
    { en: "Maybe Rahim will join us too.", te: "రహీమ్ గారు కూడా మనతో వస్తారేమో.", extra: ["joins"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a trip or a visit you might make. Say aloud: Maybe I can … next month.",
    te: "మీరు వెళ్ళే అవకాశం ఉన్న ఒక ప్రయాణం గురించి ఆలోచించండి. గట్టిగా చెప్పండి: Maybe I can … next month.",
  },
  words: [
    { en: "perhaps", te: "బహుశా, …ఏమో" },
    { en: "extend", te: "పొడిగించడం" },
    { en: "flexible", te: "ఎలాగైనా సర్దుకునేలా, ఫ్లెక్సిబుల్" },
    { en: "we'll see", te: "చూద్దాం" },
    { en: "sometime", te: "ఎప్పుడైనా" },
  ],
  grammar: ["might-may", "will", "conditionals"],
  topics: ["travel", "time", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Maybe and perhaps", te: "maybe, perhaps: …ఏమో" },
      body: {
        en: "Maybe and perhaps mean the same: it is possible. They usually come first in the sentence: Maybe we can go next month.",
        te: "maybe, perhaps రెండిటికీ ఒకటే అర్థం: అవ్వొచ్చు. ఇవి మామూలుగా వాక్యం మొదట్లో వస్తాయి: Maybe we can go next month (వచ్చే నెల వెళ్ళొచ్చేమో).",
      },
      bridge: {
        te: ["వచ్చే నెల", "భద్రాచలం", "వెళ్ళొచ్చేమో"],
        en: [
          { text: "Maybe we", role: "who" },
          { text: "can go", role: "action" },
          { text: "to Bhadrachalam", role: "what" },
          { text: "next month", role: "when" },
        ],
      },
      examples: [
        { en: "Maybe next month. We'll see.", te: "వచ్చే నెల కావచ్చు. చూద్దాం." },
        { en: "Maybe we can go to Bhadrachalam next month.", te: "వచ్చే నెల భద్రాచలం వెళ్ళొచ్చేమో." },
        { en: "Perhaps the bank will extend the date.", te: "బ్యాంక్ వాళ్ళు తేదీని పొడిగిస్తారేమో." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Keeping plans open", te: "ప్లాన్ ఖాయం చేయకుండా ఉంచడం" },
      items: [
        {
          form: "Maybe …",
          useFor: { en: "A possible plan, said in a friendly way.", te: "జరగొచ్చు అనిపించే ప్లాన్, స్నేహంగా." },
          example: { en: "Maybe we can meet on Saturday.", te: "శనివారం కలవొచ్చేమో." },
        },
        {
          form: "Perhaps …",
          useFor: { en: "The same meaning, a little more formal.", te: "అదే అర్థం, కొంచెం మర్యాదగా." },
          example: { en: "Perhaps the doctor can see you tomorrow.", te: "డాక్టర్ గారు రేపు మిమ్మల్ని చూడొచ్చేమో." },
        },
        {
          form: "We'll see.",
          useFor: { en: "You will decide later.", te: "తర్వాత నిర్ణయిద్దాం అనడానికి." },
          example: { en: "I'll ask Usha first. We'll see.", te: "ముందు ఉష గారిని అడుగుతాను. చూద్దాం." },
        },
        {
          form: "I'm flexible.",
          useFor: { en: "Any day or time is fine for you.", te: "మీకు ఏ రోజైనా, ఏ టైమైనా పర్లేదు." },
          example: { en: "I'm flexible this week, except Tuesday.", te: "ఈ వారం మంగళవారం తప్ప నాకు ఏ రోజైనా పర్లేదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "May be we can go next month.",
      right: "Maybe we can go next month.",
      why: {
        en: "In writing, maybe at the start is one word; may be is a verb, as in It may be late.",
        te: "రాసేటప్పుడు మొదట్లో వచ్చే maybe ఒకే పదం; may be అనేది verb, It may be late లాగా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Maybe we can go in next month.",
      right: "Maybe we can go next month.",
      why: {
        en: "Next, this and last need no in or on before them.",
        te: "next, this, last ముందు in గానీ on గానీ రావు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Your friend wants to go to Bhadrachalam this week. You can't. Suggest next month kindly.",
        te: "స్నేహితులు ఈ వారం భద్రాచలం వెళ్దాం అంటున్నారు. మీకు కుదరదు. వచ్చే నెల అని మర్యాదగా సూచించండి.",
      },
      options: ["Maybe we can go next month.", "Maybe we can go in next month.", "Not this week. Forget it."],
      answer: 0,
      why: {
        en: "Next month needs no in, and a kind maybe keeps the plan alive.",
        te: "next month ముందు in రాదు; మర్యాదగా maybe అంటే ప్లాన్ అలాగే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "Perhaps the bank ___ the date.",
      te: "బ్యాంక్ వాళ్ళు తేదీని పొడిగిస్తారేమో.",
      options: ["will extend", "extend", "will extends"],
      answer: 0,
      why: {
        en: "For a possible future, keep will; after will, the verb takes no s.",
        te: "రాబోయేదానికి will ఉంచండి; will తర్వాత verb కి s రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "You want to fix a day for the trip. Ask your friend which day he will be free.", te: "ప్రయాణానికి రోజు ఖాయం చేయాలి. ఏ రోజు ఖాళీగా ఉంటారో స్నేహితుడిని అడగండి." },
      options: ["Which day will you be free?", "Which day you will be free?", "Which day will you free?"],
      answer: 0,
      why: {
        en: "In a question, will comes before you, and be stays before free.",
        te: "ప్రశ్నలో will, you కంటే ముందు వస్తుంది; free ముందు be ఉండాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "Maybe we can stay for two night in Bhadrachalam.",
      wrongIndex: 6,
      fix: "Maybe we can stay for two nights in Bhadrachalam.",
      why: {
        en: "With two or more, add s to the word: two nights, three days.",
        te: "రెండు లేదా అంతకంటే ఎక్కువ అయితే పదానికి s చేర్చాలి: two nights, three days.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend asks when you can both go to Bhadrachalam. You are not sure. Suggest next month.",
        te: "భద్రాచలం ఎప్పుడు వెళ్దామని స్నేహితులు అడుగుతున్నారు. మీకు ఖచ్చితంగా తెలీదు. వచ్చే నెల అని సూచించండి.",
      },
      expected: ["Maybe we can go next month.", "Perhaps next month.", "Maybe next month. We'll see."],
      options: ["Maybe we can go next month.", "Maybe we can go on next month.", "Maybe we can going next month."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend says the bank's last date is Friday. You think the bank might give more time. Say so.",
        te: "బ్యాంక్ చివరి తేదీ శుక్రవారం అని స్నేహితులు అంటున్నారు. బ్యాంక్ ఇంకా టైమ్ ఇస్తుందేమో అని మీకు అనిపిస్తోంది. అది చెప్పండి.",
      },
      expected: ["Perhaps the bank will extend the date.", "Maybe the bank will extend the date.", "Perhaps they will extend the date."],
      options: ["Perhaps the bank will extend the date.", "Perhaps bank will extend the date.", "Perhaps the bank will extending the date."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A trip, someday soon", te: "త్వరలో ఎప్పుడైనా ఒక ప్రయాణం" },
    scene: {
      en: "Your friend Joseph wants to plan a trip to Bhadrachalam with you. You are not sure about the dates yet.",
      te: "మీ స్నేహితుడు జోసెఫ్ గారు మీతో కలిసి భద్రాచలం వెళ్ళాలని ప్లాన్ చేస్తున్నారు. మీకు ఇంకా తేదీలు ఖచ్చితంగా తెలీదు.",
    },
    partner: { en: "Joseph (your friend)", te: "జోసెఫ్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "flexible", label: { en: "Keeping plans open", te: "ప్లాన్ ఖాయం చేయకుండా ఉంచడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hi! Shall we go to Bhadrachalam this month?",
        te: "హాయ్! ఈ నెల భద్రాచలం వెళ్దామా?",
        hint: { en: "Say this month is hard for you, and suggest next month instead.", te: "ఈ నెల మీకు కష్టమని చెప్పి, బదులుగా వచ్చే నెల సూచించండి." },
        replies: [
          { say: "I'd love to, but maybe next month?", good: true, skill: "flexible" },
          { say: "This month is difficult. Perhaps next month?", good: true, skill: "flexible" },
          {
            say: "This month? No way. Too much trouble.",
            good: false,
            skill: "polite",
            react: { en: "Oh, okay. I only asked.", te: "ఓ, సరే. ఊరికే అడిగానండీ." },
          },
        ],
      },
      {
        partner: "Okay. Which week is good for you?",
        te: "సరే. మీకు ఏ వారం బాగుంటుంది?",
        hint: { en: "Say that any week suits you.", te: "ఏ వారమైనా మీకు కుదురుతుందని చెప్పండి." },
        replies: [
          { say: "I'm flexible. Any week is fine for me.", good: true, skill: "flexible" },
          { say: "I'm flexible. Any weeks is fine for me.", good: false, skill: "flexible", fixIt: "plural" },
        ],
      },
      {
        partner: "Great. Should we go by bus or by car?",
        te: "బాగుంది. బస్సులో వెళ్దామా, కారులో వెళ్దామా?",
        hint: { en: "Say a car could be better, but you can both decide later.", te: "కారు బాగుండొచ్చని, కానీ తర్వాత నిర్ణయిద్దామని చెప్పండి." },
        replies: [
          { say: "A car might be better. Let's decide later. We'll see.", good: true, skill: "flexible" },
          { say: "A car might better. Let's decide later. We'll see.", good: false, skill: "flexible", fixIt: "be" },
        ],
      },
      {
        partner: "Fine. I'll call you next week, then.",
        te: "సరే. అయితే వచ్చే వారం ఫోన్ చేస్తాను.",
        hint: { en: "Agree, and say goodbye warmly.", te: "ఒప్పుకుని, ఆప్యాయంగా బై చెప్పండి." },
        replies: [
          { say: "Sure. Talk to you next week. Bye!", good: true, skill: "polite" },
          { say: "Sure. Talk to you on next week. Bye!", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

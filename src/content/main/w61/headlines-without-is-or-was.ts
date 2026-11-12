import type { Lesson } from "../../types";

/** Week 61, Day 2 (CURRICULUM §5): headlines drop is / was — New Flyover Opened means a new flyover was opened. */
export const day: Lesson = {
  id: "headlines-without-is-or-was",
  kind: "lesson",
  title: { en: "Flyover Opened", te: "ఫ్లైఓవర్ ప్రారంభం" },
  subtitle: "headlines without is or was",
  summary: {
    en: "Learn that headlines leave out is and was: New Flyover Opened means a new flyover was opened.",
    te: "హెడ్‌లైన్స్‌లో is, was ఉండవని తెలుసుకుందాం: New Flyover Opened అంటే a new flyover was opened.",
  },
  seo: {
    title: "Headlines Without Is or Was in English for Telugu Speakers",
    description:
      "Read New Flyover Opened and say A new flyover was opened. Simple lessons for Telugu speakers on headlines that drop is and was.",
  },
  pattern: [
    { text: "New Flyover", role: "who" },
    { text: "Opened", role: "action" },
    { text: "in Guntur", role: "what" },
  ],
  core: [
    { en: "A new flyover was opened in Guntur.", te: "గుంటూరులో కొత్త ఫ్లైఓవర్‌ని ప్రారంభించారు.", extra: ["is"] },
    { en: "Two men were arrested for chain snatching.", te: "చైన్ స్నాచింగ్ చేసినందుకు ఇద్దరిని అరెస్ట్ చేశారు.", extra: ["was"] },
    { en: "Was anyone hurt in the accident?", te: "ఆ ప్రమాదంలో ఎవరికైనా దెబ్బలు తగిలాయా?", extra: ["hurted"] },
    { en: "Three fishermen were rescued near Kakinada.", te: "కాకినాడ దగ్గర ముగ్గురు జాలర్లను కాపాడారు.", extra: ["fisherman"] },
    { en: "A free eye camp was held at the school.", te: "స్కూల్లో ఫ్రీ ఐ క్యాంప్ పెట్టారు.", extra: ["is"] },
    {
      en: "New Flyover Opened in Guntur means a new flyover was opened.",
      te: "New Flyover Opened in Guntur అంటే గుంటూరులో కొత్త ఫ్లైఓవర్‌ని ప్రారంభించారని.",
      extra: ["open"],
    },
    { en: "Our village school was given an award.", te: "మా ఊరి స్కూల్‌కి అవార్డు ఇచ్చారు.", extra: ["gave"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Find one headline with no is or was. Say it as a full sentence: A new … was …",
    te: "is, was లేని ఒక హెడ్‌లైన్ వెతకండి. దాన్ని పూర్తి వాక్యంగా చెప్పండి: A new … was …",
  },
  words: [
    { en: "rescued", te: "కాపాడారు" },
    { en: "fishermen", te: "జాలర్లు, మత్స్యకారులు" },
    { en: "award", te: "అవార్డు, బహుమతి" },
    { en: "eye camp", te: "కంటి వైద్య శిబిరం, ఐ క్యాంప్" },
    { en: "held", te: "జరిపారు, నిర్వహించారు" },
  ],
  grammar: ["passive-voice", "was-were", "plurals-countable"],
  topics: ["neighbours", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Headlines drop is and was", te: "హెడ్‌లైన్స్‌లో is, was ఉండవు" },
      body: {
        en: "Headlines leave out small words like is, was, a and the. New Flyover Opened means a new flyover was opened. When you say it, put them back.",
        te: "హెడ్‌లైన్స్‌లో is, was, a, the లాంటి చిన్న పదాలు ఉండవు. New Flyover Opened అంటే a new flyover was opened. మీరు చెప్పేటప్పుడు అవి మళ్ళీ చేర్చండి.",
      },
      bridge: {
        te: ["గుంటూరులో", "కొత్త ఫ్లైఓవర్", "ప్రారంభం"],
        en: [
          { text: "New Flyover", role: "who" },
          { text: "Opened", role: "action" },
          { text: "in Guntur", role: "what" },
        ],
      },
      examples: [
        { en: "A new flyover was opened in Guntur.", te: "గుంటూరులో కొత్త ఫ్లైఓవర్‌ని ప్రారంభించారు." },
        { en: "Two men were arrested for chain snatching.", te: "చైన్ స్నాచింగ్ చేసినందుకు ఇద్దరిని అరెస్ట్ చేశారు." },
        {
          en: "New Flyover Opened in Guntur means a new flyover was opened.",
          te: "New Flyover Opened in Guntur అంటే గుంటూరులో కొత్త ఫ్లైఓవర్‌ని ప్రారంభించారని.",
        },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Headline and sentence", te: "హెడ్‌లైన్, వాక్యం" },
      items: [
        {
          form: "Two Men Arrested",
          useFor: { en: "A headline: no were, no the.", te: "హెడ్‌లైన్: were ఉండదు, the ఉండదు." },
          example: { en: "The headline says Two Men Arrested for Chain Snatching.", te: "'చైన్ స్నాచింగ్ కేసులో ఇద్దరి అరెస్ట్' అని హెడ్‌లైన్ ఉంది." },
        },
        {
          form: "were arrested",
          useFor: { en: "Telling a friend: two or more people take were.", te: "స్నేహితులకి చెప్పేటప్పుడు: ఇద్దరు, అంతకంటే ఎక్కువ అయితే were." },
          example: { en: "Two men were arrested last night.", te: "నిన్న రాత్రి ఇద్దరిని అరెస్ట్ చేశారు." },
        },
        {
          form: "was held",
          useFor: { en: "Telling a friend: one thing takes was.", te: "స్నేహితులకి చెప్పేటప్పుడు: ఒక్కటే అయితే was." },
          example: { en: "A free eye camp was held at the school.", te: "స్కూల్లో ఫ్రీ ఐ క్యాంప్ పెట్టారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The flyover opened by the collector yesterday.",
      right: "The flyover was opened by the collector yesterday.",
      why: {
        en: "In a full sentence, this needs was before opened; only headlines leave it out.",
        te: "పూర్తి వాక్యంలో opened ముందు was కావాలి; హెడ్‌లైన్స్‌లో మాత్రమే అది ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Three fisherman were rescued near Kakinada.",
      right: "Three fishermen were rescued near Kakinada.",
      why: {
        en: "After three, man becomes men, so fisherman becomes fishermen with no s.",
        te: "మూడు తర్వాత man కాస్తా men అవుతుంది; అందుకే fisherman కాదు, s లేకుండా fishermen.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "The headline says Two Men Arrested for Chain Snatching. What happened?",
        te: "హెడ్‌లైన్‌లో Two Men Arrested for Chain Snatching అని ఉంది. ఏం జరిగింది?",
      },
      options: ["The police arrested two men.", "Two men arrested a thief.", "Two men will be arrested."],
      answer: 0,
      why: {
        en: "Headlines drop were, so Men Arrested means somebody arrested the men.",
        te: "హెడ్‌లైన్స్‌లో were ఉండదు; Men Arrested అంటే ఆ మనుషుల్ని ఎవరో అరెస్ట్ చేశారని.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Two men ___ arrested last night.",
      te: "నిన్న రాత్రి ఇద్దరిని అరెస్ట్ చేశారు.",
      options: ["were", "was", "are"],
      answer: 0,
      why: {
        en: "Two men are more than one, and last night is past, so use were.",
        te: "ఇద్దరు అంటే ఒకరి కంటే ఎక్కువ, last night అంటే past; అందుకే were.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "Tell your neighbour about the new flyover in Guntur.",
        te: "గుంటూరులో కొత్త ఫ్లైఓవర్ గురించి పక్కింటివారికి చెప్పండి.",
      },
      options: ["A new flyover was opened in Guntur.", "New flyover was opened in Guntur.", "A new flyover is opened in Guntur yesterday."],
      answer: 0,
      why: {
        en: "A sentence you say keeps a before one new thing, and past news takes was.",
        te: "మీరు చెప్పే వాక్యంలో కొత్త ఒక్క వస్తువు ముందు a ఉండాలి; జరిగిపోయిన వార్తకి was.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The thief caught near the bus stand last night.",
      wrongIndex: 2,
      fix: "The thief was caught near the bus stand last night.",
      why: {
        en: "Someone caught the thief, so the sentence needs was before caught; Telugu పట్టుకున్నారు has no such word.",
        te: "దొంగని ఎవరో పట్టుకున్నారు, అందుకే caught ముందు was కావాలి; తెలుగు 'పట్టుకున్నారు' లో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your neighbour asks about the fishermen in the news. The headline says Three Fishermen Rescued. Tell him.",
        te: "వార్తల్లో జాలర్ల గురించి పక్కింటాయన అడుగుతున్నారు. హెడ్‌లైన్‌లో Three Fishermen Rescued అని ఉంది. ఆయనకి చెప్పండి.",
      },
      expected: ["Three fishermen were rescued.", "Three fishermen were rescued near Kakinada.", "They were rescued yesterday."],
      options: ["Three fishermen were rescued.", "Three fisherman were rescued.", "Three fishermen was rescued."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "There was an accident near the market. Ask your friend if anyone was hurt.",
        te: "మార్కెట్ దగ్గర ప్రమాదం జరిగింది. ఎవరికైనా దెబ్బలు తగిలాయా అని మీ స్నేహితుల్ని అడగండి.",
      },
      expected: ["Was anyone hurt in the accident?", "Was anyone hurt?", "Did anyone get hurt?"],
      options: ["Was anyone hurt in the accident?", "Anyone was hurt in the accident?", "Was anyone hurted in the accident?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Local news at the gate", te: "గేటు దగ్గర ఊరి వార్తలు" },
    scene: {
      en: "Your neighbour Kavitha stops at your gate in the evening. She wants to talk about the local news.",
      te: "సాయంత్రం పక్కింటి కవిత గారు మీ గేటు దగ్గర ఆగారు. ఊరి వార్తల గురించి మాట్లాడాలనుకుంటున్నారు.",
    },
    partner: { en: "Kavitha (your neighbour)", te: "కవిత (పక్కింటావిడ)" },
    skills: [
      { id: "news", label: { en: "Telling the news", te: "వార్త చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Did you see the news about the new flyover?",
        te: "హలో! కొత్త ఫ్లైఓవర్ గురించి వార్త చూశారా?",
        hint: { en: "Say yes, and tell her which day it started.", te: "అవునని చెప్పి, అది ఏ రోజు మొదలైందో చెప్పండి." },
        replies: [
          { say: "Yes, it was opened yesterday morning.", good: true, skill: "news" },
          { say: "Yes, it opened by the collector yesterday.", good: false, skill: "news", fixIt: "be" },
        ],
      },
      {
        partner: "That's good news. The traffic there was terrible.",
        te: "మంచి వార్త. అక్కడ ట్రాఫిక్ చాలా ఘోరంగా ఉండేది.",
        hint: { en: "Agree, and say the road will be easier now.", te: "ఒప్పుకుని, ఇప్పుడు ఆ రోడ్డు సులువుగా ఉంటుందని చెప్పండి." },
        replies: [
          { say: "Yes, the road will be much easier now.", good: true, skill: "news" },
          {
            say: "Who cares? I never go that way.",
            good: false,
            skill: "polite",
            react: { en: "Oh. Well, many people do.", te: "ఓ. కానీ చాలామంది ఆ దారిలోనే వెళ్తారు." },
          },
        ],
      },
      {
        partner: "Did you hear about the chain snatching near the temple?",
        te: "గుడి దగ్గర చైన్ స్నాచింగ్ గురించి విన్నారా?",
        hint: { en: "Say yes, and say the police caught two men last night.", te: "అవునని చెప్పి, నిన్న రాత్రి పోలీసులు ఇద్దరిని పట్టుకున్నారని చెప్పండి." },
        replies: [
          { say: "Yes. Two men were arrested last night.", good: true, skill: "news" },
          { say: "Yes. Two men was arrested last night.", good: false, skill: "news" },
        ],
      },
      {
        partner: "That's a relief. I'll tell my sister to be careful anyway.",
        te: "హమ్మయ్య. అయినా జాగ్రత్తగా ఉండమని మా అక్కకి చెప్తాను.",
        hint: { en: "Say that is a good idea, and say goodbye kindly.", te: "మంచి ఆలోచన అని చెప్పి, మర్యాదగా బై చెప్పండి." },
        replies: [
          { say: "That's a good idea. Take care. Bye!", good: true, skill: "polite" },
          { say: "That's good idea. Take care. Bye!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

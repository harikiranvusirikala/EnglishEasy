import type { Lesson } from "../../types";

/** Week 32, Day 2 (CURRICULUM §4): past simple for "what we did" — We lit lamps and made sweets. What did you do on Diwali? */
export const day: Lesson = {
  id: "what-we-did-on-diwali",
  kind: "lesson",
  title: { en: "What We Did on Diwali", te: "దీపావళికి ఏం చేశాం" },
  subtitle: "past simple: what we did",
  summary: {
    en: "Learn to tell what you did on a festival, and to ask others: We lit lamps and made sweets. What did you do on Diwali?",
    te: "పండుగ రోజు ఏం చేశారో చెప్పడం, ఇతరులను అడగడం నేర్చుకుందాం: We lit lamps and made sweets. What did you do on Diwali?",
  },
  seo: {
    title: "Talking About Diwali in English for Telugu Speakers",
    description:
      "Say We lit lamps and made sweets, and ask What did you do on Diwali? Simple lessons for Telugu speakers on telling what you did.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "lit", role: "action" },
    { text: "lamps", role: "what" },
    { text: "on Diwali", role: "when" },
  ],
  core: [
    { en: "We lit lamps and made sweets.", te: "మేము దీపాలు వెలిగించాం, స్వీట్లు చేశాం.", extra: ["light"] },
    { en: "What did you do on Diwali?", te: "దీపావళికి మీరు ఏం చేశారు?", extra: ["in"] },
    { en: "We decorated the house with flowers.", te: "ఇంటిని పూలతో అలంకరించాం.", extra: ["decorate"] },
    { en: "My cousins came from Guntur.", te: "మా కజిన్స్ గుంటూరు నుండి వచ్చారు.", extra: ["come"] },
    { en: "We burst crackers in the evening.", te: "సాయంత్రం టపాసులు కాల్చాం.", extra: ["on"] },
    { en: "Did you go to the temple?", te: "మీరు గుడికి వెళ్ళారా?", extra: ["went"] },
    { en: "We wore new clothes and visited friends.", te: "కొత్త బట్టలు వేసుకుని, స్నేహితుల ఇళ్ళకి వెళ్ళాం.", extra: ["weared"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of your last festival. Say three things you did, in the past: We lit…, We made…, We went….",
    te: "మీ పోయిన పండుగ గుర్తు చేసుకోండి. ఏం చేశారో మూడు విషయాలు past లో చెప్పండి: We lit…, We made…, We went….",
  },
  words: [
    { en: "Diwali", te: "దీపావళి" },
    { en: "lamp", te: "దీపం" },
    { en: "lit", te: "వెలిగించారు (light కి past)" },
    { en: "crackers", te: "టపాసులు" },
    { en: "decorated", te: "అలంకరించారు" },
  ],
  grammar: ["past-simple", "question-words"],
  topics: ["festivals", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Telling what you did", te: "ఏం చేశారో చెప్పడం" },
      body: {
        en: "When the festival is over, the verb goes into the past: we lit, we made, we went. Many past forms are new words: light becomes lit, make becomes made, wear becomes wore.",
        te: "పండుగ అయిపోయాక చెప్తే verb past లోకి మారుతుంది: we lit, we made, we went. చాలా past forms కొత్త పదాల్లా ఉంటాయి: light అయితే lit, make అయితే made, wear అయితే wore.",
      },
      bridge: {
        te: ["మేము", "దీపావళికి", "దీపాలు", "వెలిగించాం"],
        en: [
          { text: "We", role: "who" },
          { text: "lit", role: "action" },
          { text: "lamps", role: "what" },
          { text: "on Diwali", role: "when" },
        ],
      },
      examples: [
        { en: "We lit lamps and made sweets.", te: "మేము దీపాలు వెలిగించాం, స్వీట్లు చేశాం." },
        { en: "We decorated the house with flowers.", te: "ఇంటిని పూలతో అలంకరించాం." },
        { en: "We burst crackers in the evening.", te: "సాయంత్రం టపాసులు కాల్చాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Telling and asking", te: "చెప్పడం, అడగడం" },
      items: [
        {
          form: "We lit … / We made …",
          useFor: { en: "Telling what you did: the past form.", te: "మీరు ఏం చేశారో చెప్పడానికి: past form." },
          example: { en: "We lit lamps and made sweets.", te: "మేము దీపాలు వెలిగించాం, స్వీట్లు చేశాం." },
        },
        {
          form: "What did you do …?",
          useFor: { en: "Asking about their festival: did, then do.", te: "వారి పండుగ గురించి అడగడానికి: did, తర్వాత do." },
          example: { en: "What did you do on Diwali?", te: "దీపావళికి మీరు ఏం చేశారు?" },
        },
        {
          form: "Did you …?",
          useFor: { en: "A yes or no question: did, then the plain verb.", te: "అవును / లేదు ప్రశ్న: did, తర్వాత మామూలు verb." },
          example: { en: "Did you go to the temple?", te: "మీరు గుడికి వెళ్ళారా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "question",
      wrong: "What you did on Diwali?",
      right: "What did you do on Diwali?",
      why: {
        en: "Telugu needs no helper word here, but an English question needs did before you, and then do.",
        te: "తెలుగులో 'ఏం చేశారు?' అంటే చాలు; ఇంగ్లీష్ ప్రశ్నలో you ముందు did రావాలి, verb మాత్రం do గానే ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "We made many sweet.",
      right: "We made many sweets.",
      why: {
        en: "Many means more than one, so add s, just as Telugu says స్వీట్లు.",
        te: "many అంటే ఒకటి కంటే ఎక్కువ; తెలుగులో స్వీట్లు అన్నట్టే ఇంగ్లీష్‌లో s చేర్చాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend asks: What did you do on Diwali? Choose the right reply.",
        te: "మీ స్నేహితులు What did you do on Diwali? అని అడిగారు. సరైన జవాబు ఎంచుకోండి.",
      },
      options: ["We lit lamps and made sweets.", "We light lamps and make sweets.", "We lit lamps and maked sweets."],
      answer: 0,
      why: {
        en: "Diwali is over, so both verbs go into the past; make becomes made, never maked.",
        te: "దీపావళి అయిపోయింది, కాబట్టి రెండు verbs past లో; make కి past made, maked కాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "What did you do ___ Diwali?",
      te: "దీపావళికి మీరు ఏం చేశారు?",
      options: ["on", "in", "to"],
      answer: 0,
      why: {
        en: "A festival day takes on, like Sunday; in is for months, like in November.",
        te: "పండుగ రోజుకి on, Sunday కి లాగే; in నెలలకి, in November లాగా.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask Swapna if she went to the temple on Dasara.", te: "దసరాకి గుడికి వెళ్ళారా అని స్వప్న గారిని అడగండి." },
      options: ["Did you go to the temple?", "Did you went to the temple?", "Do you went to the temple?"],
      answer: 0,
      why: {
        en: "After did, the verb stays plain, because did already shows the past.",
        te: "did తర్వాత verb మామూలుగానే ఉంటుంది; past అని did ఒక్కటే చెప్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "plural",
      sentence: "My cousins brought two box of sweets.",
      wrongIndex: 4,
      fix: "My cousins brought two boxes of sweets.",
      why: {
        en: "After two, box takes es, just as bunch becomes bunches.",
        te: "రెండు అంటే box కి es చేర్చాలి, bunch కి bunches లాగా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell your friend you lit lamps on Diwali.",
        te: "దీపావళికి దీపాలు వెలిగించామని మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["We lit lamps on Diwali.", "I lit lamps on Diwali.", "We lit lamps."],
      options: ["We lit lamps on Diwali.", "We light lamps in Diwali.", "We are lit lamps on Diwali."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour what they did on Dasara.",
        te: "దసరాకి ఏం చేశారని పక్కింటి వారిని అడగండి.",
      },
      expected: ["What did you do on Dasara?", "What did you do for Dasara?"],
      options: ["What did you do on Dasara?", "What you did on Dasara?", "What did you did on Dasara?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The day after Diwali", te: "దీపావళి మర్నాడు" },
    scene: {
      en: "It is the day after Diwali. Your friend Joseph meets you in the park.",
      te: "దీపావళి మర్నాడు. మీ స్నేహితులు జోసెఫ్ పార్కులో కలిశారు.",
    },
    partner: { en: "Joseph (friend)", te: "జోసెఫ్ (స్నేహితులు)" },
    voice: "b",
    skills: [{ id: "past", label: { en: "What we did", te: "ఏం చేశామో" } }],
    turns: [
      {
        partner: "Good morning! How was your Diwali?",
        te: "నమస్కారం! మీ దీపావళి ఎలా జరిగింది?",
        hint: { en: "Say how it was, and who came to visit.", te: "ఎలా జరిగిందో, ఎవరు వచ్చారో చెప్పండి." },
        replies: [
          { say: "It was lovely. My cousins came from Vijayawada.", good: true, skill: "past" },
          { say: "It is lovely. My cousins come from Vijayawada.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Nice! What did you do?",
        te: "బాగుంది! ఏం చేశారు?",
        hint: { en: "Tell him two things you did at home.", te: "ఇంట్లో చేసిన రెండు పనులు చెప్పండి." },
        replies: [
          { say: "We lit lamps and made sweets.", good: true, skill: "past" },
          { say: "We lit lamps and maked sweets.", good: false, skill: "past" },
        ],
      },
      {
        partner: "Did you burst crackers?",
        te: "టపాసులు కాల్చారా?",
        hint: { en: "Say yes, only a few, and say when.", te: "అవునని, కొన్ని మాత్రమే అని, ఎప్పుడో చెప్పండి." },
        replies: [
          { say: "Yes, but only a few, in the evening.", good: true, skill: "past" },
          { say: "Yes, but only a few, on the evening.", good: false, skill: "past", fixIt: "preposition" },
          {
            say: "Yes. Why do you ask so many questions?",
            good: false,
            skill: "past",
            react: { en: "Sorry! I just like hearing about it.", te: "Sorry అండీ! వినడం నాకు ఇష్టం, అంతే." },
          },
        ],
      },
      {
        partner: "I didn't get any sweets this year!",
        te: "ఈ సంవత్సరం నాకు ఒక్క స్వీట్ కూడా దొరకలేదు!",
        hint: { en: "Offer to bring him some tomorrow.", te: "రేపు కొన్ని తెచ్చిస్తానని చెప్పండి." },
        replies: [
          { say: "I'll bring you some sweets tomorrow.", good: true },
          { say: "I'll bringing you some sweets tomorrow.", good: false },
        ],
      },
    ],
  },
};

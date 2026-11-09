import type { Lesson } from "../../types";

/** Week 12, Day 2 (CURRICULUM §3): because (reason) and so (result). Builds on Week 2's why / because. */
export const day: Lesson = {
  id: "because-and-so",
  kind: "lesson",
  title: { en: "Because, So", te: "ఎందుకంటే, అందుకే" },
  subtitle: "because / so",
  summary: {
    en: "Learn to give a reason with because and a result with so: the same story, told two ways.",
    te: "because తో కారణం, so తో ఫలితం చెప్పడం నేర్చుకుందాం: ఒకే విషయం, రెండు రకాలుగా.",
  },
  seo: {
    title: "Because and So in English for Telugu Speakers",
    description:
      "Say I stayed home because it was raining, and It was raining, so I stayed home. Simple lessons for Telugu speakers on because and so.",
  },
  pattern: [
    { text: "It was raining,", role: "what" },
    { text: "so", role: "when" },
    { text: "I stayed home", role: "action" },
  ],
  core: [
    { en: "I stayed home because it was raining.", te: "వర్షం పడుతుండటంతో ఇంట్లోనే ఉండిపోయాను.", extra: ["so"] },
    { en: "It was raining, so I stayed home.", te: "వర్షం పడుతూ ఉండింది, అందుకే ఇంట్లోనే ఉండిపోయాను.", extra: ["because"] },
    { en: "I was tired, so I slept early.", te: "అలసిపోయాను, అందుకే తొందరగా పడుకున్నాను.", extra: ["because"] },
    { en: "She is happy because Ravi called.", te: "రవి ఫోన్ చేశారని ఆవిడ సంతోషంగా ఉన్నారు.", extra: ["so"] },
    { en: "The shop was closed, so I left.", te: "షాప్ మూసి ఉంది, అందుకే నేను వెళ్ళిపోయాను.", extra: ["because"] },
    { en: "I missed it because I was sick.", te: "ఒంట్లో బాగాలేకపోవడంతో వెళ్ళలేకపోయాను.", extra: ["so"] },
    { en: "I'm hungry, so I'll eat now.", te: "నాకు ఆకలిగా ఉంది, అందుకే ఇప్పుడు తింటాను.", extra: ["because"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Say one sentence with because and one with so about your day.",
    te: "మీ రోజు గురించి because తో ఒక వాక్యం, so తో ఒక వాక్యం చెప్పండి.",
  },
  words: [
    { en: "so", te: "అందుకే, కాబట్టి" },
    { en: "stay", te: "ఉండిపోవడం" },
    { en: "rain", te: "వర్షం" },
    { en: "miss", te: "తప్పిపోవడం, వెళ్ళలేకపోవడం" },
    { en: "sick", te: "ఒంట్లో బాగాలేని" },
  ],
  grammar: ["connectors", "past-simple"],
  topics: ["weather", "health"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Reason or result?", te: "కారణమా, ఫలితమా?" },
      body: {
        en: "Because comes before the reason: I stayed home because it was raining. So comes before the result: It was raining, so I stayed home. It is the same story, told two ways.",
        te: "because తర్వాత కారణం వస్తుంది: I stayed home because it was raining. so తర్వాత ఫలితం వస్తుంది: It was raining, so I stayed home. ఒకే విషయం, రెండు రకాలుగా.",
      },
      bridge: {
        te: ["వర్షం పడుతూ ఉండింది,", "అందుకే", "ఇంట్లోనే ఉండిపోయాను"],
        en: [
          { text: "It was raining,", role: "what" },
          { text: "so", role: "when" },
          { text: "I stayed home", role: "action" },
        ],
      },
      examples: [
        { en: "I stayed home because it was raining.", te: "వర్షం పడుతుండటంతో ఇంట్లోనే ఉండిపోయాను." },
        { en: "It was raining, so I stayed home.", te: "వర్షం పడుతూ ఉండింది, అందుకే ఇంట్లోనే ఉండిపోయాను." },
        { en: "I missed it because I was sick.", te: "ఒంట్లో బాగాలేకపోవడంతో వెళ్ళలేకపోయాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Because or so?", te: "because ఆ, so ఆ?" },
      items: [
        {
          form: "because + reason",
          useFor: { en: "Why it happened.", te: "ఎందుకు జరిగిందో." },
          example: { en: "She is happy because Ravi called.", te: "రవి ఫోన్ చేశారని ఆవిడ సంతోషంగా ఉన్నారు." },
        },
        {
          form: ", so + result",
          useFor: { en: "What happened next.", te: "దాని వల్ల ఏమైందో." },
          example: { en: "The shop was closed, so I left.", te: "షాప్ మూసి ఉంది, అందుకే నేను వెళ్ళిపోయాను." },
        },
        {
          form: "only one of them",
          useFor: { en: "Never use because and so together.", te: "because, so రెండూ ఒకే వాక్యంలో వాడకూడదు." },
          example: { en: "I was tired, so I slept early.", te: "అలసిపోయాను, అందుకే తొందరగా పడుకున్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Because it rained, so I stayed home.",
      right: "It rained, so I stayed home.",
      why: {
        en: "English joins two ideas with one word only, because or so: It rained, so I stayed home.",
        te: "ఇంగ్లీష్‌లో కలిపే మాట ఒక్కటే, because లేదా so, రెండూ కాదు: It rained, so I stayed home.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I stayed home so it was raining.",
      right: "I stayed home because it was raining.",
      why: {
        en: "The rain is the reason, and because goes before the reason: I stayed home because it was raining.",
        te: "వర్షం కారణం; కారణం ముందు because వస్తుంది: I stayed home because it was raining.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["I was tired, because I slept early.", "I was tired, so I slept early.", "Because I was tired, so I slept early."],
      answer: 1,
      why: {
        en: "Sleeping early is the result of being tired, so use so: I was tired, so I slept early.",
        te: "అలసట వల్ల తొందరగా పడుకున్నారు, అది ఫలితం, అందుకే so: I was tired, so I slept early.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I missed it ___ I was sick.",
      te: "ఒంట్లో బాగాలేకపోవడంతో వెళ్ళలేకపోయాను.",
      options: ["because", "so", "but"],
      answer: 0,
      why: {
        en: "Being sick is the reason, so because goes before it: I missed it because I was sick.",
        te: "ఒంట్లో బాగాలేకపోవడం కారణం, దాని ముందు because: I missed it because I was sick.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Choose the correct sentence.", te: "సరైన వాక్యాన్ని ఎంచుకోండి." },
      options: ["Because it rained, so I stayed home.", "It rained, so I stayed home.", "It rained, because I stayed home."],
      answer: 1,
      why: {
        en: "Use one joining word; staying home is the result, so: It rained, so I stayed home.",
        te: "కలిపే మాట ఒక్కటే చాలు; ఇంట్లో ఉండటం ఫలితం, అందుకే so: It rained, so I stayed home.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The shop was closed, because I left.",
      wrongIndex: 4,
      fix: "The shop was closed, so I left.",
      why: {
        en: "You left because the shop was closed; that is a result, so: The shop was closed, so I left.",
        te: "షాప్ మూసి ఉండటం వల్ల వెళ్ళిపోయారు, అది ఫలితం: The shop was closed, so I left.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks: Why didn't you come? You were sick. Answer.",
        te: "మీ స్నేహితులు అడుగుతున్నారు: Why didn't you come? మీకు ఒంట్లో బాగాలేదు. జవాబు చెప్పండి.",
      },
      expected: ["Because I was sick.", "I was sick, so I didn't come."],
      options: ["Because I was sick.", "So I was sick.", "Because of I was sick."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say you are hungry, so you will eat now.",
        te: "మీకు ఆకలిగా ఉంది, అందుకే ఇప్పుడు తింటానని చెప్పండి.",
      },
      expected: ["I'm hungry, so I'll eat now.", "I am hungry, so I will eat."],
      options: ["I'm hungry, so I'll eat now.", "I'm hungry, because I'll eat now.", "Because I'm hungry, so I'll eat."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Why weren't you at the meeting?", te: "మీటింగ్‌కి ఎందుకు రాలేదు?" },
    scene: {
      en: "You missed the colony meeting. Mohan, who leads it, asks you why.",
      te: "కాలనీ మీటింగ్‌కి మీరు వెళ్ళలేదు. మీటింగ్ నడిపే మోహన్ ఎందుకని అడుగుతున్నారు.",
    },
    partner: { en: "Mohan (colony leader)", te: "మోహన్ (కాలనీ పెద్ద)" },
    voice: "b",
    skills: [{ id: "reason", label: { en: "because / so", te: "because / so వాడకం" } }],
    turns: [
      {
        partner: "We missed you at the meeting!",
        te: "మీటింగ్‌లో మీరు కనిపించలేదు!",
        hint: { en: "Give the reason and the result, with so.", te: "కారణం, ఫలితం so తో కలిపి చెప్పండి." },
        replies: [
          { say: "I was sick, so I stayed home.", good: true, skill: "reason" },
          { say: "I was sick, because I stayed home.", good: false, skill: "reason" },
          {
            say: "Meetings are a waste of time.",
            good: false,
            skill: "reason",
            react: { en: "Oh! This one was really useful.", te: "అయ్యో! ఈసారి మీటింగ్ నిజంగా ఉపయోగపడింది." },
          },
        ],
      },
      {
        partner: "Oh! Are you better now?",
        te: "అయ్యో! ఇప్పుడు బాగున్నారా?",
        hint: { en: "Say you are much better, and thank him.", te: "ఇప్పుడు చాలా బాగుందని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Yes, much better, thank you.", good: true },
          { say: "Yes, very better, thank you.", good: false },
        ],
      },
      {
        partner: "We talked about a new park.",
        te: "కొత్త పార్క్ గురించి మాట్లాడుకున్నాం.",
        hint: { en: "Ask why a new park is needed.", te: "కొత్త పార్క్ ఎందుకు అవసరమో అడగండి." },
        replies: [
          { say: "Why do we need a new park?", good: true, skill: "reason" },
          { say: "Why we need a new park?", good: false, skill: "reason" },
        ],
      },
      {
        partner: "Because the old one is very small.",
        te: "ఎందుకంటే పాతది చాలా చిన్నది.",
        hint: { en: "Say okay, and promise to be there next time.", te: "సరే అని, వచ్చేసారి తప్పకుండా వస్తానని చెప్పండి." },
        replies: [
          { say: "Okay. I'll come next time.", good: true },
          { say: "Okay. I'll coming next time.", good: false },
        ],
      },
    ],
  },
};

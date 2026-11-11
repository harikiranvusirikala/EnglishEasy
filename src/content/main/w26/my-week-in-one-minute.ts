import type { Lesson } from "../../types";

/** Week 26, Day 5 (CURRICULUM §4): My Week in One Minute — past simple and past continuous, for the speaking mission. */
export const day: Lesson = {
  id: "my-week-in-one-minute",
  kind: "lesson",
  title: { en: "My Week in One Minute", te: "నా వారం, ఒక్క నిమిషంలో" },
  subtitle: "past simple and past continuous",
  summary: {
    en: "Learn to tell your week in one minute: what you did each day, and what you were doing when something happened.",
    te: "మీ వారం గురించి ఒక్క నిమిషంలో చెప్పడం నేర్చుకుందాం: ఏ రోజు ఏం చేశారో, ఏదైనా జరిగినప్పుడు ఏం చేస్తున్నారో.",
  },
  seo: {
    title: "Talking About Your Week in English for Telugu Speakers",
    description:
      "Say On Monday I went to the bank and I was waiting for the bus when it rained. A lesson for Telugu speakers on telling your week.",
  },
  pattern: [
    { text: "On Monday", role: "when" },
    { text: "I", role: "who" },
    { text: "went", role: "action" },
    { text: "to the bank", role: "what" },
  ],
  core: [
    { en: "On Monday I went to the bank.", te: "సోమవారం నేను బ్యాంక్‌కి వెళ్ళాను.", extra: ["go"] },
    { en: "I was waiting for the bus when it rained.", te: "నేను బస్ కోసం ఎదురుచూస్తుండగా వర్షం పడింది.", extra: ["am"] },
    { en: "On Tuesday I paid the electricity bill.", te: "మంగళవారం కరెంట్ బిల్లు కట్టాను.", extra: ["pay"] },
    { en: "On Wednesday I collected my clothes from the tailor.", te: "బుధవారం టైలర్ దగ్గర నా బట్టలు తెచ్చుకున్నాను.", extra: ["collect"] },
    { en: "There was a long queue at the bank.", te: "బ్యాంక్‌లో చాలా పెద్ద క్యూ ఉండింది.", extra: ["were"] },
    { en: "I was cooking when my friend called.", te: "నేను వంట చేస్తుండగా నా స్నేహితులు ఫోన్ చేశారు.", extra: ["cook"] },
    { en: "On Saturday I finished all my errands.", te: "శనివారం నా పనులన్నీ పూర్తి చేశాను.", extra: ["finish"] },
  ],
  key: [0, 1, 2, 5],
  tryToday: {
    en: "Tonight, tell your week aloud in English for one minute: one sentence for each day.",
    te: "ఈ రాత్రి మీ వారం గురించి ఒక్క నిమిషం ఇంగ్లీష్‌లో గట్టిగా చెప్పండి: ఒక్కో రోజుకి ఒక వాక్యం.",
  },
  words: [
    { en: "queue", te: "క్యూ, వరుస" },
    { en: "errand", te: "బయటి చిన్న పని" },
    { en: "electricity bill", te: "కరెంట్ బిల్లు" },
    { en: "tailor", te: "టైలర్, దర్జీ" },
    { en: "collect", te: "తెచ్చుకోవడం, తీసుకోవడం" },
  ],
  grammar: ["past-simple", "past-continuous", "prepositions", "word-order"],
  topics: ["time", "people", "money"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Your week, day by day", te: "మీ వారం, రోజు రోజుకి" },
      body: {
        en: "Tell your week day by day, in the past: On Monday I went … On Tuesday I paid … For something that stopped you, use was + -ing and when: I was waiting when it rained. Short sentences fill one minute easily.",
        te: "మీ వారాన్ని రోజు రోజుకి past లో చెప్పండి: On Monday I went … On Tuesday I paid … మధ్యలో ఏదైనా జరిగితే was + -ing, when వాడండి: I was waiting when it rained. చిన్న వాక్యాలతో ఒక్క నిమిషం సులభంగా నిండుతుంది.",
      },
      bridge: {
        te: ["సోమవారం", "నేను", "బ్యాంక్‌కి", "వెళ్ళాను"],
        en: [
          { text: "On Monday", role: "when" },
          { text: "I", role: "who" },
          { text: "went", role: "action" },
          { text: "to the bank", role: "what" },
        ],
      },
      examples: [
        { en: "On Monday I went to the bank.", te: "సోమవారం నేను బ్యాంక్‌కి వెళ్ళాను." },
        { en: "On Tuesday I paid the electricity bill.", te: "మంగళవారం కరెంట్ బిల్లు కట్టాను." },
        { en: "I was waiting for the bus when it rained.", te: "నేను బస్ కోసం ఎదురుచూస్తుండగా వర్షం పడింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which past?", te: "ఏ past?" },
      items: [
        {
          form: "I went, I paid",
          useFor: { en: "A finished thing you did.", te: "పూర్తయిపోయిన పని." },
          example: { en: "On Saturday I finished all my errands.", te: "శనివారం నా పనులన్నీ పూర్తి చేశాను." },
        },
        {
          form: "I was waiting",
          useFor: { en: "Something going on at a time in the past.", te: "గతంలో ఆ సమయానికి జరుగుతూ ఉన్న పని." },
          example: { en: "At ten I was standing in the queue.", te: "పది గంటలకి నేను క్యూలో నిలబడి ఉన్నాను." },
        },
        {
          form: "… when …",
          useFor: { en: "Something that came in the middle.", te: "మధ్యలో వచ్చి ఆపిన విషయం." },
          example: { en: "I was cooking when my friend called.", te: "నేను వంట చేస్తుండగా నా స్నేహితులు ఫోన్ చేశారు." },
        },
        {
          form: "Next week I will …",
          useFor: { en: "Ending your minute with a plan.", te: "చివర్లో ఒక ప్లాన్ చెప్పడానికి." },
          example: { en: "Next week I will visit my cousin.", te: "వచ్చే వారం మా కజిన్ ఇంటికి వెళ్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "In Monday I went to the bank.",
      right: "On Monday I went to the bank.",
      why: {
        en: "Days always take on; in is for months and years.",
        te: "రోజులకి ఎప్పుడూ on; in నెలలకి, సంవత్సరాలకి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Yesterday night I was sleeping when it rained.",
      right: "Last night I was sleeping when it rained.",
      why: {
        en: "Telugu says నిన్న రాత్రి, but English says last night, never yesterday night.",
        te: "'నిన్న రాత్రి' ని yesterday night అనకూడదు; ఇంగ్లీష్‌లో last night అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Your friend asks: What did you do on Monday?", te: "'సోమవారం ఏం చేశారు?' అని స్నేహితులు అడిగారు." },
      options: ["I went to the bank.", "I go to the bank.", "I was go to the bank."],
      answer: 0,
      why: {
        en: "The question has did, so it is the past: go becomes went.",
        te: "ప్రశ్నలో did ఉంది, అంటే past: go కాదు, went.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "We ___ shopping when the lights went off.",
      te: "మేము షాపింగ్ చేస్తుండగా లైట్లు పోయాయి.",
      options: ["were", "was", "are"],
      answer: 0,
      why: {
        en: "With we, the past of are is were, not was.",
        te: "we తో past లో were వస్తుంది, was కాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "article",
      prompt: { en: "Tell your friend about the queue at the bank.", te: "బ్యాంక్‌లో క్యూ గురించి స్నేహితులకి చెప్పండి." },
      options: ["There was a long queue at the bank.", "There was long queue at bank.", "There were a long queue at the bank."],
      answer: 0,
      why: {
        en: "One queue needs a before it, and the bank you mean needs the.",
        te: "ఒక్క queue కి ముందు a, మీరు చెప్తున్న bank కి ముందు the కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Yesterday I collect my clothes from the tailor.",
      wrongIndex: 2,
      fix: "Yesterday I collected my clothes from the tailor.",
      why: {
        en: "Yesterday is past, so collect takes -ed, just like Telugu తెచ్చుకున్నాను shows the past.",
        te: "yesterday అంటే past, అందుకే collect కి -ed; తెలుగులో 'తెచ్చుకున్నాను' లాగా.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You were watching TV when the lights went off. Say it.",
        te: "మీరు TV చూస్తుండగా లైట్లు పోయాయి. అది చెప్పండి.",
      },
      expected: ["I was watching TV when the lights went off.", "I was watching TV when the power went off."],
      options: ["I was watching TV when the lights went off.", "I watching TV when the lights went off.", "I was watch TV when the lights went off."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Start your minute: on Monday you went to the market.",
        te: "మీ నిమిషం మొదలుపెట్టండి: సోమవారం మీరు మార్కెట్‌కి వెళ్ళారు.",
      },
      expected: ["On Monday I went to the market.", "I went to the market on Monday."],
      options: ["On Monday I went to the market.", "On Monday I go to the market.", "Monday I am going to market."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "How was your week?", te: "మీ వారం ఎలా గడిచింది?" },
    scene: {
      en: "Your friend Fatima meets you at the temple gate. Tell her about your busy week.",
      te: "మీ స్నేహితురాలు ఫాతిమా గుడి గేటు దగ్గర కలిశారు. మీ బిజీ వారం గురించి ఆవిడకి చెప్పండి.",
    },
    partner: { en: "Fatima (a friend)", te: "ఫాతిమా (స్నేహితురాలు)" },
    skills: [
      { id: "past", label: { en: "What you did", te: "ఏం చేశారో" } },
      { id: "when", label: { en: "Was + -ing with when", te: "was + -ing, when వాడకం" } },
    ],
    turns: [
      {
        partner: "Hi! I didn't see you all week. How was it?",
        te: "హాయ్! వారమంతా మీరు కనిపించలేదు. ఎలా గడిచింది?",
        hint: { en: "Say it was busy, and what you did on Monday.", te: "బిజీగా గడిచిందని, సోమవారం ఏం చేశారో చెప్పండి." },
        replies: [
          { say: "Very busy! On Monday I went to the bank.", good: true, skill: "past" },
          { say: "Very busy! In Monday I went to the bank.", good: false, skill: "past", fixIt: "preposition" },
        ],
      },
      {
        partner: "The bank? Was there a long queue?",
        te: "బ్యాంక్‌కా? పెద్ద క్యూ ఉండిందా?",
        hint: { en: "Say yes, and what happened while you were waiting.", te: "అవునని, మీరు ఎదురుచూస్తుండగా ఏం జరిగిందో చెప్పండి." },
        replies: [
          { say: "Yes! I was waiting when the lights went off.", good: true, skill: "when" },
          { say: "Yes! I waiting when the lights went off.", good: false, skill: "when", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! What else did you do?",
        te: "అయ్యో! ఇంకా ఏం చేశారు?",
        hint: { en: "Say two more things you did this week.", te: "ఈ వారం చేసిన ఇంకో రెండు పనులు చెప్పండి." },
        replies: [
          { say: "I paid the electricity bill and visited the tailor.", good: true, skill: "past" },
          { say: "I pay the electricity bill and visit the tailor.", good: false, skill: "past" },
        ],
      },
      {
        partner: "You did a lot! Are you free next week?",
        te: "చాలా పనులు చేశారు! వచ్చే వారం ఖాళీగా ఉన్నారా?",
        hint: { en: "Say yes, and ask her to meet for coffee on Sunday.", te: "అవునని, ఆదివారం కాఫీకి కలుద్దామని అడగండి." },
        replies: [
          { say: "Yes! Can we meet for coffee on Sunday?", good: true },
          {
            say: "No time for you. Don't disturb me.",
            good: false,
            react: { en: "Oh! Okay, sorry. Call me when you're free.", te: "ఓ! సరే, సారీ. ఖాళీ అయినప్పుడు ఫోన్ చేయండి." },
          },
        ],
      },
    ],
  },
};

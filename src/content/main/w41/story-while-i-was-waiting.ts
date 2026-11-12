import type { Lesson } from "../../types";

/** Week 41, Day 2 (CURRICULUM §5): past continuous for the background, past simple for what happened — I was waiting at the bank when the lights went off. */
export const day: Lesson = {
  id: "story-while-i-was-waiting",
  kind: "lesson",
  title: { en: "While I Was Waiting", te: "ఎదురుచూస్తుండగా" },
  subtitle: "I was …-ing when …",
  summary: {
    en: "Learn to set the scene of a story: I was waiting at the bank when the lights went off.",
    te: "కథకి నేపథ్యం చెప్పడం నేర్చుకుందాం: I was waiting at the bank when the lights went off.",
  },
  seo: {
    title: "Setting the Scene of a Story in English for Telugu Speakers",
    description:
      "Say I was waiting at the bank when the lights went off. Simple lessons for Telugu speakers on what was going on when something happened.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "was waiting", role: "action" },
    { text: "at the bank", role: "what" },
    { text: "when the lights went off", role: "when" },
  ],
  core: [
    { en: "I was waiting at the bank when the lights went off.", te: "నేను బ్యాంక్‌లో ఎదురుచూస్తుండగా లైట్లు ఆగిపోయాయి.", extra: ["am"] },
    { en: "While we were having tea, it started to pour.", te: "మేము టీ తాగుతుండగా కుండపోత వర్షం మొదలైంది.", extra: ["was"] },
    { en: "The fans stopped, and it was pitch dark.", te: "ఫ్యాన్లు ఆగిపోయాయి, అంతా చిమ్మ చీకటి.", extra: ["stop"] },
    { en: "Meanwhile, the manager was calling the electrician.", te: "ఈలోగా మేనేజర్ గారు electrician కి ఫోన్ చేస్తున్నారు.", extra: ["is"] },
    { en: "After ten minutes, the power came back on.", te: "పది నిమిషాల తర్వాత కరెంట్ మళ్ళీ వచ్చింది." },
    { en: "Luckily, the bank had a generator.", te: "అదృష్టం కొద్దీ బ్యాంక్‌లో generator ఉంది." },
    { en: "What were you doing when it happened?", te: "అది జరిగినప్పుడు మీరు ఏం చేస్తున్నారు?" },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one time the power went off. Say aloud what you were doing then: I was … when the power went off.",
    te: "ఒకసారి కరెంట్ పోయిన రోజు గుర్తు చేసుకోండి. అప్పుడు మీరు ఏం చేస్తున్నారో గట్టిగా చెప్పండి: I was … when the power went off.",
  },
  words: [
    { en: "pour", te: "కుండపోతగా వర్షం పడటం" },
    { en: "pitch dark", te: "చిమ్మ చీకటి" },
    { en: "meanwhile", te: "ఈలోగా, అదే సమయంలో" },
    { en: "come back on", te: "కరెంట్ మళ్ళీ రావడం" },
    { en: "generator", te: "జనరేటర్" },
  ],
  grammar: ["past-continuous", "past-simple"],
  topics: ["bank", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "The scene and the event", te: "నేపథ్యం, జరిగిన సంఘటన" },
      body: {
        en: "Use was or were + -ing for what was going on. Use the past for what suddenly happened: I was waiting when the lights went off.",
        te: "అప్పుడు జరుగుతూ ఉన్న పనికి was / were + -ing. ఉన్నట్టుండి జరిగినదానికి past: I was waiting when the lights went off.",
      },
      bridge: {
        te: ["నేను", "బ్యాంక్‌లో", "ఎదురుచూస్తుండగా", "లైట్లు ఆగిపోయాయి"],
        en: [
          { text: "I", role: "who" },
          { text: "was waiting", role: "action" },
          { text: "at the bank", role: "what" },
          { text: "when the lights went off", role: "when" },
        ],
      },
      examples: [
        { en: "I was waiting at the bank when the lights went off.", te: "నేను బ్యాంక్‌లో ఎదురుచూస్తుండగా లైట్లు ఆగిపోయాయి." },
        { en: "While we were having tea, it started to pour.", te: "మేము టీ తాగుతుండగా కుండపోత వర్షం మొదలైంది." },
        { en: "The fans stopped, and it was pitch dark.", te: "ఫ్యాన్లు ఆగిపోయాయి, అంతా చిమ్మ చీకటి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "while or when?", te: "while ఆ, when ఆ?" },
      items: [
        {
          form: "while + was / were …-ing",
          useFor: { en: "The longer action going on in the background.", te: "వెనకాల జరుగుతూ ఉన్న పెద్ద పని." },
          example: { en: "While we were having tea, it started to pour.", te: "మేము టీ తాగుతుండగా కుండపోత వర్షం మొదలైంది." },
        },
        {
          form: "when + past",
          useFor: { en: "The short thing that suddenly happened.", te: "మధ్యలో ఉన్నట్టుండి జరిగిన చిన్న సంఘటన." },
          example: { en: "I was paying the bill when my phone rang.", te: "నేను బిల్లు కడుతుండగా నా ఫోన్ మోగింది." },
        },
        {
          form: "was / were",
          useFor: { en: "was with I, he and she; were with we, you and they.", te: "I, he, she తో was; we, you, they తో were." },
          example: { en: "The people in the queue were talking.", te: "క్యూలో ఉన్నవాళ్ళు మాట్లాడుకుంటున్నారు." },
        },
        {
          form: "Meanwhile …",
          useFor: { en: "Another thing going on at the same time.", te: "అదే సమయంలో జరుగుతున్న ఇంకో పని." },
          example: { en: "Meanwhile, my friend was holding my bag.", te: "ఈలోగా నా స్నేహితుడు నా బ్యాగ్ పట్టుకుని ఉన్నారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "I waiting at the bank when the lights went off.",
      right: "I was waiting at the bank when the lights went off.",
      why: {
        en: "With -ing, English needs was or were; Telugu ఎదురుచూస్తుండగా has no separate word for it.",
        te: "-ing తో was / were తప్పకుండా కావాలి; తెలుగు 'ఎదురుచూస్తుండగా' లో అలాంటి వేరే పదం ఉండదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I was not knowing what to do.",
      right: "I didn't know what to do.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing, even in a story.",
        te: "know ఒక స్థితి, పని కాదు; అందుకే కథలో కూడా దానికి -ing రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your neighbour asks where you were at four. You were standing in the queue at the bank. What do you say?",
        te: "నాలుగింటికి ఎక్కడ ఉన్నారని పక్కింటివారు అడుగుతున్నారు. మీరు బ్యాంక్‌లో క్యూలో నిలబడి ఉన్నారు. ఏమంటారు?",
      },
      options: ["I was standing in the queue at the bank.", "I standing in the queue at the bank.", "I was stand in the queue at the bank."],
      answer: 0,
      why: {
        en: "Something going on at that time needs was and the -ing form together.",
        te: "ఆ సమయంలో జరుగుతూ ఉన్న పనికి was, -ing రెండూ కలిసి కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "While we ___ tea, it started to pour.",
      te: "మేము టీ తాగుతుండగా కుండపోత వర్షం మొదలైంది.",
      options: ["were having", "was having", "are having"],
      answer: 0,
      why: {
        en: "We takes were, and the background action takes -ing in a past story.",
        te: "we తో were; గతంలో వెనకాల జరుగుతున్న పనికి -ing.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Later, you tell your friend how you felt when the lights went off. You had no idea what to do.",
        te: "లైట్లు పోయినప్పుడు మీకు ఎలా అనిపించిందో తర్వాత స్నేహితులకి చెప్తున్నారు. ఏం చేయాలో మీకు తెలియలేదు.",
      },
      options: ["I didn't know what to do.", "I was not knowing what to do.", "I am not knowing what to do."],
      answer: 0,
      why: {
        en: "Know never takes -ing, and the story is in the past, so use didn't with know.",
        te: "know కి -ing రాదు; కథ గతంలోది కాబట్టి didn't know.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I was paying the bill when the power go off.",
      wrongIndex: 8,
      fix: "I was paying the bill when the power went off.",
      why: {
        en: "The sudden event in a story needs the past form: went, not go.",
        te: "కథలో ఉన్నట్టుండి జరిగినదానికి past form: go కాదు, went.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend asks: What were you doing when it started raining? You were buying vegetables. Answer.",
        te: "వర్షం మొదలైనప్పుడు ఏం చేస్తున్నారని స్నేహితులు అడుగుతున్నారు. మీరు కూరగాయలు కొంటున్నారు. జవాబు చెప్పండి.",
      },
      expected: ["I was buying vegetables.", "I was buying vegetables at the market.", "I was buying some vegetables."],
      options: ["I was buying vegetables.", "I buying vegetables.", "I am buying vegetables."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell your friend what happened at the bank: you were waiting there, and the lights went off.",
        te: "బ్యాంక్‌లో ఏం జరిగిందో స్నేహితులకి చెప్పండి: మీరు అక్కడ ఎదురుచూస్తుండగా లైట్లు ఆగిపోయాయి.",
      },
      expected: [
        "I was waiting at the bank when the lights went off.",
        "The lights went off while I was waiting at the bank.",
        "I was waiting at the bank, and the lights went off.",
      ],
      options: [
        "I was waiting at the bank when the lights went off.",
        "I was waiting at the bank when the lights were going off.",
        "I waited at the bank while the lights went off.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A power cut at the bank", te: "బ్యాంక్‌లో కరెంట్ పోయింది" },
    scene: {
      en: "Your neighbour Sarala sees you coming home late from the bank.",
      te: "బ్యాంక్ నుంచి ఆలస్యంగా ఇంటికి వస్తున్న మిమ్మల్ని పక్కింటి సరళ గారు చూశారు.",
    },
    partner: { en: "Sarala (your neighbour)", te: "సరళ (పక్కింటావిడ)" },
    skills: [
      { id: "scene", label: { en: "Setting the scene", te: "నేపథ్యం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "You're late today! Was the bank crowded?",
        te: "ఈ రోజు ఆలస్యం అయింది! బ్యాంక్ రద్దీగా ఉందా?",
        hint: { en: "Say yes, and say what you were doing when the power went off.", te: "అవునని చెప్పి, కరెంట్ పోయినప్పుడు మీరు ఏం చేస్తున్నారో చెప్పండి." },
        replies: [
          { say: "Yes. I was waiting in the queue when the power went off.", good: true, skill: "scene" },
          { say: "Yes. I waiting in the queue when the power went off.", good: false, skill: "scene", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! Was it dark inside?",
        te: "అయ్యో! లోపల చీకటిగా ఉందా?",
        hint: { en: "Say how dark it was, and what happened to the fans.", te: "ఎంత చీకటిగా ఉందో, ఫ్యాన్లకి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Yes, it was pitch dark, and the fans stopped.", good: true, skill: "scene" },
          { say: "Yes, it was pitch dark, and the fans stop.", good: false, skill: "scene" },
        ],
      },
      {
        partner: "What did the bank people do?",
        te: "మరి బ్యాంక్ వాళ్ళు ఏం చేశారు?",
        hint: { en: "Say what the manager was doing at the same time, and how it ended.", te: "అదే సమయంలో మేనేజర్ గారు ఏం చేస్తున్నారో, చివరికి ఏమైందో చెప్పండి." },
        replies: [
          { say: "The manager was calling someone. Then the power came back on.", good: true, skill: "scene" },
          {
            say: "How do I know? I'm not the manager!",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! I was only asking.", te: "సరే, సరే! ఊరికే అడిగాను." },
          },
        ],
      },
      {
        partner: "Thank God. So is your work done?",
        te: "హమ్మయ్య. మరి మీ పని అయిపోయిందా?",
        hint: { en: "Say your work is done, and that you want some tea now.", te: "పని అయిపోయిందని, ఇప్పుడు టీ కావాలని చెప్పండి." },
        replies: [
          { say: "Yes, it's done. Now I need a cup of tea!", good: true, skill: "polite" },
          { say: "Yes, it's done. Now I need cup of tea!", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

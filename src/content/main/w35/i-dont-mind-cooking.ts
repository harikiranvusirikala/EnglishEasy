import type { Lesson } from "../../types";

/** Week 35, Day 2 (CURRICULUM §4): don't mind / hate + -ing — I don't mind cooking. I hate waiting in queues. */
export const day: Lesson = {
  id: "i-dont-mind-cooking",
  kind: "lesson",
  title: { en: "I Don't Mind Cooking", te: "పర్వాలేదు, ఇష్టం లేదు" },
  subtitle: "don't mind / hate + -ing",
  summary: {
    en: "Learn to say what is okay for you and what you really dislike: I don't mind cooking. I hate waiting in queues.",
    te: "ఏది మీకు పర్వాలేదో, ఏది అస్సలు ఇష్టం లేదో చెప్పడం నేర్చుకుందాం: I don't mind cooking. I hate waiting in queues.",
  },
  seo: {
    title: "I Don't Mind, I Hate in English for Telugu Speakers",
    description:
      "Say I don't mind cooking and I hate waiting in queues. Simple lessons for Telugu speakers on don't mind and hate with -ing.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "don't mind", role: "action" },
    { text: "cooking", role: "what" },
  ],
  core: [
    { en: "I don't mind cooking.", te: "వంట చేయడం నాకు పర్వాలేదు.", extra: ["cook"] },
    { en: "I hate waiting in queues.", te: "క్యూలో నిలబడి ఎదురుచూడటం నాకు అస్సలు ఇష్టం ఉండదు.", extra: ["wait"] },
    { en: "Do you mind walking a little?", te: "కొంచెం నడవడానికి మీకు పర్వాలేదా?", extra: ["walk"] },
    { en: "She doesn't like travelling by bus.", te: "ఆవిడకి బస్సులో ప్రయాణం చేయడం ఇష్టం లేదు.", extra: ["don't"] },
    { en: "I don't mind washing the dishes.", te: "గిన్నెలు కడగడం నాకు పర్వాలేదు.", extra: ["wash"] },
    { en: "Ramesh hates sitting at home all day.", te: "రోజంతా ఇంట్లో కూర్చోవడం రమేష్ గారికి అస్సలు ఇష్టం ఉండదు.", extra: ["hate"] },
    { en: "Housework is boring, but I don't mind it.", te: "ఇంటిపని బోరింగ్‌గా ఉంటుంది, కానీ నాకు పర్వాలేదు.", extra: ["bored"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one job you don't mind and one you hate. Say both aloud.",
    te: "మీకు పర్వాలేని ఒక పని, అస్సలు ఇష్టం లేని ఒక పని గుర్తు చేసుకుని, రెండూ పైకి చెప్పండి.",
  },
  words: [
    { en: "don't mind", te: "పర్వాలేదు, అభ్యంతరం లేదు" },
    { en: "hate", te: "అస్సలు ఇష్టం లేకపోవడం" },
    { en: "outing", te: "సరదాగా బయటికి వెళ్ళడం" },
    { en: "boring", te: "బోరింగ్, విసుగ్గా" },
    { en: "housework", te: "ఇంటిపని" },
  ],
  grammar: ["gerunds-infinitives", "present-simple"],
  topics: ["home", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Don't mind and hate", te: "పర్వాలేదు, అస్సలు ఇష్టం లేదు" },
      body: {
        en: "Don't mind means it is okay for you, even if it is not your favourite: I don't mind cooking. Hate means you really don't like it: I hate waiting. Both take the verb with -ing, like enjoy.",
        te: "don't mind అంటే 'పర్వాలేదు, చేస్తాను' అని: I don't mind cooking. hate అంటే 'అస్సలు ఇష్టం లేదు': I hate waiting. enjoy లాగే రెండింటి తర్వాత verb కి -ing.",
      },
      bridge: {
        te: ["వంట చేయడం", "నాకు", "పర్వాలేదు"],
        en: [
          { text: "I", role: "who" },
          { text: "don't mind", role: "action" },
          { text: "cooking", role: "what" },
        ],
      },
      examples: [
        { en: "I don't mind cooking.", te: "వంట చేయడం నాకు పర్వాలేదు." },
        { en: "I hate waiting in queues.", te: "క్యూలో నిలబడి ఎదురుచూడటం నాకు అస్సలు ఇష్టం ఉండదు." },
        { en: "Housework is boring, but I don't mind it.", te: "ఇంటిపని బోరింగ్‌గా ఉంటుంది, కానీ నాకు పర్వాలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "From love to hate", te: "చాలా ఇష్టం నుండి అస్సలు ఇష్టం లేదు వరకు" },
      items: [
        {
          form: "love / enjoy",
          useFor: { en: "You are very happy doing it.", te: "చాలా ఇష్టం, సరదా." },
          example: { en: "I love cooking for my friends.", te: "నా స్నేహితుల కోసం వంట చేయడం నాకు చాలా ఇష్టం." },
        },
        {
          form: "don't mind",
          useFor: { en: "It is okay; you will do it.", te: "పర్వాలేదు, చేస్తాను." },
          example: { en: "I don't mind washing the dishes.", te: "గిన్నెలు కడగడం నాకు పర్వాలేదు." },
        },
        {
          form: "don't like / doesn't like",
          useFor: { en: "You are not happy doing it.", te: "ఆ పని ఇష్టం లేదు." },
          example: { en: "She doesn't like travelling by bus.", te: "ఆవిడకి బస్సులో ప్రయాణం చేయడం ఇష్టం లేదు." },
        },
        {
          form: "hate",
          useFor: { en: "You really don't like it.", te: "అస్సలు ఇష్టం లేదు." },
          example: { en: "Ramesh hates sitting at home all day.", te: "రోజంతా ఇంట్లో కూర్చోవడం రమేష్ గారికి అస్సలు ఇష్టం ఉండదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "Ramesh hate sitting at home.",
      right: "Ramesh hates sitting at home.",
      why: {
        en: "For one person, the verb takes s, so hate becomes hates.",
        te: "ఒక్కరి గురించి చెప్పేటప్పుడు verb కి s వస్తుంది: hate కాదు, hates.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "I don't mind to cook.",
      right: "I don't mind cooking.",
      why: {
        en: "After mind, the next verb always takes -ing, never to.",
        te: "mind తర్వాత వచ్చే verb కి ఎప్పుడూ -ing; to రాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "A friend asks you to cook today. It is okay for you. What do you say?",
        te: "ఈ రోజు వంట చేయమని స్నేహితులు అడిగారు. మీకు పర్వాలేదు. ఏమంటారు?",
      },
      options: ["Sure, I don't mind to cook.", "Sure, I am not minding cooking.", "Sure, I don't mind cooking."],
      answer: 2,
      why: {
        en: "Mind is a feeling, so no am … -ing; the job after it takes -ing.",
        te: "mind ఒక భావన, దానికి am … -ing రాదు; దాని తర్వాత వచ్చే పనికి -ing.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I hate ___ in queues.",
      te: "క్యూలో నిలబడి ఎదురుచూడటం నాకు అస్సలు ఇష్టం ఉండదు.",
      options: ["wait", "waiting", "to waiting"],
      answer: 1,
      why: {
        en: "After hate, the verb takes -ing, just like enjoy and don't mind.",
        te: "hate తర్వాత కూడా enjoy, don't mind లాగే verb కి -ing.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your friend says: I don't mind cooking. What does she mean?",
        te: "మీ స్నేహితురాలు I don't mind cooking అన్నారు. అర్థం ఏంటి?",
      },
      options: ["Cooking is okay for her.", "She hates cooking.", "She can't cook."],
      answer: 0,
      why: {
        en: "Don't mind means it is not a problem; it does not mean no.",
        te: "don't mind అంటే 'పర్వాలేదు' అని; 'వద్దు' అని అర్థం కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "She don't like travelling by bus.",
      wrongIndex: 1,
      fix: "She doesn't like travelling by bus.",
      why: {
        en: "With he or she, English uses doesn't, never don't.",
        te: "he, she తో doesn't వాడాలి; don't రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks if you can cook for the outing. Say it is okay for you.",
        te: "ఔటింగ్ కోసం వంట చేస్తారా అని స్నేహితులు అడిగారు. మీకు పర్వాలేదని చెప్పండి.",
      },
      expected: ["Sure, I don't mind cooking.", "I don't mind cooking.", "Sure, I don't mind."],
      options: ["Sure, I don't mind cooking.", "Sure, I don't mind cook.", "Sure, I don't mind to cook."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell a friend you really don't like waiting in queues.",
        te: "క్యూలో ఎదురుచూడటం మీకు అస్సలు ఇష్టం ఉండదని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I hate waiting in queues.", "I hate waiting in a queue.", "I really hate waiting in queues."],
      options: ["I hate waiting in queues.", "I am hating waiting in queues.", "I hate wait in queues."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A Sunday outing", te: "ఆదివారం ఔటింగ్" },
    scene: {
      en: "Your friend Geetha wants a Sunday outing to Bhavani Island in Vijayawada. Plan it together.",
      te: "మీ స్నేహితురాలు గీత గారు ఆదివారం విజయవాడలో భవానీ ఐలాండ్‌కి వెళ్దామంటున్నారు. ఇద్దరూ కలిసి ప్లాన్ చేయండి.",
    },
    partner: { en: "Geetha (friend)", te: "గీత (స్నేహితురాలు)" },
    skills: [{ id: "feel", label: { en: "Saying what you don't mind", te: "పర్వాలేదు అని చెప్పడం" } }],
    turns: [
      {
        partner: "Let's go to Bhavani Island on Sunday!",
        te: "ఆదివారం భవానీ ఐలాండ్‌కి వెళ్దాం!",
        hint: { en: "Say yes happily: you like outings very much.", te: "సంతోషంగా సరే అనండి: మీకు ఔటింగ్స్ అంటే చాలా ఇష్టం." },
        replies: [
          { say: "Yes! I love going on outings.", good: true, skill: "feel" },
          { say: "Yes! I love go on outings.", good: false, skill: "feel" },
        ],
      },
      {
        partner: "There may be a long queue for the boat.",
        te: "బోటు కోసం పెద్ద క్యూ ఉండొచ్చు.",
        hint: { en: "Say waiting is okay for you this time.", te: "ఈసారి ఎదురుచూడటం మీకు పర్వాలేదని చెప్పండి." },
        replies: [
          { say: "I don't mind waiting. It's a holiday!", good: true, skill: "feel" },
          { say: "I don't mind to wait. It's a holiday!", good: false, skill: "feel" },
          {
            say: "A queue? Then I'm not coming. Forget it.",
            good: false,
            skill: "feel",
            react: { en: "Oh, don't say that! We'll go early, then.", te: "అయ్యో, అలా అనకండి! అయితే పొద్దున్నే వెళ్దాం." },
          },
        ],
      },
      {
        partner: "Okay. Shall we take the bus or an auto?",
        te: "సరే. బస్సులో వెళ్దామా, ఆటోలోనా?",
        hint: { en: "Choose the auto, and say you really don't like crowded buses.", te: "ఆటో అనండి; రద్దీ బస్సులు మీకు అస్సలు ఇష్టం ఉండవని చెప్పండి." },
        replies: [
          { say: "Let's take an auto. I hate crowded buses.", good: true, skill: "feel" },
          { say: "Let's take auto. I hate crowded buses.", good: false, skill: "feel", fixIt: "article" },
        ],
      },
      {
        partner: "Fine. I'll bring snacks. Can you bring water?",
        te: "సరే. నేను స్నాక్స్ తెస్తాను. మీరు నీళ్ళు తెస్తారా?",
        hint: { en: "Say yes to the water, and say goodbye until Sunday.", te: "నీళ్ళు తెస్తానని, ఆదివారం కలుద్దామని చెప్పండి." },
        replies: [
          { say: "Sure, I'll bring it. See you on Sunday!", good: true },
          { say: "Sure, I'll bring. See you on Sunday!", good: false },
        ],
      },
    ],
  },
};

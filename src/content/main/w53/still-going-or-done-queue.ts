import type { Lesson } from "../../types";

/** Week 53, Day 3 (CURRICULUM §5): still going on (I've been filling forms) or finished (I've filled three forms) — a morning at the office. */
export const day: Lesson = {
  id: "still-going-or-done-queue",
  kind: "lesson",
  title: { en: "Still Going or Done?", te: "ఇంకా చేస్తున్నారా, అయిపోయిందా?" },
  subtitle: "I've been filling … / I've filled …",
  summary: {
    en: "Learn to tell what is still going on and what is finished: I've been filling forms all morning. I've filled three forms already.",
    te: "ఇంకా జరుగుతున్నదేదో, అయిపోయినదేదో చెప్పడం నేర్చుకుందాం: I've been filling forms all morning. I've filled three forms already.",
  },
  seo: {
    title: "Have Been Doing or Have Done in English for Telugu Speakers",
    description:
      "Say I've been filling forms all morning and I've filled three forms already. Simple lessons for Telugu speakers on still going or finished.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "filled", role: "action" },
    { text: "three forms", role: "what" },
    { text: "already", role: "when" },
  ],
  core: [
    { en: "I've been filling forms all morning.", te: "పొద్దున్నుంచీ ఫారాలు నింపుతూనే ఉన్నాను.", extra: ["fill"] },
    { en: "I've filled three forms already.", te: "ఇప్పటికే మూడు ఫారాలు నింపేశాను.", extra: ["form"] },
    { en: "I've been waiting at the office since ten.", te: "పది నుంచి ఆఫీసులో ఎదురుచూస్తున్నాను.", extra: ["am"] },
    { en: "The clerk has stamped my form.", te: "క్లర్క్ గారు నా ఫారం మీద స్టాంప్ వేశారు.", extra: ["stamp"] },
    { en: "I've been calling the office all week.", te: "వారం రోజులుగా ఆఫీసుకి ఫోన్ చేస్తూనే ఉన్నాను.", extra: ["call"] },
    { en: "I've called them five times.", te: "వాళ్ళకి ఐదుసార్లు ఫోన్ చేశాను.", extra: ["time"] },
    { en: "The work is almost done. Just one more signature.", te: "పని దాదాపు అయిపోయింది. ఇంకా ఒకే ఒక signature.", extra: ["signatures"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Say one thing you have been doing today, and one thing you have finished: I've been … / I've …",
    te: "ఈ రోజు మీరు చేస్తూ ఉన్న ఒక పని, పూర్తి చేసిన ఒక పని చెప్పండి: I've been … / I've …",
  },
  words: [
    { en: "all morning", te: "పొద్దున్నుంచీ, పొద్దంతా" },
    { en: "so far", te: "ఇప్పటిదాకా" },
    { en: "submit", te: "ఇవ్వడం, submit చేయడం" },
    { en: "stamp", te: "స్టాంప్, ముద్ర" },
    { en: "almost done", te: "దాదాపు అయిపోయింది" },
  ],
  grammar: ["present-perfect-continuous", "present-perfect", "plurals-countable"],
  topics: ["offices", "phone", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Still going or finished?", te: "ఇంకా జరుగుతోందా, అయిపోయిందా?" },
      body: {
        en: "Have been + -ing tells what is still going on. Have + a past form tells what is finished, or how many: I've filled three forms.",
        te: "have been + -ing అంటే ఇంకా జరుగుతున్న పని. have + past form అంటే అయిపోయిన పని, లేదా ఎన్ని అయ్యాయో: I've filled three forms.",
      },
      bridge: {
        te: ["ఇప్పటికే", "మూడు ఫారాలు", "నింపేశాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "filled", role: "action" },
          { text: "three forms", role: "what" },
          { text: "already", role: "when" },
        ],
      },
      examples: [
        { en: "I've been filling forms all morning.", te: "పొద్దున్నుంచీ ఫారాలు నింపుతూనే ఉన్నాను." },
        { en: "I've filled three forms already.", te: "ఇప్పటికే మూడు ఫారాలు నింపేశాను." },
        { en: "I've been waiting at the office since ten.", te: "పది నుంచి ఆఫీసులో ఎదురుచూస్తున్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Doing or done?", te: "చేస్తున్నారా, చేసేశారా?" },
      items: [
        {
          form: "I've been + -ing",
          useFor: { en: "The activity, still going on.", te: "ఇంకా జరుగుతూనే ఉన్న పని." },
          example: { en: "I've been calling the office all week.", te: "వారం రోజులుగా ఆఫీసుకి ఫోన్ చేస్తూనే ఉన్నాను." },
        },
        {
          form: "I've + called + a number",
          useFor: { en: "How many are finished.", te: "ఎన్ని పూర్తయ్యాయో చెప్పడానికి." },
          example: { en: "I've called them five times.", te: "వాళ్ళకి ఐదుసార్లు ఫోన్ చేశాను." },
        },
        {
          form: "So far, I've …",
          useFor: { en: "What is done until now.", te: "ఇప్పటిదాకా అయినది." },
          example: { en: "So far, I've submitted two documents.", te: "ఇప్పటిదాకా రెండు డాక్యుమెంట్లు submit చేశాను." },
        },
        {
          form: "I've known …",
          useFor: { en: "Know, like and own take no -ing.", te: "know, like, own లాంటి వాటికి -ing రాదు." },
          example: { en: "I've known the clerk for years.", te: "ఆ క్లర్క్ గారు నాకు ఏళ్ళ నుంచి తెలుసు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I have been knowing him for ten years.",
      right: "I have known him for ten years.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing; use have known.",
        te: "know అనేది చేసే పని కాదు, ఒక స్థితి; దానికి -ing రాదు. have known వాడండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "I've filled three form already.",
      right: "I've filled three forms already.",
      why: {
        en: "After three, the word needs s; English shows more than one every time.",
        te: "three తర్వాత పదానికి s కావాలి; ఒకటి కంటే ఎక్కువ అయితే ఇంగ్లీష్‌లో ప్రతిసారీ s.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Your friend calls at noon. You are still at the office, filling forms. What do you say?",
        te: "మధ్యాహ్నం మీ స్నేహితులు ఫోన్ చేశారు. మీరు ఇంకా ఆఫీసులో ఫారాలు నింపుతూనే ఉన్నారు. ఏమంటారు?",
      },
      options: ["I've been filling forms all morning.", "I am filling forms since morning.", "I've been fill forms all morning."],
      answer: 0,
      why: {
        en: "The filling started in the morning and is still going on, so use have been + -ing.",
        te: "ఫారాలు నింపడం పొద్దున మొదలై ఇంకా జరుగుతోంది, అందుకే have been + -ing.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "state-ing",
      sentence: "I ___ that clerk for many years.",
      te: "ఆ క్లర్క్ గారు నాకు చాలా ఏళ్ళ నుంచి తెలుసు.",
      options: ["have known", "have been knowing", "am knowing"],
      answer: 0,
      why: {
        en: "Know is a state, so it takes have known, never the -ing form.",
        te: "know ఒక స్థితి, అందుకే have known; -ing రూపం ఎప్పుడూ రాదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "Your friend asks: How many forms have you filled? You have finished three.",
        te: "ఎన్ని ఫారాలు నింపారని స్నేహితులు అడుగుతున్నారు. మీరు మూడు పూర్తి చేశారు.",
      },
      options: ["I've filled three forms.", "I've been filling three forms.", "I filling three forms."],
      answer: 0,
      why: {
        en: "A number of finished things takes have + filled, not the -ing form.",
        te: "పూర్తయిన వాటి లెక్క చెప్తే have + filled; -ing రూపం కాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The clerk have been checking papers since ten.",
      wrongIndex: 2,
      fix: "The clerk has been checking papers since ten.",
      why: {
        en: "One clerk is like he or she, so use has; have is for I, you, we and they.",
        te: "ఒక్క క్లర్క్ అంటే he, she లాగా, అందుకే has; have అనేది I, you, we, they కి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend calls. You came to the office at ten, and you are still waiting. Tell her.",
        te: "స్నేహితురాలు ఫోన్ చేశారు. మీరు పదింటికి ఆఫీసుకి వచ్చారు, ఇంకా ఎదురుచూస్తూనే ఉన్నారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["I've been waiting at the office since ten.", "I've been here since ten.", "I have been waiting since ten."],
      options: ["I've been waiting at the office since ten.", "I am waiting at the office since ten.", "I've been waiting at office since ten."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell your friend you have called the office five times this week.",
        te: "ఈ వారం ఆఫీసుకి ఐదుసార్లు ఫోన్ చేశారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["I've called the office five times this week.", "I have called them five times.", "I've called five times."],
      options: ["I've called the office five times this week.", "I've called the office five time this week.", "I am calling the office five times this week."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A long morning at the office", te: "ఆఫీసులో పొడవైన పొద్దు" },
    scene: {
      en: "You are at the municipal office for a house tax paper. Your friend Kavitha calls to ask where you are.",
      te: "ఇంటి పన్ను కాగితం కోసం మీరు మున్సిపల్ ఆఫీసులో ఉన్నారు. ఎక్కడున్నారని అడగడానికి మీ స్నేహితురాలు కవిత గారు ఫోన్ చేశారు.",
    },
    partner: { en: "Kavitha (your friend)", te: "కవిత (మీ స్నేహితురాలు)" },
    skills: [
      { id: "doing-done", label: { en: "Doing or done", te: "చేస్తున్నదీ, చేసేసిందీ" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Where are you? I called you twice.",
        te: "హలో! ఎక్కడున్నారు? రెండుసార్లు ఫోన్ చేశాను.",
        hint: { en: "Say sorry, and tell her where you have been since morning.", te: "సారీ చెప్పి, పొద్దున్నుంచి మీరు ఎక్కడున్నారో చెప్పండి." },
        replies: [
          { say: "Sorry! I've been at the municipal office all morning.", good: true, skill: "doing-done" },
          { say: "Sorry! I am at the municipal office since morning.", good: false, skill: "doing-done", fixIt: "duration" },
        ],
      },
      {
        partner: "Oh no! What have you been doing all this time?",
        te: "అయ్యో! ఇంతసేపు ఏం చేస్తున్నారు?",
        hint: { en: "Tell her: forms, and standing in lines.", te: "చెప్పండి: ఫారాలు నింపడం, లైన్లలో నిలబడటం." },
        replies: [
          { say: "I've been filling forms and standing in lines.", good: true, skill: "doing-done" },
          { say: "I've been fill forms and standing in lines.", good: false, skill: "doing-done" },
        ],
      },
      {
        partner: "How many forms have you filled?",
        te: "ఎన్ని ఫారాలు నింపారు?",
        hint: { en: "Say three are finished, and only one is left.", te: "మూడు అయిపోయాయని, ఇంకా ఒక్కటే మిగిలిందని చెప్పండి." },
        replies: [
          { say: "I've filled three forms. Just one more is left.", good: true, skill: "doing-done" },
          { say: "I've filled three form. Just one more is left.", good: false, skill: "doing-done", fixIt: "plural" },
          {
            say: "Why are you asking so many questions?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I was only worried about you.", te: "సారీ అండీ, మీ గురించి కంగారుపడి అడిగాను." },
          },
        ],
      },
      {
        partner: "Okay. Come home for lunch after that, if you like.",
        te: "సరే. అది అయ్యాక, మీకు వీలైతే భోజనానికి మా ఇంటికి రండి.",
        hint: { en: "Thank her, say yes, and say goodbye.", te: "థాంక్స్ చెప్పి, సరే అని, బై చెప్పండి." },
        replies: [
          { say: "Thank you! I'll come after the office. Bye!", good: true, skill: "polite" },
          { say: "Thank you! I'll coming after the office. Bye!", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

import type { Lesson } from "../../types";

/** Week 6, Day 5 (CURRICULUM §3): cooking steps — imperatives with first / then. */
export const day: Lesson = {
  id: "cooking-instructions",
  kind: "lesson",
  title: { en: "Cooking Steps", te: "వంట సూచనలు" },
  subtitle: "cut / add / boil · first / then",
  summary: {
    en: "Learn to give cooking steps in order: first wash the rice, then boil the water.",
    te: "వంట పనులు వరుసగా చెప్పడం నేర్చుకుందాం: ముందు బియ్యం కడగండి, తర్వాత నీళ్ళు మరిగించండి.",
  },
  seo: {
    title: "Cooking Instructions in English for Telugu Speakers",
    description:
      "Say Cut the onions, Add some salt and Then boil the water in English. Simple lessons for Telugu speakers on giving cooking steps.",
  },
  pattern: [
    { text: "Cut", role: "action" },
    { text: "the onions", role: "what" },
  ],
  core: [
    { en: "Cut the onions.", te: "ఉల్లిపాయలు కోయండి.", extra: ["Cuts"] },
    { en: "Add some salt.", te: "కొంచెం ఉప్పు వేయండి.", extra: ["any"] },
    { en: "Then boil the water.", te: "తర్వాత నీళ్ళు మరిగించండి.", extra: ["Than"] },
    { en: "First, wash the rice.", te: "ముందు బియ్యం కడగండి.", extra: ["washing"] },
    { en: "Mix it well.", te: "బాగా కలపండి.", extra: ["good"] },
    { en: "Cook for ten minutes.", te: "పది నిమిషాలు ఉడికించండి.", extra: ["since"] },
    { en: "Don't add too much chilli.", te: "మరీ ఎక్కువ కారం వేయకండి.", extra: ["many"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell someone how to make tea, step by step, in English: First … Then …",
    te: "టీ ఎలా చేయాలో ఇంగ్లీష్‌లో వరుసగా చెప్పండి: First … Then …",
  },
  words: [
    { en: "cut", te: "కోయడం" },
    { en: "add", te: "వేయడం, కలపడం" },
    { en: "boil", te: "మరిగించడం" },
    { en: "mix", te: "కలపడం" },
    { en: "wash", te: "కడగడం" },
  ],
  grammar: ["imperatives", "connectors"],
  topics: ["food", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Steps start with the action", te: "సూచన పని పదంతో మొదలవుతుంది" },
      body: {
        en: "A cooking step starts with the action word: Cut the onions. Add some salt. Say first, then and after that to show the order.",
        te: "వంట సూచన పని పదంతో మొదలవుతుంది: Cut the onions. Add some salt. వరుస చూపడానికి first, then, after that అనండి.",
      },
      bridge: {
        te: ["ఉల్లిపాయలు", "కోయండి"],
        en: [
          { text: "Cut", role: "action" },
          { text: "the onions", role: "what" },
        ],
      },
      examples: [
        { en: "First, wash the rice.", te: "ముందు బియ్యం కడగండి." },
        { en: "Then boil the water.", te: "తర్వాత నీళ్ళు మరిగించండి." },
        { en: "Add some salt.", te: "కొంచెం ఉప్పు వేయండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "First, then, don't", te: "ముందు, తర్వాత, వద్దు" },
      items: [
        {
          form: "first",
          useFor: { en: "For the first step.", te: "మొదటి పనికి." },
          example: { en: "First, wash the rice.", te: "ముందు బియ్యం కడగండి." },
        },
        {
          form: "then",
          useFor: { en: "For the next step.", te: "తర్వాతి పనికి." },
          example: { en: "Then boil the water.", te: "తర్వాత నీళ్ళు మరిగించండి." },
        },
        {
          form: "don't",
          useFor: { en: "For something not to do.", te: "చేయకూడని పనికి." },
          example: { en: "Don't add too much chilli.", te: "మరీ ఎక్కువ కారం వేయకండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "Than boil the water.",
      right: "Then boil the water.",
      why: {
        en: "Then means next. Than is only for comparing.",
        te: "then అంటే తర్వాత. than పోల్చడానికి మాత్రమే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "Mix it good.",
      right: "Mix it well.",
      why: {
        en: "For how you do something, say well.",
        te: "ఒక పని ఎలా చేస్తారో చెప్పడానికి well.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: { en: "Choose the correct cooking step.", te: "సరైన వంట సూచనను ఎంచుకోండి." },
      options: ["Onions cut.", "Cut the onions.", "You cutting the onions."],
      answer: 1,
      why: {
        en: "Start with the action: Cut the onions.",
        te: "పని పదంతో మొదలుపెట్టాలి: Cut the onions.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "First wash the rice. ___ boil the water.",
      te: "ముందు బియ్యం కడగండి. తర్వాత నీళ్ళు మరిగించండి.",
      options: ["Then", "Than", "That"],
      answer: 0,
      why: {
        en: "The next step: then.",
        te: "తర్వాతి పని: then.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "Which sentence means: బాగా కలపండి?", te: "బాగా కలపండి — ఇంగ్లీష్‌లో ఏది?" },
      options: ["Mix it well.", "Mix it good.", "Well mix it."],
      answer: 0,
      why: {
        en: "Mix it well.",
        te: "Mix it well అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Don't add too many salt.",
      wrongIndex: 3,
      fix: "Don't add too much salt.",
      why: {
        en: "Salt is not counted, so too much.",
        te: "ఉప్పు లెక్కపెట్టం, కాబట్టి too much.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell your helper the first step: wash the rice.",
        te: "మీ సహాయకులకు మొదటి పని చెప్పండి: బియ్యం కడగాలి.",
      },
      expected: ["First, wash the rice.", "Wash the rice.", "Please wash the rice."],
      options: ["First, wash the rice.", "First, washing the rice.", "First, the rice wash."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell someone not to add too much chilli.",
        te: "మరీ ఎక్కువ కారం వేయవద్దని చెప్పండి.",
      },
      expected: ["Don't add too much chilli.", "Please don't add too much chilli."],
      options: ["Don't add too much chilli.", "Not add too much chilli.", "Don't add too many chilli."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "How to make filter coffee", te: "ఫిల్టర్ కాఫీ ఎలా చేయాలి" },
    scene: {
      en: "Your friend Anitha wants to learn your filter coffee. Tell her the steps.",
      te: "మీ స్నేహితురాలు అనిత మీలా ఫిల్టర్ కాఫీ చేయడం నేర్చుకోవాలనుకుంటోంది. ఆమెకు వరుసగా చెప్పండి.",
    },
    partner: { en: "Anitha (a friend)", te: "అనిత (స్నేహితురాలు)" },
    skills: [{ id: "steps", label: { en: "Steps in order", te: "వరుసగా సూచనలు" } }],
    turns: [
      {
        partner: "How do you make filter coffee?",
        te: "ఫిల్టర్ కాఫీ ఎలా చేస్తారు?",
        hint: { en: "Say: First, boil the water.", te: "ఇలా చెప్పండి: First, boil the water." },
        replies: [
          { say: "First, boil the water.", good: true, skill: "steps" },
          { say: "First, boiling the water.", good: false, skill: "steps" },
        ],
      },
      {
        partner: "Okay. Then?",
        te: "సరే. తర్వాత?",
        hint: { en: "Say: Then add the coffee powder.", te: "ఇలా చెప్పండి: Then add the coffee powder." },
        replies: [
          { say: "Then add the coffee powder.", good: true, skill: "steps" },
          { say: "Than add the coffee powder.", good: false, skill: "steps" },
        ],
      },
      {
        partner: "How long do I wait?",
        te: "ఎంతసేపు ఆగాలి?",
        hint: { en: "Say: Wait for ten minutes.", te: "ఇలా చెప్పండి: Wait for ten minutes." },
        replies: [
          { say: "Wait for ten minutes.", good: true, skill: "steps" },
          { say: "Wait since ten minutes.", good: false, skill: "steps" },
        ],
      },
      {
        partner: "And then milk and sugar?",
        te: "తర్వాత పాలు, చక్కెరా?",
        hint: { en: "Say: Yes. Mix it well.", te: "ఇలా చెప్పండి: Yes. Mix it well." },
        replies: [
          { say: "Yes. Mix it well.", good: true, skill: "steps" },
          { say: "Yes. Mix it good.", good: false, skill: "steps" },
        ],
      },
    ],
  },
};

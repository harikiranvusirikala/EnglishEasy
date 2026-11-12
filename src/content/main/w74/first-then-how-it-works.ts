import type { Lesson } from "../../types";

/** Week 74, Day 1 (CURRICULUM §5): steps in order with First, Then, After that, Finally — explaining the washing machine. */
export const day: Lesson = {
  id: "first-then-how-it-works",
  kind: "lesson",
  title: { en: "How Does It Work?", te: "ఇది ఎలా పనిచేస్తుంది?" },
  subtitle: "first, then, after that, finally",
  summary: {
    en: "Learn to explain a machine step by step: First, put the clothes in. Then add the powder.",
    te: "ఒక మెషీన్‌ని ఒక్కో step గా వరుసగా చెప్పడం నేర్చుకుందాం: First, put the clothes in. Then add the powder.",
  },
  seo: {
    title: "Explaining Steps in English for Telugu Speakers",
    description:
      "Say First, put the clothes in. Then add the powder. Simple lessons for Telugu speakers on explaining how a machine works, step by step.",
  },
  pattern: [
    { text: "First,", role: "when" },
    { text: "put", role: "action" },
    { text: "the clothes", role: "what" },
    { text: "in the machine", role: "what" },
  ],
  core: [
    { en: "First, put the clothes in.", te: "ముందు బట్టలు లోపల వేయండి.", extra: ["putting"] },
    { en: "Then add the powder and close the lid.", te: "తర్వాత పౌడర్ వేసి, మూత మూసేయండి.", extra: ["adding"] },
    { en: "After that, press start and wait for an hour.", te: "ఆ తర్వాత start నొక్కి, ఒక గంట ఆగండి.", extra: ["a"] },
    { en: "How does this machine work?", te: "ఈ మెషీన్ ఎలా పనిచేస్తుంది?", extra: ["works"] },
    { en: "Finally, take the clothes out and dry them.", te: "చివరగా బట్టలు బయటికి తీసి ఆరేయండి.", extra: ["it"] },
    { en: "The machine fills with water by itself.", te: "మెషీన్ తనంతట తనే నీళ్ళు నింపుకుంటుంది.", extra: ["fill"] },
    { en: "It rinses the clothes twice and then spins them.", te: "బట్టల్ని రెండుసార్లు జాడించి, తర్వాత గిరగిరా తిప్పుతుంది.", extra: ["rinse"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one machine at home, like the mixer or the geyser. Say its steps aloud: First … Then … Finally …",
    te: "ఇంట్లో ఒక మెషీన్ గుర్తు చేసుకోండి, మిక్సీ లేదా గీజర్ లాంటిది. దాని steps గట్టిగా చెప్పండి: First … Then … Finally …",
  },
  words: [
    { en: "step", te: "ఒక్కో అడుగు, step" },
    { en: "washing machine", te: "వాషింగ్ మెషీన్" },
    { en: "detergent", te: "బట్టల సబ్బు పొడి, డిటర్జెంట్" },
    { en: "lid", te: "మూత" },
    { en: "rinse", te: "నీళ్ళలో జాడించడం" },
  ],
  grammar: ["imperatives", "connectors", "present-simple"],
  topics: ["home", "technology"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Steps in order", te: "పనులు వరుసగా" },
      body: {
        en: "To explain a machine, give the steps in order. Start each step with First, Then, After that or Finally, and pause a little after it.",
        te: "మెషీన్ గురించి చెప్పేటప్పుడు steps వరుసగా చెప్పండి. ప్రతి step ని First, Then, After that, Finally తో మొదలుపెట్టి, ఆ మాట తర్వాత కొంచెం ఆగండి.",
      },
      bridge: {
        te: ["ముందు", "బట్టలు", "లోపల వేయండి"],
        en: [
          { text: "First,", role: "when" },
          { text: "put", role: "action" },
          { text: "the clothes in", role: "what" },
        ],
      },
      examples: [
        { en: "First, put the clothes in.", te: "ముందు బట్టలు లోపల వేయండి." },
        { en: "Then add the powder and close the lid.", te: "తర్వాత పౌడర్ వేసి, మూత మూసేయండి." },
        { en: "After that, press start and wait for an hour.", te: "ఆ తర్వాత start నొక్కి, ఒక గంట ఆగండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "A word for each step", te: "ఒక్కో step కి ఒక మాట" },
      items: [
        {
          form: "First, …",
          useFor: { en: "The step you do before all the others.", te: "అన్నిటికంటే ముందు చేసే step." },
          example: { en: "First, put the clothes in.", te: "ముందు బట్టలు లోపల వేయండి." },
        },
        {
          form: "Then …",
          useFor: { en: "The step that comes next.", te: "దాని వెంటనే వచ్చే step." },
          example: { en: "Then add the powder and close the lid.", te: "తర్వాత పౌడర్ వేసి, మూత మూసేయండి." },
        },
        {
          form: "After that, …",
          useFor: { en: "One more step, a little later.", te: "ఇంకో step, కొంచెం తర్వాత." },
          example: { en: "After that, press start and wait for an hour.", te: "ఆ తర్వాత start నొక్కి, ఒక గంట ఆగండి." },
        },
        {
          form: "Finally, …",
          useFor: { en: "The last step.", te: "చివరి step." },
          example: { en: "Finally, take the clothes out and dry them.", te: "చివరగా బట్టలు బయటికి తీసి ఆరేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Can you explain me how it works?",
      right: "Can you explain to me how it works?",
      why: {
        en: "Explain needs to before the person; Telugu నాకు has it inside the word.",
        te: "explain తర్వాత మనిషి వస్తే ముందు to కావాలి; తెలుగు 'నాకు' లో అది కలిసే ఉంటుంది.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The machine take about an hour.",
      right: "The machine takes about an hour.",
      why: {
        en: "One machine, like he or she, takes s on the verb.",
        te: "ఒక్క మెషీన్ (he, she లాగా), అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your neighbour has a new washing machine. Ask how it works.",
        te: "పక్కింటివారు కొత్త వాషింగ్ మెషీన్ కొన్నారు. అది ఎలా పనిచేస్తుందో అడగండి.",
      },
      options: ["How does this machine work?", "How this machine works?", "How does this machine works?"],
      answer: 0,
      why: {
        en: "A how question needs does before the machine, and then the plain verb with no s.",
        te: "how ప్రశ్నలో machine కంటే ముందు does రావాలి; తర్వాత verb అలాగే, s లేకుండా.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "___, take the clothes out and dry them.",
      te: "చివరగా బట్టలు బయటికి తీసి ఆరేయండి.",
      options: ["Finally", "At last", "At the last"],
      answer: 0,
      why: {
        en: "For the last step, say Finally; At last means after a long wait.",
        te: "చివరి step కి Finally అనాలి; At last అంటే 'ఎంతో ఎదురుచూశాక' అని అర్థం.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Kavitha says: First, put the clothes in. Then add the powder. What do you do second?",
        te: "కవిత గారు First, put the clothes in. Then add the powder. అన్నారు. రెండోది ఏం చేయాలి?",
      },
      options: ["Add the powder", "Put the clothes in", "Press start"],
      answer: 0,
      why: {
        en: "Then comes after First, so the powder is the second step.",
        te: "First తర్వాతే Then వస్తుంది; అందుకే పౌడర్ వేయడం రెండో step.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "After that, press start and wait for a hour.",
      wrongIndex: 7,
      fix: "After that, press start and wait for an hour.",
      why: {
        en: "In hour the h is silent, so it starts with a vowel sound and takes an.",
        te: "hour లో h పలకదు, అచ్చు శబ్దంతో మొదలవుతుంది; అందుకే a కాదు, an.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A guest wants to use your washing machine. Tell her the first step: the clothes go in.",
        te: "ఒక అతిథి మీ వాషింగ్ మెషీన్ వాడాలనుకుంటున్నారు. మొదటి step చెప్పండి: బట్టలు లోపల వేయాలి.",
      },
      expected: ["First, put the clothes in.", "First, put the clothes in the machine.", "First, put your clothes in."],
      options: ["First, put the clothes in.", "At first, put the clothes in.", "First, you putting the clothes in."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your guest asks how long the wash takes. Say about an hour.",
        te: "ఉతకడానికి ఎంతసేపు పడుతుందని అతిథి అడుగుతున్నారు. సుమారు ఒక గంట అని చెప్పండి.",
      },
      expected: ["It takes about an hour.", "The machine takes about an hour.", "About an hour."],
      options: ["It takes about an hour.", "It take about an hour.", "It takes about a hour."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A guest and the washing machine", te: "అతిథి, వాషింగ్ మెషీన్" },
    scene: {
      en: "Your cousin Gopal is staying with you for a week. He wants to wash his clothes.",
      te: "మీ కజిన్ గోపాల్ గారు ఒక వారం మీ ఇంట్లో ఉంటున్నారు. ఆయన బట్టలు ఉతుక్కోవాలనుకుంటున్నారు.",
    },
    partner: { en: "Gopal (your cousin)", te: "గోపాల్ (మీ కజిన్)" },
    voice: "b",
    skills: [
      { id: "steps", label: { en: "Giving steps in order", te: "steps వరుసగా చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Can I use your washing machine? I don't know how it works.",
        te: "గుడ్ మార్నింగ్! మీ వాషింగ్ మెషీన్ వాడొచ్చా? అది ఎలా పనిచేస్తుందో నాకు తెలియదు.",
        hint: { en: "Say yes, and give the first step: his clothes go inside.", te: "సరే అని, మొదటి step చెప్పండి: బట్టలు లోపల వేయాలి." },
        replies: [
          { say: "Of course. First, put your clothes in.", good: true, skill: "steps" },
          { say: "Sure! First, put the clothes in the machine.", good: true, skill: "steps" },
          {
            say: "Don't you even know this? Just put the clothes in.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I've never used one. Please show me.", te: "సారీ అండీ, నేను ఎప్పుడూ వాడలేదు. కొంచెం చూపించండి." },
          },
        ],
      },
      {
        partner: "Okay, the clothes are in. Then what?",
        te: "సరే, బట్టలు వేశాను. తర్వాత ఏంటి?",
        hint: { en: "Tell him the next step: the washing powder, and the lid.", te: "తర్వాతి step చెప్పండి: సబ్బు పొడి, మూత." },
        replies: [
          { say: "Then add one spoon of detergent and close the lid.", good: true, skill: "steps" },
          { say: "Then add one spoon of detergent and close lid.", good: false, skill: "steps", fixIt: "article" },
        ],
      },
      {
        partner: "Done. Which button do I press?",
        te: "అయిపోయింది. ఏ బటన్ నొక్కాలి?",
        hint: { en: "Say which button, and how long to wait.", te: "ఏ బటన్ నొక్కాలో, ఎంతసేపు ఆగాలో చెప్పండి." },
        replies: [
          { say: "After that, press start and wait for about an hour.", good: true, skill: "steps" },
          { say: "Press the start button. It takes about an hour.", good: true, skill: "steps" },
          { say: "Press the start button. It take about an hour.", good: false, skill: "steps", fixIt: "he-she-s" },
        ],
      },
      {
        partner: "That's easy! Thank you for showing me.",
        te: "చాలా సులువు! చూపించినందుకు థాంక్స్.",
        hint: { en: "Say he's welcome, and give the last step: drying.", te: "పర్లేదని చెప్పి, చివరి step చెప్పండి: ఆరేయడం." },
        replies: [
          { say: "You're welcome. Finally, hang the clothes on the terrace.", good: true, skill: "steps" },
          { say: "You're welcome. At last, hang the clothes on the terrace.", good: false, skill: "steps" },
        ],
      },
    ],
  },
};

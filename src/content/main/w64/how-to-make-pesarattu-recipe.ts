import type { Lesson } from "../../types";

/** Week 64, Day 4 (CURRICULUM §5): explaining a recipe step by step — soak, grind, add, spread; First …, Then …; a recipe passage. */
export const day: Lesson = {
  id: "how-to-make-pesarattu-recipe",
  kind: "lesson",
  title: { en: "How Do You Make It?", te: "ఎలా చేస్తారు?" },
  subtitle: "First, soak … Then, grind …",
  summary: {
    en: "Learn to ask for a recipe and explain one, step by step: First, soak the green gram. Then grind it.",
    te: "వంట ఎలా చేయాలో అడగడం, ఒక్కో step చెప్పడం నేర్చుకుందాం: First, soak the green gram. Then grind it.",
  },
  seo: {
    title: "Explaining a Recipe in English for Telugu Speakers",
    description:
      "Say How do you make pesarattu? and First, soak the green gram. Simple lessons for Telugu speakers on explaining a recipe step by step.",
  },
  pattern: [
    { text: "First,", role: "when" },
    { text: "soak", role: "action" },
    { text: "the green gram", role: "what" },
    { text: "for four hours", role: "when" },
  ],
  core: [
    { en: "First, soak the green gram for four hours.", te: "ముందు పెసలు నాలుగు గంటలు నానబెట్టండి.", extra: ["since"] },
    { en: "Then grind it with ginger and green chillies.", te: "తర్వాత అల్లం, పచ్చిమిర్చి వేసి రుబ్బండి.", extra: ["grinding"] },
    { en: "How do you make pesarattu?", te: "పెసరట్టు ఎలా చేస్తారు?", extra: ["are"] },
    { en: "Add a little salt and some water.", te: "కొంచెం ఉప్పు, కొన్ని నీళ్ళు కలపండి.", extra: ["few"] },
    { en: "Spread the batter thin on a hot tawa.", te: "వేడి పెనం మీద పిండిని పల్చగా పరచండి.", extra: ["in"] },
    { en: "Pour a few drops of oil around it.", te: "దాని చుట్టూ కొన్ని చుక్కల నూనె వేయండి.", extra: ["little"] },
    { en: "Serve it hot with ginger chutney.", te: "అల్లం చట్నీతో వేడివేడిగా వడ్డించండి.", extra: ["serving"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a dish you make well. Say its first two steps aloud with First and Then.",
    te: "మీరు బాగా చేసే ఒక వంటకం గుర్తు తెచ్చుకోండి. దాని మొదటి రెండు steps ని First, Then తో గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "recipe", te: "వంట చేసే విధానం, recipe" },
    { en: "soak", te: "నానబెట్టడం" },
    { en: "grind", te: "రుబ్బడం, mixer లో పట్టడం" },
    { en: "batter", te: "రుబ్బిన పిండి" },
    { en: "green gram", te: "పెసలు" },
  ],
  grammar: ["imperatives", "question-words", "plurals-countable"],
  topics: ["food", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Explaining a recipe", te: "వంట ఎలా చేయాలో చెప్పడం" },
      body: {
        en: "Give each step with the plain verb at the start: soak, grind, add. Say First for the first step and Then for the next one.",
        te: "ఒక్కో step ని verb తో మొదలుపెట్టండి, verb అలాగే: soak, grind, add. మొదటి step కి First, తర్వాతి దానికి Then అనండి.",
      },
      bridge: {
        te: ["ముందు", "పెసలు", "నాలుగు గంటలు", "నానబెట్టండి"],
        en: [
          { text: "First,", role: "when" },
          { text: "soak", role: "action" },
          { text: "the green gram", role: "what" },
          { text: "for four hours", role: "when" },
        ],
      },
      examples: [
        { en: "First, soak the green gram for four hours.", te: "ముందు పెసలు నాలుగు గంటలు నానబెట్టండి." },
        { en: "Then grind it with ginger and green chillies.", te: "తర్వాత అల్లం, పచ్చిమిర్చి వేసి రుబ్బండి." },
        { en: "Add a little salt and some water.", te: "కొంచెం ఉప్పు, కొన్ని నీళ్ళు కలపండి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words for each step", te: "ఒక్కో step కి మాట" },
      items: [
        {
          form: "soak",
          useFor: { en: "Keep it in water for some hours.", te: "కొన్ని గంటలు నీళ్ళలో ఉంచడం." },
          example: { en: "Soak the rice for two hours.", te: "బియ్యం రెండు గంటలు నానబెట్టండి." },
        },
        {
          form: "grind",
          useFor: { en: "Make a paste in the mixer or the grinder.", te: "mixer లో గానీ grinder లో గానీ మెత్తగా చేయడం." },
          example: { en: "Then grind it with ginger and green chillies.", te: "తర్వాత అల్లం, పచ్చిమిర్చి వేసి రుబ్బండి." },
        },
        {
          form: "spread",
          useFor: { en: "Make the batter thin and round on the tawa.", te: "పెనం మీద పిండిని పల్చగా, గుండ్రంగా పరచడం." },
          example: { en: "Spread the batter thin on a hot tawa.", te: "వేడి పెనం మీద పిండిని పల్చగా పరచండి." },
        },
        {
          form: "a few drops / a little salt",
          useFor: { en: "Small amounts: a few for things you count, a little for the rest.", te: "కొంచెం కొలతలు: లెక్కపెట్టేవాటికి a few, మిగతావాటికి a little." },
          example: { en: "Pour a few drops of oil around it.", te: "దాని చుట్టూ కొన్ని చుక్కల నూనె వేయండి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Soak the green gram since four hours.",
      right: "Soak the green gram for four hours.",
      why: {
        en: "For how long, use for; since is for a starting point, like since Monday.",
        te: "ఎంతసేపు అని చెప్పడానికి for; since అంటే 'ఎప్పటి నుంచి' (since Monday). తెలుగు 'నుంచి' వల్ల since అనేస్తాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "How you make pesarattu?",
      right: "How do you make pesarattu?",
      why: {
        en: "A question with how needs do before you; Telugu ఎలా చేస్తారు? has no extra word.",
        te: "how తో అడిగే ప్రశ్నలో you ముందు do కావాలి; తెలుగు 'ఎలా చేస్తారు?' లో అలాంటి పదం ఉండదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "fillBlank",
      fixIt: "plural",
      sentence: "Soak two ___ of green gram for four hours.",
      te: "రెండు కప్పుల పెసలు నాలుగు గంటలు నానబెట్టండి.",
      options: ["cups", "cup", "glass"],
      answer: 0,
      why: {
        en: "After two or more, a measure like cup or glass takes s.",
        te: "రెండు, మూడు అన్నప్పుడు cup, glass లాంటి కొలతలకి s చేరుతుంది.",
      },
    },
    {
      id: "p2",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Tell your guest about your neighbour Krishna. He makes pesarattu every Sunday.",
        te: "మీ పక్కింటి కృష్ణ గారి గురించి అతిథికి చెప్పండి. ఆయన ప్రతి ఆదివారం పెసరట్టు చేస్తారు.",
      },
      options: ["Krishna makes pesarattu every Sunday.", "Krishna make pesarattu every Sunday.", "Krishna is making pesarattu every Sunday."],
      answer: 0,
      why: {
        en: "A habit of one person takes the plain verb with s, not is with -ing.",
        te: "ఒక్కరి అలవాటుకి verb కి s చేరుతుంది; is + -ing రాదు.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "recipe",
      heading: "Krishna's Pesarattu",
      lines: [
        "For four people, you need:",
        "two cups of green gram, a handful of rice,",
        "a small piece of ginger and two green chillies,",
        "a little salt and a few spoons of oil.",
        "First, soak the green gram and rice for four hours.",
        "Then grind them with the ginger and chillies.",
        "Add a little salt and some water to make a thick batter.",
        "Heat the tawa and spread one ladle of batter thin.",
        "Pour a few drops of oil around it.",
        "Cook until it is golden, then fold it.",
        "Serve it hot with ginger chutney or upma.",
      ],
      questions: [
        {
          prompt: { en: "How long do you soak the green gram?", te: "పెసలు ఎంతసేపు నానబెట్టాలి?" },
          options: ["Four hours", "Ten minutes", "Two days"],
          answer: 0,
          why: {
            en: "The step that starts with First gives the time, before you grind.",
            te: "First తో మొదలయ్యే step లో, రుబ్బే ముందు ఎంతసేపో ఉంది.",
          },
        },
        {
          prompt: { en: "What do you grind with the green gram?", te: "పెసలతో పాటు ఏం వేసి రుబ్బాలి?" },
          options: ["Ginger and green chillies", "Onions and tomatoes", "Sugar and milk"],
          answer: 0,
          why: {
            en: "The step that starts with Then names two things to grind with it.",
            te: "Then తో మొదలయ్యే step లో దానితో కలిపి రుబ్బే రెండు వస్తువులు ఉన్నాయి.",
          },
        },
        {
          prompt: { en: "What can you serve it with?", te: "దీన్ని దేనితో వడ్డించొచ్చు?" },
          options: ["Ginger chutney or upma", "Sambar or rasam", "Curd rice"],
          answer: 0,
          why: {
            en: "The last line of the recipe names two things to put next to it.",
            te: "recipe చివరి లైన్‌లో దానితో పాటు పెట్టే రెండు వస్తువులు ఉన్నాయి.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "be",
      sentence: "The batter too thick. Add some water.",
      wrongIndex: 2,
      fix: "The batter is too thick. Add some water.",
      why: {
        en: "English needs is between the batter and too thick; Telugu పిండి చిక్కగా ఉంది puts its verb last.",
        te: "ఇంగ్లీష్‌లో the batter, too thick మధ్య is కావాలి; తెలుగులో 'ఉంది' చివర వస్తుంది కాబట్టి మరిచిపోతాం.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend made very tasty pesarattu. Ask her how she makes it.",
        te: "మీ స్నేహితురాలు చాలా రుచిగా పెసరట్టు చేశారు. ఎలా చేస్తారో ఆవిడని అడగండి.",
      },
      expected: ["How do you make pesarattu?", "How do you make it?", "How did you make this pesarattu?"],
      options: ["How do you make pesarattu?", "How you make pesarattu?", "How do you making pesarattu?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A neighbour asks how to make pesarattu. Tell her the first step: soak the green gram for four hours.",
        te: "పెసరట్టు ఎలా చేయాలని పక్కింటావిడ అడుగుతున్నారు. మొదటి step చెప్పండి: పెసలు నాలుగు గంటలు నానబెట్టాలి.",
      },
      expected: ["First, soak the green gram for four hours.", "First, soak the green gram.", "Soak the green gram for four hours."],
      options: ["First, soak the green gram for four hours.", "First, soak the green gram since four hours.", "First, soaking the green gram for four hours."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Krishna's pesarattu", te: "కృష్ణ గారి పెసరట్టు" },
    scene: {
      en: "Your friend Krishna has made pesarattu for you at his house. You love it and want to make it at home.",
      te: "మీ స్నేహితుడు కృష్ణ గారు వాళ్ళింట్లో మీకోసం పెసరట్టు చేశారు. మీకు చాలా నచ్చింది, ఇంట్లో చేయాలనుకుంటున్నారు.",
    },
    partner: { en: "Krishna (your friend)", te: "కృష్ణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "ask", label: { en: "Asking about a recipe", te: "వంట గురించి అడగడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Here's your pesarattu, with ginger chutney. How is it?",
        te: "ఇదిగోండి పెసరట్టు, అల్లం చట్నీతో. ఎలా ఉంది?",
        hint: { en: "Say it is very tasty, and ask how he makes it.", te: "చాలా రుచిగా ఉందని చెప్పి, ఎలా చేస్తారో అడగండి." },
        replies: [
          { say: "It's very tasty! How do you make it?", good: true, skill: "ask" },
          { say: "It's very tasty! How you make it?", good: false, skill: "ask", fixIt: "question" },
        ],
      },
      {
        partner: "It's easy. First, soak the green gram for four hours.",
        te: "చాలా సులువు. ముందు పెసలు నాలుగు గంటలు నానబెట్టాలి.",
        hint: { en: "Repeat the step as a question, to check you heard it right.", te: "సరిగ్గా విన్నారో లేదో చూసుకోడానికి, ఆ step నే ప్రశ్నగా మళ్ళీ అడగండి." },
        replies: [
          { say: "So I soak it for four hours?", good: true, skill: "ask" },
          { say: "So I soak it since four hours?", good: false, skill: "ask", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes. I add a little rice too. It makes the pesarattu crisp.",
        te: "అవును. కొంచెం బియ్యం కూడా వేస్తాను. పెసరట్టు కరకరలాడుతుంది.",
        hint: { en: "Ask how long to cook it on the tawa.", te: "పెనం మీద ఎంతసేపు కాల్చాలో అడగండి." },
        replies: [
          { say: "How long do I cook it on the tawa?", good: true, skill: "ask" },
          {
            say: "That's all? My pesarattu is better than yours.",
            good: false,
            skill: "polite",
            react: { en: "Ha! Then next time, you cook for me.", te: "హహ! అయితే ఈసారి మీరే నాకు వండి పెట్టండి." },
          },
        ],
      },
      {
        partner: "Until it's golden, about two minutes. Shall I write it down?",
        te: "బంగారు రంగు వచ్చేదాకా, రెండు నిమిషాలు. రాసి ఇవ్వనా?",
        hint: { en: "Say yes, thank him, and say you will try it on Sunday.", te: "సరే అని, థ్యాంక్స్ చెప్పి, ఆదివారం చేసి చూస్తానని చెప్పండి." },
        replies: [
          { say: "Yes, please. Thank you! I'll try it on Sunday.", good: true, skill: "polite" },
          { say: "Yes, please. Thank you! I'll trying it on Sunday.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

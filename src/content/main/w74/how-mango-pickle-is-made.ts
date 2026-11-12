import type { Lesson } from "../../types";

/** Week 74, Day 5 (CURRICULUM §5): the passive and steps to explain a process from home — The mangoes are cut into pieces and dried. Then chilli powder, mustard and oil are added. */
export const day: Lesson = {
  id: "how-mango-pickle-is-made",
  kind: "lesson",
  title: { en: "How Avakaya Is Made", te: "ఆవకాయ ఎలా పెడతారు" },
  subtitle: "are cut, are dried, are added",
  summary: {
    en: "Learn to explain how a dish from home is made: The mangoes are cut into pieces. Then chilli powder, mustard and oil are added.",
    te: "మన ఇంటి వంటకం ఎలా చేస్తారో చెప్పడం నేర్చుకుందాం: The mangoes are cut into pieces. Then chilli powder, mustard and oil are added.",
  },
  seo: {
    title: "Explaining a Recipe in English for Telugu Speakers",
    description:
      "Say The mangoes are cut into pieces. Then chilli powder, mustard and oil are added. Simple lessons for Telugu speakers on avakaya.",
  },
  pattern: [
    { text: "The mangoes", role: "who" },
    { text: "are cut", role: "action" },
    { text: "into pieces", role: "what" },
  ],
  core: [
    { en: "The mangoes are cut into pieces.", te: "మామిడికాయల్ని ముక్కలుగా కోస్తారు.", extra: ["is"] },
    { en: "Then the pieces are dried with a clean cloth.", te: "తర్వాత ముక్కల్ని శుభ్రమైన గుడ్డతో తుడిచి ఆరబెడతారు.", extra: ["dry"] },
    { en: "Then chilli powder, mustard and oil are added.", te: "తర్వాత కారం, ఆవపిండి, నూనె కలుపుతారు.", extra: ["adds"] },
    { en: "How is avakaya made?", te: "ఆవకాయ ఎలా పెడతారు?", extra: ["does"] },
    { en: "Everything is mixed well and kept in a jar.", te: "అన్నీ బాగా కలిపి జాడీలో పెడతారు.", extra: ["mix"] },
    { en: "Sour green mangoes are used, not ripe ones.", te: "పండినవి కాదు, పుల్లని పచ్చి మామిడికాయలు వాడతారు.", extra: ["use"] },
    { en: "After three days, it is mixed again and ready to eat.", te: "మూడు రోజుల తర్వాత మళ్ళీ కలుపుతారు, అప్పుడు తినడానికి రెడీ.", extra: ["day"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one dish you know well. Say two of its steps aloud, like: First, the rice is washed.",
    te: "మీకు బాగా తెలిసిన ఒక వంటకం గుర్తు చేసుకోండి. దాని రెండు steps గట్టిగా చెప్పండి, ఇలా: First, the rice is washed.",
  },
  words: [
    { en: "avakaya", te: "ఆవకాయ" },
    { en: "mustard", te: "ఆవాలు, ఆవపిండి" },
    { en: "chilli powder", te: "కారం" },
    { en: "jar", te: "జాడీ" },
    { en: "sesame oil", te: "నువ్వుల నూనె" },
  ],
  grammar: ["passive-voice", "connectors", "plurals-countable"],
  topics: ["food", "home", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Explaining how food is made", te: "వంట ఎలా చేస్తారో చెప్పడం" },
      body: {
        en: "To explain a dish, start each step with the food. Then say is or are and the done form: The mangoes are cut into pieces.",
        te: "ఒక వంటకం గురించి చెప్పాలంటే, ప్రతి step ని ఆ పదార్థంతో మొదలుపెట్టండి. తర్వాత is లేదా are, పూర్తయిన రూపం: The mangoes are cut into pieces.",
      },
      bridge: {
        te: ["మామిడికాయల్ని", "ముక్కలుగా", "కోస్తారు"],
        en: [
          { text: "The mangoes", role: "who" },
          { text: "are cut", role: "action" },
          { text: "into pieces", role: "what" },
        ],
      },
      examples: [
        { en: "The mangoes are cut into pieces.", te: "మామిడికాయల్ని ముక్కలుగా కోస్తారు." },
        { en: "Then the pieces are dried with a clean cloth.", te: "తర్వాత ముక్కల్ని శుభ్రమైన గుడ్డతో తుడిచి ఆరబెడతారు." },
        { en: "Then chilli powder, mustard and oil are added.", te: "తర్వాత కారం, ఆవపిండి, నూనె కలుపుతారు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "is or are in a recipe", te: "వంటలో is ఆ, are ఆ" },
      items: [
        {
          form: "are cut / are dried",
          useFor: { en: "Things we count: mangoes, pieces.", te: "లెక్కపెట్టేవి: మామిడికాయలు, ముక్కలు." },
          example: { en: "The mangoes are cut into pieces.", te: "మామిడికాయల్ని ముక్కలుగా కోస్తారు." },
        },
        {
          form: "is added / is mixed",
          useFor: { en: "Things we don't count: salt, oil, powder.", te: "లెక్కపెట్టనివి: ఉప్పు, నూనె, పొడి." },
          example: { en: "Salt is added with the chilli powder.", te: "కారంతో పాటు ఉప్పు కూడా కలుపుతారు." },
        },
        {
          form: "… and … are added",
          useFor: { en: "Two or more things together take are.", te: "రెండు మూడు కలిపి చెప్తే are." },
          example: { en: "Then chilli powder, mustard and oil are added.", te: "తర్వాత కారం, ఆవపిండి, నూనె కలుపుతారు." },
        },
        {
          form: "cut into pieces",
          useFor: { en: "Into tells what the mango becomes.", te: "మామిడికాయ ఏమవుతుందో into చెప్తుంది." },
          example: { en: "Each mango is cut into small pieces.", te: "ఒక్కో మామిడికాయని చిన్న ముక్కలుగా కోస్తారు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "plural",
      wrong: "Two kilo of mangoes are needed.",
      right: "Two kilos of mangoes are needed.",
      why: {
        en: "After two, kilo takes s, just as Telugu says కిలోలు.",
        te: "రెండు తర్వాత kilo కి s కావాలి; తెలుగులోనూ 'కిలోలు' అంటాం.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "My aunt make avakaya every summer.",
      right: "My aunt makes avakaya every summer.",
      why: {
        en: "For one person's habit, like she, the verb takes s.",
        te: "ఒక్కరి అలవాటు గురించి (she లాగా) చెప్తే verb కి s వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "article",
      prompt: {
        en: "A visitor asks where the pickle is kept. Say a big jar.",
        te: "పచ్చడిని దేంట్లో పెడతారని visitor అడుగుతున్నారు. పెద్ద జాడీలో అని చెప్పండి.",
      },
      options: ["It is kept in a big jar.", "It is kept in big jar.", "It kept in a big jar."],
      answer: 0,
      why: {
        en: "One jar needs a before it; Telugu జాడీలో has no word like a.",
        te: "ఒక జాడీ కాబట్టి a కావాలి; తెలుగు 'జాడీలో' లో a లాంటి పదం లేదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "Everything is mixed well and kept ___ a jar.",
      te: "అన్నీ బాగా కలిపి జాడీలో పెడతారు.",
      options: ["in", "on", "at"],
      answer: 0,
      why: {
        en: "Something inside a jar or a box takes in, like Telugu లో.",
        te: "జాడీ, డబ్బా లోపల ఉంటే in; తెలుగు 'లో' లాగా.",
      },
    },
    {
      id: "p3",
      type: "passage",
      kind: "recipe",
      heading: "Avakaya at Home",
      lines: [
        "You need ten sour green mangoes.",
        "One cup of chilli powder and one cup of mustard powder.",
        "Some salt, and two cups of sesame oil or groundnut oil.",
        "First, the mangoes are washed and dried well.",
        "Then they are cut into pieces, with the hard shell.",
        "The pieces are wiped with a dry cloth.",
        "The powders and salt are mixed with the pieces.",
        "Everything is put in a dry jar, and the oil is poured on top.",
        "After three days, the pickle is mixed well again.",
        "Always use a dry spoon, or the pickle spoils.",
      ],
      questions: [
        {
          prompt: { en: "Which mangoes are used for avakaya?", te: "ఆవకాయకి ఎలాంటి మామిడికాయలు వాడతారు?" },
          options: ["Sour green mangoes", "Sweet ripe mangoes", "Dried mangoes"],
          answer: 0,
          why: {
            en: "The first line asks for mangoes that are still green and sour.",
            te: "మొదటి లైన్‌లో పుల్లని, పచ్చి మామిడికాయలు కావాలని ఉంది.",
          },
        },
        {
          prompt: { en: "What is done after three days?", te: "మూడు రోజుల తర్వాత ఏం చేస్తారు?" },
          options: ["The pickle is mixed again.", "The oil is thrown away.", "The mangoes are washed."],
          answer: 0,
          why: {
            en: "The line about three days says the pickle is stirred well once more.",
            te: "మూడు రోజుల గురించిన లైన్‌లో, పచ్చడిని మళ్ళీ బాగా కలుపుతారని ఉంది.",
          },
        },
        {
          prompt: { en: "Why should you use a dry spoon?", te: "పొడి స్పూన్ ఎందుకు వాడాలి?" },
          options: ["A wet spoon spoils the pickle.", "A dry spoon is cheaper.", "The jar is too small."],
          answer: 0,
          why: {
            en: "The last line warns that water makes the pickle go bad.",
            te: "నీళ్ళు తగిలితే పచ్చడి పాడైపోతుందని చివరి లైన్ చెప్తోంది.",
          },
        },
      ],
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Then chilli powder, mustard and oil is added.",
      wrongIndex: 6,
      fix: "Then chilli powder, mustard and oil are added.",
      why: {
        en: "Three things joined with and take are; is is only for one thing.",
        te: "and తో మూడు కలిపి చెప్తే are; is ఒక్కదానికే.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A visitor from Delhi asks what avakaya is made from. Tell her the four things.",
        te: "ఢిల్లీ నుంచి వచ్చిన ఒకావిడ ఆవకాయ దేంతో చేస్తారని అడుగుతున్నారు. ఆ నాలుగు పదార్థాలు చెప్పండి.",
      },
      expected: [
        "It is made from green mangoes, chilli powder, mustard and oil.",
        "It's made from green mangoes, chilli powder, mustard and oil.",
        "Green mangoes, chilli powder, mustard and oil.",
      ],
      options: [
        "It is made from green mangoes, chilli powder, mustard and oil.",
        "It made from green mangoes, chilli powder, mustard and oil.",
        "It is made from green mango, chilli powder, mustard and oil.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour asks what you do first with the mangoes. Say they are cut into pieces.",
        te: "మామిడికాయలతో ముందు ఏం చేస్తారని పక్కింటివారు అడుగుతున్నారు. ముక్కలుగా కోస్తారని చెప్పండి.",
      },
      expected: ["First, the mangoes are cut into pieces.", "First, they are cut into pieces.", "The mangoes are cut into pieces."],
      options: ["First, the mangoes are cut into pieces.", "First, the mangoes are cutting into pieces.", "First, the mangoes cut into pieces."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Avakaya for a visitor", te: "అతిథికి ఆవకాయ" },
    scene: {
      en: "Your friend's colleague Kumar is visiting from Lucknow. At lunch, he tastes avakaya for the first time.",
      te: "మీ స్నేహితుడి సహోద్యోగి కుమార్ గారు లక్నో నుంచి వచ్చారు. భోజనంలో మొదటిసారి ఆవకాయ రుచి చూస్తున్నారు.",
    },
    partner: { en: "Kumar (a visitor from Lucknow)", te: "కుమార్ (లక్నో నుంచి వచ్చిన అతిథి)" },
    voice: "b",
    skills: [
      { id: "process", label: { en: "Explaining a recipe", te: "వంటకం ఎలా చేస్తారో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "This pickle is very tasty, but very spicy! What is it?",
        te: "ఈ పచ్చడి చాలా రుచిగా ఉంది, కానీ చాలా కారం! ఇది ఏంటి?",
        hint: { en: "Tell him its name, and what fruit it comes from.", te: "దాని పేరు, అది ఏ కాయతో చేస్తారో చెప్పండి." },
        replies: [
          { say: "It's avakaya. It is made from green mangoes.", good: true, skill: "process" },
          { say: "This is avakaya, a mango pickle from Andhra.", good: true, skill: "process" },
          {
            say: "Too spicy for you? You North people can't eat spice!",
            good: false,
            skill: "polite",
            react: { en: "Ha! I can try. Just a little more, please.", te: "హహ! ప్రయత్నిస్తాను. ఇంకొంచెం వేయండి." },
          },
        ],
      },
      {
        partner: "How is it made? Is it cooked?",
        te: "దీన్ని ఎలా చేస్తారు? వండుతారా?",
        hint: { en: "Say no, and give the first step.", te: "లేదని చెప్పి, మొదటి step చెప్పండి." },
        replies: [
          { say: "No, it isn't cooked. First, the mangoes are cut into pieces.", good: true, skill: "process" },
          { say: "No, it isn't cooked. First, the mangoes is cut into pieces.", good: false, skill: "process", fixIt: "plural" },
        ],
      },
      {
        partner: "And then? What gives it this red colour?",
        te: "తర్వాత? దీనికి ఈ ఎర్ర రంగు ఎలా వస్తుంది?",
        hint: { en: "Say what is added next, and where it is kept.", te: "తర్వాత ఏం కలుపుతారో, దాన్ని ఎక్కడ పెడతారో చెప్పండి." },
        replies: [
          { say: "Chilli powder, mustard and oil are added. Then it's kept in a jar.", good: true, skill: "process" },
          { say: "Chilli powder, mustard and oil are added. Then it's kept in jar.", good: false, skill: "process", fixIt: "article" },
        ],
      },
      {
        partner: "Wonderful. I want to take some home to Lucknow!",
        te: "అద్భుతం. కొంచెం లక్నోకి తీసుకెళ్ళాలని ఉంది!",
        hint: { en: "Offer to pack a small jar for him.", te: "ఆయన కోసం ఒక చిన్న జాడీలో ప్యాక్ చేస్తానని చెప్పండి." },
        replies: [
          { say: "Of course! I'll pack a small jar for you.", good: true, skill: "polite" },
          { say: "Of course! I'll pack a small jar to you.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

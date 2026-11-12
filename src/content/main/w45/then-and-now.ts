import type { Lesson } from "../../types";

/** Week 45, Day 2 (CURRICULUM §5): comparatives for change — The town is much bigger now. */
export const day: Lesson = {
  id: "then-and-now",
  kind: "lesson",
  title: { en: "Then and Now", te: "అప్పుడు, ఇప్పుడు" },
  subtitle: "much bigger now, busier than before",
  summary: {
    en: "Learn to say how a place has changed: The town is much bigger now. The roads are busier than before.",
    te: "ఒక ఊరు ఎలా మారిందో చెప్పడం నేర్చుకుందాం: The town is much bigger now. The roads are busier than before.",
  },
  seo: {
    title: "Talking About Changes in English for Telugu Speakers",
    description:
      "Say The town is much bigger now and The roads are busier than before. Simple lessons for Telugu speakers on how a place has changed.",
  },
  pattern: [
    { text: "The town", role: "who" },
    { text: "is", role: "action" },
    { text: "much bigger", role: "what" },
    { text: "now", role: "when" },
  ],
  core: [
    { en: "The town is much bigger now.", te: "ఊరు ఇప్పుడు అప్పటికంటే చాలా పెద్దది.", extra: ["more"] },
    { en: "The roads are busier than before.", te: "రోడ్లు ఇదివరకటి కంటే రద్దీగా ఉన్నాయి.", extra: ["then"] },
    { en: "It was much quieter then.", te: "అప్పుడు చాలా ప్రశాంతంగా ఉండేది.", extra: ["than"] },
    { en: "The air was cleaner in those days.", te: "ఆ రోజుల్లో గాలి ఇంకా శుభ్రంగా ఉండేది.", extra: ["more"] },
    { en: "There are many more apartments now.", te: "ఇప్పుడు అపార్ట్‌మెంట్లు చాలా ఎక్కువయ్యాయి.", extra: ["much"] },
    { en: "There was no flyover then; now there are two.", te: "అప్పుడు ఫ్లైఓవర్ లేదు; ఇప్పుడు రెండు ఉన్నాయి." },
    { en: "My town has changed a lot in fifty years.", te: "యాభై ఏళ్ళలో మా ఊరు చాలా మారిపోయింది." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one place in your town. Say how it has changed: It is … now.",
    te: "మీ ఊర్లో ఒక చోటు గుర్తు చేసుకోండి. అది ఎలా మారిందో చెప్పండి: It is … now.",
  },
  words: [
    { en: "population", te: "జనాభా" },
    { en: "flyover", te: "ఫ్లైఓవర్" },
    { en: "apartment", te: "అపార్ట్‌మెంట్" },
    { en: "changed a lot", te: "చాలా మారిపోయింది" },
    { en: "than before", te: "ఇదివరకటి కంటే" },
  ],
  grammar: ["comparatives-superlatives", "was-were", "present-perfect"],
  topics: ["people", "time", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Then and now", te: "అప్పుడు, ఇప్పుడు" },
      body: {
        en: "To show a change, compare now with then, using -er or more. Much makes the change bigger: The town is much bigger now.",
        te: "మార్పు చెప్పాలంటే ఇప్పటిని అప్పటితో పోల్చండి: -er లేదా more వాడండి. much అంటే 'చాలా': The town is much bigger now.",
      },
      bridge: {
        te: ["ఊరు", "ఇప్పుడు", "చాలా పెద్దది"],
        en: [
          { text: "The town", role: "who" },
          { text: "is", role: "action" },
          { text: "much bigger", role: "what" },
          { text: "now", role: "when" },
        ],
      },
      examples: [
        { en: "The town is much bigger now.", te: "ఊరు ఇప్పుడు అప్పటికంటే చాలా పెద్దది." },
        { en: "The roads are busier than before.", te: "రోడ్లు ఇదివరకటి కంటే రద్దీగా ఉన్నాయి." },
        { en: "It was much quieter then.", te: "అప్పుడు చాలా ప్రశాంతంగా ఉండేది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Then or than?", te: "then ఆ, than ఆ?" },
      items: [
        {
          form: "then",
          useFor: { en: "At that time, in the past.", te: "ఆ రోజుల్లో, అప్పుడు." },
          example: { en: "It was much quieter then.", te: "అప్పుడు చాలా ప్రశాంతంగా ఉండేది." },
        },
        {
          form: "than",
          useFor: { en: "To compare two things, like Telugu కంటే.", te: "రెండిటిని పోల్చడానికి, 'కంటే' లాగా." },
          example: { en: "The roads are busier than before.", te: "రోడ్లు ఇదివరకటి కంటే రద్దీగా ఉన్నాయి." },
        },
        {
          form: "much + -er",
          useFor: { en: "A big change.", te: "పెద్ద మార్పు చెప్పడానికి." },
          example: { en: "The population is much bigger now.", te: "ఇప్పుడు జనాభా చాలా ఎక్కువ." },
        },
        {
          form: "more + a long word",
          useFor: { en: "Long words take more, not -er.", te: "పెద్ద పదాలకి -er కాదు, ముందు more." },
          example: { en: "The town is more crowded than before.", te: "ఊరు ఇదివరకటి కంటే ఎక్కువ రద్దీగా ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I am living here since nineteen seventy-five.",
      right: "I have lived here since nineteen seventy-five.",
      why: {
        en: "With since, English uses have lived; Telugu ఉంటున్నాను uses the present, so we copy it.",
        te: "since తో have lived అనాలి; తెలుగులో 'ఉంటున్నాను' అని ఇప్పటి కాలం వాడతాం, అందుకే ఈ తప్పు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "The roads are more busier now.",
      right: "The roads are much busier now.",
      why: {
        en: "Busier already means more busy, so do not add more; use much for a big change.",
        te: "busier అంటేనే 'ఇంకా ఎక్కువ రద్దీ'; దానికి more చేర్చకూడదు. పెద్ద మార్పుకి much వాడండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: {
        en: "A visitor asks about your town's roads. There is much more traffic now. What do you say?",
        te: "మీ ఊరి రోడ్ల గురించి ఒక అతిథి అడుగుతున్నారు. ఇప్పుడు ట్రాఫిక్ చాలా ఎక్కువ. ఏమంటారు?",
      },
      options: ["The roads are busier than before.", "The roads are busier then before.", "The roads busier than before."],
      answer: 0,
      why: {
        en: "English needs are before busier, and it compares with than, not then.",
        te: "busier ముందు are కావాలి; పోల్చేటప్పుడు then కాదు, than.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It was much quieter ___.",
      te: "అప్పుడు చాలా ప్రశాంతంగా ఉండేది.",
      options: ["then", "than", "now"],
      answer: 0,
      why: {
        en: "Then means at that time; than is only for comparing two things.",
        te: "then అంటే 'అప్పుడు'; than రెండిటిని పోల్చడానికి మాత్రమే.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Ramesh",
      lines: ["Look at this old photo!", "Our bus stand in 1978.", "There was only one bus a day, at 8 am.", "Now there are buses every ten minutes!"],
      prompt: {
        en: "Your friend Ramesh sent this. How many buses came each day back then?",
        te: "మీ స్నేహితుడు రమేష్ గారు ఇది పంపారు. అప్పట్లో రోజుకి ఎన్ని బస్సులు వచ్చేవి?",
      },
      options: ["Only one", "One every ten minutes", "Eight"],
      answer: 0,
      why: {
        en: "The third line says only one bus came each day in those days.",
        te: "మూడో లైన్‌లో, ఆ రోజుల్లో రోజుకి ఒక్క బస్సే వచ్చేదని ఉంది.",
      },
      say: "There was only one bus a day, at 8 am.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The town look very different now.",
      wrongIndex: 2,
      fix: "The town looks very different now.",
      why: {
        en: "One town is like he or she, so the verb takes s.",
        te: "ఒక్క ఊరు అంటే he, she లాంటిదే; అందుకే verb కి s వస్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A visitor asks if your town has changed. Say it is much bigger now.",
        te: "మీ ఊరు మారిందా అని ఒక అతిథి అడుగుతున్నారు. ఇప్పుడు చాలా పెద్దదైందని చెప్పండి.",
      },
      expected: ["Yes, it's much bigger now.", "Yes, it is much bigger now.", "The town is much bigger now.", "Yes, the town is much bigger now."],
      options: ["Yes, it's much bigger now.", "Yes, it's much more bigger now.", "Yes, it much bigger now."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have lived in this town. Say since nineteen eighty.",
        te: "ఈ ఊర్లో ఎంత కాలంగా ఉంటున్నారని కొత్త పక్కింటివారు అడుగుతున్నారు. 1980 నుంచి అని చెప్పండి.",
      },
      expected: ["I've lived here since nineteen eighty.", "I have lived here since nineteen eighty.", "Since nineteen eighty."],
      options: ["I've lived here since nineteen eighty.", "I am living here since nineteen eighty.", "I live here from nineteen eighty."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Back after fifty years", te: "యాభై ఏళ్ళ తర్వాత" },
    scene: {
      en: "Your old friend Imran is visiting your town after fifty years. You walk with him to the market.",
      te: "మీ పాత స్నేహితుడు ఇమ్రాన్ గారు యాభై ఏళ్ళ తర్వాత మీ ఊరికి వచ్చారు. ఆయనతో కలిసి మార్కెట్‌కి నడుస్తున్నారు.",
    },
    partner: { en: "Imran (your old friend)", te: "ఇమ్రాన్ (మీ పాత స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "change", label: { en: "Saying what has changed", te: "ఏం మారిందో చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I can't believe it! The town looks so different.",
        te: "నమ్మలేకపోతున్నాను! ఊరు చాలా వేరుగా కనిపిస్తోంది.",
        hint: { en: "Agree, and say how its size has changed.", te: "ఒప్పుకుని, ఊరి సైజు ఎలా మారిందో చెప్పండి." },
        replies: [
          { say: "Yes, it's much bigger now.", good: true, skill: "change" },
          { say: "Yes, it has changed a lot.", good: true, skill: "change" },
          { say: "Yes, it's more bigger now.", good: false, skill: "change" },
        ],
      },
      {
        partner: "Where is the big pond? There was a pond here.",
        te: "పెద్ద చెరువు ఎక్కడ? ఇక్కడ ఒక చెరువు ఉండేది.",
        hint: { en: "Say it is gone, and that apartments stand there now.", te: "అది లేదని, ఇప్పుడు అక్కడ అపార్ట్‌మెంట్లు ఉన్నాయని చెప్పండి." },
        replies: [
          { say: "It's gone now. There are apartments there.", good: true, skill: "change" },
          { say: "It's gone now. There is apartments there.", good: false, skill: "change" },
        ],
      },
      {
        partner: "And the roads! So many cars and bikes.",
        te: "ఇక రోడ్లు! ఎన్ని కార్లు, ఎన్ని బైకులు.",
        hint: { en: "Agree: compare the roads now with the past.", te: "ఒప్పుకోండి: ఇప్పటి రోడ్లని అప్పటితో పోల్చండి." },
        replies: [
          { say: "Yes, the roads are busier than before. It was quieter then.", good: true, skill: "change" },
          {
            say: "What did you expect? Did you think time stopped?",
            good: false,
            skill: "polite",
            react: { en: "Ha! Okay, okay. I'm just surprised.", te: "హా! సరే, సరే. ఆశ్చర్యంగా ఉంది అంతే." },
          },
        ],
      },
      {
        partner: "But the temple looks the same. That's nice.",
        te: "కానీ గుడి మాత్రం అలాగే ఉంది. అది బాగుంది.",
        hint: { en: "Agree, and invite him home for coffee.", te: "ఒప్పుకుని, కాఫీకి ఇంటికి రమ్మని పిలవండి." },
        replies: [
          { say: "Yes, it does. Come, let's have coffee at my house.", good: true, skill: "polite" },
          { say: "Yes, it do. Come, let's have coffee at my house.", good: false, skill: "polite", fixIt: "he-she-s" },
        ],
      },
    ],
  },
};

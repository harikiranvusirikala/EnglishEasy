import type { Lesson } from "../../types";

/** Week 54, Day 1 (CURRICULUM §5): Checkpoint 4 mix — story order, used to, and the past simple vs the present perfect (Weeks 41–43). */
export const day: Lesson = {
  id: "stories-and-memories-mix",
  kind: "lesson",
  title: { en: "Stories and Memories", te: "కథలు, జ్ఞాపకాలు" },
  subtitle: "used to, one day, and since then",
  summary: {
    en: "Mix what you learned about stories: used to for old habits, the past for one day, and have for up to now.",
    te: "కథల గురించి నేర్చుకున్నవన్నీ కలిపి వాడదాం: పాత అలవాట్లకి used to, ఒక్క రోజు జరిగినదానికి past, ఇప్పటి దాకా ఉన్నదానికి have.",
  },
  seo: {
    title: "Telling Stories and Memories in English for Telugu Speakers",
    description:
      "Say We used to swim in the canal and One day the water rose suddenly. Simple lessons for Telugu speakers on telling memories.",
  },
  pattern: [
    { text: "We", role: "who" },
    { text: "used to swim", role: "action" },
    { text: "in the canal", role: "what" },
    { text: "every summer", role: "when" },
  ],
  core: [
    { en: "We used to swim in the canal every summer.", te: "ప్రతి ఎండాకాలం మేము కాలువలో ఈత కొట్టేవాళ్ళం.", extra: ["swam"] },
    { en: "One day the water rose suddenly.", te: "ఒక రోజు ఉన్నట్టుండి నీళ్ళు పెరిగిపోయాయి.", extra: ["rised"] },
    { en: "Luckily, a farmer pulled us out of the water.", te: "అదృష్టం కొద్దీ, ఒక రైతు మమ్మల్ని నీళ్ళలోంచి బయటికి లాగారు.", extra: ["pull"] },
    { en: "I have never forgotten that day.", te: "ఆ రోజుని నేను ఇప్పటికీ మర్చిపోలేదు.", extra: ["forgot"] },
    { en: "While we were swimming, it started to rain.", te: "మేము ఈత కొడుతుండగా వర్షం మొదలైంది.", extra: ["was"] },
    { en: "After that, we didn't swim there anymore.", te: "ఆ తర్వాత మేము అక్కడ ఇంక ఈత కొట్టలేదు.", extra: ["don't"] },
    { en: "I have visited that village many times since then.", te: "అప్పటి నుంచి ఆ ఊరికి చాలాసార్లు వెళ్ళొచ్చాను.", extra: ["visit"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell one memory from your school days to a friend or neighbour: a habit, one day, and how you feel now.",
    te: "మీ స్కూల్ రోజుల్లోని ఒక జ్ఞాపకం స్నేహితులకో, పక్కింటివారికో చెప్పండి: ఒక అలవాటు, ఒక రోజు జరిగింది, ఇప్పుడు మీకు ఎలా అనిపిస్తుంది.",
  },
  words: [
    { en: "canal", te: "కాలువ" },
    { en: "memory", te: "జ్ఞాపకం" },
    { en: "farmer", te: "రైతు" },
    { en: "pull out", te: "బయటికి లాగడం" },
    { en: "school days", te: "స్కూల్ రోజులు" },
  ],
  grammar: ["used-to-would", "past-simple", "past-continuous", "present-perfect"],
  topics: ["people", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Three kinds of past in a memory", te: "జ్ఞాపకంలో మూడు రకాల past" },
      body: {
        en: "Use used to for what happened again and again, and the past for one day. Have with a verb joins that day to now.",
        te: "మళ్ళీ మళ్ళీ జరిగినదానికి used to, ఒక్క రోజు జరిగినదానికి past వాడండి. ఆ రోజుని ఇప్పటితో కలపడానికి have + verb.",
      },
      bridge: {
        te: ["ప్రతి ఎండాకాలం", "మేము", "కాలువలో", "ఈత కొట్టేవాళ్ళం"],
        en: [
          { text: "We", role: "who" },
          { text: "used to swim", role: "action" },
          { text: "in the canal", role: "what" },
          { text: "every summer", role: "when" },
        ],
      },
      examples: [
        { en: "We used to swim in the canal every summer.", te: "ప్రతి ఎండాకాలం మేము కాలువలో ఈత కొట్టేవాళ్ళం." },
        { en: "One day the water rose suddenly.", te: "ఒక రోజు ఉన్నట్టుండి నీళ్ళు పెరిగిపోయాయి." },
        { en: "I have never forgotten that day.", te: "ఆ రోజుని నేను ఇప్పటికీ మర్చిపోలేదు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which past?", te: "ఏ past వాడాలి?" },
      items: [
        {
          form: "used to + verb",
          useFor: { en: "Again and again, long ago.", te: "చాలా కాలం క్రితం, మళ్ళీ మళ్ళీ జరిగినది." },
          example: { en: "We used to swim in the canal every summer.", te: "ప్రతి ఎండాకాలం మేము కాలువలో ఈత కొట్టేవాళ్ళం." },
        },
        {
          form: "was / were + -ing",
          useFor: { en: "What was going on at that time.", te: "ఆ సమయంలో జరుగుతూ ఉన్న పని." },
          example: { en: "While we were swimming, it started to rain.", te: "మేము ఈత కొడుతుండగా వర్షం మొదలైంది." },
        },
        {
          form: "past: rose, pulled",
          useFor: { en: "One event, on one day.", te: "ఒక్క రోజు, ఒక్కసారి జరిగిన సంఘటన." },
          example: { en: "Luckily, a farmer pulled us out of the water.", te: "అదృష్టం కొద్దీ, ఒక రైతు మమ్మల్ని నీళ్ళలోంచి బయటికి లాగారు." },
        },
        {
          form: "have + verb: have visited",
          useFor: { en: "From that time up to now.", te: "అప్పటి నుంచి ఇప్పటి వరకు." },
          example: { en: "I have visited that village many times since then.", te: "అప్పటి నుంచి ఆ ఊరికి చాలాసార్లు వెళ్ళొచ్చాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "As children, we were going to the canal daily.",
      right: "As children, we used to go to the canal every day.",
      why: {
        en: "For a habit long ago, use used to; were going is only for one moment.",
        te: "చాలా కాలం క్రితం అలవాటుకి used to వాడాలి; were going ఒక సమయంలో జరుగుతున్న పనికే.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Today morning I met my old classmate.",
      right: "This morning I met my old classmate.",
      why: {
        en: "English says this morning; Telugu ఈ రోజు ఉదయం makes us say today morning.",
        te: "ఇంగ్లీష్‌లో this morning అంటారు; 'ఈ రోజు ఉదయం' వల్ల today morning అనకూడదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: {
        en: "Your neighbour Joseph tells you a story from his boyhood. Ask how old he was then.",
        te: "పక్కింటి జోసెఫ్ గారు తన చిన్నప్పటి కథ చెప్తున్నారు. అప్పుడు ఆయన వయసు ఎంతో అడగండి.",
      },
      options: ["How old were you at that time?", "How old you were at that time?", "How much old were you at that time?"],
      answer: 0,
      why: {
        en: "In a question, were comes before you; Telugu keeps one order for both.",
        te: "ప్రశ్నలో were ని you కంటే ముందు పెట్టాలి; తెలుగులో వాక్యం, ప్రశ్న ఒకే వరుసలో ఉంటాయి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "duration",
      sentence: "I ___ that village many times since then.",
      te: "అప్పటి నుంచి ఆ ఊరికి చాలాసార్లు వెళ్ళొచ్చాను.",
      options: ["have visited", "visited", "am visiting"],
      answer: 0,
      why: {
        en: "Since then joins the past to now, so English needs have with visited.",
        te: "since then గతాన్ని ఇప్పటితో కలుపుతుంది, అందుకే have visited కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "Your friend asks: You didn't go back to that canal? You never went again.",
        te: "'You didn't go back to that canal?' అని స్నేహితులు అడుగుతున్నారు. మీరు మళ్ళీ ఎప్పుడూ వెళ్ళలేదు.",
      },
      options: ["No, we didn't. We were too scared.", "Yes, we didn't. We were too scared.", "No, we don't. We were too scared."],
      answer: 0,
      why: {
        en: "When you did not go, the answer is No with didn't, unlike Telugu అవును.",
        te: "మీరు వెళ్ళకపోతే, తెలుగులో 'అవును' అన్నా, ఇంగ్లీష్‌లో No, didn't అనాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Suddenly the water rised and we were scared.",
      wrongIndex: 3,
      fix: "Suddenly the water rose and we were scared.",
      why: {
        en: "Rise does not take -ed; its past form is rose.",
        te: "rise కి past లో -ed రాదు; దాని past form rose.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A young neighbour asks what you did in summer as a child. Say you used to swim in the canal.",
        te: "చిన్నప్పుడు ఎండాకాలంలో ఏం చేసేవారని పక్కింటి యువకుడు అడుగుతున్నారు. కాలువలో ఈత కొట్టేవాళ్ళమని చెప్పండి.",
      },
      expected: ["We used to swim in the canal.", "We used to swim in the canal every summer.", "I used to swim in the canal."],
      options: ["We used to swim in the canal.", "We were swimming in the canal daily.", "We use to swimming in the canal."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend asks how the story ended. Say luckily a farmer pulled you out.",
        te: "కథ ఎలా ముగిసిందని స్నేహితులు అడుగుతున్నారు. అదృష్టం కొద్దీ ఒక రైతు మిమ్మల్ని బయటికి లాగారని చెప్పండి.",
      },
      expected: ["Luckily, a farmer pulled us out.", "Luckily, a farmer pulled us out of the water.", "A farmer pulled us out of the water."],
      options: ["Luckily, a farmer pulled us out.", "Luckily, farmer pulled us out.", "Luckily, a farmer pull us out."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A story from school days", te: "స్కూల్ రోజుల కథ" },
    scene: {
      en: "You and your friend Narayana are resting on a bench after your morning walk. He asks about your school days.",
      te: "మీరు, మీ స్నేహితుడు నారాయణ గారు పొద్దుటి నడక తర్వాత బెంచీ మీద కూర్చున్నారు. ఆయన మీ స్కూల్ రోజుల గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Narayana (your friend)", te: "నారాయణ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Telling a story", te: "కథ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "So you grew up in a village? What were your school days like?",
        te: "అయితే మీరు ఊర్లో పెరిగారా? మీ స్కూల్ రోజులు ఎలా ఉండేవి?",
        hint: { en: "Say how you went to school every day back then.", te: "అప్పట్లో రోజూ స్కూల్‌కి ఎలా వెళ్ళేవారో చెప్పండి." },
        replies: [
          { say: "We used to walk three kilometres to school every day.", good: true, skill: "story" },
          { say: "We were walking three kilometres to school daily.", good: false, skill: "story", fixIt: "state-ing" },
        ],
      },
      {
        partner: "Three kilometres! Did anything exciting happen on the way?",
        te: "మూడు కిలోమీటర్లా! దారిలో ఏమైనా విశేషం జరిగిందా?",
        hint: {
          en: "Start your story: say what happened one day while you were swimming in the canal.",
          te: "కథ మొదలుపెట్టండి: ఒక రోజు కాలువలో ఈత కొడుతుండగా ఏం జరిగిందో చెప్పండి.",
        },
        replies: [
          { say: "Yes! One day, while we were swimming, the water rose suddenly.", good: true, skill: "story" },
          { say: "Yes! One day, while we swimming, the water rose suddenly.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! What happened next?",
        te: "అయ్యో! తర్వాత ఏమైంది?",
        hint: { en: "Say who helped you, and how it ended.", te: "మీకు ఎవరు సాయం చేశారో, చివరికి ఏమైందో చెప్పండి." },
        replies: [
          { say: "Luckily, a farmer pulled us out, and we were all safe.", good: true, skill: "story" },
          {
            say: "Wait! Don't ask so many questions. Let me finish.",
            good: false,
            skill: "polite",
            react: { en: "Sorry, sorry! Please go on.", te: "సారీ, సారీ! చెప్పండి, చెప్పండి." },
          },
        ],
      },
      {
        partner: "What a story! Do you ever go back to that village?",
        te: "ఎంత కథ! ఆ ఊరికి మళ్ళీ ఎప్పుడైనా వెళ్తుంటారా?",
        hint: { en: "Say yes, and how often you have been there since then.", te: "అవునని, అప్పటి నుంచి ఎన్నిసార్లు వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "Yes, I have visited it many times since then.", good: true, skill: "story" },
          { say: "Yes, I am going there many times since then.", good: false, skill: "story", fixIt: "duration" },
        ],
      },
    ],
  },
};

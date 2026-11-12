import type { Lesson } from "../../types";

/**
 * Week 54, Day 5 (CURRICULUM §5): the speaking mission lesson — a childhood story in one minute, with used to, the past
 * simple, the past continuous and sequence words (Weeks 41–42).
 */
export const day: Lesson = {
  id: "childhood-story-in-one-minute",
  kind: "lesson",
  title: { en: "A Story From My Childhood", te: "నా చిన్నప్పటి కథ" },
  subtitle: "a one-minute story, start to end",
  summary: {
    en: "Get ready to tell a childhood story in one minute: when and where, what was going on, what happened, and how you feel now.",
    te: "ఒక్క నిమిషంలో చిన్నప్పటి కథ చెప్పడానికి సిద్ధమవుదాం: ఎప్పుడు, ఎక్కడ; అప్పుడు ఏం జరుగుతోంది; ఏం జరిగింది; ఇప్పుడు ఎలా అనిపిస్తుంది.",
  },
  seo: {
    title: "Telling a Childhood Story in English for Telugu Speakers",
    description:
      "Say When I was ten, we used to live near a river. Simple lessons for Telugu speakers on telling a childhood story in one minute.",
  },
  pattern: [
    { text: "When I was ten,", role: "when" },
    { text: "we", role: "who" },
    { text: "used to live", role: "action" },
    { text: "near a river", role: "what" },
  ],
  core: [
    { en: "When I was ten, we used to live near a river.", te: "నాకు పదేళ్ళప్పుడు మేము ఒక నది దగ్గర ఉండేవాళ్ళం.", extra: ["lived"] },
    { en: "One evening, while we were playing, it started to rain.", te: "ఒక సాయంత్రం మేము ఆడుకుంటుండగా వర్షం మొదలైంది.", extra: ["was"] },
    { en: "Then we ran to the temple and waited there.", te: "అప్పుడు మేము గుడికి పరిగెత్తి, అక్కడే ఆగాం.", extra: ["run"] },
    { en: "Finally, my uncle came with an umbrella.", te: "చివరికి మా మామయ్య గొడుగు పట్టుకుని వచ్చారు.", extra: ["a"] },
    { en: "I still remember the smell of the wet earth.", te: "తడిసిన మట్టి వాసన నాకు ఇప్పటికీ గుర్తుంది." },
    { en: "It was the happiest day of my childhood.", te: "అది నా చిన్నతనంలో అన్నిటికంటే సంతోషమైన రోజు." },
    { en: "Even now, I love the rain because of that day.", te: "ఆ రోజు వల్లే ఇప్పటికీ నాకు వర్షం అంటే చాలా ఇష్టం." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick one day from your childhood. Tell it aloud in one minute: when, what was going on, what happened, how you feel now.",
    te: "మీ చిన్నతనంలోని ఒక రోజు ఎంచుకోండి. ఒక్క నిమిషంలో గట్టిగా చెప్పండి: ఎప్పుడు, ఏం జరుగుతోంది, ఏం జరిగింది, ఇప్పుడు ఎలా అనిపిస్తుంది.",
  },
  words: [
    { en: "uncle", te: "మామయ్య, బాబాయ్" },
    { en: "soaked", te: "పూర్తిగా తడిసిపోయిన" },
    { en: "wet earth", te: "తడి మట్టి" },
    { en: "happiest", te: "అన్నిటికంటే సంతోషమైన" },
    { en: "even now", te: "ఇప్పటికీ" },
  ],
  grammar: ["used-to-would", "past-simple", "past-continuous", "connectors"],
  topics: ["people", "weather", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A story in one minute", te: "ఒక్క నిమిషంలో ఒక కథ" },
      body: {
        en: "Start with when and where: When I was ten. Use used to for the old habit, were with -ing for the background, and first, then, finally for the events. End with how you feel now.",
        te: "When I was ten అని ఎప్పుడు, ఎక్కడో చెప్పి మొదలుపెట్టండి. అలవాటుకి used to, నేపథ్యానికి were + -ing, సంఘటనలకి first, then, finally; చివర్లో ఇప్పుడు ఎలా అనిపిస్తుందో చెప్పండి.",
      },
      bridge: {
        te: ["నాకు పదేళ్ళప్పుడు", "మేము", "ఒక నది దగ్గర", "ఉండేవాళ్ళం"],
        en: [
          { text: "When I was ten,", role: "when" },
          { text: "we", role: "who" },
          { text: "used to live", role: "action" },
          { text: "near a river", role: "what" },
        ],
      },
      examples: [
        { en: "When I was ten, we used to live near a river.", te: "నాకు పదేళ్ళప్పుడు మేము ఒక నది దగ్గర ఉండేవాళ్ళం." },
        { en: "One evening, while we were playing, it started to rain.", te: "ఒక సాయంత్రం మేము ఆడుకుంటుండగా వర్షం మొదలైంది." },
        { en: "Then we ran to the temple and waited there.", te: "అప్పుడు మేము గుడికి పరిగెత్తి, అక్కడే ఆగాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The four parts of your story", te: "మీ కథలో నాలుగు భాగాలు" },
      items: [
        {
          form: "Start: When I was …",
          useFor: { en: "When and where it happened.", te: "ఎప్పుడు, ఎక్కడ జరిగింది." },
          example: { en: "When I was ten, we used to live near a river.", te: "నాకు పదేళ్ళప్పుడు మేము ఒక నది దగ్గర ఉండేవాళ్ళం." },
        },
        {
          form: "Background: while we were + -ing",
          useFor: { en: "What was going on at that time.", te: "ఆ సమయంలో ఏం జరుగుతూ ఉంది." },
          example: { en: "One evening, while we were playing, it started to rain.", te: "ఒక సాయంత్రం మేము ఆడుకుంటుండగా వర్షం మొదలైంది." },
        },
        {
          form: "Events: first, then, finally",
          useFor: { en: "What happened, in order.", te: "ఏం జరిగిందో, వరుసగా." },
          example: { en: "Finally, my uncle came with an umbrella.", te: "చివరికి మా మామయ్య గొడుగు పట్టుకుని వచ్చారు." },
        },
        {
          form: "End: I still remember …",
          useFor: { en: "How you feel about it now.", te: "ఇప్పుడు దాని గురించి మీకు ఎలా అనిపిస్తుంది." },
          example: { en: "I still remember the smell of the wet earth.", te: "తడిసిన మట్టి వాసన నాకు ఇప్పటికీ గుర్తుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We entered into the temple to stay dry.",
      right: "We entered the temple to stay dry.",
      why: {
        en: "Enter already means go into, so it takes no into.",
        te: "enter అంటేనే 'లోపలికి వెళ్ళడం'; దానికి into అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "Myself Sai. Let me tell you a story.",
      right: "I'm Sai. Let me tell you a story.",
      why: {
        en: "Myself Sai is not English; start with I'm and your name.",
        te: "Myself Sai అనేది ఇంగ్లీష్ కాదు; I'm తో మీ పేరు చెప్పండి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: {
        en: "Start your story: as a child, you lived near a river for many years.",
        te: "కథ మొదలుపెట్టండి: చిన్నప్పుడు మీరు చాలా ఏళ్ళు ఒక నది దగ్గర ఉండేవారు.",
      },
      options: [
        "When I was a child, we used to live near a river.",
        "When I was a child, we were living near a river daily.",
        "When I was a child, we use to live near a river.",
      ],
      answer: 0,
      why: {
        en: "For long ago, say used to; Telugu ఉండేవాళ్ళం is not were living daily.",
        te: "చాలా కాలం క్రితం సంగతికి used to; 'ఉండేవాళ్ళం' ని were living daily అనకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "While we ___ playing, it started to rain.",
      te: "మేము ఆడుకుంటుండగా వర్షం మొదలైంది.",
      options: ["were", "was", "are"],
      answer: 0,
      why: {
        en: "In the past, we takes were; was goes with I, he or she.",
        te: "past లో we తో were వస్తుంది; was అనేది I, he, she తో.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Say what you did when the rain started: you ran to the temple.",
        te: "వర్షం మొదలవగానే మీరు ఏం చేశారో చెప్పండి: గుడికి పరిగెత్తారు.",
      },
      options: ["Then we ran to the temple.", "Then we run to the temple.", "Then we running to the temple."],
      answer: 0,
      why: {
        en: "The story is in the past, so run changes to ran.",
        te: "కథ past లో ఉంది, అందుకే run మారి ran అవుతుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Finally, my uncle came with a umbrella.",
      wrongIndex: 5,
      fix: "Finally, my uncle came with an umbrella.",
      why: {
        en: "Umbrella starts with a vowel sound, so it takes an, not a.",
        te: "umbrella అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే a కాదు an.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend asks how you felt that day. Say it was the happiest day of your childhood.",
        te: "ఆ రోజు మీకు ఎలా అనిపించిందని స్నేహితులు అడుగుతున్నారు. అది మీ చిన్నతనంలో అన్నిటికంటే సంతోషమైన రోజని చెప్పండి.",
      },
      expected: ["It was the happiest day of my childhood.", "That was the happiest day of my childhood.", "It was the happiest day."],
      options: ["It was the happiest day of my childhood.", "It was the most happiest day of my childhood.", "It was happiest day of my childhood."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend asks if you still love the rain. Say you have loved it since that day.",
        te: "మీకు ఇప్పటికీ వర్షం ఇష్టమా అని స్నేహితులు అడుగుతున్నారు. ఆ రోజు నుంచి ఇష్టమని చెప్పండి.",
      },
      expected: ["Yes, I have loved it since that day.", "I have loved the rain since that day.", "Yes, since that day."],
      options: ["Yes, I have loved it since that day.", "Yes, I am loving it since that day.", "Yes, I love it since that day."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My story in one minute", te: "ఒక్క నిమిషంలో నా కథ" },
    scene: {
      en: "Your friend Fatima asked for a story from your childhood. You have one minute. Tell it in order.",
      te: "మీ చిన్నప్పటి కథ ఒకటి చెప్పమని మీ స్నేహితురాలు ఫాతిమా గారు అడిగారు. మీకు ఒక్క నిమిషం ఉంది. వరుసగా చెప్పండి.",
    },
    partner: { en: "Fatima (your friend)", te: "ఫాతిమా (మీ స్నేహితురాలు)" },
    skills: [
      { id: "story", label: { en: "Telling a story", te: "కథ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "You promised me a story from your childhood! Go on, I'm listening.",
        te: "మీ చిన్నప్పటి కథ చెప్తానన్నారు కదా! చెప్పండి, వింటున్నాను.",
        hint: { en: "Begin: say how old you were and where you used to live.", te: "మొదలుపెట్టండి: అప్పుడు మీ వయసు ఎంతో, ఎక్కడ ఉండేవారో చెప్పండి." },
        replies: [
          { say: "When I was ten, we used to live near a river.", good: true, skill: "story" },
          { say: "When I was ten, we use to live near a river.", good: false, skill: "story" },
        ],
      },
      {
        partner: "A river! That sounds lovely. What happened?",
        te: "నదా! భలే బాగుంది. ఏం జరిగింది?",
        hint: { en: "Give the background: you were playing, and then the rain began.", te: "నేపథ్యం చెప్పండి: మీరు ఆడుకుంటున్నారు, అప్పుడు వర్షం మొదలైంది." },
        replies: [
          { say: "One evening, while we were playing, it started to rain.", good: true, skill: "story" },
          { say: "One evening, while we was playing, it started to rain.", good: false, skill: "story" },
        ],
      },
      {
        partner: "Oh! What did you do then?",
        te: "అయ్యో! అప్పుడు ఏం చేశారు?",
        hint: { en: "Tell her the next events in order.", te: "తర్వాత జరిగినవి వరుసగా చెప్పండి." },
        replies: [
          { say: "First we ran to the temple. Then my uncle came with an umbrella.", good: true, skill: "story" },
          { say: "We ran to the temple, soaked. Finally, my uncle came for us.", good: true, skill: "story" },
          { say: "First we ran to temple. Then my uncle came with umbrella.", good: false, skill: "story", fixIt: "article" },
        ],
      },
      {
        partner: "What a sweet memory! Do you still think about it?",
        te: "ఎంత మంచి జ్ఞాపకం! ఇప్పటికీ దాని గురించి తలచుకుంటారా?",
        hint: { en: "Say yes, and how you feel about the rain now.", te: "అవునని, ఇప్పుడు వర్షం అంటే మీకు ఎలా అనిపిస్తుందో చెప్పండి." },
        replies: [
          { say: "Yes! Even now, I love the rain because of that day.", good: true, skill: "story" },
          {
            say: "Yes. But you didn't even listen properly.",
            good: false,
            skill: "polite",
            react: { en: "I did! I heard every word. It was lovely.", te: "విన్నాను! ప్రతి మాటా విన్నాను. చాలా బాగుంది." },
          },
        ],
      },
    ],
  },
};

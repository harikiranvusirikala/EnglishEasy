import type { Lesson } from "../../types";

/**
 * Week 67, Day 5 (CURRICULUM §5): the speaking mission lesson — a trip in ninety seconds, with the past simple, sequence
 * words, the passive (Week 56) and reported speech (Week 57).
 */
export const day: Lesson = {
  id: "a-trip-i-took-ninety-seconds",
  kind: "lesson",
  title: { en: "A Trip I Took", te: "నేను చేసిన ప్రయాణం" },
  subtitle: "a ninety-second trip story",
  summary: {
    en: "Get ready to tell a trip story in ninety seconds: when and where, what you did in order, what someone told you, and how you feel now.",
    te: "తొంభై సెకన్లలో ఒక ప్రయాణం కథ చెప్పడానికి సిద్ధమవుదాం: ఎప్పుడు, ఎక్కడికి; వరుసగా ఏం చేశారు; ఎవరేం చెప్పారు; ఇప్పుడు ఎలా అనిపిస్తుంది.",
  },
  seo: {
    title: "Telling a Trip Story in English for Telugu Speakers",
    description:
      "Say Last year we went to Srisailam by bus with friends. A lesson for Telugu speakers on telling the story of a trip in ninety seconds.",
  },
  pattern: [
    { text: "Last year", role: "when" },
    { text: "we", role: "who" },
    { text: "went", role: "action" },
    { text: "to Srisailam by bus", role: "what" },
  ],
  core: [
    { en: "Last year we went to Srisailam by bus with friends.", te: "పోయిన సంవత్సరం మేము స్నేహితులతో కలిసి బస్సులో శ్రీశైలం వెళ్ళాం.", extra: ["go"] },
    { en: "The guide told us the temple was very old.", te: "ఆ గుడి చాలా పురాతనమైనదని గైడ్ మాకు చెప్పారు.", extra: ["said"] },
    { en: "First we had darshan, then we went to the dam.", te: "ముందు దర్శనం చేసుకున్నాం, తర్వాత డ్యామ్ దగ్గరికి వెళ్ళాం.", extra: ["after"] },
    { en: "The ghat road was beautiful, but a little scary.", te: "ఘాట్ రోడ్డు చాలా అందంగా ఉంది, కానీ కొంచెం భయంగా కూడా ఉంది.", extra: ["is"] },
    { en: "We stayed in a room near the temple for two nights.", te: "గుడి దగ్గర ఒక గదిలో రెండు రాత్రులు ఉన్నాం.", extra: ["night"] },
    { en: "The temple is surrounded by the Nallamala forest.", te: "ఆ గుడి చుట్టూ నల్లమల అడవి ఉంటుంది." },
    { en: "It was unforgettable. I would love to go there again.", te: "అది ఎప్పటికీ మర్చిపోలేని ప్రయాణం. మళ్ళీ అక్కడికి వెళ్ళాలని ఉంది." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Pick one trip you took. Tell it aloud in ninety seconds: when, where, who with, what you did, what someone told you, how you feel now.",
    te: "మీరు చేసిన ఒక ప్రయాణం ఎంచుకోండి. తొంభై సెకన్లలో గట్టిగా చెప్పండి: ఎప్పుడు, ఎక్కడికి, ఎవరితో, ఏం చేశారు, ఎవరేం చెప్పారు, ఇప్పుడు ఎలా అనిపిస్తుంది.",
  },
  words: [
    { en: "guide", te: "గైడ్, దారి చూపిస్తూ వివరించే మనిషి" },
    { en: "dam", te: "ఆనకట్ట, డ్యామ్" },
    { en: "forest", te: "అడవి" },
    { en: "scary", te: "భయం కలిగించే" },
    { en: "unforgettable", te: "ఎప్పటికీ మర్చిపోలేని" },
  ],
  grammar: ["past-simple", "connectors", "reported-speech", "passive-voice"],
  topics: ["travel", "transport", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A trip in ninety seconds", te: "తొంభై సెకన్లలో ఒక ప్రయాణం" },
      body: {
        en: "Start with when, where and who with. Tell the events in order with first, then and after that. Pass on what a guide told you, and end with how you feel now.",
        te: "ఎప్పుడు, ఎక్కడికి, ఎవరితో అని మొదలుపెట్టండి. first, then, after that తో జరిగినవి వరుసగా చెప్పండి. గైడ్ చెప్పింది చెప్పి, చివర్లో ఇప్పుడు ఎలా అనిపిస్తుందో చెప్పండి.",
      },
      bridge: {
        te: ["పోయిన సంవత్సరం", "మేము", "బస్సులో శ్రీశైలం", "వెళ్ళాం"],
        en: [
          { text: "Last year", role: "when" },
          { text: "we", role: "who" },
          { text: "went", role: "action" },
          { text: "to Srisailam by bus", role: "what" },
        ],
      },
      examples: [
        { en: "Last year we went to Srisailam by bus with friends.", te: "పోయిన సంవత్సరం మేము స్నేహితులతో కలిసి బస్సులో శ్రీశైలం వెళ్ళాం." },
        { en: "The guide told us the temple was very old.", te: "ఆ గుడి చాలా పురాతనమైనదని గైడ్ మాకు చెప్పారు." },
        { en: "First we had darshan, then we went to the dam.", te: "ముందు దర్శనం చేసుకున్నాం, తర్వాత డ్యామ్ దగ్గరికి వెళ్ళాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The four parts of your trip story", te: "మీ ప్రయాణం కథలో నాలుగు భాగాలు" },
      items: [
        {
          form: "Start: Last year we went to …",
          useFor: { en: "When, where and who with.", te: "ఎప్పుడు, ఎక్కడికి, ఎవరితో." },
          example: { en: "Last year we went to Srisailam by bus with friends.", te: "పోయిన సంవత్సరం మేము స్నేహితులతో కలిసి బస్సులో శ్రీశైలం వెళ్ళాం." },
        },
        {
          form: "Events: first, then, after that",
          useFor: { en: "What you did, in order.", te: "ఏం చేశారో, వరుసగా." },
          example: { en: "First we had darshan, then we went to the dam.", te: "ముందు దర్శనం చేసుకున్నాం, తర్వాత డ్యామ్ దగ్గరికి వెళ్ళాం." },
        },
        {
          form: "What they told you: told us …",
          useFor: { en: "Pass on what a guide or a priest said.", te: "గైడ్ గానీ పూజారి గారు గానీ చెప్పింది చెప్పడానికి." },
          example: { en: "The guide told us the temple was very old.", te: "ఆ గుడి చాలా పురాతనమైనదని గైడ్ మాకు చెప్పారు." },
        },
        {
          form: "End: I would love to …",
          useFor: { en: "How you feel about it now.", te: "ఇప్పుడు దాని గురించి మీకు ఎలా అనిపిస్తుంది." },
          example: { en: "It was unforgettable. I would love to go there again.", te: "అది ఎప్పటికీ మర్చిపోలేని ప్రయాణం. మళ్ళీ అక్కడికి వెళ్ళాలని ఉంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "We returned back on Sunday night.",
      right: "We came back on Sunday night.",
      why: {
        en: "Return already means come back, so return back says it twice; say came back or returned.",
        te: "return అంటేనే 'తిరిగి రావడం'; return back అంటే రెండుసార్లు చెప్పినట్టు. came back లేదా returned అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "The guide told us temple was very old.",
      right: "The guide told us the temple was very old.",
      why: {
        en: "Telugu has no the, but English needs it before a place both people know.",
        te: "తెలుగులో the లాంటి పదం లేదు; కానీ ఇద్దరికీ తెలిసిన చోటు ముందు ఇంగ్లీష్‌లో the కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "preposition",
      prompt: {
        en: "Tell your friend Sarala what the guide said about the temple.",
        te: "గుడి గురించి గైడ్ ఏం చెప్పారో మీ స్నేహితురాలు సరళ గారికి చెప్పండి.",
      },
      options: ["The guide told us the temple was very old.", "The guide said us the temple was very old.", "The guide told to us the temple was very old."],
      answer: 0,
      why: {
        en: "Told takes the person straight after it, with no to; said never takes us straight after it.",
        te: "told తర్వాత నేరుగా మనిషి వస్తారు, to అక్కర్లేదు; said తర్వాత us నేరుగా రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "First we had darshan, and then we ___ to the dam.",
      te: "ముందు దర్శనం చేసుకున్నాం, తర్వాత డ్యామ్ దగ్గరికి వెళ్ళాం.",
      options: ["went", "go", "gone"],
      answer: 0,
      why: {
        en: "The trip is over, so go changes to went; gone needs have before it.",
        te: "ప్రయాణం అయిపోయింది, అందుకే go మారి went అవుతుంది; gone ముందు have ఉండాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "Say how long you stayed: two nights, in a room near the temple.",
        te: "ఎన్ని రోజులు ఉన్నారో చెప్పండి: గుడి దగ్గర ఒక గదిలో రెండు రాత్రులు.",
      },
      options: ["We stayed near the temple for two nights.", "We stayed near the temple for two night.", "We stayed near the temple since two nights."],
      answer: 0,
      why: {
        en: "After two, night takes s, and a length of time takes for, not since.",
        te: "two తర్వాత night కి s వస్తుంది; ఎంత కాలం అని చెప్పడానికి since కాదు, for.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "The temple is surround by the Nallamala forest.",
      wrongIndex: 3,
      fix: "The temple is surrounded by the Nallamala forest.",
      why: {
        en: "After is, use the -ed form to say what is around it or done to it.",
        te: "is తర్వాత -ed form వాడాలి; దాని చుట్టూ ఏముందో, దానికి ఏం చేశారో చెప్పేటప్పుడు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A neighbour asks where you were last week. Say you were away, on a trip to Srisailam.",
        te: "పోయిన వారం మీరు ఎక్కడ ఉన్నారని పక్కింటివారు అడుగుతున్నారు. ఊర్లో లేరని, శ్రీశైలం వెళ్ళారని చెప్పండి.",
      },
      expected: ["I was out of town. I went to Srisailam.", "I went to Srisailam with friends.", "I was away on a trip to Srisailam."],
      options: ["I was out of town. I went to Srisailam.", "I was out of station. I went to Srisailam.", "I am out of town. I went to Srisailam."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You didn't see the dam? You did see it, and it was huge.",
        te: "'You didn't see the dam?' అని స్నేహితులు అడుగుతున్నారు. మీరు చూశారు, అది చాలా పెద్దగా ఉంది.",
      },
      expected: ["Yes, I did. It was huge.", "Yes, I saw it. It was huge.", "Yes, I did. It was very big."],
      options: ["Yes, I did. It was huge.", "No, I saw it. It was huge.", "Yes, I seen it. It was huge."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "My trip in ninety seconds", te: "తొంభై సెకన్లలో నా ప్రయాణం" },
    scene: {
      en: "Your friend Venkat heard about your trip and wants to hear all of it. You have ninety seconds. Tell it in order.",
      te: "మీ ప్రయాణం గురించి మీ స్నేహితుడు వెంకట్ గారు విన్నారు, మొత్తం వినాలనుకుంటున్నారు. మీకు తొంభై సెకన్లు ఉన్నాయి. వరుసగా చెప్పండి.",
    },
    partner: { en: "Venkat (your friend)", te: "వెంకట్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Telling a story", te: "కథ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! I heard you went on a trip. Tell me everything!",
        te: "హలో! మీరు ఏదో ప్రయాణం వెళ్ళొచ్చారని విన్నాను. అంతా చెప్పండి!",
        hint: { en: "Begin: say when you went, where, how and who with.", te: "మొదలుపెట్టండి: ఎప్పుడు, ఎక్కడికి, ఎలా, ఎవరితో వెళ్ళారో చెప్పండి." },
        replies: [
          { say: "Yes! Last month we went to Srisailam by bus with friends.", good: true, skill: "story" },
          { say: "Yes! Last month we go to Srisailam by bus with friends.", good: false, skill: "story" },
        ],
      },
      {
        partner: "Srisailam! How was the journey?",
        te: "శ్రీశైలమా! ప్రయాణం ఎలా ఉంది?",
        hint: { en: "Describe the road, and how you felt on it.", te: "దారి ఎలా ఉందో, అప్పుడు మీకు ఎలా అనిపించిందో చెప్పండి." },
        replies: [
          { say: "The ghat road was beautiful, but a little scary.", good: true, skill: "story" },
          { say: "It was long, but the forest on the way was lovely.", good: true, skill: "story" },
          { say: "The ghat road very beautiful, but little scary.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "And the temple? Did you learn anything about it?",
        te: "మరి గుడి? దాని గురించి ఏమైనా తెలుసుకున్నారా?",
        hint: { en: "Pass on what the guide told you about the temple.", te: "గుడి గురించి గైడ్ మీకు ఏం చెప్పారో చెప్పండి." },
        replies: [
          { say: "Yes, the guide told us it was very old.", good: true, skill: "story" },
          { say: "Yes, the guide said us it is very old.", good: false, skill: "story", fixIt: "preposition" },
        ],
      },
      {
        partner: "Wonderful! Would you go there again?",
        te: "చాలా బాగుంది! మళ్ళీ అక్కడికి వెళ్తారా?",
        hint: { en: "Say yes, and how you feel about the trip now.", te: "అవునని, ఇప్పుడు ఆ ప్రయాణం గురించి మీకు ఎలా అనిపిస్తుందో చెప్పండి." },
        replies: [
          { say: "Yes! It was unforgettable. I would love to go again.", good: true, skill: "story" },
          {
            say: "Maybe. But you never take me anywhere!",
            good: false,
            skill: "polite",
            react: { en: "Ha! That's true. Next time, let's go together.", te: "హా! నిజమే. ఈసారి కలిసి వెళ్దాం." },
          },
        ],
      },
    ],
  },
};

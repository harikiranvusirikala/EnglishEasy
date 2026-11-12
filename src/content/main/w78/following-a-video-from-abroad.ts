import type { Lesson } from "../../types";

/** Week 78, Day 5 (CURRICULUM §5): following a short video from abroad — listening for key words and checking with a friend. */
export const day: Lesson = {
  id: "following-a-video-from-abroad",
  kind: "lesson",
  title: { en: "Following a Video", te: "వీడియో అర్థం చేసుకోవడం" },
  subtitle: "listening for key words",
  summary: {
    en: "Learn to follow a short video and check with a friend: She said to stir it for five minutes, didn't she?",
    te: "ఒక చిన్న వీడియో అర్థం చేసుకుని, స్నేహితులతో సరిచూసుకోవడం నేర్చుకుందాం: She said to stir it for five minutes, didn't she?",
  },
  seo: {
    title: "Following a Video in English for Telugu Speakers",
    description:
      "Say I didn't catch the last part. Can we play it again? Simple lessons for Telugu speakers on following cooking videos from abroad.",
  },
  pattern: [
    { text: "She", role: "who" },
    { text: "said to stir it", role: "action" },
    { text: "for five minutes,", role: "when" },
    { text: "didn't she?", role: "action" },
  ],
  core: [
    { en: "Can we play it again, please?", te: "అది మళ్ళీ ప్లే చేద్దామా, ప్లీజ్?", extra: ["playing"] },
    { en: "I didn't catch the last part.", te: "చివరి భాగం నాకు సరిగ్గా వినిపించలేదు.", extra: ["caught"] },
    { en: "She said to stir it for five minutes.", te: "ఐదు నిమిషాలు కలుపుతూ ఉండమని ఆవిడ చెప్పారు.", extra: ["since"] },
    { en: "What did she say about the salt?", te: "ఉప్పు గురించి ఆవిడ ఏం చెప్పారు?", extra: ["says"] },
    { en: "Let's pause it here and write it down.", te: "ఇక్కడ ఆపి, అది రాసుకుందాం.", extra: ["writing"] },
    { en: "She said to stir it for five minutes, didn't she?", te: "ఐదు నిమిషాలు కలపమని ఆవిడ చెప్పారు కదా?", extra: ["isn't"] },
    { en: "Can you turn on the subtitles?", te: "subtitles పెడతారా?", extra: ["subtitle"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Watch a short cooking video in English. Pause it once, and say one key word aloud.",
    te: "ఇంగ్లీష్‌లో ఒక చిన్న వంట వీడియో చూడండి. ఒకసారి pause చేసి, ఒక ముఖ్యమైన మాట గట్టిగా చెప్పండి.",
  },
  words: [
    { en: "subtitles", te: "తెర మీద వచ్చే మాటలు, subtitles" },
    { en: "pause", te: "ఆపడం, pause చేయడం" },
    { en: "replay", te: "మళ్ళీ ప్లే చేయడం" },
    { en: "stir", te: "కలపడం, గరిటతో తిప్పడం" },
    { en: "key word", te: "ముఖ్యమైన మాట" },
  ],
  grammar: ["reported-speech", "indirect-tag-questions", "can-could"],
  topics: ["technology", "food", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Listen for the key words", te: "ముఖ్యమైన మాటలు వినండి" },
      body: {
        en: "You don't need every word. Listen for numbers, times and food words. If you miss something, check with a friend: She said five minutes, didn't she?",
        te: "ప్రతి మాటా అక్కర్లేదు. నంబర్లు, టైమ్, వంట పదాలు వినండి. ఏదైనా వినిపించకపోతే స్నేహితులతో సరిచూసుకోండి: She said five minutes, didn't she?",
      },
      bridge: {
        te: ["ఐదు నిమిషాలు", "కలపమని", "ఆవిడ చెప్పారు", "కదా?"],
        en: [
          { text: "She", role: "who" },
          { text: "said to stir it", role: "action" },
          { text: "for five minutes,", role: "when" },
          { text: "didn't she?", role: "action" },
        ],
      },
      examples: [
        { en: "She said to stir it for five minutes.", te: "ఐదు నిమిషాలు కలుపుతూ ఉండమని ఆవిడ చెప్పారు." },
        { en: "I didn't catch the last part.", te: "చివరి భాగం నాకు సరిగ్గా వినిపించలేదు." },
        { en: "Can we play it again, please?", te: "అది మళ్ళీ ప్లే చేద్దామా, ప్లీజ్?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Words for watching a video", te: "వీడియో చూసేటప్పుడు మాటలు" },
      items: [
        {
          form: "Can we pause it?",
          useFor: { en: "Stop the video for a moment.", te: "వీడియోని కాసేపు ఆపడానికి." },
          example: { en: "Let's pause it here and write it down.", te: "ఇక్కడ ఆపి, అది రాసుకుందాం." },
        },
        {
          form: "Can we play it again?",
          useFor: { en: "Watch a part one more time.", te: "ఒక భాగాన్ని ఇంకోసారి చూడటానికి." },
          example: { en: "Can we replay the last part?", te: "చివరి భాగం మళ్ళీ ప్లే చేద్దామా?" },
        },
        {
          form: "She said to …",
          useFor: { en: "Tell what the cook asked you to do.", te: "వంట చేసే ఆవిడ ఏం చేయమన్నారో చెప్పడానికి." },
          example: { en: "She said to add the rice now.", te: "ఇప్పుడు బియ్యం వేయమని ఆవిడ చెప్పారు." },
        },
        {
          form: "…, didn't she?",
          useFor: { en: "Check something you think you heard.", te: "విన్నాననుకున్నది సరిచూసుకోవడానికి." },
          example: { en: "She said to stir it for five minutes, didn't she?", te: "ఐదు నిమిషాలు కలపమని ఆవిడ చెప్పారు కదా?" },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Stir it since five minutes.",
      right: "Stir it for five minutes.",
      why: {
        en: "For tells how long something lasts; since needs a starting time, like since Monday.",
        te: "ఎంతసేపు అనడానికి for; since తర్వాత మొదలైన టైమ్ రావాలి, since Monday లాగా.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      wrong: "She told to stir it for five minutes.",
      right: "She said to stir it for five minutes.",
      why: {
        en: "Told needs a person after it, like told me or told us; said does not.",
        te: "told తర్వాత ఎవరికో చెప్పాలి, told me, told us లాగా; said కి అది అక్కర్లేదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "In the video, the cook says: Stir it for five minutes. Tell your friend what she said.",
        te: "వీడియోలో వంట చేసే ఆవిడ Stir it for five minutes అన్నారు. ఆవిడ ఏం చెప్పారో మీ స్నేహితులకి చెప్పండి.",
      },
      options: ["She said to stir it for five minutes.", "She told to stir it for five minutes.", "She said to stir it since five minutes."],
      answer: 0,
      why: {
        en: "Said can come straight before to and the action, and for gives how long.",
        te: "said తర్వాత నేరుగా to, ఆ పని రావచ్చు; ఎంతసేపు అనడానికి for.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "recipe",
      heading: "Grace's Kitchen, London: Easy Tomato Soup",
      lines: [
        "Serves four people.",
        "Heat two spoons of oil in a large pan.",
        "Add one chopped onion and stir it for five minutes.",
        "Add six chopped tomatoes and a little salt.",
        "Cook on a low heat for ten minutes.",
        "Add two cups of water and bring it to the boil.",
        "Blend it until it is smooth.",
        "Serve it hot with bread.",
      ],
      questions: [
        {
          prompt: { en: "How long should you stir the onion?", te: "ఉల్లిపాయని ఎంతసేపు కలపాలి?" },
          options: ["Five minutes", "Ten minutes", "Two minutes"],
          answer: 0,
          why: {
            en: "The third line gives the time for the onion, before the tomatoes go in.",
            te: "టమాటాలు వేసే ముందు, ఉల్లిపాయకి ఎంత టైమో మూడో లైన్‌లో ఉంది.",
          },
        },
        {
          prompt: { en: "How many tomatoes do you need?", te: "ఎన్ని టమాటాలు కావాలి?" },
          options: ["Six", "Four", "Two"],
          answer: 0,
          why: {
            en: "The fourth line gives the number of tomatoes; four is the number of people.",
            te: "టమాటాలు ఎన్నో నాలుగో లైన్‌లో ఉంది; నాలుగు అనేది ఎంతమందికో చెప్పే సంఖ్య.",
          },
        },
        {
          prompt: { en: "What do you serve the soup with?", te: "సూప్‌ని దేనితో వడ్డించాలి?" },
          options: ["Bread", "Rice", "Chapati"],
          answer: 0,
          why: {
            en: "The last line says what goes with the hot soup.",
            te: "వేడి సూప్‌తో పాటు ఏం ఇవ్వాలో చివరి లైన్‌లో ఉంది.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "The cook ___ a little sugar at the end.",
      te: "వంట చేసే ఆవిడ చివర్లో కొంచెం చక్కెర వేస్తారు.",
      options: ["adds", "add", "adding"],
      answer: 0,
      why: {
        en: "One person, like she, takes s on the verb in the present.",
        te: "ఒక్కరి గురించి (she లాగా) ఇప్పటి కాలంలో verb కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "Let's watch video again from the start.",
      wrongIndex: 2,
      fix: "Let's watch the video again from the start.",
      why: {
        en: "The video you both just saw needs the; Telugu has no word for the.",
        te: "ఇద్దరూ ఇప్పుడే చూసిన ఆ వీడియో కాబట్టి the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You missed the last part of the video. Ask your friend to play it again.",
        te: "వీడియోలో చివరి భాగం మీకు వినిపించలేదు. మళ్ళీ ప్లే చేయమని స్నేహితులని అడగండి.",
      },
      expected: [
        "Can we play it again, please?",
        "I didn't catch the last part. Can we play it again?",
        "Could you play it again, please?",
        "Can we play the last part again?",
      ],
      options: ["Can we play it again, please?", "We can play it again, please?", "Play again. Fast."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your friend asks what the cook said about the salt. She said to add a little.",
        te: "ఉప్పు గురించి వంట చేసే ఆవిడ ఏం చెప్పారని స్నేహితులు అడుగుతున్నారు. కొంచెం వేయమని ఆవిడ చెప్పారు.",
      },
      expected: ["She said to add a little salt.", "She said a little salt.", "She told us to add a little salt.", "Just a little salt."],
      options: ["She said to add a little salt.", "She said to add a few salt.", "She told to add a little salt."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A cooking video", te: "వంట వీడియో" },
    scene: {
      en: "Your friend Gopal is learning to cook. You are watching a British cooking video on his phone together.",
      te: "మీ స్నేహితుడు గోపాల్ గారు వంట నేర్చుకుంటున్నారు. ఆయన ఫోన్‌లో మీరిద్దరూ కలిసి ఒక బ్రిటిష్ వంట వీడియో చూస్తున్నారు.",
    },
    partner: { en: "Gopal (your friend)", te: "గోపాల్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "check", label: { en: "Checking what you heard", te: "విన్నది సరిచూసుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "This cook speaks so fast! Did you understand what she said?",
        te: "ఈ వంట చేసే ఆవిడ చాలా వేగంగా మాట్లాడుతున్నారు! ఆవిడ చెప్పింది మీకు అర్థమైందా?",
        hint: { en: "Say you missed the end, and ask to watch it again.", te: "చివర్లో వినిపించలేదని చెప్పి, మళ్ళీ చూద్దామని అడగండి." },
        replies: [
          { say: "I didn't catch the last part. Can we play it again?", good: true, skill: "check" },
          { say: "Not all of it. Can we replay the last part?", good: true, skill: "check" },
          { say: "I didn't caught the last part. Can we play it again?", good: false, skill: "check" },
        ],
      },
      {
        partner: "There. She said to stir the onion for ten minutes, didn't she?",
        te: "అదిగో. ఉల్లిపాయని పది నిమిషాలు కలపమని ఆవిడ చెప్పారు కదా?",
        hint: { en: "Disagree gently: you heard a different time, five minutes.", te: "మెల్లగా సరిచేయండి: మీకు వేరే టైమ్ వినిపించింది, ఐదు నిమిషాలు." },
        replies: [
          { say: "No, I think she said five minutes.", good: true, skill: "check" },
          { say: "No, I think she said since five minutes.", good: false, skill: "check", fixIt: "preposition" },
        ],
      },
      {
        partner: "Oh, you're right. And how much salt did she add?",
        te: "ఓ, మీరు చెప్పింది నిజమే. మరి ఉప్పు ఎంత వేశారు?",
        hint: { en: "Tell him she added only a small amount.", te: "ఆవిడ కొంచెమే వేశారని ఆయనకి చెప్పండి." },
        replies: [
          { say: "Just a little, about half a spoon.", good: true, skill: "check" },
          { say: "Just a few salt, about half a spoon.", good: false, skill: "check", fixIt: "plural" },
          {
            say: "How should I know? Watch it yourself.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay! I'll watch it again.", te: "సరే, సరే! నేనే మళ్ళీ చూస్తాను." },
          },
        ],
      },
      {
        partner: "Thanks! Come for lunch on Sunday. I'll make this soup for you.",
        te: "థాంక్స్! ఆదివారం భోజనానికి రండి. మీకోసం ఈ సూప్ చేస్తాను.",
        hint: { en: "Accept happily, and thank him.", te: "సంతోషంగా ఒప్పుకుని, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "Sounds good! Thank you, I'll be there.", good: true, skill: "polite" },
          { say: "Sounds good! Thank you, I'll come in Sunday.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

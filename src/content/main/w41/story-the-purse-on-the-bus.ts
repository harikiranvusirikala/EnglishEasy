import type { Lesson } from "../../types";

/** Week 41, Day 5 (CURRICULUM §5): a short story told in order, from start to end — Last month I left my purse on an RTC bus. */
export const day: Lesson = {
  id: "story-the-purse-on-the-bus",
  kind: "lesson",
  title: { en: "The Purse on the Bus", te: "బస్సులో పర్సు" },
  subtitle: "A story from start to end",
  summary: {
    en: "Learn to tell a short story from start to end: Last month I left my purse on an RTC bus. I got it back the next day.",
    te: "చిన్న కథని మొదటి నుంచి చివరి దాకా చెప్పడం నేర్చుకుందాం: Last month I left my purse on an RTC bus. I got it back the next day.",
  },
  seo: {
    title: "Telling a Short Story in English for Telugu Speakers",
    description:
      "Say Last month I left my purse on an RTC bus and I got it back the next day. Simple lessons for Telugu speakers on telling a short story.",
  },
  pattern: [
    { text: "Last month", role: "when" },
    { text: "I", role: "who" },
    { text: "left", role: "action" },
    { text: "my purse on an RTC bus", role: "what" },
  ],
  core: [
    { en: "Last month I left my purse on an RTC bus.", te: "పోయిన నెల నా పర్సు RTC బస్సులో మర్చిపోయాను.", extra: ["a"] },
    { en: "The conductor called me that evening.", te: "ఆ రోజు సాయంత్రం కండక్టర్ గారు నాకు ఫోన్ చేశారు.", extra: ["call"] },
    { en: "I got it back the next day at the depot.", te: "మరుసటి రోజు depot లో అది నాకు తిరిగి దొరికింది.", extra: ["get"] },
    { en: "I was so relieved when I saw it.", te: "అది చూడగానే నాకు ఎంతో ఊరట కలిగింది.", extra: ["relief"] },
    { en: "I was going to Vijayawada for a check-up.", te: "నేను check-up కోసం విజయవాడ వెళ్తున్నాను." },
    { en: "When I got off, I left it behind on the seat.", te: "దిగేటప్పుడు దాన్ని సీటు మీదే వదిలేశాను." },
    { en: "I have known that conductor for years now.", te: "ఆ కండక్టర్ గారు నాకు ఎన్నో ఏళ్ళుగా తెలుసు." },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Tell one small story from your life to someone today: when it happened, the problem, and how it ended.",
    te: "ఈ రోజు మీ జీవితంలోని ఒక చిన్న కథ ఎవరికైనా చెప్పండి: ఎప్పుడు జరిగింది, సమస్య ఏంటి, ఎలా ముగిసింది.",
  },
  words: [
    { en: "purse", te: "పర్సు" },
    { en: "leave behind", te: "మర్చిపోయి వదిలేయడం" },
    { en: "get back", te: "తిరిగి దొరకడం, తిరిగి పొందడం" },
    { en: "depot", te: "బస్ డిపో" },
    { en: "relieved", te: "ఊరటగా, హమ్మయ్య అనిపించడం" },
  ],
  grammar: ["past-simple", "past-continuous", "present-perfect"],
  topics: ["transport", "travel"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "A story from start to end", te: "మొదటి నుంచి చివరి దాకా ఒక కథ" },
      body: {
        en: "A short story has three parts: when and where it happened, the problem, and how it ended. Tell them in that order, in the past.",
        te: "చిన్న కథకి మూడు భాగాలు: ఎప్పుడు, ఎక్కడ జరిగింది; సమస్య ఏంటి; ఎలా ముగిసింది. ఈ వరుసలోనే, past లో చెప్పండి.",
      },
      bridge: {
        te: ["పోయిన నెల", "నా పర్సు", "RTC బస్సులో", "మర్చిపోయాను"],
        en: [
          { text: "Last month", role: "when" },
          { text: "I", role: "who" },
          { text: "left", role: "action" },
          { text: "my purse on an RTC bus", role: "what" },
        ],
      },
      examples: [
        { en: "Last month I left my purse on an RTC bus.", te: "పోయిన నెల నా పర్సు RTC బస్సులో మర్చిపోయాను." },
        { en: "The conductor called me that evening.", te: "ఆ రోజు సాయంత్రం కండక్టర్ గారు నాకు ఫోన్ చేశారు." },
        { en: "I got it back the next day at the depot.", te: "మరుసటి రోజు depot లో అది నాకు తిరిగి దొరికింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "The three parts", te: "మూడు భాగాలు" },
      items: [
        {
          form: "Start: when and where",
          useFor: { en: "Last month, last Sunday, on the bus.", te: "Last month, last Sunday, బస్సులో: ఎప్పుడు, ఎక్కడ." },
          example: { en: "I was going to Vijayawada for a check-up.", te: "నేను check-up కోసం విజయవాడ వెళ్తున్నాను." },
        },
        {
          form: "Middle: the problem",
          useFor: { en: "What went wrong.", te: "ఏం తప్పు జరిగింది." },
          example: { en: "When I got off, I left it behind on the seat.", te: "దిగేటప్పుడు దాన్ని సీటు మీదే వదిలేశాను." },
        },
        {
          form: "End: how it finished",
          useFor: { en: "What happened in the end, and how you felt.", te: "చివరికి ఏమైంది, మీకు ఎలా అనిపించింది." },
          example: { en: "I was so relieved when I saw it.", te: "అది చూడగానే నాకు ఎంతో ఊరట కలిగింది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "duration",
      wrong: "I know that conductor for many years.",
      right: "I have known that conductor for many years.",
      why: {
        en: "For something that started long ago and is still true, use have with known.",
        te: "చాలా కాలం క్రితం మొదలై ఇప్పటికీ నిజమైతే have known వాడాలి; 'తెలుసు' అని know అనకూడదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "I left my purse on a RTC bus.",
      right: "I left my purse on an RTC bus.",
      why: {
        en: "RTC starts with the sound ar, a vowel sound, so it takes an.",
        te: "RTC 'ఆర్' అనే అచ్చు శబ్దంతో మొదలవుతుంది, అందుకే a కాదు an.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "duration",
      prompt: {
        en: "Your neighbour asks if you know the conductor. You first met him ten years ago. What do you say?",
        te: "ఆ కండక్టర్ గారు మీకు తెలుసా అని పక్కింటివారు అడుగుతున్నారు. ఆయన్ని మొదటిసారి పదేళ్ళ క్రితం కలిశారు. ఏమంటారు?",
      },
      options: ["Yes, I have known him for ten years.", "Yes, I know him for ten years.", "Yes, I am knowing him for ten years."],
      answer: 0,
      why: {
        en: "Something true from ten years ago until now needs have and known together.",
        te: "పదేళ్ళ క్రితం నుంచి ఇప్పటిదాకా ఉన్నదానికి have, known రెండూ కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "That conductor ___ on the Vijayawada route every day.",
      te: "ఆ కండక్టర్ గారు రోజూ విజయవాడ route లో పని చేస్తారు.",
      options: ["works", "work", "working"],
      answer: 0,
      why: {
        en: "One person doing something every day takes s on the verb.",
        te: "ఒక్క వ్యక్తి రోజూ చేసే పనికి verb కి s వస్తుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "RTC Depot Office",
      lines: [
        "Hello. We found your purse on bus number 34.",
        "Please collect it from the depot office.",
        "Office time: 10 am to 5 pm.",
        "Bring your Aadhaar card.",
      ],
      prompt: { en: "You got this message. What must you take to the depot?", te: "మీకు ఈ మెసేజ్ వచ్చింది. depot కి మీరు ఏం తీసుకెళ్ళాలి?" },
      options: ["Your Aadhaar card", "Your bus ticket", "Your bank passbook"],
      answer: 0,
      why: {
        en: "The last line of the message asks you to bring one ID card.",
        te: "మెసేజ్ చివరి లైన్‌లో ఒక ID కార్డు తెమ్మని ఉంది.",
      },
      say: "Bring your Aadhaar card.",
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "When I got off, I leaved it behind on the seat.",
      wrongIndex: 5,
      fix: "When I got off, I left it behind on the seat.",
      why: {
        en: "Leave does not take -ed; its past form is left.",
        te: "leave కి past లో -ed రాదు; దాని past form left.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend asks how you lost your purse. Say you left it on the bus last month.",
        te: "పర్సు ఎలా పోయిందని స్నేహితులు అడుగుతున్నారు. పోయిన నెల బస్సులో మర్చిపోయారని చెప్పండి.",
      },
      expected: ["I left it on the bus last month.", "Last month I left my purse on the bus.", "I left my purse on an RTC bus."],
      options: ["I left it on the bus last month.", "I left it on bus last month.", "I leave it on the bus last month."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your friend asks how the story ended. Say the conductor called you, and you got the purse back.",
        te: "కథ ఎలా ముగిసిందని స్నేహితులు అడుగుతున్నారు. కండక్టర్ గారు ఫోన్ చేశారని, పర్సు తిరిగి దొరికిందని చెప్పండి.",
      },
      expected: [
        "The conductor called me, and I got it back.",
        "The conductor called, and I got it back the next day.",
        "The conductor called me, and I got my purse back.",
      ],
      options: ["The conductor called me, and I got it back.", "The conductor called me, and I got back it.", "The conductor call me, and I got it back."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "The purse came back", te: "పర్సు తిరిగి వచ్చింది" },
    scene: {
      en: "Your neighbour Rahim heard that you lost your purse. He asks you about it at the gate.",
      te: "మీ పర్సు పోయిందని పక్కింటి రహీమ్ గారు విన్నారు. గేటు దగ్గర దాని గురించి అడుగుతున్నారు.",
    },
    partner: { en: "Rahim (your neighbour)", te: "రహీమ్ (పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "story", label: { en: "Telling a story", te: "కథ చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "I heard you lost your purse. Is it true?",
        te: "మీ పర్సు పోయిందని విన్నాను. నిజమేనా?",
        hint: { en: "Say yes, and say when and where you left it.", te: "అవునని, ఎప్పుడు, ఎక్కడ మర్చిపోయారో చెప్పండి." },
        replies: [
          { say: "Yes. Last month I left it on an RTC bus.", good: true, skill: "story" },
          { say: "Yes. Last month I left it on a RTC bus.", good: false, skill: "story", fixIt: "article" },
        ],
      },
      {
        partner: "Oh no! How did that happen?",
        te: "అయ్యో! అది ఎలా జరిగింది?",
        hint: { en: "Say where you were going, and where on the bus you forgot it.", te: "మీరు ఎక్కడికి వెళ్తున్నారో, బస్సులో ఎక్కడ మర్చిపోయారో చెప్పండి." },
        replies: [
          { say: "I was going to Vijayawada, and I left it on the seat.", good: true, skill: "story" },
          { say: "I going to Vijayawada, and I left it on the seat.", good: false, skill: "story", fixIt: "be" },
        ],
      },
      {
        partner: "So did you get it back?",
        te: "మరి అది తిరిగి దొరికిందా?",
        hint: { en: "Give the good news: say who phoned you, and when you collected it.", te: "మంచి వార్త చెప్పండి: మీకు ఎవరు ఫోన్ చేశారో, ఎప్పుడు తెచ్చుకున్నారో చెప్పండి." },
        replies: [
          { say: "Yes! The conductor called me, and I got it back the next day.", good: true, skill: "story" },
          {
            say: "Why do you want to know about my money?",
            good: false,
            skill: "polite",
            react: { en: "Sorry, I didn't mean that. I was only worried.", te: "సారీ, నా ఉద్దేశం అది కాదు. కంగారు పడ్డాను, అంతే." },
          },
        ],
      },
      {
        partner: "That's wonderful! He is an honest man.",
        te: "చాలా మంచి విషయం! ఆయన చాలా నిజాయితీ గల మనిషి.",
        hint: { en: "Agree, and say how long you have known him.", te: "ఒప్పుకుని, ఆయన మీకు ఎన్నాళ్ళుగా తెలుసో చెప్పండి." },
        replies: [
          { say: "Yes, he is. I have known him for years.", good: true, skill: "story" },
          { say: "Yes, he is. I know him since many years.", good: false, skill: "story", fixIt: "duration" },
        ],
      },
    ],
  },
};

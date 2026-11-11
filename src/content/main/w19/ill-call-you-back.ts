import type { Lesson } from "../../types";

/** Week 19, Day 3 (CURRICULUM §4): will for promises on the phone — I'm busy now. I'll call you back in ten minutes. */
export const day: Lesson = {
  id: "ill-call-you-back",
  kind: "lesson",
  title: { en: "I'll Call You Back", te: "మళ్ళీ ఫోన్ చేస్తాను" },
  subtitle: "I'll call you back",
  summary: {
    en: "Learn what to say when you can't talk: I'm busy now. I'll call you back in ten minutes.",
    te: "ఇప్పుడు మాట్లాడలేనప్పుడు ఏమనాలో నేర్చుకుందాం: I'm busy now. I'll call you back in ten minutes.",
  },
  seo: {
    title: "I'll Call You Back in English for Telugu Speakers",
    description:
      "Say I'm busy now. I'll call you back in ten minutes. Simple lessons for Telugu speakers on answering a call at a busy moment.",
  },
  pattern: [
    { text: "I'll", role: "who" },
    { text: "call you back", role: "action" },
    { text: "in ten minutes", role: "when" },
  ],
  core: [
    { en: "I'm busy now. I'll call you back.", te: "ఇప్పుడు కొంచెం పనిలో ఉన్నాను. మళ్ళీ ఫోన్ చేస్తాను.", extra: ["calling"] },
    { en: "I'll call you back in ten minutes.", te: "పది నిమిషాల్లో మళ్ళీ ఫోన్ చేస్తాను.", extra: ["minute"] },
    { en: "Sorry, I'm driving. I'll call you later.", te: "Sorry అండీ, డ్రైవ్ చేస్తున్నాను. తర్వాత ఫోన్ చేస్తాను.", extra: ["drive"] },
    { en: "Is this a good time to talk?", te: "ఇప్పుడు మాట్లాడొచ్చా? మీకు వీలుగా ఉందా?", extra: ["Are"] },
    { en: "I saw your missed call.", te: "మీ missed call చూశాను.", extra: ["see"] },
    { en: "Can you call me back at six?", te: "ఆరు గంటలకి నాకు మళ్ళీ ఫోన్ చేస్తారా?", extra: ["on"] },
    { en: "Sorry, I'm at the bank right now.", te: "Sorry అండీ, ఇప్పుడు బ్యాంకులో ఉన్నాను.", extra: ["going"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Call back one missed call today. Start with: I saw your missed call.",
    te: "ఈ రోజు ఒక missed call కి మళ్ళీ ఫోన్ చేయండి. I saw your missed call అని మొదలుపెట్టండి.",
  },
  words: [
    { en: "call back", te: "మళ్ళీ ఫోన్ చేయడం" },
    { en: "missed call", te: "మిస్డ్ కాల్, ఎత్తని కాల్" },
    { en: "driving", te: "డ్రైవ్ చేస్తూ" },
    { en: "right now", te: "ఇప్పుడే, ఈ క్షణం" },
    { en: "good time", te: "వీలైన సమయం" },
  ],
  grammar: ["will", "present-continuous", "prepositions"],
  topics: ["phone", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Can't talk now?", te: "ఇప్పుడు మాట్లాడలేరా?" },
      body: {
        en: "When you can't talk, say why, and make a promise with I'll: I'm busy now. I'll call you back. Then add a time: in ten minutes, at six. I'll is short for I will.",
        te: "ఇప్పుడు మాట్లాడలేకపోతే కారణం చెప్పి, I'll తో మాట ఇవ్వండి: I'm busy now. I'll call you back. తర్వాత టైం చెప్పండి: in ten minutes, at six.",
      },
      bridge: {
        te: ["పది నిమిషాల్లో", "మళ్ళీ ఫోన్", "చేస్తాను"],
        en: [
          { text: "I'll", role: "who" },
          { text: "call you back", role: "action" },
          { text: "in ten minutes", role: "when" },
        ],
      },
      examples: [
        { en: "I'll call you back in ten minutes.", te: "పది నిమిషాల్లో మళ్ళీ ఫోన్ చేస్తాను." },
        { en: "Sorry, I'm driving. I'll call you later.", te: "Sorry అండీ, డ్రైవ్ చేస్తున్నాను. తర్వాత ఫోన్ చేస్తాను." },
        { en: "Sorry, I'm at the bank right now.", te: "Sorry అండీ, ఇప్పుడు బ్యాంకులో ఉన్నాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Saying when", te: "ఎప్పుడో చెప్పడం" },
      items: [
        {
          form: "in ten minutes",
          useFor: { en: "Time from now.", te: "ఇప్పటి నుంచి ఎంతసేపట్లో." },
          example: { en: "I'll call you back in ten minutes.", te: "పది నిమిషాల్లో మళ్ళీ ఫోన్ చేస్తాను." },
        },
        {
          form: "at six",
          useFor: { en: "A clock time.", te: "గడియారంలో టైం." },
          example: { en: "Can you call me back at six?", te: "ఆరు గంటలకి నాకు మళ్ళీ ఫోన్ చేస్తారా?" },
        },
        {
          form: "later",
          useFor: { en: "Some time after now.", te: "ఇప్పుడు కాదు, తర్వాత." },
          example: { en: "Sorry, I'm driving. I'll call you later.", te: "Sorry అండీ, డ్రైవ్ చేస్తున్నాను. తర్వాత ఫోన్ చేస్తాను." },
        },
        {
          form: "right now",
          useFor: { en: "At this moment.", te: "ఈ క్షణంలో." },
          example: { en: "Sorry, I'm at the bank right now.", te: "Sorry అండీ, ఇప్పుడు బ్యాంకులో ఉన్నాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "Please call to me at six.",
      right: "Please call me at six.",
      why: {
        en: "Call needs no to before the person. Telugu says నాకు, but English just says me.",
        te: "call తర్వాత to అక్కర్లేదు. తెలుగులో 'నాకు' అన్నా, ఇంగ్లీష్‌లో me చాలు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I will revert back to you.",
      right: "I'll call you back.",
      why: {
        en: "Revert back is office talk heard only in India, and back is extra. On the phone, a simple promise is best.",
        te: "revert back మన ఆఫీసుల్లోనే వింటాం; back కూడా ఎక్కువే. ఫోన్‌లో సింపుల్‌గా మాట ఇవ్వడమే మంచిది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "You are cooking. A friend calls. What do you say?", te: "మీరు వంట చేస్తున్నారు. మీ స్నేహితులు ఒకరు ఫోన్ చేశారు. ఏమంటారు?" },
      options: [
        "Sorry, I'm cooking. I'll call you back.",
        "Sorry, I cooking. I call you back.",
        "I'm cooking. Don't call me now.",
      ],
      answer: 0,
      why: {
        en: "Use am with -ing for what you are doing now, and I'll for a promise.",
        te: "ఇప్పుడు చేస్తున్న పనికి am + -ing, మాట ఇవ్వడానికి I'll.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "I'll call you back ___ ten minutes.",
      te: "పది నిమిషాల్లో మళ్ళీ ఫోన్ చేస్తాను.",
      options: ["in", "on", "at"],
      answer: 0,
      why: {
        en: "For time from now, use in, like in an hour or in two days.",
        te: "ఇప్పటి నుంచి ఎంతసేపట్లో అని చెప్పడానికి in: in an hour, in two days.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask politely if the person can talk now.", te: "ఇప్పుడు మాట్లాడొచ్చా అని మర్యాదగా అడగండి." },
      options: ["Is this a good time to talk?", "This is good time to talk?", "Are you free or not?"],
      answer: 0,
      why: {
        en: "A yes or no question starts with is, and a good time sounds kind, not pushy.",
        te: "అవును / కాదు ప్రశ్న is తో మొదలవుతుంది; a good time అంటే మర్యాదగా ఉంటుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "I'll calling you back at six.",
      wrongIndex: 1,
      fix: "I'll call you back at six.",
      why: {
        en: "After I'll, the verb stays plain, never with -ing.",
        te: "I'll తర్వాత verb మారదు, -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend calls, but you are driving. Say so, and promise to call later.",
        te: "మీ స్నేహితులు ఒకరు ఫోన్ చేశారు, మీరు డ్రైవ్ చేస్తున్నారు. అదే చెప్పి, తర్వాత చేస్తానని చెప్పండి.",
      },
      expected: ["Sorry, I'm driving. I'll call you later.", "I'm driving. I'll call you back.", "Sorry, I'm driving. I'll call you back."],
      options: ["Sorry, I'm driving. I'll call you later.", "Sorry, I driving. I call you later.", "I'm driving. Why are you calling now?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You missed a call from Swapna. Call her back and say so.",
        te: "స్వప్న గారి కాల్ ఎత్తలేదు. ఆవిడకి మళ్ళీ ఫోన్ చేసి అదే చెప్పండి.",
      },
      expected: ["Hello, I saw your missed call.", "I saw your missed call.", "Sorry, I missed your call."],
      options: ["Hello, I saw your missed call.", "Hello, you gave missed call?", "Hello, I see your missed call yesterday."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A call at a busy moment", te: "పనిలో ఉన్నప్పుడు ఫోన్" },
    scene: {
      en: "You are standing at the bank counter. Your friend Satish calls you.",
      te: "మీరు బ్యాంక్ కౌంటర్ దగ్గర నిలబడి ఉన్నారు. మీ స్నేహితుడు సతీష్ ఫోన్ చేశారు.",
    },
    partner: { en: "Satish (friend)", te: "సతీష్ (స్నేహితుడు)" },
    voice: "b",
    skills: [{ id: "promise", label: { en: "Promising a call back", te: "మళ్ళీ చేస్తానని చెప్పడం" } }],
    turns: [
      {
        partner: "Hello! Is this a good time to talk?",
        te: "హలో! ఇప్పుడు మాట్లాడొచ్చా?",
        hint: { en: "Say sorry, and say where you are now.", te: "Sorry చెప్పి, ఇప్పుడు ఎక్కడ ఉన్నారో చెప్పండి." },
        replies: [
          { say: "Sorry, I'm at the bank right now.", good: true, skill: "promise" },
          { say: "Sorry, I am in bank right now.", good: false, skill: "promise", fixIt: "article" },
        ],
      },
      {
        partner: "Oh, okay. When can you talk?",
        te: "ఓ, సరే. మరి ఎప్పుడు మాట్లాడొచ్చు?",
        hint: { en: "Promise to call him in twenty minutes.", te: "ఇరవై నిమిషాల్లో ఫోన్ చేస్తానని మాట ఇవ్వండి." },
        replies: [
          { say: "I'll call you back in twenty minutes.", good: true, skill: "promise" },
          { say: "I'll call to you in twenty minutes.", good: false, skill: "promise", fixIt: "preposition" },
          {
            say: "Why now? I'm busy. Don't disturb me.",
            good: false,
            skill: "promise",
            react: { en: "Sorry, sorry! I didn't know.", te: "Sorry అండీ! నాకు తెలియదు." },
          },
        ],
      },
      {
        partner: "Sure. Please don't forget!",
        te: "సరే. మర్చిపోకండి!",
        hint: { en: "Tell him not to worry, and promise to remember.", te: "కంగారు పడొద్దని చెప్పి, మర్చిపోనని మాట ఇవ్వండి." },
        replies: [
          { say: "Don't worry, I won't forget.", good: true, skill: "promise" },
          { say: "Don't worry, I am not forget.", good: false, skill: "promise" },
        ],
      },
      {
        partner: "Okay. Talk to you soon. Bye!",
        te: "సరే. తర్వాత మాట్లాడదాం. ఉంటాను!",
        hint: { en: "Say goodbye to him.", te: "ఆయనకి బై చెప్పండి." },
        replies: [
          { say: "Bye. Talk to you soon.", good: true },
          { say: "Okay, cut the phone now. Bye.", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};

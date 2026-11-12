import type { Lesson } from "../../types";

/** Week 76, Day 4 (CURRICULUM §5): So do I, So am I, Neither do I, Neither can I — finding things in common. */
export const day: Lesson = {
  id: "so-do-i-neither-do-i",
  kind: "lesson",
  title: { en: "So Do I, Neither Do I", te: "నేను కూడా" },
  subtitle: "So do I. Neither can I.",
  summary: {
    en: "Learn to say me too the English way: I love the morning breeze. So do I. I can't walk fast anymore. Neither can I.",
    te: "'నేను కూడా' అని ఇంగ్లీష్ పద్ధతిలో చెప్పడం నేర్చుకుందాం: I love the morning breeze. So do I. I can't walk fast anymore. Neither can I.",
  },
  seo: {
    title: "So Do I and Neither Do I in English for Telugu Speakers",
    description:
      "Say So do I, So am I and Neither can I to agree with a friend. Simple lessons for Telugu speakers on saying me too the English way.",
  },
  pattern: [
    { text: "So", role: "what" },
    { text: "do", role: "action" },
    { text: "I.", role: "who" },
  ],
  core: [
    { en: "I love the morning breeze. So do I.", te: "నాకు పొద్దుటి చల్లగాలి అంటే చాలా ఇష్టం. నాకు కూడా.", extra: ["am"] },
    { en: "I can't walk fast anymore. Neither can I.", te: "నేను ఇప్పుడు వేగంగా నడవలేను. నేను కూడా నడవలేను.", extra: ["So"] },
    { en: "I'm tired today. So am I.", te: "ఈ రోజు నాకు అలసటగా ఉంది. నాకు కూడా.", extra: ["do"] },
    { en: "I don't like the noise. Neither do I.", te: "నాకు ఆ శబ్దం నచ్చదు. నాకు కూడా నచ్చదు.", extra: ["am"] },
    { en: "I went to the eye camp last week. So did I.", te: "పోయిన వారం నేను eye camp కి వెళ్ళాను. నేను కూడా వెళ్ళాను.", extra: ["do"] },
    { en: "We have a lot in common, don't we?", te: "మన ఇద్దరికీ చాలా విషయాలు ఒకేలా ఉన్నాయి కదా?", extra: ["haven't"] },
    { en: "I haven't been to Araku. Neither have I.", te: "నేను అరకు వెళ్ళలేదు. నేను కూడా వెళ్ళలేదు.", extra: ["did"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When someone tells you what they like today, agree the English way: So do I.",
    te: "ఈ రోజు ఎవరైనా తమకి ఏం ఇష్టమో చెప్తే, ఇంగ్లీష్ పద్ధతిలో ఒప్పుకోండి: So do I.",
  },
  words: [
    { en: "so do I", te: "నేను కూడా (అలాగే చేస్తాను)" },
    { en: "neither do I", te: "నేను కూడా (చేయను)" },
    { en: "in common", te: "ఇద్దరికీ ఒకేలా" },
    { en: "same here", te: "నాదీ అదే మాట" },
    { en: "both of us", te: "మన ఇద్దరం" },
  ],
  grammar: ["yes-no-questions", "present-simple", "can-could"],
  topics: ["people", "neighbours", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Me too, the English way", te: "'నేను కూడా' ఇంగ్లీష్‌లో" },
      body: {
        en: "To say me too, use So, the same small word (do, am, can), then I: So do I. If the sentence has not, use Neither: Neither do I.",
        te: "'నేను కూడా' అనాలంటే So, అదే చిన్న మాట (do, am, can), తర్వాత I: So do I. వాక్యంలో not ఉంటే Neither: Neither do I.",
      },
      bridge: {
        te: ["నాకు", "కూడా"],
        en: [
          { text: "So", role: "what" },
          { text: "do", role: "action" },
          { text: "I.", role: "who" },
        ],
      },
      examples: [
        { en: "I love the morning breeze. So do I.", te: "నాకు పొద్దుటి చల్లగాలి అంటే చాలా ఇష్టం. నాకు కూడా." },
        { en: "I can't walk fast anymore. Neither can I.", te: "నేను ఇప్పుడు వేగంగా నడవలేను. నేను కూడా నడవలేను." },
        { en: "I'm tired today. So am I.", te: "ఈ రోజు నాకు అలసటగా ఉంది. నాకు కూడా." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which one?", te: "ఏది వాడాలి?" },
      items: [
        {
          form: "So do I.",
          useFor: { en: "After I like, I love, I walk: no am in the sentence.", te: "I like, I love, I walk తర్వాత: వాక్యంలో am లేదు." },
          example: { en: "I love the morning breeze. So do I.", te: "నాకు పొద్దుటి చల్లగాలి అంటే చాలా ఇష్టం. నాకు కూడా." },
        },
        {
          form: "So am I.",
          useFor: { en: "After I'm or I am.", te: "I'm, I am తర్వాత." },
          example: { en: "I'm tired today. So am I.", te: "ఈ రోజు నాకు అలసటగా ఉంది. నాకు కూడా." },
        },
        {
          form: "Neither can I.",
          useFor: { en: "After I can't.", te: "I can't తర్వాత." },
          example: { en: "I can't walk fast anymore. Neither can I.", te: "నేను ఇప్పుడు వేగంగా నడవలేను. నేను కూడా నడవలేను." },
        },
        {
          form: "Neither do I.",
          useFor: { en: "After I don't.", te: "I don't తర్వాత." },
          example: { en: "I don't like the noise. Neither do I.", te: "నాకు ఆ శబ్దం నచ్చదు. నాకు కూడా నచ్చదు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I love the morning breeze. Me also.",
      right: "I love the morning breeze. Me too.",
      why: {
        en: "English says me too, or so do I; me also comes from Telugu నేను కూడా.",
        te: "ఇంగ్లీష్‌లో me too, లేదా so do I అంటారు; me also అనేది 'నేను కూడా' నుంచి వచ్చిన అలవాటు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "question",
      wrong: "I don't like the noise. Neither I do.",
      right: "I don't like the noise. Neither do I.",
      why: {
        en: "After So or Neither, the small word comes before I, as in a question.",
        te: "So, Neither తర్వాత do, am, can లాంటి చిన్న మాట I కంటే ముందు వస్తుంది, ప్రశ్నలో లాగా.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A walker says: I love filter coffee after my walk. You love it too.",
        te: "ఒక వాకర్ I love filter coffee after my walk అన్నారు. మీకూ అది చాలా ఇష్టం.",
      },
      options: ["So do I.", "So am I.", "Neither do I."],
      answer: 0,
      why: {
        en: "Love has no am in front, so the reply uses do; Neither is only for not.",
        te: "love ముందు am లేదు, అందుకే జవాబులో do; Neither, not ఉన్నప్పుడే.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I'm not a good cook. ___ am I.",
      te: "నాకు వంట అంత బాగా రాదు. నాకూ అంతే.",
      options: ["Neither", "So", "Also"],
      answer: 0,
      why: {
        en: "The sentence has not, so the reply starts with Neither, not So.",
        te: "వాక్యంలో not ఉంది, అందుకే జవాబు So తో కాదు, Neither తో మొదలవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "message",
      heading: "Gandhi Park Walkers",
      lines: [
        "Usha: Good morning, friends!",
        "No walk tomorrow. The park is closed for maintenance.",
        "Let's meet on Wednesday at 6 am at the main gate.",
        "Bring water. It's very hot these days, isn't it?",
      ],
      prompt: { en: "Usha sent this to the group. When is the next walk?", te: "ఉష గారు గ్రూప్‌లో ఇది పంపారు. తర్వాతి walk ఎప్పుడు?" },
      options: ["Wednesday at 6 am", "Tomorrow at 6 am", "Wednesday at 6 pm"],
      answer: 0,
      why: {
        en: "The third line gives the new day and an early morning time.",
        te: "మూడో లైన్‌లో కొత్త రోజు, పొద్దుటి టైమ్ ఉన్నాయి.",
      },
      say: "Let's meet on Wednesday at 6 am at the main gate.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "My friend Joseph like long walks, and so do I.",
      wrongIndex: 3,
      fix: "My friend Joseph likes long walks, and so do I.",
      why: {
        en: "One person, like he, takes s on the verb; so do I stays the same.",
        te: "ఒక్కరైతే (he లాగా) verb కి s; so do I మాత్రం మారదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend says: I can't eat spicy food anymore. You can't either. Agree.",
        te: "స్నేహితులు I can't eat spicy food anymore అన్నారు. మీరూ తినలేరు. ఒప్పుకోండి.",
      },
      expected: ["Neither can I.", "Me neither.", "Neither can I. It upsets my stomach."],
      options: ["Neither can I.", "So can I.", "Me also."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "A walker says: I walk three kilometres every day. You do too. Agree, and say how far.",
        te: "ఒక వాకర్ I walk three kilometres every day అన్నారు. మీరూ అంతే నడుస్తారు. ఒప్పుకుని, ఎంత దూరమో చెప్పండి.",
      },
      expected: ["So do I. Three kilometres every day.", "So do I.", "Same here. Three kilometres."],
      options: ["So do I. Three kilometres every day.", "So do I. Three kilometre every day.", "So am I. Three kilometres every day."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Things in common", te: "ఇద్దరికీ ఒకేలా" },
    scene: {
      en: "You are walking slowly at the park. Fatima, another walker, is walking next to you.",
      te: "మీరు పార్క్‌లో మెల్లగా నడుస్తున్నారు. ఇంకో వాకర్ ఫాతిమా గారు మీ పక్కనే నడుస్తున్నారు.",
    },
    partner: { en: "Fatima (another walker)", te: "ఫాతిమా (ఇంకో వాకర్)" },
    skills: [
      { id: "agree", label: { en: "So do I and Neither do I", te: "So do I, Neither do I వాడటం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! I love walking early, before the sun gets strong.",
        te: "గుడ్ మార్నింగ్! ఎండ ఎక్కువ కాకముందే, పొద్దున్నే నడవడం నాకు చాలా ఇష్టం.",
        hint: { en: "Say you feel the same, and say something about the air.", te: "మీకూ అలాగే అనిపిస్తుందని చెప్పి, గాలి గురించి ఒక మాట అనండి." },
        replies: [
          { say: "So do I. The air is so fresh.", good: true, skill: "agree" },
          { say: "Same here. The air is so fresh.", good: true, skill: "agree" },
          { say: "So am I. The air is so fresh.", good: false, skill: "agree" },
        ],
      },
      {
        partner: "But my knees hurt these days. I can't walk fast anymore.",
        te: "కానీ ఈ మధ్య నా మోకాళ్ళు నొప్పిగా ఉంటున్నాయి. ఇక వేగంగా నడవలేను.",
        hint: { en: "Say kindly that you can't either.", te: "మీరూ నడవలేరని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Neither can I. Slow walking is fine.", good: true, skill: "agree" },
          { say: "So can I. Slow walking is fine.", good: false, skill: "agree" },
          {
            say: "That's because you don't exercise enough.",
            good: false,
            skill: "polite",
            react: { en: "Oh! I walk every day, you know.", te: "అయ్యో! నేను రోజూ నడుస్తానండీ." },
          },
        ],
      },
      {
        partner: "I'm going to the yoga class at the community hall on Friday.",
        te: "శుక్రవారం కమ్యూనిటీ హాల్‌లో yoga క్లాస్‌కి వెళ్తున్నాను.",
        hint: { en: "Say you are going too, and check that it starts at seven.", te: "మీరూ వెళ్తున్నారని చెప్పి, ఏడింటికి మొదలవుతుందా అని నిర్ధారించుకోండి." },
        replies: [
          { say: "So am I. It starts at seven, doesn't it?", good: true, skill: "agree" },
          { say: "So do I. It starts at seven, doesn't it?", good: false, skill: "agree" },
        ],
      },
      {
        partner: "Yes, at seven. Let's go together, then!",
        te: "అవును, ఏడింటికి. అయితే కలిసి వెళ్దాం!",
        hint: { en: "Agree happily, and say you two have many things alike.", te: "సంతోషంగా ఒప్పుకుని, మీ ఇద్దరికీ చాలా విషయాలు ఒకేలా ఉన్నాయని చెప్పండి." },
        replies: [
          { say: "Sounds good! We have a lot in common, don't we?", good: true, skill: "polite" },
          { say: "Sounds good! We have lot in common, don't we?", good: false, skill: "polite", fixIt: "article" },
        ],
      },
    ],
  },
};

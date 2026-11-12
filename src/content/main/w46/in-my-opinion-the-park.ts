import type { Lesson } from "../../types";

/** Week 46, Day 2 (CURRICULUM §5): In my opinion, For me, The main reason is — In my opinion, the park needs more benches. */
export const day: Lesson = {
  id: "in-my-opinion-the-park",
  kind: "lesson",
  title: { en: "In My Opinion", te: "నా అభిప్రాయం ప్రకారం" },
  subtitle: "In my opinion …; The main reason is …",
  summary: {
    en: "Learn to give an opinion and its main reason: In my opinion, the park needs more benches. The main reason is that many elders walk there.",
    te: "అభిప్రాయం, దాని ముఖ్య కారణం చెప్పడం నేర్చుకుందాం: In my opinion, the park needs more benches. The main reason is that many elders walk there.",
  },
  seo: {
    title: "In My Opinion: Giving Reasons in English for Telugu Speakers",
    description:
      "Say In my opinion, the park needs more benches and The main reason is that many elders walk there. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "In my opinion,", role: "what" },
    { text: "the park", role: "who" },
    { text: "needs", role: "action" },
    { text: "more benches", role: "what" },
  ],
  core: [
    { en: "In my opinion, the park needs more benches.", te: "నా అభిప్రాయం ప్రకారం, పార్క్‌కి ఇంకా బెంచీలు కావాలి.", extra: ["need"] },
    { en: "The main reason is that many elders walk there.", te: "ముఖ్య కారణం ఏంటంటే, అక్కడ చాలామంది పెద్దవాళ్ళు నడుస్తారు.", extra: ["walks"] },
    { en: "For me, the walking track is the best thing.", te: "నాకైతే, వాకింగ్ ట్రాక్ అన్నిటికంటే బాగుంది.", extra: ["most"] },
    { en: "In my opinion, the gate should open at five in the morning.", te: "నా అభిప్రాయం ప్రకారం, పార్క్ గేటు పొద్దున ఐదింటికే తెరవాలి.", extra: ["on"] },
    { en: "The main reason is that it gets very hot after seven.", te: "ముఖ్య కారణం ఏంటంటే, ఏడు తర్వాత బాగా ఎండ ఎక్కుతుంది.", extra: ["get"] },
    { en: "For me, the park is too dark at night.", te: "నాకైతే, రాత్రిపూట పార్క్ మరీ చీకటిగా ఉంటుంది.", extra: ["in"] },
    { en: "In my opinion, we need two more lights near the gate.", te: "నా అభిప్రాయం ప్రకారం, గేటు దగ్గర ఇంకో రెండు లైట్లు కావాలి.", extra: ["light"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of a park or a temple near you. Say aloud what it needs: In my opinion, it needs … The main reason is …",
    te: "మీ దగ్గర్లోని ఒక పార్క్ లేదా గుడిని గుర్తు చేసుకోండి. దానికి ఏం కావాలో గట్టిగా చెప్పండి: In my opinion, it needs … The main reason is …",
  },
  words: [
    { en: "in my opinion", te: "నా అభిప్రాయం ప్రకారం" },
    { en: "for me", te: "నాకైతే" },
    { en: "the main reason", te: "ముఖ్య కారణం" },
    { en: "bench", te: "బెంచీ" },
    { en: "walking track", te: "వాకింగ్ ట్రాక్, నడిచే దారి" },
  ],
  grammar: ["connectors", "comparatives-superlatives", "plurals-countable", "politeness-softening"],
  topics: ["neighbours", "health", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "An opinion and its main reason", te: "అభిప్రాయం, ముఖ్య కారణం" },
      body: {
        en: "In my opinion and For me mean the same as I think. Then give your reason: The main reason is that …",
        te: "In my opinion, For me అన్నా I think అన్నట్టే. తర్వాత కారణం చెప్పండి: The main reason is that …",
      },
      bridge: {
        te: ["నా అభిప్రాయం ప్రకారం,", "పార్క్‌కి", "ఇంకా బెంచీలు", "కావాలి"],
        en: [
          { text: "In my opinion,", role: "what" },
          { text: "the park", role: "who" },
          { text: "needs", role: "action" },
          { text: "more benches", role: "what" },
        ],
      },
      examples: [
        { en: "In my opinion, the park needs more benches.", te: "నా అభిప్రాయం ప్రకారం, పార్క్‌కి ఇంకా బెంచీలు కావాలి." },
        { en: "The main reason is that many elders walk there.", te: "ముఖ్య కారణం ఏంటంటే, అక్కడ చాలామంది పెద్దవాళ్ళు నడుస్తారు." },
        { en: "For me, the walking track is the best thing.", te: "నాకైతే, వాకింగ్ ట్రాక్ అన్నిటికంటే బాగుంది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Which opener?", te: "ఏ మాటతో మొదలుపెట్టాలి?" },
      items: [
        {
          form: "In my opinion, …",
          useFor: { en: "A clear opinion, at a meeting or a survey.", te: "మీటింగ్‌లో, సర్వేలో స్పష్టంగా అభిప్రాయం చెప్పడానికి." },
          example: { en: "In my opinion, the gate should open at five in the morning.", te: "నా అభిప్రాయం ప్రకారం, పార్క్ గేటు పొద్దున ఐదింటికే తెరవాలి." },
        },
        {
          form: "For me, …",
          useFor: { en: "Your own feeling, in friendly talk.", te: "మామూలు మాటల్లో మీకు ఎలా అనిపిస్తుందో చెప్పడానికి." },
          example: { en: "For me, the park is too dark at night.", te: "నాకైతే, రాత్రిపూట పార్క్ మరీ చీకటిగా ఉంటుంది." },
        },
        {
          form: "The main reason is that …",
          useFor: { en: "The most important reason.", te: "అన్నిటికంటే ముఖ్యమైన కారణం చెప్పడానికి." },
          example: { en: "The main reason is that it gets very hot after seven.", te: "ముఖ్య కారణం ఏంటంటే, ఏడు తర్వాత బాగా ఎండ ఎక్కుతుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "According to me, the park needs more benches.",
      right: "In my opinion, the park needs more benches.",
      why: {
        en: "According to is for what other people or papers say; for your own view, use in my opinion.",
        te: "According to ఇతరులు, పేపర్లు చెప్పేదానికి; మీ సొంత అభిప్రాయానికి in my opinion అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "plural",
      wrong: "The park needs more bench.",
      right: "The park needs more benches.",
      why: {
        en: "After more, a thing you can count takes the plural; a word ending in ch adds es.",
        te: "more తర్వాత లెక్కపెట్టే వస్తువు బహువచనంలో వస్తుంది; ch తో అయిపోయే పదానికి es వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "A survey worker asks your opinion about the park. Begin your answer politely.",
        te: "సర్వే చేసేవారు పార్క్ గురించి మీ అభిప్రాయం అడుగుతున్నారు. మర్యాదగా జవాబు మొదలుపెట్టండి.",
      },
      options: ["In my opinion, the park needs more benches.", "In my opinion, the park need more benches.", "On my opinion, the park needs more benches."],
      answer: 0,
      why: {
        en: "The park is one thing, so needs takes s, and the phrase always starts with in.",
        te: "పార్క్ ఒక్కటే, అందుకే needs కి s; ఈ మాట ఎప్పుడూ in తోనే: in my opinion.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "preposition",
      sentence: "The main reason is that many elders walk there ___ the evening.",
      te: "ముఖ్య కారణం ఏంటంటే, సాయంత్రం అక్కడ చాలామంది పెద్దవాళ్ళు నడుస్తారు.",
      options: ["in", "on", "at"],
      answer: 0,
      why: {
        en: "Parts of the day take in, like in the morning, but night takes at.",
        te: "రోజులో భాగాలకి in వస్తుంది (in the morning లాగా); night కి మాత్రం at.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "plural",
      prompt: {
        en: "The survey asks how many lights the park needs. Say two more, near the gate.",
        te: "పార్క్‌కి ఎన్ని లైట్లు కావాలని సర్వేలో అడుగుతున్నారు. గేటు దగ్గర ఇంకో రెండు అని చెప్పండి.",
      },
      options: ["We need two more lights near the gate.", "We need two more light near the gate.", "We need two more lights near gate."],
      answer: 0,
      why: {
        en: "After two, a thing you can count takes s, and the gate everyone knows takes the.",
        te: "రెండు తర్వాత వస్తువుకి s వస్తుంది; అందరికీ తెలిసిన గేటుకి the కావాలి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "For me, the walking track is the most best thing.",
      wrongIndex: 7,
      fix: "For me, the walking track is the best thing.",
      why: {
        en: "Best already means most good, so it never takes most.",
        te: "best అంటేనే 'అన్నిటికంటే మంచి'; దానికి most అక్కర్లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The survey worker asks what the park needs most. Say it needs more benches.",
        te: "పార్క్‌కి అన్నిటికంటే ఏం కావాలని సర్వే చేసేవారు అడుగుతున్నారు. ఇంకా బెంచీలు కావాలని చెప్పండి.",
      },
      expected: [
        "In my opinion, the park needs more benches.",
        "In my opinion, it needs more benches.",
        "For me, it needs more benches.",
        "The park needs more benches.",
      ],
      options: ["In my opinion, the park needs more benches.", "According to me, the park needs more benches.", "In my opinion, the park is needing more benches."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks why you walk so early. Give the main reason: it gets very hot after seven.",
        te: "అంత పొద్దున్నే ఎందుకు నడుస్తారని స్నేహితులు అడుగుతున్నారు. ముఖ్య కారణం చెప్పండి: ఏడు తర్వాత బాగా ఎండ ఎక్కుతుంది.",
      },
      expected: [
        "The main reason is that it gets very hot after seven.",
        "Because it gets very hot after seven.",
        "It gets very hot after seven.",
      ],
      options: [
        "The main reason is that it gets very hot after seven.",
        "The main reason is that it get very hot after seven.",
        "The main reason is that it very hot after seven.",
      ],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A survey about the park", te: "పార్క్ గురించి సర్వే" },
    scene: {
      en: "Kavitha, a colony volunteer, comes to your door with a survey about the colony park.",
      te: "కాలనీ వాలంటీర్ కవిత గారు కాలనీ పార్క్ గురించి సర్వే చేస్తూ మీ ఇంటికి వచ్చారు.",
    },
    partner: { en: "Kavitha (a colony volunteer)", te: "కవిత (కాలనీ వాలంటీర్)" },
    skills: [
      { id: "opinion", label: { en: "Giving an opinion", te: "అభిప్రాయం చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening! I'm doing a survey about the park. Do you have two minutes?",
        te: "నమస్కారం! పార్క్ గురించి సర్వే చేస్తున్నాను. రెండు నిమిషాలు ఉన్నాయా?",
        hint: { en: "Say yes politely, and ask her to go ahead.", te: "మర్యాదగా సరే అని, అడగమని చెప్పండి." },
        replies: [
          { say: "Yes, of course. Please go ahead.", good: true, skill: "polite" },
          {
            say: "Tell fast. I am very busy.",
            good: false,
            skill: "polite",
            react: { en: "Oh, sorry. I'll be quick.", te: "అయ్యో, సారీ. త్వరగా ముగిస్తాను." },
          },
        ],
      },
      {
        partner: "What does the park need most?",
        te: "పార్క్‌కి అన్నిటికంటే ఏం కావాలి?",
        hint: { en: "Give your opinion: more benches.", te: "మీ అభిప్రాయం చెప్పండి: ఇంకా బెంచీలు." },
        replies: [
          { say: "In my opinion, it needs more benches.", good: true, skill: "opinion" },
          { say: "In my opinion, it needs more bench.", good: false, skill: "opinion", fixIt: "plural" },
        ],
      },
      {
        partner: "I see. Why do you say that?",
        te: "అలాగా. ఎందుకు అలా అంటున్నారు?",
        hint: { en: "Give the main reason: many elders walk there.", te: "ముఖ్య కారణం చెప్పండి: అక్కడ చాలామంది పెద్దవాళ్ళు నడుస్తారు." },
        replies: [
          { say: "The main reason is that many elders walk there.", good: true, skill: "opinion" },
          { say: "The main reason is that many elders walks there.", good: false, skill: "opinion" },
        ],
      },
      {
        partner: "Thank you! Anything else for the park?",
        te: "థాంక్యూ! పార్క్‌కి ఇంకేమైనా?",
        hint: { en: "Say the park is too dark at night, and thank her.", te: "రాత్రిపూట పార్క్ మరీ చీకటిగా ఉంటుందని చెప్పి, థాంక్స్ చెప్పండి." },
        replies: [
          { say: "For me, it's too dark at night. Thank you!", good: true, skill: "opinion" },
          { say: "For me, it's too dark in night. Thank you!", good: false, skill: "opinion", fixIt: "preposition" },
        ],
      },
    ],
  },
};

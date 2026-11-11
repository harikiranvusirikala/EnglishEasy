import type { ConversationDay } from "../../types";

/** Week 24, Day 6 (CURRICULUM §4): Conversation Day — an accident on the road: telling a constable what you saw (revisits Week 18), then a friend. */
export const day: ConversationDay = {
  id: "w24-conversation",
  kind: "conversation",
  title: { en: "An Accident on the Road", te: "రోడ్డు మీద ప్రమాదం" },
  summary: {
    en: "Use the whole week: tell a police constable what you saw at an accident, and tell a friend about it later.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: మీరు చూసిన ప్రమాదం గురించి పోలీస్ కానిస్టేబుల్‌కి చెప్పండి, తర్వాత స్నేహితులకి కూడా చెప్పండి.",
  },
  topics: ["transport", "health", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "What did you see?", te: "మీరు ఏం చూశారు?" },
    lines: [
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Madam, did you see the accident?", te: "మేడమ్, మీరు ప్రమాదం చూశారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes, I did. I was waiting at the bus stop.", te: "అవును, చూశాను. నేను బస్ స్టాప్‌లో ఎదురుచూస్తూ ఉన్నాను." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "What happened? Please tell me slowly.", te: "ఏం జరిగింది? నెమ్మదిగా చెప్పండి." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "An old man was crossing the road.", te: "ఒక పెద్దాయన రోడ్డు దాటుతూ ఉన్నారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Suddenly, an auto came very fast and hit him.", te: "ఒక్కసారిగా ఒక ఆటో చాలా వేగంగా వచ్చి ఆయన్ని గుద్దింది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "What time was it?", te: "అప్పుడు టైమ్ ఎంత?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "About ten past nine. It was raining.", te: "దాదాపు తొమ్మిదీ పది. వర్షం పడుతూ ఉంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Did the auto driver stop?", te: "ఆటో డ్రైవర్ ఆగారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes. He was calling one zero eight when you came.", te: "ఆగారు. మీరు వచ్చినప్పుడు ఆయన 108 కి ఫోన్ చేస్తూ ఉన్నారు." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Thank you, madam. That helps a lot.", te: "థాంక్యూ మేడమ్. చాలా ఉపయోగపడింది." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుతున్నారు?" },
        options: ["An accident on the road", "A power cut at night", "A lost bag on a bus"],
        answer: 0,
      },
      {
        prompt: { en: "What was Radha doing?", te: "రాధ ఏం చేస్తూ ఉన్నారు?" },
        options: ["Waiting at the bus stop", "Crossing the road", "Driving an auto"],
        answer: 0,
      },
      {
        prompt: { en: "What hit the old man?", te: "పెద్దాయన్ని ఏది గుద్దింది?" },
        options: ["A bike", "An auto", "A bus"],
        answer: 1,
      },
      {
        prompt: { en: "What was the weather like?", te: "అప్పుడు వాతావరణం ఎలా ఉంది?" },
        options: ["It was very hot.", "It was raining.", "It was sunny."],
        answer: 1,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A constable asks where you were. You were at the bus stop.",
        te: "మీరు ఎక్కడ ఉన్నారని కానిస్టేబుల్ అడిగారు. మీరు బస్ స్టాప్‌లో ఉన్నారు.",
      },
      expected: ["I was waiting at the bus stop.", "I was at the bus stop."],
      options: ["I was waiting at the bus stop.", "I was waiting in the bus stop.", "I am waiting at the bus stop."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Say the man was crossing the road when the auto hit him.",
        te: "ఆటో గుద్దినప్పుడు ఆయన రోడ్డు దాటుతూ ఉన్నారని చెప్పండి.",
      },
      expected: ["He was crossing the road when the auto hit him.", "The auto hit him while he was crossing."],
      options: [
        "He was crossing the road when the auto hit him.",
        "He is crossing the road when the auto hit him.",
        "He was cross the road when the auto hit him.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your friend what she was doing when it happened.",
        te: "అది జరిగినప్పుడు ఏం చేస్తూ ఉన్నారని మీ స్నేహితురాలిని అడగండి.",
      },
      expected: ["What were you doing when it happened?", "What were you doing then?"],
      options: ["What were you doing when it happened?", "What you were doing when it happened?", "What did you doing when it happened?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Telling the constable", te: "కానిస్టేబుల్‌కి చెప్పడం" },
      scene: {
        en: "A car hit a woman near the tea stall. Constable Venkat asks you what you saw.",
        te: "టీ కొట్టు దగ్గర ఒక కారు ఒకావిడని గుద్దింది. మీరు ఏం చూశారో కానిస్టేబుల్ వెంకట్ అడుగుతున్నారు.",
      },
      partner: { en: "Venkat (police constable)", te: "వెంకట్ (పోలీస్ కానిస్టేబుల్)" },
      voice: "b",
      skills: [
        { id: "story", label: { en: "Telling what happened", te: "జరిగింది చెప్పడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me. Did you see the accident here?",
          te: "ఎక్స్‌క్యూజ్ మీ. ఇక్కడ జరిగిన ప్రమాదం మీరు చూశారా?",
          hint: { en: "Say yes, and say where you were standing.", te: "అవునని, మీరు ఎక్కడ నిలబడి ఉన్నారో చెప్పండి." },
          replies: [
            { say: "Yes, sir. I was standing near the tea stall.", good: true, skill: "story" },
            { say: "Yes, sir. I was standing near tea stall.", good: false, skill: "story", fixIt: "article" },
          ],
        },
        {
          partner: "Okay. What happened? Tell me slowly.",
          te: "సరే. ఏం జరిగింది? నెమ్మదిగా చెప్పండి.",
          hint: { en: "Say what the woman was doing, and what hit her.", te: "ఆవిడ ఏం చేస్తూ ఉన్నారో, ఆవిడని ఏది గుద్దిందో చెప్పండి." },
          replies: [
            { say: "She was crossing the road when a car hit her.", good: true, skill: "story" },
            { say: "She crossing the road when a car hit her.", good: false, skill: "story", fixIt: "be" },
          ],
        },
        {
          partner: "Did the car stop?",
          te: "కారు ఆగిందా?",
          hint: { en: "Say no, and say which way it went.", te: "లేదని, అది ఏ వైపు వెళ్ళిందో చెప్పండి." },
          replies: [
            { say: "No, sir. It went towards the bus stand.", good: true, skill: "story" },
            {
              say: "No. You police always come late!",
              good: false,
              skill: "polite",
              react: { en: "We came in five minutes. Please help us.", te: "ఐదు నిమిషాల్లో వచ్చాం. దయచేసి సహాయం చేయండి." },
            },
          ],
        },
        {
          partner: "Did you see the number of the car?",
          te: "కారు నంబర్ చూశారా?",
          hint: { en: "Say you saw only part of it, and give the colour.", te: "కొంచెమే చూశానని చెప్పి, కారు రంగు చెప్పండి." },
          replies: [
            { say: "Only half of it. It was a white car.", good: true, skill: "story" },
            { say: "Only half of it. It was white colour car.", good: false, skill: "story", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Thank you. The ambulance took her. She will be fine.",
          te: "థాంక్యూ. అంబులెన్స్ ఆవిడని తీసుకెళ్ళింది. ఆవిడ బాగానే ఉంటారు.",
          hint: { en: "Say you are glad to hear it, and say goodbye.", te: "విని సంతోషంగా ఉందని చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "That's good news. Goodbye, sir.", good: true, skill: "polite" },
            { say: "That's a good news. Goodbye, sir.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Telling a friend", te: "స్నేహితురాలికి చెప్పడం" },
      scene: {
        en: "Later, your friend Fatima sees you. You still look worried.",
        te: "తర్వాత మీ స్నేహితురాలు ఫాతిమా మిమ్మల్ని కలిశారు. మీరు ఇంకా కంగారుగా కనిపిస్తున్నారు.",
      },
      partner: { en: "Fatima (friend)", te: "ఫాతిమా (స్నేహితురాలు)" },
      skills: [
        { id: "story", label: { en: "Telling what happened", te: "జరిగింది చెప్పడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! You look worried. Is everything okay?",
          te: "హాయ్! కంగారుగా కనిపిస్తున్నారు. అంతా బాగానే ఉందా?",
          hint: { en: "Tell her what you saw on the road this morning.", te: "ఈ రోజు ఉదయం రోడ్డు మీద ఏం చూశారో చెప్పండి." },
          replies: [
            { say: "I saw an accident this morning.", good: true, skill: "story" },
            { say: "Today morning I saw an accident.", good: false, skill: "story", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Oh no! What happened?",
          te: "అయ్యో! ఏం జరిగింది?",
          hint: { en: "Tell the story: the long action first, then the sudden one.", te: "కథలా చెప్పండి: ముందు జరుగుతూ ఉన్న పని, తర్వాత ఒక్కసారిగా జరిగినది." },
          replies: [
            { say: "A woman was crossing when a car hit her.", good: true, skill: "story" },
            { say: "A woman was crossing when a car was hitting her.", good: false, skill: "story" },
          ],
        },
        {
          partner: "Where were you at that time?",
          te: "ఆ సమయంలో మీరు ఎక్కడ ఉన్నారు?",
          hint: { en: "Say where you were, and what you were doing there.", te: "మీరు ఎక్కడ ఉన్నారో, అక్కడ ఏం చేస్తూ ఉన్నారో చెప్పండి." },
          replies: [
            { say: "I was buying tea at the tea stall.", good: true, skill: "story" },
            { say: "I am buying tea at the tea stall.", good: false, skill: "story" },
          ],
        },
        {
          partner: "Is she okay now?",
          te: "ఆవిడ ఇప్పుడు బాగానే ఉన్నారా?",
          hint: { en: "Say yes, and say how she went to hospital.", te: "అవునని, ఆవిడ హాస్పిటల్‌కి ఎలా వెళ్ళారో చెప్పండి." },
          replies: [
            { say: "Yes. The ambulance came quickly and took her.", good: true, skill: "story" },
            {
              say: "I don't know. Not my problem.",
              good: false,
              skill: "polite",
              react: { en: "Oh. I hope she is fine.", te: "అయ్యో. ఆవిడ బాగుండాలని కోరుకుంటున్నాను." },
            },
          ],
        },
        {
          partner: "Thank God. Please be careful on the roads too.",
          te: "దేవుడి దయ. మీరు కూడా రోడ్ల మీద జాగ్రత్తగా ఉండండి.",
          hint: { en: "Thank her, and promise to be careful.", te: "థాంక్స్ చెప్పి, జాగ్రత్తగా ఉంటానని మాట ఇవ్వండి." },
          replies: [
            { say: "Thank you. I will be careful.", good: true, skill: "polite" },
            { say: "Thank you. I will careful.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
      ],
    },
  ],
};

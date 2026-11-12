import type { Lesson } from "../../types";

/** Week 76, Day 3 (CURRICULUM §5): rising tags (really asking) and falling tags (expecting yes) — The park closes at eight, doesn't it? */
export const day: Lesson = {
  id: "asking-or-agreeing-tags",
  kind: "lesson",
  title: { en: "Asking or Agreeing?", te: "అడుగుతున్నారా, ఒప్పుకుంటున్నారా?" },
  subtitle: "voice up to ask, down to agree",
  summary: {
    en: "Learn when a tag really asks and when it only agrees: The park closes at eight, doesn't it? The new benches are nice, aren't they?",
    te: "tag ఎప్పుడు నిజంగా అడుగుతుందో, ఎప్పుడు ఒప్పుకోమంటుందో నేర్చుకుందాం: The park closes at eight, doesn't it? The new benches are nice, aren't they?",
  },
  seo: {
    title: "Asking or Agreeing With Tag Questions in English for Telugu Speakers",
    description:
      "Say The park closes at eight, doesn't it? to ask, and The benches are nice, aren't they? to agree. Simple lessons for Telugu speakers.",
  },
  pattern: [
    { text: "The park", role: "who" },
    { text: "closes", role: "action" },
    { text: "at eight,", role: "when" },
    { text: "doesn't it?", role: "action" },
  ],
  core: [
    { en: "The park closes at eight, doesn't it?", te: "పార్క్ ఎనిమిదింటికి మూసేస్తారు కదా?", extra: ["isn't"] },
    { en: "The new benches are nice, aren't they?", te: "కొత్త బెంచీలు బాగున్నాయి కదా?", extra: ["isn't"] },
    { en: "The gate opens at five, doesn't it?", te: "గేట్ ఐదింటికి తెరుస్తారు కదా?", extra: ["open"] },
    { en: "The lawn looks fresh after the rain, doesn't it?", te: "వర్షం తర్వాత లాన్ పచ్చగా కనిపిస్తోంది కదా?", extra: ["look"] },
    { en: "Dogs aren't allowed inside, are they?", te: "లోపలికి కుక్కల్ని రానివ్వరు కదా?", extra: ["isn't"] },
    { en: "The park is closed on Mondays for maintenance, isn't it?", te: "సోమవారాలు maintenance కోసం పార్క్ మూసేస్తారు కదా?", extra: ["in"] },
    { en: "You water the lawn every morning, don't you?", te: "మీరు రోజూ పొద్దున లాన్‌కి నీళ్ళు పెడతారు కదా?", extra: ["aren't"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Check one timing today with a tag, voice going up: The shop opens at nine, doesn't it?",
    te: "ఈ రోజు ఒక టైమ్‌ని tag తో, స్వరం పైకి లేపుతూ నిర్ధారించుకోండి: The shop opens at nine, doesn't it?",
  },
  words: [
    { en: "closing time", te: "మూసే టైమ్" },
    { en: "expect", te: "అనుకోవడం, ఆశించడం" },
    { en: "lawn", te: "పచ్చిక, లాన్" },
    { en: "maintenance", te: "మరమ్మతు పనులు, maintenance" },
    { en: "gardener", te: "తోటమాలి" },
  ],
  grammar: ["indirect-tag-questions", "pronunciation", "passive-voice"],
  topics: ["people", "neighbours", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Up to ask, down to agree", te: "అడిగితే పైకి, ఒప్పుకుంటే కిందికి" },
      body: {
        en: "A tag can really ask, or only invite a yes. If you are not sure, your voice goes up on the tag. If you expect yes, it goes down.",
        te: "tag నిజంగా అడగొచ్చు, లేదా అవును అనమని మాత్రమే అడగొచ్చు. మీకు తెలీకపోతే tag దగ్గర స్వరం పైకి; అవును అంటారని తెలిస్తే కిందికి.",
      },
      bridge: {
        te: ["పార్క్", "ఎనిమిదింటికి", "మూసేస్తారు", "కదా?"],
        en: [
          { text: "The park", role: "who" },
          { text: "closes", role: "action" },
          { text: "at eight,", role: "when" },
          { text: "doesn't it?", role: "action" },
        ],
      },
      examples: [
        { en: "The park closes at eight, doesn't it?", te: "పార్క్ ఎనిమిదింటికి మూసేస్తారు కదా?" },
        { en: "The new benches are nice, aren't they?", te: "కొత్త బెంచీలు బాగున్నాయి కదా?" },
        { en: "The gate opens at five, doesn't it?", te: "గేట్ ఐదింటికి తెరుస్తారు కదా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Asking or agreeing?", te: "అడగడమా, ఒప్పుకోమనడమా?" },
      items: [
        {
          form: "asking: voice up",
          useFor: { en: "You are not sure, and you want the answer.", te: "మీకు సరిగ్గా తెలీదు, జవాబు కావాలి." },
          example: { en: "The park closes at eight, doesn't it?", te: "పార్క్ ఎనిమిదింటికి మూసేస్తారు కదా?" },
        },
        {
          form: "agreeing: voice down",
          useFor: { en: "You expect yes; it is friendly talk.", te: "అవును అంటారని తెలుసు; ఇది స్నేహంగా మాట్లాడటం." },
          example: { en: "The new benches are nice, aren't they?", te: "కొత్త బెంచీలు బాగున్నాయి కదా?" },
        },
        {
          form: "a not sentence, a tag with no not",
          useFor: { en: "The sentence has not, so the tag drops it.", te: "వాక్యంలో not ఉంది, అందుకే tag లో not రాదు." },
          example: { en: "Dogs aren't allowed inside, are they?", te: "లోపలికి కుక్కల్ని రానివ్వరు కదా?" },
        },
        {
          form: "answer the fact",
          useFor: { en: "Say yes or no to the fact, not to the question.", te: "ప్రశ్నకి కాదు, జరిగేదానికి yes, no చెప్పండి." },
          example: { en: "Dogs aren't allowed inside, are they? No, they aren't.", te: "లోపలికి కుక్కల్ని రానివ్వరు కదా? రానివ్వరు." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "negative-answer",
      wrong: "Dogs aren't allowed inside, are they? Yes. (meaning not allowed)",
      right: "Dogs aren't allowed inside, are they? No, they aren't.",
      why: {
        en: "Telugu అవును agrees with the question, but English No tells the fact: dogs may not come in.",
        te: "తెలుగులో 'అవును' ప్రశ్నతో ఒప్పుకుంటుంది; ఇంగ్లీష్‌లో జరిగేది చెప్పాలి: రానివ్వకపోతే No.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "he-she-s",
      wrong: "The park close at eight, doesn't it?",
      right: "The park closes at eight, doesn't it?",
      why: {
        en: "One park is like it, so the verb takes s; the tag doesn't shows one thing too.",
        te: "ఒక్క పార్క్ (it లాగా), అందుకే verb కి s; tag లోని doesn't కూడా ఒక్కదాన్నే చూపిస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "A walker says: Lovely evening, isn't it? His voice goes down at the end. What does he want?",
        te: "ఒక వాకర్ Lovely evening, isn't it? అన్నారు. చివర ఆయన స్వరం కిందికి దిగింది. ఆయన ఉద్దేశం ఏంటి?",
      },
      options: ["He wants you to agree.", "He wants to know the time.", "He is not sure about the weather."],
      answer: 0,
      why: {
        en: "A falling tag is friendly talk; he expects a yes and is not asking for facts.",
        te: "స్వరం కిందికి దిగే tag స్నేహంగా మాట్లాడటం; ఆయన అవును అనే జవాబు ఆశిస్తున్నారు, వివరాలు అడగట్లేదు.",
      },
    },
    {
      id: "p2",
      type: "passage",
      kind: "notice",
      heading: "Gandhi Park, Rajahmundry",
      lines: [
        "Dear walkers,",
        "From 1 June, the park opens at 5 am and closes at 9 pm.",
        "The park is closed every Monday for maintenance.",
        "The gardeners water the lawn from 6 to 7 every morning.",
        "Please walk only on the walking track at that time.",
        "Dogs are not allowed inside the park.",
        "The new benches near the gate are for senior citizens.",
        "Please keep the park clean. Use the dustbins.",
        "Park Office, Municipal Corporation",
      ],
      questions: [
        {
          prompt: { en: "When is the park closed all day?", te: "పార్క్ రోజంతా ఎప్పుడు మూసి ఉంటుంది?" },
          options: ["Every Monday", "Every Sunday", "Every morning from 6 to 7"],
          answer: 0,
          why: {
            en: "The third line says it shuts one day a week for repair work.",
            te: "మూడో లైన్ ప్రకారం మరమ్మతు పనుల కోసం వారానికి ఒక రోజు మూసేస్తారు.",
          },
        },
        {
          prompt: { en: "Why should you stay on the track from 6 to 7?", te: "6 నుంచి 7 వరకు track మీదే ఎందుకు నడవాలి?" },
          options: ["The lawn is being watered", "The dogs are let out", "The benches are being painted"],
          answer: 0,
          why: {
            en: "The fourth and fifth lines say the grass gets water at that hour.",
            te: "నాలుగో, ఐదో లైన్ల ప్రకారం ఆ టైమ్‌లో పచ్చికకి నీళ్ళు పెడతారు.",
          },
        },
        {
          prompt: { en: "Who are the new benches for?", te: "కొత్త బెంచీలు ఎవరి కోసం?" },
          options: ["Senior citizens", "The gardeners", "Walkers with dogs"],
          answer: 0,
          why: {
            en: "The seventh line keeps the seats near the gate for older people.",
            te: "ఏడో లైన్ ప్రకారం గేట్ దగ్గర సీట్లు పెద్దవాళ్ళ కోసం.",
          },
        },
      ],
    },
    {
      id: "p3",
      type: "fillBlank",
      fixIt: "question",
      sentence: "Dogs aren't allowed inside, ___ they?",
      te: "లోపలికి కుక్కల్ని రానివ్వరు కదా?",
      options: ["are", "aren't", "do"],
      answer: 0,
      why: {
        en: "The sentence already has not, so the tag drops it; two nots are wrong.",
        te: "వాక్యంలో ఇప్పటికే not ఉంది, అందుకే tag లో not రాదు; రెండు not లు తప్పు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "article",
      sentence: "The new benches are near gate, aren't they?",
      wrongIndex: 5,
      fix: "The new benches are near the gate, aren't they?",
      why: {
        en: "The gate everyone knows takes the; Telugu has no word like the.",
        te: "అందరికీ తెలిసిన గేట్ కాబట్టి ముందు the కావాలి; తెలుగులో the లాంటి పదం లేదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A walker asks: You didn't see the new notice, did you? You did see it.",
        te: "ఒక వాకర్ You didn't see the new notice, did you? అని అడిగారు. మీరు చూశారు.",
      },
      expected: ["Yes, I did.", "Yes, I did. I saw it yesterday.", "Yes, I saw it."],
      options: ["Yes, I did.", "No, I did.", "Yes, I didn't."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "You are not sure the gate opens at five. Check with the gardener.",
        te: "గేట్ ఐదింటికి తెరుస్తారో లేదో మీకు సరిగ్గా తెలీదు. తోటమాలిని అడిగి నిర్ధారించుకోండి.",
      },
      expected: ["The gate opens at five, doesn't it?", "Does the gate open at five?", "The gate opens at five, right?"],
      options: ["The gate opens at five, doesn't it?", "The gate open at five, doesn't it?", "The gate opens at five, isn't it?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Checking the park timings", te: "పార్క్ టైమింగ్స్ నిర్ధారించుకోవడం" },
    scene: {
      en: "You want to walk later in the evenings. Rahim, the park's gardener, is near the gate.",
      te: "మీరు సాయంత్రాలు కొంచెం ఆలస్యంగా నడవాలనుకుంటున్నారు. పార్క్ తోటమాలి రహీమ్ గారు గేట్ దగ్గర ఉన్నారు.",
    },
    partner: { en: "Rahim (the park's gardener)", te: "రహీమ్ (పార్క్ తోటమాలి)" },
    voice: "b",
    skills: [
      { id: "tags", label: { en: "Asking and agreeing with tags", te: "tag తో అడగడం, ఒప్పుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good evening. Can I help you?",
        te: "గుడ్ ఈవెనింగ్. ఏం కావాలండీ?",
        hint: { en: "Greet him, and check the closing time. You are not sure of it.", te: "నమస్కారం చెప్పి, మూసే టైమ్ నిర్ధారించుకోండి. మీకు సరిగ్గా తెలీదు." },
        replies: [
          { say: "Good evening. The park closes at eight, doesn't it?", good: true, skill: "tags" },
          { say: "Good evening. The park closes at eight, isn't it?", good: false, skill: "tags", fixIt: "indian-english" },
        ],
      },
      {
        partner: "No, from this month it closes at nine.",
        te: "లేదండీ, ఈ నెల నుంచి తొమ్మిదింటికి మూసేస్తాం.",
        hint: { en: "Thank him, and check that it is open on Sundays too.", te: "థాంక్స్ చెప్పి, ఆదివారాలు కూడా తెరిచి ఉంటుందా అని నిర్ధారించుకోండి." },
        replies: [
          { say: "Thank you. It's open on Sundays too, isn't it?", good: true, skill: "tags" },
          { say: "Thank you. It's open in Sundays too, isn't it?", good: false, skill: "tags", fixIt: "preposition" },
        ],
      },
      {
        partner: "Yes, but it's closed on Mondays for maintenance.",
        te: "అవును, కానీ సోమవారాలు maintenance కోసం మూసేస్తాం.",
        hint: { en: "Say something friendly about the new benches, expecting a yes.", te: "కొత్త బెంచీల గురించి స్నేహంగా ఒక మాట అనండి; ఆయన అవును అంటారు." },
        replies: [
          { say: "Okay. The new benches are very nice, aren't they?", good: true, skill: "tags" },
          {
            say: "Okay. But the park is so dirty these days!",
            good: false,
            skill: "polite",
            react: { en: "We clean it every morning, you know.", te: "మేము రోజూ పొద్దున శుభ్రం చేస్తామండీ." },
          },
        ],
      },
      {
        partner: "Yes, they are. Is there anything else?",
        te: "అవునండీ. ఇంకేమైనా కావాలా?",
        hint: { en: "Say that's all, and thank him.", te: "అంతే అని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "No, that's all. Thank you very much.", good: true, skill: "polite" },
          { say: "No, that's all. Thanks you.", good: false, skill: "polite" },
        ],
      },
    ],
  },
};

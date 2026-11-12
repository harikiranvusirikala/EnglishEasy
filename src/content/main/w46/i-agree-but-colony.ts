import type { Lesson } from "../../types";

/** Week 46, Day 3 (CURRICULUM §5): agreeing and partly agreeing — I completely agree with Salma. That's true, but … */
export const day: Lesson = {
  id: "i-agree-but-colony",
  kind: "lesson",
  title: { en: "I Agree, But", te: "ఒప్పుకుంటాను, కానీ" },
  subtitle: "I completely agree; That's true, but …",
  summary: {
    en: "Learn to agree fully or only partly: I completely agree with Salma. That's true, but the roads are still very narrow.",
    te: "పూర్తిగా, లేదా కొంతవరకే ఒప్పుకోవడం నేర్చుకుందాం: I completely agree with Salma. That's true, but the roads are still very narrow.",
  },
  seo: {
    title: "Agreeing and Partly Agreeing in English for Telugu Speakers",
    description:
      "Say I completely agree with Salma and That's true, but the roads are still very narrow. Simple lessons for Telugu speakers on agreeing.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "completely agree", role: "action" },
    { text: "with Salma", role: "what" },
  ],
  core: [
    { en: "I completely agree with Salma.", te: "సల్మా గారు చెప్పినదానికి నేను పూర్తిగా ఒప్పుకుంటాను.", extra: ["to"] },
    { en: "That's true, but the roads are still very narrow.", te: "నిజమే, కానీ రోడ్లు ఇంకా చాలా ఇరుకుగా ఉన్నాయి.", extra: ["is"] },
    { en: "I agree. We need a speed breaker near the school.", te: "నేను ఒప్పుకుంటాను. స్కూల్ దగ్గర ఒక స్పీడ్ బ్రేకర్ కావాలి.", extra: ["am"] },
    { en: "I partly agree with you.", te: "మీతో కొంతవరకు ఒప్పుకుంటాను.", extra: ["agreeing"] },
    { en: "Vehicles go very fast on this road in the evening.", te: "సాయంత్రం ఈ రోడ్డు మీద బండ్లు చాలా వేగంగా వెళ్తాయి.", extra: ["goes"] },
    { en: "That's true, but speed breakers can hurt people with back pain.", te: "నిజమే, కానీ నడుము నొప్పి ఉన్నవాళ్ళకి స్పీడ్ బ్రేకర్లు ఇబ్బంది పెడతాయి.", extra: ["hurts"] },
    { en: "I completely agree. Schoolchildren cross here every morning.", te: "పూర్తిగా ఒప్పుకుంటాను. రోజూ పొద్దున స్కూల్ పిల్లలు ఇక్కడ రోడ్డు దాటుతారు.", extra: ["crosses"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "When a friend or neighbour gives an opinion today, answer with I completely agree or That's true, but …",
    te: "ఈ రోజు స్నేహితులో, పక్కింటివారో అభిప్రాయం చెప్తే, I completely agree లేదా That's true, but … అని జవాబు చెప్పండి.",
  },
  words: [
    { en: "completely", te: "పూర్తిగా" },
    { en: "that's true", te: "నిజమే" },
    { en: "partly", te: "కొంతవరకు" },
    { en: "speed breaker", te: "స్పీడ్ బ్రేకర్" },
    { en: "vehicles", te: "వాహనాలు, బండ్లు" },
  ],
  grammar: ["connectors", "present-simple", "prepositions", "politeness-softening"],
  topics: ["neighbours", "transport", "people"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Agreeing, fully or partly", te: "పూర్తిగా, కొంతవరకు ఒప్పుకోవడం" },
      body: {
        en: "If you fully agree, say I completely agree. If you agree only a little, say That's true, but … and add your own point.",
        te: "పూర్తిగా ఒప్పుకుంటే I completely agree అనండి. కొంతవరకే ఒప్పుకుంటే That's true, but … అని మీ మాట కలపండి.",
      },
      bridge: {
        te: ["సల్మా గారితో", "నేను", "పూర్తిగా ఒప్పుకుంటాను"],
        en: [
          { text: "I", role: "who" },
          { text: "completely agree", role: "action" },
          { text: "with Salma", role: "what" },
        ],
      },
      examples: [
        { en: "I completely agree with Salma.", te: "సల్మా గారు చెప్పినదానికి నేను పూర్తిగా ఒప్పుకుంటాను." },
        { en: "That's true, but the roads are still very narrow.", te: "నిజమే, కానీ రోడ్లు ఇంకా చాలా ఇరుకుగా ఉన్నాయి." },
        { en: "I agree. We need a speed breaker near the school.", te: "నేను ఒప్పుకుంటాను. స్కూల్ దగ్గర ఒక స్పీడ్ బ్రేకర్ కావాలి." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How much do you agree?", te: "ఎంతవరకు ఒప్పుకుంటారు?" },
      items: [
        {
          form: "I completely agree.",
          useFor: { en: "You agree with all of it.", te: "మొత్తం మాటకి ఒప్పుకుంటే." },
          example: { en: "I completely agree. Schoolchildren cross here every morning.", te: "పూర్తిగా ఒప్పుకుంటాను. రోజూ పొద్దున స్కూల్ పిల్లలు ఇక్కడ రోడ్డు దాటుతారు." },
        },
        {
          form: "I agree.",
          useFor: { en: "A simple yes to an opinion.", te: "అభిప్రాయానికి మామూలుగా సరే అనడానికి." },
          example: { en: "I agree. We need a speed breaker near the school.", te: "నేను ఒప్పుకుంటాను. స్కూల్ దగ్గర ఒక స్పీడ్ బ్రేకర్ కావాలి." },
        },
        {
          form: "I partly agree.",
          useFor: { en: "You agree with some of it, not all.", te: "కొంత మాటకే ఒప్పుకుంటే, మొత్తానికి కాదు." },
          example: { en: "I partly agree with you.", te: "మీతో కొంతవరకు ఒప్పుకుంటాను." },
        },
        {
          form: "That's true, but …",
          useFor: { en: "Say yes to one part, then add another point.", te: "ఒక భాగానికి సరే అని, తర్వాత ఇంకో విషయం చెప్పడానికి." },
          example: { en: "That's true, but speed breakers can hurt people with back pain.", te: "నిజమే, కానీ నడుము నొప్పి ఉన్నవాళ్ళకి స్పీడ్ బ్రేకర్లు ఇబ్బంది పెడతాయి." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      wrong: "I am agree with Salma.",
      right: "I agree with Salma.",
      why: {
        en: "Agree is already the action word, so it needs no am before it.",
        te: "agree నే verb; దాని ముందు am అక్కర్లేదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "preposition",
      wrong: "I agree to Salma.",
      right: "I agree with Salma.",
      why: {
        en: "You agree with a person, just like Telugu తో; never agree to a person.",
        te: "మనిషితో ఒప్పుకోవడానికి with, తెలుగులో 'తో' లాగానే; to కాదు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your neighbour Imran likes the speed breaker plan. Tell the others at the meeting.",
        te: "మీ పక్కింటి ఇమ్రాన్ గారికి స్పీడ్ బ్రేకర్ ప్లాన్ నచ్చింది. మీటింగ్‌లో మిగతావాళ్ళకి చెప్పండి.",
      },
      options: ["Imran agrees with the plan.", "Imran agree with the plan.", "Imran is agree with the plan."],
      answer: 0,
      why: {
        en: "One person, like he, takes s on the verb, and agree never needs is.",
        te: "ఒక్కరైతే (he లాగా) verb కి s వస్తుంది; agree ముందు is రాదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "That's true, ___ the roads are still very narrow.",
      te: "నిజమే, కానీ రోడ్లు ఇంకా చాలా ఇరుకుగా ఉన్నాయి.",
      options: ["but", "because", "so"],
      answer: 0,
      why: {
        en: "But brings a different point after you agree; because would give a reason instead.",
        te: "ఒప్పుకున్న తర్వాత వేరే విషయం చెప్పడానికి but; because అయితే కారణం అవుతుంది.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "negative-answer",
      prompt: {
        en: "A neighbour asks about the speed breaker plan: Don't you agree with the plan? You don't agree. Answer.",
        te: "స్పీడ్ బ్రేకర్ ప్లాన్ గురించి పక్కింటివారు అడుగుతున్నారు: Don't you agree with the plan? మీరు ఒప్పుకోవట్లేదు. జవాబు చెప్పండి.",
      },
      options: [
        "No, I don't. Ambulances will have to slow down.",
        "Yes, I don't. Ambulances will have to slow down.",
        "Yes. Ambulances will have to slow down.",
      ],
      answer: 0,
      why: {
        en: "If your answer is not, start with No, even after a don't question; Telugu often says అవును here.",
        te: "మీ జవాబు 'లేదు' అయితే, ప్రశ్నలో don't ఉన్నా No తోనే మొదలుపెట్టాలి; తెలుగులో ఇక్కడ 'అవును' అంటాం.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "That's true, but vehicles goes too fast here.",
      wrongIndex: 4,
      fix: "That's true, but vehicles go too fast here.",
      why: {
        en: "Vehicles means more than one, so the verb takes no s.",
        te: "vehicles అంటే ఒకటి కంటే ఎక్కువ; అందుకే verb కి s రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "At the meeting, Salma says the colony needs a speed breaker. You fully agree. Say so.",
        te: "మీటింగ్‌లో కాలనీకి స్పీడ్ బ్రేకర్ కావాలని సల్మా గారు అంటున్నారు. మీరు పూర్తిగా ఒప్పుకుంటున్నారు. అదే చెప్పండి.",
      },
      expected: ["I completely agree with Salma.", "I agree with Salma.", "I completely agree."],
      options: ["I completely agree with Salma.", "I completely agree to Salma.", "I am completely agree with Salma."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your neighbour says the road is safe now. Agree with part of it, and say vehicles still go fast.",
        te: "ఇప్పుడు రోడ్డు సురక్షితంగా ఉందని పక్కింటివారు అంటున్నారు. కొంతవరకు ఒప్పుకుని, బండ్లు ఇంకా వేగంగా వెళ్తున్నాయని చెప్పండి.",
      },
      expected: ["That's true, but vehicles still go very fast.", "That's true, but vehicles still go fast.", "I partly agree. Vehicles still go fast."],
      options: ["That's true, but vehicles still go very fast.", "That's true, because vehicles still go very fast.", "Wrong. Vehicles still go very fast."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A new speed breaker", te: "కొత్త స్పీడ్ బ్రేకర్" },
    scene: {
      en: "Your neighbour Gopal meets you at the gate. Workers are building a speed breaker near the school.",
      te: "మీ పక్కింటి గోపాల్ గారు గేటు దగ్గర కలిశారు. స్కూల్ దగ్గర పనివాళ్ళు స్పీడ్ బ్రేకర్ వేస్తున్నారు.",
    },
    partner: { en: "Gopal (your neighbour)", te: "గోపాల్ (పక్కింటివారు)" },
    voice: "b",
    skills: [
      { id: "agree", label: { en: "Agreeing", te: "ఒప్పుకోవడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Good morning! Did you see? They're putting a speed breaker near the school.",
        te: "నమస్కారం! చూశారా? స్కూల్ దగ్గర స్పీడ్ బ్రేకర్ వేస్తున్నారు.",
        hint: { en: "Greet him, and say you think it is a very good idea.", te: "నమస్కారం చెప్పి, చాలా మంచి ఆలోచన అని చెప్పండి." },
        replies: [
          { say: "Good morning! Yes, I think it's a very good idea.", good: true, skill: "agree" },
          { say: "Good morning! Yes, I am thinking it's a very good idea.", good: false, skill: "agree" },
        ],
      },
      {
        partner: "Bikes go very fast here in the evening.",
        te: "సాయంత్రం ఇక్కడ బైకులు చాలా వేగంగా వెళ్తాయి.",
        hint: { en: "Agree fully, and say schoolchildren cross there every morning.", te: "పూర్తిగా ఒప్పుకుని, రోజూ పొద్దున స్కూల్ పిల్లలు అక్కడ దాటుతారని చెప్పండి." },
        replies: [
          { say: "I completely agree. Schoolchildren cross here every morning.", good: true, skill: "agree" },
          { say: "I completely agree. Schoolchildren crosses here every morning.", good: false, skill: "agree" },
        ],
      },
      {
        partner: "But my friend Ramana says it's bad for people with back pain.",
        te: "కానీ నడుము నొప్పి ఉన్నవాళ్ళకి ఇది మంచిది కాదని మా స్నేహితుడు రమణ గారు అంటున్నారు.",
        hint: { en: "Agree with part of it, then say safety comes first.", te: "కొంతవరకు ఒప్పుకుని, ముందు భద్రత ముఖ్యం అని చెప్పండి." },
        replies: [
          { say: "That's true, but safety comes first.", good: true, skill: "agree" },
          { say: "That's true, but safety come first.", good: false, skill: "agree", fixIt: "he-she-s" },
          {
            say: "Ramana is wrong. He doesn't know anything.",
            good: false,
            skill: "polite",
            react: { en: "Oh, please. He only has a bad back.", te: "అయ్యో, అలా అనకండి. ఆయనకి నడుము నొప్పి, అంతే." },
          },
        ],
      },
      {
        partner: "You're right. Let's talk to the colony secretary.",
        te: "మీరు చెప్పింది నిజమే. కాలనీ సెక్రటరీ గారితో మాట్లాడదాం.",
        hint: { en: "Agree, and suggest Sunday for it.", te: "ఒప్పుకుని, ఆదివారం మాట్లాడదామని సూచించండి." },
        replies: [
          { say: "Good idea. Let's talk to the secretary on Sunday.", good: true, skill: "agree" },
          { say: "Good idea. Let's talk to the secretary in Sunday.", good: false, skill: "agree", fixIt: "preposition" },
        ],
      },
    ],
  },
};

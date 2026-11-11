import type { Lesson } from "../../types";

/** Week 35, Day 5 (CURRICULUM §4): talking about films and TV shows — What is it about? It's about … It was very funny. */
export const day: Lesson = {
  id: "whats-it-about",
  kind: "lesson",
  title: { en: "What's It About?", te: "సినిమాలు, TV" },
  subtitle: "films and TV shows",
  summary: {
    en: "Learn to talk about films and serials: What is it about? It's about a family in a village. It was very funny.",
    te: "సినిమాలు, సీరియల్స్ గురించి మాట్లాడటం నేర్చుకుందాం: What is it about? It's about a family in a village. It was very funny.",
  },
  seo: {
    title: "Talking About Films and Serials in English for Telugu Speakers",
    description:
      "Ask What is the film about? and say It's about a family in a village. Simple lessons for Telugu speakers on films and TV shows.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is about", role: "action" },
    { text: "a family in a village", role: "what" },
  ],
  core: [
    { en: "What is the film about?", te: "ఆ సినిమా దేని గురించి?", extra: ["does"] },
    { en: "It's about a family in a village.", te: "అది ఒక పల్లెటూరిలోని కుటుంబం గురించి.", extra: ["families"] },
    { en: "It was very funny.", te: "ఆ సినిమా చాలా నవ్వించింది.", extra: ["too"] },
    { en: "Did you watch the new serial?", te: "కొత్త సీరియల్ చూశారా?", extra: ["watched"] },
    { en: "You should watch it. It's very good.", te: "మీరు తప్పకుండా చూడండి. చాలా బాగుంది.", extra: ["watching"] },
    { en: "The actors were good, but the story was slow.", te: "నటీనటులు బాగా నటించారు, కానీ కథ నెమ్మదిగా సాగింది.", extra: ["is"] },
    { en: "It's on TV every night at nine.", te: "అది రోజూ రాత్రి తొమ్మిదింటికి TV లో వస్తుంది.", extra: ["in"] },
  ],
  key: [0, 1, 2, 4],
  tryToday: {
    en: "Think of a film or serial you like. Say what it's about in one sentence.",
    te: "మీకు నచ్చిన ఒక సినిమా లేదా సీరియల్ గుర్తు చేసుకుని, అది దేని గురించో ఒక్క వాక్యంలో చెప్పండి.",
  },
  words: [
    { en: "story", te: "కథ" },
    { en: "episode", te: "ఎపిసోడ్, ఒక భాగం" },
    { en: "recently", te: "ఈ మధ్య" },
    { en: "actor", te: "నటుడు, నటి" },
    { en: "It's about", te: "అది … గురించి" },
  ],
  grammar: ["question-words", "past-simple"],
  topics: ["home", "feelings"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Talking about a film", te: "సినిమా గురించి మాట్లాడటం" },
      body: {
        en: "To ask about the story, say What is it about? Answer with It's about: It's about a family in a village. For a film you saw, use was: It was very funny.",
        te: "కథ అడగాలంటే What is it about? (అది దేని గురించి?) జవాబు It's about తో: It's about a family in a village. చూసేసిన సినిమా గురించి was: It was very funny.",
      },
      bridge: {
        te: ["అది", "ఒక పల్లెటూరి కుటుంబం", "గురించి"],
        en: [
          { text: "It", role: "who" },
          { text: "is about", role: "action" },
          { text: "a family in a village", role: "what" },
        ],
      },
      examples: [
        { en: "It's about a family in a village.", te: "అది ఒక పల్లెటూరిలోని కుటుంబం గురించి." },
        { en: "It was very funny.", te: "ఆ సినిమా చాలా నవ్వించింది." },
        { en: "The actors were good, but the story was slow.", te: "నటీనటులు బాగా నటించారు, కానీ కథ నెమ్మదిగా సాగింది." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say about a show", te: "సినిమా, సీరియల్ గురించి ఏం చెప్పాలి" },
      items: [
        {
          form: "It's about …",
          useFor: { en: "What the story is.", te: "కథ దేని గురించో చెప్పడానికి." },
          example: { en: "It's about a family in a village.", te: "అది ఒక పల్లెటూరిలోని కుటుంబం గురించి." },
        },
        {
          form: "It was …",
          useFor: { en: "How you found a film you saw.", te: "చూసిన సినిమా ఎలా ఉందో చెప్పడానికి." },
          example: { en: "It was very funny.", te: "ఆ సినిమా చాలా నవ్వించింది." },
        },
        {
          form: "It's on TV …",
          useFor: { en: "When to watch it.", te: "ఎప్పుడు వస్తుందో చెప్పడానికి." },
          example: { en: "It's on TV every night at nine.", te: "అది రోజూ రాత్రి తొమ్మిదింటికి TV లో వస్తుంది." },
        },
        {
          form: "You should watch it.",
          useFor: { en: "Telling a friend to watch it.", te: "స్నేహితులకి చూడమని చెప్పడానికి." },
          example: { en: "You should watch it. It's very good.", te: "మీరు తప్పకుండా చూడండి. చాలా బాగుంది." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "The film was too good.",
      right: "The film was very good.",
      why: {
        en: "Too means more than you want, a problem; to praise something, say very.",
        te: "too అంటే అవసరానికి మించి, అంటే సమస్య; మెచ్చుకోవడానికి very అనండి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "It about a family in a village.",
      right: "It's about a family in a village.",
      why: {
        en: "Telugu says అది … గురించి with no verb, but English needs is before about.",
        te: "తెలుగులో verb లేకుండా 'అది … గురించి' అంటాం; ఇంగ్లీష్‌లో about ముందు is కావాలి.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "question",
      prompt: { en: "Ask a friend what the new film is about.", te: "కొత్త సినిమా దేని గురించో స్నేహితులని అడగండి." },
      options: ["What the new film is about?", "What does the new film about?", "What is the new film about?"],
      answer: 2,
      why: {
        en: "In a question, is comes before the film, and about stays at the end.",
        te: "ప్రశ్నలో is ముందు వస్తుంది; about చివర్లోనే ఉంటుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "It's ___ two brothers in Guntur.",
      te: "అది గుంటూరులోని ఇద్దరు అన్నదమ్ముల గురించి.",
      options: ["about", "of", "for"],
      answer: 0,
      why: {
        en: "The story of a film goes after about, like Telugu గురించి.",
        te: "సినిమా కథ చెప్పేటప్పుడు 'గురించి' అంటే about.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "indian-english",
      prompt: { en: "You liked the film a lot. What do you say?", te: "ఆ సినిమా మీకు చాలా నచ్చింది. ఏమంటారు?" },
      options: ["It was too good.", "It was very good.", "It was very much good."],
      answer: 1,
      why: {
        en: "Use very to praise; too means a problem, and very much never comes before good.",
        te: "మెచ్చుకోవడానికి very; too అంటే సమస్య, good ముందు very much రాదు.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "A new episode come on TV every night.",
      wrongIndex: 3,
      fix: "A new episode comes on TV every night.",
      why: {
        en: "One episode is like he or she, so the verb takes s.",
        te: "ఒక్క ఎపిసోడ్ అంటే he, she లాగే; అందుకే verb కి s.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell a friend the film made you laugh a lot.",
        te: "ఆ సినిమా మిమ్మల్ని చాలా నవ్వించిందని స్నేహితులకి చెప్పండి.",
      },
      expected: ["It was very funny.", "The film was very funny.", "It was a very funny film."],
      options: ["It was very funny.", "It was very funny film.", "It very funny."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Tell a friend to watch the new serial.",
        te: "కొత్త సీరియల్ చూడమని స్నేహితులకి చెప్పండి.",
      },
      expected: ["You should watch the new serial.", "You should watch it.", "You should watch it. It's very good."],
      options: ["You should watch the new serial.", "You should watching the new serial.", "You should to watch the new serial."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A film for the weekend", te: "వీకెండ్‌కి ఒక సినిమా" },
    scene: {
      en: "Your neighbour Imran wants to see a film this weekend. Tell him about one you liked.",
      te: "మీ పక్కింటి ఇమ్రాన్ గారు ఈ వీకెండ్ ఒక సినిమా చూడాలనుకుంటున్నారు. మీకు నచ్చిన సినిమా గురించి చెప్పండి.",
    },
    partner: { en: "Imran (neighbour)", te: "ఇమ్రాన్ (పక్కింటాయన)" },
    voice: "b",
    skills: [{ id: "film", label: { en: "Talking about films", te: "సినిమాల గురించి" } }],
    turns: [
      {
        partner: "Did you see any good films recently?",
        te: "ఈ మధ్య ఏమైనా మంచి సినిమాలు చూశారా?",
        hint: { en: "Say yes, and when you saw one.", te: "అవునని, ఎప్పుడు చూశారో చెప్పండి." },
        replies: [
          { say: "Yes, I saw a Telugu film last week.", good: true, skill: "film" },
          { say: "Yes, I have seen a Telugu film last week.", good: false, skill: "film" },
        ],
      },
      {
        partner: "Oh, nice! What's it about?",
        te: "అవునా! అది దేని గురించి?",
        hint: { en: "Say what the story is: a village family.", te: "కథ ఏంటో చెప్పండి: ఒక పల్లెటూరి కుటుంబం." },
        replies: [
          { say: "It's about a family in a village.", good: true, skill: "film" },
          { say: "It about family in a village.", good: false, skill: "film", fixIt: "be" },
          {
            say: "Go and watch it. Why should I tell you?",
            good: false,
            skill: "film",
            react: { en: "Okay, okay! Sorry I asked.", te: "సరే, సరే! అడిగినందుకు సారీ." },
          },
        ],
      },
      {
        partner: "Is it a sad film?",
        te: "అది బాధగా ఉండే సినిమానా?",
        hint: { en: "Say no: it made you laugh a lot.", te: "లేదని చెప్పండి: అది మిమ్మల్ని చాలా నవ్వించింది." },
        replies: [
          { say: "No, it was very funny.", good: true, skill: "film" },
          { say: "No, it was a very funny.", good: false, skill: "film", fixIt: "article" },
        ],
      },
      {
        partner: "Then I'll watch it this Sunday.",
        te: "అయితే ఈ ఆదివారం చూస్తాను.",
        hint: { en: "Say that is a good idea, and he will like it.", te: "మంచి ఆలోచన అని, ఆయనకి నచ్చుతుందని చెప్పండి." },
        replies: [
          { say: "Good idea! You'll enjoy it.", good: true, skill: "film" },
          { say: "Good idea! You'll enjoy.", good: false, skill: "film" },
        ],
      },
    ],
  },
};

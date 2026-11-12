import type { Lesson } from "../../types";

/**
 * Week 80, Day 2 (CURRICULUM §5): Checkpoint mix — guesses with must be, might be and can't be (Week 73), probably and
 * definitely (Week 72), and tag questions (Week 76), on a day out that doesn't go to plan.
 */
export const day: Lesson = {
  id: "guesses-and-plans-mix",
  kind: "lesson",
  title: { en: "Guesses and Plans", te: "ఊహలు, ప్లాన్లు" },
  subtitle: "must be, might, probably and tags",
  summary: {
    en: "Guess why something is closed or late, say how sure you are about a plan, and check with a friend using a short tag.",
    te: "ఏదైనా ఎందుకు మూసి ఉందో, ఎందుకు ఆలస్యమైందో ఊహించడం, ప్లాన్ గురించి ఎంత ఖచ్చితంగా ఉన్నారో చెప్పడం, చిన్న tag తో స్నేహితుల్ని అడగడం.",
  },
  seo: {
    title: "Guesses and Plans in English for Telugu Speakers",
    description:
      "Say The shop must be closed today and We'll probably go tomorrow, won't we? A review lesson for Telugu speakers on guesses and plans.",
  },
  pattern: [
    { text: "The shop", role: "who" },
    { text: "must be", role: "action" },
    { text: "closed", role: "what" },
    { text: "today", role: "when" },
  ],
  core: [
    { en: "The shop must be closed today.", te: "ఈ రోజు షాపు మూసేసి ఉంటారు.", extra: ["is"] },
    { en: "We'll probably go tomorrow, won't we?", te: "బహుశా రేపు వెళ్తాం, కదా?", extra: ["will"] },
    { en: "The bus might be late because of the rain.", te: "వర్షం వల్ల బస్సు ఆలస్యం కావచ్చు.", extra: ["is"] },
    { en: "It's a holiday today, isn't it?", te: "ఈ రోజు సెలవు కదా?", extra: ["no"] },
    { en: "There's a long queue. It might take an hour.", te: "పెద్ద క్యూ ఉంది. గంట పట్టొచ్చు.", extra: ["must"] },
    { en: "The temple can't be closed. The lights are on.", te: "గుడి మూసేసి ఉండదు. లైట్లు వెలుగుతున్నాయి." },
    { en: "Let's turn back. We can try again on Sunday.", te: "వెనక్కి వెళ్ళిపోదాం. ఆదివారం మళ్ళీ ప్రయత్నిద్దాం.", extra: ["in"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Next time a shop is shut or a bus is late, guess the reason aloud in English: It must be … or It might be …",
    te: "ఈసారి ఏదైనా షాపు మూసి ఉన్నా, బస్సు ఆలస్యమైనా, కారణం ఇంగ్లీష్‌లో గట్టిగా ఊహించి చెప్పండి: It must be … లేదా It might be …",
  },
  words: [
    { en: "day out", te: "ఒక రోజు సరదాగా బయటికి వెళ్ళడం" },
    { en: "detour", te: "చుట్టూ తిరిగి వెళ్ళే దారి" },
    { en: "turn back", te: "వెనక్కి తిరిగి వెళ్ళడం" },
    { en: "plan B", te: "రెండో ప్లాన్, వేరే దారి" },
    { en: "unexpected", te: "అనుకోని" },
  ],
  grammar: ["might-may", "will", "indirect-tag-questions"],
  topics: ["travel", "transport", "time"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "Guessing and planning", te: "ఊహించడం, ప్లాన్ చేయడం" },
      body: {
        en: "Almost sure? Say must be. Not sure? Say might be or probably. To check a plan with a friend, add a short tag that matches the verb: won't we? isn't it?",
        te: "దాదాపు ఖచ్చితంగా తెలిస్తే must be. తెలియకపోతే might be లేదా probably. స్నేహితుల్ని ప్లాన్ గురించి అడగాలంటే, verb కి సరిపోయే చిన్న tag చేర్చండి: won't we? isn't it?",
      },
      bridge: {
        te: ["ఈ రోజు", "షాపు", "మూసేసి ఉంటారు"],
        en: [
          { text: "The shop", role: "who" },
          { text: "must be", role: "action" },
          { text: "closed", role: "what" },
          { text: "today", role: "when" },
        ],
      },
      examples: [
        { en: "The shop must be closed today.", te: "ఈ రోజు షాపు మూసేసి ఉంటారు." },
        { en: "We'll probably go tomorrow, won't we?", te: "బహుశా రేపు వెళ్తాం, కదా?" },
        { en: "The bus might be late because of the rain.", te: "వర్షం వల్ల బస్సు ఆలస్యం కావచ్చు." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "How sure are you?", te: "ఎంత ఖచ్చితంగా?" },
      items: [
        {
          form: "must be",
          useFor: { en: "You are almost sure.", te: "దాదాపు ఖచ్చితంగా తెలిసినప్పుడు." },
          example: { en: "Nobody is answering. They must be at the temple.", te: "ఎవరూ పలకట్లేదు. గుడికి వెళ్ళి ఉంటారు." },
        },
        {
          form: "might be",
          useFor: { en: "It is possible, but you are not sure.", te: "అవ్వొచ్చు, కానీ ఖచ్చితంగా తెలీదు." },
          example: { en: "There's a long queue. It might take an hour.", te: "పెద్ద క్యూ ఉంది. గంట పట్టొచ్చు." },
        },
        {
          form: "can't be",
          useFor: { en: "You are sure it is not true.", te: "అది నిజం కాదని ఖచ్చితంగా తెలిసినప్పుడు." },
          example: { en: "The temple can't be closed. The lights are on.", te: "గుడి మూసేసి ఉండదు. లైట్లు వెలుగుతున్నాయి." },
        },
        {
          form: "probably",
          useFor: { en: "A plan you are fairly sure about.", te: "దాదాపు ఖాయమైన ప్లాన్." },
          example: { en: "We'll probably take a detour because of the traffic.", te: "ట్రాఫిక్ వల్ల బహుశా చుట్టూ తిరిగి వెళ్తాం." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "The shop must closed today.",
      right: "The shop must be closed today.",
      why: {
        en: "After must or might, English needs be before closed; Telugu ఉంటారు hides it.",
        te: "must, might తర్వాత closed ముందు be తప్పనిసరి; తెలుగులో 'మూసేసి ఉంటారు' లో అది కనిపించదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "We'll go tomorrow, no?",
      right: "We'll go tomorrow, won't we?",
      why: {
        en: "Telugu కదా? fits every sentence, but an English tag matches the verb; no? sounds rough.",
        te: "తెలుగులో 'కదా?' ఏ వాక్యానికైనా సరిపోతుంది; ఇంగ్లీష్‌లో tag verb కి సరిపోవాలి. no? అంటే మొరటుగా వినిపిస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "You go to your friend's house. Nobody answers, and there is a lock on the door. What do you say?",
        te: "మీ స్నేహితుల ఇంటికి వెళ్ళారు. ఎవరూ పలకట్లేదు, తలుపుకి తాళం వేసి ఉంది. ఏమంటారు?",
      },
      options: ["They must be out.", "They must out.", "They can't be out."],
      answer: 0,
      why: {
        en: "A lock on the door makes you almost sure, and be is never dropped after must.",
        te: "తలుపుకి తాళం ఉంది కాబట్టి దాదాపు ఖచ్చితం; must తర్వాత be ఎప్పుడూ వదలకూడదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "You're coming with us on Sunday, ___ you?",
      te: "ఆదివారం మీరు మాతో వస్తున్నారు కదా?",
      options: ["aren't", "don't", "isn't"],
      answer: 0,
      why: {
        en: "The tag copies the verb of the sentence: you're takes aren't you.",
        te: "tag వాక్యంలోని verb నే మళ్ళీ వాడుతుంది: you're కి aren't you.",
      },
    },
    {
      id: "p3",
      type: "readIt",
      kind: "sign",
      heading: "Sri Durga Kirana Stores",
      lines: ["Closed today", "for Ugadi", "Open tomorrow from 7 am", "Ugadi wishes to all"],
      prompt: {
        en: "Your friend wants to buy rice here today. You see this board. What do you tell her?",
        te: "మీ స్నేహితురాలు ఈ రోజు ఇక్కడ బియ్యం కొనాలనుకుంటున్నారు. ఈ బోర్డు కనిపించింది. ఆవిడకి ఏం చెప్తారు?",
      },
      options: ["It's closed for Ugadi. Let's come tomorrow.", "It must be closed for lunch.", "It opens again this evening."],
      answer: 0,
      why: {
        en: "The board gives the reason and the opening time, so there is nothing to guess.",
        te: "బోర్డు మీదే కారణం, మళ్ళీ తెరిచే టైమ్ ఉన్నాయి; కాబట్టి ఊహించాల్సింది ఏమీ లేదు.",
      },
      say: "Closed today for Ugadi. Open tomorrow from 7 am.",
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "he-she-s",
      sentence: "The museum close at five on Sundays, doesn't it?",
      wrongIndex: 2,
      fix: "The museum closes at five on Sundays, doesn't it?",
      why: {
        en: "One museum, like he or she, takes s; the tag doesn't shows it too.",
        te: "ఒక్క museum (he, she లాగా), అందుకే verb కి s; tag లోని doesn't కూడా అదే చెప్తుంది.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You didn't check the timings? You did not check them.",
        te: "'You didn't check the timings?' అని స్నేహితులు అడుగుతున్నారు. మీరు చూడలేదు.",
      },
      expected: ["No, I didn't. Sorry.", "No, I didn't check them.", "No, I forgot to check."],
      options: ["No, I didn't. Sorry.", "Yes, I didn't. Sorry.", "No, I didn't checked. Sorry."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The park by the lake is closed. Suggest going to the beach instead, as a question.",
        te: "చెరువు దగ్గర పార్క్ మూసేశారు. బదులుగా బీచ్‌కి వెళ్దామని ప్రశ్న రూపంలో సూచించండి.",
      },
      expected: ["Why don't we go to the beach instead?", "Shall we go to the beach instead?", "How about the beach instead?"],
      options: ["Why don't we go to the beach instead?", "Why we don't go to the beach instead?", "Why don't we going to the beach instead?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "A day out goes wrong", te: "అనుకున్నట్టు జరగని రోజు" },
    scene: {
      en: "It's Monday. You and your friend Imran reach the Nehru Zoo Park in Hyderabad for a day out. The gate is shut.",
      te: "ఈ రోజు సోమవారం. సరదాగా గడపడానికి మీరు, మీ స్నేహితుడు ఇమ్రాన్ గారు హైదరాబాద్‌లోని నెహ్రూ జూ పార్క్‌కి వచ్చారు. గేటు మూసి ఉంది.",
    },
    partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితుడు)" },
    voice: "b",
    skills: [
      { id: "guess", label: { en: "Guessing the reason", te: "కారణం ఊహించడం" } },
      { id: "plan", label: { en: "Changing the plan", te: "ప్లాన్ మార్చడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Oh no! The gate is shut, and nobody is here. How unexpected!",
        te: "అయ్యో! గేటు మూసేసి ఉంది, ఇక్కడ ఎవరూ లేరు. అస్సలు అనుకోలేదు!",
        hint: { en: "Guess the reason. You are almost sure it is the weekly holiday.", te: "కారణం ఊహించండి. వారానికోసారి వచ్చే సెలవు అని దాదాపు ఖచ్చితంగా అనిపిస్తోంది." },
        replies: [
          { say: "It's Monday. It must be closed on Mondays.", good: true, skill: "guess" },
          { say: "It must be their weekly holiday.", good: true, skill: "guess" },
          { say: "It's Monday. It must closed on Mondays.", good: false, skill: "guess", fixIt: "be" },
        ],
      },
      {
        partner: "You're right. We should have checked first, shouldn't we?",
        te: "మీరు చెప్పింది నిజమే. ముందే చూసుకోవాల్సింది, కదా?",
        hint: { en: "Agree, and share the blame kindly.", te: "ఒప్పుకుని, తప్పు ఇద్దరిదీ అని మర్యాదగా చెప్పండి." },
        replies: [
          { say: "Yes, we should have. Never mind, it happens.", good: true, skill: "polite" },
          {
            say: "You should have checked. You planned this trip!",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. My mistake. Sorry.", te: "సరే, సరే. నాదే తప్పు. సారీ." },
          },
        ],
      },
      {
        partner: "So what's our plan B?",
        te: "మరి మన రెండో ప్లాన్ ఏంటి?",
        hint: { en: "Suggest the lake nearby, and say it is probably open.", te: "దగ్గర్లో ఉన్న చెరువు దగ్గరికి వెళ్దామని, అది బహుశా తెరిచే ఉంటుందని చెప్పండి." },
        replies: [
          { say: "Let's go to the lake nearby. It'll probably be open.", good: true, skill: "plan" },
          { say: "How about the lake? It's probably open today.", good: true, skill: "plan" },
          { say: "Let's go to lake nearby. It'll probably be open.", good: false, skill: "plan", fixIt: "article" },
        ],
      },
      {
        partner: "Good idea. We'll come back to the zoo next week, won't we?",
        te: "మంచి ఆలోచన. వచ్చే వారం మళ్ళీ జూకి వద్దాం, కదా?",
        hint: { en: "Agree, and suggest a day for it.", te: "ఒప్పుకుని, ఒక రోజు సూచించండి." },
        replies: [
          { say: "Yes, definitely. Let's come on Sunday.", good: true, skill: "plan" },
          { say: "Yes, definitely. Let's come in Sunday.", good: false, skill: "plan", fixIt: "preposition" },
        ],
      },
    ],
  },
};

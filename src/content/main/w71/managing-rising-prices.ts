import type { Lesson } from "../../types";

/** Week 71, Day 5 (CURRICULUM §5): ways to cope with rising prices — I've started buying vegetables at the Rythu Bazaar. I've cut down on eating out. */
export const day: Lesson = {
  id: "managing-rising-prices",
  kind: "lesson",
  title: { en: "Managing the Budget", te: "ఖర్చులు సర్దుకోవడం" },
  subtitle: "I've started …, I've cut down on …",
  summary: {
    en: "Learn to share how you manage rising prices: I've started buying vegetables at the Rythu Bazaar.",
    te: "పెరుగుతున్న ధరలతో ఎలా సర్దుకుంటున్నారో చెప్పడం నేర్చుకుందాం: I've started buying vegetables at the Rythu Bazaar.",
  },
  seo: {
    title: "Managing the Budget in English for Telugu Speakers",
    description: "Say I've started buying vegetables at the Rythu Bazaar and I've cut down on eating out. Simple lessons for Telugu speakers on saving money.",
  },
  pattern: [
    { text: "I've", role: "who" },
    { text: "cut down on", role: "action" },
    { text: "eating out", role: "what" },
    { text: "this year", role: "when" },
  ],
  core: [
    { en: "I've started buying vegetables at the Rythu Bazaar.", te: "నేను రైతు బజార్‌లో కూరగాయలు కొనడం మొదలుపెట్టాను.", extra: ["buy"] },
    { en: "I've cut down on eating out.", te: "బయట తినడం తగ్గించాను.", extra: ["eat"] },
    { en: "I buy rice and dal in bulk now.", te: "ఇప్పుడు బియ్యం, పప్పు ఒకేసారి ఎక్కువగా కొంటాను.", extra: ["buying"] },
    { en: "Have you found any good ways to save?", te: "డబ్బు ఆదా చేయడానికి మీకు ఏమైనా మంచి మార్గాలు దొరికాయా?", extra: ["Has"] },
    { en: "I try not to waste any food.", te: "ఆహారం ఏమాత్రం వృథా చేయకుండా చూసుకుంటాను.", extra: ["don't"] },
    { en: "I compare prices before I buy anything.", te: "ఏదైనా కొనే ముందు ధరలు పోల్చి చూస్తాను.", extra: ["will"] },
    { en: "I switch off the lights and fans when I leave a room.", te: "రూమ్ నుంచి బయటికి వెళ్ళేటప్పుడు లైట్లు, ఫ్యాన్లు ఆపేస్తాను.", extra: ["on"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Think of one small way you save money. Tell a friend or neighbour: I've started … or I've cut down on …",
    te: "మీరు డబ్బు ఆదా చేసే ఒక చిన్న మార్గం గుర్తు చేసుకోండి. స్నేహితులకి గానీ పక్కింటివారికి గానీ చెప్పండి: I've started … లేదా I've cut down on …",
  },
  words: [
    { en: "cut down on", te: "తగ్గించడం" },
    { en: "eating out", te: "బయట, హోటల్‌లో తినడం" },
    { en: "Rythu Bazaar", te: "రైతు బజార్" },
    { en: "in bulk", te: "ఒకేసారి ఎక్కువగా" },
    { en: "waste", te: "వృథా చేయడం" },
  ],
  grammar: ["present-perfect", "phrasal-verbs", "present-simple"],
  topics: ["money", "market", "neighbours"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "What I've changed", te: "నేను మార్చుకున్నవి" },
      body: {
        en: "To share a new habit, say I've started with -ing. To say you do less of something, say I've cut down on: I've cut down on eating out.",
        te: "కొత్త అలవాటు చెప్పాలంటే I've started తర్వాత -ing వాడండి. ఏదైనా తక్కువ చేస్తుంటే I've cut down on అనండి: I've cut down on eating out.",
      },
      bridge: {
        te: ["బయట తినడం", "తగ్గించాను"],
        en: [
          { text: "I've", role: "who" },
          { text: "cut down on", role: "action" },
          { text: "eating out", role: "what" },
        ],
      },
      examples: [
        { en: "I've started buying vegetables at the Rythu Bazaar.", te: "నేను రైతు బజార్‌లో కూరగాయలు కొనడం మొదలుపెట్టాను." },
        { en: "I've cut down on eating out.", te: "బయట తినడం తగ్గించాను." },
        { en: "I buy rice and dal in bulk now.", te: "ఇప్పుడు బియ్యం, పప్పు ఒకేసారి ఎక్కువగా కొంటాను." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "Ways to save", te: "ఆదా చేసే మార్గాలు" },
      items: [
        {
          form: "I've started + -ing",
          useFor: { en: "A new habit.", te: "కొత్త అలవాటు." },
          example: { en: "I've started buying vegetables at the Rythu Bazaar.", te: "నేను రైతు బజార్‌లో కూరగాయలు కొనడం మొదలుపెట్టాను." },
        },
        {
          form: "I've cut down on …",
          useFor: { en: "Doing less of something.", te: "ఏదైనా తక్కువ చేయడం." },
          example: { en: "I've cut down on eating out.", te: "బయట తినడం తగ్గించాను." },
        },
        {
          form: "I + verb + now",
          useFor: { en: "What you usually do now.", te: "ఇప్పుడు మామూలుగా చేసే పని." },
          example: { en: "I compare prices before I buy anything.", te: "ఏదైనా కొనే ముందు ధరలు పోల్చి చూస్తాను." },
        },
        {
          form: "I try not to …",
          useFor: { en: "Something you are careful not to do.", te: "చేయకుండా జాగ్రత్తపడే పని." },
          example: { en: "I try not to waste any food.", te: "ఆహారం ఏమాత్రం వృథా చేయకుండా చూసుకుంటాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am preferring the Rythu Bazaar.",
      right: "I prefer the Rythu Bazaar.",
      why: {
        en: "Prefer is a feeling, not an action, so it takes no -ing.",
        te: "prefer ఒక ఇష్టం, పని కాదు; అందుకే -ing రాదు.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "indian-english",
      wrong: "I go for marketing every Sunday.",
      right: "I go shopping every Sunday.",
      why: {
        en: "In English, marketing means selling a product; for buying things, say shopping.",
        te: "ఇంగ్లీష్‌లో marketing అంటే వస్తువులు అమ్మే పని; కొనడానికి వెళ్ళడాన్ని shopping అంటారు.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      prompt: {
        en: "Your friend asks how you save on vegetables. Say you buy them at the farmers' market now.",
        te: "కూరగాయల మీద ఎలా ఆదా చేస్తున్నారని స్నేహితులు అడిగారు. ఇప్పుడు రైతు బజార్‌లో కొంటున్నారని చెప్పండి.",
      },
      options: [
        "I've started buying vegetables at the Rythu Bazaar.",
        "I've started buy vegetables at the Rythu Bazaar.",
        "I'm started buying vegetables at the Rythu Bazaar.",
      ],
      answer: 0,
      why: {
        en: "Started needs have before it, and the action after it takes -ing.",
        te: "started ముందు have కావాలి; దాని తర్వాత పనికి -ing వస్తుంది.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      fixIt: "article",
      sentence: "I buy rice in bulk once ___ month.",
      te: "నెలకి ఒకసారి బియ్యం ఒకేసారి ఎక్కువగా కొంటాను.",
      options: ["a", "the", "one"],
      answer: 0,
      why: {
        en: "Once a month means one time in each month; English needs a here.",
        te: "once a month అంటే 'నెలకి ఒకసారి'; ఇక్కడ a తప్పకుండా కావాలి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      fixIt: "he-she-s",
      prompt: {
        en: "Your friend Ramesh cooks at home now to save money. Tell another friend.",
        te: "డబ్బు ఆదా చేయడానికి మీ స్నేహితుడు రమేష్ గారు ఇప్పుడు ఇంట్లోనే వంట చేస్తున్నారు. ఇంకో స్నేహితులకి చెప్పండి.",
      },
      options: ["Ramesh cooks at home most days now.", "Ramesh cook at home most days now.", "Ramesh is cook at home most days now."],
      answer: 0,
      why: {
        en: "Ramesh is one person, like he, so cook takes s.",
        te: "రమేష్ గారు ఒక్కరే (he లాగా), అందుకే cook కి s వస్తుంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Vegetables is cheaper at the Rythu Bazaar.",
      wrongIndex: 1,
      fix: "Vegetables are cheaper at the Rythu Bazaar.",
      why: {
        en: "Vegetables means many, so use are, not is.",
        te: "vegetables అంటే చాలా, అందుకే is కాదు, are వాడాలి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your friend asks if you still eat at hotels often. Say you do it less now.",
        te: "ఇంకా తరచూ హోటల్‌లో తింటున్నారా అని స్నేహితులు అడిగారు. ఇప్పుడు తగ్గించానని చెప్పండి.",
      },
      expected: ["No, I've cut down on eating out.", "I've cut down on eating out.", "Not much. I've cut down on eating out.", "No, I eat out less now."],
      options: ["No, I've cut down on eating out.", "No, I've cut down on eat out.", "No, I've cut on eating out."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask your neighbour if she has any good ideas to save money.",
        te: "డబ్బు ఆదా చేయడానికి ఆవిడకి ఏమైనా మంచి మార్గాలు దొరికాయా అని పక్కింటావిడని అడగండి.",
      },
      expected: [
        "Have you found any good ways to save?",
        "Have you found any ways to save money?",
        "How do you save money these days?",
        "Do you have any tips to save money?",
      ],
      options: ["Have you found any good ways to save?", "You have found any good ways to save?", "Have you find any good ways to save?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Money-saving tips", te: "డబ్బు ఆదా చేసే చిట్కాలు" },
    scene: {
      en: "Your neighbour Gopal meets you at the gate with a big bag of vegetables.",
      te: "మీ పక్కింటాయన గోపాల్ గారు కూరగాయల పెద్ద సంచితో గేటు దగ్గర కలిశారు.",
    },
    partner: { en: "Gopal (your neighbour)", te: "గోపాల్ (మీ పక్కింటాయన)" },
    voice: "b",
    skills: [
      { id: "save", label: { en: "Sharing tips", te: "చిట్కాలు చెప్పడం" } },
      { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Hello! Everything is so costly these days, isn't it?",
        te: "హలో! ఈ రోజుల్లో అన్నీ చాలా ఖరీదుగా ఉన్నాయి కదా?",
        hint: { en: "Agree, and ask him for money-saving ideas.", te: "ఒప్పుకుని, డబ్బు ఆదా చేసే ఆలోచనలు ఏమైనా ఉన్నాయా అని ఆయన్ని అడగండి." },
        replies: [
          { say: "Yes! Have you found any good ways to save?", good: true, skill: "save" },
          { say: "Yes! You found any good ways to save?", good: false, skill: "save", fixIt: "question" },
        ],
      },
      {
        partner: "I've started buying vegetables at the Rythu Bazaar. They're much cheaper there.",
        te: "నేను రైతు బజార్‌లో కూరగాయలు కొనడం మొదలుపెట్టాను. అక్కడ చాలా చవక.",
        hint: { en: "Say it is a good idea, and share one thing you do less now.", te: "మంచి ఆలోచన అని చెప్పి, మీరు ఇప్పుడు తగ్గించిన ఒక పని చెప్పండి." },
        replies: [
          { say: "Good idea! I've cut down on eating out.", good: true, skill: "save" },
          {
            say: "Your bag is so big. You spend too much!",
            good: false,
            skill: "polite",
            react: { en: "It's for the whole week, not just today!", te: "ఇది వారం మొత్తానికండీ, ఈ ఒక్క రోజుకే కాదు!" },
          },
        ],
      },
      {
        partner: "That's smart. Eating out is very costly now.",
        te: "మంచి పని. ఇప్పుడు బయట తినడం చాలా ఖరీదు.",
        hint: { en: "Share one more tip: buying rice and dal in large amounts.", te: "ఇంకో చిట్కా చెప్పండి: బియ్యం, పప్పు ఒకేసారి ఎక్కువగా కొనడం." },
        replies: [
          { say: "I also buy rice and dal in bulk. It's cheaper.", good: true, skill: "save" },
          { say: "I also buy rice and dal in bulk. It cheaper.", good: false, skill: "save", fixIt: "be" },
        ],
      },
      {
        partner: "Good tip! Shall we go to the Rythu Bazaar together on Sunday?",
        te: "మంచి సలహా! ఆదివారం కలిసి రైతు బజార్‌కి వెళ్దామా?",
        hint: { en: "Agree happily, and fix an early time.", te: "సంతోషంగా ఒప్పుకుని, పొద్దున్నే ఒక టైమ్ ఖాయం చేయండి." },
        replies: [
          { say: "Sure! Let's go at seven, before the crowd.", good: true, skill: "polite" },
          { say: "Sure! Let's go on seven, before the crowd.", good: false, skill: "polite", fixIt: "preposition" },
        ],
      },
    ],
  },
};

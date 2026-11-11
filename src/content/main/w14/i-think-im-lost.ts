import type { Lesson } from "../../types";

/** Week 14, Day 5 (CURRICULUM §4): asking for help when lost — I think I'm lost. Can you show me on the map? */
export const day: Lesson = {
  id: "i-think-im-lost",
  kind: "lesson",
  title: { en: "I Think I'm Lost", te: "దారి తప్పాను" },
  subtitle: "I think I'm lost",
  summary: {
    en: "Learn to ask for help calmly when you are lost: I think I'm lost. Can you show me on the map?",
    te: "దారి తప్పినప్పుడు ప్రశాంతంగా సహాయం అడగడం నేర్చుకుందాం: I think I'm lost. Can you show me on the map?",
  },
  seo: {
    title: "Asking for Help When Lost in English for Telugu Speakers",
    description:
      "Say I think I'm lost and Can you show me on the map? Simple lessons for Telugu speakers on asking for help in a new area.",
  },
  pattern: [
    { text: "I", role: "who" },
    { text: "think", role: "action" },
    { text: "I'm lost", role: "what" },
  ],
  core: [
    { en: "I think I'm lost.", te: "నేను దారి తప్పినట్టున్నాను.", extra: ["lose"] },
    { en: "Can you show me on the map?", te: "మ్యాప్‌లో చూపిస్తారా?", extra: ["in"] },
    { en: "This area is new to me.", te: "ఈ ఏరియా నాకు కొత్త.", extra: ["for"] },
    { en: "I'm looking for Gandhi Road.", te: "నేను గాంధీ రోడ్ కోసం వెతుకుతున్నాను.", extra: ["searching"] },
    { en: "Is the main road this way?", te: "మెయిన్ రోడ్ ఈ వైపేనా?", extra: ["side"] },
    { en: "I'll call my friend and ask.", te: "నా ఫ్రెండ్‌కి ఫోన్ చేసి అడుగుతాను.", extra: ["calling"] },
    { en: "Which colony is this?", te: "ఇది ఏ కాలనీ?", extra: ["are"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Practice saying your area's name and one landmark, in case you get lost.",
    te: "దారి తప్పితే ఉపయోగపడేలా, మీ ఏరియా పేరు, ఒక గుర్తు ఇంగ్లీష్‌లో చెప్పడం ప్రాక్టీస్ చేయండి.",
  },
  words: [
    { en: "map", te: "మ్యాప్, పటం" },
    { en: "area", te: "ఏరియా, ప్రాంతం" },
    { en: "lane", te: "సందు" },
    { en: "main road", te: "మెయిన్ రోడ్, పెద్ద రోడ్డు" },
    { en: "colony", te: "కాలనీ" },
  ],
  grammar: ["present-continuous", "can-could"],
  topics: ["directions"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "When you are lost", te: "దారి తప్పినప్పుడు" },
      body: {
        en: "Say I think I'm lost; I think keeps it calm. Then say where you want to go: I'm looking for Gandhi Road.",
        te: "I think I'm lost అనండి; I think మాటని ప్రశాంతంగా ఉంచుతుంది. తర్వాత ఎక్కడికి వెళ్ళాలో చెప్పండి: I'm looking for Gandhi Road.",
      },
      bridge: {
        te: ["నేను", "దారి తప్పినట్టు", "ఉన్నాను"],
        en: [
          { text: "I", role: "who" },
          { text: "think", role: "action" },
          { text: "I'm lost", role: "what" },
        ],
      },
      examples: [
        { en: "I think I'm lost.", te: "నేను దారి తప్పినట్టున్నాను." },
        { en: "I'm looking for Gandhi Road.", te: "నేను గాంధీ రోడ్ కోసం వెతుకుతున్నాను." },
        { en: "Can you show me on the map?", te: "మ్యాప్‌లో చూపిస్తారా?" },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "What to say when lost", te: "దారి తప్పినప్పుడు ఏం అనాలి" },
      items: [
        {
          form: "I think I'm lost.",
          useFor: { en: "Tell someone calmly.", te: "ప్రశాంతంగా చెప్పడానికి." },
          example: { en: "I think I'm lost.", te: "నేను దారి తప్పినట్టున్నాను." },
        },
        {
          form: "I'm looking for …",
          useFor: { en: "Say where you want to go.", te: "ఎక్కడికి వెళ్ళాలో చెప్పడానికి." },
          example: { en: "I'm looking for Gandhi Road.", te: "నేను గాంధీ రోడ్ కోసం వెతుకుతున్నాను." },
        },
        {
          form: "Can you show me …?",
          useFor: { en: "Ask them to point on the map.", te: "మ్యాప్‌లో చూపించమని అడగడానికి." },
          example: { en: "Can you show me on the map?", te: "మ్యాప్‌లో చూపిస్తారా?" },
        },
        {
          form: "… is new to me",
          useFor: { en: "Say you don't know the place.", te: "ఆ చోటు మీకు తెలియదని చెప్పడానికి." },
          example: { en: "This area is new to me.", te: "ఈ ఏరియా నాకు కొత్త." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "state-ing",
      wrong: "I am not knowing this area.",
      right: "I don't know this area.",
      why: {
        en: "Know is a state, not an action, so it never takes -ing: I don't know this area.",
        te: "know ఒక స్థితి, పని కాదు; దానికి -ing రాదు: I don't know this area.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "be",
      wrong: "This area new to me.",
      right: "This area is new to me.",
      why: {
        en: "Telugu కొత్త needs no verb, but English needs is: This area is new to me.",
        te: "తెలుగులో 'కొత్త' కి verb అక్కర్లేదు; ఇంగ్లీష్‌లో is కావాలి: This area is new to me.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "state-ing",
      prompt: { en: "Tell a shopkeeper you don't know this area.", te: "ఈ ఏరియా మీకు తెలియదని షాపులో ఉన్నవారికి చెప్పండి." },
      options: ["Sorry, I don't know this area.", "Sorry, I am not knowing this area.", "Sorry, I not know this area."],
      answer: 0,
      why: {
        en: "Know never takes -ing, and not needs don't before it.",
        te: "know కి -ing రాదు; not చెప్పాలంటే don't కావాలి.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "Can you show me ___ the map?",
      te: "మ్యాప్‌లో చూపిస్తారా?",
      options: ["on", "in", "at"],
      answer: 0,
      why: {
        en: "A map is flat paper or a screen, so places are on it, not in it.",
        te: "మ్యాప్ కాగితం లేదా స్క్రీన్ మీద ఉంటుంది, అందుకే on; తెలుగు 'లో' చూసి in అనకండి.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: { en: "You want Gandhi Road. What do you say?", te: "మీకు గాంధీ రోడ్ కావాలి. ఏమంటారు?" },
      options: ["I'm looking for Gandhi Road.", "I'm searching Gandhi Road.", "I'm looking Gandhi Road."],
      answer: 0,
      why: {
        en: "Look takes for when you try to find something.",
        te: "ఏదైనా వెతుకుతున్నప్పుడు look for అనాలి; for వదిలేయకండి.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      fixIt: "preposition",
      sentence: "This area is new for me.",
      wrongIndex: 4,
      fix: "This area is new to me.",
      why: {
        en: "New takes to before the person, though Telugu నాకు feels like for.",
        te: "new తర్వాత మనిషి ముందు to వస్తుంది; 'నాకు' చూసి for అనకండి.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You are lost. Tell someone on the road, calmly.",
        te: "మీరు దారి తప్పారు. దారిన వెళ్ళేవారికి ప్రశాంతంగా చెప్పండి.",
      },
      expected: ["Excuse me, I think I'm lost.", "I think I'm lost.", "Sorry, I think I'm lost."],
      options: ["Excuse me, I think I'm lost.", "Excuse me, I think I lost.", "Excuse me, I think I'm losing."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Give your phone to the shopkeeper. Ask her to show you on the map.",
        te: "షాపు ఆవిడకి మీ ఫోన్ ఇవ్వండి. మ్యాప్‌లో చూపించమని అడగండి.",
      },
      expected: ["Can you show me on the map?", "Can you show me on this map?", "Could you show me on the map?"],
      options: ["Can you show me on the map?", "Can you show me in the map?", "You show me on map?"],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Lost in a new colony", te: "కొత్త కాలనీలో దారి తప్పి" },
    scene: {
      en: "You came to Nellore to see a friend and got lost in a new colony. Jyothi runs a kirana shop.",
      te: "మీరు ఫ్రెండ్‌ని కలవడానికి నెల్లూరు వచ్చి, కొత్త కాలనీలో దారి తప్పారు. జ్యోతి గారు ఒక కిరాణా షాపు నడుపుతున్నారు.",
    },
    partner: { en: "Jyothi (shopkeeper)", te: "జ్యోతి (షాపు యజమాని)" },
    skills: [
      { id: "help", label: { en: "Asking for help", te: "సహాయం అడగడం" } },
      { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
    ],
    turns: [
      {
        partner: "Yes, what do you need?",
        te: "చెప్పండి, ఏం కావాలి?",
        hint: { en: "Say sorry to trouble her, and say you are lost.", te: "ఇబ్బంది పెడుతున్నందుకు sorry చెప్పి, దారి తప్పారని చెప్పండి." },
        replies: [
          { say: "Sorry to trouble you. I think I'm lost.", good: true, skill: "help" },
          { say: "Sorry. I think I lost.", good: false, skill: "help", fixIt: "be" },
        ],
      },
      {
        partner: "Oh! Where do you want to go?",
        te: "అయ్యో! ఎక్కడికి వెళ్ళాలి?",
        hint: { en: "Say the road you are trying to find.", te: "మీరు వెతుకుతున్న రోడ్డు పేరు చెప్పండి." },
        replies: [
          { say: "I'm looking for Gandhi Road.", good: true, skill: "help" },
          { say: "I'm searching Gandhi Road.", good: false, skill: "help" },
        ],
      },
      {
        partner: "This is Gandhi Nagar. Gandhi Road is far.",
        te: "ఇది గాంధీ నగర్. గాంధీ రోడ్ దూరం.",
        hint: { en: "Give her your phone, and ask her to show you on the map.", te: "మీ ఫోన్ ఇచ్చి, మ్యాప్‌లో చూపించమని అడగండి." },
        replies: [
          { say: "Can you show me on this map, please?", good: true, skill: "help" },
          {
            say: "Just show me. I'm in a hurry.",
            good: false,
            skill: "polite",
            react: { en: "Okay, okay. Give me the phone, please.", te: "సరే, సరే. ఫోన్ ఇవ్వండి." },
          },
        ],
      },
      {
        partner: "See? Take this lane to the main road.",
        te: "చూశారా? ఈ సందులోంచి మెయిన్ రోడ్‌కి వెళ్ళండి.",
        hint: { en: "Say you understand, and thank her for her help.", te: "అర్థమైందని చెప్పి, ఆవిడ సహాయానికి థాంక్స్ చెప్పండి." },
        replies: [
          { say: "I see. Thank you so much for your help.", good: true, skill: "polite" },
          { say: "I am understanding. Thank you.", good: false, skill: "polite", fixIt: "state-ing" },
        ],
      },
    ],
  },
};

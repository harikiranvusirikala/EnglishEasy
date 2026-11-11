import type { Lesson } from "../../types";

/** Week 25, Day 3 (CURRICULUM §4): going to with evidence — Look at those dark clouds! It's going to rain. */
export const day: Lesson = {
  id: "its-going-to-rain",
  kind: "lesson",
  title: { en: "It's Going to Rain", te: "వర్షం రాబోతోంది" },
  subtitle: "going to with evidence",
  summary: {
    en: "Learn to say what you can see coming: Look at those dark clouds! It's going to rain.",
    te: "కళ్ళ ముందే కనిపిస్తున్నది చెప్పడం నేర్చుకుందాం: Look at those dark clouds! It's going to rain.",
  },
  seo: {
    title: "It's Going to Rain in English for Telugu Speakers",
    description:
      "Say Look at those dark clouds! It's going to rain. Simple lessons for Telugu speakers on going to, thunder and lightning.",
  },
  pattern: [
    { text: "It", role: "who" },
    { text: "is going to rain", role: "action" },
    { text: "soon", role: "when" },
  ],
  core: [
    { en: "Look at those dark clouds! It's going to rain.", te: "ఆ నల్ల మబ్బులు చూడండి! వర్షం వచ్చేలా ఉంది.", extra: ["will"] },
    { en: "Bring the clothes in. It's going to rain.", te: "బట్టలు లోపలికి తీసుకురండి. వర్షం వచ్చేలా ఉంది.", extra: ["cloths"] },
    { en: "The sky is very dark now.", te: "ఇప్పుడు ఆకాశం బాగా నల్లగా ఉంది.", extra: ["are"] },
    { en: "I can hear thunder. Please come inside.", te: "ఉరుము వినిపిస్తోంది. లోపలికి రండి, ప్లీజ్.", extra: ["listen"] },
    { en: "Hurry up! We're going to get wet.", te: "త్వరగా పదండి! తడిసిపోతాం.", extra: ["become"] },
    { en: "Don't stand under a tree when there's lightning.", te: "మెరుపులు వస్తుంటే చెట్టు కింద నిలబడకండి.", extra: ["below"] },
    { en: "Careful! That glass is going to fall.", te: "జాగ్రత్త! ఆ గ్లాస్ పడిపోయేలా ఉంది.", extra: ["falling"] },
  ],
  key: [0, 1, 2, 3],
  tryToday: {
    en: "Look at the sky this evening. Dark clouds? Then say: It's going to rain.",
    te: "ఈ సాయంత్రం ఆకాశం చూడండి. నల్ల మబ్బులు ఉన్నాయా? అయితే అనండి: It's going to rain.",
  },
  words: [
    { en: "thunder", te: "ఉరుము" },
    { en: "lightning", te: "మెరుపు" },
    { en: "dark clouds", te: "నల్ల మబ్బులు" },
    { en: "terrace", te: "డాబా" },
    { en: "get wet", te: "తడిసిపోవడం" },
  ],
  grammar: ["going-to", "will"],
  topics: ["weather", "home"],
  learn: [
    {
      id: "l1",
      type: "explain",
      heading: { en: "You can see it coming", te: "రాబోతోందని కనిపిస్తోంది" },
      body: {
        en: "When you see a sign now, use going to: dark clouds, so It's going to rain. Don't drop is: say It's going to, never It going to.",
        te: "ఇప్పుడే ఏదో గుర్తు కనిపిస్తే going to: నల్ల మబ్బులు, అందుకే It's going to rain. is వదలకండి: It going to అనకూడదు.",
      },
      bridge: {
        te: ["త్వరలో", "వర్షం", "రాబోతోంది"],
        en: [
          { text: "It", role: "who" },
          { text: "is going to rain", role: "action" },
          { text: "soon", role: "when" },
        ],
      },
      examples: [
        { en: "Look at those dark clouds! It's going to rain.", te: "ఆ నల్ల మబ్బులు చూడండి! వర్షం వచ్చేలా ఉంది." },
        { en: "Bring the clothes in. It's going to rain.", te: "బట్టలు లోపలికి తీసుకురండి. వర్షం వచ్చేలా ఉంది." },
        { en: "Hurry up! We're going to get wet.", te: "త్వరగా పదండి! తడిసిపోతాం." },
      ],
    },
    {
      id: "l2",
      type: "whenToUse",
      heading: { en: "going to or will?", te: "going to ఆ, will ఆ?" },
      items: [
        {
          form: "going to",
          useFor: { en: "You can see the signs now: clouds, thunder.", te: "గుర్తులు ఇప్పుడే కనిపిస్తున్నాయి: మబ్బులు, ఉరుములు." },
          example: { en: "Look at those dark clouds! It's going to rain.", te: "ఆ నల్ల మబ్బులు చూడండి! వర్షం వచ్చేలా ఉంది." },
        },
        {
          form: "will",
          useFor: { en: "Your guess, or what the forecast says.", te: "మీ ఊహ, లేదా ఫోర్‌కాస్ట్‌లో చెప్పింది." },
          example: { en: "I think it will rain tomorrow.", te: "రేపు వర్షం పడుతుందని నాకు అనిపిస్తోంది." },
        },
        {
          form: "I'll …",
          useFor: { en: "You decide now to do something.", te: "ఇప్పుడే ఏదో చేయాలని నిర్ణయించడం." },
          example: { en: "It's raining. I'll get the clothes.", te: "వర్షం పడుతోంది. నేను బట్టలు తెస్తాను." },
        },
      ],
    },
    {
      id: "l3",
      type: "dontSay",
      fixIt: "be",
      wrong: "Look! It going to rain.",
      right: "Look! It's going to rain.",
      why: {
        en: "Telugu రాబోతోంది is one word, but English needs is before going to.",
        te: "తెలుగులో 'రాబోతోంది' ఒకే మాట; ఇంగ్లీష్‌లో going to ముందు is కావాలి.",
      },
    },
    {
      id: "l4",
      type: "dontSay",
      fixIt: "article",
      wrong: "Look at sky. It's very dark.",
      right: "Look at the sky. It's very dark.",
      why: {
        en: "There is only one sky, so it always takes the before it.",
        te: "ఆకాశం ఒక్కటే, అందుకే దాని ముందు ఎప్పుడూ the వస్తుంది.",
      },
    },
  ],
  practice: [
    {
      id: "p1",
      type: "choose",
      fixIt: "be",
      prompt: { en: "You see dark clouds and hear thunder. What do you say?", te: "నల్ల మబ్బులు కనిపిస్తున్నాయి, ఉరుము వినిపిస్తోంది. ఏమంటారు?" },
      options: ["It's going to rain.", "It going to rain.", "It's going to raining."],
      answer: 0,
      why: {
        en: "You can see the signs, so use is going to with a plain verb.",
        te: "గుర్తులు కనిపిస్తున్నాయి, అందుకే is going to; దాని తర్వాత verb మారదు.",
      },
    },
    {
      id: "p2",
      type: "fillBlank",
      sentence: "I can ___ thunder. Please come inside.",
      te: "ఉరుము వినిపిస్తోంది. లోపలికి రండి, ప్లీజ్.",
      options: ["hear", "listen", "hearing"],
      answer: 0,
      why: {
        en: "Hear is for sounds that reach you, like thunder, and can takes a plain verb.",
        te: "ఉరుము లాంటి శబ్దం చెవిన పడితే hear; can తర్వాత verb మారదు.",
      },
    },
    {
      id: "p3",
      type: "choose",
      prompt: {
        en: "Your neighbour says: Bring the clothes in. It's going to rain. Why?",
        te: "పక్కింటివారు Bring the clothes in. It's going to rain అన్నారు. ఎందుకు?",
      },
      options: ["She can see rain clouds now.", "It rained last night.", "The clothes are dirty."],
      answer: 0,
      why: {
        en: "Going to tells us she can see a sign of rain right now.",
        te: "going to అంటే వర్షం గుర్తు ఆవిడకి ఇప్పుడే కనిపిస్తోంది.",
      },
    },
    {
      id: "p4",
      type: "findMistake",
      sentence: "Hurry up! We're going to getting wet.",
      wrongIndex: 5,
      fix: "Hurry up! We're going to get wet.",
      why: {
        en: "After going to, the verb stays plain, with no -ing.",
        te: "going to తర్వాత verb మారదు; -ing రాదు.",
      },
    },
  ],
  speak: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "You see dark clouds. Tell your friend about the rain.",
        te: "నల్ల మబ్బులు కనిపిస్తున్నాయి. వర్షం గురించి మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["Look, it's going to rain.", "It's going to rain.", "Look at those clouds! It's going to rain."],
      options: ["Look, it's going to rain.", "Look, it going to rain.", "Look, it's going to raining."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "There is lightning, and your friend is under a tree. Warn her.",
        te: "మెరుపులు వస్తున్నాయి, మీ స్నేహితురాలు చెట్టు కింద ఉన్నారు. హెచ్చరించండి.",
      },
      expected: ["Don't stand under a tree. Come inside.", "Please come inside.", "Don't stand under the tree."],
      options: ["Don't stand under a tree. Come inside.", "Don't stand under tree. Come inside.", "Stand under the tree. It's safe there."],
      answer: 0,
    },
  ],
  roleplay: {
    id: "r1",
    type: "roleplay",
    title: { en: "Clothes on the terrace", te: "డాబా మీద బట్టలు" },
    scene: {
      en: "It is evening. Your neighbour Salma's clothes are drying on the terrace, and dark clouds are coming.",
      te: "సాయంత్రం అయింది. పక్కింటి సల్మా బట్టలు డాబా మీద ఆరుతున్నాయి, నల్ల మబ్బులు కమ్ముకుంటున్నాయి.",
    },
    partner: { en: "Salma (neighbour)", te: "సల్మా (పక్కింటావిడ)" },
    skills: [{ id: "warn", label: { en: "Saying what's coming", te: "రాబోయేది చెప్పడం" } }],
    turns: [
      {
        partner: "Hello! It's nice and cool this evening.",
        te: "హలో! ఈ సాయంత్రం చల్లగా, హాయిగా ఉంది.",
        hint: { en: "Tell her about the dark clouds and the rain coming.", te: "నల్ల మబ్బుల గురించి, రాబోయే వర్షం గురించి చెప్పండి." },
        replies: [
          { say: "Look at those dark clouds. It's going to rain.", good: true, skill: "warn" },
          { say: "Look at those dark clouds. It going to rain.", good: false, skill: "warn", fixIt: "be" },
        ],
      },
      {
        partner: "Oh no! My clothes are on the terrace.",
        te: "అయ్యో! నా బట్టలు డాబా మీద ఉన్నాయి.",
        hint: { en: "Offer to help her bring them in.", te: "బట్టలు లోపలికి తేవడానికి సహాయం చేస్తానని చెప్పండి." },
        replies: [
          { say: "Don't worry. I'll help you bring them in.", good: true, skill: "warn" },
          { say: "Don't worry. I'll helping you bring them in.", good: false, skill: "warn" },
          {
            say: "Your clothes, your problem.",
            good: false,
            skill: "warn",
            react: { en: "Oh! Okay, I'll go myself.", te: "ఓ! సరే, నేనే వెళ్తాను." },
          },
        ],
      },
      {
        partner: "Thank you! Listen, is that thunder?",
        te: "థాంక్యూ! వినండి, అది ఉరుమేనా?",
        hint: { en: "Say yes, and tell her to be quick.", te: "అవునని చెప్పి, త్వరగా రమ్మనండి." },
        replies: [
          { say: "Yes! Hurry up, we're going to get wet.", good: true, skill: "warn" },
          { say: "Yes! Hurry up, we're going to become wet.", good: false, skill: "warn" },
        ],
      },
      {
        partner: "Done! All the clothes are in. Thank you so much.",
        te: "అయిపోయింది! బట్టలన్నీ లోపలికి వచ్చాయి. చాలా థాంక్స్.",
        hint: { en: "Answer her thanks kindly, and say goodbye.", te: "ఆవిడ థాంక్స్‌కి మర్యాదగా జవాబిచ్చి, వెళ్ళొస్తానని చెప్పండి." },
        replies: [
          { say: "You're welcome. Good night!", good: true },
          { say: "Mention not. Good night!", good: false, fixIt: "indian-english" },
        ],
      },
    ],
  },
};

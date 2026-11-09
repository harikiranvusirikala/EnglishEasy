import type { ConversationDay } from "../../types";

/** Week 5, Day 6 (CURRICULUM §3): Conversation Day with a guest at home, and an electrician. Home words; no new grammar. */
export const day: ConversationDay = {
  id: "w5-conversation",
  kind: "conversation",
  title: { en: "A Guest at Home", te: "ఇంటికి అతిథి" },
  summary: {
    en: "Use this week's home words: welcome a guest, show your house, and talk to an electrician who fixes a light.",
    te: "ఈ వారం నేర్చుకున్న ఇంటి పదాలు వాడండి: అతిథికి స్వాగతం చెప్పండి, ఇల్లు చూపించండి, లైట్ రిపేర్ చేసే ఎలక్ట్రీషియన్‌తో మాట్లాడండి.",
  },
  topics: ["home", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Ramesh visits Ruth's new house", te: "రూత్ గారి కొత్త ఇంటికి రమేష్ గారు" },
    lines: [
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Hello, Ruth! Is this your new house?", te: "నమస్తే రూత్ గారూ! ఇది మీ కొత్త ఇల్లా?" },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "a", en: "Yes! Please come in and sit down.", te: "అవును! లోపలికి వచ్చి కూర్చోండి." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "It is a nice house.", te: "ఇల్లు చాలా బాగుంది." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "a", en: "Thank you. There are three rooms.", te: "థాంక్యూ. మూడు గదులు ఉన్నాయి." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Is there a temple near here?", te: "ఇక్కడ దగ్గర్లో గుడి ఉందా?" },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "a", en: "Yes, it is next to the bank.", te: "అవును, బ్యాంక్ పక్కన ఉంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "It is very hot today.", te: "ఈ రోజు చాలా వేడిగా ఉంది." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "a", en: "I will switch on the fan.", te: "నేను ఫ్యాన్ వేస్తాను." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Thank you. Where is the bathroom?", te: "థాంక్యూ. బాత్‌రూమ్ ఎక్కడ?" },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "a", en: "It is next to the kitchen.", te: "వంటగది పక్కన ఉంది." },
    ],
    questions: [
      {
        prompt: { en: "What is happening?", te: "ఇక్కడ ఏం జరుగుతోంది?" },
        options: ["A friend visits a new house", "Two people buy vegetables", "A man looks for his glasses"],
        answer: 0,
      },
      { prompt: { en: "How many rooms are there?", te: "ఎన్ని గదులు ఉన్నాయి?" }, options: ["Two", "Three", "Four"], answer: 1 },
      { prompt: { en: "Where is the temple?", te: "గుడి ఎక్కడ ఉంది?" }, options: ["Next to the bank", "Behind the house", "In the market"], answer: 0 },
      { prompt: { en: "What does Ruth switch on?", te: "రూత్ గారు ఏం వేశారు?" }, options: ["The light", "The TV", "The fan"], answer: 2 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A guest is at your door. Ask them to come in.",
        te: "ఒక అతిథి మీ తలుపు దగ్గర ఉన్నారు. లోపలికి రమ్మని చెప్పండి.",
      },
      expected: ["Please come in.", "Come in, please.", "Please come in and sit down."],
      options: ["Please come in.", "Please coming in.", "Please enter in."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your guest feels hot. Say you will switch on the fan.",
        te: "మీ అతిథికి వేడిగా ఉంది. ఫ్యాన్ వేస్తానని చెప్పండి.",
      },
      expected: ["I will switch on the fan.", "Let me switch on the fan."],
      options: ["I will on the fan.", "I will switch on the fan.", "I will open the fan."],
      answer: 1,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Your guest asks for the bathroom. It is next to the kitchen. Tell them.",
        te: "మీ అతిథి బాత్‌రూమ్ ఎక్కడని అడుగుతున్నారు. అది వంటగది పక్కన ఉంది. చెప్పండి.",
      },
      expected: ["It is next to the kitchen.", "The bathroom is next to the kitchen."],
      options: ["It is next to the kitchen.", "It is next the kitchen.", "It is kitchen next to."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Welcoming a guest", te: "అతిథికి స్వాగతం" },
      scene: {
        en: "Your friend Satish comes to your house for the first time. Welcome him.",
        te: "మీ స్నేహితులు సతీష్ గారు మొదటిసారి మీ ఇంటికి వచ్చారు. స్వాగతం చెప్పండి.",
      },
      partner: { en: "Satish (a friend)", te: "సతీష్ (స్నేహితులు)" },
      voice: "b",
      skills: [
        { id: "home", label: { en: "Home words", te: "ఇంటి పదాలు" } },
        { id: "polite", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
      ],
      turns: [
        {
          partner: "Hello! Am I early?",
          te: "నమస్తే! నేను తొందరగా వచ్చానా?",
          hint: { en: "Say he is not early, and invite him in.", te: "తొందరేం లేదని చెప్పి, లోపలికి రమ్మనండి." },
          replies: [
            { say: "No, no. Please come in.", good: true, skill: "polite" },
            { say: "No, no. Please coming in.", good: false, skill: "polite" },
            {
              say: "Yes, very early. I am not ready.",
              good: false,
              skill: "polite",
              react: { en: "Oh, sorry! I can wait outside.", te: "అయ్యో, సారీ! బయట వెయిట్ చేస్తాను." },
            },
          ],
        },
        {
          partner: "What a nice house!",
          te: "ఎంత బాగుంది ఇల్లు!",
          hint: { en: "Thank him, and say how many rooms there are.", te: "థాంక్స్ చెప్పి, ఎన్ని గదులు ఉన్నాయో చెప్పండి." },
          replies: [
            { say: "Thank you. There are three rooms.", good: true, skill: "home" },
            { say: "Thank you. There is three rooms.", good: false, skill: "home" },
          ],
        },
        {
          partner: "Where can I put my bag?",
          te: "నా బ్యాగ్ ఎక్కడ పెట్టాలి?",
          hint: { en: "Tell him where to put it: the chair.", te: "ఎక్కడ పెట్టాలో చెప్పండి: కుర్చీ మీద." },
          replies: [
            { say: "Put it on the chair.", good: true, skill: "home" },
            { say: "Keep it on the chair.", good: true, skill: "home" },
            { say: "Keep it the chair on.", good: false, skill: "home" },
          ],
        },
        {
          partner: "It is a bit dark here.",
          te: "ఇక్కడ కొంచెం చీకటిగా ఉంది.",
          hint: { en: "Offer to do something about the light.", te: "లైట్ వేస్తానని చెప్పండి." },
          replies: [
            { say: "I will switch on the light.", good: true, skill: "polite" },
            { say: "I will on the light.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Is there a shop nearby?",
          te: "దగ్గర్లో ఏదైనా షాపు ఉందా?",
          hint: { en: "Say yes, and say it is beside the temple.", te: "అవునని చెప్పి, గుడి పక్కన ఉందని చెప్పండి." },
          replies: [
            { say: "Yes, next to the temple.", good: true, skill: "home" },
            { say: "Yes, next the temple.", good: false, skill: "home" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The electrician comes", te: "ఎలక్ట్రీషియన్ వచ్చారు" },
      scene: {
        en: "A light in your kitchen is not working. Prasad, an electrician, comes to fix it.",
        te: "మీ వంటగదిలో ఒక లైట్ పని చేయడం లేదు. దాన్ని రిపేర్ చేయడానికి ఎలక్ట్రీషియన్ ప్రసాద్ గారు వచ్చారు.",
      },
      partner: { en: "Prasad (an electrician)", te: "ప్రసాద్ (ఎలక్ట్రీషియన్)" },
      voice: "b",
      skills: [
        { id: "place", label: { en: "Where things are", te: "ఎక్కడ ఉందో చెప్పడం" } },
        { id: "switch", label: { en: "Switch on / off", te: "switch on / off వాడకం" } },
      ],
      turns: [
        {
          partner: "Hello. Which light is not working?",
          te: "నమస్తే. ఏ లైట్ పని చేయడం లేదు?",
          hint: { en: "Say which room the light is in.", te: "లైట్ ఏ గదిలో ఉందో చెప్పండి." },
          replies: [
            { say: "The light in the kitchen.", good: true, skill: "place" },
            { say: "The light on the kitchen.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Where is the main switch?",
          te: "మెయిన్ స్విచ్ ఎక్కడ ఉంది?",
          hint: { en: "Tell him where: at the back of the door.", te: "అది ఎక్కడ ఉందో చెప్పండి: తలుపు వెనకాల." },
          replies: [
            { say: "It is behind the door.", good: true, skill: "place" },
            { say: "It is the door behind.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Please switch off the main switch.",
          te: "కొంచెం మెయిన్ స్విచ్ ఆపేయండి.",
          hint: { en: "Do it, and say it is off.", te: "ఆపేసి, ఆపేశానని చెప్పండి." },
          replies: [
            { say: "Okay. It is off now.", good: true, skill: "switch" },
            { say: "Okay. It off now.", good: false, skill: "switch" },
          ],
        },
        {
          partner: "Done! Switch on the light now.",
          te: "అయిపోయింది! ఇప్పుడు లైట్ వేయండి.",
          hint: { en: "Check the light, and thank him.", te: "లైట్ వేసి చూసి, ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "It is working. Thank you!", good: true, skill: "switch" },
            { say: "It is work. Thank you!", good: false, skill: "switch" },
            {
              say: "Finally! You took so long.",
              good: false,
              react: { en: "Sorry! The wire was very old.", te: "సారీ అండీ! వైరు బాగా పాతది." },
            },
          ],
        },
      ],
    },
  ],
};

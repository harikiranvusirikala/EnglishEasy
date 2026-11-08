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
    title: { en: "Ravi visits Padma's new house", te: "పద్మ కొత్త ఇంటికి రవి" },
    lines: [
      { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Hello, Padma! Is this your new house?", te: "నమస్తే పద్మ! ఇది మీ కొత్త ఇల్లా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes! Please come in and sit down.", te: "అవును! లోపలికి వచ్చి కూర్చోండి." },
      { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "It is a nice house.", te: "ఇల్లు చాలా బాగుంది." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Thank you. There are three rooms.", te: "థాంక్యూ. మూడు గదులు ఉన్నాయి." },
      { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Is there a temple near here?", te: "ఇక్కడ దగ్గర్లో గుడి ఉందా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes, it is next to the bank.", te: "అవును, బ్యాంక్ పక్కన ఉంది." },
      { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "It is very hot today.", te: "ఈ రోజు చాలా వేడిగా ఉంది." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "I will switch on the fan.", te: "నేను ఫ్యాన్ వేస్తాను." },
      { speaker: { en: "Ravi", te: "రవి" }, voice: "b", en: "Thank you. Where is the bathroom?", te: "థాంక్యూ. బాత్‌రూమ్ ఎక్కడ?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "It is next to the kitchen.", te: "వంటగది పక్కన ఉంది." },
    ],
    questions: [
      { prompt: { en: "How many rooms are there?", te: "ఎన్ని గదులు ఉన్నాయి?" }, options: ["Two", "Three", "Four"], answer: 1 },
      { prompt: { en: "Where is the temple?", te: "గుడి ఎక్కడ ఉంది?" }, options: ["Next to the bank", "Behind the house", "In the market"], answer: 0 },
      { prompt: { en: "What does Padma switch on?", te: "పద్మ ఏం వేసింది?" }, options: ["The light", "The TV", "The fan"], answer: 2 },
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
      options: ["Please come in.", "Please coming in.", "Please come inside of."],
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
        en: "Your friend Ravi comes to your house for the first time. Welcome him.",
        te: "మీ స్నేహితుడు రవి మొదటిసారి మీ ఇంటికి వచ్చారు. స్వాగతం చెప్పండి.",
      },
      partner: { en: "Ravi (a friend)", te: "రవి (స్నేహితుడు)" },
      skills: [
        { id: "home", label: { en: "Home words", te: "ఇంటి పదాలు" } },
        { id: "polite", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
      ],
      turns: [
        {
          partner: "Hello! Am I early?",
          te: "నమస్తే! నేను తొందరగా వచ్చానా?",
          hint: { en: "Say: No, no. Please come in.", te: "ఇలా చెప్పండి: No, no. Please come in." },
          replies: [
            { say: "No, no. Please come in.", good: true, skill: "polite" },
            { say: "No, no. Please coming in.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "What a nice house!",
          te: "ఎంత బాగుంది ఇల్లు!",
          hint: { en: "Say: Thank you. There are three rooms.", te: "ఇలా చెప్పండి: Thank you. There are three rooms." },
          replies: [
            { say: "Thank you. There are three rooms.", good: true, skill: "home" },
            { say: "Thank you. There is three rooms.", good: false, skill: "home" },
          ],
        },
        {
          partner: "Where do I keep my bag?",
          te: "నా బ్యాగ్ ఎక్కడ పెట్టాలి?",
          hint: { en: "Say: Keep it on the chair.", te: "ఇలా చెప్పండి: Keep it on the chair." },
          replies: [
            { say: "Keep it on the chair.", good: true, skill: "home" },
            { say: "Keep it the chair on.", good: false, skill: "home" },
          ],
        },
        {
          partner: "It is a bit dark here.",
          te: "ఇక్కడ కొంచెం చీకటిగా ఉంది.",
          hint: { en: "Say: I will switch on the light.", te: "ఇలా చెప్పండి: I will switch on the light." },
          replies: [
            { say: "I will switch on the light.", good: true, skill: "polite" },
            { say: "I will on the light.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Is there a shop nearby?",
          te: "దగ్గర్లో ఏదైనా షాప్ ఉందా?",
          hint: { en: "Say: Yes, next to the temple.", te: "ఇలా చెప్పండి: Yes, next to the temple." },
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
        te: "మీ వంటగదిలో ఒక లైట్ పని చేయడం లేదు. దాన్ని రిపేర్ చేయడానికి ఎలక్ట్రీషియన్ ప్రసాద్ వచ్చారు.",
      },
      partner: { en: "Prasad (an electrician)", te: "ప్రసాద్ (ఎలక్ట్రీషియన్)" },
      skills: [
        { id: "place", label: { en: "Where things are", te: "ఎక్కడ ఉందో చెప్పడం" } },
        { id: "switch", label: { en: "Switch on / off", te: "switch on / off వాడకం" } },
      ],
      turns: [
        {
          partner: "Hello. Which light is not working?",
          te: "నమస్తే. ఏ లైట్ పని చేయడం లేదు?",
          hint: { en: "Say: The light in the kitchen.", te: "ఇలా చెప్పండి: The light in the kitchen." },
          replies: [
            { say: "The light in the kitchen.", good: true, skill: "place" },
            { say: "The light on the kitchen.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Where is the main switch?",
          te: "మెయిన్ స్విచ్ ఎక్కడ ఉంది?",
          hint: { en: "Say: It is behind the door.", te: "ఇలా చెప్పండి: It is behind the door." },
          replies: [
            { say: "It is behind the door.", good: true, skill: "place" },
            { say: "It is the door behind.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Please switch off the main switch.",
          te: "దయచేసి మెయిన్ స్విచ్ ఆపేయండి.",
          hint: { en: "Say: Okay. It is off now.", te: "ఇలా చెప్పండి: Okay. It is off now." },
          replies: [
            { say: "Okay. It is off now.", good: true, skill: "switch" },
            { say: "Okay. It off now.", good: false, skill: "switch" },
          ],
        },
        {
          partner: "Done! Switch on the light now.",
          te: "అయిపోయింది! ఇప్పుడు లైట్ వేయండి.",
          hint: { en: "Say: It is working. Thank you!", te: "ఇలా చెప్పండి: It is working. Thank you!" },
          replies: [
            { say: "It is working. Thank you!", good: true, skill: "switch" },
            { say: "It is work. Thank you!", good: false, skill: "switch" },
          ],
        },
      ],
    },
  ],
};

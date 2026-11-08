import type { ConversationDay } from "../../types";

/** Week 12, Day 6 (CURRICULUM §3): Conversation Day at a function — a long chat, and helping a guest. Everything from Stage 1. */
export const day: ConversationDay = {
  id: "w12-conversation",
  kind: "conversation",
  title: { en: "A Long Chat at a Function", te: "ఫంక్షన్‌లో మాటలు" },
  summary: {
    en: "Use everything from Stage 1: have a long chat with someone new at a function, and help a guest find the way.",
    te: "స్టేజ్ 1 లో నేర్చుకున్నదంతా వాడండి: ఫంక్షన్‌లో కొత్త వ్యక్తితో చాలాసేపు మాట్లాడండి, ఒక అతిథికి దారి చూపించండి.",
  },
  topics: ["people", "festivals", "directions"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two guests at a function", te: "ఫంక్షన్‌లో ఇద్దరు అతిథులు" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Hello! Are you from Guntur?", te: "నమస్తే! మీరు గుంటూరు వారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "No, I live in Vijayawada. And you?", te: "కాదు, నేను విజయవాడలో ఉంటాను. మరి మీరు?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "I live here. I'm the bride's uncle.", te: "నేను ఇక్కడే ఉంటాను. పెళ్లికూతురికి మామయ్యని." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Oh, nice! The function is very grand.", te: "ఓ, బాగుంది! ఫంక్షన్ చాలా ఘనంగా ఉంది." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thank you. Did you eat lunch?", te: "థాంక్యూ. భోజనం చేశారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Not yet. Where is the dining hall?", te: "ఇంకా లేదు. భోజనాల హాల్ ఎక్కడ?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "It's behind the stage. I'll show you.", te: "స్టేజ్ వెనకాల ఉంది. నేను చూపిస్తాను." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Thank you! You are very kind.", te: "థాంక్యూ! మీరు చాలా మంచివారు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Will you stay for the evening?", te: "సాయంత్రం దాకా ఉంటారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "No, I'm going back at five.", te: "లేదు, ఐదు గంటలకు తిరిగి వెళ్తున్నాను." },
    ],
    questions: [
      { prompt: { en: "Where does Usha live?", te: "ఉష ఎక్కడ ఉంటుంది?" }, options: ["In Guntur", "In Vijayawada", "In Hyderabad"], answer: 1 },
      { prompt: { en: "Who is Venkat?", te: "వెంకట్ ఎవరు?" }, options: ["The bride's uncle", "The groom's friend", "The cook"], answer: 0 },
      { prompt: { en: "When is Usha going back?", te: "ఉష ఎప్పుడు తిరిగి వెళ్తోంది?" }, options: ["At three", "At five", "Tomorrow"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask a guest where she is from.",
        te: "ఒక అతిథిని వారిది ఏ ఊరని అడగండి.",
      },
      expected: ["Where are you from?"],
      options: ["Where are you from?", "From where you are?", "Where you are from?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "A guest is looking for the dining hall. Offer to show her.",
        te: "ఒక అతిథి భోజనాల హాల్ కోసం వెతుకుతున్నారు. చూపిస్తానని చెప్పండి.",
      },
      expected: ["I'll show you.", "Come, I'll show you."],
      options: ["I'll show you.", "I'll showing you.", "I show you tomorrow."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Say that you are going back at five.",
        te: "ఐదు గంటలకు తిరిగి వెళ్తున్నానని చెప్పండి.",
      },
      expected: ["I'm going back at five.", "I am going back at five."],
      options: ["I'm going back at five.", "I'm going back on five.", "I going back at five."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A long chat with someone new", te: "కొత్త వ్యక్తితో చాలాసేపు మాటలు" },
      scene: {
        en: "At a function, Venkat sits next to you. Have a long, friendly chat.",
        te: "ఒక ఫంక్షన్‌లో వెంకట్ మీ పక్కన కూర్చున్నారు. స్నేహంగా చాలాసేపు మాట్లాడండి.",
      },
      partner: { en: "Venkat (a guest)", te: "వెంకట్ (అతిథి)" },
      skills: [
        { id: "me", label: { en: "About me", te: "నా గురించి" } },
        { id: "past", label: { en: "Past", te: "గతం" } },
      ],
      turns: [
        {
          partner: "Hello! I'm Venkat. And you?",
          te: "నమస్తే! నేను వెంకట్. మరి మీరు?",
          hint: { en: "Say: My name is Usha.", te: "ఇలా చెప్పండి: My name is Usha." },
          replies: [
            { say: "My name is Usha.", good: true, skill: "me" },
            { say: "Myself Usha.", good: false, skill: "me" },
          ],
        },
        {
          partner: "Where are you from?",
          te: "మీది ఏ ఊరు?",
          hint: { en: "Say: I live in Vijayawada.", te: "ఇలా చెప్పండి: I live in Vijayawada." },
          replies: [
            { say: "I live in Vijayawada.", good: true, skill: "me" },
            { say: "I lives in Vijayawada.", good: false, skill: "me" },
          ],
        },
        {
          partner: "How do you know the bride?",
          te: "పెళ్లికూతురు మీకు ఎలా తెలుసు?",
          hint: { en: "Say: Her mother is my friend.", te: "ఇలా చెప్పండి: Her mother is my friend." },
          replies: [
            { say: "Her mother is my friend.", good: true, skill: "me" },
            { say: "Her mother my friend.", good: false, skill: "me" },
          ],
        },
        {
          partner: "Did you come by bus?",
          te: "బస్‌లో వచ్చారా?",
          hint: { en: "Say: No, I came by train.", te: "ఇలా చెప్పండి: No, I came by train." },
          replies: [
            { say: "No, I came by train.", good: true, skill: "past" },
            { say: "No, I come by train.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What do you do every day?",
          te: "మీరు రోజూ ఏం చేస్తారు?",
          hint: { en: "Say: I walk, cook and read the newspaper.", te: "ఇలా చెప్పండి: I walk, cook and read the newspaper." },
          replies: [
            { say: "I walk, cook and read the newspaper.", good: true, skill: "me" },
            { say: "I walking, cook and read newspaper.", good: false, skill: "me" },
          ],
        },
        {
          partner: "Nice to meet you, Usha!",
          te: "మిమ్మల్ని కలవడం సంతోషం, ఉష!",
          hint: { en: "Say: Nice to meet you too!", te: "ఇలా చెప్పండి: Nice to meet you too!" },
          replies: [
            { say: "Nice to meet you too!", good: true },
            { say: "Nice meeting to you!", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Helping a guest", te: "అతిథికి సహాయం" },
      scene: {
        en: "Kamala, a guest, needs help finding her way at the function.",
        te: "అతిథి కమలకు ఫంక్షన్‌లో దారి తెలియడం లేదు. సహాయం చేయండి.",
      },
      partner: { en: "Kamala (a guest)", te: "కమల (అతిథి)" },
      skills: [
        { id: "place", label: { en: "Where things are", te: "ఎక్కడ ఉందో చెప్పడం" } },
        { id: "help", label: { en: "Offering help", te: "సహాయం చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Excuse me. Where is the washroom?",
          te: "ఎక్స్‌క్యూజ్ మీ. వాష్‌రూమ్ ఎక్కడ?",
          hint: { en: "Say: It's next to the kitchen.", te: "ఇలా చెప్పండి: It's next to the kitchen." },
          replies: [
            { say: "It's next to the kitchen.", good: true, skill: "place" },
            { say: "It's next the kitchen.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Is it far?",
          te: "దూరమా?",
          hint: { en: "Say: No. Come, I'll show you.", te: "ఇలా చెప్పండి: No. Come, I'll show you." },
          replies: [
            { say: "No. Come, I'll show you.", good: true, skill: "help" },
            { say: "No. Come, I'll showing you.", good: false, skill: "help" },
          ],
        },
        {
          partner: "Thank you. Is lunch ready?",
          te: "థాంక్యూ. భోజనం రెడీనా?",
          hint: { en: "Say: Yes, it starts at one.", te: "ఇలా చెప్పండి: Yes, it starts at one." },
          replies: [
            { say: "Yes, it starts at one.", good: true, skill: "place" },
            { say: "Yes, it start at one.", good: false, skill: "place" },
          ],
        },
        {
          partner: "Thank you so much!",
          te: "చాలా థాంక్స్!",
          hint: { en: "Say: You're welcome. Enjoy the function!", te: "ఇలా చెప్పండి: You're welcome. Enjoy the function!" },
          replies: [
            { say: "You're welcome. Enjoy the function!", good: true, skill: "help" },
            { say: "You're welcome. Enjoy for the function!", good: false, skill: "help" },
          ],
        },
      ],
    },
  ],
};

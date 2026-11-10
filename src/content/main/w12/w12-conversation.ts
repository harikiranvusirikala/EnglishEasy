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
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Hello! Are you from Guntur?", te: "నమస్తే! మీరు గుంటూరు వారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "No, I live in Vijayawada. And you?", te: "కాదు, నేను విజయవాడలో ఉంటాను. మరి మీరు?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "I live here. I'm the bride's uncle.", te: "నేను ఇక్కడే ఉంటాను. పెళ్లికూతురికి మామయ్యని." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Oh, nice! The function is very grand.", te: "ఓ, బాగుంది! ఫంక్షన్ చాలా ఘనంగా ఉంది." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Thank you. Did you eat lunch?", te: "థాంక్యూ. భోజనం చేశారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Not yet. Where is the dining hall?", te: "ఇంకా లేదు. భోజనాల హాల్ ఎక్కడ?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "It's behind the stage. I'll show you.", te: "స్టేజ్ వెనకాల ఉంది. నేను చూపిస్తాను." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Thank you! You are very kind.", te: "థాంక్యూ! మీరు చాలా మంచివారు." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Will you stay for the evening?", te: "సాయంత్రం దాకా ఉంటారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "No, I'm going back at five.", te: "లేదు, ఐదు గంటలకు తిరిగి వెళ్తున్నాను." },
    ],
    questions: [
      { prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" }, options: ["At a function", "At a hospital", "On a bus"], answer: 0 },
      { prompt: { en: "Where does Usha live?", te: "ఉష ఎక్కడ ఉంటారు?" }, options: ["In Guntur", "In Vijayawada", "In Hyderabad"], answer: 1 },
      { prompt: { en: "Who is Narayana?", te: "నారాయణ ఎవరు?" }, options: ["The bride's uncle", "The groom's friend", "The cook"], answer: 0 },
      { prompt: { en: "When is Usha going back?", te: "ఉష ఎప్పుడు తిరిగి వెళ్తున్నారు?" }, options: ["At three", "At five", "Tomorrow"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
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
      fixIt: "preposition",
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
        en: "At a function, John sits next to you. Have a long, friendly chat.",
        te: "ఒక ఫంక్షన్‌లో జాన్ మీ పక్కన కూర్చున్నారు. స్నేహంగా చాలాసేపు మాట్లాడండి.",
      },
      partner: { en: "John (a guest)", te: "జాన్ (అతిథి)" },
      voice: "b",
      skills: [
        { id: "me", label: { en: "About me", te: "నా గురించి" } },
        { id: "past", label: { en: "Past", te: "గతం" } },
      ],
      turns: [
        {
          partner: "Hello! I'm John. And you?",
          te: "నమస్తే! నేను జాన్. మరి మీరు?",
          hint: { en: "Say your name.", te: "మీ పేరు చెప్పండి." },
          replies: [
            { say: "My name is Kiran.", good: true, skill: "me" },
            { say: "Myself Kiran.", good: false, skill: "me", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Where are you from?",
          te: "మీది ఏ ఊరు?",
          hint: { en: "Say your own town.", te: "మీ ఊరి పేరు చెప్పండి." },
          replies: [
            { say: "I live in Vijayawada.", good: true, skill: "me" },
            { say: "I lives in Vijayawada.", good: false, skill: "me" },
          ],
        },
        {
          partner: "How do you know the bride?",
          te: "పెళ్లికూతురు మీకు ఎలా తెలుసు?",
          hint: { en: "Say how you know her family.", te: "పెళ్లికూతురి వాళ్ళు మీకు ఎలా తెలుసో చెప్పండి." },
          replies: [
            { say: "Her mother is my friend.", good: true, skill: "me" },
            { say: "Her mother my friend.", good: false, skill: "me", fixIt: "be" },
            {
              say: "Why? Who are you to ask?",
              good: false,
              skill: "me",
              react: { en: "Sorry! I was just making friends.", te: "Sorry అండీ! ఊరికే పరిచయం కోసం అడిగాను." },
            },
          ],
        },
        {
          partner: "Did you come by bus?",
          te: "బస్‌లో వచ్చారా?",
          hint: { en: "Say no, and how you came (past).", te: "లేదని, ఎలా వచ్చారో చెప్పండి (past)." },
          replies: [
            { say: "No, I came by train.", good: true, skill: "past" },
            { say: "No, I come by train.", good: false, skill: "past" },
          ],
        },
        {
          partner: "What do you do every day?",
          te: "మీరు రోజూ ఏం చేస్తారు?",
          hint: { en: "Name three things you do every day.", te: "రోజూ చేసే మూడు పనులు చెప్పండి." },
          replies: [
            { say: "I walk, cook and read the newspaper.", good: true, skill: "me" },
            { say: "I walking, cook and read newspaper.", good: false, skill: "me" },
          ],
        },
        {
          partner: "Nice to meet you, Kiran!",
          te: "మిమ్మల్ని కలవడం సంతోషం, కిరణ్!",
          hint: { en: "Say the same back to him.", te: "ఆయనకి అదే మాట తిరిగి చెప్పండి." },
          replies: [
            { say: "Nice to meet you too!", good: true },
            { say: "Nice meeting to you!", good: false, fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Helping a guest", te: "అతిథికి సహాయం" },
      scene: {
        en: "Grace, a guest, needs help finding her way at the function.",
        te: "అతిథి గ్రేస్ గారికి ఫంక్షన్‌లో దారి తెలియడం లేదు. సహాయం చేయండి.",
      },
      partner: { en: "Grace (a guest)", te: "గ్రేస్ (అతిథి)" },
      skills: [
        { id: "place", label: { en: "Where things are", te: "ఎక్కడ ఉందో చెప్పడం" } },
        { id: "help", label: { en: "Offering help", te: "సహాయం చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Excuse me. Where is the washroom?",
          te: "ఎక్స్‌క్యూజ్ మీ. వాష్‌రూమ్ ఎక్కడ?",
          hint: { en: "Tell her where it is: by the kitchen.", te: "ఎక్కడుందో చెప్పండి: వంటగది పక్కన." },
          replies: [
            { say: "It's next to the kitchen.", good: true, skill: "place" },
            { say: "It's next the kitchen.", good: false, skill: "place", fixIt: "preposition" },
          ],
        },
        {
          partner: "Is it far?",
          te: "దూరమా?",
          hint: { en: "Say no, and offer to take her.", te: "దూరం లేదని, మీరే తీసుకెళ్తానని చెప్పండి." },
          replies: [
            { say: "No. Come, I'll show you.", good: true, skill: "help" },
            { say: "No. Come, I'll showing you.", good: false, skill: "help" },
          ],
        },
        {
          partner: "Thank you. Is lunch ready?",
          te: "థాంక్యూ. భోజనం రెడీనా?",
          hint: { en: "Say not yet, and when it starts.", te: "ఇంకా లేదని, ఎప్పుడు మొదలవుతుందో చెప్పండి." },
          replies: [
            { say: "Not yet. It starts at one.", good: true, skill: "place" },
            { say: "Not yet. It start at one.", good: false, skill: "place" },
            {
              say: "Is food all you think about?",
              good: false,
              skill: "place",
              react: { en: "Ha! I'm just a little hungry.", te: "హా! కొంచెం ఆకలిగా ఉంది, అంతే." },
            },
          ],
        },
        {
          partner: "Thank you so much!",
          te: "చాలా థాంక్స్!",
          hint: { en: "Say you're welcome, and wish her a good time.", te: "పర్లేదు అని, ఫంక్షన్ బాగా ఎంజాయ్ చేయమని చెప్పండి." },
          replies: [
            { say: "You're welcome. Enjoy the function!", good: true, skill: "help" },
            { say: "You're welcome. Enjoy for the function!", good: false, skill: "help", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

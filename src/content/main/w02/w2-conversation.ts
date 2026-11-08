import type { ConversationDay } from "../../types";

/** Week 2, Day 6 (CURRICULUM §3): Conversation Day at a wedding. All of the week's question words; no new grammar. */
export const day: ConversationDay = {
  id: "w2-conversation",
  kind: "conversation",
  title: { en: "Meeting Someone at a Wedding", te: "పెళ్లిలో పరిచయం" },
  summary: {
    en: "Use this week's questions at a wedding: get to know a guest and ask the way to the dining hall.",
    te: "ఈ వారం నేర్చుకున్న ప్రశ్నలను పెళ్లిలో వాడండి: ఒక అతిథితో పరిచయం చేసుకోండి, భోజనాల హాల్‌కి దారి అడగండి.",
  },
  topics: ["people", "festivals", "directions"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two guests at a wedding", te: "పెళ్లిలో ఇద్దరు అతిథులు" },
    lines: [
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Hello! Are you from the bride's side?", te: "నమస్తే! మీరు పెళ్లికూతురు వైపు వారా?" },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Yes. I am her neighbour.", te: "అవును. నేను వాళ్ల పొరుగింటావిడని." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Nice! Where do you live?", te: "బాగుంది! మీరు ఎక్కడ ఉంటారు?" },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "I live in Guntur. And you?", te: "నేను గుంటూరులో ఉంటాను. మరి మీరు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "I live in Vijayawada.", te: "నేను విజయవాడలో ఉంటాను." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "When did you come?", te: "మీరు ఎప్పుడు వచ్చారు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "This morning, by train.", te: "ఈ రోజు ఉదయం, ట్రైన్‌లో." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Where is the dining hall?", te: "భోజనాల హాల్ ఎక్కడ ఉంది?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "It is behind the stage. Come!", te: "స్టేజ్ వెనకాల ఉంది. రండి!" },
    ],
    questions: [
      { prompt: { en: "Where does Lakshmi live?", te: "లక్ష్మి ఎక్కడ ఉంటుంది?" }, options: ["In Guntur", "In Vijayawada", "In Hyderabad"], answer: 0 },
      { prompt: { en: "How did Mohan come?", te: "మోహన్ ఎలా వచ్చారు?" }, options: ["By bus", "By train", "By auto"], answer: 1 },
      { prompt: { en: "Where is the dining hall?", te: "భోజనాల హాల్ ఎక్కడ ఉంది?" }, options: ["Near the gate", "Behind the stage", "Upstairs"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A guest at the wedding asks your name. Answer in English.",
        te: "పెళ్లిలో ఒక అతిథి మీ పేరు అడుగుతున్నారు. ఇంగ్లీష్‌లో జవాబు చెప్పండి.",
      },
      expected: ["My name is Lakshmi.", "My name is Ramana.", "I am Lakshmi."],
      options: ["My name Lakshmi.", "My name is Lakshmi.", "Me name is Lakshmi."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You are hungry. Ask where the dining hall is.",
        te: "మీకు ఆకలిగా ఉంది. భోజనాల హాల్ ఎక్కడ ఉందో అడగండి.",
      },
      expected: ["Where is the dining hall?"],
      options: ["Where the dining hall is?", "Where is the dining hall?", "What is the dining hall?"],
      answer: 1,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "You want to know the time of the lunch. Ask.",
        te: "భోజనం ఎన్ని గంటలకో తెలుసుకోవాలి. అడగండి.",
      },
      expected: ["What time is lunch?", "When is lunch?"],
      options: ["What time lunch is?", "What time is lunch?", "How is lunch?"],
      answer: 1,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Getting to know a guest", te: "ఒక అతిథితో పరిచయం" },
      scene: {
        en: "At the wedding, Suresh sits next to you. Answer his questions, then ask him some.",
        te: "పెళ్లిలో సురేష్ మీ పక్కన కూర్చున్నారు. ఆయన ప్రశ్నలకు జవాబు చెప్పి, మీరూ కొన్ని అడగండి.",
      },
      partner: { en: "Suresh (a guest)", te: "సురేష్ (అతిథి)" },
      skills: [
        { id: "answer", label: { en: "Answer", te: "జవాబు చెప్పడం" } },
        { id: "ask", label: { en: "Ask", te: "ప్రశ్న అడగడం" } },
      ],
      turns: [
        {
          partner: "Hello! I am Suresh. And you?",
          te: "నమస్తే! నేను సురేష్. మరి మీరు?",
          hint: { en: "Say: My name is, then your name.", te: "My name is అని, తర్వాత మీ పేరు చెప్పండి." },
          replies: [
            { say: "My name is Padma.", good: true, skill: "answer" },
            { say: "My name Padma.", good: false, skill: "answer" },
          ],
        },
        {
          partner: "Where are you from?",
          te: "మీది ఏ ఊరు?",
          hint: { en: "Say your town: I am from Guntur.", te: "మీ ఊరు చెప్పండి: I am from Guntur." },
          replies: [
            { say: "I am from Guntur.", good: true, skill: "answer" },
            { say: "I from Guntur.", good: false, skill: "answer" },
            { say: "I am of Guntur.", good: false, skill: "answer" },
          ],
        },
        {
          partner: "How do you know the bride?",
          te: "పెళ్లికూతురు మీకు ఎలా తెలుసు?",
          hint: { en: "Say: She is my neighbour.", te: "ఇలా చెప్పండి: She is my neighbour." },
          replies: [
            { say: "She is my neighbour.", good: true, skill: "answer" },
            { say: "She my neighbour.", good: false, skill: "answer" },
          ],
        },
        {
          partner: "I am the groom's friend.",
          te: "నేను పెళ్లికొడుకు స్నేహితుడిని.",
          hint: { en: "Ask where he lives: Where do you live?", te: "ఆయన ఎక్కడ ఉంటారో అడగండి: Where do you live?" },
          replies: [
            { say: "Where do you live?", good: true, skill: "ask" },
            { say: "Where you live?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "In Hyderabad. I came by bus.",
          te: "హైదరాబాద్‌లో. బస్‌లో వచ్చాను.",
          hint: { en: "Ask when he came: When did you come?", te: "ఎప్పుడు వచ్చారో అడగండి: When did you come?" },
          replies: [
            { say: "When did you come?", good: true, skill: "ask" },
            { say: "When you came?", good: false, skill: "ask" },
            { say: "When did you came?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Last night. It was a long journey.",
          te: "నిన్న రాత్రి. చాలా దూరం ప్రయాణం.",
          hint: { en: "Welcome him: Welcome to Guntur!", te: "ఆయనకు స్వాగతం చెప్పండి: Welcome to Guntur!" },
          replies: [
            { say: "Welcome to Guntur!", good: true },
            { say: "Welcome in Guntur!", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The way to the dining hall", te: "భోజనాల హాల్‌కి దారి" },
      scene: {
        en: "You want to eat. Rani is helping at the wedding. Ask her the way and the lunch time.",
        te: "మీకు భోజనం చేయాలని ఉంది. పెళ్లిలో రాణి సహాయం చేస్తోంది. ఆమెను దారి, భోజనం టైమ్ అడగండి.",
      },
      partner: { en: "Rani (a helper)", te: "రాణి (సహాయకురాలు)" },
      skills: [
        { id: "ask", label: { en: "Ask", te: "ప్రశ్న అడగడం" } },
        { id: "thanks", label: { en: "Thank", te: "థాంక్స్ చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Hello! Can I help you?",
          te: "నమస్తే! మీకు ఏమైనా సహాయం కావాలా?",
          hint: { en: "Ask where the dining hall is.", te: "భోజనాల హాల్ ఎక్కడ ఉందో అడగండి." },
          replies: [
            { say: "Where is the dining hall?", good: true, skill: "ask" },
            { say: "Where the dining hall is?", good: false, skill: "ask" },
            { say: "What is the dining hall?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Go straight, then turn left.",
          te: "నేరుగా వెళ్లి, ఎడమ వైపు తిరగండి.",
          hint: { en: "Ask how far it is: How far is it?", te: "ఎంత దూరమో అడగండి: How far is it?" },
          replies: [
            { say: "How far is it?", good: true, skill: "ask" },
            { say: "How much far is it?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Not far. Two minutes.",
          te: "దూరం కాదు. రెండు నిమిషాలు.",
          hint: { en: "Ask the lunch time: What time is lunch?", te: "భోజనం టైమ్ అడగండి: What time is lunch?" },
          replies: [
            { say: "What time is lunch?", good: true, skill: "ask" },
            { say: "What time lunch is?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Lunch is at one o'clock.",
          te: "భోజనం ఒంటి గంటకు.",
          hint: { en: "Say: Thank you very much.", te: "ఇలా చెప్పండి: Thank you very much." },
          replies: [
            { say: "Thank you very much.", good: true, skill: "thanks" },
            { say: "Thanks you very much.", good: false, skill: "thanks" },
          ],
        },
      ],
    },
  ],
};

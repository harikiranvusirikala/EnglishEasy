import type { ConversationDay } from "../../types";

/** Week 2, Day 6 (CURRICULUM §3): Conversation Day at a wedding. All of the week's question words and asking someone to say a name again; no new grammar. */
export const day: ConversationDay = {
  id: "w2-conversation",
  kind: "conversation",
  title: { en: "Meeting Someone at a Wedding", te: "పెళ్లిలో పరిచయం" },
  summary: {
    en: "Use this week's questions at a wedding: get to know a guest, ask them to say a name again, and ask the way to the dining hall.",
    te: "ఈ వారం నేర్చుకున్న ప్రశ్నలను పెళ్లిలో వాడండి: ఒక అతిథితో పరిచయం చేసుకోండి, పేరు మళ్ళీ చెప్పమని అడగండి, భోజనాల హాల్‌కి దారి అడగండి.",
  },
  topics: ["people", "festivals", "directions"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two guests at a wedding", te: "పెళ్లిలో ఇద్దరు అతిథులు" },
    lines: [
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Hello! Are you from the bride's side?", te: "నమస్తే! మీరు పెళ్లికూతురు వైపు వారా?" },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Yes. I am her neighbour, Kavitha.", te: "అవును. నేను వాళ్ళ పక్కింటావిడని, కవిత." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Sorry? Please say your name again.", te: "sorry అండీ? మీ పేరు మళ్ళీ ఒకసారి చెప్పండి." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Kavitha. And you? Where do you live?", te: "కవిత. మరి మీరు? మీరు ఎక్కడ ఉంటారు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "I am Mohan, from Vijayawada.", te: "నేను మోహన్, విజయవాడ నుండి." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "When did you come?", te: "మీరు ఎప్పుడు వచ్చారు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "This morning, by train.", te: "ఈ రోజు ఉదయం, ట్రైన్‌లో." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Where is the dining hall?", te: "భోజనాల హాల్ ఎక్కడ ఉంది?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "It is behind the stage. Come!", te: "స్టేజ్ వెనకాల ఉంది. రండి!" },
    ],
    questions: [
      { prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" }, options: ["At a wedding", "At a bus stand", "At a hospital"], answer: 0 },
      { prompt: { en: "What does Mohan ask Kavitha to say again?", te: "కవితని మోహన్ మళ్ళీ ఏం చెప్పమన్నారు?" }, options: ["Her name", "Her town", "The time"], answer: 0 },
      { prompt: { en: "How did Mohan come?", te: "మోహన్ ఎలా వచ్చారు?" }, options: ["By bus", "By train", "By auto"], answer: 1 },
      { prompt: { en: "Where is the dining hall?", te: "భోజనాల హాల్ ఎక్కడ ఉంది?" }, options: ["Near the gate", "Behind the stage", "Upstairs"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A guest tells you her name, but the music is loud. Ask her to say it again.",
        te: "ఒక అతిథి తన పేరు చెప్పారు, కానీ మ్యూజిక్ గట్టిగా ఉంది. మళ్ళీ చెప్పమని అడగండి.",
      },
      expected: ["Sorry? Please say it again.", "Sorry? Please say your name again.", "Again, please."],
      options: ["What? Tell again.", "Sorry? Please say it again.", "Say again your name."],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
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
      fixIt: "question",
      situation: {
        en: "You want to know the lunch time. Ask.",
        te: "భోజనం ఎన్ని గంటలకో తెలుసుకోవాలి. అడగండి.",
      },
      expected: ["What time is lunch?", "When is lunch?"],
      options: ["What time lunch is?", "What time is lunch?", "Lunch is what time?"],
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
      voice: "b",
      skills: [
        { id: "answer", label: { en: "Answer", te: "జవాబు చెప్పడం" } },
        { id: "ask", label: { en: "Ask", te: "ప్రశ్న అడగడం" } },
      ],
      turns: [
        {
          partner: "Hello! I am Suresh. And you?",
          te: "నమస్తే! నేను సురేష్. మరి మీరు?",
          hint: { en: "The music is loud. You did not catch his name. Ask him to say it again.", te: "మ్యూజిక్ గట్టిగా ఉంది. ఆయన పేరు వినిపించలేదు. మళ్ళీ చెప్పమని అడగండి." },
          replies: [
            { say: "Sorry? Please say it again.", good: true, skill: "ask" },
            {
              say: "What? Say again.",
              good: false,
              skill: "ask",
              react: { en: "Suresh. My name is Suresh.", te: "సురేష్. నా పేరు సురేష్." },
            },
          ],
        },
        {
          partner: "Suresh. And your name?",
          te: "సురేష్. మరి మీ పేరు?",
          hint: { en: "Say your name. Start with My name is.", te: "మీ పేరు చెప్పండి. My name is తో మొదలుపెట్టండి." },
          replies: [
            { say: "My name is Kiran.", good: true, skill: "answer" },
            { say: "My name Kiran.", good: false, skill: "answer", fixIt: "be" },
            { say: "Myself Kiran.", good: false, skill: "answer", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Where are you from?",
          te: "మీది ఏ ఊరు?",
          hint: { en: "Say your town. Here it is Guntur.", te: "మీ ఊరు చెప్పండి. ఇక్కడ గుంటూరు." },
          replies: [
            { say: "I am from Guntur.", good: true, skill: "answer" },
            { say: "I from Guntur.", good: false, skill: "answer", fixIt: "be" },
            { say: "I am belonging to Guntur.", good: false, skill: "answer", fixIt: "state-ing" },
          ],
        },
        {
          partner: "How do you know the bride?",
          te: "పెళ్లికూతురు మీకు ఎలా తెలుసు?",
          hint: { en: "Say how you know her: she lives next door.", te: "ఆవిడ మీకు ఎలా తెలుసో చెప్పండి: మీ పక్కింట్లో ఉంటారు." },
          replies: [
            { say: "She is my neighbour.", good: true, skill: "answer" },
            { say: "She my neighbour.", good: false, skill: "answer", fixIt: "be" },
            {
              say: "None of your business.",
              good: false,
              react: { en: "Oh! Sorry. I meant no harm.", te: "అయ్యో! sorry అండీ, ఏదో మాటవరసకి అడిగాను." },
            },
          ],
        },
        {
          partner: "I am the groom's friend.",
          te: "నేను పెళ్లికొడుకు స్నేహితుడిని.",
          hint: { en: "A man is waving at Suresh. Ask who he is.", te: "ఒకాయన సురేష్‌కి చేయి ఊపుతున్నారు. ఆయన ఎవరని అడగండి." },
          replies: [
            { say: "Who is that man?", good: true, skill: "ask" },
            { say: "Who that man is?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "That is Prasad. Come, meet him!",
          te: "ఆయన ప్రసాద్ గారు. రండి, పరిచయం చేస్తాను!",
          hint: { en: "Agree politely, and thank him.", te: "సరే అని మర్యాదగా చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, thank you!", good: true },
            { say: "No. Why?", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The way to the dining hall", te: "భోజనాల హాల్‌కి దారి" },
      scene: {
        en: "You want to eat. Raju is helping at the wedding. Ask him the way and the lunch time.",
        te: "మీకు భోజనం చేయాలని ఉంది. పెళ్లిలో రాజు గారు సహాయం చేస్తున్నారు. ఆయన్ని దారి, భోజనం టైమ్ అడగండి.",
      },
      partner: { en: "Raju (a helper)", te: "రాజు (సహాయకుడు)" },
      voice: "b",
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
            { say: "Where the dining hall is?", good: false, skill: "ask", fixIt: "question" },
            { say: "What is the dining hall?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Go straight, then turn left.",
          te: "నేరుగా వెళ్లి, ఎడమ వైపు తిరగండి.",
          hint: { en: "Ask about the distance.", te: "ఎంత దూరమో అడగండి." },
          replies: [
            { say: "How far is it?", good: true, skill: "ask" },
            { say: "How much far is it?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Not far. Two minutes.",
          te: "ఎక్కువ దూరం లేదు. రెండు నిమిషాలే.",
          hint: { en: "Now ask about the lunch time.", te: "ఇప్పుడు భోజనం ఎన్ని గంటలకో అడగండి." },
          replies: [
            { say: "What time is lunch?", good: true, skill: "ask" },
            { say: "What time lunch is?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Lunch is at one o'clock.",
          te: "భోజనం ఒంటి గంటకు.",
          hint: { en: "Thank him warmly.", te: "ఆయనకి మనస్ఫూర్తిగా thank you చెప్పండి." },
          replies: [
            { say: "Thank you very much.", good: true, skill: "thanks" },
            { say: "Thanks you very much.", good: false, skill: "thanks" },
            {
              say: "One o'clock? So late!",
              good: false,
              react: { en: "Sorry! There are snacks near the stage.", te: "sorry అండీ! స్టేజ్ దగ్గర టిఫిన్ ఉంది." },
            },
          ],
        },
      ],
    },
  ],
};

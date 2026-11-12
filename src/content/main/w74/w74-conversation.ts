import type { ConversationDay } from "../../types";

/** Week 74, Day 6 (CURRICULUM §5): Conversation Day — a technician explains a new water purifier; explaining the gas booking steps to a neighbour. */
export const day: ConversationDay = {
  id: "w74-conversation",
  kind: "conversation",
  title: { en: "A New Water Purifier", te: "కొత్త వాటర్ ప్యూరిఫైయర్" },
  summary: {
    en: "Use the whole week: follow a technician who explains a water purifier, and explain the gas booking steps to a neighbour.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: వాటర్ ప్యూరిఫైయర్ గురించి టెక్నీషియన్ చెప్పేది అర్థం చేసుకోండి, గ్యాస్ బుకింగ్ steps పక్కింటివారికి చెప్పండి.",
  },
  topics: ["home", "technology", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The purifier is fitted", te: "ప్యూరిఫైయర్ బిగించారు" },
    lines: [
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Good morning. Please come in. The purifier is for the kitchen.", te: "గుడ్ మార్నింగ్. లోపలికి రండి. ప్యూరిఫైయర్ వంటగదికి." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Thank you, madam. I'll fix it on this wall, near the tap.", te: "థాంక్యూ మేడమ్. దీన్ని ఈ గోడకి, కుళాయి దగ్గర బిగిస్తాను." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "How does it work? I've never used one before.", te: "ఇది ఎలా పనిచేస్తుంది? నేను ఇంతకుముందు ఎప్పుడూ వాడలేదు." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "First, the tap water goes through two filters.", te: "ముందు కుళాయి నీళ్ళు రెండు filters గుండా వెళ్తాయి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "And then what happens to it?", te: "తర్వాత వాటికి ఏం జరుగుతుంది?" },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Then the germs are killed by a UV light inside.", te: "తర్వాత లోపల ఉన్న UV లైట్ క్రిముల్ని చంపేస్తుంది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Do I have to change the filters?", te: "filters నేను మార్చాలా?" },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "No, we do that. They are changed once a year.", te: "లేదండీ, అది మేమే చేస్తాం. సంవత్సరానికి ఒకసారి మారుస్తాం." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Didn't you bring the bill and the warranty card?", te: "బిల్లు, warranty కార్డు తేలేదా?" },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "No, I didn't. They are sent to your phone by SMS.", te: "లేదండీ, తేలేదు. అవి మీ ఫోన్‌కి SMS లో పంపుతాం." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["How a water purifier works", "How to book a gas cylinder", "How to pay a water bill"],
        answer: 0,
      },
      {
        prompt: { en: "What happens to the water first?", te: "నీళ్ళకి ముందు ఏం జరుగుతుంది?" },
        options: ["It goes through two filters.", "It is boiled.", "It is sent to the tank."],
        answer: 0,
      },
      {
        prompt: { en: "How often are the filters changed?", te: "filters ఎన్నాళ్ళకోసారి మారుస్తారు?" },
        options: ["Once a year", "Every month", "Every week"],
        answer: 0,
      },
      {
        prompt: { en: "How does Fatima get the bill?", te: "ఫాతిమా గారికి బిల్లు ఎలా వస్తుంది?" },
        options: ["By SMS on her phone", "By post", "From the shop"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the technician how often the filters are changed.",
        te: "filters ఎన్నాళ్ళకోసారి మారుస్తారో టెక్నీషియన్‌ని అడగండి.",
      },
      expected: ["How often are the filters changed?", "How often do you change the filters?", "When are the filters changed?"],
      options: ["How often are the filters changed?", "How often the filters are changed?", "How often is the filters changed?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The technician asks: You don't have a plug point near the tap? There isn't one. Answer him.",
        te: "టెక్నీషియన్ You don't have a plug point near the tap? అని అడిగారు. అక్కడ ప్లగ్ పాయింట్ లేదు. ఆయనకి జవాబు చెప్పండి.",
      },
      expected: ["No, there isn't. Is that a problem?", "No, there isn't.", "No, I don't."],
      options: ["No, there isn't. Is that a problem?", "Yes, there isn't. Is that a problem?", "Yes, there is no. Is that a problem?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell your neighbour your news: you got a new water purifier today.",
        te: "పక్కింటివారికి మీ కబురు చెప్పండి: ఈ రోజు కొత్త వాటర్ ప్యూరిఫైయర్ వచ్చింది.",
      },
      expected: ["I got a new water purifier today.", "I have a new water purifier now.", "I bought a new water purifier today."],
      options: ["I got a new water purifier today.", "I got new water purifier today.", "I get a new water purifier today."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "How the purifier works", te: "ప్యూరిఫైయర్ ఎలా పనిచేస్తుంది" },
      scene: {
        en: "Ayesha, a technician from the company, has fitted your new water purifier. Now she explains it.",
        te: "కంపెనీ నుంచి టెక్నీషియన్ ఆయేషా గారు మీ కొత్త వాటర్ ప్యూరిఫైయర్ బిగించారు. ఇప్పుడు అదెలా పనిచేస్తుందో చెప్తున్నారు.",
      },
      partner: { en: "Ayesha (the technician)", te: "ఆయేషా (టెక్నీషియన్)" },
      skills: [
        { id: "process", label: { en: "Asking how it works", te: "ఎలా పనిచేస్తుందో అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Your purifier is ready. Shall I show you how it works?",
          te: "హలో! మీ ప్యూరిఫైయర్ రెడీ. ఎలా పనిచేస్తుందో చూపించనా?",
          hint: { en: "Say yes, and thank her for coming.", te: "సరే అని, వచ్చినందుకు ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, please. Thank you for coming so quickly.", good: true, skill: "polite" },
            {
              say: "Yes, but be quick. You came very late.",
              good: false,
              skill: "polite",
              react: { en: "Sorry! The traffic was very bad today.", te: "సారీ అండీ! ఈ రోజు ట్రాఫిక్ చాలా ఎక్కువగా ఉంది." },
            },
          ],
        },
        {
          partner: "First, the water goes through two filters. Then UV light kills the germs.",
          te: "ముందు నీళ్ళు ఈ రెండు filters గుండా వెళ్తాయి. తర్వాత UV లైట్ క్రిముల్ని చంపేస్తుంది.",
          hint: { en: "Ask when new filters are needed.", te: "కొత్త filters ఎప్పుడు కావాలో అడగండి." },
          replies: [
            { say: "How often are the filters changed?", good: true, skill: "process" },
            { say: "When do I need to change them?", good: true, skill: "process" },
            { say: "How often the filters are changed?", good: false, skill: "process", fixIt: "question" },
          ],
        },
        {
          partner: "Once a year. We'll call you before that.",
          te: "సంవత్సరానికి ఒకసారి. దానికి ముందే మేము ఫోన్ చేస్తాం.",
          hint: { en: "Ask if the first change costs money.", te: "మొదటిసారి మార్చడానికి డబ్బు కట్టాలా అని అడగండి." },
          replies: [
            { say: "Do I have to pay for the first change?", good: true, skill: "process" },
            { say: "Is the first change free?", good: true, skill: "process" },
            { say: "Does the first change costs money?", good: false, skill: "process", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "No, the first year is free. Any other questions?",
          te: "లేదండీ, మొదటి సంవత్సరం ఫ్రీ. ఇంకేమైనా ప్రశ్నలు ఉన్నాయా?",
          hint: { en: "Say that's all, thank her, and say goodbye.", te: "ఇంకేమీ లేవని చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "No, that's all. Thank you very much. Goodbye!", good: true, skill: "polite" },
            { say: "No, that's all. Thank you for explaining so clearly.", good: true, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Booking a gas cylinder", te: "గ్యాస్ సిలిండర్ బుకింగ్" },
      scene: {
        en: "Your new neighbour Narayana has just moved in. His gas cylinder is almost empty, and he asks you for help.",
        te: "మీ పక్కింటికి నారాయణ గారు కొత్తగా వచ్చారు. ఆయన గ్యాస్ సిలిండర్ దాదాపు అయిపోయింది, మీ సాయం అడుగుతున్నారు.",
      },
      partner: { en: "Narayana (your neighbour)", te: "నారాయణ (మీ పక్కింటివారు)" },
      voice: "b",
      skills: [
        { id: "steps", label: { en: "Explaining steps", te: "steps చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! My gas is almost finished. How do I book a new cylinder?",
          te: "హలో! నా గ్యాస్ దాదాపు అయిపోయింది. కొత్త సిలిండర్ ఎలా బుక్ చేయాలి?",
          hint: { en: "Say it's easy, and give the first step: a call from his registered phone.", te: "సులువేనని చెప్పి, మొదటి step చెప్పండి: రిజిస్టర్ అయిన ఫోన్ నుంచి కాల్." },
          replies: [
            { say: "It's easy. First, call the booking number from your registered phone.", good: true, skill: "steps" },
            {
              say: "Everybody knows that. Ask someone else.",
              good: false,
              skill: "polite",
              react: { en: "Oh. Sorry to trouble you.", te: "ఓ. ఇబ్బంది పెట్టినందుకు సారీ." },
            },
          ],
        },
        {
          partner: "Okay. And then what do I do?",
          te: "సరే. తర్వాత ఏం చేయాలి?",
          hint: { en: "Tell him to choose the booking option, and say what he gets after that.", te: "బుకింగ్ ఆప్షన్ ఎంచుకోమని చెప్పి, తర్వాత ఏం వస్తుందో చెప్పండి." },
          replies: [
            { say: "Then press the number for booking. A booking number is sent by SMS.", good: true, skill: "steps" },
            { say: "Then press the number for booking. Booking number is sent by SMS.", good: false, skill: "steps", fixIt: "article" },
          ],
        },
        {
          partner: "When does the cylinder come?",
          te: "సిలిండర్ ఎప్పుడు వస్తుంది?",
          hint: { en: "Say how many days it usually takes.", te: "మామూలుగా ఎన్ని రోజులు పడుతుందో చెప్పండి." },
          replies: [
            { say: "It is usually delivered in two or three days.", good: true, skill: "steps" },
            { say: "It is usually delivered in two or three day.", good: false, skill: "steps", fixIt: "plural" },
          ],
        },
        {
          partner: "Thank you so much! You explained it very clearly.",
          te: "చాలా థాంక్స్! చాలా బాగా అర్థమయ్యేలా చెప్పారు.",
          hint: { en: "Say it's no trouble, and offer more help.", te: "పర్లేదని చెప్పి, ఇంకా సాయం చేస్తానని చెప్పండి." },
          replies: [
            { say: "You're welcome. Call me if you need any help.", good: true, skill: "polite" },
            { say: "You're welcome. Call to me if you need any help.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

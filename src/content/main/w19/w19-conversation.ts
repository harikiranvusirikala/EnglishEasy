import type { ConversationDay } from "../../types";

/** Week 19, Day 6 (CURRICULUM §4): Conversation Day — a day of phone calls: a message, a cousin, a shop. */
export const day: ConversationDay = {
  id: "w19-conversation",
  kind: "conversation",
  title: { en: "A Day of Phone Calls", te: "రోజంతా ఫోన్లు" },
  summary: {
    en: "Use the whole week: leave a message on a bad line, call a cousin, and call a shop to check it is open.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: సరిగ్గా లేని లైన్‌లో మెసేజ్ ఇవ్వండి, మీ cousin కి ఫోన్ చేయండి, షాప్ తెరిచి ఉందో లేదో ఫోన్ చేసి అడగండి.",
  },
  topics: ["phone", "neighbours", "shopping"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A message for Kumar", te: "కుమార్ గారికి మెసేజ్" },
    lines: [
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Hello? Who is speaking, please?", te: "హలో? ఎవరు మాట్లాడుతున్నారండీ?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Hello, this is Radha. May I speak to Kumar?", te: "హలో, నేను రాధని. కుమార్ గారితో మాట్లాడొచ్చా?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Sorry, he's not at home. He's at the temple.", te: "Sorry అండీ, ఆయన ఇంట్లో లేరు. గుడికి వెళ్ళారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "When will he be back?", te: "ఎప్పుడు తిరిగి వస్తారు?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "At seven, I think. Can I take a message?", te: "ఏడు గంటలకి అనుకుంటా. ఏమైనా చెప్పాలా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes, please. The colony meeting is on Sunday.", te: "అవునండీ. కాలనీ మీటింగ్ ఆదివారం." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Sorry, the line is not clear. Sunday?", te: "Sorry, లైన్ సరిగ్గా లేదు. ఆదివారమా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes, Sunday at ten, in the community hall.", te: "అవును, ఆదివారం పది గంటలకి, కమ్యూనిటీ హాల్‌లో." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Okay, I'll tell him. He'll call you back.", te: "సరే, ఆయనకి చెప్తాను. ఆయన మీకు మళ్ళీ ఫోన్ చేస్తారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Thank you so much. Bye!", te: "చాలా థాంక్స్ అండీ. ఉంటాను!" },
    ],
    questions: [
      {
        prompt: { en: "What is this phone call about?", te: "ఈ ఫోన్ కాల్ దేని గురించి?" },
        options: ["A message for Kumar", "Booking a gas cylinder", "A wrong number"],
        answer: 0,
      },
      {
        prompt: { en: "Where is Kumar now?", te: "కుమార్ గారు ఇప్పుడు ఎక్కడ ఉన్నారు?" },
        options: ["At the bank", "At the temple", "At the market"],
        answer: 1,
      },
      {
        prompt: { en: "When is the colony meeting?", te: "కాలనీ మీటింగ్ ఎప్పుడు?" },
        options: ["Sunday at seven", "Saturday at ten", "Sunday at ten"],
        answer: 2,
      },
      {
        prompt: { en: "What will Kumar do?", te: "కుమార్ గారు ఏం చేస్తారు?" },
        options: ["Call Radha back", "Go to Radha's house", "Send Radha a letter"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "A caller asks for Ramana. Nobody named Ramana lives here. Tell them kindly.",
        te: "ఫోన్ చేసినవాళ్ళు రమణ గారిని అడిగారు. ఇక్కడ రమణ అనేవాళ్ళు ఎవరూ లేరు. మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, you have the wrong number.", "Sorry, I think you have the wrong number."],
      options: ["Sorry, you have the wrong number.", "Sorry, you have wrong number.", "Wrong number! Don't call here."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You call a clinic. Ask politely to speak to Dr Mary.",
        te: "మీరు క్లినిక్‌కి ఫోన్ చేశారు. డాక్టర్ మేరీ గారితో మాట్లాడాలని మర్యాదగా అడగండి.",
      },
      expected: ["May I speak to Dr Mary, please?", "May I speak to Dr Mary?", "Can I speak to Dr Mary, please?"],
      options: ["May I speak to Dr Mary, please?", "May I speaking to Dr Mary?", "Give the phone to Dr Mary."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "A friend calls while you are eating. Promise to call back in ten minutes.",
        te: "మీరు భోజనం చేస్తుండగా మీ స్నేహితులు ఒకరు ఫోన్ చేశారు. పది నిమిషాల్లో మళ్ళీ చేస్తానని చెప్పండి.",
      },
      expected: ["I'll call you back in ten minutes.", "Sorry, I'm eating. I'll call you back."],
      options: ["I'll call you back in ten minutes.", "I'll call you back on ten minutes.", "I call you back ten minutes."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Calling a cousin", te: "cousin కి ఫోన్" },
      scene: {
        en: "You are going to Hyderabad on Sunday. You call your cousin Sarala there.",
        te: "మీరు ఆదివారం హైదరాబాద్ వెళ్తున్నారు. అక్కడ ఉన్న మీ cousin సరళ గారికి ఫోన్ చేశారు.",
      },
      partner: { en: "Sarala (cousin)", te: "సరళ (cousin)" },
      skills: [
        { id: "open", label: { en: "Starting a call", te: "కాల్ మొదలుపెట్టడం" } },
        { id: "line", label: { en: "A bad line", te: "సరిగ్గా లేని లైన్" } },
      ],
      turns: [
        {
          partner: "Hello? Who is this, please?",
          te: "హలో? ఎవరండీ?",
          hint: { en: "Say hello, and say who you are.", te: "హలో అని, మీరెవరో చెప్పండి." },
          replies: [
            { say: "Hello, this is Kiran.", good: true, skill: "open" },
            { say: "Hello, myself Kiran.", good: false, skill: "open", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Oh, hello! How are you? Long time!",
          te: "ఓ, హలో! ఎలా ఉన్నారు? చాలా రోజులైంది!",
          hint: { en: "Say you are fine, and ask how she is.", te: "బాగున్నానని చెప్పి, ఆవిడ ఎలా ఉన్నారో అడగండి." },
          replies: [
            { say: "I'm fine, thank you. How are you?", good: true, skill: "open" },
            { say: "I'm fine, thank you. How you are?", good: false, skill: "open", fixIt: "question" },
          ],
        },
        {
          partner: "I'm fine. Sorry, I can't hear you well.",
          te: "బాగున్నాను. Sorry, మీ మాట సరిగ్గా వినిపించట్లేదు.",
          hint: { en: "Say the line is bad, and that you will call again.", te: "లైన్ సరిగ్గా లేదని, మళ్ళీ చేస్తానని చెప్పండి." },
          replies: [
            { say: "The line is not clear. Let me call you again.", good: true, skill: "line" },
            { say: "The line is not clearly. Let me call again you.", good: false, skill: "line" },
          ],
        },
        {
          partner: "Yes, now I can hear you. Tell me.",
          te: "ఆ, ఇప్పుడు వినిపిస్తోంది. చెప్పండి.",
          hint: { en: "Say you are coming to Hyderabad on Sunday.", te: "ఆదివారం హైదరాబాద్ వస్తున్నారని చెప్పండి." },
          replies: [
            { say: "I'm coming to Hyderabad on Sunday.", good: true },
            { say: "I'm coming to Hyderabad in Sunday.", good: false, fixIt: "preposition" },
          ],
        },
        {
          partner: "Wonderful! Please come home for lunch.",
          te: "చాలా సంతోషం! భోజనానికి ఇంటికి రండి.",
          hint: { en: "Thank her, and say goodbye until Sunday.", te: "థాంక్స్ చెప్పి, ఆదివారం కలుద్దామని బై చెప్పండి." },
          replies: [
            { say: "Thank you! See you on Sunday. Bye!", good: true },
            {
              say: "Okay, but make biryani for me.",
              good: false,
              react: { en: "Ha! Okay, biryani it is.", te: "హహ! సరే, బిర్యానీయే చేస్తాను." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Is the shop open?", te: "షాప్ తెరిచి ఉందా?" },
      scene: {
        en: "It is evening. You need rice flour. You call Joseph's kirana shop first.",
        te: "సాయంత్రం అయింది. మీకు బియ్యప్పిండి కావాలి. ముందు జోసెఫ్ గారి కిరాణా షాప్‌కి ఫోన్ చేశారు.",
      },
      partner: { en: "Joseph (shopkeeper)", te: "జోసెఫ్ (షాప్ యజమాని)" },
      voice: "b",
      skills: [{ id: "ask", label: { en: "Asking on the phone", te: "ఫోన్‌లో అడగడం" } }],
      turns: [
        {
          partner: "Hello, Joseph Stores. How can I help?",
          te: "హలో, జోసెఫ్ స్టోర్స్. చెప్పండి?",
          hint: { en: "Ask if the shop is open now.", te: "షాప్ ఇప్పుడు తెరిచి ఉందా అని అడగండి." },
          replies: [
            { say: "Hello, is the shop open now?", good: true, skill: "ask" },
            { say: "Hello, the shop is open now?", good: false, skill: "ask", fixIt: "question" },
            {
              say: "Open or closed? Tell me fast.",
              good: false,
              skill: "ask",
              react: { en: "Open, open! No need to hurry.", te: "తెరిచే ఉంది! కంగారు అక్కర్లేదు." },
            },
          ],
        },
        {
          partner: "Yes, we are open till nine.",
          te: "ఆ, తొమ్మిది వరకు తెరిచే ఉంటుంది.",
          hint: { en: "Ask if he has rice flour.", te: "బియ్యప్పిండి ఉందా అని అడగండి." },
          replies: [
            { say: "Do you have rice flour?", good: true, skill: "ask" },
            { say: "Do you have a rice flour?", good: false, skill: "ask", fixIt: "article" },
          ],
        },
        {
          partner: "Yes, we have. How much do you need?",
          te: "ఉందండీ. ఎంత కావాలి?",
          hint: { en: "Say you need two kilos.", te: "రెండు కిలోలు కావాలని చెప్పండి." },
          replies: [
            { say: "I need two kilos, please.", good: true, skill: "ask" },
            { say: "I need two kilo, please.", good: false, skill: "ask", fixIt: "plural" },
          ],
        },
        {
          partner: "Okay. I'll keep it ready for you.",
          te: "సరే. మీ కోసం రెడీగా పెడతాను.",
          hint: { en: "Thank him, and say you will come in twenty minutes.", te: "థాంక్స్ చెప్పి, ఇరవై నిమిషాల్లో వస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll come in twenty minutes.", good: true, skill: "ask" },
            { say: "Thank you. I'll coming in twenty minutes.", good: false, skill: "ask" },
          ],
        },
      ],
    },
  ],
};

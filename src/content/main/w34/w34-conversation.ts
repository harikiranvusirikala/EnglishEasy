import type { ConversationDay } from "../../types";

/** Week 34, Day 6 (CURRICULUM §4): Conversation Day at the morning walk — a chat with another walker, and small talk in a clinic waiting room. */
export const day: ConversationDay = {
  id: "w34-conversation",
  kind: "conversation",
  title: { en: "At the Morning Walk", te: "మార్నింగ్ వాక్‌లో" },
  summary: {
    en: "Use the whole week: start, keep up and end a friendly chat on the morning walk and in a clinic waiting room.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: మార్నింగ్ వాక్‌లో, క్లినిక్‌లో ఎదురుచూస్తూ స్నేహంగా కబుర్లు మొదలుపెట్టండి, కొనసాగించండి, ముగించండి.",
  },
  topics: ["people", "weather", "health"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two walkers in the park", te: "పార్కులో ఇద్దరు నడిచేవాళ్ళు" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Good morning! Lovely weather, isn't it?", te: "నమస్కారం! వాతావరణం చాలా బాగుంది కదా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes, it is. Much cooler than last week.", te: "అవును. పోయిన వారం కంటే చాలా చల్లగా ఉంది." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "I didn't see you here yesterday.", te: "నిన్న మీరు ఇక్కడ కనిపించలేదు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "No, I didn't come. I had a cold.", te: "లేదు, రాలేదు. జలుబు చేసింది." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Oh! How are you keeping now?", te: "అయ్యో! ఇప్పుడు ఎలా ఉంది?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Much better, thank you. Did you watch the match?", te: "చాలా నయం, థాంక్యూ. మీరు మ్యాచ్ చూశారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "No, I didn't. Who won?", te: "లేదు, చూడలేదు. ఎవరు గెలిచారు?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "India won by five wickets!", te: "ఇండియా ఐదు వికెట్ల తేడాతో గెలిచింది!" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Wonderful! I must go now. Nice talking to you.", te: "అద్భుతం! ఇక వెళ్ళాలి. మీతో మాట్లాడటం సంతోషంగా ఉంది." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Nice talking to you too. See you tomorrow!", te: "నాకూ సంతోషమే. రేపు కలుద్దాం!" },
    ],
    questions: [
      {
        prompt: { en: "What are they doing?", te: "వీళ్ళు ఏం చేస్తున్నారు?" },
        options: ["Chatting on a morning walk", "Buying vegetables", "Waiting for a bus"],
        answer: 0,
      },
      {
        prompt: { en: "Why didn't Venkat come yesterday?", te: "నిన్న వెంకట్ గారు ఎందుకు రాలేదు?" },
        options: ["He had a cold.", "He watched the match.", "He went to a function."],
        answer: 0,
      },
      {
        prompt: { en: "Did Radha watch the match?", te: "రాధ గారు మ్యాచ్ చూశారా?" },
        options: ["No, she didn't.", "Yes, she did.", "Yes, she didn't."],
        answer: 0,
      },
      {
        prompt: { en: "Who won the match?", te: "మ్యాచ్ ఎవరు గెలిచారు?" },
        options: ["India, by five wickets", "India, by five runs", "The other team"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A walker asks: You didn't come yesterday? You did come.",
        te: "నడిచే ఒకరు You didn't come yesterday? అని అడిగారు. మీరు వచ్చారు.",
      },
      expected: ["Yes, I did.", "Yes, I did come."],
      options: ["Yes, I did.", "No, I did.", "Yes, I didn't."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "In the clinic waiting room, start a chat about the heat.",
        te: "క్లినిక్‌లో ఎదురుచూస్తూ, ఎండ వేడి గురించి మాట మొదలుపెట్టండి.",
      },
      expected: ["It's very hot today, isn't it?", "It's hot today, isn't it?", "Hot today, isn't it?"],
      options: ["It's very hot today, isn't it?", "It very hot today, isn't it?", "It's very hot today, is it?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell a friend that India won the match by three wickets.",
        te: "ఇండియా మూడు వికెట్ల తేడాతో గెలిచిందని స్నేహితులకి చెప్పండి.",
      },
      expected: ["India won by three wickets.", "India won the match by three wickets."],
      options: ["India won by three wickets.", "India won by three wicket.", "India is won by three wickets."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A chat with another walker", te: "ఇంకో నడిచేవారితో కబుర్లు" },
      scene: {
        en: "It is Sunday morning in the park. Ramesh, another walker, stops to chat.",
        te: "ఆదివారం ఉదయం, పార్కులో ఉన్నారు. నడకకి వచ్చిన రమేష్ గారు ఆగి పలకరించారు.",
      },
      partner: { en: "Ramesh (a walker)", te: "రమేష్ (నడకకి వచ్చేవారు)" },
      voice: "b",
      skills: [
        { id: "chat", label: { en: "Small talk", te: "చిన్న కబుర్లు" } },
        { id: "answer", label: { en: "Short answers", te: "చిన్న జవాబులు" } },
      ],
      turns: [
        {
          partner: "Good morning! Nice and cool today, isn't it?",
          te: "నమస్కారం! ఈ రోజు హాయిగా, చల్లగా ఉంది కదా?",
          hint: { en: "Agree, and say something about the breeze.", te: "ఒప్పుకుని, చల్లగాలి గురించి ఒక మాట చెప్పండి." },
          replies: [
            { say: "Yes, it is. There's a lovely breeze.", good: true, skill: "chat" },
            { say: "Yes, it isn't. There's a lovely breeze.", good: false, skill: "chat" },
          ],
        },
        {
          partner: "I haven't seen you here before.",
          te: "మిమ్మల్ని ఇంతకు ముందు ఇక్కడ చూడలేదు.",
          hint: { en: "Say you come here only on Sundays.", te: "ఆదివారాలు మాత్రమే ఇక్కడికి వస్తానని చెప్పండి." },
          replies: [
            { say: "I come here only on Sundays.", good: true, skill: "chat" },
            { say: "I come here only in Sundays.", good: false, skill: "chat", fixIt: "preposition" },
          ],
        },
        {
          partner: "Ah! Didn't you come last Sunday?",
          te: "అలాగా! పోయిన ఆదివారం రాలేదా?",
          hint: { en: "Say you did not come, because you had a function.", te: "రాలేదని, ఫంక్షన్ ఉందని చెప్పండి." },
          replies: [
            { say: "No, I didn't. I had a function.", good: true, skill: "answer" },
            { say: "Yes, I didn't. I had a function.", good: false, skill: "answer", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "I see. How are you keeping these days?",
          te: "అలాగా. ఈ మధ్య ఆరోగ్యం ఎలా ఉంది?",
          hint: { en: "Say you are okay, and ask about him.", te: "బాగానే ఉన్నానని చెప్పి, ఆయన గురించి అడగండి." },
          replies: [
            { say: "Not bad, thank you. And you?", good: true, skill: "chat" },
            {
              say: "Why do you want to know?",
              good: false,
              skill: "chat",
              react: { en: "Oh, sorry! I was only being friendly.", te: "అయ్యో, sorry! ఊరికే స్నేహంగా అడిగాను." },
            },
          ],
        },
        {
          partner: "Very well! Okay, see you next Sunday.",
          te: "బాగున్నాను! సరే, వచ్చే ఆదివారం కలుద్దాం.",
          hint: { en: "Say you enjoyed the chat, and say goodbye.", te: "కబుర్లు నచ్చాయని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Nice talking to you. See you!", good: true, skill: "chat" },
            { say: "Nice talking to you. I'll go and come.", good: false, skill: "chat", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "In the clinic waiting room", te: "క్లినిక్‌లో ఎదురుచూస్తూ" },
      scene: {
        en: "You are waiting to see Dr Prasad. Your token is fourteen. Fatima sits down near you.",
        te: "డాక్టర్ ప్రసాద్ గారి కోసం ఎదురుచూస్తున్నారు. మీ టోకెన్ పద్నాలుగు. ఫాతిమా గారు మీ పక్కన కూర్చున్నారు.",
      },
      partner: { en: "Fatima (a patient)", te: "ఫాతిమా (పేషెంట్)" },
      skills: [
        { id: "chat", label: { en: "Small talk", te: "చిన్న కబుర్లు" } },
        { id: "answer", label: { en: "Short answers", te: "చిన్న జవాబులు" } },
      ],
      turns: [
        {
          partner: "Excuse me, is this the line for Dr Prasad?",
          te: "ఏమండీ, ఇది డాక్టర్ ప్రసాద్ గారి క్యూనా?",
          hint: { en: "Say yes with a short answer, and offer her a seat.", te: "చిన్న జవాబుతో అవునని చెప్పి, కూర్చోమనండి." },
          replies: [
            { say: "Yes, it is. Please sit here.", good: true, skill: "answer" },
            { say: "Yes, it does. Please sit here.", good: false, skill: "answer" },
          ],
        },
        {
          partner: "Thank you. Haven't you seen the doctor yet?",
          te: "థాంక్యూ. మీరు ఇంకా డాక్టర్‌ని చూడలేదా?",
          hint: { en: "Say you have not, and tell her your token number.", te: "ఇంకా చూడలేదని, మీ టోకెన్ నంబర్ చెప్పండి." },
          replies: [
            { say: "No, I haven't. My token is fourteen.", good: true, skill: "answer" },
            { say: "Yes, I haven't. My token is fourteen.", good: false, skill: "answer", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "I'm twelve. It's very hot today, isn't it?",
          te: "నాది పన్నెండు. ఈ రోజు చాలా వేడిగా ఉంది కదా?",
          hint: { en: "Agree with her about the heat.", te: "ఎండ వేడి గురించి ఆవిడతో ఒప్పుకోండి." },
          replies: [
            { say: "Yes, it is. Very hot this week.", good: true, skill: "chat" },
            {
              say: "Please don't talk. I'm reading.",
              good: false,
              skill: "chat",
              react: { en: "Oh, sorry! I'll keep quiet.", te: "అయ్యో, sorry! నేను మాట్లాడను." },
            },
          ],
        },
        {
          partner: "Oh, that's my number! Nice talking to you.",
          te: "అరే, నా నంబర్ వచ్చింది! మీతో మాట్లాడటం సంతోషం.",
          hint: { en: "Reply kindly, and wish her well.", te: "ఆప్యాయంగా జవాబు చెప్పి, ఆవిడ బాగుండాలని చెప్పండి." },
          replies: [
            { say: "Nice talking to you too. Take care!", good: true, skill: "chat" },
            { say: "Nice talk to you too. Take care!", good: false, skill: "chat" },
          ],
        },
      ],
    },
  ],
};

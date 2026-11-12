import type { ConversationDay } from "../../types";

/** Week 55, Day 6 (CURRICULUM §5): Conversation Day — planning a group trip to Srisailam with friends; a train delay and a call to the hotel. */
export const day: ConversationDay = {
  id: "w55-conversation",
  kind: "conversation",
  title: { en: "A Group Trip to Srisailam", te: "శ్రీశైలం యాత్ర" },
  summary: {
    en: "Use the whole week: plan a group trip to Srisailam with friends, and call the hotel when your train is late.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: స్నేహితులతో శ్రీశైలం యాత్ర ప్లాన్ చేయండి, రైలు ఆలస్యమైనప్పుడు హోటల్‌కి ఫోన్ చేయండి.",
  },
  topics: ["travel", "transport", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A trip with the walking group", te: "వాకింగ్ గ్రూప్‌తో యాత్ర" },
    lines: [
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Ramesh, our walking group is going to Srisailam next month.", te: "రమేష్ గారూ, మన వాకింగ్ గ్రూప్ వచ్చే నెల శ్రీశైలం వెళ్తోంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Wonderful! When are you leaving?", te: "చాలా బాగుంది! ఎప్పుడు బయలుదేరుతున్నారు?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "We're leaving on the fourteenth, by the early morning bus.", te: "పద్నాలుగో తారీఖు, పొద్దున్నే బస్సులో బయలుదేరుతున్నాం." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "How long are you staying there?", te: "అక్కడ ఎన్ని రోజులు ఉంటున్నారు?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Two nights. We're going to stay in a guest house near the temple.", te: "రెండు రాత్రులు. గుడి దగ్గర ఒక గెస్ట్ హౌస్‌లో ఉండబోతున్నాం." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Is it a long journey from Hyderabad?", te: "హైదరాబాద్ నుంచి చాలా దూరమా?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "About six hours. The ghat road through the forest is beautiful.", te: "దాదాపు ఆరు గంటలు. అడవిలోంచి వెళ్ళే ఘాట్ రోడ్డు చాలా అందంగా ఉంటుంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Can I join you? I've never been to Srisailam.", te: "నేను కూడా రావచ్చా? నేను ఎప్పుడూ శ్రీశైలం వెళ్ళలేదు." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Of course! Book your bus ticket soon. The seats are filling fast.", te: "తప్పకుండా! మీ బస్ టికెట్ త్వరగా బుక్ చేసుకోండి. సీట్లు త్వరగా నిండిపోతున్నాయి." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Thanks! I'm going to book it tonight.", te: "థాంక్స్! ఈ రాత్రే బుక్ చేస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A group trip to Srisailam", "A late train", "A hotel bill"],
        answer: 0,
      },
      {
        prompt: { en: "How is the group travelling?", te: "గ్రూప్ ఎలా వెళ్తోంది?" },
        options: ["By bus", "By train", "By car"],
        answer: 0,
      },
      {
        prompt: { en: "Where are they going to stay?", te: "వాళ్ళు ఎక్కడ ఉండబోతున్నారు?" },
        options: ["In a guest house near the temple", "At a friend's house", "In a hotel in Hyderabad"],
        answer: 0,
      },
      {
        prompt: { en: "What is Ramesh going to do tonight?", te: "రమేష్ గారు ఈ రాత్రి ఏం చేయబోతున్నారు?" },
        options: ["Book his bus ticket", "Pack his bag", "Call the guest house"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell a friend your group will get to Srisailam by noon.",
        te: "మీ గ్రూప్ మధ్యాహ్నానికల్లా శ్రీశైలం చేరుకుంటుందని స్నేహితులకి చెప్పండి.",
      },
      expected: ["We'll reach Srisailam by noon.", "We're reaching Srisailam by noon.", "We'll get to Srisailam by noon."],
      options: ["We'll reach Srisailam by noon.", "We'll reach to Srisailam by noon.", "We'll reach Srisailam until noon."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your neighbour invites you to a colony meeting on Saturday. You will be in Srisailam. Say sorry.",
        te: "శనివారం కాలనీ మీటింగ్‌కి రమ్మని పక్కింటివారు పిలుస్తున్నారు. ఆ రోజు మీరు శ్రీశైలంలో ఉంటారు. సారీ చెప్పండి.",
      },
      expected: ["Sorry, I'll be out of town on Saturday.", "Sorry, I'm going to Srisailam on Saturday.", "Sorry, I'll be in Srisailam on Saturday."],
      options: ["Sorry, I'll be out of town on Saturday.", "Sorry, I'll be out of station on Saturday.", "Sorry, I'll be out of town in Saturday."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the bus conductor what time the bus gets to Srisailam.",
        te: "బస్సు శ్రీశైలం ఎన్ని గంటలకి చేరుతుందో కండక్టర్‌ని అడగండి.",
      },
      expected: ["What time does the bus reach Srisailam?", "When does the bus reach Srisailam?", "What time do we reach Srisailam?"],
      options: ["What time does the bus reach Srisailam?", "What time the bus reaches Srisailam?", "What time does the bus reach to Srisailam?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Planning the group trip", te: "గ్రూప్ యాత్ర ప్లాన్" },
      scene: {
        en: "Your friend Kamala is planning a trip to Srisailam for your walking group. She calls you.",
        te: "మీ వాకింగ్ గ్రూప్ కోసం మీ స్నేహితురాలు కమల గారు శ్రీశైలం యాత్ర ప్లాన్ చేస్తున్నారు. ఆవిడ మీకు ఫోన్ చేశారు.",
      },
      partner: { en: "Kamala (your friend)", te: "కమల (మీ స్నేహితురాలు)" },
      skills: [
        { id: "plans", label: { en: "Making trip plans", te: "ప్రయాణం ప్లాన్ చేయడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Are you free on the fourteenth? We're going to Srisailam.",
          te: "హలో! పద్నాలుగో తారీఖు ఖాళీగా ఉన్నారా? మనం శ్రీశైలం వెళ్తున్నాం.",
          hint: { en: "Say yes happily, and ask how the group is travelling.", te: "సంతోషంగా సరే అని, గ్రూప్ ఎలా వెళ్తోందో అడగండి." },
          replies: [
            { say: "Yes, I'm free! How are we going?", good: true, skill: "plans" },
            { say: "Yes! Are we going by bus?", good: true, skill: "plans" },
            { say: "Yes, I'm free! How we are going?", good: false, skill: "plans", fixIt: "question" },
          ],
        },
        {
          partner: "By the early morning bus. It leaves at five thirty.",
          te: "పొద్దున్నే బస్సులో. అది ఐదున్నరకి బయలుదేరుతుంది.",
          hint: { en: "Say that's early but fine, and ask how many nights you're staying.", te: "పొద్దున్నే అయినా పర్లేదని చెప్పి, ఎన్ని రాత్రులు ఉంటున్నామో అడగండి." },
          replies: [
            { say: "That's early, but okay. How many nights are we staying?", good: true, skill: "plans" },
            { say: "That's early, but okay. How many night are we staying?", good: false, skill: "plans", fixIt: "plural" },
          ],
        },
        {
          partner: "Two nights, in a guest house. Can you book the rooms?",
          te: "రెండు రాత్రులు, ఒక గెస్ట్ హౌస్‌లో. రూములు మీరు బుక్ చేస్తారా?",
          hint: { en: "Agree, and ask how many rooms the group needs.", te: "ఒప్పుకుని, గ్రూప్‌కి ఎన్ని రూములు కావాలో అడగండి." },
          replies: [
            { say: "Sure. How many rooms do we need?", good: true, skill: "polite" },
            {
              say: "Why me? You do it.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Okay, I'll ask someone else.", te: "ఓ! సరే, వేరే ఎవరినైనా అడుగుతాను." },
            },
          ],
        },
        {
          partner: "Four rooms, please. And one room needs an extra bed.",
          te: "నాలుగు రూములు. ఒక రూమ్‌లో అదనపు బెడ్ కావాలి.",
          hint: { en: "Say you plan to call the guest house today.", te: "ఈ రోజే గెస్ట్ హౌస్‌కి ఫోన్ చేయబోతున్నానని చెప్పండి." },
          replies: [
            { say: "Okay. I'm going to call the guest house today.", good: true, skill: "plans" },
            { say: "Okay. I going to call the guest house today.", good: false, skill: "plans", fixIt: "be" },
          ],
        },
        {
          partner: "Thank you! This is going to be a lovely trip.",
          te: "థాంక్యూ! ఈ యాత్ర చాలా బాగుంటుంది.",
          hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
          replies: [
            { say: "Yes, I'm sure it will be. Bye!", good: true, skill: "polite" },
            { say: "Yes, I am knowing it will be lovely. Bye!", good: false, skill: "polite", fixIt: "state-ing" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A late train", te: "ఆలస్యమైన రైలు" },
      scene: {
        en: "On another trip, your train to Tirupati is three hours late. You call the hotel where you have a booking.",
        te: "ఇంకో ప్రయాణంలో, తిరుపతికి మీ రైలు మూడు గంటలు ఆలస్యం. మీరు బుక్ చేసుకున్న హోటల్‌కి ఫోన్ చేస్తున్నారు.",
      },
      partner: { en: "Prasad (at the hotel)", te: "ప్రసాద్ (హోటల్‌లో)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining a delay", te: "ఆలస్యం గురించి చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning, Hotel Sri Balaji. Prasad speaking.",
          te: "గుడ్ మార్నింగ్, హోటల్ శ్రీ బాలాజీ. ప్రసాద్ మాట్లాడుతున్నాను.",
          hint: { en: "Greet him, and say you have a booking in your name.", te: "ఆయన్ని పలకరించి, మీ పేరు మీద బుకింగ్ ఉందని చెప్పండి." },
          replies: [
            { say: "Good morning. I have a booking in the name of Kiran.", good: true, skill: "explain" },
            { say: "Good morning. I am having a booking in the name of Kiran.", good: false, skill: "explain", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Yes, I can see it. Check in is at twelve.",
          te: "అవును, కనిపిస్తోంది. చెక్-ఇన్ పన్నెండు గంటలకి.",
          hint: { en: "Say sorry, and tell him your train is three hours late.", te: "సారీ చెప్పి, మీ రైలు మూడు గంటలు ఆలస్యమని చెప్పండి." },
          replies: [
            { say: "Sorry, our train is running three hours late.", good: true, skill: "explain" },
            { say: "Sorry, our train is late by three hours.", good: true, skill: "explain" },
            { say: "Sorry, our train running three hours late.", good: false, skill: "explain", fixIt: "be" },
          ],
        },
        {
          partner: "Oh, no problem. What time are you going to get here?",
          te: "ఓ, పర్లేదు. ఎన్ని గంటలకి ఇక్కడికి వస్తారు?",
          hint: { en: "Say you will reach Tirupati at about three in the afternoon.", te: "మధ్యాహ్నం దాదాపు మూడింటికి తిరుపతి చేరుకుంటారని చెప్పండి." },
          replies: [
            { say: "We'll reach Tirupati at about three in the afternoon.", good: true, skill: "explain" },
            { say: "We'll reach to Tirupati at about three in the afternoon.", good: false, skill: "explain", fixIt: "preposition" },
          ],
        },
        {
          partner: "That's fine. We'll keep the room for you.",
          te: "పర్లేదు. రూమ్ మీ కోసం ఉంచుతాం.",
          hint: { en: "Thank him warmly.", te: "ఆయనకి మనస్ఫూర్తిగా థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you so much. That's very kind of you.", good: true, skill: "polite" },
            {
              say: "Okay. Keep it ready. Don't give it to anyone else.",
              good: false,
              skill: "polite",
              react: { en: "Don't worry, the room is yours.", te: "కంగారు పడకండి, రూమ్ మీదే." },
            },
          ],
        },
        {
          partner: "You're welcome. Have a safe journey!",
          te: "పర్లేదండీ. ప్రయాణం జాగ్రత్తగా చేయండి!",
          hint: { en: "Thank him, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you. See you this afternoon.", good: true, skill: "polite" },
            { say: "Thank you. See you on this afternoon.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 48, Day 6 (CURRICULUM §5): Conversation Day — planning a trip to Araku if the weather holds, and calling the hotel when the train is late. */
export const day: ConversationDay = {
  id: "w48-conversation",
  kind: "conversation",
  title: { en: "A Trip to Araku", te: "అరకు ప్రయాణం" },
  summary: {
    en: "Use the whole week: plan a trip to Araku with a friend if the weather holds, and call the hotel when the train is late.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: వాతావరణం బాగుంటే స్నేహితులతో అరకు ప్రయాణం ప్లాన్ చేయండి, రైలు ఆలస్యమైతే హోటల్‌కి ఫోన్ చేయండి.",
  },
  topics: ["travel", "weather", "transport"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Shall we go to Araku?", te: "అరకు వెళ్దామా?" },
    lines: [
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Anitha, shall we go to Araku next weekend?", te: "అనిత గారూ, వచ్చే వీకెండ్ అరకు వెళ్దామా?" },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good idea! But what will we do if it rains?", te: "మంచి ఆలోచన! కానీ వర్షం పడితే ఏం చేద్దాం?" },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "If it rains, we'll stay at the hotel and rest.", te: "వర్షం పడితే, హోటల్‌లోనే ఉండి విశ్రాంతి తీసుకుందాం." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "And if the weather is good, we'll see the Borra Caves.", te: "వాతావరణం బాగుంటే, బొర్రా గుహలు చూద్దాం." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Yes! We'll take the morning train from Visakhapatnam.", te: "అవును! విశాఖపట్నం నుంచి పొద్దుటి రైలు ఎక్కుదాం." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "What if the train is late?", te: "ఒకవేళ రైలు ఆలస్యం అయితే?" },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Then I'll call the hotel and tell them.", te: "అప్పుడు హోటల్‌కి ఫోన్ చేసి చెప్తాను." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Okay. When we reach Araku, let's have some Araku coffee.", te: "సరే. అరకు చేరుకోగానే, అరకు కాఫీ తాగుదాం." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Sounds good. If all goes well, we'll be back on Sunday night.", te: "బాగుంది. అంతా బాగుంటే, ఆదివారం రాత్రికి తిరిగి వచ్చేస్తాం." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Perfect. I'll book the tickets today.", te: "సరే. ఈ రోజే టికెట్లు బుక్ చేస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What are they planning?", te: "వీళ్ళు ఏం ప్లాన్ చేస్తున్నారు?" },
        options: ["A trip to Araku", "A visit to the doctor", "A Diwali party"],
        answer: 0,
      },
      {
        prompt: { en: "What will they do if it rains?", te: "వర్షం పడితే వాళ్ళు ఏం చేస్తారు?" },
        options: ["Stay at the hotel and rest", "See the Borra Caves", "Come back home"],
        answer: 0,
      },
      {
        prompt: { en: "What will Prasad do if the train is late?", te: "రైలు ఆలస్యం అయితే ప్రసాద్ గారు ఏం చేస్తారు?" },
        options: ["Call the hotel", "Take a bus", "Wait at home"],
        answer: 0,
      },
      {
        prompt: { en: "When will they be back, if all goes well?", te: "అంతా బాగుంటే వాళ్ళు ఎప్పుడు తిరిగి వస్తారు?" },
        options: ["On Sunday night", "On Saturday morning", "On Monday"],
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
        en: "Ask your friend what you will both do if it rains in Araku.",
        te: "అరకులో వర్షం పడితే ఏం చేద్దామని మీ స్నేహితులని అడగండి.",
      },
      expected: ["What will we do if it rains in Araku?", "What if it rains in Araku?", "What will we do if it rains?"],
      options: ["What will we do if it rains in Araku?", "What we will do if it rains in Araku?", "What will we do if it will rain in Araku?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your friend asks how many tickets you'll book if Salma comes too. Say three.",
        te: "సల్మా గారు కూడా వస్తే ఎన్ని టికెట్లు బుక్ చేస్తారని స్నేహితులు అడుగుతున్నారు. మూడు అని చెప్పండి.",
      },
      expected: ["I'll book three tickets.", "Three tickets.", "If Salma comes, I'll book three tickets."],
      options: ["I'll book three tickets.", "I'll book three ticket.", "I'll booking three tickets."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Send a voice message to the hotel: your train is late, and you'll get there at ten.",
        te: "హోటల్‌కి voice message పంపండి: మీ రైలు ఆలస్యం, మీరు పదింటికి చేరుకుంటారు.",
      },
      expected: [
        "Hello, our train is late. We'll reach at ten.",
        "Our train is late. We'll reach the hotel at ten.",
        "Sorry, the train is late. We'll be there at ten.",
      ],
      options: [
        "Hello, our train is late. We'll reach at ten.",
        "Hello, our train is late. We'll reach to the hotel at ten.",
        "Hello, our train late. We'll reach at ten.",
      ],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Planning the Araku trip", te: "అరకు ప్రయాణం ప్లాన్" },
      scene: {
        en: "Your friend Rahim wants to go to Araku with you this weekend. The weather is cool.",
        te: "మీ స్నేహితుడు రహీమ్ గారు ఈ వీకెండ్ మీతో అరకు వెళ్ళాలనుకుంటున్నారు. వాతావరణం చల్లగా ఉంది.",
      },
      partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "if", label: { en: "Plans with if", te: "if తో ప్లాన్లు" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! The weather is cool now. Shall we go to Araku this Saturday?",
          te: "హాయ్! ఇప్పుడు వాతావరణం చల్లగా ఉంది. ఈ శనివారం అరకు వెళ్దామా?",
          hint: { en: "Agree happily, and ask about the forecast.", te: "సంతోషంగా ఒప్పుకుని, forecast గురించి అడగండి." },
          replies: [
            { say: "Sounds good! What does the forecast say?", good: true, skill: "if" },
            { say: "Sounds good! What the forecast says?", good: false, skill: "if", fixIt: "question" },
          ],
        },
        {
          partner: "It says a little rain on Saturday, but Sunday will be sunny.",
          te: "శనివారం కొంచెం వర్షం, కానీ ఆదివారం ఎండగా ఉంటుందని చెప్తోంది.",
          hint: { en: "Suggest a plan for the rain: the coffee museum.", te: "వర్షానికి ఒక ప్లాన్ సూచించండి: కాఫీ మ్యూజియం." },
          replies: [
            { say: "If it rains on Saturday, we'll visit the coffee museum.", good: true, skill: "if" },
            { say: "If it will rain on Saturday, we'll visit the coffee museum.", good: false, skill: "if" },
          ],
        },
        {
          partner: "Nice. And if Sunday is sunny?",
          te: "బాగుంది. మరి ఆదివారం ఎండగా ఉంటే?",
          hint: { en: "Say you'll go to the Borra Caves then.", te: "అప్పుడు బొర్రా గుహలకి వెళ్దామని చెప్పండి." },
          replies: [
            { say: "If Sunday is sunny, we'll go to the Borra Caves.", good: true, skill: "if" },
            { say: "If Sunday sunny, we'll go to the Borra Caves.", good: false, skill: "if", fixIt: "be" },
          ],
        },
        {
          partner: "Perfect. Who will book the hotel?",
          te: "సూపర్. హోటల్ ఎవరు బుక్ చేస్తారు?",
          hint: { en: "Offer to book it today, and ask how many rooms you need.", te: "ఈ రోజే మీరు బుక్ చేస్తానని, ఎన్ని రూమ్‌లు కావాలని అడగండి." },
          replies: [
            { say: "I'll book it today. How many rooms do we need?", good: true, skill: "polite" },
            {
              say: "Not me. You always make me do everything.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay! I'll book it myself.", te: "సరే, సరే! నేనే బుక్ చేస్తాను." },
            },
          ],
        },
        {
          partner: "Two rooms. Kumar is coming too. He loves Araku.",
          te: "రెండు రూమ్‌లు. కుమార్ గారు కూడా వస్తున్నారు. ఆయనకి అరకు అంటే చాలా ఇష్టం.",
          hint: { en: "Say that's good news, and say goodbye until Saturday.", te: "మంచి వార్త అని, శనివారం దాకా బై చెప్పండి." },
          replies: [
            { say: "That's great. See you on Saturday!", good: true, skill: "polite" },
            { say: "That's great. See you in Saturday!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The train is late", te: "రైలు ఆలస్యం" },
      scene: {
        en: "Your train to Araku is two hours late. You call the hotel. Mary at the front desk answers.",
        te: "అరకు వెళ్ళే మీ రైలు రెండు గంటలు ఆలస్యం. మీరు హోటల్‌కి ఫోన్ చేశారు. రిసెప్షన్‌లో మేరీ గారు ఫోన్ ఎత్తారు.",
      },
      partner: { en: "Mary (hotel front desk)", te: "మేరీ (హోటల్ రిసెప్షన్)" },
      skills: [
        { id: "if", label: { en: "Plans with if", te: "if తో ప్లాన్లు" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning, Hill View Hotel. How can I help you?",
          te: "గుడ్ మార్నింగ్, హిల్ వ్యూ హోటల్. చెప్పండి, ఏం కావాలి?",
          hint: { en: "Say your name, and that you have a booking for today.", te: "మీ పేరు చెప్పి, ఈ రోజుకి బుకింగ్ ఉందని చెప్పండి." },
          replies: [
            { say: "Good morning. This is Kiran. I have a booking for today.", good: true, skill: "polite" },
            { say: "Good morning. Myself Kiran. I have a booking for today.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Yes, two rooms for two nights. Is everything okay?",
          te: "అవును, రెండు రాత్రులకి రెండు రూమ్‌లు. అంతా బాగానే ఉందా?",
          hint: { en: "Say your train is two hours late.", te: "మీ రైలు రెండు గంటలు ఆలస్యం అని చెప్పండి." },
          replies: [
            { say: "Our train is running two hours late.", good: true, skill: "if" },
            { say: "Our train running two hours late.", good: false, skill: "if", fixIt: "be" },
          ],
        },
        {
          partner: "Oh! What time will you reach Araku?",
          te: "అయ్యో! మీరు అరకు ఎన్ని గంటలకి చేరుకుంటారు?",
          hint: { en: "Give a time, two o'clock, but only with no more stops.", te: "ఒక టైమ్ చెప్పండి, రెండు గంటలు; కానీ రైలు మళ్ళీ ఆగకపోతేనే." },
          replies: [
            { say: "If the train doesn't stop again, we'll reach at two.", good: true, skill: "if" },
            { say: "If the train don't stop again, we'll reach at two.", good: false, skill: "if", fixIt: "he-she-s" },
            { say: "If the train won't stop again, we'll reach at two.", good: false, skill: "if" },
          ],
        },
        {
          partner: "No problem. We'll keep your rooms ready.",
          te: "పర్లేదు. మీ రూమ్‌లు రెడీగా ఉంచుతాం.",
          hint: { en: "Thank her, and ask politely if they can keep lunch for you too.", te: "థాంక్స్ చెప్పి, మీకు భోజనం కూడా ఉంచుతారా అని మర్యాదగా అడగండి." },
          replies: [
            { say: "Thank you. Could you keep lunch for us too?", good: true, skill: "polite" },
            {
              say: "Keep the rooms. Don't give them to anyone else!",
              good: false,
              skill: "polite",
              react: { en: "Of course. Please don't worry.", te: "తప్పకుండా. మీరు కంగారు పడకండి." },
            },
          ],
        },
        {
          partner: "Sure, we'll keep lunch. If you need anything, please call.",
          te: "తప్పకుండా, భోజనం ఉంచుతాం. ఏమైనా కావాలంటే ఫోన్ చేయండి.",
          hint: { en: "Thank her, and end the call.", te: "ఆవిడకి థాంక్స్ చెప్పి, ఫోన్ పెట్టేయండి." },
          replies: [
            { say: "Thank you so much. See you soon. Bye!", good: true, skill: "polite" },
            { say: "Thank you. Please do the needful. Bye!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 76, Day 6 (CURRICULUM §5): Conversation Day — an evening at the park: chatting with walkers, and meeting an old colleague on a bench. */
export const day: ConversationDay = {
  id: "w76-conversation",
  kind: "conversation",
  title: { en: "Evening at the Park", te: "పార్క్‌లో సాయంత్రం" },
  summary: {
    en: "Use the whole week: chat with walkers at the park, agree in a friendly way, and meet an old colleague on a bench.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పార్క్‌లో వాకర్లతో కబుర్లు చెప్పండి, స్నేహంగా ఒప్పుకోండి, బెంచ్ మీద పాత సహోద్యోగిని కలవండి.",
  },
  topics: ["people", "neighbours", "weather"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two regulars at the park", te: "పార్క్‌కి రోజూ వచ్చే ఇద్దరు" },
    lines: [
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Good evening, Srinivas! The park is crowded today, isn't it?", te: "గుడ్ ఈవెనింగ్, శ్రీనివాస్ గారూ! ఈ రోజు పార్క్ రద్దీగా ఉంది కదా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, it's Sunday. You didn't come on Friday, did you?", te: "అవును, ఆదివారం కదా. శుక్రవారం మీరు రాలేదు కదా?" },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "No, I didn't. I went to my sister's house in Guntur.", te: "లేదు, రాలేదు. గుంటూరులో మా అక్కయ్య ఇంటికి వెళ్ళాను." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Oh, really? My cousin lives in Guntur too.", te: "ఓ, అవునా? మా కజిన్ కూడా గుంటూరులోనే ఉంటారు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Is that so? Guntur is very hot these days, isn't it?", te: "అలాగా? ఈ మధ్య గుంటూరులో చాలా ఎండగా ఉంది కదా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Very hot! I can't stand the heat anymore.", te: "చాలా ఎండ! ఇక ఆ వేడిని నేను భరించలేను." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Neither can I. That's why I walk in the evening.", te: "నేను కూడా భరించలేను. అందుకే సాయంత్రం నడుస్తాను." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "So do I. The new walking track is nice, isn't it?", te: "నేను కూడా అంతే. కొత్త walking track బాగుంది కదా?" },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Very nice. The park closes at nine now, doesn't it?", te: "చాలా బాగుంది. ఇప్పుడు పార్క్ తొమ్మిదింటికి మూసేస్తారు కదా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, it does. So we have time for two more laps!", te: "అవును. అంటే ఇంకా రెండు రౌండ్లు నడవడానికి టైమ్ ఉంది!" },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At the park", "At the bus stand", "At a temple"],
        answer: 0,
      },
      {
        prompt: { en: "Why didn't Kavitha come on Friday?", te: "కవిత గారు శుక్రవారం ఎందుకు రాలేదు?" },
        options: ["She went to Guntur.", "She was not well.", "The park was closed."],
        answer: 0,
      },
      {
        prompt: { en: "Why does Kavitha walk in the evening?", te: "కవిత గారు సాయంత్రం ఎందుకు నడుస్తారు?" },
        options: ["Because of the heat", "Because the park is empty then", "Because her sister walks then"],
        answer: 0,
      },
      {
        prompt: { en: "What time does the park close now?", te: "ఇప్పుడు పార్క్ ఎన్నింటికి మూసేస్తారు?" },
        options: ["At nine", "At eight", "At seven"],
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
        en: "The evening is cool after the rain. Say this to a walker, expecting a yes.",
        te: "వర్షం తర్వాత సాయంత్రం చల్లగా ఉంది. ఒక వాకర్‌కి ఇది చెప్పండి; వాళ్ళు అవును అంటారని తెలుసు.",
      },
      expected: ["It's cool after the rain, isn't it?", "It's nice and cool, isn't it?", "Lovely evening, isn't it?"],
      options: ["It's cool after the rain, isn't it?", "It's cool after rain, isn't it?", "It's cool after the rain, is it?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A walker asks: You don't live in this colony, do you? You live in the next colony.",
        te: "ఒక వాకర్ You don't live in this colony, do you? అని అడిగారు. మీరు పక్క కాలనీలో ఉంటారు.",
      },
      expected: ["No, I don't. I live in the next colony.", "No, I don't.", "No, I live in the next colony."],
      options: ["No, I don't. I live in the next colony.", "Yes, I don't. I live in the next colony.", "No, I don't. I live in next colony."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend Prasad says: I don't like crowded places. You don't either. Agree.",
        te: "మీ స్నేహితుడు ప్రసాద్ గారు I don't like crowded places అన్నారు. మీకూ నచ్చవు. ఒప్పుకోండి.",
      },
      expected: ["Neither do I.", "Me neither.", "Neither do I. I like quiet places."],
      options: ["Neither do I.", "Neither I do.", "So do I."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A new face in the evening group", te: "ఈవెనింగ్ గ్రూప్‌లో కొత్త ముఖం" },
      scene: {
        en: "You are resting after your walk. Usha, a walker you have not met before, comes up to you.",
        te: "నడక తర్వాత మీరు కాసేపు కూర్చున్నారు. ఇంతకుముందు కలవని వాకర్ ఉష గారు మీ దగ్గరికి వచ్చారు.",
      },
      partner: { en: "Usha (a new walker)", te: "ఉష (కొత్త వాకర్)" },
      skills: [
        { id: "tags", label: { en: "Tags and So do I", te: "కదా?, నేను కూడా" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! You're a friend of Mary's, aren't you?",
          te: "హలో! మీరు మేరీ గారి స్నేహితులు కదా?",
          hint: { en: "Say yes, and say you walk with her on Sundays.", te: "అవును అని చెప్పి, ఆదివారాలు ఆవిడతో కలిసి నడుస్తారని చెప్పండి." },
          replies: [
            { say: "Yes, I am. We walk together on Sundays.", good: true, skill: "tags" },
            { say: "Yes, I am. We walk together in Sundays.", good: false, skill: "tags", fixIt: "preposition" },
          ],
        },
        {
          partner: "Lovely! I'm Usha. I've just joined the evening group.",
          te: "బాగుంది! నా పేరు ఉష. ఇప్పుడే ఈవెనింగ్ గ్రూప్‌లో చేరాను.",
          hint: { en: "Welcome her, and check that she lives in the new flats.", te: "ఆవిడకి స్వాగతం చెప్పి, కొత్త ఫ్లాట్లలో ఉంటారా అని నిర్ధారించుకోండి." },
          replies: [
            { say: "Welcome! You live in the new flats, don't you?", good: true, skill: "tags" },
            { say: "Welcome! You live in the new flats, isn't it?", good: false, skill: "tags", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Yes, on the third floor. But I don't like the lift. It's so slow!",
          te: "అవును, మూడో ఫ్లోర్‌లో. కానీ నాకు లిఫ్ట్ నచ్చదు. చాలా నెమ్మదిగా ఉంటుంది!",
          hint: { en: "Say you don't like it either, and say what you do instead.", te: "మీకూ నచ్చదని చెప్పి, బదులుగా మీరు ఏం చేస్తారో చెప్పండి." },
          replies: [
            { say: "Neither do I. I always take the stairs.", good: true, skill: "tags" },
            { say: "So do I. I always take the stairs.", good: false, skill: "tags" },
            {
              say: "Then why did you buy a flat there?",
              good: false,
              skill: "polite",
              react: { en: "Well, the flat is nice. Only the lift is slow!", te: "అదేంటండీ, ఫ్లాట్ బాగుంటుంది. లిఫ్ట్ ఒక్కటే నెమ్మది!" },
            },
          ],
        },
        {
          partner: "Me too! Well, it's getting dark. See you tomorrow?",
          te: "నేను కూడా! సరే, చీకటి పడుతోంది. రేపు కలుద్దామా?",
          hint: { en: "Agree, and say goodbye kindly.", te: "ఒప్పుకుని, మర్యాదగా బై చెప్పండి." },
          replies: [
            { say: "Yes, see you tomorrow. Nice meeting you!", good: true, skill: "polite" },
            { say: "Yes, see you tomorrow. Nice to meeting you!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "An old colleague", te: "పాత సహోద్యోగి" },
      scene: {
        en: "A man on the next bench keeps looking at you. Then he comes over and speaks.",
        te: "పక్క బెంచ్ మీద ఉన్న ఒకాయన మిమ్మల్ని మళ్ళీ మళ్ళీ చూస్తున్నారు. తర్వాత దగ్గరికి వచ్చి మాట్లాడారు.",
      },
      partner: { en: "Joseph (an old colleague)", te: "జోసెఫ్ (పాత సహోద్యోగి)" },
      voice: "b",
      skills: [
        { id: "tags", label: { en: "Tags and answers", te: "కదా? ప్రశ్నలు, జవాబులు" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me. You worked at the post office in Nellore, didn't you?",
          te: "ఎక్స్‌క్యూజ్ మీ. మీరు నెల్లూరు పోస్ట్ ఆఫీస్‌లో పనిచేశారు కదా?",
          hint: { en: "Say yes, and say that his face looks known to you.", te: "అవును అని చెప్పి, ఆయన్ని ఎక్కడో చూసినట్టుందని చెప్పండి." },
          replies: [
            { say: "Yes, I did! Your face looks familiar.", good: true, skill: "tags" },
            { say: "Yes, I did! Your face look familiar.", good: false, skill: "tags", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "I'm Joseph. We worked together in nineteen ninety-five!",
          te: "నేను జోసెఫ్. 1995 లో మనం కలిసి పనిచేశాం!",
          hint: { en: "Show you remember him, and say it was long ago, expecting a yes.", te: "ఆయన గుర్తొచ్చారని చూపించి, అది చాలా కాలం క్రితం అని అనండి; ఆయన అవును అంటారు." },
          replies: [
            { say: "Joseph! Of course! That was a long time ago, wasn't it?", good: true, skill: "tags" },
            { say: "Joseph! Of course! That was a long time ago, isn't it?", good: false, skill: "tags", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Thirty years! You retired from Hyderabad, didn't you?",
          te: "ముప్పై ఏళ్ళు! మీరు హైదరాబాద్‌లో రిటైర్ అయ్యారు కదా?",
          hint: { en: "Say no: you retired from Vijayawada.", te: "లేదు అని చెప్పండి: మీరు విజయవాడలో రిటైర్ అయ్యారు." },
          replies: [
            { say: "No, I didn't. I retired from Vijayawada.", good: true, skill: "tags" },
            { say: "Yes, I didn't. I retired from Vijayawada.", good: false, skill: "tags", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Oh! I didn't know that. Do you come here every day?",
          te: "ఓ! నాకు తెలీదు. మీరు రోజూ ఇక్కడికి వస్తారా?",
          hint: { en: "Say yes, every evening, and check that he lives near here.", te: "అవును, రోజూ సాయంత్రం అని చెప్పి, ఆయన ఇక్కడ దగ్గర్లోనే ఉంటారా అని నిర్ధారించుకోండి." },
          replies: [
            { say: "Yes, every evening. You live near here, don't you?", good: true, skill: "tags" },
            {
              say: "Yes. Why are you asking so many questions?",
              good: false,
              skill: "polite",
              react: { en: "Sorry! I'm just happy to see an old friend.", te: "సారీ అండీ! పాత స్నేహితులు కనిపించారని సంతోషం, అంతే." },
            },
          ],
        },
        {
          partner: "Yes, in the next street. Let's meet here every evening!",
          te: "అవును, పక్క వీధిలోనే. రోజూ సాయంత్రం ఇక్కడ కలుద్దాం!",
          hint: { en: "Agree happily, and say you will see him tomorrow.", te: "సంతోషంగా ఒప్పుకుని, రేపు కలుద్దామని చెప్పండి." },
          replies: [
            { say: "Sounds good! See you tomorrow evening, Joseph.", good: true, skill: "polite" },
            { say: "Sounds good! See you tomorrow at evening, Joseph.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

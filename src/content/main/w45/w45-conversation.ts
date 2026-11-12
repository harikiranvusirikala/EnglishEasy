import type { ConversationDay } from "../../types";

/** Week 45, Day 6 (CURRICULUM §5): Conversation Day — showing a visitor around your town, and how it has changed. */
export const day: ConversationDay = {
  id: "w45-conversation",
  kind: "conversation",
  title: { en: "Showing a Visitor Around", te: "ఊరు చూపించడం" },
  summary: {
    en: "Use the whole week: show a visitor around your town, and talk about how it has changed.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: వచ్చిన అతిథికి ఊరు చూపించండి, ఊరు ఎలా మారిందో మాట్లాడండి.",
  },
  topics: ["people", "travel", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A visit to Warangal", te: "వరంగల్ చూడటం" },
    lines: [
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Welcome to Warangal, Fatima! Is this your first visit?", te: "వరంగల్‌కి స్వాగతం, ఫాతిమా గారూ! ఇక్కడికి రావడం ఇదే మొదటిసారా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Yes, it is. What is Warangal famous for?", te: "అవును. వరంగల్ దేనికి ప్రసిద్ధి?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "It's famous for the Thousand Pillar Temple and the old fort.", te: "వేయి స్తంభాల గుడికి, పాత కోటకి ప్రసిద్ధి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Lovely! What's the best place to visit first?", te: "బాగుంది! ముందు ఏ చోటు చూస్తే బాగుంటుంది?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "The temple. It's more than eight hundred years old.", te: "గుడి. అది ఎనిమిది వందల ఏళ్ళ కంటే పాతది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Wonderful. Has the town changed much?", te: "అద్భుతం. ఊరు చాలా మారిందా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, a lot. There were very few shops here in those days.", te: "అవును, చాలా. ఆ రోజుల్లో ఇక్కడ చాలా తక్కువ షాపులు ఉండేవి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "And now it's so crowded!", te: "ఇప్పుడేమో ఇంత రద్దీగా ఉంది!" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, it's much busier now. But the people are still friendly.", te: "అవును, ఇప్పుడు రద్దీ చాలా ఎక్కువ. కానీ జనం ఇప్పటికీ ఆప్యాయంగానే ఉంటారు." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "I can see that. Shall we go to the temple now?", te: "అది కనిపిస్తోంది. ఇప్పుడు గుడికి వెళ్దామా?" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Showing a visitor the town", "Buying a new house", "A train journey"],
        answer: 0,
      },
      {
        prompt: { en: "What is Warangal famous for?", te: "వరంగల్ దేనికి ప్రసిద్ధి?" },
        options: ["A temple and an old fort", "Chillies", "A beach"],
        answer: 0,
      },
      {
        prompt: { en: "How old is the temple?", te: "గుడి ఎంత పాతది?" },
        options: ["More than eight hundred years", "About eighty years", "Fifty years"],
        answer: 0,
      },
      {
        prompt: { en: "What was the town like in those days?", te: "ఆ రోజుల్లో ఊరు ఎలా ఉండేది?" },
        options: ["There were very few shops.", "It was very crowded.", "There were many apartments."],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your visitor asks about the temple. Tell her it opens at six in the morning.",
        te: "మీ అతిథి గుడి గురించి అడుగుతున్నారు. పొద్దున ఆరింటికి తెరుస్తారని చెప్పండి.",
      },
      expected: ["It opens at six in the morning.", "The temple opens at six in the morning.", "It opens at six."],
      options: ["It opens at six in the morning.", "It open at six in the morning.", "It is opening at six in the morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your visitor asks how long you have lived in this town. Say forty years.",
        te: "ఈ ఊర్లో ఎంత కాలంగా ఉంటున్నారని మీ అతిథి అడుగుతున్నారు. నలభై ఏళ్ళు అని చెప్పండి.",
      },
      expected: ["I've lived here for forty years.", "I have lived here for forty years.", "For forty years."],
      options: ["I've lived here for forty years.", "I am living here for forty years.", "I've lived here since forty years."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your visitor asks what the town was like long ago. Say it was much smaller then.",
        te: "ఒకప్పుడు ఊరు ఎలా ఉండేదని మీ అతిథి అడుగుతున్నారు. అప్పుడు చాలా చిన్నగా ఉండేదని చెప్పండి.",
      },
      expected: ["It was much smaller then.", "It was much smaller in those days.", "It was smaller then."],
      options: ["It was much smaller then.", "It much smaller then.", "It was much smaller than."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A guest in your town", te: "మీ ఊర్లో అతిథి" },
      scene: {
        en: "Kumar, an old classmate, is visiting your town for the first time. You meet him at the bus stand.",
        te: "మీ పాత క్లాస్‌మేట్ కుమార్ గారు మొదటిసారి మీ ఊరికి వస్తున్నారు. ఆయన్ని బస్ స్టాండ్‌లో కలుస్తున్నారు.",
      },
      partner: { en: "Kumar (your old classmate)", te: "కుమార్ (మీ పాత క్లాస్‌మేట్)" },
      voice: "b",
      skills: [
        { id: "describe", label: { en: "Describing your town", te: "మీ ఊరి గురించి చెప్పడం" } },
        { id: "recommend", label: { en: "Recommending places", te: "చోట్లు సూచించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! It's so good to see you. What a big bus stand!",
          te: "హలో! మిమ్మల్ని చూడటం చాలా సంతోషం. ఎంత పెద్ద బస్ స్టాండ్!",
          hint: { en: "Welcome him, and say the bus stand is new.", te: "ఆయనకి స్వాగతం చెప్పి, బస్ స్టాండ్ కొత్తదని చెప్పండి." },
          replies: [
            { say: "Welcome! Yes, the bus stand is new.", good: true, skill: "polite" },
            { say: "Welcome! Yes, bus stand is new.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
        {
          partner: "So, what's your town like?",
          te: "అయితే, మీ ఊరు ఎలా ఉంటుంది?",
          hint: { en: "Describe your town, and say its mangoes are well known.", te: "మీ ఊరి గురించి చెప్పి, అక్కడి మామిడిపండ్లకి మంచి పేరుందని చెప్పండి." },
          replies: [
            { say: "It's small and quiet. It's famous for its mangoes.", good: true, skill: "describe" },
            { say: "It's small and quiet. It's famous with its mangoes.", good: false, skill: "describe", fixIt: "preposition" },
          ],
        },
        {
          partner: "Mangoes! What's the best place to visit here?",
          te: "మామిడిపండ్లా! ఇక్కడ చూడటానికి మంచి చోటు ఏది?",
          hint: { en: "Recommend the old temple by the river.", te: "నది ఒడ్డున ఉన్న పాత గుడిని సూచించండి." },
          replies: [
            { say: "The best place is the old temple by the river.", good: true, skill: "recommend" },
            { say: "You must see the old temple by the river.", good: true, skill: "recommend" },
            { say: "The most best place is the old temple by the river.", good: false, skill: "recommend" },
          ],
        },
        {
          partner: "Shall we go there now?",
          te: "ఇప్పుడు అక్కడికి వెళ్దామా?",
          hint: { en: "Suggest going in the evening, when it is cooler.", te: "కొంచెం చల్లబడ్డాక, సాయంత్రం వెళ్దామని సూచించండి." },
          replies: [
            { say: "Let's go in the evening, when it's cooler.", good: true, skill: "recommend" },
            {
              say: "No. I'm tired. Go alone if you want.",
              good: false,
              skill: "polite",
              react: { en: "Oh. Okay, maybe in the evening, then.", te: "ఓ. సరే, అయితే సాయంత్రం చూద్దాం." },
            },
          ],
        },
        {
          partner: "Good idea. I'd love some tea first!",
          te: "మంచి ఆలోచన. ముందు కొంచెం టీ తాగాలని ఉంది!",
          hint: { en: "Agree, and tell him about a good tea stall close by.", te: "సరే అని, దగ్గర్లో ఉన్న మంచి టీ స్టాల్ గురించి చెప్పండి." },
          replies: [
            { say: "Sure! There's a good tea stall nearby.", good: true, skill: "polite" },
            { say: "Sure! A good tea stall is there nearby.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "How the street has changed", te: "వీధి ఎలా మారింది" },
      scene: {
        en: "Geetha grew up on your street. She lives in Chennai now and is visiting after forty years.",
        te: "గీత గారు మీ వీధిలోనే పెరిగారు. ఇప్పుడు చెన్నైలో ఉంటున్నారు, నలభై ఏళ్ళ తర్వాత చూడటానికి వచ్చారు.",
      },
      partner: { en: "Geetha (an old neighbour)", te: "గీత (పాత పక్కింటావిడ)" },
      skills: [
        { id: "change", label: { en: "Saying what has changed", te: "ఏం మారిందో చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "I can't believe it! Where is the old cinema hall?",
          te: "నమ్మలేకపోతున్నాను! పాత సినిమా హాల్ ఎక్కడ?",
          hint: { en: "Say it is gone, and a shopping mall stands there now.", te: "అది లేదని, ఇప్పుడు అక్కడ ఒక షాపింగ్ మాల్ ఉందని చెప్పండి." },
          replies: [
            { say: "It's gone. There's a shopping mall there now.", good: true, skill: "change" },
            { say: "It's gone. Shopping mall is there now.", good: false, skill: "change", fixIt: "article" },
          ],
        },
        {
          partner: "Oh no! And there were so many trees on this street.",
          te: "అయ్యో! ఈ వీధిలో ఎన్నో చెట్లు ఉండేవి కదా.",
          hint: { en: "Agree, and say there were not many cars in those days.", te: "ఒప్పుకుని, ఆ రోజుల్లో కార్లు ఎక్కువ లేవని చెప్పండి." },
          replies: [
            { say: "Yes, and there weren't many cars then.", good: true, skill: "change" },
            { say: "Yes, and there wasn't many cars then.", good: false, skill: "change" },
          ],
        },
        {
          partner: "The street looks so busy now.",
          te: "వీధి ఇప్పుడు చాలా రద్దీగా కనిపిస్తోంది.",
          hint: { en: "Agree, and compare the noise now with before.", te: "ఒప్పుకుని, ఇప్పటి గోలని ఇదివరకటితో పోల్చండి." },
          replies: [
            { say: "Yes, it's much noisier than before.", good: true, skill: "change" },
            { say: "Yes, it's much noisier then before.", good: false, skill: "change" },
          ],
        },
        {
          partner: "How long have you lived here?",
          te: "మీరు ఇక్కడ ఎంత కాలంగా ఉంటున్నారు?",
          hint: { en: "Say you have lived here since you were born.", te: "పుట్టినప్పటి నుంచి ఇక్కడే ఉంటున్నారని చెప్పండి." },
          replies: [
            { say: "I have lived here all my life.", good: true, skill: "change" },
            { say: "I am living here all my life.", good: false, skill: "change", fixIt: "duration" },
          ],
        },
        {
          partner: "You're lucky. This street still feels like home.",
          te: "మీరు అదృష్టవంతులు. ఈ వీధి ఇప్పటికీ సొంత ఇల్లు లాగే అనిపిస్తుంది.",
          hint: { en: "Thank her, and invite her in for coffee.", te: "ఆవిడకి థాంక్స్ చెప్పి, కాఫీకి లోపలికి రమ్మని పిలవండి." },
          replies: [
            { say: "Thank you. Please come in and have some coffee.", good: true, skill: "polite" },
            {
              say: "Lucky? You left, so don't talk about luck.",
              good: false,
              skill: "polite",
              react: { en: "Sorry! I didn't mean it that way.", te: "సారీ! నేను ఆ ఉద్దేశంతో అనలేదు." },
            },
          ],
        },
      ],
    },
  ],
};

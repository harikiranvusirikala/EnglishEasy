import type { ConversationDay } from "../../types";

/** Week 30, Day 6 (CURRICULUM §4): Conversation Day — old friends meet and catch up on places they have been; a quiz about experiences. */
export const day: ConversationDay = {
  id: "w30-conversation",
  kind: "conversation",
  title: { en: "Old Friends Meet", te: "పాత స్నేహితులు" },
  summary: {
    en: "Use the whole week: catch up with an old friend about places you have been, and answer a quiz about your experiences.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పాత స్నేహితులతో మీరు వెళ్ళొచ్చిన ఊళ్ళ గురించి మాట్లాడండి, అనుభవాల క్విజ్‌కి జవాబులు చెప్పండి.",
  },
  topics: ["travel", "people", "food"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the bus stand", te: "బస్ స్టాండ్‌లో" },
    lines: [
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Kamala? Is that you? What a surprise!", te: "కమల గారూ? మీరేనా? ఎంత ఆశ్చర్యం!" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Narayana! How are you? Where have you been?", te: "నారాయణ గారూ! ఎలా ఉన్నారు? ఇన్ని రోజులు ఎక్కడికి వెళ్ళారు?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "I'm fine. I have been to Delhi and Kashi.", te: "బాగున్నాను. ఢిల్లీ, కాశీ వెళ్ళొచ్చాను." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Kashi! I have never been there. When did you go?", te: "కాశీ! నేను ఎప్పుడూ అక్కడికి వెళ్ళలేదు. ఎప్పుడు వెళ్ళారు?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "I went in January, with my brother.", te: "జనవరిలో వెళ్ళాను, మా అన్నయ్యతో." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "How was it? Did you see the Ganga?", te: "ఎలా ఉంది? గంగా నది చూశారా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes, it was wonderful. Have you travelled anywhere?", te: "ఆ, చాలా బాగుంది. మీరు ఎక్కడికైనా వెళ్ళారా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "My sister has gone to Vizag. I'm going next week.", te: "మా చెల్లెలు వైజాగ్ వెళ్ళారు. నేను వచ్చే వారం వెళ్తున్నాను." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Lovely! Have you seen the beach there?", te: "బాగుంది! అక్కడ బీచ్ చూశారా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Yes, many times. I love the sea!", te: "ఆ, చాలాసార్లు. నాకు సముద్రం అంటే చాలా ఇష్టం!" },
    ],
    questions: [
      {
        prompt: { en: "Who are they?", te: "వీళ్ళు ఎవరు?" },
        options: ["Two old friends", "A doctor and a patient", "A seller and a buyer"],
        answer: 0,
      },
      {
        prompt: { en: "Where has Narayana been?", te: "నారాయణ గారు ఎక్కడికి వెళ్ళొచ్చారు?" },
        options: ["To Delhi and Kashi", "To Vizag and Goa", "To Chennai and Delhi"],
        answer: 0,
      },
      {
        prompt: { en: "When did Narayana go to Kashi?", te: "నారాయణ గారు కాశీ ఎప్పుడు వెళ్ళారు?" },
        options: ["In January", "Last week", "In March"],
        answer: 0,
      },
      {
        prompt: { en: "Where is Kamala's sister now?", te: "కమల గారి చెల్లెలు ఇప్పుడు ఎక్కడ ఉన్నారు?" },
        options: ["In Vizag", "In Kashi", "At home"],
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
        en: "Your friend is back from Kashi. Ask what the trip was like.",
        te: "మీ స్నేహితులు కాశీ నుంచి తిరిగి వచ్చారు. ప్రయాణం ఎలా జరిగిందో అడగండి.",
      },
      expected: ["How was it?", "How was your trip?", "How was Kashi?"],
      options: ["How was your trip?", "How your trip was?", "How did your trip was?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "A neighbour asks for Satish. He is in Guntur now. Tell her.",
        te: "పొరుగావిడ సతీష్ గారి కోసం అడిగారు. ఆయన ఇప్పుడు గుంటూరులో ఉన్నారు. చెప్పండి.",
      },
      expected: ["He has gone to Guntur.", "Satish has gone to Guntur.", "He's gone to Guntur."],
      options: ["He has gone to Guntur.", "He have gone to Guntur.", "He has gone in Guntur."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Say you have been to Hyderabad three times.",
        te: "మీరు మూడుసార్లు హైదరాబాద్ వెళ్ళొచ్చారని చెప్పండి.",
      },
      expected: ["I have been to Hyderabad three times.", "I've been to Hyderabad three times."],
      options: ["I have been to Hyderabad three times.", "I have been to Hyderabad three time.", "I am been to Hyderabad three times."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "An old school friend", te: "పాత స్కూల్ స్నేహితులు" },
      scene: {
        en: "At a wedding, you meet Srinivas, your friend from school.",
        te: "ఒక పెళ్ళిలో మీ స్కూల్ స్నేహితులు శ్రీనివాస్ గారు కలిశారు.",
      },
      partner: { en: "Srinivas (old school friend)", te: "శ్రీనివాస్ (పాత స్కూల్ స్నేహితులు)" },
      voice: "b",
      skills: [
        { id: "ever", label: { en: "Experiences", te: "అనుభవాలు" } },
        { id: "when", label: { en: "Saying when", te: "ఎప్పుడో చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Hello! Do you remember me? Srinivas, from school!",
          te: "నమస్కారం! నేను గుర్తున్నానా? శ్రీనివాస్, మన స్కూల్!",
          hint: { en: "Say you remember him, and that you are happy to see him.", te: "గుర్తున్నారని, ఆయన్ని చూసి సంతోషంగా ఉందని చెప్పండి." },
          replies: [
            { say: "Of course! It's so nice to see you.", good: true },
            {
              say: "Srinivas? You look so old now!",
              good: false,
              react: { en: "Ha! Your hair is a little white too!", te: "హ! మీ జుట్టు కూడా కొంచెం తెల్లబడింది!" },
            },
          ],
        },
        {
          partner: "I live in Hyderabad now. Have you ever been there?",
          te: "నేను ఇప్పుడు హైదరాబాద్‌లో ఉంటున్నాను. మీరు ఎప్పుడైనా అక్కడికి వెళ్ళారా?",
          hint: { en: "Say yes, and how many times.", te: "అవునని, ఎన్నిసార్లో చెప్పండి." },
          replies: [
            { say: "Yes, I have been there twice.", good: true, skill: "ever" },
            { say: "Yes, I have been there two time.", good: false, skill: "ever", fixIt: "plural" },
          ],
        },
        {
          partner: "Really? When did you come?",
          te: "అవునా? ఎప్పుడు వచ్చారు?",
          hint: { en: "Say you came last year, for a function.", te: "పోయిన సంవత్సరం ఒక ఫంక్షన్ కోసం వచ్చారని చెప్పండి." },
          replies: [
            { say: "I came last year, for a function.", good: true, skill: "when" },
            { say: "I have come last year, for a function.", good: false, skill: "when" },
          ],
        },
        {
          partner: "Next time, please visit my house!",
          te: "ఈసారి తప్పకుండా మా ఇంటికి రండి!",
          hint: { en: "Say yes, and ask if he has ever visited Guntur, your town.", te: "సరే అని, ఆయన ఎప్పుడైనా మీ ఊరు గుంటూరు వచ్చారా అని అడగండి." },
          replies: [
            { say: "Sure! Have you ever been to Guntur?", good: true, skill: "ever" },
            { say: "Sure! You have ever been to Guntur?", good: false, skill: "ever", fixIt: "question" },
          ],
        },
        {
          partner: "No, never. I will come soon!",
          te: "లేదు, ఎప్పుడూ రాలేదు. త్వరలో వస్తాను!",
          hint: { en: "Say you will wait for him, and say goodbye.", te: "ఆయన కోసం ఎదురు చూస్తారని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Please come. I'll wait for you. Bye!", good: true },
            { say: "Please come. I'll waiting for you. Bye!", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A quiz about experiences", te: "అనుభవాల క్విజ్" },
      scene: {
        en: "At the colony get-together, Usha asks everyone fun questions about their life.",
        te: "కాలనీ సమావేశంలో ఉష గారు అందరినీ వాళ్ళ జీవితం గురించి సరదా ప్రశ్నలు అడుగుతున్నారు.",
      },
      partner: { en: "Usha (quiz host)", te: "ఉష (క్విజ్ నడిపేవారు)" },
      skills: [
        { id: "ever", label: { en: "Have you ever …?", te: "Have you ever … కి జవాబు" } },
        { id: "when", label: { en: "Saying when", te: "ఎప్పుడో చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Welcome! First question: have you ever flown?",
          te: "స్వాగతం! మొదటి ప్రశ్న: మీరు ఎప్పుడైనా విమానం ఎక్కారా?",
          hint: { en: "Give a short yes or no, about your own life.", te: "మీ జీవితం గురించి చిన్న జవాబు చెప్పండి: అవును లేదా లేదు." },
          replies: [
            { say: "Yes, I have.", good: true, skill: "ever" },
            { say: "No, I haven't.", good: true, skill: "ever" },
            { say: "Yes, I am.", good: false, skill: "ever" },
          ],
        },
        {
          partner: "Okay! Have you ever seen snow?",
          te: "సరే! ఎప్పుడైనా మంచు చూశారా?",
          hint: { en: "Say no: not even once in your life.", te: "లేదని చెప్పండి: జీవితంలో ఒక్కసారి కూడా చూడలేదు." },
          replies: [
            { say: "No, I have never seen snow.", good: true, skill: "ever" },
            { say: "No, I have never saw snow.", good: false, skill: "ever" },
          ],
        },
        {
          partner: "Have you ever eaten Hyderabadi biryani?",
          te: "ఎప్పుడైనా హైదరాబాదీ బిర్యానీ తిన్నారా?",
          hint: { en: "Say yes, and the last time you ate it.", te: "అవునని, చివరిసారి ఎప్పుడు తిన్నారో చెప్పండి." },
          replies: [
            { say: "Yes, I ate it last Sunday.", good: true, skill: "when" },
            { say: "Yes, I have eaten it last Sunday.", good: false, skill: "when" },
          ],
        },
        {
          partner: "Last question: has anyone here been to Tirupati?",
          te: "చివరి ప్రశ్న: ఇక్కడ ఎవరైనా తిరుపతి వెళ్ళొచ్చారా?",
          hint: { en: "Say you have, and how many times.", te: "మీరు వెళ్ళొచ్చారని, ఎన్నిసార్లో చెప్పండి." },
          replies: [
            { say: "Yes, I have been there three times.", good: true, skill: "ever" },
            {
              say: "Of course! Who hasn't? Silly question.",
              good: false,
              skill: "ever",
              react: { en: "Ha, okay! An easy one for you, then.", te: "హ, సరే! మీకు ఇది సులభమైన ప్రశ్న అన్నమాట." },
            },
          ],
        },
        {
          partner: "Well done! Thank you for playing.",
          te: "చాలా బాగా చెప్పారు! ఆడినందుకు థాంక్యూ.",
          hint: { en: "Thank her for the quiz, and say you enjoyed it.", te: "క్విజ్‌కి థాంక్స్ చెప్పి, సరదాగా ఉందని చెప్పండి." },
          replies: [
            { say: "Thank you. It was fun!", good: true },
            { say: "Thank you. It was funny quiz.", good: false, fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

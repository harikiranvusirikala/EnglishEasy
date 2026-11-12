import type { ConversationDay } from "../../types";

/** Week 42, Day 6 (CURRICULUM §5): Conversation Day — memories of the village: an old teacher in the market, a visit to the old village. */
export const day: ConversationDay = {
  id: "w42-conversation",
  kind: "conversation",
  title: { en: "Memories of the Village", te: "ఊరి జ్ఞాపకాలు" },
  summary: {
    en: "Use the whole week: meet your old teacher in the market, and show a friend the village where you grew up.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: మార్కెట్‌లో మీ పాత టీచర్‌ని కలవండి, మీరు పెరిగిన ఊరిని స్నేహితులకి చూపించండి.",
  },
  topics: ["people", "time", "home"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Back in the old village", te: "మళ్ళీ పాత ఊర్లో" },
    lines: [
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Ramesh, look! This is our old school.", te: "రమేష్ గారూ, చూడండి! ఇదే మన పాత స్కూల్." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "It looks so different now. It used to be very small.", te: "ఇప్పుడు చాలా వేరుగా ఉంది. ఒకప్పుడు చాలా చిన్నగా ఉండేది." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "We used to eat lunch under that neem tree.", te: "మనం ఆ వేప చెట్టు కింద భోజనం చేసేవాళ్ళం." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Yes! And Mr Narayana used to tell us stories there.", te: "అవును! నారాయణ మాస్టారు అక్కడే మనకి కథలు చెప్పేవారు." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Did you use to walk to school with your brother?", te: "మీరు మీ అన్నయ్యతో కలిసి నడిచి స్కూల్‌కి వచ్చేవారా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Yes, every day. We didn't use to have a bus.", te: "అవును, రోజూ. అప్పట్లో మాకు బస్సు లేదు." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Is the old well still there?", te: "పాత బావి ఇంకా ఉందా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "No, it isn't. There's a water tank there now.", te: "లేదు. ఇప్పుడు అక్కడ వాటర్ ట్యాంక్ ఉంది." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Things change. But I still love this village.", te: "కాలం మారుతుంది. కానీ నాకు ఈ ఊరంటే ఇప్పటికీ ఇష్టం." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Me too. Let's come back for the village fair.", te: "నాకూ అంతే. ఊరి జాతరకి మళ్ళీ వద్దాం." },
    ],
    questions: [
      {
        prompt: { en: "Where are Kamala and Ramesh?", te: "కమల గారు, రమేష్ గారు ఎక్కడ ఉన్నారు?" },
        options: ["In their old village", "At a city hospital", "In a bank"],
        answer: 0,
      },
      {
        prompt: { en: "Where did they use to eat lunch?", te: "వాళ్ళు ఎక్కడ భోజనం చేసేవారు?" },
        options: ["Under a neem tree", "In the classroom", "At home"],
        answer: 0,
      },
      {
        prompt: { en: "How did Ramesh go to school?", te: "రమేష్ గారు స్కూల్‌కి ఎలా వెళ్ళేవారు?" },
        options: ["He walked", "By bus", "By bicycle"],
        answer: 0,
      },
      {
        prompt: { en: "What is there now, in place of the old well?", te: "పాత బావి ఉన్న చోట ఇప్పుడు ఏముంది?" },
        options: ["A water tank", "A new school", "A temple"],
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
        en: "You meet an old classmate who used to play kabaddi. Ask if he still plays.",
        te: "కబడ్డీ ఆడే ఒక పాత క్లాస్‌మేట్ కలిశారు. ఇంకా ఆడుతున్నారా అని అడగండి.",
      },
      expected: ["Do you still play kabaddi?", "Do you still play kabaddi these days?", "Do you still play?"],
      options: ["Do you still play kabaddi?", "Are you still playing kabaddi daily?", "Does you still play kabaddi?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You didn't have a bicycle as a child? You had none. Answer.",
        te: "'చిన్నప్పుడు మీకు సైకిల్ లేదా?' అని స్నేహితులు అడిగారు. మీకు లేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I didn't.", "No, I didn't have a bicycle.", "No, we didn't."],
      options: ["No, I didn't.", "Yes, I didn't.", "No, I hadn't."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell a friend that your village used to have only two shops.",
        te: "మీ ఊర్లో ఒకప్పుడు రెండు షాపులే ఉండేవని స్నేహితులకి చెప్పండి.",
      },
      expected: ["Our village used to have only two shops.", "There used to be only two shops in our village.", "Our village had only two shops."],
      options: ["Our village used to have only two shops.", "Our village used to have only two shop.", "Our village is having only two shops."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Your old teacher in the market", te: "మార్కెట్‌లో పాత టీచర్" },
      scene: {
        en: "At the vegetable market, you see Sarala madam, your old school teacher. She is buying tomatoes.",
        te: "కూరగాయల మార్కెట్‌లో మీ పాత స్కూల్ టీచర్ సరళ మేడమ్ గారు కనిపించారు. ఆవిడ టమాటాలు కొంటున్నారు.",
      },
      partner: { en: "Sarala madam (your old teacher)", te: "సరళ మేడమ్ (మీ పాత టీచర్)" },
      skills: [
        { id: "memories", label: { en: "Sharing memories", te: "జ్ఞాపకాలు పంచుకోవడం" } },
        { id: "polite", label: { en: "Speaking to a teacher", te: "టీచర్‌తో మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me, you look familiar. Were you in my class?",
          te: "ఎక్స్‌క్యూజ్ మీ, మిమ్మల్ని ఎక్కడో చూసినట్టుంది. మీరు నా క్లాస్‌లో ఉండేవారా?",
          hint: { en: "Say yes, greet her as madam, and say your name.", te: "అవునని చెప్పి, మేడమ్ అని నమస్కారం చెప్పి, మీ పేరు చెప్పండి." },
          replies: [
            { say: "Yes, madam! Good morning. I'm Sai. You taught me English.", good: true, skill: "polite" },
            {
              say: "Yes! Hi, Sarala. How are you?",
              good: false,
              skill: "polite",
              react: { en: "Hi! Well, I am still your teacher, you know!", te: "హాయ్! అయినా నేను ఇప్పటికీ మీ టీచర్‌నే కదా!" },
            },
          ],
        },
        {
          partner: "Sai! Of course! You used to sit in the front row.",
          te: "సాయి! అవును! మీరు ముందు బెంచీలో కూర్చునేవారు.",
          hint: { en: "Say yes, and remember her Friday stories.", te: "అవునని చెప్పి, ఆవిడ శుక్రవారం కథలు గుర్తు చేసుకోండి." },
          replies: [
            { say: "Yes! And you used to tell us stories every Friday.", good: true, skill: "memories" },
            { say: "Yes! And you used to told us stories every Friday.", good: false, skill: "memories" },
          ],
        },
        {
          partner: "I remember! Do you still read books?",
          te: "గుర్తుంది! మీరు ఇంకా పుస్తకాలు చదువుతారా?",
          hint: { en: "Say yes, every night, and thank her for the habit.", te: "అవును, రోజూ రాత్రి చదువుతానని చెప్పి, ఆ అలవాటు ఆవిడ వల్లే అని చెప్పండి." },
          replies: [
            { say: "Yes, every night. You gave me that habit, madam.", good: true, skill: "memories" },
            { say: "Yes, madam. I still read every night, thanks to you.", good: true, skill: "memories" },
            { say: "Yes, madam. I am reading books daily.", good: false, skill: "memories", fixIt: "state-ing" },
          ],
        },
        {
          partner: "That makes me so happy. Where do you live now?",
          te: "చాలా సంతోషం. ఇప్పుడు ఎక్కడ ఉంటున్నారు?",
          hint: { en: "Say you live in Gandhi Nagar, near this market.", te: "గాంధీ నగర్‌లో, ఈ మార్కెట్ దగ్గర ఉంటున్నానని చెప్పండి." },
          replies: [
            { say: "I live in Gandhi Nagar now, near this market.", good: true, skill: "polite" },
            { say: "I live at Gandhi Nagar now, near this market.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
        {
          partner: "Very good. Come and see me some day. I live near the school.",
          te: "మంచిది. ఎప్పుడైనా ఇంటికి రండి. నేను స్కూల్ దగ్గరే ఉంటాను.",
          hint: { en: "Thank her, promise to visit, and say goodbye.", te: "థాంక్స్ చెప్పి, తప్పకుండా వస్తానని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you, madam. I'll visit you soon. Take care!", good: true, skill: "polite" },
            { say: "Thank you, madam. I'll visiting you soon. Take care!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Back to the old village", te: "మళ్ళీ పాత ఊరికి" },
      scene: {
        en: "You and your friend Imran visit the village where you grew up. You show him around.",
        te: "మీరు, మీ స్నేహితుడు ఇమ్రాన్ గారు మీరు పెరిగిన ఊరికి వెళ్ళారు. మీరు ఆయనకి ఊరు చూపిస్తున్నారు.",
      },
      partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "memories", label: { en: "Sharing memories", te: "జ్ఞాపకాలు పంచుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "So this is your village! It's very green.",
          te: "అయితే ఇదేనా మీ ఊరు! చాలా పచ్చగా ఉంది.",
          hint: { en: "Agree, and say you lived here till the age of twelve.", te: "ఒప్పుకుని, పన్నెండేళ్ళ వరకు ఇక్కడే ఉండేవారని చెప్పండి." },
          replies: [
            { say: "Yes! I used to live here till I was twelve.", good: true, skill: "memories" },
            { say: "Yes! I used to living here till I was twelve.", good: false, skill: "memories" },
          ],
        },
        {
          partner: "Where did you use to play?",
          te: "మీరు ఎక్కడ ఆడుకునేవారు?",
          hint: { en: "Point to the ground near the temple, and say what you played there.", te: "గుడి దగ్గర గ్రౌండ్ చూపించి, అక్కడ ఏం ఆడేవారో చెప్పండి." },
          replies: [
            { say: "In that ground near the temple. We used to play kabaddi there.", good: true, skill: "memories" },
            { say: "In that ground near temple. We used to play kabaddi there.", good: false, skill: "memories", fixIt: "article" },
          ],
        },
        {
          partner: "Nice! Was there a school in the village?",
          te: "బాగుంది! ఊర్లో స్కూల్ ఉండేదా?",
          hint: { en: "Say yes, a small one, and tell him about Mr Gopal, your teacher.", te: "అవును, చిన్నది అని చెప్పి, మీ టీచర్ గోపాల్ మాస్టారు గురించి చెప్పండి." },
          replies: [
            { say: "Yes, a small one. Mr Gopal used to teach us everything.", good: true, skill: "memories" },
            { say: "Yes, a small one. Mr Gopal used to teaches us everything.", good: false, skill: "memories" },
          ],
        },
        {
          partner: "Shall we have tea at that small stall?",
          te: "ఆ చిన్న టీ కొట్టు దగ్గర టీ తాగుదామా?",
          hint: { en: "Agree, and say the same family ran it long ago too.", te: "ఒప్పుకుని, ఒకప్పుడు కూడా అదే కుటుంబం దాన్ని నడిపేదని చెప్పండి." },
          replies: [
            { say: "Sure! The same family used to run it, long ago.", good: true, skill: "memories" },
            {
              say: "That dirty stall? No way.",
              good: false,
              skill: "polite",
              react: { en: "Dirty? It looks clean to me. Come on!", te: "మురికిగానా? నాకు శుభ్రంగానే కనిపిస్తోంది. రండి!" },
            },
          ],
        },
        {
          partner: "This was a lovely day. Thank you for bringing me.",
          te: "ఈ రోజు చాలా బాగుంది. నన్ను తీసుకొచ్చినందుకు థాంక్యూ.",
          hint: { en: "Say you enjoyed it too, and suggest coming back for the village fair.", te: "మీకూ బాగుందని చెప్పి, ఊరి జాతరకి మళ్ళీ వద్దామని చెప్పండి." },
          replies: [
            { say: "I enjoyed it too. Let's come back for the village fair.", good: true, skill: "polite" },
            { say: "Me too! Shall we come again for the village fair?", good: true, skill: "polite" },
            { say: "I enjoyed it too. Let's come back for village fair.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

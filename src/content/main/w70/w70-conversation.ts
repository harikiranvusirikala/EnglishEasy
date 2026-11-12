import type { ConversationDay } from "../../types";

/** Week 70, Day 6 (CURRICULUM §5): Conversation Day — friends caught in the rain on a day trip, and regrets after a shopping trip that went wrong. */
export const day: ConversationDay = {
  id: "w70-conversation",
  kind: "conversation",
  title: { en: "A Rainy Day Out", te: "వర్షంలో బయట" },
  summary: {
    en: "Use the whole week: wish things were different, say what you should have done, and comfort a friend kindly.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఇలా ఉంటే బాగుండు అనండి, ఏం చేయాల్సిందో చెప్పండి, స్నేహితులకి మెత్తగా ధైర్యం చెప్పండి.",
  },
  topics: ["weather", "travel", "shopping"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Rain at Kondapalli Fort", te: "కొండపల్లి కోట దగ్గర వర్షం" },
    lines: [
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Joseph, look at those clouds! I think it's going to rain.", te: "జోసెఫ్ గారూ, ఆ మబ్బులు చూడండి! వర్షం వచ్చేలా ఉంది." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Oh no! And the bus is still far away.", te: "అయ్యో! పైగా బస్సు ఇంకా చాలా దూరంలో ఉంది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "I should have checked the forecast this morning.", te: "పొద్దున్నే forecast చూసుకోవాల్సింది." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Never mind. Let's wait under the roof of that tea stall.", te: "పర్లేదు. ఆ టీ కొట్టు పైకప్పు కింద ఆగుదాం." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "What a downpour! I'm wet through already.", te: "ఎంత పెద్ద వర్షం! అప్పుడే పూర్తిగా తడిసిపోయాను." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Me too. I wish I had a raincoat like that man.", te: "నేను కూడా. ఆయన లాగా నా దగ్గర కూడా రెయిన్‌కోట్ ఉంటే బాగుండేది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Let's have some hot tea while we wait.", te: "ఆగేదాకా వేడి వేడి టీ తాగుదాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Good idea. Two teas and two plates of mirchi bajji, please!", te: "మంచి ఆలోచన. రెండు టీలు, రెండు ప్లేట్ల మిర్చి బజ్జీ ఇవ్వండి!" },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Look, the rain is stopping. The fort looks lovely now.", te: "చూడండి, వర్షం తగ్గుతోంది. ఇప్పుడు కోట చాలా అందంగా కనిపిస్తోంది." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I'm glad we came today, even in the rain!", te: "వర్షం పడినా, ఈ రోజు వచ్చినందుకు సంతోషంగా ఉంది!" },
    ],
    questions: [
      {
        prompt: { en: "What is the talk about?", te: "ఈ సంభాషణ దేని గురించి?" },
        options: ["Friends caught in the rain on a trip", "Buying a new umbrella", "A wedding in the rain"],
        answer: 0,
      },
      {
        prompt: { en: "What should Anitha have done this morning?", te: "అనిత గారు పొద్దున ఏం చేయాల్సింది?" },
        options: ["Checked the forecast", "Brought a raincoat", "Left home earlier"],
        answer: 0,
      },
      {
        prompt: { en: "Where do they wait for the rain to stop?", te: "వర్షం ఆగేదాకా వాళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["Under the roof of a tea stall", "Inside the bus", "Inside the fort"],
        answer: 0,
      },
      {
        prompt: { en: "How does Joseph feel at the end?", te: "చివరికి జోసెఫ్ గారికి ఎలా అనిపించింది?" },
        options: ["Glad they came", "Angry about the rain", "Sorry he came"],
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
        en: "Your friend asks: Didn't you check the weather this morning? You didn't. Answer.",
        te: "పొద్దున వాతావరణం చూసుకోలేదా? అని స్నేహితులు అడుగుతున్నారు. మీరు చూసుకోలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I didn't. I should have checked.", "No, I didn't.", "No, I forgot to check."],
      options: ["No, I didn't. I should have checked.", "Yes, I didn't. I should have checked.", "No, I didn't. I should have check."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the tea stall, order tea for you and your two friends.",
        te: "టీ కొట్టు దగ్గర మీకూ, మీ ఇద్దరు స్నేహితులకీ టీ చెప్పండి.",
      },
      expected: ["Three cups of tea, please.", "Three teas, please.", "Can we have three teas, please?"],
      options: ["Three cups of tea, please.", "Three cup of tea, please.", "Three cups of teas, please."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You are wet through, and a man walks past in a raincoat. Say what you wish.",
        te: "మీరు పూర్తిగా తడిసిపోయారు, ఒకాయన రెయిన్‌కోట్ వేసుకుని వెళ్తున్నారు. మీ కోరిక చెప్పండి.",
      },
      expected: ["I wish I had a raincoat.", "I wish I had a raincoat now.", "I should have brought a raincoat."],
      options: ["I wish I had a raincoat.", "I wish I had raincoat.", "I wish I have a raincoat."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Rain at Golconda Fort", te: "గోల్కొండ కోట దగ్గర వర్షం" },
      scene: {
        en: "You and your friend Srinivas are on a day trip to Golconda Fort in Hyderabad. Suddenly it starts to rain.",
        te: "మీరు, మీ స్నేహితుడు శ్రీనివాస్ గారు హైదరాబాద్‌లో గోల్కొండ కోట చూడటానికి వెళ్ళారు. ఉన్నట్టుండి వర్షం మొదలైంది.",
      },
      partner: { en: "Srinivas (your friend)", te: "శ్రీనివాస్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "regret", label: { en: "Wishes and regrets", te: "కోరికలు, చిన్న బాధలు" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "It's starting to rain! Did you bring an umbrella?",
          te: "వర్షం మొదలవుతోంది! గొడుగు తెచ్చారా?",
          hint: { en: "Say no, and that you are sorry you didn't.", te: "లేదని చెప్పి, తేనందుకు బాధపడుతూ చెప్పండి." },
          replies: [
            { say: "No, I didn't. I should have brought one.", good: true, skill: "regret" },
            { say: "No, I didn't. I should have bring one.", good: false, skill: "regret" },
          ],
        },
        {
          partner: "Me neither. Let's run to that shed near the gate.",
          te: "నేనూ తేలేదు. గేటు దగ్గర ఉన్న ఆ షెడ్డు కిందికి పరిగెత్తుదాం.",
          hint: { en: "Agree, and tell him to be careful on the wet steps.", te: "ఒప్పుకుని, తడి మెట్ల మీద జాగ్రత్తగా ఉండమని ఆయనకి చెప్పండి." },
          replies: [
            { say: "Okay! Be careful, the steps are wet.", good: true, skill: "polite" },
            { say: "Okay! Be careful, the steps is wet.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Phew! We're wet through. I wish it wasn't raining so hard.",
          te: "అబ్బా! పూర్తిగా తడిసిపోయాం. వర్షం ఇంత గట్టిగా పడకపోతే బాగుండు.",
          hint: { en: "Tell him not to worry, because rain like this stops soon.", te: "బాధపడొద్దని, ఇలాంటి వర్షం త్వరగా ఆగిపోతుందని చెప్పండి." },
          replies: [
            { say: "Never mind. It won't last long.", good: true, skill: "polite" },
            {
              say: "This is your fault. Your idea, your trip!",
              good: false,
              skill: "polite",
              react: { en: "My fault? I can't control the rain!", te: "నా తప్పా? వర్షం నా చేతిలో లేదు కదా!" },
            },
          ],
        },
        {
          partner: "You're right. Look, there's a tea stall here.",
          te: "నిజమే. చూడండి, ఇక్కడ ఒక టీ కొట్టు ఉంది.",
          hint: { en: "Suggest hot tea and something to eat while you wait.", te: "ఆగేదాకా వేడి టీ, ఏదైనా తిందామని సూచించండి." },
          replies: [
            { say: "Let's have some hot tea and bajji while we wait.", good: true, skill: "polite" },
            { say: "Let's having some hot tea and bajji while we wait.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Good idea. The rain is stopping. Shall we see the fort now?",
          te: "మంచి ఆలోచన. వర్షం తగ్గుతోంది. ఇప్పుడు కోట చూద్దామా?",
          hint: { en: "Agree happily, and say you are happy you came.", te: "సంతోషంగా ఒప్పుకుని, వచ్చినందుకు సంతోషంగా ఉందని చెప్పండి." },
          replies: [
            { say: "Yes, let's go! I'm glad we came today.", good: true, skill: "regret" },
            { say: "Yes, let's go! I'm glad we come today.", good: false, skill: "regret" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A shopping trip gone wrong", te: "షాపింగ్ బెడిసికొట్టింది" },
      scene: {
        en: "Yesterday you bought a shirt at the market for Diwali. Today your friend Ayesha asks about it.",
        te: "నిన్న దీపావళి కోసం మార్కెట్‌లో ఒక షర్ట్ కొన్నారు. ఈ రోజు మీ స్నేహితురాలు ఆయేషా గారు దాని గురించి అడుగుతున్నారు.",
      },
      partner: { en: "Ayesha (your friend)", te: "ఆయేషా (మీ స్నేహితురాలు)" },
      skills: [
        { id: "regret", label: { en: "Saying I should have", te: "I should have అనడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! How was your shopping at the market yesterday?",
          te: "హాయ్! నిన్న మార్కెట్‌లో షాపింగ్ ఎలా జరిగింది?",
          hint: { en: "Say it didn't go well, because the new shirt doesn't fit.", te: "బాగా జరగలేదని, కొత్త షర్ట్ సరిపోలేదని చెప్పండి." },
          replies: [
            { say: "Not so good. The shirt I bought is too small.", good: true, skill: "regret" },
            { say: "Not so good. The shirt I bought is too much small.", good: false, skill: "regret" },
          ],
        },
        {
          partner: "Oh no! Didn't you try it on at the shop?",
          te: "అయ్యో! షాప్‌లో వేసుకుని చూడలేదా?",
          hint: { en: "Say no, and that you are sorry you didn't.", te: "లేదని చెప్పి, చూడనందుకు బాధపడుతూ చెప్పండి." },
          replies: [
            { say: "No, I didn't. I should have tried it on.", good: true, skill: "regret" },
            { say: "Yes, I didn't. I should have tried it on.", good: false, skill: "regret", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Never mind. You can exchange it. Do you have the bill?",
          te: "పర్లేదు. మార్చుకోవచ్చు. బిల్లు ఉందా?",
          hint: { en: "Say you threw it away, and that it was a mistake.", te: "అది పారేశారని, అది పొరపాటని చెప్పండి." },
          replies: [
            { say: "I threw it away. I should have kept it.", good: true, skill: "regret" },
            {
              say: "Bill? Who keeps bills? Don't be silly.",
              good: false,
              skill: "polite",
              react: { en: "Shops ask for it, you know. Let's try anyway.", te: "షాపుల వాళ్ళు అడుగుతారండీ. అయినా ఒకసారి ప్రయత్నిద్దాం." },
            },
          ],
        },
        {
          partner: "Let's go to the shop together. The owner knows me.",
          te: "ఇద్దరం కలిసి షాప్‌కి వెళ్దాం. ఓనర్ గారు నాకు తెలుసు.",
          hint: { en: "Thank her, and ask when she is free.", te: "థాంక్స్ చెప్పి, ఆవిడ ఎప్పుడు ఖాళీగా ఉంటారో అడగండి." },
          replies: [
            { say: "Thank you! When are you free?", good: true, skill: "polite" },
            { say: "Thank you! When you are free?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "How about this evening at six?",
          te: "ఈ సాయంత్రం ఆరింటికి ఎలా ఉంటుంది?",
          hint: { en: "Agree, and promise to look after the bill next time.", te: "ఒప్పుకుని, ఈసారి బిల్లు జాగ్రత్తగా ఉంచుతానని మాట ఇవ్వండి." },
          replies: [
            { say: "Six is fine. Next time, I'll keep the bill!", good: true, skill: "polite" },
            { say: "Six is fine. Next time, I'll keep bill!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

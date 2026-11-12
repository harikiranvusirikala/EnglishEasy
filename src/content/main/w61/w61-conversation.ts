import type { ConversationDay } from "../../types";

/** Week 61, Day 6 (CURRICULUM §5): Conversation Day — the day's news at the tea stall, and a cyclone warning on the TV news. */
export const day: ConversationDay = {
  id: "w61-conversation",
  kind: "conversation",
  title: { en: "The Morning Paper", te: "పొద్దున పేపర్" },
  summary: {
    en: "Use the whole week: talk about the day's headlines at the tea stall, and a cyclone warning on the TV news.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: టీ కొట్టు దగ్గర ఈ రోజు హెడ్‌లైన్స్ గురించి, టీవీ వార్తల్లో తుఫాను హెచ్చరిక గురించి మాట్లాడండి.",
  },
  topics: ["weather", "neighbours", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A headline about a cyclone", te: "తుఫాను గురించి హెడ్‌లైన్" },
    lines: [
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Good morning, Geetha! Have you seen today's paper?", te: "గుడ్ మార్నింగ్ గీత గారూ! ఈ రోజు పేపర్ చూశారా?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Not yet. What's on the front page?", te: "ఇంకా లేదు. ఫ్రంట్ పేజీలో ఏముంది?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Look at this headline. Cyclone to Hit Coast on Friday.", te: "ఈ హెడ్‌లైన్ చూడండి. 'శుక్రవారం తీరాన్ని తాకనున్న తుఫాను'." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Oh no! So the cyclone hasn't come yet?", te: "అయ్యో! అంటే తుఫాను ఇంకా రాలేదా?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "No. To Hit means it will come on Friday.", te: "లేదు. To Hit అంటే శుక్రవారం వస్తుందని." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Apparently, the schools will be closed on Friday too.", te: "శుక్రవారం స్కూళ్ళు కూడా మూసేస్తారట." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Is it true? Where did you hear that?", te: "నిజమా? మీకు ఎక్కడ తెలిసింది?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "On the TV news this morning. The collector said so.", te: "పొద్దున టీవీ వార్తల్లో. కలెక్టర్ గారు అలా చెప్పారు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Then let's buy candles and drinking water today.", te: "అయితే ఈ రోజే కొవ్వొత్తులు, తాగే నీళ్ళు కొందాం." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Good idea. And let's check on Kamala. She lives alone.", te: "మంచి ఆలోచన. కమల గారిని కూడా ఒకసారి చూద్దాం. ఆవిడ ఒక్కరే ఉంటారు." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A cyclone in the news", "A new metro line", "A cricket match"],
        answer: 0,
      },
      {
        prompt: { en: "When will the cyclone come?", te: "తుఫాను ఎప్పుడు వస్తుంది?" },
        options: ["On Friday", "Today", "Next week"],
        answer: 0,
      },
      {
        prompt: { en: "Where did Geetha hear about the schools?", te: "స్కూళ్ళ గురించి గీత గారికి ఎక్కడ తెలిసింది?" },
        options: ["On the TV news", "In the paper", "From a neighbour"],
        answer: 0,
      },
      {
        prompt: { en: "What will they buy today?", te: "ఈ రోజు వాళ్ళు ఏం కొంటారు?" },
        options: ["Candles and drinking water", "Vegetables and rice", "A new paper"],
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
        en: "The headline says Old Bridge Closed for Repairs. Tell your friend the news.",
        te: "హెడ్‌లైన్‌లో Old Bridge Closed for Repairs అని ఉంది. ఆ వార్త మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["The old bridge was closed for repairs.", "The old bridge is closed for repairs.", "They closed the old bridge for repairs."],
      options: ["The old bridge was closed for repairs.", "Old bridge was closed for repairs.", "The old bridge were closed for repairs."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your neighbour asks about the weather. The TV weather report says rain on Sunday. Tell her.",
        te: "పక్కింటావిడ వాతావరణం గురించి అడుగుతున్నారు. ఆదివారం వర్షం పడుతుందని టీవీ వాతావరణ వార్తల్లో చెప్పారు. ఆవిడకి చెప్పండి.",
      },
      expected: [
        "The weather report says it will rain on Sunday.",
        "According to the TV, it will rain on Sunday.",
        "It will rain on Sunday, according to the news.",
      ],
      options: [
        "The weather report says it will rain on Sunday.",
        "The weather report say it will rain on Sunday.",
        "The weather report says it rained on Sunday.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend asks when you heard the cyclone warning. You heard it on TV last night. Answer.",
        te: "తుఫాను హెచ్చరిక ఎప్పుడు విన్నారని మీ స్నేహితులు అడుగుతున్నారు. నిన్న రాత్రి టీవీలో విన్నారు. జవాబు చెప్పండి.",
      },
      expected: ["I heard it on TV last night.", "I heard it on the news last night.", "Last night, on the TV news."],
      options: ["I heard it on TV last night.", "I heard it on TV yesterday night.", "I was hearing it on TV last night."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "News at the tea stall", te: "టీ కొట్టు దగ్గర వార్తలు" },
      scene: {
        en: "You stop at your usual tea stall in the morning. Raju, who runs it, likes to talk about the news.",
        te: "పొద్దున మీరు ఎప్పుడూ వెళ్ళే టీ కొట్టు దగ్గర ఆగారు. దాన్ని నడిపే రాజు గారికి వార్తల గురించి మాట్లాడటం ఇష్టం.",
      },
      partner: { en: "Raju (tea stall owner)", te: "రాజు (టీ కొట్టు యజమాని)" },
      voice: "b",
      skills: [
        { id: "news", label: { en: "Telling the news", te: "వార్త చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! One tea? The paper is on the bench.",
          te: "గుడ్ మార్నింగ్! ఒక టీ నా? పేపర్ బెంచ్ మీద ఉంది.",
          hint: { en: "Say yes to the tea politely, and thank him.", te: "టీకి మర్యాదగా సరే అని, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, please. One tea. Thank you!", good: true, skill: "polite" },
            {
              say: "Tea. Quickly. And give me the paper.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay! One minute, please.", te: "సరే, సరే! ఒక్క నిమిషం అండీ." },
            },
          ],
        },
        {
          partner: "What's the big news today?",
          te: "ఈ రోజు పెద్ద వార్త ఏంటి?",
          hint: { en: "Tell him what the main headline says about bus fares.", te: "బస్ ఛార్జీల గురించి ముఖ్యమైన హెడ్‌లైన్‌లో ఏముందో చెప్పండి." },
          replies: [
            { say: "The headline says Bus Fares to Go Up From Monday.", good: true, skill: "news" },
            { say: "The headline say Bus Fares to Go Up From Monday.", good: false, skill: "news", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Oh no. Does that mean this Monday?",
          te: "అయ్యో. అంటే ఈ సోమవారమేనా?",
          hint: { en: "Say yes, and say the fares will be higher from then.", te: "అవునని చెప్పి, అప్పటి నుంచి ఛార్జీలు ఎక్కువ అవుతాయని చెప్పండి." },
          replies: [
            { say: "Yes, the fares will go up from this Monday.", good: true, skill: "news" },
            { say: "Yes, the fares went up from this Monday.", good: false, skill: "news" },
          ],
        },
        {
          partner: "Anything else? Any good news?",
          te: "ఇంకేమైనా ఉందా? ఏదైనా మంచి వార్త?",
          hint: { en: "Tell him the good news about the eye camp at the school.", te: "స్కూల్లో ఐ క్యాంప్ గురించిన మంచి వార్త చెప్పండి." },
          replies: [
            { say: "Yes! A free eye camp was held at the school.", good: true, skill: "news" },
            { say: "Yes! Free eye camp was held at school.", good: false, skill: "news", fixIt: "article" },
          ],
        },
        {
          partner: "That's nice! Here's your tea. Fifteen rupees.",
          te: "బాగుంది! ఇదిగోండి మీ టీ. పదిహేను రూపాయలు.",
          hint: { en: "Pay, thank him, and say goodbye.", te: "డబ్బులిచ్చి, థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Here you are. Thank you, see you tomorrow!", good: true, skill: "polite" },
            { say: "Here you are. Thanks, see you tomorrow!", good: true, skill: "polite" },
            { say: "Here you are. Thanks you, see you tomorrow!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A cyclone warning", te: "తుఫాను హెచ్చరిక" },
      scene: {
        en: "Your neighbour Fatima knocks on your door in the evening. She has just watched the TV news.",
        te: "సాయంత్రం పక్కింటి ఫాతిమా గారు మీ తలుపు తట్టారు. ఆవిడ ఇప్పుడే టీవీ వార్తలు చూశారు.",
      },
      partner: { en: "Fatima (your neighbour)", te: "ఫాతిమా (పక్కింటావిడ)" },
      skills: [
        { id: "news", label: { en: "Talking about the news", te: "వార్తల గురించి మాట్లాడటం" } },
        { id: "help", label: { en: "Offering help", te: "సాయం చేస్తాననడం" } },
      ],
      turns: [
        {
          partner: "Did you hear the TV news? There's a cyclone warning.",
          te: "టీవీ వార్తలు విన్నారా? తుఫాను హెచ్చరిక ఇచ్చారు.",
          hint: { en: "Say no, and ask when the cyclone will come.", te: "వినలేదని చెప్పి, తుఫాను ఎప్పుడు వస్తుందో అడగండి." },
          replies: [
            { say: "No, I didn't. When will it come?", good: true, skill: "news" },
            { say: "No, I didn't. When it will come?", good: false, skill: "news", fixIt: "question" },
          ],
        },
        {
          partner: "The news says it will hit the coast on Friday night.",
          te: "శుక్రవారం రాత్రి తీరాన్ని తాకుతుందని వార్తల్లో చెప్పారు.",
          hint: { en: "Ask if the schools and shops will be closed.", te: "స్కూళ్ళు, షాపులు మూసేస్తారా అని అడగండి." },
          replies: [
            { say: "Will the schools and shops be closed?", good: true, skill: "news" },
            { say: "The schools and shops will closed?", good: false, skill: "news" },
          ],
        },
        {
          partner: "The collector said the schools would be closed. I'm not sure about the shops.",
          te: "స్కూళ్ళు మూసేస్తారని కలెక్టర్ గారు చెప్పారు. షాపుల సంగతి నాకు తెలియదు.",
          hint: { en: "Suggest buying candles, water and medicines today.", te: "ఈ రోజే కొవ్వొత్తులు, నీళ్ళు, మందులు కొందామని చెప్పండి." },
          replies: [
            { say: "Then let's buy candles, water and medicines today.", good: true, skill: "help" },
            { say: "Then let's buy candle, water and medicine today.", good: false, skill: "help", fixIt: "plural" },
          ],
        },
        {
          partner: "Good idea. But I'm a little scared.",
          te: "మంచి ఆలోచన. కానీ నాకు కొంచెం భయంగా ఉంది.",
          hint: { en: "Comfort her kindly, and offer your help.", te: "ఆవిడకి మర్యాదగా ధైర్యం చెప్పి, సాయం చేస్తానని చెప్పండి." },
          replies: [
            { say: "Don't worry. Call me if you need anything.", good: true, skill: "help" },
            {
              say: "Why are you scared? It's only some wind.",
              good: false,
              skill: "help",
              react: { en: "It's not only wind. My house is near the canal.", te: "ఉత్త గాలి కాదు. మా ఇల్లు కాలువ దగ్గర ఉంది." },
            },
          ],
        },
        {
          partner: "Thank you. You're very kind.",
          te: "థాంక్స్ అండీ. మీరు చాలా మంచివారు.",
          hint: { en: "Answer her thanks, and say goodbye.", te: "ఆవిడ థాంక్స్‌కి జవాబు చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "You're welcome. Take care, Fatima!", good: true, skill: "help" },
            { say: "Mention not. Take care, Fatima!", good: false, skill: "help", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

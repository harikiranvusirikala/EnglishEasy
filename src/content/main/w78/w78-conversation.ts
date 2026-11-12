import type { ConversationDay } from "../../types";

/** Week 78, Day 6 (CURRICULUM §5): Conversation Day — visitors from abroad: an American at the bus stand, a British couple at the station, a call from an agent abroad. */
export const day: ConversationDay = {
  id: "w78-conversation",
  kind: "conversation",
  title: { en: "Visitors From Abroad", te: "విదేశీ అతిథులు" },
  summary: {
    en: "Use the whole week: help visitors from America and Britain, and follow a call from a customer-care agent abroad.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: అమెరికా, బ్రిటన్ నుంచి వచ్చినవాళ్ళకి సాయం చేయండి, విదేశం నుంచి customer-care agent చేసిన ఫోన్ అర్థం చేసుకోండి.",
  },
  topics: ["travel", "phone", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the bus stand", te: "బస్ స్టాండ్‌లో" },
    lines: [
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "us-f", en: "Excuse me, is this the line for tickets to Amaravati?", te: "ఎక్స్‌క్యూజ్ మీ, అమరావతి టికెట్ల క్యూ ఇదేనా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, madam, this is the queue. The next bus is at 10:15.", te: "అవునండీ, క్యూ ఇదే. తర్వాతి బస్సు 10:15 కి." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "us-f", en: "Sorry, could you say that again more slowly? Did you say ten fifty?", te: "సారీ, ఇంకొంచెం మెల్లగా మళ్ళీ చెప్తారా? పది యాభై అన్నారా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "No, ten fifteen. That's in twenty minutes.", te: "కాదండీ, పది పదిహేను. ఇంకో ఇరవై నిమిషాల్లో." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "us-f", en: "Great, thanks. Is there a restroom near here?", te: "సూపర్, థాంక్స్. ఇక్కడ దగ్గర్లో restroom ఉందా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Restroom? Oh, you mean the washroom. It's behind the canteen.", te: "restroom ఆ? ఓ, washroom అంటున్నారా. అది క్యాంటీన్ వెనకాల ఉంది." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "us-f", en: "Perfect. And could I get some water there?", te: "బాగుంది. అక్కడ కొంచెం మంచినీళ్ళు దొరుకుతాయా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, the canteen sells water and filter coffee too.", te: "దొరుకుతాయండీ, క్యాంటీన్‌లో మంచినీళ్ళు, ఫిల్టర్ కాఫీ కూడా అమ్ముతారు." },
      { speaker: { en: "Ruth", te: "రూత్" }, voice: "us-f", en: "Wonderful! You've been very kind. Thank you so much.", te: "చాలా బాగుంది! మీరు చాలా మంచిగా సాయం చేశారు. చాలా థాంక్స్." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "You're welcome, madam. Have a nice trip to Amaravati!", te: "పర్లేదండీ. మీ అమరావతి ప్రయాణం బాగా జరగాలి!" },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a bus stand", "At a hotel", "At a hospital"],
        answer: 0,
      },
      {
        prompt: { en: "When is the next bus?", te: "తర్వాతి బస్సు ఎన్ని గంటలకి?" },
        options: ["At 10:15", "At 10:50", "At 10:30"],
        answer: 0,
      },
      {
        prompt: { en: "What does Ruth call the washroom?", te: "washroom ని రూత్ గారు ఏమంటున్నారు?" },
        options: ["A restroom", "A canteen", "A line"],
        answer: 0,
      },
      {
        prompt: { en: "What does the canteen sell?", te: "క్యాంటీన్‌లో ఏం అమ్ముతారు?" },
        options: ["Water and filter coffee", "Only tea", "Bus tickets"],
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
        en: "A British visitor asks: You don't have change for a hundred, do you? You don't. Answer politely.",
        te: "ఒక బ్రిటిష్ అతిథి You don't have change for a hundred, do you? అని అడిగారు. మీ దగ్గర చిల్లర లేదు. మర్యాదగా జవాబు చెప్పండి.",
      },
      expected: ["No, sorry, I don't.", "Sorry, no, I don't.", "No, I'm sorry, I don't."],
      options: ["No, sorry, I don't.", "Yes, sorry, I don't.", "Yes, I don't have."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "An American tourist asks how far the temple is. Say it is about two kilometres away.",
        te: "గుడి ఎంత దూరమని ఒక అమెరికన్ టూరిస్ట్ అడుగుతున్నారు. సుమారు రెండు కిలోమీటర్లు అని చెప్పండి.",
      },
      expected: ["It's about two kilometres from here.", "About two kilometres.", "It's about two kilometres away."],
      options: ["It's about two kilometres from here.", "It's about two kilometre from here.", "It's about two kilometres far from here."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "On a call, the agent speaks too fast. Ask her what she said about the date.",
        te: "ఫోన్‌లో agent చాలా వేగంగా మాట్లాడుతున్నారు. తేదీ గురించి ఏం చెప్పారని ఆవిడని అడగండి.",
      },
      expected: ["Sorry, what did you say about the date?", "Sorry, could you repeat the date, please?", "Sorry, could you say the date again?"],
      options: ["Sorry, what did you say about the date?", "Sorry, what you said about the date?", "Date? What? Again."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A British couple at the station", te: "స్టేషన్‌లో బ్రిటిష్ దంపతులు" },
      scene: {
        en: "You are at Vijayawada railway station. Mary and David, a couple from Britain, look lost. Mary comes up to you.",
        te: "మీరు విజయవాడ రైల్వే స్టేషన్‌లో ఉన్నారు. బ్రిటన్ నుంచి వచ్చిన మేరీ, డేవిడ్ దంపతులు దారి తెలియక చూస్తున్నారు. మేరీ గారు మీ దగ్గరికి వచ్చారు.",
      },
      partner: { en: "Mary (a visitor from Britain)", te: "మేరీ (బ్రిటన్ నుంచి వచ్చిన అతిథి)" },
      voice: "gb-f",
      skills: [
        { id: "help", label: { en: "Helping a visitor", te: "అతిథికి సాయం చేయడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me, could you help us? We're looking for the train to Chennai.",
          te: "ఎక్స్‌క్యూజ్ మీ, మాకు కొంచెం సాయం చేస్తారా? చెన్నై వెళ్ళే రైలు కోసం చూస్తున్నాం.",
          hint: { en: "Offer to help, and ask for the train's name.", te: "సాయం చేస్తానని చెప్పి, రైలు పేరు అడగండి." },
          replies: [
            { say: "Of course. What's the name of the train?", good: true, skill: "help" },
            { say: "Sure. Which train is it?", good: true, skill: "help" },
            { say: "Of course. What is the name of train?", good: false, skill: "help", fixIt: "article" },
          ],
        },
        {
          partner: "It's the Pinakini Express. The board says platform four, I think.",
          te: "పినాకిని ఎక్స్‌ప్రెస్. బోర్డు మీద ప్లాట్‌ఫామ్ నాలుగు అని ఉందనుకుంటా.",
          hint: { en: "Tell her platform four is across the bridge, on the right.", te: "ప్లాట్‌ఫామ్ నాలుగు బ్రిడ్జి దాటాక కుడివైపు ఉందని చెప్పండి." },
          replies: [
            { say: "Yes, platform four is across the bridge, on the right.", good: true, skill: "help" },
            { say: "Yes, platform four is across the bridge, in the right.", good: false, skill: "help", fixIt: "preposition" },
          ],
        },
        {
          partner: "Sorry, I didn't quite catch that. Did you say across the bridge?",
          te: "సారీ, నాకు సరిగ్గా వినిపించలేదు. బ్రిడ్జి దాటాక అన్నారా?",
          hint: { en: "Say yes, and say it again slowly and clearly.", te: "అవును అని, మళ్ళీ మెల్లగా, స్పష్టంగా చెప్పండి." },
          replies: [
            { say: "Yes, across the bridge. Then it's on the right.", good: true, skill: "help" },
            {
              say: "I already told you. Listen properly.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Sorry, your accent is new to me.", te: "అయ్యో! సారీ, మీ యాస నాకు కొత్త." },
            },
          ],
        },
        {
          partner: "Lovely. And where can we get a cup of tea? We'd love one.",
          te: "బాగుంది. ఒక కప్పు టీ ఎక్కడ దొరుకుతుంది? మాకు తాగాలని ఉంది.",
          hint: { en: "Tell her there is a tea stall near the bridge, and say the price: ten rupees.", te: "బ్రిడ్జి దగ్గర టీ స్టాల్ ఉందని, ధర పది రూపాయలని చెప్పండి." },
          replies: [
            { say: "There's a tea stall near the bridge. Tea is ten rupees.", good: true, skill: "help" },
            { say: "There's a tea stall near the bridge. Tea is ten rupee.", good: false, skill: "help", fixIt: "plural" },
          ],
        },
        {
          partner: "Brilliant. Thank you ever so much. You've been so kind.",
          te: "అద్భుతం. చాలా చాలా థాంక్స్. మీరు చాలా మంచిగా సాయం చేశారు.",
          hint: { en: "Reply kindly, and wish them a safe journey.", te: "మర్యాదగా జవాబిచ్చి, వాళ్ళ ప్రయాణం క్షేమంగా జరగాలని చెప్పండి." },
          replies: [
            { say: "You're welcome. Have a safe journey!", good: true, skill: "polite" },
            { say: "No mention. Have a safe journey!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A call from America", te: "అమెరికా నుంచి ఫోన్" },
      scene: {
        en: "Your cousin in America booked a hotel room for you in Tirupati. Grace, an agent from the booking company, calls you from America.",
        te: "అమెరికాలో ఉన్న మీ కజిన్ తిరుపతిలో మీకోసం హోటల్ రూమ్ బుక్ చేశారు. బుకింగ్ కంపెనీ agent గ్రేస్ గారు అమెరికా నుంచి ఫోన్ చేశారు.",
      },
      partner: { en: "Grace (a customer-care agent in America)", te: "గ్రేస్ (అమెరికాలో customer-care agent)" },
      voice: "us-f",
      skills: [
        { id: "again", label: { en: "Asking again and checking", te: "మళ్ళీ అడగడం, సరిచూసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi, this is Grace from Easy Stay. Is this the guest for Tirupati?",
          te: "హాయ్, నేను ఈజీ స్టే నుంచి గ్రేస్. తిరుపతిలో రూమ్ బుక్ అయినవారితోనే మాట్లాడుతున్నానా?",
          hint: { en: "Say yes, and ask who is calling, because you missed her name.", te: "అవును అని, ఆవిడ పేరు వినిపించలేదు కాబట్టి ఎవరు మాట్లాడుతున్నారో అడగండి." },
          replies: [
            { say: "Yes, speaking. Sorry, who is calling, please?", good: true, skill: "again" },
            { say: "Yes. Sorry, I didn't catch your name.", good: true, skill: "again" },
            { say: "Yes. Sorry, who you are?", good: false, skill: "again", fixIt: "question" },
          ],
        },
        {
          partner: "It's Grace, from Easy Stay. You check in on the thirtieth.",
          te: "నేను గ్రేస్, ఈజీ స్టే నుంచి. మీరు ముప్పయ్యో తేదీన చెక్-ఇన్ అవుతారు.",
          hint: { en: "Check if she said the thirteenth or the thirtieth.", te: "ఆవిడ పదమూడో తేదీ అన్నారా, ముప్పయ్యో తేదీ అన్నారా అని సరిచూసుకోండి." },
          replies: [
            { say: "Sorry, did you say the thirteenth or the thirtieth?", good: true, skill: "again" },
            { say: "Sorry, the thirteenth or the thirtieth, which you said?", good: false, skill: "again", fixIt: "question" },
          ],
        },
        {
          partner: "The thirtieth, for two nights. Could you confirm your cell phone number, please?",
          te: "ముప్పయ్యో తేదీ, రెండు రాత్రులు. మీ cell phone నంబర్ ఒకసారి చెప్తారా?",
          hint: { en: "Check that she means your mobile number, and agree.", te: "ఆవిడ అడుగుతున్నది మీ మొబైల్ నంబరేనా అని సరిచూసుకుని, సరే అనండి." },
          replies: [
            { say: "You mean my mobile number? Sure.", good: true, skill: "again" },
            { say: "My mobile number? Yes, of course.", good: true, skill: "again" },
            {
              say: "Cell phone? I don't have that. Bye.",
              good: false,
              skill: "polite",
              react: { en: "Oh, wait! I mean your mobile phone.", te: "అయ్యో, ఆగండి! మీ మొబైల్ ఫోన్ గురించి అడుగుతున్నాను." },
            },
          ],
        },
        {
          partner: "Thank you. Please note, we never ask for an OTP or a PIN.",
          te: "థాంక్యూ. ఒక్క మాట, మేము ఎప్పుడూ OTP గానీ, PIN గానీ అడగం.",
          hint: { en: "Say that is good to know, and thank her.", te: "అది తెలుసుకోవడం మంచిదని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "That's good to know. Thank you, Grace.", good: true, skill: "polite" },
            { say: "That's good to know. Thanking you, Grace.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
        {
          partner: "You're welcome. Enjoy your stay in Tirupati. Goodbye!",
          te: "పర్లేదు. తిరుపతిలో మీ బస బాగా జరగాలి. గుడ్‌బై!",
          hint: { en: "Thank her again, and say goodbye politely.", te: "మళ్ళీ థాంక్స్ చెప్పి, మర్యాదగా గుడ్‌బై చెప్పండి." },
          replies: [
            { say: "Thank you. Goodbye!", good: true, skill: "polite" },
            { say: "Same to you. Goodbye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 39, Day 6 (CURRICULUM §4): Conversation Day — clearing up a misunderstanding with a friend, and an office call in clear English. */
export const day: ConversationDay = {
  id: "w39-conversation",
  kind: "conversation",
  title: { en: "A Misunderstanding", te: "అపార్థం" },
  summary: {
    en: "Use the whole week: clear up a misunderstanding with a friend, saying sorry and thank you, and handle an office call in clear English.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: sorry, thank you చెప్తూ స్నేహితులతో అపార్థం తీర్చుకోండి; ఆఫీస్ ఫోన్‌లో స్పష్టమైన ఇంగ్లీష్ మాట్లాడండి.",
  },
  topics: ["people", "feelings", "phone", "offices"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Are you angry with me?", te: "నా మీద కోపంగా ఉందా?" },
    lines: [
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Ramesh, are you angry with me?", te: "రమేష్ గారు, మీకు నా మీద కోపంగా ఉందా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Angry? No! Why do you ask?", te: "కోపమా? లేదండీ! ఎందుకు అలా అడుగుతున్నారు?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "You didn't come to my birthday dinner.", te: "నా పుట్టినరోజు డిన్నర్‌కి మీరు రాలేదు." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "I'm so sorry. I was out of town.", te: "చాలా sorry. నేను ఊళ్ళో లేను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "But you didn't reply to my message.", te: "కానీ నా మెసేజ్‌కి జవాబు కూడా ఇవ్వలేదు." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "My phone fell into the water at Tirupati.", te: "తిరుపతిలో నా ఫోన్ నీళ్ళలో పడిపోయింది." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Oh no! I didn't know that. Sorry.", te: "అయ్యో! అది నాకు తెలియదు. sorry అండీ." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "That's okay. Sorry for not calling you.", te: "పర్వాలేదు. మీకు ఫోన్ చేయనందుకు sorry." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "No problem. Will you come for coffee on Sunday?", te: "పర్వాలేదు. ఆదివారం కాఫీకి వస్తారా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Thank you, I'd love to. See you then!", te: "థ్యాంక్స్, తప్పకుండా వస్తాను. అప్పుడు కలుద్దాం!" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Why Ramesh missed the dinner", "A new phone to buy", "A trip to Tirupati together"],
        answer: 0,
      },
      {
        prompt: { en: "Why didn't Ramesh come to the dinner?", te: "రమేష్ డిన్నర్‌కి ఎందుకు రాలేదు?" },
        options: ["He was sick.", "He was out of town.", "He was angry."],
        answer: 1,
      },
      {
        prompt: { en: "What happened to Ramesh's phone?", te: "రమేష్ ఫోన్‌కి ఏమైంది?" },
        options: ["Someone stole it.", "He lost it on a bus.", "It fell into the water."],
        answer: 2,
      },
      {
        prompt: { en: "What does Swapna ask at the end?", te: "చివర్లో స్వప్న ఏం అడిగారు?" },
        options: ["To come for coffee on Sunday", "To call her every day", "To buy her a gift"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You forgot a friend's birthday. Say sorry for that.",
        te: "మీ స్నేహితుల్లో ఒకరి పుట్టినరోజు మర్చిపోయారు. దానికి sorry చెప్పండి.",
      },
      expected: ["Sorry for forgetting your birthday.", "I'm so sorry I forgot your birthday.", "I'm sorry for forgetting your birthday."],
      options: ["Sorry for forgetting your birthday.", "Sorry for forget your birthday.", "Birthday? I forgot. Anyway."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A friend says: Sorry, I didn't reply. Accept it kindly.",
        te: "మీ స్నేహితుల్లో ఒకరు 'Sorry, జవాబు ఇవ్వలేదు' అన్నారు. మెత్తగా పర్వాలేదని చెప్పండి.",
      },
      expected: ["That's okay, don't worry.", "That's okay.", "No problem."],
      options: ["That's okay, don't worry.", "No any problem.", "You never reply!"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The office calls. You are away till Friday. Tell them.",
        te: "ఆఫీస్ నుండి ఫోన్ వచ్చింది. మీరు శుక్రవారం వరకు ఊళ్ళో ఉండరు. వాళ్ళకి చెప్పండి.",
      },
      expected: ["Sorry, I'm out of town till Friday.", "I'm out of town till Friday."],
      options: ["Sorry, I'm out of town till Friday.", "Sorry, I out of town till Friday.", "Sorry, I'm out of station till Friday."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "The wrong day", te: "తప్పు రోజు" },
      scene: {
        en: "Yesterday your friend Radha waited an hour for you at the bus stand. You thought you were meeting today.",
        te: "నిన్న మీ స్నేహితురాలు రాధ గారు బస్ స్టాండ్‌లో గంటసేపు మీ కోసం వెయిట్ చేశారు. మీరేమో కలవాల్సింది ఈ రోజు అనుకున్నారు.",
      },
      partner: { en: "Radha (your friend)", te: "రాధ (మీ స్నేహితురాలు)" },
      skills: [
        { id: "sorry", label: { en: "Saying sorry", te: "sorry చెప్పడం" } },
        { id: "thanks", label: { en: "Thanking", te: "థ్యాంక్స్ చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Hello. I waited for you for an hour yesterday.",
          te: "హలో. నిన్న మీ కోసం గంటసేపు వెయిట్ చేశాను.",
          hint: { en: "Say you are very sorry, and explain the mix-up.", te: "చాలా sorry అని చెప్పి, ఎక్కడ పొరపాటు జరిగిందో చెప్పండి." },
          replies: [
            { say: "I'm so sorry! I thought we were meeting today.", good: true, skill: "sorry" },
            { say: "Sorry. I am thinking it was today.", good: false, skill: "sorry", fixIt: "state-ing" },
          ],
        },
        {
          partner: "No, I said Saturday, not Sunday.",
          te: "లేదు, నేను శనివారం అన్నాను, ఆదివారం కాదు.",
          hint: { en: "Say it was your mistake, and apologise for her long wait.", te: "తప్పు మీదే అని చెప్పి, అంతసేపు వెయిట్ చేయించినందుకు sorry చెప్పండి." },
          replies: [
            { say: "My mistake. Sorry for keeping you waiting.", good: true, skill: "sorry" },
            { say: "My mistake. Sorry for keep you waiting.", good: false, skill: "sorry" },
          ],
        },
        {
          partner: "It's okay. These things happen.",
          te: "పర్వాలేదు. ఇలాంటివి జరుగుతుంటాయి.",
          hint: { en: "Thank her for understanding.", te: "అర్థం చేసుకున్నందుకు ఆవిడకి థ్యాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you for understanding. That's kind of you.", good: true, skill: "thanks" },
            {
              say: "Yes, and you didn't call me also!",
              good: false,
              skill: "thanks",
              react: { en: "Hmm, true. I didn't call either. Sorry!", te: "నిజమే. నేనూ ఫోన్ చేయలేదు. sorry!" },
            },
          ],
        },
        {
          partner: "So, shall we meet tomorrow instead?",
          te: "అయితే, బదులుగా రేపు కలుద్దామా?",
          hint: { en: "Agree, and offer to buy her a coffee.", te: "సరే అని, ఆవిడకి కాఫీ ఇప్పిస్తానని చెప్పండి." },
          replies: [
            { say: "Yes, please. And let me buy you a coffee.", good: true },
            { say: "Yes, please. And I will buying you a coffee.", good: false },
          ],
        },
        {
          partner: "Lovely! Five o'clock at the same bus stand?",
          te: "బాగుంది! అదే బస్ స్టాండ్‌లో ఐదింటికి?",
          hint: { en: "Agree, and say goodbye warmly.", te: "సరే అని, ఆప్యాయంగా వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Perfect. See you tomorrow at five!", good: true },
            { say: "Perfect. See you tomorrow on five!", good: false, fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A call from the gas agency", te: "గ్యాస్ ఏజెన్సీ నుండి ఫోన్" },
      scene: {
        en: "Krishna from the gas agency calls about the papers for your new connection.",
        te: "మీ కొత్త కనెక్షన్ కాగితాల గురించి గ్యాస్ ఏజెన్సీ నుండి కృష్ణ గారు ఫోన్ చేశారు.",
      },
      partner: { en: "Krishna (gas agency)", te: "కృష్ణ (గ్యాస్ ఏజెన్సీ)" },
      voice: "b",
      skills: [
        { id: "clear", label: { en: "Clear English", te: "స్పష్టమైన ఇంగ్లీష్" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning, gas agency here. May I know your name?",
          te: "నమస్కారం, గ్యాస్ ఏజెన్సీ నుండి. మీ పేరు తెలుసుకోవచ్చా?",
          hint: { en: "Greet him, and give your name the clear way.", te: "నమస్కారం చెప్పి, మీ పేరు స్పష్టంగా చెప్పండి." },
          replies: [
            { say: "Good morning. I'm Kiran.", good: true, skill: "clear" },
            { say: "Good morning. Myself Kiran.", good: false, skill: "clear", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Your papers are not complete. The address proof is missing.",
          te: "మీ కాగితాలు పూర్తిగా లేవు. అడ్రస్ ప్రూఫ్ లేదు.",
          hint: { en: "Say sorry, and ask what you should do now.", te: "sorry చెప్పి, ఇప్పుడు ఏం చేయాలో అడగండి." },
          replies: [
            { say: "Oh, sorry about that. What should I do now?", good: true, skill: "clear" },
            {
              say: "Oh. Kindly do the needful.",
              good: false,
              skill: "clear",
              fixIt: "indian-english",
              react: { en: "Sorry? You have to send it, not me.", te: "అంటే? అది మీరే పంపాలి, నేను కాదు." },
            },
          ],
        },
        {
          partner: "Please send a photo of it on WhatsApp.",
          te: "దాని ఫోటో వాట్సాప్‌లో పంపండి.",
          hint: { en: "Agree, and say you will send it this evening.", te: "సరే అని, ఈ సాయంత్రం పంపిస్తానని చెప్పండి." },
          replies: [
            { say: "Sure. I'll send it this evening.", good: true, skill: "clear" },
            { say: "Sure. I'll send it today evening.", good: false, skill: "clear", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Thank you. We'll reply in two days.",
          te: "థ్యాంక్స్. రెండు రోజుల్లో జవాబు ఇస్తాం.",
          hint: { en: "Thank him, and end the call nicely.", te: "థ్యాంక్స్ చెప్పి, మర్యాదగా ఫోన్ ముగించండి." },
          replies: [
            { say: "Thank you for calling. Have a nice day!", good: true, skill: "polite" },
            {
              say: "Two days? Do it fast, okay?",
              good: false,
              skill: "polite",
              react: { en: "We'll try our best. Have a nice day.", te: "మా వంతు ప్రయత్నం చేస్తాం. మీ రోజు బాగా గడవాలి." },
            },
          ],
        },
      ],
    },
  ],
};

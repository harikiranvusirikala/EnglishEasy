import type { ConversationDay } from "../../types";

/** Week 77, Day 6 (CURRICULUM §5): Conversation Day — buying tickets and talking about a film afterwards; recommending a show to a neighbour. */
export const day: ConversationDay = {
  id: "w77-conversation",
  kind: "conversation",
  title: { en: "A Film at the Theatre", te: "థియేటర్‌లో సినిమా" },
  summary: {
    en: "Use the whole week: buy tickets for a film, talk about it afterwards, and recommend a show to a neighbour.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: సినిమాకి టికెట్లు కొనండి, తర్వాత దాని గురించి మాట్లాడండి, పక్కింటివారికి ఒక షో సూచించండి.",
  },
  topics: ["feelings", "people", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "After the evening show", te: "సాయంత్రం షో అయ్యాక" },
    lines: [
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "Joseph, that was such a good film! Did you enjoy it?", te: "జోసెఫ్ గారూ, ఎంత మంచి సినిమానో! మీకు నచ్చిందా?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "The first half was exciting, but I was bored after the interval.", te: "ఫస్ట్ హాఫ్ ఉత్సాహంగా సాగింది, కానీ ఇంటర్వెల్ తర్వాత నాకు బోర్ కొట్టింది." },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "Really? I thought the second half was the best part.", te: "నిజమా? సెకండ్ హాఫే బాగుందని నాకు అనిపించింది." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "The songs were so long. I nearly fell asleep!", te: "పాటలు మరీ సాగాయి. నాకు దాదాపు నిద్ర వచ్చేసింది!" },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "But the ending was so surprising. Nobody expected it.", te: "కానీ ముగింపు ఎంతో ఆశ్చర్యపరిచింది. ఎవరూ ఊహించలేదు." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "That's true. Everyone in the theatre was surprised.", te: "నిజమే. థియేటర్‌లో అందరూ ఆశ్చర్యపోయారు." },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "The old actor who played the grandfather was wonderful.", te: "తాతయ్య పాత్ర చేసిన ఆ పెద్ద నటుడు అద్భుతంగా చేశారు." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Yes, he's such a good actor. I've seen all his films.", te: "అవును, ఆయన ఎంత మంచి నటుడో. ఆయన సినిమాలన్నీ చూశాను." },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "Next week, let's watch something funny.", te: "వచ్చే వారం ఏదైనా నవ్వించే సినిమా చూద్దాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Good idea. But this time, I'm choosing the film!", te: "మంచి ఆలోచన. కానీ ఈసారి సినిమా నేను ఎంచుకుంటాను!" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A film they just watched", "A new serial on TV", "Buying cinema tickets"],
        answer: 0,
      },
      {
        prompt: { en: "When did Joseph get bored?", te: "జోసెఫ్ గారికి ఎప్పుడు బోర్ కొట్టింది?" },
        options: ["After the interval", "In the first half", "At the ending"],
        answer: 0,
      },
      {
        prompt: { en: "What did Rani say about the ending?", te: "ముగింపు గురించి రాణి గారు ఏమన్నారు?" },
        options: ["It was so surprising.", "It was very short.", "It had a good song."],
        answer: 0,
      },
      {
        prompt: { en: "What will they watch next week?", te: "వచ్చే వారం వాళ్ళు ఏం చూస్తారు?" },
        options: ["Something funny", "An old classic", "A quiz show"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the ticket counter, ask politely for two tickets for the evening show.",
        te: "టికెట్ కౌంటర్ దగ్గర సాయంత్రం షోకి రెండు టికెట్లు మర్యాదగా అడగండి.",
      },
      expected: ["Two tickets for the evening show, please.", "Can I have two tickets for the evening show?", "Could I have two tickets for the evening show, please?"],
      options: ["Two tickets for the evening show, please.", "Two ticket for the evening show, please.", "Give me two tickets for evening show."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend asks how you felt in the second half. You felt sleepy and bored.",
        te: "సెకండ్ హాఫ్‌లో మీకు ఎలా అనిపించిందని స్నేహితులు అడుగుతున్నారు. మీకు నిద్ర వచ్చింది, బోర్ కొట్టింది.",
      },
      expected: ["I was bored in the second half.", "I was a bit bored in the second half.", "The second half was boring."],
      options: ["I was bored in the second half.", "I bored in the second half.", "I was boring in the second half."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your neighbour asks about the new quiz show. Tell her it's very good, and she should watch it.",
        te: "కొత్త క్విజ్ షో గురించి పక్కింటావిడ అడుగుతున్నారు. చాలా బాగుందని, ఆవిడ తప్పకుండా చూడాలని చెప్పండి.",
      },
      expected: ["It's really good. You should watch it.", "It's so good. You should watch it.", "It's such a good show. You should watch it."],
      options: ["It's really good. You should watch it.", "It's too good. You should watch it.", "It's such good show. You should watch it."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "At the ticket counter", te: "టికెట్ కౌంటర్ దగ్గర" },
      scene: {
        en: "You are at a theatre in Vijayawada to buy tickets for the evening show for you and a friend.",
        te: "మీకు, మీ స్నేహితులకి సాయంత్రం షో టికెట్లు కొనడానికి విజయవాడలో ఒక థియేటర్‌కి వచ్చారు.",
      },
      partner: { en: "Ramesh (at the ticket counter)", te: "రమేష్ (టికెట్ కౌంటర్ దగ్గర)" },
      voice: "b",
      skills: [
        { id: "tickets", label: { en: "Buying tickets", te: "టికెట్లు కొనడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening. Which show, please?",
          te: "నమస్కారం. ఏ షోకి కావాలి?",
          hint: { en: "Greet him, and ask for two tickets for the six o'clock show.", te: "నమస్కారం చెప్పి, ఆరింటి షోకి రెండు టికెట్లు అడగండి." },
          replies: [
            { say: "Good evening. Two tickets for the six o'clock show, please.", good: true, skill: "tickets" },
            {
              say: "Two tickets. Quickly, I'm in a hurry.",
              good: false,
              skill: "polite",
              react: { en: "One minute, please. I'm going as fast as I can.", te: "ఒక్క నిమిషం అండీ. వీలైనంత త్వరగానే చేస్తున్నాను." },
            },
          ],
        },
        {
          partner: "Balcony or first class? Balcony is 200 rupees.",
          te: "బాల్కనీ కావాలా, ఫస్ట్ క్లాసా? బాల్కనీ 200 రూపాయలు.",
          hint: { en: "Choose the balcony, and ask for seats near the aisle.", te: "బాల్కనీ ఎంచుకుని, దారి పక్కన సీట్లు అడగండి." },
          replies: [
            { say: "Balcony, please. Can we have seats near the aisle?", good: true, skill: "tickets" },
            { say: "Balcony, please. Can we have seat near the aisle?", good: false, skill: "tickets", fixIt: "plural" },
          ],
        },
        {
          partner: "Row F, seats 10 and 11. That's 400 rupees.",
          te: "F వరస, 10, 11 సీట్లు. మొత్తం 400 రూపాయలు.",
          hint: { en: "Ask if you can pay by UPI.", te: "UPI తో కట్టొచ్చా అని అడగండి." },
          replies: [
            { say: "Can I pay by UPI?", good: true, skill: "tickets" },
            { say: "I can pay by UPI?", good: false, skill: "tickets", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, scan this code. The film is three hours long.",
          te: "అవునండీ, ఈ కోడ్ స్కాన్ చేయండి. సినిమా మూడు గంటలు.",
          hint: { en: "Ask what time the film ends.", te: "సినిమా ఎన్ని గంటలకి అయిపోతుందో అడగండి." },
          replies: [
            { say: "Oh! What time does it end?", good: true, skill: "tickets" },
            { say: "Oh! What time it ends?", good: false, skill: "tickets", fixIt: "question" },
          ],
        },
        {
          partner: "Around nine. Enjoy the film!",
          te: "దాదాపు తొమ్మిదింటికి. సినిమా ఎంజాయ్ చేయండి!",
          hint: { en: "Thank him, and wish him a good evening.", te: "థాంక్స్ చెప్పి, ఆయనకి మంచి సాయంత్రం అని చెప్పండి." },
          replies: [
            { say: "Thank you. Have a good evening!", good: true, skill: "polite" },
            { say: "Thanks you. Have a good evening!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A show for your neighbour", te: "పక్కింటావిడకి ఒక షో" },
      scene: {
        en: "Your neighbour Fatima sees you in the morning. She knows you went to the cinema last night.",
        te: "పొద్దున మీ పక్కింటావిడ ఫాతిమా గారు కలిశారు. నిన్న రాత్రి మీరు సినిమాకి వెళ్ళారని ఆవిడకి తెలుసు.",
      },
      partner: { en: "Fatima (your neighbour)", te: "ఫాతిమా (మీ పక్కింటావిడ)" },
      skills: [
        { id: "recommend", label: { en: "Talking about shows", te: "షోల గురించి మాట్లాడటం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! How was the film last night?",
          te: "గుడ్ మార్నింగ్! నిన్న రాత్రి సినిమా ఎలా ఉంది?",
          hint: { en: "Say it was good, but the second half was a little dull.", te: "బాగుందని, కానీ సెకండ్ హాఫ్ కొంచెం బోర్ కొట్టిందని చెప్పండి." },
          replies: [
            { say: "It was good, but the second half was a bit boring.", good: true, skill: "recommend" },
            { say: "It was good, but the second half was a bit bored.", good: false, skill: "recommend" },
          ],
        },
        {
          partner: "Oh. These days I'm bored at home in the evenings.",
          te: "ఓ. ఈ మధ్య సాయంత్రాలు ఇంట్లో నాకు బోర్ కొడుతోంది.",
          hint: { en: "Suggest the quiz show you watch at eight, and say why.", te: "మీరు ఎనిమిదింటికి చూసే క్విజ్ షో సూచించి, ఎందుకో చెప్పండి." },
          replies: [
            { say: "Why don't you watch the quiz show at eight? It's very interesting.", good: true, skill: "recommend" },
            { say: "Why don't you watch the quiz show at eight? It's very interested.", good: false, skill: "recommend" },
          ],
        },
        {
          partner: "A quiz show? Isn't it only for young people?",
          te: "క్విజ్ షోనా? అది యువకుల కోసమే కదా?",
          hint: { en: "Say no, and that the contestants are all over sixty.", te: "కాదని చెప్పి, పోటీదారులంతా అరవై దాటినవారేనని చెప్పండి." },
          replies: [
            { say: "No, it isn't. The contestants are all over sixty!", good: true, skill: "recommend" },
            { say: "Yes, it isn't. The contestants are all over sixty!", good: false, skill: "recommend", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Really? That sounds exciting. Which channel is it on?",
          te: "నిజమా? భలే ఉత్సాహంగా ఉంది. ఏ ఛానల్‌లో వస్తుంది?",
          hint: { en: "Offer to send her the channel name on WhatsApp.", te: "ఛానల్ పేరు WhatsApp లో పంపుతానని చెప్పండి." },
          replies: [
            { say: "I'll send you the channel name on WhatsApp.", good: true, skill: "polite" },
            {
              say: "Find it yourself. It's easy.",
              good: false,
              skill: "polite",
              react: { en: "Oh. I thought you would help me.", te: "ఓ. మీరు సాయం చేస్తారనుకున్నాను." },
            },
          ],
        },
        {
          partner: "Thank you! Let's talk about it tomorrow.",
          te: "థాంక్స్! రేపు దాని గురించి మాట్లాడుకుందాం.",
          hint: { en: "Agree, and end the chat kindly.", te: "ఒప్పుకుని, మాటలు మర్యాదగా ముగించండి." },
          replies: [
            { say: "Sure. Enjoy the show, Fatima!", good: true, skill: "polite" },
            { say: "Sure. Enjoy show, Fatima!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

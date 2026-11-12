import type { ConversationDay } from "../../types";

/** Week 44, Day 6 (CURRICULUM §5): Conversation Day — buying clothes for a wedding, and exchanging the wrong size. */
export const day: ConversationDay = {
  id: "w44-conversation",
  kind: "conversation",
  title: { en: "Clothes for a Wedding", te: "పెళ్లికి బట్టలు" },
  summary: {
    en: "Use the whole week: buy clothes for a wedding, and exchange a shirt that is the wrong size.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పెళ్లికి బట్టలు కొనండి, సైజు సరిపోని చొక్కాని మార్చుకోండి.",
  },
  topics: ["shopping", "festivals", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A kurta for a wedding", te: "పెళ్లికి కుర్తా" },
    lines: [
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Good morning. I need clothes for my cousin's wedding next week.", te: "నమస్కారం. వచ్చే వారం మా కజిన్ పెళ్లి. బట్టలు కావాలి." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Welcome! What are you looking for, a kurta or a shirt?", te: "రండి! ఏం చూస్తున్నారు, కుర్తానా, చొక్కానా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "A nice silk kurta, please. A light colour, not too dark.", te: "ఒక మంచి పట్టు కుర్తా ఇవ్వండి. లేత రంగు, మరీ ముదురు కాకుండా." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "This cream one is the most popular, and the cheapest silk kurta.", te: "ఈ క్రీమ్ రంగుది అన్నిటికంటే ఎక్కువ అమ్ముడవుతుంది. పట్టు కుర్తాల్లో ఇదే చవక కూడా." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "It looks nice. Can I try it on?", te: "బాగుంది. వేసుకుని చూడొచ్చా?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Of course. The trial room is on the left.", te: "తప్పకుండా. ట్రయల్ రూమ్ ఎడమవైపు ఉంది." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "It's a little loose. Do you have a smaller size?", te: "కొంచెం లూజుగా ఉంది. ఇంకా చిన్న సైజు ఉందా?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Yes, here's a medium. Our tailor can make the sleeves shorter, too.", te: "ఉంది, ఇదిగోండి medium. మా టైలర్ చేతులు పొట్టిగా కూడా చేస్తారు." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Good. When will it be ready? The wedding is on Sunday.", te: "మంచిది. ఎప్పటికి రెడీ అవుతుంది? పెళ్లి ఆదివారం." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "By Friday evening. It's 1800 rupees with the alteration.", te: "శుక్రవారం సాయంత్రానికి. ఆల్టరేషన్‌తో కలిపి 1800 రూపాయలు." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a cloth shop", "At a wedding", "At a bank"],
        answer: 0,
      },
      {
        prompt: { en: "What does Narayana want?", te: "నారాయణ గారికి ఏం కావాలి?" },
        options: ["A silk kurta", "A cotton shirt", "A silk saree"],
        answer: 0,
      },
      {
        prompt: { en: "What is wrong with the first kurta?", te: "మొదటి కుర్తాతో సమస్య ఏంటి?" },
        options: ["It is a little loose.", "It is too tight.", "It is too dark."],
        answer: 0,
      },
      {
        prompt: { en: "When will the kurta be ready?", te: "కుర్తా ఎప్పటికి రెడీ అవుతుంది?" },
        options: ["By Friday evening", "On Sunday", "Next week"],
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
        en: "At the shop, ask which kurta is the most popular.",
        te: "షాపులో ఏ కుర్తా అన్నిటికంటే ఎక్కువ అమ్ముడవుతుందో అడగండి.",
      },
      expected: ["Which kurta is the most popular?", "Which one is the most popular?"],
      options: ["Which kurta is the most popular?", "Which kurta the most popular is?", "Which kurta is the popularest?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "A friend asks: Haven't you bought your wedding clothes yet? You have not. Answer.",
        te: "Haven't you bought your wedding clothes yet? అని స్నేహితులు అడుగుతున్నారు. మీరు ఇంకా కొనలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't bought them yet.", "No, I haven't. I'll buy them tomorrow.", "No, not yet."],
      options: ["No, I haven't bought them yet.", "Yes, I haven't bought them yet.", "Yes, I have not yet."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "You need two pairs of trousers for the wedding trip. Tell the shop assistant.",
        te: "పెళ్లి ప్రయాణానికి మీకు రెండు ప్యాంట్లు కావాలి. షాపులో అసిస్టెంట్‌కి చెప్పండి.",
      },
      expected: ["I need two pairs of trousers, please.", "Two pairs of trousers, please.", "Can I have two pairs of trousers?"],
      options: ["I need two pairs of trousers, please.", "I need two pants, please.", "I need two pair of trousers, please."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Buying clothes for a wedding", te: "పెళ్లికి బట్టలు కొనడం" },
      scene: {
        en: "Your friend Ramesh's daughter is getting married next month. You go to Grace's shop for something new to wear.",
        te: "మీ స్నేహితుడు రమేష్ గారి అమ్మాయి పెళ్లి వచ్చే నెల. కొత్త బట్టల కోసం గ్రేస్ గారి షాపుకి వెళ్ళారు.",
      },
      partner: { en: "Grace (shop owner)", te: "గ్రేస్ (షాపు ఓనర్)" },
      skills: [
        { id: "choose", label: { en: "Choosing clothes", te: "బట్టలు ఎంచుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! Are you shopping for a function?",
          te: "నమస్కారం! ఏదైనా ఫంక్షన్ కోసం షాపింగా?",
          hint: { en: "Say yes, and tell her about the wedding of Ramesh's daughter next month.", te: "అవునని చెప్పి, వచ్చే నెల రమేష్ గారి అమ్మాయి పెళ్లి గురించి చెప్పండి." },
          replies: [
            { say: "Yes, my friend Ramesh's daughter is getting married next month.", good: true, skill: "choose" },
            { say: "Yes, my friend Ramesh daughter is getting married next month.", good: false, skill: "choose" },
          ],
        },
        {
          partner: "Congratulations! What would you like to see?",
          te: "శుభాకాంక్షలు! ఏం చూపించమంటారు?",
          hint: { en: "Say what you want: silk, and a light colour.", te: "ఏం కావాలో చెప్పండి: పట్టు, లేత రంగు." },
          replies: [
            { say: "I'd like something nice in silk, in a light colour.", good: true, skill: "choose" },
            { say: "I'd like something nice in silk, in light colour.", good: false, skill: "choose", fixIt: "article" },
          ],
        },
        {
          partner: "This pink one is the latest. The blue one is the cheapest.",
          te: "ఈ గులాబీ రంగుది సరికొత్త డిజైన్. నీలం రంగుది అన్నిటికంటే చవక.",
          hint: { en: "Ask which one she thinks is the best for a wedding.", te: "పెళ్లికి ఏది అన్నిటికంటే బాగుంటుందని ఆవిడ అనుకుంటున్నారో అడగండి." },
          replies: [
            { say: "Which one is the best for a wedding?", good: true, skill: "choose" },
            { say: "Which one do you suggest for a wedding?", good: true, skill: "choose" },
            { say: "Which one is more best for a wedding?", good: false, skill: "choose" },
          ],
        },
        {
          partner: "For a wedding, the pink one. It's 3200 rupees.",
          te: "పెళ్లికి అయితే గులాబీ రంగుది. 3200 రూపాయలు.",
          hint: { en: "Say it is a bit costly, and ask politely for a small discount.", te: "కొంచెం ఖరీదని చెప్పి, కొంచెం తగ్గించమని మర్యాదగా అడగండి." },
          replies: [
            { say: "It's a little costly. Can you give a small discount?", good: true, skill: "polite" },
            {
              say: "3200? That's daylight robbery!",
              good: false,
              skill: "polite",
              react: { en: "No, no! It's pure silk. But I can give a small discount.", te: "లేదండీ! ఇది అసలైన పట్టు. కానీ కొంచెం తగ్గిస్తాను." },
            },
          ],
        },
        {
          partner: "Okay, 3000 for you. Shall I pack it?",
          te: "సరే, మీకు 3000. pack చేయనా?",
          hint: { en: "Say yes, and thank her.", te: "సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, please. Thank you so much for the discount!", good: true, skill: "polite" },
            { say: "Yes, please. Thank you so much for discount!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Exchanging the wrong size", te: "సైజు సరిపోని బట్ట మార్చడం" },
      scene: {
        en: "Yesterday you bought a shirt at Srinivas's shop. At home, you found it is too tight. You go back with the bill.",
        te: "నిన్న శ్రీనివాస్ గారి షాపులో ఒక చొక్కా కొన్నారు. ఇంటికి వెళ్ళాక అది చాలా బిగుతుగా ఉందని తెలిసింది. బిల్లు తీసుకుని మళ్ళీ వెళ్ళారు.",
      },
      partner: { en: "Srinivas (shop assistant)", te: "శ్రీనివాస్ (షాపు అసిస్టెంట్)" },
      voice: "b",
      skills: [
        { id: "exchange", label: { en: "Exchanging a size", te: "సైజు మార్చుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! How can I help you?",
          te: "నమస్కారం! చెప్పండి, ఏం కావాలి?",
          hint: { en: "Say you bought this shirt yesterday, but there is a problem with the size.", te: "నిన్న ఈ చొక్కా కొన్నారని, కానీ సైజుతో సమస్య ఉందని చెప్పండి." },
          replies: [
            { say: "I bought this shirt yesterday, but it's too tight.", good: true, skill: "exchange" },
            { say: "I buyed this shirt yesterday, but it's too tight.", good: false, skill: "exchange" },
          ],
        },
        {
          partner: "Oh, sorry. Do you have the bill with you?",
          te: "అయ్యో, సారీ. బిల్లు మీ దగ్గర ఉందా?",
          hint: { en: "Say yes, and give it to him.", te: "ఉందని చెప్పి, ఆయనకి ఇవ్వండి." },
          replies: [
            { say: "Yes, here it is.", good: true, skill: "exchange" },
            { say: "Yes, here is it.", good: false, skill: "exchange" },
          ],
        },
        {
          partner: "Thank you. Didn't you try it on in the shop?",
          te: "థాంక్స్. షాపులోనే వేసుకుని చూడలేదా?",
          hint: { en: "Say you did not, because you were in a hurry.", te: "చూడలేదని, అప్పుడు హడావుడిలో ఉన్నారని చెప్పండి." },
          replies: [
            { say: "No, I didn't. I was in a hurry.", good: true, skill: "exchange" },
            { say: "Yes, I didn't. I was in a hurry.", good: false, skill: "exchange", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "No problem. What size do you need?",
          te: "పర్లేదు. మీకు ఏ సైజు కావాలి?",
          hint: { en: "Ask for one size bigger: a large.", te: "ఒక సైజు పెద్దది అడగండి: large." },
          replies: [
            { say: "Can I have a large, please?", good: true, skill: "exchange" },
            { say: "A bigger size, please. A large.", good: true, skill: "exchange" },
            {
              say: "Bigger, obviously! Can't you see?",
              good: false,
              skill: "polite",
              react: { en: "Sorry, sorry. Here's a large.", te: "సారీ అండీ. ఇదిగోండి large." },
            },
          ],
        },
        {
          partner: "Here's a large. Please try it on this time!",
          te: "ఇదిగోండి large. ఈసారి వేసుకుని చూడండి!",
          hint: { en: "Say it is just right now, and thank him.", te: "ఇప్పుడు సరిగ్గా సరిపోయిందని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "It fits well now. Thank you for your help!", good: true, skill: "polite" },
            { say: "It is fitting well now. Thank you for your help!", good: false, skill: "polite", fixIt: "state-ing" },
          ],
        },
      ],
    },
  ],
};

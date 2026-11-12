import type { ConversationDay } from "../../types";

/** Week 72, Day 6 (CURRICULUM §5): Conversation Day — will the colony function go ahead with a cyclone forecast? */
export const day: ConversationDay = {
  id: "w72-conversation",
  kind: "conversation",
  title: { en: "Will the Function Go Ahead?", te: "ఫంక్షన్ జరుగుతుందా?" },
  summary: {
    en: "Use the whole week: plan a colony function when a cyclone might come, and help a friend who is not sure about his train.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: తుఫాను రావచ్చు అన్నప్పుడు కాలనీ ఫంక్షన్ ప్లాన్ చేయండి, రైలు గురించి ఖచ్చితంగా తెలీని స్నేహితుడికి సాయం చేయండి.",
  },
  topics: ["weather", "festivals", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Rain on Dasara?", te: "దసరాకి వర్షమా?" },
    lines: [
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Mohan, have you seen the forecast? A cyclone might come on Friday.", te: "మోహన్ గారూ, forecast చూశారా? శుక్రవారం తుఫాను రావచ్చు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Yes, I saw it. Will our Dasara function still go ahead?", te: "అవును, చూశాను. మన దసరా ఫంక్షన్ అనుకున్నట్టే జరుగుతుందా?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I'm not sure yet. It's in the park, so rain is a problem.", te: "ఇంకా ఖచ్చితంగా తెలీదు. ఫంక్షన్ పార్క్‌లో కదా, అందుకే వర్షం ఒక సమస్య." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Perhaps we can move it to the community hall.", te: "కమ్యూనిటీ హాల్‌కి మార్చొచ్చేమో." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Good idea. But the hall might be too small for everyone.", te: "మంచి ఆలోచన. కానీ అందరికీ హాల్ సరిపోకపోవచ్చు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "The cyclone will probably cross the coast on Thursday night.", te: "తుఫాను బహుశా గురువారం రాత్రి తీరం దాటుతుంది." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Then the rain might stop by Saturday morning.", te: "అయితే శనివారం పొద్దుటికల్లా వర్షం ఆగొచ్చు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Let's keep both plans ready, the park and the hall.", te: "రెండు ప్లాన్లూ రెడీగా ఉంచుదాం, పార్కూ హాలూ." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Yes. I'll send a message to the colony group tonight.", te: "అవును. ఈ రాత్రి కాలనీ గ్రూప్‌కి మెసేజ్ పెడతాను." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "And I'll definitely help with the chairs. Don't worry!", te: "కుర్చీల పని నేను తప్పకుండా చూసుకుంటాను. కంగారు పడకండి!" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A colony function and the weather", "A trip to the beach", "Building a new community hall"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the function now?", te: "ఇప్పుడు ఫంక్షన్ ఎక్కడ ఉంది?" },
        options: ["In the park", "In the community hall", "At the temple"],
        answer: 0,
      },
      {
        prompt: { en: "What is the problem with the hall?", te: "హాల్‌తో సమస్య ఏంటి?" },
        options: ["It might be too small", "It is far away", "It is closed on Saturday"],
        answer: 0,
      },
      {
        prompt: { en: "What will Mohan do?", te: "మోహన్ గారు ఏం చేస్తారు?" },
        options: ["Help with the chairs", "Send a message to the group", "Cook for everyone"],
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
        en: "Ask the colony president if the function will still go ahead.",
        te: "ఫంక్షన్ అనుకున్నట్టే జరుగుతుందా అని కాలనీ ప్రెసిడెంట్ గారిని అడగండి.",
      },
      expected: ["Will the function still go ahead?", "Will the function go ahead?", "Is the function still going ahead?"],
      options: ["Will the function still go ahead?", "The function will still go ahead?", "Will the function still goes ahead?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "A neighbour asks if the rain will stop by Saturday. You think it is possible. Answer.",
        te: "శనివారానికల్లా వర్షం ఆగుతుందా అని పక్కింటివారు అడుగుతున్నారు. ఆగొచ్చు అని మీకు అనిపిస్తోంది. జవాబు చెప్పండి.",
      },
      expected: ["It might stop by Saturday.", "It might stop by Saturday morning.", "Maybe it will stop by Saturday."],
      options: ["It might stop by Saturday.", "It might stops by Saturday.", "It might be stop by Saturday."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your friend asks: You won't come if it rains? You will come anyway. Answer.",
        te: "'వర్షం పడితే మీరు రారా?' అని స్నేహితులు అడుగుతున్నారు. మీరు ఎలాగైనా వస్తారు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I'll definitely come.", "Yes, I will. I'll definitely come.", "Of course I'll come."],
      options: ["Yes, I'll definitely come.", "No, I'll definitely come.", "Yes, I'll definitely coming."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A cyclone before Dasara", te: "దసరా ముందు తుఫాను" },
      scene: {
        en: "The colony's Dasara function is on Saturday, in the park. A cyclone is coming. Kavitha, the secretary, calls you.",
        te: "కాలనీ దసరా ఫంక్షన్ శనివారం, పార్క్‌లో. తుఫాను వస్తోంది. సెక్రటరీ కవిత గారు మీకు ఫోన్ చేశారు.",
      },
      partner: { en: "Kavitha (colony secretary)", te: "కవిత (కాలనీ సెక్రటరీ)" },
      skills: [
        { id: "possible", label: { en: "Talking about what might happen", te: "జరగొచ్చు అనేదాని గురించి మాట్లాడటం" } },
        { id: "help", label: { en: "Offering help", te: "సాయం చేస్తాననడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Did you hear? A cyclone might hit the coast on Friday.",
          te: "హలో! విన్నారా? శుక్రవారం తుఫాను తీరాన్ని తాకొచ్చు.",
          hint: { en: "Say you heard, and ask if the function is still on.", te: "విన్నానని చెప్పి, ఫంక్షన్ అనుకున్నట్టే ఉందా అని అడగండి." },
          replies: [
            { say: "Yes, I heard. Will the function still go ahead?", good: true, skill: "possible" },
            { say: "Yes, I heard. The function will still go ahead?", good: false, skill: "possible", fixIt: "question" },
          ],
        },
        {
          partner: "I'm not sure. The park might be full of water.",
          te: "ఖచ్చితంగా తెలీదు. పార్క్ అంతా నీళ్ళతో నిండిపోవచ్చు.",
          hint: { en: "Suggest the community hall as a possible plan.", te: "కమ్యూనిటీ హాల్‌ని ఒక ప్లాన్‌గా సూచించండి." },
          replies: [
            { say: "Perhaps we can use the community hall instead.", good: true, skill: "possible" },
            { say: "Maybe we can move it to the community hall.", good: true, skill: "possible" },
            {
              say: "Then cancel it. Who will come in the rain?",
              good: false,
              skill: "polite",
              react: { en: "Many people will come! Let's not give up so quickly.", te: "చాలామంది వస్తారండీ! అంత త్వరగా వదిలేయొద్దు." },
            },
          ],
        },
        {
          partner: "Good idea. But the hall might not have enough chairs.",
          te: "మంచి ఆలోచన. కానీ హాల్‌లో సరిపడా కుర్చీలు ఉండకపోవచ్చు.",
          hint: { en: "Offer to get chairs from the tent house, and say how many.", te: "టెంట్ హౌస్ నుంచి కుర్చీలు తెస్తానని, ఎన్నో చెప్పండి." },
          replies: [
            { say: "I can bring fifty chairs from the tent house.", good: true, skill: "help" },
            { say: "I can bring fifty chair from the tent house.", good: false, skill: "help", fixIt: "plural" },
          ],
        },
        {
          partner: "Wonderful! Will you come to help on Saturday morning?",
          te: "చాలా బాగుంది! శనివారం పొద్దున సాయానికి వస్తారా?",
          hint: { en: "Say you are sure you will come, and when you will probably arrive.", te: "తప్పకుండా వస్తానని, బహుశా ఎప్పుడు చేరుకుంటారో చెప్పండి." },
          replies: [
            { say: "I'll definitely come. I'll probably reach by eight.", good: true, skill: "help" },
            { say: "Definitely I come. Probably I reach by eight.", good: false, skill: "help" },
          ],
        },
        {
          partner: "Thank you! I'll send the final plan on Thursday.",
          te: "థాంక్యూ! గురువారం ఫైనల్ ప్లాన్ పంపిస్తాను.",
          hint: { en: "Say you will look out for her message, and say goodbye.", te: "ఆవిడ మెసేజ్ కోసం చూస్తుంటానని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Okay, I'll wait for your message. Bye!", good: true, skill: "polite" },
            { say: "Okay, I'll wait your message. Bye!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A train in the storm", te: "తుఫానులో రైలు ప్రయాణం" },
      scene: {
        en: "Your friend Rahim is coming from Hyderabad for the function. He calls you about his train.",
        te: "మీ స్నేహితుడు రహీమ్ గారు ఫంక్షన్ కోసం హైదరాబాద్ నుంచి వస్తున్నారు. తన రైలు గురించి మీకు ఫోన్ చేశారు.",
      },
      partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "possible", label: { en: "Talking about what might happen", te: "జరగొచ్చు అనేదాని గురించి మాట్లాడటం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! I'm coming for the function, but my train might be late.",
          te: "హలో! ఫంక్షన్‌కి వస్తున్నాను, కానీ నా రైలు ఆలస్యం కావచ్చు.",
          hint: { en: "Ask him the reason.", te: "కారణం ఏంటని ఆయన్ని అడగండి." },
          replies: [
            { say: "Oh no! Why? Is it because of the cyclone?", good: true, skill: "possible" },
            { say: "Oh no! Why it will be late?", good: false, skill: "possible", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, the cyclone. Trains on this route may stop for a few hours.",
          te: "అవును, తుఫాను. ఈ రూట్‌లో రైళ్ళు కొన్ని గంటలు ఆగిపోవచ్చు.",
          hint: { en: "Suggest a bus as a possible plan if the trains stop.", te: "రైళ్ళు ఆగిపోతే, బస్సుని ఒక ప్లాన్‌గా సూచించండి." },
          replies: [
            { say: "If the trains stop, perhaps you can take a bus.", good: true, skill: "possible" },
            { say: "If the trains will stop, perhaps you can take a bus.", good: false, skill: "possible" },
          ],
        },
        {
          partner: "The buses might not run either. I'm not sure what to do.",
          te: "బస్సులు కూడా తిరగకపోవచ్చు. ఏం చేయాలో తెలీడం లేదు.",
          hint: { en: "Tell him kindly not to travel in a cyclone; safety comes first.", te: "తుఫానులో ప్రయాణం చేయొద్దని ఆప్యాయంగా చెప్పండి; ముందు క్షేమం ముఖ్యం." },
          replies: [
            { say: "Please don't travel in the cyclone. Your safety comes first.", good: true, skill: "polite" },
            {
              say: "Just come somehow. Don't make excuses.",
              good: false,
              skill: "polite",
              react: { en: "Excuses? It's a cyclone, my friend!", te: "సాకులా? తుఫాను వస్తోంది కదండీ!" },
            },
          ],
        },
        {
          partner: "You're right. I might come next week instead.",
          te: "మీరు చెప్పింది నిజమే. బదులుగా వచ్చే వారం వస్తానేమో.",
          hint: { en: "Agree warmly, and say goodbye.", te: "ఆప్యాయంగా ఒప్పుకుని, బై చెప్పండి." },
          replies: [
            { say: "That's fine. Maybe next week, then. Stay safe!", good: true, skill: "polite" },
            { say: "That's fine. Maybe on next week, then. Stay safe!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

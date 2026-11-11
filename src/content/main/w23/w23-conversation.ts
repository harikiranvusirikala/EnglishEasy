import type { ConversationDay } from "../../types";

/** Week 23, Day 6 (CURRICULUM §4): Conversation Day — dinner with friends, ordering for a group, and guiding a delivery person by phone. */
export const day: ConversationDay = {
  id: "w23-conversation",
  kind: "conversation",
  title: { en: "Dinner with Friends", te: "స్నేహితులతో భోజనం" },
  summary: {
    en: "Use the whole week: order dinner for a group of friends, share the bill, and guide a delivery person to your house by phone.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: స్నేహితులతో కలిసి భోజనం ఆర్డర్ చేయండి, బిల్ పంచుకోండి, ఫోన్‌లో డెలివరీ చేసేవారికి మీ ఇంటికి దారి చెప్పండి.",
  },
  topics: ["food", "money", "directions"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Dinner at a restaurant", te: "హోటల్‌లో రాత్రి భోజనం" },
    lines: [
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "It's busy tonight. Is that table free?", te: "ఈ రోజు రాత్రి రద్దీగా ఉంది. ఆ టేబుల్ ఖాళీగా ఉందా?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Yes, it's free. Come, sit here.", te: "అవును, ఖాళీగానే ఉంది. రండి, ఇక్కడ కూర్చోండి." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "What would you like to eat?", te: "మీరు ఏం తింటారు?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I'll have the veg biryani. It's today's special.", te: "నేను వెజ్ బిర్యానీ తీసుకుంటాను. ఈ రోజు స్పెషల్ అదే." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Is it very spicy? I can't eat much chilli.", te: "అది చాలా కారంగా ఉంటుందా? నేను కారం ఎక్కువ తినలేను." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Ask for it less spicy. They will change it.", te: "కారం తక్కువగా అడగండి. వాళ్ళు మార్చి ఇస్తారు." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Good idea. I'll have it less spicy, then.", te: "మంచి ఆలోచన. అయితే నేను కారం తక్కువగా తీసుకుంటాను." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "After dinner, I'll pay the bill.", te: "భోజనం అయ్యాక బిల్ నేను కడతాను." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "No, no. Can we split the bill?", te: "వద్దు, వద్దు. బిల్ పంచుకుని కడదామా?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Okay, half and half. I'll pay by UPI.", te: "సరే, చెరి సగం. నేను UPI తో కడతాను." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a bank", "At a restaurant", "At a bus stand"],
        answer: 1,
      },
      {
        prompt: { en: "What will Sarala eat?", te: "సరళ గారు ఏం తింటారు?" },
        options: ["Veg biryani", "Masala dosa", "Two plates of idli"],
        answer: 0,
      },
      {
        prompt: { en: "Why does David want it less spicy?", te: "డేవిడ్ గారు కారం తక్కువగా ఎందుకు అడుగుతున్నారు?" },
        options: ["The table is not free.", "He has no money.", "He can't eat much chilli."],
        answer: 2,
      },
      {
        prompt: { en: "How do they pay?", te: "వాళ్ళు బిల్ ఎలా కడతారు?" },
        options: ["David pays it all.", "They split the bill.", "Sarala pays it all in cash."],
        answer: 1,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "You are with three friends. Ask the waiter for a table.",
        te: "మీతో ముగ్గురు స్నేహితులు ఉన్నారు. వెయిటర్‌ని టేబుల్ అడగండి.",
      },
      expected: ["A table for four, please.", "Can we have a table for four?", "There are four of us."],
      options: ["A table for four, please.", "We are four members.", "A table to four, please."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You don't want any onions in your food. Tell the waiter.",
        te: "మీ భోజనంలో ఉల్లిపాయలు అసలు వద్దు. వెయిటర్‌కి చెప్పండి.",
      },
      expected: ["Can I have it without onions?", "Without onions, please.", "No onions, please."],
      options: ["Can I have it without onions?", "Can I have it less onions?", "Onions without, please."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend wants to pay for everyone. Ask to share the bill.",
        te: "మీ స్నేహితులు అందరి బిల్ తామే కడతామన్నారు. బిల్ పంచుకుందామని అడగండి.",
      },
      expected: ["Can we split the bill?", "Can we split it?", "Can we share the bill?"],
      options: ["Can we split the bill?", "We can split the bill?", "Can we splitting the bill?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Ordering for the group", te: "అందరి కోసం ఆర్డర్" },
      scene: {
        en: "You come to a restaurant with three friends. Kumar, the waiter, meets you.",
        te: "మీరు ముగ్గురు స్నేహితులతో హోటల్‌కి వచ్చారు. వెయిటర్ కుమార్ ఎదురొచ్చారు.",
      },
      partner: { en: "Kumar (waiter)", te: "కుమార్ (వెయిటర్)" },
      voice: "b",
      skills: [
        { id: "table", label: { en: "Asking for a table", te: "టేబుల్ అడగడం" } },
        { id: "order", label: { en: "Ordering", te: "ఆర్డర్ చేయడం" } },
      ],
      turns: [
        {
          partner: "Good evening! A table for how many?",
          te: "నమస్కారం! ఎంత మందికి టేబుల్?",
          hint: { en: "Say how many you are: four.", te: "మీరు ఎంత మందో చెప్పండి: నలుగురు." },
          replies: [
            { say: "There are four of us.", good: true, skill: "table" },
            { say: "A table for four, please.", good: true, skill: "table" },
            { say: "We are four members.", good: false, skill: "table", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Please come. Are you ready to order?",
          te: "రండి. ఆర్డర్ చెప్తారా?",
          hint: { en: "Ask him what is good here.", te: "ఇక్కడ ఏది బాగుంటుందో ఆయననే అడగండి." },
          replies: [
            { say: "What do you recommend?", good: true, skill: "order" },
            { say: "What you recommend?", good: false, skill: "order", fixIt: "question" },
          ],
        },
        {
          partner: "Our veg meals are very good today.",
          te: "ఈ రోజు మా వెజ్ మీల్స్ చాలా బాగున్నాయి.",
          hint: { en: "Order meals for all four of you.", te: "మీ నలుగురికీ మీల్స్ ఆర్డర్ చేయండి." },
          replies: [
            { say: "Okay, we'll have four meals, please.", good: true, skill: "order" },
            { say: "Okay, we'll have four meal, please.", good: false, skill: "order", fixIt: "plural" },
          ],
        },
        {
          partner: "Sure. Normal spicy or less spicy?",
          te: "సరే. మామూలు కారమా, తక్కువ కారమా?",
          hint: { en: "Ask for less chilli. Say one friend can't eat chilli.", te: "కారం తక్కువగా అడగండి. మీ స్నేహితుల్లో ఒకరు కారం తినలేరని చెప్పండి." },
          replies: [
            { say: "Less spicy, please. One friend can't eat chilli.", good: true, skill: "order" },
            { say: "Spicy less, please. One friend can't eat chilli.", good: false, skill: "order" },
          ],
        },
        {
          partner: "Okay. Your food will come in ten minutes.",
          te: "సరే. పది నిమిషాల్లో మీ భోజనం వస్తుంది.",
          hint: { en: "Thank him.", te: "ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you very much.", good: true },
            {
              say: "Okay, come fast. We are very hungry!",
              good: false,
              react: { en: "Of course. I'll bring it hot and fast.", te: "తప్పకుండా. వేడిగా, తొందరగా తెస్తాను." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The delivery person can't find your house", te: "డెలివరీ చేసేవారికి మీ ఇల్లు దొరకలేదు" },
      scene: {
        en: "You ordered food on an app. Raju, the delivery person, calls you. He can't find your house.",
        te: "మీరు యాప్‌లో భోజనం ఆర్డర్ చేశారు. డెలివరీ చేసే రాజు ఫోన్ చేశారు. ఆయనకి మీ ఇల్లు దొరకలేదు.",
      },
      partner: { en: "Raju (delivery person)", te: "రాజు (డెలివరీ చేసేవారు)" },
      voice: "b",
      skills: [
        { id: "guide", label: { en: "Giving directions", te: "దారి చెప్పడం" } },
        { id: "polite", label: { en: "Staying polite", te: "మర్యాదగా ఉండడం" } },
      ],
      turns: [
        {
          partner: "Hello, I have your food order. Where is your house?",
          te: "హలో, మీ ఫుడ్ ఆర్డర్ నా దగ్గర ఉంది. మీ ఇల్లు ఎక్కడ?",
          hint: { en: "Give a landmark: the Ram temple, across the road from your house.", te: "ఒక గుర్తు చెప్పండి: మీ ఇంటికి ఎదురుగా రామాలయం ఉంది." },
          replies: [
            { say: "It's opposite the Ram temple.", good: true, skill: "guide" },
            { say: "It's opposite to the Ram temple.", good: false, skill: "guide", fixIt: "preposition" },
          ],
        },
        {
          partner: "I'm at the temple now. Which house?",
          te: "నేను ఇప్పుడు గుడి దగ్గర ఉన్నాను. ఏ ఇల్లు?",
          hint: { en: "Say it has a blue gate, beside the medical shop.", te: "నీలం గేట్ ఉన్న ఇల్లు, మెడికల్ షాప్ పక్కన అని చెప్పండి." },
          replies: [
            { say: "It has a blue gate, next to the medical shop.", good: true, skill: "guide" },
            { say: "It has a blue gate, next the medical shop.", good: false, skill: "guide", fixIt: "preposition" },
          ],
        },
        {
          partner: "Sorry, I can't see a medical shop.",
          te: "Sorry అండీ, నాకు మెడికల్ షాప్ కనిపించట్లేదు.",
          hint: { en: "Stay calm. Tell him to go to the corner and turn left.", te: "ప్రశాంతంగా ఉండండి. మూలకి వెళ్ళి ఎడమకి తిరగమని చెప్పండి." },
          replies: [
            { say: "Please go to the corner and turn left.", good: true, skill: "guide" },
            {
              say: "How can you not see it? Use your eyes!",
              good: false,
              skill: "polite",
              react: { en: "Sorry! It's very dark here. Please help me.", te: "Sorry అండీ! ఇక్కడ చాలా చీకటిగా ఉంది. కొంచెం సహాయం చేయండి." },
            },
          ],
        },
        {
          partner: "Okay, I turned left. I can see a blue gate.",
          te: "సరే, ఎడమకి తిరిగాను. నీలం గేట్ కనిపిస్తోంది.",
          hint: { en: "Say that is your house, and you are coming out now.", te: "అదే మీ ఇల్లు అని, ఇప్పుడే బయటికి వస్తున్నారని చెప్పండి." },
          replies: [
            { say: "Yes, that's my house. I'm coming out now.", good: true, skill: "guide" },
            { say: "Yes, that's my house. I'm come out now.", good: false, skill: "guide" },
          ],
        },
        {
          partner: "Here is your order. Have a nice dinner!",
          te: "ఇదిగోండి మీ ఆర్డర్. బాగా భోజనం చేయండి!",
          hint: { en: "Thank him for finding the way.", te: "దారి వెతుక్కుని వచ్చినందుకు ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you so much. Sorry for the trouble.", good: true, skill: "polite" },
            { say: "Thanks. You are very late, you know.", good: false, skill: "polite", react: { en: "Sorry, the traffic was very bad today.", te: "Sorry అండీ, ఈ రోజు ట్రాఫిక్ చాలా ఎక్కువగా ఉంది." } },
          ],
        },
      ],
    },
  ],
};

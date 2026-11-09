import type { ConversationDay } from "../../types";

/** Week 6, Day 6 (CURRICULUM §3): Conversation Day at lunch, and ordering food by phone. Food, offers, likes; no new grammar. */
export const day: ConversationDay = {
  id: "w6-conversation",
  kind: "conversation",
  title: { en: "Lunch at a Friend's House", te: "స్నేహితుల ఇంట్లో భోజనం" },
  summary: {
    en: "Use this week's food words: be a polite guest at lunch, and order food from a hotel by phone.",
    te: "ఈ వారం నేర్చుకున్న ఆహారం మాటలు వాడండి: భోజనానికి మర్యాదగల అతిథిగా ఉండండి, హోటల్‌కి ఫోన్ చేసి భోజనం ఆర్డర్ చేయండి.",
  },
  topics: ["food", "phone"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Jyothi comes for lunch", te: "భోజనానికి జ్యోతి గారు" },
    lines: [
      { speaker: { en: "John", te: "జాన్" }, voice: "b", en: "Welcome, Jyothi! Merry Christmas! Please sit.", te: "రండి జ్యోతి గారు! మెర్రీ క్రిస్మస్! కూర్చోండి." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Thank you. The food looks very good!", te: "థాంక్యూ. భోజనం చూస్తుంటేనే బాగుంది!" },
      { speaker: { en: "John", te: "జాన్" }, voice: "b", en: "I made pulihora and pesarattu myself.", te: "పులిహోర, పెసరట్టు నేనే చేశాను." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "I love pesarattu!", te: "నాకు పెసరట్టు అంటే చాలా ఇష్టం!" },
      { speaker: { en: "John", te: "జాన్" }, voice: "b", en: "Would you like some curd too?", te: "పెరుగు కూడా కావాలా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Yes, please. Just a little.", te: "అవును, ఇవ్వండి. కొంచెం చాలు." },
      { speaker: { en: "John", te: "జాన్" }, voice: "b", en: "Do you like spicy food?", te: "మీకు కారంగా ఉండేవి ఇష్టమా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "A little. Not too spicy, please.", te: "కొంచెం. మరీ కారం వద్దు." },
      { speaker: { en: "John", te: "జాన్" }, voice: "b", en: "How many pesarattus would you like?", te: "ఎన్ని పెసరట్లు కావాలి?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Two, please. Thank you, John!", te: "రెండు చాలు. థాంక్యూ జాన్ గారు!" },
    ],
    questions: [
      {
        prompt: { en: "What is this talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["Lunch at John's house", "Ordering food by phone", "Buying food at a shop"],
        answer: 0,
      },
      { prompt: { en: "What did John make?", te: "జాన్ గారు ఏం చేశారు?" }, options: ["Idli and dosa", "Pulihora and pesarattu", "Rice and curd"], answer: 1 },
      { prompt: { en: "Does Jyothi like spicy food?", te: "జ్యోతి గారికి కారంగా ఉండేవి ఇష్టమా?" }, options: ["Yes, very spicy", "A little, not too spicy", "She doesn't say"], answer: 1 },
      { prompt: { en: "How many pesarattus does Jyothi want?", te: "జ్యోతి గారికి ఎన్ని పెసరట్లు కావాలి?" }, options: ["One", "Two", "Three"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Your host offers more rice. Say yes, just a little.",
        te: "ఇంటివారు ఇంకొంచెం అన్నం వడ్డిస్తామంటున్నారు. కొంచెం చాలని చెప్పండి.",
      },
      expected: ["Yes, please. Just a little.", "Just a little, please."],
      options: ["Yes, please. Just a little.", "Yes, please. Little bit only.", "Okay, give."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Your host asks: Would you like a sweet? Say no, politely.",
        te: "ఇంటివారు అడుగుతున్నారు: Would you like a sweet? మర్యాదగా వద్దని చెప్పండి.",
      },
      expected: ["No, thank you.", "No, thank you. I am full."],
      options: ["No, I don't.", "No, thank you.", "No. Take it away."],
      answer: 1,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Tell your host you love the food.",
        te: "భోజనం చాలా నచ్చిందని ఇంటివారికి చెప్పండి.",
      },
      expected: ["I love the food.", "The food is very good.", "I love this food."],
      options: ["I love the food.", "I am loving the food.", "I loves the food."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A guest at lunch", te: "భోజనానికి అతిథిగా" },
      scene: {
        en: "Your friend Ayesha invites you for lunch on Ramzan. Be a polite guest.",
        te: "మీ స్నేహితురాలు ఆయేషా రంజాన్ రోజు మిమ్మల్ని భోజనానికి పిలిచారు. మర్యాదగల అతిథిగా ఉండండి.",
      },
      partner: { en: "Ayesha (your host)", te: "ఆయేషా (ఇంటావిడ)" },
      skills: [
        { id: "polite", label: { en: "Polite answers", te: "మర్యాద జవాబులు" } },
        { id: "food", label: { en: "Food words", te: "ఆహారం మాటలు" } },
      ],
      turns: [
        {
          partner: "Lunch is ready. Please come.",
          te: "భోజనం రెడీ. రండి.",
          hint: { en: "Thank her, and say something nice about the food.", te: "థాంక్స్ చెప్పి, భోజనం గురించి ఒక మంచి మాట చెప్పండి." },
          replies: [
            { say: "Thank you. The food looks very good.", good: true, skill: "food" },
            { say: "Thank you. The food look very good.", good: false, skill: "food" },
            {
              say: "Finally! I am very hungry.",
              good: false,
              skill: "polite",
              react: { en: "Sorry! Festival cooking takes time.", te: "sorry అండీ! పండగ వంట కదా, టైం పడుతుంది." },
            },
          ],
        },
        {
          partner: "Would you like some rice?",
          te: "కొంచెం అన్నం కావాలా?",
          hint: { en: "Accept it politely.", te: "మర్యాదగా సరే అనండి." },
          replies: [
            { say: "Yes, please.", good: true, skill: "polite" },
            { say: "Yes, I would like.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Do you like spicy food?",
          te: "మీకు కారంగా ఉండేవి ఇష్టమా?",
          hint: { en: "Say a little spice is fine, but not too much.", te: "కొంచెం కారం పర్లేదు, మరీ ఎక్కువ వద్దని చెప్పండి." },
          replies: [
            { say: "A little. Not too spicy, please.", good: true, skill: "food" },
            { say: "A little. Not too much spicy.", good: false, skill: "food" },
          ],
        },
        {
          partner: "Would you like some curd?",
          te: "పెరుగు కావాలా?",
          hint: { en: "Say yes, but only a small amount.", te: "సరే అని, కొంచెమే చాలని చెప్పండి." },
          replies: [
            { say: "Yes, please. Just a little.", good: true, skill: "polite" },
            { say: "Yes, please. Just little.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Some sweet now?",
          te: "ఇప్పుడు కొంచెం స్వీట్?",
          hint: { en: "Say no politely, and that you have eaten enough.", te: "మర్యాదగా వద్దనండి, కడుపు నిండిందని చెప్పండి." },
          replies: [
            { say: "No, thank you. I am full.", good: true, skill: "polite" },
            { say: "No, thanks you. I am full.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Ordering food by phone", te: "ఫోన్‌లో భోజనం ఆర్డర్" },
      scene: {
        en: "Guests are coming. Call Sri Krishna Hotel and order food.",
        te: "అతిథులు వస్తున్నారు. శ్రీ కృష్ణ హోటల్‌కి ఫోన్ చేసి భోజనం ఆర్డర్ చేయండి.",
      },
      partner: { en: "Mohan (at the hotel)", te: "మోహన్ (హోటల్‌లో)" },
      voice: "b",
      skills: [
        { id: "order", label: { en: "Ordering", te: "ఆర్డర్ చేయడం" } },
        { id: "many", label: { en: "One and many", te: "ఒకటి, చాలా" } },
      ],
      turns: [
        {
          partner: "Hello, Sri Krishna Hotel.",
          te: "హలో, శ్రీ కృష్ణ హోటల్.",
          hint: { en: "Say politely that you want to order food.", te: "భోజనం ఆర్డర్ చేయాలని మర్యాదగా చెప్పండి." },
          replies: [
            { say: "I would like to order some food.", good: true, skill: "order" },
            { say: "I would like order some food.", good: false, skill: "order" },
          ],
        },
        {
          partner: "Yes. What would you like?",
          te: "చెప్పండి. ఏం కావాలి?",
          hint: { en: "Order some idlis and dosas. Say how many.", te: "ఇడ్లీలు, దోసెలు ఆర్డర్ చేయండి. ఎన్నో చెప్పండి." },
          replies: [
            { say: "Four idlis and two dosas, please.", good: true, skill: "many" },
            { say: "Four idli and two dosa, please.", good: false, skill: "many" },
          ],
        },
        {
          partner: "Anything to drink?",
          te: "తాగడానికి ఏమైనా?",
          hint: { en: "Order coffee for two people.", te: "ఇద్దరికి కాఫీ ఆర్డర్ చేయండి." },
          replies: [
            { say: "Two coffees, please.", good: true, skill: "many" },
            { say: "Two coffee, please.", good: false, skill: "many" },
          ],
        },
        {
          partner: "Okay. It will come in thirty minutes.",
          te: "సరే. ముప్పై నిమిషాల్లో వస్తుంది.",
          hint: { en: "Say okay, and ask the price.", te: "సరే అని, ధర ఎంతో అడగండి." },
          replies: [
            { say: "Okay. How much is it?", good: true, skill: "order" },
            { say: "Okay. How many is it?", good: false, skill: "order" },
            {
              say: "Thirty? No! Send it in ten.",
              good: false,
              react: { en: "Sorry, we are very busy today.", te: "sorry అండీ, ఈ రోజు చాలా రద్దీగా ఉంది." },
            },
          ],
        },
      ],
    },
  ],
};

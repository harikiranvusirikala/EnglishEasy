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
    title: { en: "Ramana comes for lunch", te: "భోజనానికి రమణ" },
    lines: [
      { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "Welcome, Ramana! Please sit down.", te: "రండి రమణ! కూర్చోండి." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Thank you. The food looks very good!", te: "థాంక్యూ. భోజనం చాలా బాగుంది!" },
      { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "I made pulihora and pesarattu.", te: "నేను పులిహోర, పెసరట్టు చేశాను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "I love pesarattu!", te: "నాకు పెసరట్టు అంటే చాలా ఇష్టం!" },
      { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "Would you like some curd also?", te: "పెరుగు కూడా కావాలా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Yes, please. Just a little.", te: "అవును, కొంచెం చాలు." },
      { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "Do you like spicy food?", te: "మీకు కారంగా ఉండేవి ఇష్టమా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "No, not too spicy, please.", te: "లేదు, మరీ కారం వద్దు." },
      { speaker: { en: "Sita", te: "సీత" }, voice: "a", en: "How many pesarattus would you like?", te: "ఎన్ని పెసరట్లు కావాలి?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Two, please. Thank you, Sita!", te: "రెండు చాలు. థాంక్యూ సీత!" },
    ],
    questions: [
      { prompt: { en: "What did Sita make?", te: "సీత ఏం చేసింది?" }, options: ["Idli and dosa", "Pulihora and pesarattu", "Rice and curd"], answer: 1 },
      { prompt: { en: "Does Ramana like spicy food?", te: "రమణకి కారంగా ఉండేవి ఇష్టమా?" }, options: ["Yes, very much", "No, not too spicy", "He doesn't say"], answer: 1 },
      { prompt: { en: "How many pesarattus does Ramana want?", te: "రమణకి ఎన్ని పెసరట్లు కావాలి?" }, options: ["One", "Two", "Three"], answer: 1 },
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
      options: ["Yes, please. Just a little.", "Yes, please. Little bit only.", "Yes, I would. Little."],
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
      options: ["No, I don't.", "No, thank you.", "Not want."],
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
        en: "Your friend Sita invites you for lunch. Be a polite guest.",
        te: "మీ స్నేహితురాలు సీత మిమ్మల్ని భోజనానికి పిలిచింది. మర్యాదగల అతిథిగా ఉండండి.",
      },
      partner: { en: "Sita (your host)", te: "సీత (ఇంటావిడ)" },
      skills: [
        { id: "polite", label: { en: "Polite answers", te: "మర్యాద జవాబులు" } },
        { id: "food", label: { en: "Food words", te: "ఆహారం మాటలు" } },
      ],
      turns: [
        {
          partner: "Lunch is ready. Please come.",
          te: "భోజనం రెడీ. రండి.",
          hint: { en: "Say: Thank you. The food looks very good.", te: "ఇలా చెప్పండి: Thank you. The food looks very good." },
          replies: [
            { say: "Thank you. The food looks very good.", good: true, skill: "food" },
            { say: "Thank you. The food look very good.", good: false, skill: "food" },
          ],
        },
        {
          partner: "Would you like some rice?",
          te: "కొంచెం అన్నం కావాలా?",
          hint: { en: "Say: Yes, please.", te: "ఇలా చెప్పండి: Yes, please." },
          replies: [
            { say: "Yes, please.", good: true, skill: "polite" },
            { say: "Yes, I would like.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Do you like spicy food?",
          te: "మీకు కారంగా ఉండేవి ఇష్టమా?",
          hint: { en: "Say: A little. Not too spicy, please.", te: "ఇలా చెప్పండి: A little. Not too spicy, please." },
          replies: [
            { say: "A little. Not too spicy, please.", good: true, skill: "food" },
            { say: "A little. Not too much spicy.", good: false, skill: "food" },
          ],
        },
        {
          partner: "Would you like some curd?",
          te: "పెరుగు కావాలా?",
          hint: { en: "Say: Yes, please. Just a little.", te: "ఇలా చెప్పండి: Yes, please. Just a little." },
          replies: [
            { say: "Yes, please. Just a little.", good: true, skill: "polite" },
            { say: "Yes, please. Just little.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Some sweet now?",
          te: "ఇప్పుడు కొంచెం స్వీట్?",
          hint: { en: "Say no politely: No, thank you. I am full.", te: "మర్యాదగా వద్దనండి: No, thank you. I am full." },
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
      skills: [
        { id: "order", label: { en: "Ordering", te: "ఆర్డర్ చేయడం" } },
        { id: "many", label: { en: "One and many", te: "ఒకటి, చాలా" } },
      ],
      turns: [
        {
          partner: "Hello, Sri Krishna Hotel.",
          te: "హలో, శ్రీ కృష్ణ హోటల్.",
          hint: { en: "Say: I would like to order some food.", te: "ఇలా చెప్పండి: I would like to order some food." },
          replies: [
            { say: "I would like to order some food.", good: true, skill: "order" },
            { say: "I would like order some food.", good: false, skill: "order" },
          ],
        },
        {
          partner: "Yes. What would you like?",
          te: "చెప్పండి. ఏం కావాలి?",
          hint: { en: "Say: Four idlis and two dosas, please.", te: "ఇలా చెప్పండి: Four idlis and two dosas, please." },
          replies: [
            { say: "Four idlis and two dosas, please.", good: true, skill: "many" },
            { say: "Four idli and two dosa, please.", good: false, skill: "many" },
          ],
        },
        {
          partner: "Anything to drink?",
          te: "తాగడానికి ఏమైనా?",
          hint: { en: "Say: Two coffees, please.", te: "ఇలా చెప్పండి: Two coffees, please." },
          replies: [
            { say: "Two coffees, please.", good: true, skill: "many" },
            { say: "Two coffee, please.", good: false, skill: "many" },
          ],
        },
        {
          partner: "Okay. It will come in thirty minutes.",
          te: "సరే. ముప్పై నిమిషాల్లో వస్తుంది.",
          hint: { en: "Ask the price: How much is it?", te: "ధర అడగండి: How much is it?" },
          replies: [
            { say: "How much is it?", good: true, skill: "order" },
            { say: "How many is it?", good: false, skill: "order" },
          ],
        },
      ],
    },
  ],
};

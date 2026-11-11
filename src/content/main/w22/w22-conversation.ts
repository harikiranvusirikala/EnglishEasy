import type { ConversationDay } from "../../types";

/** Week 22, Day 6 (CURRICULUM §4): Conversation Day — the month's groceries, and asking for a cheaper option. */
export const day: ConversationDay = {
  id: "w22-conversation",
  kind: "conversation",
  title: { en: "Monthly Shopping", te: "నెలవారీ సరుకులు" },
  summary: {
    en: "Use the whole week: buy the month's groceries, find things in the shop, compare prices and ask for a cheaper option.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: నెలకి సరిపడా సరుకులు కొనండి, షాపులో వస్తువులు వెతకండి, ధరలు పోల్చండి, చవకైనది అడగండి.",
  },
  topics: ["shopping", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The month's groceries", te: "నెల సరుకులు" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Excuse me, do you have Sona Masoori rice?", te: "Excuse me అండీ, సోనా మసూరి బియ్యం ఉన్నాయా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes, we do. It's at the back.", te: "ఉన్నాయి అండీ. వెనక వైపు ఉన్నాయి." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Which bag is cheaper, five kilos or ten?", te: "ఏ బ్యాగ్ చవక, ఐదు కిలోలదా, పది కిలోలదా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "The ten-kilo bag is cheaper per kilo.", te: "కిలో లెక్కన పది కిలోల బ్యాగ్ చవక." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good. I'll take the bigger one. Where's the oil?", te: "సరే. పెద్దది తీసుకుంటాను. నూనె ఎక్కడ ఉంది?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "In aisle four, on the bottom shelf.", te: "నాలుగో వరుసలో, కింది అరలో." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Is groundnut oil better than sunflower oil?", te: "సన్‌ఫ్లవర్ నూనె కంటే పల్లీ నూనె మంచిదా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "It's more expensive, but many people like it.", te: "దాని ధర ఎక్కువ, కానీ చాలా మంది ఇష్టపడతారు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Is there any offer on it this week?", te: "ఈ వారం దాని మీద ఏమైనా ఆఫర్ ఉందా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes! Buy two litres, get a salt packet free.", te: "ఉంది! రెండు లీటర్లు కొంటే, ఒక ఉప్పు ప్యాకెట్ ఫ్రీ." },
    ],
    questions: [
      {
        prompt: { en: "What is Venkat doing?", te: "వెంకట్ ఏం చేస్తున్నారు?" },
        options: ["Paying a bill at the bank", "Buying groceries", "Booking a bus ticket"],
        answer: 1,
      },
      {
        prompt: { en: "Which rice bag is cheaper per kilo?", te: "కిలో లెక్కన ఏ బియ్యం బ్యాగ్ చవక?" },
        options: ["The ten-kilo bag", "The five-kilo bag", "Both are the same"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the oil?", te: "నూనె ఎక్కడ ఉంది?" },
        options: ["At the back, next to the rice", "In aisle four, on the top shelf", "In aisle four, on the bottom shelf"],
        answer: 2,
      },
      {
        prompt: { en: "What comes free with two litres of oil?", te: "రెండు లీటర్ల నూనెతో పాటు ఏం ఫ్రీగా వస్తుంది?" },
        options: ["A salt packet", "A carry bag", "A sugar packet"],
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
        en: "The shop has no brown rice today. Ask when it will come.",
        te: "ఈ రోజు షాపులో బ్రౌన్ రైస్ లేదు. ఎప్పుడు వస్తుందో అడగండి.",
      },
      expected: ["When will it come?", "When will the brown rice come?"],
      options: ["When will it come?", "When it will come?", "When will it coming?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "This soap is 60 rupees. Ask for a cheaper one.",
        te: "ఈ సబ్బు 60 రూపాయలు. ఇంకా చవకైనది అడగండి.",
      },
      expected: ["Do you have a cheaper one?", "Is there a cheaper one?", "Do you have a cheaper soap?"],
      options: ["Do you have a cheaper one?", "Do you have a more cheaper one?", "Do you have cheaper one?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "You have paid. Ask the cashier for the receipt.",
        te: "మీరు బిల్లు కట్టేశారు. క్యాషియర్‌ని రసీదు అడగండి.",
      },
      expected: ["Can I have the receipt, please?", "Can I have the receipt?", "Receipt, please."],
      options: ["Can I have the receipt, please?", "Can I has the receipt, please?", "Receipt give me."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "The month's groceries", te: "నెల సరుకులు" },
      scene: {
        en: "It is the first of the month. Buy groceries at Fatima's kirana shop.",
        te: "ఈ రోజు ఒకటో తారీఖు. ఫాతిమా కిరాణా షాపులో నెల సరుకులు కొనండి.",
      },
      partner: { en: "Fatima (shopkeeper)", te: "ఫాతిమా (షాపు యజమాని)" },
      skills: [
        { id: "ask", label: { en: "Asking for things", te: "అడగడం" } },
        { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
      ],
      turns: [
        {
          partner: "Namaste! Monthly shopping today?",
          te: "నమస్తే! ఈ రోజు నెల సరుకులా?",
          hint: { en: "Say yes, and ask if she has wheat flour.", te: "అవునని, గోధుమ పిండి ఉందా అని అడగండి." },
          replies: [
            { say: "Yes. Do you have wheat flour?", good: true, skill: "ask" },
            { say: "Yes. You have wheat flour?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, we do. Five kilos or ten?",
          te: "ఉంది అండీ. ఐదు కిలోలా, పది కిలోలా?",
          hint: { en: "Ask which bag is cheaper per kilo.", te: "కిలో లెక్కన ఏ బ్యాగ్ చవకో అడగండి." },
          replies: [
            { say: "Which one is cheaper per kilo?", good: true, skill: "compare" },
            { say: "Which one is more cheaper per kilo?", good: false, skill: "compare" },
          ],
        },
        {
          partner: "The ten-kilo bag. It's 420 rupees.",
          te: "పది కిలోల బ్యాగ్. 420 రూపాయలు.",
          hint: { en: "Say you'll take the bigger bag.", te: "పెద్ద బ్యాగ్ తీసుకుంటానని చెప్పండి." },
          replies: [
            { say: "Okay, I'll take the bigger one.", good: true, skill: "compare" },
            { say: "Okay, I'll take the more big one.", good: false, skill: "compare" },
          ],
        },
        {
          partner: "Anything else? Oil, sugar, dal?",
          te: "ఇంకేమైనా? నూనె, చక్కెర, పప్పు?",
          hint: { en: "Ask politely for one litre of groundnut oil.", te: "ఒక లీటర్ పల్లీ నూనె మర్యాదగా అడగండి." },
          replies: [
            { say: "One litre of groundnut oil, please.", good: true, skill: "ask" },
            { say: "One litre groundnut oil give.", good: false, skill: "ask" },
            {
              say: "Oil? Your oil is not good.",
              good: false,
              skill: "ask",
              react: { en: "Not good? It comes fresh from the mill!", te: "బాగాలేదా? మిల్లు నుంచి తాజాగా వస్తుందండీ!" },
            },
          ],
        },
        {
          partner: "Here you are. That comes to 640 rupees.",
          te: "ఇదిగోండి. మొత్తం 640 రూపాయలు అయింది.",
          hint: { en: "Ask if you can pay by UPI.", te: "UPI తో కట్టొచ్చా అని అడగండి." },
          replies: [
            { say: "Can I pay by UPI?", good: true },
            { say: "Can I pay in UPI?", good: false, fixIt: "preposition" },
          ],
        },
        {
          partner: "Yes. Scan here, please. Thank you!",
          te: "కట్టొచ్చు. ఇక్కడ స్కాన్ చేయండి. థాంక్యూ!",
          hint: { en: "Thank her, and say you'll see her next month.", te: "థాంక్స్ చెప్పి, వచ్చే నెల కలుద్దామని చెప్పండి." },
          replies: [
            { say: "Thank you. See you next month.", good: true },
            { say: "Thank you. See you in next month.", good: false, fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A cheaper lunch box", te: "చవకైన లంచ్ బాక్స్" },
      scene: {
        en: "You want a lunch box. Krishna, at the steel shop, shows you one.",
        te: "మీకు ఒక లంచ్ బాక్స్ కావాలి. స్టీల్ షాపులో కృష్ణ ఒకటి చూపిస్తున్నారు.",
      },
      partner: { en: "Krishna (shopkeeper)", te: "కృష్ణ (షాపు యజమాని)" },
      voice: "b",
      skills: [
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
        { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
      ],
      turns: [
        {
          partner: "Welcome! This steel lunch box is 650 rupees.",
          te: "రండి! ఈ స్టీల్ లంచ్ బాక్స్ 650 రూపాయలు.",
          hint: { en: "Say politely that the price is high.", te: "ధర ఎక్కువ అని మర్యాదగా చెప్పండి." },
          replies: [
            { say: "That's a bit expensive.", good: true, skill: "polite" },
            {
              say: "650? That's daylight robbery!",
              good: false,
              skill: "polite",
              react: { en: "Robbery? No! This is very good steel.", te: "దోపిడీనా? లేదండీ! ఇది చాలా మంచి స్టీల్." },
            },
          ],
        },
        {
          partner: "It's good quality. It lasts for years.",
          te: "మంచి క్వాలిటీ. ఏళ్ళ తరబడి మన్నుతుంది.",
          hint: { en: "Ask if he has a cheaper one.", te: "ఇంకా చవకైనది ఉందా అని ఆయనని అడగండి." },
          replies: [
            { say: "Do you have a cheaper one?", good: true, skill: "compare" },
            { say: "Do you have cheaper one?", good: false, skill: "compare", fixIt: "article" },
          ],
        },
        {
          partner: "Yes. This plastic one is 300 rupees.",
          te: "ఉంది. ఈ ప్లాస్టిక్‌ది 300 రూపాయలు.",
          hint: { en: "Ask him which of the two is the good one.", te: "రెండింటిలో ఏది మంచిదో ఆయనని అడగండి." },
          replies: [
            { say: "Which one is better?", good: true, skill: "compare" },
            { say: "Which one is more better?", good: false, skill: "compare" },
          ],
        },
        {
          partner: "The steel one is better. It's heavier, but safer.",
          te: "స్టీల్‌ది మంచిది. బరువు ఎక్కువే, కానీ ఇంకా సురక్షితం.",
          hint: { en: "Say you'll take the steel one, and ask about an offer.", te: "స్టీల్‌దే తీసుకుంటానని చెప్పి, ఏమైనా ఆఫర్ ఉందా అని అడగండి." },
          replies: [
            { say: "I'll take the steel one. Is there any offer?", good: true, skill: "compare" },
            { say: "I'll take the steel one. Any offer is there?", good: false, skill: "compare", fixIt: "question" },
          ],
        },
        {
          partner: "Okay, 600 for you. Here is your receipt.",
          te: "సరే, మీకు 600 కే. ఇదిగోండి మీ రసీదు.",
          hint: { en: "Thank him, and say goodbye.", te: "థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you very much. Goodbye.", good: true, skill: "polite" },
            { say: "Thank you. Have nice day.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

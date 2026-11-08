import type { ConversationDay } from "../../types";

/** Week 3, Day 6 (CURRICULUM §3): Conversation Day at the vegetable market. Numbers, prices and time; no new grammar. */
export const day: ConversationDay = {
  id: "w3-conversation",
  kind: "conversation",
  title: { en: "At the Vegetable Market", te: "కూరగాయల మార్కెట్‌లో" },
  summary: {
    en: "Use this week's numbers, prices and times at the market: buy vegetables, get your change and ask when it closes.",
    te: "ఈ వారం నేర్చుకున్న సంఖ్యలు, ధరలు, టైమ్ మార్కెట్‌లో వాడండి: కూరగాయలు కొనండి, చిల్లర తీసుకోండి, ఎప్పుడు మూసేస్తారో అడగండి.",
  },
  topics: ["market", "money", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Buying tomatoes", te: "టమాటాలు కొనడం" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good morning! Fresh tomatoes today.", te: "గుడ్ మార్నింగ్! ఈ రోజు తాజా టమాటాలు." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "How much are the tomatoes?", te: "టమాటాలు ఎంత?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Forty rupees a kilo.", te: "కిలో నలభై రూపాయలు." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "And the onions?", te: "మరి ఉల్లిపాయలు?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thirty rupees a kilo.", te: "కిలో ముప్పై రూపాయలు." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Two kilos of tomatoes, please.", te: "రెండు కిలోల టమాటాలు ఇవ్వండి." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "That is eighty rupees.", te: "మొత్తం ఎనభై రూపాయలు." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Here is one hundred.", te: "ఇదిగోండి వంద." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Your change, twenty rupees.", te: "మీ చిల్లర, ఇరవై రూపాయలు." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "What time do you close?", te: "మీరు ఎన్ని గంటలకు మూసేస్తారు?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "At half past eight.", te: "ఎనిమిదిన్నరకి." },
    ],
    questions: [
      { prompt: { en: "How much are the tomatoes?", te: "టమాటాలు ఎంత?" }, options: ["Thirty rupees a kilo", "Forty rupees a kilo", "Eighty rupees a kilo"], answer: 1 },
      { prompt: { en: "How much change does Lakshmi get?", te: "లక్ష్మికి ఎంత చిల్లర వచ్చింది?" }, options: ["Ten rupees", "Twenty rupees", "Eighty rupees"], answer: 1 },
      { prompt: { en: "When does the market close?", te: "మార్కెట్ ఎప్పుడు మూసేస్తారు?" }, options: ["At half past eight", "At eight o'clock", "At quarter to eight"], answer: 0 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "At the market, ask the price of the onions.",
        te: "మార్కెట్‌లో ఉల్లిపాయల ధర అడగండి.",
      },
      expected: ["How much are the onions?"],
      options: ["How much is the onions?", "How much are the onions?", "How many are the onions?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You want one kilo of beans. Ask for it politely.",
        te: "మీకు ఒక కిలో బీన్స్ కావాలి. మర్యాదగా అడగండి.",
      },
      expected: ["One kilo of beans, please.", "One kilo beans, please."],
      options: ["One kilo of beans, please.", "One kilos of beans, please.", "Give one kilo beans."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Ask the seller what time the market closes.",
        te: "మార్కెట్ ఎన్ని గంటలకు మూసేస్తారో అమ్మే అతన్ని అడగండి.",
      },
      expected: ["What time do you close?", "When do you close?"],
      options: ["What time you close?", "What time do you close?", "What time are you close?"],
      answer: 1,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Buying vegetables", te: "కూరగాయలు కొనడం" },
      scene: {
        en: "You are at Venkat's vegetable stall. Ask the price, get a better price, pay and take your change.",
        te: "మీరు వెంకట్ కూరగాయల బండి దగ్గర ఉన్నారు. ధర అడిగి, తగ్గించమని అడిగి, డబ్బు ఇచ్చి చిల్లర తీసుకోండి.",
      },
      partner: { en: "Venkat (a vegetable seller)", te: "వెంకట్ (కూరగాయలు అమ్మేవారు)" },
      skills: [
        { id: "price", label: { en: "Prices", te: "ధరలు" } },
        { id: "polite", label: { en: "Polite words", te: "మర్యాద పదాలు" } },
      ],
      turns: [
        {
          partner: "Good evening! What do you want?",
          te: "గుడ్ ఈవెనింగ్! మీకు ఏం కావాలి?",
          hint: { en: "Ask the price of the brinjals.", te: "వంకాయల ధర అడగండి." },
          replies: [
            { say: "How much are the brinjals?", good: true, skill: "price" },
            { say: "How much is the brinjals?", good: false, skill: "price" },
          ],
        },
        {
          partner: "Fifty rupees a kilo.",
          te: "కిలో యాభై రూపాయలు.",
          hint: { en: "Say it is too much: That is too expensive.", te: "ఎక్కువని చెప్పండి: That is too expensive." },
          replies: [
            { say: "That is too expensive.", good: true, skill: "price" },
            { say: "That is very much expensive.", good: false, skill: "price" },
          ],
        },
        {
          partner: "Okay, forty rupees for you.",
          te: "సరే, మీకు నలభై రూపాయలు.",
          hint: { en: "Say: Okay, half a kilo, please.", te: "ఇలా చెప్పండి: Okay, half a kilo, please." },
          replies: [
            { say: "Okay, half a kilo, please.", good: true, skill: "polite" },
            { say: "Okay, give half kilo.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "That is twenty rupees.",
          te: "మొత్తం ఇరవై రూపాయలు.",
          hint: { en: "Give fifty: Here is fifty rupees.", te: "యాభై ఇవ్వండి: Here is fifty rupees." },
          replies: [
            { say: "Here is fifty rupees.", good: true, skill: "price" },
            { say: "Here fifty rupees.", good: false, skill: "price" },
          ],
        },
        {
          partner: "Here is your change, thirty rupees.",
          te: "ఇదిగోండి మీ చిల్లర, ముప్పై రూపాయలు.",
          hint: { en: "Say: Thank you very much.", te: "ఇలా చెప్పండి: Thank you very much." },
          replies: [
            { say: "Thank you very much.", good: true, skill: "polite" },
            { say: "Thanks you very much.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "When does the market close?", te: "మార్కెట్ ఎప్పుడు మూసేస్తారు?" },
      scene: {
        en: "Usha sells fruit at the market. Ask her when she closes and about Sunday.",
        te: "ఉష మార్కెట్‌లో పళ్ళు అమ్ముతుంది. ఎప్పుడు మూసేస్తుందో, ఆదివారం గురించి అడగండి.",
      },
      partner: { en: "Usha (a fruit seller)", te: "ఉష (పళ్ళు అమ్మేవారు)" },
      skills: [
        { id: "ask", label: { en: "Ask the time", te: "టైమ్ అడగడం" } },
        { id: "time", label: { en: "on / at", te: "on / at వాడకం" } },
      ],
      turns: [
        {
          partner: "Hello! Bananas, sixty rupees a dozen.",
          te: "హలో! అరటిపళ్ళు, డజను అరవై రూపాయలు.",
          hint: { en: "Ask what time she closes: What time do you close?", te: "ఎన్ని గంటలకు మూసేస్తుందో అడగండి: What time do you close?" },
          replies: [
            { say: "What time do you close?", good: true, skill: "ask" },
            { say: "What time you close?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "At nine. Why?",
          te: "తొమ్మిదికి. ఎందుకు?",
          hint: { en: "Say: I will come back at eight.", te: "ఇలా చెప్పండి: I will come back at eight." },
          replies: [
            { say: "I will come back at eight.", good: true, skill: "time" },
            { say: "I will come back on eight.", good: false, skill: "time" },
          ],
        },
        {
          partner: "Okay. I am here on Sundays also.",
          te: "సరే. ఆదివారాలు కూడా నేను ఇక్కడే ఉంటాను.",
          hint: { en: "Ask: What time on Sunday?", te: "అడగండి: What time on Sunday?" },
          replies: [
            { say: "What time on Sunday?", good: true, skill: "ask" },
            { say: "What time in Sunday?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "From seven to one.",
          te: "ఏడు నుండి ఒంటి గంట వరకు.",
          hint: { en: "Say: Thank you. See you on Sunday.", te: "ఇలా చెప్పండి: Thank you. See you on Sunday." },
          replies: [
            { say: "Thank you. See you on Sunday.", good: true, skill: "time" },
            { say: "Thank you. See you in Sunday.", good: false, skill: "time" },
          ],
        },
      ],
    },
  ],
};

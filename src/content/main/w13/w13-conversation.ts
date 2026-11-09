import type { ConversationDay } from "../../types";

/** Week 13, Day 6 (CURRICULUM §4): Conversation Day at the Sunday market — a week's vegetables, and the wrong change. */
export const day: ConversationDay = {
  id: "w13-conversation",
  kind: "conversation",
  title: { en: "The Sunday Market", te: "ఆదివారం సంత" },
  summary: {
    en: "Use the whole week: buy a week's vegetables at the Sunday market, and sort out the wrong change politely.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఆదివారం సంతలో వారానికి సరిపడా కూరగాయలు కొనండి, చిల్లర తప్పుగా ఇస్తే మర్యాదగా సరిచేయండి.",
  },
  topics: ["market", "shopping", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the Sunday market", te: "ఆదివారం సంతలో" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good morning! Fresh vegetables, come!", te: "నమస్కారం! తాజా కూరగాయలు, రండి!" },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "How much are the tomatoes today?", te: "ఈ రోజు టమాటాలు ఎంత?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Forty rupees a kilo. Very fresh.", te: "కిలో నలభై రూపాయలు. చాలా తాజాగా ఉన్నాయి." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Can I have two kilos, please?", te: "రెండు కిలోలు ఇవ్వగలరా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Sure. Anything else?", te: "సరే. ఇంకేమైనా?" },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Half a kilo of beans and some coriander.", te: "అర కిలో బీన్స్, కొంచెం కొత్తిమీర." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "That comes to 130 rupees.", te: "మొత్తం 130 రూపాయలు అయింది." },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "That's a bit expensive. Can you make it 120?", te: "కొంచెం ఎక్కువ. 120 చేయగలరా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Okay, 120. Only for you!", te: "సరే, 120. మీ కోసమే!" },
      { speaker: { en: "Lakshmi", te: "లక్ష్మి" }, voice: "a", en: "Thank you! See you next Sunday.", te: "థాంక్యూ! వచ్చే ఆదివారం కలుద్దాం." },
    ],
    questions: [
      {
        prompt: { en: "How much are the tomatoes?", te: "టమాటాలు ఎంత?" },
        options: ["Forty rupees a kilo", "Thirty rupees a kilo", "Forty rupees each"],
        answer: 0,
      },
      {
        prompt: { en: "How many kilos of tomatoes does Lakshmi buy?", te: "లక్ష్మి ఎన్ని కిలోల టమాటాలు కొంటుంది?" },
        options: ["One", "Two", "Half a kilo"],
        answer: 1,
      },
      {
        prompt: { en: "How much does Lakshmi pay in the end?", te: "చివరికి లక్ష్మి ఎంత కడుతుంది?" },
        options: ["130 rupees", "120 rupees", "100 rupees"],
        answer: 1,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask the seller for two kilos of potatoes.",
        te: "అమ్మేవారిని రెండు కిలోల బంగాళాదుంపలు అడగండి.",
      },
      expected: ["Can I have two kilos of potatoes, please?", "Can I have two kilos of potatoes?", "Two kilos of potatoes, please."],
      options: ["Can I have two kilos of potatoes, please?", "Can I have two kilo potato, please?", "I want two kilos potatoes give."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "The seller gave you ten rupees too little. Tell him politely.",
        te: "అమ్మేవారు పది రూపాయల చిల్లర తక్కువ ఇచ్చారు. మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, I think the change is wrong.", "Excuse me, the change is wrong."],
      options: ["Sorry, I think the change is wrong.", "You gave wrong change. Cheating!", "Sorry, the change is wrong is."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Ask if these bananas are ripe.",
        te: "ఈ అరటిపండ్లు పండాయా అని అడగండి.",
      },
      expected: ["Are these bananas ripe?", "Are the bananas ripe?"],
      options: ["Are these bananas ripe?", "Is these bananas ripe?", "These bananas ripe are?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A week's vegetables", te: "వారానికి కూరగాయలు" },
      scene: {
        en: "It is Sunday. Buy vegetables for the week at Ramana's stall.",
        te: "ఈ రోజు ఆదివారం. రమణ బండి దగ్గర వారానికి సరిపడా కూరగాయలు కొనండి.",
      },
      partner: { en: "Ramana (vegetable seller)", te: "రమణ (కూరగాయలు అమ్మేవారు)" },
      skills: [
        { id: "ask", label: { en: "Asking for things", te: "అడగడం" } },
        { id: "price", label: { en: "Prices", te: "ధరలు" } },
      ],
      turns: [
        {
          partner: "Good morning! What do you need today?",
          te: "నమస్కారం! ఈ రోజు ఏం కావాలి?",
          hint: { en: "Say: Can I have two kilos of onions, please?", te: "ఇలా చెప్పండి: Can I have two kilos of onions, please?" },
          replies: [
            { say: "Can I have two kilos of onions, please?", good: true, skill: "ask" },
            { say: "Can I have two kilo onion, please?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Here you are. What else?",
          te: "ఇదిగోండి. ఇంకా ఏం కావాలి?",
          hint: {
            en: "Say: Half a kilo of beans and a bunch of coriander.",
            te: "ఇలా చెప్పండి: Half a kilo of beans and a bunch of coriander.",
          },
          replies: [
            { say: "Half a kilo of beans and a bunch of coriander.", good: true, skill: "ask" },
            { say: "Half kilo beans and one bunch coriander.", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Okay. Do you want tomatoes too?",
          te: "సరే. టమాటాలు కూడా కావాలా?",
          hint: { en: "Ask: How much are they?", te: "అడగండి: How much are they?" },
          replies: [
            { say: "How much are they?", good: true, skill: "price" },
            { say: "How much is they?", good: false, skill: "price" },
          ],
        },
        {
          partner: "Fifty rupees a kilo.",
          te: "కిలో యాభై రూపాయలు.",
          hint: {
            en: "Say: That's a bit expensive. Can you give it for forty?",
            te: "ఇలా చెప్పండి: That's a bit expensive. Can you give it for forty?",
          },
          replies: [
            { say: "That's a bit expensive. Can you give it for forty?", good: true, skill: "price" },
            { say: "Too costly. Give for forty.", good: false, skill: "price" },
          ],
        },
        {
          partner: "Okay, okay. Forty for you.",
          te: "సరే, సరే. మీకు నలభైకే.",
          hint: { en: "Say: Thank you. One kilo, please.", te: "ఇలా చెప్పండి: Thank you. One kilo, please." },
          replies: [
            { say: "Thank you. One kilo, please.", good: true, skill: "ask" },
            { say: "Thank you. One kilos, please.", good: false, skill: "ask" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The wrong change", te: "తప్పు చిల్లర" },
      scene: {
        en: "Your fruit costs 380 rupees. You give Prasad 500, and he gives you only 100 back.",
        te: "మీ పండ్లు 380 రూపాయలు. ప్రసాద్‌కి 500 ఇచ్చారు; ఆయన 100 మాత్రమే తిరిగి ఇచ్చారు.",
      },
      partner: { en: "Prasad (fruit seller)", te: "ప్రసాద్ (పండ్లు అమ్మేవారు)" },
      skills: [
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
        { id: "money", label: { en: "Money", te: "డబ్బు" } },
      ],
      turns: [
        {
          partner: "Here is your change. Thank you!",
          te: "ఇదిగోండి మీ చిల్లర. థాంక్యూ!",
          hint: { en: "Say: Sorry, I think the change is wrong.", te: "ఇలా చెప్పండి: Sorry, I think the change is wrong." },
          replies: [
            { say: "Sorry, I think the change is wrong.", good: true, skill: "polite" },
            { say: "You gave wrong change. Cheating!", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Oh? How much did you give me?",
          te: "అవునా? మీరు నాకు ఎంత ఇచ్చారు?",
          hint: { en: "Say: I gave you 500 rupees.", te: "ఇలా చెప్పండి: I gave you 500 rupees." },
          replies: [
            { say: "I gave you 500 rupees.", good: true, skill: "money" },
            { say: "I am give you 500 rupees.", good: false, skill: "money" },
          ],
        },
        {
          partner: "And the fruit was 380 rupees.",
          te: "పండ్లు 380 రూపాయలు.",
          hint: { en: "Say: So the change is 120 rupees, not 100.", te: "ఇలా చెప్పండి: So the change is 120 rupees, not 100." },
          replies: [
            { say: "So the change is 120 rupees, not 100.", good: true, skill: "money" },
            { say: "So the change are 120 rupees, not 100.", good: false, skill: "money" },
          ],
        },
        {
          partner: "You're right! Sorry. Here are twenty more.",
          te: "మీరు చెప్పింది నిజమే! సారీ. ఇదిగోండి ఇంకో ఇరవై.",
          hint: { en: "Say: No problem. Thank you.", te: "ఇలా చెప్పండి: No problem. Thank you." },
          replies: [
            { say: "No problem. Thank you.", good: true, skill: "polite" },
            { say: "No problem. Thanks you.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

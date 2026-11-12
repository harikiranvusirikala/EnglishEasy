import type { ConversationDay } from "../../types";

/** Week 62, Day 6 (CURRICULUM §5): Conversation Day — a formal call about a wrong electricity bill, and moving an appointment at the passport office. */
export const day: ConversationDay = {
  id: "w62-conversation",
  kind: "conversation",
  title: { en: "A Call to the Electricity Office", te: "కరెంట్ ఆఫీసుకి ఫోన్" },
  summary: {
    en: "Use the whole week: call an office about a wrong bill, and move an appointment, formally and politely.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: తప్పు బిల్లు గురించి ఆఫీసుకి ఫోన్ చేయండి, appointment మార్చుకోండి, formal గా, మర్యాదగా.",
  },
  topics: ["offices", "phone", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A wrong bill", te: "తప్పు బిల్లు" },
    lines: [
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Good morning, electricity office, billing section. How may I help you?", te: "నమస్కారం, ఎలక్ట్రిసిటీ ఆఫీస్, బిల్లింగ్ విభాగం. చెప్పండి, ఏం సహాయం కావాలి?" },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Good morning. My name is Gopal. I'm calling about my bill.", te: "నమస్కారం. నా పేరు గోపాల్. నా బిల్లు గురించి ఫోన్ చేశాను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Certainly. Would you mind giving me your service number?", te: "తప్పకుండా. మీ సర్వీస్ నంబర్ కొంచెం చెప్తారా?" },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Not at all. It's six two zero four one.", te: "అలాగే. 62041." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Thank you. Your bill this month is 2,800 rupees.", te: "థాంక్స్. ఈ నెల మీ బిల్లు 2,800 రూపాయలు." },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "That's too high. I usually pay about 800 rupees.", te: "అది చాలా ఎక్కువ. నేను మామూలుగా సుమారు 800 రూపాయలు కడతాను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "I see. Let me check the meter reading.", te: "అలాగా. మీటర్ రీడింగ్ చూస్తాను." },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Could you possibly send someone to check the meter?", te: "వీలైతే మీటర్ చూడటానికి ఎవరినైనా పంపిస్తారా?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Yes. The lineman will come tomorrow morning.", te: "అలాగే. రేపు పొద్దున లైన్‌మన్ వస్తారు." },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Thank you. I'd be grateful if you could call me after his visit.", te: "థాంక్స్. ఆయన వచ్చి వెళ్ళాక మీరు నాకు ఫోన్ చేస్తే చాలా సంతోషిస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What is the call about?", te: "ఈ ఫోన్ దేని గురించి?" },
        options: ["A wrong electricity bill", "A new gas connection", "A water problem"],
        answer: 0,
      },
      {
        prompt: { en: "How much does Gopal usually pay?", te: "గోపాల్ గారు మామూలుగా ఎంత కడతారు?" },
        options: ["About 800 rupees", "About 2,800 rupees", "About 80 rupees"],
        answer: 0,
      },
      {
        prompt: { en: "Who will come tomorrow?", te: "రేపు ఎవరు వస్తారు?" },
        options: ["The lineman", "The manager", "Swapna"],
        answer: 0,
      },
      {
        prompt: { en: "What does Gopal ask for at the end?", te: "చివర్లో గోపాల్ గారు ఏం అడిగారు?" },
        options: ["A call after the visit", "A new meter", "A smaller bill"],
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
        en: "Ask the clerk politely to check your meter reading. Use Would you mind.",
        te: "మీ మీటర్ రీడింగ్ చూడమని క్లర్క్‌ని మర్యాదగా అడగండి. Would you mind వాడండి.",
      },
      expected: ["Would you mind checking my meter reading?", "Would you mind checking the meter reading, please?"],
      options: ["Would you mind checking my meter reading?", "You would mind checking my meter reading?", "Would you mind check my meter reading?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The clerk asks how long the bill has been high. Say three months.",
        te: "బిల్లు ఎన్నాళ్ళుగా ఎక్కువ వస్తోందని క్లర్క్ అడిగారు. మూడు నెలలు అని చెప్పండి.",
      },
      expected: ["For three months.", "It has been high for three months.", "Three months."],
      options: ["For three months.", "For three month.", "For three monthly."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your passport appointment is on Monday. Ask politely if you can come on Wednesday instead.",
        te: "మీ passport appointment సోమవారం. బదులుగా బుధవారం రావొచ్చా అని మర్యాదగా అడగండి.",
      },
      expected: [
        "Is it OK if I come on Wednesday instead?",
        "Would it be possible to come on Wednesday instead?",
        "Could I come on Wednesday instead?",
      ],
      options: ["Is it OK if I come on Wednesday instead?", "Is it OK if I come in Wednesday instead?", "Is it OK if I will come on Wednesday instead?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A bill that is too high", te: "చాలా ఎక్కువ వచ్చిన బిల్లు" },
      scene: {
        en: "Your electricity bill this month is much higher than usual. You call the electricity office. Kumar answers.",
        te: "ఈ నెల మీ కరెంట్ బిల్లు మామూలు కంటే చాలా ఎక్కువ వచ్చింది. ఎలక్ట్రిసిటీ ఆఫీసుకి ఫోన్ చేశారు. కుమార్ గారు ఫోన్ ఎత్తారు.",
      },
      partner: { en: "Kumar (at the electricity office)", te: "కుమార్ (ఎలక్ట్రిసిటీ ఆఫీసులో)" },
      voice: "b",
      skills: [
        { id: "open", label: { en: "Starting the call", te: "ఫోన్ మొదలుపెట్టడం" } },
        { id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good afternoon, electricity office. How can I help you?",
          te: "నమస్కారం, ఎలక్ట్రిసిటీ ఆఫీస్. చెప్పండి, ఏం సహాయం కావాలి?",
          hint: { en: "Greet him, give your name, and say why you are calling.", te: "నమస్కారం చెప్పి, మీ పేరు చెప్పి, ఎందుకు ఫోన్ చేశారో చెప్పండి." },
          replies: [
            { say: "Good afternoon. My name is Sai. I'm calling about my bill.", good: true, skill: "open" },
            { say: "Good afternoon. My name is Sai. I'm calling about bill.", good: false, skill: "open", fixIt: "article" },
          ],
        },
        {
          partner: "May I have your service number, please?",
          te: "మీ సర్వీస్ నంబర్ చెప్తారా?",
          hint: { en: "Read the number on your bill, digit by digit.", te: "బిల్లు మీద ఉన్న నంబర్‌ని ఒక్కో అంకె చదవండి." },
          replies: [
            { say: "Yes. It's seven three zero nine.", good: true, skill: "open" },
            { say: "Yes. It's seven thousand three hundred and nine.", good: false, skill: "open" },
          ],
        },
        {
          partner: "Your bill is 3,500 rupees this month. What is the problem?",
          te: "ఈ నెల మీ బిల్లు 3,500 రూపాయలు. సమస్య ఏంటి?",
          hint: { en: "Say it is too high, and how much you usually pay.", te: "అది చాలా ఎక్కువ అని, మామూలుగా ఎంత కడతారో చెప్పండి." },
          replies: [
            { say: "It's too high. I usually pay about 900 rupees.", good: true, skill: "ask" },
            { say: "It's too high. I am usually paying about 900 rupees.", good: false, skill: "ask", fixIt: "state-ing" },
          ],
        },
        {
          partner: "I see. Let me look at the meter reading.",
          te: "అలాగా. మీటర్ రీడింగ్ చూస్తాను.",
          hint: { en: "Ask very politely for someone to come and check the meter.", te: "మీటర్ చూడటానికి ఎవరినైనా పంపమని చాలా మర్యాదగా అడగండి." },
          replies: [
            { say: "Could you possibly send someone to check the meter?", good: true, skill: "ask" },
            { say: "Would you mind sending someone to check the meter?", good: true, skill: "ask" },
            {
              say: "You people always cheat. Send someone now!",
              good: false,
              skill: "polite",
              react: { en: "Please don't say we cheat. I'm checking it for you.", te: "మేము మోసం చేస్తామని అనకండి అండీ. మీ కోసమే చూస్తున్నాను." },
            },
          ],
        },
        {
          partner: "Yes, the lineman will come on Thursday. Is that OK?",
          te: "అలాగే, గురువారం లైన్‌మన్ వస్తారు. మీకు కుదురుతుందా?",
          hint: { en: "Say Thursday is fine, thank him, and say goodbye.", te: "గురువారం కుదురుతుందని చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thursday is fine. Thank you very much. Goodbye.", good: true, skill: "polite" },
            { say: "Thursday is fine. Thanks. Kindly do the needful.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Moving a passport appointment", te: "passport appointment మార్చడం" },
      scene: {
        en: "Your passport appointment is next Friday, but you have to travel that day. You call the passport help desk. Ruth answers.",
        te: "మీ passport appointment వచ్చే శుక్రవారం, కానీ ఆ రోజు మీరు ఊరు వెళ్ళాలి. passport help desk కి ఫోన్ చేశారు. రూత్ గారు ఫోన్ ఎత్తారు.",
      },
      partner: { en: "Ruth (at the passport help desk)", te: "రూత్ (passport help desk లో)" },
      skills: [
        { id: "ask", label: { en: "Asking politely", te: "మర్యాదగా అడగడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning, passport help desk. How may I help you?",
          te: "నమస్కారం, passport help desk. చెప్పండి, ఏం సహాయం కావాలి?",
          hint: { en: "Greet her, and say you are calling about your appointment.", te: "నమస్కారం చెప్పి, మీ appointment గురించి ఫోన్ చేశారని చెప్పండి." },
          replies: [
            { say: "Good morning. I'm calling about my passport appointment.", good: true, skill: "ask" },
            { say: "Good morning. I'm calling regarding my passport appointment.", good: true, skill: "ask" },
            {
              say: "Good morning. I want to prepone my passport appointment.",
              good: false,
              skill: "ask",
              fixIt: "indian-english",
              react: { en: "Sorry? Do you mean an earlier date?", te: "క్షమించండి? అంటే ఇంకా ముందు తేదీనా?" },
            },
          ],
        },
        {
          partner: "Sure. When is your appointment now?",
          te: "తప్పకుండా. ఇప్పుడు మీ appointment ఎప్పుడు?",
          hint: { en: "Say next Friday, at ten in the morning.", te: "వచ్చే శుక్రవారం, పొద్దున పదింటికి అని చెప్పండి." },
          replies: [
            { say: "It's next Friday at ten in the morning.", good: true, skill: "ask" },
            { say: "It's on next Friday at ten in the morning.", good: false, skill: "ask", fixIt: "preposition" },
          ],
        },
        {
          partner: "And what would you like to do?",
          te: "మరి మీరు ఏం చేయాలనుకుంటున్నారు?",
          hint: { en: "Ask politely if you can come earlier, on Tuesday.", te: "ఇంకా ముందు, మంగళవారం రావొచ్చా అని మర్యాదగా అడగండి." },
          replies: [
            { say: "Is it OK if I come on Tuesday instead?", good: true, skill: "ask" },
            { say: "Would it be possible to come earlier, on Tuesday?", good: true, skill: "ask" },
            { say: "Is it OK if I will come on Tuesday instead?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Tuesday is fully booked. Wednesday at eleven is free.",
          te: "మంగళవారం అంతా బుక్ అయిపోయింది. బుధవారం పదకొండింటికి ఖాళీ ఉంది.",
          hint: { en: "Say Wednesday at eleven suits you, and thank her.", te: "బుధవారం పదకొండు మీకు కుదురుతుందని చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Wednesday at eleven suits me. Thank you.", good: true, skill: "polite" },
            {
              say: "Wednesday? Fine, if there is nothing better.",
              good: false,
              skill: "polite",
              react: { en: "I'm sorry, that is the only free time this week.", te: "సారీ అండీ, ఈ వారం ఖాళీ ఉన్నది అదొక్కటే." },
            },
          ],
        },
        {
          partner: "Done. You'll get an SMS soon. Is there anything else?",
          te: "అయిపోయింది. మీకు త్వరలో SMS వస్తుంది. ఇంకేమైనా కావాలా?",
          hint: { en: "Say that is all, thank her, and say goodbye.", te: "అంతే అని చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "No, that's all. Thank you for your help. Goodbye.", good: true, skill: "polite" },
            { say: "No, that's all. Thank you for your helps. Goodbye.", good: false, skill: "polite", fixIt: "plural" },
          ],
        },
      ],
    },
  ],
};

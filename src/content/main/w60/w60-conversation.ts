import type { ConversationDay } from "../../types";

/** Week 60, Day 6 (CURRICULUM §5): Conversation Day — at the bank manager's desk: an FD or a post office scheme, and a double-money offer. */
export const day: ConversationDay = {
  id: "w60-conversation",
  kind: "conversation",
  title: { en: "At the Bank Manager's Desk", te: "బ్యాంక్ మేనేజర్ దగ్గర" },
  summary: {
    en: "Use the whole week: compare an FD and a post office scheme with the bank manager, and help a friend who hears about a double-money scheme.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: బ్యాంక్ మేనేజర్‌తో FD ని, పోస్టాఫీసు స్కీమ్‌ని పోల్చండి; రెట్టింపు డబ్బు స్కీమ్ గురించి విన్న స్నేహితులకి సాయం చేయండి.",
  },
  topics: ["bank", "money", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Advice about savings", te: "పొదుపు గురించి సలహా" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good morning, madam. I'd like some advice about my savings.", te: "గుడ్ మార్నింగ్ మేడమ్. నా పొదుపు డబ్బు గురించి కొంచెం సలహా కావాలి." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Of course, please sit down. Are you thinking of a fixed deposit?", te: "తప్పకుండా, కూర్చోండి. fixed deposit గురించి ఆలోచిస్తున్నారా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes. What is the interest rate for two years?", te: "అవును. రెండేళ్ళకి వడ్డీ రేటు ఎంత?" },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "At our bank, it's about seven per cent a year.", te: "మా బ్యాంకులో సంవత్సరానికి సుమారు ఏడు శాతం." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "My friend says the post office scheme pays a little more.", te: "పోస్టాఫీసు స్కీమ్ కొంచెం ఎక్కువ ఇస్తుందని నా స్నేహితులు అంటున్నారు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "That may be true. Post office schemes are safe too.", te: "అది నిజం కావొచ్చు. పోస్టాఫీసు స్కీమ్‌లు కూడా సురక్షితమే." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Which is better for a senior citizen like me?", te: "నాలాంటి సీనియర్ సిటిజన్‌కి ఏది మంచిది?" },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Here, senior citizens get half a per cent more. Compare both, then decide.", te: "ఇక్కడ సీనియర్ సిటిజన్లకి అర శాతం ఎక్కువ. రెండూ పోల్చి, తర్వాత నిర్ణయించుకోండి." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thank you. One more thing. My neighbour told me about a scheme that doubles money.", te: "థాంక్స్. ఇంకో విషయం. డబ్బు రెట్టింపు చేసే ఒక స్కీమ్ గురించి మా పక్కింటాయన చెప్పారు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Please be careful. No safe scheme doubles your money in one year.", te: "జాగ్రత్తగా ఉండండి. ఏ నమ్మకమైన స్కీమ్ కూడా ఒక సంవత్సరంలో డబ్బు రెట్టింపు చేయదు." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Where to keep savings", "Paying an electricity bill", "Opening a new shop"],
        answer: 0,
      },
      {
        prompt: { en: "What rate does the bank give for two years?", te: "బ్యాంక్ రెండేళ్ళకి ఎంత రేటు ఇస్తుంది?" },
        options: ["About seven per cent", "About nine per cent", "About five per cent"],
        answer: 0,
      },
      {
        prompt: { en: "Who gets half a per cent more?", te: "అర శాతం ఎక్కువ ఎవరికి వస్తుంది?" },
        options: ["Senior citizens", "Bank staff", "New customers"],
        answer: 0,
      },
      {
        prompt: { en: "What does Kavitha say about the double-money scheme?", te: "రెట్టింపు డబ్బు స్కీమ్ గురించి కవిత గారు ఏమంటారు?" },
        options: ["Be careful; it is not safe.", "It is a good idea.", "Join it quickly."],
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
        en: "Ask the bank manager which is better: an FD or a post office scheme.",
        te: "FD మంచిదా, పోస్టాఫీసు స్కీమ్ మంచిదా అని బ్యాంక్ మేనేజర్‌ని అడగండి.",
      },
      expected: [
        "Which is better, an FD or a post office scheme?",
        "Which is better for me, an FD or a post office scheme?",
        "Is an FD better than a post office scheme?",
      ],
      options: [
        "Which is better, an FD or a post office scheme?",
        "Which is more better, an FD or a post office scheme?",
        "Which better is, an FD or a post office scheme?",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your neighbour Narayana is a senior citizen. Ask the manager if he gets a higher rate.",
        te: "మీ పక్కింటి నారాయణ గారు సీనియర్ సిటిజన్. ఆయనకి ఎక్కువ రేటు వస్తుందా అని మేనేజర్‌ని అడగండి.",
      },
      expected: [
        "He is a senior citizen. Does he get a higher rate?",
        "Does he get a higher rate as a senior citizen?",
        "Does he get a higher rate?",
      ],
      options: [
        "He is a senior citizen. Does he get a higher rate?",
        "He is senior citizen. Does he get a higher rate?",
        "He is a senior citizen. Does he gets a higher rate?",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The manager asks: You haven't shared your OTP with anyone? You haven't. Answer.",
        te: "'మీ OTP ఎవరికీ చెప్పలేదు కదా?' అని మేనేజర్ అడుగుతున్నారు. మీరు చెప్పలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't shared it with anyone.", "No, I haven't.", "No, never."],
      options: ["No, I haven't shared it with anyone.", "Yes, I haven't shared it with anyone.", "Yes, I have not shared to anyone."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "An FD or the post office?", te: "FD నా, పోస్టాఫీసా?" },
      scene: {
        en: "Imagine you want to keep some savings safe. You ask Prasad, the bank manager, to compare an FD with a post office scheme.",
        te: "కొంత పొదుపు డబ్బు భద్రంగా ఉంచాలనుకుంటున్నారు అనుకోండి. FD ని, పోస్టాఫీసు స్కీమ్‌ని పోల్చి చెప్పమని బ్యాంక్ మేనేజర్ ప్రసాద్ గారిని అడుగుతున్నారు.",
      },
      partner: { en: "Prasad (the bank manager)", te: "ప్రసాద్ (బ్యాంక్ మేనేజర్)" },
      voice: "b",
      skills: [
        { id: "compare", label: { en: "Comparing choices", te: "పోల్చి చూడడం" } },
        { id: "ask", label: { en: "Asking about rates", te: "రేట్ల గురించి అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good afternoon. Please sit down. How can I help?",
          te: "గుడ్ ఆఫ్టర్‌నూన్. కూర్చోండి. చెప్పండి, ఏం కావాలి?",
          hint: { en: "Thank him, and say you need advice about keeping your savings safe.", te: "థాంక్స్ చెప్పి, పొదుపు డబ్బు భద్రంగా ఉంచడం గురించి సలహా కావాలని చెప్పండి." },
          replies: [
            { say: "Thank you. I'd like some advice about keeping my savings safe.", good: true, skill: "ask" },
            { say: "Thank you. I'd like some advices about keeping my savings safe.", good: false, skill: "ask", fixIt: "plural" },
          ],
        },
        {
          partner: "Sure. Are you thinking of a fixed deposit?",
          te: "తప్పకుండా. fixed deposit గురించి ఆలోచిస్తున్నారా?",
          hint: { en: "Say yes, and ask the rate for three years.", te: "అవునని చెప్పి, మూడేళ్ళకి రేటు ఎంతో అడగండి." },
          replies: [
            { say: "Yes. What is the interest rate for three years?", good: true, skill: "ask" },
            { say: "Yes. What the interest rate is for three years?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "It's about seven per cent a year.",
          te: "సంవత్సరానికి సుమారు ఏడు శాతం.",
          hint: { en: "Say a friend told you the post office pays a little more.", te: "పోస్టాఫీసు కొంచెం ఎక్కువ ఇస్తుందని ఒక స్నేహితులు చెప్పారని చెప్పండి." },
          replies: [
            { say: "My friend says the post office pays a little more.", good: true, skill: "compare" },
            { say: "My friend say the post office pays a little more.", good: false, skill: "compare", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "That may be true. But our FD is just as safe.",
          te: "అది నిజం కావొచ్చు. కానీ మా FD కూడా అంతే సురక్షితం.",
          hint: { en: "Ask which one he thinks is better for you.", te: "మీకు ఏది మంచిదని ఆయన అనుకుంటున్నారో అడగండి." },
          replies: [
            { say: "Which one do you think is better for me?", good: true, skill: "compare" },
            {
              say: "You'll say your bank is better. Tell me the truth.",
              good: false,
              skill: "polite",
              react: { en: "I'll be honest. Both are safe, so compare the rates.", te: "నిజం చెప్తాను. రెండూ సురక్షితమే, అందుకే రేట్లు పోల్చి చూడండి." },
            },
          ],
        },
        {
          partner: "Both are good. Check both rates, then decide.",
          te: "రెండూ మంచివే. రెండు రేట్లూ చూసి, తర్వాత నిర్ణయించుకోండి.",
          hint: { en: "Thank him, and say you will compare them and come back.", te: "థాంక్స్ చెప్పి, పోల్చి చూసి మళ్ళీ వస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll compare them and come back.", good: true, skill: "polite" },
            { say: "Thank you. I'll compare them and return back.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Double money?", te: "రెట్టింపు డబ్బా?" },
      scene: {
        en: "Your friend Anitha calls you. Someone has told her about a scheme that promises double money.",
        te: "మీ స్నేహితురాలు అనిత గారు ఫోన్ చేశారు. డబ్బు రెట్టింపు చేస్తామనే ఒక స్కీమ్ గురించి ఎవరో ఆవిడకి చెప్పారు.",
      },
      partner: { en: "Anitha (your friend)", te: "అనిత (మీ స్నేహితురాలు)" },
      skills: [
        { id: "warn", label: { en: "Warning a friend", te: "స్నేహితులని హెచ్చరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! Have you heard about the new scheme? It doubles your money!",
          te: "హాయ్! కొత్త స్కీమ్ గురించి విన్నారా? డబ్బు రెట్టింపు చేస్తుంది!",
          hint: { en: "Ask her how long it takes.", te: "ఎంత కాలం పడుతుందో ఆవిడని అడగండి." },
          replies: [
            { say: "Really? How long does it take?", good: true, skill: "warn" },
            { say: "Really? How long it takes?", good: false, skill: "warn", fixIt: "question" },
          ],
        },
        {
          partner: "Only one year! I want to give them two lakh rupees.",
          te: "ఒక్క సంవత్సరమే! వాళ్ళకి రెండు లక్షల రూపాయలు ఇవ్వాలనుకుంటున్నాను.",
          hint: { en: "Say kindly that it sounds false to you.", te: "అది నిజం అనిపించట్లేదని మర్యాదగా చెప్పండి." },
          replies: [
            { say: "One year? That sounds too good to be true.", good: true, skill: "warn" },
            {
              say: "Are you mad? Only fools believe that!",
              good: false,
              skill: "polite",
              react: { en: "Please don't talk like that! I only asked you.", te: "అలా మాట్లాడకండి! మిమ్మల్ని అడిగానంతే." },
            },
          ],
        },
        {
          partner: "But the agent showed me photos of many happy customers.",
          te: "కానీ ఏజెంట్ చాలామంది సంతోషంగా ఉన్న కస్టమర్ల ఫోటోలు చూపించారు.",
          hint: { en: "Ask if a bank or the post office runs the scheme.", te: "ఆ స్కీమ్‌ని బ్యాంక్ గానీ పోస్టాఫీసు గానీ నడుపుతోందా అని అడగండి." },
          replies: [
            { say: "Does a bank or the post office run it?", good: true, skill: "warn" },
            { say: "Does a bank or the post office runs it?", good: false, skill: "warn", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "No, it's a private company. They want cash only.",
          te: "లేదు, అది ఒక ప్రైవేట్ కంపెనీ. క్యాష్ మాత్రమే కావాలంటున్నారు.",
          hint: { en: "Tell her kindly not to give them money, and to ask her bank first.", te: "వాళ్ళకి డబ్బు ఇవ్వొద్దని, ముందు తన బ్యాంకులో అడగమని మర్యాదగా చెప్పండి." },
          replies: [
            { say: "Please don't give them any money. Ask your bank first.", good: true, skill: "warn" },
            { say: "Please don't give them any money. Ask to your bank first.", good: false, skill: "warn", fixIt: "preposition" },
          ],
        },
        {
          partner: "You're right. I'll talk to the bank manager tomorrow. Thank you!",
          te: "మీరు చెప్పింది నిజమే. రేపు బ్యాంక్ మేనేజర్‌తో మాట్లాడతాను. థాంక్స్!",
          hint: { en: "Say you are glad, and say goodbye.", te: "సంతోషంగా ఉందని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "I'm glad. Take care, Anitha. Bye!", good: true, skill: "polite" },
            { say: "Good. Next time, think before you call me.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

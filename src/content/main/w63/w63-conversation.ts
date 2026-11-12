import type { ConversationDay } from "../../types";

/** Week 63, Day 6 (CURRICULUM §5): Conversation Day — understanding a bank letter at the help desk, and reading a water-supply notice with a neighbour. */
export const day: ConversationDay = {
  id: "w63-conversation",
  kind: "conversation",
  title: { en: "A Letter From the Bank", te: "బ్యాంక్ నుంచి ఉత్తరం" },
  summary: {
    en: "Use the whole week: understand a bank letter at the help desk, and explain a water-supply notice to a neighbour.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: బ్యాంక్ help desk దగ్గర ఉత్తరం అర్థం చేసుకోండి, నీళ్ళ సరఫరా నోటీసుని పక్కింటివారికి వివరించండి.",
  },
  topics: ["bank", "offices", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the help desk", te: "help desk దగ్గర" },
    lines: [
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Good morning, madam. I got this letter from the bank yesterday.", te: "నమస్కారం మేడమ్. నిన్న బ్యాంక్ నుంచి ఈ ఉత్తరం వచ్చింది." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Good morning. Let me see. It's dated the second of June.", te: "నమస్కారం. చూస్తాను. దీని మీద జూన్ రెండో తేదీ ఉంది." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "I don't understand it fully. Is it a problem?", te: "నాకు ఇది పూర్తిగా అర్థం కాలేదు. ఏమైనా సమస్యా?" },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "You haven't used this savings account for two years.", te: "మీరు రెండేళ్ళుగా ఈ savings account వాడలేదు." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "That's true. I use my other account. Does this mean it will be closed?", te: "నిజమే. నేను వేరే అకౌంట్ వాడుతున్నాను. అంటే దీన్ని మూసేస్తారా?" },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "No, but it will be made inactive on the thirtieth of June.", te: "లేదు, కానీ జూన్ ముప్పయ్యో తేదీన దాన్ని inactive చేస్తారు." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "What should I do to keep it active?", te: "అది active గా ఉండాలంటే నేనేం చేయాలి?" },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Just deposit or take out some money before that date.", te: "ఆ తేదీ లోపు కొంచెం డబ్బు వేయండి, లేదా తీయండి, చాలు." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "That's easy. I'll deposit 500 rupees now.", te: "అది సులువే. ఇప్పుడే 500 రూపాయలు వేస్తాను." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Good. Please fill in this slip, and keep the letter safe.", te: "మంచిది. ఈ స్లిప్ నింపండి, ఉత్తరం జాగ్రత్తగా దాచుకోండి." },
    ],
    questions: [
      {
        prompt: { en: "Where are they talking?", te: "వీళ్ళు ఎక్కడ మాట్లాడుకుంటున్నారు?" },
        options: ["At a bank's help desk", "At the post office", "At the electricity office"],
        answer: 0,
      },
      {
        prompt: { en: "What is the letter about?", te: "ఉత్తరం దేని గురించి?" },
        options: ["An account he has not used", "A new debit card", "A loan he took"],
        answer: 0,
      },
      {
        prompt: { en: "When will the account be made inactive?", te: "అకౌంట్‌ని ఎప్పుడు inactive చేస్తారు?" },
        options: ["On the thirtieth of June", "On the second of June", "Next year"],
        answer: 0,
      },
      {
        prompt: { en: "What will Srinivas do now?", te: "శ్రీనివాస్ గారు ఇప్పుడు ఏం చేస్తారు?" },
        options: ["Deposit 500 rupees", "Close the account", "Call the manager"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The clerk asks how long you have had your account here. Say since two thousand eight.",
        te: "ఇక్కడ మీ అకౌంట్ ఎప్పటి నుంచి ఉందని క్లర్క్ అడుగుతున్నారు. 2008 నుంచి అని చెప్పండి.",
      },
      expected: [
        "I've had it since two thousand eight.",
        "I have had this account since two thousand eight.",
        "Since two thousand eight.",
      ],
      options: ["I've had it since two thousand eight.", "I'm having it since two thousand eight.", "I have it from two thousand eight."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "You don't understand one word in the bank letter. Tell the clerk politely.",
        te: "బ్యాంక్ ఉత్తరంలో ఒక మాట మీకు అర్థం కాలేదు. క్లర్క్‌కి మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, I don't understand this word.", "Sorry, what does this word mean?", "Could you explain this word, please?"],
      options: ["Sorry, I don't understand this word.", "Sorry, I am not understanding this word.", "Sorry, I not understand this word."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your new passbook is not ready. Ask the clerk politely to call you when it is ready.",
        te: "మీ కొత్త పాస్‌బుక్ ఇంకా రెడీ కాలేదు. రెడీ అయ్యాక ఫోన్ చేయమని క్లర్క్‌ని మర్యాదగా అడగండి.",
      },
      expected: [
        "Could you please call me when it's ready?",
        "Please let me know when it's ready.",
        "Could you call me when the passbook is ready?",
      ],
      options: ["Could you please call me when it's ready?", "Kindly revert when it is ready.", "Call me when it's ready, okay?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A letter about a debit card", te: "debit card గురించి ఉత్తరం" },
      scene: {
        en: "You got a letter from your bank about your debit card. Mohan at the help desk explains it.",
        te: "మీ debit card గురించి బ్యాంక్ నుంచి ఉత్తరం వచ్చింది. help desk దగ్గర మోహన్ గారు దాన్ని వివరిస్తున్నారు.",
      },
      partner: { en: "Mohan (help desk)", te: "మోహన్ (help desk)" },
      voice: "b",
      skills: [
        { id: "check", label: { en: "Checking what it means", te: "అర్థం అడిగి తెలుసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. Please have a seat. How can I help you?",
          te: "నమస్కారం. కూర్చోండి. చెప్పండి, ఏం కావాలి?",
          hint: { en: "Greet him, say you got a letter, and ask him to explain it.", te: "నమస్కారం చెప్పి, ఉత్తరం వచ్చిందని, వివరించమని అడగండి." },
          replies: [
            { say: "Good morning. I got this letter. Could you explain it, please?", good: true, skill: "polite" },
            { say: "Good morning. I don't understand this letter. Can you help me?", good: true, skill: "polite" },
            { say: "Good morning. I am not understanding this letter.", good: false, skill: "check", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Of course. It says your debit card will expire on the thirty-first of July.",
          te: "తప్పకుండా. మీ debit card జూలై 31న expire అవుతుందని ఇందులో ఉంది.",
          hint: { en: "Ask if you have to come to the branch for a new card.", te: "కొత్త కార్డు కోసం బ్రాంచ్‌కి రావాలా అని అడగండి." },
          replies: [
            { say: "Does this mean I have to come to the branch?", good: true, skill: "check" },
            { say: "Do I have to come here for a new card?", good: true, skill: "check" },
            { say: "Does this means I have to come to the branch?", good: false, skill: "check" },
          ],
        },
        {
          partner: "No. A new card will be sent to your address by post.",
          te: "అక్కర్లేదు. కొత్త కార్డు పోస్టులో మీ అడ్రస్‌కి పంపిస్తారు.",
          hint: { en: "Ask when you will get it.", te: "అది ఎప్పుడు అందుతుందో అడగండి." },
          replies: [
            { say: "When will I get it?", good: true, skill: "check" },
            { say: "When will it be sent?", good: true, skill: "check" },
            { say: "When I will get it?", good: false, skill: "check", fixIt: "question" },
          ],
        },
        {
          partner: "In the second week of July. Keep using your old card till then.",
          te: "జూలై రెండో వారంలో. అప్పటి వరకు పాత కార్డే వాడుతూ ఉండండి.",
          hint: { en: "Ask if anyone from the bank will phone you about the new card.", te: "కొత్త కార్డు గురించి బ్యాంక్ నుంచి ఎవరైనా ఫోన్ చేస్తారా అని అడగండి." },
          replies: [
            { say: "Will the bank call me about the new card?", good: true, skill: "check" },
            { say: "Will anyone from the bank phone me about it?", good: true, skill: "check" },
            { say: "Will the bank calls me about the new card?", good: false, skill: "check" },
          ],
        },
        {
          partner: "No. And never give your PIN or OTP to anyone who calls.",
          te: "లేదు. ఎవరు ఫోన్ చేసినా మీ PIN, OTP ఎప్పుడూ చెప్పకండి.",
          hint: { en: "Thank him for his help, and say goodbye.", te: "సహాయం చేసినందుకు థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you for explaining. Have a nice day.", good: true, skill: "polite" },
            { say: "Thank you so much. Goodbye.", good: true, skill: "polite" },
            {
              say: "Okay, okay. I know all that.",
              good: false,
              skill: "polite",
              react: { en: "Of course. It's just a friendly reminder.", te: "అవునండి. ఊరికే గుర్తు చేశాను, అంతే." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "No water for two days", te: "రెండు రోజులు నీళ్ళు ఉండవు" },
      scene: {
        en: "The water board has put up a notice in your street. Your neighbour Fatima asks you about it.",
        te: "మీ వీధిలో water board ఒక నోటీసు పెట్టింది. పక్కింటి ఫాతిమా గారు దాని గురించి మిమ్మల్ని అడుగుతున్నారు.",
      },
      partner: { en: "Fatima (your neighbour)", te: "ఫాతిమా (పక్కింటావిడ)" },
      skills: [
        { id: "explain", label: { en: "Explaining a notice", te: "నోటీసు వివరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Did you see the new notice from the water board?",
          te: "హలో! water board కొత్త నోటీసు చూశారా?",
          hint: { en: "Say yes, you read it this morning.", te: "అవును, పొద్దున చదివానని చెప్పండి." },
          replies: [
            { say: "Yes, I read it this morning.", good: true, skill: "explain" },
            { say: "Yes, I saw it on the board this morning.", good: true, skill: "explain" },
            { say: "Yes, I read it. Why you are asking?", good: false, skill: "explain", fixIt: "question" },
          ],
        },
        {
          partner: "What does it say? I don't have my glasses with me.",
          te: "అందులో ఏముంది? నా కళ్ళజోడు నా దగ్గర లేదు.",
          hint: { en: "Tell her which two days there will be no water.", te: "ఏ రెండు రోజులు నీళ్ళు రావో ఆవిడకి చెప్పండి." },
          replies: [
            { say: "It says water will not be supplied on Tuesday and Wednesday.", good: true, skill: "explain" },
            { say: "There will be no water on Tuesday and Wednesday.", good: true, skill: "explain" },
            { say: "It say there will be no water on Tuesday and Wednesday.", good: false, skill: "explain", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Two days! Why?",
          te: "రెండు రోజులా! ఎందుకు?",
          hint: { en: "Explain the reason: the big tank will be cleaned.", te: "కారణం చెప్పండి: పెద్ద ట్యాంక్ శుభ్రం చేస్తారు." },
          replies: [
            { say: "The main tank will be cleaned. It's good for our health.", good: true, skill: "explain" },
            { say: "They are cleaning the big water tank.", good: true, skill: "explain" },
            {
              say: "How would I know? Ask the water board.",
              good: false,
              skill: "polite",
              react: { en: "Sorry, I thought the notice gave a reason.", te: "సారీ, నోటీసులో కారణం ఉందనుకున్నాను." },
            },
          ],
        },
        {
          partner: "I see. Then I'll fill all my buckets on Monday night.",
          te: "అలాగా. అయితే సోమవారం రాత్రే నా బకెట్లన్నీ నింపుకుంటాను.",
          hint: { en: "Agree, and offer to help her carry the buckets.", te: "ఒప్పుకుని, బకెట్లు మోయడంలో సాయం చేస్తానని చెప్పండి." },
          replies: [
            { say: "Good idea. I can help you carry the buckets.", good: true, skill: "polite" },
            { say: "Yes, please do. Call me if you need help.", good: true, skill: "polite" },
            { say: "Good idea. I can helping you carry the buckets.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "That's very kind of you. Thank you!",
          te: "మీరు చాలా మంచివారు. థాంక్స్!",
          hint: { en: "Say it's no trouble, and say goodbye.", te: "ఏం ఇబ్బంది లేదని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "It's no trouble at all. See you on Monday!", good: true, skill: "polite" },
            { say: "You're welcome. Bye for now!", good: true, skill: "polite" },
            { say: "No problem. See you in Monday!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

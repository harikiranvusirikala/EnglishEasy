import type { ConversationDay } from "../../types";

/** Week 80, Day 6 (CURRICULUM §5): Conversation Day — the corporator visits the colony; tea with a friend after the meeting. */
export const day: ConversationDay = {
  id: "w80-conversation",
  kind: "conversation",
  title: { en: "A Visit From the Corporator", te: "కార్పొరేటర్ సందర్శన" },
  summary: {
    en: "Use all of Stage 3: tell the corporator about your colony's problems firmly and politely, then chat over tea after the meeting.",
    te: "స్టేజ్ 3 లో నేర్చుకున్నదంతా వాడండి: కాలనీ సమస్యలు కార్పొరేటర్ గారికి గట్టిగా, మర్యాదగా చెప్పండి; మీటింగ్ తర్వాత టీ తాగుతూ కబుర్లు చెప్పండి.",
  },
  topics: ["neighbours", "offices", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The corporator's visit", te: "కార్పొరేటర్ గారి సందర్శన" },
    lines: [
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Welcome, madam. Thank you for visiting our colony.", te: "రండి మేడమ్. మా కాలనీకి వచ్చినందుకు థాంక్స్." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Thank you for inviting me. What are the main problems here?", te: "పిలిచినందుకు థాంక్స్. ఇక్కడ ముఖ్యమైన సమస్యలేంటి?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "The open drain on Lane Two hasn't been covered for months.", te: "రెండో లేన్‌లో మురుగు కాలువకి నెలలుగా మూత వేయలేదు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "That's dangerous for elders and children, isn't it?", te: "అది పెద్దవాళ్ళకీ పిల్లలకీ ప్రమాదం కదా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes. Two people have already slipped into it.", te: "అవును. ఇప్పటికే ఇద్దరు అందులో జారి పడ్డారు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "I'm sorry to hear that. I'll speak to the engineer today.", te: "వినడానికే బాధగా ఉంది. ఈ రోజే ఇంజనీర్‌తో మాట్లాడతాను." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Also, stray dogs have been chasing people at night.", te: "ఇంకా, రాత్రుళ్ళు వీధి కుక్కలు జనాల వెంట పడుతున్నాయి." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Please give me a written complaint. I'll take it up this week.", te: "నాకు రాతపూర్వకంగా ఫిర్యాదు ఇవ్వండి. ఈ వారమే దాని సంగతి చూస్తాను." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Here is our petition. Two hundred residents have signed it.", te: "ఇదిగోండి మా అర్జీ. రెండు వందల మంది సంతకం పెట్టారు." },
      { speaker: { en: "Kavitha", te: "కవిత" }, voice: "a", en: "Wonderful. The drain will probably be covered by next month.", te: "చాలా మంచిది. బహుశా వచ్చే నెలకల్లా కాలువకి మూత వేస్తారు." },
    ],
    questions: [
      {
        prompt: { en: "What is the visit about?", te: "ఈ సందర్శన దేని గురించి?" },
        options: ["The colony's problems", "A wedding in the colony", "A new bus route"],
        answer: 0,
      },
      {
        prompt: { en: "What hasn't been done for months?", te: "నెలలుగా ఏ పని జరగలేదు?" },
        options: ["The drain hasn't been covered.", "The road hasn't been repaired.", "The garbage hasn't been collected."],
        answer: 0,
      },
      {
        prompt: { en: "What does Srinivas give the corporator?", te: "శ్రీనివాస్ గారు కార్పొరేటర్ గారికి ఏం ఇచ్చారు?" },
        options: ["A petition", "A gift", "A bill"],
        answer: 0,
      },
      {
        prompt: { en: "When will the drain probably be covered?", te: "కాలువకి బహుశా ఎప్పటికి మూత వేస్తారు?" },
        options: ["By next month", "Today", "Next year"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "The corporator asks what the biggest problem is. Say it is the open drain.",
        te: "అన్నిటికంటే పెద్ద సమస్య ఏంటని కార్పొరేటర్ గారు అడుగుతున్నారు. మూత లేని మురుగు కాలువ అని చెప్పండి.",
      },
      expected: ["The biggest problem is the open drain.", "It's the open drain.", "The open drain is the biggest problem."],
      options: ["The biggest problem is the open drain.", "Biggest problem is open drain.", "The biggest problem is a open drain."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the corporator that the street lights went off two weeks ago and are still off.",
        te: "వీధి దీపాలు రెండు వారాల క్రితం ఆగిపోయాయి, ఇప్పటికీ వెలగట్లేదని కార్పొరేటర్ గారికి చెప్పండి.",
      },
      expected: [
        "The street lights haven't worked for two weeks.",
        "The street lights have been off for two weeks.",
        "The lights haven't been working for two weeks.",
      ],
      options: [
        "The street lights haven't worked for two weeks.",
        "The street lights are not working since two weeks.",
        "The street lights haven't worked since two weeks.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "After the meeting, a friend asks: You didn't speak at the meeting? You did speak, about the drain.",
        te: "'You didn't speak at the meeting?' అని మీటింగ్ తర్వాత స్నేహితులు అడుగుతున్నారు. మీరు మాట్లాడారు, కాలువ గురించి.",
      },
      expected: ["Yes, I did. I spoke about the drain.", "Yes, I did.", "Yes, I spoke about the drain."],
      options: ["Yes, I did. I spoke about the drain.", "No, I spoke about the drain.", "Yes, I did. I speaked about the drain."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Meeting the corporator", te: "కార్పొరేటర్ గారితో" },
      scene: {
        en: "Kavitha, your corporator, is meeting residents one by one. Your lane has had a water problem for months.",
        te: "మీ కార్పొరేటర్ కవిత గారు కాలనీవాళ్ళని ఒక్కొక్కరినీ కలుస్తున్నారు. మీ లేన్‌లో నెలలుగా నీళ్ళ సమస్య ఉంది.",
      },
      partner: { en: "Kavitha (the corporator)", te: "కవిత (కార్పొరేటర్)" },
      skills: [
        { id: "intro", label: { en: "Introducing yourself", te: "మిమ్మల్ని పరిచయం చేసుకోవడం" } },
        { id: "problem", label: { en: "Saying the problem", te: "సమస్య చెప్పడం" } },
        { id: "request", label: { en: "Asking for help", te: "సాయం అడగడం" } },
        { id: "polite", label: { en: "Firm but polite", te: "గట్టిగా, కానీ మర్యాదగా" } },
      ],
      turns: [
        {
          partner: "Good morning. I'm Kavitha, your corporator. How can I help you?",
          te: "గుడ్ మార్నింగ్. నేను కవిత, మీ కార్పొరేటర్‌ని. చెప్పండి, ఏం సాయం కావాలి?",
          hint: { en: "Greet her, and say your name and which lane you live in.", te: "పలకరించి, మీ పేరు, మీరు ఏ లేన్‌లో ఉంటారో చెప్పండి." },
          replies: [
            { say: "Good morning, madam. I'm Kiran, from Lane Three.", good: true, skill: "intro" },
            { say: "Good morning. I'm Sai. I live in Lane Three.", good: true, skill: "intro" },
            { say: "Good morning, madam. Myself Kiran, from Lane Three.", good: false, skill: "intro", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Nice to meet you. What's the problem in your lane?",
          te: "మిమ్మల్ని కలవడం సంతోషం. మీ లేన్‌లో సమస్య ఏంటి?",
          hint: { en: "Say there is no regular water, and since when.", te: "నీళ్ళు సరిగ్గా రావట్లేదని, ఎప్పటి నుంచో చెప్పండి." },
          replies: [
            { say: "We haven't had regular water since March.", good: true, skill: "problem" },
            { say: "We are not having regular water since March.", good: false, skill: "problem", fixIt: "duration" },
          ],
        },
        {
          partner: "Since March? Have you complained?",
          te: "మార్చి నుంచా? ఫిర్యాదు చేశారా?",
          hint: { en: "Say you have complained many times, but nothing has been done.", te: "చాలాసార్లు ఫిర్యాదు చేశారని, కానీ ఏ పనీ జరగలేదని చెప్పండి." },
          replies: [
            { say: "Yes, three times, but nothing has been done.", good: true, skill: "problem" },
            {
              say: "Of course! You people never do anything.",
              good: false,
              skill: "polite",
              react: { en: "Please, let's stay calm. I'm here to help.", te: "దయచేసి ప్రశాంతంగా మాట్లాడదాం. నేను సాయం చేయడానికే వచ్చాను." },
            },
          ],
        },
        {
          partner: "I understand. What would help most right now?",
          te: "అర్థమైంది. ఇప్పటికి ఏం చేస్తే ఎక్కువ ఉపయోగం?",
          hint: { en: "Ask politely for a water tanker until the pipe is fixed.", te: "పైపు బాగు చేసేదాకా ఒక వాటర్ ట్యాంకర్ పంపమని మర్యాదగా అడగండి." },
          replies: [
            { say: "Could you send a tanker until the pipe is fixed?", good: true, skill: "request" },
            { say: "A tanker twice a week would really help us.", good: true, skill: "request" },
            { say: "Could you sending a tanker until the pipe is fixed?", good: false, skill: "request" },
          ],
        },
        {
          partner: "Yes. The tanker will probably start from Monday.",
          te: "సరే. బహుశా సోమవారం నుంచి ట్యాంకర్ వస్తుంది.",
          hint: { en: "Thank her warmly, and say goodbye politely.", te: "మనస్ఫూర్తిగా థాంక్స్ చెప్పి, మర్యాదగా వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you so much, madam. Have a good day.", good: true, skill: "polite" },
            { say: "Thank you so much, madam. Have good day.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Tea after the meeting", te: "మీటింగ్ తర్వాత టీ" },
      scene: {
        en: "The meeting is over. You and your friend Mohan have tea at the stall near the gate.",
        te: "మీటింగ్ అయిపోయింది. మీరు, మీ స్నేహితుడు మోహన్ గారు గేటు దగ్గర టీ స్టాల్‌లో టీ తాగుతున్నారు.",
      },
      partner: { en: "Mohan (your friend)", te: "మోహన్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "agree", label: { en: "Agreeing", te: "ఒప్పుకోవడం" } },
        { id: "guess", label: { en: "Guessing kindly", te: "మర్యాదగా ఊహించడం" } },
        { id: "persuade", label: { en: "Persuading gently", te: "మెల్లగా ఒప్పించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "That was a good meeting, wasn't it?",
          te: "మీటింగ్ బాగా జరిగింది కదా?",
          hint: { en: "Agree, and say how you feel now.", te: "ఒప్పుకుని, ఇప్పుడు మీకు ఎలా అనిపిస్తోందో చెప్పండి." },
          replies: [
            { say: "Yes, it was. I feel hopeful now.", good: true, skill: "agree" },
            { say: "Yes, it is. I feel hopeful now.", good: false, skill: "agree" },
          ],
        },
        {
          partner: "I wish the meeting was a little longer.",
          te: "మీటింగ్ ఇంకొంచెం సేపు జరిగితే బాగుండేది.",
          hint: { en: "Agree in two or three words, the English way.", te: "ఇంగ్లీష్ పద్ధతిలో, రెండు మూడు మాటల్లో ఒప్పుకోండి." },
          replies: [
            { say: "So do I.", good: true, skill: "agree" },
            { say: "Me too.", good: true, skill: "agree" },
            { say: "So am I.", good: false, skill: "agree" },
          ],
        },
        {
          partner: "Joseph didn't come today. That's strange.",
          te: "జోసెఫ్ గారు ఈ రోజు రాలేదు. వింతగా ఉంది.",
          hint: { en: "Guess a kind reason, and suggest calling him.", te: "ఒక మంచి కారణం ఊహించి, ఆయనకి ఫోన్ చేద్దామని చెప్పండి." },
          replies: [
            { say: "He might be unwell. Let's call him.", good: true, skill: "guess" },
            { say: "He must be busy with something. Let's call him later.", good: true, skill: "guess" },
            {
              say: "He must be sleeping. He's so lazy.",
              good: false,
              skill: "polite",
              react: { en: "That's not kind. He hasn't been well lately.", te: "అలా అనకూడదు. ఈ మధ్య ఆయన ఒంట్లో బాగుండట్లేదు." },
            },
          ],
        },
        {
          partner: "Shall we join the cleaning drive on Sunday?",
          te: "ఆదివారం శుభ్రత కార్యక్రమంలో పాల్గొందామా?",
          hint: { en: "Say yes, and persuade him to bring a friend too.", te: "సరే అని, ఇంకో స్నేహితుడిని కూడా తీసుకురమ్మని ఆయన్ని ఒప్పించండి." },
          replies: [
            { say: "Yes! You should really bring Prasad too.", good: true, skill: "persuade" },
            { say: "Yes. If we all come, we'll finish quickly.", good: true, skill: "persuade" },
            { say: "Yes! You should really to bring Prasad too.", good: false, skill: "persuade" },
          ],
        },
        {
          partner: "Good idea. Would you like more tea?",
          te: "మంచి ఆలోచన. ఇంకొంచెం టీ తాగుతారా?",
          hint: { en: "Say no politely, and say goodbye until Sunday.", te: "మర్యాదగా వద్దని చెప్పి, ఆదివారం కలుద్దామని బై చెప్పండి." },
          replies: [
            { say: "No, thank you. I should go now. See you on Sunday!", good: true, skill: "polite" },
            { say: "No, thank you. I should go now. See you in Sunday!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

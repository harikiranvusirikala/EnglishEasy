import type { ConversationDay } from "../../types";

/** Week 53, Day 6 (CURRICULUM §5): Conversation Day — a long wait at the hospital, asking the OP staff politely, and a call to a friend. */
export const day: ConversationDay = {
  id: "w53-conversation",
  kind: "conversation",
  title: { en: "A Long Wait at the Hospital", te: "ఆసుపత్రిలో చాలాసేపు" },
  summary: {
    en: "Use the whole week: ask about a long wait at the hospital politely, and tell a friend about your long morning.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఆసుపత్రిలో చాలాసేపు ఎదురుచూసినప్పుడు మర్యాదగా అడగండి, మీ పొడవైన పొద్దు గురించి స్నేహితులకి చెప్పండి.",
  },
  topics: ["doctor", "health", "time", "phone"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "In the OP waiting area", te: "OP వెయిటింగ్ ఏరియాలో" },
    lines: [
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Excuse me, is this the queue for Dr Mary?", te: "ఎక్స్‌క్యూజ్ మీ, డాక్టర్ మేరీ గారి క్యూ ఇదేనా?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Yes, it is. But it's moving very slowly today.", te: "అవునండి. కానీ ఈ రోజు చాలా నెమ్మదిగా కదులుతోంది." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "How long have you been waiting?", te: "మీరు ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారు?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "I've been sitting here since half past eight.", te: "ఎనిమిదిన్నర నుంచి ఇక్కడ కూర్చుని ఉన్నాను." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "That's a long time! Has the doctor come?", te: "చాలాసేపైంది! డాక్టర్ గారు వచ్చారా?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Yes, but she has been in the operation theatre all morning.", te: "వచ్చారు, కానీ పొద్దున్నుంచీ ఆపరేషన్ థియేటర్‌లోనే ఉన్నారు." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "I see. My token is fifty-two. What's yours?", te: "అలాగా. నా టోకెన్ యాభై రెండు. మీదెంత?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Forty-five. She has seen only ten patients so far.", te: "నలభై ఐదు. ఇప్పటిదాకా ఆవిడ పదిమందినే చూశారు." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Then I'll get a cup of tea. Shall I bring you one?", te: "అయితే నేను ఒక టీ తాగొస్తాను. మీకు కూడా తెమ్మంటారా?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "That's kind of you. Yes, please, without sugar.", te: "మీరు చాలా మంచివారు. సరే, ప్లీజ్, చక్కెర లేకుండా." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["In a hospital queue", "In a bank queue", "At a bus stand"],
        answer: 0,
      },
      {
        prompt: { en: "Since what time has Salma been waiting?", te: "సల్మా గారు ఎన్ని గంటల నుంచి ఎదురుచూస్తున్నారు?" },
        options: ["Since half past eight", "Since ten o'clock", "Since nine o'clock"],
        answer: 0,
      },
      {
        prompt: { en: "Why is the queue so slow?", te: "క్యూ ఇంత నెమ్మదిగా ఎందుకు కదులుతోంది?" },
        options: ["The doctor has been in the operation theatre.", "The doctor has not come today.", "The computer is not working."],
        answer: 0,
      },
      {
        prompt: { en: "How many patients has the doctor seen so far?", te: "ఇప్పటిదాకా డాక్టర్ గారు ఎంతమంది పేషెంట్లని చూశారు?" },
        options: ["Ten", "Forty-five", "Fifty-two"],
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
        en: "Your friend calls and asks where you are. You have been at the hospital since eight.",
        te: "ఎక్కడున్నారని స్నేహితులు ఫోన్‌లో అడుగుతున్నారు. మీరు ఎనిమిది నుంచి ఆసుపత్రిలో ఉన్నారు.",
      },
      expected: ["I've been at the hospital since eight.", "I've been here since eight o'clock.", "I've been waiting at the hospital since eight."],
      options: ["I've been at the hospital since eight.", "I am at the hospital since eight.", "I've been at hospital since eight."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Ask the nurse how long the doctor has been in the operation theatre.",
        te: "డాక్టర్ గారు ఎంతసేపట్నుంచి ఆపరేషన్ థియేటర్‌లో ఉన్నారో నర్స్ గారిని అడగండి.",
      },
      expected: ["How long has the doctor been in the operation theatre?", "How long has the doctor been there?"],
      options: [
        "How long has the doctor been in the operation theatre?",
        "How long have the doctor been in the operation theatre?",
        "How long the doctor is in the operation theatre?",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "A man in the queue asks if you know Dr Mary. You have known her for years. Answer.",
        te: "డాక్టర్ మేరీ గారు మీకు తెలుసా అని క్యూలో ఒకాయన అడుగుతున్నారు. ఆవిడ మీకు ఏళ్ళ నుంచి తెలుసు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I've known her for years.", "Yes, I have known her for many years.", "Yes, for many years."],
      options: ["Yes, I've known her for years.", "Yes, I've been knowing her for years.", "Yes, I am knowing her for years."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Asking the OP staff about the wait", te: "ఎదురుచూపు గురించి OP సిబ్బందిని అడగడం" },
      scene: {
        en: "You have been in the OP queue since half past eight. You go to the desk. Kumar works there.",
        te: "ఎనిమిదిన్నర నుంచి మీరు OP క్యూలో ఉన్నారు. డెస్క్ దగ్గరికి వెళ్ళారు. అక్కడ కుమార్ గారు పనిచేస్తారు.",
      },
      partner: { en: "Kumar (at the OP desk)", te: "కుమార్ (OP డెస్క్ దగ్గర)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Asking about the wait", te: "ఎదురుచూపు గురించి అడగడం" } },
        { id: "polite", label: { en: "Staying calm", te: "ప్రశాంతంగా ఉండటం" } },
      ],
      turns: [
        {
          partner: "Yes, please? How can I help you?",
          te: "చెప్పండి. ఏం కావాలి?",
          hint: { en: "Greet him, give your token number, forty-five, and ask when your turn will come.", te: "పలకరించి, మీ టోకెన్ నంబర్ నలభై ఐదు అని చెప్పి, మీ వంతు ఎప్పుడు వస్తుందో అడగండి." },
          replies: [
            { say: "Good morning. My token is forty-five. When will my turn come?", good: true, skill: "ask" },
            { say: "Good morning. My token is forty-five. When my turn will come?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "The doctor is in the operation theatre. It will take some time.",
          te: "డాక్టర్ గారు ఆపరేషన్ థియేటర్‌లో ఉన్నారు. కొంచెం టైమ్ పడుతుంది.",
          hint: { en: "Say calmly how long you have been waiting.", te: "ఎంతసేపట్నుంచి ఎదురుచూస్తున్నారో ప్రశాంతంగా చెప్పండి." },
          replies: [
            { say: "I understand. But I've been waiting since half past eight.", good: true, skill: "ask" },
            { say: "I understand. But I am waiting from half past eight.", good: false, skill: "ask", fixIt: "duration" },
          ],
        },
        {
          partner: "I know. She has been in the theatre since nine. It was an emergency.",
          te: "తెలుసండీ. తొమ్మిది నుంచి ఆవిడ థియేటర్‌లోనే ఉన్నారు. అది ఎమర్జెన్సీ.",
          hint: { en: "Ask about the time still left.", te: "ఇంకా ఎంత టైమ్ పడుతుందో అడగండి." },
          replies: [
            { say: "How much longer will it take, roughly?", good: true, skill: "ask" },
            {
              say: "Emergency, emergency! Every day you say the same thing!",
              good: false,
              skill: "polite",
              react: { en: "Please, it's a real emergency. A patient is very serious.", te: "నిజంగా ఎమర్జెన్సీ అండీ. ఒక పేషెంట్ పరిస్థితి చాలా సీరియస్‌గా ఉంది." },
            },
          ],
        },
        {
          partner: "About forty minutes. You can sit in the waiting area.",
          te: "దాదాపు నలభై నిమిషాలు. మీరు వెయిటింగ్ ఏరియాలో కూర్చోవచ్చు.",
          hint: { en: "Thank him, and ask if there is drinking water nearby.", te: "థాంక్స్ చెప్పి, దగ్గర్లో తాగే నీళ్ళు ఉన్నాయా అని అడగండి." },
          replies: [
            { say: "Thank you. Is there any drinking water here?", good: true, skill: "ask" },
            { say: "Thank you. There is any drinking water here?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, near the lift. I'll call your token when she comes.",
          te: "ఉన్నాయి, lift దగ్గర. ఆవిడ రాగానే మీ టోకెన్ పిలుస్తాను.",
          hint: { en: "Thank him, and end politely.", te: "థాంక్స్ చెప్పి, మర్యాదగా ముగించండి." },
          replies: [
            { say: "Thank you so much. I'll wait over there.", good: true, skill: "polite" },
            { say: "Thank you so much. I'll waiting over there.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A call about your long morning", te: "పొడవైన పొద్దు గురించి ఒక ఫోన్" },
      scene: {
        en: "You are still at the hospital for your yearly check-up. Your friend Geetha calls you.",
        te: "సంవత్సరానికొకసారి చేయించుకునే check-up కోసం మీరు ఇంకా ఆసుపత్రిలోనే ఉన్నారు. మీ స్నేహితురాలు గీత గారు ఫోన్ చేశారు.",
      },
      partner: { en: "Geetha (your friend)", te: "గీత (మీ స్నేహితురాలు)" },
      skills: [
        { id: "tell", label: { en: "Telling about your morning", te: "మీ పొద్దు గురించి చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! I've been calling you since eleven! Where are you?",
          te: "హలో! పదకొండు నుంచి మీకు ఫోన్ చేస్తూనే ఉన్నాను! ఎక్కడున్నారు?",
          hint: { en: "Say sorry, and tell her where you have been since morning.", te: "సారీ చెప్పి, పొద్దున్నుంచి ఎక్కడున్నారో చెప్పండి." },
          replies: [
            { say: "Sorry! I've been at the hospital all morning.", good: true, skill: "tell" },
            { say: "Sorry! I am at the hospital since morning.", good: false, skill: "tell", fixIt: "duration" },
          ],
        },
        {
          partner: "Oh! Is everything okay? Are you unwell?",
          te: "అయ్యో! అంతా బాగానే ఉందా? ఒంట్లో బాగాలేదా?",
          hint: { en: "Say it is only your yearly check-up, but the wait is long.", te: "ఇది మామూలు సంవత్సర check-up మాత్రమే అని, కానీ ఎదురుచూపు ఎక్కువగా ఉందని చెప్పండి." },
          replies: [
            { say: "It's only my yearly check-up. But the wait is very long.", good: true, skill: "tell" },
            { say: "It's only my yearly check-up. But wait is very long.", good: false, skill: "tell", fixIt: "article" },
          ],
        },
        {
          partner: "How many tests have you had?",
          te: "ఎన్ని టెస్టులు చేయించుకున్నారు?",
          hint: { en: "Say two are finished, and now you are waiting for the doctor.", te: "రెండు అయిపోయాయని, ఇప్పుడు డాక్టర్ గారి కోసం ఎదురుచూస్తున్నారని చెప్పండి." },
          replies: [
            { say: "I've had two tests. Now I'm waiting for the doctor.", good: true, skill: "tell" },
            { say: "I've had two test. Now I'm waiting for the doctor.", good: false, skill: "tell", fixIt: "plural" },
          ],
        },
        {
          partner: "You sound tired. Shall I bring you some lunch?",
          te: "మీ గొంతు వింటుంటే అలసిపోయినట్టున్నారు. మీకు భోజనం తీసుకురానా?",
          hint: { en: "Thank her kindly, but say no; you will eat after the doctor.", te: "మర్యాదగా థాంక్స్ చెప్పి, వద్దని చెప్పండి; డాక్టర్‌ని కలిశాక తింటారు." },
          replies: [
            { say: "That's kind of you, but no. I'll eat after this.", good: true, skill: "polite" },
            {
              say: "No! Don't come here. Stop disturbing me.",
              good: false,
              skill: "polite",
              react: { en: "Oh, okay. I was only trying to help.", te: "ఓ, సరే అండీ. సహాయం చేద్దామనే అడిగాను." },
            },
          ],
        },
        {
          partner: "Okay. Call me when you're free. Take care!",
          te: "సరే. ఖాళీ అయ్యాక ఫోన్ చేయండి. జాగ్రత్త!",
          hint: { en: "Promise to call her, and say goodbye.", te: "ఫోన్ చేస్తానని మాట ఇచ్చి, బై చెప్పండి." },
          replies: [
            { say: "Sure, I'll call you in the evening. Bye!", good: true, skill: "polite" },
            { say: "Sure, I'll calling you in the evening. Bye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

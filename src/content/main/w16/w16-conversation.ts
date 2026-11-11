import type { ConversationDay } from "../../types";

/** Week 16, Day 6 (CURRICULUM §4): Conversation Day at a hospital check-up — registering at the desk, then a full talk with the doctor. */
export const day: ConversationDay = {
  id: "w16-conversation",
  kind: "conversation",
  title: { en: "A Hospital Check-Up", te: "ఆసుపత్రిలో చెకప్" },
  summary: {
    en: "Use the whole week: register at the hospital desk, then tell the doctor your symptoms, how long, and your BP and sugar.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఆసుపత్రి కౌంటర్‌లో పేరు రాయించుకుని, డాక్టర్‌కి మీ లక్షణాలు, ఎన్ని రోజులుగా ఉన్నాయో, BP, షుగర్ గురించి చెప్పండి.",
  },
  topics: ["health", "doctor"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "With the doctor", te: "డాక్టర్ దగ్గర" },
    lines: [
      { speaker: { en: "Dr Srinivas", te: "డాక్టర్ శ్రీనివాస్" }, voice: "b", en: "Good morning. Please sit down. What's the problem?", te: "నమస్కారం. కూర్చోండి. ఏంటి సమస్య?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Doctor, I feel breathless when I climb stairs.", te: "డాక్టర్ గారూ, మెట్లు ఎక్కితే నాకు ఆయాసం వస్తోంది." },
      { speaker: { en: "Dr Srinivas", te: "డాక్టర్ శ్రీనివాస్" }, voice: "b", en: "How long have you had this problem?", te: "ఈ సమస్య ఎన్ని రోజులుగా ఉంది?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "For about two weeks. My feet are swollen too.", te: "సుమారు రెండు వారాలుగా. నా పాదాలు కూడా వాచాయి." },
      { speaker: { en: "Dr Srinivas", te: "డాక్టర్ శ్రీనివాస్" }, voice: "b", en: "Do you have BP or sugar?", te: "మీకు BP కానీ షుగర్ కానీ ఉందా?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I have diabetes. My sugar is usually under control.", te: "నాకు షుగర్ ఉంది. మామూలుగా కంట్రోల్‌లోనే ఉంటుంది." },
      { speaker: { en: "Dr Srinivas", te: "డాక్టర్ శ్రీనివాస్" }, voice: "b", en: "Okay. Let's do a blood test and an X-ray.", te: "సరే. ఒక బ్లడ్ టెస్ట్, ఒక X-ray చేద్దాం." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "When will the reports be ready?", te: "రిపోర్టులు ఎప్పుడు రెడీ అవుతాయి?" },
      { speaker: { en: "Dr Srinivas", te: "డాక్టర్ శ్రీనివాస్" }, voice: "b", en: "Come tomorrow on an empty stomach. Reports by evening.", te: "రేపు ఖాళీ కడుపుతో రండి. సాయంత్రానికి రిపోర్టులు వస్తాయి." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Okay, doctor. Thank you. I'll come early.", te: "సరే డాక్టర్ గారూ. థాంక్యూ. పొద్దున్నే వస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుతున్నారు?" },
        options: ["Sarala's health", "A train ticket", "A festival"],
        answer: 0,
      },
      {
        prompt: { en: "When did Sarala's problem start?", te: "సరళ సమస్య ఎప్పుడు మొదలైంది?" },
        options: ["About two weeks ago", "About two days ago", "About two months ago"],
        answer: 0,
      },
      {
        prompt: { en: "What else is wrong?", te: "ఇంకా ఏం సమస్య ఉంది?" },
        options: ["Her feet are swollen.", "She has a bad cough.", "Her skin is itchy."],
        answer: 0,
      },
      {
        prompt: { en: "How should Sarala come for the tests?", te: "టెస్టులకి సరళ ఎలా రావాలి?" },
        options: ["On an empty stomach", "After a good breakfast", "With her old reports"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "The doctor asks how long you have had the fever. Say two weeks.",
        te: "జ్వరం ఎన్ని రోజులుగా ఉందని డాక్టర్ అడిగారు. రెండు వారాలు అని చెప్పండి.",
      },
      expected: ["For two weeks.", "I've had it for two weeks.", "About two weeks."],
      options: ["For two weeks.", "Since two weeks.", "From two weeks."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "At the hospital desk, say you want to see a doctor for a check-up.",
        te: "ఆసుపత్రి కౌంటర్‌లో చెకప్ కోసం డాక్టర్‌ని కలవాలని చెప్పండి.",
      },
      expected: ["I'd like to see a doctor for a check-up.", "I want to see a doctor for a check-up.", "I need a check-up, please."],
      options: ["I'd like to see a doctor for a check-up.", "I want to see doctor for check-up.", "Doctor I want to see for check-up."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the doctor if you can eat mangoes.",
        te: "మామిడిపండ్లు తినొచ్చా అని డాక్టర్‌ని అడగండి.",
      },
      expected: ["Can I eat mangoes?", "Can I eat mangoes, doctor?", "Are mangoes okay for me?"],
      options: ["Can I eat mangoes?", "I can eat mangoes?", "Can I eating mangoes?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "At the hospital desk", te: "ఆసుపత్రి కౌంటర్‌లో" },
      scene: {
        en: "You are at a hospital for a check-up. Raju at the front desk registers you.",
        te: "మీరు చెకప్ కోసం ఆసుపత్రికి వచ్చారు. కౌంటర్‌లో రాజు మీ పేరు రాసుకుంటున్నారు.",
      },
      partner: { en: "Raju (front desk)", te: "రాజు (కౌంటర్ దగ్గర)" },
      voice: "b",
      skills: [
        { id: "register", label: { en: "Registering", te: "పేరు నమోదు చేయించుకోవడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. New patient or old patient?",
          te: "నమస్కారం. కొత్త పేషెంటా, పాత పేషెంటా?",
          hint: { en: "Say it is your first visit here.", te: "ఇక్కడికి మొదటిసారి వచ్చారని చెప్పండి." },
          replies: [
            { say: "New patient. This is my first visit.", good: true, skill: "register" },
            {
              say: "New. Hurry up, I am waiting.",
              good: false,
              skill: "polite",
              react: { en: "Sorry for the wait. I'll be quick.", te: "ఆలస్యం అయినందుకు సారీ. త్వరగా చేస్తాను." },
            },
          ],
        },
        {
          partner: "Okay. Your name and age, please?",
          te: "సరే. మీ పేరు, వయసు చెప్తారా?",
          hint: { en: "Give your own name and age.", te: "మీ పేరు, వయసు చెప్పండి." },
          replies: [
            { say: "My name is Kiran. I'm sixty-two.", good: true, skill: "register" },
            { say: "Myself Kiran. Age sixty-two.", good: false, skill: "register", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Which doctor do you want to see?",
          te: "ఏ డాక్టర్‌ని కలవాలి?",
          hint: { en: "Say what kind of check-up you need, and what for.", te: "ఏ చెకప్ కావాలో, దేని కోసమో చెప్పండి." },
          replies: [
            { say: "A general check-up, please. For BP and sugar.", good: true, skill: "register" },
            { say: "General check-up. I am having BP and sugar.", good: false, skill: "register", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Okay. That's 300 rupees. Please wait for your turn.",
          te: "సరే. 300 రూపాయలు. మీ వంతు వచ్చే దాకా ఆగండి.",
          hint: { en: "Pay, and ask where to wait.", te: "డబ్బు ఇచ్చి, ఎక్కడ ఆగాలో అడగండి." },
          replies: [
            { say: "Here you are. Where should I wait?", good: true, skill: "register" },
            { say: "Here you are. Where I should wait?", good: false, skill: "register", fixIt: "question" },
          ],
        },
        {
          partner: "Room 4, on the first floor.",
          te: "ఫస్ట్ ఫ్లోర్‌లో నాలుగో నంబర్ రూమ్.",
          hint: { en: "Thank him before you go.", te: "వెళ్ళే ముందు ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you very much.", good: true, skill: "polite" },
            { say: "Thanks. I'll go to first floor now.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A full talk with the doctor", te: "డాక్టర్‌తో పూర్తిగా మాట్లాడటం" },
      scene: {
        en: "It is your turn. Dr Geetha asks about your problem.",
        te: "మీ వంతు వచ్చింది. డాక్టర్ గీత మీ సమస్య గురించి అడుగుతున్నారు.",
      },
      partner: { en: "Dr Geetha (a doctor)", te: "డాక్టర్ గీత" },
      skills: [
        { id: "symptom", label: { en: "Telling symptoms", te: "లక్షణాలు చెప్పడం" } },
        { id: "ask", label: { en: "Asking the doctor", te: "డాక్టర్‌ని అడగడం" } },
      ],
      turns: [
        {
          partner: "Good morning. Tell me, what's the trouble?",
          te: "నమస్కారం. చెప్పండి, ఏంటి ఇబ్బంది?",
          hint: { en: "Tell her about the red marks on your back, and how they feel.", te: "వీపు మీద వచ్చిన దద్దుర్ల గురించి, అవి ఎలా ఉన్నాయో చెప్పండి." },
          replies: [
            { say: "I have a rash on my back. It's very itchy.", good: true, skill: "symptom" },
            { say: "Rash is there on my back. Itching.", good: false, skill: "symptom", fixIt: "article" },
          ],
        },
        {
          partner: "How long have you had it?",
          te: "ఇది ఎన్ని రోజులుగా ఉంది?",
          hint: { en: "Say how long: about five days.", te: "ఎంత కాలమో చెప్పండి: సుమారు ఐదు రోజులు." },
          replies: [
            { say: "For about five days.", good: true, skill: "symptom" },
            { say: "Since five days, doctor.", good: false, skill: "symptom", fixIt: "preposition" },
          ],
        },
        {
          partner: "Do you have any allergies?",
          te: "మీకు ఏమైనా అలర్జీలు ఉన్నాయా?",
          hint: { en: "Say no, but tell her about your sugar.", te: "లేవని చెప్పి, మీ షుగర్ గురించి చెప్పండి." },
          replies: [
            { say: "No, but I have diabetes.", good: true, skill: "symptom" },
            { say: "No, but I am sugar patient.", good: false, skill: "symptom", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Okay. Please do a blood test today.",
          te: "సరే. ఈ రోజే బ్లడ్ టెస్ట్ చేయించుకోండి.",
          hint: { en: "Ask when you will get the report.", te: "రిపోర్ట్ ఎప్పుడు వస్తుందో అడగండి." },
          replies: [
            { say: "Okay. When will the report be ready?", good: true, skill: "ask" },
            { say: "Okay. When the report will come?", good: false, skill: "ask", fixIt: "question" },
            {
              say: "Another test? You just want more money.",
              good: false,
              skill: "ask",
              react: { en: "No, no. I need it to choose the right medicine.", te: "లేదండీ. సరైన మందు ఇవ్వడానికి ఇది అవసరం." },
            },
          ],
        },
        {
          partner: "By evening. And avoid sweets for now.",
          te: "సాయంత్రానికి. ఇప్పటికి స్వీట్లు మానేయండి.",
          hint: { en: "Agree, and thank her before you leave.", te: "సరే అని, వెళ్ళే ముందు ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, doctor. Thank you very much.", good: true },
            { say: "Okay, doctor. I will avoid to eat sweets.", good: false },
          ],
        },
      ],
    },
  ],
};

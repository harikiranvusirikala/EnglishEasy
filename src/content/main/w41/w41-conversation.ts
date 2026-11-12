import type { ConversationDay } from "../../types";

/** Week 41, Day 6 (CURRICULUM §5): Conversation Day — a day that went wrong; a wedding journey and a rainy night out. */
export const day: ConversationDay = {
  id: "w41-conversation",
  kind: "conversation",
  title: { en: "What a Day!", te: "ఏం రోజు అది!" },
  summary: {
    en: "Use the whole week: tell a friend about a journey that went wrong, and ask good questions about a neighbour's story.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: సరిగ్గా జరగని ప్రయాణం గురించి స్నేహితులకి చెప్పండి, పక్కింటివారి కథ వింటూ మంచి ప్రశ్నలు అడగండి.",
  },
  topics: ["travel", "people", "weather"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Imran's bad day", te: "ఇమ్రాన్ గారి కష్టమైన రోజు" },
    lines: [
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Imran, you look tired. Is everything okay?", te: "ఇమ్రాన్ గారూ, అలసిపోయినట్టున్నారు. అంతా బాగానే ఉందా?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "What a day I had yesterday! First, my bus broke down.", te: "నిన్న నాకు ఏం రోజు అది! ముందు, నా బస్సు చెడిపోయింది." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Oh no! Where were you going?", te: "అయ్యో! ఎక్కడికి వెళ్తున్నారు?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "To the bank in Kurnool. So I walked for half an hour.", te: "కర్నూలులో బ్యాంక్‌కి. అందుకే అరగంట నడిచాను." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "What happened next?", te: "తర్వాత ఏమైంది?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "While I was walking, it started to pour. I got completely wet.", te: "నేను నడుస్తుండగా కుండపోత వర్షం మొదలైంది. పూర్తిగా తడిసిపోయాను." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Did you have an umbrella?", te: "మీ దగ్గర గొడుగు ఉందా?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "No! And when I reached the bank, it was closed. It was a holiday!", te: "లేదు! పైగా బ్యాంక్‌కి చేరేసరికి అది మూసేసి ఉంది. ఆ రోజు సెలవు!" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Oh dear! So what did you do in the end?", te: "అయ్యో పాపం! మరి చివరికి ఏం చేశారు?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "In the end, I had some hot tea and took an auto home.", te: "చివరికి కొంచెం వేడి టీ తాగి, ఆటోలో ఇంటికి వచ్చేశాను." },
    ],
    questions: [
      {
        prompt: { en: "What is Imran talking about?", te: "ఇమ్రాన్ గారు దేని గురించి చెప్తున్నారు?" },
        options: ["A bad day he had", "A new bank account", "A trip to the temple"],
        answer: 0,
      },
      {
        prompt: { en: "Where was Imran going?", te: "ఇమ్రాన్ గారు ఎక్కడికి వెళ్తున్నారు?" },
        options: ["To the bank", "To the market", "To the hospital"],
        answer: 0,
      },
      {
        prompt: { en: "Why was the bank closed?", te: "బ్యాంక్ ఎందుకు మూసేసి ఉంది?" },
        options: ["It was a holiday.", "There was a power cut.", "It was too late."],
        answer: 0,
      },
      {
        prompt: { en: "How did Imran go home?", te: "ఇమ్రాన్ గారు ఇంటికి ఎలా వెళ్ళారు?" },
        options: ["By auto", "By bus", "On foot"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your friend asks if you had your umbrella on the day of the big rain. You did.",
        te: "పెద్ద వర్షం పడిన రోజు మీ దగ్గర గొడుగు ఉందా అని స్నేహితులు అడుగుతున్నారు. ఉంది.",
      },
      expected: ["Yes, I had my umbrella with me.", "Yes, I had my umbrella.", "Yes, luckily I had my umbrella."],
      options: ["Yes, I had my umbrella with me.", "Yes, I was having my umbrella with me.", "Yes, I having my umbrella with me."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks about your neighbour Imran. He goes to the bank every Monday. Tell her.",
        te: "మీ పక్కింటి ఇమ్రాన్ గారి గురించి స్నేహితురాలు అడుగుతున్నారు. ఆయన ప్రతి సోమవారం బ్యాంక్‌కి వెళ్తారు. ఆవిడకి చెప్పండి.",
      },
      expected: ["He goes to the bank every Monday.", "Imran goes to the bank every Monday.", "He goes there every Monday."],
      options: ["He goes to the bank every Monday.", "He go to the bank every Monday.", "He is going to the bank every Monday."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend says she missed her train yesterday. Ask what time she reached the station.",
        te: "నిన్న తన రైలు మిస్ అయిందని స్నేహితురాలు చెప్పారు. స్టేషన్‌కి ఎన్ని గంటలకి చేరారని అడగండి.",
      },
      expected: ["What time did you reach the station?", "When did you reach the station?", "What time did you get to the station?"],
      options: ["What time did you reach the station?", "What time you reached the station?", "What time did you reached the station?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "The wedding journey", te: "పెళ్ళి ప్రయాణం" },
      scene: {
        en: "Your friend Anitha asks about the wedding in Nellore last Sunday. The journey did not go well.",
        te: "పోయిన ఆదివారం నెల్లూరులో జరిగిన పెళ్ళి గురించి మీ స్నేహితురాలు అనిత గారు అడుగుతున్నారు. ప్రయాణం సరిగ్గా జరగలేదు.",
      },
      partner: { en: "Anitha (your friend)", te: "అనిత (మీ స్నేహితురాలు)" },
      skills: [
        { id: "story", label: { en: "Telling what happened", te: "జరిగింది చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! How was the wedding in Nellore?",
          te: "హాయ్! నెల్లూరులో పెళ్ళి ఎలా జరిగింది?",
          hint: { en: "Say you enjoyed the wedding, but the journey went badly.", te: "పెళ్ళి బాగా ఎంజాయ్ చేశారని, కానీ ప్రయాణం సరిగ్గా జరగలేదని చెప్పండి." },
          replies: [
            { say: "The wedding was lovely, but the journey was terrible!", good: true, skill: "story" },
            { say: "Wedding was lovely, but journey was terrible!", good: false, skill: "story", fixIt: "article" },
          ],
        },
        {
          partner: "Oh! What happened?",
          te: "అయ్యో! ఏమైంది?",
          hint: { en: "Say where you were, and what the train did with no warning.", te: "మీరు ఎక్కడ ఉన్నారో, రైలు ఉన్నట్టుండి ఏం చేసిందో చెప్పండి." },
          replies: [
            { say: "We were on the train when it suddenly stopped.", good: true, skill: "story" },
            { say: "We on the train when it suddenly stopped.", good: false, skill: "story", fixIt: "be" },
          ],
        },
        {
          partner: "Stopped? For how long?",
          te: "ఆగిపోయిందా? ఎంతసేపు?",
          hint: { en: "Say how long it stopped, and give the bad news about food.", te: "ఎంతసేపు ఆగిందో చెప్పి, తిండి గురించి చెడు వార్త చెప్పండి." },
          replies: [
            { say: "For two hours! Unfortunately, we had no food with us.", good: true, skill: "story" },
            { say: "For two hour! Unfortunately, we had no food with us.", good: false, skill: "story", fixIt: "plural" },
          ],
        },
        {
          partner: "Two hours! So did you miss the muhurtham?",
          te: "రెండు గంటలా! మరి ముహూర్తం మిస్ అయ్యారా?",
          hint: { en: "Give the good news: you got there just in time.", te: "మంచి వార్త చెప్పండి: సరిగ్గా సమయానికి చేరుకున్నారు." },
          replies: [
            { say: "Luckily, we reached just in time for the muhurtham.", good: true, skill: "story" },
            {
              say: "Why do you care? It was not your wedding.",
              good: false,
              skill: "polite",
              react: { en: "Sorry! I was just asking.", te: "సారీ! ఊరికే అడిగాను." },
            },
          ],
        },
        {
          partner: "Thank God! You look tired. Get some rest today.",
          te: "హమ్మయ్య! అలసిపోయినట్టున్నారు. ఈ రోజు కొంచెం విశ్రాంతి తీసుకోండి.",
          hint: { en: "Agree, thank her for asking, and say goodbye.", te: "సరే అని, అడిగినందుకు థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Yes, I will. Thanks for asking. Bye!", good: true, skill: "polite" },
            { say: "Yes, I will take rest. Thanks for asking. Bye!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A rainy night out", te: "వర్షంలో ఒక రాత్రి" },
      scene: {
        en: "Your neighbour Srinivas looks tired this morning. He had a hard night in the rain.",
        te: "పక్కింటి శ్రీనివాస్ గారు ఈ రోజు పొద్దున అలసిపోయినట్టున్నారు. నిన్న రాత్రి వర్షంలో చాలా ఇబ్బంది పడ్డారు.",
      },
      partner: { en: "Srinivas (your neighbour)", te: "శ్రీనివాస్ (పక్కింటాయన)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Asking about a story", te: "కథ గురించి అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. What a night I had yesterday!",
          te: "గుడ్ మార్నింగ్. నిన్న రాత్రి నానా తిప్పలు పడ్డాను!",
          hint: { en: "Greet him, and ask him what happened.", te: "పలకరించి, ఏం జరిగిందని అడగండి." },
          replies: [
            { say: "Good morning! Why, what happened?", good: true, skill: "ask" },
            {
              say: "Not again! You always have some problem.",
              good: false,
              skill: "polite",
              react: { en: "Ha! That's true, but this time it was the rain.", te: "హ! నిజమే, కానీ ఈసారి వర్షం వల్ల." },
            },
          ],
        },
        {
          partner: "I was coming back from a function when the rain started.",
          te: "నేను ఒక function నుంచి తిరిగి వస్తుండగా వర్షం మొదలైంది.",
          hint: { en: "Ask where the function was.", te: "function ఎక్కడ జరిగిందో అడగండి." },
          replies: [
            { say: "Oh! Where was the function?", good: true, skill: "ask" },
            { say: "Oh! Where the function was?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "It was in Rajahmundry. On the way back, the road was full of water.",
          te: "రాజమండ్రిలో. తిరిగి వస్తుంటే దారిలో రోడ్డంతా నీళ్ళే.",
          hint: { en: "Show you are worried, and ask what he did then.", te: "కంగారు చూపించి, అప్పుడు ఏం చేశారని అడగండి." },
          replies: [
            { say: "Oh no! What did you do then?", good: true, skill: "ask" },
            { say: "Oh no! What you did then?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "We waited in a small hotel for two hours. Luckily, the rain stopped.",
          te: "మేము ఒక చిన్న హోటల్‌లో రెండు గంటలు ఎదురుచూశాం. అదృష్టం కొద్దీ వర్షం ఆగింది.",
          hint: { en: "Ask if he got home safely.", te: "ఇంటికి క్షేమంగా చేరారా అని అడగండి." },
          replies: [
            { say: "Did you reach home safely?", good: true, skill: "ask" },
            { say: "You reached home safely or not?", good: false, skill: "ask", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Yes, at two in the morning! I'm still sleepy.",
          te: "అవును, తెల్లవారుజామున రెండింటికి! ఇంకా నిద్ర వస్తోంది.",
          hint: { en: "Say you are glad he is safe, and tell him to rest today.", te: "ఆయన క్షేమంగా ఉన్నందుకు సంతోషమని, ఈ రోజు విశ్రాంతి తీసుకోమని చెప్పండి." },
          replies: [
            { say: "Thank God you are safe. Please rest today.", good: true, skill: "polite" },
            { say: "Thank God you safe. Please rest today.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 79, Day 6 (CURRICULUM §5): Conversation Day — joining the walking group, and a friend's long cough. */
export const day: ConversationDay = {
  id: "w79-conversation",
  kind: "conversation",
  title: { en: "Joining the Walking Group", te: "వాకింగ్ గ్రూప్‌లో చేరడం" },
  summary: {
    en: "Use the whole week: persuade a neighbour to join the walking group, and gently convince a friend to see a doctor.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పక్కింటివారిని వాకింగ్ గ్రూప్‌లో చేరమని ఒప్పించండి, డాక్టర్‌కి చూపించుకోమని స్నేహితుల్ని మెల్లగా ఒప్పించండి.",
  },
  topics: ["people", "health", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Come and walk with us", te: "మాతో నడవడానికి రండి" },
    lines: [
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Joseph, we missed you at the park again this morning.", te: "జోసెఫ్ గారూ, ఈ పొద్దున కూడా పార్క్‌లో మీరు కనిపించలేదు." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I know. I just can't get up early these days.", te: "తెలుసండీ. ఈ మధ్య పొద్దున్నే లేవలేకపోతున్నాను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "You should really join our walking group. We walk at six.", te: "మీరు తప్పకుండా మా వాకింగ్ గ్రూప్‌లో చేరాలి. మేము ఆరింటికి నడుస్తాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Six is too early for me. My knees are stiff in the morning.", te: "ఆరు నాకు మరీ పొద్దున్నే. పొద్దున నా మోకాళ్ళు బిగుసుకుపోతాయి." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "I understand. It might be better to start slowly, with ten minutes.", te: "అర్థమైంది. పది నిమిషాలతో మెల్లగా మొదలుపెడితే మంచిదేమో." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Hmm. But walking alone is so boring.", te: "హ్మ్. కానీ ఒక్కరే నడవడం చాలా బోరింగ్." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "The good thing is, you won't be alone. Not only that, we chat and laugh.", te: "ఇందులో మంచి ఏంటంటే, మీరు ఒంటరిగా ఉండరు. అంతే కాదు, కబుర్లు చెప్పుకుంటాం, నవ్వుకుంటాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Is Gopal in the group too?", te: "గోపాల్ గారు కూడా గ్రూప్‌లో ఉన్నారా?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Yes, he walks with us every day. What if I call you at a quarter to six?", te: "అవును, ఆయన రోజూ మాతో నడుస్తారు. ఆరుకి పావు తక్కువకి నేను మీకు ఫోన్ చేస్తే?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "All right, I'll give it a try tomorrow. Thank you, Swapna!", te: "సరే, రేపు ఒకసారి try చేస్తాను. థాంక్యూ స్వప్న గారూ!" },
    ],
    questions: [
      {
        prompt: { en: "What is Swapna asking Joseph to do?", te: "స్వప్న గారు జోసెఫ్ గారిని ఏం చేయమంటున్నారు?" },
        options: ["Join the walking group", "See a doctor", "Buy new shoes"],
        answer: 0,
      },
      {
        prompt: { en: "Why doesn't Joseph like six o'clock?", te: "జోసెఫ్ గారికి ఆరు గంటలు ఎందుకు ఇష్టం లేదు?" },
        options: ["His knees are stiff in the morning.", "He has to go to work.", "The park is closed then."],
        answer: 0,
      },
      {
        prompt: { en: "How long does Swapna suggest walking at first?", te: "మొదట్లో ఎంతసేపు నడవమని స్వప్న గారు సూచించారు?" },
        options: ["Ten minutes", "One hour", "Thirty minutes"],
        answer: 0,
      },
      {
        prompt: { en: "Who else walks with the group?", te: "గ్రూప్‌తో ఇంకా ఎవరు నడుస్తారు?" },
        options: ["Gopal", "Ramana", "David"],
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
        en: "Your neighbour asks about your mornings. You walk in the park every day.",
        te: "పక్కింటివారు మీ పొద్దుటి అలవాట్ల గురించి అడుగుతున్నారు. మీరు రోజూ పార్క్‌లో నడుస్తారు.",
      },
      expected: ["I walk in the park every day.", "I walk in the park every morning.", "Every morning, I walk in the park."],
      options: ["I walk in the park every day.", "I am walking in the park daily.", "I walking in the park every day."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your friend has had a cough for a long time. Gently suggest seeing a doctor.",
        te: "మీ స్నేహితులకి చాలా రోజులుగా దగ్గు ఉంది. డాక్టర్‌కి చూపించుకోమని మెల్లగా సూచించండి.",
      },
      expected: ["It might be better to see a doctor.", "You should really see a doctor about that cough.", "Have you thought about seeing a doctor?"],
      options: ["It might be better to see a doctor.", "It might be better to see doctor.", "It might be better to seeing a doctor."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A new neighbour asks how long you have been in the walking group. You joined three years ago.",
        te: "మీరు ఎంతకాలంగా వాకింగ్ గ్రూప్‌లో ఉన్నారని కొత్తగా వచ్చిన పక్కింటివారు అడుగుతున్నారు. మీరు మూడేళ్ళ క్రితం చేరారు.",
      },
      expected: ["I've been in the group for three years.", "I have been in the walking group for three years.", "For three years now."],
      options: ["I've been in the group for three years.", "I am in the group since three years.", "I've been in the group since three years."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Join our walking group", te: "మా వాకింగ్ గ్రూప్‌లో చేరండి" },
      scene: {
        en: "Your neighbour Ayesha retired last month. She says she feels tired and stays inside all day.",
        te: "పక్కింటావిడ ఆయేషా గారు పోయిన నెల రిటైర్ అయ్యారు. అలసటగా ఉంటోందని, రోజంతా ఇంట్లోనే ఉంటున్నానని అంటున్నారు.",
      },
      partner: { en: "Ayesha (your neighbour)", te: "ఆయేషా (పక్కింటావిడ)" },
      skills: [
        { id: "persuade", label: { en: "Persuading kindly", te: "మెల్లగా ఒప్పించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! Where are you going so early?",
          te: "నమస్కారం! ఇంత పొద్దున్నే ఎక్కడికి వెళ్తున్నారు?",
          hint: { en: "Say you are going for a walk with your walking group.", te: "మీ వాకింగ్ గ్రూప్‌తో నడకకి వెళ్తున్నారని చెప్పండి." },
          replies: [
            { say: "I'm going for a walk with my walking group.", good: true, skill: "persuade" },
            { say: "I'm going for walk with my walking group.", good: false, skill: "persuade", fixIt: "article" },
          ],
        },
        {
          partner: "Every day? I just sit at home and watch TV these days.",
          te: "రోజూనా? ఈ మధ్య నేను ఇంట్లో కూర్చుని TV చూస్తున్నాను, అంతే.",
          hint: { en: "Persuade her kindly to join you.", te: "మీతో రమ్మని ఆవిడని మెల్లగా ఒప్పించండి." },
          replies: [
            { say: "You should really join us. It's a lot of fun.", good: true, skill: "persuade" },
            { say: "Why don't you join us? We'd love to have you.", good: true, skill: "persuade" },
            {
              say: "Only TV? No wonder you're always tired.",
              good: false,
              skill: "polite",
              react: { en: "Oh! That hurts a little.", te: "అయ్యో! అది కొంచెం బాధగా ఉంది." },
            },
          ],
        },
        {
          partner: "But I'm slow. I can't keep up with everyone.",
          te: "కానీ నేను నెమ్మదిగా నడుస్తాను. అందరితో సమానంగా నడవలేను.",
          hint: { en: "Say you understand, and tell her the group walks slowly.", te: "అర్థమైందని చెప్పి, గ్రూప్ మెల్లగానే నడుస్తుందని చెప్పండి." },
          replies: [
            { say: "I understand, but we walk slowly. Nobody is in a hurry.", good: true, skill: "persuade" },
            { say: "I understand, but we walking slowly. Nobody is in a hurry.", good: false, skill: "persuade", fixIt: "be" },
          ],
        },
        {
          partner: "Hmm. What time do you all meet?",
          te: "హ్మ్. మీరందరూ ఎన్ని గంటలకి కలుస్తారు?",
          hint: { en: "Say six, at the park gate, and offer to call her in the morning.", te: "ఆరింటికి, పార్క్ గేట్ దగ్గర అని చెప్పి, పొద్దున ఆవిడకి ఫోన్ చేస్తానని చెప్పండి." },
          replies: [
            { say: "At six, at the gate. What if I call you in the morning?", good: true, skill: "persuade" },
            { say: "At six, at the gate. What if I will call you in the morning?", good: false, skill: "persuade" },
          ],
        },
        {
          partner: "Okay, I'll try it tomorrow. Thank you!",
          te: "సరే, రేపు try చేస్తాను. థాంక్యూ!",
          hint: { en: "Say you are happy, and say goodbye.", te: "సంతోషంగా ఉందని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Wonderful! See you tomorrow. Bye!", good: true, skill: "polite" },
            {
              say: "Okay. Don't make excuses tomorrow!",
              good: false,
              skill: "polite",
              react: { en: "No excuses, I promise!", te: "సాకులు చెప్పను, మాటిస్తున్నాను!" },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A cough that won't go", te: "తగ్గని దగ్గు" },
      scene: {
        en: "Your friend Prasad has had a cough for three weeks. He says it is only the weather.",
        te: "మీ స్నేహితుడు ప్రసాద్ గారికి మూడు వారాలుగా దగ్గు ఉంది. అది వాతావరణం వల్లే అని ఆయన అంటున్నారు.",
      },
      partner: { en: "Prasad (your friend)", te: "ప్రసాద్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "persuade", label: { en: "Persuading gently", te: "మెల్లగా ఒప్పించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Sorry, I'm coughing a lot today.",
          te: "హలో! సారీ, ఈ రోజు బాగా దగ్గు వస్తోంది.",
          hint: { en: "Ask how long he has had the cough.", te: "ఎంతకాలంగా దగ్గు ఉందో అడగండి." },
          replies: [
            { say: "How long have you had this cough?", good: true, skill: "persuade" },
            { say: "Since how long you are having this cough?", good: false, skill: "persuade", fixIt: "duration" },
          ],
        },
        {
          partner: "Three weeks. It's only the weather. It will go.",
          te: "మూడు వారాలు. వాతావరణం వల్లే. అదే తగ్గిపోతుంది.",
          hint: { en: "Say gently that three weeks is long, and he should really see a doctor.", te: "మూడు వారాలు అంటే ఎక్కువే అని, తప్పకుండా డాక్టర్‌కి చూపించుకోవాలని మెల్లగా చెప్పండి." },
          replies: [
            { say: "Three weeks is long. You should really see a doctor about it.", good: true, skill: "persuade" },
            { say: "Three weeks is long. You should really see doctor about it.", good: false, skill: "persuade", fixIt: "article" },
          ],
        },
        {
          partner: "Doctors take so much time. I don't like waiting.",
          te: "డాక్టర్ల దగ్గర చాలా టైమ్ పడుతుంది. ఎదురుచూడటం నాకు ఇష్టం ఉండదు.",
          hint: { en: "Say you understand, and suggest going early, when the clinic is quiet.", te: "అర్థమైందని చెప్పి, పొద్దున్నే, clinic ఖాళీగా ఉన్నప్పుడు వెళ్దామని సూచించండి." },
          replies: [
            { say: "I understand, but it might be better to go early. It's quiet then.", good: true, skill: "persuade" },
            {
              say: "Then cough all day. It's your problem.",
              good: false,
              skill: "polite",
              react: { en: "That's a bit harsh, my friend.", te: "అది కొంచెం కఠినంగా ఉంది మిత్రమా." },
            },
          ],
        },
        {
          partner: "Hmm. Will you come with me?",
          te: "హ్మ్. మీరు నాతో వస్తారా?",
          hint: { en: "Say of course, and offer to pick him up tomorrow at nine.", te: "తప్పకుండా అని చెప్పి, రేపు తొమ్మిదింటికి ఆయన్ని పికప్ చేసుకుంటానని చెప్పండి." },
          replies: [
            { say: "Of course. I'll pick you up tomorrow at nine.", good: true, skill: "persuade" },
            { say: "Of course. I'll picking you up tomorrow at nine.", good: false, skill: "persuade" },
          ],
        },
        {
          partner: "Thank you. You're a good friend.",
          te: "థాంక్యూ. మీరు మంచి స్నేహితులు.",
          hint: { en: "Say it is nothing, and wish him well.", te: "అందులో ఏముంది అని చెప్పి, త్వరగా కోలుకోవాలని చెప్పండి." },
          replies: [
            { say: "Don't mention it. Get well soon!", good: true, skill: "polite" },
            { say: "Don't mention. Get well soon!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

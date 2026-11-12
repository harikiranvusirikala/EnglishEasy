import type { ConversationDay } from "../../types";

/** Week 52, Day 6 (CURRICULUM §5): Conversation Day — visiting Mr Imran after his operation, and asking the nurse about his discharge. */
export const day: ConversationDay = {
  id: "w52-conversation",
  kind: "conversation",
  title: { en: "Visiting a Neighbour in Hospital", te: "ఆసుపత్రిలో పొరుగువారిని చూడటం" },
  summary: {
    en: "Use the whole week: visit a neighbour on the ward after his operation, and ask the nurse about his discharge.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఆపరేషన్ అయిన పక్కింటివారిని వార్డులో చూడండి, ఆయన డిశ్చార్జ్ గురించి నర్సుని అడగండి.",
  },
  topics: ["health", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A visit after the operation", te: "ఆపరేషన్ తర్వాత పలకరింపు" },
    lines: [
      { speaker: { en: "Announcement", te: "అనౌన్స్‌మెంట్" }, voice: "a", en: "Visitors, please note. Visiting hours are from four to six.", te: "విజిటర్స్ గమనించండి. విజిటింగ్ అవర్స్ నాలుగు నుంచి ఆరు వరకు." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Hello, Imran! How are you feeling after the operation?", te: "నమస్కారం ఇమ్రాన్ గారూ! ఆపరేషన్ తర్వాత ఎలా ఉంది?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Much better, thank you. The pain is less today.", te: "చాలా నయం, థాంక్యూ. ఈ రోజు నొప్పి తగ్గింది." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I brought some fruit. Are you allowed to eat it?", te: "కొన్ని పండ్లు తెచ్చాను. మీరు తినొచ్చా?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Not yet. Only liquids until tomorrow morning.", te: "ఇంకా లేదు. రేపు పొద్దున దాకా జావ, జ్యూస్ లాంటివే." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "I see. When can you go home?", te: "అలాగా. ఇంటికి ఎప్పుడు వెళ్ళొచ్చు?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "After three days, if all goes well.", te: "అంతా బాగుంటే, మూడు రోజుల తర్వాత." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "That's good news. Do you have to walk every day?", te: "మంచి వార్త. రోజూ నడవాలా?" },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Yes, a little, twice a day. The nurse helps me.", te: "అవును, రోజుకి రెండుసార్లు, కొంచెం. నర్సు గారు సాయం చేస్తారు." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Visiting hours end at six. I'll come again tomorrow.", te: "విజిటింగ్ అవర్స్ ఆరింటికి అయిపోతాయి. రేపు మళ్ళీ వస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "Where are Sarala and Imran?", te: "సరళ గారు, ఇమ్రాన్ గారు ఎక్కడ ఉన్నారు?" },
        options: ["In a hospital ward", "At a fruit shop", "At Imran's house"],
        answer: 0,
      },
      {
        prompt: { en: "What can Imran have until tomorrow morning?", te: "రేపు పొద్దున దాకా ఇమ్రాన్ గారు ఏం తీసుకోవచ్చు?" },
        options: ["Only liquids", "Fruit", "Idli and dosa"],
        answer: 0,
      },
      {
        prompt: { en: "When can Imran go home?", te: "ఇమ్రాన్ గారు ఇంటికి ఎప్పుడు వెళ్ళొచ్చు?" },
        options: ["After three days", "Tomorrow morning", "Next month"],
        answer: 0,
      },
      {
        prompt: { en: "How often does Imran walk?", te: "ఇమ్రాన్ గారు ఎన్నిసార్లు నడుస్తారు?" },
        options: ["Twice a day", "Once a week", "Every hour"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "A friend from your colony asks about Imran. Say he feels much better today.",
        te: "మీ కాలనీ స్నేహితులు ఇమ్రాన్ గారి గురించి అడుగుతున్నారు. ఈ రోజు ఆయనకి చాలా నయంగా ఉందని చెప్పండి.",
      },
      expected: ["He feels much better today.", "He is much better today.", "He's much better today."],
      options: ["He feels much better today.", "He feel much better today.", "He is feel much better today."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: { en: "Ask the nurse what time visiting hours end.", te: "విజిటింగ్ అవర్స్ ఎన్ని గంటలకి అయిపోతాయో నర్సుని అడగండి." },
      expected: ["What time do visiting hours end?", "When do visiting hours end?", "What time do visiting hours finish?"],
      options: ["What time do visiting hours end?", "What time visiting hours end?", "What time are visiting hours end?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: { en: "Ask the nurse if Imran is allowed to eat an apple.", te: "ఇమ్రాన్ గారు ఒక ఆపిల్ తినొచ్చా అని నర్సుని అడగండి." },
      expected: ["Is he allowed to eat an apple?", "Can he eat an apple?", "Is he allowed to eat fruit?"],
      options: ["Is he allowed to eat an apple?", "Is he allowed to eat apple?", "Does he allowed to eat an apple?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Visiting Mr Imran", te: "ఇమ్రాన్ గారిని చూడటం" },
      scene: {
        en: "Your neighbour Imran had a small operation two days ago. You visit him on the ward at five.",
        te: "మీ పక్కింటి ఇమ్రాన్ గారికి రెండు రోజుల క్రితం చిన్న ఆపరేషన్ జరిగింది. సాయంత్రం ఐదింటికి మీరు ఆయన్ని వార్డులో చూడటానికి వెళ్ళారు.",
      },
      partner: { en: "Imran (your neighbour)", te: "ఇమ్రాన్ (మీ పక్కింటివారు)" },
      voice: "b",
      skills: [
        { id: "care", label: { en: "Showing you care", te: "ఆప్యాయంగా పలకరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Oh, hello! Thank you for coming.",
          te: "ఓ, నమస్కారం! వచ్చినందుకు థాంక్స్.",
          hint: { en: "Greet him, and ask how he is feeling now.", te: "పలకరించి, ఇప్పుడు ఎలా ఉందో అడగండి." },
          replies: [
            { say: "Hello! How are you feeling now?", good: true, skill: "care" },
            { say: "Hello! How you are feeling now?", good: false, skill: "care", fixIt: "question" },
          ],
        },
        {
          partner: "Much better. The stitches still hurt a little.",
          te: "చాలా నయం. కుట్లు ఇంకా కొంచెం నొప్పిగా ఉన్నాయి.",
          hint: { en: "Say you are sorry to hear that, and that it will heal soon.", te: "అయ్యో అని, త్వరలోనే తగ్గిపోతుందని ధైర్యం చెప్పండి." },
          replies: [
            { say: "Oh, I'm sorry. It will get better soon.", good: true, skill: "care" },
            { say: "Don't worry. It will get better in a few days.", good: true, skill: "care" },
            {
              say: "Stitches? That's nothing. Stop complaining.",
              good: false,
              skill: "polite",
              react: { en: "Ha! That's easy for you to say.", te: "హ! మీకు చెప్పడం సులువే." },
            },
          ],
        },
        {
          partner: "I hope so. The food here is very plain.",
          te: "అలాగే అవ్వాలి. ఇక్కడ భోజనం చాలా చప్పగా ఉంటుంది.",
          hint: { en: "Say you brought fruit, and ask if the rules let him eat it.", te: "పండ్లు తెచ్చారని చెప్పి, ఆయన తినొచ్చా అని అడగండి." },
          replies: [
            { say: "I brought some fruit. Are you allowed to eat it?", good: true, skill: "care" },
            { say: "I brought some fruit. Do you allowed to eat it?", good: false, skill: "care", fixIt: "question" },
          ],
        },
        {
          partner: "Not until tomorrow. Please keep it on the table.",
          te: "రేపటి దాకా తినకూడదు. టేబుల్ మీద పెట్టండి.",
          hint: { en: "Agree, and ask when he can leave the hospital.", te: "సరే అని, ఆసుపత్రి నుంచి ఎప్పుడు వెళ్ళొచ్చో అడగండి." },
          replies: [
            { say: "Sure. When can you go home?", good: true, skill: "care" },
            { say: "Sure. When can you go to home?", good: false, skill: "care", fixIt: "preposition" },
          ],
        },
        {
          partner: "After three days, the doctor says.",
          te: "మూడు రోజుల తర్వాత అని డాక్టర్ గారు అంటున్నారు.",
          hint: { en: "Say that is good news. Visiting time is nearly over, so say goodbye.", te: "మంచి వార్త అని చెప్పండి. విజిటింగ్ టైమ్ అయిపోవస్తోంది, బై చెప్పండి." },
          replies: [
            { say: "That's good news. I have to go now. Take care!", good: true, skill: "polite" },
            { say: "That's good news. I have to going now. Take care!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Asking about his discharge", te: "ఆయన డిశ్చార్జ్ గురించి అడగడం" },
      scene: {
        en: "Before you leave, Imran asks you to find out about his discharge. You go to Ruth, the nurse at the desk.",
        te: "మీరు బయల్దేరే ముందు, తన డిశ్చార్జ్ గురించి కనుక్కోమని ఇమ్రాన్ గారు అడిగారు. desk దగ్గర ఉన్న నర్సు రూత్ గారి దగ్గరికి వెళ్ళారు.",
      },
      partner: { en: "Ruth (nurse)", te: "రూత్ (నర్సు)" },
      skills: [
        { id: "ask", label: { en: "Asking for details", te: "వివరాలు అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Yes, can I help you?",
          te: "చెప్పండి, ఏం కావాలి?",
          hint: { en: "Give your name. Say you live next door to Imran, and give his bed number: eight.", te: "మీ పేరు చెప్పండి. మీరు ఇమ్రాన్ గారి పక్కింట్లో ఉంటారని చెప్పి, ఆయన బెడ్ నంబర్ చెప్పండి: ఎనిమిది." },
          replies: [
            { say: "Yes, please. I'm Kiran, Mr Imran's neighbour. He's in bed eight.", good: true, skill: "ask" },
            { say: "Yes, please. I'm Kiran, neighbour of Mr Imran. He's in bed eight.", good: false, skill: "ask", fixIt: "article" },
          ],
        },
        {
          partner: "Oh yes, Mr Imran. He's doing well.",
          te: "ఓ అవును, ఇమ్రాన్ గారు. ఆయన బాగానే కోలుకుంటున్నారు.",
          hint: { en: "Say you are glad, and ask when he will go home.", te: "సంతోషం అని చెప్పి, ఆయన ఇంటికి ఎప్పుడు వెళ్తారో అడగండి." },
          replies: [
            { say: "I'm glad. When will he go home?", good: true, skill: "ask" },
            { say: "That's good. When can he go home?", good: true, skill: "ask" },
            { say: "I'm glad. When he will go home?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "On Friday, after the doctor's rounds.",
          te: "శుక్రవారం, డాక్టర్ గారి రౌండ్స్ అయ్యాక.",
          hint: { en: "Ask if someone has to come with him that day.", te: "ఆ రోజు ఆయనతో ఎవరైనా రావాలా అని అడగండి." },
          replies: [
            { say: "Does someone have to come with him that day?", good: true, skill: "ask" },
            { say: "Do someone have to come with him that day?", good: false, skill: "ask", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Yes. One person has to sign the discharge papers.",
          te: "అవును. discharge పేపర్ల మీద ఒకరు సంతకం చేయాలి.",
          hint: { en: "Say you will come on Friday, and thank her.", te: "శుక్రవారం మీరు వస్తానని చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, I'll come on Friday. Thank you.", good: true, skill: "polite" },
            { say: "Okay, I'll come in Friday. Thank you.", good: false, skill: "polite", fixIt: "preposition" },
            {
              say: "Fine. But don't make me wait for hours.",
              good: false,
              skill: "polite",
              react: { en: "We'll do our best, I promise.", te: "మా వంతు ప్రయత్నం చేస్తాం, మాట ఇస్తున్నాను." },
            },
          ],
        },
      ],
    },
  ],
};

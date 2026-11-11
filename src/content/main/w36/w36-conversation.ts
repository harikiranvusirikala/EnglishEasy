import type { ConversationDay } from "../../types";

/** Week 36, Day 6 (CURRICULUM §4): Conversation Day — meeting the new neighbours, introducing them, and a helpful shopkeeper. */
export const day: ConversationDay = {
  id: "w36-conversation",
  kind: "conversation",
  title: { en: "Meeting the New Neighbours", te: "కొత్త పొరుగువారు" },
  summary: {
    en: "Use the whole week: meet a new neighbour, introduce neighbours to each other, and describe a helpful shopkeeper.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: కొత్త పొరుగువారిని కలవండి, ఇరుగుపొరుగువారిని ఒకరికొకరు పరిచయం చేయండి, సహాయం చేసే షాపు యజమాని గురించి చెప్పండి.",
  },
  topics: ["neighbours", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A new neighbour", te: "కొత్త పొరుగువారు" },
    lines: [
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Hello! I'm Krishna. We've just moved in next door.", te: "హలో! నేను కృష్ణ. మేము ఇప్పుడే పక్కింట్లోకి వచ్చాం." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Welcome! I'm Padma. I've lived here for twenty years.", te: "స్వాగతం! నేను పద్మ. ఇక్కడ ఇరవై ఏళ్ళుగా ఉంటున్నాను." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Twenty years! Then you know everyone here.", te: "ఇరవై ఏళ్ళా! అయితే ఇక్కడ అందరూ మీకు తెలుసు." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes. The man who lives upstairs is a doctor.", te: "అవును. పైన ఉండే ఆయన డాక్టర్." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Oh. What is he like?", te: "అవునా. ఆయన ఎలాంటివారు?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "He's a bit quiet, but very helpful.", te: "కొంచెం తక్కువ మాట్లాడతారు, కానీ చాలా సహాయం చేస్తారు." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Is there a shop that sells milk nearby?", te: "దగ్గర్లో పాలు అమ్మే షాపు ఏదైనా ఉందా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes, Raju's shop, near the gate. He's very honest.", te: "ఉంది, గేటు దగ్గర రాజు గారి షాపు. ఆయన చాలా నిజాయితీ గల మనిషి." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Thank you, Padma. You're very kind.", te: "థాంక్యూ పద్మ గారు. మీరు చాలా మంచివారు." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Come for tea on Sunday. Meet everyone!", te: "ఆదివారం టీకి రండి. అందరినీ కలవచ్చు!" },
    ],
    questions: [
      {
        prompt: { en: "What is this talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["Meeting a new neighbour", "Buying a new house", "A visit to the doctor"],
        answer: 0,
      },
      {
        prompt: { en: "How long has Padma lived here?", te: "పద్మ గారు ఇక్కడ ఎంత కాలంగా ఉంటున్నారు?" },
        options: ["Twenty years", "Two years", "Twelve years"],
        answer: 0,
      },
      {
        prompt: { en: "What is the doctor upstairs like?", te: "పైన ఉండే డాక్టర్ గారు ఎలాంటివారు?" },
        options: ["Quiet, but very helpful", "Funny and talkative", "Strict and shy"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the shop that sells milk?", te: "పాలు అమ్మే షాపు ఎక్కడ ఉంది?" },
        options: ["Near the gate", "Upstairs", "Near the temple"],
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
        en: "A new neighbour has come. Ask your friend what she is like.",
        te: "కొత్త పొరుగావిడ వచ్చారు. ఆవిడ ఎలాంటివారని మీ స్నేహితులను అడగండి.",
      },
      expected: ["What is she like?", "What's she like?", "What is the new neighbour like?"],
      options: ["What is she like?", "How is she like?", "What she is like?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell a new neighbour about Raju. He sells vegetables near the gate.",
        te: "కొత్త పొరుగువారికి రాజు గారి గురించి చెప్పండి. ఆయన గేటు దగ్గర కూరగాయలు అమ్ముతారు.",
      },
      expected: ["Raju is the man who sells vegetables near the gate.", "He's the man who sells vegetables.", "Raju sells vegetables near the gate."],
      options: [
        "Raju is the man who sells vegetables near the gate.",
        "Raju is the man who sell vegetables near the gate.",
        "Raju is the man which sells vegetables near the gate.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "You need sweets for a function. Ask a neighbour about a good shop.",
        te: "ఫంక్షన్ కోసం స్వీట్లు కావాలి. మంచి షాపు గురించి పొరుగువారిని అడగండి.",
      },
      expected: ["Is there a good shop that sells sweets?", "Where is a good sweet shop?", "Do you know a good sweet shop?"],
      options: ["Is there a good shop that sells sweets?", "Is there a good shop that sells sweet?", "Is there good shop who sells sweets?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Introducing a new neighbour", te: "కొత్త పొరుగావిడని పరిచయం చేయడం" },
      scene: {
        en: "Your new neighbour Salma is with you. You meet Narayana, who lives upstairs. Introduce them.",
        te: "మీ కొత్త పొరుగావిడ సల్మా గారు మీతో ఉన్నారు. పైన ఉండే నారాయణ గారు ఎదురయ్యారు. ఇద్దరినీ పరిచయం చేయండి.",
      },
      partner: { en: "Narayana (neighbour)", te: "నారాయణ (పైన ఉండే పొరుగాయన)" },
      voice: "b",
      skills: [
        { id: "introduce", label: { en: "Introducing people", te: "పరిచయం చేయడం" } },
        { id: "describe", label: { en: "Describing people", te: "మనుషుల గురించి చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Good evening! How are you?",
          te: "నమస్కారం! బాగున్నారా?",
          hint: { en: "Say you're fine, and ask him to meet someone new.", te: "బాగున్నానని చెప్పి, ఒక కొత్త మనిషిని కలవమని చెప్పండి." },
          replies: [
            { say: "I'm fine, thank you. Please meet my new neighbour.", good: true, skill: "introduce" },
            { say: "I'm fine, thank you. Please meet to my new neighbour.", good: false, skill: "introduce", fixIt: "preposition" },
          ],
        },
        {
          partner: "Oh, nice! What is her name?",
          te: "ఓ, బాగుంది! ఆవిడ పేరేంటి?",
          hint: { en: "Give her name, Salma, and say where she lives.", te: "ఆవిడ పేరు సల్మా అని, ఎక్కడ ఉంటారో చెప్పండి." },
          replies: [
            { say: "This is Salma. She lives next door to me.", good: true, skill: "introduce" },
            { say: "This is Salma. She live next door to me.", good: false, skill: "introduce", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Welcome, Salma! I'm Narayana. I live upstairs.",
          te: "స్వాగతం సల్మా గారు! నేను నారాయణ. పైన ఉంటాను.",
          hint: { en: "Tell Salma about his old job, and his nature.", te: "ఆయన ఒకప్పటి ఉద్యోగం, స్వభావం గురించి సల్మా గారికి చెప్పండి." },
          replies: [
            { say: "Salma, he's a retired teacher, and very kind.", good: true, skill: "describe" },
            { say: "Salma, he is retired teacher, and very kind.", good: false, skill: "describe", fixIt: "article" },
            {
              say: "He talks a lot, Salma. Be careful!",
              good: false,
              skill: "describe",
              react: { en: "Ha! Only a little, I promise.", te: "హహ! కొంచెమే, మాటిస్తున్నా." },
            },
          ],
        },
        {
          partner: "Thank you! Salma, please come for tea on Sunday.",
          te: "థాంక్యూ! సల్మా గారు, ఆదివారం టీకి రండి.",
          hint: { en: "Thank him, say you'll both come, and say good night.", te: "థాంక్స్ చెప్పి, ఇద్దరం వస్తామని, గుడ్ నైట్ చెప్పండి." },
          replies: [
            { say: "Thank you, we'll both come. Good night!", good: true, skill: "introduce" },
            { say: "Thank you, we'll both coming. Good night!", good: false, skill: "introduce" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A helpful shopkeeper", te: "సహాయం చేసే షాపు యజమాని" },
      scene: {
        en: "Grace has just moved into your colony. She asks you about a shop for groceries.",
        te: "గ్రేస్ గారు ఇప్పుడే మీ కాలనీకి వచ్చారు. సరుకుల కోసం షాపు గురించి మిమ్మల్ని అడుగుతున్నారు.",
      },
      partner: { en: "Grace (new neighbour)", te: "గ్రేస్ (కొత్త పొరుగావిడ)" },
      skills: [
        { id: "describe", label: { en: "Describing people", te: "మనుషుల గురించి చెప్పడం" } },
        { id: "polite", label: { en: "Being friendly", te: "స్నేహంగా ఉండటం" } },
      ],
      turns: [
        {
          partner: "Hi! I'm new here. Is there a kirana shop nearby?",
          te: "హాయ్! నేను ఇక్కడికి కొత్త. దగ్గర్లో కిరాణా షాపు ఉందా?",
          hint: { en: "Say yes, and where it is: by the temple.", te: "ఉందని, ఎక్కడో చెప్పండి: గుడి పక్కన." },
          replies: [
            { say: "Yes, there's one next to the temple.", good: true, skill: "describe" },
            { say: "Yes, there's one next of the temple.", good: false, skill: "describe", fixIt: "preposition" },
          ],
        },
        {
          partner: "Who runs it? Is he friendly?",
          te: "దాన్ని ఎవరు నడుపుతారు? ఆయన స్నేహంగా ఉంటారా?",
          hint: { en: "Name the owner, Satish, and say something good about him.", te: "యజమాని పేరు సతీష్ అని చెప్పి, ఆయన గురించి ఒక మంచి మాట చెప్పండి." },
          replies: [
            { say: "Satish runs it. He's very friendly and helpful.", good: true, skill: "describe" },
            { say: "Satish run it. He's very friendly and helpful.", good: false, skill: "describe", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Does he deliver things to homes?",
          te: "ఇంటికి సరుకులు తెచ్చిస్తారా?",
          hint: { en: "Say yes, and say who brings the things.", te: "అవునని, సరుకులు ఎవరు తెస్తారో చెప్పండి." },
          replies: [
            { say: "Yes, the boy who works there brings them.", good: true, skill: "describe" },
            { say: "Yes, the boy which works there brings them.", good: false, skill: "describe" },
          ],
        },
        {
          partner: "And are his prices okay?",
          te: "మరి ధరలు బాగానే ఉంటాయా?",
          hint: { en: "Say he is honest with everyone.", te: "ఆయన అందరితో నిజాయితీగా ఉంటారని చెప్పండి." },
          replies: [
            { say: "Yes. He's very honest. He never cheats anyone.", good: true, skill: "describe" },
            { say: "Yes. He's very honest. He never cheat anyone.", good: false, skill: "describe", fixIt: "he-she-s" },
            {
              say: "Ask him yourself. I'm busy.",
              good: false,
              skill: "polite",
              react: { en: "Oh, sorry! I won't keep you.", te: "అయ్యో, సారీ! మిమ్మల్ని ఆపను." },
            },
          ],
        },
        {
          partner: "Thank you so much! You've been very helpful.",
          te: "చాలా థాంక్స్! మీరు చాలా సహాయం చేశారు.",
          hint: { en: "Reply kindly, and welcome her to the colony.", te: "మంచిగా జవాబు చెప్పి, కాలనీకి స్వాగతం చెప్పండి." },
          replies: [
            { say: "You're welcome. Welcome to our colony!", good: true, skill: "polite" },
            { say: "Mention not. Welcome to our colony!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

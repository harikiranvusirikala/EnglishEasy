import type { ConversationDay } from "../../types";

/** Week 14, Day 6 (CURRICULUM §4): Conversation Day — finding the new hospital, and guiding a visitor from the bus stand. */
export const day: ConversationDay = {
  id: "w14-conversation",
  kind: "conversation",
  title: { en: "Finding the New Hospital", te: "కొత్త ఆసుపత్రి" },
  summary: {
    en: "Use the whole week: ask the way to the new hospital, and guide a visitor from the bus stand to your house.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: కొత్త ఆసుపత్రికి దారి అడగండి, బస్ స్టాండ్ నుంచి మీ ఇంటికి వచ్చేవారికి దారి చెప్పండి.",
  },
  topics: ["directions", "health"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Where is the new hospital?", te: "కొత్త ఆసుపత్రి ఎక్కడ?" },
    lines: [
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Excuse me, where is the new hospital?", te: "ఏమండీ, కొత్త ఆసుపత్రి ఎక్కడ ఉంది?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "It's on Station Road, fifteen minutes on foot.", te: "స్టేషన్ రోడ్ మీద ఉంది, నడిచి పదిహేను నిమిషాలు." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Can you tell me the way, please?", te: "దారి చెప్తారా, ప్లీజ్?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Walk along this road and cross the bridge.", te: "ఈ రోడ్డు వెంబడి నడిచి, బ్రిడ్జ్ దాటండి." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Cross the bridge. And then?", te: "బ్రిడ్జ్ దాటాలి. తర్వాత?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Turn right at the signal and go past the school.", te: "సిగ్నల్ దగ్గర కుడివైపు తిరిగి, స్కూల్ దాటి వెళ్ళండి." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Past the school. Is the hospital there?", te: "స్కూల్ దాటాక. ఆసుపత్రి అక్కడేనా?" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Yes, opposite the big park. You can't miss it.", te: "అవును, పెద్ద పార్క్‌కి ఎదురుగా. సులువుగా కనిపిస్తుంది." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Thank you so much for your help!", te: "మీ సహాయానికి చాలా థాంక్స్!" },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "You're welcome. Take care!", te: "పర్లేదండీ. జాగ్రత్త!" },
    ],
    questions: [
      {
        prompt: { en: "Where does Satish want to go?", te: "సతీష్ ఎక్కడికి వెళ్ళాలనుకుంటున్నారు?" },
        options: ["To the bus stand", "To the new hospital", "To the school"],
        answer: 1,
      },
      {
        prompt: { en: "How long is the walk?", te: "నడిచి వెళ్తే ఎంత సేపు?" },
        options: ["Fifteen minutes", "Fifty minutes", "Five minutes"],
        answer: 0,
      },
      {
        prompt: { en: "Where does Satish turn right?", te: "సతీష్ ఎక్కడ కుడివైపు తిరగాలి?" },
        options: ["At the bridge", "At the school", "At the signal"],
        answer: 2,
      },
      {
        prompt: { en: "What is opposite the hospital?", te: "ఆసుపత్రికి ఎదురుగా ఏం ఉంది?" },
        options: ["A big park", "The school", "A bridge"],
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
        en: "A visitor is at the bus stand. Tell her to cross the road at the signal.",
        te: "ఒకావిడ బస్ స్టాండ్ దగ్గర ఉన్నారు. సిగ్నల్ దగ్గర రోడ్డు దాటమని చెప్పండి.",
      },
      expected: ["Please cross the road at the signal.", "Cross the road at the signal."],
      options: ["Please cross the road at the signal.", "Please cross road at signal.", "Please cross across the road at the signal."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Someone asks you the way, but you don't know it. Say so politely.",
        te: "ఎవరో దారి అడిగారు, కానీ మీకు తెలియదు. మర్యాదగా చెప్పండి.",
      },
      expected: ["Sorry, I don't know the way.", "Sorry, I don't know.", "Sorry, I am new here."],
      options: ["Sorry, I don't know the way.", "Sorry, I am not knowing the way.", "Don't know. Ask someone else."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Tell a friend the clinic is opposite the post office.",
        te: "క్లినిక్ పోస్ట్ ఆఫీస్‌కి ఎదురుగా ఉందని మీ ఫ్రెండ్‌కి చెప్పండి.",
      },
      expected: ["The clinic is opposite the post office.", "It's opposite the post office."],
      options: ["The clinic is opposite the post office.", "The clinic is opposite to the post office.", "The clinic opposite post office."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "The way to the hospital", te: "ఆసుపత్రికి దారి" },
      scene: {
        en: "You need the new hospital. Venkat, an auto driver, is waiting at the bus stand.",
        te: "మీరు కొత్త ఆసుపత్రికి వెళ్ళాలి. ఆటో డ్రైవర్ వెంకట్ బస్ స్టాండ్ దగ్గర ఉన్నారు.",
      },
      partner: { en: "Venkat (auto driver)", te: "వెంకట్ (ఆటో డ్రైవర్)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Asking the way", te: "దారి అడగడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Auto? Where do you want to go?",
          te: "ఆటో కావాలా? ఎక్కడికి వెళ్ళాలి?",
          hint: { en: "Say no thanks, and ask where the new hospital is.", te: "వద్దు థాంక్స్ అని, కొత్త ఆసుపత్రి ఎక్కడో అడగండి." },
          replies: [
            { say: "No, thank you. Where is the new hospital?", good: true, skill: "ask" },
            { say: "No auto. Where new hospital?", good: false, skill: "ask", fixIt: "be" },
          ],
        },
        {
          partner: "It's on Station Road. Come, sixty rupees.",
          te: "స్టేషన్ రోడ్ మీద ఉంది. రండి, అరవై రూపాయలు.",
          hint: { en: "Thank him, and ask if you can walk there.", te: "థాంక్స్ చెప్పి, నడిచి వెళ్ళొచ్చా అని అడగండి." },
          replies: [
            { say: "Thanks, but can I walk there?", good: true, skill: "ask" },
            {
              say: "Sixty? That's cheating!",
              good: false,
              skill: "polite",
              react: { en: "Cheating? No! That's the normal rate.", te: "మోసమా? లేదండీ! మామూలు రేటే అది." },
            },
          ],
        },
        {
          partner: "Yes. Go straight and take the second left.",
          te: "వెళ్ళొచ్చు. నేరుగా వెళ్ళి, రెండో ఎడమ మలుపులో తిరగండి.",
          hint: { en: "Check that you heard the turn right.", te: "ఏ మలుపో సరిగ్గా విన్నారో సరిచూసుకోండి." },
          replies: [
            { say: "The second left? Okay.", good: true, skill: "ask" },
            { say: "The two left? Okay.", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Yes. The hospital is opposite the bank.",
          te: "అవును. ఆసుపత్రి బ్యాంక్‌కి ఎదురుగా ఉంది.",
          hint: { en: "Thank him for his help.", te: "ఆయన సహాయానికి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you so much for your help.", good: true, skill: "polite" },
            { say: "Thank you. Opposite to the bank, okay.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Guiding a visitor", te: "వచ్చేవారికి దారి చెప్పడం" },
      scene: {
        en: "Your friend Grace is coming to your house for the first time. She calls from the bus stand.",
        te: "మీ ఫ్రెండ్ గ్రేస్ మొదటిసారి మీ ఇంటికి వస్తున్నారు. బస్ స్టాండ్ నుంచి ఫోన్ చేశారు.",
      },
      partner: { en: "Grace (your friend)", te: "గ్రేస్ (మీ ఫ్రెండ్)" },
      skills: [
        { id: "guide", label: { en: "Giving directions", te: "దారి చెప్పడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! I'm at the bus stand now.",
          te: "హలో! నేను ఇప్పుడు బస్ స్టాండ్ దగ్గర ఉన్నాను.",
          hint: { en: "Say hello, and tell her to get to the other side of the road.", te: "హలో చెప్పి, రోడ్డు అవతలి వైపుకి రమ్మని చెప్పండి." },
          replies: [
            { say: "Hello! First, please cross the road.", good: true, skill: "guide" },
            { say: "Hello! First, cross across the road.", good: false, skill: "guide", fixIt: "preposition" },
          ],
        },
        {
          partner: "Okay, I crossed. Now?",
          te: "సరే, దాటాను. ఇప్పుడు?",
          hint: { en: "Tell her to stay on that road until she passes the temple.", te: "గుడి దాటే దాకా ఆ రోడ్డు వెంబడే రమ్మని చెప్పండి." },
          replies: [
            { say: "Walk along that road, past the temple.", good: true, skill: "guide" },
            { say: "Walk along that road, past temple.", good: false, skill: "guide", fixIt: "article" },
          ],
        },
        {
          partner: "I can see a big neem tree.",
          te: "నాకు ఒక పెద్ద వేప చెట్టు కనిపిస్తోంది.",
          hint: { en: "Tell her where your house is, using the tree.", te: "ఆ చెట్టు గుర్తుతో మీ ఇల్లు ఎక్కడో చెప్పండి." },
          replies: [
            { say: "My house is behind that tree. Green gate.", good: true, skill: "guide" },
            { say: "My house is backside of the tree.", good: false, skill: "guide", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Oh, I see the green gate!",
          te: "ఓ, ఆకుపచ్చ గేటు కనిపిస్తోంది!",
          hint: { en: "Say you are coming to open it.", te: "గేటు తీయడానికి వస్తున్నానని చెప్పండి." },
          replies: [
            { say: "Wait, I'm coming to open it.", good: true, skill: "polite" },
            {
              say: "Why so slow? Come fast.",
              good: false,
              skill: "polite",
              react: { en: "Sorry! It was a long walk.", te: "సారీ! చాలా దూరం నడవాల్సి వచ్చింది." },
            },
          ],
        },
        {
          partner: "Thank you! Your directions were very clear.",
          te: "థాంక్స్! మీరు దారి చాలా బాగా చెప్పారు.",
          hint: { en: "Say you are glad, and welcome her in.", te: "సంతోషమని చెప్పి, లోపలికి రమ్మనండి." },
          replies: [
            { say: "I'm so glad. Please come in.", good: true, skill: "polite" },
            { say: "Welcome, welcome. Come inside only.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

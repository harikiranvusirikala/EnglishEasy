import type { ConversationDay } from "../../types";

/** Week 26, Day 6 (CURRICULUM §4): Conversation Day — errands in town, and an emergency call on the way home (Weeks 13–25). */
export const day: ConversationDay = {
  id: "w26-conversation",
  kind: "conversation",
  title: { en: "A Busy Day in Town", te: "ఊర్లో హడావిడి రోజు" },
  summary: {
    en: "Use everything since Week 13: do your errands in town by bus and auto, and call 108 when someone falls on the way home.",
    te: "13వ వారం నుంచి నేర్చుకున్నదంతా వాడండి: బస్‌లో, ఆటోలో ఊర్లో పనులు చేసుకోండి; ఇంటికి వస్తుంటే ఎవరైనా పడిపోతే 108 కి ఫోన్ చేయండి.",
  },
  topics: ["transport", "health", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Errands in town", te: "ఊర్లో పనులు" },
    lines: [
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Good morning, Krishna! Where are you going so early?", te: "నమస్కారం కృష్ణ గారూ! ఇంత పొద్దున్నే ఎక్కడికి?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "To the bank first, then the medical shop.", te: "ముందు బ్యాంక్‌కి, తర్వాత మెడికల్ షాపుకి." },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "I'm going to the market. Which bus do you take?", te: "నేను మార్కెట్‌కి వెళ్తున్నాను. మీరు ఏ బస్ ఎక్కుతారు?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Number 12. It stops near the bank and the market.", te: "12 నంబర్. బ్యాంక్ దగ్గర, మార్కెట్ దగ్గర ఆగుతుంది." },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "Good, we can go together.", te: "మంచిది, ఇద్దరం కలిసి వెళ్ళొచ్చు." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Look! That old man fell down near the signal.", te: "చూడండి! ఆ పెద్దాయన సిగ్నల్ దగ్గర కింద పడిపోయారు." },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "He can't stand up. I'm calling one zero eight.", te: "ఆయన లేవలేకపోతున్నారు. నేను 108 కి ఫోన్ చేస్తున్నాను." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Tell them we are near the Ring Road signal.", te: "మనం రింగ్ రోడ్ సిగ్నల్ దగ్గర ఉన్నామని చెప్పండి." },
      { speaker: { en: "Salma", te: "సల్మా" }, voice: "a", en: "The ambulance is coming in ten minutes.", te: "అంబులెన్స్ పది నిమిషాల్లో వస్తోంది." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Good. I'll stay with him and give him water.", te: "మంచిది. నేను ఆయన దగ్గరే ఉండి, నీళ్ళు ఇస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What is this talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["Errands in town, and a man who fell", "A new phone, and a fraud call", "A train trip to Tirupati"],
        answer: 0,
      },
      {
        prompt: { en: "Where does Krishna go first?", te: "కృష్ణ గారు ముందు ఎక్కడికి వెళ్తున్నారు?" },
        options: ["To the bank", "To the market", "To the hospital"],
        answer: 0,
      },
      {
        prompt: { en: "Which bus do they take?", te: "వాళ్ళు ఏ బస్ ఎక్కుతారు?" },
        options: ["Number 12", "Number 20", "Number 2"],
        answer: 0,
      },
      {
        prompt: { en: "Who calls the ambulance?", te: "అంబులెన్స్‌కి ఎవరు ఫోన్ చేశారు?" },
        options: ["Salma", "Krishna", "The old man"],
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
        en: "On the bus, ask the conductor if it stops near the bank.",
        te: "బస్‌లో, బ్యాంక్ దగ్గర ఆగుతుందా అని కండక్టర్‌ని అడగండి.",
      },
      expected: ["Does this bus stop near the bank?", "Does this bus stop at the bank?", "Does it stop near the bank?"],
      options: ["Does this bus stop near the bank?", "This bus stops near the bank?", "Do this bus stop near the bank?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "You are calling the ambulance. Say an old man fell down near the signal.",
        te: "మీరు అంబులెన్స్‌కి ఫోన్ చేశారు. సిగ్నల్ దగ్గర ఒక పెద్దాయన కింద పడ్డారని చెప్పండి.",
      },
      expected: ["An old man fell down near the signal.", "A man fell down near the signal."],
      options: ["An old man fell down near the signal.", "A old man fell down near the signal.", "Old man is fall down near signal."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the medical shop, ask for two strips of this tablet.",
        te: "మెడికల్ షాపులో ఈ టాబ్లెట్ రెండు strips అడగండి.",
      },
      expected: ["Can I have two strips of this tablet, please?", "Two strips of this tablet, please."],
      options: ["Can I have two strips of this tablet, please?", "Can I have two strip of this tablet, please?", "Give two strips this tablet."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Calling the ambulance", te: "అంబులెన్స్‌కి ఫోన్" },
      scene: {
        en: "On your way home, an old man falls near the Benz Circle signal. You call 108.",
        te: "మీరు ఇంటికి వస్తుంటే బెంజ్ సర్కిల్ సిగ్నల్ దగ్గర ఒక పెద్దాయన పడిపోయారు. మీరు 108 కి ఫోన్ చేశారు.",
      },
      partner: { en: "Mary (108 call centre)", te: "మేరీ (108 కాల్ సెంటర్)" },
      skills: [
        { id: "what", label: { en: "What happened", te: "ఏం జరిగింది" } },
        { id: "where", label: { en: "Where you are", te: "మీరు ఎక్కడ ఉన్నారు" } },
      ],
      turns: [
        {
          partner: "One zero eight ambulance. What happened?",
          te: "108 అంబులెన్స్. ఏం జరిగింది?",
          hint: { en: "Say an old man fell, and he can't get up.", te: "ఒక పెద్దాయన కింద పడ్డారని, లేవలేకపోతున్నారని చెప్పండి." },
          replies: [
            { say: "An old man fell down. He can't stand up.", good: true, skill: "what" },
            { say: "One old man fell down. He can't stand up.", good: false, skill: "what", fixIt: "article" },
          ],
        },
        {
          partner: "Is he breathing? Is he awake?",
          te: "ఊపిరి తీసుకుంటున్నారా? స్పృహలో ఉన్నారా?",
          hint: { en: "Say yes to both, but his head is bleeding.", te: "రెండిటికీ అవునని, కానీ తలకి రక్తం కారుతోందని చెప్పండి." },
          replies: [
            { say: "Yes, he is breathing. But his head is bleeding.", good: true, skill: "what" },
            { say: "Yes, he breathing. But his head bleeding.", good: false, skill: "what", fixIt: "be" },
          ],
        },
        {
          partner: "Where are you exactly?",
          te: "మీరు సరిగ్గా ఎక్కడ ఉన్నారు?",
          hint: { en: "Give the place, with a landmark near you.", te: "మీరు ఉన్న చోటు, దగ్గర్లో ఉన్న ఒక గుర్తుతో చెప్పండి." },
          replies: [
            { say: "Near the Benz Circle signal, opposite the petrol pump.", good: true, skill: "where" },
            { say: "Near the Benz Circle signal, opposite to the petrol pump.", good: false, skill: "where", fixIt: "preposition" },
            {
              say: "I don't know. Somewhere on the road. Come fast.",
              good: false,
              skill: "where",
              react: { en: "Please look around. Tell me a shop or a sign.", te: "కొంచెం చుట్టూ చూడండి. ఏదైనా షాపు గానీ బోర్డు గానీ చెప్పండి." },
            },
          ],
        },
        {
          partner: "Okay. The ambulance is coming. What is your number?",
          te: "సరే. అంబులెన్స్ వస్తోంది. మీ నంబర్ ఏంటి?",
          hint: { en: "Give your phone number slowly.", te: "మీ ఫోన్ నంబర్ నెమ్మదిగా చెప్పండి." },
          replies: [
            { say: "Nine eight four nine, double two one, five six zero.", good: true, skill: "where" },
            { say: "My number? Why you want my number?", good: false, skill: "where", fixIt: "question" },
          ],
        },
        {
          partner: "Thank you. Please stay with him till it comes.",
          te: "థాంక్యూ. అంబులెన్స్ వచ్చేవరకు ఆయన దగ్గరే ఉండండి.",
          hint: { en: "Say you will stay, and thank her.", te: "ఆయన దగ్గరే ఉంటానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, I will stay with him. Thank you.", good: true, skill: "what" },
            { say: "Okay, I will staying with him. Thank you.", good: false, skill: "what" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "An auto to the bank", te: "బ్యాంక్‌కి ఆటో" },
      scene: {
        en: "You need to go to the bank on Station Road. Satish, an auto driver, stops for you.",
        te: "మీరు స్టేషన్ రోడ్‌లో ఉన్న బ్యాంక్‌కి వెళ్ళాలి. ఆటో డ్రైవర్ సతీష్ ఆటో ఆపారు.",
      },
      partner: { en: "Satish (auto driver)", te: "సతీష్ (ఆటో డ్రైవర్)" },
      voice: "b",
      skills: [
        { id: "ride", label: { en: "Taking an auto", te: "ఆటో ఎక్కడం" } },
        { id: "pay", label: { en: "Paying", te: "డబ్బు కట్టడం" } },
      ],
      turns: [
        {
          partner: "Yes, where do you want to go?",
          te: "చెప్పండి, ఎక్కడికి వెళ్ళాలి?",
          hint: { en: "Say where you want to go, politely.", te: "ఎక్కడికి వెళ్ళాలో మర్యాదగా చెప్పండి." },
          replies: [
            { say: "To the bank on Station Road, please.", good: true, skill: "ride" },
            {
              say: "Station Road bank. Go fast.",
              good: false,
              skill: "ride",
              react: { en: "Okay, okay. No need to order me.", te: "సరే, సరే. ఆర్డర్ వేయక్కర్లేదు." },
            },
          ],
        },
        {
          partner: "It's 80 rupees.",
          te: "80 రూపాయలు.",
          hint: { en: "Ask him politely to use the meter.", te: "మీటర్ వేయమని మర్యాదగా అడగండి." },
          replies: [
            { say: "Can you go by meter, please?", good: true, skill: "pay" },
            { say: "You go by meter, please?", good: false, skill: "pay", fixIt: "question" },
          ],
        },
        {
          partner: "Okay, the meter is on. Where is the bank exactly?",
          te: "సరే, మీటర్ వేశాను. బ్యాంక్ సరిగ్గా ఎక్కడ ఉంది?",
          hint: { en: "Give a landmark: the bus stand.", te: "ఒక గుర్తు చెప్పండి: బస్ స్టాండ్." },
          replies: [
            { say: "It's opposite the bus stand.", good: true, skill: "ride" },
            { say: "It's opposite to the bus stand.", good: false, skill: "ride", fixIt: "preposition" },
          ],
        },
        {
          partner: "Here we are. 65 rupees on the meter.",
          te: "వచ్చేశాం. మీటర్ మీద 65 రూపాయలు.",
          hint: { en: "Ask if UPI is okay for paying.", te: "UPI తో కట్టొచ్చా అని అడగండి." },
          replies: [
            { say: "Can I pay by UPI?", good: true, skill: "pay" },
            { say: "I can pay by UPI?", good: false, skill: "pay", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, scan this QR code.",
          te: "అవును, ఈ QR కోడ్ స్కాన్ చేయండి.",
          hint: { en: "Say you paid, and thank him.", te: "కట్టేశానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Done. I sent 65 rupees. Thank you!", good: true, skill: "pay" },
            { say: "Done. I send 65 rupees. Thank you!", good: false, skill: "pay" },
          ],
        },
      ],
    },
  ],
};

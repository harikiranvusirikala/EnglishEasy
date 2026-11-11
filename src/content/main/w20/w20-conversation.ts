import type { ConversationDay } from "../../types";

/** Week 20, Day 6 (CURRICULUM §4): Conversation Day — booking a cab on an app with help, and helping a friend with a video call. */
export const day: ConversationDay = {
  id: "w20-conversation",
  kind: "conversation",
  title: { en: "Learning a New App", te: "కొత్త యాప్ నేర్చుకోవడం" },
  summary: {
    en: "Use the whole week: book a cab on an app step by step, pay by UPI, and help a friend with her first video call.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: app లో ఒక్కో దశగా cab బుక్ చేయండి, UPI తో కట్టండి, స్నేహితురాలి మొదటి వీడియో కాల్‌కి సహాయం చేయండి.",
  },
  topics: ["phone", "technology", "transport"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Booking a cab", te: "cab బుక్ చేయడం" },
    lines: [
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Jyothi, how do I book a cab on this app?", te: "జ్యోతి గారు, ఈ app లో cab ఎలా బుక్ చేయాలి?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "It's easy. First, open the app.", te: "సులువే. ముందు app ఓపెన్ చేయండి." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Okay, it's open. What do I do next?", te: "సరే, ఓపెన్ అయింది. తర్వాత ఏం చేయాలి?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Then type the place. Where are you going?", te: "తర్వాత చోటు పేరు టైప్ చేయండి. ఎక్కడికి వెళ్తున్నారు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "To the railway station, for the ten o'clock train.", te: "రైల్వే స్టేషన్‌కి, పది గంటల ట్రైన్ కోసం." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Good. After that, tap Book. Look, 180 rupees.", te: "మంచిది. ఆ తర్వాత Book నొక్కండి. చూడండి, 180 రూపాయలు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Can I pay by UPI at the end?", te: "చివర్లో UPI లో కట్టొచ్చా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Yes. Just scan the driver's QR code.", te: "కట్టొచ్చు. driver QR code స్కాన్ చేస్తే చాలు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Look, the cab is coming in five minutes!", te: "చూడండి, cab ఐదు నిమిషాల్లో వస్తోంది!" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "See? Now you can do it yourself.", te: "చూశారా? ఇప్పుడు మీరే చేసుకోగలరు." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుతున్నారు?" },
        options: ["Booking a cab on an app", "Paying a phone bill", "Making a video call"],
        answer: 0,
      },
      {
        prompt: { en: "Where is Mohan going?", te: "మోహన్ ఎక్కడికి వెళ్తున్నారు?" },
        options: ["To the railway station", "To the bus stand", "To the hospital"],
        answer: 0,
      },
      {
        prompt: { en: "How much is the cab?", te: "cab ఎంత?" },
        options: ["180 rupees", "100 rupees", "280 rupees"],
        answer: 0,
      },
      {
        prompt: { en: "How will Mohan pay?", te: "మోహన్ ఎలా కడతారు?" },
        options: ["By UPI", "By cash", "By card"],
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
        en: "Ask a friend how to make a video call.",
        te: "వీడియో కాల్ ఎలా చేయాలో స్నేహితులని అడగండి.",
      },
      expected: ["How do I make a video call?", "How do I make a video call on WhatsApp?"],
      options: ["How do I make a video call?", "How I make video call?", "How do I making a video call?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Your friend's picture is not moving on the video call. Tell him.",
        te: "వీడియో కాల్‌లో మీ స్నేహితుడి బొమ్మ కదలట్లేదు. ఆయనకి చెప్పండి.",
      },
      expected: ["Your video is frozen.", "Sorry, your video is frozen."],
      options: ["Your video is frozen.", "Your video frozen.", "Your video are frozen."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The shopkeeper asks about your payment. Say you sent the money early today.",
        te: "మీ payment గురించి షాపు వారు అడుగుతున్నారు. ఈ రోజు పొద్దున్నే డబ్బు పంపానని చెప్పండి.",
      },
      expected: ["I sent the money this morning.", "Yes, I sent the money this morning."],
      options: ["I sent the money this morning.", "I sent the money today morning.", "I send the money this morning."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Booking a cab with help", te: "సహాయంతో cab బుక్ చేయడం" },
      scene: {
        en: "You need a cab to the bus stand. Your friend Ramesh helps you with the app.",
        te: "మీకు bus stand కి cab కావాలి. మీ స్నేహితుడు రమేష్ app లో సహాయం చేస్తున్నారు.",
      },
      partner: { en: "Ramesh (friend)", te: "రమేష్ (స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "how", label: { en: "Asking how", te: "ఎలా అని అడగడం" } },
        { id: "polite", label: { en: "Being polite", te: "మర్యాదగా ఉండటం" } },
      ],
      turns: [
        {
          partner: "Hi! You wanted help with the cab app?",
          te: "హాయ్! cab app విషయంలో సహాయం కావాలన్నారా?",
          hint: { en: "Say yes, and ask how to book a cab.", te: "అవునని, cab ఎలా బుక్ చేయాలో అడగండి." },
          replies: [
            { say: "Yes, please. How do I book a cab?", good: true, skill: "how" },
            { say: "Yes. How I book a cab?", good: false, skill: "how", fixIt: "question" },
          ],
        },
        {
          partner: "First, open the app and type the place.",
          te: "ముందు app ఓపెన్ చేసి, చోటు పేరు టైప్ చేయండి.",
          hint: { en: "Say you did it, and ask what comes next.", te: "చేశానని చెప్పి, తర్వాత ఏంటో అడగండి." },
          replies: [
            { say: "Okay, I typed it. What do I do next?", good: true, skill: "how" },
            { say: "Okay, I typed. What I do next?", good: false, skill: "how" },
          ],
        },
        {
          partner: "Then tap Book. The cab is 150 rupees.",
          te: "తర్వాత Book నొక్కండి. cab 150 రూపాయలు.",
          hint: { en: "Ask if you can pay by phone.", te: "ఫోన్‌తో కట్టొచ్చా అని అడగండి." },
          replies: [
            { say: "Can I pay by UPI?", good: true, skill: "how" },
            { say: "Can I pay the driver by UPI?", good: true, skill: "how" },
            { say: "Can I pay in UPI?", good: false, skill: "how" },
          ],
        },
        {
          partner: "Yes. Scan the driver's QR code at the end.",
          te: "కట్టొచ్చు. చివర్లో driver QR code స్కాన్ చేయండి.",
          hint: { en: "Say you didn't follow, and ask him to show you again.", te: "అర్థం కాలేదని చెప్పి, ఇంకోసారి చూపించమని అడగండి." },
          replies: [
            { say: "Sorry, can you show me once more?", good: true, skill: "polite" },
            {
              say: "This is too hard. You do it!",
              good: false,
              skill: "polite",
              react: { en: "Come on, you can do it! Try once.", te: "అయ్యో, మీరు చేయగలరు! ఒకసారి ప్రయత్నించండి." },
            },
          ],
        },
        {
          partner: "Look, the cab is coming in five minutes!",
          te: "చూడండి, cab ఐదు నిమిషాల్లో వస్తోంది!",
          hint: { en: "Thank him for his help.", te: "సహాయం చేసినందుకు ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you so much for your help!", good: true, skill: "polite" },
            { say: "Thank you so much for your helps!", good: false, skill: "polite", fixIt: "plural" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A friend's first video call", te: "స్నేహితురాలి మొదటి వీడియో కాల్" },
      scene: {
        en: "Your friend Sarala makes her first video call to you. Help her.",
        te: "మీ స్నేహితురాలు సరళ గారు మొదటిసారి మీకు వీడియో కాల్ చేశారు. ఆవిడకి సహాయం చేయండి.",
      },
      partner: { en: "Sarala (friend)", te: "సరళ (స్నేహితురాలు)" },
      skills: [
        { id: "steps", label: { en: "Giving steps", te: "దశలు చెప్పడం" } },
        { id: "polite", label: { en: "Being kind", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello? Can you see me? It's my first video call!",
          te: "హలో? నేను కనిపిస్తున్నానా? ఇది నా మొదటి వీడియో కాల్!",
          hint: { en: "Say you can hear her, but her screen is dark.", te: "మాట వినిపిస్తోంది, కానీ ఆవిడ screen చీకటిగా ఉందని చెప్పండి." },
          replies: [
            { say: "I can hear you, but your screen is dark.", good: true, skill: "steps" },
            { say: "I can listen you, but your screen dark.", good: false, skill: "steps", fixIt: "be" },
          ],
        },
        {
          partner: "Oh! What do I do now?",
          te: "అయ్యో! ఇప్పుడు ఏం చేయాలి?",
          hint: { en: "Tell her to turn the camera on.", te: "camera ఆన్ చేయమని చెప్పండి." },
          replies: [
            { say: "Please switch on your camera.", good: true, skill: "steps" },
            { say: "Tap the camera icon at the bottom.", good: true, skill: "steps" },
            { say: "Please on your camera.", good: false, skill: "steps", fixIt: "preposition" },
          ],
        },
        {
          partner: "Done! Can you see me now?",
          te: "అయింది! ఇప్పుడు కనిపిస్తున్నానా?",
          hint: { en: "Say yes, and tell her where to hold the phone.", te: "అవునని చెప్పి, phone ఎక్కడ పట్టుకోవాలో చెప్పండి." },
          replies: [
            { say: "Yes! Now hold the phone in front of you.", good: true, skill: "steps" },
            {
              say: "Yes, but you look so funny!",
              good: false,
              skill: "polite",
              react: { en: "Funny? It's my first time! Please help me.", te: "నవ్వొస్తోందా? నాకిదే మొదటిసారి! కొంచెం సహాయం చేయండి." },
            },
          ],
        },
        {
          partner: "Is this better? Can you see my face?",
          te: "ఇప్పుడు బాగుందా? నా ముఖం కనిపిస్తోందా?",
          hint: { en: "Say yes, it's clear, and praise her.", te: "అవును, స్పష్టంగా ఉందని చెప్పి, ఆవిడని మెచ్చుకోండి." },
          replies: [
            { say: "Yes, it's clear now. Well done!", good: true, skill: "polite" },
            { say: "Yes, now it clear. Well done!", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Thank you! Now I can call my sister in Dubai.",
          te: "థాంక్యూ! ఇప్పుడు దుబాయ్‌లో ఉన్న మా చెల్లెలికి ఫోన్ చేయగలను.",
          hint: { en: "Reply to her thanks, and say goodbye.", te: "ఆవిడ థాంక్స్‌కి జవాబు చెప్పి, bye చెప్పండి." },
          replies: [
            { say: "You're welcome. Bye, talk to you soon!", good: true, skill: "polite" },
            { say: "No mention. Bye, talk to you soon!", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

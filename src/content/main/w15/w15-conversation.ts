import type { ConversationDay } from "../../types";

/** Week 15, Day 6 (CURRICULUM §4): Conversation Day — a day trip by train: the platform announcement, tickets, and an auto from the station. */
export const day: ConversationDay = {
  id: "w15-conversation",
  kind: "conversation",
  title: { en: "A Day Trip by Train", te: "రైలులో ఒక రోజు" },
  summary: {
    en: "Use the whole week: catch a platform announcement, buy train tickets, and take an auto from the station.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ప్లాట్‌ఫామ్ అనౌన్స్‌మెంట్ అర్థం చేసుకోండి, రైలు టికెట్లు కొనండి, స్టేషన్ నుంచి ఆటో ఎక్కండి.",
  },
  topics: ["transport", "travel", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "On the platform", te: "ప్లాట్‌ఫామ్ మీద" },
    lines: [
      {
        speaker: { en: "Announcement", te: "అనౌన్స్‌మెంట్" },
        voice: "a",
        en: "Attention please. The Ratnachal Express is on platform 3.",
        te: "దయచేసి వినండి. రత్నాచల్ ఎక్స్‌ప్రెస్ 3వ ప్లాట్‌ఫామ్ మీద ఉంది.",
      },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Anitha, that's our train! Platform 3.", te: "అనిత, అది మన రైలే! ప్లాట్‌ఫామ్ 3." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "What time does it leave?", te: "అది ఎన్నింటికి బయల్దేరుతుంది?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "At 6:15. We have ten minutes.", te: "ఆరుంబావుకి. మనకి ఇంకా పది నిమిషాలు ఉన్నాయి." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "How long does it take to Rajahmundry?", te: "రాజమండ్రికి ఎంతసేపు పడుతుంది?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "About three hours. It reaches at 9:15.", te: "దాదాపు మూడు గంటలు. తొమ్మిదింబావుకి చేరుతుంది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good. Do you have the tickets?", te: "మంచిది. టికెట్లు మీ దగ్గర ఉన్నాయా?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Yes, two return tickets. Here is yours.", te: "ఉన్నాయి, రెండు రానూపోనూ టికెట్లు. ఇదిగోండి మీది." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Thank you. Our seats are near the window.", te: "థాంక్స్. మన సీట్లు కిటికీ పక్కనే." },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Great! We can see the Godavari bridge from there.", te: "బాగుంది! అక్కడి నుంచి గోదావరి వంతెన కనిపిస్తుంది." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a railway station", "At a bus stop", "At a temple"],
        answer: 0,
      },
      {
        prompt: { en: "Which platform is their train on?", te: "వీళ్ళ రైలు ఏ ప్లాట్‌ఫామ్ మీద ఉంది?" },
        options: ["Platform 3", "Platform 2", "Platform 1"],
        answer: 0,
      },
      {
        prompt: { en: "How long does the trip to Rajahmundry take?", te: "రాజమండ్రికి ఎంతసేపు పడుతుంది?" },
        options: ["About one hour", "About three hours", "About six hours"],
        answer: 1,
      },
      {
        prompt: { en: "What tickets does Kumar have?", te: "కుమార్ దగ్గర ఏ టికెట్లు ఉన్నాయి?" },
        options: ["One return ticket", "Two one-way tickets", "Two return tickets"],
        answer: 2,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You missed the platform in the announcement. Ask a man on the platform.",
        te: "అనౌన్స్‌మెంట్‌లో ప్లాట్‌ఫామ్ నంబర్ వినలేదు. ప్లాట్‌ఫామ్ మీద ఒకాయనని అడగండి.",
      },
      expected: ["Excuse me, which platform is the Ratnachal Express on?", "Which platform is the Ratnachal Express on?"],
      options: [
        "Excuse me, which platform is the Ratnachal Express on?",
        "Excuse me, which platform the Ratnachal Express is on?",
        "Ratnachal Express, which platform? Tell me.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "At Rajahmundry station, ask the auto driver to go by meter.",
        te: "రాజమండ్రి స్టేషన్‌లో, మీటర్ వేసి తీసుకెళ్ళమని ఆటో డ్రైవర్‌ని అడగండి.",
      },
      expected: ["Please go by meter.", "Can you go by meter, please?"],
      options: ["Please go by meter.", "Please go on meter.", "Go by meter. Don't cheat."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your friend asks how long the auto takes to the temple. Say about twenty minutes.",
        te: "గుడికి ఆటోలో ఎంతసేపు పడుతుందని మీ స్నేహితులు అడిగారు. దాదాపు ఇరవై నిమిషాలు అని చెప్పండి.",
      },
      expected: ["It takes about twenty minutes.", "About twenty minutes."],
      options: ["It takes about twenty minutes.", "It takes about twenty minute.", "It is taking about twenty minutes."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "At the ticket counter", te: "టికెట్ కౌంటర్ దగ్గర" },
      scene: {
        en: "At Vijayawada station, buy tickets for a day trip to Rajahmundry with a friend.",
        te: "విజయవాడ స్టేషన్‌లో, స్నేహితులతో రాజమండ్రికి ఒక రోజు ట్రిప్ కోసం టికెట్లు కొనండి.",
      },
      partner: { en: "Usha (ticket counter)", te: "ఉష (టికెట్ కౌంటర్)" },
      skills: [
        { id: "ticket", label: { en: "Tickets", te: "టికెట్లు" } },
        { id: "time", label: { en: "Train times", te: "రైలు సమయాలు" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Next, please. Where to?",
          te: "తర్వాత ఎవరు? ఎక్కడికి?",
          hint: {
            en: "Ask for tickets to Rajahmundry and back, for two people.",
            te: "ఇద్దరికి రాజమండ్రికి రానూపోనూ టికెట్లు అడగండి.",
          },
          replies: [
            { say: "Two return tickets to Rajahmundry, please.", good: true, skill: "ticket" },
            { say: "Two up and down tickets to Rajahmundry.", good: false, skill: "ticket", fixIt: "indian-english" },
            { say: "Two return ticket to Rajahmundry, please.", good: false, skill: "ticket", fixIt: "plural" },
          ],
        },
        {
          partner: "That's 340 rupees. Which train?",
          te: "340 రూపాయలు. ఏ రైలు?",
          hint: { en: "Name the Ratnachal Express, and ask when it leaves.", te: "రత్నాచల్ ఎక్స్‌ప్రెస్ అని చెప్పి, ఎన్నింటికి బయల్దేరుతుందో అడగండి." },
          replies: [
            { say: "The Ratnachal Express. What time does it leave?", good: true, skill: "time" },
            { say: "The Ratnachal Express. What time it leaves?", good: false, skill: "time", fixIt: "question" },
          ],
        },
        {
          partner: "It leaves at 6:15 from platform 3.",
          te: "ఆరుంబావుకి 3వ ప్లాట్‌ఫామ్ నుంచి బయల్దేరుతుంది.",
          hint: { en: "Ask when it gets to Rajahmundry.", te: "రాజమండ్రికి ఎన్నింటికి చేరుతుందో అడగండి." },
          replies: [
            { say: "What time does it reach Rajahmundry?", good: true, skill: "time" },
            { say: "What time does it reach to Rajahmundry?", good: false, skill: "time", fixIt: "preposition" },
          ],
        },
        {
          partner: "At 9:15. Here are your tickets.",
          te: "తొమ్మిదింబావుకి. ఇదిగోండి మీ టికెట్లు.",
          hint: { en: "Pay with a 500 note, and thank her.", te: "500 నోటు ఇచ్చి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Here is 500. Thank you very much.", good: true, skill: "polite" },
            {
              say: "Hurry up, my train is leaving!",
              good: false,
              skill: "polite",
              react: { en: "Don't worry, it's only six. Here is your change.", te: "కంగారు పడకండి, ఇప్పుడు ఆరే అయింది. ఇదిగోండి చిల్లర." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "An auto from the station", te: "స్టేషన్ నుంచి ఆటో" },
      scene: {
        en: "At Rajahmundry station, take an auto to Pushkar Ghat on the Godavari.",
        te: "రాజమండ్రి స్టేషన్‌లో, గోదావరి ఒడ్డున ఉన్న పుష్కర్ ఘాట్‌కి ఆటో ఎక్కండి.",
      },
      partner: { en: "Venkat (auto driver)", te: "వెంకట్ (ఆటో డ్రైవర్)" },
      voice: "b",
      skills: [
        { id: "fare", label: { en: "Fares", te: "ఛార్జీ" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Auto? Where do you want to go?",
          te: "ఆటో కావాలా? ఎక్కడికి వెళ్ళాలి?",
          hint: { en: "Ask the fare to Pushkar Ghat.", te: "పుష్కర్ ఘాట్‌కి ఎంతో అడగండి." },
          replies: [
            { say: "How much is it to Pushkar Ghat?", good: true, skill: "fare" },
            { say: "How many is it to Pushkar Ghat?", good: false, skill: "fare" },
          ],
        },
        {
          partner: "150 rupees.",
          te: "150 రూపాయలు.",
          hint: { en: "Say politely it is a lot, and ask for the meter.", te: "ఎక్కువ అని మర్యాదగా చెప్పి, మీటర్ వేయమని అడగండి." },
          replies: [
            { say: "That's a bit much. Please go by meter.", good: true, skill: "polite" },
            {
              say: "150? You are cheating me!",
              good: false,
              skill: "polite",
              react: { en: "No cheating! Okay, okay, by meter. Please get in.", te: "మోసం ఏమీ లేదు! సరే, సరే, మీటర్ ప్రకారమే. ఎక్కండి." },
            },
          ],
        },
        {
          partner: "How long will you stay there?",
          te: "అక్కడ ఎంతసేపు ఉంటారు?",
          hint: { en: "Say about an hour, and ask him to wait.", te: "దాదాపు గంట అని చెప్పి, ఆగమని అడగండి." },
          replies: [
            { say: "About an hour. Can you wait for me?", good: true, skill: "polite" },
            { say: "About one hour. Can you waiting for me?", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Yes. Waiting is 50 rupees extra. Is that okay?",
          te: "సరే. ఆగితే 50 రూపాయలు ఎక్స్‌ట్రా. పర్లేదా?",
          hint: { en: "Agree, and ask how much time the ride takes.", te: "సరే అని, ఆటోలో ఎంతసేపు పడుతుందో అడగండి." },
          replies: [
            { say: "Yes, okay. How long does it take to get there?", good: true, skill: "fare" },
            { say: "Yes, okay. How long it takes to go there?", good: false, skill: "fare", fixIt: "question" },
          ],
        },
        {
          partner: "Only fifteen minutes. Sit comfortably!",
          te: "పదిహేను నిమిషాలే. హాయిగా కూర్చోండి!",
          hint: { en: "Thank him, and ask him to drive slowly.", te: "థాంక్స్ చెప్పి, నెమ్మదిగా నడపమని అడగండి." },
          replies: [
            { say: "Thank you. Please drive slowly.", good: true, skill: "polite" },
            { say: "Thank you. Please drive slow slow.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

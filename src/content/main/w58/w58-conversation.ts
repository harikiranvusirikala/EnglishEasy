import type { ConversationDay } from "../../types";

/** Week 58, Day 6 (CURRICULUM §5): Conversation Day — asking about buses to Bhadrachalam, and about a locker at a bank help desk. */
export const day: ConversationDay = {
  id: "w58-conversation",
  kind: "conversation",
  title: { en: "At the Bus Station Enquiry", te: "బస్ స్టేషన్ ఎంక్వయిరీ" },
  summary: {
    en: "Use the whole week: ask about buses at the bus station enquiry, and ask a bank help desk about a locker.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: బస్ స్టేషన్ ఎంక్వయిరీలో బస్సుల గురించి, బ్యాంక్ హెల్ప్ డెస్క్‌లో లాకర్ గురించి అడగండి.",
  },
  topics: ["transport", "travel", "bank", "offices"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A bus to Bhadrachalam", te: "భద్రాచలం బస్సు" },
    lines: [
      {
        speaker: { en: "Usha", te: "ఉష" },
        voice: "a",
        en: "Excuse me, could you tell me when the next bus to Bhadrachalam leaves?",
        te: "ఎక్స్‌క్యూజ్ మీ, భద్రాచలానికి తర్వాతి బస్సు ఎప్పుడు బయలుదేరుతుందో చెప్తారా?",
      },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "The next express leaves at 10:30, from platform five.", te: "తర్వాతి ఎక్స్‌ప్రెస్ 10:30 కి, ఐదో ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Do you know how long it takes?", te: "ఎంతసేపు పడుతుందో మీకు తెలుసా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "About three hours. It reaches Bhadrachalam by half past one.", te: "దాదాపు మూడు గంటలు. ఒకటిన్నరకల్లా భద్రాచలం చేరుతుంది." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "I'd like to know if there are seats for senior citizens.", te: "సీనియర్ సిటిజన్లకి సీట్లు ఉన్నాయో లేదో తెలుసుకోవాలి అండీ." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, some seats are kept for senior citizens.", te: "ఉన్నాయి, కొన్ని సీట్లు సీనియర్ సిటిజన్లకే ఉంచుతారు." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Can you tell me where I can buy the ticket?", te: "టికెట్ ఎక్కడ కొనొచ్చో చెప్తారా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "You can buy it from the conductor on the bus.", te: "బస్సులో కండక్టర్ దగ్గరే కొనొచ్చు." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Thank you. Do you know if it stops on the way for tea?", te: "థాంక్స్. దారిలో టీ కోసం ఎక్కడైనా ఆపుతారో లేదో తెలుసా?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Yes, it stops at Kothagudem for ten minutes.", te: "అవును, కొత్తగూడెంలో పది నిమిషాలు ఆపుతారు." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a bus station enquiry", "At a railway station", "At a bank"],
        answer: 0,
      },
      {
        prompt: { en: "What time does the bus leave?", te: "బస్సు ఎన్నింటికి బయలుదేరుతుంది?" },
        options: ["At 10:30", "At 1:30", "At 10:00"],
        answer: 0,
      },
      {
        prompt: { en: "Where can Usha buy the ticket?", te: "ఉష గారు టికెట్ ఎక్కడ కొనొచ్చు?" },
        options: ["From the conductor on the bus", "At platform five", "At the enquiry counter"],
        answer: 0,
      },
      {
        prompt: { en: "Where does the bus stop for tea?", te: "టీ కోసం బస్సు ఎక్కడ ఆగుతుంది?" },
        options: ["At Kothagudem", "At Bhadrachalam", "Nowhere on the way"],
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
        en: "At the enquiry counter, ask where the ticket counter is.",
        te: "ఎంక్వయిరీ కౌంటర్ దగ్గర, టికెట్ కౌంటర్ ఎక్కడ ఉందో అడగండి.",
      },
      expected: ["Can you tell me where the ticket counter is?", "Could you tell me where the ticket counter is?", "Where is the ticket counter, please?"],
      options: ["Can you tell me where the ticket counter is?", "Can you tell me where ticket counter is?", "Can you tell me where is ticket counter?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "The clerk asks how many tickets you need. Say three: for you and two friends.",
        te: "ఎన్ని టికెట్లు కావాలని క్లర్క్ గారు అడిగారు. మీకూ, ఇద్దరు స్నేహితులకీ కలిపి మూడు అని చెప్పండి.",
      },
      expected: ["Three tickets, please.", "I need three tickets, please.", "Three, please."],
      options: ["Three tickets, please.", "Three ticket, please.", "Three numbers of tickets, please."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk if the bus stops at Kothagudem.",
        te: "బస్సు కొత్తగూడెంలో ఆగుతుందో లేదో క్లర్క్ గారిని అడగండి.",
      },
      expected: ["Do you know if the bus stops at Kothagudem?", "Does the bus stop at Kothagudem?", "Can you tell me if it stops at Kothagudem?"],
      options: [
        "Do you know if the bus stops at Kothagudem?",
        "Do you know does the bus stop at Kothagudem?",
        "Do you know if the bus stop at Kothagudem?",
      ],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Buses to Bhadrachalam", te: "భద్రాచలం బస్సులు" },
      scene: {
        en: "You are at the Khammam bus station. You want to go to Bhadrachalam. Raju is at the enquiry counter.",
        te: "మీరు ఖమ్మం బస్ స్టేషన్‌లో ఉన్నారు. భద్రాచలం వెళ్ళాలి. ఎంక్వయిరీ కౌంటర్‌లో రాజు గారు ఉన్నారు.",
      },
      partner: { en: "Raju (at the enquiry counter)", te: "రాజు (ఎంక్వయిరీ కౌంటర్‌లో)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Polite questions", te: "మర్యాదగా అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "దయగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. Enquiry. How can I help?",
          te: "నమస్కారం. ఎంక్వయిరీ. చెప్పండి.",
          hint: { en: "Ask politely about the time of the next bus to Bhadrachalam.", te: "భద్రాచలానికి తర్వాతి బస్సు ఎప్పుడో మర్యాదగా అడగండి." },
          replies: [
            { say: "Could you tell me when the next bus to Bhadrachalam leaves?", good: true, skill: "ask" },
            { say: "When is leaving next bus to Bhadrachalam?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "The next one leaves at eleven, from platform three.",
          te: "తర్వాతిది పదకొండింటికి, మూడో ప్లాట్‌ఫామ్ నుంచి బయలుదేరుతుంది.",
          hint: { en: "Ask whether it is an express bus.", te: "అది ఎక్స్‌ప్రెస్ బస్సా కాదా అని అడగండి." },
          replies: [
            { say: "Do you know if it's an express bus?", good: true, skill: "ask" },
            { say: "Can you tell me if it's an express?", good: true, skill: "ask" },
            { say: "Do you know if it's express bus?", good: false, skill: "ask", fixIt: "article" },
          ],
        },
        {
          partner: "Yes, it's an express. It doesn't stop at small villages.",
          te: "అవును, ఎక్స్‌ప్రెస్. చిన్న ఊళ్ళలో ఆగదు.",
          hint: { en: "Ask how long the journey takes.", te: "ప్రయాణానికి ఎంతసేపు పడుతుందో అడగండి." },
          replies: [
            { say: "Do you know how long the journey takes?", good: true, skill: "ask" },
            { say: "Do you know how long does the journey take?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "About three hours. Anything else?",
          te: "దాదాపు మూడు గంటలు. ఇంకేమైనా?",
          hint: { en: "Ask where you can wait until eleven.", te: "పదకొండు వరకు ఎక్కడ కూర్చోవచ్చో అడగండి." },
          replies: [
            { say: "Can you tell me where the waiting room is?", good: true, skill: "ask" },
            { say: "Yes. Is there a waiting room, please?", good: true, skill: "ask" },
            {
              say: "Nothing else. You talk too slowly.",
              good: false,
              skill: "polite",
              react: { en: "Sorry. I'm only trying to help you.", te: "సారీ అండీ. మీకు సహాయం చేయడానికే చూస్తున్నాను." },
            },
          ],
        },
        {
          partner: "It's upstairs, next to the canteen. Have a good trip.",
          te: "పైన, క్యాంటీన్ పక్కన ఉంది. ప్రయాణం బాగా జరగాలి.",
          hint: { en: "Thank him, and say you will be at the platform by half past ten.", te: "థాంక్స్ చెప్పి, పదిన్నరకల్లా ప్లాట్‌ఫామ్ దగ్గర ఉంటానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll be at the platform by half past ten.", good: true, skill: "polite" },
            { say: "Thank you. I'll be on the platform by half past ten.", good: true, skill: "polite" },
            { say: "Thank you. I'll be at the platform on half past ten.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A locker at the bank", te: "బ్యాంక్‌లో లాకర్" },
      scene: {
        en: "You want a locker at your bank to keep some gold safe. Grace is at the help desk.",
        te: "కొంచెం బంగారం భద్రంగా పెట్టడానికి మీ బ్యాంక్‌లో లాకర్ కావాలి. హెల్ప్ డెస్క్ దగ్గర గ్రేస్ గారు ఉన్నారు.",
      },
      partner: { en: "Grace (at the bank help desk)", te: "గ్రేస్ (బ్యాంక్ హెల్ప్ డెస్క్ దగ్గర)" },
      skills: [
        { id: "ask", label: { en: "Polite questions", te: "మర్యాదగా అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "దయగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good afternoon. Welcome to the help desk.",
          te: "నమస్కారం. హెల్ప్ డెస్క్‌కి స్వాగతం.",
          hint: { en: "Greet her, and say you want some information about lockers.", te: "నమస్కారం చెప్పి, లాకర్ల గురించి వివరాలు కావాలని చెప్పండి." },
          replies: [
            { say: "Good afternoon. I'd like to know about lockers, please.", good: true, skill: "ask" },
            { say: "Good afternoon. I'd like to know about locker, please.", good: false, skill: "ask", fixIt: "article" },
          ],
        },
        {
          partner: "Sure. What would you like to know?",
          te: "తప్పకుండా. ఏం తెలుసుకోవాలనుకుంటున్నారు?",
          hint: { en: "Ask politely whether a locker is free now.", te: "ఇప్పుడు ఏదైనా లాకర్ ఖాళీగా ఉందో లేదో మర్యాదగా అడగండి." },
          replies: [
            { say: "Can you tell me if a locker is available now?", good: true, skill: "ask" },
            { say: "I was wondering if a locker was free.", good: true, skill: "ask" },
            { say: "Can you tell me is a locker available now?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, a small one is free. Do you have an account here?",
          te: "అవును, ఒక చిన్నది ఖాళీగా ఉంది. మీకు ఇక్కడ అకౌంట్ ఉందా?",
          hint: { en: "Say yes, and ask about the yearly rent.", te: "ఉంది అని చెప్పి, సంవత్సరానికి అద్దె ఎంతో అడగండి." },
          replies: [
            { say: "Yes, I do. Could you tell me what the yearly rent is?", good: true, skill: "ask" },
            { say: "Yes, I do. Could you tell me what is the yearly rent?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "It depends on the size. I'll give you the list of charges.",
          te: "అది సైజుని బట్టి ఉంటుంది. ఛార్జీల లిస్ట్ ఇస్తాను.",
          hint: { en: "Ask if you need to bring any documents.", te: "ఏమైనా documents తేవాలా అని అడగండి." },
          replies: [
            { say: "Thank you. Do I need to bring any documents?", good: true, skill: "ask" },
            { say: "Thank you. Could you tell me which documents I need?", good: true, skill: "ask" },
            {
              say: "Just give me a locker. Why so many rules?",
              good: false,
              skill: "polite",
              react: { en: "The rules keep your things safe.", te: "ఆ రూల్స్ మీ వస్తువులు భద్రంగా ఉండటానికే అండీ." },
            },
          ],
        },
        {
          partner: "Just your Aadhaar card and two photos. Please fill in this form.",
          te: "మీ ఆధార్ కార్డు, రెండు ఫోటోలు చాలు. ఈ ఫారమ్ నింపండి.",
          hint: { en: "Thank her, and say you will come back tomorrow with them.", te: "థాంక్స్ చెప్పి, రేపు అవి తీసుకుని వస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll come back tomorrow with them.", good: true, skill: "polite" },
            { say: "Thank you. I'll come back tomorrow with two photo.", good: false, skill: "polite", fixIt: "plural" },
          ],
        },
      ],
    },
  ],
};

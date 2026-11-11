import type { ConversationDay } from "../../types";

/** Week 40, Day 6 (CURRICULUM §4): Conversation Day — a full day out: the bank, the doctor, lunch and shopping (all of Stage 2). */
export const day: ConversationDay = {
  id: "w40-conversation",
  kind: "conversation",
  title: { en: "A Full Day Out", te: "రోజంతా బయట" },
  summary: {
    en: "Use everything from Stage 2: a day of errands with a friend, from the bank and the doctor to lunch and a gift shop.",
    te: "స్టేజ్ 2 లో నేర్చుకున్నదంతా వాడండి: స్నేహితులతో కలిసి రోజంతా పనులు: బ్యాంక్, డాక్టర్, భోజనం, గిఫ్ట్ షాపింగ్.",
  },
  topics: ["bank", "doctor", "food", "shopping"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A day of errands", te: "పనుల రోజు" },
    lines: [
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Good morning, Rahim! Are you ready to go?", te: "నమస్కారం రహీమ్ గారూ! బయల్దేరడానికి రెడీనా?" },
      { speaker: { en: "Rahim", te: "రహీమ్" }, voice: "b", en: "Yes. Shall we go to the bank first?", te: "రెడీ. ముందు బ్యాంక్‌కి వెళ్దామా?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Good idea. Then your doctor's appointment at eleven.", te: "మంచి ఆలోచన. తర్వాత పదకొండు గంటలకి మీ డాక్టర్ అపాయింట్‌మెంట్." },
      { speaker: { en: "Rahim", te: "రహీమ్" }, voice: "b", en: "Yes. My BP has been high since last week.", te: "అవును. పోయిన వారం నుంచి నా BP ఎక్కువగా ఉంది." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Don't worry. The doctor will check it.", te: "కంగారు పడకండి. డాక్టర్ చెక్ చేస్తారు." },
      { speaker: { en: "Rahim", te: "రహీమ్" }, voice: "b", en: "That was quick! The doctor says it's under control.", te: "తొందరగా అయిపోయింది! కంట్రోల్‌లోనే ఉందని డాక్టర్ చెప్పారు." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Wonderful! Let's have lunch now. I'm very hungry.", te: "చాలా మంచిది! ఇప్పుడు భోజనం చేద్దాం. నాకు బాగా ఆకలిగా ఉంది." },
      { speaker: { en: "Rahim", te: "రహీమ్" }, voice: "b", en: "How about the new restaurant near the bus stand?", te: "బస్ స్టాండ్ దగ్గర కొత్త హోటల్ ఎలా ఉంటుంది?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Okay. After lunch, I need a gift for my friend.", te: "సరే. భోజనం తర్వాత నా స్నేహితురాలికి ఒక గిఫ్ట్ కొనాలి." },
      { speaker: { en: "Rahim", te: "రహీమ్" }, voice: "b", en: "Sure. There's a nice silk shop right next to it.", te: "తప్పకుండా. దాని పక్కనే మంచి సిల్క్ షాపు ఉంది." },
    ],
    questions: [
      {
        prompt: { en: "What is this talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["A day of errands in town", "A train trip to Tirupati", "A problem with a phone"],
        answer: 0,
      },
      {
        prompt: { en: "Where do they go first?", te: "వాళ్ళు ముందు ఎక్కడికి వెళ్తున్నారు?" },
        options: ["To the bank", "To the doctor", "To a restaurant"],
        answer: 0,
      },
      {
        prompt: { en: "What does the doctor say about Rahim's BP?", te: "రహీమ్ గారి BP గురించి డాక్టర్ ఏం చెప్పారు?" },
        options: ["It is under control.", "It is very high.", "He needs a blood test."],
        answer: 0,
      },
      {
        prompt: { en: "What does Kamala want to buy after lunch?", te: "భోజనం తర్వాత కమల గారు ఏం కొనాలనుకుంటున్నారు?" },
        options: ["A gift for her friend", "Tablets for her BP", "A new phone"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "At the bank, ask which counter is for passbook updates.",
        te: "బ్యాంక్‌లో పాస్‌బుక్ అప్‌డేట్ ఏ కౌంటర్‌లో చేస్తారో అడగండి.",
      },
      expected: ["Which counter is for passbook updates?", "Excuse me, which counter is for passbook updates?"],
      options: ["Which counter is for passbook updates?", "Which counter for passbook updates?", "Passbook update is which counter?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The doctor asks how long you have had this cough. Say: since Monday.",
        te: "ఈ దగ్గు ఎప్పటి నుంచి ఉందని డాక్టర్ అడిగారు. సోమవారం నుంచి అని చెప్పండి.",
      },
      expected: ["I have had it since Monday.", "I've had it since Monday.", "Since Monday, doctor."],
      options: ["I have had it since Monday.", "I am having it since Monday.", "I have it from Monday."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the restaurant, order two plates of idli for you and your friend.",
        te: "హోటల్‌లో మీకు, మీ స్నేహితులకి రెండు ప్లేట్ల ఇడ్లీ ఆర్డర్ చేయండి.",
      },
      expected: ["Two plates of idli, please.", "Could we have two plates of idli, please?", "We'd like two plates of idli, please."],
      options: ["Two plates of idli, please.", "Two plate idli, please.", "Give two plate of idli."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A day of errands", te: "పనుల రోజు" },
      scene: {
        en: "You and your friend Kavitha are out for the whole day: the bank, your check-up, lunch and shopping. You lead the way.",
        te: "మీరు, మీ స్నేహితురాలు కవిత రోజంతా బయట ఉన్నారు: బ్యాంక్, మీ చెకప్, భోజనం, షాపింగ్. మీరే ముందుండి నడిపిస్తున్నారు.",
      },
      partner: { en: "Kavitha (a friend)", te: "కవిత (స్నేహితురాలు)" },
      skills: [
        { id: "plan", label: { en: "Suggesting", te: "సూచించడం" } },
        { id: "say", label: { en: "Explaining", te: "వివరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "So, where do we go first?",
          te: "అయితే, ముందు ఎక్కడికి వెళ్దాం?",
          hint: { en: "Suggest the bank first, and say when it opens.", te: "ముందు బ్యాంక్ అని సూచించి, అది ఎప్పుడు తెరుస్తారో చెప్పండి." },
          replies: [
            { say: "Let's go to the bank first. It opens at ten.", good: true, skill: "plan" },
            { say: "Let's go to the bank first. It open at ten.", good: false, skill: "plan", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "The bank is so crowded! What do you need here?",
          te: "బ్యాంక్ ఎంత రద్దీగా ఉందో! మీకు ఇక్కడ ఏం పని?",
          hint: { en: "Say the two jobs you have at the bank.", te: "బ్యాంక్‌లో మీకున్న రెండు పనులు చెప్పండి." },
          replies: [
            { say: "I need to deposit money and update my passbook.", good: true, skill: "say" },
            { say: "I need deposit money and update my passbook.", good: false, skill: "say" },
          ],
        },
        {
          partner: "Done! Now your check-up. What's the problem?",
          te: "అయిపోయింది! ఇప్పుడు మీ చెకప్. ఏంటి సమస్య?",
          hint: { en: "Tell her about your knee pain, and for how long.", te: "మోకాలి నొప్పి గురించి, ఎన్నాళ్ళుగా ఉందో చెప్పండి." },
          replies: [
            { say: "I've had knee pain for two weeks.", good: true, skill: "say" },
            { say: "I am having knee pain since two weeks.", good: false, skill: "say", fixIt: "duration" },
          ],
        },
        {
          partner: "The doctor was very kind. Shall we have lunch now?",
          te: "డాక్టర్ గారు చాలా మంచిగా మాట్లాడారు. ఇప్పుడు భోజనం చేద్దామా?",
          hint: { en: "Agree, and suggest a place.", te: "సరే అని, ఒక చోటు సూచించండి." },
          replies: [
            { say: "Sounds good! How about that new restaurant?", good: true, skill: "plan" },
            {
              say: "Whatever. I don't care.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Okay, then let's try the new place.", te: "ఓ! సరే, అయితే కొత్త హోటల్‌కి వెళ్దాం." },
            },
          ],
        },
        {
          partner: "What a full day! I'm tired, but happy.",
          te: "ఎంత పెద్ద రోజో! అలసిపోయాను, కానీ సంతోషంగా ఉంది.",
          hint: { en: "Say you feel the same, and thank her for coming.", te: "మీకూ అలాగే ఉందని చెప్పి, తోడు వచ్చినందుకు థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Me too! Thank you for coming with me.", good: true, skill: "polite" },
            { say: "Me too! Thanks for come with me.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Buying a gift", te: "గిఫ్ట్ కొనడం" },
      scene: {
        en: "You need a gift for a friend, under 2,000 rupees. Joseph owns the silk shop.",
        te: "మీకు ఒక స్నేహితురాలి కోసం 2,000 రూపాయల లోపు గిఫ్ట్ కావాలి. సిల్క్ షాపు యజమాని జోసెఫ్.",
      },
      partner: { en: "Joseph (shop owner)", te: "జోసెఫ్ (షాపు యజమాని)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Asking for things", te: "అడగడం" } },
        { id: "price", label: { en: "Prices", te: "ధరలు" } },
      ],
      turns: [
        {
          partner: "Welcome! What are you looking for today?",
          te: "రండి! ఈ రోజు ఏం కావాలి?",
          hint: { en: "Say you are looking for a gift for a friend.", te: "ఒక స్నేహితురాలి కోసం గిఫ్ట్ చూస్తున్నానని చెప్పండి." },
          replies: [
            { say: "I'm looking for a gift for a friend.", good: true, skill: "ask" },
            { say: "I'm looking a gift for a friend.", good: false, skill: "ask", fixIt: "preposition" },
          ],
        },
        {
          partner: "How about this cotton saree? It's 1,500 rupees.",
          te: "ఈ కాటన్ చీర ఎలా ఉంది? 1,500 రూపాయలు.",
          hint: { en: "Say it's nice, and ask politely to see a lighter colour.", te: "బాగుందని చెప్పి, లేత రంగుది చూపించమని మర్యాదగా అడగండి." },
          replies: [
            { say: "It's nice. Could you show me a lighter colour?", good: true, skill: "ask" },
            {
              say: "Not this. Show me another one, fast.",
              good: false,
              skill: "ask",
              react: { en: "Sure, sure. One minute, please.", te: "సరే, సరే. ఒక్క నిమిషం." },
            },
          ],
        },
        {
          partner: "This blue one is lighter, and it's cheaper too.",
          te: "ఈ నీలం రంగుది లేతగా ఉంది, ధర కూడా తక్కువ.",
          hint: { en: "Say you like it, and ask the price.", te: "నచ్చిందని చెప్పి, ధర అడగండి." },
          replies: [
            { say: "I like it. How much is it?", good: true, skill: "price" },
            { say: "I like it. How much it is?", good: false, skill: "price", fixIt: "question" },
          ],
        },
        {
          partner: "Only 1,200 rupees. Shall I pack it as a gift?",
          te: "1,200 రూపాయలే. గిఫ్ట్ లాగా ప్యాక్ చేయనా?",
          hint: { en: "Say yes, and thank him.", te: "సరే అని, ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, please. Thank you very much.", good: true, skill: "ask" },
            { say: "Yes, please do the needful.", good: false, skill: "ask", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

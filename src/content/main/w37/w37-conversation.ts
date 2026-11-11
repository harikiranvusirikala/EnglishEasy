import type { ConversationDay } from "../../types";

/** Week 37, Day 6 (CURRICULUM §4): Conversation Day at a government hospital — following its rules, and advising a neighbour about a scheme. */
export const day: ConversationDay = {
  id: "w37-conversation",
  kind: "conversation",
  title: { en: "A Government Hospital Visit", te: "ప్రభుత్వ ఆసుపత్రికి" },
  summary: {
    en: "Use the whole week: follow the rules at a government hospital, and advise a neighbour about the Aarogyasri scheme.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ప్రభుత్వ ఆసుపత్రి నియమాలు పాటించండి, పక్కింటివారికి ఆరోగ్యశ్రీ పథకం గురించి సలహా ఇవ్వండి.",
  },
  topics: ["health", "doctor", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the hospital desk", te: "ఆసుపత్రి డెస్క్ దగ్గర" },
    lines: [
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Good morning. Is this your first visit?", te: "నమస్కారం. మీరు ఇక్కడికి రావడం ఇదే మొదటిసారా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes. My mother has knee pain.", te: "అవును. మా అమ్మగారికి మోకాలి నొప్పి." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Please take a token from that counter first.", te: "ముందు ఆ కౌంటర్ దగ్గర టోకెన్ తీసుకోండి." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Do I have to pay for the token?", te: "టోకెన్‌కి డబ్బులు కట్టాలా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "No, you don't have to. It's free here.", te: "అక్కర్లేదు. ఇక్కడ ఉచితం." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Can I go inside with her?", te: "ఆవిడతో పాటు నేను లోపలికి రావచ్చా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Yes, but only one person is allowed with a patient.", te: "రావచ్చు, కానీ ఒక రోగితో ఒక్కరికే అనుమతి." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Okay. Can I use my phone inside?", te: "సరే. లోపల ఫోన్ వాడొచ్చా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Please keep it on silent. And you mustn't smoke anywhere.", te: "సైలెంట్‌లో పెట్టండి. ఇంకా, ఎక్కడా సిగరెట్ తాగకూడదు." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Of course. Thank you for your help.", te: "తప్పకుండా. మీ సహాయానికి థాంక్స్." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a temple", "At a hospital", "At a bank"],
        answer: 1,
      },
      {
        prompt: { en: "Who has knee pain?", te: "ఎవరికి మోకాలి నొప్పి?" },
        options: ["Narayana's mother", "Narayana", "Usha"],
        answer: 0,
      },
      {
        prompt: { en: "How much does the token cost?", te: "టోకెన్ ఎంత?" },
        options: ["Ten rupees", "Fifty rupees", "Nothing. It's free."],
        answer: 2,
      },
      {
        prompt: { en: "How many people can go in with a patient?", te: "ఒక రోగితో ఎంతమంది లోపలికి వెళ్ళొచ్చు?" },
        options: ["Two", "One", "Nobody"],
        answer: 1,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Before a blood test, the nurse asks: You haven't eaten anything? You haven't. Answer her.",
        te: "బ్లడ్ టెస్ట్ ముందు నర్సు గారు You haven't eaten anything? అని అడిగారు. మీరు ఏమీ తినలేదు. జవాబు చెప్పండి.",
      },
      expected: ["No, I haven't.", "No, I haven't eaten anything.", "No, nothing."],
      options: ["No, I haven't.", "Yes, I haven't.", "Yes, not eaten."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "A man is smoking near the ward. Tell him politely that it is not allowed.",
        te: "వార్డు దగ్గర ఒకాయన సిగరెట్ తాగుతున్నారు. అది చేయకూడదని ఆయనకి మర్యాదగా చెప్పండి.",
      },
      expected: ["Excuse me, smoking is not allowed here.", "Sorry, smoking is not allowed here.", "Excuse me, you mustn't smoke here."],
      options: ["Excuse me, smoking is not allowed here.", "Excuse me, smoking not allowed here.", "Hey! Throw it away now!"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your neighbour Fatima has no Aarogyasri card yet. Give her a soft suggestion.",
        te: "పక్కింటి ఫాతిమా గారికి ఇంకా ఆరోగ్యశ్రీ కార్డు లేదు. ఆవిడకి మెత్తగా ఒక సలహా ఇవ్వండి.",
      },
      expected: ["Why don't you apply for the card?", "Why don't you apply for an Aarogyasri card?", "You should apply for the card."],
      options: ["Why don't you apply for the card?", "Why you don't apply for the card?", "Why don't you to apply for the card?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Following hospital rules", te: "ఆసుపత్రి నియమాలు పాటించడం" },
      scene: {
        en: "You have come to see your friend Joseph in the ward. Ramana, the guard, is at the door.",
        te: "వార్డులో ఉన్న మీ స్నేహితుడు జోసెఫ్‌ని చూడటానికి వచ్చారు. గుమ్మం దగ్గర గార్డ్ రమణ గారు ఉన్నారు.",
      },
      partner: { en: "Ramana (guard)", te: "రమణ (గార్డ్)" },
      voice: "b",
      skills: [
        { id: "rules", label: { en: "Following rules", te: "నియమాలు పాటించడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good afternoon. Who do you want to see?",
          te: "నమస్కారం. మీరు ఎవరిని చూడాలి?",
          hint: { en: "Greet him, and say who you have come to see.", te: "నమస్కారం చెప్పి, ఎవరిని చూడటానికి వచ్చారో చెప్పండి." },
          replies: [
            { say: "Good afternoon. I've come to see my friend Joseph.", good: true, skill: "polite" },
            { say: "Myself Kiran. I came to see Joseph.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Visiting hours start at four. It's only half past three.",
          te: "చూడటానికి వచ్చే సమయం నాలుగింటికి మొదలవుతుంది. ఇప్పుడు మూడున్నరే.",
          hint: { en: "Say okay, and ask if you can sit on the bench.", te: "సరే అని, బెంచ్ మీద కూర్చోవచ్చా అని అడగండి." },
          replies: [
            { say: "Okay. Can I sit on that bench?", good: true, skill: "rules" },
            {
              say: "Half an hour? I'm a busy person!",
              good: false,
              skill: "polite",
              react: { en: "Sorry, the rule is the same for everyone.", te: "సారీ, నియమం అందరికీ ఒక్కటే." },
            },
          ],
        },
        {
          partner: "Yes, please. And bags are not allowed in the ward.",
          te: "కూర్చోండి. ఇంకా, వార్డులోకి బ్యాగులు తీసుకెళ్ళకూడదు.",
          hint: { en: "Ask where you can leave your bag.", te: "బ్యాగ్ ఎక్కడ పెట్టాలో అడగండి." },
          replies: [
            { say: "Where can I leave my bag?", good: true, skill: "rules" },
            { say: "Where I can leave my bag?", good: false, skill: "rules", fixIt: "question" },
          ],
        },
        {
          partner: "At that counter. They'll give you a token.",
          te: "ఆ కౌంటర్ దగ్గర. వాళ్ళు మీకు ఒక టోకెన్ ఇస్తారు.",
          hint: { en: "Thank him, and ask if you can take fruit inside.", te: "థాంక్స్ చెప్పి, పండ్లు లోపలికి తీసుకెళ్ళొచ్చా అని అడగండి." },
          replies: [
            { say: "Thank you. Can I take this fruit inside?", good: true, skill: "rules" },
            { say: "Thank you. Fruit allowed inside?", good: false, skill: "rules", fixIt: "be" },
          ],
        },
        {
          partner: "Yes, fruit is allowed. It's four now. Please go in.",
          te: "పండ్లు తీసుకెళ్ళొచ్చు. నాలుగయింది. లోపలికి వెళ్ళండి.",
          hint: { en: "Thank him, and say you'll come out in ten minutes.", te: "థాంక్స్ చెప్పి, పది నిమిషాల్లో బయటికి వస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll come out in ten minutes.", good: true, skill: "polite" },
            { say: "Thank you. I'll coming out in ten minutes.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Advice about Aarogyasri", te: "ఆరోగ్యశ్రీ గురించి సలహా" },
      scene: {
        en: "Your neighbour Sarala needs a knee operation. She is worried about the cost.",
        te: "పక్కింటి సరళ గారికి మోకాలి ఆపరేషన్ కావాలి. ఖర్చు గురించి ఆవిడ కంగారు పడుతున్నారు.",
      },
      partner: { en: "Sarala (your neighbour)", te: "సరళ (పక్కింటావిడ)" },
      skills: [
        { id: "advice", label: { en: "Giving advice", te: "సలహా ఇవ్వడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మెత్తగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "The doctor says I need a knee operation.",
          te: "నాకు మోకాలి ఆపరేషన్ కావాలని డాక్టర్ చెప్పారు.",
          hint: { en: "Say you're sorry, and ask if it costs a lot.", te: "బాధగా ఉందని చెప్పి, ఖర్చు చాలా అవుతుందా అని అడగండి." },
          replies: [
            { say: "Oh, I'm sorry to hear that. Is it very expensive?", good: true, skill: "polite" },
            { say: "Oh, sorry. It is very expensive?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, almost one lakh rupees. I'm really worried.",
          te: "అవును, దాదాపు లక్ష రూపాయలు. నాకు చాలా కంగారుగా ఉంది.",
          hint: { en: "Give her a soft suggestion about the Aarogyasri scheme.", te: "ఆరోగ్యశ్రీ పథకం గురించి మెత్తగా సలహా ఇవ్వండి." },
          replies: [
            { say: "Why don't you try the Aarogyasri scheme?", good: true, skill: "advice" },
            { say: "Why don't you trying the Aarogyasri scheme?", good: false, skill: "advice" },
          ],
        },
        {
          partner: "Aarogyasri? I don't know much about it.",
          te: "ఆరోగ్యశ్రీనా? దాని గురించి నాకు పెద్దగా తెలియదు.",
          hint: { en: "Tell her that many operations are free with the card.", te: "ఆ కార్డుతో చాలా ఆపరేషన్లు ఉచితం అని చెప్పండి." },
          replies: [
            { say: "With the card, many operations are free.", good: true, skill: "advice" },
            { say: "With the card, many operation are free.", good: false, skill: "advice", fixIt: "plural" },
          ],
        },
        {
          partner: "You don't have the card yourself, right?",
          te: "మీ దగ్గర ఆ కార్డు లేదు కదా?",
          hint: { en: "Answer that you don't, but your friend Ramesh does.", te: "మీ దగ్గర లేదని, కానీ మీ స్నేహితుడు రమేష్ దగ్గర ఉందని చెప్పండి." },
          replies: [
            { say: "No, I don't. But my friend Ramesh has one.", good: true, skill: "advice" },
            { say: "Yes, I don't. But my friend Ramesh has one.", good: false, skill: "advice", fixIt: "negative-answer" },
            { say: "No, I don't. But my friend Ramesh have one.", good: false, skill: "advice", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "I see. So where do I apply for it?",
          te: "అలాగా. మరి దానికి ఎక్కడ అప్లై చేయాలి?",
          hint: { en: "Advise her strongly to take her documents to the ward secretariat.", te: "డాక్యుమెంట్లు తీసుకుని వార్డ్ సచివాలయానికి వెళ్ళమని గట్టిగా సలహా ఇవ్వండి." },
          replies: [
            { say: "You'd better go to the ward secretariat with your documents.", good: true, skill: "advice" },
            {
              say: "How do I know? Ask someone else.",
              good: false,
              skill: "polite",
              react: { en: "Oh. Sorry to trouble you.", te: "ఓ. మిమ్మల్ని ఇబ్బంది పెట్టినందుకు సారీ." },
            },
          ],
        },
        {
          partner: "Thank you! That's very helpful.",
          te: "థాంక్యూ! చాలా ఉపయోగపడింది.",
          hint: { en: "Reply to her thanks, and wish her a quick recovery.", te: "ఆవిడ థాంక్స్‌కి జవాబు చెప్పి, త్వరగా కోలుకోవాలని చెప్పండి." },
          replies: [
            { say: "You're welcome. I hope your knee gets better soon.", good: true, skill: "polite" },
            { say: "No mention. I hope your knee gets better soon.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

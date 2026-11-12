import type { ConversationDay } from "../../types";

/** Week 50, Day 6 (CURRICULUM §5): Conversation Day — returning a faulty ceiling fan at the shop, and asking an online seller for a refund. */
export const day: ConversationDay = {
  id: "w50-conversation",
  kind: "conversation",
  title: { en: "A Faulty Ceiling Fan", te: "పని చేయని ఫ్యాన్" },
  summary: {
    en: "Use the whole week: explain what is wrong with a new ceiling fan, return it at the shop, and ask an online seller for a refund.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: కొత్త ceiling fan కి ఏమైందో చెప్పండి, షాపులో వాపస్ ఇవ్వండి, online seller ని రీఫండ్ అడగండి.",
  },
  topics: ["shopping", "money", "home"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A noisy fan", te: "శబ్దం చేసే ఫ్యాన్" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good morning. I bought this ceiling fan here last Saturday.", te: "నమస్కారం. ఈ ceiling fan పోయిన శనివారం ఇక్కడే కొన్నాను." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Yes, I remember. Is there a problem with it?", te: "అవును, గుర్తుంది. దానితో ఏమైనా సమస్యా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "I'm afraid it makes a loud noise, so I can't sleep.", te: "అది చాలా గట్టిగా శబ్దం చేస్తోంది అండీ, అందుకే నిద్ర పట్టట్లేదు." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Oh, I'm sorry. Did an electrician fit it?", te: "అయ్యో, sorry. electrician తోనే బిగించారా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes, he did. It was noisy from day one. That's why I'm here.", te: "అవును, ఆయనే బిగించారు. మొదటి రోజు నుంచే శబ్దం. అందుకే వచ్చాను." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "I understand. Do you have the bill with you?", te: "అర్థమైంది. బిల్లు మీ దగ్గర ఉందా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes, here it is. I'd like to exchange it for a new one.", te: "ఉంది, ఇదిగోండి. దీనికి బదులు కొత్తది కావాలి." },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Sorry, we don't have the same model today.", te: "sorry అండీ, ఈ రోజు అదే model మా దగ్గర లేదు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Then I'd like a refund, please. When will I get it?", te: "అయితే రీఫండ్ ఇవ్వండి. ఎప్పుడు వస్తుంది?" },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "I'll send it by UPI now. You'll get it in a few minutes.", te: "ఇప్పుడే UPI లో పంపుతాను. కొన్ని నిమిషాల్లో మీకు వస్తుంది." },
    ],
    questions: [
      {
        prompt: { en: "Where are they talking?", te: "వీళ్ళు ఎక్కడ మాట్లాడుకుంటున్నారు?" },
        options: ["At a shop", "At a bank", "At a hospital"],
        answer: 0,
      },
      {
        prompt: { en: "What is wrong with the fan?", te: "ఫ్యాన్‌కి ఏమైంది?" },
        options: ["It makes a loud noise.", "It doesn't turn on.", "It is the wrong colour."],
        answer: 0,
      },
      {
        prompt: { en: "Why can't Venkat get a new fan?", te: "వెంకట్ గారికి కొత్త ఫ్యాన్ ఎందుకు దొరకదు?" },
        options: ["The shop doesn't have the same model today.", "He doesn't have the bill.", "The fan is too old."],
        answer: 0,
      },
      {
        prompt: { en: "How will he get his money back?", te: "ఆయనకి డబ్బులు ఎలా తిరిగి వస్తాయి?" },
        options: ["By UPI", "In cash", "As a credit note"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell the shop you bought the fan four days ago.",
        te: "ఈ ఫ్యాన్ నాలుగు రోజుల క్రితం కొన్నారని షాపులో చెప్పండి.",
      },
      expected: ["I bought this fan four days ago.", "I bought it four days ago.", "I bought this fan here four days ago."],
      options: ["I bought this fan four days ago.", "I bought this fan four day ago.", "I bought this fan before four days."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your electrician checked the fan. Tell the shop owner what he says: it is faulty.",
        te: "electrician గారు ఫ్యాన్ చూశారు. ఆయన ఏమంటున్నారో షాపు యజమానికి చెప్పండి: అందులో లోపం ఉంది.",
      },
      expected: ["The electrician says it is faulty.", "The electrician says the fan is faulty.", "My electrician says it's faulty."],
      options: ["The electrician says it is faulty.", "The electrician say it is faulty.", "The electrician is saying it faulty."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You are returning a fan you ordered online. Ask the seller if you need to send it in its box.",
        te: "online లో కొన్న ఫ్యాన్ వాపస్ పంపుతున్నారు. box లోనే పంపాలా అని seller ని అడగండి.",
      },
      expected: ["Do I need to send it in the box?", "Do I have to send it back in the box?", "Should I send it in the box?"],
      options: ["Do I need to send it in the box?", "I need to send it in the box?", "Do I need send it in the box?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Returning a faulty fan", te: "పాడైన ఫ్యాన్ వాపస్" },
      scene: {
        en: "Last week you bought a ceiling fan at Salma's shop. It makes a loud noise, so you take it back.",
        te: "పోయిన వారం మీరు సల్మా గారి షాపులో ఒక ceiling fan కొన్నారు. అది గట్టిగా శబ్దం చేస్తోంది, అందుకే తిరిగి తీసుకెళ్ళారు.",
      },
      partner: { en: "Salma (the shop owner)", te: "సల్మా (షాపు యజమాని)" },
      skills: [
        { id: "explain", label: { en: "Explaining the problem", te: "సమస్య చెప్పడం" } },
        { id: "return", label: { en: "Returning and exchanging", te: "వాపస్, మార్పు అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! What can I do for you?",
          te: "నమస్కారం! చెప్పండి, ఏం కావాలి?",
          hint: { en: "Greet her, and say you bought this fan here last week.", te: "నమస్కారం చెప్పి, ఈ ఫ్యాన్ పోయిన వారం ఇక్కడే కొన్నారని చెప్పండి." },
          replies: [
            { say: "Good evening. I bought this ceiling fan here last week.", good: true, skill: "explain" },
            { say: "Good evening. I bought this ceiling fan here in last week.", good: false, skill: "explain", fixIt: "preposition" },
          ],
        },
        {
          partner: "Okay. What's the problem with it?",
          te: "సరే. దానికేమైంది?",
          hint: { en: "Say what is wrong, and that this is why you brought it back.", te: "ఏం సమస్యో చెప్పి, అందుకే తిరిగి తెచ్చారని చెప్పండి." },
          replies: [
            { say: "It makes a loud noise. That's why I brought it back.", good: true, skill: "explain" },
            { say: "I'm afraid it's very noisy, so I brought it back.", good: true, skill: "explain" },
            {
              say: "Your fans are rubbish. It's so noisy!",
              good: false,
              skill: "polite",
              react: { en: "Please, let's not use that word. I'll check it now.", te: "అలాంటి మాట వద్దండీ. ఇప్పుడే చూస్తాను." },
            },
          ],
        },
        {
          partner: "Let me check. Yes, it's noisy. Shall we repair it for you?",
          te: "చూడనివ్వండి. అవును, శబ్దం వస్తోంది. మీకు repair చేసి ఇవ్వమంటారా?",
          hint: { en: "Say you want a new one instead, and give her the bill.", te: "బదులుగా కొత్తది కావాలని చెప్పి, బిల్లు ఇవ్వండి." },
          replies: [
            { say: "I'd like to exchange it for a new one. Here is the bill.", good: true, skill: "return" },
            { say: "I'd like to exchange it with a new one. Here is the bill.", good: false, skill: "return", fixIt: "preposition" },
          ],
        },
        {
          partner: "No problem. Here is a new fan. Please check it here.",
          te: "పర్వాలేదు. ఇదిగోండి కొత్త ఫ్యాన్. ఇక్కడే ఒకసారి చూసుకోండి.",
          hint: { en: "Thank her, and say goodbye.", te: "థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "It looks fine. Thank you so much. Have a nice evening!", good: true, skill: "polite" },
            { say: "It looks fine. Thanks you so much. Bye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A refund from an online seller", te: "online seller నుంచి రీఫండ్" },
      scene: {
        en: "You ordered a ceiling fan online. It came damaged, so you call customer care.",
        te: "మీరు online లో ఒక ceiling fan ఆర్డర్ చేశారు. అది పాడైపోయి వచ్చింది, అందుకే customer care కి ఫోన్ చేశారు.",
      },
      partner: { en: "David (customer care)", te: "డేవిడ్ (customer care)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining the problem", te: "సమస్య చెప్పడం" } },
        { id: "refund", label: { en: "Asking about a refund", te: "రీఫండ్ గురించి అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello, this is David from customer care. How can I help you?",
          te: "హలో, నేను customer care నుంచి డేవిడ్. చెప్పండి, ఏం సహాయం కావాలి?",
          hint: { en: "Say what you ordered, and that it came damaged.", te: "ఏం ఆర్డర్ చేశారో, అది పాడైపోయి వచ్చిందని చెప్పండి." },
          replies: [
            { say: "Hello. I ordered a ceiling fan, but it came damaged.", good: true, skill: "explain" },
            {
              say: "Your delivery is useless. The fan is broken!",
              good: false,
              skill: "polite",
              react: { en: "I'm sorry to hear that. Let me help you.", te: "అయ్యో, sorry అండీ. నేను సహాయం చేస్తాను." },
            },
          ],
        },
        {
          partner: "I'm sorry about that. Would you like a new one or a refund?",
          te: "దానికి sorry అండీ. కొత్తది కావాలా, రీఫండ్ కావాలా?",
          hint: { en: "Ask for your money back, and say you have bought a fan from a shop.", te: "డబ్బులు తిరిగి అడిగి, షాపులో ఫ్యాన్ కొనేశారని చెప్పండి." },
          replies: [
            { say: "I'd like a refund, please. I've bought one from a shop.", good: true, skill: "refund" },
            { say: "I'd like a refund, please. I've bought one from shop.", good: false, skill: "refund", fixIt: "article" },
          ],
        },
        {
          partner: "Okay. Our delivery person will pick it up tomorrow.",
          te: "సరే. మా డెలివరీ ఆయన రేపు వచ్చి తీసుకెళ్తారు.",
          hint: { en: "Ask when the money will come back.", te: "డబ్బులు ఎప్పుడు తిరిగి వస్తాయో అడగండి." },
          replies: [
            { say: "When will the money come back to my account?", good: true, skill: "refund" },
            { say: "When will I get my refund?", good: true, skill: "refund" },
            { say: "When will the money comes back?", good: false, skill: "refund" },
          ],
        },
        {
          partner: "It will be credited in five to seven working days after pickup.",
          te: "తీసుకెళ్ళిన తర్వాత ఐదు నుంచి ఏడు working days లో మీ అకౌంట్‌లో పడతాయి.",
          hint: { en: "Agree, and ask for a reference number.", te: "సరే అని, reference number అడగండి." },
          replies: [
            { say: "Okay. Can I have a reference number, please?", good: true, skill: "refund" },
            { say: "Okay. Can I have reference number, please?", good: false, skill: "refund", fixIt: "article" },
          ],
        },
        {
          partner: "Sure. It's R F four four one. Anything else?",
          te: "తప్పకుండా. R F four four one. ఇంకేమైనా కావాలా?",
          hint: { en: "Say there is nothing more, and thank him.", te: "ఇంకేమీ లేదని చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "No, that's all. Thank you for your help.", good: true, skill: "polite" },
            {
              say: "No. Thanks for nothing.",
              good: false,
              skill: "polite",
              react: { en: "Sorry you feel that way. Your refund is on its way.", te: "మీకు అలా అనిపించినందుకు sorry. మీ రీఫండ్ వస్తోంది." },
            },
          ],
        },
      ],
    },
  ],
};

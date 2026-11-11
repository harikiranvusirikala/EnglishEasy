import type { ConversationDay } from "../../types";

/** Week 29, Day 6 (CURRICULUM §4): Conversation Day — a broken washing machine: the call to customer care, the visit and the bill. */
export const day: ConversationDay = {
  id: "w29-conversation",
  kind: "conversation",
  title: { en: "A Broken Washing Machine", te: "వాషింగ్ మెషీన్ రిపేర్" },
  summary: {
    en: "Use the whole week: call customer care about a washing machine, then check the repair and the bill when the technician comes.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: వాషింగ్ మెషీన్ గురించి కస్టమర్ కేర్‌కి ఫోన్ చేయండి; technician వచ్చాక రిపేర్, బిల్ సరిచూడండి.",
  },
  topics: ["home", "phone", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The technician's visit", te: "technician వచ్చారు" },
    lines: [
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Good morning. I'm Imran, from Clean Wash service.", te: "నమస్కారం. నేను ఇమ్రాన్, Clean Wash సర్వీస్ నుండి వచ్చాను." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Good morning. Please come in. It's in the bathroom.", te: "నమస్కారం. లోపలికి రండి. బాత్రూమ్‌లో ఉంది." },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "What is the problem?", te: "సమస్య ఏంటి?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "It has stopped spinning, and it is making a noise.", te: "తిరగడం ఆగిపోయింది, శబ్దం కూడా చేస్తోంది." },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "I see. The belt has broken.", te: "అర్థమైంది. బెల్ట్ తెగిపోయింది." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Can you fix it today? It is under warranty.", te: "ఈ రోజే బాగు చేస్తారా? దీనికి వారంటీ ఉంది." },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Then the belt is free. The visit charge is 200 rupees.", te: "అయితే బెల్ట్ ఫ్రీ. విజిట్ ఛార్జ్ 200 రూపాయలు." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Okay. Please go ahead.", te: "సరే. చేయండి." },
      { speaker: { en: "Imran", te: "ఇమ్రాన్" }, voice: "b", en: "Done. I have changed the belt. Please check.", te: "అయిపోయింది. బెల్ట్ మార్చేశాను. ఒకసారి చూడండి." },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes, it is working now. Thank you!", te: "అవును, ఇప్పుడు పని చేస్తోంది. థాంక్యూ!" },
    ],
    questions: [
      {
        prompt: { en: "What is the talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["A broken washing machine", "A broken fridge", "A leaking tap"],
        answer: 0,
      },
      {
        prompt: { en: "What has broken?", te: "ఏం తెగిపోయింది?" },
        options: ["The belt", "The door", "The switch"],
        answer: 0,
      },
      {
        prompt: { en: "Why is the belt free?", te: "బెల్ట్ ఎందుకు ఫ్రీ?" },
        options: ["The machine is under warranty.", "Imran is her friend.", "Padma paid online."],
        answer: 0,
      },
      {
        prompt: { en: "How much does Padma pay?", te: "పద్మ ఎంత కడతారు?" },
        options: ["200 rupees", "400 rupees", "Nothing"],
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
        en: "Tell customer care your washing machine does not work now.",
        te: "మీ వాషింగ్ మెషీన్ ఇప్పుడు పని చేయట్లేదని కస్టమర్ కేర్‌కి చెప్పండి.",
      },
      expected: ["My washing machine has stopped working.", "The washing machine has stopped working.", "My washing machine is not working."],
      options: ["My washing machine has stopped working.", "My washing machine is stopped working.", "Washing machine has stopped working."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The technician says it is done. Check it.",
        te: "పని అయిపోయిందని technician అన్నారు. సరిచూడండి.",
      },
      expected: ["Is it working now?", "Is it working properly now?"],
      options: ["Is it working now?", "It working now?", "Is it works now?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The technician asks for 200 rupees. Ask what the money is for.",
        te: "technician 200 రూపాయలు అడిగారు. ఆ డబ్బు దేనికో అడగండి.",
      },
      expected: ["What is this charge for?", "What is the 200 rupees for?", "What is it for?"],
      options: ["What is this charge for?", "This charge is for what?", "For what this charge is?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Calling customer care", te: "కస్టమర్ కేర్‌కి ఫోన్" },
      scene: {
        en: "Your washing machine has stopped spinning. You call Clean Wash customer care. Fatima answers.",
        te: "మీ వాషింగ్ మెషీన్ తిరగడం ఆగిపోయింది. Clean Wash కస్టమర్ కేర్‌కి ఫోన్ చేశారు. ఫాతిమా మాట్లాడుతున్నారు.",
      },
      partner: { en: "Fatima (customer care)", te: "ఫాతిమా (కస్టమర్ కేర్)" },
      skills: [
        { id: "fault", label: { en: "Saying what is wrong", te: "సమస్య చెప్పడం" } },
        { id: "follow", label: { en: "Following up", te: "గుర్తుచేయడం" } },
      ],
      turns: [
        {
          partner: "Clean Wash customer care, Fatima speaking. How can I help?",
          te: "Clean Wash కస్టమర్ కేర్, ఫాతిమా మాట్లాడుతున్నాను. చెప్పండి, ఏం సహాయం కావాలి?",
          hint: { en: "Say what has happened to your washing machine.", te: "మీ వాషింగ్ మెషీన్‌కి ఏమైందో చెప్పండి." },
          replies: [
            { say: "My washing machine has stopped spinning.", good: true, skill: "fault" },
            { say: "My washing machine is stopped spinning.", good: false, skill: "fault" },
          ],
        },
        {
          partner: "I'm sorry. Is it making any noise?",
          te: "అయ్యో, sorry. ఏమైనా శబ్దం చేస్తోందా?",
          hint: { en: "Say yes, and say how loud the sound is.", te: "అవునని, శబ్దం ఎంత గట్టిగా ఉందో చెప్పండి." },
          replies: [
            { say: "Yes, it is making a loud noise.", good: true, skill: "fault" },
            { say: "Yes, it is doing a loud noise.", good: false, skill: "fault" },
          ],
        },
        {
          partner: "Is it under warranty?",
          te: "దీనికి వారంటీ ఉందా?",
          hint: { en: "Say yes; you bought it last year.", te: "ఉందని, పోయిన సంవత్సరం కొన్నారని చెప్పండి." },
          replies: [
            { say: "Yes. I bought it last year.", good: true, skill: "fault" },
            { say: "Yes. I have bought it last year.", good: false, skill: "fault" },
          ],
        },
        {
          partner: "We have noted it. It is seven one six two.",
          te: "మీ complaint నమోదు చేసుకున్నాం. నంబర్ 7162.",
          hint: { en: "Thank her, and ask when the technician will come.", te: "థాంక్స్ చెప్పి, technician ఎప్పుడు వస్తారో అడగండి." },
          replies: [
            { say: "Thank you. When will the technician come?", good: true, skill: "follow" },
            { say: "Thank you. When the technician will come?", good: false, skill: "follow", fixIt: "question" },
          ],
        },
        {
          partner: "Tomorrow, between ten and twelve.",
          te: "రేపు, పది నుండి పన్నెండు మధ్యలో.",
          hint: { en: "Say that is fine, and thank her.", te: "సరేనని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "That's fine. Thank you.", good: true, skill: "follow" },
            {
              say: "Tomorrow? Why not today? Very slow service!",
              good: false,
              skill: "follow",
              react: { en: "I'm sorry. Tomorrow is our first free time.", te: "Sorry అండీ. రేపే మాకు మొదటి ఖాళీ టైమ్." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The visit and the bill", te: "technician రాక, బిల్" },
      scene: {
        en: "Anitha, a technician from Clean Wash, has come to repair your washing machine.",
        te: "Clean Wash నుండి technician అనిత మీ వాషింగ్ మెషీన్ రిపేర్ చేయడానికి వచ్చారు.",
      },
      partner: { en: "Anitha (technician)", te: "అనిత (టెక్నీషియన్)" },
      skills: [
        { id: "check", label: { en: "Checking the work", te: "పని సరిచూడటం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. I'm from Clean Wash, for the repair.",
          te: "నమస్కారం. Clean Wash నుండి రిపేర్ కోసం వచ్చాను.",
          hint: { en: "Greet her, and show her where the machine is.", te: "నమస్కారం చెప్పి, మెషీన్ ఎక్కడ ఉందో చూపించండి." },
          replies: [
            { say: "Good morning. Please come in. It's here.", good: true, skill: "polite" },
            { say: "Good morning. Come, come. It is here only.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
        {
          partner: "I see. The belt has broken. I'll change it.",
          te: "అర్థమైంది. బెల్ట్ తెగిపోయింది. మారుస్తాను.",
          hint: { en: "Ask how long the repair will take.", te: "రిపేర్‌కి ఎంత సమయం పడుతుందో అడగండి." },
          replies: [
            { say: "How long will it take?", good: true, skill: "check" },
            { say: "How much time it will take?", good: false, skill: "check", fixIt: "question" },
          ],
        },
        {
          partner: "About twenty minutes. Okay, done! Please check.",
          te: "సుమారు ఇరవై నిమిషాలు. సరే, అయిపోయింది! ఒకసారి చూడండి.",
          hint: { en: "Check that the machine works now.", te: "మెషీన్ ఇప్పుడు పని చేస్తోందో చూడండి." },
          replies: [
            { say: "Is it working now?", good: true, skill: "check" },
            { say: "It is working now or not?", good: false, skill: "check" },
          ],
        },
        {
          partner: "Yes, see. The visit charge is 200 rupees.",
          te: "చూడండి, పని చేస్తోంది. విజిట్ ఛార్జ్ 200 రూపాయలు.",
          hint: { en: "Ask for a receipt before you pay.", te: "డబ్బులు ఇచ్చే ముందు రసీదు అడగండి." },
          replies: [
            { say: "Okay. Can I have a receipt, please?", good: true, skill: "check" },
            {
              say: "200 for twenty minutes? That's cheating!",
              good: false,
              skill: "polite",
              react: { en: "That is the company rate. It is on the receipt.", te: "అది కంపెనీ రేటు అండీ. రసీదులో ఉంది." },
            },
          ],
        },
        {
          partner: "Here is your receipt. Thank you!",
          te: "ఇదిగోండి మీ రసీదు. థాంక్యూ!",
          hint: { en: "Hand over the money, and thank her for her help.", te: "డబ్బులు ఇచ్చి, సహాయం చేసినందుకు థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Here you are. Thank you for your help.", good: true, skill: "polite" },
            { say: "Here you are. Thanks for your helping.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

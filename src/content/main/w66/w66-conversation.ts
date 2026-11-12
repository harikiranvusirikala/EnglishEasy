import type { ConversationDay } from "../../types";

/** Week 66, Day 6 (CURRICULUM §5): Conversation Day — cleaning the house before Ugadi with a friend, and showing an electrician which switches don't work. */
export const day: ConversationDay = {
  id: "w66-conversation",
  kind: "conversation",
  title: { en: "Cleaning Before Ugadi", te: "ఉగాది ముందు శుభ్రం" },
  summary: {
    en: "Use the whole week: clean the house before Ugadi with a friend, and show an electrician what is not working.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: స్నేహితులతో కలిసి ఉగాది ముందు ఇల్లు శుభ్రం చేయండి, పనిచేయని స్విచ్‌లు ఎలక్ట్రీషియన్‌కి చూపించండి.",
  },
  topics: ["home", "festivals", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Getting ready for Ugadi", te: "ఉగాదికి సిద్ధం" },
    lines: [
      {
        speaker: { en: "Jyothi", te: "జ్యోతి" },
        voice: "a",
        en: "Thank you for coming, Prasad. Ugadi is on Tuesday, and there's so much to do.",
        te: "వచ్చినందుకు థాంక్స్ ప్రసాద్ గారూ. మంగళవారం ఉగాది, చేయాల్సిన పని చాలా ఉంది.",
      },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "Happy to help! Shall we start with the storeroom?", te: "సాయం చేయడం నాకు సంతోషమే! స్టోర్‌రూమ్‌తో మొదలుపెడదామా?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Yes. Let's take out all the boxes first.", te: "సరే. ముందు డబ్బాలన్నీ బయటికి తీద్దాం." },
      {
        speaker: { en: "Prasad", te: "ప్రసాద్" },
        voice: "b",
        en: "This box is full of old clothes. Shall we give them away?",
        te: "ఈ డబ్బా నిండా పాత బట్టలు ఉన్నాయి. వీటిని ఎవరికైనా ఇచ్చేద్దామా?",
      },
      {
        speaker: { en: "Jyothi", te: "జ్యోతి" },
        voice: "a",
        en: "Good idea. But this old radio doesn't work. Let's throw it away.",
        te: "మంచి ఆలోచన. కానీ ఈ పాత రేడియో పనిచేయట్లేదు. దాన్ని పారేద్దాం.",
      },
      {
        speaker: { en: "Prasad", te: "ప్రసాద్" },
        voice: "b",
        en: "Okay. Oh, look! Your reading glasses were behind the boxes.",
        te: "సరే. అరె, చూడండి! మీ చదువుకునే కళ్ళజోడు డబ్బాల వెనకాల ఉంది.",
      },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "My glasses! I've been looking for them all week.", te: "నా కళ్ళజోడు! వారం రోజులుగా దీని కోసం వెతుకుతున్నాను." },
      { speaker: { en: "Prasad", te: "ప్రసాద్" }, voice: "b", en: "It's very hot in here. Shall I turn on the fan?", te: "ఇక్కడ చాలా ఉక్కగా ఉంది. ఫ్యాన్ వేయనా?" },
      {
        speaker: { en: "Jyothi", te: "జ్యోతి" },
        voice: "a",
        en: "Please do. Oh no, it isn't working. I'll call the electrician.",
        te: "వేయండి. అయ్యో, పనిచేయట్లేదు. ఎలక్ట్రీషియన్‌కి ఫోన్ చేస్తాను.",
      },
      {
        speaker: { en: "Prasad", te: "ప్రసాద్" },
        voice: "b",
        en: "And we've run out of garbage bags. I'll get some from the shop.",
        te: "అలాగే చెత్త కవర్లు కూడా అయిపోయాయి. షాప్ నుంచి కొన్ని తెస్తాను.",
      },
    ],
    questions: [
      {
        prompt: { en: "What are they doing?", te: "వీళ్ళు ఏం చేస్తున్నారు?" },
        options: ["Cleaning the house before Ugadi", "Shopping for Ugadi", "Cooking for guests"],
        answer: 0,
      },
      {
        prompt: { en: "What do they want to do with the old clothes?", te: "పాత బట్టలని వాళ్ళు ఏం చేయాలనుకుంటున్నారు?" },
        options: ["Give them away", "Throw them away", "Put them back in the box"],
        answer: 0,
      },
      {
        prompt: { en: "What did Prasad find behind the boxes?", te: "డబ్బాల వెనకాల ప్రసాద్ గారికి ఏం దొరికింది?" },
        options: ["Jyothi's reading glasses", "Jyothi's phone", "An old radio"],
        answer: 0,
      },
      {
        prompt: { en: "What have they run out of?", te: "వాళ్ళకి ఏం అయిపోయింది?" },
        options: ["Garbage bags", "Sugar", "Milk"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You are leaving the room, and the fan is still running. Ask your friend to stop it.",
        te: "మీరు గది నుంచి బయటికి వెళ్తున్నారు, ఫ్యాన్ ఇంకా తిరుగుతోంది. దాన్ని ఆపమని మీ స్నేహితులని అడగండి.",
      },
      expected: ["Could you switch off the fan, please?", "Could you turn off the fan, please?", "Please turn the fan off."],
      options: ["Could you switch off the fan, please?", "Could you off the fan, please?", "Could you switch off fan, please?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your friend asks about Imran, who helps you every Ugadi. Say he always carries out the heavy boxes.",
        te: "ప్రతి ఉగాదికి మీకు సాయం చేసే ఇమ్రాన్ గారి గురించి మీ స్నేహితులు అడుగుతున్నారు. బరువైన డబ్బాలు ఆయనే ఎప్పుడూ బయటికి తీస్తారని చెప్పండి.",
      },
      expected: ["He always takes out the heavy boxes.", "He takes out the heavy boxes every year.", "Imran always takes out the heavy boxes."],
      options: ["He always takes out the heavy boxes.", "He always take out the heavy boxes.", "He is always take out the heavy boxes."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "The electrician asks: Isn't the bedroom fan working? It is not working. Answer him.",
        te: "బెడ్‌రూమ్ ఫ్యాన్ పనిచేయట్లేదా? అని ఎలక్ట్రీషియన్ అడుగుతున్నారు. అది పనిచేయట్లేదు. ఆయనకి జవాబు చెప్పండి.",
      },
      expected: ["No, it isn't working.", "No, it isn't.", "No, it's not working."],
      options: ["No, it isn't working.", "Yes, it isn't working.", "No, it isn't work."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Cleaning before Ugadi", te: "ఉగాది ముందు శుభ్రం" },
      scene: {
        en: "Ugadi is in three days. Your friend Mohan has come with a broom and a bucket to help you.",
        te: "మూడు రోజుల్లో ఉగాది. మీ స్నేహితుడు మోహన్ గారు చీపురు, బకెట్ తీసుకుని సాయానికి వచ్చారు.",
      },
      partner: { en: "Mohan (your friend)", te: "మోహన్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "plan", label: { en: "Planning the work", te: "పని ప్లాన్ చేయడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! I've brought a broom and a bucket. Where shall we start?",
          te: "హలో! చీపురు, బకెట్ తెచ్చాను. ఎక్కడ నుంచి మొదలుపెడదాం?",
          hint: { en: "Thank him, and suggest the kitchen shelves first.", te: "ఆయనకి థాంక్స్ చెప్పి, ముందు వంటగది షెల్ఫులు అని సూచించండి." },
          replies: [
            { say: "Thank you, Mohan! Let's clear out the kitchen shelves first.", good: true, skill: "plan" },
            { say: "Thank you, Mohan! Let's clear out kitchen shelves first.", good: false, skill: "plan", fixIt: "article" },
          ],
        },
        {
          partner: "There are many empty jars here. Shall I throw them away?",
          te: "ఇక్కడ చాలా ఖాళీ సీసాలు ఉన్నాయి. వాటిని పారేయనా?",
          hint: { en: "Say no, you need them for pickles. Ask him to put them in the cupboard.", te: "వద్దని, పచ్చళ్ళకి కావాలని చెప్పండి. వాటిని అలమారాలో సర్దమని అడగండి." },
          replies: [
            { say: "No, please don't. I need them for pickles.", good: true, skill: "plan" },
            { say: "Please don't. Could you put them away in the cupboard?", good: true, skill: "plan" },
            { say: "No, please don't. Could you put away them in the cupboard?", good: false, skill: "plan" },
          ],
        },
        {
          partner: "Okay. These old bedsheets are still good. What shall we do with them?",
          te: "సరే. ఈ పాత దుప్పట్లు ఇంకా బాగానే ఉన్నాయి. వీటిని ఏం చేద్దాం?",
          hint: { en: "Say you can give them free to someone who needs them.", te: "అవసరమైనవాళ్ళకి ఉచితంగా ఇచ్చేయొచ్చని చెప్పండి." },
          replies: [
            { say: "We can give them away to someone who needs them.", good: true, skill: "plan" },
            {
              say: "Whatever. You decide. I'm tired.",
              good: false,
              skill: "polite",
              react: { en: "Tired already? We've only just started!", te: "అప్పుడే అలిసిపోయారా? ఇప్పుడేగా మొదలుపెట్టాం!" },
            },
          ],
        },
        {
          partner: "The sweeping is done. Shall I turn on the fan now?",
          te: "ఊడ్చడం అయిపోయింది. ఇప్పుడు ఫ్యాన్ వేయనా?",
          hint: { en: "Say yes, please, because it is very hot.", te: "చాలా ఉక్కగా ఉంది, వేయమని చెప్పండి." },
          replies: [
            { say: "Yes, please turn it on. It's very hot.", good: true, skill: "polite" },
            { say: "Yes, please on it. It's very hot.", good: false, skill: "plan", fixIt: "preposition" },
          ],
        },
        {
          partner: "The house looks ready for Ugadi now!",
          te: "ఇప్పుడు ఇల్లు ఉగాదికి సిద్ధంగా ఉంది!",
          hint: { en: "Thank him, and invite him for Ugadi pachadi on Tuesday.", te: "థాంక్స్ చెప్పి, మంగళవారం ఉగాది పచ్చడికి రమ్మని పిలవండి." },
          replies: [
            { say: "Thank you so much! Please come for Ugadi pachadi on Tuesday.", good: true, skill: "polite" },
            { say: "Thank you so much! Please come for Ugadi pachadi in Tuesday.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "The electrician", te: "ఎలక్ట్రీషియన్" },
      scene: {
        en: "Two switches in your hall don't work. Raju, the electrician, has come to fix them.",
        te: "మీ హాల్‌లో రెండు స్విచ్‌లు పనిచేయట్లేదు. వాటిని బాగుచేయడానికి ఎలక్ట్రీషియన్ రాజు గారు వచ్చారు.",
      },
      partner: { en: "Raju (the electrician)", te: "రాజు (ఎలక్ట్రీషియన్)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining the problem", te: "సమస్య చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. I'm Raju, the electrician. What's the problem?",
          te: "గుడ్ మార్నింగ్. నేను రాజు, ఎలక్ట్రీషియన్‌ని. సమస్య ఏంటి?",
          hint: { en: "Greet him, and say two switches in the hall don't work.", te: "నమస్కారం చెప్పి, హాల్‌లో రెండు స్విచ్‌లు పనిచేయట్లేదని చెప్పండి." },
          replies: [
            { say: "Good morning. Two switches in the hall don't work.", good: true, skill: "explain" },
            { say: "Good morning. Two switch in the hall don't work.", good: false, skill: "explain", fixIt: "plural" },
          ],
        },
        {
          partner: "Which ones? Can you show me?",
          te: "ఏవి? చూపిస్తారా?",
          hint: { en: "Show him the fan switch and the light switch near the door.", te: "తలుపు దగ్గర ఉన్న ఫ్యాన్ స్విచ్, లైట్ స్విచ్ చూపించండి." },
          replies: [
            { say: "Yes. The fan switch and the light switch near the door.", good: true, skill: "explain" },
            {
              say: "Can't you see? Those two, obviously.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay. I'm new to your house, so I asked.", te: "సరే, సరే. మీ ఇల్లు నాకు కొత్త, అందుకే అడిగాను." },
            },
          ],
        },
        {
          partner: "I'll turn off the main switch first. Is that okay?",
          te: "ముందు మెయిన్ స్విచ్ ఆఫ్ చేస్తాను. పర్వాలేదా?",
          hint: { en: "Say yes, and ask how long the power will be off.", te: "సరే అని, కరెంట్ ఎంతసేపు ఉండదో అడగండి." },
          replies: [
            { say: "Yes, of course. How long will the power be off?", good: true, skill: "explain" },
            { say: "Yes, of course. How long the power will be off?", good: false, skill: "explain", fixIt: "question" },
          ],
        },
        {
          partner: "About twenty minutes. Please don't turn anything on till I finish.",
          te: "ఇరవై నిమిషాలు. నేను అయిపోయేదాకా ఏదీ ఆన్ చేయకండి.",
          hint: { en: "Agree, and say you will wait.", te: "సరే అని, ఎదురుచూస్తానని చెప్పండి." },
          replies: [
            { say: "Okay. I won't turn anything on. I'll wait.", good: true, skill: "polite" },
            { say: "Okay. I won't on anything. I'll wait.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "All done. Both switches work now. Please try them.",
          te: "అయిపోయింది. ఇప్పుడు రెండు స్విచ్‌లూ పనిచేస్తున్నాయి. ఒకసారి వేసి చూడండి.",
          hint: { en: "Thank him, and ask how much you should pay.", te: "థాంక్స్ చెప్పి, ఎంత ఇవ్వాలో అడగండి." },
          replies: [
            { say: "Thank you! They both work. How much should I pay?", good: true, skill: "polite" },
            { say: "Thank you! They both work. How much I should pay?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
      ],
    },
  ],
};

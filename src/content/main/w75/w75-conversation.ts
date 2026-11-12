import type { ConversationDay } from "../../types";

/** Week 75, Day 6 (CURRICULUM §5): Conversation Day — power cuts in summer: neighbours plan a visit, and a call to the electricity office. */
export const day: ConversationDay = {
  id: "w75-conversation",
  kind: "conversation",
  title: { en: "Power Cuts in Summer", te: "వేసవిలో కరెంట్ కోతలు" },
  summary: {
    en: "Use the whole week: complain about power cuts to the electricity office, and plan a visit to the ward office with a neighbour.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: కరెంట్ కోతల గురించి ఎలక్ట్రిసిటీ ఆఫీసుకి ఫిర్యాదు చేయండి, పక్కింటివారితో కలిసి వార్డ్ ఆఫీసుకి వెళ్ళే ప్లాన్ వేయండి.",
  },
  topics: ["neighbours", "offices", "weather"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Another night without power", te: "కరెంట్ లేని ఇంకో రాత్రి" },
    lines: [
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Narayana, did the power go off at your house again last night?", te: "నారాయణ గారూ, నిన్న రాత్రి మీ ఇంట్లో కూడా మళ్ళీ కరెంట్ పోయిందా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Yes, for three hours. It has been happening every night this week.", te: "అవును, మూడు గంటలు. ఈ వారమంతా రోజూ రాత్రి ఇలాగే జరుగుతోంది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Without fans, the elders in our lane can't sleep in this heat.", te: "ఫ్యాన్లు లేక, ఈ ఎండల్లో మా లేన్‌లో పెద్దవాళ్ళకి నిద్ర పట్టట్లేదు." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "We've called the electricity office twice, but nothing has been done.", te: "ఎలక్ట్రిసిటీ ఆఫీసుకి రెండుసార్లు ఫోన్ చేశాం, కానీ ఏమీ చేయలేదు." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Why don't we go to the ward office together tomorrow?", te: "రేపు ఇద్దరం కలిసి వార్డ్ ఆఫీసుకి వెళ్ళొచ్చు కదా?" },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Good idea. Let's ask the other neighbours to sign a letter too.", te: "మంచి ఆలోచన. మిగతా ఇరుగుపొరుగువాళ్ళని కూడా ఒక లెటర్ మీద సంతకం పెట్టమని అడుగుదాం." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Yes. And we should stay calm and give them the facts.", te: "అవును. మనం ప్రశాంతంగా ఉండి, వాస్తవాలు చెప్పాలి." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Right. I'll write down the dates and times of the power cuts.", te: "నిజమే. కరెంట్ పోయిన తేదీలు, టైమ్‌లు నేను రాసుకుంటాను." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Great. I'll bring our old complaint numbers. Let's meet at the gate at ten.", te: "బాగుంది. మన పాత ఫిర్యాదు నంబర్లు నేను తెస్తాను. పదింటికి గేట్ దగ్గర కలుద్దాం." },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Okay, see you tomorrow at ten.", te: "సరే, రేపు పదింటికి కలుద్దాం." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Power cuts in their colony", "A trip to the market", "A wedding invitation"],
        answer: 0,
      },
      {
        prompt: { en: "How long was the power off last night?", te: "నిన్న రాత్రి ఎంతసేపు కరెంట్ లేదు?" },
        options: ["Three hours", "One hour", "The whole night"],
        answer: 0,
      },
      {
        prompt: { en: "Where will they go tomorrow?", te: "రేపు వాళ్ళు ఎక్కడికి వెళ్తారు?" },
        options: ["To the ward office", "To the hospital", "To the bank"],
        answer: 0,
      },
      {
        prompt: { en: "What will Fatima bring?", te: "ఫాతిమా గారు ఏం తెస్తారు?" },
        options: ["The old complaint numbers", "The dates and times", "A new fan"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Tell the officer that your colony needs a new transformer.",
        te: "మీ కాలనీకి కొత్త ట్రాన్స్‌ఫార్మర్ కావాలని ఆఫీసర్‌కి చెప్పండి.",
      },
      expected: ["Our colony needs a new transformer.", "We need a new transformer.", "Our colony needs a new transformer, sir."],
      options: ["Our colony needs a new transformer.", "Our colony is needing a new transformer.", "Our colony need a new transformer."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Tell the officer there have been power cuts every night, starting on Monday.",
        te: "సోమవారం నుంచి రోజూ రాత్రి కరెంట్ పోతోందని ఆఫీసర్‌కి చెప్పండి.",
      },
      expected: [
        "We have had power cuts every night since Monday.",
        "There have been power cuts every night since Monday.",
        "The power has gone off every night since Monday.",
      ],
      options: [
        "We have had power cuts every night since Monday.",
        "We have power cuts every night since Monday.",
        "We have had power cuts every night from Monday.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "Tell your neighbour that the elders in your lane can't sleep because of the heat.",
        te: "ఎండల వల్ల మీ లేన్‌లో పెద్దవాళ్ళకి నిద్ర పట్టట్లేదని పక్కింటివారికి చెప్పండి.",
      },
      expected: ["The elders can't sleep because it's too hot.", "The elders in our lane can't sleep in this heat.", "The elders can't sleep. It's too hot."],
      options: ["The elders can't sleep because it's too hot.", "The elders can't sleep because too hot.", "The elders can't sleep because it's too much hot."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Calling the electricity office", te: "ఎలక్ట్రిసిటీ ఆఫీసుకి ఫోన్" },
      scene: {
        en: "The power has gone off every night since Monday. You call the electricity office. Mohan answers.",
        te: "సోమవారం నుంచి రోజూ రాత్రి కరెంట్ పోతోంది. మీరు ఎలక్ట్రిసిటీ ఆఫీసుకి ఫోన్ చేశారు. మోహన్ గారు ఫోన్ ఎత్తారు.",
      },
      partner: { en: "Mohan (at the electricity office)", te: "మోహన్ (ఎలక్ట్రిసిటీ ఆఫీసులో)" },
      voice: "b",
      skills: [
        { id: "complain", label: { en: "Complaining clearly", te: "స్పష్టంగా ఫిర్యాదు చేయడం" } },
        { id: "calm", label: { en: "Firm and calm", te: "గట్టిగా, ప్రశాంతంగా" } },
      ],
      turns: [
        {
          partner: "Good morning, electricity office. How can I help you?",
          te: "నమస్కారం, ఎలక్ట్రిసిటీ ఆఫీస్. చెప్పండి, ఏం కావాలి?",
          hint: { en: "Greet him, and say why you are calling and from which area.", te: "నమస్కారం చెప్పి, ఎందుకు ఫోన్ చేశారో, ఏ ఏరియా నుంచో చెప్పండి." },
          replies: [
            { say: "Good morning. I'm calling about the power cuts in Gandhi Nagar.", good: true, skill: "complain" },
            { say: "Good morning. I'm calling for the power cuts in Gandhi Nagar.", good: false, skill: "complain", fixIt: "preposition" },
          ],
        },
        {
          partner: "I see. How long have the cuts been happening?",
          te: "అలాగా. ఎన్ని రోజులుగా కరెంట్ పోతోంది?",
          hint: { en: "Say it has happened every night from Monday, for about three hours.", te: "సోమవారం నుంచి రోజూ రాత్రి, దాదాపు మూడు గంటలు పోతోందని చెప్పండి." },
          replies: [
            { say: "Every night since Monday, for about three hours.", good: true, skill: "complain" },
            { say: "From Monday we are not having power at night.", good: false, skill: "complain", fixIt: "duration" },
          ],
        },
        {
          partner: "There is a lot of load in summer. We can't do much.",
          te: "ఎండాకాలంలో లోడ్ చాలా ఎక్కువ. మేమేం చేయలేం.",
          hint: { en: "Say calmly how the elders are suffering, and ask him to look into it.", te: "పెద్దవాళ్ళు ఎంత ఇబ్బంది పడుతున్నారో ప్రశాంతంగా చెప్పి, కొంచెం చూడమని అడగండి." },
          replies: [
            { say: "I understand, but elders can't sleep in this heat. Could you please check?", good: true, skill: "calm" },
            {
              say: "That's your excuse every summer! Don't you feel ashamed?",
              good: false,
              skill: "calm",
              react: { en: "Please don't shout. Let me check the transformer report.", te: "అరవకండి అండీ. ట్రాన్స్‌ఫార్మర్ రిపోర్ట్ చూస్తాను." },
            },
          ],
        },
        {
          partner: "The transformer in your area is old. It has been reported already.",
          te: "మీ ఏరియాలో ట్రాన్స్‌ఫార్మర్ పాతది. దాని గురించి ఇప్పటికే రిపోర్ట్ చేశారు.",
          hint: { en: "Ask for the last day for the new one.", te: "కొత్తది ఏ రోజులోగా పెడతారో అడగండి." },
          replies: [
            { say: "By when will the new one be put in?", good: true, skill: "complain" },
            { say: "Could you tell me by when it will be replaced?", good: true, skill: "complain" },
            { say: "By when the new one will be put in?", good: false, skill: "complain", fixIt: "question" },
          ],
        },
        {
          partner: "In about two weeks. Please note your complaint number: six one four nine.",
          te: "దాదాపు రెండు వారాల్లో. మీ ఫిర్యాదు నంబర్ రాసుకోండి: 6149.",
          hint: { en: "Repeat the number to check it, and thank him.", te: "నంబర్ సరిగ్గా ఉందో మళ్ళీ చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Six one four nine. Thank you for your help.", good: true, skill: "calm" },
            { say: "Six one four nine. Okay, do the needful.", good: false, skill: "calm", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Planning a visit to the ward office", te: "వార్డ్ ఆఫీసుకి వెళ్ళే ప్లాన్" },
      scene: {
        en: "Your neighbour Grace meets you at the gate in the morning. Neither of you slept well because of the power cut.",
        te: "పొద్దున గేట్ దగ్గర మీ పక్కింటావిడ గ్రేస్ గారు కలిశారు. కరెంట్ పోవడం వల్ల మీ ఇద్దరికీ నిద్ర సరిగ్గా పట్టలేదు.",
      },
      partner: { en: "Grace (your neighbour)", te: "గ్రేస్ (మీ పక్కింటావిడ)" },
      skills: [
        { id: "plan", label: { en: "Making a plan", te: "ప్లాన్ వేయడం" } },
        { id: "calm", label: { en: "Firm and calm", te: "గట్టిగా, ప్రశాంతంగా" } },
      ],
      turns: [
        {
          partner: "Good morning! The power went off again last night. I'm so tired.",
          te: "గుడ్ మార్నింగ్! నిన్న రాత్రి మళ్ళీ కరెంట్ పోయింది. చాలా అలసిపోయాను.",
          hint: { en: "Say you are tired too, and that it has happened all week.", te: "మీరూ అలసిపోయారని, వారమంతా ఇలాగే జరుగుతోందని చెప్పండి." },
          replies: [
            { say: "Me too. It has been going off every night this week.", good: true, skill: "plan" },
            { say: "Me too. Power is going off every night this week.", good: false, skill: "plan", fixIt: "article" },
          ],
        },
        {
          partner: "Shall we go to the ward office together on Monday?",
          te: "సోమవారం ఇద్దరం కలిసి వార్డ్ ఆఫీసుకి వెళ్దామా?",
          hint: { en: "Agree, and suggest asking the other neighbours to come too.", te: "ఒప్పుకుని, మిగతా ఇరుగుపొరుగువాళ్ళని కూడా రమ్మని అడుగుదామని సూచించండి." },
          replies: [
            { say: "Good idea. Why don't we ask the other neighbours too?", good: true, skill: "plan" },
            { say: "Good idea. Why we don't ask the other neighbours too?", good: false, skill: "plan", fixIt: "question" },
          ],
        },
        {
          partner: "What should we say to the officer?",
          te: "ఆఫీసర్‌కి మనం ఏం చెప్పాలి?",
          hint: { en: "Suggest staying calm and giving the facts.", te: "ప్రశాంతంగా ఉండి, వాస్తవాలు చెప్దామని సూచించండి." },
          replies: [
            { say: "Let's stay calm and give him the dates and times.", good: true, skill: "calm" },
            {
              say: "Let's shout loudly. Only then will they listen.",
              good: false,
              skill: "calm",
              react: { en: "No, shouting won't help. Let's be firm but polite.", te: "లేదండీ, అరిస్తే లాభం లేదు. గట్టిగా, కానీ మర్యాదగా ఉందాం." },
            },
          ],
        },
        {
          partner: "Good. Suresh knows the officer there. He can come with us.",
          te: "మంచిది. సురేష్ గారికి అక్కడి ఆఫీసర్ తెలుసు. ఆయన కూడా మనతో రావొచ్చు.",
          hint: { en: "Agree, and say you will ask him today.", te: "ఒప్పుకుని, ఈ రోజే ఆయన్ని అడుగుతానని చెప్పండి." },
          replies: [
            { say: "That's good. I'll ask him today.", good: true, skill: "plan" },
            { say: "That's good. I'll asking him today.", good: false, skill: "plan" },
          ],
        },
        {
          partner: "Lovely. Let's meet here at ten on Monday.",
          te: "బాగుంది. సోమవారం పదింటికి ఇక్కడే కలుద్దాం.",
          hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
          replies: [
            { say: "Okay, see you at ten on Monday. Bye!", good: true, skill: "plan" },
            { say: "Okay, see you at ten in Monday. Bye!", good: false, skill: "plan", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

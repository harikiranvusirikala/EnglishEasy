import type { ConversationDay } from "../../types";

/** Week 17, Day 6 (CURRICULUM §4): Conversation Day — buying medicines for an elderly neighbour, then explaining the timings. */
export const day: ConversationDay = {
  id: "w17-conversation",
  kind: "conversation",
  title: { en: "Medicines for a Neighbour", te: "పొరుగువారికి మందులు" },
  summary: {
    en: "Use the whole week: buy medicines for an elderly neighbour, then explain the timings to him.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పక్కింటి పెద్దాయనకి మందులు కొని, ఎప్పుడెప్పుడు వేసుకోవాలో ఆయనకి వివరించండి.",
  },
  topics: ["pharmacy", "health", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the medical shop", te: "మెడికల్ షాపులో" },
    lines: [
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Good morning. Can I see the prescription?", te: "నమస్కారం. prescription చూపిస్తారా?" },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Here it is. It's for my elderly neighbour.", te: "ఇదిగోండి. ఇది మా పక్కింటి పెద్దాయనకి." },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "This BP tablet is once a day, after breakfast.", te: "ఈ BP మాత్ర రోజుకు ఒకసారి, టిఫిన్ తర్వాత." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "And this one? Is it before food?", te: "మరి ఇది? భోజనానికి ముందా?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Yes. Twice a day, half an hour before food.", te: "అవును. రోజుకు రెండుసార్లు, భోజనానికి అరగంట ముందు." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Does he have to take it every day?", te: "ఆయన రోజూ వేసుకోవాలా?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Yes, every day. He shouldn't stop it suddenly.", te: "అవును, రోజూ. ఒక్కసారిగా ఆపకూడదు." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Okay. Is there a cheaper brand?", te: "సరే. తక్కువ ధర brand ఏదైనా ఉందా?" },
      { speaker: { en: "Kumar", te: "కుమార్" }, voice: "b", en: "Yes. This one is 40 rupees less.", te: "ఉంది. ఇది 40 రూపాయలు తక్కువ." },
      { speaker: { en: "Usha", te: "ఉష" }, voice: "a", en: "Good. Please give me medicines for one month.", te: "మంచిది. ఒక నెలకు సరిపడా మందులు ఇవ్వండి." },
    ],
    questions: [
      {
        prompt: { en: "What is the talk about?", te: "వీళ్ళు దేని గురించి మాట్లాడుతున్నారు?" },
        options: ["Medicines for a neighbour", "A bus ticket to Guntur", "Vegetables for the week"],
        answer: 0,
      },
      {
        prompt: { en: "When does he take the BP tablet?", te: "ఆయన BP మాత్ర ఎప్పుడు వేసుకోవాలి?" },
        options: ["Once a day, after breakfast", "Twice a day, before food", "Once a day, at night"],
        answer: 0,
      },
      {
        prompt: { en: "How often is the other tablet?", te: "రెండో మాత్ర రోజుకు ఎన్నిసార్లు?" },
        options: ["Once a day", "Twice a day", "Three times a day"],
        answer: 1,
      },
      {
        prompt: { en: "How much cheaper is the other brand?", te: "వేరే brand ఎంత తక్కువ?" },
        options: ["40 rupees", "14 rupees", "400 rupees"],
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
        en: "Your neighbour asks about his tablet. The strip says twice a day, after food. Tell him.",
        te: "మీ పొరుగాయన తన మాత్ర గురించి అడుగుతున్నారు. strip మీద రోజుకు రెండుసార్లు, భోజనం తర్వాత అని ఉంది. ఆయనకి చెప్పండి.",
      },
      expected: ["Twice a day, after food.", "Take one tablet twice a day after food.", "Take it twice a day after food."],
      options: ["Twice a day, after food.", "Two times in a day, after food.", "Twice a day, before food."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The syrup is out of stock. Ask the pharmacist when it will come.",
        te: "సిరప్ స్టాక్ లేదు. ఎప్పుడు వస్తుందని pharmacist ని అడగండి.",
      },
      expected: ["When will it come?", "When will it come back?"],
      options: ["When will it come?", "When it will come?", "When it is coming?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Ask the pharmacist if your neighbour Narayana has to take it every day.",
        te: "మీ పొరుగాయన నారాయణ గారు ఇది రోజూ వేసుకోవాలా అని pharmacist ని అడగండి.",
      },
      expected: ["Does he have to take it every day?", "Does he have to take it daily?"],
      options: ["Does he have to take it every day?", "Does he has to take it every day?", "He has to take it every day?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Buying medicines for a neighbour", te: "పొరుగువారికి మందులు కొనడం" },
      scene: {
        en: "Your elderly neighbour can't walk far. You take his prescription to Grace's medical shop.",
        te: "మీ పక్కింటి పెద్దాయన ఎక్కువ దూరం నడవలేరు. ఆయన prescription తీసుకుని గ్రేస్ మెడికల్ షాపుకి వెళ్ళారు.",
      },
      partner: { en: "Grace (pharmacist)", te: "గ్రేస్ (pharmacist)" },
      skills: [
        { id: "ask", label: { en: "Asking for medicines", te: "మందులు అడగడం" } },
        { id: "timings", label: { en: "Timings and have to", te: "టైమింగ్స్, have to" } },
      ],
      turns: [
        {
          partner: "Good evening. What do you need?",
          te: "నమస్కారం. ఏం కావాలి?",
          hint: { en: "Show the prescription, and say it is for your neighbour.", te: "prescription చూపించి, ఇది మీ పొరుగాయనకి అని చెప్పండి." },
          replies: [
            { say: "These medicines, please. They are for my neighbour.", good: true, skill: "ask" },
            { say: "These medicines. For neighbour.", good: false, skill: "ask", fixIt: "article" },
          ],
        },
        {
          partner: "The tablets are here. The syrup is out of stock.",
          te: "మాత్రలు ఉన్నాయి. సిరప్ స్టాక్ లేదు.",
          hint: { en: "Ask when the syrup will come.", te: "సిరప్ ఎప్పుడు వస్తుందో అడగండి." },
          replies: [
            { say: "When will it come?", good: true, skill: "ask" },
            { say: "When it will come?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Tomorrow evening.",
          te: "రేపు సాయంత్రం.",
          hint: { en: "Ask when he has to take the tablets.", te: "ఆయన మాత్రలు ఎప్పుడు వేసుకోవాలో అడగండి." },
          replies: [
            { say: "When does he have to take them?", good: true, skill: "timings" },
            { say: "When he has to take them?", good: false, skill: "timings", fixIt: "question" },
          ],
        },
        {
          partner: "One tablet twice a day, after food.",
          te: "రోజుకు రెండుసార్లు, భోజనం తర్వాత ఒక్కో మాత్ర.",
          hint: { en: "Ask if he must take every tablet in the strip.", te: "strip లో ఉన్న మాత్రలన్నీ వేసుకోవాలా అని అడగండి." },
          replies: [
            { say: "Does he have to finish all of them?", good: true, skill: "timings" },
            { say: "Does he has to finish all of them?", good: false, skill: "timings", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Yes, all of them. Don't stop in the middle.",
          te: "అవును, అన్నీ. మధ్యలో ఆపొద్దు.",
          hint: { en: "Say you will tell him, and thank her.", te: "ఆయనకి చెప్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, I'll tell him. Thank you.", good: true, skill: "ask" },
            {
              say: "Okay, okay. I know all this.",
              good: false,
              skill: "ask",
              react: { en: "Good. Please tell him the timings too.", te: "మంచిది. ఆయనకి టైమింగ్స్ కూడా చెప్పండి." },
            },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Explaining the timings", te: "టైమింగ్స్ వివరించడం" },
      scene: {
        en: "You bring the medicines to Narayana, your elderly neighbour. Explain when to take them.",
        te: "మీ పక్కింటి పెద్దాయన నారాయణ గారికి మందులు తెచ్చారు. ఎప్పుడు వేసుకోవాలో ఆయనకి వివరించండి.",
      },
      partner: { en: "Narayana (elderly neighbour)", te: "నారాయణ గారు (పక్కింటి పెద్దాయన)" },
      voice: "b",
      skills: [
        { id: "explain", label: { en: "Explaining timings", te: "టైమింగ్స్ వివరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "ఆప్యాయంగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Thank you for bringing my medicines.",
          te: "నా మందులు తెచ్చినందుకు థాంక్స్ అండీ.",
          hint: { en: "Say it is no trouble at all.", te: "అందులో ఇబ్బందేమీ లేదని చెప్పండి." },
          replies: [
            { say: "No problem at all.", good: true, skill: "polite" },
            { say: "You're welcome.", good: true, skill: "polite" },
            {
              say: "Yes, it took one full hour!",
              good: false,
              skill: "polite",
              react: { en: "Oh, sorry for the trouble.", te: "అయ్యో, మీకు శ్రమ ఇచ్చాను." },
            },
          ],
        },
        {
          partner: "How do I take this white tablet?",
          te: "ఈ తెల్ల మాత్ర ఎలా వేసుకోవాలి?",
          hint: { en: "Tell him how often, and when.", te: "రోజుకు ఎన్నిసార్లో, ఎప్పుడో చెప్పండి." },
          replies: [
            { say: "Take it once a day, after breakfast.", good: true, skill: "explain" },
            { say: "Take it one time in a day, after breakfast.", good: false, skill: "explain" },
          ],
        },
        {
          partner: "And the small yellow one?",
          te: "మరి ఆ చిన్న పసుపు మాత్ర?",
          hint: { en: "Explain: two times a day, thirty minutes before meals.", te: "చెప్పండి: రోజుకు రెండుసార్లు, భోజనానికి అరగంట ముందు." },
          replies: [
            { say: "Twice a day, half an hour before food.", good: true, skill: "explain" },
            { say: "Twice a day, half a hour before food.", good: false, skill: "explain", fixIt: "article" },
          ],
        },
        {
          partner: "Do I have to take it on Sundays too?",
          te: "ఆదివారాలు కూడా వేసుకోవాలా?",
          hint: { en: "Say yes, every day, and ask him not to stop it.", te: "అవును, రోజూ అని చెప్పి, ఆపొద్దని చెప్పండి." },
          replies: [
            { say: "Yes, every day. Please don't stop it.", good: true, skill: "explain" },
            { say: "Yes, every day. Please don't stopping it.", good: false, skill: "explain" },
          ],
        },
        {
          partner: "Thank you. You are very kind.",
          te: "థాంక్యూ. మీరు చాలా మంచివారు.",
          hint: { en: "Reply kindly, and offer to help again.", te: "ఆప్యాయంగా జవాబిచ్చి, మళ్ళీ సహాయం చేస్తానని చెప్పండి." },
          replies: [
            { say: "It's my pleasure. Call me any time.", good: true, skill: "polite" },
            { say: "Okay, okay. Bye.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

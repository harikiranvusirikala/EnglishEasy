import type { ConversationDay } from "../../types";

/** Week 18, Day 6 (CURRICULUM §4): Conversation Day — calling 108 for a neighbour who fainted, then her details at the emergency ward desk. */
export const day: ConversationDay = {
  id: "w18-conversation",
  kind: "conversation",
  title: { en: "An Emergency on the Street", te: "రోడ్డు మీద అత్యవసరం" },
  summary: {
    en: "Use the whole week: call one zero eight calmly when a neighbour faints, then give her details at the emergency ward.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పక్కింటావిడ కళ్ళు తిరిగి పడిపోతే నిదానంగా 108 కి ఫోన్ చేయండి, తర్వాత ఎమర్జెన్సీ వార్డులో ఆవిడ వివరాలు చెప్పండి.",
  },
  topics: ["health", "phone", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A call to one zero eight", te: "108 కి ఫోన్" },
    lines: [
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "One zero eight. Tell me, what happened?", te: "108. చెప్పండి, ఏం జరిగింది?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "My neighbour fainted on the street.", te: "మా పక్కింటావిడ రోడ్డు మీద కళ్ళు తిరిగి పడిపోయారు." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Is she breathing?", te: "ఆవిడ ఊపిరి తీసుకుంటున్నారా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Yes, but she can't talk. She is very weak.", te: "అవును, కానీ మాట్లాడలేకపోతున్నారు. చాలా నీరసంగా ఉన్నారు." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Where are you now?", te: "మీరు ఇప్పుడు ఎక్కడ ఉన్నారు?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "In Gandhi Nagar, near the Shiva temple.", te: "గాంధీ నగర్‌లో, శివాలయం దగ్గర." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Does she have any health problems?", te: "ఆవిడకి ఏమైనా ఆరోగ్య సమస్యలు ఉన్నాయా?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Yes, she has diabetes. She takes sugar tablets.", te: "అవును, ఆవిడకి షుగర్ ఉంది. షుగర్ మాత్రలు వేసుకుంటారు." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "The ambulance will come in ten minutes.", te: "పది నిమిషాల్లో అంబులెన్స్ వస్తుంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Thank you. Please hurry.", te: "థాంక్యూ. ప్లీజ్, త్వరగా రండి." },
    ],
    questions: [
      {
        prompt: { en: "What is this call about?", te: "ఈ ఫోన్ కాల్ దేని గురించి?" },
        options: ["A thief stole a bag.", "A woman fainted on the street.", "There is a fire in a house."],
        answer: 1,
      },
      {
        prompt: { en: "Where is Ramesh?", te: "రమేష్ ఎక్కడ ఉన్నారు?" },
        options: ["Near the bus stand", "At the hospital", "Near the Shiva temple"],
        answer: 2,
      },
      {
        prompt: { en: "What health problem does his neighbour have?", te: "ఆయన పక్కింటావిడకి ఏ ఆరోగ్య సమస్య ఉంది?" },
        options: ["Diabetes", "A broken leg", "A heart problem"],
        answer: 0,
      },
      {
        prompt: { en: "When will the ambulance come?", te: "అంబులెన్స్ ఎప్పుడు వస్తుంది?" },
        options: ["In thirty minutes", "In ten minutes", "In one hour"],
        answer: 1,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "You see a man fall on the road. Call one zero eight and say what happened.",
        te: "రోడ్డు మీద ఒకాయన పడిపోవడం చూశారు. 108 కి ఫోన్ చేసి ఏం జరిగిందో చెప్పండి.",
      },
      expected: ["A man fell down on the road.", "There's been an accident. A man fell down.", "There's been an accident."],
      options: ["A man fell down on the road.", "A man falled down on the road.", "One man is fall on road."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "The nurse asks about your neighbour's medicines. She takes BP tablets.",
        te: "నర్స్ మీ పక్కింటావిడ మందుల గురించి అడుగుతున్నారు. ఆవిడ BP మాత్రలు వేసుకుంటారు.",
      },
      expected: ["She takes BP tablets.", "She takes BP tablets every day."],
      options: ["She takes BP tablets.", "She take BP tablets.", "She is having BP tablets."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "Your friend's kitchen smells of gas. Tell her what not to do.",
        te: "మీ స్నేహితురాలి వంటగదిలో గ్యాస్ వాసన వస్తోంది. ఏం చేయకూడదో ఆవిడకి చెప్పండి.",
      },
      expected: ["Don't switch on the light.", "Please don't switch on the light.", "Don't light a match."],
      options: ["Don't switch on the light.", "Not switch on the light.", "Don't on the light."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Calling for an ambulance", te: "అంబులెన్స్ కోసం ఫోన్" },
      scene: {
        en: "Your neighbour Sita fainted at the bus stop. You call one zero eight. Kavitha answers.",
        te: "మీ పక్కింటి సీత గారు బస్ స్టాప్ దగ్గర కళ్ళు తిరిగి పడిపోయారు. మీరు 108 కి ఫోన్ చేశారు. కవిత మాట్లాడుతున్నారు.",
      },
      partner: { en: "Kavitha (108 operator)", te: "కవిత (108 ఆపరేటర్)" },
      skills: [
        { id: "call", label: { en: "Emergency call", te: "అత్యవసర ఫోన్" } },
        { id: "details", label: { en: "Patient details", te: "పేషెంట్ వివరాలు" } },
      ],
      turns: [
        {
          partner: "One zero eight ambulance service. What happened?",
          te: "108 అంబులెన్స్ సర్వీస్. ఏం జరిగింది?",
          hint: { en: "Say what happened to your neighbour, and where.", te: "మీ పక్కింటావిడకి ఏం జరిగిందో, ఎక్కడో చెప్పండి." },
          replies: [
            { say: "My neighbour fainted at the bus stop.", good: true, skill: "call" },
            { say: "My neighbour is fainted at bus stop.", good: false, skill: "call" },
          ],
        },
        {
          partner: "Is she breathing? Can she talk?",
          te: "ఆవిడ ఊపిరి తీసుకుంటున్నారా? మాట్లాడగలుగుతున్నారా?",
          hint: { en: "Answer both questions.", te: "రెండు ప్రశ్నలకీ జవాబు చెప్పండి." },
          replies: [
            { say: "She is breathing, but she can't talk.", good: true, skill: "details" },
            { say: "She breathing, but she can't talk.", good: false, skill: "details", fixIt: "be" },
          ],
        },
        {
          partner: "Which bus stop? Please give me a landmark.",
          te: "ఏ బస్ స్టాప్? ఏదైనా ఒక గుర్తు చెప్పండి.",
          hint: { en: "Give the road and a landmark.", te: "రోడ్డు పేరు, ఒక గుర్తు చెప్పండి." },
          replies: [
            { say: "On Station Road, near the big mosque.", good: true, skill: "call" },
            {
              say: "Everyone knows this bus stop! Just come!",
              good: false,
              skill: "call",
              react: { en: "I'm sorry, I don't know it. A landmark helps us.", te: "సారీ అండీ, అది నాకు తెలియదు. ఒక గుర్తు చెప్తే మాకు సులువు." },
            },
          ],
        },
        {
          partner: "Does she have any health problems?",
          te: "ఆవిడకి ఏమైనా ఆరోగ్య సమస్యలు ఉన్నాయా?",
          hint: { en: "Say her illness and her tablets.", te: "ఆవిడ జబ్బు, వేసుకునే మాత్రలు చెప్పండి." },
          replies: [
            { say: "She has BP. She takes tablets for it.", good: true, skill: "details" },
            { say: "She have BP. She take tablets for it.", good: false, skill: "details", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "The ambulance will come in ten minutes. Stay with her.",
          te: "పది నిమిషాల్లో అంబులెన్స్ వస్తుంది. ఆవిడ దగ్గరే ఉండండి.",
          hint: { en: "Say you will stay, and thank her.", te: "మీరు అక్కడే ఉంటానని చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, I'll stay with her. Thank you.", good: true, skill: "call" },
            { say: "Okay, I stay with her. Thank you.", good: false, skill: "call" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "At the emergency ward desk", te: "ఎమర్జెన్సీ వార్డ్ డెస్క్ దగ్గర" },
      scene: {
        en: "The ambulance brought Sita to the hospital. You give her details to David at the desk.",
        te: "అంబులెన్స్ సీత గారిని ఆసుపత్రికి తీసుకొచ్చింది. డెస్క్ దగ్గర డేవిడ్‌కి మీరు ఆవిడ వివరాలు చెప్తున్నారు.",
      },
      partner: { en: "David (emergency desk)", te: "డేవిడ్ (ఎమర్జెన్సీ డెస్క్)" },
      voice: "b",
      skills: [
        { id: "details", label: { en: "Patient details", te: "పేషెంట్ వివరాలు" } },
        { id: "polite", label: { en: "Staying polite", te: "మర్యాదగా ఉండటం" } },
      ],
      turns: [
        {
          partner: "Good evening. Is this the patient from the ambulance?",
          te: "నమస్కారం. అంబులెన్స్‌లో వచ్చిన పేషెంట్ ఈవిడేనా?",
          hint: { en: "Say yes, and ask them to admit her.", te: "అవునని, ఆవిడని అడ్మిట్ చేసుకోమని అడగండి." },
          replies: [
            { say: "Yes. Please admit her quickly.", good: true, skill: "polite" },
            { say: "Yes. Please admit she quickly.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "What is her name and age?",
          te: "ఆవిడ పేరు, వయసు ఎంత?",
          hint: { en: "Give her name and her age.", te: "ఆవిడ పేరు, వయసు చెప్పండి." },
          replies: [
            { say: "Her name is Sita. She is sixty-eight.", good: true, skill: "details" },
            { say: "Her name Sita. Her age sixty-eight.", good: false, skill: "details", fixIt: "be" },
          ],
        },
        {
          partner: "What happened to her?",
          te: "ఆవిడకి ఏం జరిగింది?",
          hint: { en: "Say what happened at the bus stop (past).", te: "బస్ స్టాప్ దగ్గర ఏం జరిగిందో చెప్పండి (past)." },
          replies: [
            { say: "She fainted at the bus stop this evening.", good: true, skill: "details" },
            { say: "She is fainted at the bus stop this evening.", good: false, skill: "details" },
          ],
        },
        {
          partner: "Is she allergic to any medicine?",
          te: "ఆవిడకి ఏదైనా మందు పడదా?",
          hint: { en: "Say politely that you don't know, and offer to call someone.", te: "తెలియదని మర్యాదగా చెప్పి, ఎవరికైనా ఫోన్ చేస్తానని చెప్పండి." },
          replies: [
            { say: "Sorry, I don't know. I can call her brother.", good: true, skill: "polite" },
            {
              say: "How do I know? I'm only her neighbour!",
              good: false,
              skill: "polite",
              react: { en: "No problem. Can you call someone from her family?", te: "పర్లేదండీ. ఆవిడ ఇంట్లోవాళ్ళకి ఎవరికైనా ఫోన్ చేస్తారా?" },
            },
          ],
        },
        {
          partner: "Yes, please call him. Then wait here, please.",
          te: "అవునండి, ఆయనకి ఫోన్ చేయండి. తర్వాత ఇక్కడే ఉండండి.",
          hint: { en: "Say okay, and that you will call him now.", te: "సరే అని, ఇప్పుడే ఫోన్ చేస్తానని చెప్పండి." },
          replies: [
            { say: "Okay, I'll call him now. Thank you.", good: true, skill: "polite" },
            { say: "Okay, I am calling to him now. Thank you.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

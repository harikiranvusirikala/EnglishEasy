import type { ConversationDay } from "../../types";

/** Week 68, Day 6 (CURRICULUM §5): Conversation Day — joining a yoga class, and a free health camp in the colony. */
export const day: ConversationDay = {
  id: "w68-conversation",
  kind: "conversation",
  title: { en: "The Yoga Class", te: "యోగా క్లాస్" },
  summary: {
    en: "Use the whole week: join a yoga class and talk with the teacher, then get checked at a free health camp in your colony.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: యోగా క్లాస్‌లో చేరి టీచర్‌తో మాట్లాడండి, తర్వాత కాలనీలో ఉచిత హెల్త్ క్యాంప్‌లో చెక్ చేయించుకోండి.",
  },
  topics: ["health", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The first class", te: "మొదటి క్లాస్" },
    lines: [
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Good morning! Are you new here? Welcome to our yoga class.", te: "గుడ్ మార్నింగ్! మీరు కొత్తగా వచ్చారా? మా యోగా క్లాస్‌కి స్వాగతం." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Thank you. I've decided to join. My doctor says I ought to exercise.", te: "థాంక్స్ అండీ. చేరాలని నిర్ణయించుకున్నాను. వ్యాయామం చేయడం మంచిదని మా డాక్టర్ చెప్తున్నారు." },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Very good. Do you have any pain in your back or knees?", te: "చాలా మంచిది. మీకు నడుము నొప్పి గానీ, మోకాళ్ళ నొప్పి గానీ ఉందా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "My knees hurt a little. I used to walk a lot, but I stopped.", te: "మోకాళ్ళు కొంచెం నొప్పిగా ఉంటాయి. ఇదివరకు బాగా నడిచేదాన్ని, కానీ మానేశాను." },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "No problem. Avoid bending too much at first. Go slowly.", te: "పర్లేదు. మొదట్లో మరీ ఎక్కువగా వంగకుండా చూసుకోండి. మెల్లగా చేయండి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Okay. How often should I come?", te: "సరే. ఎన్ని రోజులకి ఒకసారి రావాలి?" },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "Try to come five days a week. The class starts at six.", te: "వారానికి ఐదు రోజులు రావడానికి ప్రయత్నించండి. క్లాస్ ఆరింటికి మొదలవుతుంది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Six is early, but I'll try. Should I eat before the class?", te: "ఆరు అంటే పొద్దున్నే, అయినా ప్రయత్నిస్తాను. క్లాస్ ముందు ఏమైనా తినాలా?" },
      { speaker: { en: "Gopal", te: "గోపాల్" }, voice: "b", en: "No, it's better to come before breakfast. Just drink a little water.", te: "వద్దు, టిఫిన్ తినక ముందే రావడం మంచిది. కొంచెం నీళ్ళు మాత్రం తాగండి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Thank you, sir. See you tomorrow at six!", te: "థాంక్స్ సార్. రేపు ఆరింటికి కలుద్దాం!" },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a yoga class", "At a hospital", "At the market"],
        answer: 0,
      },
      {
        prompt: { en: "Why did Fatima join?", te: "ఫాతిమా గారు ఎందుకు చేరారు?" },
        options: ["Her doctor says she ought to exercise.", "Her friend asked her to come.", "She wants to be a yoga teacher."],
        answer: 0,
      },
      {
        prompt: { en: "What problem does Fatima have?", te: "ఫాతిమా గారికి ఏం సమస్య ఉంది?" },
        options: ["Her knees hurt a little.", "She has a bad headache.", "She can't sleep at night."],
        answer: 0,
      },
      {
        prompt: { en: "How many days a week should she come?", te: "వారానికి ఎన్ని రోజులు రావాలి?" },
        options: ["Five", "Three", "Seven"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You have joined a yoga class. Ask the teacher how often you should come.",
        te: "మీరు యోగా క్లాస్‌లో చేరారు. ఎన్ని రోజులకి ఒకసారి రావాలని టీచర్‌ని అడగండి.",
      },
      expected: ["How often should I come?", "How many days a week should I come?", "How often should I come to the class?"],
      options: ["How often should I come?", "How often I should come?", "How often should I to come?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the health camp, the nurse asks how many tablets you take. Say two a day.",
        te: "హెల్త్ క్యాంప్‌లో మీరు ఎన్ని టాబ్లెట్లు వేసుకుంటారని నర్స్ అడుగుతున్నారు. రోజుకి రెండు అని చెప్పండి.",
      },
      expected: ["I take two tablets a day.", "Two tablets a day.", "Two a day."],
      options: ["I take two tablets a day.", "I take two tablet a day.", "I take tablets two a day."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell the yoga teacher that your friend Kavitha also wants to join.",
        te: "మీ స్నేహితురాలు కవిత గారు కూడా చేరాలనుకుంటున్నారని యోగా టీచర్‌కి చెప్పండి.",
      },
      expected: ["My friend Kavitha wants to join too.", "My friend Kavitha also wants to join.", "Kavitha wants to join too."],
      options: ["My friend Kavitha wants to join too.", "My friend Kavitha want to join too.", "My friend Kavitha wants joining too."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Joining the yoga class", te: "యోగా క్లాస్‌లో చేరడం" },
      scene: {
        en: "A yoga class has started in your colony park. You go to meet the teacher, Anitha.",
        te: "మీ కాలనీ పార్క్‌లో యోగా క్లాస్ మొదలైంది. టీచర్ అనిత గారిని కలవడానికి వెళ్ళారు.",
      },
      partner: { en: "Anitha (the yoga teacher)", te: "అనిత (యోగా టీచర్)" },
      skills: [
        { id: "join", label: { en: "Joining a class", te: "క్లాస్‌లో చేరడం" } },
        { id: "ask", label: { en: "Asking questions", te: "ప్రశ్నలు అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! Can I help you?",
          te: "గుడ్ మార్నింగ్! చెప్పండి, ఏం కావాలి?",
          hint: { en: "Greet her, and say you want to join the class.", te: "నమస్కారం చెప్పి, క్లాస్‌లో చేరాలనుకుంటున్నారని చెప్పండి." },
          replies: [
            { say: "Good morning. I'd like to join the yoga class.", good: true, skill: "join" },
            { say: "Good morning. I'd like to join yoga class.", good: false, skill: "join", fixIt: "article" },
          ],
        },
        {
          partner: "Wonderful. Have you done yoga before?",
          te: "చాలా బాగుంది. ఇంతకు ముందు యోగా చేశారా?",
          hint: { en: "Say never, but you have made up your mind to start.", te: "ఎప్పుడూ చేయలేదని, కానీ మొదలుపెట్టాలని నిర్ణయించుకున్నారని చెప్పండి." },
          replies: [
            { say: "No, never. But I've decided to start now.", good: true, skill: "join" },
            { say: "No, never. But I've decided starting now.", good: false, skill: "join" },
          ],
        },
        {
          partner: "That's fine. Do you have any health problems?",
          te: "పర్లేదు. మీకు ఏమైనా ఆరోగ్య సమస్యలు ఉన్నాయా?",
          hint: { en: "Say you have high BP, and ask if yoga is safe for you.", te: "మీకు BP ఎక్కువ అని చెప్పి, యోగా మీకు పర్లేదా అని అడగండి." },
          replies: [
            { say: "I have high BP. Is yoga okay for me?", good: true, skill: "ask" },
            { say: "I have high BP. Yoga is okay for me?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, but you ought to avoid a few poses. I'll show you.",
          te: "పర్లేదు, కానీ కొన్ని ఆసనాలు చేయకపోవడం మంచిది. నేను చూపిస్తాను.",
          hint: { en: "Thank her, and ask what time the class starts.", te: "థాంక్స్ చెప్పి, క్లాస్ ఎన్ని గంటలకి మొదలవుతుందో అడగండి." },
          replies: [
            { say: "Thank you. What time does the class start?", good: true, skill: "ask" },
            { say: "Thank you. What time the class starts?", good: false, skill: "ask", fixIt: "question" },
            {
              say: "Just tell me the fee. I don't need advice.",
              good: false,
              skill: "polite",
              react: { en: "Okay. Actually, it's free for everyone in the colony.", te: "సరే. నిజానికి కాలనీలో అందరికీ ఉచితమే." },
            },
          ],
        },
        {
          partner: "At six, every morning except Sunday. Don't forget to bring a mat!",
          te: "ఆరింటికి, ఆదివారం తప్ప రోజూ పొద్దున. చాప తేవడం మర్చిపోకండి!",
          hint: { en: "Say you will bring one, and say goodbye.", te: "తెస్తానని చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Sure, I'll bring a mat. See you tomorrow!", good: true, skill: "polite" },
            { say: "Sure, I'll bring mat. See you tomorrow!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "At the health camp", te: "హెల్త్ క్యాంప్‌లో" },
      scene: {
        en: "There is a free health camp in your colony hall. Prasad, a volunteer, meets you at the door.",
        te: "మీ కాలనీ హాల్‌లో ఉచిత హెల్త్ క్యాంప్ జరుగుతోంది. గుమ్మం దగ్గర వాలంటీర్ ప్రసాద్ గారు మిమ్మల్ని కలిశారు.",
      },
      partner: { en: "Prasad (a volunteer)", te: "ప్రసాద్ (వాలంటీర్)" },
      voice: "b",
      skills: [
        { id: "checkup", label: { en: "Getting checked", te: "చెక్ చేయించుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! Welcome to the health camp. Is this your first time?",
          te: "గుడ్ మార్నింగ్! హెల్త్ క్యాంప్‌కి స్వాగతం. మీరు రావడం ఇదే మొదటిసారా?",
          hint: { en: "Say yes, and ask for a BP and sugar check politely.", te: "అవును అని, BP, షుగర్ చెక్ చేయమని మర్యాదగా అడగండి." },
          replies: [
            { say: "Yes, it is. I'd like a BP and sugar check, please.", good: true, skill: "checkup" },
            {
              say: "Yes. Check my BP first. Quickly.",
              good: false,
              skill: "polite",
              react: { en: "Please be patient. Everyone here is waiting too.", te: "కొంచెం ఓపిక పట్టండి. ఇక్కడ అందరూ ఎదురుచూస్తున్నారు." },
            },
          ],
        },
        {
          partner: "Sure. Haven't you eaten anything this morning?",
          te: "తప్పకుండా. ఈ రోజు పొద్దున ఏమీ తినలేదా?",
          hint: { en: "Say you have not eaten, because of the sugar test.", te: "షుగర్ టెస్ట్ కోసం ఏమీ తినలేదని చెప్పండి." },
          replies: [
            { say: "No, I haven't. I came on an empty stomach.", good: true, skill: "checkup" },
            { say: "Yes, I haven't. I came on an empty stomach.", good: false, skill: "checkup", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Good. Please fill in this card first: your name and age.",
          te: "మంచిది. ముందు ఈ కార్డు నింపండి: మీ పేరు, వయసు.",
          hint: { en: "Ask if you can write it in Telugu or English.", te: "తెలుగులో రాయాలా, ఇంగ్లీష్‌లో రాయాలా అని అడగండి." },
          replies: [
            { say: "Should I write in English or in Telugu?", good: true, skill: "checkup" },
            { say: "I should write in English or in Telugu?", good: false, skill: "checkup", fixIt: "question" },
          ],
        },
        {
          partner: "Either is fine. Your BP is a little high today.",
          te: "ఏదైనా పర్లేదు. ఈ రోజు మీ BP కొంచెం ఎక్కువగా ఉంది.",
          hint: { en: "Sound a little worried, and ask him what to do.", te: "కొంచెం కంగారుగా, ఏం చేయాలో ఆయన్ని అడగండి." },
          replies: [
            { say: "Oh! What should I do?", good: true, skill: "checkup" },
            { say: "Oh! What should I to do?", good: false, skill: "checkup" },
          ],
        },
        {
          partner: "Eat less salt, walk every day, and see your doctor this week.",
          te: "ఉప్పు తక్కువ తినండి, రోజూ నడవండి, ఈ వారం మీ డాక్టర్‌ని కలవండి.",
          hint: { en: "Thank him, and promise to visit your doctor soon.", te: "థాంక్స్ చెప్పి, త్వరలో డాక్టర్‌ని కలుస్తానని మాటివ్వండి." },
          replies: [
            { say: "Thank you. I'll see my doctor this week.", good: true, skill: "polite" },
            { say: "Thank you. I'll see my doctor on this week.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

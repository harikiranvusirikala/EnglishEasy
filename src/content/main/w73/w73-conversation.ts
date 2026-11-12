import type { ConversationDay } from "../../types";

/** Week 73, Day 6 (CURRICULUM §5): Conversation Day — a locked function hall, and a friend who doesn't answer the phone. */
export const day: ConversationDay = {
  id: "w73-conversation",
  kind: "conversation",
  title: { en: "Where Is Everyone?", te: "అందరూ ఎక్కడ?" },
  summary: {
    en: "Use the whole week: guess why a function hall is locked, and why a friend is not answering the phone.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఫంక్షన్ హాల్‌కి తాళం ఎందుకుందో, స్నేహితులు ఫోన్ ఎందుకు ఎత్తట్లేదో ఊహించండి.",
  },
  topics: ["people", "phone", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The wrong hall", te: "వేరే హాల్" },
    lines: [
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "This is Sri Sai Function Hall. But the gate is locked!", te: "ఇదే శ్రీ సాయి ఫంక్షన్ హాల్. కానీ గేటుకి తాళం వేసి ఉంది!" },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "That's strange. Ramesh's retirement function is at six, isn't it?", te: "విచిత్రంగా ఉంది. రమేష్ గారి రిటైర్మెంట్ ఫంక్షన్ ఆరింటికే కదా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes. It's only half past five. We must be early.", te: "అవును. ఇప్పుడు ఐదున్నరే అయింది. మనమే ముందుగా వచ్చినట్టున్నాం." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "But there are no lights and no flowers. Nobody is getting it ready.", te: "కానీ లైట్లు లేవు, పూలు లేవు. ఎవరూ ఏర్పాట్లు చేయట్లేదు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Then this can't be the right hall.", te: "అయితే ఇది సరైన హాల్ అయ్యుండదు." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Let me check the invitation. Oh! It says Sri Sai Convention Centre.", te: "ఇన్విటేషన్ చూస్తాను. ఓ! శ్రీ సాయి కన్వెన్షన్ సెంటర్ అని ఉంది." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "That must be the new hall near the bus stand.", te: "అది బస్ స్టాండ్ దగ్గర ఉన్న కొత్త హాల్ అయ్యుంటుంది." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "I'm calling Ramesh. He's not answering. He might be busy with the guests.", te: "రమేష్ గారికి ఫోన్ చేస్తున్నాను. ఎత్తట్లేదు. అతిథులతో బిజీగా ఉండొచ్చు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Let's take an auto. It's only ten minutes from here.", te: "ఆటోలో వెళ్దాం. ఇక్కడి నుంచి పది నిమిషాలే." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Good idea. We can still be there before six.", te: "మంచి ఆలోచన. ఆరింటిలోపే అక్కడికి చేరుకోవచ్చు." },
    ],
    questions: [
      {
        prompt: { en: "What is the problem?", te: "సమస్య ఏంటి?" },
        options: ["They are at the wrong hall.", "They are very late.", "The function is cancelled."],
        answer: 0,
      },
      {
        prompt: { en: "Why does Venkat say this can't be the right hall?", te: "ఇది సరైన హాల్ అయ్యుండదని వెంకట్ గారు ఎందుకు అన్నారు?" },
        options: ["There are no lights or flowers.", "The gate is open.", "Ramesh is outside."],
        answer: 0,
      },
      {
        prompt: { en: "Where is the right hall?", te: "సరైన హాల్ ఎక్కడ ఉంది?" },
        options: ["Near the bus stand", "Near the temple", "Next to the school"],
        answer: 0,
      },
      {
        prompt: { en: "What does Grace guess about Ramesh?", te: "రమేష్ గారి గురించి గ్రేస్ గారు ఏమని ఊహించారు?" },
        options: ["He might be busy with the guests.", "He must be sleeping.", "He is on the way."],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend Mohan is not at the function. Someone says he went to Guntur yesterday. Guess where he is.",
        te: "మీ స్నేహితుడు మోహన్ గారు ఫంక్షన్‌కి రాలేదు. ఆయన నిన్న గుంటూరు వెళ్ళారని ఎవరో అన్నారు. ఆయన ఎక్కడ ఉన్నారో ఊహించండి.",
      },
      expected: ["He might be out of town.", "He must be in Guntur.", "He might be in Guntur.", "He must be out of town."],
      options: ["He might be out of town.", "He might be out of station.", "He might out of town."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The hall is dark, and the gate is locked. Tell your friend you are sure this is the wrong place.",
        te: "హాల్ చీకటిగా ఉంది, గేటుకి తాళం వేసి ఉంది. ఇది సరైన చోటు కాదని మీకు గట్టిగా అనిపిస్తోందని స్నేహితులకి చెప్పండి.",
      },
      expected: ["This can't be the right hall.", "This can't be the right place.", "It can't be here."],
      options: ["This can't be the right hall.", "This can't the right hall.", "This mustn't be the right hall."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your street is full of cars, and you hear music. Your friend asks why. Guess: there's a wedding nearby.",
        te: "మీ వీధి నిండా కార్లు ఉన్నాయి, సంగీతం వినిపిస్తోంది. ఎందుకని స్నేహితులు అడుగుతున్నారు. ఊహించండి: దగ్గర్లో పెళ్ళి ఉంది.",
      },
      expected: ["There must be a wedding nearby.", "There might be a wedding nearby.", "There must be a function nearby."],
      options: ["There must be a wedding nearby.", "There must be wedding nearby.", "There must a wedding nearby."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A locked hall", te: "తాళం వేసిన హాల్" },
      scene: {
        en: "You and your friend Sarala reach a hall for your cousin Anitha's engagement lunch. The gate is locked.",
        te: "మీ కజిన్ అనిత గారి నిశ్చితార్థం భోజనానికి మీరు, మీ స్నేహితురాలు సరళ గారు ఒక హాల్‌కి వచ్చారు. గేటుకి తాళం వేసి ఉంది.",
      },
      partner: { en: "Sarala (your friend)", te: "సరళ (మీ స్నేహితురాలు)" },
      skills: [
        { id: "guess", label: { en: "Guessing", te: "ఊహించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "The gate is locked! Are we at the right place?",
          te: "గేటుకి తాళం వేసి ఉంది! మనం సరైన చోటికే వచ్చామా?",
          hint: { en: "Point to the name on the board, and say you are almost sure.", te: "బోర్డు మీద పేరు చూపించి, దాదాపు ఖచ్చితంగా ఇదేనని చెప్పండి." },
          replies: [
            { say: "Yes, the name is on the board. It must be the right hall.", good: true, skill: "guess" },
            { say: "Yes, the name is on the board. It must the right hall.", good: false, skill: "guess", fixIt: "be" },
          ],
        },
        {
          partner: "Then why is nobody here?",
          te: "మరి ఇక్కడ ఎవరూ లేరేంటి?",
          hint: { en: "Guess that you both came too early.", te: "మీరిద్దరూ మరీ ముందుగా వచ్చారేమోనని ఊహించండి." },
          replies: [
            { say: "We must be early. It's only eleven.", good: true, skill: "guess" },
            {
              say: "Because you rushed me, as usual!",
              good: false,
              skill: "polite",
              react: { en: "Oh, sorry! I was afraid we would be late.", te: "అయ్యో, సారీ! ఆలస్యం అవుతుందేమో అని భయపడ్డాను." },
            },
          ],
        },
        {
          partner: "Look, there's a watchman. Shall we ask him?",
          te: "అదిగో, వాచ్‌మన్ ఉన్నారు. ఆయన్ని అడుగుదామా?",
          hint: { en: "Agree, and say he may know the time.", te: "సరే అని, ఆయనకి టైమ్ తెలిసి ఉండొచ్చని చెప్పండి." },
          replies: [
            { say: "Yes, let's ask. He might know the time.", good: true, skill: "guess" },
            { say: "Yes, let's ask. He might be knowing the time.", good: false, skill: "guess", fixIt: "state-ing" },
          ],
        },
        {
          partner: "He says lunch starts at half past twelve!",
          te: "భోజనం పన్నెండున్నరకి మొదలవుతుందని ఆయన అంటున్నారు!",
          hint: { en: "Suggest having coffee nearby while you wait.", te: "ఎదురుచూసేలోగా దగ్గర్లో కాఫీ తాగుదామని సూచించండి." },
          replies: [
            { say: "Then let's have coffee nearby and come back.", good: true, skill: "polite" },
            { say: "Shall we have coffee somewhere till then?", good: true, skill: "polite" },
            { say: "Then let's having coffee nearby and come back.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "No answer on the phone", te: "ఫోన్ ఎత్తట్లేదు" },
      scene: {
        en: "You and Gopal are waiting at the park for your friend Satish. He goes to the temple every morning before the walk. He is late.",
        te: "మీరు, గోపాల్ గారు పార్క్‌లో మీ స్నేహితుడు సతీష్ గారి కోసం ఎదురుచూస్తున్నారు. ఆయన రోజూ పొద్దున నడకకి ముందు గుడికి వెళ్తారు. ఈ రోజు ఆలస్యం అయ్యారు.",
      },
      partner: { en: "Gopal (your friend)", te: "గోపాల్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "guess", label: { en: "Guessing", te: "ఊహించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "I've called Satish three times. No answer!",
          te: "సతీష్ గారికి మూడుసార్లు ఫోన్ చేశాను. ఎత్తట్లేదు!",
          hint: { en: "Calm him down, and guess that Satish is on the road.", te: "ఆయనకి ధైర్యం చెప్పి, సతీష్ గారు దారిలో ఉండొచ్చని ఊహించండి." },
          replies: [
            { say: "Don't worry. He might be driving.", good: true, skill: "guess" },
            { say: "Don't worry. He must be on the way.", good: true, skill: "guess" },
            { say: "Don't worry. He might driving.", good: false, skill: "guess", fixIt: "be" },
          ],
        },
        {
          partner: "But he always picks up when I call.",
          te: "కానీ నేను ఫోన్ చేస్తే ఆయన ఎప్పుడూ ఎత్తుతారు.",
          hint: { en: "Remind him where Satish goes every morning, and guess about his phone.", te: "సతీష్ గారు రోజూ పొద్దున ఎక్కడికి వెళ్తారో గుర్తు చేసి, ఆయన ఫోన్ గురించి ఊహించండి." },
          replies: [
            { say: "He goes to the temple every morning. His phone must be on silent.", good: true, skill: "guess" },
            { say: "He go to the temple every morning. His phone must be on silent.", good: false, skill: "guess", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "You're right. Oh, now he's calling back!",
          te: "మీరు చెప్పింది నిజమే. ఓ, ఇప్పుడు ఆయనే తిరిగి ఫోన్ చేస్తున్నారు!",
          hint: { en: "Ask Gopal to answer and find out where Satish is.", te: "ఫోన్ ఎత్తి సతీష్ గారు ఎక్కడ ఉన్నారో కనుక్కోమని గోపాల్ గారిని అడగండి." },
          replies: [
            { say: "Please answer and ask where he is.", good: true, skill: "polite" },
            { say: "Please answer and ask where is he.", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "He's parking his scooter. He'll be here in two minutes.",
          te: "ఆయన స్కూటర్ పార్క్ చేస్తున్నారట. రెండు నిమిషాల్లో వచ్చేస్తారు.",
          hint: { en: "Say you are glad, and suggest starting the walk slowly.", te: "సంతోషమని చెప్పి, నెమ్మదిగా నడక మొదలుపెడదామని సూచించండి." },
          replies: [
            { say: "Good! Let's start walking slowly.", good: true, skill: "polite" },
            {
              say: "Finally! That fellow is always late.",
              good: false,
              skill: "polite",
              react: { en: "Come on, don't be so hard on him. He's here now.", te: "అలా అనకండి. ఆయన వచ్చేశారుగా." },
            },
          ],
        },
      ],
    },
  ],
};

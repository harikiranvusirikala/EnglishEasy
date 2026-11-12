import type { ConversationDay } from "../../types";

/** Week 69, Day 6 (CURRICULUM §5): Conversation Day — friends talk over tea about a free year, and give advice with If I were you. */
export const day: ConversationDay = {
  id: "w69-conversation",
  kind: "conversation",
  title: { en: "Dreams Over Tea", te: "టీ తాగుతూ కలలు" },
  summary: {
    en: "Use the whole week: talk with friends about what you would do with a free year, and give kind advice with If I were you.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఒక సంవత్సరం ఖాళీగా ఉంటే ఏం చేస్తారో స్నేహితులతో మాట్లాడండి, If I were you అని మర్యాదగా సలహా ఇవ్వండి.",
  },
  topics: ["people", "feelings", "travel"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A free year", te: "ఖాళీగా ఒక సంవత్సరం" },
    lines: [
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Ramana, here's your tea. What are you thinking about?", te: "రమణ గారూ, ఇదిగోండి మీ టీ. దేని గురించి ఆలోచిస్తున్నారు?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Thank you. Imagine this: if you had a free year, what would you do?", te: "థాంక్స్. ఒకసారి ఊహించండి: మీకు ఒక సంవత్సరం అంతా ఖాళీగా ఉంటే, ఏం చేస్తారు?" },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Oh, that's easy. I'd learn the veena properly.", te: "అదెంత పని. వీణ సరిగ్గా నేర్చుకుంటాను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Lovely! If I had a year, I'd visit all the old temples.", te: "బాగుంది! నాకు ఒక సంవత్సరం ఉంటే, పాత గుడులన్నీ చూసొస్తాను." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "Alone? If I were you, I'd go with a group.", te: "ఒక్కరేనా? నేనైతే, ఒక గ్రూప్‌తో కలిసి వెళ్తాను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Good idea. My knees are weak, so a group would help.", te: "మంచి ఆలోచన. నా మోకాళ్ళు బలహీనంగా ఉన్నాయి, గ్రూప్ ఉంటే సాయంగా ఉంటుంది." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "And if you could take one person, who would it be?", te: "మరి ఒక్కరిని తీసుకెళ్ళగలిగితే, ఎవరిని తీసుకెళ్తారు?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "My old school friend Rahim. He lives in Kurnool now.", te: "నా పాత స్కూల్ స్నేహితుడు రహీమ్‌ని. ఇప్పుడు ఆయన కర్నూల్‌లో ఉంటారు." },
      { speaker: { en: "Kamala", te: "కమల" }, voice: "a", en: "That's sweet. Well, if it doesn't rain, let's walk to the park now.", te: "బాగుంది. సరే, వర్షం పడకపోతే, ఇప్పుడు పార్క్ దాకా నడుద్దాం." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Yes, let's go. Dreams are nice, but our walk is real!", te: "సరే, పదండి. కలలు బాగుంటాయి, కానీ మన నడక నిజం!" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["What they would do with a free year", "A problem at the bank", "A wedding next week"],
        answer: 0,
      },
      {
        prompt: { en: "What would Kamala learn?", te: "కమల గారు ఏం నేర్చుకుంటారు?" },
        options: ["The veena", "Yoga", "Hindi"],
        answer: 0,
      },
      {
        prompt: { en: "What does Kamala advise Ramana?", te: "కమల గారు రమణ గారికి ఏం సలహా ఇచ్చారు?" },
        options: ["To go with a group", "To go alone", "To stay at home"],
        answer: 0,
      },
      {
        prompt: { en: "Who would Ramana take with him?", te: "రమణ గారు ఎవరిని తీసుకెళ్తారు?" },
        options: ["His school friend Rahim", "Kamala", "His cousin"],
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
        en: "Ask your friend what she would do with a free year.",
        te: "ఒక సంవత్సరం ఖాళీగా ఉంటే ఏం చేస్తారని స్నేహితురాలిని అడగండి.",
      },
      expected: ["What would you do with a free year?", "What would you do if you had a free year?"],
      options: ["What would you do with a free year?", "What you would do with a free year?", "What would you do with free year?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend has worked too hard and looks tired. Advise him to rest for a few days.",
        te: "మీ స్నేహితుడు చాలా కష్టపడి అలసిపోయినట్టు కనిపిస్తున్నారు. కొన్ని రోజులు విశ్రాంతి తీసుకోమని సలహా ఇవ్వండి.",
      },
      expected: ["If I were you, I'd rest for a few days.", "If I were you, I'd get some rest.", "You should rest for a few days."],
      options: ["If I were you, I'd rest for a few days.", "If I were you, I'd take rest for a few days.", "If I would be you, I'd rest for a few days."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "New neighbours speak only Hindi. Say you'd chat with them if you knew Hindi.",
        te: "కొత్త పక్కింటివాళ్ళు హిందీ మాత్రమే మాట్లాడతారు. మీకు హిందీ వస్తే వాళ్ళతో మాట్లాడతానని చెప్పండి.",
      },
      expected: ["If I knew Hindi, I'd chat with them.", "If I knew Hindi, I would talk to them more.", "If I knew Hindi, I'd talk to them."],
      options: ["If I knew Hindi, I'd chat with them.", "If I was knowing Hindi, I'd chat with them.", "If I know Hindi, I'd chat with them."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A free year", te: "ఖాళీగా ఒక సంవత్సరం" },
      scene: {
        en: "Your friend Geetha drops in for tea. She has a funny question for you.",
        te: "మీ స్నేహితురాలు గీత గారు టీ తాగడానికి మీ ఇంటికి వచ్చారు. మిమ్మల్ని ఒక సరదా ప్రశ్న అడగాలనుకుంటున్నారు.",
      },
      partner: { en: "Geetha (your friend)", te: "గీత (మీ స్నేహితురాలు)" },
      skills: [
        { id: "dream", label: { en: "Talking about dreams", te: "కలల గురించి చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Ramana asked me a funny question today.",
          te: "హలో! ఈ రోజు రమణ గారు నన్ను ఒక సరదా ప్రశ్న అడిగారు.",
          hint: { en: "Ask her what the question was.", te: "ఆ ప్రశ్న ఏంటని ఆవిడని అడగండి." },
          replies: [
            { say: "Oh! What was the question?", good: true, skill: "polite" },
            { say: "Really? What did he ask?", good: true, skill: "polite" },
            { say: "Really? What he asked?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "If you had a free year, what would you do?",
          te: "మీకు ఒక సంవత్సరం ఖాళీగా ఉంటే, ఏం చేస్తారు?",
          hint: { en: "Say you would learn something new: your own choice.", te: "ఏదైనా కొత్తది నేర్చుకుంటానని చెప్పండి: మీ సొంత ఎంపిక." },
          replies: [
            { say: "If I had a free year, I'd learn to swim.", good: true, skill: "dream" },
            { say: "I'd learn to paint, slowly and happily.", good: true, skill: "dream" },
            { say: "If I would have a free year, I'd learn to swim.", good: false, skill: "dream" },
          ],
        },
        {
          partner: "Swimming! At our age? Are you serious?",
          te: "ఈతా! మన వయసులోనా? నిజంగానే అంటున్నారా?",
          hint: { en: "Say kindly that age is only a number, and you'd start slowly.", te: "వయసు ఒక అంకె మాత్రమే అని, మెల్లగా మొదలుపెడతానని మర్యాదగా చెప్పండి." },
          replies: [
            { say: "Yes! Age is only a number. I'd start slowly.", good: true, skill: "dream" },
            {
              say: "Don't laugh at me. Mind your own business!",
              good: false,
              skill: "polite",
              react: { en: "Sorry, sorry! I wasn't laughing. I think it's brave.", te: "సారీ, సారీ! నేను నవ్వట్లేదు. అది ధైర్యం అనుకుంటున్నాను." },
            },
          ],
        },
        {
          partner: "You're right. And if you could go anywhere, where would you go?",
          te: "నిజమే. మరి ఎక్కడికైనా వెళ్ళగలిగితే, ఎక్కడికి వెళ్తారు?",
          hint: { en: "Name one place you would visit, and say why.", te: "మీరు వెళ్ళే ఒక చోటు పేరు, ఎందుకో చెప్పండి." },
          replies: [
            { say: "I'd go to Kashi. I've always wanted to see the Ganga.", good: true, skill: "dream" },
            { say: "I'd go to Kanyakumari to see the sunrise.", good: true, skill: "dream" },
            { say: "I'd going to Kashi to see the Ganga.", good: false, skill: "dream" },
          ],
        },
        {
          partner: "Lovely dreams! Let's have our tea before it gets cold.",
          te: "మంచి కలలు! టీ చల్లారకముందే తాగుదాం.",
          hint: { en: "Agree happily, and offer some snacks with it.", te: "సంతోషంగా ఒప్పుకుని, టీతో పాటు స్నాక్స్ ఇస్తానని చెప్పండి." },
          replies: [
            { say: "Yes, let's! I'll bring some snacks too.", good: true, skill: "polite" },
            { say: "Yes, let's! I'll bringing some snacks too.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Advice for a friend", te: "స్నేహితుడికి సలహా" },
      scene: {
        en: "Your friend Prasad is worried. His elder brother in Hyderabad wants him to move there.",
        te: "మీ స్నేహితుడు ప్రసాద్ గారు దిగులుగా ఉన్నారు. హైదరాబాద్‌లో ఉన్న వాళ్ళ అన్నయ్య, ఆయన్ని అక్కడికి వచ్చేయమంటున్నారు.",
      },
      partner: { en: "Prasad (your friend)", te: "ప్రసాద్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "advise", label: { en: "Giving advice", te: "సలహా ఇవ్వడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "I'm worried. My elder brother wants me to move to Hyderabad.",
          te: "నాకు దిగులుగా ఉంది. హైదరాబాద్ వచ్చేయమని మా అన్నయ్య అంటున్నారు.",
          hint: { en: "Ask him gently what he himself wants.", te: "ఆయనకి ఏం కావాలో మెల్లగా అడగండి." },
          replies: [
            { say: "And what would you like to do?", good: true, skill: "advise" },
            { say: "I see. What do you want?", good: true, skill: "advise" },
            { say: "I see. What you want to do?", good: false, skill: "advise", fixIt: "question" },
          ],
        },
        {
          partner: "I don't know. I love our town, but he is alone there.",
          te: "తెలీదు. మన ఊరంటే నాకు ఇష్టం, కానీ ఆయన అక్కడ ఒక్కరే ఉన్నారు.",
          hint: { en: "Ask what he would miss if he moved.", te: "అక్కడికి వెళ్తే ఆయనకి ఏం లోటుగా ఉంటుందో అడగండి." },
          replies: [
            { say: "If you moved, what would you miss here?", good: true, skill: "advise" },
            { say: "If you would move, what would you miss here?", good: false, skill: "advise" },
          ],
        },
        {
          partner: "I'd miss my friends, my temple and our morning walks.",
          te: "నా స్నేహితులు, మా గుడి, మన పొద్దుటి నడకలు, ఇవన్నీ లోటుగా ఉంటాయి.",
          hint: { en: "Advise him to try living there for a month first.", te: "ముందు ఒక నెల అక్కడ ఉండి చూడమని సలహా ఇవ్వండి." },
          replies: [
            { say: "If I were you, I'd stay there for a month first.", good: true, skill: "advise" },
            { say: "If I were you, I'd try it for a month.", good: true, skill: "advise" },
            {
              say: "Just go. Your brother is more important.",
              good: false,
              skill: "polite",
              react: { en: "Hmm, maybe. But my life is here too.", te: "హ్మ్, కావచ్చు. కానీ నా జీవితం కూడా ఇక్కడే ఉంది." },
            },
          ],
        },
        {
          partner: "A month first. That's wise. Then I can decide.",
          te: "ముందు ఒక నెల. అది మంచి ఆలోచన. తర్వాత నిర్ణయించుకోవచ్చు.",
          hint: { en: "Agree, and say he can call you any time.", te: "ఒప్పుకుని, ఎప్పుడైనా ఫోన్ చేయొచ్చని చెప్పండి." },
          replies: [
            { say: "Yes. And call me any time you want to talk.", good: true, skill: "polite" },
            { say: "Yes. And call me any time you are wanting to talk.", good: false, skill: "polite", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Thank you, my friend. You always give good advice.",
          te: "థాంక్స్, మిత్రమా. మీరు ఎప్పుడూ మంచి సలహా ఇస్తారు.",
          hint: { en: "Reply kindly to his thanks.", te: "ఆయన థాంక్స్‌కి మర్యాదగా జవాబు చెప్పండి." },
          replies: [
            { say: "You're welcome. That's what friends are for.", good: true, skill: "polite" },
            { say: "Don't mention. That's what friends are for.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

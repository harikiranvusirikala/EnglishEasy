import type { ConversationDay } from "../../types";

/** Week 35, Day 6 (CURRICULUM §4): Conversation Day at the senior citizens' club — joining a club, and weekend plans. */
export const day: ConversationDay = {
  id: "w35-conversation",
  kind: "conversation",
  title: { en: "The Senior Citizens' Club", te: "సీనియర్ సిటిజన్స్ క్లబ్" },
  summary: {
    en: "Use the whole week: talk about hobbies at the senior citizens' club, join the club, and plan a weekend film with a friend.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: సీనియర్ సిటిజన్స్ క్లబ్‌లో హాబీల గురించి మాట్లాడండి, క్లబ్‌లో చేరండి, స్నేహితులతో వీకెండ్ సినిమా ప్లాన్ చేయండి.",
  },
  topics: ["neighbours", "people", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the club", te: "క్లబ్‌లో" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Welcome to the club, Venkat!", te: "క్లబ్‌కి స్వాగతం, వెంకట్ గారు!" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thank you. What do people do here?", te: "థాంక్యూ. ఇక్కడ అందరూ ఏం చేస్తారు?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Some play carrom. Some enjoy reading the newspapers.", te: "కొందరు క్యారమ్ ఆడతారు. కొందరికి పేపర్లు చదవడం సరదా." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "I love playing chess. Is there a board?", te: "నాకు చెస్ ఆడటం అంటే చాలా ఇష్టం. బోర్డు ఉందా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Yes! Mohan plays chess here every evening.", te: "ఉంది! మోహన్ గారు రోజూ సాయంత్రం ఇక్కడ చెస్ ఆడతారు." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Good. How often do you come?", te: "మంచిది. మీరు ఎన్నిసార్లు వస్తుంటారు?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Three times a week, for the music class.", te: "వారానికి మూడుసార్లు, మ్యూజిక్ క్లాస్ కోసం." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Oh! Are you good at singing?", te: "అవునా! మీకు పాడటం బాగా వచ్చా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Not very good, but I enjoy it a lot!", te: "అంత బాగా రాదు, కానీ నాకు చాలా సరదా!" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Then I'll come on Friday to listen.", te: "అయితే శుక్రవారం వినడానికి వస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a cinema hall", "At a senior citizens' club", "At a hospital"],
        answer: 1,
      },
      {
        prompt: { en: "What does Venkat love playing?", te: "వెంకట్ గారికి ఏం ఆడటం అంటే చాలా ఇష్టం?" },
        options: ["Chess", "Carrom", "Cricket"],
        answer: 0,
      },
      {
        prompt: { en: "How often does Radha come to the club?", te: "రాధ గారు క్లబ్‌కి ఎన్నిసార్లు వస్తారు?" },
        options: ["Twice a week", "Every day", "Three times a week"],
        answer: 2,
      },
      {
        prompt: { en: "Why does Radha come to the club?", te: "రాధ గారు క్లబ్‌కి ఎందుకు వస్తారు?" },
        options: ["For the music class", "To play chess", "To read the newspapers"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A club member asks about your hobby. Say reading makes you happy.",
        te: "క్లబ్‌లో ఒకరు మీ హాబీ గురించి అడిగారు. చదవడం మీకు సరదా అని చెప్పండి.",
      },
      expected: ["I enjoy reading.", "I love reading.", "I like reading."],
      options: ["I enjoy reading.", "I enjoy to read.", "I am enjoy reading."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell someone you go to yoga on three days every week.",
        te: "ప్రతి వారం మూడు రోజులు యోగాకి వెళ్తారని ఒకరికి చెప్పండి.",
      },
      expected: ["I go to yoga three times a week.", "I do yoga three times a week."],
      options: ["I go to yoga three times a week.", "I go to yoga three time a week.", "I am going to yoga three times in a week."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask a friend what the film is about.",
        te: "ఆ సినిమా దేని గురించో స్నేహితులని అడగండి.",
      },
      expected: ["What is the film about?", "What's the film about?", "What is it about?"],
      options: ["What is the film about?", "What the film is about?", "What does the film about?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Joining the club", te: "క్లబ్‌లో చేరడం" },
      scene: {
        en: "You visit the senior citizens' club. Krishna, the secretary, welcomes you.",
        te: "మీరు సీనియర్ సిటిజన్స్ క్లబ్‌కి వెళ్ళారు. సెక్రటరీ కృష్ణ గారు మిమ్మల్ని పలకరిస్తున్నారు.",
      },
      partner: { en: "Krishna (club secretary)", te: "కృష్ణ (క్లబ్ సెక్రటరీ)" },
      voice: "b",
      skills: [
        { id: "hobby", label: { en: "Hobbies", te: "హాబీలు" } },
        { id: "often", label: { en: "How often", te: "ఎన్నిసార్లు" } },
      ],
      turns: [
        {
          partner: "Good morning! Do you want to become a member?",
          te: "నమస్కారం! మీరు క్లబ్‌లో సభ్యులు అవ్వాలనుకుంటున్నారా?",
          hint: { en: "Say yes, and ask what the members do here.", te: "అవునని, ఇక్కడ సభ్యులు ఏం చేస్తారో అడగండి." },
          replies: [
            { say: "Yes, please. What do members do here?", good: true, skill: "hobby" },
            { say: "Yes, please. What members do here?", good: false, skill: "hobby", fixIt: "question" },
          ],
        },
        {
          partner: "We play carrom and chess, and sing bhajans.",
          te: "మేము క్యారమ్, చెస్ ఆడతాం, భజనలు పాడతాం.",
          hint: { en: "Say which one you do well.", te: "వాటిలో మీకు ఏది బాగా వచ్చో చెప్పండి." },
          replies: [
            { say: "I'm good at carrom. I love playing it.", good: true, skill: "hobby" },
            { say: "I'm good in carrom. I love playing it.", good: false, skill: "hobby", fixIt: "preposition" },
            {
              say: "Carrom? That's a game for children.",
              good: false,
              skill: "hobby",
              react: { en: "Ha! Come and play with us first.", te: "హహ! ముందు మాతో ఒక్క ఆట ఆడి చూడండి." },
            },
          ],
        },
        {
          partner: "Great! We play carrom twice a week.",
          te: "చాలా మంచిది! మేము వారానికి రెండుసార్లు క్యారమ్ ఆడతాం.",
          hint: { en: "Ask which days they play.", te: "ఏ రోజుల్లో ఆడతారో అడగండి." },
          replies: [
            { say: "Which days do you play?", good: true, skill: "often" },
            { say: "Which days are you play?", good: false, skill: "often" },
          ],
        },
        {
          partner: "Tuesdays and Fridays, at five in the evening.",
          te: "మంగళవారం, శుక్రవారం, సాయంత్రం ఐదింటికి.",
          hint: { en: "Say that time is okay for you.", te: "ఆ సమయం మీకు పర్వాలేదని చెప్పండి." },
          replies: [
            { say: "That's fine. I don't mind coming at five.", good: true, skill: "often" },
            { say: "That's fine. I don't mind to come at five.", good: false, skill: "often" },
          ],
        },
        {
          partner: "Welcome to the club! See you on Tuesday.",
          te: "క్లబ్‌కి స్వాగతం! మంగళవారం కలుద్దాం.",
          hint: { en: "Thank him, and say goodbye until Tuesday.", te: "ఆయనకి థాంక్స్ చెప్పి, మంగళవారం కలుద్దామని చెప్పండి." },
          replies: [
            { say: "Thank you so much. See you on Tuesday.", good: true },
            { say: "Thank you so much. See you in Tuesday.", good: false, fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Weekend plans", te: "వీకెండ్ ప్లాన్లు" },
      scene: {
        en: "It is Friday. Your friend Fatima calls to ask about your weekend.",
        te: "ఈ రోజు శుక్రవారం. మీ స్నేహితురాలు ఫాతిమా గారు మీ వీకెండ్ గురించి అడగడానికి ఫోన్ చేశారు.",
      },
      partner: { en: "Fatima (friend)", te: "ఫాతిమా (స్నేహితురాలు)" },
      skills: [
        { id: "plan", label: { en: "Weekend plans", te: "వీకెండ్ ప్లాన్లు" } },
        { id: "film", label: { en: "Talking about films", te: "సినిమాల గురించి" } },
      ],
      turns: [
        {
          partner: "Hello! What are you doing this weekend?",
          te: "హలో! ఈ వీకెండ్ ఏం చేస్తున్నారు?",
          hint: { en: "Say your plan for Saturday: a cricket match on TV.", te: "శనివారం మీ ప్లాన్ చెప్పండి: TV లో క్రికెట్ మ్యాచ్." },
          replies: [
            { say: "I'm watching the match on Saturday.", good: true, skill: "plan" },
            { say: "I watching the match on Saturday.", good: false, skill: "plan", fixIt: "be" },
          ],
        },
        {
          partner: "Oh, you love cricket! And on Sunday?",
          te: "అవునా, మీకు క్రికెట్ అంటే చాలా ఇష్టం కదా! మరి ఆదివారం?",
          hint: { en: "Say you have no plans for Sunday.", te: "ఆదివారం మీకు ఏ పనీ లేదని చెప్పండి." },
          replies: [
            { say: "Nothing much. I'm free on Sunday.", good: true, skill: "plan" },
            { say: "Nothing much. I free on Sunday.", good: false, skill: "plan", fixIt: "be" },
          ],
        },
        {
          partner: "Shall we go to the new Telugu film?",
          te: "కొత్త తెలుగు సినిమాకి వెళ్దామా?",
          hint: { en: "Say yes, and ask her what the story is.", te: "సరే అని, కథ ఏంటో ఆవిడని అడగండి." },
          replies: [
            { say: "Sure. What is it about?", good: true, skill: "film" },
            { say: "Sure. What it is about?", good: false, skill: "film", fixIt: "question" },
            {
              say: "Telugu films? They are all boring.",
              good: false,
              skill: "film",
              react: { en: "Not this one! Everyone says it's very good.", te: "ఇది అలా ఉండదు! చాలా బాగుందని అందరూ అంటున్నారు." },
            },
          ],
        },
        {
          partner: "It's about an old man and his village.",
          te: "అది ఒక పెద్దాయన, ఆయన ఊరి గురించి.",
          hint: { en: "Say it sounds nice, and that you like stories like that.", te: "బాగుందని, అలాంటి కథలు మీకు ఇష్టమని చెప్పండి." },
          replies: [
            { say: "That sounds nice. I enjoy stories like that.", good: true, skill: "film" },
            { say: "That sounds nice. I am enjoying such stories always.", good: false, skill: "film", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Great! I'll book the tickets. Morning show?",
          te: "సరే! నేను టికెట్లు బుక్ చేస్తాను. మార్నింగ్ షో?",
          hint: { en: "Agree to the time, and thank her.", te: "ఆ సమయానికి సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, the morning show is fine. Thank you!", good: true, skill: "plan" },
            { say: "Yes, morning show is fine. Thank you!", good: false, skill: "plan", fixIt: "article" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 32, Day 6 (CURRICULUM §4): Conversation Day, a festival visit — visiting a friend on Diwali; inviting a neighbour for Sankranti. */
export const day: ConversationDay = {
  id: "w32-conversation",
  kind: "conversation",
  title: { en: "A Festival Visit", te: "పండుగ పలకరింపు" },
  summary: {
    en: "Use the whole week: visit a friend on Diwali, and invite a neighbour for Sankranti lunch.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: దీపావళి రోజు స్నేహితుల ఇంటికి వెళ్ళండి, సంక్రాంతి భోజనానికి పక్కింటి వారిని పిలవండి.",
  },
  topics: ["festivals", "neighbours", "food"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A Diwali visit", te: "దీపావళి పలకరింపు" },
    lines: [
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Happy Diwali, Srinivas! These sweets are for you.", te: "హ్యాపీ దీపావళి, శ్రీనివాస్ గారు! ఈ స్వీట్లు మీ కోసం." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Thank you! Wish you the same. Please come in.", te: "థాంక్యూ! మీకు కూడా అలాగే. లోపలికి రండి." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Your house looks beautiful with all these lamps!", te: "ఇన్ని దీపాలతో మీ ఇల్లు చాలా అందంగా ఉంది!" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Thank you. My brother and I decorated it yesterday.", te: "థాంక్యూ. నిన్న నేను, మా తమ్ముడు కలిసి అలంకరించాం." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "What did you do this morning?", te: "ఈ రోజు పొద్దున్న ఏం చేశారు?" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "We went to the temple. Then I made sweets.", te: "గుడికి వెళ్ళాం. తర్వాత నేను స్వీట్లు చేశాను." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "You made sweets? Please teach me one day!", te: "మీరు స్వీట్లు చేశారా? ఒకరోజు నాకు నేర్పించండి!" },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "Of course. Will you come for dinner on Sunday?", te: "తప్పకుండా. ఆదివారం రాత్రి భోజనానికి వస్తారా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Sorry, I can't make it. I have a wedding.", te: "Sorry అండీ, రాలేను. నాకు ఒక పెళ్ళి ఉంది." },
      { speaker: { en: "Srinivas", te: "శ్రీనివాస్" }, voice: "b", en: "No problem. Come on Monday, then!", te: "పర్లేదు. అయితే సోమవారం రండి!" },
    ],
    questions: [
      {
        prompt: { en: "Why is Fatima visiting Srinivas?", te: "ఫాతిమా గారు శ్రీనివాస్ గారి ఇంటికి ఎందుకు వచ్చారు?" },
        options: ["To wish him on Diwali", "To invite him to a wedding", "To congratulate him on a new job"],
        answer: 0,
      },
      {
        prompt: { en: "Who decorated the house?", te: "ఇంటిని ఎవరు అలంకరించారు?" },
        options: ["Srinivas and his brother", "Srinivas and Fatima", "Srinivas's cousins"],
        answer: 0,
      },
      {
        prompt: { en: "What did Srinivas do this morning?", te: "ఈ రోజు పొద్దున్న శ్రీనివాస్ గారు ఏం చేశారు?" },
        options: ["He went to the temple and made sweets.", "He decorated the house with lamps.", "He went to a wedding."],
        answer: 0,
      },
      {
        prompt: { en: "Why can't Fatima come on Sunday?", te: "ఫాతిమా గారు ఆదివారం ఎందుకు రాలేరు?" },
        options: ["She has a wedding.", "She has a hospital appointment.", "She is going to the temple."],
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
        en: "It is Christmas. Wish your neighbour Mary.",
        te: "ఈ రోజు క్రిస్మస్. పక్కింటి మేరీ గారికి శుభాకాంక్షలు చెప్పండి.",
      },
      expected: ["Wish you a merry Christmas!", "Merry Christmas, Mary!", "Merry Christmas!"],
      options: ["Wish you a merry Christmas!", "Wish you merry Christmas!", "Congratulations on Christmas!"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Your friend went to Tirupati for Dasara. Ask if they enjoyed the trip.",
        te: "మీ స్నేహితులు దసరాకి తిరుపతి వెళ్ళొచ్చారు. ప్రయాణం బాగా జరిగిందా అని అడగండి.",
      },
      expected: ["Did you enjoy the trip?", "Did you enjoy it?", "Did you like the trip?"],
      options: ["Did you enjoy the trip?", "Did you enjoyed the trip?", "You enjoyed the trip, no?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Tell your friend you lit twenty lamps on Diwali.",
        te: "దీపావళికి ఇరవై దీపాలు వెలిగించామని మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["We lit twenty lamps on Diwali.", "I lit twenty lamps on Diwali.", "We lit twenty lamps."],
      options: ["We lit twenty lamps on Diwali.", "We lit twenty lamp on Diwali.", "We light twenty lamps in Diwali."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Visiting a friend on Diwali", te: "దీపావళికి స్నేహితుల ఇంటికి" },
      scene: {
        en: "It is Diwali. You visit your friend Swapna with a box of sweets.",
        te: "ఈ రోజు దీపావళి. ఒక స్వీట్ బాక్స్ తీసుకుని మీ స్నేహితురాలు స్వప్న గారి ఇంటికి వెళ్ళారు.",
      },
      partner: { en: "Swapna (friend)", te: "స్వప్న (స్నేహితురాలు)" },
      skills: [
        { id: "wish", label: { en: "Festival wishes", te: "పండుగ శుభాకాంక్షలు" } },
        { id: "reply", label: { en: "Saying no kindly", te: "మర్యాదగా రాలేననడం" } },
      ],
      turns: [
        {
          partner: "Oh, welcome! Please come in.",
          te: "అరే, రండి రండి! లోపలికి రండి.",
          hint: { en: "Wish her on the festival, and give her the sweets.", te: "పండుగ శుభాకాంక్షలు చెప్పి, స్వీట్లు ఇవ్వండి." },
          replies: [
            { say: "Happy Diwali! These sweets are for you.", good: true, skill: "wish" },
            { say: "Happy Diwali! This sweets are for you.", good: false, skill: "wish" },
          ],
        },
        {
          partner: "Thank you! Wish you the same. Sit, please.",
          te: "థాంక్యూ! మీకు కూడా అలాగే. కూర్చోండి.",
          hint: { en: "Say something kind about her house and its lamps.", te: "ఆవిడ ఇల్లు, దీపాల గురించి మంచి మాట చెప్పండి." },
          replies: [
            { say: "Your house looks lovely with all the lamps!", good: true, skill: "wish" },
            { say: "Your house look lovely with all the lamps!", good: false, skill: "wish", fixIt: "he-she-s" },
          ],
        },
        {
          partner: "Thank you! What did you do this morning?",
          te: "థాంక్యూ! ఈ రోజు పొద్దున్న ఏం చేశారు?",
          hint: { en: "Tell her two things you did this morning.", te: "ఈ రోజు పొద్దున్న చేసిన రెండు పనులు చెప్పండి." },
          replies: [
            { say: "I went to the temple and visited my parents.", good: true },
            { say: "I go to the temple and visit my parents.", good: false },
          ],
        },
        {
          partner: "Lovely! Are you coming for the crackers tonight?",
          te: "బాగుంది! రాత్రి టపాసులు కాల్చడానికి వస్తున్నారా?",
          hint: { en: "Say sorry, you can't, and give a reason.", te: "Sorry చెప్పి, రాలేనని, కారణం చెప్పండి." },
          replies: [
            { say: "Sorry, I can't make it. I have guests at home.", good: true, skill: "reply" },
            { say: "Sorry, I can't able to come. I have guests.", good: false, skill: "reply", fixIt: "indian-english" },
            {
              say: "No. Crackers are a waste of money.",
              good: false,
              skill: "reply",
              react: { en: "Oh! Okay, then come for dinner some day.", te: "అవునా! సరే, అయితే ఒకరోజు భోజనానికి రండి." },
            },
          ],
        },
        {
          partner: "No problem. Take some sweets home, please!",
          te: "పర్లేదు. కొన్ని స్వీట్లు ఇంటికి తీసుకెళ్ళండి!",
          hint: { en: "Thank her, and wish her a happy festival once more.", te: "థాంక్స్ చెప్పి, మరోసారి పండుగ శుభాకాంక్షలు చెప్పండి." },
          replies: [
            { say: "Thank you! Happy Diwali once again!", good: true, skill: "wish" },
            { say: "Thank you! Wish you happy Diwali again!", good: false, skill: "wish", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Inviting a neighbour for Sankranti", te: "సంక్రాంతికి పక్కింటి వారిని పిలవడం" },
      scene: {
        en: "Sankranti is next week. Invite your neighbour Ramesh for lunch.",
        te: "వచ్చే వారం సంక్రాంతి. పక్కింటి రమేష్ గారిని భోజనానికి పిలవండి.",
      },
      partner: { en: "Ramesh (neighbour)", te: "రమేష్ (పక్కింటి ఆయన)" },
      voice: "b",
      skills: [{ id: "invite", label: { en: "Inviting", te: "పిలవడం" } }],
      turns: [
        {
          partner: "Hello! How are you? Ready for Sankranti?",
          te: "నమస్కారం! బాగున్నారా? సంక్రాంతికి రెడీనా?",
          hint: { en: "Say yes, and invite him for lunch on the festival day.", te: "అవునని చెప్పి, పండుగ రోజు భోజనానికి ఆయనని పిలవండి." },
          replies: [
            { say: "Yes! Would you like to come for lunch on Sankranti?", good: true, skill: "invite" },
            { say: "Yes! Would you like to come for lunch in Sankranti?", good: false, skill: "invite", fixIt: "preposition" },
          ],
        },
        {
          partner: "Thank you, I'd love to come! What time?",
          te: "థాంక్యూ, తప్పకుండా వస్తాను! ఎన్ని గంటలకి?",
          hint: { en: "Tell him a time in the afternoon.", te: "మధ్యాహ్నం ఒక సమయం చెప్పండి." },
          replies: [
            { say: "At one o'clock, after the pooja.", good: true, skill: "invite" },
            { say: "On one o'clock, after the pooja.", good: false, skill: "invite" },
          ],
        },
        {
          partner: "Can I bring anything?",
          te: "నేను ఏమైనా తీసుకురావాలా?",
          hint: { en: "Say no politely, and just ask him to come.", te: "ఏమీ వద్దని మర్యాదగా చెప్పి, వస్తే చాలని చెప్పండి." },
          replies: [
            { say: "No, nothing. Just come and enjoy!", good: true, skill: "invite" },
            {
              say: "Yes, bring a big box of sweets.",
              good: false,
              skill: "invite",
              react: { en: "Ha! Okay, okay. I will bring sweets.", te: "హహ! సరే, సరే. స్వీట్లు తీసుకొస్తాను." },
            },
          ],
        },
        {
          partner: "Okay! Who else is coming?",
          te: "సరే! ఇంకా ఎవరెవరు వస్తున్నారు?",
          hint: { en: "Tell him which relatives are coming, and from where.", te: "ఏ బంధువులు, ఎక్కడి నుండి వస్తున్నారో చెప్పండి." },
          replies: [
            { say: "My cousins are coming from Nellore.", good: true, skill: "invite" },
            { say: "My cousin are coming from Nellore.", good: false, skill: "invite", fixIt: "plural" },
          ],
        },
        {
          partner: "Wonderful. See you on Sankranti!",
          te: "చాలా బాగుంది. సంక్రాంతికి కలుద్దాం!",
          hint: { en: "Say goodbye, and that you'll see him then.", te: "వెళ్ళొస్తానని, అప్పుడు కలుద్దామని చెప్పండి." },
          replies: [
            { say: "See you then! Bye.", good: true, skill: "invite" },
            { say: "See you in Sankranti! Bye.", good: false, skill: "invite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

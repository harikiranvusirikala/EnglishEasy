import type { ConversationDay } from "../../types";

/** Week 47, Day 6 (CURRICULUM §5): Conversation Day — comparing two TVs with a shop assistant, and choosing an eye clinic with a friend. */
export const day: ConversationDay = {
  id: "w47-conversation",
  kind: "conversation",
  title: { en: "Buying a New TV", te: "కొత్త TV కొనడం" },
  summary: {
    en: "Use the whole week: compare two TVs with a shop assistant, and choose an eye clinic with a friend.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: షాపులో రెండు TV లు పోల్చండి, స్నేహితురాలితో కలిసి కంటి క్లినిక్ ఎంచుకోండి.",
  },
  topics: ["shopping", "technology", "money", "doctor"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Two TVs", te: "రెండు TV లు" },
    lines: [
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "Good evening, sir. Are you looking for a TV?", te: "నమస్కారం సార్. TV కోసం చూస్తున్నారా?" },
      {
        speaker: { en: "Narayana", te: "నారాయణ" },
        voice: "b",
        en: "Yes. My old TV stopped working. I've had it for fifteen years.",
        te: "అవును. నా పాత TV పనిచేయడం లేదు. పదిహేనేళ్ళుగా అది నా దగ్గర ఉంది.",
      },
      {
        speaker: { en: "Anitha", te: "అనిత" },
        voice: "a",
        en: "These two are very popular. This one is 32 inches, and that one is 43.",
        te: "ఈ రెండూ బాగా అమ్ముడవుతున్నాయి. ఇది 32 అంగుళాలు, అది 43.",
      },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Is the smaller one as good as the bigger one?", te: "చిన్నది కూడా పెద్దదాంత బాగుంటుందా?" },
      {
        speaker: { en: "Anitha", te: "అనిత" },
        voice: "a",
        en: "The picture is just as clear. But the sound is not as loud.",
        te: "బొమ్మ అంతే క్లియర్‌గా ఉంటుంది. కానీ సౌండ్ అంత గట్టిగా ఉండదు.",
      },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "My room is small. I'd rather not buy a very big TV.", te: "నా రూమ్ చిన్నది. మరీ పెద్ద TV కొనడం నాకు వద్దు." },
      {
        speaker: { en: "Anitha", te: "అనిత" },
        voice: "a",
        en: "Then the 32-inch one is better for you. It's much cheaper too.",
        te: "అయితే 32 అంగుళాలది మీకు మంచిది. ధర కూడా చాలా తక్కువ.",
      },
      { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "How much is it?", te: "దాని ధర ఎంత?" },
      { speaker: { en: "Anitha", te: "అనిత" }, voice: "a", en: "18,000 rupees, with a two-year warranty.", te: "18,000 రూపాయలు, రెండేళ్ళ warranty తో." },
      {
        speaker: { en: "Narayana", te: "నారాయణ" },
        voice: "b",
        en: "Good. I'll take the smaller one. Can you send it home tomorrow?",
        te: "బాగుంది. చిన్నదే తీసుకుంటాను. రేపు ఇంటికి పంపిస్తారా?",
      },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a TV shop", "At an eye clinic", "At a bank"],
        answer: 0,
      },
      {
        prompt: { en: "Why does Narayana need a new TV?", te: "నారాయణ గారికి కొత్త TV ఎందుకు కావాలి?" },
        options: ["His old TV stopped working.", "He wants a louder TV.", "His room is very big."],
        answer: 0,
      },
      {
        prompt: { en: "What is not as good in the smaller TV?", te: "చిన్న TV లో ఏది అంత బాగుండదు?" },
        options: ["The sound", "The picture", "The warranty"],
        answer: 0,
      },
      {
        prompt: { en: "Which TV does Narayana choose?", te: "నారాయణ గారు ఏ TV ఎంచుకున్నారు?" },
        options: ["The smaller one", "The bigger one", "Neither of them"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The shop assistant asks how old your TV is. You bought it ten years ago.",
        te: "మీ TV ఎంత పాతదని షాపు వారు అడుగుతున్నారు. మీరు దాన్ని పదేళ్ళ క్రితం కొన్నారు.",
      },
      expected: ["I've had it for ten years.", "I have had it for ten years.", "It's ten years old."],
      options: ["I've had it for ten years.", "I am having it for ten years.", "I have it since ten years."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell the shop assistant that your friend Mohan likes big TVs more.",
        te: "మీ స్నేహితుడు మోహన్ గారికి పెద్ద TV లే ఎక్కువ ఇష్టమని షాపు వారికి చెప్పండి.",
      },
      expected: ["Mohan prefers big TVs.", "My friend Mohan prefers big TVs.", "Mohan prefers bigger TVs."],
      options: ["Mohan prefers big TVs.", "Mohan prefer big TVs.", "Mohan is preferring big TVs."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your friend wants to visit the eye clinic with you on Sunday. You will be in Guntur then. Suggest Monday.",
        te: "ఆదివారం మీతో కలిసి కంటి క్లినిక్‌కి వెళ్ళాలని స్నేహితులు అనుకుంటున్నారు. ఆ రోజు మీరు గుంటూరులో ఉంటారు. సోమవారం సూచించండి.",
      },
      expected: [
        "Sorry, I'll be out of town on Sunday. How about Monday?",
        "Sorry, I'll be in Guntur on Sunday. How about Monday?",
        "I'd rather go on Monday.",
      ],
      options: [
        "Sorry, I'll be out of town on Sunday. How about Monday?",
        "Sorry, I'll be out of station on Sunday. How about Monday?",
        "Sorry, I'll be out of town in Sunday. How about Monday?",
      ],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Comparing two TVs", te: "రెండు TV లు పోల్చడం" },
      scene: {
        en: "You want a TV for your hall. At the shop, David shows you two TVs.",
        te: "మీ హాల్ కోసం ఒక TV కావాలి. షాపులో డేవిడ్ గారు మీకు రెండు TV లు చూపిస్తున్నారు.",
      },
      partner: { en: "David (shop assistant)", te: "డేవిడ్ (షాపులో పనిచేసేవారు)" },
      voice: "b",
      skills: [
        { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
        { id: "choose", label: { en: "Choosing", te: "ఎంచుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! Shall I show you our TVs?",
          te: "నమస్కారం! మా TV లు చూపించనా?",
          hint: { en: "Say yes, and say what size of room the TV is for.", te: "సరే అని, TV ఎలాంటి రూమ్ కోసమో చెప్పండి." },
          replies: [
            { say: "Yes, please. I need a TV for a small hall.", good: true, skill: "choose" },
            { say: "Yes, please. I need TV for small hall.", good: false, skill: "choose", fixIt: "article" },
          ],
        },
        {
          partner: "This one is 25,000. That one is 19,000, and it's the same size.",
          te: "ఇది 25,000. అది 19,000, సైజ్ కూడా అదే.",
          hint: { en: "Ask if the cheaper one is equally good.", te: "చవకది కూడా అంతే బాగుంటుందా అని అడగండి." },
          replies: [
            { say: "Is the cheaper one as good as this one?", good: true, skill: "compare" },
            { say: "Is that one just as good?", good: true, skill: "compare" },
            { say: "The cheaper one is as good as this one?", good: false, skill: "compare", fixIt: "question" },
          ],
        },
        {
          partner: "Almost. The picture is not as bright, but it's fine for a hall.",
          te: "దాదాపు. బొమ్మ అంత బ్రైట్‌గా ఉండదు, కానీ హాల్‌కి సరిపోతుంది.",
          hint: { en: "Say you like the cheaper one more, and ask about the warranty.", te: "చవకదే మీకు ఎక్కువ ఇష్టమని చెప్పి, warranty గురించి అడగండి." },
          replies: [
            { say: "I prefer the cheaper one. Does it have a warranty?", good: true, skill: "choose" },
            { say: "I am preferring the cheaper one. Does it have a warranty?", good: false, skill: "choose", fixIt: "state-ing" },
          ],
        },
        {
          partner: "Yes, two years. Shall we deliver it to your house?",
          te: "అవును, రెండేళ్ళు. మీ ఇంటికి డెలివరీ చేయమంటారా?",
          hint: { en: "Say no thanks: you would choose to take it now in an auto.", te: "వద్దని, ఇప్పుడే ఆటోలో తీసుకెళ్ళడమే మేలని చెప్పండి." },
          replies: [
            { say: "No, thank you. I'd rather take it now in an auto.", good: true, skill: "choose" },
            {
              say: "No. Your delivery people always break things.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Our team is very careful, I promise.", te: "అయ్యో! మా వాళ్ళు చాలా జాగ్రత్తగా తెస్తారు, నిజంగా." },
            },
          ],
        },
        {
          partner: "No problem. Please pay at the counter. Thank you!",
          te: "పర్వాలేదు. కౌంటర్‌లో డబ్బు కట్టండి. థాంక్యూ!",
          hint: { en: "Thank him for his help, and say goodbye.", te: "సాయం చేసినందుకు థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you for your help. Bye!", good: true, skill: "polite" },
            { say: "Thank you. I will revert back if there is a problem.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Choosing an eye clinic", te: "కంటి క్లినిక్ ఎంచుకోవడం" },
      scene: {
        en: "Your friend Sarala wants an eye check-up. She asks you to help her choose a clinic.",
        te: "మీ స్నేహితురాలు సరళ గారు కంటి పరీక్ష చేయించుకోవాలనుకుంటున్నారు. క్లినిక్ ఎంచుకోవడంలో సాయం చేయమంటున్నారు.",
      },
      partner: { en: "Sarala (your friend)", te: "సరళ (మీ స్నేహితురాలు)" },
      skills: [
        { id: "compare", label: { en: "Comparing", te: "పోల్చడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! I need an eye check-up. Which clinic is better?",
          te: "హాయ్! నాకు కంటి పరీక్ష చేయించుకోవాలి. ఏ క్లినిక్ మంచిది?",
          hint: { en: "Ask which clinics she is thinking of.", te: "ఏ క్లినిక్‌ల గురించి ఆలోచిస్తున్నారో అడగండి." },
          replies: [
            { say: "Which clinics are you thinking about?", good: true, skill: "compare" },
            { say: "Which ones do you have in mind?", good: true, skill: "compare" },
            { say: "Which clinics you are thinking about?", good: false, skill: "compare", fixIt: "question" },
          ],
        },
        {
          partner: "The new one in Gandhi Nagar, or the old one near the temple.",
          te: "గాంధీ నగర్‌లో కొత్తది, లేదా గుడి దగ్గర పాతది.",
          hint: { en: "Ask which one is nearer her house.", te: "వాళ్ళ ఇంటికి ఏది దగ్గరో అడగండి." },
          replies: [
            { say: "Which one is closer to your house?", good: true, skill: "compare" },
            { say: "Which one is closer from your house?", good: false, skill: "compare", fixIt: "preposition" },
          ],
        },
        {
          partner: "The temple one. But the new one has better machines.",
          te: "గుడి దగ్గరిది. కానీ కొత్త దాంట్లో మెషీన్లు ఇంకా బాగుంటాయి.",
          hint: {
            en: "Say the old clinic is equally good, and its doctor is very experienced.",
            te: "పాత క్లినిక్ కూడా అంతే బాగుంటుందని, అక్కడి డాక్టర్‌కి చాలా అనుభవం ఉందని చెప్పండి.",
          },
          replies: [
            { say: "The old clinic is just as good. Dr Fatima is very experienced.", good: true, skill: "compare" },
            { say: "The old clinic just as good. Dr Fatima is very experienced.", good: false, skill: "compare", fixIt: "be" },
          ],
        },
        {
          partner: "Hmm. The new clinic is far. I'd rather not take two buses.",
          te: "హ్మ్. కొత్త క్లినిక్ దూరం. రెండు బస్సులు మారడం నాకు వద్దు.",
          hint: { en: "Agree, and offer to go with her on Monday.", te: "ఒప్పుకుని, సోమవారం ఆవిడతో వస్తానని చెప్పండి." },
          replies: [
            { say: "I agree. Shall I come with you on Monday?", good: true, skill: "polite" },
            {
              say: "Then go alone. I have no time for this.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Sorry, I didn't mean to trouble you.", te: "అయ్యో! సారీ, మిమ్మల్ని ఇబ్బంది పెట్టాలని కాదు." },
            },
          ],
        },
        {
          partner: "That's so kind of you! Monday at ten, then?",
          te: "మీరు చాలా మంచివారు! అయితే సోమవారం పదింటికా?",
          hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
          replies: [
            { say: "Yes, Monday at ten. See you then!", good: true, skill: "polite" },
            { say: "Yes, Monday at ten. See you in Monday!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

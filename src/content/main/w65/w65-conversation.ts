import type { ConversationDay } from "../../types";

/** Week 65, Day 6 (CURRICULUM §5): Conversation Day — greeting the hosts at a wedding reception, and a condolence phone call to a friend. */
export const day: ConversationDay = {
  id: "w65-conversation",
  kind: "conversation",
  title: { en: "A Week of Functions", te: "ఫంక్షన్ల వారం" },
  summary: {
    en: "Use the whole week: greet the hosts at a wedding reception, and call a friend gently after sad news.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: పెళ్లి రిసెప్షన్‌లో ఇంటివారిని పలకరించండి, చెడ్డ వార్త విన్న స్నేహితురాలికి మృదువుగా ఫోన్ చేయండి.",
  },
  topics: ["festivals", "neighbours", "feelings", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A busy week", te: "బిజీ వారం" },
    lines: [
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Good morning, Sarala. I didn't see you at the park this week.", te: "గుడ్ మార్నింగ్ సరళ గారూ. ఈ వారం పార్క్‌లో మీరు కనిపించలేదు." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "It was a week of functions! I went to three.", te: "ఈ వారమంతా ఫంక్షన్లే! మూడింటికి వెళ్ళాను." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Three? Which ones?", te: "మూడా? ఏవేవి?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "On Monday, my cousin Kavitha's wedding. The bride looked lovely in red.", te: "సోమవారం మా కజిన్ కవిత పెళ్లి. ఎరుపు చీరలో పెళ్లికూతురు చాలా బాగున్నారు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "How nice! Please give her my best wishes.", te: "ఎంత బాగుంది! ఆవిడకి నా శుభాకాంక్షలు చెప్పండి." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "On Wednesday, Rahim's housewarming. His new flat is so bright and airy.", te: "బుధవారం రహీమ్ గారి గృహప్రవేశం. ఆయన కొత్త ఫ్లాట్ చాలా వెలుతురుగా, గాలి బాగా వచ్చేలా ఉంది." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "And the third?", te: "మరి మూడోది?" },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Sadly, a condolence visit. Mary's father passed away on Friday.", te: "బాధగా, ఒక పరామర్శ. మేరీ గారి నాన్నగారు శుక్రవారం కన్నుమూశారు." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Oh, I'm so sorry to hear that. He was a gentle man.", te: "అయ్యో, విని చాలా బాధగా ఉంది. ఆయన చాలా సౌమ్యులు." },
      { speaker: { en: "Sarala", te: "సరళ" }, voice: "a", en: "Yes. Mary said the colony's help meant a lot to her.", te: "అవును. కాలనీ వాళ్ళ సహాయం తనకి చాలా ఓదార్పునిచ్చిందని మేరీ గారు చెప్పారు." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Sarala's week of functions", "A trip to Tirupati", "A problem in the park"],
        answer: 0,
      },
      {
        prompt: { en: "Whose wedding did Sarala go to?", te: "సరళ గారు ఎవరి పెళ్లికి వెళ్ళారు?" },
        options: ["Her cousin Kavitha's", "Rahim's", "Mary's"],
        answer: 0,
      },
      {
        prompt: { en: "What is Rahim's new flat like?", te: "రహీమ్ గారి కొత్త ఫ్లాట్ ఎలా ఉంది?" },
        options: ["Bright and airy", "Small and dark", "Far from the park"],
        answer: 0,
      },
      {
        prompt: { en: "Why did Sarala visit Mary?", te: "సరళ గారు మేరీ గారి దగ్గరికి ఎందుకు వెళ్ళారు?" },
        options: ["Mary's father passed away.", "Mary moved to a new flat.", "Mary got married."],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "At a housewarming, praise the big, bright rooms.",
        te: "గృహప్రవేశంలో పెద్దగా, వెలుతురుగా ఉన్న గదుల్ని పొగడండి.",
      },
      expected: ["The rooms are so bright and spacious.", "The rooms are very spacious.", "The rooms are so bright."],
      options: ["The rooms are so bright and spacious.", "The rooms so bright and spacious.", "The rooms is so bright and spacious."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "A neighbour tells you his uncle passed away yesterday. Answer gently.",
        te: "తన బాబాయి గారు నిన్న కన్నుమూశారని పక్కింటాయన చెప్పారు. మృదువుగా జవాబు చెప్పండి.",
      },
      expected: ["I'm so sorry to hear about your uncle.", "I'm so sorry to hear that.", "I'm so sorry for your loss."],
      options: ["I'm so sorry to hear about your uncle.", "Oh, your uncle expired? Okay.", "I'm so sorry to hear for your uncle."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Offer to take food to your friend's house tomorrow.",
        te: "రేపు స్నేహితుల ఇంటికి భోజనం తీసుకొస్తానని చెప్పండి.",
      },
      expected: ["I can bring food over tomorrow.", "Shall I bring some food tomorrow?", "I can bring some food tomorrow."],
      options: ["I can bring food over tomorrow.", "I can brings food over tomorrow.", "I can bringing food over tomorrow."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Greeting the hosts", te: "ఇంటివారిని పలకరించడం" },
      scene: {
        en: "Your friend Gopal's son, Ravi, married Swapna today. You meet Gopal at the reception.",
        te: "మీ స్నేహితుడు గోపాల్ గారి అబ్బాయి రవికి ఈ రోజు స్వప్నతో పెళ్లయింది. రిసెప్షన్‌లో గోపాల్ గారిని కలిశారు.",
      },
      partner: { en: "Gopal (the groom's father)", te: "గోపాల్ (పెళ్లికొడుకు తండ్రి)" },
      voice: "b",
      skills: [
        { id: "wish", label: { en: "Giving wishes", te: "శుభాకాంక్షలు చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Welcome! I'm so glad you could come.",
          te: "రండి! మీరు రాగలిగినందుకు చాలా సంతోషం.",
          hint: { en: "Congratulate him on his son's wedding.", te: "ఆయన అబ్బాయి పెళ్లి సందర్భంగా అభినందనలు చెప్పండి." },
          replies: [
            { say: "Many congratulations on Ravi's wedding!", good: true, skill: "wish" },
            { say: "Many congratulations for Ravi's wedding!", good: false, skill: "wish", fixIt: "preposition" },
          ],
        },
        {
          partner: "Thank you. Did you see the couple? They're on the stage.",
          te: "థ్యాంక్స్. దంపతుల్ని చూశారా? స్టేజ్ మీద ఉన్నారు.",
          hint: { en: "Say yes, and say they look lovely together.", te: "చూశానని చెప్పి, ఇద్దరూ కలిసి చాలా బాగున్నారని చెప్పండి." },
          replies: [
            { say: "Yes! They make a lovely couple.", good: true, skill: "wish" },
            { say: "Yes! They make lovely couple.", good: false, skill: "wish", fixIt: "article" },
          ],
        },
        {
          partner: "Please meet Swapna's parents. They came from Nellore.",
          te: "స్వప్న తల్లిదండ్రుల్ని కలవండి. వాళ్ళు నెల్లూరు నుంచి వచ్చారు.",
          hint: { en: "Congratulate them, and praise the arrangements.", te: "వాళ్ళకి అభినందనలు చెప్పి, ఏర్పాట్లని పొగడండి." },
          replies: [
            { say: "Congratulations! The arrangements are wonderful.", good: true, skill: "polite" },
            { say: "Congratulations! The arrangements wonderful.", good: false, skill: "polite", fixIt: "be" },
            {
              say: "Congratulations! How much did all this cost?",
              good: false,
              skill: "polite",
              react: { en: "Oh! Let's not talk about money today.", te: "అయ్యో! ఈ రోజు డబ్బు విషయాలు వద్దండీ." },
            },
          ],
        },
        {
          partner: "Thank you. Please have dinner before you leave.",
          te: "థ్యాంక్స్. వెళ్ళే ముందు భోజనం చేసి వెళ్ళండి.",
          hint: { en: "Say you will, and bless the couple.", te: "తప్పకుండా అని చెప్పి, దంపతుల్ని దీవించండి." },
          replies: [
            { say: "Sure, thank you. May God bless the couple.", good: true, skill: "wish" },
            { say: "Sure, thank you. May God blessed the couple.", good: false, skill: "wish" },
          ],
        },
        {
          partner: "Thank you for coming. Have a safe journey home.",
          te: "వచ్చినందుకు థ్యాంక్స్. జాగ్రత్తగా ఇంటికి వెళ్ళండి.",
          hint: { en: "Thank him, praise the wedding, and say goodbye.", te: "థ్యాంక్స్ చెప్పి, పెళ్లిని పొగిడి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you. It was a lovely wedding. Goodbye!", good: true, skill: "polite" },
            { say: "Thank you. It was lovely wedding. Goodbye!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A condolence call", te: "పరామర్శ ఫోన్ కాల్" },
      scene: {
        en: "Your friend Mary's father passed away last night in Vijayawada. You call her.",
        te: "మీ స్నేహితురాలు మేరీ గారి నాన్నగారు నిన్న రాత్రి విజయవాడలో కన్నుమూశారు. మీరు ఆవిడకి ఫోన్ చేశారు.",
      },
      partner: { en: "Mary (your friend)", te: "మేరీ (మీ స్నేహితురాలు)" },
      skills: [
        { id: "comfort", label: { en: "Comforting gently", te: "మృదువుగా ఓదార్చడం" } },
        { id: "help", label: { en: "Offering help", te: "సహాయం చెప్పడం" } },
      ],
      turns: [
        {
          partner: "Hello?",
          te: "హలో?",
          hint: { en: "Greet her, and say you have heard the sad news.", te: "పలకరించి, ఆ బాధాకరమైన వార్త విన్నానని చెప్పండి." },
          replies: [
            { say: "Hello, Mary. I just heard the sad news. I'm so sorry.", good: true, skill: "comfort" },
            { say: "Hello, Mary. I heard your father expired.", good: false, skill: "comfort", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Thank you for calling. He passed away peacefully in his sleep.",
          te: "ఫోన్ చేసినందుకు థ్యాంక్స్. నిద్రలోనే ప్రశాంతంగా కన్నుమూశారు.",
          hint: { en: "Say something kind about her father.", te: "ఆవిడ నాన్నగారి గురించి ఒక మంచి మాట చెప్పండి." },
          replies: [
            { say: "He was a very gentle man. We will all miss him.", good: true, skill: "comfort" },
            { say: "He is a very gentle man. We will all miss him.", good: false, skill: "comfort" },
            {
              say: "He was eighty, no? Then it's okay.",
              good: false,
              skill: "comfort",
              react: { en: "At any age, it still hurts.", te: "ఏ వయసులో పోయినా బాధ బాధే కదండీ." },
            },
          ],
        },
        {
          partner: "My brother is coming from Hyderabad tonight.",
          te: "మా అన్నయ్య ఈ రాత్రి హైదరాబాద్ నుంచి వస్తున్నారు.",
          hint: { en: "Offer to pick him up from the station.", te: "ఆయన్ని స్టేషన్ నుంచి తీసుకొస్తానని చెప్పండి." },
          replies: [
            { say: "I can pick him up from the station.", good: true, skill: "help" },
            { say: "I can picking him up from the station.", good: false, skill: "help" },
          ],
        },
        {
          partner: "That would be a great help. Thank you.",
          te: "అది చాలా పెద్ద సహాయం. థ్యాంక్స్.",
          hint: { en: "Tell her to let you know if she needs anything else.", te: "ఇంకా ఏమైనా కావాలంటే చెప్పమని ఆవిడకి చెప్పండి." },
          replies: [
            { say: "Please let me know if you need anything else.", good: true, skill: "help" },
            { say: "Please let me know if you are needing anything else.", good: false, skill: "help", fixIt: "state-ing" },
          ],
        },
        {
          partner: "I will. Thank you for being there.",
          te: "తప్పకుండా. తోడుగా ఉన్నందుకు థ్యాంక్స్.",
          hint: { en: "Say all of you are with her, and say a gentle goodbye.", te: "మీరంతా ఆవిడకి తోడుగా ఉన్నారని చెప్పి, మెల్లగా బై చెప్పండి." },
          replies: [
            { say: "We are all with you, Mary. Take care.", good: true, skill: "comfort" },
            { say: "Okay, cheer up! Bye!", good: false, skill: "comfort" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 59, Day 6 (CURRICULUM §5): Conversation Day — a visitor from Chennai, recommending places, and finding a tailor who can finish a blouse quickly. */
export const day: ConversationDay = {
  id: "w59-conversation",
  kind: "conversation",
  title: { en: "A Visitor From Chennai", te: "చెన్నై నుంచి అతిథి" },
  summary: {
    en: "Use the whole week: recommend places to a visitor, and find a tailor who can finish a blouse quickly.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: అతిథికి మంచి చోట్లు చెప్పండి, బ్లౌజ్ త్వరగా కుట్టిచ్చే టైలర్‌ని వెతకండి.",
  },
  topics: ["travel", "shopping", "people"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Places to see in Vijayawada", te: "విజయవాడలో చూడాల్సిన చోట్లు" },
    lines: [
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Rani, thank you for having me. Vijayawada is so busy!", te: "రాణి గారూ, నన్ను మీ ఇంట్లో ఉండనిచ్చినందుకు థాంక్స్. విజయవాడ చాలా రద్దీగా ఉంది!" },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "You're welcome! Tomorrow I'll show you the places that I love.", te: "పర్లేదండీ! రేపు నాకు ఇష్టమైన చోట్లన్నీ మీకు చూపిస్తాను." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Great! First, I need a shop where I can buy a phone charger.", te: "బాగుంది! ముందు, ఫోన్ ఛార్జర్ కొనడానికి ఒక షాపు కావాలి." },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "There's a mobile shop near the bus stand which sells everything.", te: "బస్ స్టాండ్ దగ్గర అన్నీ అమ్మే ఒక మొబైల్ షాపు ఉంది." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Good. Which temple should I visit first?", te: "మంచిది. ముందు ఏ గుడికి వెళ్ళాలి?" },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "Kanaka Durga temple, on the hill. It's the one that everyone visits first.", te: "కొండ మీద ఉన్న కనకదుర్గ గుడి. అందరూ ముందు వెళ్ళేది అక్కడికే." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Also, my sister needs a tailor who can stitch a blouse by Friday.", te: "ఇంకా, మా చెల్లెలికి శుక్రవారం లోపల బ్లౌజ్ కుట్టిచ్చే టైలర్ కావాలి." },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "Go to Padma, whose shop is next to the sweet shop. She's very fast.", te: "స్వీట్ షాపు పక్కన షాపున్న పద్మ గారి దగ్గరికి వెళ్ళండి. ఆవిడ చాలా త్వరగా కుడతారు." },
      { speaker: { en: "David", te: "డేవిడ్" }, voice: "b", en: "Wonderful! And where can I eat the best pesarattu?", te: "అద్భుతం! మరి అన్నిటికంటే మంచి పెసరట్టు ఎక్కడ దొరుకుతుంది?" },
      { speaker: { en: "Rani", te: "రాణి" }, voice: "a", en: "At Sai Tiffins. It's the place where I go every Sunday.", te: "సాయి టిఫిన్స్‌లో. నేను ప్రతి ఆదివారం వెళ్ళేది అక్కడికే." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["Good places to visit and shop in the city", "A train ticket to Chennai", "A problem at the bank"],
        answer: 0,
      },
      {
        prompt: { en: "What does David need to buy first?", te: "డేవిడ్ గారు ముందు ఏం కొనాలి?" },
        options: ["A phone charger", "A blouse", "Some sweets"],
        answer: 0,
      },
      {
        prompt: { en: "Where is Padma's shop?", te: "పద్మ గారి షాపు ఎక్కడ ఉంది?" },
        options: ["Next to the sweet shop", "Near the bus stand", "On the hill"],
        answer: 0,
      },
      {
        prompt: { en: "When does Rani go to Sai Tiffins?", te: "రాణి గారు సాయి టిఫిన్స్‌కి ఎప్పుడు వెళ్తారు?" },
        options: ["Every Sunday", "Every Friday", "Every morning"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Your visitor needs a new SIM card. Tell her about the shop near the bus stand.",
        te: "మీ దగ్గరికి వచ్చిన అతిథికి కొత్త SIM కార్డ్ కావాలి. బస్ స్టాండ్ దగ్గర ఉన్న షాపు గురించి ఆవిడకి చెప్పండి.",
      },
      expected: [
        "There's a shop near the bus stand which sells SIM cards.",
        "There's a shop near the bus stand that sells SIM cards.",
        "The shop near the bus stand sells SIM cards.",
      ],
      options: [
        "There's a shop near the bus stand which sells SIM cards.",
        "There's a shop near the bus stand which sell SIM cards.",
        "There's a shop near the bus stand who sells SIM cards.",
      ],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Your visitor wants good biryani. Recommend the hotel where you had lunch last week.",
        te: "అతిథికి మంచి బిర్యానీ కావాలి. పోయిన వారం మీరు భోజనం చేసిన హోటల్‌ని సూచించండి.",
      },
      expected: [
        "Try the hotel where I had lunch last week.",
        "I'd recommend the hotel where I had lunch last week.",
        "The hotel where I had lunch last week is very good.",
      ],
      options: ["Try the hotel where I had lunch last week.", "Try hotel where I had lunch last week.", "Try the hotel which I had lunch last week."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your visitor asks how long you have known Padma, the tailor. Say ten years.",
        te: "టైలర్ పద్మ గారు మీకు ఎన్నాళ్ళుగా తెలుసని అతిథి అడుగుతున్నారు. పదేళ్ళు అని చెప్పండి.",
      },
      expected: ["I've known her for ten years.", "I have known her for ten years.", "For ten years."],
      options: ["I've known her for ten years.", "I am knowing her for ten years.", "I know her since ten years."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Places for a visitor", te: "అతిథికి మంచి చోట్లు" },
      scene: {
        en: "Ruth, a friend from Chennai, is staying in your town for a week. She asks you what to see.",
        te: "చెన్నై నుంచి మీ స్నేహితురాలు రూత్ గారు ఒక వారం మీ ఊర్లో ఉంటున్నారు. ఏం చూడాలని మిమ్మల్ని అడుగుతున్నారు.",
      },
      partner: { en: "Ruth (a friend from Chennai)", te: "రూత్ (చెన్నై నుంచి స్నేహితురాలు)" },
      skills: [
        { id: "recommend", label: { en: "Recommending places", te: "మంచి చోట్లు సూచించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning! I'm here for a week. What should I see first?",
          te: "గుడ్ మార్నింగ్! నేను ఇక్కడ ఒక వారం ఉంటాను. ముందు ఏం చూడాలి?",
          hint: { en: "Suggest the temple on the hill, the one everyone visits.", te: "అందరూ వెళ్ళే కొండ మీద గుడిని సూచించండి." },
          replies: [
            { say: "You should see the temple which is on the hill.", good: true, skill: "recommend" },
            { say: "The temple on the hill is the one that everyone visits first.", good: true, skill: "recommend" },
            { say: "You should see temple which is on the hill.", good: false, skill: "recommend", fixIt: "article" },
          ],
        },
        {
          partner: "Lovely. Is there a good place to buy sarees?",
          te: "బాగుంది. చీరలు కొనడానికి మంచి చోటు ఏదైనా ఉందా?",
          hint: { en: "Recommend the handloom shop that opened last year.", te: "పోయిన సంవత్సరం తెరిచిన handloom షాపుని సూచించండి." },
          replies: [
            { say: "Yes, the best one is the handloom shop that opened last year.", good: true, skill: "recommend" },
            { say: "Yes, the best one is the handloom shop who opened last year.", good: false, skill: "recommend" },
          ],
        },
        {
          partner: "I'd love to try some local food. Any ideas?",
          te: "ఇక్కడి భోజనం రుచి చూడాలని ఉంది. ఏదైనా సలహా?",
          hint: { en: "Suggest the tiffin centre where you eat pesarattu on Sundays.", te: "మీరు ఆదివారాలు పెసరట్టు తినే టిఫిన్ సెంటర్‌ని సూచించండి." },
          replies: [
            { say: "Try the tiffin centre where I eat pesarattu every Sunday.", good: true, skill: "recommend" },
            {
              say: "Our food? It's too spicy for people from Chennai.",
              good: false,
              skill: "polite",
              react: { en: "Ha! Chennai food is spicy too, you know.", te: "హహ! చెన్నై భోజనం కూడా కారంగానే ఉంటుంది తెలుసా." },
            },
          ],
        },
        {
          partner: "Thank you! You know this town very well.",
          te: "థాంక్స్! మీకు ఈ ఊరు బాగా తెలుసు.",
          hint: { en: "Say you have lived here all your life, and wish her a good stay.", te: "మీరు చిన్నప్పటి నుంచీ ఇక్కడే ఉంటున్నారని చెప్పి, ఆవిడ ఇక్కడ బాగా గడపాలని కోరుకోండి." },
          replies: [
            { say: "I've lived here all my life. Enjoy your stay!", good: true, skill: "polite" },
            { say: "I am living here all my life. Enjoy your stay!", good: false, skill: "polite", fixIt: "duration" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A blouse by Friday", te: "శుక్రవారానికల్లా బ్లౌజ్" },
      scene: {
        en: "Your cousin is visiting for a wedding on Saturday. You take her blouse cloth to Gopal, a tailor your friend Swapna knows.",
        te: "శనివారం పెళ్ళి కోసం మీ కజిన్ వచ్చారు. మీ స్నేహితురాలు స్వప్న గారికి తెలిసిన టైలర్ గోపాల్ గారి దగ్గరికి ఆవిడ బ్లౌజ్ బట్ట తీసుకెళ్ళారు.",
      },
      partner: { en: "Gopal (a tailor)", te: "గోపాల్ (టైలర్)" },
      voice: "b",
      skills: [
        { id: "ask", label: { en: "Asking for quick work", te: "త్వరగా పని చేయమని అడగడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! Welcome to Gopal Tailors. How can I help you?",
          te: "నమస్కారం! గోపాల్ టైలర్స్‌కి స్వాగతం. ఏం కావాలండీ?",
          hint: { en: "Greet him, and say your friend Swapna told you about his shop.", te: "నమస్కారం చెప్పి, మీ స్నేహితురాలు స్వప్న గారు ఈ షాపు గురించి చెప్పారని అనండి." },
          replies: [
            { say: "Good evening. My friend Swapna told me about your shop.", good: true, skill: "polite" },
            { say: "Good evening. Myself Kiran. Swapna sent me.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Oh, Swapna! She's a regular customer. What do you need?",
          te: "ఓ, స్వప్న గారా! ఆవిడ మా రెగ్యులర్ కస్టమర్. మీకు ఏం కావాలి?",
          hint: { en: "Say you need someone who can stitch a blouse by Friday.", te: "శుక్రవారానికల్లా బ్లౌజ్ కుట్టగలిగేవారు కావాలని చెప్పండి." },
          replies: [
            { say: "I need a tailor who can stitch a blouse by Friday.", good: true, skill: "ask" },
            { say: "Could you stitch this blouse by Friday, please?", good: true, skill: "ask" },
            { say: "I need a tailor which can stitch a blouse by Friday.", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Friday is difficult. I have many orders this week.",
          te: "శుక్రవారం కష్టం. ఈ వారం నాకు చాలా ఆర్డర్లు ఉన్నాయి.",
          hint: { en: "Say you understand, and explain the wedding is on Saturday.", te: "అర్థమైందని చెప్పి, పెళ్ళి శనివారం అని వివరించండి." },
          replies: [
            { say: "I understand, but she needs it for a wedding on Saturday.", good: true, skill: "ask" },
            {
              say: "Swapna said you are fast. Was she lying?",
              good: false,
              skill: "polite",
              react: { en: "No, no! Okay, I'll try my best for you.", te: "అయ్యో, అలా కాదండీ! సరే, మీ కోసం గట్టిగా ప్రయత్నిస్తాను." },
            },
          ],
        },
        {
          partner: "All right. I'll finish it by Friday evening.",
          te: "సరే. శుక్రవారం సాయంత్రానికల్లా పూర్తి చేస్తాను.",
          hint: { en: "Thank him, and ask what time you should come.", te: "థాంక్స్ చెప్పి, ఎన్నింటికి రావాలని అడగండి." },
          replies: [
            { say: "Thank you so much! What time should I come?", good: true, skill: "polite" },
            { say: "Thank you so much! What time I should come?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "Come after six. It will be ready.",
          te: "ఆరు తర్వాత రండి. రెడీగా ఉంటుంది.",
          hint: { en: "Agree, thank him again, and say goodbye.", te: "సరే అని, మళ్ళీ థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Okay, I'll come after six. Thank you, bye!", good: true, skill: "polite" },
            { say: "Okay, I'll coming after six. Thank you, bye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

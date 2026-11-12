import type { ConversationDay } from "../../types";

/** Week 64, Day 6 (CURRICULUM §5): Conversation Day — guests for lunch; a visitor from abroad, and food at a small housewarming. */
export const day: ConversationDay = {
  id: "w64-conversation",
  kind: "conversation",
  title: { en: "Guests for Lunch", te: "భోజనానికి అతిథులు" },
  summary: {
    en: "Use the whole week: welcome a guest, offer food and drinks, serve a little more, and see your guest off.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: అతిథిని ఆహ్వానించండి, తినడానికి, తాగడానికి ఇవ్వండి, ఇంకొంచెం వడ్డించండి, సాగనంపండి.",
  },
  topics: ["home", "food", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Lunch with a new neighbour", te: "కొత్త పక్కింటాయనతో భోజనం" },
    lines: [
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Welcome, Joseph! Please come in. Make yourself at home.", te: "రండి జోసెఫ్ గారూ! లోపలికి రండి. మీ ఇల్లు లాగే హాయిగా ఉండండి." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Thank you, Fatima. These flowers are for you.", te: "థ్యాంక్స్ ఫాతిమా గారూ. ఈ పూలు మీకోసం." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "How kind! Would you like some water or buttermilk first?", te: "ఎంత మంచివారు! ముందు మంచినీళ్ళు గానీ మజ్జిగ గానీ తీసుకుంటారా?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Buttermilk, please. It's very hot today.", te: "మజ్జిగ ఇవ్వండి. ఈ రోజు చాలా ఎండగా ఉంది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Lunch is ready. Please help yourself to the rice, dal and curries.", te: "భోజనం రెడీ. అన్నం, పప్పు, కూరలు మొహమాటపడకుండా వడ్డించుకోండి." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Everything is delicious! Can I have a little more dal?", te: "అన్నీ చాలా రుచిగా ఉన్నాయి! ఇంకొంచెం పప్పు వేసుకోవచ్చా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Of course. And have a few gulab jamuns after that.", te: "తప్పకుండా. తర్వాత కొన్ని గులాబ్ జామూన్లు కూడా తీసుకోండి." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Just one, please. I'm full. How do you make this dal?", te: "ఒక్కటి చాలండి. కడుపు నిండిపోయింది. ఈ పప్పు ఎలా చేస్తారు?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "It's easy. First, boil the dal. Then add tomatoes and a little tamarind.", te: "చాలా సులువు. ముందు పప్పు ఉడికించండి. తర్వాత టమాటాలు, కొంచెం చింతపండు వేయండి." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I'll try it on Sunday. Thank you for a lovely lunch!", te: "ఆదివారం చేసి చూస్తాను. మంచి భోజనం పెట్టినందుకు థ్యాంక్స్!" },
    ],
    questions: [
      {
        prompt: { en: "What is happening?", te: "ఇక్కడ ఏం జరుగుతోంది?" },
        options: ["Joseph is having lunch at Fatima's home.", "Fatima is buying food at a shop.", "Joseph is cooking for a party."],
        answer: 0,
      },
      {
        prompt: { en: "What does Joseph drink first?", te: "జోసెఫ్ గారు ముందు ఏం తాగుతారు?" },
        options: ["Buttermilk", "Filter coffee", "Tea"],
        answer: 0,
      },
      {
        prompt: { en: "What does Joseph want a little more of?", te: "జోసెఫ్ గారికి ఇంకొంచెం ఏం కావాలి?" },
        options: ["Dal", "Rice", "Gulab jamuns"],
        answer: 0,
      },
      {
        prompt: { en: "What goes into the dal after boiling?", te: "పప్పు ఉడికాక అందులో ఏం వేస్తారు?" },
        options: ["Tomatoes and a little tamarind", "Milk and sugar", "Onions and ghee"],
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
        en: "A guest has just sat down in your home. Ask what she would like to drink.",
        te: "ఒక అతిథి ఇప్పుడే మీ ఇంట్లో కూర్చున్నారు. ఏం తాగుతారో అడగండి.",
      },
      expected: ["What would you like to drink?", "Would you like something to drink?", "What can I get you?"],
      options: ["What would you like to drink?", "What you would like to drink?", "What would you like to drinking?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your guest loves the vadas. Offer her two or three more.",
        te: "మీ అతిథికి వడలు బాగా నచ్చాయి. ఇంకో రెండు మూడు తీసుకోమనండి.",
      },
      expected: ["Please have a few more vadas.", "Please have a few more.", "Have a few more vadas."],
      options: ["Please have a few more vadas.", "Please have a few more vada.", "Please have a little more vadas."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "Your host asks: Don't you like spicy food? You love it. Answer.",
        te: "ఇంటివారు Don't you like spicy food? అని అడిగారు. మీకు కారం అంటే చాలా ఇష్టం. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I do. I love it.", "Yes, I do.", "Yes, I love spicy food."],
      options: ["Yes, I do. I love it.", "No, I like it very much.", "Yes, I don't. I love it."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A visitor from abroad", te: "విదేశం నుంచి అతిథి" },
      scene: {
        en: "Your friend's colleague Mary is visiting from London. She comes to your home for lunch.",
        te: "మీ స్నేహితుడి సహోద్యోగి మేరీ గారు లండన్ నుంచి వచ్చారు. భోజనానికి మీ ఇంటికి వచ్చారు.",
      },
      partner: { en: "Mary (your friend's colleague)", te: "మేరీ (మీ స్నేహితుడి సహోద్యోగి)" },
      skills: [
        { id: "host", label: { en: "Looking after a guest", te: "అతిథిని చూసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Thank you for inviting me. I've heard so much about Andhra food!",
          te: "హలో! పిలిచినందుకు థ్యాంక్స్. ఆంధ్ర భోజనం గురించి చాలా విన్నాను!",
          hint: { en: "Welcome her, and ask her to come in and relax.", te: "ఆవిడకి స్వాగతం చెప్పి, లోపలికి వచ్చి హాయిగా ఉండమనండి." },
          replies: [
            { say: "Welcome, Mary! Please come in. Make yourself at home.", good: true, skill: "host" },
            { say: "Welcome, Mary! Please come in. Make yourself in home.", good: false, skill: "host", fixIt: "preposition" },
          ],
        },
        {
          partner: "Thank you. Your home is so cool and quiet.",
          te: "థ్యాంక్స్. మీ ఇల్లు చల్లగా, ప్రశాంతంగా ఉంది.",
          hint: { en: "Offer her something to drink.", te: "తాగడానికి ఏమైనా ఇవ్వండి." },
          replies: [
            { say: "Would you like some buttermilk or filter coffee?", good: true, skill: "host" },
            { say: "Can I get you something to drink?", good: true, skill: "host" },
            {
              say: "You people from London drink only tea, no?",
              good: false,
              skill: "polite",
              react: { en: "Ha! Not always. I love coffee too!", te: "హహ! ఎప్పుడూ కాదండీ. నాకు కాఫీ కూడా ఇష్టమే!" },
            },
          ],
        },
        {
          partner: "Filter coffee, please. I've never had it before.",
          te: "ఫిల్టర్ కాఫీ ఇవ్వండి. ఇంతకు ముందు ఎప్పుడూ తాగలేదు.",
          hint: { en: "Later, say lunch is ready, and tell her to take what she likes.", te: "తర్వాత, భోజనం రెడీ అని చెప్పి, ఇష్టమైనది తీసుకోమనండి." },
          replies: [
            { say: "Lunch is ready. Please help yourself.", good: true, skill: "host" },
            { say: "Lunch is ready. Please take whatever you like.", good: true, skill: "host" },
            { say: "Lunch ready. Please help yourself.", good: false, skill: "host", fixIt: "be" },
          ],
        },
        {
          partner: "Everything is lovely, but this curry is very spicy!",
          te: "అన్నీ బాగున్నాయి, కానీ ఈ కూర చాలా కారంగా ఉంది!",
          hint: { en: "Say sorry, and offer her some curd to cool her mouth.", te: "సారీ చెప్పి, కారం తగ్గడానికి కొంచెం పెరుగు ఇవ్వండి." },
          replies: [
            { say: "Sorry! Would you like a little curd with it?", good: true, skill: "host" },
            { say: "Sorry! Would you like a few curd with it?", good: false, skill: "host", fixIt: "plural" },
          ],
        },
        {
          partner: "Yes, please. That's much better. Thank you for a wonderful lunch!",
          te: "అలాగే, ఇవ్వండి. ఇప్పుడు బాగుంది. అద్భుతమైన భోజనం పెట్టినందుకు థ్యాంక్స్!",
          hint: { en: "Reply kindly, and ask her to visit again.", te: "మర్యాదగా జవాబిచ్చి, మళ్ళీ రమ్మనండి." },
          replies: [
            { say: "My pleasure, Mary. Please visit again soon.", good: true, skill: "polite" },
            { say: "My pleasure, Mary. Please visiting again soon.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A small housewarming", te: "చిన్న గృహప్రవేశం" },
      scene: {
        en: "You have moved into a new flat. You invited a few friends for a small housewarming. Your friend Imran arrives.",
        te: "మీరు కొత్త ఫ్లాట్‌లోకి మారారు. చిన్న గృహప్రవేశానికి కొందరు స్నేహితుల్ని పిలిచారు. మీ స్నేహితుడు ఇమ్రాన్ గారు వచ్చారు.",
      },
      partner: { en: "Imran (your friend)", te: "ఇమ్రాన్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "host", label: { en: "Offering food", te: "తినడానికి ఇవ్వడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Congratulations on your new flat! This is a small gift for you.",
          te: "కొత్త ఫ్లాట్ తీసుకున్నందుకు అభినందనలు! ఇది మీకోసం చిన్న బహుమతి.",
          hint: { en: "Thank him for the gift, and ask him to come in.", te: "బహుమతికి థ్యాంక్స్ చెప్పి, లోపలికి రమ్మనండి." },
          replies: [
            { say: "Thank you so much, Imran! Please come in.", good: true, skill: "polite" },
            { say: "Thanks you so much, Imran! Please come in.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "What a bright flat! It gets lots of light and air.",
          te: "ఫ్లాట్ ఎంత వెలుతురుగా ఉందో! గాలి, వెలుతురు బాగా వస్తున్నాయి.",
          hint: { en: "Thank him, and offer him some sweets.", te: "థ్యాంక్స్ చెప్పి, స్వీట్లు తీసుకోమనండి." },
          replies: [
            { say: "Thank you! Would you like some sweets?", good: true, skill: "host" },
            { say: "Thank you! Please help yourself to the sweets.", good: true, skill: "host" },
            { say: "Thank you! You will take some sweets?", good: false, skill: "host", fixIt: "question" },
          ],
        },
        {
          partner: "Just one, please. I have diabetes, so I eat very few sweets.",
          te: "ఒక్కటి చాలండి. నాకు షుగర్ ఉంది, అందుకే స్వీట్లు చాలా తక్కువ తింటాను.",
          hint: { en: "Say that's fine, and offer him something that is not sweet.", te: "పర్లేదని చెప్పి, తీపి కాని ఏదైనా ఇవ్వండి." },
          replies: [
            { say: "No problem. Can I get you a samosa instead?", good: true, skill: "host" },
            {
              say: "One sweet won't do anything. Take two!",
              good: false,
              skill: "polite",
              react: { en: "Ha! My doctor won't agree with you.", te: "హహ! మా డాక్టర్ గారు మీతో ఒప్పుకోరు." },
            },
          ],
        },
        {
          partner: "A samosa would be nice. Who else is coming today?",
          te: "సమోసా బాగుంటుంది. ఈ రోజు ఇంకా ఎవరెవరు వస్తున్నారు?",
          hint: { en: "Say some friends from your old colony are coming.", te: "మీ పాత కాలనీ నుంచి కొందరు స్నేహితులు వస్తున్నారని చెప్పండి." },
          replies: [
            { say: "A few friends from my old colony are coming.", good: true, skill: "host" },
            { say: "A little friends from my old colony are coming.", good: false, skill: "host", fixIt: "plural" },
          ],
        },
        {
          partner: "Lovely. I'm so happy for you. Your new home is beautiful!",
          te: "బాగుంది. మీ కోసం చాలా సంతోషంగా ఉంది. మీ కొత్త ఇల్లు చాలా అందంగా ఉంది!",
          hint: { en: "Thank him, and ask him to relax, as in his own home.", te: "థ్యాంక్స్ చెప్పి, సొంత ఇంట్లో లాగా హాయిగా ఉండమనండి." },
          replies: [
            { say: "Thank you, Imran. Please make yourself at home.", good: true, skill: "polite" },
            { say: "Thank you, Imran. Please make you at home.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

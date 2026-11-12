import type { ConversationDay } from "../../types";

/** Week 54, Day 6 (CURRICULUM §5): Conversation Day — tea with old friends (stories and opinions), then returning a gift on the way to the clinic. */
export const day: ConversationDay = {
  id: "w54-conversation",
  kind: "conversation",
  title: { en: "Tea With Old Friends", te: "పాత స్నేహితులతో టీ" },
  summary: {
    en: "Use Weeks 41 to 53: swap stories and opinions with old friends over tea, then exchange a gift on the way to the clinic.",
    te: "41 నుంచి 53 వారాల్లో నేర్చుకున్నదంతా వాడండి: పాత స్నేహితులతో టీ తాగుతూ కథలు, అభిప్రాయాలు పంచుకోండి; క్లినిక్‌కి వెళ్ళే దారిలో ఒక బహుమతి మార్చుకోండి.",
  },
  topics: ["people", "shopping", "health"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Old friends meet", te: "పాత స్నేహితుల కలయిక" },
    lines: [
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "Ramesh! I haven't seen you for months. How have you been?", te: "రమేష్ గారూ! నెలల తరబడి మిమ్మల్ని చూడలేదు. ఎలా ఉన్నారు?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Fine, thanks. I've been walking every morning, on the doctor's advice.", te: "బాగున్నాను, థాంక్స్. డాక్టర్ గారి సలహా మీద రోజూ పొద్దున నడుస్తున్నాను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "That's good. Do you remember? We used to walk to college together.", te: "మంచిది. గుర్తుందా? మనం కాలేజీకి కలిసి నడిచి వెళ్ళేవాళ్ళం." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Of course! One day it rained, and we got completely wet.", te: "అవును! ఒక రోజు వర్షం పడింది, మనం పూర్తిగా తడిసిపోయాం." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "And you lost one sandal in the mud!", te: "మీ చెప్పు ఒకటి బురదలో పోయింది కూడా!" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Ha, yes! Tell me, do you like your new flat?", te: "హా, అవును! చెప్పండి, మీ కొత్త flat నచ్చిందా?" },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "I think it's quieter than our old street, but not as friendly.", te: "మన పాత వీధి కంటే ప్రశాంతంగా ఉంది, కానీ అక్కడంత ఆత్మీయత లేదనిపిస్తుంది." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "I see. If you're free on Sunday, I'll show you our park.", te: "అలాగా. ఆదివారం మీకు వీలుంటే, మా పార్క్ చూపిస్తాను." },
      { speaker: { en: "Swapna", te: "స్వప్న" }, voice: "a", en: "I'd love that. If it doesn't rain, I'll come at seven.", te: "తప్పకుండా. వర్షం పడకపోతే, ఏడింటికి వస్తాను." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Wonderful. Now, one more cup of tea before you go?", te: "చాలా బాగుంది. వెళ్ళే ముందు ఇంకో కప్పు టీ?" },
    ],
    questions: [
      {
        prompt: { en: "Who are the two speakers?", te: "మాట్లాడుతున్న ఇద్దరూ ఎవరు?" },
        options: ["Old friends meeting after a long time", "A shopkeeper and a customer", "A doctor and a patient"],
        answer: 0,
      },
      {
        prompt: { en: "Why has Ramesh been walking every morning?", te: "రమేష్ గారు రోజూ పొద్దున ఎందుకు నడుస్తున్నారు?" },
        options: ["On the doctor's advice", "For a walking competition", "To meet Swapna"],
        answer: 0,
      },
      {
        prompt: { en: "What did Ramesh lose in the mud?", te: "రమేష్ గారు బురదలో ఏం పోగొట్టుకున్నారు?" },
        options: ["One sandal", "His umbrella", "His college bag"],
        answer: 0,
      },
      {
        prompt: { en: "When will Swapna come to the park?", te: "స్వప్న గారు పార్క్‌కి ఎప్పుడు వస్తారు?" },
        options: ["Sunday at seven", "Saturday at seven", "Sunday at eleven"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "negative-answer",
      situation: {
        en: "An old friend asks: You didn't come to the school meet? You didn't go.",
        te: "'You didn't come to the school meet?' అని పాత స్నేహితులు అడుగుతున్నారు. మీరు వెళ్ళలేదు.",
      },
      expected: ["No, I didn't. I was out of town.", "No, I didn't.", "No, I couldn't come."],
      options: ["No, I didn't. I was out of town.", "Yes, I didn't. I was out of town.", "No, I didn't. I was out of station."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell your friend that your neighbour Satish makes the best biryani in the colony.",
        te: "మీ పక్కింటి సతీష్ గారు కాలనీలో అందరికంటే బాగా బిర్యానీ చేస్తారని స్నేహితులకి చెప్పండి.",
      },
      expected: ["Satish makes the best biryani in the colony.", "My neighbour Satish makes the best biryani.", "He makes the best biryani in the colony."],
      options: ["Satish makes the best biryani in the colony.", "Satish make the best biryani in the colony.", "Satish makes the most best biryani in the colony."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "At the clinic, you have been waiting since four. Ask politely how much longer it will take.",
        te: "క్లినిక్‌లో మీరు నాలుగింటి నుంచి ఎదురుచూస్తున్నారు. ఇంకా ఎంతసేపు పడుతుందో మర్యాదగా అడగండి.",
      },
      expected: [
        "Excuse me, how much longer will it take?",
        "How much longer will it take, please?",
        "Excuse me, I've been waiting since four. How much longer?",
      ],
      options: ["Excuse me, how much longer will it take?", "Excuse me, how much longer it will take?", "Excuse me, how much more long will it take?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Stories and opinions over tea", te: "టీ తాగుతూ కథలు, అభిప్రాయాలు" },
      scene: {
        en: "You meet your old school friend Srinivas at a tea stall after many years. Catch up over tea.",
        te: "చాలా ఏళ్ళ తర్వాత మీ పాత స్కూల్ స్నేహితుడు శ్రీనివాస్ గారు టీ స్టాల్ దగ్గర కలిశారు. టీ తాగుతూ కబుర్లు చెప్పుకోండి.",
      },
      partner: { en: "Srinivas (an old friend)", te: "శ్రీనివాస్ (పాత స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "story", label: { en: "Telling a story", te: "కథ చెప్పడం" } },
        { id: "opinion", label: { en: "Giving an opinion", te: "అభిప్రాయం చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello, old friend! It's been so long. How have you been?",
          te: "హలో! మిమ్మల్ని చూసి ఎంత కాలమైంది! ఎలా ఉన్నారు?",
          hint: { en: "Greet him warmly, and say you have been well.", te: "ఆప్యాయంగా పలకరించి, బాగున్నారని చెప్పండి." },
          replies: [
            { say: "Hello! It's so good to see you. I've been very well.", good: true, skill: "polite" },
            { say: "I've been fine, thank you! And you?", good: true, skill: "polite" },
            {
              say: "Hello! I am fine. What is your good name again?",
              good: false,
              skill: "polite",
              fixIt: "indian-english",
              react: { en: "Ha! You've forgotten me? It's Srinivas, from school!", te: "హా! నన్ను మర్చిపోయారా? నేను శ్రీనివాస్, స్కూల్ నుంచి!" },
            },
          ],
        },
        {
          partner: "Do you remember our school days in Nellore?",
          te: "నెల్లూరులో మన స్కూల్ రోజులు గుర్తున్నాయా?",
          hint: { en: "Say yes, and tell one thing you both did again and again.", te: "అవునని, మీరిద్దరూ మళ్ళీ మళ్ళీ చేసే ఒక పని చెప్పండి." },
          replies: [
            { say: "Of course! We used to play cricket after school every day.", good: true, skill: "story" },
            { say: "Of course! We were playing cricket after school daily.", good: false, skill: "story", fixIt: "state-ing" },
          ],
        },
        {
          partner: "And do you remember the day the headmaster caught us?",
          te: "హెడ్‌మాస్టర్ గారు మనల్ని పట్టుకున్న రోజు గుర్తుందా?",
          hint: { en: "Say yes, and what you were doing when he saw you.", te: "అవునని, ఆయన చూసినప్పుడు మీరు ఏం చేస్తున్నారో చెప్పండి." },
          replies: [
            { say: "Yes! We were climbing the wall when he saw us.", good: true, skill: "story" },
            { say: "Yes! We climbed the wall when he was seeing us.", good: false, skill: "story" },
          ],
        },
        {
          partner: "Ha! So, what do you think of the new bus stand here?",
          te: "హా! సరే, ఇక్కడి కొత్త బస్ స్టాండ్ గురించి మీకేమనిపిస్తోంది?",
          hint: { en: "Give your opinion, with a reason.", te: "మీ అభిప్రాయం, ఒక కారణంతో చెప్పండి." },
          replies: [
            { say: "I think it's very useful, because it's clean and big.", good: true, skill: "opinion" },
            { say: "In my opinion, it's much better than the old one.", good: true, skill: "opinion" },
            { say: "I am thinking it is very useful.", good: false, skill: "opinion" },
          ],
        },
        {
          partner: "I agree. Shall we meet here again next week?",
          te: "నిజమే. వచ్చే వారం మళ్ళీ ఇక్కడ కలుద్దామా?",
          hint: { en: "Agree, and say what you will do if it rains.", te: "ఒప్పుకుని, వర్షం పడితే ఏం చేస్తారో చెప్పండి." },
          replies: [
            { say: "Sure! If it rains, I'll call you.", good: true, skill: "polite" },
            { say: "Sure! If it will rain, I'll call you.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Exchanging a gift", te: "బహుమతి మార్చుకోవడం" },
      scene: {
        en: "A relative gave you a kurta as a gift, but it is too small. You take it back to the shop on your way to the clinic.",
        te: "మీ బంధువు ఒకరు మీకు ఒక కుర్తా బహుమతిగా ఇచ్చారు, కానీ అది చాలా చిన్నది. క్లినిక్‌కి వెళ్ళే దారిలో దాన్ని షాపుకి తీసుకెళ్ళారు.",
      },
      partner: { en: "Kavitha (a shop assistant)", te: "కవిత (షాప్ అసిస్టెంట్)" },
      skills: [
        { id: "explain", label: { en: "Explaining", te: "వివరించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! How can I help you?",
          te: "నమస్కారం! చెప్పండి, ఏం కావాలి?",
          hint: { en: "Say you'd like to exchange a gift, and why.", te: "బహుమతిగా వచ్చిన దాన్ని మార్చుకోవాలని, ఎందుకో చెప్పండి." },
          replies: [
            { say: "I'd like to exchange this kurta, because it's too small.", good: true, skill: "explain" },
            { say: "I want to change this kurta. It's too much small.", good: false, skill: "explain" },
          ],
        },
        {
          partner: "I see. Do you have the bill?",
          te: "అలాగా. బిల్లు ఉందా?",
          hint: {
            en: "Explain there's no bill because it was a present, but the tag is still there.",
            te: "అది బహుమతి కాబట్టి బిల్లు లేదని, కానీ tag ఇంకా ఉందని చెప్పండి.",
          },
          replies: [
            { say: "No, it was a gift. But the price tag is still on it.", good: true, skill: "explain" },
            {
              say: "Bill? Who keeps a bill for a gift? Just change it.",
              good: false,
              skill: "polite",
              react: { en: "Sorry, I have to ask. Let me check the tag.", te: "సారీ అండీ, అడగాలి కదా. tag చూస్తాను." },
            },
          ],
        },
        {
          partner: "Thank you. Which size would you like?",
          te: "థాంక్యూ. మీకు ఏ సైజు కావాలి?",
          hint: { en: "Ask for one size bigger.", te: "ఒక సైజు పెద్దది అడగండి." },
          replies: [
            { say: "Could I have one size bigger, please?", good: true, skill: "explain" },
            { say: "Do you have a bigger size, please?", good: true, skill: "explain" },
            { say: "Can I have one size more bigger, please?", good: false, skill: "explain" },
          ],
        },
        {
          partner: "Here you are. Would you like to try it on?",
          te: "ఇదిగోండి. వేసుకుని చూస్తారా?",
          hint: { en: "Say no thanks: you have to get to the clinic before it closes.", te: "వద్దు, థాంక్స్ అనండి: క్లినిక్ మూసేలోపు చేరుకోవాలి." },
          replies: [
            { say: "No, thanks. I have to reach the clinic before seven.", good: true, skill: "polite" },
            { say: "No, thanks. I have to reach to the clinic before seven.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
        {
          partner: "No problem. If it doesn't fit, come back within seven days.",
          te: "పర్లేదు. సరిపోకపోతే, ఏడు రోజుల్లోపు మళ్ళీ రండి.",
          hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you so much. Have a nice evening!", good: true, skill: "polite" },
            { say: "Thank you. I will come back if it will not fit.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

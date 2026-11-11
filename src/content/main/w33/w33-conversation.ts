import type { ConversationDay } from "../../types";

/** Week 33, Day 6 (CURRICULUM §4): Conversation Day — a neighbour is unwell; planning a colony cleaning drive. */
export const day: ConversationDay = {
  id: "w33-conversation",
  kind: "conversation",
  title: { en: "Helping Each Other", te: "ఒకరికొకరు సహాయం" },
  summary: {
    en: "Use the whole week: offer help to a neighbour who is unwell, and plan a cleaning drive for the colony.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: ఒంట్లో బాలేని పక్కింటివారికి సాయం చేస్తాననండి, కాలనీలో క్లీనింగ్ డ్రైవ్ ప్లాన్ చేయండి.",
  },
  topics: ["neighbours", "health", "home"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A neighbour is unwell", te: "పక్కింటాయనకి ఒంట్లో బాలేదు" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Hello, Venkat! I heard you are not well.", te: "హలో వెంకట్ గారు! మీకు ఒంట్లో బాలేదని విన్నాను." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Yes, I have had a fever since Monday.", te: "అవునండీ, సోమవారం నుండి జ్వరంగా ఉంది." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Oh no! Shall I bring you some food?", te: "అయ్యో! మీకు కొంచెం భోజనం తీసుకురానా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thank you, but my brother is cooking for me.", te: "థాంక్యూ, కానీ మా అన్నయ్య నా కోసం వంట చేస్తున్నారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Can I get anything from the medical shop?", te: "మెడికల్ షాప్ నుండి ఏమైనా తేనా?" },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Would you mind buying some paracetamol?", te: "అభ్యంతరం లేకపోతే కొన్ని paracetamol మాత్రలు తెస్తారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Not at all. I'm going there now.", te: "అభ్యంతరం ఏం లేదు. నేను ఇప్పుడే అటు వెళ్తున్నాను." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Could you also tell the milkman not to come tomorrow?", te: "రేపు రావద్దని పాలవాళ్ళకి కూడా చెప్తారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Of course. Call me any time you need help.", te: "తప్పకుండా. ఏ సాయం కావాలన్నా ఎప్పుడైనా ఫోన్ చేయండి." },
      { speaker: { en: "Venkat", te: "వెంకట్" }, voice: "b", en: "Thank you, Radha. You are a good neighbour.", te: "థాంక్యూ రాధ గారు. మీరు చాలా మంచి పొరుగువారు." },
    ],
    questions: [
      {
        prompt: { en: "What is the talk about?", te: "ఈ మాటలు దేని గురించి?" },
        options: ["A neighbour is ill, and Radha offers help.", "Radha wants to borrow some money.", "Venkat is going on a trip."],
        answer: 0,
      },
      {
        prompt: { en: "How long has Venkat had a fever?", te: "వెంకట్ గారికి ఎప్పటి నుండి జ్వరం?" },
        options: ["Since Monday", "For two weeks", "Since yesterday"],
        answer: 0,
      },
      {
        prompt: { en: "Who is cooking for Venkat?", te: "వెంకట్ గారి కోసం ఎవరు వంట చేస్తున్నారు?" },
        options: ["His brother", "Radha", "The milkman"],
        answer: 0,
      },
      {
        prompt: { en: "What will Radha buy?", te: "రాధ గారు ఏం కొంటారు?" },
        options: ["Paracetamol", "Vegetables", "Milk"],
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
        en: "Tell a friend that your neighbour lives alone.",
        te: "మీ పక్కింటాయన ఒక్కరే ఉంటారని మీ స్నేహితులకి చెప్పండి.",
      },
      expected: ["My neighbour lives alone.", "He lives alone."],
      options: ["My neighbour lives alone.", "My neighbour live alone.", "My neighbour is living alone always."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "An old woman is crossing the road with a heavy bag. Offer to carry it.",
        te: "ఒక పెద్దావిడ బరువైన సంచితో రోడ్డు దాటుతున్నారు. మీరు మోస్తానని అడగండి.",
      },
      expected: ["Shall I carry that for you?", "Shall I carry your bag?", "Can I help you with the bag?"],
      options: ["Shall I carry that for you?", "Shall I carrying that for you?", "You can't carry it. Give it."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "At the meeting, say you know the plumber well.",
        te: "ప్లంబర్ మీకు బాగా తెలుసని మీటింగ్‌లో చెప్పండి.",
      },
      expected: ["I know the plumber well.", "I know him well."],
      options: ["I know the plumber well.", "I am knowing the plumber well.", "I know plumber well."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A neighbour with a cold", te: "జలుబుతో పక్కింటావిడ" },
      scene: {
        en: "Ayesha, your neighbour, has not come out for two days. You knock on her door.",
        te: "పక్కింటి ఆయేషా గారు రెండు రోజులుగా బయటికి రాలేదు. మీరు వాళ్ళ తలుపు తట్టారు.",
      },
      partner: { en: "Ayesha (neighbour)", te: "ఆయేషా (పక్కింటావిడ)" },
      skills: [
        { id: "offer", label: { en: "Offering help", te: "సాయం చేస్తాననడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Oh, hello! Come in. Sorry, I'm not well.",
          te: "ఓ, హలో! లోపలికి రండి. సారీ, ఒంట్లో బాలేదు.",
          hint: { en: "Say you are sorry to hear it, and ask what happened.", te: "విని బాధగా ఉందని చెప్పి, ఏమైందో అడగండి." },
          replies: [
            { say: "Sorry to hear that. What happened?", good: true, skill: "polite" },
            { say: "Sorry to hear that. What is happened?", good: false, skill: "polite" },
          ],
        },
        {
          partner: "I have had a bad cold since Sunday.",
          te: "ఆదివారం నుండి బాగా జలుబుగా ఉంది.",
          hint: { en: "Offer to bring her something from the shop.", te: "షాప్ నుండి ఏమైనా తేనా అని అడగండి." },
          replies: [
            { say: "Shall I get anything from the shop?", good: true, skill: "offer" },
            { say: "Can I bring you anything from the shop?", good: true, skill: "offer" },
            { say: "Shall I get anything from shop?", good: false, skill: "offer", fixIt: "article" },
          ],
        },
        {
          partner: "Would you mind getting some lemons and honey?",
          te: "అభ్యంతరం లేకపోతే కొన్ని నిమ్మకాయలు, తేనె తెస్తారా?",
          hint: { en: "Say yes, gladly, the polite way.", te: "మర్యాదగా, సంతోషంగా సరే అని చెప్పండి." },
          replies: [
            { say: "Not at all. I'll go now.", good: true, skill: "offer" },
            {
              say: "Again? I only came to say hello!",
              good: false,
              skill: "polite",
              react: { en: "Oh, sorry! I can ask someone else.", te: "అయ్యో, సారీ! ఇంకెవరినైనా అడుగుతాను." },
            },
          ],
        },
        {
          partner: "Thank you. Here is two hundred rupees.",
          te: "థాంక్యూ. ఇదిగోండి రెండు వందల రూపాయలు.",
          hint: { en: "Take the money, and say you'll be back soon.", te: "డబ్బు తీసుకుని, త్వరగా వస్తానని చెప్పండి." },
          replies: [
            { say: "Okay. I'll be back in ten minutes.", good: true, skill: "polite" },
            { say: "Okay. I'll be back after ten minutes.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
        {
          partner: "You are so kind. Thank you so much.",
          te: "మీరు చాలా మంచివారు. చాలా థాంక్స్.",
          hint: { en: "Say it is nothing, and tell her to rest.", te: "అది పెద్ద విషయం కాదని చెప్పి, విశ్రాంతి తీసుకోమని చెప్పండి." },
          replies: [
            { say: "It's nothing. Please rest and get well soon.", good: true, skill: "polite" },
            { say: "It's nothing. Please take rest.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A cleaning drive", te: "క్లీనింగ్ డ్రైవ్" },
      scene: {
        en: "David from the colony association is planning a cleaning drive. He stops you on the street.",
        te: "కాలనీ సంఘం నుండి డేవిడ్ గారు క్లీనింగ్ డ్రైవ్ ప్లాన్ చేస్తున్నారు. వీధిలో మిమ్మల్ని ఆపారు.",
      },
      partner: { en: "David (colony association)", te: "డేవిడ్ (కాలనీ సంఘం)" },
      voice: "b",
      skills: [
        { id: "offer", label: { en: "Offering help", te: "సాయం చేస్తాననడం" } },
        { id: "agree", label: { en: "Agreeing and disagreeing", te: "ఒప్పుకోవడం, ఒప్పుకోకపోవడం" } },
      ],
      turns: [
        {
          partner: "Hi! We are planning a cleaning drive on Sunday.",
          te: "హాయ్! ఆదివారం క్లీనింగ్ డ్రైవ్ ప్లాన్ చేస్తున్నాం.",
          hint: { en: "Say it is a good idea, and ask what time.", te: "మంచి ఆలోచన అని చెప్పి, ఎన్ని గంటలకో అడగండి." },
          replies: [
            { say: "That's a good idea. What time does it start?", good: true, skill: "agree" },
            { say: "That's a good idea. What time it starts?", good: false, skill: "agree", fixIt: "question" },
          ],
        },
        {
          partner: "At seven in the morning, near the park.",
          te: "ఉదయం ఏడింటికి, పార్క్ దగ్గర.",
          hint: { en: "Offer to bring something useful.", te: "ఏదైనా ఉపయోగపడేది తీసుకురానా అని అడగండి." },
          replies: [
            { say: "Shall I bring some brooms and bags?", good: true, skill: "offer" },
            { say: "Shall I bring some broom and bag?", good: false, skill: "offer", fixIt: "plural" },
          ],
        },
        {
          partner: "Yes, please! And could you tell the others?",
          te: "తీసుకురండి! మిగతావాళ్ళకి కూడా చెప్తారా?",
          hint: { en: "Say yes, and say how you will tell them.", te: "సరే అని, వాళ్ళకి ఎలా చెప్తారో చెప్పండి." },
          replies: [
            { say: "Sure. I'll send a message in the WhatsApp group.", good: true, skill: "offer" },
            { say: "Sure. I'll send message in WhatsApp group.", good: false, skill: "offer", fixIt: "article" },
          ],
        },
        {
          partner: "Ramana says we should start at six.",
          te: "ఆరింటికే మొదలుపెట్టాలని రమణ గారు అంటున్నారు.",
          hint: { en: "Disagree politely, and give a reason.", te: "మర్యాదగా ఒప్పుకోకుండా, కారణం చెప్పండి." },
          replies: [
            { say: "I'm not sure about that. Six is too early.", good: true, skill: "agree" },
            {
              say: "Six? That's a stupid idea.",
              good: false,
              skill: "agree",
              react: { en: "Okay, okay. Seven is fine, then.", te: "సరే, సరే. అయితే ఏడింటికే." },
            },
          ],
        },
        {
          partner: "Okay, seven it is. See you on Sunday!",
          te: "సరే, ఏడింటికే. ఆదివారం కలుద్దాం!",
          hint: { en: "Say goodbye, and say you will be there.", te: "వెళ్ళొస్తానని, తప్పకుండా వస్తానని చెప్పండి." },
          replies: [
            { say: "See you on Sunday. I'll be there.", good: true, skill: "agree" },
            { say: "See you on Sunday. I will be there only.", good: false, skill: "agree", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

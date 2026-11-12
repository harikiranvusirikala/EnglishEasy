import type { ConversationDay } from "../../types";

/** Week 46, Day 6 (CURRICULUM §5): Conversation Day — the residents' meeting, and a friendly debate at the tea stall. */
export const day: ConversationDay = {
  id: "w46-conversation",
  kind: "conversation",
  title: { en: "The Residents' Meeting", te: "రెసిడెంట్స్ మీటింగ్" },
  summary: {
    en: "Use the whole week: give your opinion at a residents' meeting, agree and disagree politely, and enjoy a friendly debate over tea.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: రెసిడెంట్స్ మీటింగ్‌లో అభిప్రాయం చెప్పండి, మర్యాదగా ఒప్పుకోండి, వేరే అభిప్రాయం ఉంటే అదీ చెప్పండి, టీ దగ్గర స్నేహంగా వాదించండి.",
  },
  topics: ["neighbours", "people", "home"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The park at night", te: "రాత్రిపూట పార్క్" },
    lines: [
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Good evening, everyone. First, let's discuss the park timings.", te: "అందరికీ నమస్కారం. ముందు పార్క్ టైమింగ్స్ గురించి మాట్లాడుకుందాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "In my opinion, the park should stay open till ten.", te: "నా అభిప్రాయం ప్రకారం, పార్క్ పది దాకా తెరిచి ఉండాలి." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Why do you think so, Joseph?", te: "ఎందుకలా అనుకుంటున్నారు, జోసెఫ్ గారూ?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "The main reason is the heat. Many people walk only after eight.", te: "ముఖ్య కారణం ఎండ. చాలామంది ఎనిమిది తర్వాతే నడుస్తారు." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "That's true, but the park is very dark at night.", te: "నిజమే, కానీ రాత్రిపూట పార్క్ చాలా చీకటిగా ఉంటుంది." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I completely agree. We need more lights first.", te: "పూర్తిగా ఒప్పుకుంటాను. ముందు ఇంకా లైట్లు కావాలి." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "How do you feel about a guard at the gate?", te: "గేటు దగ్గర ఒక గార్డ్ గురించి మీకు ఎలా అనిపిస్తోంది?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I'm not so sure. A guard costs a lot of money every month.", te: "నాకు అంత నమ్మకం లేదు. గార్డ్‌కి ప్రతి నెలా చాలా డబ్బు అవుతుంది." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "I see your point. Let's ask the municipal office for lights.", te: "మీరు చెప్పేది అర్థమైంది. లైట్ల కోసం మున్సిపల్ ఆఫీసుని అడుగుదాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Good idea. I think everyone will agree with that.", te: "మంచి ఆలోచన. అందరూ దానికి ఒప్పుకుంటారని నా ఉద్దేశం." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["The park timings and lights", "A wedding in the colony", "The price of vegetables"],
        answer: 0,
      },
      {
        prompt: { en: "Till when does Joseph want the park open?", te: "పార్క్ ఎప్పటి దాకా తెరిచి ఉండాలని జోసెఫ్ గారు అంటున్నారు?" },
        options: ["Till ten", "Till eight", "Till six"],
        answer: 0,
      },
      {
        prompt: { en: "What problem does Geetha talk about?", te: "గీత గారు ఏ సమస్య గురించి చెప్తున్నారు?" },
        options: ["The park is dark at night.", "The gate is broken.", "The benches are old."],
        answer: 0,
      },
      {
        prompt: { en: "Why is Joseph not sure about a guard?", te: "గార్డ్ విషయంలో జోసెఫ్ గారికి ఎందుకు నమ్మకం లేదు?" },
        options: ["A guard costs a lot of money.", "Guards sleep at night.", "The gate is too small."],
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
        en: "At the meeting, someone asks: Don't you want a new water tank? You do want one. Answer.",
        te: "మీటింగ్‌లో ఒకరు అడుగుతున్నారు: Don't you want a new water tank? మీకు కావాలి. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I do. The old one leaks.", "Yes, I do.", "Yes, we need a new one."],
      options: ["Yes, I do. The old one leaks.", "No, I do. The old one leaks.", "Yes, I don't. The old one leaks."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Give your opinion at the meeting: the colony needs a bigger water tank.",
        te: "మీటింగ్‌లో మీ అభిప్రాయం చెప్పండి: కాలనీకి ఇంకా పెద్ద వాటర్ ట్యాంక్ కావాలి.",
      },
      expected: ["I think we need a bigger water tank.", "In my opinion, we need a bigger water tank.", "We need a bigger water tank."],
      options: ["I think we need a bigger water tank.", "I think we need bigger water tank.", "I am thinking we need a bigger water tank."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the secretary what the other residents think.",
        te: "మిగతా రెసిడెంట్స్ ఏమనుకుంటున్నారని సెక్రటరీ గారిని అడగండి.",
      },
      expected: ["What do the other residents think?", "What do the others think?", "What do the other residents think about it?"],
      options: ["What do the other residents think?", "What the other residents think?", "What does the other residents think?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A new water tank", te: "కొత్త వాటర్ ట్యాంక్" },
      scene: {
        en: "At the residents' meeting, the secretary, Usha, asks everyone about the old water tank.",
        te: "రెసిడెంట్స్ మీటింగ్‌లో సెక్రటరీ ఉష గారు పాత వాటర్ ట్యాంక్ గురించి అందరినీ అడుగుతున్నారు.",
      },
      partner: { en: "Usha (the colony secretary)", te: "ఉష (కాలనీ సెక్రటరీ)" },
      skills: [
        { id: "opinion", label: { en: "Giving an opinion", te: "అభిప్రాయం చెప్పడం" } },
        { id: "agree", label: { en: "Agreeing and disagreeing", te: "ఒప్పుకోవడం, ఒప్పుకోకపోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! Let's begin. The old water tank leaks. What do you think?",
          te: "నమస్కారం! మొదలుపెడదాం. పాత వాటర్ ట్యాంక్ కారుతోంది. మీకేమనిపిస్తోంది?",
          hint: { en: "Say you think the colony needs a new one, and give a reason.", te: "కాలనీకి కొత్తది కావాలని చెప్పి, కారణం చెప్పండి." },
          replies: [
            { say: "I think we need a new one because we lose a lot of water.", good: true, skill: "opinion" },
            { say: "I think we need a new one because we lose lot of water.", good: false, skill: "opinion", fixIt: "article" },
          ],
        },
        {
          partner: "Kumar says a repair is cheaper.",
          te: "రిపేర్ చేయిస్తే తక్కువ ఖర్చు అని కుమార్ గారు అంటున్నారు.",
          hint: { en: "Agree with part of it, but say the tank is very old.", te: "కొంతవరకు ఒప్పుకుని, ట్యాంక్ చాలా పాతది అని చెప్పండి." },
          replies: [
            { say: "That's true, but the tank is very old now.", good: true, skill: "agree" },
            {
              say: "Kumar is wrong. He always says such things.",
              good: false,
              skill: "polite",
              react: { en: "Please, let's be kind to each other.", te: "ప్లీజ్, ఒకరితో ఒకరు మర్యాదగా మాట్లాడుకుందాం." },
            },
          ],
        },
        {
          partner: "How do you feel about sharing the cost?",
          te: "ఖర్చు అందరం పంచుకోవడం గురించి మీకు ఎలా అనిపిస్తోంది?",
          hint: { en: "Say it's fair: each house can pay a little.", te: "న్యాయమే అని చెప్పండి: ఒక్కో ఇల్లు కొంచెం కట్టొచ్చు." },
          replies: [
            { say: "I think it's fair. Each house can pay a little.", good: true, skill: "opinion" },
            { say: "I think it's fair. Each houses can pay a little.", good: false, skill: "opinion", fixIt: "plural" },
          ],
        },
        {
          partner: "Don't you think two thousand rupees a house is too much?",
          te: "ఒక్కో ఇంటికి రెండు వేల రూపాయలు మరీ ఎక్కువ అని మీకు అనిపించట్లేదా?",
          hint: { en: "Say no: you don't think so, for a new tank.", te: "లేదు అని చెప్పండి: కొత్త ట్యాంక్‌కి అది ఎక్కువ కాదని మీకు అనిపిస్తోంది." },
          replies: [
            { say: "No, I don't. It's fair for a new tank.", good: true, skill: "agree" },
            { say: "Yes, I don't. It's fair for a new tank.", good: false, skill: "agree", fixIt: "negative-answer" },
          ],
        },
        {
          partner: "Good. Let's vote next Sunday. Thank you, everyone.",
          te: "మంచిది. వచ్చే ఆదివారం ఓటు వేద్దాం. అందరికీ థాంక్స్.",
          hint: { en: "Thank her for the meeting.", te: "మీటింగ్‌కి ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you, Usha. It was a good meeting.", good: true, skill: "polite" },
            { say: "Thank you, Usha. It was good meeting.", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Phones and young people", te: "ఫోన్లు, యువత" },
      scene: {
        en: "You meet your friend Rahim at the tea stall. He has strong views about young people and phones.",
        te: "టీ కొట్టు దగ్గర మీ స్నేహితుడు రహీమ్ గారు కలిశారు. యువత, ఫోన్ల గురించి ఆయనకి గట్టి అభిప్రాయాలు ఉన్నాయి.",
      },
      partner: { en: "Rahim (your friend)", te: "రహీమ్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "disagree", label: { en: "Disagreeing politely", te: "మర్యాదగా ఒప్పుకోకపోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Come, have tea. Young people are always on their phones these days.",
          te: "హలో! రండి, టీ తాగండి. ఈ రోజుల్లో యువత ఎప్పుడూ ఫోన్లలోనే ఉంటున్నారు.",
          hint: { en: "Greet him, and ask why he thinks so.", te: "పలకరించి, ఎందుకలా అనుకుంటున్నారని అడగండి." },
          replies: [
            { say: "Hello! Why do you think so?", good: true, skill: "polite" },
            { say: "Hello! Why you think so?", good: false, skill: "polite", fixIt: "question" },
          ],
        },
        {
          partner: "They don't talk to anyone. I think phones are bad for them.",
          te: "వాళ్ళు ఎవరితోనూ మాట్లాడరు. ఫోన్లు వాళ్ళకి మంచివి కావని నా ఉద్దేశం.",
          hint: { en: "Show you understand, but say phones are also useful.", te: "ఆయన మాట అర్థమైందని చెప్పి, ఫోన్లు ఉపయోగకరం కూడా అని చెప్పండి." },
          replies: [
            { say: "I see your point, but phones are also very useful.", good: true, skill: "disagree" },
            {
              say: "That's an old man's idea. You are wrong.",
              good: false,
              skill: "polite",
              react: { en: "Old man? I'm only sixty-five!", te: "ముసలివాడినా? నాకు అరవై ఐదే!" },
            },
          ],
        },
        {
          partner: "Useful? How?",
          te: "ఉపయోగమా? ఎలా?",
          hint: { en: "Say a young neighbour taught you video calls, and you talk to your cousin every week.", te: "ఒక యువ పక్కింటివారు మీకు video call నేర్పించారని, ప్రతి వారం కజిన్‌తో మాట్లాడుతున్నారని చెప్పండి." },
          replies: [
            { say: "A young neighbour taught me video calls. I talk to my cousin every week.", good: true, skill: "disagree" },
            { say: "A young neighbour teached me video calls. I talk to my cousin every week.", good: false, skill: "disagree" },
          ],
        },
        {
          partner: "Hmm, that's true. But they should also go out and play.",
          te: "హ్మ్, నిజమే. కానీ వాళ్ళు బయటికి వెళ్ళి ఆడుకోవాలి కూడా.",
          hint: { en: "Agree fully, thank him for the tea, and say goodbye.", te: "పూర్తిగా ఒప్పుకుని, టీకి థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "I completely agree. Thanks for the tea! See you tomorrow.", good: true, skill: "polite" },
            { say: "I am completely agree. Thanks for the tea! See you tomorrow.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

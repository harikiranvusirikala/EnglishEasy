import type { ConversationDay } from "../../types";

/** Week 31, Day 6 (CURRICULUM §4): Conversation Day — getting ready for guests, and a call from them on the way. */
export const day: ConversationDay = {
  id: "w31-conversation",
  kind: "conversation",
  title: { en: "Getting Ready for Guests", te: "అతిథుల కోసం సిద్ధం" },
  summary: {
    en: "Use the whole week: check what is done and not done yet before friends arrive, and take their call on the way.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: స్నేహితులు వచ్చే ముందు ఏ పని అయిందో, ఏది ఇంకా కాలేదో చూడండి; దారిలో ఉన్న వాళ్ళ ఫోన్‌కి జవాబు చెప్పండి.",
  },
  topics: ["home", "people", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Guests at one o'clock", te: "ఒంటి గంటకి అతిథులు" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Krishna, our guests are coming at one o'clock.", te: "కృష్ణా, మన అతిథులు ఒంటి గంటకి వస్తున్నారు." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "I know. I have already cleaned the house.", te: "తెలుసు. నేను ఇప్పటికే ఇల్లు శుభ్రం చేసేశాను." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Thank you! Have you bought the sweets yet?", te: "థాంక్యూ! స్వీట్లు కొన్నారా?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Not yet. I'm going to the shop now.", te: "ఇంకా లేదు. ఇప్పుడే షాపుకి వెళ్తున్నాను." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Please get some curd too. I've just made the biryani.", te: "కొంచెం పెరుగు కూడా తీసుకురండి. నేను ఇప్పుడే బిర్యానీ చేశాను." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "It smells wonderful! Oh, my phone. It's Suresh.", te: "ఘుమఘుమలాడుతోంది! ఓ, ఫోన్. సురేష్ చేస్తున్నారు." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "They have just left Guntur. They'll reach in an hour.", te: "వాళ్ళు ఇప్పుడే గుంటూరు నుండి బయలుదేరారు. గంటలో చేరుకుంటారు." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Good. Then we have enough time.", te: "మంచిది. అయితే మనకి కావలసినంత టైమ్ ఉంది." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Suresh and I have been friends for forty years!", te: "సురేష్, నేను నలభై ఏళ్ళుగా స్నేహితులం!" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "And they haven't visited us since Sankranti.", te: "వాళ్ళు సంక్రాంతి నుండి మన ఇంటికి రాలేదు కూడా." },
    ],
    questions: [
      {
        prompt: { en: "What are Radha and Krishna doing?", te: "రాధ, కృష్ణ ఏం చేస్తున్నారు?" },
        options: ["Getting ready for guests", "Going to a wedding", "Shopping for a festival"],
        answer: 0,
      },
      {
        prompt: { en: "What has Krishna already done?", te: "కృష్ణ ఇప్పటికే ఏం చేశారు?" },
        options: ["Cleaned the house", "Bought the sweets", "Made the biryani"],
        answer: 0,
      },
      {
        prompt: { en: "Where are the guests now?", te: "అతిథులు ఇప్పుడు ఎక్కడ ఉన్నారు?" },
        options: ["They have just left Guntur.", "They are at the door.", "They haven't left yet."],
        answer: 0,
      },
      {
        prompt: { en: "How long have Krishna and Suresh been friends?", te: "కృష్ణ, సురేష్ ఎంత కాలంగా స్నేహితులు?" },
        options: ["For forty years", "Since Sankranti", "For fourteen years"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "A friend asks if the house is ready for the guests. You cleaned it an hour ago.",
        te: "అతిథుల కోసం ఇల్లు రెడీయా అని స్నేహితుడు అడుగుతున్నారు. మీరు గంట క్రితమే శుభ్రం చేశారు.",
      },
      expected: ["Yes, I have already cleaned the house.", "I have already cleaned the house.", "Yes, I've already cleaned it.", "Yes, I have already cleaned it."],
      options: ["Yes, I have already cleaned the house.", "Yes, I am already cleaned the house.", "Yes, already I cleaning the house."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "A guest asks how long you have lived in this house. Say ten years.",
        te: "ఈ ఇంట్లో ఎంత కాలంగా ఉంటున్నారని ఒక అతిథి అడుగుతున్నారు. పదేళ్ళు అని చెప్పండి.",
      },
      expected: ["I have lived here for ten years.", "I've lived here for ten years.", "For ten years."],
      options: ["I have lived here for ten years.", "I am living here since ten years.", "I live here for ten years."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "You phone the guests. Ask if they have left home yet.",
        te: "అతిథులకి ఫోన్ చేశారు. ఇంటి నుండి బయలుదేరారా అని అడగండి.",
      },
      expected: ["Have you left yet?", "Have you left home yet?", "Have you started yet?"],
      options: ["Have you left yet?", "You have left yet?", "Did you left yet?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Before the guests arrive", te: "అతిథులు వచ్చే ముందు" },
      scene: {
        en: "Friends are coming for lunch. Your cousin Swapna has come to help. She checks what is done.",
        te: "స్నేహితులు భోజనానికి వస్తున్నారు. మీ కజిన్ స్వప్న సహాయానికి వచ్చారు. ఏ పని అయిందో చూస్తున్నారు.",
      },
      partner: { en: "Swapna (your cousin)", te: "స్వప్న (మీ కజిన్)" },
      skills: [
        { id: "done", label: { en: "Already and not yet", te: "already, not yet వాడటం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! The guests come at one. What's left to do?",
          te: "హలో! అతిథులు ఒంటి గంటకి వస్తారు. ఇంకా ఏ పని మిగిలింది?",
          hint: { en: "Say what you have done already: the cleaning.", te: "ఇప్పటికే చేసిన పని చెప్పండి: శుభ్రం చేయడం." },
          replies: [
            { say: "I have already cleaned the house.", good: true, skill: "done" },
            { say: "I already cleaning the house.", good: false, skill: "done" },
          ],
        },
        {
          partner: "Great. Have you made the payasam yet?",
          te: "బాగుంది. పాయసం చేశారా?",
          hint: { en: "Say you haven't, and that you will make it now.", te: "ఇంకా చేయలేదని, ఇప్పుడు చేస్తానని చెప్పండి." },
          replies: [
            { say: "Not yet. I'll make it now.", good: true, skill: "done" },
            { say: "Yet not. I'll make it now.", good: false, skill: "done" },
          ],
        },
        {
          partner: "Okay. Should I go and buy some flowers?",
          te: "సరే. నేను వెళ్ళి కొన్ని పూలు కొననా?",
          hint: { en: "Say yes, and thank her.", te: "సరే అని, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Yes, please. Thank you so much.", good: true, skill: "polite" },
            {
              say: "Yes, go. Come back fast.",
              good: false,
              skill: "polite",
              react: { en: "Okay, okay! I'm going.", te: "సరే, సరే! వెళ్తున్నా." },
            },
          ],
        },
        {
          partner: "I've just come back. Here are the flowers.",
          te: "ఇప్పుడే వచ్చాను. ఇవిగోండి పూలు.",
          hint: { en: "Thank her, and say something nice about them.", te: "థాంక్స్ చెప్పి, పూల గురించి ఒక మంచి మాట చెప్పండి." },
          replies: [
            { say: "Thank you! They are very beautiful.", good: true, skill: "polite" },
            { say: "Thank you! They very beautiful.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
        {
          partner: "Oh, the doorbell! They have just arrived.",
          te: "ఓ, కాలింగ్ బెల్! వాళ్ళు ఇప్పుడే వచ్చారు.",
          hint: { en: "Say let's go to the door and welcome them.", te: "పదండి, తలుపు దగ్గరికి వెళ్ళి స్వాగతం చెబుదాం అనండి." },
          replies: [
            { say: "Come, let's welcome them.", good: true, skill: "polite" },
            { say: "Come, let's welcome to them.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A call from the guests", te: "అతిథుల ఫోన్" },
      scene: {
        en: "Your old friend Suresh is driving to your house with his family. He phones you.",
        te: "మీ పాత స్నేహితుడు సురేష్ వాళ్ళ కుటుంబంతో మీ ఇంటికి కారులో వస్తున్నారు. మీకు ఫోన్ చేశారు.",
      },
      partner: { en: "Suresh (old friend)", te: "సురేష్ (పాత స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "time", label: { en: "Asking about time", te: "టైమ్ గురించి అడగడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! It's Suresh. We have just left Guntur.",
          te: "హలో! నేను సురేష్. ఇప్పుడే గుంటూరు నుండి బయలుదేరాం.",
          hint: { en: "Greet him, and ask when they will reach.", te: "ఆయనని పలకరించి, ఎప్పుడు చేరుకుంటారో అడగండి." },
          replies: [
            { say: "Hello, Suresh! When will you reach?", good: true, skill: "time" },
            { say: "Hello, Suresh! When you will reach?", good: false, skill: "time", fixIt: "question" },
            {
              say: "Only now? You are very late!",
              good: false,
              skill: "polite",
              react: { en: "Sorry, sorry! The traffic was very bad.", te: "సారీ, సారీ! ట్రాఫిక్ చాలా ఎక్కువగా ఉంది." },
            },
          ],
        },
        {
          partner: "In about an hour. Have you had lunch yet?",
          te: "సుమారు గంటలో. మీరు భోజనం చేశారా?",
          hint: { en: "Say no, you are waiting for them.", te: "లేదు, వాళ్ళ కోసం ఎదురుచూస్తున్నామని చెప్పండి." },
          replies: [
            { say: "Not yet. We are waiting for you.", good: true, skill: "time" },
            { say: "Not yet. We are waiting you.", good: false, skill: "time", fixIt: "preposition" },
          ],
        },
        {
          partner: "Oh, please don't wait for us!",
          te: "అయ్యో, మా కోసం ఆగకండి!",
          hint: { en: "Say it is no problem, and the food is ready.", te: "పర్లేదని, భోజనం రెడీగా ఉందని చెప్పండి." },
          replies: [
            { say: "It's no problem. The food is ready.", good: true, skill: "polite" },
            { say: "It's no problem. The food already ready.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
        {
          partner: "How long have you lived in that house now?",
          te: "ఆ ఇంట్లో మీరు ఎంత కాలంగా ఉంటున్నారు?",
          hint: { en: "Say how many years, with for.", te: "for వాడి, ఎన్నేళ్ళుగానో చెప్పండి." },
          replies: [
            { say: "We have lived here for twelve years.", good: true, skill: "time" },
            { say: "We are living here for twelve years.", good: false, skill: "time", fixIt: "duration" },
          ],
        },
        {
          partner: "Twelve years already! Okay, see you soon. Bye!",
          te: "అప్పుడే పన్నెండేళ్ళా! సరే, త్వరలో కలుద్దాం. బై!",
          hint: { en: "Say goodbye, and ask him to drive carefully.", te: "బై చెప్పి, జాగ్రత్తగా డ్రైవ్ చేయమని చెప్పండి." },
          replies: [
            { say: "See you soon. Drive carefully. Bye!", good: true, skill: "polite" },
            { say: "See you soon. Drive careful. Bye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

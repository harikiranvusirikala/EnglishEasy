import type { ConversationDay } from "../../types";

/** Week 38, Day 6 (CURRICULUM §4): Conversation Day — planning a picnic with friends, and a change of plan. */
export const day: ConversationDay = {
  id: "w38-conversation",
  kind: "conversation",
  title: { en: "Planning a Picnic", te: "పిక్నిక్ ప్లాన్" },
  summary: {
    en: "Use the whole week: plan a picnic with friends, and sort out a change of plan politely.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: స్నేహితులతో పిక్నిక్ ప్లాన్ చేయండి, ప్లాన్ మారితే మర్యాదగా సర్దుబాటు చేయండి.",
  },
  topics: ["people", "time", "travel"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A picnic plan", te: "పిక్నిక్ ప్లాన్" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Krishna, the weather is lovely. Let's have a picnic!", te: "కృష్ణ గారూ, వాతావరణం చాలా బాగుంది. పిక్నిక్ చేద్దాం!" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "That's a good idea! Where shall we go?", te: "మంచి ఆలోచన! ఎక్కడికి వెళ్దాం?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "How about Bhavani Island? We can go by boat.", te: "భవానీ ఐలాండ్ ఎలా ఉంటుంది? బోటులో వెళ్ళొచ్చు." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Sounds good. Is Sunday okay for you?", te: "బాగుంది. మీకు ఆదివారం కుదురుతుందా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Sorry, I'm going to a wedding on Sunday.", te: "సారీ, ఆదివారం నేను ఒక పెళ్ళికి వెళ్తున్నాను." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Then why don't we go on Saturday?", te: "అయితే శనివారం వెళ్ళొచ్చు కదా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Saturday is fine. Shall we ask Salma and Joseph too?", te: "శనివారం కుదురుతుంది. సల్మా గారిని, జోసెఫ్ గారిని కూడా అడుగుదామా?" },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Yes! I'll make idli. Can you bring some snacks?", te: "అవును! నేను ఇడ్లీ చేస్తాను. మీరు కొన్ని స్నాక్స్ తెస్తారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Sure. Let's meet at the bus stand at nine.", te: "తప్పకుండా. తొమ్మిదింటికి బస్ స్టాండ్‌లో కలుద్దాం." },
      { speaker: { en: "Krishna", te: "కృష్ణ" }, voice: "b", en: "Perfect. See you on Saturday!", te: "సరే. శనివారం కలుద్దాం!" },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A picnic plan", "Buying vegetables", "A doctor's visit"],
        answer: 0,
      },
      {
        prompt: { en: "Why can't Radha go on Sunday?", te: "రాధ గారు ఆదివారం ఎందుకు రాలేరు?" },
        options: ["She is going to a wedding.", "She is not well.", "She has to work."],
        answer: 0,
      },
      {
        prompt: { en: "Which day do they choose?", te: "వాళ్ళు ఏ రోజు ఎంచుకున్నారు?" },
        options: ["Saturday", "Sunday", "Friday"],
        answer: 0,
      },
      {
        prompt: { en: "What will Krishna make?", te: "కృష్ణ గారు ఏం చేస్తారు?" },
        options: ["Idli", "Snacks", "Biryani"],
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
        en: "Ask your friends where to go for the picnic. Use Shall we.",
        te: "పిక్నిక్‌కి ఎక్కడికి వెళ్దామని స్నేహితుల్ని అడగండి. Shall we వాడండి.",
      },
      expected: ["Where shall we go for the picnic?", "Where shall we go?"],
      options: ["Where shall we go for the picnic?", "Where we shall go for the picnic?", "Where shall we going for the picnic?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "Your friend asks how many people are coming. Say six.",
        te: "ఎంతమంది వస్తున్నారని స్నేహితులు అడుగుతున్నారు. ఆరుగురు అని చెప్పండి.",
      },
      expected: ["Six people are coming.", "Six people.", "Six of us are coming."],
      options: ["Six people are coming.", "Six peoples are coming.", "Six people is coming."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Send your friends a voice message: the picnic is now on Sunday, not Saturday.",
        te: "స్నేహితులకి voice message పంపండి: పిక్నిక్ శనివారం కాదు, ఇప్పుడు ఆదివారం.",
      },
      expected: [
        "Hi, the picnic is on Sunday now, not Saturday.",
        "Hi, can we have the picnic on Sunday instead?",
        "Sorry, can we go on Sunday instead of Saturday?",
      ],
      options: ["Hi, the picnic is on Sunday now, not Saturday.", "Hi, picnic is on Sunday now, not Saturday.", "Hi, the picnic is in Sunday now, not Saturday."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A picnic for the walking group", te: "వాకింగ్ గ్రూప్‌కి పిక్నిక్" },
      scene: {
        en: "Your friend Jyothi wants to plan a picnic for your morning walking group.",
        te: "మీ పొద్దుటి వాకింగ్ గ్రూప్‌కి ఒక పిక్నిక్ ప్లాన్ చేయాలని మీ స్నేహితురాలు జ్యోతి గారు అనుకుంటున్నారు.",
      },
      partner: { en: "Jyothi (your friend)", te: "జ్యోతి (మీ స్నేహితురాలు)" },
      skills: [
        { id: "suggest", label: { en: "Suggesting", te: "సూచించడం" } },
        { id: "agree", label: { en: "Saying yes", te: "సరే అనడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! Shall we plan a picnic for our walking group?",
          te: "హాయ్! మన వాకింగ్ గ్రూప్‌కి ఒక పిక్నిక్ ప్లాన్ చేద్దామా?",
          hint: { en: "Agree happily.", te: "సంతోషంగా ఒప్పుకోండి." },
          replies: [
            { say: "That's a good idea!", good: true, skill: "agree" },
            { say: "Sounds good!", good: true, skill: "agree" },
            { say: "That's good idea!", good: false, skill: "agree", fixIt: "article" },
          ],
        },
        {
          partner: "Where shall we go?",
          te: "ఎక్కడికి వెళ్దాం?",
          hint: { en: "Suggest the big park near the lake.", te: "చెరువు దగ్గర ఉన్న పెద్ద పార్క్ సూచించండి." },
          replies: [
            { say: "How about the big park near the lake?", good: true, skill: "suggest" },
            { say: "How about go to the park near the lake?", good: false, skill: "suggest" },
          ],
        },
        {
          partner: "Nice! Which day? I'm busy on Saturday.",
          te: "బాగుంది! ఏ రోజు? శనివారం నేను బిజీ.",
          hint: { en: "Suggest Sunday morning.", te: "ఆదివారం పొద్దున సూచించండి." },
          replies: [
            { say: "Why don't we go on Sunday morning?", good: true, skill: "suggest" },
            { say: "How about Sunday morning?", good: true, skill: "suggest" },
            { say: "Why we don't go on Sunday morning?", good: false, skill: "suggest", fixIt: "question" },
          ],
        },
        {
          partner: "Sunday is good. Shall I tell everyone in the group?",
          te: "ఆదివారం బాగుంది. గ్రూప్‌లో అందరికీ చెప్పనా?",
          hint: { en: "Say yes, and offer to bring something to eat.", te: "సరే అని, తినడానికి ఏదైనా తెస్తానని చెప్పండి." },
          replies: [
            { say: "Yes, please. I'll bring some snacks.", good: true, skill: "polite" },
            {
              say: "You tell them. I'm not doing anything.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Okay, I'll do it myself.", te: "ఓ! సరే, నేనే చేస్తాను." },
            },
          ],
        },
        {
          partner: "Lovely. See you at the park at seven!",
          te: "బాగుంది. ఏడింటికి పార్క్‌లో కలుద్దాం!",
          hint: { en: "Agree, and say goodbye.", te: "ఒప్పుకుని, బై చెప్పండి." },
          replies: [
            { say: "Okay! See you on Sunday. Bye!", good: true, skill: "polite" },
            { say: "Okay! See you in Sunday. Bye!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A change of plan", te: "ప్లాన్‌లో మార్పు" },
      scene: {
        en: "The picnic is on Sunday. Your friend Satish calls with bad news about the weather.",
        te: "పిక్నిక్ ఆదివారం. మీ స్నేహితుడు సతీష్ గారు వాతావరణం గురించి ఒక చెడ్డ వార్తతో ఫోన్ చేశారు.",
      },
      partner: { en: "Satish (your friend)", te: "సతీష్ (మీ స్నేహితుడు)" },
      voice: "b",
      skills: [
        { id: "change", label: { en: "Changing a plan", te: "ప్లాన్ మార్చడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Bad news. The forecast says rain on Sunday.",
          te: "హలో! చెడ్డ వార్త. ఆదివారం వర్షం పడుతుందని forecast చెప్తోంది.",
          hint: { en: "Say that is sad, and ask what you should both do now.", te: "అయ్యో అని, ఇప్పుడు ఏం చేద్దామని అడగండి." },
          replies: [
            { say: "Oh no! What shall we do now?", good: true, skill: "change" },
            { say: "Oh no! What we shall do now?", good: false, skill: "change", fixIt: "question" },
          ],
        },
        {
          partner: "Can we postpone it to next Sunday?",
          te: "వచ్చే ఆదివారానికి వాయిదా వేద్దామా?",
          hint: { en: "Say sorry: you are going to Tirupati that day.", te: "సారీ చెప్పండి: ఆ రోజు మీరు తిరుపతి వెళ్తున్నారు." },
          replies: [
            { say: "Sorry, I'm going to Tirupati next Sunday.", good: true, skill: "change" },
            { say: "Sorry, I'm going to Tirupati on next Sunday.", good: false, skill: "change", fixIt: "preposition" },
          ],
        },
        {
          partner: "Oh. Then how about this Saturday instead?",
          te: "ఓ. అయితే బదులుగా ఈ శనివారం ఎలా ఉంటుంది?",
          hint: { en: "Say Saturday is fine, and ask to start a little later, at eight.", te: "శనివారం కుదురుతుందని చెప్పి, కొంచెం ఆలస్యంగా, ఎనిమిదింటికి మొదలుపెడదామని అడగండి." },
          replies: [
            { say: "Saturday is fine. Can we make it eight?", good: true, skill: "change" },
            { say: "Saturday is fine. Can we start at eight instead?", good: true, skill: "change" },
            {
              say: "Again a change? This is too much!",
              good: false,
              skill: "polite",
              react: { en: "Sorry! The rain is not my fault.", te: "సారీ! వర్షం నా తప్పు కాదు కదా." },
            },
          ],
        },
        {
          partner: "Eight is fine. I'll tell the group.",
          te: "ఎనిమిది కుదురుతుంది. గ్రూప్‌కి నేను చెప్తాను.",
          hint: { en: "Thank him, and say you will send a voice message too.", te: "థాంక్స్ చెప్పి, మీరు కూడా voice message పంపుతానని చెప్పండి." },
          replies: [
            { say: "Thank you. I'll send a voice message too.", good: true, skill: "polite" },
            { say: "Thank you. I'll sending a voice message too.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

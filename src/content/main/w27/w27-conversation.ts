import type { ConversationDay } from "../../types";

/** Week 27, Day 6 (CURRICULUM §4): Conversation Day at the post office — sending a parcel, and opening a savings scheme. */
export const day: ConversationDay = {
  id: "w27-conversation",
  kind: "conversation",
  title: { en: "At the Post Office", te: "పోస్టాఫీసులో" },
  summary: {
    en: "Use the whole week at the post office: send a parcel, spell a name, and open a savings scheme with your documents.",
    te: "ఈ వారం నేర్చుకున్నదంతా పోస్టాఫీసులో వాడండి: పార్సెల్ పంపండి, పేరు స్పెల్లింగ్ చెప్పండి, మీ డాక్యుమెంట్లతో సేవింగ్స్ స్కీమ్ తెరవండి.",
  },
  topics: ["offices", "money"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Sending a parcel", te: "పార్సెల్ పంపడం" },
    lines: [
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Next, please. Token number twenty-six?", te: "తర్వాత ఎవరు? టోకెన్ నంబర్ ఇరవై ఆరు?" },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Yes, that's me. I'd like to send this parcel.", te: "అవును, నేనే. ఈ పార్సెల్ పంపాలి." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Sure. Where is it going?", te: "సరే. ఎక్కడికి వెళ్తుంది?" },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "To my cousin in Hyderabad. Here is the address.", te: "హైదరాబాద్‌లో మా కజిన్‌కి. ఇదిగోండి అడ్రస్." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "The name is not clear. Can you spell it?", te: "పేరు స్పష్టంగా లేదు. స్పెల్లింగ్ చెప్తారా?" },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Prasad. P for Pen, R, A, S, A, D.", te: "ప్రసాద్. Pen లో P, R, A, S, A, D." },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Thank you. Please sign here, at the bottom.", te: "థాంక్యూ. ఇక్కడ కింద సంతకం పెట్టండి." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "How much is it? When will it arrive?", te: "ఎంత అవుతుంది? ఎప్పుడు చేరుతుంది?" },
      { speaker: { en: "Jyothi", te: "జ్యోతి" }, voice: "a", en: "Ninety rupees. It will arrive in three days.", te: "తొంభై రూపాయలు. మూడు రోజుల్లో చేరుతుంది." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Here you are. Thank you very much.", te: "ఇదిగోండి. చాలా థాంక్స్." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a post office", "At a bank", "At a hospital"],
        answer: 0,
      },
      {
        prompt: { en: "Where is the parcel going?", te: "పార్సెల్ ఎక్కడికి వెళ్తోంది?" },
        options: ["To Hyderabad", "To Guntur", "To Tirupati"],
        answer: 0,
      },
      {
        prompt: { en: "What does Satish spell?", te: "సతీష్ ఏం స్పెల్లింగ్ చెప్తున్నారు?" },
        options: ["His cousin's name", "His own name", "The name of the town"],
        answer: 0,
      },
      {
        prompt: { en: "How much does Satish pay?", te: "సతీష్ ఎంత కడతారు?" },
        options: ["Ninety rupees", "Nineteen rupees", "Ninety-nine rupees"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "The clerk asks for your email: sai.rao@gmail.com. Say it.",
        te: "క్లర్క్ మీ email అడుగుతున్నారు: sai.rao@gmail.com. చెప్పండి.",
      },
      expected: ["It's sai dot rao at gmail dot com.", "Sai dot rao at gmail dot com."],
      options: ["It's sai dot rao at gmail dot com.", "It's sai dot rao at the rate gmail dot com.", "It's sai rao gmail com."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "Ask the clerk which documents you need for a savings scheme.",
        te: "సేవింగ్స్ స్కీమ్‌కి ఏ ఏ డాక్యుమెంట్లు కావాలో క్లర్క్‌ని అడగండి.",
      },
      expected: ["Which documents do I need?", "Which documents do I need for this scheme?"],
      options: ["Which documents do I need?", "Which documents I need?", "What all documents needed?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "he-she-s",
      situation: {
        en: "Tell the clerk your cousin lives in Hyderabad.",
        te: "మీ కజిన్ హైదరాబాద్‌లో ఉంటారని క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["My cousin lives in Hyderabad.", "My cousin lives in Hyderabad now."],
      options: ["My cousin lives in Hyderabad.", "My cousin live in Hyderabad.", "My cousin living in Hyderabad."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Sending a parcel", te: "పార్సెల్ పంపడం" },
      scene: {
        en: "You want to send a parcel to a friend in Vijayawada. Ramesh is at the post office counter.",
        te: "మీరు విజయవాడలో ఉన్న మీ స్నేహితులకి పార్సెల్ పంపాలి. పోస్టాఫీసు కౌంటర్ దగ్గర రమేష్ ఉన్నారు.",
      },
      partner: { en: "Ramesh (post office clerk)", te: "రమేష్ (పోస్టాఫీసు క్లర్క్)" },
      voice: "b",
      skills: [
        { id: "form", label: { en: "Forms", te: "ఫారాలు" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good afternoon. Yes, please?",
          te: "నమస్కారం. చెప్పండి?",
          hint: { en: "Say what you want to send, and where.", te: "ఏం పంపాలో, ఎక్కడికో చెప్పండి." },
          replies: [
            { say: "I'd like to send this parcel to Vijayawada.", good: true, skill: "polite" },
            { say: "Send this parcel Vijayawada.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
        {
          partner: "Okay. Please fill in this form first.",
          te: "సరే. ముందు ఈ ఫారం నింపండి.",
          hint: { en: "Ask where you write the address.", te: "అడ్రస్ ఎక్కడ రాయాలో అడగండి." },
          replies: [
            { say: "Where do I write the address?", good: true, skill: "form" },
            { say: "Where I write the address?", good: false, skill: "form", fixIt: "question" },
          ],
        },
        {
          partner: "In this box, in capital letters.",
          te: "ఈ డబ్బాలో, capital letters లో.",
          hint: { en: "Say it is done, and ask if he needs your phone number.", te: "అయిపోయిందని చెప్పి, మీ ఫోన్ నంబర్ కావాలా అని అడగండి." },
          replies: [
            { say: "Done. Do you need my phone number?", good: true, skill: "form" },
            { say: "Done. You need my phone number?", good: false, skill: "form" },
          ],
        },
        {
          partner: "Yes. And please sign here.",
          te: "అవును. ఇక్కడ సంతకం కూడా పెట్టండి.",
          hint: { en: "Sign, and ask the cost.", te: "సంతకం పెట్టి, ఎంత అవుతుందో అడగండి." },
          replies: [
            { say: "Okay. How much is it?", good: true, skill: "polite" },
            {
              say: "Why so many papers for one parcel?",
              good: false,
              skill: "polite",
              react: { en: "Sorry, those are the rules.", te: "సారీ అండీ, రూల్స్ అలా ఉన్నాయి." },
            },
          ],
        },
        {
          partner: "Sixty rupees. It will arrive in two days.",
          te: "అరవై రూపాయలు. రెండు రోజుల్లో చేరుతుంది.",
          hint: { en: "Pay, and thank him.", te: "డబ్బు ఇచ్చి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Here you are. Thank you.", good: true, skill: "polite" },
            { say: "Here are you. Thank you.", good: false, skill: "polite" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A savings scheme", te: "సేవింగ్స్ స్కీమ్" },
      scene: {
        en: "You want to open a savings scheme at the post office. Grace, the clerk, checks your papers.",
        te: "మీరు పోస్టాఫీసులో సేవింగ్స్ స్కీమ్ తెరవాలనుకుంటున్నారు. క్లర్క్ గ్రేస్ మీ పత్రాలు చూస్తున్నారు.",
      },
      partner: { en: "Grace (post office clerk)", te: "గ్రేస్ (పోస్టాఫీసు క్లర్క్)" },
      skills: [
        { id: "docs", label: { en: "Documents", te: "డాక్యుమెంట్లు" } },
        { id: "date", label: { en: "Dates in full", te: "తేదీలు పూర్తిగా" } },
      ],
      turns: [
        {
          partner: "Hello. How can I help you?",
          te: "హలో. మీకు ఏం కావాలి?",
          hint: { en: "Tell her why you came today.", te: "ఈ రోజు ఎందుకు వచ్చారో చెప్పండి." },
          replies: [
            { say: "I'd like to open a savings scheme.", good: true },
            { say: "I want open savings scheme.", good: false, fixIt: "article" },
          ],
        },
        {
          partner: "Sure. Do you have ID proof and address proof?",
          te: "సరే. ID ప్రూఫ్, అడ్రస్ ప్రూఫ్ ఉన్నాయా?",
          hint: { en: "Say yes, and give her the copies.", te: "అవునని చెప్పి, కాపీలు ఇవ్వండి." },
          replies: [
            { say: "Yes. Here are the photocopies.", good: true, skill: "docs" },
            { say: "Yes. I am having photocopies.", good: false, skill: "docs", fixIt: "state-ing" },
          ],
        },
        {
          partner: "I also need to see the originals.",
          te: "ఒరిజినల్స్ కూడా చూడాలి.",
          hint: { en: "Hand them over, and ask to get them back.", te: "వాటిని ఇచ్చి, తిరిగి ఇవ్వమని అడగండి." },
          replies: [
            { say: "Here they are. Can I have them back?", good: true, skill: "docs" },
            { say: "Here. Return back after checking.", good: false, skill: "docs", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Of course. Your date of birth, please?",
          te: "తప్పకుండా. మీ పుట్టిన తేదీ చెప్తారా?",
          hint: { en: "Say your own date of birth in full, with the year.", te: "మీ పుట్టిన తేదీని సంవత్సరంతో సహా పూర్తిగా చెప్పండి." },
          replies: [
            { say: "The tenth of August, nineteen sixty-one.", good: true, skill: "date" },
            { say: "Ten August, one nine six one.", good: false, skill: "date" },
          ],
        },
        {
          partner: "Thank you. Please sign in these two places.",
          te: "థాంక్యూ. ఈ రెండు చోట్ల సంతకం పెట్టండి.",
          hint: { en: "Ask politely where exactly to sign.", te: "సరిగ్గా ఎక్కడ సంతకం పెట్టాలో మర్యాదగా అడగండి." },
          replies: [
            { say: "Sorry, where do I sign?", good: true, skill: "docs" },
            {
              say: "You sign for me. I'm tired.",
              good: false,
              skill: "docs",
              react: { en: "Sorry, only you can sign your form.", te: "సారీ అండీ, మీ ఫారం మీద మీరే సంతకం పెట్టాలి." },
            },
          ],
        },
        {
          partner: "Here, and here. Your scheme is open now!",
          te: "ఇక్కడ, ఇక్కడ. మీ స్కీమ్ ఇప్పుడు మొదలైంది!",
          hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you very much. Goodbye.", good: true },
            { say: "Thanks you. Goodbye.", good: false },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 57, Day 6 (CURRICULUM §5): Conversation Day — passing on the clinic's message to a neighbour; telling a friend what the bank manager said. */
export const day: ConversationDay = {
  id: "w57-conversation",
  kind: "conversation",
  title: { en: "A Message From the Clinic", te: "క్లినిక్ నుంచి మెసేజ్" },
  summary: {
    en: "Use the whole week: pass on a message from the clinic to a neighbour, and tell a friend what the bank manager said.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: క్లినిక్ నుంచి వచ్చిన మెసేజ్‌ని పక్కింటివారికి అందించండి, బ్యాంక్ మేనేజర్ గారు చెప్పింది స్నేహితులకి చెప్పండి.",
  },
  topics: ["health", "doctor", "bank", "neighbours"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "The clinic called", te: "క్లినిక్ నుంచి ఫోన్" },
    lines: [
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Hello, Suresh! The clinic called while you were out.", te: "హలో సురేష్ గారూ! మీరు బయటికి వెళ్ళినప్పుడు క్లినిక్ నుంచి ఫోన్ వచ్చింది." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Oh, my phone was switched off. What did they say?", te: "ఓ, నా ఫోన్ స్విచ్ ఆఫ్ అయింది. వాళ్ళు ఏం చెప్పారు?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "The nurse said your blood test report was ready.", te: "మీ బ్లడ్ టెస్ట్ రిపోర్ట్ రెడీ అయిందని నర్సు చెప్పారు." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "That was quick! Did she say anything else?", te: "అంత త్వరగానా! ఇంకేమైనా చెప్పారా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "She said Dr Prasad wanted to see you tomorrow.", te: "డాక్టర్ ప్రసాద్ గారు రేపు మిమ్మల్ని చూడాలనుకుంటున్నారని ఆవిడ చెప్పారు." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Tomorrow? Did she tell you the time?", te: "రేపా? టైమ్ ఏమైనా చెప్పారా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "Yes. She asked you to come at eleven, with your old reports.", te: "అవును. పదకొండింటికి, మీ పాత రిపోర్ట్‌లతో రమ్మని అడిగారు." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Should I come on an empty stomach?", te: "పరగడుపున రావాలా?" },
      { speaker: { en: "Padma", te: "పద్మ" }, voice: "a", en: "No. She told me you could eat breakfast as usual.", te: "లేదు. మామూలుగానే టిఫిన్ చేసి రావొచ్చని నాకు చెప్పారు." },
      { speaker: { en: "Suresh", te: "సురేష్" }, voice: "b", en: "Thank you so much, Padma. I'll call the clinic now.", te: "చాలా థాంక్స్ పద్మ గారూ. ఇప్పుడే క్లినిక్‌కి ఫోన్ చేస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What are they talking about?", te: "వీళ్ళు దేని గురించి మాట్లాడుకుంటున్నారు?" },
        options: ["A message from the clinic", "A colony meeting", "A new phone"],
        answer: 0,
      },
      {
        prompt: { en: "What did the nurse say was ready?", te: "ఏది రెడీ అయిందని నర్సు చెప్పారు?" },
        options: ["The blood test report", "The new tablets", "The bill"],
        answer: 0,
      },
      {
        prompt: { en: "What time should Suresh go to the clinic?", te: "సురేష్ గారు ఎన్ని గంటలకి క్లినిక్‌కి వెళ్ళాలి?" },
        options: ["At eleven", "At seven", "At four"],
        answer: 0,
      },
      {
        prompt: { en: "What should he take with him?", te: "ఆయన తనతో ఏం తీసుకెళ్ళాలి?" },
        options: ["His old reports", "His passbook", "His breakfast"],
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
        en: "Your friend has just come back from the doctor. Ask what the doctor said.",
        te: "మీ స్నేహితులు ఇప్పుడే డాక్టర్ దగ్గర నుంచి వచ్చారు. డాక్టర్ గారు ఏం చెప్పారని అడగండి.",
      },
      expected: ["What did the doctor say?", "What did the doctor tell you?", "So, what did the doctor say?"],
      options: ["What did the doctor say?", "What the doctor said?", "What did the doctor said?"],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "The doctor asks how long your knee has been hurting. Three weeks. Answer.",
        te: "మోకాలు ఎంత కాలంగా నొప్పిగా ఉందని డాక్టర్ గారు అడుగుతున్నారు. మూడు వారాలు. జవాబు చెప్పండి.",
      },
      expected: ["It has been hurting for three weeks.", "My knee has been hurting for three weeks.", "For three weeks."],
      options: ["It has been hurting for three weeks.", "It is hurting since three weeks.", "It hurts from three weeks."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "Your neighbour asks if you know Dr Prasad. You know him very well. Answer.",
        te: "డాక్టర్ ప్రసాద్ గారు మీకు తెలుసా అని పక్కింటివారు అడుగుతున్నారు. ఆయన మీకు బాగా తెలుసు. జవాబు చెప్పండి.",
      },
      expected: ["Yes, I know him very well.", "Yes, I know Dr Prasad very well.", "Yes, I know him well."],
      options: ["Yes, I know him very well.", "Yes, I am knowing him very well.", "Yes, I knowing him very well."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "The clinic's message", te: "క్లినిక్ మెసేజ్" },
      scene: {
        en: "The clinic phoned you for your neighbour Venkat this afternoon. He has just come home.",
        te: "ఈ రోజు మధ్యాహ్నం పక్కింటి వెంకట్ గారి కోసం క్లినిక్ నుంచి మీకు ఫోన్ వచ్చింది. ఆయన ఇప్పుడే ఇంటికి వచ్చారు.",
      },
      partner: { en: "Venkat (your neighbour)", te: "వెంకట్ (పక్కింటాయన)" },
      voice: "b",
      skills: [
        { id: "pass", label: { en: "Passing on a message", te: "మెసేజ్ అందించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening! You wanted to see me?",
          te: "నమస్కారం! నన్ను కలవాలనుకున్నారా?",
          hint: { en: "Greet him, and say the clinic called for him, and when.", te: "పలకరించి, ఆయన కోసం క్లినిక్ నుంచి ఎప్పుడు ఫోన్ వచ్చిందో చెప్పండి." },
          replies: [
            { say: "Good evening. Yes, the clinic called for you this afternoon.", good: true, skill: "pass" },
            { say: "Good evening. Yes, the clinic called for you today afternoon.", good: false, skill: "pass", fixIt: "indian-english" },
          ],
        },
        {
          partner: "The clinic? What did they want?",
          te: "క్లినిక్కా? వాళ్ళకి ఏం కావాలి?",
          hint: { en: "Pass on the nurse's news about his X-ray.", te: "ఆయన X-ray గురించి నర్సు చెప్పిన వార్త చెప్పండి." },
          replies: [
            { say: "The nurse said your X-ray report was ready.", good: true, skill: "pass" },
            { say: "The nurse told your X-ray report was ready.", good: false, skill: "pass" },
          ],
        },
        {
          partner: "Good. Do I have to go there tomorrow?",
          te: "మంచిది. రేపు అక్కడికి వెళ్ళాలా?",
          hint: { en: "Say yes, and pass on her request about the time.", te: "అవునని చెప్పి, టైమ్ గురించి ఆవిడ అడిగింది చెప్పండి." },
          replies: [
            { say: "Yes. She asked you to come before ten.", good: true, skill: "pass" },
            { say: "Yes. She asked you come before ten.", good: false, skill: "pass" },
          ],
        },
        {
          partner: "Did she say anything about the fee?",
          te: "ఫీజు గురించి ఆవిడ ఏమైనా చెప్పారా?",
          hint: { en: "Say you didn't ask, and offer him the clinic's number.", te: "మీరు అడగలేదని చెప్పి, క్లినిక్ నంబర్ ఇస్తానని చెప్పండి." },
          replies: [
            { say: "Sorry, I didn't ask. I'll give you their number.", good: true, skill: "polite" },
            {
              say: "How do I know? Call them yourself.",
              good: false,
              skill: "polite",
              react: { en: "Oh. Okay, I'll call them.", te: "ఓ. సరే, నేనే ఫోన్ చేస్తాను." },
            },
          ],
        },
        {
          partner: "Thank you very much. You're a good neighbour.",
          te: "చాలా థాంక్స్. మీరు మంచి పక్కింటివారు.",
          hint: { en: "Thank him, and wish him well.", te: "థాంక్స్ చెప్పి, అంతా బాగుండాలని చెప్పండి." },
          replies: [
            { say: "Thank you. I hope everything is fine.", good: true, skill: "polite" },
            { say: "Thank you. I hope everything fine.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "What the bank manager said", te: "బ్యాంక్ మేనేజర్ గారు చెప్పింది" },
      scene: {
        en: "You and your friend Anitha both have to update your KYC. You went to the bank today. Anitha calls.",
        te: "మీరు, మీ స్నేహితురాలు అనిత గారు ఇద్దరూ KYC update చేయించాలి. ఈ రోజు మీరు బ్యాంక్‌కి వెళ్ళారు. అనిత గారు ఫోన్ చేశారు.",
      },
      partner: { en: "Anitha (your friend)", te: "అనిత (మీ స్నేహితురాలు)" },
      skills: [
        { id: "pass", label: { en: "Passing on news", te: "వార్త అందించడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hi! Did you go to the bank today?",
          te: "హాయ్! ఈ రోజు బ్యాంక్‌కి వెళ్ళారా?",
          hint: { en: "Say yes, and that you met the manager.", te: "అవునని, మేనేజర్ గారిని కలిశారని చెప్పండి." },
          replies: [
            { say: "Yes, I went this morning. I met the manager.", good: true, skill: "pass" },
            { say: "Yes, I gone this morning. I met the manager.", good: false, skill: "pass" },
          ],
        },
        {
          partner: "What did she say about the KYC?",
          te: "KYC గురించి ఆవిడ ఏం చెప్పారు?",
          hint: { en: "Pass on her words: you both must do it this month.", te: "ఆవిడ మాట చెప్పండి: మీరిద్దరూ ఈ నెలలోనే చేయించాలి." },
          replies: [
            { say: "She said we had to update it this month.", good: true, skill: "pass" },
            { say: "She said we have to updating it this month.", good: false, skill: "pass" },
          ],
        },
        {
          partner: "Oh! What do we need to take?",
          te: "అయ్యో! ఏం తీసుకెళ్ళాలి?",
          hint: { en: "Pass on her request: your Aadhaar cards and one photo each.", te: "ఆవిడ అడిగింది చెప్పండి: ఆధార్ కార్డులు, ఒక్కొక్కరికి ఒక ఫోటో." },
          replies: [
            { say: "She asked us to bring our Aadhaar cards and a photo.", good: true, skill: "pass" },
            { say: "She asked us to bring our Aadhaar cards and photo.", good: false, skill: "pass", fixIt: "article" },
          ],
        },
        {
          partner: "Shall we go together on Monday?",
          te: "సోమవారం కలిసి వెళ్దామా?",
          hint: { en: "Agree, and pass on her advice to come early, before the crowd.", te: "ఒప్పుకుని, రద్దీ కంటే ముందే రమ్మని ఆవిడ ఇచ్చిన సలహా చెప్పండి." },
          replies: [
            { say: "Yes. She told us to come early, before the crowd.", good: true, skill: "pass" },
            {
              say: "Monday? No, I'm busy. Go alone.",
              good: false,
              skill: "polite",
              react: { en: "Oh! Okay, maybe another day then.", te: "ఓ! సరే, అయితే ఇంకో రోజు చూద్దాం." },
            },
          ],
        },
        {
          partner: "Okay, Monday at ten. Thank you for telling me!",
          te: "సరే, సోమవారం పదింటికి. చెప్పినందుకు థాంక్స్!",
          hint: { en: "Say goodbye kindly.", te: "మర్యాదగా బై చెప్పండి." },
          replies: [
            { say: "You're welcome. See you on Monday!", good: true, skill: "polite" },
            { say: "You're welcome. See you at Monday!", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
  ],
};

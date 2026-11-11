import type { ConversationDay } from "../../types";

/** Week 28, Day 6 (CURRICULUM §4): Conversation Day at the ward secretariat — a new address, a neighbour's pension, a ration card. */
export const day: ConversationDay = {
  id: "w28-conversation",
  kind: "conversation",
  title: { en: "A Morning at the Secretariat", te: "సచివాలయంలో ఒక ఉదయం" },
  summary: {
    en: "Use the whole week: change an address at the ward secretariat, help a neighbour with a pension problem, and add a name to a ration card.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: వార్డ్ సచివాలయంలో అడ్రస్ మార్చుకోండి, పక్కింటాయన పెన్షన్ సమస్యలో సహాయం చేయండి, రేషన్ కార్డులో పేరు చేర్పించండి.",
  },
  topics: ["offices", "bank", "food"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "A new address", te: "కొత్త అడ్రస్" },
    lines: [
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Good morning. How can I help you today?", te: "నమస్కారం. ఈ రోజు మీకు ఏం సహాయం కావాలి?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I moved to a new house last month.", te: "పోయిన నెల కొత్త ఇంటికి మారాను." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "Okay. Do you want to change your address?", te: "సరే. మీ అడ్రస్ మార్చుకోవాలనుకుంటున్నారా?" },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Yes, on my ration card and my Aadhaar.", te: "అవును, నా రేషన్ కార్డులో, ఆధార్‌లో." },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "We can do the ration card here.", te: "రేషన్ కార్డు పని ఇక్కడే చేస్తాం." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "And the Aadhaar? Can you do that too?", te: "మరి ఆధార్? అది కూడా చేస్తారా?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "No, for that you need to visit an Aadhaar centre.", te: "లేదండీ, దానికి మీరు ఆధార్ సెంటర్‌కి వెళ్ళాలి." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "I see. How long will the ration card take?", te: "అలాగా. రేషన్ కార్డుకి ఎంత కాలం పడుతుంది?" },
      { speaker: { en: "Radha", te: "రాధ" }, voice: "a", en: "About two weeks. Here is your acknowledgement slip.", te: "సుమారు రెండు వారాలు. ఇదిగోండి మీ రసీదు." },
      { speaker: { en: "Joseph", te: "జోసెఫ్" }, voice: "b", en: "Thank you. I will come back after two weeks.", te: "థాంక్యూ. రెండు వారాల తర్వాత మళ్ళీ వస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "Why did Joseph come to the secretariat?", te: "జోసెఫ్ సచివాలయానికి ఎందుకు వచ్చారు?" },
        options: ["To change his address", "To pay a bill", "To get his pension"],
        answer: 0,
      },
      {
        prompt: { en: "When did Joseph move?", te: "జోసెఫ్ ఎప్పుడు ఇల్లు మారారు?" },
        options: ["Last month", "Last week", "Last year"],
        answer: 0,
      },
      {
        prompt: { en: "Where does he need to go for his Aadhaar?", te: "ఆధార్ కోసం ఆయన ఎక్కడికి వెళ్ళాలి?" },
        options: ["To an Aadhaar centre", "To the ration shop", "To the bank"],
        answer: 0,
      },
      {
        prompt: { en: "How long will the ration card take?", te: "రేషన్ కార్డుకి ఎంత కాలం పడుతుంది?" },
        options: ["About two weeks", "About two days", "About two months"],
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
        en: "Your neighbour wants to update her Aadhaar. Tell the operator.",
        te: "మీ పక్కింటావిడ ఆధార్ అప్‌డేట్ చేయించుకోవాలనుకుంటున్నారు. ఆపరేటర్‌కి చెప్పండి.",
      },
      expected: ["My neighbour wants to update her Aadhaar.", "She wants to update her Aadhaar."],
      options: ["My neighbour wants to update her Aadhaar.", "My neighbour want to update her Aadhaar.", "My neighbour wants update her Aadhaar."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "preposition",
      situation: {
        en: "You applied on the fifth. Tell the clerk.",
        te: "మీరు ఐదో తారీఖున అప్లై చేశారు. క్లర్క్‌కి చెప్పండి.",
      },
      expected: ["I applied on the fifth.", "I applied on the fifth of this month."],
      options: ["I applied on the fifth.", "I applied at the fifth.", "I am applied on the fifth."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "question",
      situation: {
        en: "The clerk gives you a slip. Ask if you need to come again.",
        te: "క్లర్క్ మీకు రసీదు ఇచ్చారు. మళ్ళీ రావాలా అని అడగండి.",
      },
      expected: ["Do I need to come again?", "Do I have to come again?"],
      options: ["Do I need to come again?", "I need to come again?", "Do I need come again?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A neighbour's pension", te: "పక్కింటాయన పెన్షన్" },
      scene: {
        en: "Your old neighbour Narayana's pension did not come this month. You go to his bank for him. Anitha, the clerk, helps you.",
        te: "మీ పక్కింటి పెద్దాయన నారాయణ గారికి ఈ నెల పెన్షన్ రాలేదు. ఆయన కోసం మీరు బ్యాంక్‌కి వెళ్ళారు. క్లర్క్ అనిత గారు సహాయం చేస్తున్నారు.",
      },
      partner: { en: "Anitha (bank clerk)", te: "అనిత (బ్యాంక్ క్లర్క్)" },
      skills: [
        { id: "explain", label: { en: "Explaining the problem", te: "సమస్య చెప్పడం" } },
        { id: "polite", label: { en: "Staying polite", te: "మర్యాదగా ఉండటం" } },
      ],
      turns: [
        {
          partner: "Good morning. Please sit. How can I help?",
          te: "నమస్కారం. కూర్చోండి. ఏం కావాలి?",
          hint: { en: "Say your neighbour's pension did not come this month.", te: "మీ పక్కింటాయనకి ఈ నెల పెన్షన్ రాలేదని చెప్పండి." },
          replies: [
            { say: "My neighbour's pension did not come this month.", good: true, skill: "explain" },
            { say: "My neighbour pension not came this month.", good: false, skill: "explain" },
          ],
        },
        {
          partner: "Did he give his life certificate in November?",
          te: "నవంబర్‌లో ఆయన లైఫ్ సర్టిఫికెట్ ఇచ్చారా?",
          hint: { en: "Say no, and give the reason: he was sick.", te: "లేదని చెప్పి, కారణం చెప్పండి: ఆయనకి ఒంట్లో బాలేదు." },
          replies: [
            { say: "No, he didn't. He was not well.", good: true, skill: "explain" },
            { say: "No, he didn't gave it. He was not well.", good: false, skill: "explain" },
          ],
        },
        {
          partner: "Okay. He needs to give it now.",
          te: "సరే. ఆయన ఇప్పుడు ఇవ్వాలి.",
          hint: { en: "Ask if he can do it with his fingerprint.", te: "వేలిముద్రతో ఇవ్వొచ్చా అని అడగండి." },
          replies: [
            { say: "Can he give it with his fingerprint?", good: true, skill: "explain" },
            { say: "He can give with his fingerprint?", good: false, skill: "explain", fixIt: "question" },
          ],
        },
        {
          partner: "Yes, but he has to come here in person.",
          te: "ఇవ్వొచ్చు, కానీ ఆయన స్వయంగా ఇక్కడికి రావాలి.",
          hint: { en: "Say he cannot walk far, and ask for another way.", te: "ఆయన దూరం నడవలేరని చెప్పి, ఇంకో దారి ఉందా అని అడగండి." },
          replies: [
            { say: "He cannot walk far. Is there another way?", good: true, skill: "polite" },
            {
              say: "He is old! You go to his house!",
              good: false,
              skill: "polite",
              react: { en: "Please don't shout. Let me check for you.", te: "అరవకండి. మీ కోసం చూస్తాను." },
            },
          ],
        },
        {
          partner: "Yes. The postman can do it at his home.",
          te: "ఉంది. పోస్ట్‌మ్యాన్ ఆయన ఇంటికే వచ్చి చేస్తారు.",
          hint: { en: "Say you will tell him, and thank her.", te: "ఆయనకి చెప్తానని చెప్పి, ఆవిడకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Very good. I will tell him. Thank you.", good: true, skill: "polite" },
            { say: "Very good. I will tell to him. Thank you.", good: false, skill: "polite", fixIt: "preposition" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A name on the ration card", te: "రేషన్ కార్డులో పేరు" },
      scene: {
        en: "Your mother's name is missing from your ration card. Ramesh helps you at the ward secretariat.",
        te: "మీ రేషన్ కార్డులో మీ అమ్మ పేరు లేదు. వార్డ్ సచివాలయంలో రమేష్ గారు సహాయం చేస్తున్నారు.",
      },
      partner: { en: "Ramesh (secretariat staff)", te: "రమేష్ (సచివాలయం ఉద్యోగి)" },
      voice: "b",
      skills: [
        { id: "want", label: { en: "Saying what you want", te: "ఏం కావాలో చెప్పడం" } },
        { id: "ask", label: { en: "Asking about the time", te: "ఎప్పుడో అడగడం" } },
      ],
      turns: [
        {
          partner: "Good morning. Please come. How can I help?",
          te: "నమస్కారం. రండి. ఏం కావాలి?",
          hint: { en: "Say whose name you want to add, and to what.", te: "ఎవరి పేరు, దేనిలో చేర్పించాలో చెప్పండి." },
          replies: [
            { say: "I want to add my mother's name to my card.", good: true, skill: "want" },
            { say: "I want to add my mother name in my card.", good: false, skill: "want", fixIt: "preposition" },
          ],
        },
        {
          partner: "Okay. Do you have her Aadhaar card?",
          te: "సరే. ఆవిడ ఆధార్ కార్డ్ ఉందా?",
          hint: { en: "Say yes, and hand it over.", te: "ఉందని చెప్పి, కార్డ్ ఇవ్వండి." },
          replies: [
            { say: "Yes, here it is.", good: true, skill: "want" },
            { say: "Yes, here is it.", good: false, skill: "want" },
          ],
        },
        {
          partner: "Thank you. I will apply online for you now.",
          te: "థాంక్స్. ఇప్పుడే మీ కోసం ఆన్‌లైన్‌లో అప్లై చేస్తాను.",
          hint: { en: "Thank him, and ask when you will get the new card.", te: "థాంక్స్ చెప్పి, కొత్త కార్డ్ ఎప్పుడు వస్తుందో అడగండి." },
          replies: [
            { say: "Thank you. When will the new card come?", good: true, skill: "ask" },
            { say: "Thank you. When the new card will come?", good: false, skill: "ask", fixIt: "question" },
          ],
        },
        {
          partner: "In about three weeks. Please keep this slip.",
          te: "సుమారు మూడు వారాల్లో. ఈ రసీదు దాచుకోండి.",
          hint: { en: "Say you will keep it safe, and thank him.", te: "జాగ్రత్తగా దాచుకుంటానని చెప్పి, ఆయనకి థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Sure, I will. Thank you very much.", good: true, skill: "ask" },
            {
              say: "Three weeks? So slow! Do it today.",
              good: false,
              skill: "ask",
              react: { en: "Sorry, it has to go to the office first.", te: "సారీ అండీ, ముందు అది పై ఆఫీస్‌కి వెళ్ళాలి." },
            },
          ],
        },
      ],
    },
  ],
};

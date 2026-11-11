import type { ConversationDay } from "../../types";

/** Week 21, Day 6 (CURRICULUM §4): Conversation Day at the bank — updating KYC, a failed payment and a fraud call. */
export const day: ConversationDay = {
  id: "w21-conversation",
  kind: "conversation",
  title: { en: "A Morning at the Bank", te: "బ్యాంకులో ఒక ఉదయం" },
  summary: {
    en: "Use the whole week: update your KYC at the branch, take out money, and report a failed payment and a fraud call.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: బ్రాంచ్‌లో KYC అప్‌డేట్ చేయండి, డబ్బు తీయండి, ఫెయిల్ అయిన పేమెంట్, మోసపు కాల్ గురించి చెప్పండి.",
  },
  topics: ["bank", "money", "phone"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "At the bank counter", te: "బ్యాంక్ కౌంటర్ దగ్గర" },
    lines: [
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Good morning, madam. How can I help you?", te: "నమస్కారం మేడమ్. మీకు ఏం సహాయం కావాలి?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "I'd like to update my KYC, please.", te: "నా KYC అప్‌డేట్ చేయాలండీ." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Sure. You must bring your Aadhaar and PAN card.", te: "సరే. మీ ఆధార్, పాన్ కార్డ్ తప్పకుండా తీసుకురావాలి." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Here they are. Can I also withdraw some money?", te: "ఇవిగోండి. కొంచెం డబ్బు కూడా తీసుకోవచ్చా?" },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Yes. Please fill in this withdrawal slip.", te: "తీసుకోవచ్చు. ఈ విత్‌డ్రాయల్ స్లిప్ నింపండి." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Thank you. Yesterday a man called about my KYC.", te: "థాంక్యూ. నిన్న ఒకాయన నా KYC గురించి ఫోన్ చేశారు." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Did you share an OTP with him?", te: "ఆయనకి ఏమైనా OTP చెప్పారా?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "No. I hung up and came here.", te: "లేదు. ఫోన్ పెట్టేసి ఇక్కడికి వచ్చాను." },
      { speaker: { en: "Satish", te: "సతీష్" }, voice: "b", en: "Well done. We never ask for an OTP.", te: "చాలా మంచి పని చేశారు. మేము ఎప్పుడూ OTP అడగం." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Good to know. Thank you for your help.", te: "తెలిసింది, మంచిది. సహాయం చేసినందుకు థాంక్యూ." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a bank", "At a police station", "At a market"],
        answer: 0,
      },
      {
        prompt: { en: "What does Geetha want to update?", te: "గీత ఏం అప్‌డేట్ చేయాలనుకుంటున్నారు?" },
        options: ["Her KYC", "Her phone number", "Her address"],
        answer: 0,
      },
      {
        prompt: { en: "What must she bring?", te: "ఆవిడ ఏం తీసుకురావాలి?" },
        options: ["Her Aadhaar and PAN card", "Only her passbook", "A photo and a letter"],
        answer: 0,
      },
      {
        prompt: { en: "What did Geetha do after the call?", te: "ఆ కాల్ తర్వాత గీత ఏం చేశారు?" },
        options: ["She hung up and came to the bank.", "She shared the OTP.", "She called the man back."],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "plural",
      situation: {
        en: "At the counter, ask to deposit five thousand rupees.",
        te: "కౌంటర్ దగ్గర ఐదు వేల రూపాయలు డిపాజిట్ చేయాలని అడగండి.",
      },
      expected: ["I'd like to deposit five thousand rupees.", "I would like to deposit five thousand rupees."],
      options: ["I'd like to deposit five thousand rupees.", "I'd like to deposit five thousands rupees.", "I like deposit five thousand rupees."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The ATM is not giving cash. Tell the guard.",
        te: "ATM డబ్బు ఇవ్వట్లేదు. గార్డ్‌కి చెప్పండి.",
      },
      expected: ["Excuse me, the ATM is not working.", "The ATM is not working."],
      options: ["Excuse me, the ATM is not working.", "Excuse me, the ATM not working.", "Excuse me, the ATM is no working."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "A caller asks for your PIN. Refuse.",
        te: "ఒకరు ఫోన్ చేసి మీ PIN అడుగుతున్నారు. లేదు అనండి.",
      },
      expected: ["Sorry, I never share my PIN.", "No. I never share my PIN.", "Sorry, I don't share my PIN."],
      options: ["Sorry, I never share my PIN.", "Sorry, I don't never share my PIN.", "Okay, wait. I will tell you."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Updating KYC at the branch", te: "బ్రాంచ్‌లో KYC అప్‌డేట్" },
      scene: {
        en: "You go to your bank branch to update your KYC. Anitha, the clerk, helps you.",
        te: "KYC అప్‌డేట్ చేయడానికి మీ బ్యాంక్ బ్రాంచ్‌కి వెళ్ళారు. క్లర్క్ అనిత సహాయం చేస్తున్నారు.",
      },
      partner: { en: "Anitha (bank clerk)", te: "అనిత (బ్యాంక్ క్లర్క్)" },
      skills: [
        { id: "bank", label: { en: "Bank work", te: "బ్యాంక్ పని" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good morning. Please take a seat.",
          te: "నమస్కారం. కూర్చోండి.",
          hint: { en: "Greet her, and say what you want to do today.", te: "నమస్కారం చెప్పి, ఈ రోజు ఏ పని మీద వచ్చారో చెప్పండి." },
          replies: [
            { say: "Good morning. I'd like to update my KYC, please.", good: true, skill: "bank" },
            { say: "Good morning. I want KYC update.", good: false, skill: "bank" },
          ],
        },
        {
          partner: "Sure. Did you bring your Aadhaar card?",
          te: "సరే. మీ ఆధార్ కార్డ్ తెచ్చారా?",
          hint: { en: "Say yes, and hand it to her.", te: "అవునని చెప్పి, ఆవిడకి ఇవ్వండి." },
          replies: [
            { say: "Yes. Here it is.", good: true, skill: "bank" },
            { say: "Yes. Here is it.", good: false, skill: "bank" },
          ],
        },
        {
          partner: "Thank you. You have to sign this form.",
          te: "థాంక్యూ. మీరు ఈ ఫారం మీద సంతకం చేయాలి.",
          hint: { en: "Ask her where to sign.", te: "ఎక్కడ సంతకం చేయాలో అడగండి." },
          replies: [
            { say: "Where do I have to sign?", good: true, skill: "bank" },
            { say: "Where I have to sign?", good: false, skill: "bank", fixIt: "question" },
          ],
        },
        {
          partner: "Here, at the bottom. Do you have a pen?",
          te: "ఇక్కడ, కింద. మీ దగ్గర పెన్ ఉందా?",
          hint: { en: "Say no, and ask to borrow one politely.", te: "లేదని చెప్పి, ఒక పెన్ మర్యాదగా అడగండి." },
          replies: [
            { say: "No. Can I borrow your pen, please?", good: true, skill: "polite" },
            {
              say: "No. Give pen.",
              good: false,
              skill: "polite",
              react: { en: "Hmm. Okay, here is a pen.", te: "హ్మ్. సరే, ఇదిగోండి పెన్." },
            },
          ],
        },
        {
          partner: "Done. We will update your KYC in two days.",
          te: "అయిపోయింది. రెండు రోజుల్లో మీ KYC అప్‌డేట్ చేస్తాం.",
          hint: { en: "Thank her, and say goodbye.", te: "ఆవిడకి థాంక్స్ చెప్పి, వెళ్ళొస్తానని చెప్పండి." },
          replies: [
            { say: "Thank you very much. Have a good day.", good: true, skill: "polite" },
            { say: "Thank you for doing the needful.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "A failed payment and a fraud call", te: "ఫెయిల్ అయిన పేమెంట్, మోసపు కాల్" },
      scene: {
        en: "Your UPI payment failed, but the money left your account. You also got a fraud call. Ramana, the bank manager, listens.",
        te: "మీ UPI పేమెంట్ ఫెయిల్ అయింది, కానీ అకౌంట్ నుంచి డబ్బు పోయింది. మీకు ఒక మోసపు కాల్ కూడా వచ్చింది. బ్యాంక్ మేనేజర్ రమణ వింటున్నారు.",
      },
      partner: { en: "Ramana (bank manager)", te: "రమణ (బ్యాంక్ మేనేజర్)" },
      voice: "b",
      skills: [
        { id: "problem", label: { en: "Explaining a problem", te: "సమస్య చెప్పడం" } },
        { id: "polite", label: { en: "Speaking politely", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello. Please sit down. What is the problem?",
          te: "హలో. కూర్చోండి. సమస్య ఏంటి?",
          hint: { en: "Say your payment failed, but the money left your account.", te: "పేమెంట్ ఫెయిల్ అయింది, కానీ అకౌంట్ నుంచి డబ్బు పోయిందని చెప్పండి." },
          replies: [
            { say: "My payment failed, but the money left my account.", good: true, skill: "problem" },
            { say: "My payment failed, but money cut from account.", good: false, skill: "problem" },
          ],
        },
        {
          partner: "I see. When did this happen?",
          te: "అలాగా. ఇది ఎప్పుడు జరిగింది?",
          hint: { en: "Say it was the night before, around nine.", te: "ఎప్పుడు జరిగిందో చెప్పండి: నిన్న రాత్రి, దాదాపు తొమ్మిది గంటలకి." },
          replies: [
            { say: "It happened last night, around nine.", good: true, skill: "problem" },
            { say: "It happened yesterday night, around nine.", good: false, skill: "problem", fixIt: "indian-english" },
          ],
        },
        {
          partner: "Don't worry. The money will come back in three days.",
          te: "భయపడకండి. మూడు రోజుల్లో డబ్బు తిరిగి వస్తుంది.",
          hint: { en: "Thank him. Then tell him about the fraud call.", te: "థాంక్స్ చెప్పి, మోసపు కాల్ గురించి చెప్పండి." },
          replies: [
            { say: "Thank you. I also got a fraud call today.", good: true, skill: "problem" },
            { say: "Thank you. Also one fraud call came today.", good: false, skill: "problem" },
          ],
        },
        {
          partner: "Oh! What did the caller ask for?",
          te: "అవునా! ఫోన్ చేసినవాళ్ళు ఏం అడిగారు?",
          hint: { en: "Say what he wanted, and that you refused.", te: "ఆయన ఏం అడిగారో, మీరు ఇవ్వలేదని చెప్పండి." },
          replies: [
            { say: "He asked for my OTP. I did not give it.", good: true, skill: "problem" },
            { say: "He asked my OTP. I did not gave it.", good: false, skill: "problem" },
          ],
        },
        {
          partner: "Good. Please also call one nine three zero.",
          te: "మంచిది. 1930 కి కూడా ఫోన్ చేయండి.",
          hint: { en: "Say you will do it today, and thank him.", te: "ఈ రోజే చేస్తానని చెప్పి, థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Okay, I will call them today. Thank you.", good: true, skill: "polite" },
            {
              say: "Why? You do it. It's your job.",
              good: false,
              skill: "polite",
              react: { en: "I can help, but you have to call yourself.", te: "నేను సహాయం చేస్తాను, కానీ మీరే ఫోన్ చేయాలి." },
            },
          ],
        },
      ],
    },
  ],
};

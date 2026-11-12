import type { ConversationDay } from "../../types";

/** Week 51, Day 6 (CURRICULUM §5): Conversation Day — a follow-up visit about BP, and checking a new prescription. */
export const day: ConversationDay = {
  id: "w51-conversation",
  kind: "conversation",
  title: { en: "A Follow-Up Visit", te: "ఫాలో-అప్ విజిట్" },
  summary: {
    en: "Use the whole week: a follow-up visit about BP with Dr Fatima, and checking a new prescription with the pharmacist.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: BP గురించి డాక్టర్ ఫాతిమా గారి దగ్గర ఫాలో-అప్, కొత్త ప్రిస్క్రిప్షన్‌ని ఫార్మసిస్ట్‌తో సరిచూసుకోవడం.",
  },
  topics: ["doctor", "health", "pharmacy"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Back at the clinic", te: "మళ్ళీ క్లినిక్‌లో" },
    lines: [
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Hello, Mr Mohan. How have you been since your last visit?", te: "నమస్కారం మోహన్ గారూ. పోయినసారి వచ్చినప్పటి నుంచి ఎలా ఉన్నారు?" },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Much better, doctor. I walk for forty minutes every morning now.", te: "చాలా బాగున్నాను డాక్టర్ గారూ. ఇప్పుడు రోజూ పొద్దున నలభై నిమిషాలు నడుస్తున్నాను." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Good. Your BP is one thirty over eighty-five today.", te: "మంచిది. ఈ రోజు మీ BP 130 బై 85 ఉంది." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Is that normal? Last time it was slightly high.", te: "అది నార్మలేనా? పోయినసారి కొంచెం ఎక్కువగా ఉంది." },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "It's borderline now. So I'm changing your tablet to a milder one.", te: "ఇప్పుడు బోర్డర్‌లైన్‌లో ఉంది. అందుకే మీ టాబ్లెట్‌ని తేలికైనదానికి మారుస్తున్నాను." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Sorry, do you mean I should stop the old tablet?", te: "సారీ, అంటే పాత టాబ్లెట్ ఆపేయాలనా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Yes. Start the new one tomorrow, after breakfast.", te: "అవును. కొత్తది రేపట్నుంచి, టిఫిన్ తర్వాత మొదలుపెట్టండి." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Let me repeat that. I stop the old one today and start the new one tomorrow?", te: "ఒకసారి మళ్ళీ చెప్తాను. పాతది ఈ రోజు ఆపేసి, రేపట్నుంచి కొత్తది మొదలుపెట్టాలి, అంతేనా?" },
      { speaker: { en: "Fatima", te: "ఫాతిమా" }, voice: "a", en: "Exactly. And cut down on salt. Come for a follow-up in two months.", te: "సరిగ్గా. ఉప్పు కూడా తగ్గించండి. రెండు నెలల్లో ఫాలో-అప్‌కి రండి." },
      { speaker: { en: "Mohan", te: "మోహన్" }, voice: "b", en: "Thank you, doctor. I'll check the new tablet with the pharmacist too.", te: "థాంక్స్ డాక్టర్ గారూ. కొత్త టాబ్లెట్ గురించి ఫార్మసిస్ట్‌తో కూడా సరిచూసుకుంటాను." },
    ],
    questions: [
      {
        prompt: { en: "What is this visit about?", te: "ఈ విజిట్ దేని గురించి?" },
        options: ["Mohan's BP and a new tablet", "A knee operation", "A new blood test for sugar"],
        answer: 0,
      },
      {
        prompt: { en: "What does Mohan do every morning now?", te: "మోహన్ గారు ఇప్పుడు రోజూ పొద్దున ఏం చేస్తున్నారు?" },
        options: ["He walks for forty minutes.", "He does yoga for an hour.", "He sits in the sun."],
        answer: 0,
      },
      {
        prompt: { en: "When should Mohan start the new tablet?", te: "మోహన్ గారు కొత్త టాబ్లెట్ ఎప్పుడు మొదలుపెట్టాలి?" },
        options: ["Tomorrow, after breakfast", "Today, after dinner", "In two months"],
        answer: 0,
      },
      {
        prompt: { en: "When is his follow-up?", te: "ఆయన ఫాలో-అప్ ఎప్పుడు?" },
        options: ["In two months", "In two weeks", "Next year"],
        answer: 0,
      },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      fixIt: "duration",
      situation: {
        en: "Your friend Venkat's new doctor asks how long he has had diabetes. It started in 2015. Answer for him.",
        te: "మీ స్నేహితుడు వెంకట్ గారికి ఎన్నాళ్ళ నుంచి షుగర్ ఉందని కొత్త డాక్టర్ అడుగుతున్నారు. 2015 లో మొదలైంది. ఆయన తరఫున జవాబు చెప్పండి.",
      },
      expected: ["He's had diabetes since two thousand fifteen.", "He has had diabetes since two thousand fifteen.", "Since two thousand fifteen."],
      options: ["He's had diabetes since two thousand fifteen.", "He has diabetes since two thousand fifteen.", "He's had diabetes for two thousand fifteen."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "be",
      situation: {
        en: "The pharmacist gives you a tablet with a new name. Check if it is the same as your old one.",
        te: "ఫార్మసిస్ట్ కొత్త పేరుతో ఉన్న టాబ్లెట్ ఇచ్చారు. అది మీ పాత టాబ్లెట్ లాంటిదేనా అని సరిచూసుకోండి.",
      },
      expected: ["Is this the same as my old tablet?", "Is it the same medicine?", "Is this the same medicine as before?"],
      options: ["Is this the same as my old tablet?", "This the same as my old tablet?", "Is this same as my old tablet?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "indian-english",
      situation: {
        en: "Your neighbour Grace has a fever. Kindly tell her to rest at home today.",
        te: "మీ పక్కింటి గ్రేస్ గారికి జ్వరంగా ఉంది. ఈ రోజు ఇంట్లోనే విశ్రాంతి తీసుకోమని ఆవిడకి ప్రేమగా చెప్పండి.",
      },
      expected: ["Please rest at home today.", "You should rest at home today.", "Please get some rest today."],
      options: ["Please rest at home today.", "Please take rest at home today.", "Please resting at home today."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Follow-up with Dr Fatima", te: "డాక్టర్ ఫాతిమా దగ్గర ఫాలో-అప్" },
      scene: {
        en: "Last month, your BP was slightly high at a check-up. Today is your follow-up with Dr Fatima.",
        te: "పోయిన నెల చెకప్‌లో మీ BP కొంచెం ఎక్కువగా వచ్చింది. ఈ రోజు డాక్టర్ ఫాతిమా గారి దగ్గర మీ ఫాలో-అప్.",
      },
      partner: { en: "Dr Fatima (your doctor)", te: "డాక్టర్ ఫాతిమా (మీ డాక్టర్)" },
      skills: [
        { id: "check", label: { en: "Checking the advice", te: "సలహా సరిచూసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello again! How have you been since last month?",
          te: "మళ్ళీ నమస్కారం! పోయిన నెల నుంచి ఎలా ఉన్నారు?",
          hint: { en: "Greet her, and say you feel much better.", te: "నమస్కారం చెప్పి, చాలా బాగున్నానని చెప్పండి." },
          replies: [
            { say: "Hello, doctor. I'm much better, thank you.", good: true, skill: "polite" },
            { say: "Hello, doctor. I much better, thank you.", good: false, skill: "polite", fixIt: "be" },
          ],
        },
        {
          partner: "Good. Do you walk every day now?",
          te: "మంచిది. ఇప్పుడు రోజూ నడుస్తున్నారా?",
          hint: { en: "Say yes, and how long you walk each morning.", te: "అవును అని, రోజూ పొద్దున ఎంతసేపు నడుస్తారో చెప్పండి." },
          replies: [
            { say: "Yes, I walk for thirty minutes every morning.", good: true, skill: "check" },
            { say: "Yes, I walk for thirty minute every morning.", good: false, skill: "check", fixIt: "plural" },
          ],
        },
        {
          partner: "Your BP is better, but still borderline. I'm changing your tablet.",
          te: "మీ BP మెరుగైంది, కానీ ఇంకా బోర్డర్‌లైన్‌లోనే ఉంది. మీ టాబ్లెట్ మారుస్తున్నాను.",
          hint: { en: "Check: ask if you should stop the old tablet.", te: "సరిచూసుకోండి: పాత టాబ్లెట్ ఆపేయాలా అని అడగండి." },
          replies: [
            { say: "Do you mean I should stop the old one?", good: true, skill: "check" },
            { say: "So I should stop the old tablet today?", good: true, skill: "check" },
            { say: "Do you mean I should stopped the old one?", good: false, skill: "check" },
          ],
        },
        {
          partner: "Yes. One new tablet every morning, after breakfast.",
          te: "అవును. రోజూ పొద్దున, టిఫిన్ తర్వాత, కొత్త టాబ్లెట్ ఒకటి.",
          hint: { en: "Repeat the instructions back to check them.", te: "సూచనలు మళ్ళీ చెప్పి సరిచూసుకోండి." },
          replies: [
            { say: "Let me repeat that: one tablet every morning, after breakfast.", good: true, skill: "check" },
            { say: "So one new tablet every morning, after breakfast?", good: true, skill: "check" },
            {
              say: "Again a new tablet? You doctors keep changing everything.",
              good: false,
              skill: "polite",
              react: { en: "I understand. The new one is milder, and better for you now.", te: "అర్థమైంది అండీ. కొత్తది తేలికైనది, ఇప్పుడు మీకు ఇదే మంచిది." },
            },
          ],
        },
        {
          partner: "Perfect. Come back in two months. Any questions?",
          te: "చాలా బాగుంది. రెండు నెలల తర్వాత మళ్ళీ రండి. ఏమైనా ప్రశ్నలు ఉన్నాయా?",
          hint: { en: "Say you have none, thank her, and say goodbye.", te: "ఏమీ లేవని చెప్పి, థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "No questions. Thank you, doctor. See you in two months.", good: true, skill: "polite" },
            { say: "No questions. Thank you, doctor. See you after two month.", good: false, skill: "polite", fixIt: "plural" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "At the medical shop", te: "మెడికల్ షాపులో" },
      scene: {
        en: "You take Dr Fatima's new prescription to the medical shop. Prasad, the pharmacist, gives you the tablets.",
        te: "డాక్టర్ ఫాతిమా గారు రాసిన కొత్త ప్రిస్క్రిప్షన్ తీసుకుని మెడికల్ షాపుకి వెళ్ళారు. ఫార్మసిస్ట్ ప్రసాద్ గారు టాబ్లెట్లు ఇస్తున్నారు.",
      },
      partner: { en: "Prasad (the pharmacist)", te: "ప్రసాద్ (ఫార్మసిస్ట్)" },
      voice: "b",
      skills: [
        { id: "check", label: { en: "Checking the medicine", te: "మందు సరిచూసుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Good evening. Here are your tablets: thirty, for one month.",
          te: "నమస్కారం. ఇవిగోండి మీ టాబ్లెట్లు: ముప్పై, ఒక నెలకి.",
          hint: { en: "Check that this is the new tablet from the prescription.", te: "ఇది ప్రిస్క్రిప్షన్‌లోని కొత్త టాబ్లెట్టేనా అని సరిచూసుకోండి." },
          replies: [
            { say: "Is this the new tablet from Dr Fatima's prescription?", good: true, skill: "check" },
            { say: "This the new tablet from Dr Fatima's prescription?", good: false, skill: "check", fixIt: "be" },
          ],
        },
        {
          partner: "Yes. It's a different brand, but the same medicine.",
          te: "అవును. బ్రాండ్ వేరు, కానీ మందు అదే.",
          hint: { en: "Check if you take it the same way as the old one.", te: "పాత దాని లాగే వేసుకోవాలా అని సరిచూసుకోండి." },
          replies: [
            { say: "So I should take it after breakfast, like the old one?", good: true, skill: "check" },
            { say: "Do I take it the same way, after breakfast?", good: true, skill: "check" },
            { say: "So I should to take it after breakfast?", good: false, skill: "check" },
          ],
        },
        {
          partner: "Yes, one after breakfast. But don't take the old one with it.",
          te: "అవును, టిఫిన్ తర్వాత ఒకటి. కానీ దీనితో పాటు పాతది వేసుకోకండి.",
          hint: { en: "Repeat this back to check it.", te: "ఇది మళ్ళీ చెప్పి సరిచూసుకోండి." },
          replies: [
            { say: "Let me repeat that: only the new one, not both.", good: true, skill: "check" },
            { say: "So I shouldn't take both tablets together?", good: true, skill: "check" },
            {
              say: "I know, I know. Just give me the bill.",
              good: false,
              skill: "polite",
              react: { en: "Okay. I'm only telling you for your safety.", te: "సరే అండీ. మీ మంచికే చెప్తున్నాను." },
            },
          ],
        },
        {
          partner: "That's right. It comes to 320 rupees.",
          te: "సరిగ్గా. మొత్తం 320 రూపాయలు అయింది.",
          hint: { en: "Pay, and ask for the bill politely.", te: "డబ్బులిచ్చి, మర్యాదగా బిల్ అడగండి." },
          replies: [
            { say: "Here you are. Can I have the bill, please?", good: true, skill: "polite" },
            { say: "Here you are. Can I have bill, please?", good: false, skill: "polite", fixIt: "article" },
          ],
        },
        {
          partner: "Here's your bill. Take care!",
          te: "ఇదిగోండి మీ బిల్. జాగ్రత్తగా ఉండండి!",
          hint: { en: "Thank him, and say goodbye.", te: "ఆయనకి థాంక్స్ చెప్పి, బై చెప్పండి." },
          replies: [
            { say: "Thank you. Have a good evening!", good: true, skill: "polite" },
            { say: "Thanks a lot. Bye!", good: true, skill: "polite" },
            { say: "Thanks you. Bye!", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 43, Day 6 (CURRICULUM §5): Conversation Day — an interview for the colony magazine, and meeting an old colleague after twenty years. */
export const day: ConversationDay = {
  id: "w43-conversation",
  kind: "conversation",
  title: { en: "An Interview for the Colony Magazine", te: "కాలనీ పత్రిక ఇంటర్వ్యూ" },
  summary: {
    en: "Use the whole week: answer questions about your life for the colony magazine, and catch up with an old colleague after twenty years.",
    te: "ఈ వారం నేర్చుకున్నదంతా వాడండి: కాలనీ పత్రిక కోసం మీ జీవితం గురించి జవాబులు చెప్పండి, ఇరవై ఏళ్ళ తర్వాత కలిసిన పాత సహోద్యోగితో కబుర్లు చెప్పండి.",
  },
  topics: ["people", "neighbours", "time"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Meet our neighbour", te: "మన కాలనీవారిని కలుద్దాం" },
    lines: [
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "Good evening, Ramesh. Thank you for talking to our colony magazine.", te: "నమస్తే రమేష్ గారూ. మన కాలనీ పత్రికతో మాట్లాడుతున్నందుకు థాంక్స్." },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "My pleasure, Grace. What would you like to know?", te: "సంతోషమండీ, గ్రేస్ గారూ. ఏం తెలుసుకోవాలనుకుంటున్నారు?" },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "First, where were you born?", te: "ముందు, మీరు ఎక్కడ పుట్టారు?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "I was born in Khammam in nineteen fifty-eight.", te: "నేను 1958 లో ఖమ్మంలో పుట్టాను." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "And what work did you do?", te: "మరి మీరు ఏం పని చేసేవారు?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "I was a cook in a college hostel for thirty-five years.", te: "నేను ముప్పై ఐదేళ్ళు ఒక కాలేజీ హాస్టల్‌లో వంట చేసేవాడిని." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "How long have you lived in our colony?", te: "మన కాలనీలో ఎంత కాలంగా ఉంటున్నారు?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "Since two thousand one. I retired in two thousand eighteen.", te: "2001 నుంచి. 2018 లో రిటైర్ అయ్యాను." },
      { speaker: { en: "Grace", te: "గ్రేస్" }, voice: "a", en: "What has changed in your life since then?", te: "అప్పటి నుంచి మీ జీవితంలో ఏం మారింది?" },
      { speaker: { en: "Ramesh", te: "రమేష్" }, voice: "b", en: "I have learned to play the flute! I practice every morning.", te: "నేను ఫ్లూట్ వాయించడం నేర్చుకున్నాను! రోజూ పొద్దున ప్రాక్టీస్ చేస్తాను." },
    ],
    questions: [
      {
        prompt: { en: "What is this conversation?", te: "ఇది ఏం సంభాషణ?" },
        options: ["An interview for the colony magazine", "A job interview at a hostel", "A visit to the doctor"],
        answer: 0,
      },
      {
        prompt: { en: "When was Ramesh born?", te: "రమేష్ గారు ఎప్పుడు పుట్టారు?" },
        options: ["In nineteen fifty-eight", "In nineteen eighty-five", "In two thousand one"],
        answer: 0,
      },
      {
        prompt: { en: "What work did Ramesh do?", te: "రమేష్ గారు ఏం పని చేసేవారు?" },
        options: ["He was a cook in a hostel.", "He was a teacher in a college.", "He was a clerk in a bank."],
        answer: 0,
      },
      {
        prompt: { en: "What has Ramesh learned?", te: "రమేష్ గారు ఏం నేర్చుకున్నారు?" },
        options: ["To play the flute", "To use a smartphone", "To cook"],
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
        en: "Tell a friend about Ramesh: he practices the flute every morning.",
        te: "రమేష్ గారి గురించి ఒక స్నేహితులకి చెప్పండి: ఆయన రోజూ పొద్దున ఫ్లూట్ ప్రాక్టీస్ చేస్తారు.",
      },
      expected: ["Ramesh practices the flute every morning.", "He practices the flute every morning.", "He plays the flute every morning."],
      options: ["Ramesh practices the flute every morning.", "Ramesh practice the flute every morning.", "Ramesh is practicing the flute every morning."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      fixIt: "state-ing",
      situation: {
        en: "The magazine asks how long you have known your neighbour Salma. Say since 1995.",
        te: "మీ పక్కింటావిడ సల్మా గారు మీకు ఎంత కాలంగా తెలుసని పత్రికవారు అడుగుతున్నారు. 1995 నుంచి అని చెప్పండి.",
      },
      expected: ["I have known Salma since nineteen ninety-five.", "I've known her since nineteen ninety-five.", "Since nineteen ninety-five."],
      options: [
        "I have known Salma since nineteen ninety-five.",
        "I am knowing Salma since nineteen ninety-five.",
        "I know Salma since nineteen ninety-five.",
      ],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      fixIt: "article",
      situation: {
        en: "Tell the magazine you worked as a teacher in a village school.",
        te: "మీరు ఒక ఊరి స్కూల్లో టీచర్‌గా పని చేశారని పత్రికవారికి చెప్పండి.",
      },
      expected: ["I worked as a teacher in a village school.", "I was a teacher in a village school.", "I taught in a village school."],
      options: [
        "I worked as a teacher in a village school.",
        "I worked as teacher in a village school.",
        "I have worked as a teacher in a village school in nineteen eighty.",
      ],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Your story for the magazine", te: "పత్రిక కోసం మీ కథ" },
      scene: {
        en: "Anitha writes for your colony magazine. She wants your life story for the next issue.",
        te: "అనిత గారు మీ కాలనీ పత్రికకి రాస్తారు. వచ్చే సంచిక కోసం మీ జీవిత కథ అడుగుతున్నారు.",
      },
      partner: { en: "Anitha (from the colony magazine)", te: "అనిత (కాలనీ పత్రిక నుంచి)" },
      skills: [
        { id: "story", label: { en: "Telling your life story", te: "మీ జీవిత కథ చెప్పడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Hello! Can I ask you a few questions for the colony magazine?",
          te: "హలో! కాలనీ పత్రిక కోసం మిమ్మల్ని కొన్ని ప్రశ్నలు అడగొచ్చా?",
          hint: { en: "Say yes happily, and ask her to come in.", te: "సంతోషంగా సరే అని, లోపలికి రమ్మనండి." },
          replies: [
            { say: "Of course! Please come in and sit down.", good: true, skill: "polite" },
            { say: "Sure, please come in.", good: true, skill: "polite" },
            {
              say: "A magazine? I don't have time for this.",
              good: false,
              skill: "polite",
              react: { en: "Oh, it will only take ten minutes.", te: "అయ్యో, పది నిమిషాలే పడుతుందండీ." },
            },
          ],
        },
        {
          partner: "Thank you. Where were you born, and where did you grow up?",
          te: "థాంక్స్. మీరు ఎక్కడ పుట్టారు, ఎక్కడ పెరిగారు?",
          hint: { en: "Say Tenali and the year, 1961, then say you grew up there.", te: "తెనాలి అని, సంవత్సరం 1961 అని చెప్పి, అక్కడే పెరిగారని చెప్పండి." },
          replies: [
            { say: "I was born in Tenali in nineteen sixty-one, and I grew up there.", good: true, skill: "story" },
            { say: "I am born in Tenali in nineteen sixty-one, and I grew up there.", good: false, skill: "story" },
          ],
        },
        {
          partner: "And your working years?",
          te: "మరి మీ ఉద్యోగ జీవితం?",
          hint: { en: "Say what your job was, and for how many years: a teacher, thirty years.", te: "మీ ఉద్యోగం ఏంటో, ఎన్నేళ్ళో చెప్పండి: టీచర్, ముప్పై ఏళ్ళు." },
          replies: [
            { say: "I worked as a teacher for thirty years.", good: true, skill: "story" },
            { say: "I was a teacher for thirty years.", good: true, skill: "story" },
            { say: "I worked as teacher for thirty years.", good: false, skill: "story", fixIt: "article" },
          ],
        },
        {
          partner: "How long have you lived in this colony?",
          te: "ఈ కాలనీలో ఎంత కాలంగా ఉంటున్నారు?",
          hint: { en: "Say you came in 1999 and still live here.", te: "1999 లో వచ్చారని, ఇప్పటికీ ఇక్కడే ఉన్నారని చెప్పండి." },
          replies: [
            { say: "I have lived here since nineteen ninety-nine.", good: true, skill: "story" },
            { say: "I am living here since nineteen ninety-nine.", good: false, skill: "story", fixIt: "duration" },
          ],
        },
        {
          partner: "Lovely. Thank you! The magazine comes out next month.",
          te: "బాగుంది. థాంక్స్! పత్రిక వచ్చే నెల వస్తుంది.",
          hint: { en: "Thank her, and say you are happy to be in it.", te: "థాంక్స్ చెప్పి, అందులో మీ కథ రావడం సంతోషమని చెప్పండి." },
          replies: [
            { say: "Thank you, Anitha. I'm happy to be in it!", good: true, skill: "polite" },
            { say: "Thank you, Anitha. I'm happy to be in magazine!", good: false, skill: "polite", fixIt: "article" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "An old colleague", te: "పాత సహోద్యోగి" },
      scene: {
        en: "At the bus stand, you meet Srinivas. You worked together at the sugar factory twenty years ago.",
        te: "బస్ స్టాండ్‌లో శ్రీనివాస్ గారు కనిపించారు. ఇరవై ఏళ్ళ క్రితం మీరిద్దరూ షుగర్ ఫ్యాక్టరీలో కలిసి పని చేశారు.",
      },
      partner: { en: "Srinivas (your old colleague)", te: "శ్రీనివాస్ (మీ పాత సహోద్యోగి)" },
      voice: "b",
      skills: [
        { id: "catchup", label: { en: "Catching up", te: "కబుర్లు చెప్పుకోవడం" } },
        { id: "polite", label: { en: "Speaking kindly", te: "మర్యాదగా మాట్లాడటం" } },
      ],
      turns: [
        {
          partner: "Excuse me, are you Kiran? From the sugar factory?",
          te: "ఎక్స్‌క్యూజ్ మీ, మీరు కిరణ్ గారేనా? షుగర్ ఫ్యాక్టరీ నుంచి?",
          hint: { en: "Say yes, and greet him warmly: you remember him.", te: "అవును అని, ఆయన గుర్తున్నారని ఆప్యాయంగా పలకరించండి." },
          replies: [
            { say: "Yes! Srinivas! How are you? It's been so long!", good: true, skill: "polite" },
            {
              say: "Yes. Who are you? I don't know you.",
              good: false,
              skill: "polite",
              react: { en: "It's me, Srinivas! We worked together for ten years!", te: "నేనండీ, శ్రీనివాస్! మనం పదేళ్ళు కలిసి పని చేశాం!" },
            },
          ],
        },
        {
          partner: "I'm fine! When did you leave the factory?",
          te: "నేను బాగున్నాను! మీరు ఫ్యాక్టరీ ఎప్పుడు వదిలేశారు?",
          hint: { en: "Say you retired, and the year: 2018.", te: "రిటైర్ అయ్యారని, ఆ సంవత్సరం చెప్పండి: 2018." },
          replies: [
            { say: "I retired in two thousand eighteen.", good: true, skill: "catchup" },
            { say: "I have retired in two thousand eighteen.", good: false, skill: "catchup" },
          ],
        },
        {
          partner: "And where do you live now?",
          te: "మరి ఇప్పుడు ఎక్కడ ఉంటున్నారు?",
          hint: { en: "Name your colony, Gandhi Nagar, and say how long you have lived there.", te: "మీ కాలనీ పేరు గాంధీ నగర్ అని, ఎంత కాలంగా ఉంటున్నారో చెప్పండి." },
          replies: [
            { say: "I have lived in Gandhi Nagar for fifteen years.", good: true, skill: "catchup" },
            { say: "I have lived in Gandhi Nagar since fifteen years.", good: false, skill: "catchup", fixIt: "preposition" },
          ],
        },
        {
          partner: "Has the factory changed? I haven't been there for years.",
          te: "ఫ్యాక్టరీ మారిందా? నేను అటు వెళ్ళి చాలా ఏళ్ళయింది.",
          hint: { en: "Say yes: it has grown a lot, and it has new machines.", te: "అవును అని, చాలా పెరిగిందని, కొత్త మెషీన్లు వచ్చాయని చెప్పండి." },
          replies: [
            { say: "Yes, it has grown a lot. It has new machines now.", good: true, skill: "catchup" },
            { say: "Yes, it grew a lot since then.", good: false, skill: "catchup" },
          ],
        },
        {
          partner: "Here's my bus! Let's meet for tea soon.",
          te: "నా బస్ వచ్చేసింది! త్వరలో టీకి కలుద్దాం.",
          hint: { en: "Agree, and ask him to call you.", te: "సరే అని, ఫోన్ చేయమని అడగండి." },
          replies: [
            { say: "Yes, let's! Please call me sometime.", good: true, skill: "polite" },
            { say: "Sure! Take my number and call me.", good: true, skill: "polite" },
            { say: "Yes. Do the needful and call me.", good: false, skill: "polite", fixIt: "indian-english" },
          ],
        },
      ],
    },
  ],
};

import type { ConversationDay } from "../../types";

/** Week 11, Day 6 (CURRICULUM §3): Conversation Day at the doctor's, and buying the medicines. Health language; no new grammar. */
export const day: ConversationDay = {
  id: "w11-conversation",
  kind: "conversation",
  title: { en: "A Visit to the Doctor", te: "డాక్టర్ దగ్గరికి" },
  summary: {
    en: "Use this week's health words: a full visit to the doctor, then buying your medicines at the pharmacy.",
    te: "ఈ వారం నేర్చుకున్న ఆరోగ్యం మాటలు వాడండి: డాక్టర్ దగ్గరికి పూర్తి సందర్శన, తర్వాత మందుల షాపులో మందులు కొనడం.",
  },
  topics: ["doctor", "pharmacy", "health"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Ramana sees the doctor", te: "డాక్టర్ దగ్గర రమణ" },
    lines: [
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "Good morning. Please sit down.", te: "గుడ్ మార్నింగ్. కూర్చోండి." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Thank you, doctor.", te: "థాంక్యూ డాక్టర్." },
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "What is the problem?", te: "ఏమిటి సమస్య?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "I have a headache and a cough.", te: "నాకు తలనొప్పి, దగ్గు ఉన్నాయి." },
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "When did it start?", te: "ఎప్పుడు మొదలైంది?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Three days ago.", te: "మూడు రోజుల క్రితం." },
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "Do you have a fever?", te: "జ్వరం ఉందా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "I had a fever last night.", te: "నిన్న రాత్రి జ్వరం వచ్చింది." },
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "You should rest and drink hot water.", te: "మీరు విశ్రాంతి తీసుకుని, వేడి నీళ్ళు తాగాలి." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Should I take any tablets?", te: "ఏమైనా మాత్రలు వేసుకోవాలా?" },
      { speaker: { en: "Dr Lakshmi", te: "డాక్టర్ లక్ష్మి" }, voice: "a", en: "Yes, this one, twice a day.", te: "అవును, ఇది, రోజుకు రెండుసార్లు." },
    ],
    questions: [
      { prompt: { en: "What is Ramana's problem?", te: "రమణ సమస్య ఏంటి?" }, options: ["A headache and a cough", "A knee pain", "A stomach ache"], answer: 0 },
      { prompt: { en: "When did it start?", te: "అది ఎప్పుడు మొదలైంది?" }, options: ["Yesterday", "Three days ago", "Last week"], answer: 1 },
      { prompt: { en: "How often should he take the tablet?", te: "మాత్ర ఎన్నిసార్లు వేసుకోవాలి?" }, options: ["Once a day", "Twice a day", "Three times a day"], answer: 1 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Tell the doctor you have a headache.",
        te: "మీకు తలనొప్పిగా ఉందని డాక్టర్‌కి చెప్పండి.",
      },
      expected: ["I have a headache."],
      options: ["I have a headache.", "My head is paining.", "I am headache."],
      answer: 0,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "Ask the doctor if you should take tablets.",
        te: "మాత్రలు వేసుకోవాలా అని డాక్టర్‌ని అడగండి.",
      },
      expected: ["Should I take tablets?", "Should I take any tablets?"],
      options: ["Should I take tablets?", "Should I taking tablets?", "I should take tablets?"],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "At the pharmacy, ask how many times a day to take the medicine.",
        te: "మందుల షాపులో, మందు రోజుకు ఎన్నిసార్లు వేసుకోవాలో అడగండి.",
      },
      expected: ["How many times a day?"],
      options: ["How many times a day?", "How much times a day?", "How many time in day?"],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "A full clinic visit", te: "క్లినిక్‌లో పూర్తి సందర్శన" },
      scene: {
        en: "You have a stomach ache. Dr Lakshmi asks questions and gives advice.",
        te: "మీకు కడుపు నొప్పిగా ఉంది. డాక్టర్ లక్ష్మి ప్రశ్నలు అడిగి, సలహా ఇస్తున్నారు.",
      },
      partner: { en: "Dr Lakshmi (a doctor)", te: "డాక్టర్ లక్ష్మి" },
      skills: [
        { id: "tell", label: { en: "Telling the doctor", te: "డాక్టర్‌కి చెప్పడం" } },
        { id: "ask", label: { en: "Asking for advice", te: "సలహా అడగడం" } },
      ],
      turns: [
        {
          partner: "Hello. How can I help you?",
          te: "నమస్తే. మీకు ఏం సహాయం కావాలి?",
          hint: { en: "Say: I have a stomach ache.", te: "ఇలా చెప్పండి: I have a stomach ache." },
          replies: [
            { say: "I have a stomach ache.", good: true, skill: "tell" },
            { say: "I am having stomach pain.", good: false, skill: "tell" },
          ],
        },
        {
          partner: "When did it start?",
          te: "ఎప్పుడు మొదలైంది?",
          hint: { en: "Say: It started last night.", te: "ఇలా చెప్పండి: It started last night." },
          replies: [
            { say: "It started last night.", good: true, skill: "tell" },
            { say: "It started yesterday night.", good: false, skill: "tell" },
          ],
        },
        {
          partner: "Did you eat outside?",
          te: "బయట ఏమైనా తిన్నారా?",
          hint: { en: "Say: Yes, I ate at a hotel.", te: "ఇలా చెప్పండి: Yes, I ate at a hotel." },
          replies: [
            { say: "Yes, I ate at a hotel.", good: true, skill: "tell" },
            { say: "Yes, I eated at a hotel.", good: false, skill: "tell" },
          ],
        },
        {
          partner: "You should eat light food.",
          te: "మీరు తేలికపాటి ఆహారం తినాలి.",
          hint: { en: "Ask: Should I take a tablet?", te: "అడగండి: Should I take a tablet?" },
          replies: [
            { say: "Should I take a tablet?", good: true, skill: "ask" },
            { say: "Should I to take a tablet?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Yes, after food, twice a day.",
          te: "అవును, భోజనం తర్వాత, రోజుకు రెండుసార్లు.",
          hint: { en: "Say: Thank you, doctor.", te: "ఇలా చెప్పండి: Thank you, doctor." },
          replies: [
            { say: "Thank you, doctor.", good: true },
            { say: "Thanks you, doctor.", good: false },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Buying the medicines", te: "మందులు కొనడం" },
      scene: {
        en: "You take the doctor's note to Venkat at the pharmacy.",
        te: "డాక్టర్ రాసిన చీటీ తీసుకుని మందుల షాపులో వెంకట్ దగ్గరికి వెళ్ళారు.",
      },
      partner: { en: "Venkat (a pharmacist)", te: "వెంకట్ (ఫార్మసిస్ట్)" },
      skills: [{ id: "ask", label: { en: "Asking", te: "అడగడం" } }],
      turns: [
        {
          partner: "Yes? Do you have a prescription?",
          te: "చెప్పండి? డాక్టర్ చీటీ ఉందా?",
          hint: { en: "Say: Yes, here it is.", te: "ఇలా చెప్పండి: Yes, here it is." },
          replies: [
            { say: "Yes, here it is.", good: true },
            { say: "Yes, here is it.", good: false },
          ],
        },
        {
          partner: "One tablet after lunch and dinner.",
          te: "లంచ్, డిన్నర్ తర్వాత ఒక్కో మాత్ర.",
          hint: { en: "Ask: Should I take it with water?", te: "అడగండి: Should I take it with water?" },
          replies: [
            { say: "Should I take it with water?", good: true, skill: "ask" },
            { say: "Should I taking it with water?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Yes. And drink a lot of water.",
          te: "అవును. నీళ్ళు బాగా తాగండి.",
          hint: { en: "Ask: How much is it?", te: "అడగండి: How much is it?" },
          replies: [
            { say: "How much is it?", good: true, skill: "ask" },
            { say: "How much it is?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Eighty rupees. Get well soon!",
          te: "ఎనభై రూపాయలు. త్వరగా కోలుకోండి!",
          hint: { en: "Say: Thank you very much.", te: "ఇలా చెప్పండి: Thank you very much." },
          replies: [
            { say: "Thank you very much.", good: true },
            { say: "Thanks you very much.", good: false },
          ],
        },
      ],
    },
  ],
};

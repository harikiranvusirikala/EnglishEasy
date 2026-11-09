import type { ConversationDay } from "../../types";

/** Week 8, Day 6 (CURRICULUM §3): Conversation Day at the railway station. Requests and clarifying; no new grammar. */
export const day: ConversationDay = {
  id: "w8-conversation",
  kind: "conversation",
  title: { en: "Help at the Railway Station", te: "రైల్వే స్టేషన్‌లో సహాయం" },
  summary: {
    en: "Use this week's polite requests at the station: find your platform, ask again when you don't hear, and get a porter's help.",
    te: "ఈ వారం నేర్చుకున్న మర్యాదగా అడిగే మాటలు స్టేషన్‌లో వాడండి: మీ ప్లాట్‌ఫామ్ కనుక్కోండి, వినిపించకపోతే మళ్ళీ అడగండి, కూలీ సహాయం తీసుకోండి.",
  },
  topics: ["transport", "travel", "directions"],
  dialogue: {
    id: "d1",
    type: "dialogue",
    title: { en: "Which platform?", te: "ఏ ప్లాట్‌ఫామ్?" },
    lines: [
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Excuse me. Could you help me, please?", te: "ఎక్స్‌క్యూజ్ మీ. కొంచెం సహాయం చేస్తారా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Sure. Where are you going?", te: "తప్పకుండా. మీరు ఎక్కడికి వెళ్తున్నారు?" },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "To Tirupati. Which platform is it?", te: "తిరుపతికి. ఏ ప్లాట్‌ఫామ్?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Platform number four.", te: "ప్లాట్‌ఫామ్ నంబర్ నాలుగు." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Sorry, could you say that again?", te: "sorry అండీ, మళ్ళీ చెప్తారా?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "Platform four. Over the bridge.", te: "నాలుగో ప్లాట్‌ఫామ్. బ్రిడ్జ్ మీదుగా." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "I can't carry this bag up.", te: "ఈ బ్యాగ్ పైకి మోసుకెళ్లలేను." },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "No problem. The porter can help you.", te: "పర్వాలేదు. కూలీ సహాయం చేస్తారు." },
      { speaker: { en: "Geetha", te: "గీత" }, voice: "a", en: "Thank you. What time is the train?", te: "థాంక్యూ. రైలు ఎన్ని గంటలకు?" },
      { speaker: { en: "Ramana", te: "రమణ" }, voice: "b", en: "At quarter past ten.", te: "పదింబావుకి." },
    ],
    questions: [
      {
        prompt: { en: "Where are they?", te: "వీళ్ళు ఎక్కడ ఉన్నారు?" },
        options: ["At a railway station", "At a bus stand", "At a bank"],
        answer: 0,
      },
      { prompt: { en: "Where is Geetha going?", te: "గీత గారు ఎక్కడికి వెళ్తున్నారు?" }, options: ["To Tirupati", "To Guntur", "To Hyderabad"], answer: 0 },
      { prompt: { en: "Which platform does she need?", te: "ఆవిడకి ఏ ప్లాట్‌ఫామ్ కావాలి?" }, options: ["Platform two", "Platform four", "Platform one"], answer: 1 },
      { prompt: { en: "What time is the train?", te: "రైలు ఎన్ని గంటలకు?" }, options: ["At quarter past ten", "At half past ten", "At quarter to ten"], answer: 0 },
    ],
  },
  situations: [
    {
      id: "s1",
      type: "situation",
      situation: {
        en: "Ask a station worker politely for help.",
        te: "స్టేషన్‌లో పని చేసే వ్యక్తిని మర్యాదగా సహాయం అడగండి.",
      },
      expected: ["Could you help me, please?", "Excuse me, could you help me?", "Can you help me, please?"],
      options: ["Help me.", "Could you help me, please?", "Could you helping me?"],
      answer: 1,
    },
    {
      id: "s2",
      type: "situation",
      situation: {
        en: "You did not hear the platform number. Ask again.",
        te: "ప్లాట్‌ఫామ్ నంబర్ మీకు వినిపించలేదు. మళ్ళీ అడగండి.",
      },
      expected: ["Could you say that again?", "Sorry, could you say that again?", "Sorry, which platform?"],
      options: ["Could you say that again?", "Could you tell again?", "Say again it."],
      answer: 0,
    },
    {
      id: "s3",
      type: "situation",
      situation: {
        en: "Your bag is heavy. Say you can't carry it.",
        te: "మీ బ్యాగ్ బరువుగా ఉంది. దాన్ని మోయలేనని చెప్పండి.",
      },
      expected: ["I can't carry this bag.", "I can't carry the bag."],
      options: ["I can't carry this bag.", "I can't to carry this bag.", "I don't can carry this bag."],
      answer: 0,
    },
  ],
  roleplays: [
    {
      id: "r1",
      type: "roleplay",
      title: { en: "Finding the platform", te: "ప్లాట్‌ఫామ్ కనుక్కోవడం" },
      scene: {
        en: "You are at the station for the Tirupati train. Ask Swapna, the station staff, for help.",
        te: "తిరుపతి రైలు కోసం మీరు స్టేషన్‌లో ఉన్నారు. స్టేషన్ సిబ్బంది స్వప్న గారిని సహాయం అడగండి.",
      },
      partner: { en: "Swapna (station staff)", te: "స్వప్న (స్టేషన్ సిబ్బంది)" },
      skills: [
        { id: "ask", label: { en: "Polite questions", te: "మర్యాద ప్రశ్నలు" } },
        { id: "clarify", label: { en: "Asking again", te: "మళ్ళీ అడగడం" } },
      ],
      turns: [
        {
          partner: "Yes? Can I help you?",
          te: "చెప్పండి? ఏమైనా సహాయం కావాలా?",
          hint: { en: "Ask which platform the Tirupati train leaves from.", te: "తిరుపతి రైలు ఏ ప్లాట్‌ఫామ్ నుండో అడగండి." },
          replies: [
            { say: "Which platform for the Tirupati train?", good: true, skill: "ask" },
            { say: "Tirupati train which platform going?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Platform four.",
          te: "నాలుగో ప్లాట్‌ఫామ్.",
          hint: { en: "You didn't hear well. Ask her to repeat, politely.", te: "సరిగ్గా వినిపించలేదు. మళ్ళీ చెప్పమని మర్యాదగా అడగండి." },
          replies: [
            { say: "Could you say that again, please?", good: true, skill: "clarify" },
            { say: "Could you tell that again, please?", good: false, skill: "clarify" },
            {
              say: "What? Speak properly!",
              good: false,
              skill: "clarify",
              react: { en: "Sorry! I said platform four.", te: "sorry అండీ! నాలుగో ప్లాట్‌ఫామ్ అన్నాను." },
            },
          ],
        },
        {
          partner: "Platform four. Over the bridge.",
          te: "నాలుగో ప్లాట్‌ఫామ్. బ్రిడ్జ్ మీదుగా.",
          hint: { en: "Stairs are hard for you. Ask about a lift.", te: "మెట్లు ఎక్కడం కష్టం. లిఫ్ట్ గురించి అడగండి." },
          replies: [
            { say: "Is there a lift?", good: true, skill: "ask" },
            { say: "Is there lift?", good: false, skill: "ask" },
          ],
        },
        {
          partner: "Yes, it is next to the bridge.",
          te: "అవును, బ్రిడ్జ్ పక్కనే ఉంది.",
          hint: { en: "Thank her for helping.", te: "సహాయం చేసినందుకు థాంక్స్ చెప్పండి." },
          replies: [
            { say: "Thank you for your help.", good: true, skill: "ask" },
            { say: "Thank you for your helping.", good: false, skill: "ask" },
          ],
        },
      ],
    },
    {
      id: "r2",
      type: "roleplay",
      title: { en: "Asking a porter for help", te: "కూలీ సహాయం" },
      scene: {
        en: "Your bag is heavy. Venkat, a porter, offers to carry it. Agree on a price politely.",
        te: "మీ బ్యాగ్ బరువుగా ఉంది. కూలీ వెంకట్ మోస్తానంటున్నారు. మర్యాదగా ధర మాట్లాడుకోండి.",
      },
      partner: { en: "Venkat (a porter)", te: "వెంకట్ (కూలీ)" },
      voice: "b",
      skills: [
        { id: "can", label: { en: "can / can't", te: "can / can't వాడకం" } },
        { id: "polite", label: { en: "Polite requests", te: "మర్యాదగా అడగడం" } },
      ],
      turns: [
        {
          partner: "Porter? Can I carry your bag?",
          te: "కూలీ కావాలా అండీ? మీ బ్యాగ్ మోయనా?",
          hint: { en: "Say yes, and that the bag is too heavy for you.", te: "సరే అని, బ్యాగ్ మీరు మోయలేరని చెప్పండి." },
          replies: [
            { say: "Yes, please. I can't carry it.", good: true, skill: "can" },
            { say: "Yes, please. I can't carrying it.", good: false, skill: "can" },
          ],
        },
        {
          partner: "Which platform?",
          te: "ఏ ప్లాట్‌ఫామ్?",
          hint: { en: "Tell him the platform number.", te: "ప్లాట్‌ఫామ్ నంబర్ చెప్పండి." },
          replies: [
            { say: "Platform four, please.", good: true, skill: "polite" },
            { say: "Platform fourth, please.", good: false, skill: "polite" },
          ],
        },
        {
          partner: "Okay. That is one hundred rupees.",
          te: "సరే. వంద రూపాయలు.",
          hint: { en: "Ask politely for a lower price.", te: "కొంచెం తగ్గించమని మర్యాదగా అడగండి." },
          replies: [
            { say: "Could you take eighty rupees?", good: true, skill: "polite" },
            { say: "Could you taking eighty rupees?", good: false, skill: "polite" },
            {
              say: "Hundred? You are cheating me!",
              good: false,
              skill: "polite",
              react: { en: "No, no! That is the fixed rate.", te: "లేదండీ! అది ఫిక్స్‌డ్ రేటు." },
            },
          ],
        },
        {
          partner: "Okay, eighty. Come with me.",
          te: "సరే, ఎనభై. నాతో రండి.",
          hint: { en: "Thank him, and ask him not to walk too fast.", te: "థాంక్స్ చెప్పి, మరీ వేగంగా నడవద్దని అడగండి." },
          replies: [
            { say: "Thank you. Please walk slowly.", good: true, skill: "polite" },
            { say: "Thank you. Please walk slow.", good: false, skill: "polite" },
          ],
        },
      ],
    },
  ],
};

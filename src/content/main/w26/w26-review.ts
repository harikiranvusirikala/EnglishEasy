import type { Activity, Bi, ReviewDay } from "../../types";

/**
 * Week 26, Day 7 (CURRICULUM §4): Checkpoint 2 (§2b) — the automatic review, with the Conversation Day's 108 call as the
 * check's role play, a mixed round across Weeks 13–25, a listening task (a one-minute "my week" heard first), and the
 * 1-minute speaking mission.
 */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
});

export const day: ReviewDay = {
  id: "w26-review",
  kind: "review",
  title: { en: "Checkpoint", te: "చెక్‌పాయింట్" },
  extras: [
    pick("q1", "Can I have two ___ of onions?", "రెండు కిలోల ఉల్లిపాయలు ఇస్తారా?", ["kilos", "kilo", "kilogram"], 0, {
      en: "Two is more than one, so the measure word takes s too.",
      te: "రెండు అంటే ఒకటి కంటే ఎక్కువ, అందుకే కొలత పదానికి కూడా s.",
    }),
    pick("q2", "The post office is ___ the bank.", "పోస్ట్ ఆఫీస్ బ్యాంక్‌కి ఎదురుగా ఉంది.", ["opposite", "opposite to", "opposite of"], 0, {
      en: "Opposite needs no small word after it, though Telugu adds కి.",
      te: "తెలుగులో 'బ్యాంక్‌కి' అన్నా, opposite తర్వాత to, of ఏమీ రావు.",
    }),
    pick("q3", "Look at those clouds! It's ___ to rain.", "ఆ మబ్బులు చూడండి! వర్షం రాబోతోంది.", ["going", "go", "will"], 0, {
      en: "When you can see the signs, say going to, with -ing after it's.",
      te: "గుర్తులు కళ్ళకి కనిపిస్తుంటే going to; it's తర్వాత going, -ing తో.",
    }),
    pick("q4", "I've had this pain ___ two weeks.", "ఈ నొప్పి రెండు వారాలుగా ఉంది.", ["for", "since", "from"], 0, {
      en: "For tells how long; Telugu నుంచి tempts us to say since or from.",
      te: "ఎంత కాలమో చెప్పడానికి for; 'నుంచి' అని since, from అనకూడదు.",
    }),
    pick("q5", "The bank never ___ for your PIN.", "బ్యాంక్ మీ PIN ఎప్పుడూ అడగదు.", ["asks", "ask", "is asking"], 0, {
      en: "One bank is like he or she, so the verb takes s, even with never.",
      te: "ఒక్క bank అంటే he, she లాంటిదే, అందుకే never ఉన్నా verb కి s.",
    }),
    pick("q6", "I ___ waiting for the bus when it rained.", "నేను బస్ కోసం ఎదురుచూస్తుండగా వర్షం పడింది.", ["was", "am", "were"], 0, {
      en: "It happened in the past and you are one person, so use was.",
      te: "జరిగింది గతంలో, మీరు ఒక్కరే, అందుకే was.",
    }),
    {
      id: "d1",
      type: "dialogue",
      title: { en: "Listen: Narayana's week", te: "వినండి: నారాయణ గారి వారం" },
      lines: [
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Hello! I'm Narayana. Let me tell you about my week.", te: "హలో! నేను నారాయణ. నా వారం గురించి చెప్తాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Monday I went to the doctor for my knee.", te: "సోమవారం మోకాలి కోసం డాక్టర్ దగ్గరికి వెళ్ళాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Tuesday I bought my tablets at the medical shop.", te: "మంగళవారం మెడికల్ షాపులో నా మాత్రలు కొన్నాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Wednesday I was waiting for the bus.", te: "బుధవారం నేను బస్ కోసం ఎదురుచూస్తూ ఉన్నాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Suddenly it rained, and I got very wet!", te: "ఉన్నట్టుండి వర్షం పడింది, బాగా తడిసిపోయాను!" },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Thursday a man called me about my bank KYC.", te: "గురువారం ఒకాయన బ్యాంక్ KYC గురించి ఫోన్ చేశారు." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "He asked for my OTP, so I hung up.", te: "నా OTP అడిగారు, అందుకే ఫోన్ పెట్టేశాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Friday I paid the electricity bill by UPI.", te: "శుక్రవారం UPI తో కరెంట్ బిల్లు కట్టాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "On Saturday I bought guavas and bananas at the market.", te: "శనివారం మార్కెట్‌లో జామపండ్లు, అరటిపండ్లు కొన్నాను." },
        { speaker: { en: "Narayana", te: "నారాయణ" }, voice: "b", en: "Next week I will go to Tirupati by train.", te: "వచ్చే వారం రైలులో తిరుపతి వెళ్తాను." },
      ],
      questions: [
        {
          prompt: { en: "What is Narayana talking about?", te: "నారాయణ గారు దేని గురించి చెప్తున్నారు?" },
          options: ["What he did this week", "His new job at a bank", "A trip he took last year"],
          answer: 0,
        },
        {
          prompt: { en: "Why did he go to the doctor?", te: "ఆయన డాక్టర్ దగ్గరికి ఎందుకు వెళ్ళారు?" },
          options: ["For his knee", "For a cough", "For a blood test"],
          answer: 0,
        },
        {
          prompt: { en: "What was he doing when it rained?", te: "వర్షం పడినప్పుడు ఆయన ఏం చేస్తున్నారు?" },
          options: ["Waiting for the bus", "Buying tablets", "Paying a bill"],
          answer: 0,
        },
        {
          prompt: { en: "What did he do when the caller asked for his OTP?", te: "ఫోన్ చేసినవారు OTP అడిగితే నారాయణ గారు ఏం చేశారు?" },
          options: ["He hung up.", "He told him the OTP.", "He went to the bank."],
          answer: 0,
        },
      ],
    },
    {
      id: "m1",
      type: "mission",
      title: { en: "My week", te: "నా వారం" },
      prompts: ["On Monday I went to …", "On Tuesday I …", "I was … when …", "There was a …", "Next week I will …"],
      seconds: 60,
    },
  ],
};

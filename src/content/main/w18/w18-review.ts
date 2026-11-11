import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 18, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick "which number do you call?" round and the week's grammar. */

const which = (id: string, prompt: Bi, options: string[], answer: number, why: Bi): Activity => ({
  id,
  type: "choose",
  prompt,
  options,
  answer,
  why,
});

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
  id: "w18-review",
  kind: "review",
  title: { en: "Stay Safe", te: "జాగ్రత్తగా ఉండండి" },
  extras: [
    which(
      "q1",
      { en: "A car hit an old man on the road. Which number do you call?", te: "రోడ్డు మీద ఒక కారు ఒక పెద్దాయన్ని గుద్దింది. ఏ నంబర్‌కి ఫోన్ చేస్తారు?" },
      ["One zero eight", "One zero zero", "One zero one"],
      0,
      { en: "One zero eight sends an ambulance for accidents and sick people.", te: "ప్రమాదాలకి, బాగా జబ్బు చేసినవారికి 108 అంబులెన్స్ పంపిస్తుంది." },
    ),
    which(
      "q2",
      { en: "Smoke and fire are coming from a shop at night. Which number do you call?", te: "రాత్రి ఒక షాపు నుంచి పొగ, మంటలు వస్తున్నాయి. ఏ నంబర్‌కి ఫోన్ చేస్తారు?" },
      ["One zero eight", "One zero one", "One zero zero"],
      1,
      { en: "One zero one is the fire service; stay away from the fire.", te: "101 ఫైర్ సర్వీస్; మంటలకి దూరంగా ఉండండి." },
    ),
    which(
      "q3",
      { en: "A man on a bike snatched a woman's chain. Which number do you call?", te: "బైక్ మీద వచ్చిన ఒకాయన ఒకావిడ గొలుసు లాక్కెళ్ళారు. ఏ నంబర్‌కి ఫోన్ చేస్తారు?" },
      ["One zero one", "One zero eight", "One zero zero"],
      2,
      { en: "One zero zero is the police, for theft and chain snatching.", te: "100 పోలీసుల నంబర్: దొంగతనం, గొలుసు దొంగతనం లాంటి వాటికి." },
    ),
    which(
      "q4",
      { en: "You forget the numbers. Which one works for every emergency?", te: "నంబర్లు గుర్తు రావట్లేదు. ఏ అత్యవసరానికైనా పనిచేసే నంబర్ ఏది?" },
      ["One zero one", "One one two", "One zero eight"],
      1,
      { en: "One one two works for police, fire and ambulance, anywhere in India.", te: "112 పోలీస్, ఫైర్, అంబులెన్స్ అన్నిటికీ, దేశంలో ఎక్కడైనా పనిచేస్తుంది." },
    ),
    which(
      "q5",
      { en: "Your neighbour fainted and can't talk. Which number do you call?", te: "మీ పక్కింటావిడ కళ్ళు తిరిగి పడిపోయారు, మాట్లాడలేకపోతున్నారు. ఏ నంబర్‌కి ఫోన్ చేస్తారు?" },
      ["One zero zero", "One zero one", "One zero eight"],
      2,
      { en: "Someone who fainted needs an ambulance quickly, not the police or fire service.", te: "కళ్ళు తిరిగి పడిపోయినవారికి త్వరగా అంబులెన్స్ కావాలి; పోలీసులు, ఫైర్ సర్వీస్ కాదు." },
    ),
    pick("g1", "He ___ down the stairs.", "ఆయన మెట్ల మీద నుంచి కింద పడిపోయారు.", ["fell", "falled", "fall"], 0, {
      en: "Fall has a special past form, with no -ed at the end.",
      te: "fall కి past ప్రత్యేకంగా ఉంటుంది; చివర -ed రాదు.",
    }),
    pick("g2", "___ switch on the light.", "లైట్ వేయకండి.", ["Don't", "Not", "No"], 0, {
      en: "To stop an action, start the sentence with Don't.",
      te: "ఏదైనా చేయొద్దని చెప్పాలంటే వాక్యం Don't తో మొదలుపెట్టాలి.",
    }),
    {
      id: "g3",
      type: "fillBlank",
      fixIt: "he-she-s",
      sentence: "She ___ BP tablets every day.",
      te: "ఆవిడ రోజూ BP మాత్రలు వేసుకుంటారు.",
      options: ["takes", "take", "taking"],
      answer: 0,
      why: {
        en: "With he or she, the verb takes s.",
        te: "he, she తో verb కి s చేర్చాలి.",
      },
    },
  ],
};

import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 39, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus sorry / thanks for + -ing and a quick "say it naturally" round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: FixIt): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

const NATURAL: Bi = { en: "Which one is clear to everyone?", te: "ఏది అందరికీ అర్థమవుతుంది?" };

const natural = (id: string, options: string[], why: Bi, fixIt: FixIt = "indian-english"): Activity => ({
  id,
  type: "choose",
  prompt: NATURAL,
  options,
  answer: 0,
  why,
  fixIt,
});

export const day: ReviewDay = {
  id: "w39-review",
  kind: "review",
  title: { en: "Say It Nicely", te: "మర్యాదగా చెప్దాం" },
  extras: [
    pick("q1", "I'm sorry for ___ late.", "ఆలస్యంగా వచ్చినందుకు sorry.", ["being", "be", "am"], 0, {
      en: "After sorry for, the verb takes -ing, like Telugu -నందుకు.",
      te: "sorry for తర్వాత verb కి -ing వస్తుంది, తెలుగులో '-నందుకు' లాగా.",
    }),
    pick("q2", "Thank you for ___ me to the hospital.", "నన్ను ఆసుపత్రికి తీసుకెళ్ళినందుకు థ్యాంక్స్.", ["taking", "take", "took"], 0, {
      en: "Thank you for + -ing tells what the person did for you.",
      te: "thank you for + -ing తో ఆ మనిషి మీ కోసం చేసిన పని చెప్తాం.",
    }),
    pick("q3", "That's very kind ___ you.", "మీరు చాలా మంచివారు.", ["of", "for", "to"], 0, {
      en: "Kind of you is a fixed phrase that praises a kind act.",
      te: "kind of you అనేది మంచి పనిని మెచ్చుకునే స్థిరమైన మాట.",
    }),
    natural("n1", ["I'm Kiran.", "Myself Kiran.", "I Kiran."], {
      en: "A name starts with I'm or My name is; myself sounds odd outside India.",
      te: "పేరు I'm లేదా My name is తో చెప్తారు; myself బయటివారికి వింతగా ఉంటుంది.",
    }),
    natural("n2", ["May I know your name?", "What is your good name?", "Your name is what?"], {
      en: "Good name copies Telugu శుభనామం word for word, so others find it strange.",
      te: "good name 'శుభనామం' కి మాటకి మాట అనువాదం, అందుకే బయటివారికి వింతగా ఉంటుంది.",
    }),
    natural("n3", ["Please reply soon.", "Please revert back soon.", "Please reply back soon."], {
      en: "Reply already means answer back; revert back is an Indian office habit.",
      te: "reply అంటేనే తిరిగి జవాబు; revert back మన ఆఫీసుల అలవాటు.",
    }),
    natural("n4", ["Can we bring it forward?", "Can we prepone it?", "Can we bring it front?"], {
      en: "Bring forward means move to an earlier time; prepone is understood only in India.",
      te: "bring forward అంటే ముందు సమయానికి జరపడం; prepone మన దగ్గరే అర్థమవుతుంది.",
    }),
    natural("n5", ["I have a car.", "I am having a car.", "I having a car."], {
      en: "Have for things you own never takes -ing, though Telugu speakers often add it.",
      te: "మనకి ఉన్న వస్తువులకి have కి -ing రాదు; మనం అలవాటుగా చేర్చేస్తాం.",
    }, "state-ing"),
  ],
};

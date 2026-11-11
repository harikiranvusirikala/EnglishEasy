import type { Activity, Bi, FixIt, ReviewDay } from "../../types";

/** Week 35, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick like / enjoy + -ing round. */

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

export const day: ReviewDay = {
  id: "w35-review",
  kind: "review",
  title: { en: "My Free Time", te: "నా ఖాళీ సమయం" },
  extras: [
    pick("q1", "I enjoy ___ in my garden.", "నా తోటలో పని చేయడం నాకు సరదా.", ["working", "work", "to work"], 0, {
      en: "Enjoy is always followed by a verb with -ing, never to.",
      te: "enjoy తర్వాత ఎప్పుడూ -ing verb వస్తుంది; to రాదు.",
    }),
    pick("q2", "Lakshmi ___ singing old film songs.", "లక్ష్మి గారికి పాత సినిమా పాటలు పాడటం అంటే చాలా ఇష్టం.", ["loves", "love", "is loving"], 0, {
      en: "One person takes loves with s; a feeling like love takes no is … -ing.",
      te: "ఒక్కరి గురించి loves, s తో; love లాంటి భావనకి is … -ing రాదు.",
    }, "he-she-s"),
    pick("q3", "Do you like ___ the newspaper in the morning?", "మీకు ఉదయం పేపర్ చదవడం ఇష్టమా?", ["reading", "read", "to reading"], 0, {
      en: "After like, the hobby verb takes -ing; the plain form is wrong here.",
      te: "like తర్వాత హాబీ verb కి -ing; ఇక్కడ మామూలు రూపం తప్పు.",
    }),
    pick("q4", "I don't mind ___ for the bus.", "బస్సు కోసం ఎదురుచూడటం నాకు పర్వాలేదు.", ["waiting", "wait", "to wait"], 0, {
      en: "Mind is always followed by a verb with -ing, never by to.",
      te: "mind తర్వాత ఎప్పుడూ -ing verb; to రాదు.",
    }),
    pick("q5", "He is good ___ playing chess.", "ఆయనకి చెస్ ఆడటం బాగా వచ్చు.", ["at", "in", "on"], 0, {
      en: "For a skill, English says good at; good in is a common slip.",
      te: "బాగా వచ్చిన పనికి good at; good in అనడం మనం ఎక్కువగా చేసే పొరపాటు.",
    }, "preposition"),
    pick("q6", "We play carrom three ___ a week.", "మేము వారానికి మూడుసార్లు క్యారమ్ ఆడతాం.", ["times", "time", "timing"], 0, {
      en: "Three is more than one, so time takes s.",
      te: "మూడు అంటే ఒకటి కంటే ఎక్కువ, అందుకే times.",
    }, "plural"),
  ],
};

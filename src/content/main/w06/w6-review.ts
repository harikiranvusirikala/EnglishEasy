import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 6, Day 7 (CURRICULUM §3): the automatic review (with a role play from the Conversation Day), plus a food-words round. */

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
  id: "w6-review",
  kind: "review",
  title: { en: "Food Talk", te: "భోజనం మాటలు" },
  extras: [
    pick("q1", "She ___ sweets.", "ఆవిడకి స్వీట్లు ఇష్టం.", ["like", "likes", "liking"], 1, {
      en: "She is one person, so the verb takes s: She likes sweets.",
      te: "she ఒక్కరు, అందుకే verb కి s: She likes sweets.",
    }),
    pick("q2", "I would ___ some tea.", "నాకు కొంచెం టీ కావాలి.", ["like", "likes", "liking"], 0, {
      en: "To ask politely, use would before like: I would like some tea.",
      te: "మర్యాదగా అడగడానికి like ముందు would: I would like some tea.",
    }),
    pick("q3", "Is there ___ milk?", "పాలు ఏమైనా ఉన్నాయా?", ["a", "any", "many"], 1, {
      en: "Questions use any, like Telugu ఏమైనా: Is there any milk?",
      te: "ప్రశ్నలో any, తెలుగు 'ఏమైనా' లాగా: Is there any milk?",
    }),
    pick("q4", "How ___ eggs do you want?", "మీకు ఎన్ని గుడ్లు కావాలి?", ["much", "many", "more"], 1, {
      en: "We ask ఎన్ని for eggs, and ఎన్ని is how many: How many eggs do you want?",
      te: "గుడ్లు 'ఎన్ని?' అని అడుగుతాం; ఎన్ని = how many: How many eggs?",
    }),
    pick("q5", "How ___ rice do you want?", "మీకు ఎంత బియ్యం కావాలి?", ["much", "many", "more"], 0, {
      en: "We ask ఎంత for rice, and ఎంత is how much: How much rice do you want?",
      te: "బియ్యం 'ఎంత?' అని అడుగుతాం; ఎంత = how much: How much rice?",
    }),
    pick("q6", "___ wash the rice. Then cook it.", "ముందు బియ్యం కడగండి. తర్వాత ఉడికించండి.", ["First", "Before", "Start"], 0, {
      en: "Telugu ముందు for the first step is First, not Before: First wash the rice.",
      te: "మొదటి పనికి 'ముందు' అంటే First, Before కాదు: First wash the rice.",
    }),
  ],
};

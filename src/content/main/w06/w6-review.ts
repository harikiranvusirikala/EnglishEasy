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
    pick("q1", "She ___ sweets.", "ఆమెకు స్వీట్లు ఇష్టం.", ["like", "likes", "liking"], 1, {
      en: "She is one person: likes.",
      te: "she ఒక్కరు: likes.",
    }),
    pick("q2", "I would ___ some tea.", "నాకు కొంచెం టీ కావాలి.", ["like", "likes", "liking"], 0, {
      en: "Polite asking: I would like.",
      te: "మర్యాదగా అడగడం: I would like.",
    }),
    pick("q3", "Is there ___ milk?", "పాలు ఏమైనా ఉన్నాయా?", ["some", "any", "many"], 1, {
      en: "In a question, any.",
      te: "ప్రశ్నలో any.",
    }),
    pick("q4", "How ___ eggs do you want?", "మీకు ఎన్ని గుడ్లు కావాలి?", ["much", "many", "more"], 1, {
      en: "Eggs are counted: how many.",
      te: "గుడ్లు లెక్కపెడతాం: how many.",
    }),
    pick("q5", "How ___ rice do you want?", "మీకు ఎంత బియ్యం కావాలి?", ["much", "many", "more"], 0, {
      en: "Rice is not counted: how much.",
      te: "బియ్యం లెక్కపెట్టం: how much.",
    }),
    pick("q6", "First wash the rice. ___ cook it.", "ముందు బియ్యం కడగండి. తర్వాత ఉడికించండి.", ["Then", "Than", "That"], 0, {
      en: "The next step: then.",
      te: "తర్వాతి పని: then.",
    }),
  ],
};

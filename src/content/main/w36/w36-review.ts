import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 36, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick who / that round. */

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
  id: "w36-review",
  kind: "review",
  title: { en: "People Around Me", te: "నా చుట్టూ ఉన్న మనుషులు" },
  extras: [
    pick("q1", "The man ___ lives next door is a retired teacher.", "పక్కింట్లో ఉండే ఆయన రిటైర్డ్ టీచర్.", ["who", "which", "what"], 0, {
      en: "For a person, use who; which is only for things.",
      te: "మనిషికి who వాడాలి; which వస్తువులకి మాత్రమే.",
    }),
    pick("q2", "I'm looking for the shop ___ sells silk sarees.", "సిల్క్ చీరలు అమ్మే షాపు కోసం చూస్తున్నాను.", ["that", "who", "what"], 0, {
      en: "A shop is a place, so use that, not who.",
      te: "షాపు ఒక చోటు, అందుకే that; who కాదు.",
    }),
    pick("q3", "Do you know a tailor ___ stitches blouses?", "బ్లౌజులు కుట్టే టైలర్ ఎవరైనా మీకు తెలుసా?", ["who", "which", "where"], 0, {
      en: "A tailor is a person, so the word is who.",
      te: "టైలర్ ఒక మనిషి, అందుకే who.",
    }),
    pick("q4", "This is the bus that ___ to Guntur.", "గుంటూరు వెళ్ళే బస్సు ఇదే.", ["goes", "go", "going"], 0, {
      en: "Here that means one bus, so the action takes es.",
      te: "ఇక్కడ that అంటే ఒక్క బస్సు, అందుకే go కి es చేర్చాలి.",
    }),
    pick("q5", "What is your new neighbour ___?", "మీ కొత్త పక్కింటివారు ఎలాంటి మనిషి?", ["like", "look", "likes"], 0, {
      en: "To ask about a person's nature, end the question with like.",
      te: "స్వభావం అడగాలంటే ప్రశ్న చివర like వస్తుంది.",
    }),
    pick("q6", "She looks ___ her mother.", "ఆవిడ అచ్చం వాళ్ళ అమ్మగారిలాగే ఉంటారు.", ["like", "as", "same"], 0, {
      en: "For the same face as someone, say looks like.",
      te: "ఒకరి లాంటి ముఖం అంటే looks like అనాలి.",
    }),
  ],
};

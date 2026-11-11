import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 21, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), a quick bank round and a "safe or scam?" round. */

const pick = (id: string, sentence: string, te: string, options: string[], answer: number, why: Bi, fixIt?: "he-she-s" | "plural"): Activity => ({
  id,
  type: "fillBlank",
  sentence,
  te,
  options,
  answer,
  why,
  ...(fixIt ? { fixIt } : {}),
});

/** Safe or scam? A short scene, two buttons, and the reason. */
const safeOrScam = (id: string, prompt: Bi, scam: boolean, why: Bi): Activity => ({
  id,
  type: "choose",
  prompt,
  options: ["Safe", "Scam"],
  answer: scam ? 1 : 0,
  why,
});

export const day: ReviewDay = {
  id: "w21-review",
  kind: "review",
  title: { en: "Safe or Scam?", te: "నిజమా, మోసమా?" },
  extras: [
    pick("q1", "You must ___ your Aadhaar card.", "మీరు ఆధార్ కార్డ్ తప్పకుండా తీసుకురావాలి.", ["bring", "to bring", "brings"], 0, {
      en: "After must, the verb stays plain, with no to.",
      te: "must తర్వాత verb మారదు, to రాదు.",
    }),
    pick(
      "q2",
      "My bank never ___ for my PIN.",
      "నా బ్యాంక్ ఎప్పుడూ నా PIN అడగదు.",
      ["asks", "ask", "asking"],
      0,
      { en: "The bank is one, like he or she, so asks takes s.", te: "బ్యాంక్ ఒక్కటే, he లేదా she లాగా; అందుకే asks." },
      "he-she-s",
    ),
    pick(
      "q3",
      "The house costs eighty ___ rupees.",
      "ఆ ఇంటి ధర ఎనభై లక్షల రూపాయలు.",
      ["lakh", "lakhs", "lakh of"],
      0,
      { en: "Before rupees, lakh has no s, even after eighty.", te: "rupees ముందు lakh కి s రాదు, ఎనభై తర్వాత కూడా." },
      "plural",
    ),
    safeOrScam(
      "c1",
      {
        en: "An SMS says: Your OTP is 4821. Do not share it. Safe or scam?",
        te: "SMS లో ఇలా ఉంది: Your OTP is 4821. Do not share it. ఇది నిజమా, మోసమా?",
      },
      false,
      { en: "A real bank message tells you never to share the OTP.", te: "నిజమైన బ్యాంక్ మెసేజ్ OTP ఎవరికీ చెప్పొద్దనే చెప్తుంది." },
    ),
    safeOrScam(
      "c2",
      {
        en: "A caller says: Your KYC is pending. Tell me the OTP. Safe or scam?",
        te: "ఒకరు ఫోన్ చేసి అంటున్నారు: Your KYC is pending. Tell me the OTP. ఇది నిజమా, మోసమా?",
      },
      true,
      { en: "The bank never asks for your OTP on the phone.", te: "బ్యాంక్ ఎప్పుడూ ఫోన్‌లో OTP అడగదు." },
    ),
    safeOrScam(
      "c3",
      {
        en: "A man on a video call says: You are under digital arrest. Safe or scam?",
        te: "వీడియో కాల్‌లో ఒకాయన అంటున్నారు: You are under digital arrest. ఇది నిజమా, మోసమా?",
      },
      true,
      { en: "Digital arrest is not real; police never arrest anyone on a call.", te: "digital arrest అనేది లేదు; పోలీసులు ఫోన్‌లో ఎవరినీ అరెస్ట్ చేయరు." },
    ),
    safeOrScam(
      "c4",
      {
        en: "At the branch counter, the clerk says: Please fill in this slip. Safe or scam?",
        te: "బ్రాంచ్ కౌంటర్ దగ్గర క్లర్క్ అంటున్నారు: Please fill in this slip. ఇది నిజమా, మోసమా?",
      },
      false,
      { en: "Filling in a slip at the bank counter is normal and safe.", te: "బ్యాంక్ కౌంటర్ దగ్గర స్లిప్ నింపడం మామూలే, సురక్షితమే." },
    ),
    safeOrScam(
      "c5",
      {
        en: "A message says: You won a car! Pay a small fee first. Safe or scam?",
        te: "ఒక మెసేజ్ వచ్చింది: You won a car! Pay a small fee first. ఇది నిజమా, మోసమా?",
      },
      true,
      { en: "Nobody pays a fee for a real prize; it is a trap.", te: "నిజమైన బహుమతికి ఎవరూ ఫీజు కట్టరు; ఇది ఉచ్చు." },
    ),
  ],
};

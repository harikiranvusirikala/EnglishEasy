import type { Activity, Bi, ReviewDay } from "../../types";

/** Week 15, Day 7 (CURRICULUM §4): the automatic review (with a role play from the Conversation Day), plus a quick timetable and fare round. */

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
  id: "w15-review",
  kind: "review",
  title: { en: "Travel Day", te: "ప్రయాణం రోజు" },
  extras: [
    {
      id: "q1",
      type: "readIt",
      kind: "sign",
      heading: "Vijayawada Bus Stand",
      lines: ["Guntur · every 15 minutes · Platform 5", "Tenali · 7:30, 9:30, 11:30 · Platform 8", "Ongole · 8:00, 14:00 · Platform 2"],
      prompt: {
        en: "You missed the 9:30 bus to Tenali. When is the next one?",
        te: "తెనాలి 9:30 బస్ వెళ్ళిపోయింది. తర్వాతి బస్ ఎన్నింటికి?",
      },
      options: ["11:30", "9:45", "14:00"],
      answer: 0,
      why: {
        en: "The Tenali buses leave every two hours, so 11:30 comes next.",
        te: "తెనాలి బస్సులు రెండు గంటలకి ఒకటి; 9:30 తర్వాత 11:30.",
      },
      say: "The next bus to Tenali leaves at 11:30.",
    },
    {
      id: "q2",
      type: "readIt",
      kind: "label",
      heading: "APSRTC Ticket",
      lines: ["From: Vijayawada", "To: Guntur", "Adults: 2", "Fare: ₹90"],
      prompt: { en: "This ticket is for two people. How much is one ticket?", te: "ఈ టికెట్ ఇద్దరికి. ఒక్కరికి ఎంత?" },
      options: ["45 rupees", "90 rupees", "180 rupees"],
      answer: 0,
      why: {
        en: "The fare for two adults is 90 rupees, so one ticket costs half.",
        te: "ఇద్దరికి 90 రూపాయలు, అంటే ఒక్కరికి సగం.",
      },
      say: "One ticket is 45 rupees.",
    },
    pick("q3", "The bus ___ at half past seven.", "బస్ ఏడున్నరకి బయల్దేరుతుంది.", ["leaves", "leave", "leaving"], 0, {
      en: "One bus is like he or she, so the verb takes s.",
      te: "ఒక్క బస్ he, she లాంటిదే, అందుకే verb కి s.",
    }),
    pick("q4", "How long does it ___ to Guntur?", "గుంటూరుకి ఎంతసేపు పడుతుంది?", ["take", "takes", "taking"], 0, {
      en: "After does, the verb stays plain, with no s.",
      te: "does తర్వాత verb మారదు, s రాదు.",
    }),
    pick("q5", "The train reaches Hyderabad ___ noon.", "రైలు మధ్యాహ్నం పన్నెండింటికి హైదరాబాద్ చేరుతుంది.", ["at", "on", "in"], 0, {
      en: "Clock times and noon take at, like at six or at noon.",
      te: "గడియారం సమయానికి, noon కి at: at six, at noon.",
    }),
    pick("q6", "Please go ___ meter.", "మీటర్ వేసి తీసుకెళ్ళండి.", ["by", "in", "with"], 0, {
      en: "We say by meter, like by bus or by train.",
      te: "by bus, by train లాగే by meter అంటాం.",
    }),
    pick("q7", "Is there ___ direct bus to Tirupati?", "తిరుపతికి డైరెక్ట్ బస్ ఉందా?", ["a", "an", "the"], 0, {
      en: "Is there asks about any one bus, so use a; direct starts with a d sound.",
      te: "Is there అంటే ఏదైనా ఒక బస్; direct d శబ్దంతో మొదలు, అందుకే a.",
    }),
  ],
};

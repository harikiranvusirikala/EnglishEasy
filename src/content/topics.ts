import type { Bi } from "./types";

/** Life-topic tags. Future features can gather lessons across the course by topic. */
export const topics = {
  home: { en: "Home", te: "ఇల్లు" },
  food: { en: "Food", te: "ఆహారం" },
  market: { en: "Market", te: "మార్కెట్" },
  shopping: { en: "Shopping", te: "షాపింగ్" },
  money: { en: "Money", te: "డబ్బు" },
  health: { en: "Health", te: "ఆరోగ్యం" },
  doctor: { en: "Doctor", te: "డాక్టర్" },
  pharmacy: { en: "Pharmacy", te: "మందుల షాపు" },
  bank: { en: "Bank", te: "బ్యాంక్" },
  transport: { en: "Transport", te: "ప్రయాణ సాధనాలు" },
  directions: { en: "Directions", te: "దారి అడగడం" },
  phone: { en: "Phone", te: "ఫోన్" },
  technology: { en: "Technology", te: "టెక్నాలజీ" },
  neighbours: { en: "Neighbours", te: "ఇరుగు పొరుగు" },
  festivals: { en: "Festivals", te: "పండుగలు" },
  family: { en: "Family", te: "కుటుంబం" },
  travel: { en: "Travel", te: "ప్రయాణం" },
  offices: { en: "Offices", te: "ఆఫీసులు" },
  weather: { en: "Weather", te: "వాతావరణం" },
  feelings: { en: "Feelings", te: "భావాలు" },
  time: { en: "Time", te: "సమయం" },
  people: { en: "People", te: "మనుషులు" },
} as const satisfies Record<string, Bi>;

export type TopicKey = keyof typeof topics;

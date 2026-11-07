/** A label in both languages. Every UI label lives here, never in a component. */
export type Bi = { en: string; te: string };

export const strings = {
  appName: { en: "EnglishEasy", te: "ఇంగ్లీష్ ఈజీ" },
  comingSoon: { en: "Coming soon", te: "త్వరలో వస్తుంది" },
  openLearn: { en: "Open the lessons", te: "పాఠాలను తెరవండి" },
  learnTitle: { en: "Lessons", te: "పాఠాలు" },
  learnSoon: { en: "Your lessons will be here.", te: "మీ పాఠాలు ఇక్కడ ఉంటాయి." },
} satisfies Record<string, Bi>;

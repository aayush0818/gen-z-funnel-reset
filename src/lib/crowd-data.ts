// Research values used by the charts. Keep these exactly as reported in the cited sources.

export const ASCH_MAJORITY_SIZE = [
  { opponents: 2, incorrect: 13.6 },
  { opponents: 3, incorrect: 31.8 },
  { opponents: 4, incorrect: 35.1 },
  { opponents: 6, incorrect: 35.2 },
  { opponents: 7, incorrect: 37.1 },
  { opponents: 9, incorrect: 33.1 },
  { opponents: 15, incorrect: 31.2 },
] as const;

export const ASCH_MAIN = {
  participants: 123,
  criticalTrials: 12,
  incorrectSelectionsPct: 36.8,
  independentShareLabel: "~1 in 4",
} as const;

export const MUCHNIK = {
  positiveRatingLikelihoodPct: 32,
  finalRatingIncreasePct: 25,
  year: 2013,
} as const;

export const ILLUSORY_TRUTH = {
  studies: 182,
  effectSizes: 366,
  participants: 31184,
  g: 0.37,
  ciLow: 0.3,
  ciHigh: 0.44,
  year: 2026,
} as const;

export const ECHO_REVIEW = { studies: 129, year: 2025 } as const;

export type Source = {
  n: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  url: string;
  why: string;
};

export const SOURCES: Source[] = [
  {
    n: 1,
    authors: "Solomon E. Asch",
    year: 1955,
    title: "Opinions and Social Pressure",
    journal: "Scientific American, 193(5), 31–35",
    url: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Asch_1955_Opinions_and_social_pressure.pdf",
    why: "The classic line-judgment studies. Source of the 36.8% figure, the majority-size conditions in Chart 01 and the effect of a single supporting partner.",
  },
  {
    n: 2,
    authors: "Robert B. Cialdini & Noah J. Goldstein",
    year: 2004,
    title: "Social Influence: Compliance and Conformity",
    journal: "Annual Review of Psychology, 55, 591–621",
    url: "https://doi.org/10.1146/annurev.psych.55.090902.142015",
    why: "A review of why people conform — to be accurate, to be accepted, and to keep a positive self-image. Frames the social proof, normative and informational processes in Chapter 02.",
  },
  {
    n: 3,
    authors: "Lev Muchnik, Sinan Aral & Sean J. Taylor",
    year: 2013,
    title: "Social Influence Bias: A Randomized Experiment",
    journal: "Science, 341(6146), 647–651",
    url: "https://doi.org/10.1126/science.1240466",
    why: "A randomized field experiment on a social news site showing that one early up-vote shifted later ratings — and that positive and negative cues behaved differently.",
  },
  {
    n: 4,
    authors: "Damon Centola",
    year: 2010,
    title: "The Spread of Behavior in an Online Social Network Experiment",
    journal: "Science, 329(5996), 1194–1197",
    url: "https://doi.org/10.1126/science.1185231",
    why: "Showed that a health behaviour spread further through clustered networks, where people received reinforcing signals from several contacts. The basis of the network graphic in Chapter 05.",
  },
  {
    n: 5,
    authors: "Sai Wang, Tsz Hang Chu & Guanxiong Huang",
    year: 2023,
    title: "Do Bandwagon Cues Affect Credibility Perceptions? A Meta-Analysis of the Experimental Evidence",
    journal: "Communication Research, 50(6)",
    url: "https://doi.org/10.1177/00936502221124395",
    why: "Pools experiments on likes, shares and view counts to ask whether popularity cues make online content seem more credible — the bridge between popularity and perceived credibility.",
  },
  {
    n: 6,
    authors: "Matthew Barnfield",
    year: 2019,
    title: "Think Twice before Jumping on the Bandwagon: Clarifying Concepts in Research on the Bandwagon Effect",
    journal: "Political Studies Review",
    url: "https://doi.org/10.1177/1478929919870691",
    why: "Separates the different mechanisms that get labelled 'bandwagon effects'. A useful warning against treating every follow-the-crowd behaviour as the same thing.",
  },
  {
    n: 7,
    authors: "Steeven Ye et al.",
    year: 2026,
    title: "Systematic Review and Meta-analysis of the Evidence for an Illusory Truth Effect and Its Determinants",
    journal: "Nature Communications, 17, 3270",
    url: "https://doi.org/10.1038/s41467-026-70041-x",
    why: "182 studies and 31,184 participants: repetition reliably raises truth judgments a little (g = 0.37), with large variation between methods. The data behind Chart 03.",
  },
  {
    n: 8,
    authors: "David Hartmann et al.",
    year: 2025,
    title: "A Systematic Review of Echo Chamber Research: Comparative Analysis of Conceptualizations, Operationalizations, and Varying Outcomes",
    journal: "Journal of Computational Social Science, 8, 52",
    url: "https://doi.org/10.1007/s42001-025-00381-z",
    why: "Reviews 129 studies and shows that whether echo chambers 'exist' depends heavily on how they are defined and measured. The basis of the evidence map in Chapter 08.",
  },
];

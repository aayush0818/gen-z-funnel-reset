// Research values used by the charts. Keep these exactly as reported in the cited sources.

export const ASCH_MAJORITY_SIZE = [
  { opponents: 1, incorrect: 3.6 },
  { opponents: 2, incorrect: 13.6 },
  { opponents: 3, incorrect: 31.8 },
  { opponents: 4, incorrect: 35.1 },
  { opponents: 6, incorrect: 35.2 },
  { opponents: 7, incorrect: 37.1 },
  { opponents: 9, incorrect: 35.1 },
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
export const WANG = { studies: 41, effectSizes: 161, year: 2023 } as const;
export const CENTOLA = { participants: 1528, year: 2010 } as const;

export type Source = {
  n: number;
  authors: string;
  year: number;
  title: string;
  journal: string;
  url: string;
  why: string;
};

export const SOURCES = [
  {
    n: 1,
    authors: "Solomon E. Asch",
    year: 1955,
    title: "Opinions and Social Pressure",
    journal: "Scientific American, 193(5), 31–35",
    url: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Asch_1955_Opinions_and_social_pressure.pdf",
    why: "The classic line-judgment studies. Source of the 36.8% main-series result, the reported group-size conditions and the effect of a supporting partner.",
  },
  {
    n: 2,
    authors: "Lev Muchnik, Sinan Aral & Sean J. Taylor",
    year: 2013,
    title: "Social Influence Bias: A Randomized Experiment",
    journal: "Science, 341(6146), 647–651",
    url: "https://doi.org/10.1126/science.1240466",
    why: "A randomized experiment on a social news site. Positive social influence increased the likelihood of a positive rating by 32% and final ratings by 25% on average; negative influence produced an asymmetric response.",
  },
  {
    n: 3,
    authors: "Damon Centola",
    year: 2010,
    title: "The Spread of Behavior in an Online Social Network Experiment",
    journal: "Science, 329(5996), 1194–1197",
    url: "https://doi.org/10.1126/science.1185231",
    why: "An online experiment with 1,528 participants found that an online health forum spread farther and faster in clustered than corresponding random networks, with multiple-neighbour reinforcement contributing to adoption.",
  },
  {
    n: 4,
    authors: "Sai Wang, Tsz Hang Chu & Guanxiong Huang",
    year: 2023,
    title:
      "Do Bandwagon Cues Affect Credibility Perceptions? A Meta-Analysis of the Experimental Evidence",
    journal: "Communication Research, 50(6)",
    url: "https://doi.org/10.1177/00936502221124395",
    why: "A meta-analysis of 41 studies and 161 effect sizes. The overall association between bandwagon cues and credibility perceptions was positive but small, with variation by topic, expertise and cultural context.",
  },
  {
    n: 5,
    authors: "Steeven Ye et al.",
    year: 2026,
    title:
      "Systematic Review and Meta-analysis of the Evidence for an Illusory Truth Effect and Its Determinants",
    journal: "Nature Communications, 17, 3270",
    url: "https://doi.org/10.1038/s41467-026-70041-x",
    why: "A systematic review and meta-analysis of 182 studies, 366 effect sizes and 31,184 participants. The bias-corrected overall effect was g = 0.37 (95% CI 0.30–0.44), a small positive effect with substantial variation.",
  },
  {
    n: 6,
    authors: "David Hartmann et al.",
    year: 2025,
    title:
      "A Systematic Review of Echo Chamber Research: Comparative Analysis of Conceptualizations, Operationalizations, and Varying Outcomes",
    journal: "Journal of Computational Social Science, 8, 52",
    url: "https://doi.org/10.1007/s42001-025-00381-z",
    why: "A review of 129 peer-reviewed studies found results depended on how echo chambers were defined and measured: network-based studies more often supported the hypothesis, while broader content-exposure and survey studies often challenged it.",
  },
] as const satisfies readonly [Source, Source, Source, Source, Source, Source];

export const VISUAL_ASSETS = [
  {
    name: "Hero collage background",
    source:
      "Imported site assets public/site-assets/7454e51a9c246c10.webp and 80a943002e1a54ba.webp",
    license:
      "Bundled in the imported reference project; underlying image rights are not documented.",
  },
  {
    name: "Community food-distribution photograph",
    source: "Caleb Oquendo, Pexels: https://www.pexels.com/photo/34612590/",
    localFile: "public/images/community-food-distribution.jpg",
    license: "Pexels License; free to use, with attribution optional. Credited on the page.",
  },
  {
    name: "Friends looking at a phone",
    source: "Ivan S, Pexels: https://www.pexels.com/photo/7213646/",
    localFile: "public/images/friends-looking-at-phone.jpg",
    license: "Pexels License; free to use, with attribution optional. Credited on the page.",
  },
  {
    name: "Social media browsing photograph",
    source:
      "cottonbro studio, Pexels: https://www.pexels.com/photo/a-woman-browsing-on-a-smartphone-6963602/",
    localFile: "public/images/social-feed-browsing.jpg",
    license: "Pexels License; free to use, with attribution optional. Credited on the page.",
  },
  {
    name: "Friends dancing photograph",
    source:
      "Polina Tankilevitch, Pexels: https://www.pexels.com/photo/women-dancing-together-4820199/",
    localFile: "public/images/friends-dance-trend.jpg",
    license: "Pexels License; free to use, with attribution optional. Credited on the page.",
  },
  {
    name: "Concert crowd photograph",
    source: "Maor Attias, Pexels: https://www.pexels.com/photo/5192289/",
    localFile: "public/images/viral-crowd.jpg",
    license: "Pexels License; free to use, with attribution optional. Credited on the page.",
  },
] as const;

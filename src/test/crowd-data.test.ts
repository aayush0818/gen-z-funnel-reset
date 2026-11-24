import { describe, expect, it } from "vitest";
import { ASCH_MAIN, ASCH_MAJORITY_SIZE, ILLUSORY_TRUTH, MUCHNIK, SOURCES } from "@/lib/crowd-data";

describe("research values", () => {
  it("Asch majority-size chart uses the exact reported conditions", () => {
    expect(ASCH_MAJORITY_SIZE.map((d) => [d.opponents, d.incorrect])).toEqual([
      [2, 13.6], [3, 31.8], [4, 35.1], [6, 35.2], [7, 37.1], [9, 33.1], [15, 31.2],
    ]);
  });
  it("Asch main series: 123 participants, 12 critical trials, 36.8%", () => {
    expect([ASCH_MAIN.participants, ASCH_MAIN.criticalTrials, ASCH_MAIN.incorrectSelectionsPct]).toEqual([123, 12, 36.8]);
  });
  it("Muchnik outcomes are +32% and +25%", () => {
    expect([MUCHNIK.positiveRatingLikelihoodPct, MUCHNIK.finalRatingIncreasePct]).toEqual([32, 25]);
  });
  it("Illusory truth meta-analysis: g 0.37, CI 0.30–0.44, 182 studies", () => {
    expect([ILLUSORY_TRUTH.g, ILLUSORY_TRUTH.ciLow, ILLUSORY_TRUTH.ciHigh, ILLUSORY_TRUTH.studies, ILLUSORY_TRUTH.participants]).toEqual([0.37, 0.3, 0.44, 182, 31184]);
  });
  it("lists all eight sources with links", () => {
    expect(SOURCES).toHaveLength(8);
    expect(SOURCES.every((s) => s.url.startsWith("https://"))).toBe(true);
  });
});

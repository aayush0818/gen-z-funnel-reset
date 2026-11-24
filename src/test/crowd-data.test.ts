import { describe, expect, it } from "vitest";
import {
  ASCH_MAIN,
  ASCH_MAJORITY_SIZE,
  CENTOLA,
  ECHO_REVIEW,
  ILLUSORY_TRUTH,
  MUCHNIK,
  SOURCES,
  VISUAL_ASSETS,
  WANG,
} from "@/lib/crowd-data";

describe("research values", () => {
  it("Asch majority-size chart uses the exact reported conditions", () => {
    expect(ASCH_MAJORITY_SIZE.map((d) => [d.opponents, d.incorrect])).toEqual([
      [1, 3.6],
      [2, 13.6],
      [3, 31.8],
      [4, 35.1],
      [6, 35.2],
      [7, 37.1],
      [9, 35.1],
      [15, 31.2],
    ]);
  });
  it("Asch main series: 123 participants, 12 critical trials, 36.8%", () => {
    expect([
      ASCH_MAIN.participants,
      ASCH_MAIN.criticalTrials,
      ASCH_MAIN.incorrectSelectionsPct,
    ]).toEqual([123, 12, 36.8]);
  });
  it("Muchnik outcomes are +32% and +25%", () => {
    expect([MUCHNIK.positiveRatingLikelihoodPct, MUCHNIK.finalRatingIncreasePct]).toEqual([32, 25]);
  });
  it("includes the research sample sizes used in the editorial callouts", () => {
    expect([WANG.studies, WANG.effectSizes]).toEqual([41, 161]);
    expect([CENTOLA.participants, ECHO_REVIEW.studies]).toEqual([1528, 129]);
  });
  it("Illusory truth meta-analysis: g 0.37, CI 0.30–0.44, 182 studies", () => {
    expect([
      ILLUSORY_TRUTH.g,
      ILLUSORY_TRUTH.ciLow,
      ILLUSORY_TRUTH.ciHigh,
      ILLUSORY_TRUTH.studies,
      ILLUSORY_TRUTH.participants,
    ]).toEqual([0.37, 0.3, 0.44, 182, 31184]);
  });
  it("lists all six sources with links", () => {
    expect(SOURCES).toHaveLength(6);
    expect(SOURCES.every((s) => s.url.startsWith("https://"))).toBe(true);
  });
  it("keeps a source and license note for every visual asset", () => {
    expect(
      VISUAL_ASSETS.every((asset) => asset.source.length > 0 && asset.license.length > 0),
    ).toBe(true);
  });
  it("records the credited Pexels photographs and their local copies", () => {
    const photos = VISUAL_ASSETS.filter((asset) => "localFile" in asset);
    expect(photos.map((asset) => asset.localFile)).toEqual([
      "public/images/community-food-distribution.jpg",
      "public/images/friends-looking-at-phone.jpg",
      "public/images/social-feed-browsing.jpg",
      "public/images/friends-dance-trend.jpg",
      "public/images/viral-crowd.jpg",
    ]);
    expect(photos.every((asset) => asset.license.includes("Pexels License"))).toBe(true);
  });
});

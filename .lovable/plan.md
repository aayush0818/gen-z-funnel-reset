# THE CROWD EFFECT

## Goal
Transform the imported Vogue Business × Archrival page into an original, research-led, long-form story about the Bandwagon Effect while retaining its typography, palette, image collage language, and alternating calm/dense pacing.

## Build
- Replace the imported article's visible copy with the full 11-part narrative: the opening, Bandwagon Effect, three social influence mechanisms, Asch, the fictional Mira pile-on, Ari's viral trend, Muchnik's ratings experiment, illusory truth, echo chambers, beneficial crowd influence, practical reflection, and annotated sources.
- Preserve the imported fonts, colors, hero media, header/menu/share treatment, editorial spacing, and original motif. Add a restrained set of contemporary, locally served, openly licensed photography and bespoke SVG/HTML visual stories.
- Add three keyboard/touch accessible, source-attributed data graphics: Asch's seven discrete group-size observations; Muchnik's separate +32% and +25% outcomes with a clearly illustrative rating interface; and the 2026 illusory-truth meta-analysis point estimate and confidence interval. Add methodology notes, data tables/text equivalents, and in-view one-time animation.
- Add original interactive pile-on evidence stages, trend-spread network view, and a single lazy-loaded echo-chamber 3D panel scene with a 2D/mobile/WebGL fallback. Preserve normal document scrolling, offer reduced-motion behavior, pause offscreen rendering, and avoid 3D on small screens.
- Update navigation, active chapter/progress, current-URL copy/share actions, Escape behavior, per-page metadata, and complete sources with relevance notes and working links.

## Technical details
- Use a modular React implementation on the existing TanStack Start route; keep research values in a small pure data module with regression tests.
- Retain the existing Vogue/Didot/Alicent/Garamond typography, imported color palette and design character. Do not add a charting library or scrolling dependency.
- Use SVG for research charts and React Three Fiber only for one selective, client-only echo-chamber scene. Load photos through the project asset pointers.

## Verification
- Run data tests, the existing route test, typecheck, and check the preview build log.
- Use the browser to inspect the full story and core interactions at 1440, 1280, 768, 390 and 360px; check menu/share, anchors, chart values, fictional scenario reveals, trend/network controls, the 3D/fallback, reduced motion, overflow, loading, and console errors.

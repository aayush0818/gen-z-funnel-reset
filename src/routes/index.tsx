import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import crowdCss from "../styles/crowd.css?url";
import pageCss from "../styles/crowd-page.css?url";
import {
  ASCH_MAIN,
  ASCH_MAJORITY_SIZE,
  CENTOLA,
  ECHO_REVIEW,
  ILLUSORY_TRUTH,
  MUCHNIK,
  SOURCES,
  WANG,
} from "../lib/crowd-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Crowd Effect — Everyone Thinks So. Does That Make It True?" },
      {
        name: "description",
        content:
          "A playful, research-backed look at how likes, trends and reposts can steer what we think.",
      },
      { property: "og:title", content: "The Crowd Effect" },
      {
        property: "og:description",
        content: "When the feed says everyone's doing it.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: crowdCss },
      { rel: "stylesheet", href: pageCss },
    ],
  }),
  component: CrowdEffect,
});

const spreadWaves = [
  { views: 1, label: "One post", caption: "A post appears in one feed.", short: "YOU" },
  {
    views: 3,
    label: "Three accounts",
    caption: "Three friends see the first share.",
    short: "FRIENDS",
  },
  {
    views: 9,
    label: "Nine accounts",
    caption: "A few group chats pick it up.",
    short: "GROUP CHATS",
  },
  {
    views: 27,
    label: "Twenty-seven accounts",
    caption: "Now it shows up in more feeds.",
    short: "MORE FEEDS",
  },
] as const;

function CrowdEffect() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contextOpen, setContextOpen] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(2);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const page = document.querySelector(".ce");
    page?.classList.add("rv-ready");
    document.querySelectorAll(".ce-hero [data-rv]").forEach((item) => item.classList.add("is-in"));
    const revealTargets = document.querySelectorAll(".ce [data-rv], .ce .ce-chart");
    let revealObserver: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0 },
      );
    }
    revealTargets.forEach((item) => {
      if (revealObserver) revealObserver.observe(item);
      else item.classList.add("is-in");
    });

    return () => revealObserver?.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="ce">
      <header className="ce-topbar">
        <a className="ce-wordmark" href="#top" aria-label="The Crowd Effect, top">
          THE CROWD <em>EFFECT</em>
        </a>
        <button
          ref={menuButtonRef}
          type="button"
          className={`ce-menu-trigger${menuOpen ? " is-open" : ""}`}
          aria-label={menuOpen ? "Close story menu" : "Open story menu"}
          aria-expanded={menuOpen}
          aria-controls="story-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`ce-menu${menuOpen ? " is-open" : ""}`}
          id="story-menu"
          aria-label="Story chapters"
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <a href="#opening" onClick={closeMenu}>
            The feed
          </a>
          <a href="#pile-on" onClick={closeMenu}>
            The pile-on
          </a>
          <a href="#viral-loop" onClick={closeMenu}>
            The trend
          </a>
          <a href="#research" onClick={closeMenu}>
            Research receipts
          </a>
          <a href="#sources" onClick={closeMenu}>
            Sources
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="ce-hero" aria-labelledby="hero-title">
          <div className="ce-hero__bg" aria-hidden="true" />
          <div className="wrap">
            <p className="ce-hero__eyebrow" data-rv="clip">
              THE BANDWAGON EFFECT
            </p>
            <h1 id="hero-title" data-rv="clip">
              <span className="l2">the crowd</span>
              <span className="l2">effect</span>
              <span className="l3">What now?</span>
            </h1>
          </div>
          <span className="ce-hero__index kicker" aria-hidden="true">
            A FIELD GUIDE · SCROLL TO EXPLORE
          </span>
        </section>

        <section className="ce-opening" id="opening" aria-labelledby="opening-title">
          <div className="wrap">
            <div className="ce-section-intro">
              <p className="chapter-no" data-rv>
                Your feed, your brain
              </p>
              <h2 className="h-lg" id="opening-title" data-rv="clip">
                Everyone&apos;s doing it.
                <br />
                Should you?
              </h2>
              <p className="lede" data-rv>
                A sea of likes can feel like proof. It is still just a crowd signal.
              </p>
            </div>
            <PopularityComparison />
          </div>
        </section>

        <section className="ce-context-section" id="pile-on" aria-labelledby="pile-on-title">
          <div className="wrap">
            <div className="ce-section-intro">
              <p className="chapter-no" data-rv>
                One post later
              </p>
              <h2 className="h-xl" id="pile-on-title" data-rv="clip">
                One clip.
                <br />A thousand takes.
              </h2>
              <p className="lede" data-rv>
                Reposts can outrun the context. Tap to see what the feed left out.
              </p>
            </div>
            <div className="ce-context-grid">
              <PileOnStory
                contextOpen={contextOpen}
                onToggle={() => setContextOpen((open) => !open)}
              />
              <ContextPreview contextOpen={contextOpen} />
            </div>
          </div>
        </section>

        <section className="ce-trend-section" id="viral-loop" aria-labelledby="viral-title">
          <div className="wrap">
            <div className="ce-section-intro">
              <p className="chapter-no" data-rv>
                The viral loop
              </p>
              <h2 className="h-xl" id="viral-title" data-rv="clip">
                Your FYP is
                <br />a feedback loop.
              </h2>
              <p className="lede" data-rv>
                One share leads to another. Play with a tiny, made-up trend model.
              </p>
            </div>
            <TrendExperience />
            <div className="ce-centola" data-rv>
              <span className="ce-centola__number" data-rv="clip">
                {CENTOLA.participants.toLocaleString("en-US")}
              </span>
              <p>
                In an online experiment, behavior spread farther and faster through friend clusters
                than through random networks. More than one friend joining helped.
              </p>
              <SourceLine source={SOURCES[2]} />
            </div>
          </div>
        </section>

        <section className="ce-evidence-section" id="research" aria-labelledby="research-title">
          <div className="wrap">
            <div className="ce-section-intro">
              <p className="chapter-no" data-rv>
                The research receipts
              </p>
              <h2 className="h-lg" id="research-title" data-rv="clip">
                Vibes are fun.
                <br />
                What does the data say?
              </h2>
            </div>

            <div className="ce-evidence-grid">
              <article className="ce-evidence-card ce-evidence-card--blue" data-rv>
                <p className="kicker">Social ratings · Muchnik et al. (2013)</p>
                <div className="ce-muchnik-stats">
                  <div>
                    <strong>+{MUCHNIK.positiveRatingLikelihoodPct}%</strong>
                    <span>likelihood of a positive rating</span>
                  </div>
                  <div>
                    <strong>+{MUCHNIK.finalRatingIncreasePct}%</strong>
                    <span>average final rating</span>
                  </div>
                </div>
                <p>
                  In a randomized social-news experiment, early positive ratings nudged later
                  ratings upward.
                </p>
                <SourceLine source={SOURCES[1]} />
              </article>

              <article className="ce-evidence-card ce-evidence-card--lime" data-rv>
                <p className="kicker">Before the feed · Asch (1955)</p>
                <strong className="ce-asch-summary">{ASCH_MAIN.incorrectSelectionsPct}%</strong>
                <p>
                  Of critical-trial responses, this share matched an incorrect unanimous majority in
                  the {ASCH_MAIN.participants}-person main series.
                </p>
                <p className="note">A classic conformity study—not a social-media experiment.</p>
                <SourceLine source={SOURCES[0]} />
              </article>
            </div>

            <AschChart selectedPoint={selectedPoint} onSelectPoint={setSelectedPoint} />
            <IllusoryTruthGraphic />

            <div className="ce-report-notes">
              <article data-rv>
                <p className="kicker">A 2023 meta-analysis · Wang et al.</p>
                <strong>
                  {WANG.studies} studies · {WANG.effectSizes} effects
                </strong>
                <p>
                  Bandwagon cues had a small positive link with credibility judgments; the result
                  varied by topic and source.
                </p>
                <SourceLine source={SOURCES[3]} />
              </article>
              <article data-rv>
                <p className="kicker">Echo chambers · 2025 review</p>
                <strong>{ECHO_REVIEW.studies} studies. Mixed results.</strong>
                <p>
                  What researchers found depended on how an echo chamber was defined and measured.
                </p>
                <SourceLine source={SOURCES[5]} />
              </article>
            </div>
          </div>
        </section>

        <section className="ce-reset-section" id="reset" aria-labelledby="reset-title">
          <div className="wrap">
            <p className="chapter-no" data-rv>
              Before you repost
            </p>
            <h2 className="h-lg" id="reset-title" data-rv="clip">
              A tiny feed reset.
            </h2>
            <ol className="ce-reset-list">
              <li data-rv>
                <span>01</span>
                <h3>Pause</h3>
                <p>Is the number doing the convincing?</p>
              </li>
              <li data-rv>
                <span>02</span>
                <h3>Open</h3>
                <p>Find the original post, not just the repost.</p>
              </li>
              <li data-rv>
                <span>03</span>
                <h3>Check</h3>
                <p>Look for a source outside the comment section.</p>
              </li>
            </ol>
            <p className="ce-reset-line" data-rv="clip">
              Popularity is a signal.
              <br />
              <em>Not a fact-check.</em>
            </p>
          </div>
        </section>

        <section className="ce-sources-section" id="sources" aria-labelledby="sources-title">
          <div className="wrap">
            <p className="chapter-no" data-rv>
              For the curious
            </p>
            <h2 className="h-lg" id="sources-title" data-rv="clip">
              Open the receipts.
            </h2>
            <details className="ce-source-drawer">
              <summary>Six studies and reviews behind this page</summary>
              <ol className="ce-srclist">
                {SOURCES.map((source, index) => (
                  <li className="ce-src" key={source.url}>
                    <span className="n">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>
                        {source.authors} ({source.year})
                      </h3>
                      <p className="meta">
                        <em>{source.title}</em>. {source.journal}.
                      </p>
                    </div>
                    <div>
                      <p>{source.why}</p>
                      <a className="go" href={source.url} target="_blank" rel="noreferrer">
                        Read source <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="ce-method-note">
                The trend model is illustrative, not platform data. Fictional posts and stories are
                labelled. Each research result refers to the task and outcome measured in its
                original study.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="ce-footer">
        <div className="wrap">
          <p className="h-lg">The crowd effect</p>
          <a href="#top">Back to the beginning ↑</a>
        </div>
      </footer>
    </div>
  );
}

function PopularityComparison() {
  const [mode, setMode] = useState<"quiet" | "crowd">("quiet");
  const [answers, setAnswers] = useState<{
    quiet: "try" | "scroll" | null;
    crowd: "try" | "scroll" | null;
  }>({ quiet: null, crowd: null });
  const choice = answers[mode];
  const isComplete = answers.quiet !== null && answers.crowd !== null;
  const hasSavedAnswer = answers.quiet !== null || answers.crowd !== null;

  const changeMode = (nextMode: "quiet" | "crowd") => {
    setMode(nextMode);
  };

  const resetComparison = () => {
    setMode("quiet");
    setAnswers({ quiet: null, crowd: null });
  };

  const choiceLabel = (answer: "try" | "scroll") =>
    answer === "try" ? "try it" : "keep scrolling";

  return (
    <div className="ce-feed-test" data-rv>
      <div className="ce-feed-test__prompt">
        <p className="kicker">Same post. Different numbers.</p>
        <h3>Would you try this?</h3>
        <p>Make a call under both counts. The post and photo stay the same.</p>
        <p className="ce-feed-test__example">
          Real-life cues: star ratings, view counts, and follower totals.
        </p>
        <div className="seg" role="group" aria-label="Choose the post's popularity count">
          <button type="button" aria-pressed={mode === "quiet"} onClick={() => changeMode("quiet")}>
            12 likes
          </button>
          <button type="button" aria-pressed={mode === "crowd"} onClick={() => changeMode("crowd")}>
            12.4K likes
          </button>
        </div>
        <div className="ce-feed-test__choice" role="group" aria-label="Your reaction to the post">
          <button
            type="button"
            className={choice === "try" ? "is-picked" : ""}
            aria-pressed={choice === "try"}
            onClick={() => setAnswers((current) => ({ ...current, [mode]: "try" }))}
          >
            I&apos;d try it
          </button>
          <button
            type="button"
            className={choice === "scroll" ? "is-picked" : ""}
            aria-pressed={choice === "scroll"}
            onClick={() => setAnswers((current) => ({ ...current, [mode]: "scroll" }))}
          >
            Keep scrolling
          </button>
        </div>
        <p className="ce-feed-test__result" aria-live="polite">
          {isComplete
            ? "Both answers are saved. Here’s what changed—or stayed the same."
            : choice
              ? `Saved: ${choiceLabel(choice)} with ${
                  mode === "crowd" ? "12.4K likes" : "12 likes"
                }. Switch counts and make your second call.`
              : hasSavedAnswer
                ? "Your first call is saved. Make a choice with this count."
                : "Only the like count changes. Does the crowd change your mind?"}
        </p>
      </div>

      <article className="ce-social-post" aria-label="Fictional social media post">
        <div className="ce-social-post__top">
          <span className="ce-avatar" aria-hidden="true">
            F
          </span>
          <div>
            <strong>@feedfinds</strong>
            <span>Fictional feed post · 2h</span>
          </div>
          <span className="ce-social-post__dots" aria-hidden="true">
            •••
          </span>
        </div>
        <img
          src="/images/social-feed-browsing.jpg"
          alt="Close-up of someone browsing a social-media feed on a smartphone."
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="ce-social-post__body">
          <div className="ce-social-post__actions" aria-live="polite">
            <span>LIKE</span>
            <span>COMMENT</span>
            <span>SHARE</span>
            <strong>{mode === "crowd" ? "12.4K" : "12"} likes</strong>
          </div>
          <p>
            <strong>@feedfinds</strong> The 2-minute desk reset everyone&apos;s trying. Would you?
          </p>
          <span className="ce-social-post__tag">#tryit · #foryou</span>
        </div>
        <p className="ce-social-post__credit">
          Photo: cottonbro studio /{" "}
          <a
            href="https://www.pexels.com/photo/a-woman-browsing-on-a-smartphone-6963602/"
            target="_blank"
            rel="noreferrer"
          >
            Pexels
          </a>
          . Illustrative, not the fictional post.
        </p>
      </article>
      {isComplete && (
        <section className="ce-feed-test__outcome" aria-live="polite">
          <div>
            <p className="kicker">Your two calls</p>
            <h4>
              {answers.quiet !== answers.crowd
                ? "The crowd count changed your pick."
                : "Your pick stayed steady."}
            </h4>
            <p>
              12 likes: {choiceLabel(answers.quiet!)} · 12.4K likes: {choiceLabel(answers.crowd!)}
            </p>
            <p>
              This is a self-check, not a score. In a social-news experiment, an early positive
              rating made a later positive rating 32% more likely on average.
            </p>
            <SourceLine source={SOURCES[1]} />
          </div>
          <button type="button" onClick={resetComparison}>
            Try the comparison again
          </button>
        </section>
      )}
    </div>
  );
}

function PileOnStory({ contextOpen, onToggle }: { contextOpen: boolean; onToggle: () => void }) {
  return (
    <article className="ce-pile-card" data-rv>
      <div className="ce-pile-card__top">
        <span className="ce-avatar ce-avatar--lime" aria-hidden="true">
          C
        </span>
        <div>
          <strong>@cityloop</strong>
          <span>Fictional post · 3h</span>
        </div>
        <span className="ce-pile-card__badge">CONTEXT MISSING</span>
      </div>
      <p className="ce-pile-card__claim">
        &ldquo;Someone took food meant for the whole community. Look at this.&rdquo;
      </p>
      <div className="ce-comment-stack" aria-label="Fictional replies">
        <p>
          <strong>@user01</strong> Wait, is that all the food?
        </p>
        <p>
          <strong>@user02</strong> Reposting before this disappears.
        </p>
        <p>
          <strong>@user03</strong> Everyone says it happened.
        </p>
      </div>
      <button
        className="ce-context-button"
        type="button"
        aria-expanded={contextOpen}
        aria-controls="missing-context context-photo-preview"
        onClick={onToggle}
      >
        {contextOpen ? "Hide the context ↑" : "Show the missing context ↓"}
      </button>
      <div
        className="ce-context-reveal"
        id="missing-context"
        data-open={contextOpen}
        aria-hidden={!contextOpen}
      >
        <div>
          <p>
            In this made-up story, the longer clip shows neighbours sorting food boxes for a
            community pickup. The original accusation left out what happened before and after the
            frame.
          </p>
          <strong>New context. Same post count. Very different story.</strong>
        </div>
      </div>
      <p className="ce-context-example">
        Real-life parallel: a short clip or screenshot can travel without its original source or
        what happened before it.
      </p>
    </article>
  );
}

function ContextPreview({ contextOpen }: { contextOpen: boolean }) {
  return (
    <div className="ce-context-preview" id="context-photo-preview" aria-live="polite">
      {contextOpen ? (
        <figure className="ce-context-photo">
          <img
            src="/images/community-food-distribution.jpg"
            alt="Volunteers preparing packaged food for distribution at an outdoor community event."
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            A separate, illustrative community photo—not the fictional people or event. Photo by{" "}
            <a href="https://www.pexels.com/photo/34612590/" target="_blank" rel="noreferrer">
              Caleb Oquendo / Pexels
            </a>
            .
          </figcaption>
        </figure>
      ) : (
        <div className="ce-context-placeholder" aria-hidden="true">
          <span>THE REST OF THE CLIP</span>
          <strong>Out of frame.</strong>
          <small>Open the context to see what happened next.</small>
        </div>
      )}
    </div>
  );
}

function TrendExperience() {
  const [stage, setStage] = useState(0);

  return (
    <div className="ce-trend-grid">
      <TrendSpread
        stage={stage}
        onAdvance={() => setStage((current) => Math.min(current + 1, spreadWaves.length - 1))}
        onReset={() => setStage(0)}
      />
      <TrendPhoto stage={stage} />
    </div>
  );
}

function TrendSpread({
  stage,
  onAdvance,
  onReset,
}: {
  stage: number;
  onAdvance: () => void;
  onReset: () => void;
}) {
  const currentWave = spreadWaves[stage]!;
  const isComplete = stage === spreadWaves.length - 1;

  return (
    <div className="ce-spread" data-rv>
      <div className="ce-spread__head">
        <div>
          <p className="kicker">Tiny trend simulator</p>
          <h3>Pass it on.</h3>
        </div>
        <span className="ce-spread__count" aria-live="polite">
          {currentWave.views} {currentWave.views === 1 ? "account" : "accounts"}
        </span>
      </div>
      <p className="ce-spread__caption">{currentWave.caption}</p>
      <div className="ce-spread__people" aria-hidden="true" data-stage={stage}>
        {Array.from({ length: currentWave.views }, (_, index) => (
          <span
            className="ce-spread__person"
            key={`${stage}-${index}`}
            style={{ animationDelay: `${index * 15}ms` }}
          >
            {String.fromCharCode(65 + (index % 26))}
          </span>
        ))}
      </div>
      <div
        className="ce-wave-chart"
        role="img"
        aria-label={`Illustrative toy model: ${spreadWaves.map((wave) => wave.views).join(", ")} accounts across four sharing waves. Not platform data.`}
      >
        {spreadWaves.map((wave, index) => (
          <div className="ce-wave-chart__column" data-active={index <= stage} key={wave.label}>
            <span>{wave.views}</span>
            <div className="ce-wave-chart__track">
              <span style={{ height: `${(wave.views / 27) * 100}%` }} />
            </div>
            <small>{wave.short}</small>
          </div>
        ))}
      </div>
      <p className="ce-spread__example">
        <strong>REAL-LIFE PARALLEL</strong> Trending audio and dance challenges can move through
        friend groups and recommendation feeds.
      </p>
      <p className="ce-spread__disclaimer">
        Toy model: each share reaches 3 new accounts. These counts are invented—not platform data or
        a real reach forecast.
      </p>
      {isComplete && (
        <p className="ce-spread__outcome" role="status">
          End of this model: 27 accounts. Actual reach depends on people and platform
          recommendations—not a neat 3× rule.
        </p>
      )}
      <button
        className="ce-spread__button"
        type="button"
        onClick={isComplete ? onReset : onAdvance}
      >
        {isComplete ? "Restart from one post" : "Pass the post on →"}
      </button>
    </div>
  );
}

function TrendPhoto({ stage }: { stage: number }) {
  const scenes = [
    {
      src: "/images/social-feed-browsing.jpg",
      alt: "Someone browsing a social-media feed on a smartphone.",
      width: "1200",
      height: "800",
      caption: "One person scrolling. Photo by ",
      author: "cottonbro studio",
      url: "https://www.pexels.com/photo/a-woman-browsing-on-a-smartphone-6963602/",
    },
    {
      src: "/images/friends-looking-at-phone.jpg",
      alt: "Friends looking at a phone together.",
      width: "1125",
      height: "750",
      caption: "Friends pass a post around. Photo by ",
      author: "Ivan S",
      url: "https://www.pexels.com/photo/7213646/",
    },
    {
      src: "/images/friends-dance-trend.jpg",
      alt: "Two friends dancing together against a blue background.",
      width: "1100",
      height: "733",
      caption: "A dance trend reaches new people. Photo by ",
      author: "Polina Tankilevitch",
      url: "https://www.pexels.com/photo/women-dancing-together-4820199/",
    },
    {
      src: "/images/viral-crowd.jpg",
      alt: "People dancing at a separate live music event.",
      width: "1200",
      height: "800",
      caption: "A wider crowd—not actual viewers of the post. Photo by ",
      author: "Maor Attias",
      url: "https://www.pexels.com/photo/5192289/",
    },
  ] as const;
  const scene = scenes[stage]!;

  return (
    <figure className="ce-trend-photo" data-rv>
      <img
        key={stage}
        src={scene.src}
        alt={scene.alt}
        width={scene.width}
        height={scene.height}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        {scene.caption}
        <a href={scene.url} target="_blank" rel="noreferrer">
          {scene.author} / Pexels
        </a>
        . Illustrative, not evidence of this model&apos;s reach.
      </figcaption>
    </figure>
  );
}

function AschChart({
  selectedPoint,
  onSelectPoint,
}: {
  selectedPoint: number;
  onSelectPoint: (index: number) => void;
}) {
  const selected = ASCH_MAJORITY_SIZE[selectedPoint]!;

  return (
    <div className="ce-asch-chart-card ce-chart" aria-labelledby="asch-chart-title">
      <div className="ce-chart-heading">
        <div>
          <p className="kicker">The group-size effect · reported results</p>
          <h3 id="asch-chart-title">How many people disagreed?</h3>
        </div>
        <p>Select a bar to see the result.</p>
      </div>
      <div
        className="ce-asch-chart"
        role="group"
        aria-label="Incorrect responses by number of opposing people in Asch's reported group-size variation"
      >
        {ASCH_MAJORITY_SIZE.map((point, index) => (
          <button
            className="ce-asch-bar"
            key={point.opponents}
            type="button"
            aria-pressed={selectedPoint === index}
            aria-label={`${point.opponents} opposing ${point.opponents === 1 ? "person" : "people"}: ${point.incorrect}% incorrect selections`}
            onClick={() => onSelectPoint(index)}
          >
            <span className="ce-asch-bar__value">{point.incorrect}%</span>
            <span className="ce-asch-bar__track" aria-hidden="true">
              <span
                className="ce-asch-bar__fill"
                style={{ height: `${(point.incorrect / 40) * 100}%` }}
              />
            </span>
            <span className="ce-asch-bar__label">{point.opponents}</span>
          </button>
        ))}
      </div>
      <p className="ce-point-detail" aria-live="polite">
        <strong>
          {selected.opponents} opposing {selected.opponents === 1 ? "person" : "people"}
        </strong>
        <span>{selected.incorrect}% incorrect selections</span>
      </p>
      <p className="ce-chart-note">
        Discrete group-size conditions from Asch (1955), separate from the 36.8% main-series result.
        No missing values are estimated.
      </p>
    </div>
  );
}

function IllusoryTruthGraphic() {
  const low = 0.2;
  const high = 0.55;
  const scale = (value: number) => `${((value - low) / (high - low)) * 100}%`;

  return (
    <article className="ce-truth-study" data-rv>
      <div className="ce-truth-study__intro">
        <p className="kicker">Repetition &amp; truth judgments · 2026 meta-analysis</p>
        <h3>Familiar can feel true.</h3>
        <p>
          Across {ILLUSORY_TRUTH.studies} studies and{" "}
          {ILLUSORY_TRUTH.participants.toLocaleString("en-US")} participants, repeated statements
          had a small positive effect on perceived truth.
        </p>
        <p className="note">g = 0.37 is an effect size, not a 37% increase.</p>
        <SourceLine source={SOURCES[4]} />
      </div>
      <div
        className="ce-truth-plot"
        role="img"
        aria-label={`Effect size g ${ILLUSORY_TRUTH.g}, with 95% confidence interval from ${ILLUSORY_TRUTH.ciLow} to ${ILLUSORY_TRUTH.ciHigh}`}
      >
        <strong className="ce-truth-g">g = {ILLUSORY_TRUTH.g.toFixed(2)}</strong>
        <div className="ce-truth-plot__track">
          <span
            className="ce-truth-interval"
            style={{
              left: scale(ILLUSORY_TRUTH.ciLow),
              width: `${((ILLUSORY_TRUTH.ciHigh - ILLUSORY_TRUTH.ciLow) / (high - low)) * 100}%`,
            }}
          />
          <span className="ce-truth-estimate" style={{ left: scale(ILLUSORY_TRUTH.g) }} />
        </div>
        <div className="ce-truth-plot__ticks" aria-hidden="true">
          {[0.2, 0.3, 0.4, 0.5, 0.55].map((tick) => (
            <span key={tick} style={{ left: scale(tick) }}>
              {tick.toFixed(2)}
            </span>
          ))}
        </div>
        <div className="ce-truth-plot__bounds" aria-hidden="true">
          <span style={{ left: scale(ILLUSORY_TRUTH.ciLow) }}>
            95% CI {ILLUSORY_TRUTH.ciLow.toFixed(2)}
          </span>
          <span style={{ left: scale(ILLUSORY_TRUTH.ciHigh) }}>
            {ILLUSORY_TRUTH.ciHigh.toFixed(2)}
          </span>
        </div>
      </div>
    </article>
  );
}

function SourceLine({ source }: { source: (typeof SOURCES)[number] }) {
  return (
    <p className="source-line">
      {source.authors}, {source.year} ·{" "}
      <a href={source.url} target="_blank" rel="noreferrer">
        Source
      </a>
    </p>
  );
}

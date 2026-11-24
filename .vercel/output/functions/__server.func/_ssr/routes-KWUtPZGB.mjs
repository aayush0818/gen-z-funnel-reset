import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KWUtPZGB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ASCH_MAJORITY_SIZE = [
	{
		opponents: 1,
		incorrect: 3.6
	},
	{
		opponents: 2,
		incorrect: 13.6
	},
	{
		opponents: 3,
		incorrect: 31.8
	},
	{
		opponents: 4,
		incorrect: 35.1
	},
	{
		opponents: 6,
		incorrect: 35.2
	},
	{
		opponents: 7,
		incorrect: 37.1
	},
	{
		opponents: 9,
		incorrect: 35.1
	},
	{
		opponents: 15,
		incorrect: 31.2
	}
];
var ASCH_MAIN = {
	participants: 123,
	criticalTrials: 12,
	incorrectSelectionsPct: 36.8,
	independentShareLabel: "~1 in 4"
};
var MUCHNIK = {
	positiveRatingLikelihoodPct: 32,
	finalRatingIncreasePct: 25,
	year: 2013
};
var ILLUSORY_TRUTH = {
	studies: 182,
	effectSizes: 366,
	participants: 31184,
	g: .37,
	ciLow: .3,
	ciHigh: .44,
	year: 2026
};
var ECHO_REVIEW = {
	studies: 129,
	year: 2025
};
var WANG = {
	studies: 41,
	effectSizes: 161,
	year: 2023
};
var CENTOLA = {
	participants: 1528,
	year: 2010
};
var SOURCES = [
	{
		n: 1,
		authors: "Solomon E. Asch",
		year: 1955,
		title: "Opinions and Social Pressure",
		journal: "Scientific American, 193(5), 31–35",
		url: "https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Influence_Compliance/Asch_1955_Opinions_and_social_pressure.pdf",
		why: "The classic line-judgment studies. Source of the 36.8% main-series result, the reported group-size conditions and the effect of a supporting partner."
	},
	{
		n: 2,
		authors: "Lev Muchnik, Sinan Aral & Sean J. Taylor",
		year: 2013,
		title: "Social Influence Bias: A Randomized Experiment",
		journal: "Science, 341(6146), 647–651",
		url: "https://doi.org/10.1126/science.1240466",
		why: "A randomized experiment on a social news site. Positive social influence increased the likelihood of a positive rating by 32% and final ratings by 25% on average; negative influence produced an asymmetric response."
	},
	{
		n: 3,
		authors: "Damon Centola",
		year: 2010,
		title: "The Spread of Behavior in an Online Social Network Experiment",
		journal: "Science, 329(5996), 1194–1197",
		url: "https://doi.org/10.1126/science.1185231",
		why: "An online experiment with 1,528 participants found that an online health forum spread farther and faster in clustered than corresponding random networks, with multiple-neighbour reinforcement contributing to adoption."
	},
	{
		n: 4,
		authors: "Sai Wang, Tsz Hang Chu & Guanxiong Huang",
		year: 2023,
		title: "Do Bandwagon Cues Affect Credibility Perceptions? A Meta-Analysis of the Experimental Evidence",
		journal: "Communication Research, 50(6)",
		url: "https://doi.org/10.1177/00936502221124395",
		why: "A meta-analysis of 41 studies and 161 effect sizes. The overall association between bandwagon cues and credibility perceptions was positive but small, with variation by topic, expertise and cultural context."
	},
	{
		n: 5,
		authors: "Steeven Ye et al.",
		year: 2026,
		title: "Systematic Review and Meta-analysis of the Evidence for an Illusory Truth Effect and Its Determinants",
		journal: "Nature Communications, 17, 3270",
		url: "https://doi.org/10.1038/s41467-026-70041-x",
		why: "A systematic review and meta-analysis of 182 studies, 366 effect sizes and 31,184 participants. The bias-corrected overall effect was g = 0.37 (95% CI 0.30–0.44), a small positive effect with substantial variation."
	},
	{
		n: 6,
		authors: "David Hartmann et al.",
		year: 2025,
		title: "A Systematic Review of Echo Chamber Research: Comparative Analysis of Conceptualizations, Operationalizations, and Varying Outcomes",
		journal: "Journal of Computational Social Science, 8, 52",
		url: "https://doi.org/10.1007/s42001-025-00381-z",
		why: "A review of 129 peer-reviewed studies found results depended on how echo chambers were defined and measured: network-based studies more often supported the hypothesis, while broader content-exposure and survey studies often challenged it."
	}
];
var spreadWaves = [
	{
		views: 1,
		label: "One post",
		caption: "A post appears in one feed.",
		short: "YOU"
	},
	{
		views: 3,
		label: "Three accounts",
		caption: "Three friends see the first share.",
		short: "FRIENDS"
	},
	{
		views: 9,
		label: "Nine accounts",
		caption: "A few group chats pick it up.",
		short: "GROUP CHATS"
	},
	{
		views: 27,
		label: "Twenty-seven accounts",
		caption: "Now it shows up in more feeds.",
		short: "MORE FEEDS"
	}
];
function CrowdEffect() {
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [contextOpen, setContextOpen] = (0, import_react.useState)(false);
	const [selectedPoint, setSelectedPoint] = (0, import_react.useState)(2);
	const menuButtonRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		document.querySelector(".ce")?.classList.add("rv-ready");
		document.querySelectorAll(".ce-hero [data-rv]").forEach((item) => item.classList.add("is-in"));
		const revealTargets = document.querySelectorAll(".ce [data-rv], .ce .ce-chart");
		let revealObserver = null;
		if (typeof IntersectionObserver !== "undefined") revealObserver = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-in");
					revealObserver?.unobserve(entry.target);
				}
			});
		}, { threshold: 0 });
		revealTargets.forEach((item) => {
			if (revealObserver) revealObserver.observe(item);
			else item.classList.add("is-in");
		});
		return () => revealObserver?.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (!menuOpen) return;
		const closeOnEscape = (event) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
				menuButtonRef.current?.focus();
			}
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [menuOpen]);
	const closeMenu = () => setMenuOpen(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ce",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "ce-topbar",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						className: "ce-wordmark",
						href: "#top",
						"aria-label": "The Crowd Effect, top",
						children: ["THE CROWD ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "EFFECT" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						ref: menuButtonRef,
						type: "button",
						className: `ce-menu-trigger${menuOpen ? " is-open" : ""}`,
						"aria-label": menuOpen ? "Close story menu" : "Open story menu",
						"aria-expanded": menuOpen,
						"aria-controls": "story-menu",
						onClick: () => setMenuOpen((open) => !open),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: `ce-menu${menuOpen ? " is-open" : ""}`,
						id: "story-menu",
						"aria-label": "Story chapters",
						"aria-hidden": !menuOpen,
						inert: !menuOpen,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#opening",
								onClick: closeMenu,
								children: "The feed"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#pile-on",
								onClick: closeMenu,
								children: "The pile-on"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#viral-loop",
								onClick: closeMenu,
								children: "The trend"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#research",
								onClick: closeMenu,
								children: "Research receipts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#sources",
								onClick: closeMenu,
								children: "Sources"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "ce-hero",
						"aria-labelledby": "hero-title",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "ce-hero__bg",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "ce-hero__eyebrow",
									"data-rv": "clip",
									children: "THE BANDWAGON EFFECT"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									id: "hero-title",
									"data-rv": "clip",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "l2",
											children: "the crowd"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "l2",
											children: "effect"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "l3",
											children: "What now?"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ce-hero__index kicker",
								"aria-hidden": "true",
								children: "A FIELD GUIDE · SCROLL TO EXPLORE"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-opening",
						id: "opening",
						"aria-labelledby": "opening-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ce-section-intro",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "chapter-no",
										"data-rv": true,
										children: "Your feed, your brain"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "h-lg",
										id: "opening-title",
										"data-rv": "clip",
										children: [
											"Everyone's doing it.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Should you?"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "lede",
										"data-rv": true,
										children: "A sea of likes can feel like proof. It is still just a crowd signal."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopularityComparison, {})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-context-section",
						id: "pile-on",
						"aria-labelledby": "pile-on-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ce-section-intro",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "chapter-no",
										"data-rv": true,
										children: "One post later"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "h-xl",
										id: "pile-on-title",
										"data-rv": "clip",
										children: [
											"One clip.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"A thousand takes."
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "lede",
										"data-rv": true,
										children: "Reposts can outrun the context. Tap to see what the feed left out."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ce-context-grid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PileOnStory, {
									contextOpen,
									onToggle: () => setContextOpen((open) => !open)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContextPreview, { contextOpen })]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-trend-section",
						id: "viral-loop",
						"aria-labelledby": "viral-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ce-section-intro",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "chapter-no",
											"data-rv": true,
											children: "The viral loop"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "h-xl",
											id: "viral-title",
											"data-rv": "clip",
											children: [
												"Your FYP is",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"a feedback loop."
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "lede",
											"data-rv": true,
											children: "One share leads to another. Play with a tiny, made-up trend model."
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendExperience, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ce-centola",
									"data-rv": true,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ce-centola__number",
											"data-rv": "clip",
											children: CENTOLA.participants.toLocaleString("en-US")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In an online experiment, behavior spread farther and faster through friend clusters than through random networks. More than one friend joining helped." }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[2] })
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-evidence-section",
						id: "research",
						"aria-labelledby": "research-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ce-section-intro",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "chapter-no",
										"data-rv": true,
										children: "The research receipts"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "h-lg",
										id: "research-title",
										"data-rv": "clip",
										children: [
											"Vibes are fun.",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"What does the data say?"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ce-evidence-grid",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "ce-evidence-card ce-evidence-card--blue",
										"data-rv": true,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "kicker",
												children: "Social ratings · Muchnik et al. (2013)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "ce-muchnik-stats",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
													"+",
													MUCHNIK.positiveRatingLikelihoodPct,
													"%"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "likelihood of a positive rating" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
													"+",
													MUCHNIK.finalRatingIncreasePct,
													"%"
												] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "average final rating" })] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In a randomized social-news experiment, early positive ratings nudged later ratings upward." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[1] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "ce-evidence-card ce-evidence-card--lime",
										"data-rv": true,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "kicker",
												children: "Before the feed · Asch (1955)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
												className: "ce-asch-summary",
												children: [ASCH_MAIN.incorrectSelectionsPct, "%"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
												"Of critical-trial responses, this share matched an incorrect unanimous majority in the ",
												ASCH_MAIN.participants,
												"-person main series."
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "note",
												children: "A classic conformity study—not a social-media experiment."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[0] })
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AschChart, {
									selectedPoint,
									onSelectPoint: setSelectedPoint
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IllusoryTruthGraphic, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "ce-report-notes",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										"data-rv": true,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "kicker",
												children: "A 2023 meta-analysis · Wang et al."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
												WANG.studies,
												" studies · ",
												WANG.effectSizes,
												" effects"
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bandwagon cues had a small positive link with credibility judgments; the result varied by topic and source." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[3] })
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										"data-rv": true,
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "kicker",
												children: "Echo chambers · 2025 review"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [ECHO_REVIEW.studies, " studies. Mixed results."] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What researchers found depended on how an echo chamber was defined and measured." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[5] })
										]
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-reset-section",
						id: "reset",
						"aria-labelledby": "reset-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-no",
									"data-rv": true,
									children: "Before you repost"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "h-lg",
									id: "reset-title",
									"data-rv": "clip",
									children: "A tiny feed reset."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
									className: "ce-reset-list",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											"data-rv": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Pause" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Is the number doing the convincing?" })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											"data-rv": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "02" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Open" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Find the original post, not just the repost." })
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											"data-rv": true,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "03" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Check" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Look for a source outside the comment section." })
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "ce-reset-line",
									"data-rv": "clip",
									children: [
										"Popularity is a signal.",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Not a fact-check." })
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "ce-sources-section",
						id: "sources",
						"aria-labelledby": "sources-title",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "chapter-no",
									"data-rv": true,
									children: "For the curious"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "h-lg",
									id: "sources-title",
									"data-rv": "clip",
									children: "Open the receipts."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
									className: "ce-source-drawer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: "Six studies and reviews behind this page" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
											className: "ce-srclist",
											children: SOURCES.map((source, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "ce-src",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "n",
														children: String(index + 1).padStart(2, "0")
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
														source.authors,
														" (",
														source.year,
														")"
													] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "meta",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: source.title }),
															". ",
															source.journal,
															"."
														]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: source.why }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														className: "go",
														href: source.url,
														target: "_blank",
														rel: "noreferrer",
														children: ["Read source ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															"aria-hidden": "true",
															children: "↗"
														})]
													})] })
												]
											}, source.url))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "ce-method-note",
											children: "The trend model is illustrative, not platform data. Fictional posts and stories are labelled. Each research result refers to the task and outcome measured in its original study."
										})
									]
								})
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "ce-footer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "h-lg",
						children: "The crowd effect"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						children: "Back to the beginning ↑"
					})]
				})
			})
		]
	});
}
function PopularityComparison() {
	const [mode, setMode] = (0, import_react.useState)("quiet");
	const [answers, setAnswers] = (0, import_react.useState)({
		quiet: null,
		crowd: null
	});
	const choice = answers[mode];
	const isComplete = answers.quiet !== null && answers.crowd !== null;
	const hasSavedAnswer = answers.quiet !== null || answers.crowd !== null;
	const changeMode = (nextMode) => {
		setMode(nextMode);
	};
	const resetComparison = () => {
		setMode("quiet");
		setAnswers({
			quiet: null,
			crowd: null
		});
	};
	const choiceLabel = (answer) => answer === "try" ? "try it" : "keep scrolling";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ce-feed-test",
		"data-rv": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ce-feed-test__prompt",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Same post. Different numbers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Would you try this?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Make a call under both counts. The post and photo stay the same." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ce-feed-test__example",
						children: "Real-life cues: star ratings, view counts, and follower totals."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "seg",
						role: "group",
						"aria-label": "Choose the post's popularity count",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": mode === "quiet",
							onClick: () => changeMode("quiet"),
							children: "12 likes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-pressed": mode === "crowd",
							onClick: () => changeMode("crowd"),
							children: "12.4K likes"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ce-feed-test__choice",
						role: "group",
						"aria-label": "Your reaction to the post",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: choice === "try" ? "is-picked" : "",
							"aria-pressed": choice === "try",
							onClick: () => setAnswers((current) => ({
								...current,
								[mode]: "try"
							})),
							children: "I'd try it"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: choice === "scroll" ? "is-picked" : "",
							"aria-pressed": choice === "scroll",
							onClick: () => setAnswers((current) => ({
								...current,
								[mode]: "scroll"
							})),
							children: "Keep scrolling"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "ce-feed-test__result",
						"aria-live": "polite",
						children: isComplete ? "Both answers are saved. Here’s what changed—or stayed the same." : choice ? `Saved: ${choiceLabel(choice)} with ${mode === "crowd" ? "12.4K likes" : "12 likes"}. Switch counts and make your second call.` : hasSavedAnswer ? "Your first call is saved. Make a choice with this count." : "Only the like count changes. Does the crowd change your mind?"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "ce-social-post",
				"aria-label": "Fictional social media post",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ce-social-post__top",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ce-avatar",
								"aria-hidden": "true",
								children: "F"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@feedfinds" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fictional feed post · 2h" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ce-social-post__dots",
								"aria-hidden": "true",
								children: "•••"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/social-feed-browsing.jpg",
						alt: "Close-up of someone browsing a social-media feed on a smartphone.",
						width: "1200",
						height: "800",
						loading: "lazy",
						decoding: "async"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ce-social-post__body",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ce-social-post__actions",
								"aria-live": "polite",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LIKE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COMMENT" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SHARE" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [mode === "crowd" ? "12.4K" : "12", " likes"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@feedfinds" }), " The 2-minute desk reset everyone's trying. Would you?"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ce-social-post__tag",
								children: "#tryit · #foryou"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "ce-social-post__credit",
						children: [
							"Photo: cottonbro studio /",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.pexels.com/photo/a-woman-browsing-on-a-smartphone-6963602/",
								target: "_blank",
								rel: "noreferrer",
								children: "Pexels"
							}),
							". Illustrative, not the fictional post."
						]
					})
				]
			}),
			isComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "ce-feed-test__outcome",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "kicker",
						children: "Your two calls"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: answers.quiet !== answers.crowd ? "The crowd count changed your pick." : "Your pick stayed steady." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"12 likes: ",
						choiceLabel(answers.quiet),
						" · 12.4K likes: ",
						choiceLabel(answers.crowd)
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is a self-check, not a score. In a social-news experiment, an early positive rating made a later positive rating 32% more likely on average." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[1] })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: resetComparison,
					children: "Try the comparison again"
				})]
			})
		]
	});
}
function PileOnStory({ contextOpen, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "ce-pile-card",
		"data-rv": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ce-pile-card__top",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ce-avatar ce-avatar--lime",
						"aria-hidden": "true",
						children: "C"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@cityloop" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Fictional post · 3h" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ce-pile-card__badge",
						children: "CONTEXT MISSING"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-pile-card__claim",
				children: "“Someone took food meant for the whole community. Look at this.”"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ce-comment-stack",
				"aria-label": "Fictional replies",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@user01" }), " Wait, is that all the food?"] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@user02" }), " Reposting before this disappears."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "@user03" }), " Everyone says it happened."] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "ce-context-button",
				type: "button",
				"aria-expanded": contextOpen,
				"aria-controls": "missing-context context-photo-preview",
				onClick: onToggle,
				children: contextOpen ? "Hide the context ↑" : "Show the missing context ↓"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ce-context-reveal",
				id: "missing-context",
				"data-open": contextOpen,
				"aria-hidden": !contextOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "In this made-up story, the longer clip shows neighbours sorting food boxes for a community pickup. The original accusation left out what happened before and after the frame." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "New context. Same post count. Very different story." })] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-context-example",
				children: "Real-life parallel: a short clip or screenshot can travel without its original source or what happened before it."
			})
		]
	});
}
function ContextPreview({ contextOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "ce-context-preview",
		id: "context-photo-preview",
		"aria-live": "polite",
		children: contextOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "ce-context-photo",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/community-food-distribution.jpg",
				alt: "Volunteers preparing packaged food for distribution at an outdoor community event.",
				width: "1200",
				height: "750",
				loading: "lazy",
				decoding: "async"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [
				"A separate, illustrative community photo—not the fictional people or event. Photo by",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://www.pexels.com/photo/34612590/",
					target: "_blank",
					rel: "noreferrer",
					children: "Caleb Oquendo / Pexels"
				}),
				"."
			] })]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ce-context-placeholder",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "THE REST OF THE CLIP" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Out of frame." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "Open the context to see what happened next." })
			]
		})
	});
}
function TrendExperience() {
	const [stage, setStage] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ce-trend-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendSpread, {
			stage,
			onAdvance: () => setStage((current) => Math.min(current + 1, spreadWaves.length - 1)),
			onReset: () => setStage(0)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendPhoto, { stage })]
	});
}
function TrendSpread({ stage, onAdvance, onReset }) {
	const currentWave = spreadWaves[stage];
	const isComplete = stage === spreadWaves.length - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ce-spread",
		"data-rv": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ce-spread__head",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Tiny trend simulator"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Pass it on." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ce-spread__count",
					"aria-live": "polite",
					children: [
						currentWave.views,
						" ",
						currentWave.views === 1 ? "account" : "accounts"
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-spread__caption",
				children: currentWave.caption
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ce-spread__people",
				"aria-hidden": "true",
				"data-stage": stage,
				children: Array.from({ length: currentWave.views }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ce-spread__person",
					style: { animationDelay: `${index * 15}ms` },
					children: String.fromCharCode(65 + index % 26)
				}, `${stage}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ce-wave-chart",
				role: "img",
				"aria-label": `Illustrative toy model: ${spreadWaves.map((wave) => wave.views).join(", ")} accounts across four sharing waves. Not platform data.`,
				children: spreadWaves.map((wave, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ce-wave-chart__column",
					"data-active": index <= stage,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: wave.views }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ce-wave-chart__track",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { height: `${wave.views / 27 * 100}%` } })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: wave.short })
					]
				}, wave.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "ce-spread__example",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "REAL-LIFE PARALLEL" }), " Trending audio and dance challenges can move through friend groups and recommendation feeds."]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-spread__disclaimer",
				children: "Toy model: each share reaches 3 new accounts. These counts are invented—not platform data or a real reach forecast."
			}),
			isComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-spread__outcome",
				role: "status",
				children: "End of this model: 27 accounts. Actual reach depends on people and platform recommendations—not a neat 3× rule."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "ce-spread__button",
				type: "button",
				onClick: isComplete ? onReset : onAdvance,
				children: isComplete ? "Restart from one post" : "Pass the post on →"
			})
		]
	});
}
function TrendPhoto({ stage }) {
	const scene = [
		{
			src: "/images/social-feed-browsing.jpg",
			alt: "Someone browsing a social-media feed on a smartphone.",
			width: "1200",
			height: "800",
			caption: "One person scrolling. Photo by ",
			author: "cottonbro studio",
			url: "https://www.pexels.com/photo/a-woman-browsing-on-a-smartphone-6963602/"
		},
		{
			src: "/images/friends-looking-at-phone.jpg",
			alt: "Friends looking at a phone together.",
			width: "1125",
			height: "750",
			caption: "Friends pass a post around. Photo by ",
			author: "Ivan S",
			url: "https://www.pexels.com/photo/7213646/"
		},
		{
			src: "/images/friends-dance-trend.jpg",
			alt: "Two friends dancing together against a blue background.",
			width: "1100",
			height: "733",
			caption: "A dance trend reaches new people. Photo by ",
			author: "Polina Tankilevitch",
			url: "https://www.pexels.com/photo/women-dancing-together-4820199/"
		},
		{
			src: "/images/viral-crowd.jpg",
			alt: "People dancing at a separate live music event.",
			width: "1200",
			height: "800",
			caption: "A wider crowd—not actual viewers of the post. Photo by ",
			author: "Maor Attias",
			url: "https://www.pexels.com/photo/5192289/"
		}
	][stage];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "ce-trend-photo",
		"data-rv": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: scene.src,
			alt: scene.alt,
			width: scene.width,
			height: scene.height,
			loading: "lazy",
			decoding: "async"
		}, stage), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", { children: [
			scene.caption,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: scene.url,
				target: "_blank",
				rel: "noreferrer",
				children: [scene.author, " / Pexels"]
			}),
			". Illustrative, not evidence of this model's reach."
		] })]
	});
}
function AschChart({ selectedPoint, onSelectPoint }) {
	const selected = ASCH_MAJORITY_SIZE[selectedPoint];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ce-asch-chart-card ce-chart",
		"aria-labelledby": "asch-chart-title",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ce-chart-heading",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "The group-size effect · reported results"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					id: "asch-chart-title",
					children: "How many people disagreed?"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Select a bar to see the result." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ce-asch-chart",
				role: "group",
				"aria-label": "Incorrect responses by number of opposing people in Asch's reported group-size variation",
				children: ASCH_MAJORITY_SIZE.map((point, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "ce-asch-bar",
					type: "button",
					"aria-pressed": selectedPoint === index,
					"aria-label": `${point.opponents} opposing ${point.opponents === 1 ? "person" : "people"}: ${point.incorrect}% incorrect selections`,
					onClick: () => onSelectPoint(index),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ce-asch-bar__value",
							children: [point.incorrect, "%"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ce-asch-bar__track",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ce-asch-bar__fill",
								style: { height: `${point.incorrect / 40 * 100}%` }
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ce-asch-bar__label",
							children: point.opponents
						})
					]
				}, point.opponents))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "ce-point-detail",
				"aria-live": "polite",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
					selected.opponents,
					" opposing ",
					selected.opponents === 1 ? "person" : "people"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [selected.incorrect, "% incorrect selections"] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "ce-chart-note",
				children: "Discrete group-size conditions from Asch (1955), separate from the 36.8% main-series result. No missing values are estimated."
			})
		]
	});
}
function IllusoryTruthGraphic() {
	const low = .2;
	const scale = (value) => `${(value - low) / .35000000000000003 * 100}%`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "ce-truth-study",
		"data-rv": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ce-truth-study__intro",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "kicker",
					children: "Repetition & truth judgments · 2026 meta-analysis"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Familiar can feel true." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Across ",
					ILLUSORY_TRUTH.studies,
					" studies and",
					" ",
					ILLUSORY_TRUTH.participants.toLocaleString("en-US"),
					" participants, repeated statements had a small positive effect on perceived truth."
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "note",
					children: "g = 0.37 is an effect size, not a 37% increase."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLine, { source: SOURCES[4] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ce-truth-plot",
			role: "img",
			"aria-label": `Effect size g ${ILLUSORY_TRUTH.g}, with 95% confidence interval from ${ILLUSORY_TRUTH.ciLow} to ${ILLUSORY_TRUTH.ciHigh}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "ce-truth-g",
					children: ["g = ", ILLUSORY_TRUTH.g.toFixed(2)]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ce-truth-plot__track",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ce-truth-interval",
						style: {
							left: scale(ILLUSORY_TRUTH.ciLow),
							width: `${(ILLUSORY_TRUTH.ciHigh - ILLUSORY_TRUTH.ciLow) / .35000000000000003 * 100}%`
						}
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ce-truth-estimate",
						style: { left: scale(ILLUSORY_TRUTH.g) }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ce-truth-plot__ticks",
					"aria-hidden": "true",
					children: [
						.2,
						.3,
						.4,
						.5,
						.55
					].map((tick) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { left: scale(tick) },
						children: tick.toFixed(2)
					}, tick))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ce-truth-plot__bounds",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						style: { left: scale(ILLUSORY_TRUTH.ciLow) },
						children: ["95% CI ", ILLUSORY_TRUTH.ciLow.toFixed(2)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { left: scale(ILLUSORY_TRUTH.ciHigh) },
						children: ILLUSORY_TRUTH.ciHigh.toFixed(2)
					})]
				})
			]
		})]
	});
}
function SourceLine({ source }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "source-line",
		children: [
			source.authors,
			", ",
			source.year,
			" ·",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: source.url,
				target: "_blank",
				rel: "noreferrer",
				children: "Source"
			})
		]
	});
}
//#endregion
export { CrowdEffect as component };

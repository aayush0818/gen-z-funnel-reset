import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

type ChartMode = "genz" | "millennials";

type ChartModeContextValue = {
  modes: Record<string, ChartMode>;
  setMode: (id: string, mode: ChartMode) => void;
};

const ChartModeContext = createContext<ChartModeContextValue | null>(null);
const sourceShareUrl = "https://www.genzbrokethefunnelwhatnow.com/";

function ChartToggle({ id }: { id: string }) {
  const context = useContext(ChartModeContext);
  if (context === null) return null;

  const mode = context.modes[id] ?? "genz";
  const toggleClass = `h-[2.875em] rounded-full border border-current grid grid-cols-2 text-center items-center uppercase gap-x-10 px-6 relative text-xl whitespace-nowrap font-vogue leading-[2.4] chart-toggle cursor-pointer justify-between ${mode === "millennials" ? "chart-toggle--active" : ""}`;

  return (
    <div className={toggleClass} role="group" aria-label="Choose which generation to highlight">
      <span className="absolute inset-1 bg-current rounded-full chart-toggle__bg" aria-hidden="true" />
      <button
        type="button"
        className={`appearance-none border-0 bg-transparent cursor-pointer relative transition-colors duration-300 pt-[0.2em] w-full ${mode === "genz" ? "text-brand-white" : "text-brand-black"}`}
        aria-pressed={mode === "genz"}
        onClick={() => context.setMode(id, "genz")}
      >
        Gen Zs
      </button>
      <button
        type="button"
        className={`appearance-none border-0 bg-transparent cursor-pointer relative transition-colors duration-300 pt-[0.2em] w-full ${mode === "millennials" ? "text-brand-white" : "text-brand-black"}`}
        aria-pressed={mode === "millennials"}
        onClick={() => context.setMode(id, "millennials")}
      >
        Millennials
      </button>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gen Z Broke the Marketing Funnel — What Now? | Vogue Business × Archrival" },
      {
        name: "description",
        content:
          "Vogue Business and Archrival explore how Gen Z is changing shopping, discovery, and the marketing funnel.",
      },
      {
        property: "og:title",
        content: "Gen Z Broke the Marketing Funnel — What Now? | Vogue Business × Archrival",
      },
      {
        property: "og:description",
        content:
          "Vogue Business and Archrival explore how Gen Z is changing shopping, discovery, and the marketing funnel.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "className": "__variable_0a3dfc __variable_ea631d __variable_55d37f __variable_d7eb36 __variable_6591ef lenis", "lang": "en", "style": { scrollBehavior: "auto" } }, body: { "data-site-import-popup-incomplete": "document-menu-budget", "data-site-import-responsive-incomplete": "scroll", "data-site-import-scroll-incomplete": "budget", "style": { scrollBehavior: "auto" } } } },
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [chartModes, setChartModes] = useState<Record<string, ChartMode>>({});
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const shareTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuOpen(false);
    menuTriggerRef.current?.focus();
  };

  const closeShare = () => {
    setShareOpen(false);
    shareTriggerRef.current?.focus();
  };

  const setChartMode = (id: string, mode: ChartMode) => {
    setChartModes((current) => ({ ...current, [id]: mode }));
  };

  useEffect(() => {
    if (menuOpen) menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen && !shareOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (menuOpen) {
        setMenuOpen(false);
        menuTriggerRef.current?.focus();
      } else if (shareOpen) {
        setShareOpen(false);
        shareTriggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, shareOpen]);

  return (
    <ChartModeContext.Provider value={{ modes: chartModes, setMode: setChartMode }}>
    <>
      <style>{capturedCSS}</style>
      <div hidden />
      <div className={"custom-page \x6fverflow-clip"} data-site-import-repair="true">
        <div className={"\x61bsolute \x69nset-0 \x68-[\x3100%] \x6fverflow-hidden"}>
          <div className={"\x69nset-x-0 \x74op-0 \x68-[\x3100vh] \x70ointer-events-none \x61bsolute"} style={{ transform: "translateY(-216px)" }} data-site-import-responsive="4">
            <picture style={{ display: "contents" }}>
              <source media="(max-width: 767px)" srcSet="/site-assets/80a943002e1a54ba.webp" />
              <img style={{ display: "block", width: "1536px", height: "1296px" }} width="1521" height="1296" data-site-import-responsive="5" src="/site-assets/7454e51a9c246c10.webp" data-site-import-static-fallback="canvas" alt="" />
            </picture>
          </div>
        </div>
        <div className={"\x70y-4 \x63ontainer \x66ixed \x6ceft-0 \x77-full \x74op-0 \x7a-[\x355] \x6dax-w-none! \x6dix-blend-difference \x74ext-black \x69nvert-100"}>
          <div className={"\x66lex \x69tems-center \x68-10"}>
            <a href="https://www.vogue.com/business" rel="noreferrer" target="_blank">
              <img className={"\x77-[\x35rem] \x68-auto"} style={{ color: "transparent" }} alt="Logo" loading="lazy" width="256" height="109" decoding="async" src="/site-assets/4be84c4712e42f1c.png" />
            </a>
            <span className={"\x74ext-2xl \x66ont-vogue \x6dx-2"}>/</span>
            <a className={"!\x74ext-current"} href="https://archrival.com/" rel="noreferrer" target="_blank">
              <svg className={"\x77-[\x37rem] \x68-auto"} viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 7.8v-.2A4 4 0 0 0 23 4q0-1.7-1-2.7Q20.7.2 18.4.2h-5.3v11.4q0 .2.2.2h2.2l.2-.2V8.3l.1-.2h2l2.4 3.6.1.1H23v-.3zm-.2-3.6q-.1 1.5-2 1.6h-2.5l-.1-.1v-3l.1-.2h2.4q2 0 2 1.7" fill="currentColor" />
                <path d="M98.4 9.6h-4.6l-.2-.2v-9l-.2-.1h-2.2q-.2 0-.2.2v11.2q0 .2.2.2h8.2v-.2z" fill="currentColor" />
                <path d="M6.1.1H4l-.2.1L0 9v.1l1.1 2.6.2.1.2-.1 1-2.4h5l1 2.4.2.1H11v-.2L6.4.2zM6.4 7H3.7l-.1-.2 1.2-3.1.2-.1.2.1 1.3 3.1z" fill="currentColor" />
                <path d="M34 8.4h-.3q-1.2 1.2-3 1.2c-2 0-3.4-1.5-3.4-3.6 0-2 1.5-3.6 3.4-3.6q1.5 0 2.9 1.1h.2L35.3 2v-.2A6 6 0 0 0 30.6 0a6 6 0 0 0-6 6c0 3.4 2.5 6 6 6a6 6 0 0 0 4.6-2q.2 0 0-.2z" fill="currentColor" />
                <path d="M64.7.2h-2.2q-.2 0-.2.2v11.2q0 .2.2.2h2.2q.2 0 .2-.2V.4q0-.2-.2-.2" fill="currentColor" />
                <path d="m57.6 7.8.1-.1A4 4 0 0 0 60 4q0-1.7-1-2.7Q57.8.2 55.6.2h-5.2q-.2 0-.2.2v11.2l.2.2h2.2q.2 0 .2-.2V8.3q0-.2.2-.2h1.9l2.4 3.6.1.1h2.8v-.3zm-.2-3.6q-.1 1.5-2 1.6H53l-.2-.1v-3q0-.2.2-.2h2.4q1.9 0 2 1.7" fill="currentColor" />
                <path d="M47.4.2h-2.2q-.2 0-.2.2v4.2l-.2.2h-4.4q-.2 0-.2-.2V.4q0-.2-.2-.2h-2.2l-.2.2v11.2l.2.2H40q.2 0 .2-.2V7.3l.2-.2h4.4l.2.2v4.3q0 .2.2.2h2.2l.2-.2V.4z" fill="currentColor" />
                <path d="m78.4.3-.2-.1h-2.4l-.1.1L72.8 8l-.2.1h-.1L69.6.2l-.2-.1h-2.6v.3l4.6 11.3h2.4L78.4.5z" fill="currentColor" />
                <path d="M84 .1h-2.2l-.1.1L77.9 9v.1l1.1 2.6.2.1.1-.1 1-2.4h5.1l1 2.4.1.1H89v-.2zm.3 6.8h-2.7l-.2-.2 1.3-3.1.2-.1.1.1 1.3 3.1z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className={"\x70y-4 \x63ontainer \x66ixed \x72ight-0 \x77-1/\x32 \x74op-0 \x7a-[\x356] \x6dax-w-none! \x74ransition-colors \x64uration-300"}>
          <div className={"\x66lex \x69tems-center \x6austify-end \x72elative"}>
            <button
              type="button"
              aria-label="Close article menu"
              aria-hidden={!menuOpen}
              tabIndex={-1}
              onClick={closeMenu}
              className={`fixed inset-0 left-0 top-0 w-full h-full bg-brand-black/30 transition-opacity duration-500 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            />
            <button
              ref={menuTriggerRef}
              type="button"
              className={`relative size-10 flex justify-center items-center rounded-full bg-brand-black text-brand-white group cursor-pointer opener z-2 ${menuOpen ? "opener-active" : ""}`}
              aria-label={menuOpen ? "Close article menu" : "Open article menu"}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => {
                if (menuOpen) {
                  closeMenu();
                } else {
                  setShareOpen(false);
                  setMenuOpen(true);
                }
              }}
            >
              <span className={"\x61bsolute \x74op-1/\x32 \x77ill-change-transform opener-line-top \x2dtranslate-y-1"} />
              <span className={"\x61bsolute \x74op-1/\x32 \x77ill-change-transform opener-line-middle"} />
              <span className={"\x61bsolute \x74op-1/\x32 \x77ill-change-transform opener-line-bottom \x74ranslate-y-1"} />
            
            </button>
            <div
              id="site-menu"
              ref={menuRef}
              role="navigation"
              aria-label="Article sections"
              aria-hidden={!menuOpen}
              inert={!menuOpen}
              onClick={(event) => {
                if (event.target instanceof HTMLElement && event.target.closest("a")) closeMenu();
              }}
              className={`bg-brand-black text-brand-white absolute -right-2 -top-2 w-[calc(100vw-1rem)] max-w-[24rem] pt-14 p-6 font-vogue xl:-right-4 header-menu ${menuOpen ? "header-menu-active" : ""}`}
            >
              <div className={"\x70t-1 \x6fverflow-hidden"}>
                <ol className={"\x6cist-custom \x74ext-base \x78l:\x74ext-lg \x66ont-vogue!"}>
                  <li className="stagger-item" style={{ "--d": "0s" } as CSSProperties}>
                    <a className="active-section-link" href="#article-1">Gen Z broke the marketing funnel</a>
                  </li>
                  <li className="stagger-item" style={{ "--d": "0.075s" } as CSSProperties}>
                    <a className="" href="#article-2">Shopping isn’t fun anymore </a>
                    <ol>
                      <li className="stagger-item" style={{ "--d": "0s" } as CSSProperties}>
                        <a className="" href="#article-2-1">Mindless shopping</a>
                      </li>
                      <li className="stagger-item" style={{ "--d": "0.075s" } as CSSProperties}>
                        <a className="" href="#article-2-2">The rise of doomshopping </a>
                      </li>
                    </ol>
                  </li>
                  <li className="stagger-item" style={{ "--d": "0.15s" } as CSSProperties}>
                    <a className="" href="#article-3">Recapturing magic and meaning</a>
                    <ol>
                      <li className="stagger-item" style={{ "--d": "0s" } as CSSProperties}>
                        <a className="" href="#article-3-1">The thrill of the chase</a>
                      </li>
                      <li className="stagger-item" style={{ "--d": "0.075s" } as CSSProperties}>
                        <a className="" href="#article-3-2">IRL connection</a>
                      </li>
                      <li className="stagger-item" style={{ "--d": "0.15s" } as CSSProperties}>
                        <a className="" href="#article-3-3">Quieter social platforms</a>
                      </li>
                      <li className="stagger-item" style={{ "--d": "0.22499999999999998s" } as CSSProperties}>
                        <a className="" href="#article-3-4">Vulnerable human connections</a>
                      </li>
                      <li className="stagger-item" style={{ "--d": "0.3s" } as CSSProperties}>
                        <a className="" href="#article-3-5">New search</a>
                      </li>
                    </ol>
                  </li>
                  <li className="stagger-item" style={{ "--d": "0.22499999999999998s" } as CSSProperties}>
                    <a className="" href="#article-4">What now?</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <main className={"\x72elative \x66lex-grow \x77-full \x6fverflow-clip"} role="main">
          <div id="ComponentSectionHero">
            <ImportedSectionGenZBrokeThe />
          </div>
          <div id="ComponentSectionShoppingNotFun">
            <ImportedSectionShoppingIsnTFun />
          </div>
          <div id="ComponentSectionShoppingMindless">
            <ImportedSectionSocialMediaHasMade />
          </div>
          <div id="ComponentSectionDoomshopping">
            <div className={"\x63ontainer \x6dt-30 \x6dd:\x6dt-50 \x32xl:\x6dt-[\x310em] \x6db-20 \x6dd:!\x6db-35 \x32xl:!\x6dax-w-[\x390em]"} id="article-2-2">
              <h2 className={"\x74ext-center \x6dy-10 \x6dd:\x6dy-20 \x6eot-italic \x61nimate-clip-bg fluid-block"}>
                <span className={"\x62lock h3 \x6dd:\x74ext-[\x33.\x375em] \x6db-3 \x75ppercase"} aria-label="the Rise of" data-site-import-desktop-variant="">
                  <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">R</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                      </div>
                    </div>
                  </div>
                </span>
                <span className={"\x62lock h3 \x6dd:\x74ext-[\x33.\x375em] \x6db-3 \x75ppercase"} style={{ "--site-import-responsive-display": "block" } as CSSProperties} aria-label="the Rise of" data-site-import-mobile-variant="">
                  <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">R</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                  </div>
                </span>
                <span className={"\x69nline-block \x61lign-baseline h1-small \x6db-0 \x72elative"}>
                  <span className={"\x72elative"} aria-label="doomshopping" data-site-import-desktop-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className={"\x72elative"} style={{ "--site-import-responsive-display": "inline" } as CSSProperties} aria-label="doomshopping" data-site-import-mobile-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                    </div>
                  </span>
                  <span className={"\x61bsolute \x6ceft-0 \x74op-[\x2d0.\x301em] \x74ext-brand-cream \x74ext-mask \x62g-brand-sea \x77-full \x68-[\x3102%]"} aria-label="doomshopping" data-site-import-desktop-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className={"\x61bsolute \x6ceft-0 \x74op-[\x2d0.\x301em] \x74ext-brand-cream \x74ext-mask \x62g-brand-sea \x77-full \x68-[\x3102%]"} style={{ "--site-import-responsive-display": "block" } as CSSProperties} aria-label="doomshopping" data-site-import-mobile-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                    </div>
                  </span>
                </span>
              </h2>
              <div className={"\x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-16 fluid-block"}>
                <div className={"\x6dd:\x67rid-cols-2 \x6dd:\x67rid \x6dd:\x67ap-x-6 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
                  <div className={"\x72elative \x6db-16 \x6dd:\x6db-0"}>
                    <div className={"\x72elative \x61spect-[\x3306/\x3390] \x77-full \x68-auto \x6dax-w-[\x324.\x3125em]"}>
                      <div className={"\x61bsolute \x6ceft-0 \x62ottom-0 \x61spect-[\x3203/\x3241] \x77-[\x350%]"} />
                    </div>
                  </div>
                  <div>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body3"}>Shopping used to be a positive emotional experience, dubbed ‘retail therapy’ by millennials and Gen Xs. But Gen Zs say shopping now comes with <mark className="mark-pink">complex feelings</mark>, and a level of cognitive dissonance between the ease of buying and the negative feelings it sometimes conjures.</p>
                      <p className={"\x74ext-body2"}>As Gen Zs pull back their spending, every brand and retailer should be keeping a close eye on the <mark className="mark-green">bubbling negativity</mark> young consumers feel around social commerce.</p>
                      <p className={"\x74ext-body3"}>For some Gen Zs, their prime source for shopping — social media — can create habits that are financially unhealthy because it’s so easy to shop. Brands that exploit this generation’s tendency to impulse buy, may create negative associations in the long term. </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x78l:\x67rid \x78l:\x67rid-cols-12 \x6dd:\x67ap-x-6 \x72elative \x6dd:\x6dy-10 \x6cg:\x6dy-20 fluid-block"}>
                <span className={"\x61bsolute \x6ceft-1/\x32 \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-blue \x68-full \x6dd:\x68-[\x324em] \x77-[\x3150%] \x72ounded-full \x62lur-2xl \x6fpacity-60 \x2dz-1"} />
                <div className={"\x6dy-10 \x6dd:\x6dy-16 \x78l:\x63ol-span-10 \x78l:\x63ol-start-2"}>
                  <div className={"\x66lex \x66lex-wrap \x67ap-4 \x6dd:\x6austify-around \x78l:\x67ap-6 \x69tems-start \x6cg:\x66lex-nowrap"}>
                    <div className={"\x77-full \x6dd:\x77-[\x311.\x34em] \x66lex \x69tems-center \x6dd:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9799", transform: "translate(0px, 30px)" } as CSSProperties}>
                      <img className={"\x6dd:\x77-auto! \x6fbject-contain \x77-[\x38.\x325em]! \x68-[\x38.\x325em]! \x6dd:\x68-[\x39.\x38125em]! \x6db-3 \x66lex-shrink-0 \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="of Gen Zs say they’re currently living beyond their means." loading="lazy" width="106" height="157" decoding="async" src="/site-assets/414d664cedb65bb0.png" />
                      <img className={"\x6fbject-contain !\x73ize-[\x38.\x325em] \x6dd:\x68idden \x66lex-shrink-0"} style={{ color: "transparent" }} alt="of Gen Zs say they’re currently living beyond their means." loading="lazy" width="132" height="134" decoding="async" src="/site-assets/99f223a8e381a60c.png" />
                      <div>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>32%</p>
                        <div className={"wysiwyg \x6db-0 \x74ext-sm \x6ceading-[\x31.\x31] \x66ont-vogue"}>of Gen Zs say they’re currently living beyond their means.</div>
                      </div>
                    </div>
                    <div className={"\x77-full \x6dd:\x77-[\x311.\x34em] \x66lex \x69tems-center \x6dd:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 30px)" } as CSSProperties}>
                      <img className={"\x6dd:\x77-auto! \x6fbject-contain \x77-[\x38.\x325em]! \x68-[\x38.\x325em]! \x6dd:\x68-[\x39.\x38125em]! \x6db-3 \x66lex-shrink-0 \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt={"of Gen Zs agree, \"I feel more FOMO around viral or limited-edition products.”"} loading="lazy" width="106" height="157" decoding="async" src="/site-assets/b16883f71bce224a.png" />
                      <img className={"\x6fbject-contain !\x73ize-[\x38.\x325em] \x6dd:\x68idden \x66lex-shrink-0"} style={{ color: "transparent" }} alt={"of Gen Zs agree, \"I feel more FOMO around viral or limited-edition products.”"} loading="lazy" width="132" height="134" decoding="async" src="/site-assets/60233216ad941454.png" />
                      <div>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>52%</p>
                        <div className={"wysiwyg \x6db-0 \x74ext-sm \x6ceading-[\x31.\x31] \x66ont-vogue"}>of Gen Zs agree, "I feel more FOMO around viral or limited-edition products.”</div>
                      </div>
                    </div>
                    <div className={"\x77-full \x6dd:\x77-[\x311.\x34em] \x66lex \x69tems-center \x6dd:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 30px)" } as CSSProperties}>
                      <img className={"\x6dd:\x77-auto! \x6fbject-contain \x77-[\x38.\x325em]! \x68-[\x38.\x325em]! \x6dd:\x68-[\x39.\x38125em]! \x6db-3 \x66lex-shrink-0 \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="of Gen Zs agree, “my generation is more concerned with looking rich than previous generations.”" loading="lazy" width="106" height="157" decoding="async" src="/site-assets/f5c644d85a8084cf.png" />
                      <img className={"\x6fbject-contain !\x73ize-[\x38.\x325em] \x6dd:\x68idden \x66lex-shrink-0"} style={{ color: "transparent" }} alt="of Gen Zs agree, “my generation is more concerned with looking rich than previous generations.”" loading="lazy" width="132" height="134" decoding="async" src="/site-assets/c887e9d77dc7316e.png" />
                      <div>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>66%</p>
                        <div className={"wysiwyg \x6db-0 \x74ext-sm \x6ceading-[\x31.\x31] \x66ont-vogue"}>of Gen Zs agree, “my generation is more concerned with looking rich than previous generations.”</div>
                      </div>
                    </div>
                    <div className={"\x77-full \x6dd:\x77-[\x311.\x34em] \x66lex \x69tems-center \x6dd:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 30px)" } as CSSProperties}>
                      <img className={"\x6dd:\x77-auto! \x6fbject-contain \x77-[\x38.\x325em]! \x68-[\x38.\x325em]! \x6dd:\x68-[\x39.\x38125em]! \x6db-3 \x66lex-shrink-0 \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt={"of Gen Zs have used a buy&#8209;now, pay&#8209;later service (such as Afterpay or Klarna) when checking out on a retailer’s app or website."} loading="lazy" width="96" height="157" decoding="async" src="/site-assets/bb92f3768313e5a7.png" />
                      <img className={"\x6fbject-contain !\x73ize-[\x38.\x325em] \x6dd:\x68idden \x66lex-shrink-0"} style={{ color: "transparent" }} alt={"of Gen Zs have used a buy&#8209;now, pay&#8209;later service (such as Afterpay or Klarna) when checking out on a retailer’s app or website."} loading="lazy" width="132" height="134" decoding="async" src="/site-assets/ac0c54525bc03016.png" />
                      <div>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>84%</p>
                        <div className={"wysiwyg \x6db-0 \x74ext-sm \x6ceading-[\x31.\x31] \x66ont-vogue"}>of Gen Zs have used a buy‑now, pay‑later service (such as Afterpay or Klarna) when checking out on a retailer’s app or website.</div>
                      </div>
                    </div>
                    <div className={"\x77-full \x6dd:\x77-[\x311.\x34em] \x66lex \x69tems-center \x6dd:\x62lock"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9799", transform: "translate(0px, 30px)" } as CSSProperties}>
                      <img className={"\x6dd:\x77-auto! \x6fbject-contain \x77-[\x38.\x325em]! \x68-[\x38.\x325em]! \x6dd:\x68-[\x39.\x38125em]! \x6db-3 \x66lex-shrink-0 \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="of Gen Zs agree, “most people buy more than they really need.”" loading="lazy" width="130" height="157" decoding="async" src="/site-assets/2a51a335ae5fb051.png" />
                      <img className={"\x6fbject-contain !\x73ize-[\x38.\x325em] \x6dd:\x68idden \x66lex-shrink-0"} style={{ color: "transparent" }} alt="of Gen Zs agree, “most people buy more than they really need.”" loading="lazy" width="132" height="134" decoding="async" src="/site-assets/539a1789631510d9.png" />
                      <div>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>87%</p>
                        <div className={"wysiwyg \x6db-0 \x74ext-sm \x6ceading-[\x31.\x31] \x66ont-vogue"}>of Gen Zs agree, “most people buy more than they really need.”</div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x6austify-end \x6dt-8"}>
                    <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                  </div>
                </div>
              </div>
              <div className={"\x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-16 fluid-block"}>
                <div className={"\x6dd:\x67rid-cols-2 \x6dd:\x67rid \x6dd:\x67ap-x-6 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
                  <div className={"\x6db-16 \x6dd:\x6db-0 \x6dd:\x6frder-last \x6dd:\x7a-1"}>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body3"}>This <a href="https://www.voguebusiness.com/story/fashion/how-should-brands-navigate-gen-z-economic-nihilism" target="_blank">economic nihilism</a> stems from the economic uncertainty of Gen Z’s lives. “They don’t believe in their financial future, because there isn’t a clear path forward for them,” Scanlon says. “The housing crisis [notably in the US and the UK] has just exacerbated the lost hopes and dreams of a lot of young people, and so they live in this short‑term cycle, where the next big thing is what they buy versus what they invest in.” It’s partly because of student loans, she adds. “Imagine, you’re 18 years old, you’re already $100,000 in debt, and that’s not going away anytime soon, so you might as well just keep spending money. I think that really does a number on the psyche of young people as they are entering their adult life totally saddled with obscene amounts of debt.” </p>
                      <p className={"\x74ext-body2"}>This means Gen Zs are more likely than millennials to say they engage in <mark className="mark-green">shopping ‘vices’</mark>, which might leave them feeling bad about themselves — and the brands they’re buying.</p>
                      <span />
                    </div>
                    <div className={"\x6dy-20 \x6dd:\x68idden \x72elative"}>
                      <div className={"\x61bsolute \x66lex \x66lex-col \x67ap-4 \x69tems-center \x74ext-brand-white \x2dleft-1/\x33 \x68-[\x3100%] \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x70ointer-events-none \x77-full"}>
                        <svg className={"\x61bsolute \x68-full \x6ceft-0 \x70ointer-events-none \x6fpacity-0"} width="198" height="607" viewBox="0 0 198 607" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M-144.08 606.334C44.3563 606.334 197.09 470.713 197.061 303.417C197.031 136.121 44.2491 0.5 -144.188 0.5" stroke="black" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                      </div>
                      <div className={"\x66lex \x69tems-center \x6austify-center group \x72elative \x61spect-[\x3375/\x3418]"}>
                        <span className={"\x61bsolute \x6ceft-1/\x35 \x2dtranslate-x-1/\x32 \x74op-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-pink2 \x77-[\x3200vw] \x61spect-square \x72ounded-full \x62lur-2xl \x6fpacity-90 \x2dz-1"} />
                        <div className={"\x77-[\x3120px] \x6dx-auto \x67rid \x67rid-cols-1 \x67rid-rows-1 \x69tems-center \x6austify-center \x72elative"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -50%)" } as CSSProperties}>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 1" loading="lazy" width="216" height="323" decoding="async" src="/site-assets/b6e68734d3eaeb6c.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 2" loading="lazy" width="289" height="251" decoding="async" src="/site-assets/816e14892289723a.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 3" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/7c56dc5814c65bcf.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 4" loading="lazy" width="202" height="305" decoding="async" src="/site-assets/9197a7e2c9737c6d.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 5" loading="lazy" width="213" height="299" decoding="async" src="/site-assets/eb18833de66b4256.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 6" loading="lazy" width="388" height="180" decoding="async" src="/site-assets/8c0010e9a73483a7.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 7" loading="lazy" width="216" height="323" decoding="async" src="/site-assets/6063b305994570a1.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 8" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/ecdced8df4254c4a.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 9" loading="lazy" width="213" height="299" decoding="async" src="/site-assets/cb6d07142d59ad33.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 10" loading="lazy" width="388" height="180" decoding="async" src="/site-assets/dd39692223b5e393.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 11" loading="lazy" width="202" height="305" decoding="async" src="/site-assets/a80bd63a06d00616.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 12" loading="lazy" width="289" height="251" decoding="async" src="/site-assets/de84e02f4f3c91c3.jpg" />
                          </div>
                          <div className={"\x63ol-start-1 \x72ow-start-1 \x63ol-end-1 \x72ow-end-1 \x69nset-0 \x66lex \x69tems-center \x6austify-center"}>
                            <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 13" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/81e8f96951a49968.jpg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body3"}>In fact, Gen Zs that purchase directly from social media platforms index higher in negative feelings associated with shopping than those that don’t shop via social media: 70 per cent say they feel guilty immediately after making a purchase, and that they buy products they don’t need.</p>
                      <p className={"\x74ext-body3"}>“Brands have mastered making the path to purchase as frictionless as possible, so even if you walk away from your cart, they’ll email you a few days later with a discount code. It’s smart marketing, but it can definitely push people into buying things they don’t really need,” adds Joseph Arujo, a 21‑year‑old social media creator from Los Angeles. “It gives brands more power over consumer behaviour than most people even realise.”</p>
                      <p className={"\x74ext-body3"}>Some even feel the doom when purchasing IRL. “I do like to go shopping. If I go to the store and don’t buy anything, I feel crappy; but on the other hand, I have huge buyer’s remorse,” says Nick Pugh, a 20‑year‑old student from Illinois. “When I make a purchase, I want to feel good about it. I’m not in a place to make frivolous purchases, because I always feel bad about them.” </p>
                    </div>
                  </div>
                  <div className={"\x68idden \x6dd:\x62lock \x72elative"}>
                    <div className={"\x66lex \x69tems-center \x6austify-center group \x6dx-auto \x68-full \x6dd:\x70x-10 \x78l:\x70x-0"}>
                      <svg className={"\x61bsolute \x68-full \x6fpacity-0 \x70ointer-events-none \x2dleft-1/\x32 \x6cg:\x2dleft-[\x340%] \x6din-h-[\x3800px]"} width="379" height="1037" viewBox="0 0 379 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-144.082 1036.43C144.063 1036.43 377.611 804.53 377.56 518.466C377.509 232.401 143.88 0.5 -144.266 0.5" stroke="black" />
                      </svg>
                      <div className={"\x72elative \x68-full \x77-full \x6dd:\x61bsolute \x69nset-0 \x67rid \x67ap-4 \x69tems-center \x74ext-brand-white \x78l:\x77-[\x3200%] \x6dd:\x68-[\x370%] \x6dd:\x2dleft-[\x325%] \x78l:\x2dleft-[\x370%]"}>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9707", transform: "translate(-80.6355px, 23.1678px) rotate(-8.66176deg) scale(1.1838, 1.1838)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="993">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6569", transform: "translate(81.8199px, -37.967px) rotate(-5.83895deg) scale(0.8212, 0.8212)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="998">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6109", transform: "translate(-160.063px, -61.5137px) rotate(10.6403deg) scale(1.1088, 1.1088)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1003">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.9709", transform: "translate(-127.504px, -13.1076px) rotate(0.76823deg) scale(1.0651, 1.0651)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1008">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.8448", transform: "translate(45.61px, -58.8188px) rotate(-19.7508deg) scale(1.2102, 1.2102)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1013">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.5382", transform: "translate(91.153px, 48.5371px) rotate(14.5841deg) scale(1.1354, 1.1354)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1018">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.8403", transform: "translate3d(-15.1814px, 11.6955px, 0px) rotate(25.5971deg) scale(1.1333, 1.1333)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1023">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.4611", transform: "translate(172.169px, 56.7822px) rotate(3.53187deg) scale(0.916, 0.916)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1028">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.8619", transform: "translate(10.756px, 6.9842px) rotate(-16.263deg) scale(1.1614, 1.1614)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1033">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                        <svg className={"\x77-full \x68-auto \x6dax-w-[\x323.\x3525em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.2981", transform: "translate(-1.2141px, -131.252px) rotate(-9.31036deg) scale(1.1313, 1.1313)" } as CSSProperties} viewBox="0 0 378 108" fill="none" xmlns="http://www.w3.org/2000/svg" data-site-import-responsive="1038">
                          <path d="M378 106h-14.3V64c0-6.9-1-13.1-4.6-17.3-2.9-3.5-7-5.7-13.2-5.7s-11.3 2.5-14.4 6.5c-3.4 4.3-4 9.2-4 16V106h-14.2V63.5c0-6.7-.8-11.7-3.6-15.7-3-4-7.6-6.8-14.1-6.8-6.7 0-11.6 3-14.4 6.8a27 27 0 0 0-4.2 16v42.1h-14.1V30.7h13.4v9h.3a25 25 0 0 1 22-11.9c8 0 19.2 3.5 24.5 15l.3-.1a28 28 0 0 1 25.3-14.9c6.5 0 14.4 1.8 20 7.4 6.6 6.5 9.3 13.6 9.3 28z" fill="currentColor" />
                          <path d="M255.2 67.8a40 40 0 0 1-40.5 40.2c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 214.5 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M170.5 67.8A40 40 0 0 1 130 108c-25 0-40.5-19.7-40.5-39.9A39.7 39.7 0 0 1 129.8 28a39.7 39.7 0 0 1 40.7 40m-14.1 0a26.3 26.3 0 1 0-52.8.3 26.4 26.4 0 1 0 52.8-.3" fill="currentColor" />
                          <path d="M81.6 106H67.9V93.3h-.3a32 32 0 0 1-28 14.6A38.7 38.7 0 0 1 0 67.8c0-22.9 17-40 39.3-40a33 33 0 0 1 27.8 13.8l.2.1V0h14.3zM68.3 67.7c0-14.3-10.9-27-27-27-15.9 0-27 12-27 27a26.3 26.3 0 0 0 27 27.1c16.7 0 27-13.3 27-27" fill="currentColor" />
                        </svg>
                      </div>
                      <span className={"\x61bsolute \x6ceft-0 \x2dtranslate-x-1/\x32 \x74op-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-pink2 \x77-screen \x61spect-square \x72ounded-full \x62lur-2xl \x6fpacity-90 \x2dz-1 \x6dd:\x68-full"} />
                      <div className={"\x77-full \x61spect-square \x72elative \x6dd:\x2dleft-[\x320%]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -50%)" } as CSSProperties} data-site-import-responsive="1044">
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate3d(-2.3994px, -40.0585px, 0px) rotate(13.6198deg) scale(1.0931, 1.0931)", opacity: "1" } as CSSProperties} data-site-import-responsive="1045">
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 1" loading="lazy" width="216" height="323" decoding="async" src="/site-assets/b6e68734d3eaeb6c.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(13.2369px, 4.5227px) rotate(3deg) scale(1.1, 1.1)", opacity: "1" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 2" loading="lazy" width="289" height="251" decoding="async" src="/site-assets/816e14892289723a.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(47.8504px, -24.109px) rotate(-3deg) scale(1.1, 1.1)", opacity: "1" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 3" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/7c56dc5814c65bcf.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(41.8349px, -18.1194px) rotate(3deg) scale(1.1, 1.1)", opacity: "1" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 4" loading="lazy" width="202" height="305" decoding="async" src="/site-assets/9197a7e2c9737c6d.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(-34.2782px, 13.3711px) rotate(-3deg) scale(1.1, 1.1)", opacity: "1" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 5" loading="lazy" width="213" height="299" decoding="async" src="/site-assets/eb18833de66b4256.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(4.4836px, 24.7878px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 6" loading="lazy" width="388" height="180" decoding="async" src="/site-assets/8c0010e9a73483a7.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(3.3142px, -30.1072px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 7" loading="lazy" width="216" height="323" decoding="async" src="/site-assets/6063b305994570a1.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(-46.7791px, -32.6167px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 8" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/ecdced8df4254c4a.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(36.1036px, -28.9521px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 9" loading="lazy" width="213" height="299" decoding="async" src="/site-assets/cb6d07142d59ad33.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(1.264px, 38.8546px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 10" loading="lazy" width="388" height="180" decoding="async" src="/site-assets/dd39692223b5e393.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(48.1211px, -49.5012px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 11" loading="lazy" width="202" height="305" decoding="async" src="/site-assets/a80bd63a06d00616.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(-35.8458px, 45.918px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 12" loading="lazy" width="289" height="251" decoding="async" src="/site-assets/de84e02f4f3c91c3.jpg" />
                        </div>
                        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center"} style={{ translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(33.8689px, 12.8537px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties}>
                          <img className={"\x72ounded \x6fbject-contain"} style={{ color: "transparent" }} alt="Doom shopping image 13" loading="lazy" width="210" height="234" decoding="async" src="/site-assets/81e8f96951a49968.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fluid-block">
                <div className={"\x72elative \x6dy-20 \x6dd:\x6dy-40 \x78l:\x6dy-50"}>
                  <span className={"\x61bsolute \x6ceft-[\x380%] \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x68-[\x3110%] \x61spect-square \x72ounded-full \x62lur-2xl \x6fpacity-60 \x2dz-1 radial-gradient-blue"} />
                  <div className={"\x6dd:\x66lex \x67ap-x-4 \x6dd:\x67ap-x-8 \x32xl:\x67ap-x-12 \x69tems-start \x6austify-between"}>
                    <p className={"\x74ext-body1 \x6db-6 \x6dd:\x6db-0"}>Do you ever…?</p>
                    <div className={"\x6dd:\x6austify-end \x66lex \x66lex-shrink-0 \x73ticky \x74op-header"}>
                      <div className={"\x77-full \x6dd:\x77-auto"}>
                        <ChartToggle id="shopping-discovery" />
                        <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dt-16 \x6cg:\x6dt-20"}>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.68" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>‘Doomscroll’ through a wide variety of products, when I’m not looking for anything in particular.</p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>68%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="‘Doomscroll’ through a wide variety of products, when I’m not looking for anything in particular." loading="lazy" width="150" height="150" decoding="async" src="/site-assets/370a1cca628a088e.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.64" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Buy a product, then feel immediately guilty for wasting money or resources.</p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>64%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Buy a product, then feel immediately guilty for wasting money or resources." loading="lazy" width="150" height="150" decoding="async" src="/site-assets/b4edca219ca71b63.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.63" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Buy products I don’t need. </p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>63%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Buy products I don’t need. " loading="lazy" width="150" height="150" decoding="async" src="/site-assets/fdff2f3eb95ffb4b.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.58" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Buy knock‑off or off‑brand versions of a well‑known product. </p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>58%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt={"Buy knock&#8209;off or off&#8209;brand versions of a well&#8209;known product. "} loading="lazy" width="150" height="150" decoding="async" src="/site-assets/4d6669a999c1f65a.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.52" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Fail to return something because it’s just too much trouble.</p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>52%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Fail to return something because it’s just too much trouble." loading="lazy" width="150" height="150" decoding="async" src="/site-assets/6b21726ba9c02a3e.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.45" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Buy a product because it’s having a ‘viral moment’ online.</p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>45%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Buy a product because it’s having a ‘viral moment’ online." loading="lazy" width="150" height="150" decoding="async" src="/site-assets/6117bf18fd2a3999.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.39" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Splurge on products I can’t afford. </p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>39%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Splurge on products I can’t afford. " loading="lazy" width="150" height="150" decoding="async" src="/site-assets/844b5a621a53493c.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.33" } as CSSProperties}>
                      <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                        <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Buy a product because an influencer has it.</p>
                      </div>
                      <div className={"\x72elative"}>
                        <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>33%</p>
                        <div className={"\x72elative"}>
                          <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M.5.6v39" stroke="#161414" />
                            <path d="M12.5 8.1v24" stroke="#161414" />
                            <path d="M24.5 8v24" stroke="#161414" />
                            <path d="M36.5 8v24" stroke="#161414" />
                            <path d="M48.5 8v24" stroke="#161414" />
                            <path d="M60.5 8v24" stroke="#161414" />
                            <path d="M72.5 8v24" stroke="#161414" />
                            <path d="M84.5 8v24" stroke="#161414" />
                            <path d="M96.5 8v24" stroke="#161414" />
                            <path d="M108.5 8v24" stroke="#161414" />
                            <path d="M120.5 8v24" stroke="#161414" />
                            <path d="M132.5 8v24" stroke="#161414" />
                            <path d="M144.5 8v24" stroke="#161414" />
                            <path d="M156.5 8v24" stroke="#161414" />
                            <path d="M168.5 8v24" stroke="#161414" />
                            <path d="M180.5 8v24" stroke="#161414" />
                            <path d="M192.5 8v24" stroke="#161414" />
                            <path d="M204.5 7.9v24" stroke="#161414" />
                            <path d="M216.5 7.9v24" stroke="#161414" />
                            <path d="M228.5 7.9v24" stroke="#161414" />
                            <path d="M240.5 7.9v24" stroke="#161414" />
                            <path d="M252.5 7.9v24" stroke="#161414" />
                            <path d="M264.5 7.8v24" stroke="#161414" />
                            <path d="M276.5 7.8v24" stroke="#161414" />
                            <path d="M288.5 7.8v24" stroke="#161414" />
                            <path d="M300.5 7.8v24" stroke="#161414" />
                            <path d="M312.5 7.8v24" stroke="#161414" />
                            <path d="M324.5 7.8v24" stroke="#161414" />
                            <path d="M336.5 7.8v24" stroke="#161414" />
                            <path d="M348.5 7.8v24" stroke="#161414" />
                            <path d="M360.5 7.7v24" stroke="#161414" />
                            <path d="M372.5 7.7v24" stroke="#161414" />
                            <path d="M384.5 7.7v24" stroke="#161414" />
                            <path d="M396.5 7.7v24" stroke="#161414" />
                            <path d="M408.5 7.7v24" stroke="#161414" />
                            <path d="M420.5 7.7v24" stroke="#161414" />
                            <path d="M432.5 7.7v24" stroke="#161414" />
                            <path d="M444.5 7.7v24" stroke="#161414" />
                            <path d="M456.5 7.6v24" stroke="#161414" />
                            <path d="M468.5 7.6v24" stroke="#161414" />
                            <path d="M480.5 7.6v24" stroke="#161414" />
                            <path d="M492.5 7.6v24" stroke="#161414" />
                            <path d="M504.5 7.6v24" stroke="#161414" />
                            <path d="M516.5 7.6v24" stroke="#161414" />
                            <path d="M528.5 7.6v24" stroke="#161414" />
                            <path d="M540.5 7.6v24" stroke="#161414" />
                            <path d="M552.5 7.5v24" stroke="#161414" />
                            <path d="M564.5 7.5v24" stroke="#161414" />
                            <path d="M576.5 7.5v24" stroke="#161414" />
                            <path d="M588.5 0v39" stroke="#161414" />
                          </svg>
                          <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-lime"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                            <rect y="30" width="15" height="15" fill="currentColor" />
                            <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                            <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                            <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                            <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                            <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                            <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                            <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                            <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                            <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                            <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                            <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                            <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                            <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                            <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                            <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                            <rect x="50" width="15" height="15" fill="currentColor" />
                            <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                            <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                            <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                            <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                            <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                            <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                            <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                            <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                            <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                            <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                            <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                            <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                            <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                            <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                            <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                            <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                            <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                            <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                          </svg>
                          <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                            <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Buy a product because an influencer has it." loading="lazy" width="150" height="150" decoding="async" src="/site-assets/fa6bd8d1fed1275c.png" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66ixed \x62ottom-0 \x6dd:\x68idden \x7a-22 \x62g-brand-gray \x70x-4 \x70y-4 \x74ransition-transform \x64uration-300 \x6ceft-0 \x72ight-0 \x74ranslate-y-[\x3200%]"}>
                    <div>
                      <ChartToggle id="shopping-mindless" />
                      <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className={"\x74ext-center \x6dy-10 \x70t-[\x32.\x39375em] \x6dd:\x6dy-20 \x6dd:\x70t-0 \x6eot-italic \x61nimate-clip-bg fluid-block"}>
                <span className={"\x62lock h3 \x6dd:\x74ext-[\x33.\x375em] \x6db-0 \x75ppercase"} aria-label="Consumer" data-site-import-desktop-variant="">
                  <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">C</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      </div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                      </div>
                    </div>
                  </div>
                </span>
                <span className={"\x62lock h3 \x6dd:\x74ext-[\x33.\x375em] \x6db-0 \x75ppercase"} style={{ "--site-import-responsive-display": "block" } as CSSProperties} aria-label="Consumer" data-site-import-mobile-variant="">
                  <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">C</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                  </div>
                </span>
                <span className={"\x69nline-block \x61lign-baseline h1-large md:h1-small \x6db-0 \x70x-[\x30.\x305em] \x72elative \x77hitespace-nowrap"}>
                  <span className={"\x72elative"} aria-label="value shift" data-site-import-desktop-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className={"\x72elative"} style={{ "--site-import-responsive-display": "inline" } as CSSProperties} aria-label="value shift" data-site-import-mobile-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                    </div>
                  </span>
                  <span className={"\x61bsolute \x6ceft-0 \x74op-[\x2d0.\x301em] \x74ext-brand-cream \x62g-brand-bubblegum \x77-full \x68-[\x3102%]"} aria-label="value shift" data-site-import-desktop-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                        </div>
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                          <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                        </div>
                      </div>
                    </div>
                  </span>
                  <span className={"\x61bsolute \x6ceft-0 \x74op-[\x2d0.\x301em] \x74ext-brand-cream \x62g-brand-bubblegum \x77-full \x68-[\x3102%]"} style={{ "--site-import-responsive-display": "block" } as CSSProperties} aria-label="value shift" data-site-import-mobile-variant="">
                    <div className="line" style={{ position: "relative", display: "block", textAlign: "center" }} aria-hidden="true">
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                      <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                    </div>
                  </span>
                </span>
              </h2>
              <div className={"\x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x6dd:\x69tems-start \x6dy-10 \x6dd:\x6dy-16 fluid-block"}>
                <div className={"\x6dd:\x67rid-cols-2 \x6dd:\x67rid \x6dd:\x67ap-x-6 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10 \x6dd:\x69tems-center \x32xl:\x69tems-start"}>
                  <div>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body2"}>Young consumers don’t just feel shopping is mindless, they have become more <mark className="mark-green">sceptical</mark> than ever of the actual value of the goods they buy. This shifting consumer sentiment is hitting the <mark className="mark-blue">luxury market</mark> especially hard.</p>
                      <p className={"\x74ext-body3"}>For Gen Zs, luxury feels both aspirational and out of touch: 73 per cent say luxury brands are unattainable because they can’t afford them, while 65 per cent say it’s distasteful or tacky to buy luxury brands “when so many people are in need of basic necessities”, according to Archrival’s research. Only 54 per cent of Gen Zs say luxury brands are “desirable”, and something they buy when they want them. Content around the <a href="https://www.voguebusiness.com/story/consumers/luxury-got-caught-up-in-the-china-us-tiktok-crossfire-how-should-brands-respond" target="_blank">size of luxury product margins</a> following the announcement of the <a href="https://www.voguebusiness.com/tag/tariffs" target="_blank">Trump tariffs</a> has exacerbated Gen Z’s scepticism of luxury’s true value. Less than a third (29 per cent) of Gen Zs say they’d be willing to pay more for a luxury brand.</p>
                      <span />
                    </div>
                    <div className={"wysiwyg \x68idden \x6dd:\x62lock"}>
                      <p className={"\x74ext-body2"}>But, when luxury brands are able to tie themselves to shopping experiences that feel <mark className="mark-green">emotionally positive</mark>, they resonate.</p>
                      <p className={"\x74ext-body3"}>On TikTok, the number one purchase driver for luxury goods among European Gen Zs is to reward themselves, according to research from the platform, which interviewed 3,000 TikTok users in May 2025. Within the cohort, when asked what emotions motivate their purchases, Gen Z users indexed highly for satisfaction (43 per cent), confidence (32 per cent) and excitement (30 per cent). Just a small fraction of young TikTok users mentioned FOMO (7 per cent), guilt (5 per cent) and nostalgia (11 per cent) as drivers of luxury purchases.</p>
                    </div>
                  </div>
                  <div className={"\x70x-20 \x6dt-30 \x6db-20 \x6dd:\x70x-10 \x6dd:\x6dy-10"}>
                    <div className={"\x66lex \x69tems-center \x6austify-center \x72elative group \x61spect-[\x3304/\x3507] \x6dax-w-[\x319em] \x6dx-auto"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
                      <div className={"\x61bsolute \x69nset-0"}>
                        <div className={"\x61bsolute \x61spect-[\x3479/\x3438] \x77-[\x3150%] \x6ceft-[\x2d25%] \x74op-[\x2d15%]"} />
                        <div className={"\x61bsolute \x61spect-[\x3187/\x3238] \x77-[\x350%] \x6ceft-[\x2d25%] \x62ottom-0"} />
                      </div>
                      <div className={"\x61bsolute \x77-1/\x32 \x61spect-square \x6ceft-1/\x34 \x74op-1/\x34 \x7a-1 \x6fpacity-0 \x73cale-75 \x64uration-300 \x67roup-hover:\x6fpacity-100 \x67roup-hover:\x73cale-100 \x69nvisible \x6dd:\x76isible"}>
                        <img className={"\x61bsolute \x72ounded-sm"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(9.9471px, 6.4966px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties} alt="Decorative 0" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/6158ef28a3aa362c.jpg" />
                        <img className={"\x61bsolute \x72ounded-sm"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(8.2789px, 7.6733px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties} alt="Decorative 1" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/f845d09528dcf0c9.jpg" />
                        <img className={"\x61bsolute \x72ounded-sm"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(-6.9444px, 8.5159px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties} alt="Decorative 2" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/41c2d8856b68bf2e.jpg" />
                        <img className={"\x61bsolute \x72ounded-sm"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "0% 0%", transform: "translate(-6.5559px, 3.6384px) rotate(3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties} alt="Decorative 3" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/f38ab7c01e824dc2.jpg" />
                        <img className={"\x61bsolute \x72ounded-sm"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "100% 0%", transform: "translate(7.2702px, 2.5383px) rotate(-3deg) scale(1.1, 1.1)", opacity: "0" } as CSSProperties} alt="Decorative 4" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/502dbbe50a0caf21.jpg" />
                      </div>
                    </div>
                  </div>
                  <div className={"\x6dd:\x68idden"}>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body2"}>But, when luxury brands are able to tie themselves to shopping experiences that feel <mark className="mark-green">emotionally positive</mark>, they resonate.</p>
                      <p className={"\x74ext-body3"}>On TikTok, the number one purchase driver for luxury goods among European Gen Zs is to reward themselves, according to research from the platform, which interviewed 3,000 TikTok users in May 2025. Within the cohort, when asked what emotions motivate their purchases, Gen Z users indexed highly for satisfaction (43 per cent), confidence (32 per cent) and excitement (30 per cent). Just a small fraction of young TikTok users mentioned FOMO (7 per cent), guilt (5 per cent) and nostalgia (11 per cent) as drivers of luxury purchases.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x6dd:\x69tems-start \x6dy-10 \x6dd:\x6dy-16 fluid-block"}>
                <div className={"\x6dd:\x67rid-cols-2 \x6dd:\x67rid \x6dd:\x67ap-x-6 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
                  <div className={"\x6dy-10 \x6dd:\x6dt-60 \x78l:\x6dy-16"}>
                    <div className={"\x72elative group \x77-full \x78l:\x6ceft-0"}>
                      <div className={"\x61bsolute \x61spect-square \x77-[\x350%] \x6ceft-[\x2d15%] \x62ottom-[\x2d35%]"} />
                      <img className={"\x72ounded \x78l:\x72ounded-lg \x6ceft-5 \x78l:\x6ceft-0 \x72elative \x77-[\x3206px] \x6dd:\x77-[\x370%] \x6dax-w-[\x318.\x375em]"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} alt="Shopping doom" loading="lazy" width="303" height="469" decoding="async" src="/site-assets/753db99df2c7e787.jpg" />
                      <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x61bsolute \x74op-[\x360px] \x6ceft-[\x3100px] \x6cg:\x74op-1/\x34 \x6cg:\x6ceft-[\x337%] \x77-[\x315.\x325em] \x6cg:\x77-[\x318.\x375em] \x6din-h-[\x33em] \x62g-brand-white \x74ext-brand-black"}>
                        <span>I don’t just want a thing; I want to feel like I’ve gotten it for a deal.</span>
                        <svg className={"\x61bsolute \x2dleft-[\x33px] \x62ottom-0 \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" />
                        </svg>
                      </div>
                    </div>
                    <img className={"\x72ounded \x78l:\x72ounded-lg \x6dt-8 \x6dd:\x6dt-22 \x6dl-auto \x6dr-5 \x78l:\x6dr-25 \x77-[\x3112px] \x6dd:\x77-[\x310.\x35em] \x68-auto"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} alt="Shopping doom" loading="lazy" width="167" height="250" decoding="async" src="/site-assets/6ab73245ff88e3c2.jpg" />
                  </div>
                  <div>
                    <div className={"wysiwyg \x6dd:\x70r-3"}>
                      <p className={"\x74ext-body3"}><a href="https://www.voguebusiness.com/story/fashion/the-fashion-and-beauty-executives-guide-to-dupes" target="_blank">Dupes</a> continue to boom, driven by many of these emotions: 58 per cent of Gen Zs say they’ve bought a knock‑off or off‑brand version of a well‑known product. Not only is the price point more accessible, but there’s an IYKYK cachet that comes with finding a great dupe that makes Gen Zs feel the same way as securing a coveted collectible or unique vintage piece. In fact, when asked if they’d rather own a Hermès Birkin bag or Walmart’s look‑alike ‘Wirkin’, even Gen Z luxury consumers said they’d prefer the Wirkin, according to Archrival — proof that in the age of social media, status is a shifting target.</p>
                    </div>
                    <div className={"\x6dy-10"}>
                      <p className={"\x74ext-body2"}>Which would you rather?</p>
                      <div className={"\x72elative"}>
                        <span className={"radial-gradient-pink \x61bsolute \x69nset-0 \x77-[\x3150%] \x2dtop-full \x6ceft-[\x320%] \x6dd:\x2dleft-[\x325%] \x6dd:\x2dtop-[\x325%] \x61spect-square \x6fpacity-20 \x62lur-2xl"} />
                        <img className={"\x77-full \x68-auto \x6dy-6 \x72elative"} style={{ color: "transparent" }} alt="Shopping doom" loading="lazy" width="492" height="385" decoding="async" src="/site-assets/cf4212cc31594e47.png" />
                        <div className={"\x6dy-10 \x66lex \x6austify-end \x72elative"}>
                          <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="wysiwyg">
                      <p className={"\x74ext-body3"}>“There’s a lot of hashtags around growth, around self‑gifting [on TikTok],” says TikTok UK’s head of research Jenny Fernandez. “So there’s that idea that they’re doing it for themselves, and it’s not about broadcasting to the world that they’re wearing luxury. It’s more about that self‑fulfillment aspect of it, which is an evolution.” </p>
                      <p className={"\x74ext-body3"}>Some brands are finding clever ways to lean into the shift, appealing to ideas of reward or emotion. Over the summer, Abercrombie &amp; Fitch posted a video of hoodies hugging, captioned “It’s us and our emotional support hoodie against the world.” Meanwhile, jewellery brand Pandora has leant into self‑gifting, framing purchases as emotional investments: “Wear pieces that capture your summer memories,” the ad reads. “Then carry them with you all year round.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="ComponentSectionRecapturingMagic">
            <ImportedSectionRecapturingMagicMeaning />
          </div>
          <div id="ComponentSectionDemandsIRL">
            <ImportedSectionGenZDemandsIrl />
          </div>
          <div id="ComponentSectionTrustsQuiter">
            <ImportedSectionGEnZTrustsQuiter />
          </div>
          <div id="ComponentSectionGravitatesToMore">
            <ImportedSectionGenZGravitatesTo />
          </div>
          <div id="ComponentSectionWorldOfSearch">
            <ImportedSectionTheNewWorldOf />
          </div>
        </main>
        <div className={"\x66ixed \x72ight-8 \x62ottom-4 \x78l:\x72ight-12 \x78l:\x62ottom-6 \x7a-50"}>
          <button
            ref={shareTriggerRef}
            type="button"
            className="appearance-none bg-transparent size-10 rounded-full border border-brand-black text-brand-black cursor-pointer relative z-1 flex items-center justify-center transition-colors duration-300 hover:bg-brand-black hover:text-brand-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-sea focus-visible:ring-offset-2"
            aria-label={shareOpen ? "Close share options" : "Open share options"}
            aria-expanded={shareOpen}
            aria-controls="share-options"
            onClick={() => {
              if (shareOpen) {
                closeShare();
              } else {
                setMenuOpen(false);
                setShareOpen(true);
              }
            }}
          >
            <svg className={`size-5 flex items-center justify-center transition-transform duration-300 absolute delay-150 ${shareOpen ? "scale-0 opacity-60" : "scale-100 opacity-100"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 22q-1.2 0-2.1-.9T14 19v-.7l-7-4.1a3 3 0 0 1-2 .8q-1.2 0-2.1-.9T2 12t.9-2.1T5 9a3 3 0 0 1 2 .8l7-4.1V5q0-1.2.9-2.1T17 2t2.1.9T20 5t-.9 2.1T17 8a3 3 0 0 1-2-.8l-7 4.1v1.4l7 4.1a3 3 0 0 1 2-.8q1.2 0 2.1.9T20 19t-.9 2.1-2.1.9m0-2q.4 0 .7-.3t.3-.7l-.3-.7-.7-.3-.7.3-.3.7q0 .4.3.7t.7.3M5 13q.4 0 .7-.3T6 12l-.3-.7L5 11l-.7.3-.3.7q0 .4.3.7t.7.3m12-7q.4 0 .7-.3T18 5l-.3-.7L17 4l-.7.3-.3.7q0 .4.3.7t.7.3" fill="currentColor" />
            </svg>
            <svg className={`size-5 flex items-center justify-center transition-transform duration-300 absolute delay-0 ${shareOpen ? "scale-100 opacity-100" : "scale-0 opacity-60"}`} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.4 19.8 5 18.4l5.6-5.6L5 7.2l1.4-1.4 5.6 5.6 5.6-5.6L19 7.2l-5.6 5.6 5.6 5.6-1.4 1.4-5.6-5.6z" fill="currentColor" />
            </svg>
          </button>
          <div
            id="share-options"
            role="group"
            aria-label="Share this story"
            aria-hidden={!shareOpen}
            inert={!shareOpen}
            className="absolute top-0 right-0 h-full flex items-center gap-6 pr-14 bg-brand-black text-brand-white rounded-full px-6 share-dropdown"
            style={{
              clipPath: shareOpen ? "inset(0% round 2rem)" : "inset(0% 0% 0% 100% round 2rem)",
              pointerEvents: shareOpen ? "auto" : "none",
            }}
          >
            <a className="cursor-pointer transition-opacity duration-300 opacity-60 hover:opacity-100" aria-label="Share on X" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(sourceShareUrl)}`} target="_blank" rel="noreferrer">
              <svg className={"\x73ize-5"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2 4.2h2.7L14 11l7.1 9.2h-5.6l-4.3-5.6-5 5.6H3.4L9.8 13 3 4.2h5.7l4 5.2zm-1 14.4h1.5L8 5.8H6.2z" fill="currentColor" />
              </svg>
            </a>
            <a className="cursor-pointer transition-opacity duration-300 opacity-60 hover:opacity-100" aria-label="Share on Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(sourceShareUrl)}`} target="_blank" rel="noreferrer">
              <svg className={"\x73ize-5"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 3.8H14q-3.8.1-4 4v1.9H7.5V13H10v7.2h3.5V13h2.9V9.7h-2.9V8q-.1-1.2 1.2-1.2h1.8z" fill="currentColor" />
              </svg>
            </a>
            <a className="cursor-pointer transition-opacity duration-300 opacity-60 hover:opacity-100" aria-label="Share on LinkedIn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(sourceShareUrl)}`} target="_blank" rel="noreferrer">
              <svg className={"\x73ize-5"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.8 2.6a2.3 2.3 0 1 0 0 4.5 2.3 2.3 0 0 0 0-4.5" fill="currentColor" />
                <path d="M6.8 8.8h-4v12.6h4z" fill="currentColor" />
                <path d="M16.8 8.5c-2 0-3.2 1-3.7 2H13V8.8H9.2v12.6h4v-6.2c0-1.7.3-3.2 2.3-3.2s2 1.8 2 3.3v6.1h4v-6.9c0-3.4-.8-6-4.7-6" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
    </ChartModeContext.Provider>
  );
}

function ImportedSectionGenZBrokeThe() {
  return (
    <section className="fluid-block" id="article-1">
      <div className={"\x70t-15 \x6dd:\x70t-0"} style={{ opacity: "1" }}>
        <div className={"\x72elative \x6din-h-[\x340em] \x6dd:\x6din-h-screen \x74ext-center \x66lex \x66lex-col \x6austify-center \x69tems-center \x77-full \x70t-12 \x6fpacity-0"} style={{ opacity: "1" }}>
          <div className={"\x63ontainer \x77-full"}>
            <h1 className={"\x73r-only"}> Gen Z broke the marketing funnel</h1>
            <div className={"\x6db-4"}>
              <div className={"\x6dx-auto \x69nline-block \x61lign-baseline \x72elative \x6db-4"} style={{ "--progress": "0", translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
                <span className={"\x66ont-normal \x62lock \x75ppercase h3 \x6db-0"}>
                  <span className={"\x62lock \x62g-brand-sea/\x350 \x70-[\x30.\x31em] \x70b-[\x30.\x312em] \x70x-[\x30.\x34em] \x74ext-[#\x46CFCF8] styles_selectionText__kiiBs"} style={{ "--progress": "1" } as CSSProperties} aria-label="Gen Z broke">
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">G</div>
                      <div className="char" aria-hidden="true">e</div>
                      <div className="char" aria-hidden="true">n</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">Z</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">b</div>
                      <div className="char" aria-hidden="true">r</div>
                      <div className="char" aria-hidden="true">o</div>
                      <div className="char" aria-hidden="true">k</div>
                      <div className="char" aria-hidden="true">e</div>
                    </div>
                  </span>
                  <span className={"\x68-[\x3110%] \x77-full \x62order-l-[\x30.\x32rem] \x62order-brand-sea \x61bsolute \x62ottom-0 \x6ceft-1/\x32 \x70ointer-events-none"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(50%, 0%)" } as CSSProperties}>
                    <span className={"\x73ize-4 \x2dleft-2 \x6dd:\x73ize-[\x31.\x35rem] \x72ounded-full \x62g-brand-sea \x61bsolute \x6dd:\x2dleft-[\x30.\x38rem] \x62ottom-full \x2dmb-[\x30.\x32em]"} />
                  </span>
                  <span className={"\x68-[\x3110%] \x77-full \x62order-l-[\x30.\x32rem] \x62order-brand-sea \x61bsolute \x62ottom-0 \x2dscale-x-[\x31] \x70ointer-events-none \x72ight-1/\x32"} style={{ transform: "translate(-50%, 0%) rotate(180deg) scale(1, -1)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <span className={"\x73ize-4 \x2dleft-2 \x6dd:\x73ize-[\x31.\x35rem] \x72ounded-full \x62g-brand-sea \x61bsolute \x6dd:\x2dleft-[\x30.\x38rem] \x62ottom-full \x2dmb-[\x30.\x32em]"} />
                  </span>
                </span>
              </div>
              <div aria-label="the marketingfunnel(part II)">
                <span className={"\x66ont-semibold \x62lock \x6cowercase"}>
                  <span className={"h1-large \x6ceading-none \x2dtracking-[\x30.\x305em] \x6d-0"}>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">t</div>
                      <div className="char" aria-hidden="true">h</div>
                      <div className="char" aria-hidden="true">e</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">m</div>
                      <div className="char" aria-hidden="true">a</div>
                      <div className="char" aria-hidden="true">r</div>
                      <div className="char" aria-hidden="true">k</div>
                      <div className="char" aria-hidden="true">e</div>
                      <div className="char" aria-hidden="true">t</div>
                      <div className="char" aria-hidden="true">i</div>
                      <div className="char" aria-hidden="true">n</div>
                      <div className="char" aria-hidden="true">g</div>
                    </div>
                  </span>
                </span>
                <span className={"\x66ont-semibold \x69nline-block \x61lign-baseline \x72elative"}>
                  <span className={"h1-large \x6ceading-none \x2dtracking-[\x30.\x305em] \x6d-0"}>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">f</div>
                      <div className="char" aria-hidden="true">u</div>
                      <div className="char" aria-hidden="true">n</div>
                      <div className="char" aria-hidden="true">n</div>
                      <div className="char" aria-hidden="true">e</div>
                      <div className="char" aria-hidden="true">l</div>
                    </div>
                  </span>
                  <span className={"\x62g-brand-lime h5 \x6d-0 \x70t-[\x30.\x34em] \x70b-[\x30.\x32em] \x70x-[\x30.\x33em] \x61bsolute \x6ceft-full \x77hitespace-nowrap \x6dl-2"} style={{ clipPath: "inset(0%)" } as CSSProperties}>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">(</div>
                      <div className="char" aria-hidden="true">p</div>
                      <div className="char" aria-hidden="true">a</div>
                      <div className="char" aria-hidden="true">r</div>
                      <div className="char" aria-hidden="true">t</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" aria-hidden="true">I</div>
                      <div className="char" aria-hidden="true">I</div>
                      <div className="char" aria-hidden="true">)</div>
                    </div>
                  </span>
                </span>
              </div>
              <span className={"\x66ont-normal \x62lock h2 \x6db-0 \x72elative \x6dt-[\x30.\x36rem]"} aria-label="What now?">
                <span className={"\x66ont-normal \x6eot-italic \x66ont-alicent \x6db-0 \x2dtracking-[\x30.\x35em]"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" aria-hidden="true">W</div>
                  </div>
                </span>
                <span className={"\x69talic \x66ont-didot"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" aria-hidden="true">h</div>
                    <div className="char" aria-hidden="true">a</div>
                    <div className="char" aria-hidden="true">t</div>
                  </div>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" aria-hidden="true">n</div>
                    <div className="char" aria-hidden="true">o</div>
                    <div className="char" aria-hidden="true">w</div>
                    <div className="char" aria-hidden="true">?</div>
                  </div>
                </span>
              </span>
            </div>
          </div>
          <div className={"\x66lex \x66lex-row \x66lex-wrap \x77-full \x70x-8 \x6dd:\x70x-0 \x6dd:\x62lock"}>
            <div className={"\x77-1/\x32 \x68idden \x6dd:\x62lock \x6dd:\x61bsolute \x6dd:\x77-[\x37.\x32em] \x61spect-square \x6ceft-[\x37%] \x74op-[\x320%]"} />
            <div className={"\x77-1/\x32 \x6dd:\x61bsolute \x6dd:\x77-[\x315.\x3625em] \x61spect-square \x6ceft-[\x310%] \x62ottom-[\x37%]"} />
            <div className={"\x77-1/\x32 \x6dd:\x61bsolute \x6dd:\x77-[\x315em] \x61spect-square \x72ight-[\x310%] \x62ottom-[\x315%]"} />
            <div className={"\x77-1/\x32 \x6dd:\x61bsolute \x6dd:\x77-[\x35.\x3625em] \x61spect-square \x72ight-[\x315%] \x74op-[\x310%]"} />
            <div className={"\x77-1/\x32 \x6dd:\x61bsolute \x6dd:\x77-[\x311.\x3375em] \x61spect-square \x6ceft-[\x35%] \x6cg:\x6ceft-[\x320%] \x74op-[\x350%] \x6cg:\x74op-[\x345%]"} />
          </div>
        </div>
        <div className={"\x72elative \x6fverflow-clip"}>
          <div>
            <div className={"\x6cg:\x67rid \x6dd:\x67rid-cols-12 \x6dd:\x67ap-x-8 \x70y-20 \x6dd:\x70b-30 \x6dd:\x70t-20 \x32xl:\x70t-[\x320em] \x32xl:\x70b-[\x37em] \x63ontainer \x6dax-w-none!"}>
              <div className={"\x6dd:\x63ol-span-8 \x6dd:\x63ol-start-3 \x6dy-12 \x6dd:\x6dy-20 \x74ext-center \x78l:\x2dmx-[\x33em]"}>
                <div className="wysiwyg">
                  <p className={"\x74ext-body1"}>Shopping via social media has made the purchasing journey <mark className="mark-blue">seamless</mark>, but has removed much of its <mark className="mark-pink">soul</mark>. Now, new research from <i>Vogue Business</i> and youth culture agency Archrival shows how Gen Z is gravitating toward shopping experiences that offer <mark className="mark-green">something deeper</mark>: discovery, serendipity, connection and emotional payoff.</p>
                </div>
                <p className={"\x6dt-8 !\x66ont-vogue \x74ext-body3"}>By <a className={"\x75nderline \x74ext-current!"} href="https://www.voguebusiness.com/contributor/lucy-maguire" rel="noopener noreferrer" target="_blank">Lucy Maguire</a>, <br className={"\x6dd:\x68idden"} />Senior Trends Editor</p>
              </div>
            </div>
            <div className={"\x70y-20"}>
              <div className={"fluid-block \x72elative \x68-[\x3200vh] \x6dd:\x68-auto \x78l:\x68-[\x3200vh]"}>
                <div className={"\x66ixed \x69nset-0 \x70ointer-events-none \x7a-5 \x6fpacity-0 \x78l:\x6fpacity-100"}>
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/96718b85ea224b9a.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/5b40d43e9c201295.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/8aeab7f4179c9c50.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/3b3ba4bf423c4dca.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/cd2a620f69ffe2c6.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/c8b27cb55d43b4bb.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/a77e73cbfe107b97.png" />
                  <img className={"\x77-25 \x68-auto \x6fpacity-0 \x73cale-0 \x61bsolute \x6ceft-0 \x74op-0"} style={{ color: "transparent" }} alt="Cursor" loading="eager" width="102" height="186" decoding="async" src="/site-assets/d7409545a1cea0b6.png" />
                </div>
                <div className={"\x66lex \x69tems-center \x78l:\x68-screen \x74op-0 \x73ticky \x68-screen \x70t-8 \x6dd:\x70t-0 \x6dd:\x68-auto"}>
                  <div className={"\x72elative \x77-full"}>
                    <span className={"\x68-[\x3200%] \x2dtop-[\x350%] \x61spect-square \x61bsolute \x6dd:\x6ceft-0 \x72ight-0 \x6dx-auto radial-gradient-pink2 \x72ounded-full \x2dleft-[\x355%] \x70ointer-events-none"} />
                    <img className={"\x72elative \x7a-1 \x6dx-auto \x77-[\x310.\x3875em]"} style={{ color: "transparent" }} alt="Women Model" loading="eager" width="174" height="617" decoding="async" src="/site-assets/a0800ea9e3989247.png" />
                    <img className={"\x61bsolute \x74op-0 \x7a-2 \x68-full! \x77-auto! \x6dax-w-none! \x6ceft-1/\x32 \x61spect-2284/\x3617 \x77ill-change-transform"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px)" } as CSSProperties} alt="Clothes" loading="eager" width="2284" height="617" decoding="async" src="/site-assets/4ed4afaacc10bbe4.png" data-site-import-responsive="134" />
                    <img className={"\x61bsolute \x74op-0 \x72ight-1/\x32 \x7a-1 \x68-full! \x77-auto! \x6dax-w-none! \x61spect-2284/\x3617 \x77ill-change-transform"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px)" } as CSSProperties} alt="Clothes" loading="eager" width="2284" height="617" decoding="async" src="/site-assets/066a693435941c72.png" data-site-import-responsive="135" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"\x72elative \x6fverflow-hidden \x70y-15 \x6dd:\x70y-25"}>
            <div className={"\x63ontainer \x6cg:\x67rid \x6cg:\x67rid-cols-12 \x6dd:\x67ap-x-8 \x6dd:\x69tems-center"}>
              <div className={"\x68idden \x6cg:\x62lock \x6dd:\x63ol-span-2 \x78l:\x63ol-span-3"}>
                <div className={"\x68-auto \x61spect-[\x3155/\x383] \x77-1/\x32 \x6dx-auto"} />
              </div>
              <div className={"\x6dd:\x63ol-span-8 \x78l:\x63ol-span-6"}>
                <div className={"\x74ext-balance wysiwyg"}>
                  <p className={"\x74ext-body3"}>By centring shopping experiences around social media and prioritising convenience, brands and retailers have favoured scale over substance, while stripping shopping of its emotional depth. Amid the current tumultuous socio‑political and economic climate, Gen Z has become more discerning than ever about what they buy and where they buy it.</p>
                  <p className={"\x74ext-body2"}>They’re craving more <mark className="mark-pink">connection</mark> and <mark className="mark-green">emotion</mark> at the same time that much of the magic, discovery and meaning — the things that make brand interactions memorable — have been engineered out. It raises the question: how can we make shopping more mindful, meaningful, personal and, most importantly, <mark className="mark-blue">more human?</mark></p>
                  <p className={"\x74ext-body3"}>Last year, <i>Vogue Business</i> uncovered that <a href="https://www.vogue.com/article/gen-z-broke-the-marketing-funnel" target="_blank">Gen Z broke the marketing funnel</a>. Now, we’ve teamed up once again with US‑based youth culture agency <a href="https://archrival.com" target="_blank">Archrival</a> to understand what they built instead. Archrival conducted a qualitative and quantitative research study with 750 Gen Zs (16‑28) and 250 of their millennial (29‑44) counterparts in the US. Both Archrival and <i>Vogue Business</i> also conducted qualitative focus groups and interviews with dozens of Gen Zs.</p>
                  <p className={"\x74ext-body2"}>The verdict? Gen Z is on a quest to find shopping experiences ripe with meaning and excitement, and they’re finding it <mark className="mark-green">outside of traditional</mark> retail and social media.</p>
                </div>
              </div>
              <div className={"\x68idden \x6cg:\x62lock \x6dd:\x63ol-span-2 \x78l:\x63ol-span-3"}>
                <div className={"\x77-1/\x32 \x6dx-auto \x68-auto \x61spect-[\x3108/\x3118]"} />
              </div>
              <div className={"\x6dd:\x63ol-span-8 \x6dd:\x63ol-start-3 \x6dd:\x72ow-2 \x70t-15 \x6dd:\x70t-25"}>
                <div className={"\x6dx-auto \x61spect-[\x3840/\x3145] \x77-full \x68-auto"} />
              </div>
            </div>
            <span className={"\x61bsolute \x69nset-0 \x62g-gradient-to-t \x66rom-brand-mint/\x367 \x74o-transparent \x2dz-1"} />
          </div>
        </div>
      </div>
      <div className={"\x70y-20 \x6dd:\x70b-35 \x63ontainer"}>
        <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8"}>
          <div className={"\x78l:\x63ol-span-5 \x78l:\x63ol-start-2 \x78l:\x70r-12"}>
            <div className={"\x73ticky \x6db-20 \x6dd:\x74op-20 \x6cg:\x70r-10"}>
              <div className={"wysiwyg \x6db-40 \x78l:\x6db-50"}>
                <p className={"\x74ext-body1"}>The world has changed <mark className="mark-green">dramatically</mark> — Gen Z changed with it.</p>
              </div>
              <div className={"\x72elative"}>
                <span className={"\x68-[\x3220%] \x61spect-square \x61bsolute \x69nset-0 \x6d-auto radial-gradient-pink2 \x72ounded-full \x2dleft-1/\x32 \x6dd:\x2dleft-[\x370%] \x78l:\x2dleft-1/\x32 \x2dz-1 \x2dtop-[\x310%]"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "translate(0%, -10%) scale(0.3, 0.3)" } as CSSProperties} />
                <div className={"\x61bsolute \x69nset-0 \x6frigin-bottom"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 20.0422%) translate3d(0px, 0px, 0px) scale(0.7983, 0.7983)" } as CSSProperties} data-site-import-responsive="168">
                  <div className={"\x61bsolute \x2dleft-[\x30.\x38rem] \x2dtop-[\x37rem] \x2drotate-[\x323deg]"} style={{ transform: "translate3d(0px, 3.1448px, 0px) rotate(-22.9998deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x39.\x385rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="158" height="61" decoding="async" src="/site-assets/3b1ce6b05c13b473.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x313rem] \x2dtop-[\x318rem] \x2drotate-[\x317deg]"} style={{ transform: "translate3d(0px, 0.625px, 0px) rotate(-16.9998deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x33.\x3125rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="50" height="124" decoding="async" src="/site-assets/636ce88b5d3fb0e7.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x315rem] \x2dtop-[\x36rem] \x72otate-[\x325deg]"} style={{ transform: "translate3d(0px, 3.9745px, 0px) rotate(25deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x34.\x35rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="72" height="124" decoding="async" src="/site-assets/c2260d5193054614.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x317.\x37rem] \x2dtop-[\x318.\x39rem] \x72otate-[\x353deg]"} style={{ transform: "translate3d(0px, 4.2592px, 0px) rotate(52.9999deg) scale(1.00001, 1.00001)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x33.\x34rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="57" height="141" decoding="async" src="/site-assets/6619d38b07323b64.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x39.\x35rem] \x2dtop-[\x37.\x34rem] \x72otate-[\x327deg]"} style={{ transform: "translate3d(0px, 0.1117px, 0px) rotate(26.9999deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x34.\x325rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="68" height="66" decoding="async" src="/site-assets/cf2c48b42b317155.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x31.\x34rem] \x2dtop-[\x320.\x39rem] \x2drotate-[\x335deg]"} style={{ transform: "translate3d(0px, 6.7152px, 0px) rotate(-35.0002deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x310.\x375rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="172" height="203" decoding="async" src="/site-assets/86813615a9cf5675.png" />
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x39.\x39rem] \x2dtop-[\x31.\x39rem] \x2drotate-[\x335deg]"} style={{ transform: "translate3d(0px, 4.8351px, 0px) rotate(-35.0002deg)", translate: "none", rotate: "none", scale: "none" } as CSSProperties}>
                    <img className={"\x77-[\x33.\x34rem] \x68-auto"} style={{ color: "transparent" }} alt="Purse" loading="lazy" width="57" height="68" decoding="async" src="/site-assets/eabb77717ddcbd62.png" />
                  </div>
                </div>
                <img className={"\x72elative \x7a-2 \x6dx-auto \x6dd:\x6d-0 \x77-full \x68-auto"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 50%) scale(0.9, 0.9)" } as CSSProperties} alt="Purse" loading="lazy" width="416" height="417" decoding="async" src="/site-assets/8aeab7f4179c9c50.png" />
              </div>
            </div>
          </div>
          <div className={"\x78l:\x63ol-span-5"}>
            <div className="wysiwyg">
              <p className={"\x74ext-body3"}>Gen Z may have an expected spending power of $12 trillion by 2030, according to a 2025 <a href="https://institute.bankofamerica.com/content/dam/economic-insights/genz-new-economic-force.pdf" target="_blank">report</a> from Bank of America. But many have pulled back spending on categories like luxury, fashion and beauty over the last two years. The aspirational shopper who earns between $40,000 and $100,000 annually pulled back their luxury spending by 20 per cent year-on-year in 2024, per McKinsey. And while economics is the factor everyone likes to cite, new research shows that it goes far beyond the price tag. We’ve made shopping too easy — and it’s making Gen Z reassess its purchase behaviour.</p>
              <p className={"\x74ext-body2"}>“Shopping has always been about more than buying stuff; it’s how we explore who we are, find our people, and rep our culture,” says Ben Harms, chief growth officer at Archrival. “But social commerce has flattened that experience. When every brand and every look is just a swipe away, it’s harder than ever for someone to carve out a lane that actually feels their own.”</p>
              <p className={"\x74ext-body3"}>As social media and e-commerce increasingly circulate trends <a href="https://www.voguebusiness.com/story/fashion/personal-style-is-trapped-in-the-algorithms-echo-chamber" target="_blank">based on algorithmic echo chambers</a>, fashion and beauty brands become beholden to the micro-trend cycle and focus too heavily on data-led curation. Suddenly, everyone starts to look the same.</p>
              <p className={"\x74ext-body3"}>Isabelle Inthisone, a 21-year-old student from Chicago, says that last summer, she was influenced by TikTok videos to purchase a blue Longchamp bag. “On the first day of school, literally hundreds of other girls had the exact same bag. It was really weird because it’s a specific brand in a specific colour. It almost looked dystopian.” After a few days, she no longer wore the bag.</p>
              <p className={"\x74ext-body3"}>She’s not the only one. Gen Zs say they’re learning not to trust the excitement they feel when they discover a product online, knowing the algorithm has likely fed it to many others.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionShoppingIsnTFun() {
  return (
    <section id="article-2">
      <div className={"\x6dd:\x61spect-[\x31440/\x3720] \x68-[\x335em] \x6dd:\x68-auto \x74ext-center \x72elative \x74ext-brand-white \x70y-12 \x66lex \x69tems-center \x6austify-center fluid-block"}>
        <div className={"\x61bsolute \x69nset-0"}>
          <div className={"\x61bsolute \x6ceft-0 \x62ottom-0 \x74ranslate-x-[\x2d50%] \x74ranslate-y-[\x325%] \x77-[\x312em] \x6cg:\x77-[\x324em] \x61spect-[\x338/\x348]"} />
          <div className={"\x61bsolute \x72ight-0 \x74op-0 \x74ranslate-x-[\x325%] \x74ranslate-y-[\x2d25%] \x77-[\x310em] \x6cg:\x77-[\x320em] \x61spect-square"} />
        </div>
        <div className={"\x6fverflow-clip \x74ext-center \x74ext-brand-white \x70y-12 \x66lex \x69tems-end \x6austify-center \x72elative \x77-full"}>
          <div className={"\x63ontainer \x72elative \x77-full"}>
            <h2 className={"\x73r-only"}>Shopping isn’t fun anymore</h2>
            <div className={"\x6db-0 \x6eot-italic"}>
              <span className={"\x62lock \x74ext-left \x70l-5 \x6dd:\x74ext-center \x6dd:\x70l-0"}>
                <span className={"\x69nline-block \x61lign-bottom \x72elative \x70r-5"}>
                  <span className={"\x66ont-normal \x75ppercase h3 \x6db-4 \x69nline-block \x61lign-bottom"} aria-label="Shopping">
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0037deg) scale(1, 0.9991)" }} aria-hidden="true" data-site-import-responsive="207">S</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0071deg) scale(1, 0.9982)" }} aria-hidden="true" data-site-import-responsive="208">h</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0132deg) scale(1, 0.9967)" }} aria-hidden="true" data-site-import-responsive="209">o</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.024deg) scale(1, 0.994)" }} aria-hidden="true" data-site-import-responsive="210">p</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="211">p</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="212">i</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="213">n</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="214">g</div>
                    </div>
                  </span>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x61bsolute \x6ceft-full \x2dtop-3 \x62g-brand-sea \x74ext-white"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>Meh~<svg className={"\x61bsolute \x2dleft-[\x33px] \x62ottom-0 \x74ext-brand-sea"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </span>
              </span>
              <span className={"\x66ont-semibold \x62lock h1-large md:h1 \x6dd:\x6db-0 \x6db-0 \x6cowercase \x72elative"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-label="isn’t fun">
                <span className={"\x61nimate-bg \x61nimate-bg--blue \x69nline-block \x70r-[\x30.\x305em] \x61nimate-bg--short"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0037deg) scale(1, 0.9991)" }} aria-hidden="true" data-site-import-responsive="218">i</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0071deg) scale(1, 0.9982)" }} aria-hidden="true" data-site-import-responsive="219">s</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0132deg) scale(1, 0.9967)" }} aria-hidden="true" data-site-import-responsive="220">n</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.024deg) scale(1, 0.994)" }} aria-hidden="true" data-site-import-responsive="221">’</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="222">t</div>
                  </div>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="224">f</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="225">u</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="226">n</div>
                  </div>
                </span>
              </span>
              <span className={"\x66ont-normal \x62lock h2 \x6db-0 \x72elative \x6dt-[\x30.\x31em]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} aria-label="Anymore">
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0071deg) scale(1, 0.9982)" }} aria-hidden="true" data-site-import-responsive="230">A</div>
                  </div>
                </span>
                <span className={"\x69talic \x66ont-didot"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0132deg) scale(1, 0.9967)" }} aria-hidden="true" data-site-import-responsive="233">n</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.024deg) scale(1, 0.994)" }} aria-hidden="true" data-site-import-responsive="234">y</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="235">m</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="236">o</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="237">r</div>
                    <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="238">e</div>
                  </div>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x63ontainer \x70y-10 \x70t-20 \x6dd:\x70b-0 \x6dd:\x70t-20 \x78l:\x70t-40 \x78l:\x70b-[\x36em] \x32xl:\x70y-[\x310em] \x6dd:\x67rid \x6dd:\x67rid-cols-12 \x6dd:\x67ap-x-8"}>
          <div className={"\x74ext-center \x6dd:\x63ol-span-8 \x6dd:\x63ol-start-3 wysiwyg"}>
            <p className={"\x74ext-body2"}>For Gen Z, <mark className="mark-green">social media is essential</mark> to shopping: 66 per cent of Gen Zs surveyed by Archrival <mark className="mark-blue">research and learn</mark> about brands on social media, versus 48 per cent of millennials. Nearly half of Gen Zs surveyed by Archrival have <mark className="mark-blue">purchased directly</mark> in a social media app or platform in the last year versus just 38 per cent of millennials.</p>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x70y-15 \x63ontainer \x72elative \x78l:\x66lex \x78l:\x66lex-col"}>
          <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "flex", margin: "0px", inset: "83.4286px auto auto", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1368px", height: "1728px", padding: "0px 0px 864px" } as CSSProperties}>
            <div className={"\x66lex \x66lex-col \x66lex-grow \x73ticky \x74op-0 \x6dd:\x74op-20 \x78l:\x68-screen"} style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1368.23px", width: "1368.23px", maxHeight: "864px", height: "864px", padding: "0px", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="249">
              <span className={"\x6fpacity-70 \x6dd:\x61spect-[\x31500/\x3700] \x61bsolute \x6ceft-1/\x32 \x74op-[\x365%] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-pink2 \x62g-radial \x62lur-2xl \x70ointer-events-none \x68-[\x3120%] \x77-[\x3120%]"} />
              <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x6db-8 \x72elative \x7a-5"}>
                <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                  <div className={"\x74ext-body1"}>How likely are you to use each of the following to find or discover new products?</div>
                </div>
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
              <div className={"\x72elative \x66lex-grow \x66lex \x69tems-center \x6dd:\x6dy-[\x318vh] \x78l:\x6dy-0 \x32xl:\x2dtop-20"}>
                <div className={"\x66lex \x66lex-col \x6dd:\x66lex-row \x67ap-y-6 \x67ap-x-7 chart-parent \x6dd:\x70y-16 \x77-full \x6dd:\x77-auto"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.92", "--value-millennials": "0.85", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "20.7em", "--bar-width": "86.48%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.125em", "--bar-width": "79.89999999999999%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14.5" r="14" fill="#161414" />
                            <path d="M21.8 10.3v2.8a7 7 0 0 1-3.8-1.6v5.9a5 5 0 1 1-4.2-5v2.8L13 15a2.4 2.4 0 1 0 2.4 2.2V6.5H18v.7q0 .7.5 1.2a5 5 0 0 0 3.2 2" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9 .5)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>TikTok</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.88", "--value-millennials": "0.88", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.8em", "--bar-width": "82.72%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.8em", "--bar-width": "82.72%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14.4" r="14" fill="#201F1F" />
                            <path d="M22.8 12q-.1-1.6-1.1-2.6-1-.6-2.2-.5h-9.2l-1.8.2q-.8.4-1.1 1.2-.5 1.1-.5 2.2v4.2q0 1.6 1 2.8 1.2.7 2.6.6h9.7q1.1-.2 1.9-.9.6-.8.7-2a26 26 0 0 0 0-5.3m-9.6 5v-5l4.2 2.5z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9 .5)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>YouTube</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.87", "--value-millennials": "0.84", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.575em", "--bar-width": "81.78%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "18.9em", "--bar-width": "78.96%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14.7" r="14" fill="#161414" />
                            <path d="M19.2 6.4h-8.6c-2.4 0-4.3 2-4.3 4.3v8c0 2.3 2 4.2 4.3 4.2h8.6c2.4 0 4.3-1.9 4.3-4.3v-7.9c0-2.3-2-4.3-4.3-4.3M7.8 10.7C7.8 9.2 9 8 10.6 8h8.6c1.5 0 2.8 1.3 2.8 2.8v8c0 1.5-1.3 2.7-2.8 2.7h-8.6a3 3 0 0 1-2.8-2.8z" fill="white" />
                            <path d="M14.9 18.7a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5" fill="white" />
                            <path d="M19.3 11.3a1 1 0 1 0 0-2.1 1 1 0 0 0 0 2.1" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9 .7)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Instagram</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.85", "--value-millennials": "0.86", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.125em", "--bar-width": "79.89999999999999%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "19.35em", "--bar-width": "80.84%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14" r="14" fill="#161414" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9 16.5v.1c-.6 2.3-.7 2.9-1.3 4l-1 1.4h-.2l-.2-2.2c0-1 .2-1.2 1.4-6.2v-.2q-.6-1.2-.2-2.4c.6-1.7 2.5-1.8 2.8-.4.2.9-.3 2-.7 3.7-.4 1.4 1.3 2.4 2.7 1.4 1.2-1 1.7-3.2 1.6-4.8-.1-3.2-3.6-3.8-5.8-2.8-2.5 1.1-3.1 4.3-2 5.7q.4.3.4.5l-.2.8q-.2.3-.6.2-.7-.2-1-.8c-1-1.2-1.3-3.5 0-5.5 1.4-2.2 4-3.1 6.4-3 2.9.4 4.7 2.3 5 4.5.2 1 0 3.6-1.3 5.3-1.7 2-4.3 2.2-5.6 1z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Pinterest</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.75", "--value-millennials": "0.81", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "16.875em", "--bar-width": "70.5%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "18.225em", "--bar-width": "76.14%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.5 3.8H14q-3.8.1-4 4v1.9H7.5V13H10v7.2h3.5V13h2.9V9.7h-2.9V8q-.1-1.2 1.2-1.2h1.8z" fill="currentColor" />
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Facebook</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.65", "--value-millennials": "0.74", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "14.625em", "--bar-width": "61.1%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "16.65em", "--bar-width": "69.56%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14.3" r="14" fill="#161414" />
                            <path d="M22.8 14q-.4-1.6-2-1.4l-.7.4a9 9 0 0 0-4.6-1.5l.9-3.6 2.5.6q.2 1.2 1.4 1.3 1.2-.1 1.3-1.4a1.3 1.3 0 0 0-2.5-.5l-2.8-.7q-.3 0-.5.3l-1 4a9 9 0 0 0-5 1.5l-.3-.2c-.7-.5-1.8-.2-2.3.7s-.4 1.9.4 2.3l.1.1v.6c0 2.8 3.2 5 7.2 5s7.2-2.2 7.2-5v-.6q1-.6.7-2m-11.6 1.3a1.1 1.1 0 1 1 2.3 0 1.1 1.1 0 0 1-2.3 0m6.4 3.6a4 4 0 0 1-2.8 1.1c-1.5 0-2.4-.7-2.8-1a.3.3 0 1 1 .4-.5c.3.3 1.1 1 2.4 1s2-.7 2.4-1a.3.3 0 1 1 .4.4m-.2-2.4a1.1 1.1 0 1 1 0-2.3 1.1 1.1 0 0 1 0 2.3" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9 .3)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Reddit</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.6", "--value-millennials": "0.6", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "13.5em", "--bar-width": "56.4%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "13.5em", "--bar-width": "56.4%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.2 4.2h2.7L14 11l7.1 9.2h-5.6l-4.3-5.6-5 5.6H3.4L9.8 13 3 4.2h5.7l4 5.2zm-1 14.4h1.5L8 5.8H6.2z" fill="currentColor" />
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>X</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.59", "--value-millennials": "0.5", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "13.274999999999999em", "--bar-width": "55.459999999999994%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "11.25em", "--bar-width": "47%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.9" cy="14.2" r="14" fill="#161414" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.3 6.7h13.2v1.9H8.3zm0 6.7h13.2v8.3L14.9 18l-6.6 3.7zm0-3.3h13.2v1.8H8.3z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.9 .2)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Substack</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.56", "--value-millennials": "0.62", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "12.600000000000001em", "--bar-width": "52.64000000000001%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "13.95em", "--bar-width": "58.28%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="14.7" cy="14.1" r="14" fill="#161414" />
                          <path d="m21.6 17-.4-.5H21l-.2-.1a4 4 0 0 1-1.5-1.3l-.2-.4v-.2l.3-.2.3-.2.6-.6q.3-.5 0-1-.2-.7-1-.7H19l-.1-1a4 4 0 0 0-1.8-3q-.9-.4-2.1-.4T13 8a4 4 0 0 0-1.9 2.9v1H11l-.3-.1a1.1 1.1 0 0 0-1 1.7q0 .3.5.6l.3.2.3.1v.3l-.2.4a4 4 0 0 1-1.4 1.3q-.6.2-.8.6-.1.5.2 1l.4.2.8.3.2.1.2.4.2.3 1 .2 1 .1.5.3q.5.6 2.1.7 1.5-.1 2.1-.7l.6-.3 1-.1q.5 0 .9-.2l.3-.3.1-.4h.2l.8-.4q.3 0 .4-.3.4-.4.2-.9m-1 .5-1.2.5c-.2.2 0 .5-.2.6-.3.2-1 0-1.8.3-.7.2-1.1 1-2.4 1s-1.7-.8-2.4-1c-.9-.3-1.5-.1-1.7-.3-.2 0 0-.4-.3-.6l-1.3-.5q-.3-.3 0-.3c2-1 2.4-2.6 2.4-2.7l-.1-.4-1-.7q-.4-.3-.3-.6 0-.3.4-.3h.1l.9.3.2-.1V11q0-1.4.7-1.8c.1-.2 1-1 2.4-1 1.5 0 2.3.8 2.5 1q.5.5.7 1.7v1.9h.1l.9-.3h.1q.3 0 .5.3.1.3-.4.6l-1 .7q-.2.3 0 .4c0 .1.3 1.7 2.3 2.7.1 0 .4.1 0 .3" fill="white" />
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Snapchat</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.51", "--value-millennials": "0.42", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "11.475em", "--bar-width": "47.94%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "9.45em", "--bar-width": "39.48%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.8" cy="14.2" r="14" fill="#161414" />
                            <path d="M22.3 10.3c0-2-1.6-3.7-3.4-4.3a11 11 0 0 0-7.6.4c-2.7 1.2-3.5 4-3.6 6.8 0 2.2.2 8.2 3.6 8.3 2.5 0 2.9-3.2 4-4.8q1.4-1.4 3.3-1.7a5 5 0 0 0 3.7-4.7" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.8 .2)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Patreon</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.45", "--value-millennials": "0.55", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "10.125em", "--bar-width": "42.300000000000004%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "12.375000000000002em", "--bar-width": "51.7%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <g clipPath="url(#a)">
                            <circle cx="14.8" cy="15" r="14" fill="#161414" />
                            <path d="M20.4 9.9a13 13 0 0 0-3.3-1l-.5.8q-1.8-.3-3.6 0l-.5-.8a13 13 0 0 0-3.3 1A14 14 0 0 0 7 19a13 13 0 0 0 4 2l.9-1.3-1.3-.7.3-.2a10 10 0 0 0 8 0q.2 0 .3.2l-1.2.6v.1l.8 1.4a13 13 0 0 0 4-2.1 13 13 0 0 0-2.3-9.1m-8.2 7.3q-1.4-.1-1.5-1.6.2-1.6 1.5-1.6 1.3.1 1.4 1.6-.1 1.5-1.4 1.6m5.3 0q-1.3-.1-1.5-1.6.1-1.6 1.5-1.6 1.3.1 1.4 1.6-.1 1.5-1.4 1.6" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="a">
                              <rect width="28" height="28" fill="white" transform="translate(.8 1)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Discord</span>
                      </div>
                    </div>
                  </div>
                  <div className={"\x77-full \x6dd:\x77-40 \x66lex-shrink-0 \x66lex \x66lex-col \x6dd:\x62lock style_chart__item__sb06m"} style={{ "--value-genz": "0.42", "--value-millennials": "0.58", "--progress": "0" } as CSSProperties}>
                    <div className={"\x67rid \x6dd:\x67rid-cols-2 \x67ap-1 \x77-full \x6dd:\x68-[\x322.\x35em] \x74ext-base \x66ont-adobe \x75ppercase \x6db-3"}>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "9.45em", "--bar-width": "39.48%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic \x6dd:\x68-auto style_labelGenz__IOuLH"}>Gen Zs</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueGenz__uCXgV"}>0%</span>
                      </div>
                      <div className={"\x72elative \x68-[\x33em] \x6dd:\x68-full \x6dd:\x77-[\x34.\x3875em] \x66lex \x66lex-col"} style={{ "--bar-height": "13.049999999999999em", "--bar-width": "54.519999999999996%" } as CSSProperties}>
                        <div className={"\x72elative \x77-full \x68-full \x6fverflow-clip"}>
                          <div className={"\x61bsolute \x62ottom-0 \x6ceft-0 \x72ight-0 \x62g-gradient-to-r \x6dd:\x62g-gradient-to-t \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full style_bar__wjy_1"} />
                          <span className={"\x61bsolute \x6ceft-2 \x68-full \x6dd:\x68-auto \x66lex \x69tems-center \x6dd:\x2drotate-90 \x6frigin-bottom-left \x6dd:\x6ceft-full \x77hitespace-nowrap \x6dd:\x62ottom-3 \x6dd:\x2dml-3 \x69talic style_labelMil__oTMLL"}>Millennials</span>
                        </div>
                        <span className={"\x61bsolute \x66lex \x69tems-center \x74ext-body1 \x77-full md:h5 \x6db-0 \x6dd:\x74ext-center \x62ottom-0 \x6ceft-0 \x68-full \x6dd:\x68-auto \x6dd:\x77-full \x6dd:\x70b-1 \x70ointer-events-none style_labelValueMil__M5otd"}>0%</span>
                      </div>
                    </div>
                    <div className={"\x6frder-first \x66lex \x6austify-start \x6dd:\x6austify-center \x6db-2"}>
                      <div className={"\x66ont-vogue \x74ext-2xl \x6ceading-[\x31.\x34] \x66lex \x69tems-center \x6austify-center \x67ap-2 \x74ext-body2"}>
                        <svg className={"\x73ize-7 \x2dtop-[\x30.\x31em] \x72elative"} viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="14.8" cy="14.1" r="14" fill="#161414" />
                          <path d="M17.6 17.7a6 6 0 0 1-5.9-5.9 1.5 1.5 0 0 1 2.3-1.3l.4 2.2v.1l-.8.5v.1q.7 1.7 2.4 2.5h.2q0-.6.4-.8h.1l2.2.3a1.5 1.5 0 0 1-1.3 2.3" fill="white" />
                          <path d="M23.4 13.3a8 8 0 0 0-8-7.3 8 8 0 0 0-6.8 12.2L7 22l5.5-.6a8 8 0 0 0 4.6.4 8 8 0 0 0 6.4-7.8zm-10.8 6.4-3 .4.9-2-.2-.3Q9 16 9 14a6.4 6.4 0 1 1 3.7 5.8" fill="white" />
                        </svg>
                        <span className={"\x6ceading-[\x31]"}>Whatsapp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"fluid-block \x78l:\x6db-60"}>
        <div className={"\x63ontainer \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x70b-30 \x6dd:\x69tems-center"}>
          <div className={"\x70y-20 \x6dd:\x70y-0"}>
            <div className={"\x72elative \x61spect-[\x3369/\x3456] \x77-full \x6dax-w-[\x320em] \x32xl:\x6dax-w-[\x323em] \x6dx-auto \x6dd:\x2dleft-8 \x78l:\x6ceft-auto \x6db-30"}>
              <div className={"\x61bsolute \x77-full \x68-full"} />
              <div className={"\x61bsolute \x77-[\x323.\x3125em] \x68-[\x328.\x35em]"} />
              <div className={"\x61bsolute \x6ceft-[\x2d4.\x3125em] \x62ottom-0 \x77-[\x315em] \x68-[\x315.\x3125em]"} />
            </div>
          </div>
          <div>
            <div className={"\x6dax-w-[\x333em] \x6dx-auto \x6dd:\x6dl-0 wysiwyg \x6db-8"}>
              <p className={"\x74ext-body3"}>There are clear benefits to shopping on social media. More than a third of Gen Zs say that, because of social media, their personal shopping experience has become easier (39 per cent) and more convenient (38 per cent). Gen Zs are also more likely than millennials to say that, because of social media, their shopping experience has become more personalised, relevant and curated. But that’s not the full story.</p>
            </div>
            <div className={"\x6dt-12 \x6dax-w-[\x333em] \x6dx-auto \x6dd:\x6dl-0"}>
              <blockquote className={"\x6db-6"}>
                <p className={"\x74ext-body2"}>“The way technology has shifted these past few years has obviously impacted how I shop. Even just thinking about all the time I spend on Instagram; swiping through stories, there’s always marketing and ads that are opening my eyes.”</p>
              </blockquote>
              <div className={"\x66lex \x69tems-center"}>
                <div className={"\x73ize-16 \x6dr-4"}>
                  <img className={"\x77-full \x68-full \x6fbject-contain \x6fbject-center"} style={{ color: "transparent" }} alt="Akeem Muller" loading="lazy" width="64" height="64" decoding="async" src="/site-assets/8a442bf00cea6da0.png" />
                </div>
                <div className={"\x74ext-body3"}>
                  <a className={"\x6db-0 \x66ont-adobe \x66ont-semibold \x75nderline \x68over:\x6eo-underline !\x74ext-current"} href="https://www.instagram.com/akeemmjr/?hl=en" rel="noopener noreferrer" target="_blank">Akeem Muller</a>
                  <p className={"\x6db-0 \x66ont-normal"}>23, New York City </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSocialMediaHasMade() {
  return (
    <section className="fluid-block" id="article-2-1">
      <div className={"\x72elative \x78l:\x70y-50"}>
        <div className={"fluid-block \x72elative \x6dd:\x68-[\x3200vh] \x70y-40 \x6dd:\x70y-0"}>
          <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "flex", margin: "0px 9.65625px 0px 9.64062px", inset: "0px", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1502px", height: "2592px", padding: "0px 0px 1728px" } as CSSProperties}>
            <div className={"\x61spect-square \x6dd:\x61spect-auto \x6dd:\x68-[\x3100vh] \x6dd:\x74op-0 \x32xl:\x68-screen \x74ext-center \x70y-12 \x66lex \x69tems-center \x6austify-center \x63ontainer \x74op-0 \x72elative"} style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1501.7px", width: "1501.7px", maxHeight: "864px", height: "864px", padding: "50.0572px 66.7429px", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="531">
              <div className={"\x61bsolute \x77-full \x32xl:\x77-screen \x32xl:\x6dax-w-[\x390em] \x61spect-square \x68-auto \x6dy-auto \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x74op-1/\x32 \x2dtranslate-y-1/\x32"}>
                <div className={"\x61bsolute \x77-[\x35%] \x68-[\x325%] \x72ight-[\x38%] \x74op-[\x314%]"} />
                <div className={"\x61bsolute \x77-[\x35%] \x68-[\x320%] \x6ceft-[\x345%] \x74op-[\x32%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x314%] \x6ceft-[\x327.\x317%] \x74op-[\x317%]"} />
                <div className={"\x61bsolute \x77-[\x36%] \x68-[\x318%] \x72ight-[\x32%] \x74op-[\x343%]"} />
                <div className={"\x61bsolute \x77-[\x36%] \x68-[\x315%] \x72ight-[\x318%] \x74op-[\x354%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x310%] \x6ceft-[\x354.\x344%] \x74op-[\x316%]"} />
                <div className={"\x61bsolute \x77-[\x37%] \x68-[\x320%] \x6ceft-[\x355.\x344%] \x74op-[\x368%]"} />
                <div className={"\x61bsolute \x77-[\x310%] \x68-[\x334%] \x6ceft-[\x39%] \x74op-[\x32%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x39%] \x6ceft-[\x2d4%] \x74op-[\x345%]"} />
                <div className={"\x61bsolute \x77-[\x38%] \x68-[\x331%] \x6ceft-[\x312%] \x74op-[\x344%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x37%] \x6ceft-[\x332%] \x74op-[\x312%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x310%] \x72ight-[\x315%] \x74op-[\x322%]"} />
                <div className={"\x61bsolute \x77-[\x34%] \x68-[\x36%] \x6ceft-[\x335%] \x74op-[\x372%]"} />
                <div className={"\x61bsolute \x77-[\x35%] \x68-[\x310%] \x6ceft-[\x344%] \x74op-[\x380%]"} />
              </div>
              <svg className={"\x6dd:\x68idden \x77-full \x68-auto \x61bsolute \x69nset-0 \x6d-auto"} width="375" height="598" viewBox="0 0 375 598" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,92.4,26.4)">
                  <rect x="154" y="44" width="123" height="22" rx="11" fill="#4D9EFF" />
                  <path d="M170.577 55.08C170.577 56.354 170.311 57.236 169.653 57.978C168.953 58.776 168.001 59.182 166.965 59.182C166.167 59.182 165.005 58.888 164.235 57.992C163.493 57.124 163.311 56.256 163.311 55.08V48.64H164.907V55.08C164.907 55.78 164.949 56.48 165.383 57.026C165.775 57.586 166.419 57.782 166.951 57.782C167.511 57.782 168.169 57.586 168.561 56.998C168.939 56.452 168.981 55.808 168.981 55.08V48.64H170.577V55.08ZM177.243 56.76C177.243 58.216 176.137 59.224 174.569 59.224C173.435 59.224 172.077 58.636 171.867 56.942H173.295C173.435 57.838 174.149 58.048 174.569 58.048C175.311 58.048 175.815 57.572 175.815 56.9C175.815 56.06 175.143 55.808 173.981 55.43C173.001 55.108 172.049 54.618 172.035 53.4C172.035 52.07 173.127 51.132 174.541 51.132C175.577 51.132 176.795 51.706 176.991 53.19H175.577C175.451 52.7 175.143 52.308 174.527 52.308C173.813 52.308 173.463 52.812 173.463 53.288C173.463 53.946 174.107 54.226 174.821 54.436C175.941 54.758 177.243 55.136 177.243 56.76ZM186.01 55.612H179.444C179.528 57.096 180.83 57.992 182.048 57.992C183.126 57.992 183.812 57.432 184.232 56.774H185.716C185.128 58.16 183.728 59.21 182.048 59.21C179.836 59.21 178.016 57.46 178.016 55.192C178.016 53.008 179.738 51.132 182.02 51.132C184.316 51.132 186.038 52.938 186.038 55.248C186.038 55.402 186.024 55.5 186.01 55.612ZM184.61 54.548C184.456 53.358 183.392 52.35 182.034 52.35C180.662 52.35 179.612 53.344 179.458 54.548H184.61ZM201.084 56.06C200.412 57.866 198.48 59.182 196.31 59.182C193.23 59.182 190.878 56.774 190.878 53.82C190.878 50.936 193.132 48.458 196.282 48.458C199.026 48.458 200.678 50.376 201.056 51.608H199.362C198.802 50.726 197.64 49.858 196.282 49.858C194.056 49.858 192.46 51.734 192.46 53.82C192.46 55.976 194.14 57.782 196.282 57.782C197.836 57.782 198.872 56.732 199.362 56.06H201.084ZM210.232 55.164C210.232 57.208 208.678 59.21 206.172 59.21C203.666 59.21 202.112 57.222 202.112 55.192C202.112 53.064 203.736 51.146 206.158 51.146C208.678 51.146 210.232 53.134 210.232 55.164ZM208.818 55.164C208.818 53.54 207.544 52.462 206.172 52.462C204.786 52.462 203.526 53.554 203.526 55.192C203.526 56.732 204.73 57.894 206.172 57.894C207.586 57.894 208.818 56.788 208.818 55.164ZM219.322 59H217.95V57.74H217.922C217.432 58.566 216.466 59.21 215.108 59.21C212.714 59.21 211.146 57.376 211.146 55.164C211.146 52.854 212.854 51.132 215.08 51.132C216.41 51.132 217.418 51.804 217.866 52.518L217.894 52.532V48.332H219.322V59ZM217.992 55.164C217.992 53.722 216.9 52.448 215.29 52.448C213.694 52.448 212.574 53.652 212.574 55.164C212.574 56.634 213.624 57.894 215.29 57.894C216.956 57.894 217.992 56.55 217.992 55.164ZM228.582 55.612H222.016C222.1 57.096 223.402 57.992 224.62 57.992C225.698 57.992 226.384 57.432 226.804 56.774H228.288C227.7 58.16 226.3 59.21 224.62 59.21C222.408 59.21 220.588 57.46 220.588 55.192C220.588 53.008 222.31 51.132 224.592 51.132C226.888 51.132 228.61 52.938 228.61 55.248C228.61 55.402 228.596 55.5 228.582 55.612ZM227.182 54.548C227.028 53.358 225.964 52.35 224.606 52.35C223.234 52.35 222.184 53.344 222.03 54.548H227.182ZM240.645 55.528C240.645 57.306 239.259 59.196 236.935 59.196C235.367 59.196 233.687 58.258 233.281 56.284L234.877 56.256C235.171 57.222 236.011 57.782 236.893 57.782C238.097 57.782 239.049 56.76 239.049 55.57C239.049 54.338 238.139 53.33 236.907 53.33C236.193 53.33 235.465 53.582 234.765 54.534L233.743 54.268L234.681 48.64H239.819V49.998H235.913L235.465 52.476C235.787 52.28 236.277 52 237.187 52C239.371 52 240.645 53.82 240.645 55.528ZM248.695 53.806C248.695 57.586 246.959 59.182 245.013 59.182C243.123 59.182 241.289 57.6 241.289 53.82C241.289 50.012 243.137 48.458 245.013 48.458C246.833 48.458 248.695 49.97 248.695 53.806ZM247.113 53.806C247.113 51.412 246.357 49.858 244.999 49.858C243.725 49.858 242.885 51.3 242.885 53.806C242.885 56.368 243.725 57.782 244.999 57.782C246.357 57.782 247.113 56.228 247.113 53.806ZM260.371 53.82C260.371 56.816 257.977 59.182 254.911 59.182C251.817 59.182 249.479 56.746 249.479 53.89C249.479 50.796 251.873 48.458 254.911 48.458C257.963 48.458 260.371 50.824 260.371 53.82ZM258.775 53.834C258.775 51.776 257.207 49.858 254.925 49.858C252.699 49.858 251.061 51.664 251.061 53.82C251.061 55.976 252.713 57.782 254.939 57.782C257.193 57.782 258.775 55.892 258.775 53.834ZM264.9 52.49H263.388V59H261.96V52.49H260.91V51.356H261.96V50.516C261.96 48.892 262.982 48.248 264.508 48.248H264.9V49.382H264.564C263.794 49.382 263.388 49.676 263.388 50.572V51.356H264.9V52.49ZM268.602 52.49H267.09V59H265.662V52.49H264.612V51.356H265.662V50.516C265.662 48.892 266.684 48.248 268.21 48.248H268.602V49.382H268.266C267.496 49.382 267.09 49.676 267.09 50.572V51.356H268.602V52.49Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,183.6,138)">
                  <rect x="306" y="230" width="64" height="22" rx="11" fill="#4D9EFF" />
                  <path d="M327.212 235.64L323.838 246.196H323.362L320.73 238.986H320.674L318.014 246.196H317.538L314.178 235.64H315.83L317.986 242.584H318.042L320.464 235.528H320.94L323.348 242.598H323.404L325.574 235.64H327.212ZM329.293 237.432H327.865V235.794H329.293V237.432ZM329.293 246H327.865V238.356H329.293V246ZM335.892 243.76C335.892 245.216 334.786 246.224 333.218 246.224C332.084 246.224 330.726 245.636 330.516 243.942H331.944C332.084 244.838 332.798 245.048 333.218 245.048C333.96 245.048 334.464 244.572 334.464 243.9C334.464 243.06 333.792 242.808 332.63 242.43C331.65 242.108 330.698 241.618 330.684 240.4C330.684 239.07 331.776 238.132 333.19 238.132C334.226 238.132 335.444 238.706 335.64 240.19H334.226C334.1 239.7 333.792 239.308 333.176 239.308C332.462 239.308 332.112 239.812 332.112 240.288C332.112 240.946 332.756 241.226 333.47 241.436C334.59 241.758 335.892 242.136 335.892 243.76ZM344.099 246H342.671V241.87C342.671 241.114 342.489 240.414 342.055 239.98C341.663 239.616 341.145 239.462 340.627 239.462C339.087 239.462 338.555 240.638 338.555 241.73V246H337.127V235.332H338.555V239.35H338.583C338.975 238.608 339.899 238.132 340.949 238.132C341.803 238.132 342.629 238.398 343.203 238.986C343.861 239.644 344.099 240.47 344.099 241.8V246ZM347.22 246H345.792V235.486H347.22V246ZM350.362 237.432H348.934V235.794H350.362V237.432ZM350.362 246H348.934V238.356H350.362V246ZM356.961 243.76C356.961 245.216 355.855 246.224 354.287 246.224C353.153 246.224 351.795 245.636 351.585 243.942H353.013C353.153 244.838 353.867 245.048 354.287 245.048C355.029 245.048 355.533 244.572 355.533 243.9C355.533 243.06 354.861 242.808 353.699 242.43C352.719 242.108 351.767 241.618 351.753 240.4C351.753 239.07 352.845 238.132 354.259 238.132C355.295 238.132 356.513 238.706 356.709 240.19H355.295C355.169 239.7 354.861 239.308 354.245 239.308C353.531 239.308 353.181 239.812 353.181 240.288C353.181 240.946 353.825 241.226 354.539 241.436C355.659 241.758 356.961 242.136 356.961 243.76ZM361.794 239.49H360.268V246H358.854V239.49H357.426V238.356H358.84V235.64H360.268V238.356H361.794V239.49Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,33,99.6)">
                  <rect x="55" y="166" width="97" height="22" rx="11" fill="#4D9EFF" />
                  <path d="M73.3207 182H71.5847L70.4787 179.368H66.1387L65.0047 182H63.2967L68.2107 171.402H68.4347L73.3207 182ZM70.0027 178.108L68.3087 174.328L66.5867 178.108H70.0027ZM82.006 182H80.634V180.74H80.606C80.116 181.566 79.15 182.21 77.792 182.21C75.398 182.21 73.83 180.376 73.83 178.164C73.83 175.854 75.538 174.132 77.764 174.132C79.094 174.132 80.102 174.804 80.55 175.518L80.578 175.532V171.332H82.006V182ZM80.676 178.164C80.676 176.722 79.584 175.448 77.974 175.448C76.378 175.448 75.258 176.652 75.258 178.164C75.258 179.634 76.308 180.894 77.974 180.894C79.64 180.894 80.676 179.55 80.676 178.164ZM91.5183 182H90.1463V180.74H90.1183C89.6283 181.566 88.6623 182.21 87.3043 182.21C84.9103 182.21 83.3423 180.376 83.3423 178.164C83.3423 175.854 85.0503 174.132 87.2763 174.132C88.6063 174.132 89.6143 174.804 90.0623 175.518L90.0903 175.532V171.332H91.5183V182ZM90.1883 178.164C90.1883 176.722 89.0963 175.448 87.4863 175.448C85.8903 175.448 84.7703 176.652 84.7703 178.164C84.7703 179.634 85.8203 180.894 87.4863 180.894C89.1523 180.894 90.1883 179.55 90.1883 178.164ZM100.779 175.49H99.2529V182H97.8389V175.49H96.4109V174.356H97.8249V171.64H99.2529V174.356H100.779V175.49ZM109.24 178.164C109.24 180.208 107.686 182.21 105.18 182.21C102.674 182.21 101.12 180.222 101.12 178.192C101.12 176.064 102.744 174.146 105.166 174.146C107.686 174.146 109.24 176.134 109.24 178.164ZM107.826 178.164C107.826 176.54 106.552 175.462 105.18 175.462C103.794 175.462 102.534 176.554 102.534 178.192C102.534 179.732 103.738 180.894 105.18 180.894C106.594 180.894 107.826 179.788 107.826 178.164ZM124.336 179.06C123.664 180.866 121.732 182.182 119.562 182.182C116.482 182.182 114.13 179.774 114.13 176.82C114.13 173.936 116.384 171.458 119.534 171.458C122.278 171.458 123.93 173.376 124.308 174.608H122.614C122.054 173.726 120.892 172.858 119.534 172.858C117.308 172.858 115.712 174.734 115.712 176.82C115.712 178.976 117.392 180.782 119.534 180.782C121.088 180.782 122.124 179.732 122.614 179.06H124.336ZM133.568 182H132.154V180.74H132.126C131.538 181.776 130.39 182.224 129.326 182.224C126.89 182.224 125.364 180.32 125.364 178.164C125.364 175.896 127.044 174.132 129.326 174.132C130.614 174.132 131.664 174.79 132.112 175.616H132.14V174.426H133.568V182ZM132.168 178.178C132.168 176.736 131.104 175.448 129.48 175.448C127.884 175.448 126.792 176.68 126.792 178.192C126.792 179.452 127.688 180.908 129.494 180.908C131.16 180.908 132.168 179.536 132.168 178.178ZM139.104 175.63C138.922 175.588 138.754 175.546 138.474 175.546C137.508 175.546 136.696 176.316 136.696 177.814V182H135.282V174.356H136.626V175.406H136.668C136.962 174.664 137.592 174.132 138.614 174.132C138.796 174.132 138.978 174.16 139.104 174.188V175.63ZM143.675 175.49H142.149V182H140.735V175.49H139.307V174.356H140.721V171.64H142.149V174.356H143.675V175.49Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,98.4,277.2)">
                  <rect x="164" y="462" width="83" height="22" rx="11" fill="#4D9EFF" />
                  <path d="M178.467 478H173.105V467.64H174.687V476.586H178.467V478ZM180.733 469.432H179.305V467.794H180.733V469.432ZM180.733 478H179.305V470.356H180.733V478ZM189.419 478H187.991V473.856C187.991 473.058 187.809 472.372 187.375 471.966C186.983 471.602 186.465 471.462 185.961 471.462C184.393 471.462 183.875 472.624 183.875 473.758V478H182.447V470.426H183.805V471.392H183.833C184.141 470.804 184.939 470.132 186.255 470.132C187.095 470.132 187.907 470.412 188.453 470.902C188.999 471.392 189.419 472.176 189.419 473.576V478ZM197.495 478H195.815L192.623 474.29H192.595V478H191.167V467.332H192.595V473.562H192.623L195.689 470.356H197.425L193.939 473.898L197.495 478ZM203.798 469.432H202.37V467.794H203.798V469.432ZM203.798 478H202.37V470.356H203.798V478ZM212.484 478H211.056V473.856C211.056 473.058 210.874 472.372 210.44 471.966C210.048 471.602 209.53 471.462 209.026 471.462C207.458 471.462 206.94 472.624 206.94 473.758V478H205.512V470.426H206.87V471.392H206.898C207.206 470.804 208.004 470.132 209.32 470.132C210.16 470.132 210.972 470.412 211.518 470.902C212.064 471.392 212.484 472.176 212.484 473.576V478ZM226.272 474.15C226.272 476.572 224.522 478.224 222.31 478.224C221.162 478.224 220.084 477.692 219.538 476.754H219.51V478H218.124V467.332H219.552V471.518L219.594 471.504C220.336 470.482 221.484 470.132 222.338 470.132C224.424 470.132 226.272 471.7 226.272 474.15ZM224.844 474.192C224.844 472.624 223.682 471.448 222.17 471.448C220.574 471.448 219.482 472.708 219.482 474.178C219.482 475.676 220.588 476.908 222.128 476.908C223.836 476.908 224.844 475.578 224.844 474.192ZM228.982 469.432H227.554V467.794H228.982V469.432ZM228.982 478H227.554V470.356H228.982V478ZM238.424 474.164C238.424 476.208 236.87 478.21 234.364 478.21C231.858 478.21 230.304 476.222 230.304 474.192C230.304 472.064 231.928 470.146 234.35 470.146C236.87 470.146 238.424 472.134 238.424 474.164ZM237.01 474.164C237.01 472.54 235.736 471.462 234.364 471.462C232.978 471.462 231.718 472.554 231.718 474.192C231.718 475.732 232.922 476.894 234.364 476.894C235.778 476.894 237.01 475.788 237.01 474.164Z" fill="white" />
                </g>
              </svg>
              <svg className={"\x61bsolute \x77-full \x68-auto \x69nset-0 \x68idden \x6dd:\x62lock \x6d-auto"} width="1440" height="802" viewBox="0 0 1440 802" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,716.98198,291.07198)">
                  <rect x="1194.97" y="485.218" width="94.0175" height="36.8737" rx="18.4369" transform="rotate(-0.059732 1194.97 485.218)" fill="#4D9EFF" />
                  <path d="M1228.13 497.885L1223.79 511.457H1223.18L1219.79 502.187H1219.72L1216.3 511.457H1215.69L1211.37 497.885H1213.49L1216.26 506.813H1216.34L1219.45 497.741H1220.06L1223.16 506.831H1223.23L1226.02 497.885H1228.13ZM1230.8 500.189H1228.97V498.083H1230.8V500.189ZM1230.8 511.205H1228.97V501.377H1230.8V511.205ZM1239.29 508.325C1239.29 510.197 1237.86 511.493 1235.85 511.493C1234.39 511.493 1232.64 510.737 1232.37 508.559H1234.21C1234.39 509.711 1235.31 509.981 1235.85 509.981C1236.8 509.981 1237.45 509.369 1237.45 508.505C1237.45 507.425 1236.59 507.101 1235.09 506.615C1233.83 506.201 1232.61 505.571 1232.59 504.005C1232.59 502.295 1233.99 501.089 1235.81 501.089C1237.14 501.089 1238.71 501.827 1238.96 503.735H1237.14C1236.98 503.105 1236.59 502.601 1235.79 502.601C1234.88 502.601 1234.43 503.249 1234.43 503.861C1234.43 504.707 1235.25 505.067 1236.17 505.337C1237.61 505.751 1239.29 506.237 1239.29 508.325ZM1249.84 511.205H1248V505.895C1248 504.923 1247.77 504.023 1247.21 503.465C1246.71 502.997 1246.04 502.799 1245.37 502.799C1243.39 502.799 1242.71 504.311 1242.71 505.715V511.205H1240.87V497.489H1242.71V502.655H1242.75C1243.25 501.701 1244.44 501.089 1245.79 501.089C1246.89 501.089 1247.95 501.431 1248.69 502.187C1249.53 503.033 1249.84 504.095 1249.84 505.805V511.205ZM1253.85 511.205H1252.01V497.687H1253.85V511.205ZM1257.89 500.189H1256.05V498.083H1257.89V500.189ZM1257.89 511.205H1256.05V501.377H1257.89V511.205ZM1266.37 508.325C1266.37 510.197 1264.95 511.493 1262.94 511.493C1261.48 511.493 1259.73 510.737 1259.46 508.559H1261.3C1261.48 509.711 1262.4 509.981 1262.94 509.981C1263.89 509.981 1264.54 509.369 1264.54 508.505C1264.54 507.425 1263.67 507.101 1262.18 506.615C1260.92 506.201 1259.7 505.571 1259.68 504.005C1259.68 502.295 1261.08 501.089 1262.9 501.089C1264.23 501.089 1265.8 501.827 1266.05 503.735H1264.23C1264.07 503.105 1263.67 502.601 1262.88 502.601C1261.96 502.601 1261.51 503.249 1261.51 503.861C1261.51 504.707 1262.34 505.067 1263.26 505.337C1264.7 505.751 1266.37 506.237 1266.37 508.325ZM1272.59 502.835H1270.63V511.205H1268.81V502.835H1266.97V501.377H1268.79V497.885H1270.63V501.377H1272.59V502.835Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,485.59438,38.99985)">
                  <rect x="809.324" y="65.1721" width="165.322" height="36.9481" rx="18.474" transform="rotate(-0.059732 809.324 65.1721)" fill="#4D9EFF" />
                  <path d="M834.246 86.1194C834.246 87.7574 833.904 88.8914 833.058 89.8454C832.158 90.8714 830.934 91.3934 829.602 91.3934C828.576 91.3934 827.082 91.0154 826.092 89.8634C825.138 88.7474 824.904 87.6314 824.904 86.1194V77.8394H826.956V86.1194C826.956 87.0194 827.01 87.9194 827.568 88.6214C828.072 89.3414 828.9 89.5934 829.584 89.5934C830.304 89.5934 831.15 89.3414 831.654 88.5854C832.14 87.8834 832.194 87.0554 832.194 86.1194V77.8394H834.246V86.1194ZM842.816 88.2794C842.816 90.1514 841.394 91.4474 839.378 91.4474C837.92 91.4474 836.174 90.6914 835.904 88.5134H837.74C837.92 89.6654 838.838 89.9354 839.378 89.9354C840.332 89.9354 840.98 89.3234 840.98 88.4594C840.98 87.3794 840.116 87.0554 838.622 86.5694C837.362 86.1554 836.138 85.5254 836.12 83.9594C836.12 82.2494 837.524 81.0434 839.342 81.0434C840.674 81.0434 842.24 81.7814 842.492 83.6894H840.674C840.512 83.0594 840.116 82.5554 839.324 82.5554C838.406 82.5554 837.956 83.2034 837.956 83.8154C837.956 84.6614 838.784 85.0214 839.702 85.2914C841.142 85.7054 842.816 86.1914 842.816 88.2794ZM854.089 86.8034H845.647C845.755 88.7114 847.429 89.8634 848.995 89.8634C850.381 89.8634 851.263 89.1434 851.803 88.2974H853.711C852.955 90.0794 851.155 91.4294 848.995 91.4294C846.151 91.4294 843.811 89.1794 843.811 86.2634C843.811 83.4554 846.025 81.0434 848.959 81.0434C851.911 81.0434 854.125 83.3654 854.125 86.3354C854.125 86.5334 854.107 86.6594 854.089 86.8034ZM852.289 85.4354C852.091 83.9054 850.723 82.6094 848.977 82.6094C847.213 82.6094 845.863 83.8874 845.665 85.4354H852.289ZM873.469 87.3794C872.605 89.7014 870.121 91.3934 867.331 91.3934C863.371 91.3934 860.347 88.2974 860.347 84.4994C860.347 80.7914 863.245 77.6054 867.295 77.6054C870.823 77.6054 872.947 80.0714 873.433 81.6554H871.255C870.535 80.5214 869.041 79.4054 867.295 79.4054C864.433 79.4054 862.381 81.8174 862.381 84.4994C862.381 87.2714 864.541 89.5934 867.295 89.5934C869.293 89.5934 870.625 88.2434 871.255 87.3794H873.469ZM885.231 86.2274C885.231 88.8554 883.233 91.4294 880.011 91.4294C876.789 91.4294 874.791 88.8734 874.791 86.2634C874.791 83.5274 876.879 81.0614 879.993 81.0614C883.233 81.0614 885.231 83.6174 885.231 86.2274ZM883.413 86.2274C883.413 84.1394 881.775 82.7534 880.011 82.7534C878.229 82.7534 876.609 84.1574 876.609 86.2634C876.609 88.2434 878.157 89.7374 880.011 89.7374C881.829 89.7374 883.413 88.3154 883.413 86.2274ZM896.917 91.1594H895.153V89.5394H895.117C894.487 90.6014 893.245 91.4294 891.499 91.4294C888.421 91.4294 886.405 89.0714 886.405 86.2274C886.405 83.2574 888.601 81.0434 891.463 81.0434C893.173 81.0434 894.469 81.9074 895.045 82.8254L895.081 82.8434V77.4434H896.917V91.1594ZM895.207 86.2274C895.207 84.3734 893.803 82.7354 891.733 82.7354C889.681 82.7354 888.241 84.2834 888.241 86.2274C888.241 88.1174 889.591 89.7374 891.733 89.7374C893.875 89.7374 895.207 88.0094 895.207 86.2274ZM908.824 86.8034H900.382C900.49 88.7114 902.164 89.8634 903.73 89.8634C905.116 89.8634 905.998 89.1434 906.538 88.2974H908.446C907.69 90.0794 905.89 91.4294 903.73 91.4294C900.886 91.4294 898.546 89.1794 898.546 86.2634C898.546 83.4554 900.76 81.0434 903.694 81.0434C906.646 81.0434 908.86 83.3654 908.86 86.3354C908.86 86.5334 908.842 86.6594 908.824 86.8034ZM907.024 85.4354C906.826 83.9054 905.458 82.6094 903.712 82.6094C901.948 82.6094 900.598 83.8874 900.4 85.4354H907.024ZM924.334 86.6954C924.334 88.9814 922.552 91.4114 919.564 91.4114C917.548 91.4114 915.388 90.2054 914.866 87.6674L916.918 87.6314C917.296 88.8734 918.376 89.5934 919.51 89.5934C921.058 89.5934 922.282 88.2794 922.282 86.7494C922.282 85.1654 921.112 83.8694 919.528 83.8694C918.61 83.8694 917.674 84.1934 916.774 85.4174L915.46 85.0754L916.666 77.8394H923.272V79.5854H918.25L917.674 82.7714C918.088 82.5194 918.718 82.1594 919.888 82.1594C922.696 82.1594 924.334 84.4994 924.334 86.6954ZM934.684 84.4814C934.684 89.3414 932.452 91.3934 929.95 91.3934C927.52 91.3934 925.162 89.3594 925.162 84.4994C925.162 79.6034 927.538 77.6054 929.95 77.6054C932.29 77.6054 934.684 79.5494 934.684 84.4814ZM932.65 84.4814C932.65 81.4034 931.678 79.4054 929.932 79.4054C928.294 79.4054 927.214 81.2594 927.214 84.4814C927.214 87.7754 928.294 89.5934 929.932 89.5934C931.678 89.5934 932.65 87.5954 932.65 84.4814ZM949.696 84.4994C949.696 88.3514 946.618 91.3934 942.676 91.3934C938.698 91.3934 935.692 88.2614 935.692 84.5894C935.692 80.6114 938.77 77.6054 942.676 77.6054C946.6 77.6054 949.696 80.6474 949.696 84.4994ZM947.644 84.5174C947.644 81.8714 945.628 79.4054 942.694 79.4054C939.832 79.4054 937.726 81.7274 937.726 84.4994C937.726 87.2714 939.85 89.5934 942.712 89.5934C945.61 89.5934 947.644 87.1634 947.644 84.5174ZM955.518 82.7894H953.574V91.1594H951.738V82.7894H950.388V81.3314H951.738V80.2514C951.738 78.1634 953.052 77.3354 955.014 77.3354H955.518V78.7934H955.086C954.096 78.7934 953.574 79.1714 953.574 80.3234V81.3314H955.518V82.7894ZM960.277 82.7894H958.333V91.1594H956.497V82.7894H955.147V81.3314H956.497V80.2514C956.497 78.1634 957.811 77.3354 959.773 77.3354H960.277V78.7934H959.845C958.855 78.7934 958.333 79.1714 958.333 80.3234V81.3314H960.277V82.7894Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,18.30234,162.24153)">
                  <rect x="30.5039" y="270.536" width="128.02" height="39.1084" rx="19.5542" transform="rotate(-0.059732 30.5039 270.536)" fill="#4D9EFF" />
                  <path d="M55.7332 296.524H53.5012L52.0792 293.14H46.4992L45.0412 296.524H42.8452L49.1632 282.898H49.4512L55.7332 296.524ZM51.4672 291.52L49.2892 286.66L47.0752 291.52H51.4672ZM66.9 296.524H65.136V294.904H65.1C64.47 295.966 63.228 296.794 61.482 296.794C58.404 296.794 56.388 294.436 56.388 291.592C56.388 288.622 58.584 286.408 61.446 286.408C63.156 286.408 64.452 287.272 65.028 288.19L65.064 288.208V282.808H66.9V296.524ZM65.19 291.592C65.19 289.738 63.786 288.1 61.716 288.1C59.664 288.1 58.224 289.648 58.224 291.592C58.224 293.482 59.574 295.102 61.716 295.102C63.858 295.102 65.19 293.374 65.19 291.592ZM79.1301 296.524H77.3661V294.904H77.3301C76.7001 295.966 75.4581 296.794 73.7121 296.794C70.6341 296.794 68.6181 294.436 68.6181 291.592C68.6181 288.622 70.8141 286.408 73.6761 286.408C75.3861 286.408 76.6821 287.272 77.2581 288.19L77.2941 288.208V282.808H79.1301V296.524ZM77.4201 291.592C77.4201 289.738 76.0161 288.1 73.9461 288.1C71.8941 288.1 70.4541 289.648 70.4541 291.592C70.4541 293.482 71.8041 295.102 73.9461 295.102C76.0881 295.102 77.4201 293.374 77.4201 291.592ZM91.0365 288.154H89.0745V296.524H87.2565V288.154H85.4205V286.696H87.2385V283.204H89.0745V286.696H91.0365V288.154ZM101.915 291.592C101.915 294.22 99.917 296.794 96.695 296.794C93.473 296.794 91.475 294.238 91.475 291.628C91.475 288.892 93.563 286.426 96.677 286.426C99.917 286.426 101.915 288.982 101.915 291.592ZM100.097 291.592C100.097 289.504 98.459 288.118 96.695 288.118C94.913 288.118 93.293 289.522 93.293 291.628C93.293 293.608 94.841 295.102 96.695 295.102C98.513 295.102 100.097 293.68 100.097 291.592ZM121.324 292.744C120.46 295.066 117.976 296.758 115.186 296.758C111.226 296.758 108.202 293.662 108.202 289.864C108.202 286.156 111.1 282.97 115.15 282.97C118.678 282.97 120.802 285.436 121.288 287.02H119.11C118.39 285.886 116.896 284.77 115.15 284.77C112.288 284.77 110.236 287.182 110.236 289.864C110.236 292.636 112.396 294.958 115.15 294.958C117.148 294.958 118.48 293.608 119.11 292.744H121.324ZM133.194 296.524H131.376V294.904H131.34C130.584 296.236 129.108 296.812 127.74 296.812C124.608 296.812 122.646 294.364 122.646 291.592C122.646 288.676 124.806 286.408 127.74 286.408C129.396 286.408 130.746 287.254 131.322 288.316H131.358V286.786H133.194V296.524ZM131.394 291.61C131.394 289.756 130.026 288.1 127.938 288.1C125.886 288.1 124.482 289.684 124.482 291.628C124.482 293.248 125.634 295.12 127.956 295.12C130.098 295.12 131.394 293.356 131.394 291.61ZM140.312 288.334C140.078 288.28 139.862 288.226 139.502 288.226C138.26 288.226 137.216 289.216 137.216 291.142V296.524H135.398V286.696H137.126V288.046H137.18C137.558 287.092 138.368 286.408 139.682 286.408C139.916 286.408 140.15 286.444 140.312 286.48V288.334ZM146.189 288.154H144.227V296.524H142.409V288.154H140.573V286.696H142.391V283.204H144.227V286.696H146.189V288.154Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,183.71039,306.12865)">
                  <rect x="306.184" y="510.337" width="117.588" height="36.8983" rx="18.4492" transform="rotate(-0.059732 306.184 510.337)" fill="#4D9EFF" />
                  <path d="M330.239 536.324H323.345V523.004H325.379V534.506H330.239V536.324ZM333.153 525.308H331.317V523.202H333.153V525.308ZM333.153 536.324H331.317V526.496H333.153V536.324ZM344.32 536.324H342.484V530.996C342.484 529.97 342.25 529.088 341.692 528.566C341.188 528.098 340.522 527.918 339.874 527.918C337.858 527.918 337.192 529.412 337.192 530.87V536.324H335.356V526.586H337.102V527.828H337.138C337.534 527.072 338.56 526.208 340.252 526.208C341.332 526.208 342.376 526.568 343.078 527.198C343.78 527.828 344.32 528.836 344.32 530.636V536.324ZM354.704 536.324H352.544L348.44 531.554H348.404V536.324H346.568V522.608H348.404V530.618H348.44L352.382 526.496H354.614L350.132 531.05L354.704 536.324ZM362.808 525.308H360.972V523.202H362.808V525.308ZM362.808 536.324H360.972V526.496H362.808V536.324ZM373.975 536.324H372.139V530.996C372.139 529.97 371.905 529.088 371.347 528.566C370.843 528.098 370.177 527.918 369.529 527.918C367.513 527.918 366.847 529.412 366.847 530.87V536.324H365.011V526.586H366.757V527.828H366.793C367.189 527.072 368.215 526.208 369.907 526.208C370.987 526.208 372.031 526.568 372.733 527.198C373.435 527.828 373.975 528.836 373.975 530.636V536.324ZM391.704 531.374C391.704 534.488 389.454 536.612 386.61 536.612C385.134 536.612 383.748 535.928 383.046 534.722H383.01V536.324H381.228V522.608H383.064V527.99L383.118 527.972C384.072 526.658 385.548 526.208 386.646 526.208C389.328 526.208 391.704 528.224 391.704 531.374ZM389.868 531.428C389.868 529.412 388.374 527.9 386.43 527.9C384.378 527.9 382.974 529.52 382.974 531.41C382.974 533.336 384.396 534.92 386.376 534.92C388.572 534.92 389.868 533.21 389.868 531.428ZM395.188 525.308H393.352V523.202H395.188V525.308ZM395.188 536.324H393.352V526.496H395.188V536.324ZM407.327 531.392C407.327 534.02 405.329 536.594 402.107 536.594C398.885 536.594 396.887 534.038 396.887 531.428C396.887 528.692 398.975 526.226 402.089 526.226C405.329 526.226 407.327 528.782 407.327 531.392ZM405.509 531.392C405.509 529.304 403.871 527.918 402.107 527.918C400.325 527.918 398.705 529.322 398.705 531.428C398.705 533.408 400.253 534.902 402.107 534.902C403.925 534.902 405.509 533.48 405.509 531.392Z" fill="white" />
                </g>
                <g style={{ translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} transform="matrix(0.4,0,0,0.4,478.61938,426.80153)">
                  <rect x="797.699" y="711.486" width="144.02" height="39.1251" rx="19.5625" transform="rotate(-0.059732 797.699 711.486)" fill="#4D9EFF" />
                  <path d="M819.303 733.783C819.303 735.817 817.827 737.707 815.055 737.707C812.409 737.707 810.915 736.267 810.699 733.819H812.769C812.931 735.385 814.119 735.979 815.019 735.979C816.225 735.979 817.269 735.025 817.269 733.801C817.269 732.163 815.865 731.767 814.335 731.227C813.255 730.885 810.969 730.165 810.951 727.627C810.951 725.305 812.967 723.919 815.091 723.919C816.297 723.919 817.485 724.369 818.223 725.251C818.817 725.935 818.961 726.655 819.033 727.357H816.999C816.891 726.565 816.351 725.665 815.019 725.665C813.867 725.665 812.985 726.493 812.985 727.555C812.985 728.941 814.029 729.265 816.099 730.021C818.295 730.813 819.303 732.163 819.303 733.783ZM830.879 737.473H829.061V735.853H829.025C828.269 737.185 826.793 737.761 825.425 737.761C822.293 737.761 820.331 735.313 820.331 732.541C820.331 729.625 822.491 727.357 825.425 727.357C827.081 727.357 828.431 728.203 829.007 729.265H829.043V727.735H830.879V737.473ZM829.079 732.559C829.079 730.705 827.711 729.049 825.623 729.049C823.571 729.049 822.167 730.633 822.167 732.577C822.167 734.197 823.319 736.069 825.641 736.069C827.783 736.069 829.079 734.305 829.079 732.559ZM841.777 727.645L837.061 737.761H836.773L832.075 727.645H834.073L836.935 734.233L839.761 727.645H841.777ZM852.29 733.117H843.848C843.956 735.025 845.63 736.177 847.196 736.177C848.582 736.177 849.464 735.457 850.004 734.611H851.912C851.156 736.393 849.356 737.743 847.196 737.743C844.352 737.743 842.012 735.493 842.012 732.577C842.012 729.769 844.226 727.357 847.16 727.357C850.112 727.357 852.326 729.679 852.326 732.649C852.326 732.847 852.308 732.973 852.29 733.117ZM850.49 731.749C850.292 730.219 848.924 728.923 847.178 728.923C845.414 728.923 844.064 730.201 843.866 731.749H850.49ZM863.12 729.103H861.176V737.473H859.34V729.103H857.99V727.645H859.34V726.565C859.34 724.477 860.654 723.649 862.616 723.649H863.12V725.107H862.688C861.698 725.107 861.176 725.485 861.176 726.637V727.645H863.12V729.103ZM873.904 732.541C873.904 735.169 871.906 737.743 868.684 737.743C865.462 737.743 863.464 735.187 863.464 732.577C863.464 729.841 865.552 727.375 868.666 727.375C871.906 727.375 873.904 729.931 873.904 732.541ZM872.086 732.541C872.086 730.453 870.448 729.067 868.684 729.067C866.902 729.067 865.282 730.471 865.282 732.577C865.282 734.557 866.83 736.051 868.684 736.051C870.502 736.051 872.086 734.629 872.086 732.541ZM880.515 729.283C880.281 729.229 880.065 729.175 879.705 729.175C878.463 729.175 877.419 730.165 877.419 732.091V737.473H875.601V727.645H877.329V728.995H877.383C877.761 728.041 878.571 727.357 879.885 727.357C880.119 727.357 880.353 727.393 880.515 727.429V729.283ZM893.916 737.473H887.022V724.153H889.056V735.655H893.916V737.473ZM905.039 737.473H903.221V735.853H903.185C902.429 737.185 900.953 737.761 899.585 737.761C896.453 737.761 894.491 735.313 894.491 732.541C894.491 729.625 896.651 727.357 899.585 727.357C901.241 727.357 902.591 728.203 903.167 729.265H903.203V727.735H905.039V737.473ZM903.239 732.559C903.239 730.705 901.871 729.049 899.783 729.049C897.731 729.049 896.327 730.633 896.327 732.577C896.327 734.197 897.479 736.069 899.801 736.069C901.943 736.069 903.239 734.305 903.239 732.559ZM911.85 729.103H909.888V737.473H908.07V729.103H906.234V727.645H908.052V724.153H909.888V727.645H911.85V729.103ZM922.459 733.117H914.017C914.125 735.025 915.799 736.177 917.365 736.177C918.751 736.177 919.633 735.457 920.173 734.611H922.081C921.325 736.393 919.525 737.743 917.365 737.743C914.521 737.743 912.181 735.493 912.181 732.577C912.181 729.769 914.395 727.357 917.329 727.357C920.281 727.357 922.495 729.679 922.495 732.649C922.495 732.847 922.477 732.973 922.459 733.117ZM920.659 731.749C920.461 730.219 919.093 728.923 917.347 728.923C915.583 728.923 914.233 730.201 914.035 731.749H920.659ZM929.04 729.283C928.806 729.229 928.59 729.175 928.23 729.175C926.988 729.175 925.944 730.165 925.944 732.091V737.473H924.126V727.645H925.854V728.995H925.908C926.286 728.041 927.096 727.357 928.41 727.357C928.644 727.357 928.878 727.393 929.04 727.429V729.283Z" fill="white" />
                </g>
              </svg>
              <div className={"\x72elative \x77-full \x70x-6"}>
                <h2 className={"\x73r-only"}>Social media has made shopping mindless</h2>
                <div className={"\x6db-4 \x6eot-italic"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="550">
                  <span className={"\x62lock \x66ont-normal \x75ppercase h3 \x6db-[\x30.\x3125em]"} aria-label="Social media">
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0132deg) scale(1, 0.9967)" }} aria-hidden="true" data-site-import-responsive="553">S</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0179deg) scale(1, 0.9955)" }} aria-hidden="true" data-site-import-responsive="554">o</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.024deg) scale(1, 0.994)" }} aria-hidden="true" data-site-import-responsive="555">c</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0319deg) scale(1, 0.992)" }} aria-hidden="true" data-site-import-responsive="556">i</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="557">a</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0548deg) scale(1, 0.9863)" }} aria-hidden="true" data-site-import-responsive="558">l</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="560">m</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.091deg) scale(1, 0.9772)" }} aria-hidden="true" data-site-import-responsive="561">e</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="562">d</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1464deg) scale(1, 0.9634)" }} aria-hidden="true" data-site-import-responsive="563">i</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="564">a</div>
                    </div>
                  </span>
                  <span className={"\x66ont-semibold \x62lock h5-large \x6db-0 \x6cowercase \x72elative \x66ont-vogue \x6ceading-none"} aria-label="has made shopping">
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0037deg) scale(1, 0.9991)" }} aria-hidden="true" data-site-import-responsive="567">h</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0051deg) scale(1, 0.9987)" }} aria-hidden="true" data-site-import-responsive="568">a</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0071deg) scale(1, 0.9982)" }} aria-hidden="true" data-site-import-responsive="569">s</div>
                    </div>
                    <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0097deg) scale(1, 0.9976)" }} aria-hidden="true" data-site-import-responsive="571">m</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0132deg) scale(1, 0.9967)" }} aria-hidden="true" data-site-import-responsive="572">a</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0179deg) scale(1, 0.9955)" }} aria-hidden="true" data-site-import-responsive="573">d</div>
                      <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.024deg) scale(1, 0.994)" }} aria-hidden="true" data-site-import-responsive="574">e</div>
                    </div>
                    <span className={"\x61nimate-bg \x61nimate-bg--pink \x69nline-block \x61lign-bottom"}>
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0319deg) scale(1, 0.992)" }} aria-hidden="true" data-site-import-responsive="577">s</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="578">h</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0548deg) scale(1, 0.9863)" }} aria-hidden="true" data-site-import-responsive="579">o</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="580">p</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.091deg) scale(1, 0.9772)" }} aria-hidden="true" data-site-import-responsive="581">p</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="582">i</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1464deg) scale(1, 0.9634)" }} aria-hidden="true" data-site-import-responsive="583">n</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="584">g</div>
                      </div>
                    </span>
                  </span>
                  <span className={"\x66ont-vogue \x66ont-semibold \x62lock h1-large \x6db-0 \x72elative \x2dtracking-wider \x6ceading-none"} aria-label="mindless">
                    <span className={"\x61nimate-bg \x61nimate-bg--green \x69nline-block \x61lign-bottom"}>
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0319deg) scale(1, 0.992)" }} aria-hidden="true" data-site-import-responsive="588">m</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.042deg) scale(1, 0.9895)" }} aria-hidden="true" data-site-import-responsive="589">i</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0548deg) scale(1, 0.9863)" }} aria-hidden="true" data-site-import-responsive="590">n</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.0709deg) scale(1, 0.9823)" }} aria-hidden="true" data-site-import-responsive="591">d</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.091deg) scale(1, 0.9772)" }} aria-hidden="true" data-site-import-responsive="592">l</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1159deg) scale(1, 0.971)" }} aria-hidden="true" data-site-import-responsive="593">e</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1464deg) scale(1, 0.9634)" }} aria-hidden="true" data-site-import-responsive="594">s</div>
                        <div className="char" style={{ transform: "translate3d(0px, 0px, 0px) rotate(0.1835deg) scale(1, 0.9541)" }} aria-hidden="true" data-site-import-responsive="595">s</div>
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x63ontainer \x72elative \x70t-10 \x6dd:\x70t-20 \x78l:\x70t-40 \x32xl:\x70t-[\x320em] \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6"}>
            <div className={"\x72elative"}>
              <div className={"\x61bsolute \x68idden \x6dd:\x62lock \x77-[\x3230px] \x68-[\x3460px] \x6ceft-0 \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32"} />
            </div>
            <div className={"\x6dax-w-[\x333em] wysiwyg \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body2"}>Shopping, once a leisure activity, has become an infinite pastime that <mark className="mark-blue">no longer excites or delights.</mark></p>
              <p className={"\x74ext-body3"}>Social shopping, e‑commerce and traditional retail don’t create the thrill of the chase that older consumers used to feel when digging around in the mall.</p>
              <p className={"\x74ext-body3"}>Twenty‑seven per cent of Gen Zs say that, because of social media, their personal shopping experience has become <mark className="mark-green">more “mindless”</mark> (compared with 18 per cent of millennials). Gen Zs are twice more likely than millennials to feel that, because of social media, their personal shopping experience has become <mark className="mark-pink">“less of an event”</mark> (23 per cent of Gen Zs vs 10 per cent of millennials).</p>
              <p className={"\x74ext-body3"}>It chimes with American economics author Kyla Scanlon’s theory on friction, in which she explains that we’ve created a frictionless digital world whereby, at the click of a button, you can Doordash food, buy clothes and even date. “To date outside, go to the grocery store, or shop in‑person, there’s much more friction, you have to talk to people,” she says. “We’ve really made the digital world a non‑stop scroll. And so it does create that mindless sensation for people, whereas the physical world is becoming more and more complex because we’ve allocated more resources and invested in the digital versus the physical.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"\x70y-15 \x63ontainer \x72elative \x78l:\x66lex \x78l:\x66lex-col"}>
        <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "flex", margin: "0px", inset: "83.4286px auto auto", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1368px", height: "1728px", padding: "0px 0px 864px" } as CSSProperties}>
          <div className={"\x66lex \x66lex-col \x66lex-grow \x73ticky \x74op-0 \x6dd:\x74op-20 \x78l:\x68-screen"} style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1368.23px", width: "1368.23px", maxHeight: "864px", height: "864px", padding: "0px", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="610">
            <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x6db-8 \x72elative \x7a-5"}>
              <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                <div className={"\x74ext-body1"}>Because of <mark className="mark-pink">social media</mark>, my personal shopping experience has become more...</div>
              </div>
              <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
            </div>
            <div className={"\x72elative \x66lex-grow \x66lex \x69tems-center \x6dd:\x6dy-[\x318vh] \x78l:\x6dy-0 \x32xl:\x2dtop-20"}>
              <span className={"\x77-[\x3180vw] \x68-[\x3150%] radial-gradient-blue-light \x72ounded-full \x61bsolute \x6ceft-[\x2d40vw] \x2dtop-[\x325%] \x6fpacity-80"} />
              <div className={"\x66lex \x66lex-col \x6dd:\x66lex-row \x67ap-y-8 \x67ap-x-16 chart-parent \x77-full \x6dd:\x77-auto \x6dd:\x70y-16"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.78", "--value-millennials": "0.74", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="620">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Easy" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/7a250bf982771f9f.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Easy</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.76", "--value-millennials": "0.64", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="643">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Convenient" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/f1cf9727a7cd75ad.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Convenient</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.6", "--value-millennials": "0.52", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="666">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Entertaining" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/fb4f99cada096213.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Entertaining</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.6", "--value-millennials": "0.42", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="689">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Personalised and relevant to me" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/4e3082a2d506fddc.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Personalised and relevant to me</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.54", "--value-millennials": "0.36", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="712">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Mindless" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/ae64cb6767cb7a8f.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Mindless</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.46", "--value-millennials": "0.36", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="735">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Passive" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/7193d59f4eba979b.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Passive</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.46", "--value-millennials": "0.2", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="758">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Less of an event" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/8a03ffaa27cffd15.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Less of an event</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.46", "--value-millennials": "0.32", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="781">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Less social" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/e34fe185ff38306e.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Less social</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.46", "--value-millennials": "0.28", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="804">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Curated" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/af45c2ef07f5f895.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Curated</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.44", "--value-millennials": "0.3", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="827">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Like everyone else" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/3ee0afb66119428f.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Like everyone else</div>
                </div>
                <div className={"\x66lex-shrink-0 style_chart__item__bzHlD"} style={{ "--value-genz": "0.42", "--value-millennials": "0.32", "--progress": "0.982316" } as CSSProperties} data-site-import-responsive="850">
                  <div className={"\x77-full \x66lex \x69tems-end \x6austify-between \x6db-2"}>
                    <div className={"\x74ext-left"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Gen Zs</p>
                    </div>
                    <div className={"\x74ext-right"}>
                      <span className={"h5 \x6db-0 \x62lock"}>0%</span>
                      <p className={"\x6db-0 \x69talic \x66ont-adobe \x74ext-sm \x75ppercase"}>Millennials</p>
                    </div>
                  </div>
                  <div className={"\x72elative"}>
                    <svg className={"\x68-auto \x77-full \x62lock \x6dd:\x68idden"} width="343" height="40" viewBox="0 0 343 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="343" height="40" fill="white" />
                      <rect className="style_barMobileLeft__WFWqa" opacity="0.6" width="172" height="40" fill="url(#pattern0_2713_31369)" />
                      <rect className="style_barMobileRight__eXCzD" x="172" width="171" height="40" fill="url(#paint0_linear_2713_31369)" />
                      <defs>
                        <linearGradient id="paint0_linear_2713_31369" x1="314.506" y1="-1.10682" x2="314.506" y2="38.8932" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2713_31369" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0 0)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <g id="pattern0_2713_31369_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <svg className={"\x68-auto \x77-[\x318.\x3875em] \x6db-6 \x68idden \x6dd:\x62lock"} width="302" height="152" viewBox="0 0 302 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M151 0C234.395 0 302 67.605 302 151H252.164C252.164 95.1288 206.871 49.8363 151 49.8363C95.1288 49.8363 49.8363 95.1288 49.8363 151H0C4.11087e-06 67.605 67.605 4.1098e-06 151 0Z" fill="#FBFAF4" />
                      <path className="style_barPartRight__m456H" d="M151.219 0V50C151.22 50 151.221 50 151.223 50C207.277 50 252.719 95.4414 252.719 151.496H302.719C302.719 67.8271 234.892 4.1233e-06 151.223 0C151.221 0 151.22 -3.28541e-08 151.219 0Z" fill="#76ff02" />
                      <path className="style_barPartLeft__NZ_9S" opacity="0.6" d="M151.719 0V50C151.717 50 151.716 50 151.715 50C95.6601 50 50.2188 95.4414 50.2188 151.496H0.21875C0.218754 67.8271 68.0459 4.1233e-06 151.715 0C151.716 0 151.717 -3.28541e-08 151.719 0Z" fill="url(#pattern0_2701_29575)" />
                      <defs>
                        <linearGradient id="paint0_linear_2701_29575" x1="249.714" y1="60.188" x2="249.714" y2="149.038" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#76FF02" stopOpacity="0.3" />
                          <stop offset="1" stopColor="#76FF02" />
                        </linearGradient>
                        <pattern id="pattern0_2701_29575" patternUnits="userSpaceOnUse" patternTransform="matrix(9.7 0 0 9.7 0.21875 -3.28541e-08)" preserveAspectRatio="none" viewBox="0 0 9.7 9.7" width="1" height="1">
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(0 -9.7)" />
                          <use xlinkHref="#pattern0_2701_29575_inner" transform="translate(-9.7 0)" />
                          <g id="pattern0_2701_29575_inner">
                            <circle cx="5" cy="5" r="5" fill="#4D9EFF" />
                          </g>
                        </pattern>
                      </defs>
                    </svg>
                    <img className={"\x6dx-auto \x73ize-16 \x78l:\x73ize-20 \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-5 \x6dd:\x62ottom-0 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Always-on" loading="lazy" width="80" height="80" decoding="async" src="/site-assets/3ce39db10c81941d.png" />
                  </div>
                  <div className={"\x74ext-center \x74ext-base \x66ont-vogue \x70t-1 \x6dd:\x70t-0 \x6dd:!\x74ext-body2 \x70x-8 \x6dd:\x6dax-w-[\x319rem] \x32xl:\x6dax-w-[\x313em] \x6dx-auto"}>Always-on</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"\x63ontainer \x70b-10 \x6dd:\x70b-15"}>
        <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x78l:\x67rid-cols-12 \x6dd:\x67ap-x-6 \x6dd:\x69tems-center"}>
          <div className={"\x78l:\x63ol-span-5 \x78l:\x63ol-start-2 \x72elative"}>
            <div className={"\x6dax-w-[\x333em] \x6dx-auto \x6dd:\x6dl-0 wysiwyg \x6db-8 \x6dd:\x6db-0"}>
              <p className={"\x74ext-body2"}>Gen Zs even report feeling like they enter almost a <mark className="mark-green">dissociative state</mark>, where scrolling and shopping happens without their conscious attention. </p>
              <p className={"\x74ext-body3"}>“Online shopping is a little bit eerie,” according to Kanika Raman, 21, in New Brunswick, New Jersey. “When I start scrolling, I can’t stop. I’ll doomscroll for hours on TikTok. I have no self‑control, so I’m always shopping.” </p>
            </div>
          </div>
          <div className={"\x72elative \x78l:\x63ol-span-5 \x78l:\x63ol-start-7 \x70x-15 \x70y-20 \x6dd:\x70y-0"}>
            <div className={"\x61bsolute \x69nset-[\x35%]"} />
            <div className={"\x66lex \x69tems-center \x6austify-center \x72elative group \x61spect-[\x3580/\x3779] \x6dax-w-[\x318.\x3125em] \x6dx-auto \x6dd:\x6dr-0"}>
              <svg className={"\x61bsolute \x69nset-0 \x77-full \x68-auto \x73cale-[\x31.\x31] \x6fpacity-0"} width="294" height="391" viewBox="0 0 294 391" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M113.911 2.54076C153.011 -4.13631 192.155 11.2588 223.846 41.7102C255.536 72.1615 279.715 117.625 288.812 170.895C297.909 224.164 290.188 275.076 270.399 314.318C250.61 353.561 218.794 381.074 179.693 387.751C140.593 394.429 101.448 379.034 69.7577 348.582C38.0673 318.131 13.8884 272.667 4.7915 219.397C-4.30537 166.128 3.4154 115.216 23.2042 75.9738C42.9932 36.7311 74.8099 9.21804 113.911 2.54076Z" stroke="black" strokeWidth="2" />
              </svg>
              <div>
                <img className={"\x77-full \x68-auto \x74ransition \x64uration-500 \x67roup-hover:\x62lur-sm \x67roup-hover:\x72otate-2"} style={{ color: "transparent" }} alt="Shopping overload" loading="lazy" width="580" height="779" decoding="async" src="/site-assets/d5d9eb626ac957fb.png" />
              </div>
              <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center \x6austify-center \x6fpacity-0 \x64uration-500 \x67roup-hover:\x6fpacity-100 \x74ransition-opacity"}>
                <svg className={"\x73ize-16 loading-spinner \x61bsolute \x69nset-0 \x6d-auto"} width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.85" d="M30.6875 1.33411C30.6875 0.597303 31.2848 0 32.0216 0C32.7584 0 33.3557 0.597303 33.3557 1.33411V14.6752C33.3557 15.412 32.7584 16.0093 32.0216 16.0093C31.2848 16.0093 30.6875 15.412 30.6875 14.6752V1.33411Z" fill="#FBFAF4" />
                  <path d="M1.33411 33.3516C0.597303 33.3516 -2.61089e-08 32.7543 -5.83159e-08 32.0175C-9.05229e-08 31.2806 0.597302 30.6833 1.33411 30.6833L14.6752 30.6833C15.412 30.6833 16.0093 31.2806 16.0093 32.0174C16.0093 32.7543 15.412 33.3516 14.6752 33.3516L1.33411 33.3516Z" fill="#FBFAF4" />
                  <path d="M17.8311 59.2587C17.4627 59.8968 16.6468 60.1154 16.0087 59.747C15.3706 59.3786 15.152 58.5627 15.5204 57.9246L22.1909 46.3708C22.5593 45.7327 23.3753 45.5141 24.0134 45.8825C24.6515 46.2509 24.8701 47.0668 24.5017 47.7049L17.8311 59.2587Z" fill="#FBFAF4" />
                  <path opacity="0.45" d="M48.5126 57.9267C48.881 58.5648 48.6624 59.3807 48.0243 59.7491C47.3862 60.1175 46.5703 59.8989 46.2019 59.2608L39.5313 47.707C39.1629 47.0689 39.3815 46.253 40.0196 45.8846C40.6577 45.5162 41.4737 45.7348 41.8421 46.3729L48.5126 57.9267Z" fill="#FBFAF4" />
                  <path opacity="0.55" d="M59.2587 46.204C59.8968 46.5724 60.1154 47.3884 59.747 48.0265C59.3786 48.6646 58.5627 48.8832 57.9246 48.5148L46.3708 41.8442C45.7327 41.4758 45.5141 40.6599 45.8825 40.0218C46.2509 39.3837 47.0668 39.1651 47.7049 39.5335L59.2587 46.204Z" fill="#FBFAF4" />
                  <path opacity="0.75" d="M57.9227 15.5225C58.5608 15.1541 59.3768 15.3727 59.7452 16.0108C60.1136 16.6489 59.895 17.4649 59.2569 17.8333L47.7031 24.5038C47.065 24.8722 46.2491 24.6536 45.8807 24.0155C45.5123 23.3774 45.7309 22.5615 46.369 22.1931L57.9227 15.5225Z" fill="#FBFAF4" />
                  <path opacity="0.35" d="M33.3516 62.7049C33.3516 63.4418 32.7543 64.0391 32.0175 64.0391C31.2806 64.0391 30.6833 63.4418 30.6833 62.705L30.6833 49.3638C30.6833 48.627 31.2806 48.0297 32.0174 48.0297C32.7543 48.0297 33.3516 48.627 33.3516 49.3638L33.3516 62.7049Z" fill="#FBFAF4" />
                  <path opacity="0.65" d="M62.7049 30.6836C63.4418 30.6836 64.0391 31.2809 64.0391 32.0177C64.0391 32.7545 63.4418 33.3518 62.705 33.3518L49.3638 33.3518C48.627 33.3518 48.0297 32.7545 48.0297 32.0177C48.0297 31.2809 48.627 30.6836 49.3638 30.6836L62.7049 30.6836Z" fill="#FBFAF4" />
                  <path opacity="0.85" d="M46.2079 4.77647C46.5763 4.13837 47.3923 3.91974 48.0304 4.28815C48.6685 4.65655 48.8871 5.47248 48.5187 6.11058L41.8481 17.6643C41.4797 18.3024 40.6638 18.5211 40.0257 18.1527C39.3876 17.7842 39.169 16.9683 39.5374 16.3302L46.2079 4.77647Z" fill="#FBFAF4" />
                  <path opacity="0.95" d="M15.5186 6.11241C15.1502 5.47431 15.3688 4.65838 16.0069 4.28997C16.645 3.92157 17.461 4.1402 17.8294 4.77829L24.4999 16.332C24.8683 16.9701 24.6497 17.7861 24.0116 18.1545C23.3735 18.5229 22.5576 18.3043 22.1892 17.6662L15.5186 6.11241Z" fill="#FBFAF4" />
                  <path d="M4.78038 17.8311C4.14228 17.4627 3.92365 16.6468 4.29206 16.0087C4.66046 15.3706 5.47639 15.152 6.11449 15.5204L17.6682 22.1909C18.3063 22.5593 18.525 23.3753 18.1566 24.0134C17.7882 24.6515 16.9722 24.8701 16.3341 24.5017L4.78038 17.8311Z" fill="#FBFAF4" />
                  <path d="M6.1085 48.5165C5.4704 48.8849 4.65447 48.6663 4.28607 48.0282C3.91766 47.3901 4.13629 46.5742 4.77439 46.2058L16.3281 39.5352C16.9662 39.1668 17.7822 39.3854 18.1506 40.0235C18.519 40.6616 18.3003 41.4776 17.6622 41.846L6.1085 48.5165Z" fill="#FBFAF4" />
                </svg>
              </div>
              <img className={"\x61bsolute"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "50% 50%", transform: "translate3d(-165.1px, -40.1957px, 0px)" } as CSSProperties} alt="Shopping overload" loading="lazy" width="223" height="223" decoding="async" src="/site-assets/f7b277156cb38509.png" />
              <img className={"\x61bsolute"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "50% 50%", transform: "translate3d(-32.8976px, -220.895px, 0px)" } as CSSProperties} alt="Shopping overload" loading="lazy" width="108" height="108" decoding="async" src="/site-assets/c04c1766516c55c3.png" />
              <img className={"\x61bsolute"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "50% 50%", transform: "translate3d(145.549px, -84.5338px, 0px)" } as CSSProperties} alt="Shopping overload" loading="lazy" width="185" height="185" decoding="async" src="/site-assets/8eb228b170c86001.png" />
              <img className={"\x61bsolute"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "50% 50%", transform: "translate3d(129.899px, 149.977px, 0px)" } as CSSProperties} alt="Shopping overload" loading="lazy" width="148" height="148" decoding="async" src="/site-assets/b90e392c9c533e85.png" />
              <img className={"\x61bsolute"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transformOrigin: "50% 50%", transform: "translate3d(-78.8002px, 178.918px, 0px)" } as CSSProperties} alt="Shopping overload" loading="lazy" width="317" height="317" decoding="async" src="/site-assets/957e94affa31d4c4.png" />
            </div>
          </div>
        </div>
      </div>
      <div className={"\x70y-10 \x6dd:\x70y-20"}>
        <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "block", margin: "0px", inset: "auto", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1521px", height: "5864px", padding: "0px 0px 5000px" } as CSSProperties}>
          <div style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1521px", width: "1521px", maxHeight: "864px", height: "864px", padding: "0px", transform: "translate(0px, 0px)" } as CSSProperties} data-site-import-responsive="892">
            <div className={"\x6dd:\x77-full \x6dd:\x68-screen \x6cg:\x61spect-[\x31440/\x3780] \x6dd:\x73ticky \x6dd:\x74op-0 \x66lex \x66lex-col \x6dd:\x70t-20 \x78l:\x74op-20"}>
              <span className={"\x68-full \x74op-0 \x62g-gradient-to-r \x66rom-brand-gray \x74o-transparent \x77-20 \x61bsolute \x7a-3 \x68idden \x32xl:\x62lock \x6ceft-0"} />
              <span className={"\x68-full \x74op-0 \x62g-brand-gray \x61bsolute \x7a-3 \x68idden \x32xl:\x62lock \x72ight-full \x77-1/\x32"} />
              <span className={"\x68-full \x74op-0 \x62g-gradient-to-l \x66rom-brand-gray \x74o-transparent \x77-20 \x61bsolute \x7a-3 \x68idden \x32xl:\x62lock \x72ight-0"} />
              <span className={"\x68-full \x74op-0 \x62g-brand-gray \x61bsolute \x7a-3 \x68idden \x32xl:\x62lock \x6ceft-full \x77-1/\x32"} />
              <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x63ontainer \x6db-8 \x72elative \x7a-5 \x78l:\x6db-16"}>
                <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                  <div className="">
                    <p className={"\x74ext-body1"}>Below is a list of ways that social media has changed the shopping <mark className="mark-green">experience</mark>. How much do you agree with the following statements?</p>
                  </div>
                </div>
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
              <div className={"\x66lex-grow \x66lex \x66lex-col [@media(max-width:767px)]:[max-height:844px]!"} data-site-import-responsive="905">
                <div className={"\x66lex-grow \x66lex \x66lex-col \x6dd:\x72elative \x77-full fluid-block \x68-screen \x6dd:\x68-auto \x32xl:\x77-[\x390em] \x32xl:\x6dx-auto \x70y-10 \x6dd:\x70y-0 \x6cg:\x6din-h-[\x340em]"}>
                  <span className={"\x77-full \x6fpacity-50 \x61spect-[\x31500/\x31030] \x61bsolute \x6ceft-1/\x32 \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-green \x62lur-2xl \x70ointer-events-none"} style={{ transform: "translate(-50%, -50%) translate(0.148px, -0.078px) scale(1.5, 1.5)", translate: "none", rotate: "none", scale: "none", opacity: "0.15" } as CSSProperties} />
                  <span className={"\x77-[\x3150%] \x6fpacity-50 \x61spect-[\x31500/\x31030] \x61bsolute \x6ceft-1/\x32 \x74op-[\x340%] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-pink \x62lur-2xl \x70ointer-events-none"} style={{ transform: "translate(-1126.27px, -773.367px)", translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties} />
                  <div className={"\x6dd:\x61bsolute \x6dd:\x6ceft-1/\x33 \x6dd:\x77-[\x355%] \x6cg:\x6ceft-1/\x32 \x6cg:\x77-[\x343%] \x78l:\x6ceft-[\x356%] \x6dd:\x74op-0 \x78l:\x77-[\x330.\x39em] \x77-full \x66lex \x66lex-col \x78l:\x67ap-y-[\x31em] \x67ap-y-4 \x70x-4 \x6dd:\x70x-0 \x70t-8 \x6dd:\x70t-0"}>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="498" height="107" decoding="async" src="/site-assets/80b3072101ee9e61-3823803f9d9580f6a25b1db1b3aa8a30.png" srcSet="/site-assets/80b3072101ee9e61-3823803f9d9580f6a25b1db1b3aa8a30.png 516w" sizes="498px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="349" height="80" decoding="async" src="/site-assets/af7e1880df2057e0-d75f5eee5f88e9093b2f9b5374b68c21.png" />
                    </div>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end \x6dd:\x6ceft-10"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="488" height="112" decoding="async" src="/site-assets/5d669dc4c24df518-ab50165ca417f2e534f02d3c89e19247.png" srcSet="/site-assets/5d669dc4c24df518-ab50165ca417f2e534f02d3c89e19247.png 516w" sizes="488px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="349" height="80" decoding="async" src="/site-assets/faee3a8aaaaa67d1-3aada50d57732e6691ef84a3c5b8c2d4.png" />
                    </div>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end \x6dd:\x6ceft-20"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="481" height="112" decoding="async" src="/site-assets/dacbcc9d40be239b-9f86e55e84e126972fe19c5e42d5c13a.png" srcSet="/site-assets/dacbcc9d40be239b-9f86e55e84e126972fe19c5e42d5c13a.png 516w" sizes="481px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="349" height="80" decoding="async" src="/site-assets/44dc666fcd76eb3f-850f96e69dc9fb487123086310c94e25.png" />
                    </div>
                  </div>
                  <div className={"\x61bsolute \x6ceft-full \x77-full \x62ottom-0 \x6cg:\x6dl-0 \x78l:\x70l-[\x37%]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, 0px)" } as CSSProperties}>
                    <img className={"\x68-auto \x77-[\x390%] \x6dd:\x77-[\x365%] \x6cg:\x77-[\x350%] \x78l:\x77-full \x6dax-w-[\x335.\x37em]! \x72elative \x6dd:\x2dleft-10 \x2dbottom-15 \x6dd:\x62ottom-0 \x6fbject-contain \x6fbject-center"} style={{ color: "transparent" }} alt="Experience 1" loading="lazy" width="745" height="842" decoding="async" src="/site-assets/a4288089afacee5d.png" />
                  </div>
                  <div className={"\x61bsolute \x62ottom-0 \x6cg:\x62ottom-[\x33.\x34em] \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x7a-2"}>
                    <div className={"\x77-[\x38em] \x6dd:\x77-[\x312em] \x78l:\x77-[\x313.\x35em]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.7, 0.7)" } as CSSProperties}>
                      <img className={"\x77-full \x68-auto"} style={{ color: "transparent" }} alt="Experience 1 bag" loading="lazy" width="264" height="560" decoding="async" src="/site-assets/1ef86b39bf9629bc.png" />
                      <img className={"\x77-[\x380%] \x6ceft-[\x310%] \x68-auto \x61bsolute \x62ottom-6 \x78l:\x62ottom-10"} style={{ color: "transparent", opacity: "0" }} alt="Experience 1 badges" loading="lazy" width="213" height="66" decoding="async" src="/site-assets/1fa24866812bec2b-699f449e0f3b629e459b0dbf3a238422.png" />
                    </div>
                  </div>
                  <div className={"\x61bsolute \x6ceft-[\x347.\x32%] \x62ottom-[\x30.\x35em] \x6fpacity-0 \x73cale-0 \x7a-2 \x68idden \x6dd:\x62lock"} style={{ transform: "scale(0, 0)", translate: "none", rotate: "none", scale: "none", opacity: "0" } as CSSProperties}>
                    <svg className={"\x77-[\x311.\x325em] \x68-auto"} aria-label="light badges social media" width="180" height="120" viewBox="0 0 180 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g style={{ opacity: "0" }}>
                        <rect x="107.738" y="52.2168" width="77.2461" height="18" transform="rotate(-41.8791 107.738 52.2168)" fill="white" />
                        <path d="M118.356 60.422L118.695 60.2124C118.813 60.2189 118.997 60.4867 118.949 60.6427C118.378 61.1172 117.837 61.5834 117.357 62.0133C116.836 62.4806 116.376 62.9116 115.874 63.3997C115.714 63.4306 115.481 63.1502 115.62 62.9694L115.854 62.665C116.228 62.1797 116.255 62.0424 115.688 60.802L113.431 55.8309C112.935 54.7529 112.786 54.5663 112.171 54.9492L111.832 55.1587C111.703 55.1616 111.489 54.9021 111.578 54.7285C112.18 54.226 112.711 53.7691 113.211 53.3205C113.691 52.8906 114.151 52.4596 114.653 51.9715C114.813 51.9405 115.026 52.2198 114.928 52.383L114.672 52.7062C114.29 53.181 114.272 53.3287 114.839 54.5692L117.096 59.5403C117.582 60.6276 117.74 60.8048 118.356 60.422ZM118.818 55.9837L117.197 52.455C116.7 51.3771 116.534 51.1499 115.937 51.5536L115.608 51.7736C115.458 51.7951 115.285 51.518 115.354 51.3433C115.914 50.8782 116.299 50.5521 116.695 50.197C116.956 49.9634 117.29 49.6445 117.501 49.4181C117.804 49.8609 118.917 50.3479 120.389 51.0032L121.851 51.648C122.944 52.1339 123.449 52.3399 123.76 52.456C123.73 52.2759 123.562 51.8999 123.42 51.5948L122.522 49.6919C122.113 48.8367 121.719 48.0618 121.592 47.8368C121.229 47.2221 121.079 47.0751 120.482 47.4788L120.132 47.7175C119.954 47.7078 119.807 47.4817 119.878 47.2872C120.449 46.8127 120.802 46.5147 121.198 46.1596C121.646 45.7577 121.918 45.495 122.379 45.0442C122.519 45.032 122.714 45.2707 122.685 45.4277L122.482 45.7042C122.097 46.2185 122.042 46.4931 122.313 47.1721C122.427 47.446 122.759 48.2573 123.158 49.1218L124.631 52.2953C125.092 53.292 125.487 54.0472 125.702 54.4753C125.684 54.6231 125.419 54.9358 125.148 55.1788C125.127 55.1975 124.126 54.6472 123.245 54.2522L119.859 52.7192C119.25 52.4381 118.196 51.9345 117.789 51.7735C117.849 51.9453 117.919 52.1078 118.257 52.8202L119.465 55.4043C119.864 56.2687 120.258 57.0437 120.395 57.2593C120.779 57.8553 120.89 58.0002 121.496 57.6069L121.855 57.3787C121.992 57.4257 122.18 57.6144 122.13 57.7902C121.549 58.274 121.185 58.5814 120.789 58.9365C120.351 59.329 120.069 59.6012 119.618 60.0426C119.468 60.0641 119.252 59.8442 119.312 59.659L119.505 59.392C119.891 58.8578 119.936 58.5728 119.674 57.924C119.56 57.6501 119.217 56.8482 118.818 55.9837ZM129.827 51.1343C128.753 52.0969 127.541 52.3184 126.918 52.1059C126.506 51.6671 126.056 51.0179 125.761 50.4169C125.749 50.2774 126.02 50.0345 126.186 50.0733C126.469 50.3464 126.915 50.7177 127.47 50.8967C128.278 51.1688 129.001 51.0099 129.563 50.5053C130.21 49.9258 130.411 48.9553 129.673 48.1318C129.206 47.6106 128.532 47.4252 127.554 47.5305L127.126 47.5765C126.079 47.688 125.055 47.5529 124.429 46.8545C123.232 45.5202 123.58 43.6852 125.039 42.3966C125.809 41.7248 126.704 41.3175 127.451 41.2492C127.577 41.6625 127.83 42.3009 128.235 43.0468C128.264 43.2466 127.975 43.449 127.829 43.4112C127.271 42.5382 126.282 42.1471 125.406 42.9322C124.614 43.6424 124.697 44.6582 125.164 45.1794C125.454 45.5026 125.975 45.7689 127.144 45.6046L127.663 45.5338C128.632 45.3983 129.768 45.4899 130.599 46.4176C131.749 47.6997 131.62 49.5268 129.827 51.1343ZM129.808 38.4399L133.707 34.9446C134.134 34.5614 134.216 34.3378 134.193 34.0194C134.221 33.882 134.458 33.7066 134.565 33.7422C134.732 34.3263 135.202 35.5218 135.536 36.125C135.556 36.2946 135.275 36.547 135.119 36.4988C134.814 36.0955 134.46 35.6796 134.221 35.6865C133.883 35.7077 133.574 35.9287 133.303 36.1717L132.844 36.583C132.531 36.8633 132.521 36.8727 132.689 37.2487L135.402 43.127C135.898 44.205 136.066 44.4124 136.663 44.0087L137.095 43.715C137.214 43.7215 137.397 43.9893 137.36 44.1359C136.684 44.7039 136.143 45.1701 135.664 45.6C135.163 46.0486 134.704 46.4796 134.097 47.0612C133.937 47.0921 133.692 46.8408 133.801 46.6683L134.161 46.2517C134.553 45.7873 134.562 45.6291 133.995 44.3887L131.313 38.4823C131.163 38.1469 131.124 38.125 130.78 38.4334L130.353 38.8166C130.061 39.0783 129.777 39.3702 129.692 39.8414C129.633 40.1951 129.587 40.6685 129.737 41.3806C129.699 41.5272 129.361 41.7368 129.239 41.6013C128.964 40.6444 128.713 39.7979 128.46 39.1596C128.467 39.041 128.602 38.9195 128.743 38.8875C128.93 39.0959 129.099 39.0754 129.808 38.4399ZM140.234 37.2526L138.942 38.4115C138.629 38.6918 138.599 38.7001 138.67 39.0312L138.973 40.7529C139.076 41.2245 139.13 41.3266 139.186 41.3891C139.261 41.4725 139.482 41.4053 139.698 41.2683L140.12 40.984C140.29 40.9635 140.483 41.2417 140.404 41.406C139.864 41.8524 139.428 42.2252 138.969 42.6364C138.604 42.9635 138.27 43.2824 137.996 43.5649C137.804 43.6436 137.579 43.3934 137.608 43.2364L137.821 42.9704C138.267 42.4197 138.308 42.2137 138.148 40.9657C137.842 38.758 137.557 36.5316 137.251 34.3239C137.135 33.5442 137.035 32.825 136.9 32.5895C137.446 32.0245 137.571 31.1787 137.582 31.1694L137.603 31.1507C137.707 31.0572 137.837 31.0346 137.94 31.1492C139.594 32.9942 141.185 34.9151 142.839 36.7601C143.493 37.4897 143.652 37.667 144.208 37.2809L144.486 37.0879C144.626 37.0756 144.839 37.3549 144.782 37.4807C144.378 37.8057 143.806 38.2999 143.285 38.7672C142.701 39.2906 142.241 39.7216 141.937 40.0322C141.764 40.112 141.56 39.8431 141.557 39.714L141.769 39.4678C142.193 38.9754 142.123 38.7931 141.909 38.5336L140.764 37.1724C140.588 36.9546 140.557 36.9629 140.234 37.2526ZM138.822 37.5226L139.822 36.6254C140.072 36.4011 140.064 36.3709 139.841 36.1009L138.754 34.7627C138.484 34.4407 137.991 33.8487 137.806 33.6006L137.785 33.6193C137.853 34.0097 137.949 34.6197 138.044 35.2297L138.418 37.4708C138.461 37.7706 138.53 37.7842 138.822 37.5226ZM149.882 27.8696L149.669 28.1356C149.382 28.4868 149.441 28.6784 149.77 29.3606L150.251 30.3584C150.536 30.949 150.652 31.2031 150.887 31.0672C150.956 31.0809 151.094 31.2768 151.007 31.4108C150.837 31.6197 150.557 32.0208 150.449 32.1934C150.11 32.7796 149.485 33.509 148.964 33.9763C146.764 35.9482 144.706 35.6873 143.23 34.0404C142.071 32.7478 141.689 31.0218 141.867 29.584C142.024 28.3334 142.611 26.6602 144.341 25.1088C145.373 24.1835 146.318 23.7691 146.814 23.5879C147.052 24.3147 147.4 25.0178 147.76 25.6917C147.789 25.8718 147.518 26.1148 147.374 26.0375C146.525 24.8809 145.689 24.7658 144.657 25.6911C142.801 27.3546 143.195 30.856 145.027 32.8991C146.448 34.4835 147.783 34.1697 148.69 33.3566C149.253 32.8519 149.309 32.5575 148.926 31.7534L148.393 30.614C148.065 29.912 147.846 29.9199 147.291 30.2862L146.911 30.5332C146.73 30.5828 146.546 30.315 146.615 30.1403C147.342 29.5256 147.873 29.0687 148.373 28.6201C148.79 28.2463 149.302 27.7686 149.565 27.4954C149.736 27.4551 149.919 27.7229 149.882 27.8696ZM152.314 27.9639L150.041 22.9127C149.635 21.9983 149.495 21.8419 149.087 22.0576L148.678 22.2733C148.51 22.274 148.345 22.027 148.423 21.8628C148.991 21.2592 149.6 20.6381 150.403 19.9185C151.258 19.1521 152.019 18.6384 152.735 18.4296C153.429 18.2394 154.254 18.3836 154.861 19.0611C155.787 20.0931 155.387 21.4295 154.771 22.3576C154.63 22.5779 154.686 22.6405 154.819 22.7469C156.264 23.8766 157.313 24.6476 157.797 24.6839C158.063 24.7083 158.411 24.5092 158.647 24.3733C158.806 24.3621 158.933 24.5674 158.905 24.7245C158.743 24.9635 158.45 25.245 158.002 25.6468C157.627 25.9833 157.299 26.1835 157.038 26.2288C156.708 26.2802 156.277 26.1972 155.677 25.7382L154.021 24.478C153.63 24.189 153.412 24.1969 153.099 24.4773C152.838 24.7109 152.835 24.7702 152.949 25.0441L153.69 26.7303C154.165 27.827 154.335 27.9948 154.96 27.6224L155.278 27.4315C155.418 27.3995 155.602 27.6673 155.543 27.8327C155.014 28.2698 154.483 28.7266 153.983 29.1752C153.482 29.6238 153.023 30.0548 152.52 30.543C152.36 30.5739 152.107 30.3122 152.213 30.1792L152.489 29.8374C152.872 29.3625 152.87 29.2137 152.314 27.9639ZM153.199 20.2692C152.713 19.7272 151.99 19.3606 151.229 20.0428C150.833 20.398 150.868 20.4792 151.027 20.8448L152.327 23.7214C152.504 24.1078 152.615 24.0841 153.094 23.6542C154.084 22.7663 154.022 21.1865 153.199 20.2692ZM160.512 19.072L159.219 20.2309C158.906 20.5112 158.876 20.5195 158.947 20.8506L159.25 22.5723C159.353 23.0439 159.407 23.146 159.463 23.2085C159.538 23.2919 159.76 23.2247 159.976 23.0877L160.397 22.8034C160.567 22.7829 160.76 23.0611 160.682 23.2254C160.142 23.6718 159.705 24.0446 159.247 24.4558C158.882 24.7829 158.547 25.1018 158.274 25.3843C158.081 25.463 157.857 25.2128 157.885 25.0558L158.098 24.7898C158.545 24.2391 158.586 24.0331 158.426 22.7851C158.12 20.5774 157.835 18.351 157.529 16.1433C157.412 15.3636 157.313 14.6444 157.177 14.4089C157.723 13.8439 157.849 12.9981 157.859 12.9888L157.88 12.9701C157.984 12.8766 158.114 12.854 158.217 12.9686C159.871 14.8136 161.462 16.7345 163.116 18.5795C163.77 19.3091 163.929 19.4864 164.486 19.1003L164.764 18.9073C164.903 18.895 165.116 19.1743 165.06 19.3001C164.655 19.6251 164.083 20.1193 163.562 20.5866C162.978 21.11 162.519 21.541 162.214 21.8516C162.041 21.9314 161.838 21.6625 161.835 21.5335L162.047 21.2872C162.47 20.7948 162.401 20.6125 162.187 20.353L161.042 18.9918C160.865 18.774 160.835 18.7823 160.512 19.072ZM159.099 19.342L160.1 18.4448C160.35 18.2205 160.342 18.1903 160.118 17.9203L159.031 16.5821C158.762 16.2601 158.268 15.6681 158.084 15.42L158.063 15.4387C158.131 15.8291 158.226 16.4391 158.322 17.0491L158.695 19.2902C158.739 19.59 158.807 19.6036 159.099 19.342ZM164.635 15.7514L162.937 11.4255C162.512 10.3216 162.295 10.1214 161.729 10.497L161.4 10.717C161.25 10.7386 161.066 10.4708 161.156 10.2774C161.748 9.78425 162.289 9.31804 162.789 8.86944C163.154 8.54233 163.364 8.33565 163.72 7.97835C163.979 8.68645 165.012 9.56564 165.522 10.0297L166.371 10.8097C166.976 11.3582 167.552 11.8952 167.951 12.2143C167.897 11.7356 167.852 11.1184 167.745 10.1608L167.421 7.38698C167.253 5.92044 166.995 5.38091 166.899 5.12786C167.147 4.9431 167.542 4.60773 167.928 4.26193C168.439 3.80399 168.867 3.40104 169.37 2.9129C169.551 2.86329 169.753 3.15192 169.655 3.31511L169.401 3.61849C169.019 4.07356 168.917 4.31583 169.624 5.71263L171.958 10.3509C172.495 11.4112 172.603 11.6154 173.219 11.2326L173.558 11.023C173.666 11.0388 173.849 11.3066 173.801 11.4626C173.23 11.9371 172.689 12.4033 172.189 12.8519C171.688 13.3005 171.239 13.7222 170.747 14.201C170.565 14.2703 170.332 13.99 170.441 13.8174L170.696 13.4943C171.079 13.0194 171.138 12.8541 170.562 11.6032L168.778 7.76833C168.44 7.05591 168.235 6.63823 168.039 6.23098L167.999 6.22883C168.039 6.77627 168.1 7.28524 168.204 8.11377L168.648 11.6079C168.799 12.8455 168.993 14.0062 169.214 15.2179C169.154 15.4227 168.906 15.6075 168.708 15.5967C168.392 15.2028 167.611 14.4365 166.697 13.5637L165.209 12.1342C164.512 11.4617 163.802 10.8381 163.433 10.5107L163.413 10.5294C163.594 11.025 163.881 11.7644 164.274 12.7277L165.098 14.7158C165.834 16.481 165.984 16.8164 166.161 17.0342C166.244 17.1478 166.379 17.2147 166.635 17.0601L167.22 16.7053C167.356 16.7524 167.532 16.99 167.495 17.1169C167.037 17.5083 166.57 17.8893 166.091 18.3192C165.632 18.7305 165.328 19.041 164.972 19.3786C164.814 19.3699 164.618 19.151 164.666 18.995L164.879 18.729C165.145 18.3965 165.246 18.174 165.278 17.9577C165.307 17.6122 165.174 17.1291 164.635 15.7514Z" fill="#A95FFE" />
                      </g>
                      <g style={{ opacity: "0" }}>
                        <rect x="102.52" y="27.709" width="14.3736" height="18" transform="rotate(11.4722 102.52 27.709)" fill="white" />
                        <path d="M106.045 33.5618L105.669 33.3712C105.607 33.1871 105.704 32.9211 105.877 32.9133C106.379 33.0438 107.158 33.2162 107.885 33.3638C108.722 33.5336 109.287 33.6341 109.608 33.6707C109.743 33.7836 109.681 34.0855 109.511 34.1509L109.069 34.1469C108.797 34.1489 108.561 34.1867 108.558 34.2004C108.519 34.3211 108.516 34.4776 108.554 34.7852C108.618 35.4553 108.731 36.2354 108.825 36.8973C109.609 36.4136 110.552 35.7765 111.251 35.2184C111.491 35.0241 111.549 34.9502 111.568 34.8541C111.582 34.7855 111.527 34.703 111.319 34.6036L110.897 34.4321C110.787 34.2671 110.912 34.0066 111.09 33.9714C111.633 34.1102 112.207 34.2409 112.756 34.3523C113.373 34.4776 113.87 34.5641 114.287 34.6202C114.413 34.7029 114.363 35.0213 114.203 35.1032L113.731 35.1074C113.286 35.1171 112.888 35.1791 112.195 35.567C111.131 36.1653 109.978 36.9171 108.886 37.6526C108.992 38.8884 109.145 40.2479 109.339 41.6158C109.433 42.2778 109.49 42.4893 110.168 42.7411L110.513 42.8684C110.601 43.0004 110.495 43.3076 110.347 43.3347C109.914 43.2181 109.217 43.0624 108.38 42.8926C107.474 42.7088 106.936 42.6139 106.396 42.5327C106.231 42.4279 106.304 42.0712 106.493 42.0525L106.916 42.0812C107.226 42.1013 107.424 42.0414 107.443 41.9454C107.466 41.8356 107.507 41.6298 107.459 41.1629C107.366 40.3582 107.297 39.43 107.208 38.6692C106.292 39.3118 105.239 40.0694 104.33 40.8136C104.094 40.9942 103.986 41.1009 103.967 41.197C103.947 41.293 104.186 41.4557 104.487 41.5883L104.751 41.6989C104.855 41.82 104.747 42.1409 104.557 42.1596C103.89 41.9957 103.262 41.8539 102.631 41.7259C101.972 41.5922 101.476 41.5057 101.058 41.4496C100.957 41.3148 101.029 41.0294 101.197 40.9777L101.592 41.0008C101.749 41.004 102.054 40.9802 102.205 40.9394C102.568 40.8416 103.093 40.6481 103.736 40.2216C104.875 39.4671 106.055 38.7208 107.123 37.8947L107.085 37.5157C107.008 36.7714 106.833 35.3789 106.712 34.5686C106.585 33.7857 106.344 33.7081 106.045 33.5618Z" fill="#A95FFE" />
                      </g>
                      <g style={{ opacity: "0" }}>
                        <rect x="57.9219" y="65.4336" width="77.2461" height="18" transform="rotate(-0.0439532 57.9219 65.4336)" fill="white" />
                        <path d="M64.2427 69.9056L67.2527 69.9033C68.1487 69.9026 68.9467 69.888 69.1566 69.8598C69.0588 70.0979 68.6956 71.1062 68.4583 72.0584C68.3884 72.2124 68.0104 72.2267 67.9124 72.1148C67.954 71.6108 67.9117 71.2048 67.8555 71.0368C67.7433 70.7149 67.3792 70.5472 66.6932 70.5477L65.6572 70.5485C65.1812 70.5489 65.1672 70.5769 64.9996 71.109L64.1896 73.6716C64.0638 74.0497 64.0919 74.0777 64.4559 74.0774L65.5479 74.0766C66.2759 74.076 66.4578 73.9919 66.8213 73.3056L67.003 72.9695C67.1429 72.8434 67.4929 72.8571 67.535 72.9831C67.3674 73.4172 67.1998 73.9353 67.0182 74.4675C66.8366 74.9856 66.725 75.5037 66.5993 75.9378C66.4874 76.0639 66.1234 76.0782 66.0673 75.9522L66.095 75.6162C66.1505 74.9441 66.0384 74.8322 65.3104 74.8328L64.2184 74.8336C63.8684 74.8339 63.8125 74.8759 63.7008 75.254L63.1142 77.1305C62.7651 78.2647 62.7513 78.5588 63.4654 78.6422L63.9274 78.6979C63.9975 78.7818 63.9697 79.1038 63.8298 79.1879C63.0458 79.1605 62.3318 79.1471 61.6598 79.1476C60.9878 79.1481 60.3578 79.1626 59.6578 79.1911C59.5177 79.1072 59.5315 78.7572 59.6714 78.7011L60.1054 78.6308C60.7073 78.5323 60.8192 78.4342 61.2242 77.1319L62.8582 71.9227C63.2073 70.7884 63.2211 70.5224 62.5631 70.4109L62.227 70.3552C62.1149 70.2712 62.1287 69.9492 62.3246 69.8651C62.9967 69.8926 63.6967 69.906 64.2427 69.9056ZM71.7861 75.9758L70.0501 75.9772C69.6301 75.9775 69.6021 75.9635 69.4343 76.2576L68.5115 77.7423C68.2738 78.1625 68.2459 78.2745 68.2459 78.3585C68.246 78.4705 68.4561 78.5684 68.7081 78.6102L69.2122 78.6798C69.3523 78.7777 69.3105 79.1137 69.1426 79.1839C68.4425 79.1564 67.8685 79.1428 67.2525 79.1433C66.7625 79.1437 66.3005 79.158 65.9086 79.1863C65.7125 79.1165 65.7123 78.7805 65.8382 78.6824L66.1741 78.6261C66.8741 78.5136 67.042 78.3875 67.7552 77.3509C68.9997 75.502 70.2723 73.653 71.5169 71.804C71.9504 71.1457 72.3559 70.5434 72.4117 70.2773C73.1957 70.2207 73.8533 69.6742 73.8673 69.6742L73.8953 69.6742C74.0353 69.6741 74.1473 69.744 74.1474 69.898C74.1493 72.376 74.0533 74.8681 74.0552 77.3461C74.0559 78.3261 74.0561 78.5641 74.7282 78.6476L75.0642 78.6893C75.1763 78.7732 75.1485 79.1232 75.0226 79.1793C74.5045 79.1517 73.7485 79.1383 73.0485 79.1389C72.2645 79.1395 71.6345 79.1539 71.2006 79.1823C71.0185 79.1264 71.0463 78.7904 71.1302 78.6923L71.4522 78.6501C72.0961 78.5656 72.166 78.3835 72.1797 78.0475L72.2343 76.2695C72.2481 75.9895 72.2201 75.9755 71.7861 75.9758ZM70.5535 75.2348L71.8975 75.2337C72.2335 75.2335 72.2475 75.2055 72.2612 74.8555L72.3439 73.1334C72.3576 72.7134 72.385 71.9434 72.4128 71.6353L72.3848 71.6354C72.175 71.9715 71.8394 72.4898 71.5038 73.008L70.2873 74.927C70.1195 75.1791 70.1615 75.2351 70.5535 75.2348ZM76.0906 75.6785C76.1032 73.8585 77.0399 72.2338 78.0892 71.295C78.9846 70.4963 80.5099 69.6691 82.6239 69.6675C84.0239 69.6664 85.0042 70.0157 85.4243 70.1834C85.1169 70.8836 84.9354 71.6117 84.74 72.3539C84.6421 72.508 84.2641 72.5082 84.208 72.3543C84.3329 70.9262 83.8004 70.3106 82.4984 70.3116C80.1044 70.3134 78.2167 73.1989 78.2186 75.7889C78.2204 78.0709 79.3689 78.714 80.4049 78.7132C81.5669 78.7123 82.3783 77.9977 83.3433 76.709C83.4973 76.5968 83.8193 76.6386 83.8614 76.7926C83.5961 77.6328 83.0928 78.6411 82.8691 79.0053C82.3371 79.0617 81.5814 79.3563 80.3634 79.3572C77.4934 79.3594 76.0782 77.7785 76.0906 75.6785ZM88.647 69.8869L91.755 69.8845C92.651 69.8838 93.4489 69.8692 93.6589 69.841C93.5611 70.0791 93.1979 71.0874 92.9466 72.0396C92.8767 72.1936 92.5127 72.2079 92.4147 72.096C92.4563 71.592 92.414 71.186 92.3578 71.018C92.2456 70.6961 91.8814 70.5284 91.1814 70.5289L90.0894 70.5298C89.6135 70.5301 89.5715 70.5582 89.4039 71.0903L88.6357 73.5269C88.51 73.919 88.5381 73.947 88.9021 73.9467L89.8261 73.946C90.5541 73.9454 90.736 73.8333 91.0995 73.161L91.2812 72.8249C91.4211 72.6988 91.7711 72.7125 91.8132 72.8385C91.6456 73.2726 91.478 73.7907 91.2964 74.3229C91.1288 74.855 91.0032 75.3591 90.8775 75.8072C90.7656 75.9193 90.4016 75.9335 90.3455 75.8216L90.3872 75.4716C90.4707 74.7995 90.3306 74.6876 89.6026 74.6882L88.6786 74.6889C88.3146 74.6891 88.2587 74.7312 88.147 75.1093L87.6163 76.8177C87.4068 77.4758 87.3091 77.9099 87.4213 78.1478C87.5475 78.3857 87.7716 78.4836 88.7936 78.4828C90.0116 78.4818 90.5015 78.4395 91.6483 76.8706C91.8022 76.7585 92.1243 76.7862 92.2084 76.9542C91.9709 77.6543 91.4398 78.7887 91.1321 79.167C90.6981 79.1533 90.1381 79.1397 89.5501 79.1402C88.962 79.1266 88.332 79.1271 87.758 79.1276L85.938 79.129C85.238 79.1295 84.6081 79.144 83.9081 79.1725C83.768 79.0886 83.7817 78.7386 83.9777 78.6825L84.4536 78.6121C85.1116 78.5136 85.2235 78.4155 85.6285 77.1132L87.2625 71.9039C87.6116 70.7697 87.6254 70.5037 86.9673 70.3922L86.6313 70.3364C86.5052 70.2385 86.533 69.9165 86.7289 69.8464C87.3869 69.8739 88.101 69.8873 88.647 69.8869ZM93.9823 77.1068L95.6303 71.8275C95.9236 70.8753 95.9514 70.6233 95.4613 70.5257L95.0552 70.442C94.9291 70.3301 94.9709 70.036 95.1389 69.9659C95.9088 69.8953 96.7208 69.8387 97.8968 69.8378C99.3108 69.8367 100.319 70.0319 100.893 70.4655C101.412 70.8571 101.636 71.3749 101.636 71.9629C101.637 73.1109 100.63 73.7417 99.7059 73.9104C99.3559 73.9807 99.286 74.0227 99.3 74.0507C99.272 74.0927 99.3561 74.1207 99.5801 74.2045C100.336 74.4839 100.897 75.1975 100.898 76.0935C100.899 77.6475 99.7236 78.6844 98.2398 78.9795C97.4279 79.1482 96.7279 79.1767 95.8739 79.1773C95.5799 79.1776 95.2579 79.1638 94.9779 79.15C94.6979 79.1362 94.4459 79.1224 94.2919 79.1226C93.7319 79.123 93.0879 79.1375 92.3739 79.166C92.2479 79.0821 92.2616 78.7181 92.4436 78.69L92.8495 78.6197C93.4794 78.5072 93.5773 78.4091 93.9823 77.1068ZM97.6457 71L96.8356 73.5206C96.7239 73.8707 96.7659 73.9127 97.3259 73.9122C98.7399 73.9111 99.7332 73.0144 99.7323 71.7824C99.7317 71.0544 99.2413 70.4808 98.3173 70.4815C97.8413 70.4818 97.7993 70.5099 97.6457 71ZM96.4027 74.9489L95.6765 77.2595C95.3832 78.1837 95.6914 78.5335 96.3914 78.5329C97.6654 78.532 98.8827 77.579 98.8816 76.095C98.8808 75.101 98.2644 74.5275 97.1724 74.5283C96.5704 74.5288 96.5284 74.5568 96.4027 74.9489ZM102.546 75.6022C102.545 73.8382 103.398 72.0456 104.783 70.9105C105.944 69.9576 107.218 69.6486 108.24 69.6479C109.948 69.6465 112.09 70.5689 112.093 73.5929C112.094 75.0629 111.409 76.6734 110.374 77.7382C109.66 78.4668 108.247 79.3359 106.539 79.3372C103.333 79.3396 102.547 77.1282 102.546 75.6022ZM108.394 70.2917C107.862 70.2921 107.344 70.5445 106.897 70.8949C105.777 71.7917 104.547 74.0607 104.549 76.3567C104.55 77.7007 105.167 78.6942 106.343 78.6933C106.903 78.6929 107.602 78.4403 108.26 77.6838C109.533 76.2129 110.091 74.3084 110.09 72.6004C110.089 70.9624 109.374 70.291 108.394 70.2917ZM113.156 75.5941C113.154 73.8301 114.007 72.0374 115.392 70.9024C116.553 69.9495 117.827 69.6405 118.849 69.6397C120.557 69.6384 122.7 70.5608 122.702 73.5848C122.703 75.0548 122.018 76.6653 120.983 77.7301C120.27 78.4586 118.856 79.3277 117.148 79.329C113.942 79.3315 113.157 77.1201 113.156 75.5941ZM119.004 70.2836C118.472 70.284 117.954 70.5364 117.506 70.8867C116.387 71.7836 115.156 74.0526 115.158 76.3486C115.159 77.6925 115.776 78.6861 116.952 78.6852C117.512 78.6847 118.212 78.4322 118.869 77.6757C120.142 76.2047 120.701 74.3003 120.699 72.5923C120.698 70.9543 119.984 70.2828 119.004 70.2836ZM124.06 77.0837L125.694 71.8745C126.043 70.7402 126.057 70.5022 125.343 70.3767L124.965 70.307C124.825 70.2231 124.867 69.9011 125.035 69.817C125.805 69.8444 126.505 69.8578 127.177 69.8573C127.849 69.8568 128.479 69.8423 129.165 69.8138C129.319 69.8977 129.291 70.2477 129.109 70.3038L128.703 70.3602C128.101 70.4446 127.989 70.5707 127.584 71.873L127.012 73.6935C126.928 73.9595 126.928 74.0995 127.068 74.0994C127.488 74.0991 128.076 73.7346 128.593 73.2582L130.398 71.6189C130.496 71.5208 131.139 70.8903 131.251 70.7642C131.363 70.6521 131.405 70.5681 131.405 70.5121C131.405 70.4421 131.335 70.4001 131.167 70.3583L130.635 70.2887C130.523 70.1768 130.509 69.8968 130.719 69.8126C131.503 69.84 131.979 69.8536 132.581 69.8532C133.309 69.8526 133.883 69.8382 134.289 69.8099C134.471 69.8657 134.457 70.2017 134.317 70.2999C133.939 70.3701 133.561 70.4264 133.043 70.6088C132.427 70.8333 131.868 71.2397 130.553 72.3607L129.587 73.1875C129.349 73.3837 129.07 73.6779 129.07 73.7899C129.07 73.8739 129.126 74.0698 129.21 74.3078C129.687 75.5674 130.248 76.799 130.795 78.0166C130.977 78.4224 131.187 78.5343 131.523 78.59L131.901 78.6457C132.013 78.7576 131.972 79.0517 131.86 79.1357C131.216 79.1082 130.558 79.0947 129.9 79.0952C129.298 79.0957 128.71 79.1102 128.038 79.1387C127.87 79.0548 127.855 78.7328 127.995 78.6487L128.429 78.5644C128.751 78.5081 128.793 78.3681 128.737 78.1721C128.667 77.9062 128.33 77.1084 128.232 76.8565L127.783 75.7509C127.446 74.9391 127.334 74.6592 127.026 74.6594C126.704 74.6597 126.62 74.9538 126.411 75.6119L125.95 77.0823C125.587 78.2166 125.587 78.4826 126.301 78.594L126.665 78.6497C126.777 78.7336 126.75 79.0557 126.61 79.1398C125.854 79.1123 125.14 79.0989 124.468 79.0994C123.796 79.0999 123.166 79.1144 122.466 79.1429C122.326 79.0591 122.339 78.709 122.535 78.6529L122.941 78.5826C123.543 78.4841 123.655 78.386 124.06 77.0837Z" fill="#A95FFE" />
                      </g>
                      <g style={{ opacity: "0" }}>
                        <rect y="100.373" width="57.2948" height="18" transform="rotate(-13.2181 0 100.373)" fill="white" />
                        <path d="M6.8477 103.363L11.945 102.165C12.5038 102.034 12.6826 101.877 12.8158 101.587C12.9056 101.479 13.1982 101.439 13.2751 101.522C13.141 102.114 12.9802 103.389 12.984 104.078C12.9206 104.237 12.5526 104.323 12.4388 104.206C12.3644 103.706 12.2532 103.171 12.0408 103.063C11.7339 102.92 11.3563 102.965 11.0019 103.048L10.4022 103.189C9.99335 103.285 9.97972 103.288 9.9467 103.699L9.50808 110.158C9.42665 111.342 9.47384 111.604 10.1913 111.537L10.7116 111.486C10.8126 111.549 10.8453 111.872 10.7419 111.982C9.87685 112.157 9.17857 112.306 8.55163 112.454C7.89743 112.607 7.28732 112.765 6.47598 112.984C6.32048 112.935 6.22682 112.597 6.40483 112.498L6.92035 112.305C7.4872 112.085 7.57062 111.951 7.66815 110.59L8.14766 104.121C8.17666 103.755 8.15342 103.717 7.70366 103.823L7.14487 103.954C6.76326 104.044 6.37442 104.164 6.07366 104.537C5.85229 104.819 5.58519 105.212 5.37489 105.909C5.27144 106.019 4.87382 106.041 4.8322 105.864C5.04983 104.892 5.23534 104.029 5.31978 103.347C5.38235 103.246 5.55953 103.205 5.69819 103.244C5.76222 103.517 5.92092 103.58 6.8477 103.363ZM17.0676 109.921L17.4653 109.9C17.5662 109.962 17.599 110.286 17.4819 110.399C16.7532 110.542 16.0549 110.691 15.4279 110.839C14.7465 110.999 14.1364 111.156 13.4613 111.344C13.3058 111.294 13.2362 110.936 13.4447 110.844L13.7967 110.69C14.3571 110.443 14.4469 110.336 14.5445 108.975L14.9482 103.531C15.0296 102.347 14.9888 102.112 14.2649 102.152L13.8673 102.174C13.7527 102.115 13.6895 101.784 13.8507 101.674C14.6203 101.522 15.305 101.376 15.9592 101.222C16.5861 101.075 17.1962 100.917 17.8713 100.73C18.0268 100.78 18.0795 101.127 17.9152 101.223L17.5359 101.384C16.9723 101.617 16.8857 101.738 16.7881 103.099L16.3844 108.543C16.2893 109.73 16.3437 109.962 17.0676 109.921ZM19.5356 107.803L19.9393 102.358C20.0208 101.174 19.98 100.94 19.2561 100.98L18.8721 100.998C18.7166 100.949 18.6838 100.626 18.8282 100.505C19.5842 100.357 20.2688 100.21 20.923 100.056C21.5772 99.9028 22.1873 99.7451 22.8488 99.561C23.0179 99.6076 23.0707 99.9547 22.9063 100.051L22.5239 100.198C21.957 100.418 21.8768 100.566 21.7793 101.926L21.6366 103.829C21.6157 104.107 21.6477 104.244 21.784 104.212C22.1928 104.116 22.682 103.627 23.0775 103.045L24.4611 101.037C24.5341 100.92 25.017 100.159 25.0972 100.011C25.1806 99.8762 25.2023 99.7848 25.1895 99.7303C25.1735 99.6621 25.0957 99.6372 24.9226 99.6348L24.3887 99.6883C24.254 99.6048 24.1764 99.3355 24.3616 99.2057C25.1312 99.0537 25.5978 98.9585 26.1839 98.8208C26.8926 98.6543 27.4482 98.5095 27.837 98.3894C28.027 98.4023 28.0902 98.7326 27.9763 98.86C27.6243 99.0146 27.2692 99.1555 26.8065 99.4511C26.258 99.81 25.8057 100.333 24.7807 101.725L24.0291 102.75C23.8423 102.995 23.6369 103.345 23.6625 103.454C23.6817 103.536 23.781 103.714 23.9172 103.926C24.6687 105.044 25.4956 106.115 26.3057 107.176C26.5757 107.53 26.8057 107.591 27.1456 107.569L27.5264 107.537C27.661 107.62 27.6874 107.916 27.5976 108.023C26.9642 108.143 26.3205 108.28 25.6799 108.431C25.0938 108.568 24.5246 108.716 23.8768 108.897C23.6941 108.854 23.6068 108.544 23.7239 108.43L24.1272 108.249C24.4278 108.121 24.4367 107.975 24.3374 107.797C24.2084 107.554 23.6989 106.854 23.5458 106.631L22.8568 105.657C22.344 104.943 22.171 104.696 21.8711 104.766C21.5577 104.84 21.5431 105.146 21.4891 105.834L21.3755 107.371C21.2804 108.558 21.3413 108.817 22.062 108.763L22.4291 108.734C22.5574 108.79 22.6037 109.11 22.4867 109.224C21.7443 109.369 21.046 109.519 20.3918 109.673C19.7376 109.826 19.1275 109.984 18.4524 110.171C18.2969 110.122 18.2305 109.778 18.4085 109.678L18.7878 109.517C19.3514 109.284 19.438 109.163 19.5356 107.803ZM30.0597 97.9104L35.157 96.7132C35.7158 96.5819 35.8946 96.4249 36.0278 96.1347C36.1177 96.0273 36.4103 95.9874 36.4872 96.07C36.3531 96.6623 36.1923 97.9369 36.196 98.6263C36.1326 98.785 35.7646 98.8714 35.6508 98.7543C35.5765 98.2541 35.4653 97.7193 35.2529 97.611C34.9459 97.4674 34.5683 97.513 34.214 97.5962L33.6143 97.7371C33.2054 97.8331 33.1918 97.8363 33.1587 98.2467L32.7201 104.706C32.6387 105.89 32.6859 106.152 33.4034 106.084L33.9237 106.034C34.0247 106.097 34.0574 106.42 33.9539 106.53C33.0889 106.705 32.3906 106.854 31.7637 107.002C31.1095 107.155 30.4994 107.313 29.688 107.532C29.5325 107.483 29.4389 107.145 29.6169 107.046L30.1324 106.853C30.6992 106.633 30.7827 106.499 30.8802 105.138L31.3597 98.6693C31.3887 98.3029 31.3655 98.2653 30.9157 98.3709L30.3569 98.5022C29.9753 98.5918 29.5865 98.7119 29.2857 99.0845C29.0643 99.3666 28.7972 99.7601 28.5869 100.457C28.4835 100.567 28.0859 100.589 28.0443 100.412C28.2619 99.44 28.4474 98.5768 28.5318 97.8954C28.5944 97.7944 28.7716 97.7528 28.9102 97.7921C28.9743 98.0647 29.133 98.1281 30.0597 97.9104ZM36.795 102.21C36.3917 100.493 36.8133 98.5532 37.9033 97.1323C38.8168 95.9398 39.9866 95.3487 40.9815 95.115C42.6443 94.7245 44.9408 95.1342 45.6323 98.0781C45.9684 99.5091 45.6687 101.233 44.9035 102.506C44.3749 103.378 43.1968 104.546 41.534 104.937C38.413 105.67 37.144 103.696 36.795 102.21ZM41.2787 95.7067C40.7608 95.8284 40.3142 96.1921 39.9581 96.6353C39.0726 97.7637 38.3918 100.253 38.9168 102.488C39.2242 103.797 40.0511 104.624 41.196 104.355C41.7411 104.227 42.365 103.821 42.8327 102.935C43.7368 101.213 43.8466 99.2309 43.456 97.5682C43.0815 95.9736 42.2328 95.4826 41.2787 95.7067ZM47.7521 101.175L48.1558 95.7309C48.2372 94.5469 48.1964 94.312 47.4726 94.3526L47.0886 94.3709C46.9331 94.3211 46.9003 93.998 47.0447 93.8778C47.8007 93.729 48.4853 93.5826 49.1395 93.4289C49.7937 93.2753 50.4038 93.1176 51.0652 92.9335C51.2344 92.98 51.2871 93.3272 51.1228 93.4233L50.7403 93.5707C50.1735 93.7901 50.0933 93.9384 49.9957 95.2987L49.8531 97.2017C49.8322 97.4799 49.8642 97.6162 50.0005 97.5842C50.4093 97.4881 50.8985 96.9993 51.294 96.4175L52.6776 94.4099C52.7506 94.2921 53.2334 93.5315 53.3137 93.3833C53.3971 93.2486 53.4188 93.1573 53.406 93.1027C53.39 93.0346 53.3122 93.0097 53.1391 93.0072L52.6051 93.0607C52.4705 92.9773 52.3928 92.7079 52.5781 92.5781C53.3477 92.4261 53.8143 92.3309 54.4003 92.1933C55.1091 92.0268 55.6647 91.8819 56.0535 91.7618C56.2435 91.7747 56.3067 92.105 56.1928 92.2324C55.8408 92.387 55.4856 92.528 55.023 92.8236C54.4745 93.1825 54.0222 93.7058 52.9971 95.0971L52.2456 96.1221C52.0587 96.3673 51.8534 96.7175 51.879 96.8266C51.8982 96.9083 51.9975 97.0863 52.1337 97.2988C52.8852 98.4166 53.7121 99.4879 54.5221 100.549C54.7921 100.902 55.0222 100.963 55.3621 100.941L55.7429 100.909C55.8775 100.993 55.9039 101.288 55.814 101.396C55.1807 101.516 54.5369 101.653 53.8964 101.803C53.3103 101.941 52.7411 102.089 52.0933 102.27C51.9105 102.226 51.8233 101.916 51.9404 101.802L52.3437 101.621C52.6443 101.493 52.6532 101.347 52.5539 101.169C52.4249 100.926 51.9153 100.226 51.7623 100.003L51.0733 99.0291C50.5605 98.3155 50.3875 98.0685 50.0876 98.1389C49.7741 98.2126 49.7596 98.518 49.7056 99.2066L49.592 100.743C49.4969 101.93 49.5578 102.189 50.2784 102.135L50.6456 102.106C50.7738 102.163 50.8202 102.482 50.7031 102.596C49.9608 102.742 49.2625 102.892 48.6083 103.045C47.9541 103.199 47.344 103.357 46.6689 103.544C46.5134 103.494 46.447 103.15 46.625 103.051L47.0043 102.89C47.5679 102.657 47.6545 102.536 47.7521 101.175Z" fill="#A95FFE" />
                      </g>
                      <g style={{ opacity: "0" }}>
                        <rect x="41.6914" y="38.9824" width="65.7903" height="18" transform="rotate(7.83049 41.6914 38.9824)" fill="white" />
                        <path d="M44.7593 52.7236L45.2629 52.8636C45.3347 52.9582 45.2492 53.2715 45.1129 53.3375C44.243 53.1896 43.5375 53.0785 42.8718 52.9869C42.2338 52.8992 41.6078 52.8272 40.7718 52.7405C40.6445 52.6382 40.7061 52.2934 40.8663 52.2589L41.4325 52.252C42.0403 52.2508 42.1508 52.1671 42.7443 50.9344L43.0224 50.3509C43.3592 49.6482 43.4007 49.2441 43.3856 48.6343C43.3641 47.5574 43.2972 46.5024 43.2499 45.4078C43.22 44.5981 43.1945 44.2696 42.6492 44.124L42.3498 44.0404C42.256 43.9003 42.3396 43.6009 42.5137 43.5683C43.2449 43.6971 43.8117 43.7892 44.3665 43.8655C45.0183 43.9552 45.5473 44.0138 46.1891 44.0738C46.3479 44.1521 46.2706 44.5089 46.1362 44.5611L45.6097 44.5876C45.2534 44.6093 45.1391 44.7208 45.1239 44.8317C45.1105 44.9288 45.0958 45.1388 45.0984 45.6337C45.1017 46.6375 45.16 47.9598 45.2254 48.7178L47.499 46.5715C48.0349 46.0658 48.7223 45.3831 48.7376 45.2722C48.7528 45.1612 48.6653 45.0785 48.4768 45.0102L47.9947 44.8167C47.8694 44.7005 47.9548 44.3873 48.1308 44.3408C48.9037 44.4754 49.3872 44.556 49.8588 44.6208C50.3165 44.6838 50.8454 44.7424 51.196 44.7623C51.3409 44.8388 51.2793 45.1836 51.1153 45.2459L50.761 45.2537C50.2502 45.2682 50.0528 45.3682 49.339 45.9343C48.2585 46.8032 47.2398 47.7371 46.3157 48.5992C45.557 49.2863 45.3745 49.5862 45.0749 50.2233L44.6166 51.1919C44.1015 52.2657 44.0653 52.5293 44.7593 52.7236ZM49.2555 50.3178C49.4958 48.5702 50.586 46.9113 52.1136 45.9767C53.3944 45.1919 54.6985 45.0603 55.711 45.1996C57.4031 45.4323 59.3992 46.6395 58.9872 49.6353C58.7869 51.0916 57.888 52.5931 56.7167 53.506C55.9101 54.13 54.3911 54.7972 52.699 54.5645C49.5229 54.1277 49.0476 51.8295 49.2555 50.3178ZM55.7758 45.8585C55.2488 45.7861 54.7013 45.9651 54.2098 46.2508C52.9781 46.9859 51.4486 49.0649 51.1358 51.3395C50.9527 52.6709 51.4275 53.7396 52.5926 53.8998C53.1473 53.9761 53.8752 53.8218 54.63 53.1625C56.0924 51.8798 56.9066 50.0699 57.1393 48.3778C57.3625 46.7551 56.7467 45.9921 55.7758 45.8585ZM65.6048 47.2244L65.2485 47.2461C64.6507 47.2769 64.5264 47.3587 63.9468 48.5933L62.5076 51.6598C62.3274 52.0448 62.0795 52.7173 62.0065 53.1454C61.8305 54.3224 62.2861 55.1199 63.5344 55.2915C65.1987 55.5204 66.1991 54.1035 66.9411 52.5098L67.8203 50.6381C68.2217 49.7747 68.5442 48.9712 68.634 48.7291C68.8681 48.0547 68.879 47.8725 68.1888 47.6504L67.7823 47.5239C67.7162 47.3876 67.7505 47.1379 67.9165 47.0618C68.6616 47.1926 69.1312 47.2713 69.6583 47.3438C70.2547 47.4258 70.6311 47.4634 71.2729 47.5234C71.3862 47.6238 71.3462 47.9151 71.1803 47.9912L70.836 48.0286C70.1909 48.0953 69.9499 48.2035 69.6068 48.8488C69.4577 49.1109 69.0539 49.8892 68.6525 50.7525L67.7341 52.7036C67.2152 53.8052 66.6996 54.78 65.7367 55.4107C65.0205 55.8916 63.889 56.1034 62.8211 55.9566C61.0735 55.7162 59.8121 54.921 60.0639 53.0902C60.1173 52.7019 60.3084 52.1346 60.5296 51.6563L62.0744 48.3358C62.5757 47.26 62.6258 46.9984 61.9356 46.7763L61.6103 46.6751C61.4831 46.5728 61.5805 46.2753 61.8 46.2207C62.4619 46.34 63.1396 46.4473 63.8054 46.5389C64.485 46.6323 65.0833 46.7005 65.739 46.7624C65.8662 46.8647 65.7927 47.1937 65.6048 47.2244ZM73.7698 47.9092L78.957 48.6226C79.5256 48.7008 79.7489 48.6184 79.9775 48.3955C80.0999 48.3275 80.3873 48.3953 80.4294 48.5C80.0915 49.0047 79.4837 50.1365 79.2395 50.7812C79.1234 50.9065 78.7489 50.855 78.6848 50.7049C78.795 50.2113 78.8833 49.6723 78.724 49.495C78.4891 49.2507 78.1203 49.1576 77.7597 49.108L77.1494 49.0241C76.7334 48.9668 76.7195 48.9649 76.5413 49.3361L73.8119 55.207C73.3107 56.2827 73.2606 56.5444 73.9546 56.7387L74.4582 56.8786C74.53 56.9733 74.4445 57.2866 74.3082 57.3526C73.4383 57.2047 72.7328 57.0936 72.0949 57.0058C71.4291 56.9143 70.8031 56.8423 69.9671 56.7556C69.8399 56.6533 69.8737 56.3047 70.0755 56.2759L70.6259 56.2809C71.2337 56.2797 71.36 56.184 71.9396 54.9495L74.7105 49.0843C74.8691 48.7529 74.861 48.7093 74.4033 48.6464L73.8346 48.5682C73.4463 48.5148 73.0403 48.4872 72.6257 48.727C72.3178 48.9107 71.9272 49.182 71.4808 49.7566C71.3445 49.8226 70.9657 49.6999 70.9905 49.5196C71.5425 48.6911 72.0257 47.952 72.3493 47.3464C72.4439 47.2747 72.6242 47.2994 72.7395 47.386C72.7014 47.6634 72.8267 47.7795 73.7698 47.9092ZM84.6888 49.8489L84.3325 49.8706C83.7348 49.9014 83.6104 49.9833 83.0308 51.2178L81.5916 54.2843C81.4115 54.6694 81.1636 55.3419 81.0906 55.7699C80.9146 56.9469 81.3702 57.7444 82.6184 57.9161C84.2827 58.145 85.2831 56.7281 86.0252 55.1343L86.9044 53.2626C87.3057 52.3993 87.6282 51.5957 87.718 51.3537C87.9521 50.6793 87.963 50.4971 87.2729 50.275L86.8663 50.1484C86.8003 50.0121 86.8346 49.7625 87.0005 49.6864C87.7456 49.8171 88.2153 49.8958 88.7423 49.9683C89.3387 50.0503 89.7151 50.088 90.3569 50.148C90.4703 50.2483 90.4302 50.5396 90.2643 50.6157L89.92 50.6531C89.2749 50.7199 89.0339 50.8281 88.6908 51.4733C88.5417 51.7355 88.1379 52.5137 87.7365 53.3771L86.8182 55.3281C86.2992 56.4297 85.7836 57.4045 84.8207 58.0352C84.1045 58.5161 82.9731 58.728 81.9051 58.5811C80.1576 58.3408 78.8962 57.5455 79.148 55.7147C79.2014 55.3264 79.3924 54.7591 79.6137 54.2808L81.1585 50.9603C81.6597 49.8846 81.7098 49.623 81.0196 49.4009L80.6944 49.2996C80.5671 49.1973 80.6646 48.8998 80.8841 48.8452C81.546 48.9645 82.2237 49.0718 82.8894 49.1634C83.569 49.2569 84.1673 49.325 84.823 49.3869C84.9502 49.4892 84.8767 49.8183 84.6888 49.8489ZM89.0958 57.3089L91.4514 52.3052C91.8724 51.4021 91.9345 51.1563 91.4624 50.9925L91.0716 50.8539C90.9621 50.7258 91.0437 50.4403 91.2197 50.3938C91.9921 50.4294 92.8041 50.4845 93.9691 50.6447C95.37 50.8374 96.3419 51.1689 96.8514 51.677C97.3111 52.136 97.4625 52.6797 97.3824 53.2622C97.226 54.3995 96.1415 54.8863 95.2033 54.9268C94.847 54.9485 94.7719 54.9805 94.782 55.0102C94.7485 55.048 94.8279 55.0872 95.0384 55.2009C95.7492 55.5813 96.2067 56.3649 96.0846 57.2526C95.8729 58.7921 94.5667 59.6582 93.0565 59.7473C92.2292 59.8031 91.5319 59.7354 90.6858 59.6191C90.3946 59.579 90.0775 59.5213 89.802 59.4693C89.5265 59.4173 89.2788 59.3691 89.1262 59.3481C88.5714 59.2718 87.9315 59.1979 87.2204 59.1284C87.107 59.028 87.1705 58.6693 87.3546 58.6663L87.7663 58.6523C88.4057 58.6272 88.5162 58.5435 89.0958 57.3089ZM93.5612 51.7616L92.4134 54.1474C92.2548 54.4789 92.2907 54.5262 92.8454 54.6025C94.2463 54.7952 95.3531 54.043 95.5209 52.8225C95.6201 52.1012 95.2129 51.4658 94.2975 51.34C93.8259 51.2751 93.7805 51.2971 93.5612 51.7616ZM91.7889 55.503L90.753 57.6923C90.3358 58.5676 90.5933 58.9563 91.2868 59.0517C92.5489 59.2252 93.8852 58.4481 94.0874 56.9779C94.2228 55.9932 93.6908 55.3406 92.609 55.1918C92.0126 55.1098 91.9671 55.1318 91.7889 55.503ZM101.852 51.7713L104.931 52.1947C105.819 52.3168 106.611 52.4116 106.823 52.4125C106.694 52.6349 106.196 53.5839 105.816 54.4927C105.726 54.6357 105.364 54.6 105.282 54.4757C105.392 53.9821 105.406 53.5742 105.373 53.4001C105.306 53.0659 104.968 52.8499 104.275 52.7545L103.193 52.6057C102.721 52.5409 102.676 52.5629 102.437 53.067L101.342 55.3754C101.164 55.7466 101.188 55.7781 101.549 55.8277L102.464 55.9536C103.185 56.0528 103.381 55.9666 103.833 55.3505L104.059 55.0424C104.215 54.9367 104.56 54.9982 104.584 55.1288C104.359 55.5358 104.122 56.0261 103.869 56.5284C103.63 57.0325 103.436 57.5147 103.251 57.9413C103.124 58.037 102.762 58.0013 102.722 57.8827L102.811 57.5417C102.986 56.8874 102.862 56.7574 102.141 56.6582L101.226 56.5323C100.865 56.4827 100.804 56.5167 100.641 56.8759L99.8817 58.4955C99.584 59.1187 99.4278 59.5353 99.5063 59.7864C99.5987 60.0393 99.8073 60.1669 100.82 60.3062C102.026 60.4721 102.518 60.4973 103.868 59.1003C104.036 59.0103 104.351 59.0819 104.412 59.2598C104.081 59.9209 103.399 60.9718 103.043 61.3043C102.614 61.2313 102.062 61.1411 101.479 61.061C100.898 60.9671 100.274 60.8812 99.7057 60.803L97.9027 60.5551C97.2092 60.4597 96.5832 60.3877 95.8859 60.3201C95.7586 60.2178 95.8202 59.873 96.022 59.8442L96.5031 59.8397C97.1683 59.8323 97.2926 59.7504 97.8722 58.5159L100.204 53.5796C100.706 52.5039 100.756 52.2423 100.119 52.0417L99.794 51.9404C99.6825 51.8262 99.7541 51.511 99.9578 51.4683C100.606 51.5857 101.311 51.6969 101.852 51.7713Z" fill="#A95FFE" />
                      </g>
                    </svg>
                  </div>
                  <div className={"\x61bsolute \x2dleft-[\x310%] \x6dd:\x2dleft-[\x328%] \x6cg:\x2dleft-[\x313%] \x78l:\x2dleft-[\x30.\x37em] \x6dd:\x2dbottom-[\x310.\x34em]"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.3, 0.3)", opacity: "0" } as CSSProperties}>
                    <img className={"\x77-[\x345.\x36em] \x68-auto"} style={{ color: "transparent" }} alt="Girl 2" loading="lazy" width="895" height="968" decoding="async" src="/site-assets/e79f3258f219c8a7.png" />
                  </div>
                  <div className={"\x6dd:\x61bsolute \x6dd:\x6ceft-1/\x33 \x6dd:\x77-[\x348%] \x78l:\x6ceft-[\x347%] \x6dd:\x62ottom-0 \x6dd:\x74op-0 \x6cg:\x6ceft-[\x345%] \x78l:\x77-[\x332.\x35em] \x66lex \x66lex-col \x67ap-y-4 \x7a-3 \x70x-4 \x6dd:\x70x-0 \x77-full \x6dt-auto \x78l:\x67ap-y-[\x30.\x35em]"}>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end \x6dd:\x2dleft-10"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <span className={"\x73hadow-bubble \x69nset-0 \x74op-2 \x2dz-1"} />
                      <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock \x6dax-w-[\x328.\x31875em]"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="451" height="112" decoding="async" src="/site-assets/06fc7d7c7b5e78c3-c8b73f077bc4256bc83509abc666fa4b.png" srcSet="/site-assets/06fc7d7c7b5e78c3-c8b73f077bc4256bc83509abc666fa4b.png 470w" sizes="451px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="351" height="84" decoding="async" src="/site-assets/48649bdf6bbadd4c-8b91c2c02915ac48a7526fcdb37db188.png" />
                    </div>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end \x6ceft-0"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <span className={"\x73hadow-bubble \x69nset-0 \x74op-2 \x2dz-1"} />
                      <img className={"\x77-[\x3110%] \x68-auto \x68idden \x6dd:\x62lock \x6dax-w-[\x332.\x3375em]"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="518" height="111" decoding="async" src="/site-assets/11d4742cbb657a89-560fb8b6a3ce83d3706a3a41ac85d2a1.png" srcSet="/site-assets/11d4742cbb657a89-560fb8b6a3ce83d3706a3a41ac85d2a1.png 540w" sizes="518px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="351" height="106" decoding="async" src="/site-assets/d93d3929b2eb55b3-10b8b13ac23d24c3160c432d3c252a5c.png" />
                    </div>
                    <div className={"\x72elative \x77-full \x66lex \x69tems-end \x6dd:\x6ceft-25 \x32xl:\x6ceft-20"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(20px, 0px)", opacity: "0" } as CSSProperties}>
                      <span className={"\x73hadow-bubble \x69nset-0 \x74op-2 \x2dz-1"} />
                      <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock \x6dax-w-[\x328.\x3625em]"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="458" height="112" decoding="async" src="/site-assets/3f140582c76c241f-caaf10e2db4b5644e621cb69b9f08490.png" srcSet="/site-assets/3f140582c76c241f-caaf10e2db4b5644e621cb69b9f08490.png 478w" sizes="458px" />
                      <img className={"\x77-full \x68-auto \x6dd:\x68idden"} style={{ color: "transparent" }} alt="Experience 1 badges" loading="lazy" width="351" height="84" decoding="async" src="/site-assets/8317f9f3bd6aea80-8d7fab366948d0fcee473d7c859091f1.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionRecapturingMagicMeaning() {
  return (
    <section className={"\x72elative"}>
      <div className={"\x74ext-brand-white fluid-block \x6din-h-[\x335.\x3625em] \x6dd:\x68-[\x350em] \x32xl:\x68-screen \x72elative \x66lex \x69tems-end \x6dd:\x69tems-center"} id="article-3">
        <div className={"\x61bsolute \x69nset-0 \x66lex \x69tems-center"}>
          <div className={"\x77-full \x68-auto \x61bsolute \x69nset-0"} />
          <div className={"\x77-[\x38em] \x6dd:\x77-[\x316em] \x61spect-[\x3251/\x3388] \x61bsolute \x6ceft-1/\x34 \x74op-2/\x33 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32"} />
          <div className={"\x77-[\x35em] \x61spect-[\x378/\x3248] \x61bsolute \x72ight-1/\x38 \x62ottom-1/\x34 \x68idden \x6dd:\x62lock"} />
          <div className={"\x77-[\x38em] \x6dd:\x77-[\x314em] \x61spect-square \x61bsolute \x6ceft-4 \x2dbottom-[\x310%] \x68idden \x6dd:\x62lock"} />
          <div className={"\x77-[\x35em] \x6dd:\x77-[\x314em] \x61spect-square \x61bsolute \x72ight-[\x385%] \x6dd:\x72ight-4 \x2dbottom-[\x35%]"} />
          <div className={"\x77-[\x314em] \x61spect-square \x61bsolute \x6ceft-64 \x2dtop-32"} />
          <div className={"\x61bsolute \x61spect-[\x328/\x311] \x77-[\x310em] \x6dd:\x77-[\x320em] \x6ceft-[\x32em] \x74op-[\x38em]"} />
          <div className={"\x61bsolute \x61spect-[\x32/\x31] \x77-[\x33em] \x6dd:\x77-[\x36.\x325em] \x6ceft-[\x340%] \x74op-[\x330%]"} />
          <div className={"\x61bsolute \x61spect-[\x314/\x36] \x77-[\x34em] \x6dd:\x77-[\x39em] \x6ceft-[\x355%] \x74op-[\x31em]"} />
          <div className={"\x61bsolute \x61spect-[\x316/\x311] \x77-[\x35em] \x6dd:\x77-[\x310em] \x72ight-[\x33em] \x74op-[\x330%]"} />
          <div className={"\x6dt-auto \x6dl-auto \x72ight-5 \x62ottom-5 \x6dd:\x62ottom-auto \x6dd:\x6dy-auto \x6dd:\x6ceft-[\x351%] \x77-1/\x32 \x6dd:\x77-1/\x33 \x6dax-w-[\x322.\x3125em] \x72elative \x7a-1 \x6dd:\x72ight-auto \x6dd:\x6dl-0"}>
            <img className={"\x77-full \x68-auto \x6fbject-contain \x6fbject-bottom \x61bsolute \x69nset-0"} style={{ color: "transparent" }} alt="background image" loading="lazy" width="355" height="646" decoding="async" src="/site-assets/3d98964aa0756a7b.png" />
            <div className={"\x72elative"}>
              <span className={"\x61bsolute \x62g-brand-lime \x73ize-3 \x6dd:\x73ize-[\x31.\x3125em] \x61spect-square \x2dleft-1 \x2dtop-1 \x6dd:\x2dleft-2 \x6dd:\x2dtop-2"} />
              <span className={"\x61bsolute \x62g-brand-lime \x73ize-3 \x6dd:\x73ize-[\x31.\x3125em] \x61spect-square \x2dright-1 \x2dtop-1 \x6dd:\x2dright-2 \x6dd:\x2dtop-2"} />
              <span className={"\x61bsolute \x62g-brand-lime \x73ize-3 \x6dd:\x73ize-[\x31.\x3125em] \x61spect-square \x2dright-1 \x2dbottom-1 \x6dd:\x2dright-2 \x6dd:\x2dbottom-2"} />
              <span className={"\x61bsolute \x62g-brand-lime \x73ize-3 \x6dd:\x73ize-[\x31.\x3125em] \x61spect-square \x2dleft-1 \x2dbottom-1 \x6dd:\x2dleft-2 \x6dd:\x2dbottom-2"} />
              <svg className={"\x77-full \x68-auto \x6dy-auto \x61spect-[\x3357/\x3648] \x72elative"} width="357" height="648" viewBox="0 0 357 648" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className={"\x61nimate-stroke-flow"} x="1.5" y="1.5" width="354" height="645" stroke="#76FF02" strokeWidth="3" strokeDasharray="6 6" />
              </svg>
            </div>
          </div>
        </div>
        <div className={"\x70y-10 \x6dd:\x70x-5 \x6cg:\x70x-10 \x78l:\x70x-38 \x78l:\x70y-18 \x63ontainer \x72elative \x7a-1 \x74ext-center"}>
          <h2 className={"\x73r-only"}>Recapturing magic &amp; meaning</h2>
          <div className={"\x72elative"}>
            <p className={"h3-small \x72elative \x2dleft-[\x319%] \x6db-[\x30.\x31em] \x6dd:\x6db-[\x30.\x31em] \x75ppercase"} aria-label="Recapturing" />
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">R</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
            </div>
            <p />
            <p className={"h1-large \x6db-0 \x6ceading-[\x30.\x385] \x61nimate-clip-bg"} aria-label="magicmagic">
              <span className={"\x69nline-block \x61lign-baseline \x72elative \x6dr-[\x30.\x305em]"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x70r-[\x30.\x31em] \x62lock"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
            </div>
            <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-brand-cream \x74ext-mask \x62g-brand-sea \x77-full \x68-full \x70t-[\x30.\x31em] \x70r-[\x30.\x31em]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
              </div>
            </span>
            <p />
            <p className={"\x66ont-normal \x62lock \x6dt-2 \x72elative \x6dd:\x2dtop-[\x30.\x39em] \x6ceft-[\x35%]"}>
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0 \x6dr-[\x30.\x31em] h4"}>&amp;</span>
                <span className={"\x69talic h2 \x66ont-didot"}>meaning</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6cg:\x67rid \x6cg:\x67rid-cols-12 \x6cg:\x67ap-x-8 \x6cg:\x69tems-center \x70y-20 \x6dd:\x70y-30 \x74ext-center \x63ontainer"}>
          <div className={"\x6cg:\x63ol-start-2 \x6cg:\x63ol-span-10 \x6cg:\x70x-8"}>
            <div className="wysiwyg">
              <p className={"\x74ext-body1"}>After a few years where the ease and convenience of social commerce took over, the pendulum is swinging back. Gen Zs are now driving a <mark className="mark-green">counter‑movement</mark> away from mindless shopping — and the doom increasingly associated with it — as they seek out consumer experiences, apps and communities that demand more conscious, <mark className="mark-pink">active effort</mark> and participation.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer fluid-block"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"\x72elative \x6dd:\x72ow-start-1 \x6dd:\x72ow-span-2 \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x61spect-[\x3746/\x3920] \x6dax-w-[\x316em] \x6dx-auto \x77-full"}>
                <span className={"radial-gradient-pink \x61bsolute \x69nset-0 \x6ceft-1/\x34 \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x61spect-square \x6fpacity-40 \x62lur-2xl \x77-[\x3150vw] \x68-[\x3150vw] \x2dz-1"} />
                <div className={"\x61bsolute \x61spect-[\x347/\x346] \x68-[\x3120%] \x6ceft-1/\x32 \x2dtranslate-x-[\x353.\x32%] \x74op-1/\x32 \x2dtranslate-y-1/\x32"} />
              </div>
            </div>
            <div className={"wysiwyg \x6dd:\x72ow-start-2 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3"}>That means they’re leaning into shopping experiences that require some level of effort in their journey of search, discovery and purchase. From scouring newsletters and comment sections to seeking out resale goods, community events and IRL queues, Gen Zs are welcoming shopping experiences that demand more from them; more time, energy and agency.</p>
              <p className={"\x74ext-body3"}>Of course, convenience shopping will always have its place, but these more mindful avenues of shopping are, counterintuitively, infusing just the right amount of intentional “micro‑friction”. This slightest bit of friction is sparking magic in the shopping space.</p>
              <p className={"\x74ext-body3"}>“In the rush to engineer convenience into social shopping, marketers can lose sight of the bigger picture,” says Archrival’s Harms. “Our job is to add value to people’s lives, and real value comes from meaning and connection. Easy checkout is fantastic, don't get me wrong, but brands also have the chance to offer something far deeper and longer lasting.”</p>
              <p className={"\x74ext-body2"}>For brands and marketers, there’s an opportunity to reconsider the consumer experience through a new lens: engineering not just for ease, but rather for intentional inefficiencies — and <mark className="mark-blue">humanity.</mark></p>
              <p className={"\x74ext-body3"}>In fact, many of the Gen Z‑driven retail and shopping trends of the last couple years speak to this consumer mindset shift. As Gen Zs gravitate towards shopping experiences that necessitate an element of chasing, digging, in‑person connection and generally engaging more intentionally, they’re shifting attention away from the mindless scroll.</p>
              <p className={"\x74ext-body2"}>The brands that will win the next era of retail will engineer shopping experiences that offer <mark className="mark-blue">both ease and friction</mark> — to feel overall more human.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x74ext-center \x6dy-20 \x63ontainer \x70t-[\x312rem] \x72elative"} id="article-3-1">
          <div className={"\x61bsolute \x77-[\x325em] \x6dd:\x77-[\x350em] \x61spect-square \x6ceft-0 \x74op-0 \x2dtranslate-x-1/\x32 \x6dd:\x2dtranslate-x-1/\x34 \x6dd:\x2dtranslate-y-1/\x32 \x7a-[\x2d1]"} />
          <div className={"\x61bsolute \x77-[\x38em] \x6dd:\x77-[\x316.\x375em] \x61spect-[\x3268/\x3700] \x2dleft-4 \x6dd:\x2dleft-8 \x2dbottom-8"} />
          <h2 className={"\x73r-only"}>Gen Z craves the thrill of the chase</h2>
          <div className={"\x72elative"}>
            <p className={"h3-small \x72elative \x2dleft-[\x315%] \x6db-[\x30.\x38rem] \x6dd:\x6db-[\x30.\x31em] \x75ppercase"} aria-label="Gen Z" />
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">G</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
            </div>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">Z</div>
            </div>
            <p />
            <p className={"h1-large md:h1 \x6db-0 \x6ceading-[\x30.\x385] \x61nimate-clip-bg \x6dd:\x6dx-auto \x70l-[\x315%] \x6dd:\x70l-0 \x74ext-left \x6dd:\x74ext-center"} aria-label="cravescravesthe thrill">
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock \x70x-[\x30.\x315em]"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
            </div>
            <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-mask \x62g-brand-lime \x77-full \x68-full \x70t-[\x30.\x31em] \x70x-[\x30.\x315em]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <span>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
              </div>
            </span>
            <p />
            <p className={"\x66ont-normal \x62lock \x6dt-2 \x72elative \x6dd:\x2dtop-[\x30.\x37em] \x6dd:\x6ceft-[\x36%] \x78l:\x6ceft-[\x38%] \x74ext-center \x70l-[\x320%] \x6dd:\x70l-0"}>
              <span className={"\x69nline-block \x61lign-baseline \x72elative"} aria-label="Of the chase">
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0 h5-small"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">O</div>
            </div>
            <span className={"\x69talic h5-large \x66ont-didot"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
            </span>
            <p />
            <div className={"\x77-[\x314em] \x61spect-square \x61bsolute \x6ceft-196 \x62ottom-[\x2d3em]"} />
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body1"}>The resale renaissance</p>
              <p className={"\x74ext-body3"}>
            From resale apps to retail racks, Gen Zs want to feel like they’re ‘doing the work’ of digging around to discover something for themselves. Even when tech and AI is integrated into the shopping experience, <span className={"\x74ext-body2"}>Gen Zs don’t want to bypass the <mark className="mark-green">emotional journey</mark> that comes with the consumer journey. They want the thrill of the chase.</span></p>
              <span />
            </div>
            <div className={"\x72elative \x6dd:\x72ow-start-1 \x6dd:\x72ow-span-2 \x6dd:\x63ol-start-2"}>
              <div className={"\x6din-h-[\x325em] \x6dd:\x6din-h-auto"}>
                <div className={"\x72elative \x61spect-[\x3618/\x3484] \x6dx-auto \x77-full \x6dd:\x77-[\x380%] \x6dd:\x77-full \x6dd:\x6dl-16"}>
                  <div className={"\x61bsolute \x61spect-[\x3555/\x3548] \x77-[\x3100%] \x6dd:\x2dleft-16 \x74op-0"} />
                  <div className={"\x61bsolute \x61spect-[\x3280/\x3187] \x77-[\x350%] \x72ight-0 \x62ottom-[\x2d5em] \x6dd:\x62ottom-0 \x74ranslate-y-1/\x32 \x6dd:\x74ranslate-y-1/\x31"} />
                </div>
                <span className={"\x6ceft-1/\x32 \x74op-0 radial-gradient-blue \x77-[\x393.\x375em] \x68-[\x343.\x375em] \x61bsolute \x2dz-1 \x6fpacity-60 \x2dtranslate-x-1/\x32"} />
              </div>
            </div>
            <div className={"wysiwyg \x6dd:\x72ow-start-2 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body3"}>
              It’s why engagement with resale continues to grow among Gen Z users. Resale sites like Depop are balancing their user experiences, to serve the shopper who is <i>buying</i> and needs speed with the shopper who is <i>shopping</i> and needs excitement. “Our users clearly enjoy the thrill of finding something they truly love on Depop, and this feeling is always intensified when there’s an element of chase involved in the discovery,” says Steve Dool, Depop’s senior director of brand and marketing. “It reflects a deeper cultural shift in how we consume in the digital age: it’s intentional at some times; and other times, it’s passive. So, it’s expanded shopping into more of an experience based on your mindset, rather than a strictly defined transaction. Users can get in, find a purchase they want and get out quickly, or they can follow rabbit holes that lead them to unexpected surprises that feel similarly gratifying.”
            </p>
              <p className={"\x74ext-body3"}>
              Vintage hauls are replacing fast fashion hauls on short‑form video platforms, as creators show off their assortments of unique finds. There are over 800,000 videos using the hashtag #ThriftHaul on TikTok.
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGenZDemandsIrl() {
  return (
    <section className={"site-section--demands-irl \x72elative"}>
      <div className={"fluid-block \x70t-[\x35em] \x6dd:\x70t-[\x312em] \x72elative \x66lex \x69tems-end \x6dd:\x69tems-center \x6fverflow-clip"} id="article-3-2">
        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-b \x66rom-brand-bubblegum/\x350 \x74o-transparent \x2dz-[\x31]"} />
        <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x77-full"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -25%)" } as CSSProperties}>
          <img className={"\x77-full \x68-auto \x68idden \x6dd:\x62lock"} style={{ color: "transparent" }} alt="background image" loading="lazy" width="1440" height="482" decoding="async" src="/site-assets/8bd69abf335a488d.png" />
          <img className={"\x77-full \x68-auto \x6dd:\x68idden \x6dix-blend-darken"} style={{ color: "transparent" }} alt="background image" loading="lazy" width="910" height="274" decoding="async" src="/site-assets/597d6636c4f89656.png" />
        </div>
        <div className={"\x70y-10 \x6dd:\x70t-50 \x6dd:\x70x-5 \x6cg:\x70x-10 \x78l:\x70x-38 \x78l:\x70b-18 \x63ontainer \x72elative \x7a-1 \x74ext-center"}>
          <h2 className={"\x73r-only"}>Gen z demands irl connection</h2>
          <div className={"\x72elative"}>
            <p className={"h3-small \x72elative \x2dleft-[\x319%] \x6db-[\x30.\x31em] \x6dd:\x6db-[\x30.\x31em] \x75ppercase"} aria-label="gen z" />
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
            </div>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">z</div>
            </div>
            <p />
            <p className={"\x61nimate-clip-bg"} aria-label="demandsdemandsIRLConnection">
              <span className={"\x69nline-block \x61lign-baseline \x72elative \x6dr-[\x30.\x305em] h1-large \x6db-0 \x6ceading-[\x31]"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
            </div>
            <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-mask \x62g-brand-lime \x77-full \x68-full \x70t-[\x30.\x31em]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <span className={"\x69nline-block \x61lign-baseline \x72elative h1-large \x6db-0 \x6ceading-[\x31]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">I</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">R</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">L</div>
              </div>
            </span>
            <span className={"\x66ont-normal \x6dt-2 \x72elative \x6dd:\x2dtop-[\x30.\x39em] \x6ceft-[\x35%] \x6dd:\x62lock"} aria-label="Connection">
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0 \x6dr-[\x30.\x31em] h5-large md:h4"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">C</div>
                      </div>
                    </div>
                  </div>
                </span>
                <span className={"\x69talic h5-large md:h2 \x66ont-didot"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                      </div>
                    </div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">
                      <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                        <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                      </div>
                    </div>
                  </div>
                </span>
              </span>
            </span>
            <p />
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2 \x6frder-first \x6dd:\x6frder-last"}>
              <p className={"\x74ext-body1"}><mark className="mark-pink">Tangible</mark> experiences</p>
              <p className={"\x6dd:\x70r-8"}>
                <span className={"\x74ext-body3"}>We’ve known for some time that Gen Z loves shopping in‑store. But bricks‑and‑mortar is perhaps more culturally relevant than ever, as </span>
                <span className={"\x74ext-body2"}>Gen Zs now believe that shopping in‑person feels more luxurious, fun and <mark className="mark-green">‘special’</mark> versus scrolling on social media, </span>
                <span className={"\x74ext-body3"}>per Archrival research. Seventy per cent of Gen Zs say they’re very or somewhat interested in attending in‑person brand events or activations. And of the Gen Zs who have attended an in‑person brand event or activation, nearly three‑quarters (72 per cent) report that the experience made them view the brand more positively.</span>
              </p>
              <p className={"\x74ext-body3"}>“I am a big Amazon shopper, but I do love the in‑store shopping experience,” says Nick Pugh, a student at the University of Illinois. “I love going to the mall. The one near my house, the Oakbrook Centre, has luxury stores, but I shop at Abercrombie, Zara, Lululemon and Alo.” He recalls one of his favourite shopping experiences was at the Arc’teryx store around Christmas time, when the brand held a “customer appreciation day”. There was a DJ, free pizza and kombucha, and a 50 per cent discount across the store. “I’d wanted a half‑zip for a while, but I bought it that day, and now it reminds me of that great experience,” he says. </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x61spect-[\x3314/\x3392] \x6dx-auto \x77-[\x360%] \x6dax-w-[\x319em] \x6dd:\x77-full \x68-auto"} />
              <div className={"\x61bsolute \x61spect-[\x3822/\x3598] \x77-[\x3150%] \x72ight-0 \x74op-0"} />
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x70y-10 \x6dd:\x70y-15 \x63ontainer \x72elative \x78l:\x66lex \x78l:\x66lex-col \x6dt-40 \x6dd:\x6dt-0"}>
          <div className={"\x66lex \x66lex-col \x66lex-grow \x73ticky \x74op-0 \x32k:\x74op-40"}>
            <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x6db-8 \x72elative \x7a-5 \x6dd:\x70t-header"}>
              <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                <div className={"\x74ext-body1"}>For each of the following statements, select if it applies more to shopping at an <mark className="mark-green">in‑person</mark> retail space or more to shopping on <mark className="mark-pink">social media</mark>. </div>
                <p className={"\x6db-0 \x6dt-4 \x75ppercase \x74ext-caption"}>(Among Gen Zs)</p>
              </div>
              <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
            </div>
            <div className={"\x6db-10 \x6dd:\x6db-20 \x32k:\x6dy-40 \x72elative"}>
              <span className={"\x68-[\x3120%] \x6fpacity-70 \x77-[\x3120%] \x61bsolute \x6ceft-1/\x32 \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-purple \x62g-radial \x70ointer-events-none \x2dz-1"} />
              <svg className={"\x61bsolute \x6ceft-1/\x32 \x74op-0 \x7a-1 \x68-full \x77-[\x31px]"} width="1" height="457" viewBox="0 0 1 457" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path opacity="0.3" d="M0.5 0V457" stroke="#161414" strokeDasharray="8 8" />
              </svg>
              <div className={"\x72elative \x77-full \x6dax-w-[\x345.\x3375em] \x6dx-auto"}>
                <div className={"\x61bsolute \x68-full \x77-full \x2dz-1 \x69nvisible \x6cg:\x76isible"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -5%)" } as CSSProperties}>
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x72otate-3 \x2dleft-[\x333%] \x74op-[\x353%] style_float-1__7TKRg"} style={{ color: "transparent" }} alt="Chart Image 1" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/7c396d783e695ad8.png" />
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x2drotate-2 \x6ceft-[\x3110%] \x74op-[\x39%] style_float-2__nUkGQ"} style={{ color: "transparent" }} alt="Chart Image 2" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/357b06ffa6be3057.png" />
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x6ceft-[\x3100%] \x74op-[\x330%] \x72otate-[\x35deg] style_float-3__1SzTW"} style={{ color: "transparent" }} alt="Chart Image 3" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/86291438a9297ffa.png" />
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x72otate-1 \x6ceft-[\x35%] \x74op-[\x390%] \x72otate-[\x2d12deg] style_float-4__rsu2X"} style={{ color: "transparent" }} alt="Chart Image 4" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/83b164ac0c5afdca.png" />
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x72otate-[\x315deg] \x2dleft-[\x328%] style_float-5__54dZ_"} style={{ color: "transparent" }} alt="Chart Image 5" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/3cd5ec1833ac73b8.png" />
                  <img className={"\x61bsolute !\x77-1/\x34 !\x6dax-w-[\x312.\x35em] \x6fbject-contain \x77-full \x68-auto \x61spect-square \x72otate-2 \x6ceft-[\x392%] \x74op-[\x380%] \x72otate-[\x2d10deg] style_float-6__rLYQc"} style={{ color: "transparent" }} alt="Chart Image 6" loading="lazy" width="200" height="200" decoding="async" src="/site-assets/c36b5af1b04a86c9.png" />
                </div>
                <div className={"\x72elative"}>
                  <div className={"\x67rid \x67rid-cols-2 \x67ap-x-12 \x74ext-body2 \x6dd:\x74ext-body1 \x6db-6"}>
                    <div className={"\x74ext-right"}>Retail</div>
                    <div className={"\x74ext-left"}>Social media</div>
                  </div>
                  <div className="" style={{ "--value-left": "0.64", "--value-right": "0.36", "--progress": "0" } as CSSProperties}>
                    <div className={"\x68-12 \x67rid \x67rid-cols-2 \x62g-brand-gray chart-horizontal"}>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-end \x72elative"}>
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueLeft"}>64%</div>
                        <div className={"barLeft \x62g-gradient-to-l \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF]"} />
                      </div>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-start \x72elative"}>
                        <div className={"barRight \x62g-[#\x447EBFF]"} />
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueRight"}>36%</div>
                      </div>
                    </div>
                    <p className={"\x6db-8 \x6dt-2 \x74ext-center \x66ont-bold \x69talic \x74ext-base \x66ont-adobe \x75ppercase"}>More like a special occasion</p>
                  </div>
                  <div className="" style={{ "--value-left": "0.6", "--value-right": "0.4", "--progress": "0" } as CSSProperties}>
                    <div className={"\x68-12 \x67rid \x67rid-cols-2 \x62g-brand-gray chart-horizontal"}>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-end \x72elative"}>
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueLeft"}>60%</div>
                        <div className={"barLeft \x62g-gradient-to-l \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF]"} />
                      </div>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-start \x72elative"}>
                        <div className={"barRight \x62g-[#\x447EBFF]"} />
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueRight"}>40%</div>
                      </div>
                    </div>
                    <p className={"\x6db-8 \x6dt-2 \x74ext-center \x66ont-bold \x69talic \x74ext-base \x66ont-adobe \x75ppercase"}>More luxurious</p>
                  </div>
                  <div className="" style={{ "--value-left": "0.52", "--value-right": "0.48", "--progress": "0" } as CSSProperties}>
                    <div className={"\x68-12 \x67rid \x67rid-cols-2 \x62g-brand-gray chart-horizontal"}>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-end \x72elative"}>
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueLeft"}>52%</div>
                        <div className={"barLeft \x62g-gradient-to-l \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF]"} />
                      </div>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-start \x72elative"}>
                        <div className={"barRight \x62g-[#\x447EBFF]"} />
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueRight"}>48%</div>
                      </div>
                    </div>
                    <p className={"\x6db-8 \x6dt-2 \x74ext-center \x66ont-bold \x69talic \x74ext-base \x66ont-adobe \x75ppercase"}>More fun</p>
                  </div>
                  <div className="" style={{ "--value-left": "0.44", "--value-right": "0.56", "--progress": "0" } as CSSProperties}>
                    <div className={"\x68-12 \x67rid \x67rid-cols-2 \x62g-brand-gray chart-horizontal"}>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-end \x72elative"}>
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueLeft"}>44%</div>
                        <div className={"barLeft \x62g-[#\x447EBFF]"} />
                      </div>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-start \x72elative"}>
                        <div className={"barRight \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF]"} />
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueRight"}>56%</div>
                      </div>
                    </div>
                    <p className={"\x6db-8 \x6dt-2 \x74ext-center \x66ont-bold \x69talic \x74ext-base \x66ont-adobe \x75ppercase"}>More personalised</p>
                  </div>
                  <div className="" style={{ "--value-left": "0.42", "--value-right": "0.58", "--progress": "0" } as CSSProperties}>
                    <div className={"\x68-12 \x67rid \x67rid-cols-2 \x62g-brand-gray chart-horizontal"}>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-end \x72elative"}>
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueLeft"}>42%</div>
                        <div className={"barLeft \x62g-[#\x447EBFF]"} />
                      </div>
                      <div className={"\x68-full \x66lex \x69tems-center \x6austify-start \x72elative"}>
                        <div className={"barRight \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF]"} />
                        <div className={"h5 \x6d-0 \x70x-2 \x72elative \x74op-1 valueRight"}>58%</div>
                      </div>
                    </div>
                    <p className={"\x6db-8 \x6dt-2 \x74ext-center \x66ont-bold \x69talic \x74ext-base \x66ont-adobe \x75ppercase"}>More convenient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer \x6dd:!\x6dt-0"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3"}>“Part of our success is the fact that we have the second largest store footprint in the US. During the Covid crisis, obviously everything shifted to e‑commerce. Well, turns out a teenager is a teenager is a teenager. They are social creatures. They are going to be on social media, but they also want to be in the physical world,” says American Eagle CMO Craig Brommers. “When you have 35,000 retail associates like we do at American Eagle, they’re almost the best marketing tool that we have, because those interactions, those human interactions, are what really cement our relationship with our customers, more so than social media.”</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"fluid-block \x72elative"}>
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer \x70y-0"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body1"}><mark className="mark-green">Queue</mark> culture </p>
              <p className={"\x74ext-body3"}>
            Across cities like New York, LA, London and Paris, queues for designer sample sales, celebrity closet clear‑outs and pop‑up shops have taken on a life of their own. And waiting in line has become a status symbol for young people. Viral posts show crowds of Gen Zs turning the act of waiting into impromptu fashion shows and social gatherings, where the energy of the line rivals the event itself.
          </p>
              <span />
            </div>
            <div className={"\x72elative \x6dd:\x72ow-start-1 \x6dd:\x72ow-span-2 \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x6din-h-[\x314em] \x6dd:\x6dt-18"}>
                <span className={"\x74op-0 radial-gradient-blue \x77-[\x393.\x375em] \x68-[\x343.\x375em] \x61bsolute \x2dz-1 \x74ranslate-y-24 \x2dtranslate-x-2/\x36 \x6fpacity-40"} />
                <div className={"queue-culture-img \x61bsolute \x61spect-[\x3839/\x3453] \x77-[\x3125%] \x72ight-0 \x74op-0"}>
                  <div className={"\x61bsolute \x61spect-square \x77-[\x350%] \x6ceft-0 \x62ottom-0 \x74ranslate-y-[\x350%] \x78l:\x74ranslate-y-[\x360%]"} />
                  <div className={"\x61bsolute \x61spect-[\x3291/\x3194] \x77-[\x38em] \x6dd:\x77-[\x318em] \x72ight-0 \x62ottom-0 \x6dd:\x2dtranslate-x-[\x325%] \x74ranslate-y-2/\x31"} />
                </div>
              </div>
              <div className={"\x72elative \x6dd:\x61bsolute \x61spect-[\x3291/\x3194] \x77-[\x318em] \x72ight-0 \x62ottom-0 \x2dtranslate-x-[\x325%] \x74ranslate-y-2/\x31"} />
            </div>
            <div className={"wysiwyg \x6dd:\x72ow-start-2 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3"}>
              For many, queuing isn’t just about snagging exclusive items — it’s about being seen, making connections and sharing the experience. Sometimes lasting hours (Stüssy’s new NYC flagship was <a href="https://www.gq.com/story/stussy-nyc-store-lines-scene-report" target="_blank">clocking three hours to get in over the summer)</a>, queues create a self‑selection process where only the most committed like‑minded people are left standing on the sidewalk — making participants feel like they’re part of something uniquely earned, even cementing their status as brand super fans.
            </p>
              <p className={"\x74ext-body2"}>
              From Wales Bonner’s archive sale in London to Hailey Bieber’s Rhode pop‑up in LA, young consumers are flocking to queues to <mark className="mark-green">capture vibes</mark> that are undeniably different from what they’d find via social commerce.
            </p>
              <p className={"\x74ext-body3"}>
              Some of fashion’s burgeoning streetwear labels, like <a href="https://www.voguebusiness.com/fashion/corteiz-clint-and-the-future-of-streetwear" target="_blank">Corteiz</a> or Drama Call take the idea further, revealing the location of exclusive IRL drops to select customers on Instagram close friends.
            </p>
            </div>
          </div>
        </div>
        <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x328/\x311] \x77-[\x320em] \x6ceft-0 \x74op-[\x2d5em]"} />
        <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x32/\x31] \x77-[\x36.\x325em] \x6ceft-[\x340%] \x74op-[\x30em]"} />
        <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x314/\x36] \x77-[\x39em] \x6ceft-[\x355%] \x74op-[\x2d2em]"} />
        <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x316/\x311] \x77-[\x310em] \x72ight-[\x380%] \x74op-[\x34em]"} />
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x6dd:\x67rid-cols-2 \x6dd:\x67rid \x6dd:\x67ap-x-6 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div />
            <div>
              <p className={"\x74ext-body2 !\x6db-2"}>Do you prefer brands that are…</p>
              <p className={"\x6db-5 \x75ppercase \x66ont-adobe \x74ext-sm"}>(Among Gen Zs)</p>
              <div className="wysiwyg">
                <img className={"\x6fbject-contain \x77-full \x68-auto"} style={{ color: "transparent" }} alt="Chart Image" loading="lazy" width="527" height="266" decoding="async" src="/site-assets/ccc88da832d5ec44.png" />
                <p className={"\x6dt-8 !\x6db-0 \x74ext-right \x66ont-adobe \x74ext-sm \x75ppercase"}>Source: <em className={"\x69talic \x66ont-bold"}>Archrival</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3 \x6dd:\x70r-6"}>London-based brand Nuba, in response to unreliable orders from luxury retailers, decided to step away from wholesale altogether, lower its prices and turn its studio into a direct‑to‑consumer store on weekends. Customers have to sign up to receive the location, and spaces are limited. “It’s always intimate, with small groups staying for a chat, a cup of tea, sometimes lingering for hours,” says founder Cameron Williams. “It’s more than just selling clothes. It’s about building relationships. As a young brand, it’s hard to compete with vintage, which dominates how people shop right now. But vintage and emerging designers are where people are spending with care — so it made sense to lean into that community spirit. What we sacrifice in margin, we gain in connection and momentum.” </p>
              <span />
            </div>
            <div className={"\x72elative \x6dd:\x72ow-start-1 \x6dd:\x72ow-span-2 \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x6dx-auto \x77-[\x360%] \x61spect-[\x3264/\x3420] \x6dd:\x77-[\x316.\x35em] \x6dd:\x6dt-32"}>
                <div className={"\x61bsolute \x61spect-square \x77-1/\x32 \x6dd:\x77-1/\x31 \x2dleft-8 \x2dtop-8 \x6dd:\x2dleft-28 \x6dd:\x2dtop-26 \x78l:\x73cale-125"} />
                <div className={"\x61bsolute \x61spect-square \x77-1/\x32 \x6dd:\x77-[\x314em] \x2dright-8 \x2dbottom-8 \x6dd:\x2dright-24 \x6dd:\x2dbottom-16"} />
              </div>
            </div>
            <div className={"wysiwyg \x6dd:\x72ow-start-2 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3"}>From running clubs to pottery groups, <a href="https://www.voguebusiness.com/story/fashion/from-sauna-socials-to-run-clubs-are-community-event-leaders-the-new-influencers" target="_blank">micro‑communities are booming</a> in many major cities, as young consumers seek IRL connections post‑pandemic. Brands from Nike to Crocs are finding ways to meaningfully tap into these communities to form deeper connections with small subsets of customers, over social reach.</p>
              <p className={"\x74ext-body3"}>“Pottery became massive on TikTok, and we noticed pottery clubs were popping up. And they were all using Elf brushes. We didn’t know that before. So we went in and connected with them on a deeper level, creating content around how to use the brushes for pottery,” says Patrick O’Keeffe, Chief Integrated Marketing Officer at e.l.f. Beauty. “These subcultures are so important to your business.” </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGEnZTrustsQuiter() {
  return (
    <section id="article-3-3">
      <div className={"fluid-block \x72elative \x70t-header \x78l:\x70t-0"}>
        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-b \x66rom-brand-lime/\x350 \x74o-transparent \x2dz-[\x31]"} />
        <div className={"\x70t-3 \x6dd:\x70y-15 \x6dd:\x70x-5 \x6cg:\x70x-10 \x6cg:\x70y-17 \x78l:\x70x-38 \x78l:\x70y-18 \x63ontainer"}>
          <h2 className={"\x73r-only"}>GEn Z trusts quiter social platforms</h2>
          <div>
            <p className={"h3 \x72elative \x6ceft-[\x30.\x39em] \x6db-[\x30.\x34em] \x6dd:\x6db-[\x30.\x31em]"} aria-label="GEN Z" />
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">G</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">E</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">N</div>
            </div>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">Z</div>
            </div>
            <p />
            <p className={"h1 \x6db-0 \x6ceading-[\x30.\x385] \x61nimate-clip-bg"} aria-label="truststrustsquieter">
              <span className={"\x69nline-block \x61lign-baseline \x72elative \x6dr-[\x30.\x305em]"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock \x70x-[\x30.\x31em]"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
            </div>
            <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-brand-cream \x74ext-mask \x62g-brand-bubblegum \x77-full \x68-full \x70t-[\x30.\x31em] \x70x-[\x30.\x31em]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <span className={"\x70t-[\x30.\x31em] \x69nline-block \x61lign-baseline"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">q</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
              </div>
            </span>
            <p />
            <p className={"\x66ont-normal \x62lock \x6dt-2 \x72elative \x6dd:\x2dtop-[\x30.\x37em] \x6dd:\x6ceft-[\x36.\x38%] \x78l:\x6ceft-[\x319.\x38%] \x77hitespace-nowrap"} aria-label="Socialplatforms">
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0 \x2dtracking-[\x30.\x345em] h5-small \x2dmr-[\x30.\x32em]"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">S</div>
            </div>
            <span className={"\x69talic h5-large \x66ont-didot"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
              </div>
            </span>
            <span className={"\x69talic h5-large \x66ont-didot \x69nline-block \x61lign-baseline \x6dl-[\x30.\x33em] \x72elative \x6cg:\x6ceft-[\x324%]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">p</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <p />
          </div>
          <div className={"\x72elative \x6dt-0 \x6db-32 \x6dd:\x6db-0 \x6dd:\x6dt-4 \x6cg:\x2dmt-[\x34em] \x32xl:\x2dmt-[\x36.\x36em] \x78l:\x6ceft-[\x34.\x36em]"}>
            <div className={"\x77-full \x72elative \x70x-4 \x6dd:\x70x-0 \x70b-[\x35em] \x6cg:\x70b-0"}>
              <div className={"\x6dx-auto \x61spect-[\x3308/\x3487] \x6dax-w-[\x322.\x3375em] \x77-full \x68-auto \x78l:\x72elative \x78l:\x2dleft-10"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -5%)", opacity: "1" } as CSSProperties} />
              <div className={"\x61bsolute \x67rid \x67ap-4 \x69tems-start \x66lex-wrap \x2dbottom-5 \x6dd:\x62ottom-0 \x78l:\x62ottom-auto \x78l:\x74op-[\x37em] \x77-full \x78l:\x77-[\x386%] \x6ceft-0 \x72ight-0 \x6dx-auto"}>
                <div className={"\x6dax-w-[\x320em] \x77-2/\x33 \x6dd:\x77-full"}>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative !\x74ext-[\x30.\x3875em] \x6cg:!\x74ext-[\x31.\x30625em] \x62g-brand-sea \x74ext-white"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>Looking for a solid cardigan, been struggling to find 'the one' for months. Any suggestions?<svg className={"\x61bsolute \x2dright-[\x33px] \x62ottom-0 \x2dscale-x-[\x31] \x74ext-brand-sea"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </div>
                <div className={"\x6dax-w-[\x320em] \x77-2/\x33 \x6dd:\x77-full \x6dl-auto \x72elative \x78l:\x72ight-[\x37%]"}>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative !\x74ext-[\x30.\x3875em] \x6cg:!\x74ext-[\x31.\x30625em] \x62g-brand-white \x74ext-brand-black"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>What color, materials, and budget do you have in mind?<svg className={"\x61bsolute \x2dleft-[\x33px] \x62ottom-0 \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </div>
                <div className={"\x6dax-w-[\x320em] \x77-2/\x33 \x6dd:\x77-full \x72elative \x6dd:\x6ceft-[\x35%] \x32xl:\x74op-[\x33.\x31em]"}>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative !\x74ext-[\x30.\x3875em] \x6cg:!\x74ext-[\x31.\x30625em] \x62g-brand-white \x74ext-brand-black"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>Just got this one from Zara. Went down a size for a more slim fit.<svg className={"\x61bsolute \x2dright-[\x33px] \x62ottom-0 \x2dscale-x-[\x31] \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </div>
                <div className={"\x6dax-w-[\x320em] \x77-2/\x33 \x6dd:\x77-full \x6dl-auto \x72elative \x6dd:\x72ight-[\x36%] \x32xl:\x74op-[\x30.\x36em]"}>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative !\x74ext-[\x30.\x3875em] \x6cg:!\x74ext-[\x31.\x30625em] \x62g-brand-white \x74ext-brand-black"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>I've been super happy with my Alex Mill cardigans - recommend!<svg className={"\x61bsolute \x2dleft-[\x33px] \x62ottom-0 \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </div>
                <div className={"\x6dax-w-[\x320em] \x77-2/\x33 \x6dd:\x77-full \x72elative \x6dd:\x6ceft-[\x311%] \x32xl:\x74op-[\x34.\x31em]"}>
                  <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative !\x74ext-[\x30.\x3875em] \x6cg:!\x74ext-[\x31.\x30625em] \x62g-brand-white \x74ext-brand-black"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.4, 0.4)", opacity: "0" } as CSSProperties}>COS knits are worth the investment.<svg className={"\x61bsolute \x2dright-[\x33px] \x62ottom-0 \x2dscale-x-[\x31] \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body1"}><mark className="mark-green">Private</mark> online communities</p>
              <p className={"\x74ext-body2"}>Gen Zs feel like social commerce and branded content have made it harder to <mark className="mark-pink">connect</mark> with other people on traditional social media platforms.</p>
              <p className={"\x74ext-body3"}>Nearly a third of Gen Zs feel that shopping directly within a social media app or platform takes away from the ‘social’ aspect of social media, and say they don’t want to spend more time on social media than they already do.</p>
              <p className={"\x74ext-body3"}>It’s hard to find like‑minded people when you’re constantly being sold to, and when algorithms are thrusting paid content your way, instead of prioritising content you like or people you follow. If brands are not careful, social media platforms could engender a similar scepticism to search engines, which Gen Zs now view as unreliable. In fact, 42 per cent of Gen Zs and 39 per cent of millennials feel big search engines won’t exist in 10 years. </p>
              <p className={"\x74ext-body3"}>The social media platforms Gen Zs feel they’re most likely to find or discover products on are TikTok (92 per cent), YouTube (88 per cent), Instagram (87 per cent) and Pinterest (85 per cent). But as they aim to resist FOMO or buyer’s remorse, and grow tired of the algorithm, Gen Zs are gravitating towards more private or <mark className="mark-blue">intimate</mark> social media spaces, which allow discovery over distraction. They want to find <mark className="mark-pink">like‑minded</mark> people who share their experiences, ask anonymous questions and read raw, unfiltered reviews and recommendations. </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x61spect-[\x3373/\x3498] \x77-[\x316/\x325] \x6dl-[\x320%] \x6dd:\x6dx-auto \x6dd:\x77-full \x68-auto \x6dax-w-[\x323em] \x6db-30"}>
                <span className={"\x74op-0 radial-gradient-blue \x77-[\x393.\x375em] \x68-[\x343.\x375em] \x61bsolute \x2dz-1 \x6fpacity-40 \x74ranslate-y-52 \x2dtranslate-x-96"} />
                <div className={"\x61bsolute \x61spect-square \x77-[\x380%] \x6dd:\x77-full \x6ceft-[\x2d50%] \x62ottom-0 \x6dd:\x6ceft-0 \x6dd:\x2dtranslate-x-1/\x32 \x6dd:\x74ranslate-y-[\x350%]"} />
                <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x72ight-[\x310%] \x62ottom-0 \x6cg:\x74ranslate-x-[\x350%] \x74ranslate-y-[\x3200%] \x61spect-[\x3183/\x3137] \x77-[\x350%]"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body1"}>The comment section</p>
              <p className={"\x74ext-body2"}>While many brands continue to think of the main feed as the default space for brands on social media, the comment section has become influential <mark className="mark-blue">new real estate</mark> as Gen Zs regularly wade through the comments to aid their purchasing decisions.</p>
              <p className={"\x74ext-body3"}>This is especially true on TikTok, as comments are a place where ‘real’ discussion thrives and where Gen Zs seek authentic reactions from regular users. More than half (52 per cent) of Gen Zs say they go to the comment section when researching brands and products on social media, compared to only 37 per cent who say they visit brands’ profiles and posts. </p>
              <p className={"\x74ext-body3"}><span className={"\x74ext-body2"}>Part of Gen Z’s draw to the comment section is that it’s <mark className="mark-pink">participatory</mark> and <mark className="mark-green">generative:</mark></span> 41 per cent of Gen Zs say that when they buy a brand or product that they absolutely love, they typically comment on one of the brand’s posts, per Archrival data. While 41 per cent also said when they buy a product they love, they will comment on a post from a creator that features the same brand or product.</p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-2"}>
              <div className={"\x72elative \x6dt-0 \x77-full \x61spect-square"}>
                <div className={"\x6dd:\x61bsolute \x77-[\x316em] \x73m:\x6dax-w-[\x63alc(\x3100%\x5f-_4em)] \x6dd:\x6dax-w-none \x6dd:\x77-[\x322em] \x6dx-auto \x6dd:\x6dx-0 \x6ceft-16 \x74op-32 \x61spect-[\x3346/\x3448]"}>
                  <div className={"\x68idden \x6cg:\x62lock \x61bsolute \x72ight-0 \x74op-0 \x74ranslate-x-[\x325%] \x74ranslate-y-[\x2d50%] \x61spect-[\x3278/\x348] \x68-[\x33em]"} />
                  <div className={"\x61bsolute \x72ight-4 \x62ottom-[\x330%] \x6cg:\x74ranslate-x-[\x375%] \x61spect-[\x3278/\x348] \x68-[\x33em]"} />
                  <div className={"\x61bsolute \x6ceft-0 \x62ottom-0 \x6cg:\x74ranslate-x-[\x2d25%] \x74ranslate-y-[\x325%] \x61spect-[\x3278/\x348] \x68-[\x33em]"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className="fluid-block">
          <div className={"\x72elative \x63ontainer \x6dy-20 \x6dd:\x6dy-40 \x32k:\x6dy-40"}>
            <span className={"\x61bsolute \x6ceft-[\x380%] \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x68-[\x3110%] \x61spect-square \x72ounded-full \x62lur-2xl \x6fpacity-60 \x2dz-1 radial-gradient-green"} />
            <div className={"\x6dd:\x66lex \x67ap-x-4 \x6dd:\x67ap-x-8 \x32xl:\x67ap-x-12 \x69tems-start \x6austify-between"}>
              <p className={"\x74ext-body1 \x6db-6 \x6dd:\x6db-0"}>When researching brands and products on social media, what do you typically look at? Select all that apply.</p>
              <div className={"\x6dd:\x6austify-end \x66lex \x66lex-shrink-0 \x73ticky \x74op-header"}>
                <div className={"\x77-full \x6dd:\x77-auto"}>
                  <ChartToggle id="social-platform-research" />
                  <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                </div>
              </div>
            </div>
            <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dt-16 \x6cg:\x6dt-20"}>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.55" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Search bar</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>55%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Search bar" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/37dc21117285f843.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.52" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Comment sections</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>52%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Comment sections" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/04d55657fe7a1410.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.42" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>In‑app shops or stores (e.g. TikTok Shop)</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>42%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt={"In&#8209;app shops or stores (e.g. TikTok Shop)"} loading="lazy" width="150" height="150" decoding="async" src="/site-assets/7551778deb491e19.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.37" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Brand profiles and posts</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>37%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Brand profiles and posts" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/fe6e66497c5f479a.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.38" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Homepage, Explore, For You page, etc </p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>38%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Homepage, Explore, For You page, etc " loading="lazy" width="150" height="150" decoding="async" src="/site-assets/ffdfe0bfc4605f0c.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.38" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Content creator or influencer profiles and posts</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>38%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Content creator or influencer profiles and posts" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/ed50d4438358e545.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.26" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Hashtags</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>26%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-bubblegum"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Hashtags" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/a47fd4e394d30fd2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"\x66ixed \x62ottom-0 \x6dd:\x68idden \x7a-22 \x62g-brand-gray \x70x-4 \x70y-4 \x74ransition-transform \x64uration-300 \x6ceft-0 \x72ight-0 \x74ranslate-y-[\x3200%]"}>
              <div>
                <ChartToggle id="social-comments" />
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body3"}>The number of comments on luxury videos posted to TikTok grew 113 per cent year‑on‑year in June.</p>
              <p className={"\x74ext-body3"}>“Being present in the comment section is something that we’re starting to really see brands get more involved in,” says Kristina Karassoulis, head of luxury and auto brand partnerships at TikTok UK. She references a TikTok video posted in June 2024, where creator Dr Kayla Ellis <a href="https://www.tiktok.com/@drkayla_md/photo/7375309288941653291" target="_blank">shared</a> a screenshot of her asking her husband, “How many likes for you to buy me this Prada bag?”, to which he replied, “50k and Prada has to comment.” The video has over 10.2 million likes and 95,000+ comments. Prada commented and eventually <a href="https://www.tiktok.com/@drkayla_md/video/7377909527305276715" target="_blank">sent her a bag</a>. But before the luxury label got on board, brands including Sephora, Benefit, Kiehl’s and Burt’s Bees each commented.</p>
              <p className={"\x74ext-body2 \x6dd:\x70r-5"}>“The lesson is, when it makes sense and when people are talking about your brand, react to it and engage with it and co‑create,” Karassoulis adds. “Which is what we talk about, it’s playing into the emotional economy.” </p>
              <p className={"\x74ext-body3"}>Inthisone, the 21‑year‑old student from Chicago, checks the comment section on most videos she watches on TikTok and trusts them, particularly when it comes to beauty products. “[Regular TikTok users] aren’t getting paid to promote products in the comments. It’s raw, real user activity and people aren’t holding back,” she says. “I love when a video goes viral and a brand comments or sends a PR gift to a regular person. It feels like the brands understand customers and want to meet them where they are.” </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-2"}>
              <div className={"\x72elative \x6dt-0 \x77-[\x3100%] \x6din-h-[\x328em] \x6dd:\x6din-h-[\x336em] \x6dd:\x68-auto \x6dd:\x61spect-square"}>
                <span className={"\x74op-0 radial-gradient-purple \x77-[\x360.\x375em] \x68-[\x3100em] \x61bsolute \x2dz-1 \x2dtranslate-x-32"} />
                <div className={"\x61bsolute \x61spect-[\x3361/\x3564] \x77-[\x360%] \x6ceft-8 \x6dd:\x6ceft-24 \x74op-0 \x6dd:\x74op-24"}>
                  <img className={"\x61bsolute \x77-[\x395%] \x72ight-0 \x6dd:\x6ceft-0 \x62ottom-0 \x74ranslate-x-[\x350%] \x6dd:\x74ranslate-x-[\x2d40%] \x74ranslate-y-[\x375%] \x6dd:\x74ranslate-y-[\x310%] \x72ounded"} style={{ color: "transparent" }} alt="Comments" loading="lazy" width="676" height="492" decoding="async" src="/site-assets/96cb103c765e7dda.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"fluid-block \x73m:\x6dt-28 \x6dd:\x6dt-0"}>
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body2"}>There’s also a rise in brands <mark className="mark-green">co‑creating</mark> with customers, based on feedback in the comments, adds TikTok UK’s Fernandez. “It’s not just about reacting to what people are doing and responding. It’s more about understanding what’s going on in the community and then <mark className="mark-blue">building</mark> that back into products.”</p>
              <p className={"\x74ext-body3"}>Elf Cosmetics, one of Gen Z’s favourite brands, frequently co‑creates with its audience. The brand replies to 99 per cent of comments, says O’Keefe. “We will go to the community and say, ‘These are the three shades we’re considering based on the feedback you’ve given us, which ones do you think we should lean into first?’” From there, the feedback will go to the brand’s operation and innovation teams. When it’s ready for market, the CEO, CMO or CFO will go on a Twitch live stream or TikTok Live to talk them through the creation process, he adds. “I think that’s really important, so they understand, hey, this is what’s required. Yes, we can move fast, but we also make sure we’re putting quality products out in the universe and ensuring that it resonates.” </p>
              <p className={"\x74ext-body3 \x6dd:\x70r-6"}>While some brands are getting it right, brands should know when it’s appropriate to join the conversation. When UK‑based singer Sam Ryder created a video singing on a train, he criticised brands for jumping in on a natural moment. So for the latter, it’s about having the confidence to jump in correctly without giving audiences ‘the ick’.</p>
              <p className={"\x74ext-body3"}>Last year, TikTok saw the onset of search on the platform. But now, content creation is changing, Karassoulis says. “I think it’s partly due to platforms like Reddit, for instance, where people don’t have to show their face. The comment section [on TikTok] is really prevalent for that audience who wants to find out or share information without posting a video of who they are.” </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x77-full \x6dax-w-[\x323em] \x70l-10 \x6dd:\x70l-0"}>
                <div className={"\x61spect-[\x3340/\x3775]"}>
                  <div className={"\x77-full \x68-full \x72ounded"}>
                    <img className={"\x77-full \x68-full \x6fbject-cover"} style={{ color: "transparent" }} alt="TikTok Fallback" loading="lazy" width="340" height="775" decoding="async" src="/site-assets/1f04b7b74b6bdc43.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body1"}><mark className="mark-pink">Reddit:</mark> A validating platform</p>
              <p className={"\x74ext-body3"}>As Gen Zs seek deeper, more meaningful consumer experiences online, Reddit is emerging as an important platform. Gen Zs are increasingly turning to the digital gathering space to discover and research products before they buy.</p>
              <p className={"\x74ext-body3"}>“We are seeing a massive erosion of trust in our information landscape. And I think in that context, Reddit is a validation platform,” says Lore Oxford, head of insights and product at Reddit. “Younger consumers are also just much more savvy when it comes to what’s real and what’s not real today. Reddit provides a safe space to be able to research products, seek advice or discuss complex social interactions in a safe, anonymous environment.” As TikTok, Pinterest and Reddit have outlined, anonymity is increasingly important to young consumers who want to ask for advice without posting publicly. </p>
              <p className={"\x74ext-body2"}>In the UK, <a href="https://www.voguebusiness.com/story/consumers/men-are-using-reddit-to-shop-what-does-it-mean-for-brands" target="_blank">74 per cent of people who discovered a product</a> anywhere on the internet at some point came to Reddit to validate or to do further research on that purchase, according to the platform.</p>
              <p className={"\x74ext-body3"}>In 2024, the number of fashion and beauty posts on Reddit grew 150 per cent on the year prior. The platform has also seen 71 per cent year‑on‑year growth in beauty conversations, making it the destination for beauty and skincare lovers to connect and find unique discoveries and recommendations. Four out of five UK Reddit users, for example, looking to buy fashion or beauty products in the next three months say, “Conversations on Reddit help me feel more confident about my purchases.”</p>
              <p className={"\x74ext-body3"}>While TikTok is a major destination for search, TikTok users may turn to Reddit to validate information they’ve received, or to ask questions they might want to ask anonymously. For example, when it comes to fashion, people on Reddit are increasingly turning to tailored communities like /r/PetiteFashionAdvice and /r/TransFashionAdvice for guidance that reflects their identities and needs, signalling a shift towards spaces that prioritise representation, self‑expression and tailored offerings over generic options.</p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x77-[\x350%] \x61spect-[\x3215/\x3262]"}>
                <div className={"\x61bsolute \x61spect-[\x3300/\x3220] \x77-[\x3150%] \x6ceft-0 \x62ottom-0 \x74ranslate-x-[\x2d30%] \x74ranslate-y-[\x350%]"} />
                <span className={"\x74op-0 radial-gradient-blue \x77-[\x393.\x375em] \x68-[\x343.\x375em] \x61bsolute \x2dz-1 \x6fpacity-40 \x74ranslate-y-14 \x2dtranslate-x-96"} />
                <div className={"\x61bsolute \x61spect-[\x3283/\x380] \x77-[\x3130%] \x72ight-0 \x62ottom-0 \x74ranslate-x-[\x370%] \x74ranslate-y-[\x310%]"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"fluid-block \x6dt-36 \x6db-28 \x6dd:\x6dy-0"}>
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body1"}>‘Quiet, <mark className="mark-blue">slow’</mark> social</p>
              <p className={"\x74ext-body2"}>Pinterest is increasingly popular among Gen Z consumers. When Archrival surveyed Gen Zs in 2023, only 15 per cent said they created a <mark className="mark-pink">Pinterest</mark> board when considering a purchase, such as a coffee table or a new pair of shoes. Today, a whopping 85 per cent of Gen Zs say they’re likely to use Pinterest to find or discover products, with nearly four in 10 (38 per cent) saying they visit Pinterest at least <mark className="mark-green">once a day.</mark></p>
              <p className={"\x74ext-body3"}>Gen Zs interviewed by Archrival said they find the platform “quieter and slower” than other platforms, as it’s less dominated by commercial content. As a result, Gen Zs’ behaviour on Pinterest is less reactive than on other platforms; they spend time pinning aspirational content that helps them envision their future, such as trips they’d like to take or ‘dream home’ design. As Sara Pollack, global head of consumer marketing at Pinterest, told <a href="https://www.voguebusiness.com/story/events/how-to-keep-gen-z-loyal-with-pinterest" target="_blank"><em>Vogue Business</em></a>, “[Gen Zs are] intentional — they’re often in planning mode, not just idly consuming content.” Gen Zs also said the algorithm feels more personalised than other platforms.</p>
              <p className={"\x74ext-body3"}>“As a visual search platform, Pinterest is personal and there’s no pressure to chase the latest trends or compare yourself to other people,” says Dana Cho, Pinterest’s VP of design. “Instead, users can freely discover and shop what inspires them, at their own pace, and away from the noise of others. In a world of ‘sameness’, people crave this and 68 per cent of our monthly users believe that they can be ‘their authentic selves’ on Pinterest.”</p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-2"}>
              <div className={"\x61bsolute \x61spect-square \x77-2/\x33 \x6ceft-0 \x2dtop-16 \x6dt-20 \x6dd:\x6dt-0"} />
              <div className={"\x72elative \x61spect-[\x3377/\x3500] \x6dax-w-[\x323.\x35em] \x6dx-auto \x77-[\x380%] \x68-auto \x6dt-20 \x6dd:\x6dt-0"} />
              <div className={"\x61bsolute \x61spect-square \x77-2/\x33 \x2dright-16 \x74op-16 \x78l:\x73cale-110 \x78l:\x2dright-28 \x78l:\x74op-14 \x6dt-20 \x6dd:\x6dt-0"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionGenZGravitatesTo() {
  return (
    <section id="article-3-4">
      <div className={"fluid-block \x72elative"}>
        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-b \x66rom-brand-mint/\x350 \x74o-transparent \x2dz-[\x31]"} />
        <div className={"\x70y-15 \x6dd:\x70x-5 \x6cg:\x70x-10 \x63ontainer \x66lex \x66lex-col"}>
          <div className={"\x61spect-[\x3660/\x3450] \x6dax-w-[\x341.\x325em] \x6dx-auto \x77-full"} />
          <h2 className={"\x73r-only"}>Gen Z gravitates to more vulnerable connections</h2>
          <div className={"\x6dt-auto \x77-full \x6dax-w-[\x324em] \x6dx-auto \x6dd:\x6dax-w-none \x6dd:\x6dx-0"}>
            <p className={"h3-small \x72elative \x6ceft-[\x30.\x39em] \x6db-0 \x6dd:\x6db-[\x30.\x31em]"} aria-label="GEN Z" />
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">G</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">E</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">N</div>
            </div>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">Z</div>
            </div>
            <p />
            <p className={"h1-large md:h1-small \x6db-0 \x6ceading-[\x30.\x385] \x61nimate-clip-bg \x2dtracking-[\x30.\x305em] \x6dd:\x77hitespace-nowrap"} aria-label="gravitatesgravitatesto more">
              <span className={"\x69nline-block \x61lign-baseline \x72elative \x6dr-[\x30.\x315em]"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
            </div>
            <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-brand-black \x74ext-mask \x62g-brand-lime \x77-full \x68-full \x70t-[\x30.\x31em]"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">g</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">v</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <span className={"\x70t-[\x30.\x31em] \x69nline-block \x61lign-baseline"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
            </span>
            <p />
            <p className={"\x66ont-normal \x62lock \x6dt-2 \x72elative \x6dd:\x2dtop-[\x30.\x31em] \x6dd:\x6ceft-[\x36.\x38%] \x78l:\x6ceft-[\x319.\x38%]"} aria-label="Vulnerable human connections">
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x66ont-normal \x66ont-alicent \x6db-0 \x2dtracking-[\x30.\x34em] h5-small \x72elative \x6ceft-10 \x6dd:\x6ceft-0"} />
              </span>
            </p>
            <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
              <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">V</div>
            </div>
            <span className={"\x69talic h5-large \x66ont-didot \x72elative \x6ceft-10 \x6dd:\x6ceft-0"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">b</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
            </span>
            <span className={"\x69talic h5-large \x66ont-didot \x62lock \x6dd:\x69nline"}>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">u</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">m</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">t</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">i</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
              </div>
            </span>
            <p />
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body1"}><mark className="mark-pink">Dark</mark> retail</p>
              <p className={"\x74ext-body3"}>Amid social media saturation and algorithmic cultural flattening, even online, Gen Zs are turning to tight‑knit community spaces and personalised retail pathways to curate their personal tastes, product discovery and shopping experiences.</p>
              <p className={"\x74ext-body2 \x6dd:\x70r-8 \x78l:\x70r-0"}>Archrival calls this “dark retail”, referring to a new class of <mark className="mark-green">gatekeepers</mark> and <mark className="mark-blue">meaning‑makers</mark> who serve as guides for Gen Z consumers as they navigate today’s turbulent sea of choice.</p>
              <p className={"\x74ext-body3"}>Now, product conversations and even transactions are taking place in new, more private and personalised spaces, like community pop‑ups, Instagram DMs or ChatGPT. Fashion sourcer <a href="https://www.voguebusiness.com/story/technology/luxury-fashions-power-sourcer-is-reinventing-the-job-with-ai" target="_blank">Gab Waller’s Sourced By</a> is an AI‑powered fashion sourcing platform, which helps consumers get their hands on coveted luxury items, even if they’re sold out. Sourced By conducts all sales via Instagram DMs. Typically, customers, who are often older Gen Zs and millennials, will share images of what they’re looking for that they’ve seen on Instagram, be it a The Row Margaux bag or some Chanel ballet flats. They can discuss with an advisor and transact without leaving the app.</p>
              <p className={"\x74ext-body2 \x6dd:\x70r-10 \x78l:\x70r-0"}>While it might be quicker to simply click‑to‑buy from a social post, as our data underlines, young consumers “love the hunt” today.</p>
              <p className={"\x74ext-body3"}>Gen Zs get a dopamine hit from finding something rare or unavailable with a sourcer that they might not have had access to otherwise.</p>
              <p className={"\x74ext-body3"}>“Everyone has always said to me to take it off Instagram, that to be doing your business on there is risky. But I always say I will never take it off. We’re meeting the clients where they’re at,” Waller says. “I love how personal Instagram DMs feel that when I’m speaking with someone, I can click on their profile, I can get a feel for who they are. It builds a more personal connection quicker, as opposed to if they submitted an order on an app — it’s a different experience.” </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x70l-[\x320%] \x6dd:\x70l-0 \x70b-20 \x6dd:\x70b-0 \x6dd:\x6dt-18"}>
                <span className={"\x74op-0 radial-gradient-purple \x77-[\x3150%] \x61spect-square \x61bsolute \x2dz-1 \x6fpacity-40 \x74ranslate-y-[\x325%] \x2dtranslate-x-[\x350%]"} />
                <div className={"\x61bsolute \x61spect-[\x3520/\x3685] \x77-1/\x32 \x6dd:\x77-1/\x32 \x6cg:\x77-full \x6dax-w-[\x332.\x35em] \x74op-[\x312em] \x72ight-1/\x32 \x6dd:\x72ight-[\x316%]"} />
                <div className={"\x61spect-[\x3418/\x3600] \x72ounded \x6fverflow-clip \x72elative \x6dx-auto \x77-full \x6dax-w-[\x323em] \x73hadow-lg \x62g-image-none"}>
                  <img className={"\x6fbject-cover \x6fbject-top \x61bsolute \x69nset-0 \x77-full \x68-full \x72ounded"} style={{ color: "transparent", opacity: "1" }} alt="Dark retail message 1" loading="lazy" width="418" height="602" decoding="async" src="/site-assets/f903d15452329e43.jpg" />
                  <img className={"\x6fbject-cover \x6fbject-top \x61bsolute \x69nset-0 \x77-full \x68-full \x72ounded"} style={{ color: "transparent", opacity: "1" }} alt="Dark retail message 2" loading="lazy" width="418" height="602" decoding="async" src="/site-assets/568abbc27544930e.jpg" />
                  <img className={"\x6fbject-cover \x6fbject-top \x61bsolute \x69nset-0 \x77-full \x68-full \x72ounded"} style={{ color: "transparent", opacity: "1" }} alt="Dark retail message 2" loading="lazy" width="418" height="602" decoding="async" src="/site-assets/301263de91818247.jpg" />
                </div>
                <div className={"\x72elative \x61spect-[\x3173/\x3246] \x77-[\x311em] \x6dr-5 \x6dl-auto \x68idden \x6dd:\x62lock \x6dt-20"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"fluid-block \x6dt-5 \x6dd:\x6dy-0"}>
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1"}>
              <p className={"\x74ext-body1"}>Community‑centred creators</p>
              <p className={"\x74ext-body3"}>For many Gen Zs, like social commerce at‑large, traditional macro and mega‑influencers are <mark className="mark-green">feeling samey</mark>, and creating fatigue. In 2023, 51 per cent of Gen Zs felt that social media influencers create trends. Today, 75 per cent of Gen Zs agree that “social media algorithms favour a specific type of influencer/creator”, while 70 per cent of Gen Zs agree that <mark className="mark-blue">“influencers are basic;</mark> they all have similar aesthetics, POVs and ways of communicating”. This is a shift that, while burgeoning for the past few years, seems to be reaching a tipping point: a full 68 per cent of Gen Zs say “influencers are more boring than they used to be”.</p>
              <p className={"\x74ext-body2"}>As audiences become more sceptical about traditional influencing on traditional platforms, creators are diversifying, inviting audiences in for more private, intimate, <mark className="mark-green">community‑based experiences</mark>, on membership-based platforms like Patreon or Substack. </p>
              <p className={"\x74ext-body3"}>In a study from creator shopping platform LTK and Northwestern University, 74 per cent of consumers said that social media offers “entertainment over connection”. Fifty per cent of Gen Zs and millennials said they are now looking elsewhere to connect with creators and communities that they follow, beyond the main platforms.</p>
              <p className={"\x74ext-body3"}><em>Blackbird Spylane</em> is part of a growing cohort of creator newsletters that offer impartial recommendations. “We don’t go on ‘brand trips’. We don’t run ads. We don’t use affiliate links on the new clothes we cover, and we don’t accept gifts. This means the only people we owe anything are our readers, who know that our Extremely High Levels of Discernment are unsullied by conflicts of interest, wackness and bogosity,” reads the newsletter intro text. These are increasingly the types of creators young audiences want to support. </p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-2"}>
              <div className={"\x72elative \x61spect-[\x3414/\x3552] \x77-[\x375%] \x6dax-w-[\x325em] \x6dx-auto \x6dt-12 \x6dd:\x6dt-18 \x6db-20"}>
                <div className={"\x61bsolute \x61spect-[\x3435/\x3330] \x77-2/\x33 \x2dleft-12 \x2dtop-12"} />
                <div className={"\x61bsolute \x61spect-[\x3414/\x3552] \x77-full"} />
                <span className={"\x74op-0 radial-gradient-purple \x77-[\x393.\x375em] \x68-[\x343.\x375em] \x61bsolute \x2dz-1 \x6fpacity-40 \x74ranslate-y-14 \x2dtranslate-x-96"} />
                <div className={"\x61bsolute \x61spect-square \x77-2/\x33 \x2dright-12 \x2dbottom-12"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x70y-10 \x6dd:\x70y-15 \x63ontainer \x72elative \x78l:\x66lex \x78l:\x66lex-col"}>
          <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "flex", margin: "0px", inset: "41.7143px auto auto", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1368px", height: "1555px", padding: "0px 0px 864px" } as CSSProperties}>
            <div className={"\x66lex \x66lex-col \x66lex-grow \x73ticky \x74op-0 \x6dd:\x74op-10 \x32k:\x74op-0 max-h-[691.375px]"} style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1368.23px", width: "1368.23px", height: "691.375px", padding: "0px", transform: "translate(0px, 0px)" } as CSSProperties}>
              <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x6db-8 \x72elative \x7a-5 \x6dd:\x70t-header"}>
                <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                  <div className={"\x74ext-body1"}>Below are ways content creators can <mark className="mark-green">engage</mark> with their audiences. If a creator you like or follow on social media offered any of the following, would you be interested?</div>
                </div>
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
              <div className={"\x72elative \x66lex-grow \x66lex \x69tems-center \x6dd:\x6dt-[\x34em]"}>
                <span className={"\x77-[\x3150%] \x6fpacity-70 \x68-full \x61bsolute \x6ceft-1/\x32 \x74op-1/\x32 \x6dd:\x74op-[\x365%] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-green \x62lur-2xl \x70ointer-events-none \x72ounded-full"} />
                <div className={"\x66lex \x66lex-col \x6dd:\x66lex-row \x67ap-y-6 \x67ap-x-8 chart-parent \x6dd:\x70y-20 \x77-full \x6dd:\x77-auto"} style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties}>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.54", "--value-millennials": "0.39", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Instagram Close Friends</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.46", "--value-millennials": "0.39", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Pop‑up events, meet‑ups or shopping parties</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.46", "--value-millennials": "0.36", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Early product links only to their most engaged fans</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.44", "--value-millennials": "0.32", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Live conversations</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.44", "--value-millennials": "0.29", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Private TikTok</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.42", "--value-millennials": "0.29", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>IRL scavenger hunts or city drops</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.41", "--value-millennials": "0.28", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Invite‑only Discord channel</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.39", "--value-millennials": "0.36", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Affiliate links</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.34", "--value-millennials": "0.31", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Patreon subscriber</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex \x66lex-col \x77-full \x62g-white \x72ounded-sm \x72elative \x6dd:\x77-[\x319em]"} style={{ "--value-genz": "0.28", "--value-millennials": "0.25", "--progress": "0" } as CSSProperties}>
                    <div className={"\x62g-brand-black \x74ext-brand-white \x72ounded-t-sm \x70x-5 \x70y-3 \x74ext-center \x74ext-base \x6ceading-[\x31.\x33] \x66ont-vogue \x66ont-normal \x6dd:\x74ext-lg \x66lex-grow \x66lex \x69tems-center \x6austify-center \x6din-h-[\x33.\x3875em]"}>Substack newsletter</div>
                    <div className={"\x67rid \x70-3 \x67ap-3 \x66lex-shrink-0"}>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-[#\x34D9EFF] \x74o-[#\x447EBFF] \x68-full \x77-full \x6frigin-left style_bar1__7_420"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Gen Zs</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                      <div className={"\x72elative \x68-12 \x6dd:\x68-13 \x72ounded-[\x30.\x375em] \x62order \x62order-brand-black/\x330 \x6fverflow-clip"}>
                        <div className={"\x61bsolute \x69nset-0 \x62g-gradient-to-r \x66rom-brand-lime/\x360 \x74o-brand-lime/\x330 \x68-full \x77-full \x6frigin-left style_bar2__WLF72"} />
                        <div className={"\x66lex \x69tems-center \x6austify-between \x68-full \x70x-3 \x72elative"}>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase"}>Millennials</div>
                          <div className={"\x74ext-body1 \x72elative \x74op-[\x30.\x315em]"}>0%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body2"}>According to Archrival’s survey, 52 per cent of Gen Zs agree that they “like financially <mark className="mark-green">supporting creators</mark> directly”.</p>
              <p className={"\x74ext-body3"}>Rather than passively scrolling and accepting what the algorithm serves them, Gen Zs are seeking out and curating their own influencer content, to ensure they find creators that represent them. In turn, they are more likely to buy into the products these creators want to sell, if they are selling.</p>
              <p className={"\x74ext-body3"}>“There’s a lot of overlap [on Substack] with people making a lot from affiliates. If someone is so interested in what you have to say that they’re willing to pay $5 or $8 a month for it, then they’re likely clicking through your affiliate links,” affiliate company ShopMy co‑founder Tiffany Lopinsky <a href="https://www.voguebusiness.com/story/technology/unpacking-the-creator-economy-battleground" target="_blank">told</a> <em>Vogue Business</em>. “Both of them have that element of trust. There’s that difference between influencers that are doing entertainment versus building an audience and community. And if you’re doing the building an audience and community thing, affiliate and subscriptions are really growing for you.”</p>
            </div>
            <div className={"\x72elative \x6dd:\x63ol-start-1"}>
              <div className={"\x72elative \x61spect-[\x3388/\x31054] \x77-[\x312em] \x6dd:\x77-[\x314em] \x6dd:\x6dx-auto \x6dd:\x2dleft-[\x34em] \x6cg:\x6ceft-0"}>
                <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x61bsolute \x6ceft-[\x377%] \x74op-[\x33%] \x74ext-[\x31.\x30625em] \x62g-brand-white \x74ext-brand-black"}>
                  <span className={"\x77hitespace-nowrap"}>Meet-up tonight at 0pm</span>
                  <svg className={"\x61bsolute \x2dleft-[\x33px] \x62ottom-0 \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" />
                  </svg>
                </div>
                <div className={"\x61bsolute \x61spect-[\x328/\x338] \x68-3/\x34 \x6ceft-0 \x74op-1/\x38"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x70y-6 \x63ontainer \x72elative \x78l:\x66lex \x78l:\x66lex-col"}>
          <div className="[place-self:auto] float-none" style={{ order: "0", gridArea: "auto", zIndex: "auto", flexShrink: "1", display: "flex", margin: "0px", inset: "41.7143px auto auto", position: "relative", flexBasis: "auto", overflow: "visible", boxSizing: "border-box", width: "1368px", height: "2882px", padding: "0px 0px 2052px" } as CSSProperties}>
            <div className={"\x66lex \x66lex-col \x66lex-grow \x73ticky \x74op-0 \x6dd:\x74op-10 \x32k:\x74op-20 max-h-[829.516px]"} style={{ translate: "none", rotate: "none", scale: "none", inset: "0px auto auto 0px", margin: "0px", maxWidth: "1368.23px", width: "1368.23px", height: "829.516px", padding: "0px", transform: "translate(0px, 0px)" } as CSSProperties}>
              <div className={"\x6dd:\x66lex \x6dd:\x69tems-end \x6dd:\x6austify-between \x6dd:\x67ap-x-12 \x6db-8 \x72elative \x7a-5 \x6dd:\x70t-header"}>
                <div className={"\x6dax-w-[\x345em] \x78l:\x6dax-w-[\x361em] \x6db-8 \x6dd:\x6db-0"}>
                  <div className={"\x74ext-body1"}>Below are things content creators <mark className="mark-blue">can sell</mark> or market to their audiences. If a creator you like or follow on social media offered any of these, would you be interested?</div>
                </div>
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
              <div className={"\x72elative \x66lex-grow \x66lex \x69tems-center"}>
                <span className={"\x77-[\x3160%] \x6fpacity-70 \x68-[\x3150%] \x61bsolute \x6ceft-1/\x32 \x74op-1/\x32 \x6dd:\x74op-[\x360%] \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 radial-gradient-blue-light \x62lur-2xl \x70ointer-events-none \x72ounded-full"} />
                <div className={"\x66lex \x67ap-6 \x6dd:\x67ap-x-8 chart-parent \x70y-5 \x77-auto \x2dmx-5 \x70x-5 \x6dd:\x70y-10"} style={{ paddingLeft: "59px", translate: "none", rotate: "none", scale: "none", transform: "translate(533.125px, 0px)" } as CSSProperties}>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "1", transform: "translate(0px, 0px)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.54", "--value-millennials": "0.48", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A social media post tagged with a direct link to a product." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/f903c78f42957bfc.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A social media post tagged with a direct link to a product.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.8", transform: "scale(0.8, 0.8)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.51", "--value-millennials": "0.43", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A digital storefront with a curated collection of goods." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/effc8f6141c8d4d3.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A digital storefront with a curated collection of goods.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "scale(0.6, 0.6)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.51", "--value-millennials": "0.39", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A brand or product they’ve created." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/965be3d722c34a5a.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A brand or product they’ve created.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "scale(0.4, 0.4)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.47", "--value-millennials": "0.44", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A curated <br> mix of used or <br> secondhand items." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/c2cb494f052c15d0.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A curated <br /> mix of used or <br /> secondhand items.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "scale(0.4, 0.4)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.46", "--value-millennials": "0.41", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="Brands or products they’re promoting to earn a commission." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/cab1f4478af2c3de.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>Brands or products they’re promoting to earn a commission.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "scale(0.4, 0.4)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.39", "--value-millennials": "0.38", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A live shopping event where they demo products." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/ffa85fa0fe9061d6.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A live shopping event where they demo products.</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"\x66lex-shrink-0"} style={{ translate: "none", rotate: "none", scale: "none", opacity: "0.6", transform: "scale(0.4, 0.4)" } as CSSProperties}>
                    <div className={"\x66lex \x66lex-col \x62g-brand-gray-100/\x360 \x62ackdrop-blur-2xl \x72ounded-[\x31.\x325em] \x72elative \x77-[\x315em] \x6dd:\x77-[\x319em] \x66lex-shrink-0 \x61spect-[\x3304/\x3482] \x70-4 \x6fverflow-clip \x77ill-change-transform"} style={{ "--value-genz": "0.37", "--value-millennials": "0.32", "--progress": "0" } as CSSProperties}>
                      <div className={"\x70y-3 \x74ext-brand-white"}>
                        <div className={"\x67rid \x67rid-cols-3 \x67ap-x-2 \x6db-3"}>
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                          <div className={"\x68-[\x32px] \x62g-current"} />
                        </div>
                        <div className={"\x66lex \x69tems-center \x6austify-between"}>
                          <div>
                            <img className={"\x72ounded-full \x73ize-[\x32em]"} style={{ color: "transparent" }} alt="A membership paid directly for content and perks (e.g. Substack, Patreon)." loading="lazy" width="30" height="30" decoding="async" src="/site-assets/0bc87880f387b57d.png" />
                          </div>
                          <div>
                            <svg className={"\x77-[\x32.\x38125em] \x68-auto"} width="45" height="11" viewBox="0 0 45 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.96875" width="3" height="11" rx="1.5" fill="currentColor" />
                              <rect width="3" height="11" rx="1.5" fill="currentColor" />
                              <circle cx="26.2734" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="33.7031" cy="5.5" r="3" fill="currentColor" />
                              <circle cx="41.1328" cy="5.5" r="3" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className={"\x66lex-grow \x66lex \x69tems-center \x6austify-center \x77-full \x74ext-center \x74ext-lg \x6dd:\x74ext-body2 \x70x-2 \x66ont-vogue \x6dd:\x70x-5"}>A membership paid directly for content and perks (e.g. Substack, Patreon).</div>
                      <div className={"\x67rid \x67rid-cols-2 \x67ap-x-4 \x66lex-shrink-0 \x74ext-center \x6dt-auto"}>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientBlue__zgkCU"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Gen Zs</div>
                        </div>
                        <div className={"\x72elative \x7a-1 \x70y-8"}>
                          <span className={"\x61bsolute \x61spect-square \x74op-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x72ounded-full \x62lur-2xl \x77-[\x314em] \x68-[\x39em] style_gradientGreen__UWpgw"} />
                          <div className={"h5 \x72elative"}>0%</div>
                          <div className={"\x66ont-adobe \x74ext-sm \x69talic \x75ppercase \x72elative"}>Millennials</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fluid-block">
        <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
          <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
            <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
              <p className={"\x74ext-body3"}>As such, Gen Zs are seeking out more niche spaces and communities that speak to their particular tastes and interests. Case in point: Gen Zs want to engage with their favourite content creators on a deeper level; they’re especially interested in community‑centred “VIP experiences” both online and offline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionTheNewWorldOf() {
  return (
    <section className={"\x72elative"}>
      <span className={"\x62g-gradient-to-b \x66rom-brand-lavender \x74o-transparent \x68-screen \x61bsolute \x74op-0 \x77-full \x2dz-1"} />
      <div className={"\x72elative"}>
        <div className={"fluid-block \x72elative"} id="article-3-5">
          <div className={"\x70y-15 \x6dd:\x70x-5 \x6cg:\x70x-10 \x78l:\x70x-38 \x78l:\x70y-18 \x63ontainer \x6dd:\x68-[\x350em] \x6cg:\x68-[\x335em] \x6din-h-[\x340em] \x6dd:\x6din-h-auto \x66lex \x6dd:\x69tems-center \x6dd:\x6austify-center \x72elative"}>
            <div className={"\x61bsolute \x6ceft-8 \x72ight-8 \x74op-16 \x62ottom-8 \x6dd:\x6ceft-38 \x6dd:\x72ight-38 \x6dd:\x74op-18 \x6dd:\x62ottom-18"}>
              <div className={"\x61bsolute \x61spect-square \x77-full \x6dax-w-[\x324em] \x6dd:\x6dax-w-[\x332em] \x6cg:\x6dax-w-none \x6cg:\x77-auto \x6cg:\x68-full \x72ight-0 \x6dd:\x72ight-[\x350%] \x6dd:\x74ranslate-x-1/\x32 \x6cg:\x74ranslate-x-0 \x6cg:\x72ight-0 \x74op-16"}>
                <div className={"\x61bsolute \x61spect-[\x317/\x319] \x77-[\x310em] \x2dright-[\x32em] \x6dd:\x2dright-[\x37em] \x2dtop-[\x32em] \x6dd:\x2dtop-[\x34em]"} />
              </div>
              <div className={"\x61bsolute \x61spect-square \x77-[\x38.\x3625em] \x6cg:\x77-[\x316rem] \x72ight-[\x2d5%] \x6dd:\x72ight-auto \x6dd:\x6ceft-[\x315em] \x6cg:\x6ceft-[\x314em] \x62ottom-[\x2d5%] \x6dd:\x62ottom-[\x2d3.\x375em] \x6cg:\x62ottom-0"} />
              <div className={"\x61bsolute \x61spect-[\x3628/\x3160] \x77-[\x316em] \x6dd:\x77-[\x319em] \x6ceft-0 \x6dd:\x6ceft-[\x2d8.\x3125em] \x6cg:\x6ceft-0 \x62ottom-[\x36em] \x6dd:\x62ottom-[\x36em] \x6cg:\x62ottom-[\x35em]"} />
              <div className={"\x61bsolute \x61spect-[\x330/\x322] \x77-[\x380%] \x6dax-w-[\x320em] \x6dd:\x77-[\x311rem] \x6cg:\x6dax-w-none \x6cg:\x77-[\x320em] \x6ceft-0 \x6dd:\x6ceft-[\x34em] \x6cg:\x6ceft-[\x320em] \x62ottom-[\x2d4em] \x6dd:\x62ottom-0 \x6cg:\x62ottom-[\x2d4em]"} />
              <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x323/\x318] \x77-[\x36.\x3375em] \x6cg:\x77-[\x37em] \x72ight-0 \x6cg:\x72ight-auto \x6cg:\x6ceft-[\x36em] \x62ottom-0"} />
            </div>
            <div className={"\x61bsolute \x74op-30 \x6ceft-1/\x32 \x68idden \x6dd:\x62lock"}>
              <div className={"message-blob \x70y-2 \x70b-1 \x70x-4 fluid-text-xs \x66ont-vogue \x2dtracking-[\x30.\x302em] \x72ounded-md \x6ceading-[\x31.\x335] \x72elative \x62g-brand-white \x74ext-brand-black"}>Try to match my pants &amp; top<svg className={"\x61bsolute \x2dright-[\x33px] \x62ottom-0 \x2dscale-x-[\x31] \x74ext-white"} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.115553 20.1813C5.31472 20.9867 10.451 18.1287 12.1196 16.2971C10.406 12.1988 21.0222 2.26031 14.0222 2.25263C12.4036 2.25094 11.0255 -1.99058 5.13536 1.18649C5.11281 2.47331 5.12937 6.9277 5.12858 7.68609C5.11763 18.1861 -0.883817 19.5769 0.115553 20.1813Z" fill="currentColor" /></svg></div>
            </div>
            <h2 className={"\x73r-only"}>The new world of search</h2>
            <div className={"\x6cg:\x74ext-center"}>
              <p className={"h3-small \x72elative \x6ceft-[\x30.\x37em] \x6cg:\x6ceft-[\x31.\x33em] \x6db-[\x30.\x34em] \x6cg:\x6db-[\x30.\x31em] \x75ppercase \x6cg:\x2dleft-[\x31em] \x61nimate-clip-bg \x6dd:\x74ext-brand-white \x6dd:\x6dix-blend-difference"} aria-label="The new world ofworld of" />
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">T</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
              </div>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">n</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">w</div>
              </div>
              <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock \x70x-[\x30.\x315em] \x74ext-brand-cream"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">w</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                  </div>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                  </div>
                </span>
                <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-brand-black \x74ext-mask \x62g-brand-lime \x77-full \x68-full \x70t-[\x30.\x31em] \x70x-[\x30.\x315em]"}>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">w</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">l</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">d</div>
                  </div>
                  <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">o</div>
                    <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">f</div>
                  </div>
                </span>
              </span>
              <p />
              <p className={"h1-small \x6db-0 \x6ceading-[\x30.\x385] \x61nimate-clip-bg \x6dd:\x6dx-auto \x74ext-brand-white"} aria-label="searchsearch">
                <span className={"\x69nline-block \x61lign-baseline \x72elative"}>
                  <span className={"\x72elative \x70t-[\x30.\x31em] \x62lock \x70x-[\x30.\x315em]"} />
                </span>
              </p>
              <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
              </div>
              <span className={"\x61bsolute \x6ceft-0 \x74op-0 \x74ext-brand-cream \x74ext-mask \x62g-brand-bubblegum \x77-full \x68-full \x70t-[\x30.\x31em] \x70x-[\x30.\x315em]"}>
                <div className="word" style={{ position: "relative", display: "inline-block" }} aria-hidden="true">
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">s</div>
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">e</div>
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">a</div>
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">r</div>
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">c</div>
                  <div className="char" style={{ position: "relative", display: "inline-block", translate: "none", rotate: "none", scale: "none", transform: "translate3d(0px, 0px, 0px) rotate(4deg) scale(1, 0)" } as CSSProperties} aria-hidden="true">h</div>
                </div>
              </span>
              <p />
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x6cg:\x67rid \x6cg:\x67rid-cols-12 \x6cg:\x67ap-x-8 \x6cg:\x69tems-center \x70y-20 \x6dd:\x70y-30 \x74ext-center \x63ontainer"}>
            <div className={"\x6cg:\x63ol-start-2 \x6cg:\x63ol-span-10 \x6cg:\x70x-8"}>
              <div className="wysiwyg">
                <p className={"\x74ext-body1"}>Search is one area where, on its surface, Gen Z might want technology to make the shopping experience <mark className="mark-green">more efficient</mark>, or even mindless. We already know that TikTok is the leading destination for Gen Zs when researching products, and <mark className="mark-pink">AI chatbots</mark> like ChatGPT are gaining ground, as they offer personalised, ad‑free (for now) suggestions and advice. </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
            <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
              <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
                <p className={"\x74ext-body3"}>Three‑quarters (75 per cent) of Gen Zs say they’ve used a generative AI tool like ChatGPT, Gemini or Midjourney, with 58 per cent revealing they use it at least weekly. Gen Zs are twice as likely to research products via AI‑powered assistants or chatbots (34 per cent of Gen Zs vs 17 per cent of millennials), per Archrival data.</p>
                <p className={"\x74ext-body2"}>However, again, Gen Zs are not turning to AI for simple, mindless answers.</p>
                <p className={"\x74ext-body3"}>OpenAI CEO Sam Altman says that <a href="https://archive.is/0MRN4#selection-973.0-977.198" target="_blank">different generations use ChatGPT differently</a>: older consumers tend to use it as a search tool, like Google, while Gen Zs are leveraging ChatGPT as an operating system, plugging in a complex array of data for it to analyse for a range of different scenarios.</p>
                <p className={"\x74ext-body3"}>“I think a lot of people view ChatGPT as a person,” says Scanlon. “I don’t know if it’d be friction in the traditional sense, because it does simplify so many things, but I think it’s sort of a category within itself where it’s very personal. You’re not seeing what other people are talking about, it’s not the comment section, it’s just you in this chatbot. And so I think it’s a different relationship psychologically than going to TikTok to try to find what to wear.”</p>
                <p className={"\x74ext-body3"}>“Gen Zs don’t want to be told what to do; they’d rather feel like they’re figuring things out on their own,” says Bayla Metzger, senior editor of thought leadership at Archrival. “So they’re using ChatGPT like an advisor, even like a sparring partner, which will challenge them as they make life decisions big and small.”</p>
                <p className={"\x74ext-body2"}>AI enables Gen Zs to lean on tech, while still feeling like they’re retaining their <mark className="mark-green">personal agency</mark> in terms of problem‑solving and decision‑making.</p>
                <p className={"\x74ext-body3"}>When it comes to shopping, AI helps young consumers along the way, by double‑checking product reviews or finding cheaper alternatives — but it goes deeper than that. “I use ChatGPT to summarise a company’s values, and see if I want to purchase from them,” says Chicago‑based student Inthisone. “This summer, I’m interning for Kohl’s, which is obviously a big retail company. Before I applied and had my first phone screening, I wanted to make sure that my own values align with theirs and that they work to have a positive impact on the world.” </p>
              </div>
              <div className={"\x72elative \x6dd:\x63ol-start-1"}>
                <div className={"\x72elative \x61spect-[\x3515/\x3647] \x77-[\x3120%] \x2dleft-[\x335%] \x78l:\x2dleft-10 \x6dd:\x6ceft-0 \x6dd:\x77-full \x6dax-w-[\x332.\x31875em] \x6cg:\x2dleft-20 \x32xl:\x2dleft-40"}>
                  <span className={"\x61bsolute \x69nset-0 \x68-[\x3140%] \x74op-[\x370%] \x2dtranslate-y-1/\x32 \x6ceft-1/\x32 \x2dtranslate-x-1/\x32 \x77-auto \x61spect-square radial-gradient-blue \x2dz-1 \x6fpacity-60"} />
                  <img className={"\x72elative \x69nset-0 \x77-full \x68-full \x6fbject-contain \x6fbject-top"} style={{ color: "transparent", translate: "none", rotate: "none", scale: "none", transform: "translate(0%, -5%)" } as CSSProperties} alt="Description of image" loading="lazy" width="515" height="647" decoding="async" src="/site-assets/a41bfe9c006e0836.png" />
                  <img className={"\x61bsolute \x69nset-0 \x77-full \x68-full \x6fbject-contain \x6fbject-top \x6ceft-[\x330%] \x6dd:\x6ceft-0"} style={{ color: "transparent", opacity: "0" }} alt="Description of image" loading="lazy" width="515" height="647" decoding="async" src="/site-assets/a6ca629083b5a1c6.png" />
                  <img className={"\x61bsolute \x69nset-0 \x77-full \x68-full \x6fbject-contain \x6fbject-top \x6ceft-[\x315%] \x6dd:\x6ceft-0 \x2dtop-[\x320%] \x6dd:\x74op-0"} style={{ color: "transparent", opacity: "0" }} alt="Description of image" loading="lazy" width="515" height="647" decoding="async" src="/site-assets/42332c017143eb18.png" />
                  <img className={"\x61bsolute \x69nset-0 \x77-full \x68-full \x6fbject-contain \x6fbject-top \x6ceft-[\x325%] \x6dd:\x6ceft-0"} style={{ color: "transparent", opacity: "1" }} alt="Description of image" loading="lazy" width="515" height="647" decoding="async" src="/site-assets/d78e4c85e36fa0ad.png" />
                  <div className={"\x61bsolute \x74op-[\x312em] \x6ceft-[\x366%] \x6dd:\x74op-[\x354%] \x6dd:\x6ceft-[\x320%] \x6cg:\x6ceft-[\x320%] \x32xl:\x6ceft-[\x310%] \x77-[\x39.\x3375em] \x68-8 \x6dd:\x77-[\x310em] \x72ounded-full \x62g-brand-white \x62order-brand-black \x74ext-brand-black \x62order \x66lex \x69tems-center \x70-2"}>
                    <svg className={"\x73ize-[\x30.\x3875em] \x66lex-shrink-0 \x6dr-2 \x6dd:\x73ize-4"} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.70613 4.22502C3.85553 2.2374 6.40111 1.55561 8.39251 2.7035C10.3839 3.85156 11.0661 6.3942 9.91693 8.38202C8.76754 10.3699 6.2212 11.0512 4.2297 9.90305C2.23835 8.7549 1.55678 6.2128 2.70613 4.22502Z" stroke="currentColor" strokeWidth="0.913468" />
                      <path d="M9.13281 9.13281L11.8539 11.7701" stroke="currentColor" strokeWidth="0.913468" />
                    </svg>
                    <span className={"\x74ext-xs \x66ont-normal \x66ont-vogue \x72elative \x74op-[\x30.\x31em]"} style={{ opacity: "1" }}>Trending fa</span>
                  </div>
                  <div className={"wysiwyg \x74ext-xs \x66ont-vogue \x61bsolute \x74op-[\x345%] \x6ceft-[\x366%] \x78l:\x6ceft-[\x370%] \x77-[\x316em] \x6dd:\x77-[\x316em] \x6dd:\x74op-[\x3110%] \x6dd:\x6ceft-[\x320%] \x6cg:\x74op-[\x340%] \x6cg:\x6ceft-[\x370%]"} style={{ opacity: "0" }}>
                    <p className={"!\x6db-0"}>
                      <strong>Minimalist outfit</strong>
                    </p>
                    <ul>
                      <li>White wide-leg trousers + black crop top</li>
                      <li>Sleek leather loafers</li>
                      <li>Tiny structured handbag</li>
                      <li>Delicate gold jewelry</li>
                      <li>Oversized hoodie with cargo pants</li>
                      <li>Retro sneakers (Nike Dunks or New Balance 550)</li>
                      <li>Add silver chain &amp; bucket hat</li>
                      <li>Small crossbody bag for balance</li>
                    </ul>
                  </div>
                  <img className={"\x61bsolute \x69nset-0 \x77-full \x68-full \x6fbject-contain \x6fbject-top \x2dtop-10"} style={{ color: "transparent", opacity: "0", translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" } as CSSProperties} alt="Description of image" loading="lazy" width="515" height="647" decoding="async" src="/site-assets/546122be6b45b966.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x72elative \x63ontainer \x6dy-20 \x6dd:\x6dy-40"}>
            <span className={"\x61bsolute \x6ceft-[\x380%] \x74op-1/\x32 \x2dtranslate-x-1/\x32 \x2dtranslate-y-1/\x32 \x68-[\x3110%] \x61spect-square \x72ounded-full \x62lur-2xl \x6fpacity-60 \x2dz-1 radial-gradient-purple"} />
            <div className={"\x6dd:\x66lex \x67ap-x-4 \x6dd:\x67ap-x-8 \x32xl:\x67ap-x-12 \x69tems-start \x6austify-between"}>
              <p className={"\x74ext-body1 \x6db-6 \x6dd:\x6db-0"}>Have you ever used generative <mark className="mark-pink">AI tools</mark> to do any of the following?</p>
              <div className={"\x6dd:\x6austify-end \x66lex \x66lex-shrink-0 \x73ticky \x74op-header"}>
                <div className={"\x77-full \x6dd:\x77-auto"}>
                  <ChartToggle id="new-search-ai" />
                  <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
                </div>
              </div>
            </div>
            <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dt-16 \x6cg:\x6dt-20"}>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.54" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Research brands or products</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>54%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Research brands or products" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/af1d445822d49131.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.51" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Compare prices</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>51%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Compare prices" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/16947f226bb8f4cf.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.46" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Compare product features</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>46%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Compare product features" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/05862e0e0e724f46.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.44" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Identify new brands and products</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>44%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Identify new brands and products" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/87c0b79af4a5e5ff.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.42" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Create a shopping list</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>42%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Create a shopping list" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/32e7efdc36f1b64c.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.4" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Help me make purchasing decisions while I shop in a physical store</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>40%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Help me make purchasing decisions while I shop in a physical store" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/fe6b530b4b96b21a.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.39" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Get a product recommendation tailored to my taste</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>39%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Get a product recommendation tailored to my taste" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/cf2a6172a478b1ea.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.35" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Suggest outfits or give styling advice</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>35%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Suggest outfits or give styling advice" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/2586fa33407502ff.png" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={"\x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x69tems-start"} style={{ translate: "none", rotate: "none", scale: "none", "--progress": "0", transform: "translate(0px, 30px)", "--value": "0.32" } as CSSProperties}>
                <div className={"\x6dd:\x70r-[\x316.\x36%]"}>
                  <p className={"\x74ext-base \x6dd:!\x74ext-body2 \x66ont-vogue \x6db-4 \x6dd:\x6db-0 \x6dax-w-[\x321.\x3875em] \x6dd:\x6dax-w-none"}>Purchase products</p>
                </div>
                <div className={"\x72elative"}>
                  <p className={"\x74ext-body1 md:h5 \x66ont-semibold \x6db-2 \x6dd:\x6db-3"}>32%</p>
                  <div className={"\x72elative"}>
                    <svg className={"\x72elative \x77-full \x68-auto double-chart__scale"} viewBox="0 0 590 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M.5.6v39" stroke="#161414" />
                      <path d="M12.5 8.1v24" stroke="#161414" />
                      <path d="M24.5 8v24" stroke="#161414" />
                      <path d="M36.5 8v24" stroke="#161414" />
                      <path d="M48.5 8v24" stroke="#161414" />
                      <path d="M60.5 8v24" stroke="#161414" />
                      <path d="M72.5 8v24" stroke="#161414" />
                      <path d="M84.5 8v24" stroke="#161414" />
                      <path d="M96.5 8v24" stroke="#161414" />
                      <path d="M108.5 8v24" stroke="#161414" />
                      <path d="M120.5 8v24" stroke="#161414" />
                      <path d="M132.5 8v24" stroke="#161414" />
                      <path d="M144.5 8v24" stroke="#161414" />
                      <path d="M156.5 8v24" stroke="#161414" />
                      <path d="M168.5 8v24" stroke="#161414" />
                      <path d="M180.5 8v24" stroke="#161414" />
                      <path d="M192.5 8v24" stroke="#161414" />
                      <path d="M204.5 7.9v24" stroke="#161414" />
                      <path d="M216.5 7.9v24" stroke="#161414" />
                      <path d="M228.5 7.9v24" stroke="#161414" />
                      <path d="M240.5 7.9v24" stroke="#161414" />
                      <path d="M252.5 7.9v24" stroke="#161414" />
                      <path d="M264.5 7.8v24" stroke="#161414" />
                      <path d="M276.5 7.8v24" stroke="#161414" />
                      <path d="M288.5 7.8v24" stroke="#161414" />
                      <path d="M300.5 7.8v24" stroke="#161414" />
                      <path d="M312.5 7.8v24" stroke="#161414" />
                      <path d="M324.5 7.8v24" stroke="#161414" />
                      <path d="M336.5 7.8v24" stroke="#161414" />
                      <path d="M348.5 7.8v24" stroke="#161414" />
                      <path d="M360.5 7.7v24" stroke="#161414" />
                      <path d="M372.5 7.7v24" stroke="#161414" />
                      <path d="M384.5 7.7v24" stroke="#161414" />
                      <path d="M396.5 7.7v24" stroke="#161414" />
                      <path d="M408.5 7.7v24" stroke="#161414" />
                      <path d="M420.5 7.7v24" stroke="#161414" />
                      <path d="M432.5 7.7v24" stroke="#161414" />
                      <path d="M444.5 7.7v24" stroke="#161414" />
                      <path d="M456.5 7.6v24" stroke="#161414" />
                      <path d="M468.5 7.6v24" stroke="#161414" />
                      <path d="M480.5 7.6v24" stroke="#161414" />
                      <path d="M492.5 7.6v24" stroke="#161414" />
                      <path d="M504.5 7.6v24" stroke="#161414" />
                      <path d="M516.5 7.6v24" stroke="#161414" />
                      <path d="M528.5 7.6v24" stroke="#161414" />
                      <path d="M540.5 7.6v24" stroke="#161414" />
                      <path d="M552.5 7.5v24" stroke="#161414" />
                      <path d="M564.5 7.5v24" stroke="#161414" />
                      <path d="M576.5 7.5v24" stroke="#161414" />
                      <path d="M588.5 0v39" stroke="#161414" />
                    </svg>
                    <svg className={"\x61bsolute \x6ceft-0 \x2dbottom-2 \x77-full \x68-auto double-chart__fill \x74ext-brand-sea"} viewBox="0 0 593 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="14.7" y="15" width="15" height="15" fill="currentColor" />
                      <rect y="30" width="15" height="15" fill="currentColor" />
                      <rect x="29.7" y="30" width="15" height="15" fill="currentColor" />
                      <rect x="37.8" y="15" width="15" height="15" fill="currentColor" />
                      <rect x="52.8" y="26.4" width="15" height="15" fill="currentColor" />
                      <rect x="67.8" y="11.4" width="15" height="15" fill="currentColor" />
                      <rect x="82.8" y="23.8" width="15" height="15" fill="currentColor" />
                      <rect x="97.8" y="35.9" width="15" height="15" fill="currentColor" />
                      <rect x="112.8" y="20.9" width="15" height="15" fill="currentColor" />
                      <rect x="127.8" y="35.7" width="15" height="15" fill="currentColor" />
                      <rect x="139" y="20.7" width="15" height="15" fill="currentColor" />
                      <rect x="144.8" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="154" y="31.1" width="15" height="15" fill="currentColor" />
                      <rect x="169" y="18.9" width="15" height="15" fill="currentColor" />
                      <rect x="181.1" y="33.9" width="15" height="15" fill="currentColor" />
                      <rect x="104.3" y="5.7" width="15" height="15" fill="currentColor" />
                      <rect x="86.9" y="8.8" width="15" height="15" fill="currentColor" />
                      <rect x="69.2" y="38.8" width="15" height="15" fill="currentColor" />
                      <rect x="50" width="15" height="15" fill="currentColor" />
                      <rect x="201.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="187" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="216.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="224.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="239.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="254.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="269.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="284.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="299.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="314.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="326.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="331.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="341.1" y="31.6" width="15" height="15" fill="currentColor" />
                      <rect x="356.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="368.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="291.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="274" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="256.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="237" y="0.4" width="15" height="15" fill="currentColor" />
                      <rect x="410.7" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="396" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="380.7" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="425.7" y="30.4" width="15" height="15" fill="currentColor" />
                      <rect x="433.9" y="15.4" width="15" height="15" fill="currentColor" />
                      <rect x="448.9" y="26.9" width="15" height="15" fill="currentColor" />
                      <rect x="463.9" y="11.9" width="15" height="15" fill="currentColor" />
                      <rect x="478.9" y="24.3" width="15" height="15" fill="currentColor" />
                      <rect x="493.9" y="36.3" width="15" height="15" fill="currentColor" />
                      <rect x="508.9" y="21.3" width="15" height="15" fill="currentColor" />
                      <rect x="523.9" y="36.1" width="15" height="15" fill="currentColor" />
                      <rect x="535.1" y="21.1" width="15" height="15" fill="currentColor" />
                      <rect x="540.9" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="550.1" y="31.5" width="15" height="15" fill="currentColor" />
                      <rect x="565.1" y="19.4" width="15" height="15" fill="currentColor" />
                      <rect x="577.2" y="34.4" width="15" height="15" fill="currentColor" />
                      <rect x="500.4" y="6.1" width="15" height="15" fill="currentColor" />
                      <rect x="483" y="9.3" width="15" height="15" fill="currentColor" />
                      <rect x="465.3" y="39.3" width="15" height="15" fill="currentColor" />
                      <rect x="446" y="0.4" width="15" height="15" fill="currentColor" />
                    </svg>
                    <div className={"\x61bsolute \x6ceft-0 \x74op-0 \x68-full \x77-full double-chart__image-holder"}>
                      <img className={"\x72elative \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x73ize-[\x35em] \x6cg:\x73ize-[\x38em] \x2dtranslate-x-1/\x32 \x61nimate-shake-head"} style={{ color: "transparent" }} alt="Purchase products" loading="lazy" width="150" height="150" decoding="async" src="/site-assets/ccddfa34cbc6eae2.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"\x66ixed \x62ottom-0 \x6dd:\x68idden \x7a-22 \x62g-brand-gray \x70x-4 \x70y-4 \x74ransition-transform \x64uration-300 \x6ceft-0 \x72ight-0 \x74ranslate-y-[\x3200%]"}>
              <div>
                <ChartToggle id="new-search-private" />
                <div className={"\x74ext-sm \x66ont-adobe \x75ppercase \x66lex-shrink-0 \x74ext-right \x6dt-4 \x74ext-right"}>Source: <span className={"\x66ont-bold \x69talic"}>Archrival</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x63ontainer"}>
            <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
              <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
                <p className={"\x74ext-body3"}>Crucially, ChatGPT is a way to ask questions about fashion or beauty that feels more private. “For some, the platform is becoming a kind of style confidante — helping people explore fashion identities that they might not feel comfortable voicing elsewhere,” says Saguna Goel, product lead for ChatGPT’s search team at OpenAI. “I’ve seen people use ChatGPT to rethink their wardrobe post‑pregnancy, or learn how to dress for different cultural or religious events.” </p>
              </div>
              <div className={"\x72elative \x6dd:\x72ow-start-1 \x6dd:\x72ow-span-2 \x6dd:\x63ol-start-1"}>
                <div className={"\x72elative \x61spect-[\x3500/\x3740] \x77-full"}>
                  <span className={"radial-gradient-blue-light \x77-[\x3200%] \x68-[\x375%] \x61bsolute \x2dz-1 \x2dleft-1/\x32 \x74op-1/\x32 \x2dtranslate-y-1/\x32 \x6fpacity-60"} />
                  <div className={"\x61bsolute \x61spect-[\x3333/\x3450] \x77-[\x375%] \x6dax-w-[\x321em] \x6ceft-[\x37%] \x74op-0"} />
                  <div className={"\x61bsolute \x61spect-[\x351/\x345] \x77-[\x380%] \x6dd:\x6dax-w-full \x6dd:\x77-[\x330em] \x6ceft-1/\x32 \x74op-[\x330%] \x2dtranslate-x-1/\x32"} />
                  <div className={"\x68idden \x6dd:\x62lock \x61bsolute \x61spect-[\x3782/\x3434] \x77-[\x3100%] \x6dax-w-[\x348.\x3875em] \x72ight-[\x325%] \x74op-[\x340%]"} />
                </div>
              </div>
              <div className={"wysiwyg \x6dd:\x72ow-start-2 \x6dd:\x63ol-start-2"}>
                <p className={"\x74ext-body3"}>“I tested out a service that let you upload your wardrobe so the AI could help you style outfits from what you already own. I thought it was a really cool idea and would definitely explore tools like that again as they get better,” says LA‑based creator Arujo. “I’m also watching companies like Alta, which just raised funding to develop an AI personal stylist. I think this kind of tech will be super useful for streamlining how we shop and style ourselves in the future.”</p>
                <p className={"\x74ext-body3"}>Interestingly, Gen AI is an IRL shopping companion, assisting Gen Z while they shop in physical spaces. Forty per cent of Gen Zs are using AI to help them make purchasing decisions while shopping in a bricks‑and‑mortar store. </p>
                <p className={"\x74ext-body2"}>Regardless of whether they’re using AI at‑home or in‑store, nearly half of Gen Zs say the tech has already significantly changed their relationships with brands and products.  </p>
              </div>
            </div>
          </div>
        </div>
        <div className={"\x72elative \x61spect-[\x33/\x34] \x6dd:\x61spect-[\x31440/\x3810] \x6dt-40"}>
          <div className={"\x61bsolute \x61spect-[\x31118/\x3652] \x77-[\x3200%] \x6ceft-0 \x74ranslate-x-[\x2d39%] \x6dd:\x77-3/\x34 \x6dd:\x6ceft-1/\x38 \x6dd:\x74ranslate-x-0 \x62ottom-0"} />
          <div className={"\x61bsolute \x61spect-[\x368/\x372] \x68-full \x6ceft-0 \x74op-0"} />
          <div className={"\x61bsolute \x61spect-[\x368/\x372] \x68-full \x72ight-0 \x74op-0"} />
        </div>
        <div className={"\x70t-10 \x6dd:\x70t-20 fluid-block \x62g-brand-cream \x72elative"} id="article-4">
          <span className={"\x68-[\x32px] \x78l:\x74ranslate-y-[\x350%] \x77-full \x61bsolute \x6ceft-0 \x72ight-0 \x62ottom-full \x2dmb-2 \x62g-gradient-to-t \x66rom-brand-cream \x66rom-60% \x74o-transparent"} />
          <div className={"\x6cg:\x67rid \x6cg:\x67rid-cols-12 \x6cg:\x67ap-x-8 \x6cg:\x69tems-center \x70y-20 \x6dd:\x70y-30 \x74ext-center \x63ontainer \x78l:\x6db-0 \x78l:\x70b-0 \x78l:\x6dt-0 \x78l:\x70t-0 \x7a-1 \x72elative"}>
            <div className={"\x6cg:\x63ol-start-2 \x6cg:\x63ol-span-10 \x6cg:\x70x-8"}>
              <div className="wysiwyg">
                <p className={"\x74ext-body1"}>The marketing industry has always chased what’s easy to measure — reach, clicks, conversion — and in doing so, it has lost sight of what’s hard to earn: <mark className="mark-green">brand meaning</mark>. In the race to eliminate every barrier, we’ve created a shopping landscape optimised for efficiency, but hollowed out of humanity. Now, Gen Z is <mark className="mark-blue">holding up the mirror.</mark> </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-block">
          <div className={"\x63ontainer \x70b-10 \x6dd:\x70b-20"}>
            <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x78l:\x67rid \x78l:\x67rid-cols-12 \x78l:\x67ap-x-8 \x78l:\x6dt-0"}>
              <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
                <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-2"}>
                  <p className={"\x74ext-body3"}>Gen Zs aren’t rejecting progress, but rather demanding a correction of course. They’re asking that brands that really want to build relationships offer more than frictionless pipelines and automated persuasion.</p>
                  <p className={"\x74ext-body2"}>To win in this new environment, brands must recalibrate. Not abandon convenience, but reintroduce <mark className="mark-blue">deliberate friction</mark> where it creates meaning: moments of discovery, creative tension, shared experiences and niche cultural relevance.</p>
                  <p className={"\x74ext-body3"}>Success will belong to the brands that understand shopping is no longer a straight line to checkout. It’s a cycle of emotional engagement, where attention must be earned, not bought — and loyalty is a result, not a goal.</p>
                  <p className={"\x74ext-body2"}><mark className="mark-green">The funnel is broken</mark>. Now, it’s up to marketers to decide whether they’ll keep optimising for the past, or <mark className="mark-green">start building the future</mark>.</p>
                </div>
                <div className={"\x72elative \x6dd:\x63ol-start-1"}>
                  <div className={"\x72elative \x61spect-[\x3240/\x3512] \x6dax-w-[\x315em] \x6ceft-0 \x74op-16 \x6dx-auto"}>
                    <div className={"\x72elative \x77-full \x68-full"} />
                    <div className={"\x61bsolute \x61spect-[\x323/\x330] \x77-[\x320em] \x6ceft-16 \x74op-24"} />
                    <span className={"\x62g-brand-sea \x69nline-flex \x72ounded-full \x70x-3 \x70t-[\x30.\x32em] \x68-[\x31.\x3625em] \x69tems-center \x74ext-brand-white \x66ont-vogue \x74ext-xs \x61bsolute \x6ceft-0 \x74op-0 \x6fpacity-0"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.5, 0.5)", opacity: "0" } as CSSProperties}>Future</span>
                    <span className={"\x62g-brand-sea \x69nline-flex \x72ounded-full \x70x-3 \x70t-[\x30.\x32em] \x68-[\x31.\x3625em] \x69tems-center \x74ext-brand-white \x66ont-vogue \x74ext-xs \x61bsolute \x2dright-10 \x74op-[\x325%] \x6fpacity-0"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.5, 0.5)", opacity: "0" } as CSSProperties}>Meaning</span>
                    <span className={"\x62g-brand-sea \x69nline-flex \x72ounded-full \x70x-3 \x70t-[\x30.\x32em] \x68-[\x31.\x3625em] \x69tems-center \x74ext-brand-white \x66ont-vogue \x74ext-xs \x61bsolute \x2dleft-10 \x74op-[\x350%] \x6fpacity-0"} style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.5, 0.5)", opacity: "0" } as CSSProperties}>Discovery</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={"\x61spect-[\x3925/\x3165] \x77-full \x68-auto \x6dax-w-[\x357em] \x6dx-auto"} />
          </div>
        </div>
        <span className={"\x62g-gradient-to-t \x66rom-brand-lavender \x74o-transparent \x68-screen \x61bsolute \x62ottom-0 \x77-full \x2dz-1"} />
      </div>
      <div className={"\x72elative \x70y-10 \x6dd:\x70y-20 \x32xl:\x6din-h-screen fluid-block"}>
        <div className={"\x63ontainer"}>
          <div className={"\x6dd:\x69tems-center \x6dy-10 \x6dd:\x6dy-20 \x32k:\x6dy-40 \x6dd:\x66lex"}>
            <div className={"\x66lex \x66lex-col \x67ap-y-16 \x6dd:\x67rid \x6dd:\x67rid-cols-2 \x6dd:\x67ap-x-6 \x6dd:\x67ap-y-0 \x78l:\x67ap-x-8 \x78l:\x63ol-start-2 \x78l:\x63ol-span-10"}>
              <div className={"wysiwyg \x6dd:\x72ow-start-1 \x6dd:\x63ol-start-1 \x6dd:\x6dt-42"}>
                <p className={"\x74ext-body2"}>This is the second installment of a two‑part series on how Gen Z Broke the Marketing Funnel, produced in partnership with youth culture agency <a href="https://archrival.com" target="_blank">Archrival</a>, who provided research, insights, and design.</p>
                <p className={"\x74ext-body3"}>Check out the first report <a href="https://www.vogue.com/article/gen-z-broke-the-marketing-funnel" target="_blank">here</a>.</p>
              </div>
              <div className={"\x72elative \x6dd:\x63ol-start-2"}>
                <div className={"\x72elative \x61spect-square \x77-full \x6dx-auto \x6dax-w-[\x333em]"}>
                  <div className={"\x61bsolute \x61spect-square \x68-full \x6ceft-[\x310%] \x74op-0"} />
                </div>
              </div>
            </div>
          </div>
          <div className={"\x66lex \x69tems-end \x6austify-between"}>
            <div className={"\x77-1/\x35 \x6dax-w-[\x314.\x3375em] \x61spect-square \x6dd:\x61bsolute \x6ceft-[\x335%] \x6dd:\x62ottom-0"} />
            <div className={"\x6dl-auto \x61bsolute \x70x-8 \x70y-4 \x78l:\x70x-12 \x78l:\x70y-6 \x6ceft-0 \x62ottom-0"}>
              <div className={"\x75ppercase \x74ext-lg \x66lex \x69tems-center group \x66ont-vogue \x63ursor-pointer"}>
                <span className={"\x73ize-10 \x72ounded-full \x62order \x62order-current \x66lex \x69tems-center \x6austify-center \x74ransition-colors \x64uration-300 \x6dr-3 \x67roup-hover:\x62g-brand-black \x67roup-hover:\x74ext-brand-black"}>
                  <div className={"\x67rid \x6fverflow-clip \x73ize-6"}>
                    <svg className={"\x73ize-6 \x6fbject-contain \x74ransition-transform \x64uration-300 \x67roup-hover:\x2dtranslate-y-full \x74ext-brand-black"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 20V7.8l-5.6 5.6L4 12l8-8 8 8-1.4 1.4L13 7.8V20z" fill="currentColor" />
                    </svg>
                    <svg className={"\x73ize-6 \x6fbject-contain \x74ransition-transform \x64uration-300 \x67roup-hover:\x2dtranslate-y-full \x74ext-brand-cream"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 20V7.8l-5.6 5.6L4 12l8-8 8 8-1.4 1.4L13 7.8V20z" fill="currentColor" />
                    </svg>
                  </div>
                </span>
                <span className={"\x72elative \x74op-[\x30.\x315em]"}>back to top</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

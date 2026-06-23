import {
  BrainCircuit,
  Bot,
  Boxes,
  LayoutPanelLeft,
  Database,
  Compass,
} from "lucide-react";

const LogoMark = () => (
  <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8b5cff" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect x="0.5" y="0.5" width="31" height="31" rx="8" stroke="rgba(255,255,255,0.12)" />
    <path
      d="M10 24V8h7a5 5 0 0 1 0 10h-7"
      stroke="url(#lg)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    className="nav-chev"
    viewBox="0 0 10 6"
    fill="none"
    width="10"
    height="6"
    aria-hidden="true"
  >
    <path
      d="M1 1l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navigation() {
  return (
    <>
      <header className="nav">
        <div className="shell w-full flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label="Pragma Softwares home"
          >
            <LogoMark />
            <span className="font-display font-semibold text-[17px] tracking-tight">
              Pragma<span className="text-faint font-normal"> Softwares</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            <div className="nav-drop-root" data-panel="work">
              <button
                className="nav-link nav-link-btn"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Work
                <ChevronIcon />
              </button>
            </div>
            <div className="nav-drop-root" data-panel="capabilities">
              <button
                className="nav-link nav-link-btn"
                aria-expanded="false"
                aria-haspopup="true"
              >
                Capabilities
                <ChevronIcon />
              </button>
            </div>
            <a href="#process" className="nav-link">Process</a>
            <a href="#intelligence" className="nav-link">Intelligence</a>
            <a href="#contact" className="nav-link">Studio</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="btn btn-primary hidden sm:inline-flex"
              data-cursor="hover"
            >
              Start a project <span className="btn-ico" aria-hidden="true">→</span>
            </a>
            <button
              id="menu-toggle"
              className="lg:hidden w-11 h-11 grid place-items-center glass rounded-xl"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-menu"
            >
              <span className="block w-5 h-[1.5px] bg-ink relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-[1.5px] before:bg-ink after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-[1.5px] after:bg-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Shared nav mega panel */}
      <div id="nav-mega" aria-hidden="true">
        <div className="nav-mega-card">
          {/* Work content */}
          <div className="nav-mega-section" data-panel-id="work" role="menu" aria-label="Work">
            <p className="nav-panel-label">Selected work</p>
            <div className="nav-panel-cases">
              {[
                { tag: "Fintech", title: "Halcyon Capital", metric: "12× faster" },
                { tag: "Healthcare", title: "Northwind Health", metric: "−6 hrs/wk" },
                { tag: "Logistics", title: "Vanta Logistics", metric: "+23% margin" },
                { tag: "SaaS", title: "Lumen Studio", metric: "40k seats" },
              ].map((c) => (
                <a key={c.title} href="#work" className="nav-case-item" role="menuitem">
                  <span className="nav-case-tag">{c.tag}</span>
                  <span className="nav-case-title">{c.title}</span>
                  <span className="nav-case-metric">{c.metric}</span>
                </a>
              ))}
            </div>
            <a href="#work" className="nav-panel-footer" role="menuitem">
              View all case studies <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Capabilities content */}
          <div
            className="nav-mega-section"
            data-panel-id="capabilities"
            role="menu"
            aria-label="Capabilities"
          >
            <p className="nav-panel-label">What we build</p>
            <div className="nav-panel-grid">
              {[
                { icon: <BrainCircuit size={14} />, name: "Applied AI", desc: "RAG, fine-tuning & guardrails" },
                { icon: <Bot size={14} />, name: "Agentic Systems", desc: "Agents that reason, act, self-correct" },
                { icon: <Boxes size={14} />, name: "Product Engineering", desc: "Full-stack, production-first" },
                { icon: <LayoutPanelLeft size={14} />, name: "Interfaces", desc: "Motion-led, deliberately crafted" },
                { icon: <Database size={14} />, name: "Data & Infra", desc: "Pipelines, retrieval and evals" },
                { icon: <Compass size={14} />, name: "Strategy & Design", desc: "Constraint → product worth building" },
              ].map((item) => (
                <a key={item.name} href="#services" className="nav-panel-item" role="menuitem">
                  <span className="nav-panel-ico">{item.icon}</span>
                  <span className="nav-panel-text">
                    <span className="nav-panel-name">{item.name}</span>
                    <span className="nav-panel-desc">{item.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden="true"
        className="fixed inset-0 z-[999] bg-bg/95 backdrop-blur-xl translate-x-full invisible transition-[transform,visibility] duration-500 [&.open]:translate-x-0 [&.open]:visible lg:hidden"
      >
        <div className="h-full flex flex-col justify-center gap-2 px-8">
          <a href="#services" className="font-display text-4xl py-2">Capabilities</a>
          <a href="#work" className="font-display text-4xl py-2">Work</a>
          <a href="#process" className="font-display text-4xl py-2">Process</a>
          <a href="#intelligence" className="font-display text-4xl py-2">Intelligence</a>
          <a href="#contact" className="font-display text-4xl py-2">Studio</a>
          <a href="#contact" className="btn btn-primary mt-8 self-start">Start a project →</a>
        </div>
      </div>
    </>
  );
}

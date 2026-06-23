export default function Work() {
  return (
    <section id="work" className="py-16 md:py-24 lg:py-32">
      <div className="shell">
        <div className="kicker-row mb-10 md:mb-16">
          <div className="section-head">
            <p className="eyebrow" data-reveal="fade">02 / Selected work</p>
            <h2 className="display text-[clamp(32px,5vw,68px)]" data-reveal="lines">
              Proof, not promises.
            </h2>
          </div>
          <a href="#contact" className="btn btn-ghost self-end" data-cursor="hover">
            All case studies →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-7" data-reveal-group>
          {/* Card 1 — Halcyon Capital */}
          <article className="work-card group" data-reveal-item data-cursor="link" data-cursor-label="View case" data-tilt>
            <div className="work-visual">
              <div className="mock-backlight" style={{ "--c1": "rgba(139,92,255,.55)", "--c2": "rgba(34,211,238,.4)" } as React.CSSProperties} />
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="layer">
                <div className="mock-card font-mono">
                  <div className="mock-head">
                    <span className="mock-dot" style={{ background: "#ff5f57" }} />
                    <span className="mock-dot" style={{ background: "#febc2e" }} />
                    <span className="mock-dot" style={{ background: "#28c840" }} />
                    <span className="text-[10px] text-faint ml-2">halcyon · research</span>
                    <span className="ml-auto text-[10px] text-cyan2">● LIVE</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-end justify-between mb-3">
                      <div><div className="text-[10px] text-faint mb-0.5">EXPOSURE</div><div className="text-ink text-lg leading-none">$2.41B</div></div>
                      <div className="text-cyan2 text-[11px]">▲ 4.2%</div>
                    </div>
                    <svg viewBox="0 0 240 52" className="w-full h-11 mb-3" preserveAspectRatio="none" aria-hidden="true">
                      <defs><linearGradient id="spk1" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#8b5cff" /><stop offset="1" stopColor="#22d3ee" /></linearGradient></defs>
                      <polyline fill="none" stroke="url(#spk1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points="0,42 24,38 48,40 72,28 96,32 120,20 144,24 168,12 192,16 216,6 240,9" />
                    </svg>
                    <div className="mock-row"><span className="text-muted text-[11px]">NVDA · momentum</span><span className="text-cyan2 text-[11px]">+12.4%</span></div>
                    <div className="mock-row"><span className="text-muted text-[11px]">TSLA · reversal</span><span className="text-[11px]" style={{ color: "#ff7a7a" }}>−3.1%</span></div>
                    <div className="mock-row" style={{ borderBottom: "0" }}><span className="text-muted text-[11px]">agent · 14 signals</span><span className="text-glow text-[11px]">acting…</span></div>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-6 z-10 font-mono text-[11px] text-muted">01 — FINTECH / CAPITAL MARKETS</div>
            </div>
            <div className="p-5 md:p-7 bg-bg-2/60">
              <div className="meta-row mb-3">
                <h3 className="font-display text-2xl md:text-3xl">Halcyon Capital</h3>
                <span className="font-display text-cyan2 text-xl">12× <span className="text-faint text-sm font-body">faster research</span></span>
              </div>
              <p className="text-muted mb-5">An autonomous research agent that reads markets faster than any desk.</p>
              <div className="flex flex-wrap gap-2"><span className="tag">Agentic AI</span><span className="tag">Real-time data</span><span className="tag">Trading UX</span></div>
            </div>
          </article>

          {/* Card 2 — Northwind Health */}
          <article className="work-card group md:mt-16" data-reveal-item data-cursor="link" data-cursor-label="View case" data-tilt>
            <div className="work-visual">
              <div className="mock-backlight" style={{ "--c1": "rgba(34,211,238,.5)", "--c2": "rgba(139,92,255,.42)", "--bx": "82%" } as React.CSSProperties} />
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="layer">
                <div className="mock-card">
                  <div className="mock-head">
                    <span className="text-[10px] text-faint font-mono">patient · #4821 · intake</span>
                    <span className="ml-auto text-[10px] font-mono text-glow">◆ AI drafting</span>
                  </div>
                  <div className="p-4">
                    <div className="text-ink text-sm mb-3 font-medium">Progress note — draft</div>
                    <div className="space-y-2.5">
                      <div className="mock-bar accent" style={{ width: "94%" }} />
                      <div className="mock-bar" style={{ width: "78%" }} />
                      <div className="mock-bar" style={{ width: "88%" }} />
                      <div className="flex items-center gap-1.5"><div className="mock-bar" style={{ width: "44%" }} /><span className="caret" style={{ height: "11px" }} /></div>
                    </div>
                    <div className="mt-4 flex gap-2 font-mono">
                      <span className="tag" style={{ fontSize: "10px", padding: "3px 9px" }}>SOAP</span>
                      <span className="tag" style={{ fontSize: "10px", padding: "3px 9px" }}>ICD-10</span>
                      <span className="tag" style={{ fontSize: "10px", padding: "3px 9px", borderColor: "rgba(52,231,228,.3)", color: "#34e7e4" }}>signed-off</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-6 z-10 font-mono text-[11px] text-muted">02 — HEALTHCARE / CLINICAL AI</div>
            </div>
            <div className="p-5 md:p-7 bg-bg-2/60">
              <div className="meta-row mb-3">
                <h3 className="font-display text-2xl md:text-3xl">Northwind Health</h3>
                <span className="font-display text-cyan2 text-xl">−6 hrs <span className="text-faint text-sm font-body">/wk per clinician</span></span>
              </div>
              <p className="text-muted mb-5">A clinical copilot that drafts notes while doctors stay with patients.</p>
              <div className="flex flex-wrap gap-2"><span className="tag">Applied AI</span><span className="tag">Compliance</span><span className="tag">Workflow</span></div>
            </div>
          </article>

          {/* Card 3 — Vanta Logistics */}
          <article className="work-card group" data-reveal-item data-cursor="link" data-cursor-label="View case" data-tilt>
            <div className="work-visual">
              <div className="mock-backlight" style={{ "--c1": "rgba(139,92,255,.45)", "--c2": "rgba(34,211,238,.4)", "--bx": "50%" } as React.CSSProperties} />
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="layer">
                <div className="mock-card">
                  <div className="mock-head">
                    <span className="text-[10px] text-faint font-mono">fleet · re-routing</span>
                    <span className="ml-auto text-[10px] font-mono text-cyan2">+23% margin</span>
                  </div>
                  <div className="p-4">
                    <svg viewBox="0 0 240 104" className="w-full h-24" aria-hidden="true">
                      <defs><linearGradient id="rt3" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#8b5cff" /><stop offset="1" stopColor="#34e7e4" /></linearGradient></defs>
                      <g stroke="rgba(255,255,255,.06)" strokeWidth="1">
                        <line x1="0" y1="26" x2="240" y2="26" /><line x1="0" y1="52" x2="240" y2="52" /><line x1="0" y1="78" x2="240" y2="78" />
                        <line x1="60" y1="0" x2="60" y2="104" /><line x1="120" y1="0" x2="120" y2="104" /><line x1="180" y1="0" x2="180" y2="104" />
                      </g>
                      <polyline fill="none" stroke="url(#rt3)" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" points="14,88 70,66 112,74 162,34 226,18" />
                      <circle cx="14" cy="88" r="3.5" fill="#8b5cff" /><circle cx="112" cy="74" r="3.5" fill="#22d3ee" /><circle cx="226" cy="18" r="5" fill="#34e7e4" />
                    </svg>
                    <div className="mock-row mt-1" style={{ borderBottom: "0" }}>
                      <span className="text-muted font-mono text-[11px]">routes optimized</span>
                      <span className="text-cyan2 font-mono text-[11px]">1,284 / hr</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-6 z-10 font-mono text-[11px] text-muted">03 — SUPPLY CHAIN / OPERATIONS</div>
            </div>
            <div className="p-5 md:p-7 bg-bg-2/60">
              <div className="meta-row mb-3">
                <h3 className="font-display text-2xl md:text-3xl">Vanta Logistics</h3>
                <span className="font-display text-cyan2 text-xl">+23% <span className="text-faint text-sm font-body">freight margin</span></span>
              </div>
              <p className="text-muted mb-5">A routing brain that re-plans fleets the moment reality changes.</p>
              <div className="flex flex-wrap gap-2"><span className="tag">Optimization</span><span className="tag">Data Infra</span><span className="tag">Dashboards</span></div>
            </div>
          </article>

          {/* Card 4 — Lumen Studio */}
          <article className="work-card group md:mt-16" data-reveal-item data-cursor="link" data-cursor-label="View case" data-tilt>
            <div className="work-visual">
              <div className="mock-backlight" style={{ "--c1": "rgba(34,211,238,.45)", "--c2": "rgba(139,92,255,.45)", "--bx": "15%" } as React.CSSProperties} />
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="layer">
                <div className="mock-card">
                  <div className="mock-head">
                    <span className="text-[10px] text-faint font-mono">lumen · generate</span>
                    <span className="ml-auto text-[10px] font-mono text-glow">40k seats</span>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-4 gap-2 mb-3">
                      {[
                        "linear-gradient(135deg,#8b5cff,#22d3ee)",
                        "linear-gradient(135deg,#22d3ee,#6d4dff)",
                        "linear-gradient(135deg,#6d4dff,#34e7e4)",
                        "linear-gradient(135deg,#8b5cff,#0b0b12)",
                        "linear-gradient(135deg,#34e7e4,#8b5cff)",
                        "linear-gradient(135deg,#22d3ee,#0b0b12)",
                      ].map((bg, i) => (
                        <div key={i} className="aspect-square rounded-md" style={{ background: bg }} />
                      ))}
                      <div className="aspect-square rounded-md border border-dashed border-white/20 grid place-items-center">
                        <span className="text-glow text-[10px] font-mono">…</span>
                      </div>
                      <div className="aspect-square rounded-md" style={{ background: "linear-gradient(135deg,#6d4dff,#22d3ee)" }} />
                    </div>
                    <div className="flex items-center gap-2 rounded-lg border border-line px-3 py-2">
                      <span className="text-cyan2 font-mono text-[11px]">›</span>
                      <span className="text-muted font-mono text-[11px]">brand system — editorial, bold</span>
                      <span className="caret ml-0.5" style={{ height: "11px" }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-6 top-6 z-10 font-mono text-[11px] text-muted">04 — CREATIVE / SAAS</div>
            </div>
            <div className="p-5 md:p-7 bg-bg-2/60">
              <div className="meta-row mb-3">
                <h3 className="font-display text-2xl md:text-3xl">Lumen Studio</h3>
                <span className="font-display text-cyan2 text-xl">40k <span className="text-faint text-sm font-body">seats in 90 days</span></span>
              </div>
              <p className="text-muted mb-5">A generative design surface that ships brand systems in an afternoon.</p>
              <div className="flex flex-wrap gap-2"><span className="tag">GenAI</span><span className="tag">Interfaces</span><span className="tag">Product</span></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

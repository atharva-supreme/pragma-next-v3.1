import { AetherFlowCanvas } from "@/components/ui/aether-flow-hero";

const StarIcon = () => (
  <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg layers */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-pat" />
      </div>

      {/* Interactive particle network — renders behind hero copy and the fixed,
          transparent <Navigation />, so it forms the background for both.
          Transparent container lets the #hero gradient + orbs show through. */}
      <AetherFlowCanvas />

      {/* Vignette above the particles to keep edge text legible */}
      <div className="absolute inset-0 z-[1] hero-vignette pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto w-full px-[var(--gutter)]">
        <div id="hero-content" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Copy */}
          <div className="max-w-[560px]">
            {/* Status pill */}
            <div className="s-label pbadge mb-8 cursor-default pre-hide">
              Now accepting projects for Q3 2025
            </div>

            {/* H1 */}
            <h1
              id="hero-title"
              className="font-display font-extrabold leading-[1.07] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)" }}
            >
              <span className="h-line"><span className="h-inner">We build</span></span>
              <span className="h-line"><span className="h-inner">software that</span></span>
              <span className="h-line">
                <span className="h-inner">
                  <span
                    className="rot-inline"
                    style={{ "--rot-dur": "9s" } as React.CSSProperties}
                    aria-label="thinks."
                  >
                    <span className="rot-sizer" aria-hidden="true">thinks.</span>
                    <span
                      className="rot-word"
                      style={{ "--industry-color": "#8B5CFF", animationDelay: "-9s" } as React.CSSProperties}
                      aria-hidden="true"
                    >thinks.</span>
                    <span
                      className="rot-word"
                      style={{ "--industry-color": "#22D3EE", animationDelay: "-6s" } as React.CSSProperties}
                      aria-hidden="true"
                    >ships.</span>
                    <span
                      className="rot-word"
                      style={{ "--industry-color": "#34ff48", animationDelay: "-3s" } as React.CSSProperties}
                      aria-hidden="true"
                    >scales.</span>
                  </span>
                </span>
              </span>
            </h1>

            {/* Sub */}
            <p
              className="text-[17px] leading-[1.8] text-white/62 mb-3 max-w-[490px] pre-hide"
              data-hero-fade
              style={{ "--enter-d": ".30s" } as React.CSSProperties}
            >
              Pragma engineers{" "}
              <span id="tw">AI-powered analytics</span>
              <span className="tcur" aria-hidden="true" />
              {" "}— production-ready systems for companies operating at the frontier.
            </p>
            <p
              className="text-[14.5px] text-white/55 mb-10 max-w-[440px] pre-hide"
              data-hero-fade
              style={{ "--enter-d": ".36s" } as React.CSSProperties}
            >
              From data pipelines to intelligent products. Zero compromise on quality.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-12 pre-hide"
              data-hero-fade
              style={{ "--enter-d": ".42s" } as React.CSSProperties}
            >
              <a href="#contact" className="btn btn-primary" data-cursor="hover">
                Start a Project <span className="btn-ico" aria-hidden="true">→</span>
              </a>
              <a href="#work" className="btn btn-ghost" data-cursor="hover">View Our Work</a>
            </div>

            {/* Social proof */}
            <div
              className="flex items-center gap-5 flex-wrap pre-hide"
              data-hero-fade
              style={{ "--enter-d": ".48s" } as React.CSSProperties}
            >
              <div className="flex -space-x-2" data-avatars aria-label="Client avatars">
                <div className="w-8 h-8 rounded-full border-2 border-[#05050A] bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[10px] font-bold" aria-hidden="true">A</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#05050A] bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-[10px] font-bold" aria-hidden="true">B</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#05050A] bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold" aria-hidden="true">C</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#05050A] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-[10px] font-bold" aria-hidden="true">D</div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  <span className="text-[12px] font-semibold text-white/75 ml-1.5">4.9 / 5</span>
                </div>
                <span className="text-[11px] text-white/45">Trusted by 80+ engineering teams</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating AI Visual */}
          <div className="hero-cards hidden lg:block relative h-[530px]" aria-hidden="true">
            {/* Main reasoning card */}
            <div className="f-wrap fw1 pre-hide absolute top-10 left-0 right-20">
              <div className="glass rounded-2xl p-6 f1">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(108,99,255,.18)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-mono text-white/38 tracking-wide">pragma-ai · reasoning</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="think-dot" /><div className="think-dot" /><div className="think-dot" />
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    { num: "01", color: "text-violet-400", w1: "100%", w2: "78%" },
                    { num: "02", color: "text-blue-400", w1: "88%", w2: "60%" },
                    { num: "03", color: "text-emerald-400", w1: "72%", w2: null, accent: true },
                  ].map((row) => (
                    <div key={row.num} className="flex gap-3 items-start">
                      <span className={`text-[10px] font-mono ${row.color} mt-0.5 w-5 flex-shrink-0`}>{row.num}</span>
                      <div className="flex-1 space-y-1.5">
                        <div
                          className="h-2 rounded-full"
                          style={{ background: row.accent ? "rgba(16,185,129,.18)" : "rgba(255,255,255,.1)", width: row.w1 }}
                        />
                        {row.w2 && (
                          <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,.07)", width: row.w2 }} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] text-white/38">Model Confidence</span>
                    <span id="conf-val" className="text-[11px] font-semibold text-violet-300 tabular-nums">98.7%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,.08)" }}>
                    <div className="conf-bar" />
                  </div>
                </div>
              </div>
            </div>

            {/* Top-right metric */}
            <div className="f-wrap fw2 pre-hide absolute top-2 right-0 w-[148px]">
              <div className="glass glass-h rounded-xl p-4 f2 cursor-default">
                <div className="text-[10px] text-white/32 mb-1 font-medium uppercase tracking-wider">Requests/sec</div>
                <div id="m-rps" className="font-display text-[26px] font-bold text-grad leading-none tabular-nums">24.8k</div>
                <div className="flex items-center gap-1.5 mt-2">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1 7L3.5 4L6 6L9 2" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[10px] text-emerald-400 font-semibold">+12.4%</span>
                </div>
              </div>
            </div>

            {/* Bottom-left status */}
            <div className="f-wrap fw3 pre-hide absolute bottom-24 left-0 w-[210px]">
              <div className="glass glass-h rounded-xl p-4 f3 cursor-default">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(16,185,129,.2)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M2 5L4.5 7.5L8 3" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold">Pipeline Complete</span>
                </div>
                <div className="text-[12px] text-white/68 leading-snug">Revenue forecast model deployed to production</div>
                <div className="text-[10px] text-white/28 mt-2">2 minutes ago</div>
              </div>
            </div>

            {/* Bottom-right gain */}
            <div className="f-wrap fw4 pre-hide absolute bottom-6 right-8">
              <div className="glass glass-h rounded-xl p-4 f4 cursor-default">
                <div className="text-[10px] text-white/32 mb-1 uppercase tracking-wider">Efficiency Gain</div>
                <div id="m-gain" className="font-display text-[24px] font-bold text-grad-amber leading-none tabular-nums">+34%</div>
                <div className="text-[10px] text-white/28 mt-1.5">vs. baseline</div>
              </div>
            </div>

            {/* Decorative glow dots */}
            <div className="absolute top-[92px] right-[148px] w-2 h-2 rounded-full animate-pulse" style={{ background: "rgba(108,99,255,.45)" }} />
            <div className="absolute bottom-[148px] left-[210px] w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "rgba(79,142,247,.4)", animationDelay: ".7s" }} />
            <div className="absolute top-[310px] right-[70px] w-1 h-1 rounded-full animate-pulse" style={{ background: "rgba(108,99,255,.3)", animationDelay: "1.4s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pre-hide"
        data-hero-fade-late
        style={{ "--enter-d": ".55s" } as React.CSSProperties}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/28">Scroll</span>
        <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,.25), transparent)" }} />
      </div>
    </section>
  );
}

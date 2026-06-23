export default function CTA() {
  return (
    <section id="contact" className="py-32 md:py-56 relative overflow-hidden">
      <div className="grid-bg" />
      <div
        className="hero-glow"
        style={{
          width: "680px",
          height: "680px",
          background: "radial-gradient(circle,#6d4dff,transparent 60%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.3,
        }}
      />
      <div className="shell relative z-[5] text-center flex flex-col items-center">
        <p className="eyebrow mb-8 mx-auto" data-reveal="fade">Let&apos;s build</p>
        <h2
          className="display text-[clamp(40px,8vw,124px)] leading-[0.95] max-w-[15ch]"
          data-reveal="lines"
        >
          Let&apos;s build something that{" "}
          <span className="gradient-text">thinks.</span>
        </h2>
        <p className="text-muted text-lg max-w-md mt-8" data-reveal="fade">
          Bring the ambitious idea. We&apos;ll bring the studio that ships it.
        </p>
        <div
          className="flex flex-wrap items-center justify-center gap-4 mt-11"
          data-reveal="fade"
        >
          <a
            href="mailto:hello@pragma.studio"
            className="btn btn-primary text-base"
            data-cursor="hover"
          >
            Start a project <span className="btn-ico">→</span>
          </a>
          <a
            href="mailto:hello@pragma.studio"
            className="font-mono text-sm text-muted hover:text-ink transition-colors"
            data-cursor="hover"
          >
            or say hello — hello@pragma.studio
          </a>
        </div>
      </div>
    </section>
  );
}

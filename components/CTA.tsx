"use client";

import { useRef } from "react";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

export default function CTA() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  return (
    <section id="contact" className="py-32 md:py-56 relative overflow-hidden">
      <div className="grid-bg" />

      {/* Ambient depth — layered violet + cyan glows */}
      <div
        className="hero-glow"
        style={{
          width: "760px",
          height: "760px",
          background: "radial-gradient(circle,#8b5cff,transparent 62%)",
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          opacity: 0.22,
        }}
      />
      <div
        className="hero-glow"
        style={{
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle,#22d3ee,transparent 65%)",
          top: "64%",
          left: "62%",
          transform: "translate(-50%,-50%)",
          opacity: 0.1,
        }}
      />

      <div className="shell relative z-[5] text-center flex flex-col items-center">
        <span className="badge" data-reveal="fade">
          <span className="pulse" />
          Open for new work
        </span>

        <h2
          ref={containerRef}
          className="display text-[clamp(40px,8.4vw,128px)] leading-[0.95] max-w-[16ch] mt-9 select-none"
        >
          <TextCursorProximity
            label="Let's build something that"
            className="will-change-transform"
            styles={{
              transform: { from: "scale(1)", to: "scale(1.16)" },
              color: { from: "#ececf2", to: "#8b5cff" },
            }}
            falloff="gaussian"
            radius={120}
            containerRef={containerRef}
          />{" "}
          <TextCursorProximity
            label="thinks."
            className="will-change-transform"
            styles={{
              transform: { from: "scale(1)", to: "scale(1.22)" },
              color: { from: "#22d3ee", to: "#aef7ff" },
            }}
            falloff="gaussian"
            radius={120}
            containerRef={containerRef}
          />
        </h2>

        <p className="text-[var(--ink)]/85 text-lg md:text-xl max-w-lg mt-9 leading-relaxed">
          Bring the ambitious idea. We&apos;ll bring the studio that ships it.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <a
            href="mailto:hello@pragma.studio"
            className="btn btn-primary text-base"
            data-cursor="hover"
            data-magnetic="0.3"
          >
            Start a project <span className="btn-ico">→</span>
          </a>
          <a
            href="mailto:hello@pragma.studio"
            className="btn btn-ghost text-base"
            data-cursor="hover"
            data-magnetic="0.3"
          >
            Say hello
          </a>
        </div>

        <p className="font-mono text-sm text-muted mt-7">
          or email us directly —{" "}
          <a
            href="mailto:hello@pragma.studio"
            className="text-[var(--ink)] hover:text-[var(--cyan)] transition-colors"
            data-cursor="hover"
          >
            hello@pragma.studio
          </a>
        </p>
      </div>
    </section>
  );
}

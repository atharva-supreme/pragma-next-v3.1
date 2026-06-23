const terminalLines = [
  ["prompt-line", "› reconcile Q3 invoices across all ledgers"],
  ["text-muted", "◦ retrieving ledgers · 3 sources…"],
  ["text-ink", "✓ parsed 1,284 line items"],
  ["text-ink", "⚠ 3 mismatches flagged · $42,180 delta"],
  ["text-ink", "✓ corrections drafted · awaiting sign-off"],
  ["prompt-line2", "◆ resolved in 4.2s — you stay in control"],
];

export default function Intelligence() {
  return (
    <section id="intelligence" className="py-24 md:py-36 relative overflow-hidden">
      <div
        className="hero-glow"
        style={{
          width: "560px",
          height: "560px",
          background: "radial-gradient(circle,#6d4dff,transparent 65%)",
          top: "10%",
          left: "-160px",
          opacity: 0.35,
        }}
      />
      <div className="shell relative z-[5] grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-6" data-reveal="fade">04 / The intelligence layer</p>
          <h2
            className="display text-[clamp(32px,5vw,64px)] mb-6 max-w-[15ch]"
            data-reveal="lines"
          >
            Our agents don&apos;t wait to be asked twice.
          </h2>
          <p className="text-muted max-w-md mb-8" data-reveal="fade">
            We build systems that observe, decide and act — grounded in your data, your tools, and your rules. Not a chatbot bolted onto a form. Real autonomy, kept on a leash you control.
          </p>
          <div className="flex flex-wrap gap-3" data-motion-group>
            <span className="badge" data-motion-item>Reasoning + tool use</span>
            <span className="badge" data-motion-item>Grounded retrieval</span>
            <span className="badge" data-motion-item>Self-correcting evals</span>
          </div>
        </div>

        <div
          id="ai-terminal"
          className="panel p-6 md:p-8 hairline-grad terminal"
          data-cursor="hover"
          data-lines={JSON.stringify(terminalLines)}
        >
          <div className="flex items-center gap-2 mb-5 pb-4 border-b border-line">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[11px] text-faint">pragma://intelligence</span>
          </div>
          <div className="terminal-output min-h-[180px]" />
          <span className="caret" />
        </div>
      </div>
    </section>
  );
}

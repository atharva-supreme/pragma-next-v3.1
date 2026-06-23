const stats = [
  { label: "01 · SHIPPED", value: "120", suffix: "+", unit: "Products shipped", class: "text-[clamp(44px,6vw,84px)]" },
  { label: "02 · SCALE", value: "40", suffix: "M+", unit: "Daily AI calls served", class: "text-[clamp(52px,7vw,98px)] gradient-text", decimals: undefined },
  { label: "03 · PROVEN", value: "9", suffix: " yrs", unit: "Building in production", class: "text-[clamp(44px,6vw,84px)]", labelClass: "text-faint" },
  { label: "04 · RELIABLE", value: "99.98", suffix: "%", unit: "Uptime across systems", class: "text-[clamp(44px,6vw,84px)]", decimals: "2" },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 lg:py-28 border-y border-line">
      <div className="shell grid grid-cols-2 lg:grid-cols-4 gap-y-14" data-reveal-group>
        <div className="lg:px-10 lg:border-l lg:border-line" data-reveal-item>
          <div className="font-mono text-[11px] tracking-[0.22em] text-faint mb-5">01 · SHIPPED</div>
          <div className="stat-num text-[clamp(44px,6vw,84px)]">
            <span data-count="120">0</span><span className="text-faint">+</span>
          </div>
          <p className="text-muted mt-3 text-sm">Products shipped</p>
        </div>
        <div className="lg:px-10 lg:border-l lg:border-line" data-reveal-item>
          <div className="font-mono text-[11px] tracking-[0.22em] text-glow mb-5">02 · SCALE</div>
          <div className="stat-num text-[clamp(52px,7vw,98px)] gradient-text">
            <span data-count="40">0</span>M+
          </div>
          <p className="text-muted mt-3 text-sm">Daily AI calls served</p>
        </div>
        <div className="lg:px-10 lg:border-l lg:border-line" data-reveal-item>
          <div className="font-mono text-[11px] tracking-[0.22em] text-faint mb-5">03 · PROVEN</div>
          <div className="stat-num text-[clamp(44px,6vw,84px)]">
            <span data-count="9">0</span><span className="text-faint"> yrs</span>
          </div>
          <p className="text-muted mt-3 text-sm">Building in production</p>
        </div>
        <div className="lg:px-10 lg:border-l lg:border-line" data-reveal-item>
          <div className="font-mono text-[11px] tracking-[0.22em] text-faint mb-5">04 · RELIABLE</div>
          <div className="stat-num text-[clamp(44px,6vw,84px)]">
            <span data-count="99.98" data-decimals="2">0</span><span className="text-faint">%</span>
          </div>
          <p className="text-muted mt-3 text-sm">Uptime across systems</p>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    num: "01",
    title: "Interrogate",
    desc: "We attack the problem before the brief — finding the real constraint everyone else politely avoided.",
    active: true,
  },
  {
    num: "02",
    title: "Architect",
    desc: "We map the system, the model, and the edge cases before a single line gets written.",
  },
  {
    num: "03",
    title: "Prototype",
    desc: "A working slice in days, not decks — something you can click, break, and feel.",
  },
  {
    num: "04",
    title: "Engineer",
    desc: "We build for production from day one: tested, observable, and ready for real traffic.",
  },
  {
    num: "05",
    title: "Ship & Sharpen",
    desc: "We launch, watch it live, and keep tuning until the metrics stop arguing.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-light py-24 md:py-32">
      <div className="shell">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div className="lg:sticky lg:top-32 self-start">
            <p className="eyebrow mb-6" data-reveal="fade">03 / How we work</p>
            <h2 className="display text-[clamp(32px,5vw,64px)] mb-6" data-reveal="lines">
              Five moves. No filler.
            </h2>
            <p className="text-muted max-w-sm mb-8" data-reveal="fade">
              No bloated decks. No mystery. A tight loop from the real constraint to shipped — usually in weeks, not quarters.
            </p>
            <a href="#contact" className="btn btn-primary" data-cursor="hover">
              Book an intro <span className="btn-ico">→</span>
            </a>
          </div>

          <div id="process-steps" className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-line">
              <i id="process-fill" className="absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-glow to-cyan2" />
            </div>
            <div className="pl-10">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`process-step${step.active ? " active" : ""} py-9`}
                  data-reveal="fade"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="process-num font-display text-2xl text-glow">{step.num}</span>
                    <h3 className="font-display text-2xl md:text-3xl">{step.title}</h3>
                  </div>
                  <p className="text-muted mt-3 max-w-md">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

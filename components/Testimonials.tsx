const testimonials = [
  {
    quote: "Pragma shipped in six weeks what our last vendor quoted for six months. Then it actually worked.",
    initials: "DR",
    name: "Dana Reyes",
    role: "VP Engineering · Halcyon Capital",
  },
  {
    quote: "They didn't build what we asked for. They built what we should have asked for.",
    initials: "ML",
    name: "Marcus Lindqvist",
    role: "Chief Product Officer · Northwind Health",
  },
  {
    quote: "The only studio I've worked with that argues about the right things — and is usually right.",
    initials: "PA",
    name: "Priya Anand",
    role: "Founder & CEO · Vanta Logistics",
  },
  {
    quote: "Fast, opinionated, and dangerously good at the details. We don't go anywhere else now.",
    initials: "TM",
    name: "Theo Marchetti",
    role: "Head of Design · Lumen Studio",
  },
];

export default function Testimonials() {
  return (
    <section className="section-light py-24 md:py-32">
      <div className="shell">
        <p className="eyebrow mb-14" data-reveal="fade">What partners say</p>
        <div className="grid md:grid-cols-2 gap-7" data-reveal-group>
          {testimonials.map((t) => (
            <figure
              key={t.initials}
              className="panel p-9 hairline-grad"
              data-reveal-item
              data-cursor="hover"
              data-tilt
            >
              <blockquote className="text-xl md:text-2xl font-display leading-snug mb-7">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="w-11 h-11 rounded-full grid place-items-center border border-line bg-white/[0.04] font-mono text-[13px] text-muted shrink-0">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-medium">{t.name}</span>
                  <span className="text-faint text-sm">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

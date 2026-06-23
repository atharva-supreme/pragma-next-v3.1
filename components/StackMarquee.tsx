const stack = [
  "TypeScript", "React", "Next.js", "Python", "PyTorch", "PostgreSQL",
  "pgvector", "Rust", "Go", "AWS", "Cloudflare", "Kubernetes", "Vercel", "LangGraph",
];

export default function StackMarquee() {
  return (
    <section className="py-12 md:py-16 border-y border-line overflow-hidden">
      <p className="shell eyebrow mb-9" data-reveal="fade">
        The modern stack we engineer on
      </p>
      <div data-marquee="55" data-dir="left" className="overflow-hidden">
        <div className="marquee">
          <div className="marquee-track logo-strip font-display">
            {stack.map((item) => (
              <span key={item} className="logo-word">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

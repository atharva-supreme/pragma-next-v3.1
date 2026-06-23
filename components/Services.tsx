import { BrainCircuit, Bot, Boxes, LayoutPanelLeft, Database, Compass } from "lucide-react";

const services = [
  {
    icon: <BrainCircuit size={22} />,
    title: "Applied AI",
    desc: "We take frontier models and turn them into products people actually depend on daily — retrieval, reasoning, evals and guardrails, not a chatbot bolted to the side.",
    tags: ["RAG", "Evals", "Fine-tuning", "Guardrails"],
    size: "col-4 row-2 min-h-[340px]",
    large: true,
  },
  {
    icon: <Bot size={22} />,
    title: "Agentic Systems",
    desc: "Agents that reason, act, and self-correct across your real tools.",
    size: "col-2 min-h-[160px]",
  },
  {
    icon: <Boxes size={22} />,
    title: "Product Engineering",
    desc: "Full-stack builds that ship fast and hold up under real load.",
    size: "col-2 min-h-[160px]",
  },
  {
    icon: <LayoutPanelLeft size={22} />,
    title: "Interfaces",
    desc: "Motion-led front ends where every interaction feels deliberate.",
    size: "col-2 min-h-[160px]",
  },
  {
    icon: <Database size={22} />,
    title: "Data & Infra",
    desc: "Pipelines, retrieval and evals that make intelligence reliable.",
    size: "col-2 min-h-[160px]",
  },
  {
    icon: <Compass size={22} />,
    title: "Strategy & Design",
    desc: "We pressure-test the idea, then design the product worth building.",
    size: "col-2 min-h-[160px]",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="shell">
        <div className="kicker-row mb-16">
          <div className="section-head">
            <p className="eyebrow" data-reveal="fade">01 / Capabilities</p>
            <h2
              className="display text-[clamp(32px,5vw,68px)] max-w-[15ch]"
              data-reveal="lines"
            >
              Everything between the idea and the interface.
            </h2>
          </div>
          <p className="text-muted max-w-sm" data-reveal="fade">
            One studio, the full stack of intelligence — from the model layer to the pixel. We own the parts most teams hand off.
          </p>
        </div>

        <div className="bento" data-reveal-group>
          {services.map((s) => (
            <article
              key={s.title}
              className={`bento-card bento-card-premium ${s.size} flex flex-col justify-between`}
              data-reveal-item
              data-cursor="hover"
              data-tilt
            >
              <div className="bento-icon">{s.icon}</div>
              <div>
                <h3 className={`font-display mb-3 ${s.large ? "text-3xl md:text-4xl" : "text-2xl mb-1.5"}`}>
                  {s.title}
                </h3>
                <p className={`text-muted ${s.large ? "max-w-md" : "text-sm"}`}>{s.desc}</p>
                {s.tags && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { FloatingPaths } from "@/components/ui/background-paths";

export default function Manifesto() {
  return (
    <section className="section-light py-32 md:py-52 overflow-hidden">
      {/* Animated background paths — visible in the "Our premise" section only */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="shell relative z-10">
        <p className="eyebrow mb-12" data-reveal="fade">Our premise</p>
        <h2
          data-reveal="lines"
          className="display text-[clamp(28px,4.6vw,68px)] max-w-[22ch] leading-[1.08]"
        >
          Most software waits for instructions. We build the kind that{" "}
          <span className="gradient-text">thinks, decides, and ships</span>{" "}
          while the rest still buffer.
        </h2>
      </div>
    </section>
  );
}

import { Twitter, Linkedin, Github, Dribbble } from "lucide-react";

const LogoMark = () => (
  <svg className="logo-mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="lg-footer" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8b5cff" />
        <stop offset="1" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <rect x="0.5" y="0.5" width="31" height="31" rx="8" stroke="rgba(255,255,255,0.12)" />
    <path
      d="M10 24V8h7a5 5 0 0 1 0 10h-7"
      stroke="url(#lg-footer)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="pt-16 md:pt-24 border-t border-line overflow-hidden">
      <div className="shell">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 pb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <LogoMark />
              <span className="font-display font-semibold text-lg">Pragma Softwares</span>
            </div>
            <p className="text-muted max-w-sm">
              An AI-native software studio building intelligent products for companies that move first.
            </p>
            <div className="flex gap-3 mt-8">
              {[
                { icon: <Twitter size={18} />, label: "X / Twitter" },
                { icon: <Linkedin size={18} />, label: "LinkedIn" },
                { icon: <Github size={18} />, label: "GitHub" },
                { icon: <Dribbble size={18} />, label: "Dribbble" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-11 h-11 grid place-items-center rounded-xl glass"
                  data-cursor="hover"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase mb-5">Studio</h4>
              <ul className="space-y-3 text-muted">
                {[
                  { label: "Capabilities", href: "#services" },
                  { label: "Work", href: "#work" },
                  { label: "Process", href: "#process" },
                  { label: "Intelligence", href: "#intelligence" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-ink transition-colors" data-cursor="hover">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase mb-5">Company</h4>
              <ul className="space-y-3 text-muted">
                {["About", "Careers", "Journal", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={l === "Contact" ? "#contact" : "#"} className="hover:text-ink transition-colors" data-cursor="hover">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase mb-5">Contact</h4>
              <ul className="space-y-3 text-muted">
                <li>
                  <a href="mailto:hello@pragma.studio" className="hover:text-ink transition-colors" data-cursor="hover">hello@pragma.studio</a>
                </li>
                <li className="text-faint">San Francisco</li>
                <li className="text-faint">Remote · Global</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="relative -mb-[3vw]">
          <div className="footer-word select-none">PRAGMA</div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-t border-line">
          <p className="text-faint text-sm font-mono">
            © <span id="year">2026</span> Pragma Softwares. All systems reserved.
          </p>
          <p className="text-faint/70 text-sm font-mono hidden md:block">
            Designed &amp; engineered in-house. No templates were harmed.
          </p>
          <div className="flex gap-6 text-faint text-sm">
            <a href="#" className="hover:text-ink transition-colors" data-cursor="hover">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors" data-cursor="hover">Terms</a>
            <a href="#hero" className="hover:text-ink transition-colors" data-cursor="hover">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

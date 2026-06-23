"use client";

import { useEffect } from "react";

export default function AnimationsInit() {
  useEffect(() => {
    /* -------------------------------------------------------
       Lazy-load motion.dev for badge micro-animations (optional)
    ------------------------------------------------------- */
    let _M: unknown = null;
    let _Mtried = false;
    async function ensureMotion() {
      if (_Mtried) return _M;
      _Mtried = true;
      try {
        _M = await import(
          /* webpackIgnore: true */ "https://esm.sh/motion@12.40.0" as string
        );
      } catch {
        _M = null;
      }
      return _M;
    }

    /* -------------------------------------------------------
       Bootstrap — import animation libraries dynamically so
       they only load on the client side.
    ------------------------------------------------------- */
    let cleanupFns: (() => void)[] = [];

    async function boot() {
      const [gsapMod, stMod, LenisMod, SplitTypeMod] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("lenis"),
        import("split-type"),
      ]);

      const gsap = gsapMod.gsap;
      const { ScrollTrigger } = stMod;
      const Lenis = LenisMod.default;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SplitType = (SplitTypeMod as any).default ?? SplitTypeMod;

      if (gsap && ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      document.documentElement.classList.add("js");

      const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const TOUCH = window.matchMedia("(hover: none), (pointer: coarse)").matches;
      const $ = (s: string, c: Document | Element = document) =>
        (c as Document).querySelector(s) as HTMLElement | null;
      const $$ = (s: string, c: Document | Element = document) =>
        [...(c as Document).querySelectorAll<HTMLElement>(s)];
      const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
      const clamp = (n: number, min: number, max: number) =>
        Math.max(min, Math.min(max, n));

      /* ----------------------------------------------------------
         1 · SMOOTH SCROLL (Lenis ↔ ScrollTrigger)
      ---------------------------------------------------------- */
      let lenis: InstanceType<typeof Lenis> | null = null;
      function smoothScroll() {
        if (REDUCED || !Lenis) return;
        lenis = new Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenis.on("scroll", () => ScrollTrigger && ScrollTrigger.update());
        gsap.ticker.add((time: number) => lenis!.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        $$('a[href^="#"]').forEach((a) => {
          a.addEventListener("click", (e) => {
            const href = a.getAttribute("href");
            if (href && href.length > 1 && $(href)) {
              e.preventDefault();
              lenis!.scrollTo(href, { offset: -40, duration: 1.4 });
              closeMenu();
            }
          });
        });
        cleanupFns.push(() => lenis?.destroy());
      }

      /* ----------------------------------------------------------
         3 · CUSTOM CURSOR
      ---------------------------------------------------------- */
      function cursor() {
        if (TOUCH || REDUCED) return;
        const dot = $(".cursor-dot");
        if (!dot) return;
        gsap.set(dot, { xPercent: -50, yPercent: -50 });
        const xDot = gsap.quickTo(dot, "x", { duration: 0.18, ease: "power3" });
        const yDot = gsap.quickTo(dot, "y", { duration: 0.18, ease: "power3" });
        let onLight = false;
        const onMouseMove = (e: MouseEvent) => {
          xDot(e.clientX);
          yDot(e.clientY);
          const light = !!(
            (e.target as Element)?.closest &&
            (e.target as Element).closest(".section-light")
          );
          if (light !== onLight) {
            onLight = light;
            dot.classList.toggle("on-light", light);
          }
        };
        const onMouseLeave = () => gsap.to(dot, { opacity: 0, duration: 0.3 });
        const onMouseEnter = () => gsap.to(dot, { opacity: 1, duration: 0.3 });
        window.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        cleanupFns.push(() => {
          window.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseleave", onMouseLeave);
          document.removeEventListener("mouseenter", onMouseEnter);
        });
      }

      /* ----------------------------------------------------------
         4 · MAGNETIC
      ---------------------------------------------------------- */
      function magnetic() {
        if (TOUCH || REDUCED) return;
        $$("[data-magnetic]").forEach((el) => {
          const strength = parseFloat(el.getAttribute("data-magnetic") || "0.35") || 0.35;
          const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "elastic.out(1, 0.4)" });
          let r: DOMRect | null = null;
          el.addEventListener("mouseenter", () => { r = el.getBoundingClientRect(); });
          el.addEventListener("mousemove", (e: MouseEvent) => {
            if (!r) r = el.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * strength);
            yTo((e.clientY - (r.top + r.height / 2)) * strength);
          });
          el.addEventListener("mouseleave", () => { xTo(0); yTo(0); r = null; });
        });
      }

      /* ----------------------------------------------------------
         5 · NAV DROPDOWNS
      ---------------------------------------------------------- */
      function navDropdowns() {
        if (TOUCH) return;
        const mega = $("#nav-mega");
        if (!mega) return;
        const sections = $$(".nav-mega-section", mega);
        const roots = $$(".nav-drop-root");
        let closeTimer: ReturnType<typeof setTimeout> | null = null;
        let activeId: string | null = null;

        const backdrop = document.createElement("div");
        backdrop.className = "nav-backdrop";
        document.body.appendChild(backdrop);

        function showSection(id: string) {
          sections.forEach((s) => s.classList.toggle("active", s.dataset.panelId === id));
          activeId = id;
        }
        function setTriggers(id: string | null) {
          roots.forEach((r) => {
            const on = r.dataset.panel === id;
            r.classList.toggle("open", on);
            r.querySelector(".nav-link-btn")?.setAttribute("aria-expanded", on ? "true" : "false");
          });
        }
        function openPanel(id: string) {
          if (closeTimer) clearTimeout(closeTimer);
          backdrop.classList.add("visible");
          if (!mega!.classList.contains("open")) {
            showSection(id);
            mega!.classList.add("open");
            mega!.setAttribute("aria-hidden", "false");
          } else if (activeId !== id) {
            showSection(id);
          }
          setTriggers(id);
        }
        function closePanel() {
          mega!.classList.remove("open");
          mega!.setAttribute("aria-hidden", "true");
          backdrop.classList.remove("visible");
          setTriggers(null);
          activeId = null;
        }
        function scheduleClose() {
          if (closeTimer) clearTimeout(closeTimer);
          closeTimer = setTimeout(closePanel, 120);
        }
        roots.forEach((root) => {
          root.addEventListener("mouseenter", () => openPanel(root.dataset.panel!));
          root.addEventListener("mouseleave", scheduleClose);
        });
        mega.addEventListener("mouseenter", () => { if (closeTimer) clearTimeout(closeTimer); });
        mega.addEventListener("mouseleave", scheduleClose);
        backdrop.addEventListener("click", closePanel);
        const onKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape") { if (closeTimer) clearTimeout(closeTimer); closePanel(); }
        };
        document.addEventListener("keydown", onKeyDown);
        $$("a", mega).forEach((a) => {
          a.addEventListener("click", () => { if (closeTimer) clearTimeout(closeTimer); closePanel(); });
        });
        cleanupFns.push(() => {
          document.removeEventListener("keydown", onKeyDown);
          backdrop.remove();
        });
      }

      /* ----------------------------------------------------------
         6 · NAV SCROLL HIDE/SHOW + MOBILE MENU
      ---------------------------------------------------------- */
      function closeMenu() {
        const menu = $("#mobile-menu");
        if (menu && menu.classList.contains("open")) {
          menu.classList.remove("open");
          menu.setAttribute("aria-hidden", "true");
          document.body.classList.remove("menu-open");
          $("#menu-toggle")?.setAttribute("aria-expanded", "false");
        }
      }

      function nav() {
        const navEl = $(".nav");
        if (!navEl) return;
        let last = 0;
        if (ScrollTrigger) {
          ScrollTrigger.create({
            start: 0,
            end: "max",
            onUpdate: (self) => {
              const y = self.scroll();
              navEl.classList.toggle("scrolled", y > 40);
              if (y > 400 && y > last) navEl.classList.add("hidden");
              else navEl.classList.remove("hidden");
              last = y;
            },
          });
        }
        const toggle = $("#menu-toggle");
        const menu = $("#mobile-menu");
        if (toggle && menu) {
          toggle.addEventListener("click", () => {
            const open = menu.classList.toggle("open");
            menu.setAttribute("aria-hidden", String(!open));
            document.body.classList.toggle("menu-open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
          });
        }
        const escClose = (e: KeyboardEvent) => { if (e.key === "Escape") closeMenu(); };
        document.addEventListener("keydown", escClose);
        cleanupFns.push(() => document.removeEventListener("keydown", escClose));
      }

      /* ----------------------------------------------------------
         7 · REVEAL GRAMMAR
      ---------------------------------------------------------- */
      function reveals() {
        if (REDUCED) {
          $$("[data-reveal]").forEach((el) => (el.style.opacity = "1"));
          return;
        }
        if (!SplitType) {
          $$('[data-reveal="lines"], [data-reveal="chars"]').forEach((el) => {
            gsap.fromTo(
              el,
              { y: 36, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 86%" } }
            );
          });
        }
        if (SplitType) {
          $$('[data-reveal="lines"]').forEach((el) => {
            const split = new SplitType(el, { types: "lines", lineClass: "split-line" });
            split.lines.forEach((l: HTMLElement) => {
              const w = document.createElement("span");
              w.className = "line-mask";
              w.style.display = "block";
              l.parentNode!.insertBefore(w, l);
              w.appendChild(l);
            });
            gsap.set(el, { opacity: 1 });
            gsap.from(split.lines, {
              yPercent: 115, duration: 1.05, ease: "expo.out", stagger: 0.08,
              scrollTrigger: { trigger: el, start: "top 85%" },
            });
          });

          $$('[data-reveal="chars"]').forEach((el) => {
            const split = new SplitType(el, { types: "chars,words", charClass: "split-char" });
            gsap.set(el, { opacity: 1 });
            gsap.from(split.chars, {
              yPercent: 120, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.018,
              scrollTrigger: { trigger: el, start: "top 88%" },
            });
          });
        }

        $$('[data-reveal="up"], [data-reveal=""], [data-reveal="fade"]').forEach((el) => {
          const delay = parseFloat(el.getAttribute("data-delay") || "0") || 0;
          gsap.fromTo(
            el,
            { y: 42, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay, scrollTrigger: { trigger: el, start: "top 88%" } }
          );
        });

        $$("[data-reveal-group]").forEach((group) => {
          const items = $$("[data-reveal-item]", group);
          gsap.set(group, { opacity: 1 });
          gsap.from(items, {
            y: 40, opacity: 0, duration: 0.9, ease: "expo.out", stagger: 0.09,
            scrollTrigger: { trigger: group, start: "top 82%" },
          });
        });
      }

      /* ----------------------------------------------------------
         8 · HERO INTRO + PARALLAX
      ---------------------------------------------------------- */
      function heroIntro() {
        const hero = $("#hero");
        if (!hero || (hero as HTMLElement & { dataset: { introDone?: string } }).dataset.introDone) return;
        (hero as HTMLElement & { dataset: { introDone?: string } }).dataset.introDone = "1";

        const pill = $(".pbadge", hero);
        const metrics = [
          { el: $("#conf-val"), to: 98.7, dec: 1, suffix: "%" },
          { el: $("#m-rps"), to: 24.8, dec: 1, suffix: "k" },
          { el: $("#m-gain"), to: 34, dec: 0, prefix: "+", suffix: "%" },
        ].filter((m) => m.el);

        const writeMetric = (m: typeof metrics[0], v: number) => {
          m.el!.textContent = (m.prefix || "") + v.toFixed(m.dec) + (m.suffix || "");
        };

        if (REDUCED) { metrics.forEach((m) => writeMetric(m, m.to)); return; }

        metrics.forEach((m) => {
          const p = { v: 0 };
          writeMetric(m, 0);
          gsap.to(p, { v: m.to, duration: 0.9, delay: 0.35, ease: "power2.out", onUpdate: () => writeMetric(m, p.v) });
        });

        gsap.delayedCall(0.35, startTypewriter);
        if (pill) {
          gsap.delayedCall(0.42, () => {
            pill.classList.add("online");
            gsap.delayedCall(0.3, () => pill.classList.remove("online"));
          });
        }

        gsap.to("#hero-content", {
          yPercent: 14, opacity: 0.4, ease: "none",
          scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
        });

        if (document.fonts?.ready) {
          document.fonts.ready.then(() => ScrollTrigger && ScrollTrigger.refresh());
        }
      }

      /* ----------------------------------------------------------
         9 · MARQUEE
      ---------------------------------------------------------- */
      let scrollVel = 0;

      function marquees() {
        $$("[data-marquee]").forEach((track) => {
          const speed = parseFloat(track.getAttribute("data-marquee") || "40") || 40;
          const inner = track.querySelector<HTMLElement>(".marquee");
          if (!inner) return;
          inner.innerHTML += inner.innerHTML;
          const dir = track.getAttribute("data-dir") === "right" ? 1 : -1;
          const from = dir < 0 ? 0 : -50;
          const to = dir < 0 ? -50 : 0;
          gsap.set(inner, { xPercent: from });
          const tween = gsap.to(inner, {
            xPercent: to,
            duration: inner.scrollWidth / 2 / speed,
            ease: "none",
            repeat: -1,
          });
          if (REDUCED || TOUCH) return;
          gsap.ticker.add(() => {
            const target = 1 + Math.min(Math.abs(scrollVel) * 0.06, 3);
            if (Math.abs(tween.timeScale() - target) > 0.005) tween.timeScale(target);
          });
        });
      }

      /* ----------------------------------------------------------
         10 · CARD TILT + SPOTLIGHT
      ---------------------------------------------------------- */
      function cardTilt() {
        if (TOUCH || REDUCED) return;
        $$("[data-tilt]").forEach((card) => {
          gsap.set(card, { transformPerspective: 1400, transformStyle: "preserve-3d" });
          const rotX = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3" });
          const rotY = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3" });
          let r: DOMRect | null = null;
          let pending = false;
          let mx = 50, my = 50;
          card.addEventListener("mouseenter", () => { r = card.getBoundingClientRect(); });
          card.addEventListener("mousemove", (e: MouseEvent) => {
            if (!r) r = card.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width;
            const py = (e.clientY - r.top) / r.height;
            mx = px * 100; my = py * 100;
            rotY((px - 0.5) * 5);
            rotX(-(py - 0.5) * 5);
            if (!pending) {
              pending = true;
              requestAnimationFrame(() => {
                card.style.setProperty("--mx", mx + "%");
                card.style.setProperty("--my", my + "%");
                pending = false;
              });
            }
          });
          card.addEventListener("mouseleave", () => { rotX(0); rotY(0); r = null; });
        });
      }

      /* ----------------------------------------------------------
         11 · WORK CARDS — scroll parallax
      ---------------------------------------------------------- */
      function workCards() {
        if (REDUCED) return;
        $$(".work-card").forEach((card) => {
          const layer = card.querySelector(".layer");
          if (!layer) return;
          gsap.fromTo(
            layer,
            { yPercent: -12 },
            { yPercent: 12, ease: "none", scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: true } }
          );
        });
      }

      /* ----------------------------------------------------------
         12 · PROCESS sticky progress
      ---------------------------------------------------------- */
      function process() {
        const wrap = $("#process-steps");
        if (!wrap || REDUCED) return;
        const steps = $$(".process-step", wrap);
        const fill = $("#process-fill");
        if (fill) {
          gsap.to(fill, {
            scaleY: 1, ease: "none", transformOrigin: "top",
            scrollTrigger: { trigger: wrap, start: "top 60%", end: "bottom 70%", scrub: true },
          });
        }
        steps.forEach((step) => {
          ScrollTrigger.create({
            trigger: step, start: "top 65%", end: "bottom 65%",
            onToggle: (self) => step.classList.toggle("active", self.isActive),
          });
        });
      }

      /* ----------------------------------------------------------
         13 · STAT COUNTERS
      ---------------------------------------------------------- */
      function counters() {
        $$("[data-count]").forEach((el) => {
          const target = parseFloat(el.getAttribute("data-count") || "0");
          const decimals = clamp(parseInt(el.getAttribute("data-decimals") || "0", 10) || 0, 0, 6);
          const obj = { v: 0 };
          const run = () => {
            if (REDUCED) { el.textContent = target.toFixed(decimals); return; }
            gsap.to(obj, {
              v: target, duration: 2, ease: "power2.out",
              onUpdate: () => { el.textContent = obj.v.toFixed(decimals); },
            });
          };
          ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: run });
        });
      }

      /* ----------------------------------------------------------
         14 · AI TERMINAL typing
      ---------------------------------------------------------- */
      function terminal() {
        const term = $("#ai-terminal");
        if (!term) return;
        const lines: [string, string][] = JSON.parse(term.getAttribute("data-lines") || "[]");
        const out = term.querySelector<HTMLElement>(".terminal-output");
        if (!out || REDUCED) {
          if (out) out.innerHTML = lines.map(([cls, text]) => `<div class="${cls}">${text}</div>`).join("");
          return;
        }
        let started = false;
        const type = async () => {
          for (const [cls, text] of lines) {
            const div = document.createElement("div");
            div.className = cls;
            out.appendChild(div);
            if (cls === "prompt-line") {
              for (let i = 0; i < text.length; i++) {
                div.textContent = text.slice(0, i + 1);
                await new Promise((r) => setTimeout(r, 24));
              }
            } else {
              await new Promise((r) => setTimeout(r, 220));
              div.innerHTML = text;
              gsap.fromTo(div, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
            }
            await new Promise((r) => setTimeout(r, 160));
          }
        };
        ScrollTrigger.create({
          trigger: term, start: "top 75%", once: true,
          onEnter: () => { if (!started) { started = true; type(); } },
        });
      }

      /* ----------------------------------------------------------
         15 · FOOTER wordmark parallax
      ---------------------------------------------------------- */
      function footerWord() {
        const word = $(".footer-word");
        if (!word || REDUCED) return;
        gsap.fromTo(word, { yPercent: 18 }, {
          yPercent: -4, ease: "none",
          scrollTrigger: { trigger: word, start: "top bottom", end: "bottom bottom", scrub: true },
        });
      }

      /* ----------------------------------------------------------
         16 · MOTION micro entrances
      ---------------------------------------------------------- */
      async function motionInView() {
        if (REDUCED) return;
        const groups = $$("[data-motion-group]");
        if (!groups.length) return;
        const m = await Promise.race([
          ensureMotion(),
          new Promise((res) => setTimeout(() => res(null), 200)),
        ]) as { inView?: Function; animate?: Function; stagger?: Function } | null;

        if (m && m.inView && m.animate) {
          const { animate, inView, stagger } = m;
          groups.forEach((group) => {
            inView(group, () => {
              const items = $$("[data-motion-item]", group);
              animate(
                items,
                { opacity: [0, 1], transform: ["translateY(14px)", "translateY(0px)"] },
                { delay: stagger!(0.06), duration: 0.6, ease: [0.16, 1, 0.3, 1] }
              );
            }, { amount: 0.3 });
          });
        } else {
          groups.forEach((group) => {
            gsap.from($$("[data-motion-item]", group), {
              y: 14, opacity: 0, duration: 0.6, ease: "expo.out", stagger: 0.06,
              scrollTrigger: { trigger: group, start: "top 85%" },
            });
          });
        }
      }

      /* ----------------------------------------------------------
         SCROLL VELOCITY (for marquee speed)
      ---------------------------------------------------------- */
      function velocityTracker() {
        if (REDUCED || TOUCH) return;
        let lastY = lenis ? (lenis as unknown as { scroll: number }).scroll : window.scrollY;
        gsap.ticker.add(() => {
          const y = lenis ? (lenis as unknown as { scroll: number }).scroll : window.scrollY;
          scrollVel = lerp(scrollVel, y - lastY, 0.1);
          lastY = y;
        });
      }

      /* ----------------------------------------------------------
         HERO TYPEWRITER
      ---------------------------------------------------------- */
      let _twStart: (() => void) | null = null;
      let _twStarted = false;

      function setupTypewriter() {
        const tw = document.getElementById("tw");
        if (!tw) return;
        const phrases = [
          "AI-powered analytics",
          "intelligent automation",
          "production ML pipelines",
          "enterprise data platforms",
          "LLM-native products",
        ];
        if (REDUCED) { tw.textContent = phrases[0]; return; }
        let pi = 0, ci = 0, deleting = false;
        function type() {
          const phrase = phrases[pi];
          if (!deleting) {
            tw!.textContent = phrase.slice(0, ci + 1);
            ci++;
            if (ci === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
            setTimeout(type, 68);
          } else {
            tw!.textContent = phrase.slice(0, ci - 1);
            ci--;
            if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 400); return; }
            setTimeout(type, 38);
          }
        }
        _twStart = type;
        setTimeout(startTypewriter, 2600);
      }

      function startTypewriter() {
        if (_twStarted || !_twStart) return;
        _twStarted = true;
        _twStart();
      }

      /* ----------------------------------------------------------
         HERO MICRO — avatar hover
      ---------------------------------------------------------- */
      function heroMicro() {
        if (TOUCH || REDUCED) return;
        const group = document.querySelector("[data-avatars]") as HTMLElement | null;
        if (!group) return;
        const avs = [...group.querySelectorAll<HTMLElement>(":scope > div")];
        const xTo = avs.map((a) => gsap.quickTo(a, "x", { duration: 0.4, ease: "power3" }));
        group.addEventListener("mouseenter", () => avs.forEach((_, i) => xTo[i](i * 7)));
        group.addEventListener("mouseleave", () => avs.forEach((_, i) => xTo[i](0)));
      }

      /* ----------------------------------------------------------
         BOOT
      ---------------------------------------------------------- */
      smoothScroll();
      cursor();
      magnetic();
      navDropdowns();
      nav();
      setupTypewriter();
      heroIntro();
      heroMicro();
      velocityTracker();
      reveals();
      marquees();
      cardTilt();
      workCards();
      process();
      counters();
      terminal();
      footerWord();
      motionInView();
      if (ScrollTrigger) ScrollTrigger.refresh();
      document.body.classList.add("ready");

      /* ----------------------------------------------------------
         RE-REFRESH after late-loading assets settle the layout.
         On deployed hosts (e.g. GitHub Pages) fonts/images load
         slower than on localhost, so a single early refresh leaves
         ScrollTrigger with stale positions and some reveals never
         fire (elements stay stuck at `.js [data-reveal]{opacity:0}`).
      ---------------------------------------------------------- */
      if (ScrollTrigger) {
        const refresh = () => ScrollTrigger.refresh();

        // After web fonts are ready (metrics change after font swap)
        if (document.fonts?.ready) document.fonts.ready.then(refresh);

        // After every sub-resource (images, etc.) has loaded
        if (document.readyState === "complete") {
          refresh();
        } else {
          window.addEventListener("load", refresh, { once: true });
          cleanupFns.push(() => window.removeEventListener("load", refresh));
        }

        // Safety-net passes for anything that settles a beat later
        const t1 = setTimeout(refresh, 600);
        const t2 = setTimeout(refresh, 1500);
        cleanupFns.push(() => { clearTimeout(t1); clearTimeout(t2); });
      }

      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = String(new Date().getFullYear());

      const onVisibilityChange = () => {
        document.body.classList.toggle("tab-hidden", document.hidden);
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      cleanupFns.push(() => document.removeEventListener("visibilitychange", onVisibilityChange));

      cleanupFns.push(() => {
        ScrollTrigger?.getAll().forEach((t) => t.kill());
        document.documentElement.classList.remove("js");
      });
    }

    boot().catch((err) => {
      console.error("[AnimationsInit] boot error:", err);
      document.documentElement.classList.remove("js");
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
      cleanupFns = [];
    };
  }, []);

  return null;
}

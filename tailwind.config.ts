import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070B",
        "bg-2": "#0B0B12",
        "bg-3": "#101019",
        ink: "#ECECF2",
        muted: "#A9A9BC",
        faint: "#7C7C90",
        violet: "#6D4DFF",
        glow: "#8B5CFF",
        cyan: "#22D3EE",
        cyan2: "#34E7E4",
        line: "rgba(255,255,255,0.08)",
        // shadcn/ui tokens (HSL CSS variables defined in app/globals.css).
        // NOTE: shadcn's `muted` token is intentionally omitted — this project
        // already uses `--muted` as a hex color for the `.text-muted` utility.
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        display: ['"Cerebri Sans"', "sans-serif"],
        body: ['"Cerebri Sans"', "Inter", "sans-serif"],
        mono: ["var(--font-space-mono)", '"Space Mono"', "monospace"],
      },
      maxWidth: { shell: "1320px" },
    },
  },
  corePlugins: { preflight: false },
  plugins: [],
};

export default config;

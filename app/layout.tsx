import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Overlays from "@/components/Overlays";
import AnimationsInit from "@/components/AnimationsInit";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pragma Softwares — AI-Native Software Studio",
  description:
    "Pragma Softwares is an AI-native product studio. We build intelligent software, agents and interfaces for companies that refuse to wait — strategy to shipped, no handoffs.",
  openGraph: {
    title: "Pragma Softwares — AI-Native Product Studio",
    description:
      "We build intelligent software for companies that refuse to wait. AI products, agents and interfaces, engineered end to end.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%238b5cff'/%3E%3Cstop offset='1' stop-color='%2322d3ee'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='32' height='32' rx='8' fill='%2307070b'/%3E%3Cpath d='M10 24V8h7a5 5 0 0 1 0 10h-7' fill='none' stroke='url(%23g)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"
        />
        {/* Inline so the production CSS minifier can't strip the `%` from
            initial-value (`0%` -> `0`), which would invalidate this @property
            rule and break the hero text's liquid-fill animation. Keep in sync
            with the gradient/keyframes in globals.css (.rot-word). */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@property --rot-fill{syntax:"<percentage>";inherits:false;initial-value:0%}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var h=document.documentElement;h.classList.add('js');try{if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)h.classList.add('reduced');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-body bg-bg text-ink antialiased" suppressHydrationWarning>
        <Overlays />
        {children}
        <AnimationsInit />
      </body>
    </html>
  );
}

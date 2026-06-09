import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        phosphor: {
          50: "#e6ffe6",
          100: "#b3ffb3",
          200: "#80ff80",
          300: "#4dff4d",
          400: "#33ff5e",
          500: "#00ff41",
          600: "#00cc34",
          700: "#00992b",
          800: "#006619",
          900: "#003d0f",
        },
        amber: {
          500: "#ffb000",
          600: "#cc8c00",
        },
        crt: {
          bg: "#040806",
          panel: "#081208",
          line: "#0d1f0d",
        },
        warn: "#ff5577",
        cyan: "#22e0ff",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        flicker: {
          "0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%": { opacity: "1" },
          "20%, 24%, 55%": { opacity: "0.6" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 1px)" },
          "40%": { transform: "translate(2px, -1px)" },
          "60%": { transform: "translate(-1px, -1px)" },
          "80%": { transform: "translate(1px, 1px)" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 4px #00ff41, 0 0 12px #00ff4180" },
          "50%": { textShadow: "0 0 8px #00ff41, 0 0 24px #00ff41a0" },
        },
      },
      animation: {
        flicker: "flicker 3s infinite",
        scan: "scan 8s linear infinite",
        blink: "blink 1.1s step-end infinite",
        glitch: "glitch 0.4s infinite",
        glow: "glow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

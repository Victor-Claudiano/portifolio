"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const ASCII_MINI = String.raw`
 _   _ ___ ____ _____ ___  ____
| | | |_ _/ ___|_   _/ _ \|  _ \
| | | || | |     | || | | | |_) |
| |_| || | |___  | || |_| |  _ <
 \___/|___\____| |_| \___/|_| \_\
`;

export default function Landing() {
  const [hovered, setHovered] = useState<"none" | "left" | "right">("none");

  // Make sure body has neither theme on landing
  useEffect(() => {
    document.body.classList.remove("theme-terminal", "theme-pro");
    document.body.style.background = "#040806";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <main className="fixed inset-0 overflow-hidden bg-[#040806] text-white">
      {/* Subtle divider in center */}
      <div
        aria-hidden
        className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px z-30"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)",
        }}
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 select-none"
      >
        <div className="w-10 h-10 rounded-full border border-white/40 bg-black/70 backdrop-blur flex items-center justify-center text-sm font-mono">
          /
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row w-full h-full">
        {/* LEFT: DEV / TERMINAL */}
        <Link
          href="/terminal"
          prefetch
          onMouseEnter={() => setHovered("left")}
          onMouseLeave={() => setHovered("none")}
          className="landing-half group relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          style={{ background: "#040806" }}
        >
          {/* Scanlines */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,255,65,0.06) 3px, rgba(0,0,0,0.18) 4px)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 200px rgba(0,0,0,0.85), inset 0 0 60px rgba(0,255,65,0.05)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 px-8 py-16 max-w-md w-full text-left"
            style={{
              color: "#00ff41",
              fontFamily: "var(--font-mono), monospace",
              textShadow:
                "0 0 6px rgba(0,255,65,0.6), 0 0 18px rgba(0,255,65,0.3)",
            }}
          >
            <div className="text-xs sm:text-sm opacity-70 mb-3">
              <span style={{ color: "#22e0ff" }}>visitor@curriculum</span>
              <span className="opacity-60">:~$</span>{" "}
              <span>./identify --me</span>
            </div>

            <pre className="text-[8px] xs:text-[10px] sm:text-[11px] leading-[1.05] whitespace-pre opacity-90 animate-flicker">
              {ASCII_MINI}
            </pre>

            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
              dev mode
            </h2>
            <p className="mt-3 text-sm sm:text-base opacity-80 leading-relaxed">
              Currículo no formato terminal. CRT, scanlines, ASCII art e
              `$` em tudo. Feito para quem fala em commits.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm sm:text-base">
              <span className="opacity-70">$</span>
              <span className="opacity-100 group-hover:opacity-100">
                cd ./terminal
              </span>
              <motion.span
                animate={{
                  x: hovered === "left" ? [0, 6, 0] : 0,
                }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="ml-2"
              >
                →
              </motion.span>
            </div>

            <div className="mt-6 text-[10px] sm:text-xs opacity-50 font-mono">
              recomendado para: devs · tech-leads · times de engenharia
            </div>
          </motion.div>
        </Link>

        {/* DIVIDER ON MOBILE */}
        <div
          aria-hidden
          className="md:hidden h-px w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent)",
          }}
        />

        {/* RIGHT: PROFESSIONAL / HR */}
        <Link
          href="/professional"
          prefetch
          onMouseEnter={() => setHovered("right")}
          onMouseLeave={() => setHovered("none")}
          className="landing-half group relative flex-1 flex items-center justify-center overflow-hidden cursor-pointer"
          style={{ background: "#fafaf7" }}
        >
          {/* Subtle paper grain */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              mixBlendMode: "multiply",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 px-8 py-16 max-w-md w-full text-left"
            style={{ color: "#0a0e0a" }}
          >
            <div
              className="font-mono text-xs uppercase tracking-[0.18em] mb-3"
              style={{ color: "#065f46" }}
            >
              currículo · v1.0
            </div>

            <div
              className="text-5xl sm:text-6xl font-extrabold leading-[0.95] tracking-tight"
              style={{ fontFamily: "var(--font-sans), system-ui" }}
            >
              Victor Hugo
              <br />
              <span style={{ color: "#065f46" }}>Claudiano.</span>
            </div>

            <h2
              className="mt-6 text-2xl sm:text-3xl font-bold"
              style={{ color: "#0a0e0a" }}
            >
              executive mode
            </h2>
            <p
              className="mt-3 text-sm sm:text-base leading-relaxed"
              style={{ color: "#5a6259" }}
            >
              Currículo limpo, tipograficamente cuidado e pronto para imprimir
              em PDF. Sem ASCII, só carreira, stack e entregas.
            </p>

            <div
              className="mt-8 inline-flex items-center gap-2 text-sm sm:text-base font-medium"
              style={{ color: "#065f46" }}
            >
              <span>Ver currículo</span>
              <motion.span
                animate={{
                  x: hovered === "right" ? [0, 6, 0] : 0,
                }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                →
              </motion.span>
            </div>

            <div
              className="mt-6 text-[10px] sm:text-xs font-mono"
              style={{ color: "#8a8f86" }}
            >
              recomendado para: recrutadores · RH · gestores de contratação
            </div>
          </motion.div>
        </Link>
      </div>

      {/* TOP META: mix-blend-difference flips color against whichever half it overlaps */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 text-center text-[11px] sm:text-xs font-mono pointer-events-none mix-blend-difference"
        style={{ color: "#ffffff" }}
      >
        <div className="uppercase tracking-[0.22em] font-semibold">
          Victor Hugo Claudiano
        </div>
        <div className="mt-1">escolha o seu lado</div>
      </motion.div>

      {/* BOTTOM META */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 text-center text-[10px] sm:text-xs font-mono px-4 pointer-events-none mix-blend-difference"
        style={{ color: "#ffffff" }}
      >
        ambos têm o mesmo conteúdo · você sempre pode trocar depois
      </motion.div>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import Cursor from "./Cursor";

const ASCII = String.raw`
  ██╗   ██╗ ██╗ ██████╗ ████████╗ ██████╗  ██████╗
  ██║   ██║ ██║ ██╔═══╝ ╚══██╔══╝ ██╔══██╗ ██╔══██╗
  ██║   ██║ ██║ ██║        ██║    ██║  ██║ ██████╔╝
  ╚██╗ ██╔╝ ██║ ██║        ██║    ██║  ██║ ██╔══██╗
   ╚████╔╝  ██║ ╚██████╗   ██║    ╚██████╔╝ ██║  ██║
    ╚═══╝   ╚═╝  ╚═════╝   ╚═╝     ╚═════╝  ╚═╝  ╚═╝
`;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-[88vh] flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-16 pb-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="dim text-xs sm:text-sm mb-4"
      >
        <span className="hl-cyan">root@curriculum</span>
        <span className="dim">:</span>
        <span className="text-phosphor-500">~/victor</span>
        <span className="dim">$</span>{" "}
        <span className="text-phosphor-500">./greet --identify</span>
      </motion.div>

      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="ascii text-[7px] xs:text-[8px] sm:text-[11px] md:text-[13px] lg:text-[15px] leading-[1.05] text-phosphor-500 text-glow select-none"
        aria-label="VICTOR"
      >
        {ASCII}
      </motion.pre>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-6 sm:mt-8 max-w-3xl"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-phosphor-500 text-glow">
          Victor Hugo Claudiano
        </h1>
        <p className="mt-3 text-base sm:text-lg leading-relaxed">
          <span className="hl-amber">Full Stack Developer</span>{" "}
          <span className="dim">&amp;</span>{" "}
          <span className="hl-amber">DevOps</span>
        </p>
        <p className="mt-2 dim text-sm sm:text-base leading-relaxed">
          NestJS · React · Next.js · Python · Docker · K8s · CI/CD · AWS ·
          Azure
        </p>
        <p className="mt-2 dim text-sm sm:text-base">
          Hoje toco a plataforma do DLOA AI: comunicação omnichannel pras
          maiores farmacêuticas do Brasil, dezenas de milhões de execuções de
          fluxo por mês.
        </p>
        <p className="mt-2 very-dim text-xs sm:text-sm">
          <span aria-hidden>◯</span> São Paulo, Brasil
        </p>

        <div className="mt-8 flex items-center gap-3 text-sm sm:text-base">
          <span className="hl-cyan">visitor@curriculum</span>
          <span className="dim">:</span>
          <span className="text-phosphor-500">~$</span>
          <span className="text-phosphor-500">_</span>
          <Cursor />
        </div>

        <div className="mt-10 flex flex-wrap gap-3 text-xs sm:text-sm">
          <a href="#about" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> cat about.md
          </a>
          <a href="#stack" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> ls ./stack
          </a>
          <a href="#timeline" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> git log
          </a>
          <a href="#education" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> cat education.md
          </a>
          <a href="#certs" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> ls ./certs
          </a>
          <a href="#contact" className="panel px-3 py-2 link no-underline">
            <span className="dim">$</span> ./contact --open
          </a>
        </div>
      </motion.div>
    </section>
  );
}

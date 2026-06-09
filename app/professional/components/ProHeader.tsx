"use client";

import { motion } from "framer-motion";

export default function ProHeader() {
  return (
    <header className="relative z-10 px-6 sm:px-10 lg:px-20 pt-16 sm:pt-24 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <p className="pro-overline" style={{ color: "var(--accent)" }}>
          Currículo · atualizado em junho/2026
        </p>

        <h1 className="pro-h1 mt-5 text-5xl sm:text-7xl lg:text-8xl">
          Victor Hugo
          <br />
          <span style={{ color: "var(--accent)" }}>Claudiano</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-2xl max-w-2xl leading-snug">
          Full Stack Developer &amp; DevOps. Hoje sou responsável pela
          plataforma do DLOA AI, que processa dezenas de milhões de execuções de
          fluxo por mês, do componente React ao cluster Kubernetes.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 text-sm max-w-3xl">
          <a
            href="mailto:victorclaudiano@gmail.com"
            className="pro-link inline-flex items-center gap-2"
          >
            <span aria-hidden>✉</span> victorclaudiano@gmail.com
          </a>
          <a
            href="tel:+5518997845192"
            className="pro-link inline-flex items-center gap-2"
          >
            <span aria-hidden>☎</span> (18) 99784-5192
          </a>
          <a
            href="https://www.linkedin.com/in/victorclaudiano/"
            target="_blank"
            rel="noreferrer"
            className="pro-link inline-flex items-center gap-2"
          >
            <span aria-hidden>in</span> linkedin.com/in/victorclaudiano
          </a>
          <a
            href="https://github.com/VictorHClaudiano"
            target="_blank"
            rel="noreferrer"
            className="pro-link inline-flex items-center gap-2"
          >
            <span aria-hidden>◐</span> github.com/VictorHClaudiano
          </a>
          <span
            className="inline-flex items-center gap-2"
            style={{ color: "var(--muted)" }}
          >
            <span aria-hidden>◯</span> São Paulo, Brasil · remoto
          </span>
        </div>
      </motion.div>
    </header>
  );
}

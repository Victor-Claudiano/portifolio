"use client";

import { motion } from "framer-motion";

export default function ProContact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative z-10 px-6 sm:px-10 lg:px-20 py-20 sm:py-32"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="pro-overline"
          style={{ color: "var(--muted-2)" }}
        >
          07 / contato
        </p>

        <h2 className="pro-h1 mt-4 text-4xl sm:text-6xl lg:text-7xl max-w-3xl leading-[0.95]">
          Vamos trocar uma{" "}
          <span style={{ color: "var(--accent)" }}>ideia</span>?
        </h2>

        <p
          className="mt-6 text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          Disponível para conversas sobre vagas, freelas e projetos que não
          cabem num único repositório. Respondo no e-mail e no LinkedIn em até
          24h úteis.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:victorclaudiano@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm transition-transform hover:-translate-y-0.5"
            style={{
              background: "var(--accent)",
              color: "white",
            }}
          >
            <span aria-hidden>✉</span> victorclaudiano@gmail.com
          </a>
          <a
            href="tel:+5518997845192"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm border transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            <span aria-hidden>☎</span> (18) 99784-5192
          </a>
          <a
            href="https://www.linkedin.com/in/victorclaudiano/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm border transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/VictorHClaudiano"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm border transition-transform hover:-translate-y-0.5"
            style={{
              borderColor: "var(--line)",
              color: "var(--ink)",
            }}
          >
            GitHub ↗
          </a>
          {/* gerado no CI a cada deploy (não existe no `next dev`) */}
          <a
            href="../curriculo-victor-claudiano.pdf"
            download="curriculo-victor-claudiano.pdf"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm border transition-transform hover:-translate-y-0.5 no-print"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            ⤓ Baixar PDF
          </a>
          <button
            onClick={() => typeof window !== "undefined" && window.print()}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md font-medium text-sm border transition-transform hover:-translate-y-0.5 no-print"
            style={{
              borderColor: "var(--line)",
              color: "var(--ink)",
              background: "transparent",
            }}
          >
            ⤓ Imprimir
          </button>
        </div>
      </div>
    </motion.section>
  );
}

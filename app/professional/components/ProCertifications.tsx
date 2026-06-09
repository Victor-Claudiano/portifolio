"use client";

import { motion } from "framer-motion";
import ProSection from "./ProSection";

const CERTS = [
  "Inteligência Artificial · Google Cloud",
  "IA na Prática",
  "Trilha Digital · Coders 24 · Back-End",
  "Desenvolvimento Web com Django",
  "Desenvolvimento Ágil de Software (Kanban)",
];

export default function ProCertifications() {
  return (
    <ProSection
      id="certs"
      number="06 / certificações"
      title="Cursos & certificações"
      caption="Aprendizado contínuo em IA, back-end e práticas ágeis."
    >
      <ul className="space-y-3">
        {CERTS.map((c, i) => (
          <motion.li
            key={c}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="pro-card p-4 sm:p-5 flex items-center gap-4"
          >
            <span
              aria-hidden
              className="inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold shrink-0"
              style={{
                background: "var(--accent-soft)",
                color: "var(--accent)",
              }}
            >
              ✓
            </span>
            <span className="text-sm sm:text-base font-medium">{c}</span>
          </motion.li>
        ))}
      </ul>
    </ProSection>
  );
}

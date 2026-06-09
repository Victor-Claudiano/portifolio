"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const CERTS = [
  { name: "Inteligência Artificial · Google Cloud", tag: "ia/cloud" },
  { name: "IA na Prática", tag: "ia" },
  { name: "Trilha Digital · Coders 24 · Back-End", tag: "backend" },
  { name: "Desenvolvimento Web com Django", tag: "python" },
  { name: "Desenvolvimento Ágil de Software (Kanban)", tag: "ágil" },
];

export default function Certifications() {
  return (
    <Section
      id="certs"
      command="ls -la ./certs"
      caption="cursos e certificações"
    >
      <div className="panel p-5 sm:p-6 relative max-w-4xl">
        <span className="panel-corner tl" />
        <span className="panel-corner tr" />
        <span className="panel-corner bl" />
        <span className="panel-corner br" />

        <ul className="font-mono text-xs sm:text-sm space-y-2">
          {CERTS.map((c, i) => (
            <motion.li
              key={c.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="grid grid-cols-[auto_1fr_auto] gap-3 items-baseline"
            >
              <span className="very-dim">-rw-r--r--</span>
              <span className="text-phosphor-500">
                <span className="dim">›</span> {c.name}
              </span>
              <span className="hl-amber text-[10px] sm:text-xs">[{c.tag}]</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

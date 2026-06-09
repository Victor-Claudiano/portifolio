"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Edu = {
  period: string;
  degree: string;
  field: string;
  school: string;
  note?: string;
};

const ITEMS: Edu[] = [
  {
    period: "jul/2023 — dez/2025",
    degree: "Análise e Desenvolvimento de Sistemas",
    field: "Tecnólogo",
    school: "UniCesumar",
  },
  {
    period: "jan/2017 — jul/2022",
    degree: "Bacharelado em Direito",
    field: "Direito",
    school: "FAI (Faculdades Adamantinenses Integradas)",
    note: "background jurídico que ajuda em contratos, LGPD, compliance",
  },
];

export default function Education() {
  return (
    <Section
      id="education"
      command="cat education.md"
      caption="formação acadêmica: tech atual e base jurídica anterior"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
        {ITEMS.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="panel p-5 sm:p-6 relative"
          >
            <span className="panel-corner tl" />
            <span className="panel-corner tr" />
            <span className="panel-corner bl" />
            <span className="panel-corner br" />

            <div className="text-xs dim mb-2 flex items-center gap-2">
              <span className="hl-amber">●</span>
              <span>{e.period}</span>
            </div>
            <h3 className="text-base sm:text-lg text-phosphor-500 text-glow">
              {e.degree}
            </h3>
            <p className="mt-1 hl-cyan text-sm">{e.school}</p>
            {e.note && (
              <p className="mt-3 very-dim text-xs">
                <span className="dim">// </span>
                {e.note}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

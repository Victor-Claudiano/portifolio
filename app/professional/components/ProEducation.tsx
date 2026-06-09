"use client";

import { motion } from "framer-motion";
import ProSection from "./ProSection";

type Edu = {
  period: string;
  degree: string;
  school: string;
  note?: string;
};

const ITEMS: Edu[] = [
  {
    period: "jul/2023 — dez/2025",
    degree: "Análise e Desenvolvimento de Sistemas",
    school: "UniCesumar",
  },
  {
    period: "jan/2017 — jul/2022",
    degree: "Bacharelado em Direito",
    school: "FAI (Faculdades Adamantinenses Integradas)",
    note: "Formação prévia em Direito que ajuda em contratos, LGPD e compliance.",
  },
];

export default function ProEducation() {
  return (
    <ProSection
      id="education"
      number="05 / formação"
      title="Formação acadêmica"
      caption="Tecnologia atual + base anterior em Direito."
    >
      <ol className="space-y-6">
        {ITEMS.map((e, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="pro-card p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="pro-h2 text-lg sm:text-xl">{e.degree}</h3>
                <p
                  className="mt-1 text-base font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  {e.school}
                </p>
              </div>
              <div
                className="pro-overline whitespace-nowrap"
                style={{ color: "var(--muted-2)" }}
              >
                {e.period}
              </div>
            </div>
            {e.note && (
              <p
                className="mt-3 text-sm leading-relaxed italic"
                style={{ color: "var(--muted)" }}
              >
                {e.note}
              </p>
            )}
          </motion.li>
        ))}
      </ol>
    </ProSection>
  );
}

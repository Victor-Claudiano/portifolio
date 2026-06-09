"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Skill = { name: string; level: number };
type Group = { label: string; cmd: string; skills: Skill[] };

const GROUPS: Group[] = [
  {
    label: "backend",
    cmd: "ls ./backend",
    skills: [
      { name: "node.js", level: 95 },
      { name: "nest.js", level: 95 },
      { name: "typescript", level: 92 },
      { name: "python", level: 80 },
      { name: "postgres", level: 82 },
      { name: "typeorm", level: 85 },
      { name: "redis", level: 75 },
      { name: "rest", level: 88 },
      { name: "swagger", level: 80 },
    ],
  },
  {
    label: "frontend",
    cmd: "ls ./frontend",
    skills: [
      { name: "react", level: 94 },
      { name: "next.js", level: 92 },
      { name: "typescript", level: 92 },
      { name: "tailwind", level: 85 },
      { name: "reactflow", level: 82 },
      { name: "tanstack query", level: 84 },
      { name: "chart.js", level: 78 },
      { name: "framer motion", level: 80 },
    ],
  },
  {
    label: "devops",
    cmd: "ls ./devops",
    skills: [
      { name: "docker", level: 92 },
      { name: "kubernetes", level: 88 },
      { name: "aws", level: 85 },
      { name: "azure", level: 80 },
      { name: "azure service bus", level: 80 },
      { name: "ci/cd", level: 90 },
      { name: "github actions", level: 88 },
      { name: "terraform", level: 70 },
    ],
  },
  {
    label: "observability",
    cmd: "ls ./obs",
    skills: [
      { name: "prometheus", level: 85 },
      { name: "grafana", level: 88 },
      { name: "loki", level: 75 },
      { name: "pino", level: 80 },
      { name: "opentelemetry", level: 70 },
      { name: "tempo", level: 72 },
      { name: "alertmanager", level: 78 },
    ],
  },
];

function bar(level: number) {
  const filled = Math.round((level / 100) * 18);
  return "█".repeat(filled) + "░".repeat(18 - filled);
}

export default function Stack() {
  return (
    <Section
      id="stack"
      command="tree ./stack --depth=2"
      caption="ferramentas que já operei em produção real"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GROUPS.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: gi * 0.08 }}
            className="panel p-5 sm:p-6 relative"
          >
            <span className="panel-corner tl" />
            <span className="panel-corner tr" />
            <span className="panel-corner bl" />
            <span className="panel-corner br" />

            <div className="text-xs sm:text-sm mb-4 flex items-center gap-2">
              <span className="hl-cyan">$</span>
              <span className="text-phosphor-500">{g.cmd}</span>
              <span className="very-dim ml-2">// {g.label}</span>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm">
              {g.skills.map((s, i) => (
                <motion.li
                  key={s.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="grid grid-cols-[10rem_1fr_3rem] sm:grid-cols-[12rem_1fr_3rem] gap-3 items-center"
                >
                  <span className="text-phosphor-500">
                    <span className="very-dim">›</span> {s.name}
                  </span>
                  <span
                    className="font-mono text-phosphor-500 text-glow tracking-tighter overflow-hidden"
                    aria-hidden
                  >
                    {bar(s.level)}
                  </span>
                  <span className="dim text-right">{s.level}%</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

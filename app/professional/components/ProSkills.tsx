"use client";

import { motion } from "framer-motion";
import ProSection from "./ProSection";

const GROUPS = [
  {
    label: "Back-end",
    skills: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "TypeORM",
      "Redis",
      "REST",
      "Swagger",
    ],
  },
  {
    label: "Front-end",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Reactflow",
      "TanStack Query",
      "Chart.js",
      "Framer Motion",
    ],
  },
  {
    label: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Azure Service Bus",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    label: "Observabilidade",
    skills: [
      "Prometheus",
      "Grafana",
      "Loki",
      "Pino",
      "OpenTelemetry",
      "Tempo",
      "Alertmanager",
    ],
  },
];

export default function ProSkills() {
  return (
    <ProSection
      id="skills"
      number="02 / stack"
      title="Stack técnica"
      caption="Ferramentas que já operei em produção, agrupadas por camada."
    >
      <div className="space-y-8">
        {GROUPS.map((g, gi) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.07 }}
          >
            <h3
              className="pro-overline mb-3"
              style={{ color: "var(--muted-2)" }}
            >
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s, i) => (
                <span
                  key={s}
                  className={`pro-chip ${
                    i === 0 || i === 1 ? "pro-chip-accent" : ""
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </ProSection>
  );
}

"use client";

import { motion } from "framer-motion";
import ProSection from "./ProSection";

const TECHS = [
  "Node.js",
  "NestJS",
  "Next.js",
  "Python",
  "Django",
  "Docker",
  "Kubernetes",
  "Terraform",
];

export default function ProProjects() {
  return (
    <ProSection
      id="projects"
      number="04 / portfólio"
      title="Repositórios"
      caption="Código aberto, experimentos e projetos pessoais ficam no GitHub, atualizados periodicamente."
    >
      <div className="pro-card p-6 sm:p-8">
        <div className="pro-overline" style={{ color: "var(--muted-2)" }}>
          case · produto proprietário
        </div>
        <div
          className="mt-3 text-xl sm:text-2xl font-semibold"
          style={{ color: "var(--accent)" }}
        >
          Plataforma DLOA AI
        </div>
        <p
          className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--ink)" }}
        >
          Plataforma B2B de comunicação omnichannel pras maiores farmacêuticas
          do Brasil. O motor de campanhas é uma máquina de estados em PostgreSQL
          (configuração low-code num builder visual em Reactflow, execução
          runtime por paciente) com mensageria multicanal no Azure Service Bus.
          Processa dezenas de milhões de execuções de fluxo por mês.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Máquina de estados",
            "Multi-tenant",
            "NestJS",
            "Reactflow",
            "PostgreSQL",
            "Azure Service Bus",
            "Omnichannel",
          ].map((t) => (
            <span key={t} className="pro-chip">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 text-xs" style={{ color: "var(--muted-2)" }}>
          Detalhes de arquitetura sob demanda em entrevista.
        </div>
      </div>

      <motion.a
        href="https://github.com/VictorHClaudiano"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="pro-card block p-6 sm:p-8 group mt-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className="pro-overline"
              style={{ color: "var(--muted-2)" }}
            >
              github · portfólio público
            </div>
            <div
              className="mt-3 font-mono text-xl sm:text-2xl font-semibold break-all"
              style={{ color: "var(--accent)" }}
            >
              github.com/VictorHClaudiano
            </div>
          </div>
          <span
            className="text-2xl sm:text-3xl shrink-0 transition-transform group-hover:translate-x-1"
            style={{ color: "var(--accent)" }}
            aria-hidden
          >
            ↗
          </span>
        </div>

        <p
          className="mt-5 text-sm sm:text-base leading-relaxed max-w-2xl"
          style={{ color: "var(--ink)" }}
        >
          Repositórios de APIs, automações, infra-as-code, integrações e
          estudos com IA. Códigos comentados e produtos pessoais ficam todos
          ali.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TECHS.map((t) => (
            <span key={t} className="pro-chip">
              {t}
            </span>
          ))}
        </div>
      </motion.a>
    </ProSection>
  );
}

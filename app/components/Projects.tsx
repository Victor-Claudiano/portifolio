"use client";

import { motion } from "framer-motion";
import Section from "./Section";

export default function Projects() {
  return (
    <Section
      id="projects"
      command="git remote -v && open ./portfolio"
      caption="portfólio público com código aberto"
    >
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="panel p-6 sm:p-8 relative max-w-3xl"
      >
        <span className="panel-corner tl" />
        <span className="panel-corner tr" />
        <span className="panel-corner bl" />
        <span className="panel-corner br" />

        <div className="text-phosphor-500 text-glow text-base sm:text-lg font-mono">
          Plataforma DLOA AI
        </div>
        <div className="mt-1 very-dim text-xs sm:text-sm font-mono">
          // produto proprietário · arquitetura sob demanda em entrevista
        </div>

        <p className="mt-5 text-sm sm:text-base leading-relaxed">
          Plataforma B2B de comunicação omnichannel pras maiores farmacêuticas
          do Brasil. O motor de campanhas é uma máquina de estados em PostgreSQL
          (configuração low-code num builder visual em Reactflow, execução
          runtime por paciente) com mensageria multicanal no Azure Service Bus.
          Processa dezenas de milhões de execuções de fluxo por mês.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-[10px] sm:text-xs">
          {[
            "Máquina de estados",
            "Multi-tenant",
            "NestJS",
            "Reactflow",
            "PostgreSQL",
            "Azure Service Bus",
            "Omnichannel",
          ].map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 border border-phosphor-700/60 dim"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.a
        href="https://github.com/VictorHClaudiano"
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="block panel p-6 sm:p-8 relative group max-w-3xl hover:bg-phosphor-900/20 transition-colors mt-6"
      >
        <span className="panel-corner tl" />
        <span className="panel-corner tr" />
        <span className="panel-corner bl" />
        <span className="panel-corner br" />

        <div className="flex items-start justify-between gap-4">
          <div className="font-mono text-sm">
            <div className="dim">$ git clone</div>
            <div className="mt-1 text-phosphor-500 text-glow text-base sm:text-lg break-all">
              https://github.com/VictorHClaudiano
            </div>
          </div>
          <span className="hl-amber text-2xl sm:text-3xl shrink-0 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>

        <p className="mt-5 text-sm sm:text-base leading-relaxed">
          Todos os projetos e experimentos públicos vivem no GitHub. Repositórios
          de APIs, automações, infra-as-code, integrações e estudos com IA,
          atualizados periodicamente.
        </p>

        <div className="mt-5 flex flex-wrap gap-2 text-[10px] sm:text-xs">
          {[
            "Node.js",
            "NestJS",
            "Next.js",
            "Python",
            "Django",
            "Docker",
            "K8s",
            "Terraform",
          ].map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 border border-phosphor-700/60 dim"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 text-xs dim flex items-center gap-2">
          <span className="hl-cyan">◐</span>
          <span>github.com/VictorHClaudiano</span>
        </div>
      </motion.a>
    </Section>
  );
}

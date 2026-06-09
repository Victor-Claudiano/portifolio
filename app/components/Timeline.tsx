"use client";

import { motion } from "framer-motion";
import Section from "./Section";

type Job = {
  period: string;
  role: string;
  company: string;
  location?: string;
  stack: string[];
  bullets: string[];
};

const JOBS: Job[] = [
  {
    period: "ago/2025 — presente",
    role: "Desenvolvedor de Software Fullstack",
    company: "Digital LOA",
    location: "São Paulo, Brasil",
    stack: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "React",
      "Reactflow",
      "TanStack Query",
      "Chart.js",
      "PostgreSQL",
      "TypeORM",
      "Azure Service Bus",
      "Azure",
      "AWS",
      "Python",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
    ],
    bullets: [
      "Responsável pela plataforma do DLOA AI, comunicação omnichannel B2B que atende as maiores farmacêuticas do Brasil, processando dezenas de milhões de execuções de fluxo por mês",
      "Integra com quase todas as farmácias do país, call centers e sites; cada adesão ou compra de medicamento dispara a régua certa pro paciente",
      "Modelei o coração do sistema (o flow) como máquina de estados em PostgreSQL via TypeORM: Configuração (campanha low-code, lista encadeada de blocos tipados de envio, espera, condicional e tag) e Execução (instância runtime, um paciente por vez, com ponteiro pro bloco atual, histórico e estado próprio)",
      "Esperas por dia fixo, X dias ou variável do paciente; condicionais ramificam pelos dados do paciente; várias execuções rodando em paralelo, uma por paciente",
      "Back-end NestJS/Node.js multi-tenant: permissionamento em camadas (por indústria e por usuário), RBAC com JWT carregando claims de tenant e plano, rotas no Swagger",
      "Mensageria producer/consumer no Azure Service Bus; workers despacham por canal (WhatsApp BSP, gateways de SMS, ESP de email) respeitando rate-limit por domínio, IP e telefone",
      "Atuo ponta a ponta: design, front (SPA React/TS, Reactflow no builder, TanStack Query nas telas data-heavy, Chart.js nos KPIs), api, banco, deploy atrás de load balancer e observabilidade (Prometheus, Pino/Loki, OpenTelemetry/Tempo, Alertmanager), com CI/CD, microserviços auxiliares (alguns em Python) e homologação separada",
    ],
  },
  {
    period: "abr/2025 — jul/2025",
    role: "Desenvolvedor Full Stack Jr",
    company: "Gepam (Gestão Pública, Auditoria & Consultoria)",
    location: "Adamantina, SP",
    stack: ["React", ".NET", "Django", "PostgreSQL", "MySQL"],
    bullets: [
      "Interfaces React com redução de 35% no tempo de carregamento",
      "APIs RESTful com .NET e Django suportando +20% de volume de requisições sem perda de performance",
      "Otimização de queries em PostgreSQL/MySQL com até 40% de melhora no tempo de resposta",
      "Testes automatizados que reduziram erros em produção em 30%",
      "Integrações via APIs e Webhooks que economizaram cerca de 15h/mês de trabalho manual",
    ],
  },
  {
    period: "mai/2024 — abr/2025",
    role: "Estagiário Dev Full Stack",
    company: "AxCode",
    stack: ["Python", "React.js", "Next.js"],
    bullets: [
      "Aplicações web modernas com Python no backend e React.js/Next.js no frontend",
      "Participação no ciclo completo de desenvolvimento, da análise de requisitos ao deploy",
      "Atuação em ambiente ágil com entregas contínuas",
    ],
  },
];

export default function Timeline() {
  return (
    <Section
      id="timeline"
      command="git log --oneline --graph"
      caption="histórico profissional · do estágio ao stack completo"
    >
      <div className="relative max-w-4xl">
        <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-phosphor-700/50" />

        <ul className="space-y-8">
          {JOBS.map((j, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-10 sm:pl-14"
            >
              <span className="absolute left-2 sm:left-3 top-1.5 w-3 h-3 bg-phosphor-500 text-glow rounded-sm rotate-45" />
              <div className="text-xs dim mb-1 flex items-center gap-2">
                <span className="hl-amber">●</span>
                <span>{j.period}</span>
              </div>
              <div className="panel p-5 relative">
                <span className="panel-corner tl" />
                <span className="panel-corner tr" />
                <span className="panel-corner bl" />
                <span className="panel-corner br" />
                <h3 className="text-base sm:text-lg text-phosphor-500 text-glow">
                  {j.role}{" "}
                  <span className="dim">@ </span>
                  <span className="hl-cyan">{j.company}</span>
                </h3>
                {j.location && (
                  <p className="very-dim text-xs mt-1">{j.location}</p>
                )}
                <div className="mt-2 flex flex-wrap gap-2 text-[10px] sm:text-xs">
                  {j.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 border border-phosphor-700/60 dim"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 space-y-1 text-xs sm:text-sm">
                  {j.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2">
                      <span className="very-dim shrink-0">{"»"}</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

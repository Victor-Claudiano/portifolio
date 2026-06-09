"use client";

import { motion } from "framer-motion";
import ProSection from "./ProSection";

type Job = {
  period: string;
  role: string;
  company: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

const JOBS: Job[] = [
  {
    period: "ago/2025 — presente",
    role: "Desenvolvedor de Software Fullstack",
    company: "Digital LOA",
    location: "São Paulo, Brasil",
    bullets: [
      "Sou responsável pela plataforma do DLOA AI, uma solução B2B de comunicação omnichannel que atende as maiores farmacêuticas do Brasil. O sistema integra com quase todas as farmácias do país, call centers e sites, de modo que cada adesão ou compra de medicamento dispara a régua de comunicação certa para o paciente, processando dezenas de milhões de execuções de fluxo por mês.",
      "Modelei o coração do produto, o flow, como uma máquina de estados em PostgreSQL via TypeORM. Ele separa a Configuração (a campanha desenhada visualmente pelo marketing em low-code, uma lista encadeada de blocos tipados de envio, espera, condicional e tag) da Execução (a instância em runtime que roda um paciente por vez, com ponteiro para o bloco atual, histórico e estado próprio), com várias execuções acontecendo em paralelo.",
      "Desenvolvi o back-end em NestJS e Node.js como um SaaS multi-tenant, com permissionamento em camadas (por indústria e por usuário), RBAC baseado em JWT com claims de tenant e plano, e as rotas documentadas no Swagger.",
      "Construí a mensageria com producer e consumer no Azure Service Bus, em que os workers despacham por canal (BSP de WhatsApp, gateways de SMS e ESP de e-mail) respeitando os rate-limits por domínio, IP e telefone.",
      "Atuo na plataforma de ponta a ponta, do design ao monitoramento: front-end em SPA React e TypeScript (Reactflow no builder visual de fluxos, TanStack Query nas telas data-heavy e Chart.js nos dashboards de KPI), API, banco, deploy em cloud atrás de load balancer, CI/CD, microserviços auxiliares (alguns em Python) e ambiente de homologação separado.",
      "Mantenho a observabilidade no stack Grafana: Prometheus para as métricas, Pino e Loki para os logs, OpenTelemetry e Tempo para o tracing e Alertmanager para o paging.",
    ],
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
  },
  {
    period: "abr/2025 — jul/2025",
    role: "Desenvolvedor Full Stack Jr",
    company: "Gepam (Gestão Pública, Auditoria & Consultoria)",
    location: "Adamantina, SP",
    bullets: [
      "Interfaces React que reduziram o tempo de carregamento em 35% e melhoraram a usabilidade.",
      "APIs RESTful com .NET e Django suportando aumento de 20% no volume de requisições sem perda de performance.",
      "Otimização de queries e modelagem em PostgreSQL/MySQL com até 40% de melhora no tempo de resposta.",
      "Testes automatizados que reduziram erros em produção em 30%.",
      "Integrações com sistemas externos via APIs e Webhooks, economizando ~15h/mês de trabalho manual.",
    ],
    stack: ["React", ".NET", "Django", "PostgreSQL", "MySQL"],
  },
  {
    period: "mai/2024 — abr/2025",
    role: "Estagiário Dev Full Stack",
    company: "AxCode",
    bullets: [
      "Desenvolvimento de aplicações web modernas com Python no backend e React.js/Next.js no frontend.",
      "Participação ativa em todo o ciclo de desenvolvimento: análise de requisitos, implementação, testes e deploy em produção.",
      "Atuação em ambiente ágil com entregas contínuas.",
    ],
    stack: ["Python", "React.js", "Next.js"],
  },
];

export default function ProExperience() {
  return (
    <ProSection
      id="experience"
      number="03 / experiência"
      title="Trajetória"
      caption="Onde construí o que sei. Bullets focados em entrega e impacto medido."
    >
      <ol className="space-y-10">
        {JOBS.map((j, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="pro-card p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="pro-h2 text-xl sm:text-2xl">{j.role}</h3>
                <div
                  className="mt-1 text-base"
                  style={{ color: "var(--muted)" }}
                >
                  <span
                    className="font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {j.company}
                  </span>
                  {j.location && (
                    <>
                      <span className="mx-2">·</span>
                      <span>{j.location}</span>
                    </>
                  )}
                </div>
              </div>
              <div
                className="pro-overline whitespace-nowrap"
                style={{ color: "var(--muted-2)" }}
              >
                {j.period}
              </div>
            </div>

            <ul
              className="mt-5 space-y-2 text-sm sm:text-base"
              style={{ color: "var(--ink)" }}
            >
              {j.bullets.map((b, k) => (
                <li key={k} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block w-1 h-1 shrink-0 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {j.stack.map((s) => (
                <span key={s} className="pro-chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </ProSection>
  );
}

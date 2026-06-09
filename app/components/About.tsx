"use client";

import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      command="cat about.md"
      caption="quem digitou esse currículo"
    >
      <div className="panel p-6 sm:p-8 relative max-w-4xl">
        <span className="panel-corner tl" />
        <span className="panel-corner tr" />
        <span className="panel-corner bl" />
        <span className="panel-corner br" />

        <div className="space-y-5 text-sm sm:text-base leading-relaxed">
          <p>
            Desenvolvedor <span className="hl-amber">full stack</span> e{" "}
            <span className="hl-amber">DevOps</span> com atuação ponta a ponta,
            da interface à infraestrutura.
          </p>
          <p>
            No <span className="hl-amber">back-end</span>, trabalho com{" "}
            <span className="hl-cyan">Node.js</span> e{" "}
            <span className="hl-cyan">NestJS</span> para APIs que precisam
            aguentar carga real, e uso <span className="hl-cyan">Python</span>{" "}
            quando o problema pede automação, scripts de dados ou integrações.
            No <span className="hl-amber">front</span>, entrego interfaces com{" "}
            <span className="hl-cyan">React</span> e{" "}
            <span className="hl-cyan">Next.js</span> pensadas em performance e
            experiência de uso.
          </p>
          <p>
            O que costuma me diferenciar é{" "}
            <span className="hl-amber">não parar no merge</span>: configuro
            infraestrutura na <span className="hl-cyan">AWS</span> e{" "}
            <span className="hl-cyan">Azure</span>, monto pipelines de{" "}
            <span className="hl-cyan">CI/CD</span>, orquestro containers com{" "}
            <span className="hl-cyan">Kubernetes</span> e garanto observabilidade
            com <span className="hl-cyan">Prometheus</span> e{" "}
            <span className="hl-cyan">Grafana</span>. Entrego software{" "}
            <span className="hl-warn">estável e fácil de operar em produção</span>.
          </p>
          <p>
            Hoje toco a plataforma do <span className="hl-amber">DLOA AI</span>:
            comunicação omnichannel para as maiores farmacêuticas do Brasil,
            com dezenas de milhões de execuções de fluxo por mês. Como lido com
            dados sensíveis de saúde, minha base em{" "}
            <span className="hl-cyan">Direito</span> (LGPD, contratos e
            compliance) pesa nas decisões técnicas.
          </p>
          <p className="dim border-l-2 border-phosphor-700/60 pl-4">
            &gt; aberto a conversas sobre produtos desafiadores, times que
            valorizam qualidade técnica e problemas que não cabem num único
            repositório.
          </p>
        </div>
      </div>
    </Section>
  );
}

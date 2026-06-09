"use client";

import ProSection from "./ProSection";

export default function ProAbout() {
  return (
    <ProSection
      id="about"
      number="01 / sobre"
      title="Resumo profissional"
      caption="Visão geral da minha atuação, stack e foco profissional."
    >
      <div className="space-y-5 text-base sm:text-lg leading-relaxed max-w-2xl">
        <p>
          Desenvolvedor full stack e DevOps com atuação ponta a ponta, da
          interface à infraestrutura.
        </p>
        <p>
          No back-end, trabalho com{" "}
          <strong className="font-semibold">Node.js</strong> e{" "}
          <strong className="font-semibold">NestJS</strong> para APIs que
          precisam aguentar carga real, e uso{" "}
          <strong className="font-semibold">Python</strong> quando o problema
          pede automação, scripts de dados ou integrações. No front, entrego
          interfaces com <strong className="font-semibold">React</strong> e{" "}
          <strong className="font-semibold">Next.js</strong> com foco em
          performance e experiência de uso.
        </p>
        <p>
          Também atuo em infraestrutura: provisiono ambientes na{" "}
          <strong className="font-semibold">AWS</strong> e{" "}
          <strong className="font-semibold">Azure</strong>, mantenho pipelines
          de <strong className="font-semibold">CI/CD</strong>, orquestro
          containers com <strong className="font-semibold">Kubernetes</strong> e
          garanto observabilidade com{" "}
          <strong className="font-semibold">Prometheus</strong> e{" "}
          <strong className="font-semibold">Grafana</strong>. Entrego software
          estável e fácil de operar e monitorar em produção.
        </p>
        <p>
          Hoje sou responsável pela plataforma do{" "}
          <strong className="font-semibold">DLOA AI</strong>, um SaaS B2B de
          comunicação omnichannel que atende as maiores{" "}
          <strong className="font-semibold">farmacêuticas do Brasil</strong> e
          processa <strong className="font-semibold">dezenas de milhões de
          execuções de fluxo por mês</strong>. Como lido com{" "}
          <strong className="font-semibold">dados sensíveis de saúde</strong> em
          produção, minha formação em{" "}
          <strong className="font-semibold">Direito</strong> (LGPD, contratos e
          compliance) ajuda a tomar decisões técnicas conscientes de privacidade
          e regulação.
        </p>
      </div>
    </ProSection>
  );
}

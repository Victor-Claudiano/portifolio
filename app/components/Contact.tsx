"use client";

import { motion } from "framer-motion";
import Cursor from "./Cursor";
import Section from "./Section";

const LINKS = [
  {
    label: "email",
    cmd: "mail -s 'hello' victorclaudiano@gmail.com",
    href: "mailto:victorclaudiano@gmail.com",
    display: "victorclaudiano@gmail.com",
  },
  {
    label: "phone",
    cmd: "tel +5518997845192",
    href: "tel:+5518997845192",
    display: "(18) 99784-5192",
  },
  {
    label: "linkedin",
    cmd: "curl linkedin.com/in/victorclaudiano",
    href: "https://www.linkedin.com/in/victorclaudiano/",
    display: "linkedin.com/in/victorclaudiano",
  },
  {
    label: "github",
    cmd: "git clone github.com/VictorHClaudiano",
    href: "https://github.com/VictorHClaudiano",
    display: "github.com/VictorHClaudiano",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      command="./contact --open"
      caption="canais ativos, respondo nos quatro"
    >
      <div className="max-w-3xl">
        <div className="panel p-6 sm:p-8 relative">
          <span className="panel-corner tl" />
          <span className="panel-corner tr" />
          <span className="panel-corner bl" />
          <span className="panel-corner br" />

          <ul className="space-y-5 text-sm sm:text-base">
            {LINKS.map((l, i) => (
              <motion.li
                key={l.label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="text-xs sm:text-sm">
                  <span className="hl-cyan">visitor@curriculum</span>
                  <span className="dim">:</span>
                  <span className="text-phosphor-500">~$</span>{" "}
                  <span className="text-phosphor-500">{l.cmd}</span>
                </div>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-1 ml-4 block link text-base sm:text-lg"
                >
                  <span className="very-dim">›</span> {l.display}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-phosphor-700/40 text-xs sm:text-sm">
            <div className="dim">
              <span className="hl-cyan">root@curriculum</span>
              <span className="dim">:</span>
              <span className="text-phosphor-500">~$</span>{" "}
              <span className="text-phosphor-500">
                echo &quot;disponível para conversas&quot;
              </span>
            </div>
            <div className="mt-2 text-phosphor-500 text-glow flex items-center gap-2">
              disponível para conversas
              <Cursor />
            </div>
          </div>
        </div>

        <p className="mt-8 very-dim text-xs">
          <span className="dim"># </span>
          built with Next.js · Tailwind · Framer Motion · CRT phosphor by hand
        </p>
      </div>
    </Section>
  );
}

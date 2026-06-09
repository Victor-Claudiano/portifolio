"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  command: string;
  caption?: string;
  children: ReactNode;
};

export default function Section({ id, command, caption, children }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative z-10 px-6 sm:px-10 lg:px-20 py-14 sm:py-20"
    >
      <header className="mb-8">
        <div className="text-sm sm:text-base flex flex-wrap items-baseline gap-x-2">
          <span className="hl-cyan">victor@curriculum</span>
          <span className="dim">:</span>
          <span className="text-phosphor-500">~/{id}</span>
          <span className="dim">$</span>
          <span className="text-phosphor-500 text-glow">{command}</span>
        </div>
        {caption && (
          <p className="mt-2 dim text-xs sm:text-sm">
            <span className="very-dim">// </span>
            {caption}
          </p>
        )}
        <div className="mt-4 border-t border-phosphor-700/40" />
      </header>
      {children}
    </motion.section>
  );
}

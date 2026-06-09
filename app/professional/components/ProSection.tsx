"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id: string;
  number: string;
  title: string;
  caption?: string;
  children: ReactNode;
};

export default function ProSection({
  id,
  number,
  title,
  caption,
  children,
}: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="relative z-10 px-6 sm:px-10 lg:px-20 py-14 sm:py-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[12rem_1fr] gap-6 md:gap-14">
          <div className="md:sticky md:top-12 md:self-start">
            <div
              className="pro-overline"
              style={{ color: "var(--muted-2)" }}
            >
              {number}
            </div>
            <h2 className="pro-h2 mt-2 text-2xl sm:text-3xl">{title}</h2>
            {caption && (
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {caption}
              </p>
            )}
          </div>
          <div>{children}</div>
        </div>

        <div className="pro-divider mt-16" />
      </div>
    </motion.section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES: { text: string; status?: string; delay: number }[] = [
  { text: "BIOS v4.7.1: POSTing curriculum.bin", delay: 80 },
  { text: "checking memory ......................... 64GB OK", delay: 120 },
  { text: "loading kernel /victor/full-stack ........ OK", delay: 110 },
  { text: "mounting /skills (ext4) .................. OK", delay: 100 },
  { text: "mounting /experience (zfs) ............... OK", delay: 100 },
  { text: "starting systemd-nestd ................... OK", delay: 110 },
  { text: "starting kubelet @ cluster-prod-01 ....... OK", delay: 110 },
  { text: "starting prometheus exporter ............. OK", delay: 100 },
  { text: "tls handshake aws-us-east-1 .............. OK", delay: 90 },
  { text: "tls handshake azure-brazil-south ......... OK", delay: 90 },
  { text: "deploying interface ...................... OK", delay: 140 },
  { text: "", delay: 200 },
  { text: "welcome to victor@curriculum.dev", delay: 120 },
  { text: "last login: 2026-05-19 from recruiter.local", delay: 180 },
];

export default function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(0);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    if (visible >= LINES.length) {
      const t = setTimeout(onDone, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible((v) => v + 1), LINES[visible].delay);
    return () => clearTimeout(t);
  }, [visible, onDone]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        setSkipped(true);
        onDone();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onDone]);

  if (skipped) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="boot"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-crt-bg flex items-start justify-center p-6 sm:p-12 overflow-hidden"
      >
        <div className="w-full max-w-3xl pt-8 sm:pt-16 text-sm sm:text-base">
          {LINES.slice(0, visible).map((line, i) => {
            const ok = line.text.endsWith("OK");
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.12 }}
                className="leading-relaxed"
              >
                {ok ? (
                  <>
                    <span className="dim">
                      {line.text.replace(/OK$/, "")}
                    </span>
                    <span className="text-phosphor-500 text-glow">[ OK ]</span>
                  </>
                ) : (
                  <span className={line.text === "" ? "" : "text-phosphor-500"}>
                    {line.text || " "}
                  </span>
                )}
              </motion.div>
            );
          })}
          <div className="mt-4 dim text-xs">
            <span className="very-dim">press</span>{" "}
            <span className="hl-amber">[esc]</span>{" "}
            <span className="very-dim">or</span>{" "}
            <span className="hl-amber">[space]</span>{" "}
            <span className="very-dim">to skip</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

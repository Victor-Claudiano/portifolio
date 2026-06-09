"use client";

import Link from "next/link";

type Props = {
  to: "terminal" | "pro";
};

export default function ModeSwitch({ to }: Props) {
  if (to === "pro") {
    return (
      <Link
        href="/professional"
        prefetch
        className="fixed top-4 right-4 z-[60] panel px-3 py-2 text-xs sm:text-sm hover:bg-phosphor-900/40 transition-colors text-phosphor-500 no-print"
        aria-label="Switch to professional / HR view"
      >
        <span className="dim">$</span>{" "}
        <span className="text-phosphor-500">./switch --mode=hr</span>
      </Link>
    );
  }

  return (
    <Link
      href="/terminal"
      prefetch
      className="pro-mode-switch fixed top-5 right-5 z-50 text-xs sm:text-sm font-mono px-3 py-2 rounded-md border border-[color:var(--line)] bg-white/70 backdrop-blur hover:border-[color:var(--accent)] transition-colors no-print"
      style={{ color: "var(--accent)" }}
      aria-label="Switch to developer / terminal view"
    >
      ↗ dev mode
    </Link>
  );
}

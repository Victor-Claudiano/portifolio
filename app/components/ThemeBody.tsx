"use client";

import { useEffect } from "react";

export default function ThemeBody({
  mode,
}: {
  mode: "terminal" | "pro";
}) {
  useEffect(() => {
    const cls = mode === "terminal" ? "theme-terminal" : "theme-pro";
    const other = mode === "terminal" ? "theme-pro" : "theme-terminal";
    document.body.classList.remove(other);
    document.body.classList.add(cls);
    return () => {
      document.body.classList.remove(cls);
    };
  }, [mode]);

  return null;
}

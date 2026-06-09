import type { Metadata } from "next";
import CRTOverlay from "../components/CRTOverlay";
import ThemeBody from "../components/ThemeBody";

export const metadata: Metadata = {
  title: "victor@claudiano:~$ // full-stack & devops",
  description:
    "Currículo (modo terminal) de Victor Hugo Claudiano · Full Stack Developer & DevOps.",
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeBody mode="terminal" />
      <CRTOverlay />
      {children}
    </>
  );
}

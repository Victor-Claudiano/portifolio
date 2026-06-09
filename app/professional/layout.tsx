import type { Metadata } from "next";
import ThemeBody from "../components/ThemeBody";

export const metadata: Metadata = {
  title: "Victor Hugo Claudiano · Currículo",
  description:
    "Full Stack Developer & DevOps em São Paulo. Node.js · NestJS · React · Next.js · Python · Kubernetes · AWS · Azure.",
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeBody mode="pro" />
      <div className="pro-grain" aria-hidden />
      {children}
    </>
  );
}

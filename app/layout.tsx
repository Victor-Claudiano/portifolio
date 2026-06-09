import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Hugo Claudiano · Full Stack & DevOps",
  description:
    "Currículo de Victor Hugo Claudiano · Full Stack Developer & DevOps em São Paulo. Node.js, NestJS, React, Next.js, Python, Kubernetes, AWS, Azure.",
  keywords: [
    "Victor Hugo Claudiano",
    "Victor Claudiano",
    "full stack",
    "devops",
    "nest.js",
    "react",
    "next.js",
    "kubernetes",
    "aws",
    "azure",
    "python",
    "São Paulo",
  ],
  authors: [{ name: "Victor Hugo Claudiano" }],
  openGraph: {
    title: "Victor Hugo Claudiano · Full Stack & DevOps",
    description:
      "Sistemas que escalam de verdade, do componente React ao cluster Kubernetes.",
    type: "profile",
  },
  robots: "index,follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${mono.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

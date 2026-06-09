"use client";

import { useState } from "react";
import BootSequence from "../components/BootSequence";
import Hero from "../components/Hero";
import About from "../components/About";
import Stack from "../components/Stack";
import Timeline from "../components/Timeline";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import MatrixRain from "../components/MatrixRain";
import ModeSwitch from "../components/ModeSwitch";

export default function TerminalPage() {
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative min-h-screen">
      <MatrixRain opacity={0.07} speed={1.2} />
      {!booted && <BootSequence onDone={() => setBooted(true)} />}

      <div
        className={`transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ModeSwitch to="pro" />
        <Hero />
        <About />
        <Stack />
        <Timeline />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}

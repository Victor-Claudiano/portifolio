"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン$#@&%*+-=<>{}[]()/\\";

export default function MatrixRain({
  opacity = 0.15,
  speed = 1,
}: {
  opacity?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let columns = 0;
    let drops: number[] = [];
    const fontSize = 16;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor(Math.random() * -50)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const frame = (now: number) => {
      if (now - last > 60 / speed) {
        last = now;
        ctx.fillStyle = "rgba(4, 8, 6, 0.08)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        for (let i = 0; i < columns; i++) {
          const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;
          // Head: brighter
          ctx.fillStyle = `rgba(180, 255, 200, ${opacity * 1.6})`;
          ctx.fillText(ch, x, y);
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.fillText(ch, x, y - fontSize);
          if (y > height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [opacity, speed]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}

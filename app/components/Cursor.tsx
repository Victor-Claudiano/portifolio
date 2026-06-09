"use client";

export default function Cursor({ char = "▊" }: { char?: string }) {
  return (
    <span className="inline-block animate-blink text-phosphor-500 text-glow">
      {char}
    </span>
  );
}

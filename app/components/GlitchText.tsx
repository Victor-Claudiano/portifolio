"use client";

type Props = {
  text: string;
  className?: string;
};

export default function GlitchText({ text, className = "" }: Props) {
  return (
    <span
      data-text={text}
      className={`glitch ${className}`}
      style={{ display: "inline-block" }}
    >
      {text}
    </span>
  );
}

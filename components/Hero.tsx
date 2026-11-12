"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "../lib/data";

const nodes = [
  { id: "input", label: "resume.pdf" },
  { id: "research", label: "Researcher" },
  { id: "analyze", label: "Analyst" },
  { id: "write", label: "Writer" },
  { id: "output", label: "portfolio.tsx" },
];

const NODE_X = [40, 220, 400, 580, 760];
const NODE_Y = 40;

function TypedLine({ text, delay }: { text: string; delay: number }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, 18);
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);

  return <>{shown}</>;
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-violet/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-amber/10 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="mx-auto w-full max-w-6xl">
        {/* Pipeline diagram */}
        <div className="mb-10 w-full overflow-x-auto">
          <svg
            viewBox="0 0 820 90"
            className="w-full min-w-[700px]"
            aria-hidden="true"
          >
            {NODE_X.slice(0, -1).map((x, i) => (
              <motion.line
                key={i}
                x1={x + 24}
                y1={NODE_Y}
                x2={NODE_X[i + 1] - 24}
                y2={NODE_Y}
                className="stroke-violet"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.35 }}
              />
            ))}
            {nodes.map((n, i) => (
              <g key={n.id}>
                <motion.circle
                  cx={NODE_X[i]}
                  cy={NODE_Y}
                  r={i === 0 || i === nodes.length - 1 ? 16 : 20}
                  className={`fill-surface ${
                    i === nodes.length - 1 ? "stroke-amber" : "stroke-violet"
                  }`}
                  strokeWidth="1.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.35 }}
                />
                <motion.circle
                  cx={NODE_X[i]}
                  cy={NODE_Y}
                  r="3"
                  className={i === nodes.length - 1 ? "fill-amber" : "fill-mint"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0.4] }}
                  transition={{ duration: 1.2, delay: i * 0.35 + 0.3, repeat: Infinity, repeatDelay: 1.5 }}
                />
                <motion.text
                  x={NODE_X[i]}
                  y={NODE_Y + 38}
                  textAnchor="middle"
                  className="fill-muted font-mono"
                  fontSize="11"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.35 + 0.15 }}
                >
                  {n.label}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_1fr]">
          {/* Terminal output block */}
          <div className="rounded-xl border border-line/10 bg-surface/60 p-6 font-mono text-sm shadow-2xl shadow-violet/5 backdrop-blur-sm sm:p-8">
            <div className="mb-4 flex items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
            </div>
            <p className="text-muted">
              <span className="text-mint">$</span> pipeline.run()
            </p>
            <p className="mt-3 text-lg text-ink sm:text-xl">
              <TypedLine text={`> compiled ${profile.name}.exe`} delay={1900} />
            </p>
            <h1 className="mt-2 min-h-[2.4em] font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl lg:text-6xl">
              <TypedLine text={profile.role} delay={2500} />
              <span className="animate-blink text-violet">|</span>
            </h1>
            <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted sm:text-lg">
              {profile.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-violet px-5 py-2.5 font-body text-sm font-medium text-onaccent shadow-lg shadow-violet/30 transition-transform hover:-translate-y-0.5"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-amber/50 px-5 py-2.5 font-body text-sm font-medium text-amber transition-transform hover:-translate-y-0.5"
              >
                Hire / collaborate
              </a>
            </div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet via-mint to-amber opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line/20 bg-surface p-1.5">
              <Image
                src="/suhaani.jpg"
                alt="Portrait of Suhaani Garg"
                width={550}
                height={660}
                priority
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover object-top"
              />
            </div>

            <div className="absolute -left-4 bottom-8 flex animate-float items-center gap-2 rounded-full border border-line/15 bg-surface px-4 py-2 font-mono text-xs text-ink shadow-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
              </span>
              Open to AI/ML internships
            </div>
            <div className="absolute -right-3 top-8 animate-float rounded-xl border border-line/15 bg-surface px-3 py-2 font-mono text-xs text-ink shadow-xl [animation-delay:-2s]">
              <span className="text-amber">400+</span> LeetCode
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
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
                stroke="#8B7FFF"
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
                  fill="#151B2C"
                  stroke={i === nodes.length - 1 ? "#FFB454" : "#8B7FFF"}
                  strokeWidth="1.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.35 }}
                />
                <motion.circle
                  cx={NODE_X[i]}
                  cy={NODE_Y}
                  r="3"
                  fill={i === nodes.length - 1 ? "#FFB454" : "#5EEAD4"}
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

        {/* Terminal output block */}
        <div className="rounded-xl border border-white/10 bg-surface/60 p-6 font-mono text-sm shadow-2xl shadow-violet/5 sm:p-8">
          <p className="text-muted">
            <span className="text-mint">$</span> pipeline.run()
          </p>
          <p className="mt-3 text-lg text-ink sm:text-xl">
            <TypedLine text={`> compiled ${profile.name}.exe`} delay={1900} />
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
            <TypedLine text={profile.role} delay={2500} />
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-violet px-5 py-2.5 font-body text-sm font-medium text-base transition-transform hover:-translate-y-0.5"
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
      </div>
    </section>
  );
}

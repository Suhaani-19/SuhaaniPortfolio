"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#certs", label: "Certifications" },
  { href: "#stack", label: "Stack" },
  { href: "#stats", label: "Stats" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-white/5" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm text-ink hover:text-violet transition-colors"
        >
          <span className="text-mint">$</span> {profile.name.split(" ")[0].toLowerCase()}
          <span className="animate-blink text-violet">_</span>
        </a>
        <ul className="hidden gap-8 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-violet transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-violet/40 px-4 py-1.5 font-mono text-xs text-ink hover:bg-violet/10 transition-colors"
        >
          GitHub ↗
        </a>
      </nav>
    </header>
  );
}

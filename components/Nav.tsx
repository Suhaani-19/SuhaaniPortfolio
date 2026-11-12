"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#certs", label: "Certifications" },
  { href: "#stack", label: "Stack" },
  { href: "#stats", label: "Stats" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-base/85 backdrop-blur-md border-b border-line/5" : ""
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
              <a
                href={link.href}
                className={`transition-colors hover:text-violet ${
                  active === link.href.slice(1) ? "text-violet" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-violet/40 px-4 py-1.5 font-mono text-xs text-ink hover:bg-violet/10 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </nav>
    </header>
  );
}

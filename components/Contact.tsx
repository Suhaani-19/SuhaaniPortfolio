"use client";

import { useState, FormEvent } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">
        Contact
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
        Let&rsquo;s build something
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        Recruiting for an AI/ML internship, or just want to talk agents and
        RAG pipelines? This form goes straight to my inbox.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="block text-muted transition-colors hover:text-violet"
          >
            {profile.email}
          </a>
          <p className="text-muted">{profile.phone}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="block text-muted transition-colors hover:text-violet"
          >
            {profile.github.replace("https://", "")}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block font-mono text-xs text-muted">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              maxLength={120}
              className="w-full rounded-lg border border-white/10 bg-surface/60 px-4 py-2.5 text-ink outline-none transition-colors focus:border-violet"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block font-mono text-xs text-muted">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              maxLength={200}
              className="w-full rounded-lg border border-white/10 bg-surface/60 px-4 py-2.5 text-ink outline-none transition-colors focus:border-violet"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1 block font-mono text-xs text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              className="w-full resize-none rounded-lg border border-white/10 bg-surface/60 px-4 py-2.5 text-ink outline-none transition-colors focus:border-violet"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-violet px-6 py-2.5 font-body text-sm font-medium text-base transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="font-mono text-sm text-mint">
              Message sent — I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-mono text-sm text-amber">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}

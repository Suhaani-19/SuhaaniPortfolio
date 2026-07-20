"use client";

import { useEffect, useState } from "react";

type GithubStats = {
  publicRepos: number | null;
  followers: number | null;
  totalStars: number;
  topLanguages: string[];
  profileUrl: string;
};

type LeetcodeStats = {
  totalSolved: number;
  easy: number;
  medium: number;
  hard: number;
  ranking: number | null;
  profileUrl: string;
};

function StatCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string | number;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-surface/40 p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-2 font-display text-3xl font-semibold text-ink">
        {value}
      </p>
      {sub && <p className="mt-1 font-mono text-xs text-mint">{sub}</p>}
    </div>
  );
}

export default function Stats() {
  const [gh, setGh] = useState<GithubStats | null>(null);
  const [lc, setLc] = useState<LeetcodeStats | null>(null);
  const [ghError, setGhError] = useState(false);
  const [lcError, setLcError] = useState(false);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setGh)
      .catch(() => setGhError(true));

    fetch("/api/leetcode")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then(setLc)
      .catch(() => setLcError(true));
  }, []);

  return (
    <section id="stats" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">
        Live stats
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
        Pulled straight from the source
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        This section calls GitHub and LeetCode&rsquo;s APIs on every page
        load — nothing here is hardcoded.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="LeetCode solved"
          value={lcError ? "300+" : lc ? lc.totalSolved : "…"}
          sub={
            lc ? `${lc.easy}E / ${lc.medium}M / ${lc.hard}H` : "resume figure"
          }
        />
        <StatCard
          label="LeetCode rank"
          value={lcError || !lc?.ranking ? "—" : `#${lc.ranking.toLocaleString()}`}
        />
        <StatCard
          label="Public repos"
          value={ghError ? "—" : gh ? gh.publicRepos ?? "—" : "…"}
        />
        <StatCard
          label="Top languages"
          value={
            ghError || !gh?.topLanguages.length
              ? "—"
              : gh.topLanguages.slice(0, 2).join(", ")
          }
        />
      </div>
    </section>
  );
}

import { NextResponse } from "next/server";
import { profile } from "@/lib/data";

export const revalidate = 3600; // cache for 1 hour

export async function GET() {
  try {
    const headers: HeadersInit = { "User-Agent": "portfolio-site" };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${profile.githubUsername}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/users/${profile.githubUsername}/repos?per_page=100&sort=updated`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const repos = await reposRes.json();

    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: any) => sum + (r.stargazers_count || 0), 0)
      : 0;

    const languageCounts: Record<string, number> = {};
    if (Array.isArray(repos)) {
      for (const r of repos) {
        if (r.language) {
          languageCounts[r.language] = (languageCounts[r.language] || 0) + 1;
        }
      }
    }
    const topLanguages = Object.entries(languageCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang]) => lang);

    return NextResponse.json({
      publicRepos: user.public_repos ?? null,
      followers: user.followers ?? null,
      totalStars,
      topLanguages,
      avatarUrl: user.avatar_url ?? null,
      profileUrl: user.html_url ?? profile.github,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to fetch GitHub stats" },
      { status: 502 }
    );
  }
}

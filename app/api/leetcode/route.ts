import { NextResponse } from "next/server";
import { profile } from "@/lib/data";

export const revalidate = 3600; // cache for 1 hour

const QUERY = `
  query userStats($username: String!) {
    matchedUser(username: $username) {
      username
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: profile.leetcodeUsername },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("LeetCode API request failed");

    const json = await res.json();
    const user = json?.data?.matchedUser;
    if (!user) throw new Error("User not found");

    const counts = user.submitStatsGlobal.acSubmissionNum as {
      difficulty: string;
      count: number;
    }[];

    const byDifficulty = Object.fromEntries(
      counts.map((c) => [c.difficulty, c.count])
    );

    return NextResponse.json({
      totalSolved: byDifficulty.All ?? 0,
      easy: byDifficulty.Easy ?? 0,
      medium: byDifficulty.Medium ?? 0,
      hard: byDifficulty.Hard ?? 0,
      ranking: user.profile?.ranking ?? null,
      profileUrl: profile.leetcodeUrl,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Unable to fetch LeetCode stats" },
      { status: 502 }
    );
  }
}

import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedRotator } from "@/components/featured-rotator";
import { person, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Home",
  description:
    "Production AI, end-to-end. Jeremy Brinkworth, an AI systems engineer shipping MCP servers, agent runtimes, edge hardware, and embedded firmware.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-10 lg:px-11 lg:pb-[60px] lg:pt-11">
      {/* Hero + featured rotation */}
      <div className="mb-12 grid gap-10 lg:mb-[60px] lg:grid-cols-2 lg:gap-12">
        {/* Left: hero */}
        <div>
          <div
            className="mb-5 uppercase"
            style={{
              fontFamily: "var(--font-mono-jetbrains), monospace",
              fontSize: 11,
              color: "#7de2ff",
              letterSpacing: 2,
            }}
          >
            ◦ 001 &nbsp;·&nbsp; {person.location} &nbsp;·&nbsp;{" "}
            {person.availability}
          </div>
          <h1
            className="m-0 mb-6 text-[56px] sm:text-[72px] lg:text-[88px]"
            style={{
              fontFamily: "var(--font-serif-instrument), serif",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: -2,
            }}
          >
            Production AI,
            <br />
            <em style={{ color: "#7de2ff", fontStyle: "italic" }}>
              end&#8209;to&#8209;end.
            </em>
          </h1>
          <p
            className="mb-8"
            style={{
              fontSize: 17,
              lineHeight: 1.55,
              color: "#b9c3d9",
              maxWidth: 440,
              margin: "0 0 32px",
            }}
          >
            I&apos;m {person.name.split(" ")[0]}, an AI systems engineer who
            ships the whole stack. MCP servers, agent runtimes, edge hardware,
            embedded firmware. {person.status}.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              style={{
                background: "#7de2ff",
                color: "#06080f",
                padding: "12px 22px",
                borderRadius: 999,
                fontFamily: "var(--font-mono-jetbrains), monospace",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              SEE THE WORK →
            </Link>
            <Link
              href="/resume"
              style={{
                background: "transparent",
                color: "#e6ecf7",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "12px 22px",
                borderRadius: 999,
                fontFamily: "var(--font-mono-jetbrains), monospace",
                fontSize: 13,
                letterSpacing: 1,
              }}
            >
              RÉSUMÉ
            </Link>
          </div>
        </div>

        {/* Right: featured rotation (client) */}
        <FeaturedRotator items={featured} />
      </div>

      {/* ◦ now list */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32 }}>
        <div className="grid gap-8 lg:grid-cols-[180px_1fr]">
          <div
            className="uppercase"
            style={{
              fontFamily: "var(--font-mono-jetbrains), monospace",
              fontSize: 11,
              color: "#6b7691",
              letterSpacing: 2,
            }}
          >
            ◦ now
          </div>
          <div className="flex flex-col gap-3">
            {person.now.map((n, i) => (
              <div
                key={n}
                className="flex gap-[18px]"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  paddingBottom: 12,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono-jetbrains), monospace",
                    fontSize: 11,
                    color: "#7de2ff",
                    width: 28,
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#d4dcee",
                    lineHeight: 1.5,
                  }}
                >
                  {n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

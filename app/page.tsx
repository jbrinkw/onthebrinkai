import type { Metadata } from "next";
import Link from "next/link";
import { person, projects } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Home",
  description:
    "Production AI, end-to-end. Jeremy Brinkworth, an AI systems engineer shipping MCP servers, agent runtimes, edge hardware, and embedded firmware.",
  alternates: { canonical: "/" },
};

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const LABEL: React.CSSProperties = {
  fontSize: 11,
  color: "#6b7691",
  letterSpacing: 0.5,
  fontWeight: 500,
};

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      {/* Hero */}
      <div className="mb-24 max-w-[760px]">
        <div style={LABEL}>
          AI Systems Engineer · {person.location} · Open to roles
        </div>
        <h1
          className="m-0 text-[56px] sm:text-[72px] lg:text-[84px]"
          style={{
            ...SERIF,
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: -2.2,
            margin: "24px 0 28px",
            color: "#e8ecf4",
          }}
        >
          Production AI,
          <br />
          <em style={{ fontStyle: "italic", color: "#7de2ff" }}>
            end&#8209;to&#8209;end.
          </em>
        </h1>
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: "#b9c3d9",
            margin: "0 0 36px",
            maxWidth: 580,
          }}
        >
          I build the whole stack - MCP servers, agent runtimes, edge hardware,
          embedded firmware. {person.status}.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/portfolio"
            style={{
              color: "#7de2ff",
              fontSize: 14,
              fontWeight: 500,
              borderBottom: "1px solid #7de2ff",
              paddingBottom: 2,
            }}
          >
            See the work →
          </Link>
          <Link
            href="/resume"
            className="muted-link"
            style={{ color: "#b9c3d9", fontSize: 14 }}
          >
            Résumé
          </Link>
          <Link
            href="/about"
            className="muted-link"
            style={{ color: "#b9c3d9", fontSize: 14 }}
          >
            About
          </Link>
        </div>
      </div>

      {/* Now */}
      <div className="mb-24 grid gap-12 lg:grid-cols-[180px_1fr]">
        <div style={{ ...LABEL, paddingTop: 4 }}>Now</div>
        <div>
          {person.now.map((n, i) => (
            <div
              key={n}
              style={{
                padding: "14px 0",
                borderBottom:
                  i < person.now.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
                fontSize: 15,
                color: "#b9c3d9",
                lineHeight: 1.5,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Selected work */}
      <div className="grid gap-12 lg:grid-cols-[180px_1fr]">
        <div>
          <div style={LABEL}>Selected work</div>
          <Link
            href="/portfolio"
            style={{
              color: "#7de2ff",
              fontSize: 12,
              display: "inline-block",
              marginTop: 8,
            }}
          >
            All projects →
          </Link>
        </div>
        <div>
          {featured.map((p) => (
            <Link
              key={p.id}
              href="/portfolio"
              className="home-work-row"
              style={{
                padding: "24px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "grid",
                gridTemplateColumns: "48px 1fr 120px 24px",
                gap: 24,
                alignItems: "baseline",
                transition: "padding-left 0.15s",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#6b7691",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {p.num}
              </div>
              <div>
                <div
                  className="home-work-title"
                  style={{
                    ...SERIF,
                    fontSize: 26,
                    color: "#e8ecf4",
                    letterSpacing: -0.5,
                    lineHeight: 1.1,
                    marginBottom: 4,
                    transition: "color 0.15s",
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: 13, color: "#6b7691" }}>{p.tag}</div>
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#6b7691",
                  textAlign: "right",
                }}
              >
                {p.year}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#6b7691",
                  textAlign: "right",
                }}
              >
                →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

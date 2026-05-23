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
  const FEATURED_IDS = ["luna", "chefbyte", "steve", "openethos"] as const;
  const projectById = new Map(projects.map((p) => [p.id, p]));
  const featured = FEATURED_IDS.map((id) => projectById.get(id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      <div className="grid items-start gap-14 lg:grid-cols-[1fr_360px]">
        {/* Hero */}
        <div>
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
            I build agentic systems end-to-end. Looking forward to the future
            of AI.
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

        {/* Selected work */}
        <div>
          <div style={{ ...LABEL, marginBottom: 14 }}>Selected work</div>
          <div className="flex flex-col">
            {featured.map((p) => (
              <Link
                key={p.id}
                href={`/portfolio?p=${p.id}`}
                className="home-work-row"
                style={{
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "grid",
                  gridTemplateColumns: "28px 1fr 16px",
                  gap: 12,
                  alignItems: "baseline",
                  transition: "padding-left 0.15s",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
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
                      fontSize: 20,
                      color: "#e8ecf4",
                      letterSpacing: -0.3,
                      lineHeight: 1.15,
                      transition: "color 0.15s",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#6b7691",
                      marginTop: 2,
                    }}
                  >
                    {p.tag}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6b7691",
                    textAlign: "right",
                  }}
                >
                  →
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/portfolio"
            style={{
              color: "#7de2ff",
              fontSize: 12,
              display: "inline-block",
              marginTop: 14,
            }}
          >
            All projects →
          </Link>
        </div>
      </div>
    </div>
  );
}

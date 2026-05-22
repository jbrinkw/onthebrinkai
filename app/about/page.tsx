import type { Metadata } from "next";
import Image from "next/image";
import { person, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | About",
  description:
    "About Jeremy Brinkworth, Lead AI Engineer at RevUp AI, solo operator of lunahub.dev, Marine Corps reservist, alignment-research bound.",
  alternates: { canonical: "/about" },
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

export default function AboutPage() {
  const linkedinHandle =
    person.linkedin.split("/").filter(Boolean).slice(-1)[0] ?? person.linkedin;

  const contactRows: { key: string; value: string; href: string }[] = [
    { key: "GitHub", value: person.github, href: `https://${person.github}` },
    {
      key: "LinkedIn",
      value: linkedinHandle,
      href: `https://${person.linkedin}`,
    },
    {
      key: "Email",
      value: person.email,
      href: `mailto:${person.email}`,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      {/* Intro + portrait */}
      <div className="mb-16 grid gap-14 lg:grid-cols-[1fr_320px]">
        <div>
          <div style={LABEL}>About</div>
          <h2
            className="m-0 text-[40px] sm:text-[48px] lg:text-[56px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.4,
              lineHeight: 1,
              margin: "14px 0 32px",
            }}
          >
            Engineer, <em style={{ fontStyle: "italic", color: "#7de2ff" }}>Marine,</em> builder.
          </h2>

          <div className="flex max-w-[560px] flex-col gap-[18px]">
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              Lead AI Engineer at{" "}
              <span style={{ color: "#e8ecf4" }}>RevUp AI</span>, building
              RevMigrate - an agentic SQL Server → PostgreSQL migration on
              Amazon Bedrock with async phase orchestration and per-object
              context assembly.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              On the side I operate{" "}
              <span style={{ color: "#e8ecf4" }}>lunahub.dev</span> - a
              Cloudflare Workers MCP server exposing 65 tools, an
              OpenAI-compatible chat endpoint, and three React apps I use every
              day.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              My interest in AI started with GANs and AlphaZero; my long-term
              target is alignment research. Most of what you see here is
              infrastructure and tooling toward that end.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.65,
                color: "#6b7691",
              }}
            >
              Corporal (E-4) Data Systems Administrator, USMC Reserve. Active
              SECRET clearance. Outside work: mountain bike, skydive,
              ultra-endurance.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4 / 5",
              background: "#0c0f1a",
            }}
          >
            <Image
              src="/assets/bio-headshot.png"
              alt={`${person.name} portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 320px"
              style={{
                objectFit: "cover",
                filter: "saturate(0.85) contrast(1.02)",
              }}
            />
          </div>
          <div
            className="mt-3.5 flex justify-between"
            style={{ fontSize: 12, color: "#6b7691" }}
          >
            <span>{person.name}</span>
            <span>{person.location}</span>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: 1,
          background: "rgba(255,255,255,0.07)",
          border: 0,
          margin: "40px 0",
        }}
      />

      {/* Stack */}
      <div className="mb-12 grid gap-12 lg:grid-cols-[180px_1fr]">
        <div style={LABEL}>Stack</div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontSize: 12,
                  color: "#7de2ff",
                  marginBottom: 12,
                  fontWeight: 500,
                }}
              >
                {cat}
              </div>
              <div className="flex flex-col gap-[7px]">
                {items.map((i) => (
                  <div key={i} style={{ fontSize: 13, color: "#b9c3d9" }}>
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr
        style={{
          height: 1,
          background: "rgba(255,255,255,0.07)",
          border: 0,
          margin: "40px 0",
        }}
      />

      {/* Contact */}
      <div className="grid gap-12 lg:grid-cols-[180px_1fr]">
        <div style={LABEL}>Contact</div>
        <div className="flex flex-col">
          {contactRows.map((c, i) => (
            <a
              key={c.key}
              href={c.href}
              target={c.key === "Email" ? undefined : "_blank"}
              rel={c.key === "Email" ? undefined : "noreferrer"}
              className="contact-row flex items-baseline justify-between"
              style={{
                padding: "16px 0",
                borderBottom:
                  i < contactRows.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <span style={{ fontSize: 13, color: "#6b7691" }}>{c.key}</span>
              <span
                className="contact-value"
                style={{
                  fontSize: 14,
                  color: "#e8ecf4",
                  transition: "color 0.15s",
                }}
              >
                {c.value} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

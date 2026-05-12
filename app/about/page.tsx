import type { Metadata } from "next";
import Image from "next/image";
import { person, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | About",
  description:
    "About Jeremy Brinkworth, Lead AI Engineer at RevUp AI, solo operator of lunahub.dev, Marine Corps reservist, alignment-research bound.",
  alternates: { canonical: "/about" },
};

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-mono-jetbrains), monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

export default function AboutPage() {
  const linkedinHandle =
    person.linkedin.split("/").filter(Boolean).slice(-1)[0] ?? person.linkedin;

  const contactCards: {
    key: string;
    value: string;
    icon: string;
    href: string;
  }[] = [
    { key: "github", value: person.github, icon: "↗", href: `https://${person.github}` },
    {
      key: "linkedin",
      value: linkedinHandle,
      icon: "↗",
      href: `https://${person.linkedin}`,
    },
    {
      key: "email",
      value: person.email,
      icon: "✉",
      href: `mailto:${person.email}`,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1280px] px-6 pb-16 pt-10 lg:px-11 lg:pb-[60px] lg:pt-11">
      {/* Top: intro + portrait */}
      <div className="mb-11 grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div
            className="mb-4 uppercase"
            style={{
              ...MONO,
              fontSize: 11,
              color: "#7de2ff",
              letterSpacing: 2,
            }}
          >
            ◦ about · 003
          </div>
          <h2
            className="m-0 mb-6 text-[44px] sm:text-[54px] lg:text-[62px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.5,
              lineHeight: 0.95,
            }}
          >
            Engineer, <em style={{ color: "#7de2ff" }}>Marine,</em> builder.
          </h2>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#c3cde0",
              margin: "0 0 18px",
            }}
          >
            Lead AI Engineer at <span style={{ color: "#7de2ff" }}>RevUp AI</span>,
            building agentic SQL migration on Bedrock and a QA codegen pipeline
            that lifted triage accuracy from 0.24 → 0.68. On the side I operate{" "}
            <span style={{ color: "#7de2ff" }}>lunahub.dev</span>, a production
            MCP server and three-app frontend I use every day.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#c3cde0",
              margin: "0 0 18px",
            }}
          >
            My interest in AI started with GANs and AlphaZero; my long-term
            target is alignment research, the work that decides whether
            advanced AI ends up a force multiplier or a failure mode. Most of
            what you see here is infrastructure toward that end.
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              color: "#c3cde0",
              margin: 0,
            }}
          >
            Corporal (E-4) Data Systems Administrator in the USMC Reserve;
            active SECRET clearance. Outside of work: mountain bike, skydive,
            ultra-endurance.
          </p>
        </div>

        <div>
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4 / 5",
              borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "#0c0f1a",
            }}
          >
            <Image
              src="/assets/bio-headshot.png"
              alt={`${person.name} portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 560px"
              style={{
                objectFit: "cover",
                filter: "saturate(0.9) contrast(1.05)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(6,8,15,0.6))",
              }}
              aria-hidden
            />
            <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 lg:inset-x-[18px] lg:bottom-[18px]">
              <div>
                <div style={{ ...SERIF, fontSize: 24 }}>{person.name}</div>
                <div
                  style={{
                    ...MONO,
                    fontSize: 11,
                    color: "#7de2ff",
                    letterSpacing: 1.2,
                  }}
                >
                  {person.location.toUpperCase()} · 2026
                </div>
              </div>
              <div
                className="text-right"
                style={{
                  ...MONO,
                  fontSize: 10,
                  color: "#8892a9",
                  letterSpacing: 1,
                }}
              >
                <div>PORTRAIT / 01</div>
                <div>EXP. 12m</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills grid */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28 }}>
        <div
          className="mb-[18px] uppercase"
          style={{
            ...MONO,
            fontSize: 11,
            color: "#6b7691",
            letterSpacing: 2,
          }}
        >
          ◦ stack · tools · languages
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div
                className="mb-2.5 italic"
                style={{
                  ...SERIF,
                  fontSize: 18,
                  color: "#7de2ff",
                }}
              >
                {cat}
              </div>
              <div className="flex flex-col gap-1.5">
                {items.map((i) => (
                  <div
                    key={i}
                    style={{
                      ...MONO,
                      fontSize: 11.5,
                      color: "#c8d1e6",
                      paddingBottom: 5,
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact cards */}
      <div className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-3">
        {contactCards.map((c) => (
          <a
            key={c.key}
            href={c.href}
            target={c.key === "email" ? undefined : "_blank"}
            rel={c.key === "email" ? undefined : "noreferrer"}
            className="flex items-center justify-between transition-colors hover:bg-white/[0.04]"
            style={{
              padding: "18px 20px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
            }}
          >
            <div>
              <div
                className="uppercase"
                style={{
                  ...MONO,
                  fontSize: 10,
                  color: "#6b7691",
                  letterSpacing: 1.5,
                }}
              >
                {c.key}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#e6ecf7",
                  marginTop: 3,
                  wordBreak: "break-all",
                }}
              >
                {c.value}
              </div>
            </div>
            <div style={{ color: "#7de2ff", fontSize: 20 }} aria-hidden>
              {c.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

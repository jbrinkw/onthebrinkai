import type { Metadata } from "next";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Résumé",
  description:
    "Résumé for Jeremy Brinkworth, Agentic AI Engineer. Experience, projects, skills, education, and certifications. PDF download available.",
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
};

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-mono-jetbrains), monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const LABEL_ROW_CLASS = "grid gap-5 md:gap-7 lg:grid-cols-[200px_1fr]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="uppercase"
      style={{
        ...MONO,
        fontSize: 11,
        color: "#6b7691",
        letterSpacing: 2,
      }}
    >
      {children}
    </div>
  );
}

const SUMMARY =
  "Agentic AI engineer with practitioner's intuition for what models can and can't do, and how to architect around their failure modes. Thousands of hours across agent orchestration, LLM applications, and production AI delivery. Fluent in Python and modern cloud and data infrastructure.";

type ResumeExperience = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

const resumeExperience: ResumeExperience[] = [
  {
    role: "Lead AI Engineer (Contract)",
    org: "RevUp AI",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    bullets: [
      "Designed and led RevMigrate, an agentic SQL Server → PostgreSQL migration system on Amazon Bedrock with async phase orchestration and per-object context assembly → delivered 100% POC success.",
      "Hardened migrations with timeout handling, retry/backoff, and fail-fast SQL validation gates.",
      "Redesigned the Agentic QA platform codegen pipeline (UNSW web team) with self-consistency ensemble evaluation → lifted Ghost Inspector triage accuracy from ~0.24 → ~0.68.",
      "Parallelized DB connection checks and restructured CI pipeline with Docker caching and Poetry fixes → cut build time from ~4h → ~10m and eliminated a multi-minute UI stall.",
    ],
  },
  {
    role: "Founder / Product & AI Systems Lead",
    org: "Luna AI Platform",
    period: "Feb 2025 – Present",
    location: "Charlotte, NC",
    bullets: [
      "Build and operate Luna Hub Lite, a publicly accessible AI platform at lunahub.dev. Three-app React SPA backed by PostgreSQL on Supabase (31 tables), Cloudflare Workers, and Vercel.",
      "Cloudflare Workers MCP server at mcp.lunahub.dev exposing 65 tools across 5 extensions (Obsidian, Todoist, Home Assistant, ChefByte, CoachByte) over Streamable HTTP, with OAuth 2.1 via Supabase and hashed API-key auth.",
      "OpenAI-compatible chat-completions endpoint with tool-call streaming and multi-round agent orchestration; lets any OpenAI-API-compatible client act as a LunaHub agent. Non-blocking observability layer captures every tool call for eval.",
    ],
  },
  {
    role: "Data Systems Administrator",
    org: "U.S. Marine Corps Reserve",
    period: "Dec 2021 – 2027",
    location: "Charlotte, NC",
    bullets: [
      "Forward-site network infrastructure: deployed ESXi virtualization, VM failover, and switch configuration supporting field operations.",
      "Enterprise comms: Cisco CUCM VoIP, Exchange, and Windows Server DNS. School pipeline Dec 2021 – Sep 2022; active orders at Quantico 2023; Reserve ongoing.",
    ],
  },
];

type ResumeProject = {
  name: string;
  tagline: string;
  bullets: string[];
};

const resumeProjects: ResumeProject[] = [
  {
    name: "ChefByte",
    tagline:
      "agent-native food management with passive inventory via Wi-Fi scales and VLM vision",
    bullets: [
      "Exposes 28 MCP tools letting AI agents manage inventory end-to-end: meal planning, shopping-list reconciliation, and Walmart cart deep-link checkout.",
      "Passive Wi-Fi scale inventory: weight-change events trigger updates with no barcode scanning and no user input, removing the friction that kills adoption of conventional food trackers.",
      "VLM change-detection: weight events trigger image capture; a vision-language model diffs before/after shelf images and reports semantic changes (items added or removed), feeding inventory state without a custom CV model.",
      "Edge optimization: diagnosed and fixed a vision-capture bottleneck on Raspberry Pi, raising throughput from 0.5 to 10 fps and dropping CPU usage from 72% to 36%.",
    ],
  },
  {
    name: "Continuous Steve",
    tagline:
      "hierarchical Minecraft agent, active research targeting arXiv/workshop",
    bullets: [
      "Two-speed cognition: VPT policy body at ~20Hz for reactive control, VLM at ~1Hz for planning, connected via a latent conditioning bridge that steers the body's policy state without discrete action tokens.",
      "Investigating bridge-training methods for latent conditioning between the VLM planner and VPT body; evaluating behavioral cloning from paired demos versus RL with VLM-derived reward signals.",
    ],
  },
];

const resumeSkills: Record<string, string[]> = {
  "AI Systems": [
    "Agentic architecture",
    "Model Context Protocol (MCP)",
    "LangChain",
    "LangGraph",
    "PyTorch",
    "function calling",
    "prompt engineering",
  ],
  "Retrieval & Evaluation": [
    "RAG & grounded retrieval",
    "vector search (pgvector)",
    "LLM evaluation",
  ],
  "LLM APIs & Cloud": [
    "Anthropic SDK",
    "OpenAI-compatible API surface",
    "Amazon Bedrock",
    "SSE streaming",
    "Cloudflare Workers",
    "Supabase",
  ],
  Engineering: ["Python", "FastAPI", "Pydantic", "SQL", "Docker", "Linux"],
};

const resumeEducation = [
  {
    degree: "M.S. Computer Science",
    school: "Western Governors University",
    period: "Expected June 2026",
  },
  {
    degree: "B.S. Computer Science",
    school: "Western Governors University",
    period: "February 2025",
  },
];

const resumeCerts = [
  "AWS Certified Generative AI Developer Professional",
  "AWS ML Engineer Associate",
  "AWS Cloud Practitioner",
  "CompTIA Data+",
  "LPI Linux Essentials",
];

const PHONE = "(919) 800-8322";
const LINKEDIN = "linkedin.com/in/jeremy-brinkworth";
const GITHUB = "github.com/jbrinkw";
const SITE_URL = "onthebrink.ai";

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-6 pb-16 pt-10 lg:px-11 lg:pb-[60px] lg:pt-11">
      {/* Header */}
      <div
        className="mb-7 flex flex-wrap items-end justify-between gap-4 pb-[22px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div className="min-w-0">
          <div
            className="mb-2 uppercase"
            style={{
              ...MONO,
              fontSize: 11,
              color: "#7de2ff",
              letterSpacing: 2,
            }}
          >
            ◦ résumé · 004 / live
          </div>
          <h1
            className="m-0 text-[40px] sm:text-[46px] lg:text-[52px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: -1,
            }}
          >
            {person.name}
          </h1>
          <div
            className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1"
            style={{
              ...MONO,
              fontSize: 11.5,
              color: "#8892a9",
              letterSpacing: 0.3,
            }}
          >
            <span>{person.location}</span>
            <span style={{ color: "#3b455c" }} aria-hidden>·</span>
            <a href={`mailto:${person.email}`} style={{ color: "#c3cde0" }}>
              {person.email}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>·</span>
            <a
              href={`tel:+1${PHONE.replace(/\D/g, "")}`}
              style={{ color: "#c3cde0" }}
            >
              {PHONE}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>·</span>
            <a
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#c3cde0" }}
            >
              {LINKEDIN}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>·</span>
            <a
              href={`https://${GITHUB}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#c3cde0" }}
            >
              {GITHUB}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>·</span>
            <a href="/" style={{ color: "#c3cde0" }}>
              {SITE_URL}
            </a>
          </div>
          <div
            className="mt-2 uppercase"
            style={{
              ...MONO,
              fontSize: 10.5,
              color: "#7de2ff",
              letterSpacing: 1.8,
              fontWeight: 600,
            }}
          >
            Active SECRET Clearance
          </div>
        </div>
        <div className="flex gap-2.5">
          <a
            href="/Jeremy_Brinkworth_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              ...MONO,
              background: "transparent",
              color: "#e6ecf7",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "10px 16px",
              borderRadius: 999,
              fontSize: 11,
              letterSpacing: 1,
            }}
          >
            ↓ PDF
          </a>
          <a
            href={`mailto:${person.email}`}
            style={{
              ...MONO,
              background: "#7de2ff",
              color: "#06080f",
              padding: "10px 16px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            ✉ EMAIL ME
          </a>
        </div>
      </div>

      {/* Summary */}
      <section className={`${LABEL_ROW_CLASS} mb-7`}>
        <SectionLabel>◦ summary</SectionLabel>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#c3cde0", margin: 0 }}>
          {SUMMARY}
        </p>
      </section>

      {/* Experience */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ experience</SectionLabel>
        <div className="flex flex-col gap-[22px]">
          {resumeExperience.map((e) => (
            <div key={`${e.role}-${e.org}`}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <div style={{ ...SERIF, fontSize: 21, color: "#e6ecf7" }}>
                  {e.role}{" "}
                  <em style={{ color: "#7de2ff" }}>· {e.org}</em>
                </div>
                <div style={{ ...MONO, fontSize: 11, color: "#8892a9" }}>
                  {e.period}
                </div>
              </div>
              <div
                className="mb-2.5 uppercase"
                style={{
                  ...MONO,
                  fontSize: 10.5,
                  color: "#6b7691",
                  letterSpacing: 1,
                }}
              >
                {e.location}
              </div>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative"
                    style={{
                      fontSize: 13,
                      color: "#c3cde0",
                      lineHeight: 1.55,
                      paddingLeft: 14,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#7de2ff" }}
                      aria-hidden
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ projects</SectionLabel>
        <div className="flex flex-col gap-[22px]">
          {resumeProjects.map((p) => (
            <div key={p.name}>
              <div
                className="mb-2.5 flex flex-wrap items-baseline gap-x-2 gap-y-0.5"
              >
                <span style={{ ...SERIF, fontSize: 21, color: "#e6ecf7" }}>
                  {p.name}
                </span>
                <span
                  style={{
                    ...SERIF,
                    fontSize: 14,
                    fontStyle: "italic",
                    color: "#8892a9",
                  }}
                >
                  · {p.tagline}
                </span>
              </div>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative"
                    style={{
                      fontSize: 13,
                      color: "#c3cde0",
                      lineHeight: 1.55,
                      paddingLeft: 14,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#7de2ff" }}
                      aria-hidden
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ skills</SectionLabel>
        <div className="flex flex-col gap-3">
          {Object.entries(resumeSkills).map(([cat, items]) => (
            <div key={cat} className="grid gap-2 sm:grid-cols-[180px_1fr]">
              <div
                className="italic"
                style={{
                  ...SERIF,
                  fontSize: 15,
                  color: "#7de2ff",
                }}
              >
                {cat}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      ...MONO,
                      padding: "4px 9px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 6,
                      fontSize: 10.5,
                      color: "#c8d1e6",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ education</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {resumeEducation.map((e) => (
            <div
              key={`${e.degree}-${e.school}`}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <span style={{ ...SERIF, fontSize: 17 }}>{e.degree}</span>{" "}
                <span style={{ color: "#8892a9", fontSize: 13 }}>
                  · {e.school}
                </span>
              </div>
              <div style={{ ...MONO, fontSize: 11, color: "#8892a9" }}>
                {e.period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        className={`${LABEL_ROW_CLASS} pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ certifications</SectionLabel>
        <div className="flex flex-wrap gap-1.5">
          {resumeCerts.map((c) => (
            <span
              key={c}
              style={{
                ...MONO,
                padding: "5px 11px",
                border: "1px solid rgba(125,226,255,0.25)",
                borderRadius: 999,
                fontSize: 10.5,
                color: "#7de2ff",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

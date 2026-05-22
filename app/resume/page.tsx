import type { Metadata } from "next";
import Link from "next/link";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Résumé",
  description:
    "Résumé for Jeremy Brinkworth, Agentic AI Engineer. Experience, projects, skills, education, and certifications. PDF download available.",
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
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

function Section({
  label,
  children,
  first,
}: {
  label: string;
  children: React.ReactNode;
  first?: boolean;
}) {
  return (
    <div
      className="grid gap-6 py-7 md:gap-12 lg:grid-cols-[180px_1fr]"
      style={{ borderTop: first ? "none" : "1px solid rgba(255,255,255,0.07)" }}
    >
      <div style={LABEL}>{label}</div>
      <div>{children}</div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      {/* Header */}
      <div className="flex flex-wrap items-end justify-between gap-6 pb-8">
        <div className="min-w-0">
          <div style={LABEL}>Résumé · live</div>
          <h1
            className="m-0 text-[40px] sm:text-[46px] lg:text-[52px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.3,
              lineHeight: 1,
              margin: "12px 0 6px",
            }}
          >
            {person.name}
          </h1>
          <div style={{ fontSize: 14, color: "#8892a9" }}>
            {person.role} · {person.location}
          </div>
          <div
            className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1"
            style={{ fontSize: 13, color: "#8892a9" }}
          >
            <a href={`mailto:${person.email}`} className="muted-link">
              {person.email}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>
              ·
            </span>
            <a
              href={`tel:+1${PHONE.replace(/\D/g, "")}`}
              className="muted-link"
            >
              {PHONE}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>
              ·
            </span>
            <a
              href={`https://${LINKEDIN}`}
              target="_blank"
              rel="noreferrer"
              className="muted-link"
            >
              {LINKEDIN}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>
              ·
            </span>
            <a
              href={`https://${GITHUB}`}
              target="_blank"
              rel="noreferrer"
              className="muted-link"
            >
              {GITHUB}
            </a>
            <span style={{ color: "#3b455c" }} aria-hidden>
              ·
            </span>
            <Link href="/" className="muted-link">
              {SITE_URL}
            </Link>
          </div>
          <div
            className="mt-2"
            style={{
              fontSize: 12,
              color: "#7de2ff",
              fontWeight: 500,
              letterSpacing: 0.5,
            }}
          >
            Active SECRET clearance
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="/Jeremy_Brinkworth_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: 13,
              color: "#b9c3d9",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              paddingBottom: 2,
            }}
          >
            ↓ Download PDF
          </a>
          <a
            href={`mailto:${person.email}`}
            style={{
              fontSize: 13,
              color: "#7de2ff",
              borderBottom: "1px solid #7de2ff",
              paddingBottom: 2,
            }}
          >
            ✉ Email me
          </a>
        </div>
      </div>

      <Section label="Summary" first>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.65,
            color: "#b9c3d9",
          }}
        >
          {SUMMARY}
        </p>
      </Section>

      <Section label="Experience">
        <div className="flex flex-col gap-7">
          {resumeExperience.map((e) => (
            <div key={`${e.role}-${e.org}`}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <div
                  style={{
                    ...SERIF,
                    fontSize: 21,
                    letterSpacing: -0.3,
                    color: "#e8ecf4",
                  }}
                >
                  {e.role}
                  <span style={{ color: "#6b7691" }}> · </span>
                  <em style={{ color: "#7de2ff", fontStyle: "italic" }}>
                    {e.org}
                  </em>
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#6b7691",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {e.period}
                </div>
              </div>
              <div style={{ fontSize: 12, color: "#6b7691", marginBottom: 10 }}>
                {e.location}
              </div>
              <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                {e.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative"
                    style={{
                      fontSize: 14,
                      color: "#b9c3d9",
                      lineHeight: 1.55,
                      paddingLeft: 18,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#6b7691" }}
                      aria-hidden
                    >
 - 
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Projects">
        <div className="flex flex-col gap-7">
          {resumeProjects.map((p) => (
            <div key={p.name}>
              <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span
                  style={{
                    ...SERIF,
                    fontSize: 21,
                    color: "#e8ecf4",
                    letterSpacing: -0.3,
                  }}
                >
                  {p.name}
                </span>
                <span
                  style={{
                    fontSize: 13,
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
                      fontSize: 14,
                      color: "#b9c3d9",
                      lineHeight: 1.55,
                      paddingLeft: 18,
                    }}
                  >
                    <span
                      className="absolute left-0"
                      style={{ color: "#6b7691" }}
                      aria-hidden
                    >
 - 
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Education">
        <div className="flex flex-col gap-3">
          {resumeEducation.map((e) => (
            <div
              key={`${e.degree}-${e.school}`}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <span style={{ ...SERIF, fontSize: 17 }}>{e.degree}</span>
                <span style={{ color: "#8892a9", fontSize: 14, marginLeft: 8 }}>
                  · {e.school}
                </span>
              </div>
              <div style={{ fontSize: 12, color: "#6b7691" }}>{e.period}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Certifications">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {resumeCerts.map((c, i) => (
            <span key={c} style={{ fontSize: 14, color: "#b9c3d9" }}>
              {c}
              {i < resumeCerts.length - 1 && (
                <span style={{ color: "#6b7691", marginLeft: 16 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </Section>

      <Section label="Skills">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(resumeSkills).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontSize: 12,
                  color: "#7de2ff",
                  marginBottom: 8,
                  fontWeight: 500,
                }}
              >
                {cat}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "#b9c3d9",
                  lineHeight: 1.7,
                }}
              >
                {items.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

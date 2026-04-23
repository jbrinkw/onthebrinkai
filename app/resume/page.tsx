import type { Metadata } from "next";
import {
  certs,
  education,
  experience,
  person,
  skills,
} from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Résumé",
  description:
    "Résumé for Jeremy Brinkworth — AI Systems Engineer. Experience, education, certifications, and skills. PDF download available.",
  alternates: { canonical: "/resume" },
  robots: { index: true, follow: true },
};

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-mono-jetbrains), monospace",
};
const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const LABEL_ROW_CLASS =
  "grid gap-5 md:gap-7 lg:grid-cols-[200px_1fr]";

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

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-[1000px] px-6 pb-16 pt-10 lg:px-11 lg:pb-[60px] lg:pt-11">
      {/* Header */}
      <div
        className="mb-7 flex flex-wrap items-end justify-between gap-4 pb-[22px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div>
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
            className="mt-1.5"
            style={{
              ...MONO,
              fontSize: 12,
              color: "#8892a9",
              letterSpacing: 1,
            }}
          >
            {person.role.toUpperCase()} · {person.location.toUpperCase()}
          </div>
        </div>
        <div className="flex gap-2.5">
          <a
            href="/Jeremy_Brinkworth_Resume_4_26.pdf"
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
          {person.tagline} Lead AI Engineer at RevUp AI; solo operator of the
          Luna AI Platform. USMC Reserve, active SECRET clearance.
        </p>
      </section>

      {/* Experience */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ experience</SectionLabel>
        <div className="flex flex-col gap-[22px]">
          {experience.map((e) => (
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

      {/* Education */}
      <section
        className={`${LABEL_ROW_CLASS} mb-7 pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ education</SectionLabel>
        <div className="flex flex-col gap-2.5">
          {education.map((e) => (
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

      {/* Certs + skills */}
      <section
        className={`${LABEL_ROW_CLASS} pt-6`}
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <SectionLabel>◦ certs · skills</SectionLabel>
        <div>
          <div className="mb-3.5 flex flex-wrap gap-1.5">
            {certs.map((c) => (
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
          <div className="flex flex-wrap gap-1.5">
            {Object.values(skills)
              .flat()
              .map((s) => (
                <span
                  key={s}
                  style={{
                    ...MONO,
                    padding: "4px 9px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 6,
                    fontSize: 10,
                    color: "#b9c3d9",
                  }}
                >
                  {s}
                </span>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

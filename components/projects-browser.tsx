"use client";

import { useMemo, useState } from "react";
import {
  projectTagMap,
  projectTags,
  projects,
  type ProjectId,
  type ProjectTag,
} from "@/content/site";

type Filter = ProjectTag | "all";

const MONO: React.CSSProperties = {
  fontFamily: "var(--font-mono-jetbrains), monospace",
};

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

export function ProjectsBrowser() {
  const [tag, setTag] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<ProjectId>("luna");

  const filtered = useMemo(
    () =>
      projects.filter((p) => {
        if (tag === "all") return true;
        return projectTagMap[p.id].includes(tag);
      }),
    [tag],
  );

  // Make sure the active project is visible in the current filter; if not,
  // fall back to the first filtered project.
  const active =
    projects.find((p) => p.id === activeId) ?? projects[0];
  const visibleActive =
    filtered.find((p) => p.id === active.id) ?? filtered[0] ?? active;

  return (
    <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-6 pb-16 pt-9 lg:grid-cols-[320px_1fr] lg:px-11 lg:pb-[60px]">
      {/* Left index */}
      <div>
        <div
          className="mb-2.5 uppercase"
          style={{
            ...MONO,
            fontSize: 11,
            color: "#6b7691",
            letterSpacing: 2,
          }}
        >
          ◦ index
        </div>
        <h2
          className="m-0 mb-5"
          style={{
            ...SERIF,
            fontSize: 44,
            fontWeight: 400,
            letterSpacing: -1,
            lineHeight: 0.95,
          }}
        >
          Selected
          <br />
          <em style={{ color: "#7de2ff" }}>work.</em>
        </h2>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-1.5">
          {projectTags.map((t) => {
            const on = tag === t;
            return (
              <button
                type="button"
                key={t}
                onClick={() => setTag(t)}
                className="uppercase"
                style={{
                  ...MONO,
                  padding: "4px 10px",
                  fontSize: 10.5,
                  border: "1px solid",
                  borderColor: on ? "#7de2ff" : "rgba(255,255,255,0.12)",
                  color: on ? "#7de2ff" : "#a6b2c9",
                  borderRadius: 999,
                  background: "transparent",
                  letterSpacing: 1,
                  cursor: "pointer",
                }}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Project list */}
        <div className="flex flex-col">
          {filtered.map((p) => {
            const on = p.id === visibleActive.id;
            return (
              <button
                type="button"
                key={p.id}
                onClick={() => setActiveId(p.id)}
                className="text-left transition-opacity"
                style={{
                  padding: "14px 4px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  gap: 14,
                  alignItems: "baseline",
                  opacity: on ? 1 : 0.55,
                  background: "transparent",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    ...MONO,
                    fontSize: 11,
                    color: on ? "#7de2ff" : "#6b7691",
                  }}
                >
                  {p.num}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ ...SERIF, fontSize: 20, letterSpacing: -0.3 }}>
                    {p.title}
                  </div>
                  <div
                    className="uppercase"
                    style={{
                      ...MONO,
                      fontSize: 10,
                      color: "#6b7691",
                      letterSpacing: 1,
                      marginTop: 2,
                    }}
                  >
                    {p.tag}
                  </div>
                </div>
                <div style={{ ...MONO, fontSize: 10, color: "#6b7691" }}>
                  {p.year}
                </div>
              </button>
            );
          })}
          {filtered.length === 0 && (
            <div
              style={{
                ...MONO,
                padding: "14px 4px",
                fontSize: 11,
                color: "#6b7691",
              }}
            >
              No projects for this filter.
            </div>
          )}
        </div>
      </div>

      {/* Right case study */}
      <div
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          background: "rgba(255,255,255,0.02)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          className="flex flex-wrap items-center justify-between gap-4"
          style={{
            padding: "24px 32px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-baseline gap-3.5">
            <div
              style={{
                ...MONO,
                fontSize: 12,
                color: "#7de2ff",
                letterSpacing: 1.5,
              }}
            >
              {visibleActive.num} · {visibleActive.year}
            </div>
            <div
              className="uppercase"
              style={{
                ...MONO,
                fontSize: 11,
                color: "#8be9a7",
                letterSpacing: 1,
              }}
            >
              ● {visibleActive.status}
            </div>
          </div>
          {visibleActive.link && (
            <a
              href={`https://${visibleActive.link}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2"
              style={{
                ...MONO,
                fontSize: 13,
                color: "#06080f",
                background: "#7de2ff",
                padding: "8px 14px",
                borderRadius: 999,
                fontWeight: 600,
                letterSpacing: 0.5,
                boxShadow: "0 0 20px rgba(125,226,255,0.25)",
              }}
            >
              ↗ visit {visibleActive.link}
            </a>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "28px 32px" }}>
          <h3
            className="m-0 mb-1"
            style={{
              ...SERIF,
              fontSize: 52,
              fontWeight: 400,
              letterSpacing: -1.2,
              lineHeight: 0.95,
            }}
          >
            {visibleActive.title}
          </h3>
          <div
            className="uppercase"
            style={{
              ...MONO,
              fontSize: 12,
              color: "#8892a9",
              letterSpacing: 1,
              marginBottom: 22,
            }}
          >
            {visibleActive.tag}
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "#c8d1e6",
              margin: "0 0 24px",
              maxWidth: 640,
            }}
          >
            {visibleActive.summary}
          </p>

          {/* Metrics */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${visibleActive.metrics.length}, minmax(0, 1fr))`,
              padding: "18px 0",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              marginBottom: 24,
            }}
          >
            {visibleActive.metrics.map(([v, l]) => (
              <div key={l}>
                <div
                  style={{
                    ...SERIF,
                    fontSize: 32,
                    color: "#7de2ff",
                    lineHeight: 1,
                  }}
                >
                  {v}
                </div>
                <div
                  className="uppercase"
                  style={{
                    ...MONO,
                    fontSize: 10,
                    color: "#6b7691",
                    letterSpacing: 1.2,
                    marginTop: 4,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          {/* Two-column: highlights + stack */}
          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <div
                className="mb-3 uppercase"
                style={{
                  ...MONO,
                  fontSize: 10.5,
                  color: "#7de2ff",
                  letterSpacing: 1.5,
                }}
              >
                ◦ highlights
              </div>
              <ol className="m-0 flex list-none flex-col gap-2.5 p-0">
                {visibleActive.highlights.map((h, i) => (
                  <li
                    key={h}
                    style={{
                      fontSize: 13,
                      color: "#c8d1e6",
                      lineHeight: 1.5,
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <span
                      style={{
                        ...MONO,
                        fontSize: 10,
                        color: "#6b7691",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <div
                className="mb-3 uppercase"
                style={{
                  ...MONO,
                  fontSize: 10.5,
                  color: "#7de2ff",
                  letterSpacing: 1.5,
                }}
              >
                ◦ stack
              </div>
              <div className="flex flex-wrap gap-1.5">
                {visibleActive.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      ...MONO,
                      padding: "5px 11px",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 999,
                      fontSize: 10.5,
                      color: "#b9c3d9",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: 24,
                  padding: 14,
                  borderRadius: 10,
                  background: "rgba(125,226,255,0.05)",
                  border: "1px solid rgba(125,226,255,0.15)",
                  ...MONO,
                  fontSize: 11,
                  color: "#b9c3d9",
                  lineHeight: 1.5,
                }}
              >
                <div
                  className="mb-1.5 uppercase"
                  style={{
                    color: "#7de2ff",
                    letterSpacing: 1.2,
                    fontSize: 9.5,
                  }}
                >
                  ◦ why it matters
                </div>
                Solo-built, production-deployed. No team, no VC — shipped by one
                engineer because the tooling to be lazy with AI didn&apos;t
                exist yet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

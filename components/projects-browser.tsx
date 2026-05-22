"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  projectTagMap,
  projects,
  type ProjectId,
  type ProjectTag,
} from "@/content/site";

type Filter = ProjectTag | "all";

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const LABEL: React.CSSProperties = {
  fontSize: 11,
  color: "#6b7691",
  letterSpacing: 0.5,
  fontWeight: 500,
};

const TAGS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "agents", label: "Agents" },
  { value: "hardware", label: "Hardware" },
  { value: "research", label: "Research" },
];

const INLINE_LINK_STYLE: React.CSSProperties = {
  color: "#7de2ff",
  background: "transparent",
  border: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  cursor: "pointer",
  borderBottom: "1px solid rgba(125, 226, 255, 0.4)",
};

// Parse markdown-style [label](href) inline links. `#projectid` switches the
// active project; anything else opens in a new tab.
function renderParagraph(
  text: string,
  onProjectLink: (id: ProjectId) => void,
): ReactNode {
  const nodes: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(
        <span key={`t-${last}`}>{text.slice(last, match.index)}</span>,
      );
    }
    const [, label, href] = match;
    if (href.startsWith("#")) {
      const id = href.slice(1) as ProjectId;
      nodes.push(
        <button
          key={`b-${match.index}`}
          type="button"
          onClick={() => onProjectLink(id)}
          style={INLINE_LINK_STYLE}
        >
          {label}
        </button>,
      );
    } else {
      nodes.push(
        <a
          key={`a-${match.index}`}
          href={href}
          target="_blank"
          rel="noreferrer"
          style={INLINE_LINK_STYLE}
        >
          {label}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) {
    nodes.push(<span key={`t-${last}`}>{text.slice(last)}</span>);
  }
  return nodes;
}

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

  const active = projects.find((p) => p.id === activeId) ?? projects[0];
  const visibleActive =
    filtered.find((p) => p.id === active.id) ?? filtered[0] ?? active;

  const handleProjectLink = (id: ProjectId) => {
    if (tag !== "all" && !projectTagMap[id].includes(tag)) {
      setTag("all");
    }
    setActiveId(id);
  };

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      <div className="grid gap-14 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <div>
          <div style={LABEL}>Projects · {projects.length}</div>
          <h2
            className="m-0"
            style={{
              ...SERIF,
              fontSize: 36,
              fontWeight: 400,
              letterSpacing: -1,
              lineHeight: 1,
              margin: "14px 0 28px",
            }}
          >
            Selected
            <br />
            <em style={{ color: "#7de2ff", fontStyle: "italic" }}>work.</em>
          </h2>

          <div className="mb-6 flex flex-wrap gap-3.5">
            {TAGS.map((t) => {
              const on = tag === t.value;
              return (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => setTag(t.value)}
                  style={{
                    fontSize: 12,
                    color: on ? "#7de2ff" : "#6b7691",
                    fontWeight: on ? 500 : 400,
                    borderBottom: on
                      ? "1px solid #7de2ff"
                      : "1px solid transparent",
                    paddingBottom: 2,
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col">
            {filtered.map((p) => {
              const on = p.id === visibleActive.id;
              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => setActiveId(p.id)}
                  className="text-left"
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: 12,
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <div
                      style={{
                        ...SERIF,
                        fontSize: 19,
                        color: on ? "#7de2ff" : "#e8ecf4",
                        letterSpacing: -0.3,
                        lineHeight: 1.1,
                      }}
                    >
                      {p.title}
                    </div>
                    <div style={{ fontSize: 11, color: "#6b7691", marginTop: 3 }}>
                      {p.tag}
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#6b7691",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {p.num}
                  </div>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div
                style={{
                  padding: "14px 0",
                  fontSize: 12,
                  color: "#6b7691",
                }}
              >
                No projects for this filter.
              </div>
            )}
          </div>
        </div>

        {/* Detail */}
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div style={LABEL}>
              {visibleActive.num} · {visibleActive.year} · {visibleActive.status}
            </div>
            {visibleActive.link && (
              <a
                href={`https://${visibleActive.link}`}
                target="_blank"
                rel="noreferrer"
                className="visit-pill"
                style={{
                  color: "#7de2ff",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 0.2,
                  border: "1px solid #7de2ff",
                  borderRadius: 999,
                  padding: "8px 16px",
                  background: "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                ↗ Visit {visibleActive.link}
              </a>
            )}
          </div>

          <h3
            className="m-0 text-[48px] sm:text-[56px] lg:text-[64px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.6,
              margin: "0 0 8px",
              lineHeight: 0.98,
            }}
          >
            {visibleActive.title}
          </h3>
          <div
            style={{ fontSize: 14, color: "#8892a9", marginBottom: 28 }}
          >
            {visibleActive.tag}
          </div>

          {/* Highlights + Stack */}
          <div
            className="grid gap-12 md:grid-cols-[1.4fr_1fr]"
            style={{
              paddingBottom: 36,
              marginBottom: 36,
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div>
              <div style={{ ...LABEL, marginBottom: 14 }}>Highlights</div>
              <ul className="m-0 flex list-none flex-col p-0">
                {visibleActive.highlights.map((h, i) => (
                  <li
                    key={h}
                    style={{
                      fontSize: 14,
                      color: "#b9c3d9",
                      lineHeight: 1.6,
                      padding: "10px 0",
                      borderBottom:
                        i < visibleActive.highlights.length - 1
                          ? "1px solid rgba(255,255,255,0.07)"
                          : "none",
                    }}
                  >
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ ...LABEL, marginBottom: 14 }}>Stack</div>
              <div className="flex flex-col gap-2">
                {visibleActive.stack.map((s) => (
                  <div key={s} style={{ fontSize: 13, color: "#b9c3d9" }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {(() => {
            const hasMedia =
              !!visibleActive.video ||
              (visibleActive.images && visibleActive.images.length > 0);
            const paragraphsBlock = (
              <div style={{ maxWidth: 640 }}>
                {visibleActive.paragraphs.map((paragraph, i) => (
                  <p
                    key={`${visibleActive.id}-${i}`}
                    style={{
                      fontSize: 16,
                      lineHeight: 1.7,
                      color: "#b9c3d9",
                      margin:
                        i === visibleActive.paragraphs.length - 1
                          ? 0
                          : "0 0 22px",
                    }}
                  >
                    {renderParagraph(paragraph, handleProjectLink)}
                  </p>
                ))}
              </div>
            );

            if (!hasMedia) return paragraphsBlock;

            return (
              <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                <div className="flex flex-col gap-4">
                  {visibleActive.video && (
                    <video
                      key={visibleActive.video.src}
                      controls
                      preload="metadata"
                      poster={visibleActive.video.poster}
                      aria-label={visibleActive.video.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 6,
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      <source src={visibleActive.video.src} type="video/mp4" />
                    </video>
                  )}
                  {visibleActive.images?.map((img) => (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: 6,
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    />
                  ))}
                </div>
                {paragraphsBlock}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

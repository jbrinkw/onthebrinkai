"use client";

import { useSearchParams } from "next/navigation";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  projectTagMap,
  projects,
  type ProjectId,
  type ProjectTag,
  type ReadMoreConfig,
} from "@/content/site";

const VALID_PROJECT_IDS = new Set<string>(projects.map((p) => p.id));

function resolveInitialProjectId(raw: string | null): ProjectId {
  if (raw && VALID_PROJECT_IDS.has(raw)) return raw as ProjectId;
  return "luna";
}

// useLayoutEffect runs synchronously after layout but before paint, which
// is what we need to apply the prose clamp without a single-frame flash of
// fully expanded content. Falls back to useEffect during SSR to silence
// the layout-effect warning.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type Filter = ProjectTag | "all";

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const COLOR = {
  fg: "#e8ecf4",
  fgSoft: "#b9c3d9",
  muted: "#6b7691",
  mutedSoft: "#8892a9",
  accent: "#7de2ff",
  hair: "rgba(255,255,255,0.07)",
} as const;

const LABEL: React.CSSProperties = {
  fontSize: 11,
  color: COLOR.muted,
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
  color: COLOR.accent,
  background: "transparent",
  border: "none",
  padding: 0,
  margin: 0,
  font: "inherit",
  cursor: "pointer",
  borderBottom: `1px solid ${COLOR.accent}40`,
};

const RULE_STYLE: React.CSSProperties = {
  height: 1,
  background: COLOR.hair,
  border: 0,
};

const READ_MORE_THRESHOLD = 12;
const READ_MORE_VISIBLE_LINES = 7;

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

function ProseBlock({
  paragraphs,
  onProjectLink,
  readMore,
  expanded,
  onExpandedChange,
}: {
  paragraphs: string[];
  onProjectLink: (id: ProjectId) => void;
  readMore?: ReadMoreConfig;
  expanded: boolean;
  onExpandedChange: (next: boolean) => void;
}) {
  const proseRef = useRef<HTMLDivElement>(null);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const [totalLines, setTotalLines] = useState(0);
  const [customClampHeight, setCustomClampHeight] = useState(0);
  // Start hidden if a clamp is configured — avoids flashing the fully
  // expanded prose for a frame before measurement settles. We reveal once
  // the layout effect has run.
  const [measured, setMeasured] = useState(readMore === false);

  useIsomorphicLayoutEffect(() => {
    const measure = () => {
      const el = proseRef.current;
      if (!el) return;
      const ps = el.querySelectorAll<HTMLParagraphElement>("p");
      if (!ps.length) return;
      const lh = parseFloat(getComputedStyle(ps[0]).lineHeight);
      if (!Number.isFinite(lh) || lh <= 0) return;
      setLineHeightPx(lh);
      setTotalLines(Math.round(el.scrollHeight / lh));

      if (readMore && typeof readMore === "object") {
        const { paragraph, line } = readMore;
        let h = 0;
        const limit = Math.min(paragraph - 1, ps.length);
        for (let i = 0; i < limit; i++) {
          const p = ps[i];
          h += p.offsetHeight;
          const mb = parseFloat(getComputedStyle(p).marginBottom);
          if (Number.isFinite(mb)) h += mb;
        }
        if (paragraph - 1 < ps.length) {
          h += line * lh;
        }
        setCustomClampHeight(h);
      } else {
        setCustomClampHeight(0);
      }
      setMeasured(true);
    };
    measure();
    // Re-measure after fonts load in case metrics shift.
    const t = window.setTimeout(measure, 120);
    return () => window.clearTimeout(t);
  }, [paragraphs, readMore]);

  // Resolve clamp behavior based on readMore config.
  let showButton = false;
  let clampMaxHeight: number | undefined;
  if (readMore === false) {
    showButton = false;
  } else if (readMore && typeof readMore === "object") {
    showButton = customClampHeight > 0;
    clampMaxHeight = customClampHeight || undefined;
  } else {
    showButton = totalLines > READ_MORE_THRESHOLD;
    clampMaxHeight =
      lineHeightPx > 0 ? lineHeightPx * READ_MORE_VISIBLE_LINES : undefined;
  }

  const isClamped = showButton && !expanded;

  return (
    <div style={{ visibility: measured ? "visible" : "hidden" }}>
      <div
        ref={proseRef}
        style={{
          maxHeight: isClamped ? clampMaxHeight : undefined,
          overflow: isClamped ? "hidden" : undefined,
          position: "relative",
        }}
      >
        {paragraphs.map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontSize: 15.5,
              lineHeight: 1.75,
              color: COLOR.fgSoft,
              letterSpacing: 0.05,
              margin: i === paragraphs.length - 1 ? 0 : "0 0 18px",
            }}
          >
            {renderParagraph(paragraph, onProjectLink)}
          </p>
        ))}
        {isClamped && (
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 64,
              background:
                "linear-gradient(to bottom, rgba(6,8,15,0) 0%, #06080f 90%)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      {showButton && (
        <button
          type="button"
          onClick={() => onExpandedChange(!expanded)}
          style={{
            marginTop: 16,
            background: "transparent",
            border: "none",
            padding: 0,
            color: COLOR.accent,
            fontSize: 13,
            fontWeight: 500,
            cursor: "pointer",
            letterSpacing: 0.3,
            borderBottom: `1px solid ${COLOR.accent}`,
            paddingBottom: 2,
          }}
        >
          {expanded ? "Read less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}

export function ProjectsBrowser() {
  const searchParams = useSearchParams();
  const [tag, setTag] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<ProjectId>(() =>
    resolveInitialProjectId(searchParams.get("p")),
  );

  // Keep the URL in sync with the active project so refresh and back/forward
  // navigation work as expected. Strips ?p when the default (luna) is active
  // so the canonical URL stays clean.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const urlP = url.searchParams.get("p");
    if (urlP === activeId) return;
    if (activeId === "luna") {
      url.searchParams.delete("p");
    } else {
      url.searchParams.set("p", activeId);
    }
    window.history.replaceState(null, "", url.toString());
  }, [activeId]);

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

  const handleProjectLink = useCallback(
    (id: ProjectId) => {
      if (tag !== "all" && !projectTagMap[id].includes(tag)) {
        setTag("all");
      }
      setActiveId(id);
    },
    [tag],
  );

  // Track prose expanded state at the parent so the media rail can render
  // expanded-only images alongside the prose. Keyed by project id so each
  // project keeps its own expanded state on revisit.
  const [expandedByProject, setExpandedByProject] = useState<
    Partial<Record<ProjectId, boolean>>
  >({});
  const proseExpanded = !!expandedByProject[visibleActive.id];
  const handleProseExpandedChange = useCallback(
    (next: boolean) => {
      setExpandedByProject((prev) => ({ ...prev, [visibleActive.id]: next }));
    },
    [visibleActive.id],
  );

  const expandedImages =
    proseExpanded && visibleActive.imagesExpanded
      ? visibleActive.imagesExpanded
      : [];
  const hasMedia =
    !!visibleActive.video ||
    (visibleActive.images && visibleActive.images.length > 0) ||
    (visibleActive.imagesExpanded &&
      visibleActive.imagesExpanded.length > 0);

  const prev = (() => {
    const idx = projects.findIndex((p) => p.id === visibleActive.id);
    return idx > 0 ? projects[idx - 1] : null;
  })();
  const next = (() => {
    const idx = projects.findIndex((p) => p.id === visibleActive.id);
    return idx >= 0 && idx < projects.length - 1 ? projects[idx + 1] : null;
  })();

  const proseBlock = (
    <ProseBlock
      key={visibleActive.id}
      paragraphs={visibleActive.paragraphs}
      onProjectLink={handleProjectLink}
      readMore={visibleActive.readMore}
      expanded={proseExpanded}
      onExpandedChange={handleProseExpandedChange}
    />
  );

  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 pb-20 pt-9 lg:px-14">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <div className="lg:sticky lg:top-6 lg:self-start">
          <div style={LABEL}>Projects · {projects.length}</div>
          <h2
            className="m-0"
            style={{
              ...SERIF,
              fontSize: 32,
              fontWeight: 400,
              letterSpacing: -0.8,
              lineHeight: 1,
              margin: "12px 0 22px",
            }}
          >
            Selected
            <br />
            <em style={{ color: COLOR.accent, fontStyle: "italic" }}>work.</em>
          </h2>

          <div className="mb-5 flex flex-wrap gap-3.5">
            {TAGS.map((t) => {
              const on = tag === t.value;
              return (
                <button
                  type="button"
                  key={t.value}
                  onClick={() => setTag(t.value)}
                  style={{
                    fontSize: 11,
                    color: on ? COLOR.accent : COLOR.muted,
                    fontWeight: on ? 500 : 400,
                    letterSpacing: 0.2,
                    textTransform: "lowercase",
                    borderBottom: on
                      ? `1px solid ${COLOR.accent}`
                      : "1px solid transparent",
                    paddingBottom: 2,
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.15s",
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
                    borderBottom: `1px solid ${COLOR.hair}`,
                    display: "grid",
                    gridTemplateColumns: "22px 1fr",
                    gap: 10,
                    alignItems: "baseline",
                    background: "transparent",
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: COLOR.muted,
                      fontVariantNumeric: "tabular-nums",
                      paddingTop: 4,
                    }}
                  >
                    {p.num}
                  </div>
                  <div>
                    <div
                      style={{
                        ...SERIF,
                        fontSize: 19,
                        color: on ? COLOR.accent : COLOR.fg,
                        letterSpacing: -0.2,
                        lineHeight: 1.15,
                        display: "inline-flex",
                        alignItems: "baseline",
                        gap: 8,
                      }}
                    >
                      {p.title}
                      {p.live && (
                        <span
                          style={{
                            fontFamily: "inherit",
                            fontSize: 9,
                            letterSpacing: 0.6,
                            color: "#8be9a7",
                            border: "1px solid rgba(139, 233, 167, 0.45)",
                            borderRadius: 999,
                            padding: "1px 6px",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            position: "relative",
                            top: -2,
                          }}
                        >
                          Live
                        </span>
                      )}
                      {p.wip && (
                        <span
                          style={{
                            fontFamily: "inherit",
                            fontSize: 9,
                            letterSpacing: 0.6,
                            color: "#f0b86b",
                            border: "1px solid rgba(240, 184, 107, 0.45)",
                            borderRadius: 999,
                            padding: "1px 6px",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            position: "relative",
                            top: -2,
                          }}
                        >
                          WIP
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: COLOR.muted,
                        marginTop: 3,
                      }}
                    >
                      {p.tag}
                    </div>
                  </div>
                </button>
              );
            })}
            {filtered.length === 0 && (
              <div
                style={{
                  padding: "14px 0",
                  fontSize: 12,
                  color: COLOR.muted,
                }}
              >
                No projects for this filter.
              </div>
            )}
          </div>
        </div>

        {/* Detail */}
        <div style={{ paddingBottom: 40 }}>
          {/* Meta row */}
          <div className="mb-3.5 flex flex-wrap items-center justify-between gap-4">
            <div
              style={{
                ...LABEL,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: COLOR.accent, fontWeight: 500 }}>
                {visibleActive.num}
              </span>
              <span>·</span>
              <span>{visibleActive.year}</span>
              <span>·</span>
              <span>{visibleActive.status}</span>
              {visibleActive.live && (
                <span
                  style={{
                    marginLeft: 4,
                    fontSize: 10,
                    letterSpacing: 0.8,
                    color: "#8be9a7",
                    border: "1px solid rgba(139, 233, 167, 0.45)",
                    borderRadius: 999,
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Live
                </span>
              )}
              {visibleActive.wip && (
                <span
                  style={{
                    marginLeft: 4,
                    fontSize: 10,
                    letterSpacing: 0.8,
                    color: "#f0b86b",
                    border: "1px solid rgba(240, 184, 107, 0.45)",
                    borderRadius: 999,
                    padding: "2px 8px",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  WIP
                </span>
              )}
            </div>
            {visibleActive.link && (
              <a
                href={`https://${visibleActive.link}`}
                target="_blank"
                rel="noreferrer"
                className="visit-pill"
                style={{
                  color: COLOR.accent,
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: 0.2,
                  border: `1px solid ${COLOR.accent}`,
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

          {/* Title + subtitle */}
          <h3
            className="m-0 text-[44px] sm:text-[52px] lg:text-[64px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.6,
              margin: "0 0 6px",
              lineHeight: 0.98,
            }}
          >
            {visibleActive.title}
          </h3>
          <div
            style={{
              ...SERIF,
              fontSize: 18,
              fontStyle: "italic",
              color: COLOR.mutedSoft,
              marginBottom: 28,
            }}
          >
            {visibleActive.tag}
          </div>

          <hr style={{ ...RULE_STYLE, margin: "0 0 32px" }} />

          {/* Body: prose + optional media rail on the right */}
          {hasMedia ? (
            <div
              className="grid gap-10 md:grid-cols-[1fr_240px]"
              style={{ marginBottom: 44 }}
            >
              {proseBlock}
              <div className="flex flex-col gap-3.5">
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
                      border: `1px solid ${COLOR.hair}`,
                      background: "#0c0f1a",
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
                      display: "block",
                      border: `1px solid ${COLOR.hair}`,
                      background: "#0c0f1a",
                    }}
                  />
                ))}
                {expandedImages.map((img) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      border: `1px solid ${COLOR.hair}`,
                      background: "#0c0f1a",
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div style={{ maxWidth: 640, marginBottom: 44 }}>{proseBlock}</div>
          )}

          <hr style={{ ...RULE_STYLE, margin: "0 0 32px" }} />

          {/* Highlights + Stack */}
          <div className="grid gap-14 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div style={{ ...LABEL, marginBottom: 14 }}>Highlights</div>
              <ul className="m-0 flex list-none flex-col p-0">
                {visibleActive.highlights.map((h, i) => (
                  <li
                    key={h}
                    style={{
                      fontSize: 13.5,
                      color: COLOR.fgSoft,
                      lineHeight: 1.6,
                      padding: "12px 0",
                      borderBottom:
                        i < visibleActive.highlights.length - 1
                          ? `1px solid ${COLOR.hair}`
                          : "none",
                      display: "grid",
                      gridTemplateColumns: "24px 1fr",
                      gap: 8,
                      alignItems: "baseline",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 11,
                        color: COLOR.muted,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{renderParagraph(h, handleProjectLink)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ ...LABEL, marginBottom: 14 }}>Stack</div>
              <div className="flex flex-col gap-[9px]">
                {visibleActive.stack.map((s) => (
                  <div
                    key={s}
                    style={{
                      fontSize: 13,
                      color: COLOR.fgSoft,
                      padding: "4px 0",
                      borderBottom: `1px solid ${COLOR.hair}`,
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Prev / Next */}
          <div
            className="mt-10 grid grid-cols-2 gap-6"
            style={{
              paddingTop: 24,
              borderTop: `1px solid ${COLOR.hair}`,
            }}
          >
            <div>
              {prev && (
                <button
                  type="button"
                  onClick={() => setActiveId(prev.id)}
                  className="text-left"
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ ...LABEL, marginBottom: 4 }}>
                    ← Previous · {prev.num}
                  </div>
                  <div
                    style={{
                      ...SERIF,
                      fontSize: 22,
                      color: COLOR.fg,
                      letterSpacing: -0.3,
                    }}
                  >
                    {prev.title}
                  </div>
                </button>
              )}
            </div>
            <div style={{ textAlign: "right" }}>
              {next && (
                <button
                  type="button"
                  onClick={() => setActiveId(next.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "right",
                  }}
                >
                  <div style={{ ...LABEL, marginBottom: 4 }}>
                    Next · {next.num} →
                  </div>
                  <div
                    style={{
                      ...SERIF,
                      fontSize: 22,
                      color: COLOR.fg,
                      letterSpacing: -0.3,
                    }}
                  >
                    {next.title}
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

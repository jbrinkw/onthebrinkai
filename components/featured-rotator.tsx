"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/content/site";

type FeaturedRotatorProps = {
  items: Project[];
  intervalMs?: number;
};

export function FeaturedRotator({
  items,
  intervalMs = 4500,
}: FeaturedRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);

  const feat = items[index] ?? items[0];
  if (!feat) return null;

  return (
    <div className="flex flex-col gap-3.5">
      <div
        className="uppercase"
        style={{
          fontFamily: "var(--font-mono-jetbrains), monospace",
          fontSize: 11,
          color: "#6b7691",
          letterSpacing: 2,
        }}
      >
        ◦ now · live rotation
      </div>
      <div
        className="relative"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: 28,
          background: "rgba(255,255,255,0.02)",
          minHeight: 320,
        }}
      >
        <div className="mb-[18px] flex items-baseline justify-between">
          <div
            style={{
              fontFamily: "var(--font-mono-jetbrains), monospace",
              fontSize: 11,
              color: "#7de2ff",
              letterSpacing: 1.5,
            }}
          >
            FEATURED / {feat.num}
          </div>
          <div className="flex gap-[5px]" aria-hidden>
            {items.map((_, i) => (
              <div
                key={i}
                style={{
                  width: 18,
                  height: 2,
                  background:
                    i === index ? "#7de2ff" : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif-instrument), serif",
            fontSize: 38,
            lineHeight: 1,
            marginBottom: 8,
          }}
        >
          {feat.title}
        </div>
        <div
          style={{
            fontSize: 13,
            color: "#8892a9",
            marginBottom: 16,
            fontStyle: "italic",
          }}
        >
          {feat.tag}
        </div>
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            color: "#c3cde0",
            margin: "0 0 22px",
          }}
        >
          {feat.summary}
        </p>
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: `repeat(${Math.min(
              feat.metrics.length,
              4,
            )}, minmax(0, 1fr))`,
            marginBottom: 22,
          }}
        >
          {feat.metrics.slice(0, 4).map(([v, l]) => (
            <div key={l}>
              <div
                style={{
                  fontFamily: "var(--font-serif-instrument), serif",
                  fontSize: 26,
                  color: "#7de2ff",
                }}
              >
                {v}
              </div>
              <div
                className="uppercase"
                style={{
                  fontFamily: "var(--font-mono-jetbrains), monospace",
                  fontSize: 9.5,
                  color: "#6b7691",
                  letterSpacing: 1,
                }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/portfolio"
          style={{
            fontFamily: "var(--font-mono-jetbrains), monospace",
            fontSize: 11,
            color: "#7de2ff",
            letterSpacing: 1.2,
          }}
        >
          OPEN CASE STUDY →
        </Link>
      </div>
    </div>
  );
}

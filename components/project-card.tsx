 "use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    title,
    intro,
    introLabel,
    summary,
    summaryLabel,
    features,
    featuresLabel,
    results,
    resultsLabel,
    stack,
    images,
    link,
  } = project;

  const safeImages = useMemo(() => images ?? [], [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeImage =
    safeImages.length > 0
      ? safeImages[activeIndex % safeImages.length]
      : null;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Reset loading state when switching images so the skeleton shows only until the new image is ready.
    setImageLoaded(false);
  }, [activeIndex, activeImage?.src]);

  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-cyan-500/5 ring-1 ring-white/5 backdrop-blur lg:p-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold text-white">{title}</h3>
          {link && (
            <Link
              href={link.href}
              className="text-sm font-semibold text-cyan-300 underline underline-offset-4 hover:text-cyan-200"
              target="_blank"
            >
              {link.label}
            </Link>
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-slate-200 lg:max-w-4xl">
            {summary && (
              <div className="space-y-2">
                {summaryLabel && (
                  <p className="text-sm font-semibold text-cyan-300">
                    {summaryLabel}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-slate-200">
                  {summary}
                </p>
              </div>
            )}

            {intro && (
              <div className="space-y-2">
                {introLabel && (
                  <p className="text-sm font-semibold text-cyan-300">
                    {introLabel}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-slate-200">
                  {intro}
                </p>
              </div>
            )}

            {features && features.length > 0 && (
              <div className="space-y-2">
                {featuresLabel && (
                  <p className="text-sm font-semibold text-cyan-300">
                    {featuresLabel}
                  </p>
                )}
                <ul className="space-y-2 text-sm text-slate-200">
                  {features.map((feature) => (
                    <li key={feature} className="leading-relaxed">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {results && results.length > 0 && (
              <div className="space-y-2">
                {resultsLabel && (
                  <p className="text-sm font-semibold text-cyan-300">
                    {resultsLabel}
                  </p>
                )}
                <ul className="space-y-2 text-sm text-slate-200">
                  {results.map((result) => (
                    <li key={result} className="leading-relaxed">
                      • {result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {stack && stack.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-semibold text-cyan-300">Stack:</p>
                <ul className="space-y-2 text-sm text-slate-200">
                  {stack.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {safeImages.length > 0 && (
          <div className="space-y-3">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-lg shadow-cyan-500/10">
              {mounted && activeImage && (
                <>
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    width={1280}
                    height={720}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                    priority={activeIndex === 0}
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    placeholder="empty"
                    onLoadingComplete={() => setImageLoaded(true)}
                  />
                  {!imageLoaded && (
                    <div
                      className="absolute inset-0 bg-slate-900/80 animate-pulse"
                      aria-hidden
                    />
                  )}
                </>
              )}
              {!mounted && (
                <div className="absolute inset-0 bg-slate-900/80 animate-pulse" aria-hidden />
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-3 text-xs font-semibold uppercase tracking-wide text-slate-100">
                {activeImage?.alt ?? title}
              </div>
            </div>
            {safeImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {safeImages.map((img, idx) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl border transition ${
                      idx === activeIndex
                        ? "border-cyan-400 ring-1 ring-cyan-400/60"
                        : "border-white/10 hover:border-cyan-200/60"
                    }`}
                    aria-label={`Show ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          )}
        </div>
      </div>
    </article>
  );
}


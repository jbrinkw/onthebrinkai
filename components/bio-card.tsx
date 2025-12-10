import Image from "next/image";
import Link from "next/link";
import { biography } from "@/content/site";

export function BioCard() {
  const { heading, title, body, image, ctaHref, ctaLabel } = biography;

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-black p-6 shadow-lg shadow-cyan-500/10 ring-1 ring-white/5 sm:p-8 lg:p-10">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-[140px] sm:max-w-[180px]">
            <div className="absolute inset-0 -z-10 rotate-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/10 blur-lg" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-lg shadow-black/30">
              <Image
                src={image.src}
                alt={image.alt}
                width={220}
                height={220}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:col-span-7">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            {heading}
          </span>
          <h3 className="text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h3>
          <div className="space-y-3 text-sm leading-relaxed text-slate-200">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div>
            <Link
              href={ctaHref}
              className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 underline underline-offset-2"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


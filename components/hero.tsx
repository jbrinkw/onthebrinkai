import Image from "next/image";
import Link from "next/link";
import { heroContent } from "@/content/site";

export function Hero() {
  const { title, intro, ctaHref, ctaLabel, images } = heroContent;
  const collage = images.slice(0, 7);
  const positions = [
    { top: "4%", left: "10%", size: "120px" },
    { top: "0%", left: "50%", size: "150px" },
    { top: "14%", left: "76%", size: "110px" },
    { top: "34%", left: "80%", size: "130px" },
    { top: "40%", left: "12%", size: "130px" },
    { top: "58%", left: "56%", size: "150px" },
    { top: "56%", left: "30%", size: "140px" },
  ];

  return (
    <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0f1f] via-slate-900/80 to-black p-6 shadow-xl ring-1 ring-cyan-500/10 sm:p-6 lg:p-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(126,220,255,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(147,112,255,0.18),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative h-[320px] w-full max-w-5xl mx-auto">
        {collage.map((img, idx) => {
          const pos = positions[idx] ?? positions[positions.length - 1];
          return (
            <div
              key={img.src}
              className="absolute overflow-hidden rounded-2xl border border-white/10 shadow-lg shadow-black/30"
              style={{
                top: pos.top,
                left: pos.left,
                width: pos.size,
                height: pos.size,
                transform: "translate(-10%, -10%)",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          );
        })}

        <div className="absolute left-1/2 top-1/2 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-2xl bg-black/55 px-5 py-4 text-center shadow-inner shadow-black/30 ring-1 ring-white/10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Welcome
          </span>
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[46px]">
            {title}
          </h1>
          <p className="text-base text-slate-200">{intro}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-1px] hover:bg-cyan-300"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}


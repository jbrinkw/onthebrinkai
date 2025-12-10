import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col leading-tight">
          <Link
            href="/"
            className="text-sm font-semibold text-white hover:underline underline-offset-2"
          >
            OnTheBrinkAI
          </Link>
          <span className="text-xs text-slate-400">
            Jeremy Brinkworth&apos;s Portfolio
          </span>
        </div>
        <a
          href="mailto:jeremy@onthebrink.ai"
          className="text-sm text-cyan-300 hover:text-cyan-200 underline underline-offset-2"
        >
          jeremy@onthebrink.ai
        </a>
      </div>
    </footer>
  );
}


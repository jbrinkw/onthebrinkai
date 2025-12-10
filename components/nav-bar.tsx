import Link from "next/link";
import { navLinks } from "@/content/site";

export function NavBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
            OnTheBrinkAI
          </span>
          <span className="text-xs text-slate-400">
            Jeremy Brinkworth&apos;s Portfolio
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 text-slate-200 transition-colors hover:bg-white/10 hover:text-white hover:underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-slate-100">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="text-sm text-slate-300">
          The page you are looking for does not exist. Head back to the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-1px] hover:bg-cyan-300 underline underline-offset-2"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}


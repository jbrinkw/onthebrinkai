import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center px-6 text-center"
      style={{ color: "#e6ecf7" }}
    >
      <div className="max-w-md space-y-4">
        <div
          className="uppercase"
          style={{
            fontFamily: "var(--font-mono-jetbrains), monospace",
            fontSize: 11,
            color: "#7de2ff",
            letterSpacing: 2,
          }}
        >
          ◦ 404 · not found
        </div>
        <h1
          className="m-0"
          style={{
            fontFamily: "var(--font-serif-instrument), serif",
            fontWeight: 400,
            fontSize: 56,
            lineHeight: 0.95,
            letterSpacing: -1,
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontSize: 14,
            lineHeight: 1.6,
            color: "#b9c3d9",
          }}
        >
          The page you are looking for does not exist. Head back to the
          homepage.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center"
          style={{
            background: "#7de2ff",
            color: "#06080f",
            padding: "12px 22px",
            borderRadius: 999,
            fontFamily: "var(--font-mono-jetbrains), monospace",
            fontWeight: 600,
            fontSize: 13,
            letterSpacing: 1,
          }}
        >
          ← GO HOME
        </Link>
      </div>
    </div>
  );
}

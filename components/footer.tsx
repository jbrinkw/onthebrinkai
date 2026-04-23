export function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        fontFamily: "var(--font-mono-jetbrains), monospace",
        fontSize: 11,
        color: "#6b7691",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-11">
        <div>JB / 2026 · built solo</div>
        <div>lunahub.dev · github.com/jbrinkw · charlotte, nc</div>
      </div>
    </footer>
  );
}

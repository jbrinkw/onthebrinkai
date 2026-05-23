export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="mt-auto"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        fontSize: 12,
        color: "#6b7691",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-14">
        <div>© {year} - Jeremy Brinkworth</div>
        <div>github.com/jbrinkw · lunahub.dev</div>
      </div>
    </footer>
  );
}

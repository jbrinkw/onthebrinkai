"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/portfolio" },
  { label: "ABOUT", href: "/about" },
  { label: "RESUME", href: "/resume" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavBar() {
  const pathname = usePathname() ?? "/";

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(6,8,15,0.7)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-5 lg:flex-nowrap lg:px-11">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3.5 transition-opacity hover:opacity-90"
        >
          <div
            className="grid place-items-center text-[13px]"
            style={{
              width: 28,
              height: 28,
              borderRadius: 6,
              border: "1px solid rgba(125,226,255,0.4)",
              fontFamily: "var(--font-mono-jetbrains), monospace",
              color: "#7de2ff",
              background:
                "radial-gradient(circle, rgba(125,226,255,0.15), transparent)",
            }}
            aria-hidden
          >
            ◆
          </div>
          <div className="leading-tight">
            <div
              className="text-[20px]"
              style={{
                fontFamily: "var(--font-serif-instrument), serif",
                letterSpacing: -0.2,
              }}
            >
              onthebrink<span style={{ color: "#7de2ff" }}>.ai</span>
            </div>
            <div
              className="text-[10.5px] uppercase"
              style={{
                fontFamily: "var(--font-mono-jetbrains), monospace",
                color: "#7de2ff",
                letterSpacing: 1.4,
              }}
            >
              Jeremy Brinkworth · Portfolio
            </div>
          </div>
        </Link>

        {/* Center nav pills */}
        <nav
          className="order-last flex w-full flex-wrap items-center justify-center gap-1 lg:order-none lg:w-auto"
          style={{
            fontFamily: "var(--font-mono-jetbrains), monospace",
            fontSize: 12,
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="transition-colors"
                style={{
                  padding: "8px 14px",
                  borderRadius: 999,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  color: active ? "#06080f" : "#a6b2c9",
                  background: active ? "#7de2ff" : "transparent",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: cmd-k + availability */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Command palette (coming soon)"
            className="hidden sm:inline-flex"
            style={{
              fontFamily: "var(--font-mono-jetbrains), monospace",
              fontSize: 11,
              color: "#6b7691",
              padding: "6px 10px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 6,
              background: "transparent",
              cursor: "pointer",
            }}
          >
            ⌘K
          </button>
          <div
            className="inline-flex items-center gap-2"
            style={{
              fontFamily: "var(--font-mono-jetbrains), monospace",
              fontSize: 11,
              color: "#9fe4b8",
              padding: "6px 12px",
              borderRadius: 999,
              border: "1px solid rgba(159,228,184,0.25)",
              background: "rgba(159,228,184,0.06)",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#8be9a7",
                boxShadow: "0 0 8px #8be9a7",
              }}
              aria-hidden
            />
            Available
          </div>
        </div>
      </div>
    </header>
  );
}

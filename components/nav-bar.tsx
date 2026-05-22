"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Résumé", href: "/resume" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavBar() {
  const pathname = usePathname() ?? "/";

  return (
    <header
      className="sticky top-0 z-40"
      style={{
        background: "#06080f",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1080px] items-baseline justify-between gap-6 px-6 py-6 lg:px-14">
        <Link
          href="/"
          className="transition-opacity hover:opacity-90"
          style={{
            fontSize: 14,
            letterSpacing: -0.2,
            color: "#e8ecf4",
            fontWeight: 500,
          }}
        >
          onthebrink<span style={{ color: "#7de2ff" }}>.ai</span>
          <span style={{ color: "#6b7691", marginLeft: 6, fontWeight: 400 }}>
 - Jeremy Brinkworth
          </span>
        </Link>

        <nav
          className="flex items-baseline gap-7"
          style={{ fontSize: 13 }}
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
                  color: active ? "#7de2ff" : "#8892a9",
                  fontWeight: active ? 500 : 400,
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

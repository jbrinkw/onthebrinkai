import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const interTight = Inter_Tight({
  variable: "--font-sans-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-instrument",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Jeremy Brinkworth",
  description:
    "Production AI, end-to-end — Jeremy Brinkworth's portfolio. MCP servers, agent runtimes, edge hardware, embedded firmware.",
  metadataBase: new URL("https://www.onthebrink.ai"),
  alternates: {
    canonical: "https://www.onthebrink.ai",
  },
  openGraph: {
    title: "OnTheBrinkAI | Jeremy Brinkworth",
    description:
      "AI systems engineer — Luna Hub, ChefByte, CoachByte, ContinuousRocket. Production AI, end-to-end.",
    url: "https://www.onthebrink.ai",
    siteName: "OnTheBrinkAI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} min-h-screen overflow-x-hidden`}
        style={{ backgroundColor: "#06080f", color: "#e6ecf7" }}
      >
        <div className="grain-overlay" aria-hidden />
        <div className="relative flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

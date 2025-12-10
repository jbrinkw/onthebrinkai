import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Jeremy Brinkworth",
  description:
    "Designing tomorrow's world — Jeremy Brinkworth's AI portfolio featuring projects, résumé, and contact links.",
  metadataBase: new URL("https://www.onthebrink.ai"),
  alternates: {
    canonical: "https://www.onthebrink.ai",
  },
  openGraph: {
    title: "OnTheBrinkAI | Jeremy Brinkworth",
    description:
      "AI portfolio showcasing Luna Hub, AgentSim, ChefByte, and research experiments.",
    url: "https://www.onthebrink.ai",
    siteName: "OnTheBrinkAI",
    type: "website",
    images: [
      {
        url: "/assets/hero-sphere.jpg",
        width: 1200,
        height: 630,
        alt: "Jeremy Brinkworth AI portfolio hero graphic",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-slate-950 text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(126,220,255,0.12),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(157,122,255,0.15),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_35%)]" />
          <NavBar />
          <main className="pb-16 pt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

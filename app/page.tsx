import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { featuredProject, biography } from "@/content/site";
import { BioCard } from "@/components/bio-card";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Home",
  description:
    "Portfolio of Jeremy Brinkworth – featured AI projects, biography, and links.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="mx-auto max-w-6xl px-6">
        <Hero />
      </div>

      <Section kicker={featuredProject.heading} title={featuredProject.title}>
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-cyan-500/5 ring-1 ring-white/5 backdrop-blur md:grid-cols-12 md:p-10">
          <div className="md:col-span-7">
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
              {featuredProject.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 md:col-span-5 md:items-end md:text-right">
            <div className="rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 p-4 text-sm text-slate-100 ring-1 ring-white/10">
              A LangChain-powered assistant that automates planning, shopping,
              and delivery with cloud + local inference.
            </div>
            <Link
              href={featuredProject.ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/30 transition hover:translate-y-[-1px] hover:bg-cyan-300"
            >
              {featuredProject.ctaLabel}
            </Link>
          </div>
        </div>
      </Section>

      <Section kicker={biography.heading} title="Biography">
        <BioCard />
      </Section>
    </div>
  );
}

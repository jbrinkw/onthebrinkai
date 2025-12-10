import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/section";
import { about } from "@/content/site";
import { LinkList } from "@/components/link-list";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | About",
  description:
    "About Jeremy Brinkworth — links, background, and contact information.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section title={about.title}>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7 space-y-6">
            <LinkList links={about.links} />
            <div className="space-y-4 text-sm leading-relaxed text-slate-200">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <Link
              href="/resume"
              className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20 underline underline-offset-2"
            >
              Résumé
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-4">
              {about.images.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 240px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


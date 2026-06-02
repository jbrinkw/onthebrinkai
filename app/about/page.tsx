import type { Metadata } from "next";
import Image from "next/image";
import { OutsideWorkGallery } from "@/components/outside-work-gallery";
import { person } from "@/content/site";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | About",
  description:
    "About Jeremy Brinkworth, AI engineer building lunahub.dev, with recent contract work leading agentic systems. Marine Corps reservist, Charlotte NC.",
  alternates: { canonical: "/about" },
};

const SERIF: React.CSSProperties = {
  fontFamily: "var(--font-serif-instrument), serif",
};

const LABEL: React.CSSProperties = {
  fontSize: 11,
  color: "#6b7691",
  letterSpacing: 0.5,
  fontWeight: 500,
};

export default function AboutPage() {
  const linkedinHandle =
    person.linkedin.split("/").filter(Boolean).slice(-1)[0] ?? person.linkedin;

  const contactRows: { key: string; value: string; href: string }[] = [
    { key: "GitHub", value: person.github, href: `https://${person.github}` },
    {
      key: "LinkedIn",
      value: linkedinHandle,
      href: `https://${person.linkedin}`,
    },
    {
      key: "Email",
      value: person.email,
      href: `mailto:${person.email}`,
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1080px] px-6 pb-20 pt-12 lg:px-14">
      {/* Intro + portrait */}
      <div className="mb-16 grid gap-14 lg:grid-cols-[1fr_320px]">
        <div>
          <div style={LABEL}>About</div>
          <h2
            className="m-0 text-[40px] sm:text-[48px] lg:text-[56px]"
            style={{
              ...SERIF,
              fontWeight: 400,
              letterSpacing: -1.4,
              lineHeight: 1,
              margin: "14px 0 32px",
            }}
          >
            Engineer, <em style={{ fontStyle: "italic", color: "#7de2ff" }}>Marine,</em> builder.
          </h2>

          <div className="flex max-w-[560px] flex-col gap-[18px]">
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              Hi! My name is Jeremy Brinkworth. I have been focused on working
              in the AI industry since I was in high school. I believe AI has
              the potential to either drastically improve the world or amplify
              our problems tenfold. My goal is to be a driving force in
              ensuring AI development aligns with humanity&apos;s best
              interests, pushing it toward solutions that benefit everyone.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              Professionally I&apos;ve done contract work as a lead AI
              engineer. Most recently that was designing an agentic SQL Server
              → PostgreSQL migration system on Amazon Bedrock.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              On my own I&apos;m building{" "}
              <a
                href="https://lunahub.dev"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#7de2ff",
                  borderBottom: "1px solid rgba(125,226,255,0.4)",
                  paddingBottom: 1,
                }}
              >
                lunahub.dev
              </a>
              , a pursuit of AI tools that reduce the overhead of maintaining
              a healthy life.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "#b9c3d9",
              }}
            >
              In my personal time I enjoy sports like mountain biking,
              skydiving and ultra-endurance races. I also have spent a
              considerable amount time building out my home
              engineering lab. I&apos;ve used it for a handful of small
              robotics projects, custom built RC planes and drones.
            </p>
          </div>
        </div>

        <div>
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "4 / 5",
              background: "#0c0f1a",
            }}
          >
            <Image
              src="/assets/bio-headshot.png"
              alt={`${person.name} portrait`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 320px"
              style={{
                objectFit: "cover",
                filter: "saturate(0.85) contrast(1.02)",
              }}
            />
          </div>
          <div
            className="mt-3.5 flex justify-between"
            style={{ fontSize: 12, color: "#6b7691" }}
          >
            <span>{person.name}</span>
            <span>{person.location}</span>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: 1,
          background: "rgba(255,255,255,0.07)",
          border: 0,
          margin: "40px 0",
        }}
      />

      {/* Outside of work */}
      <div className="mb-12">
        <div style={{ ...LABEL, marginBottom: 18 }}>Outside of work</div>
        <OutsideWorkGallery
          photos={[
            {
              src: "/assets/about-skydive.jpg",
              alt: "Tandem skydive in formation",
            },
            {
              src: "/assets/about-snow-ride.jpg",
              alt: "Motorcycle in heavy snow with dog",
            },
            {
              src: "/assets/about-dog.jpg",
              alt: "Dog on the beach",
            },
            {
              src: "/assets/about-moto.jpg",
              alt: "Sport motorcycle in parking lot",
            },
            {
              src: "/assets/about-m8.jpg",
              alt: "BMW M8 at autocross",
            },
            {
              src: "/assets/about-drone.jpg",
              alt: "Custom-built FPV drone with 3D-printed propellers on the workbench",
            },
            {
              src: "/assets/about-welding.jpg",
              alt: "Welding in the home shop",
            },
          ]}
        />
      </div>

      <hr
        style={{
          height: 1,
          background: "rgba(255,255,255,0.07)",
          border: 0,
          margin: "40px 0",
        }}
      />

      {/* Contact */}
      <div className="grid gap-12 lg:grid-cols-[180px_1fr]">
        <div style={LABEL}>Contact</div>
        <div className="flex flex-col">
          {contactRows.map((c, i) => (
            <a
              key={c.key}
              href={c.href}
              target={c.key === "Email" ? undefined : "_blank"}
              rel={c.key === "Email" ? undefined : "noreferrer"}
              className="contact-row flex items-baseline justify-between"
              style={{
                padding: "16px 0",
                borderBottom:
                  i < contactRows.length - 1
                    ? "1px solid rgba(255,255,255,0.07)"
                    : "none",
              }}
            >
              <span style={{ fontSize: 13, color: "#6b7691" }}>{c.key}</span>
              <span
                className="contact-value"
                style={{
                  fontSize: 14,
                  color: "#e8ecf4",
                  transition: "color 0.15s",
                }}
              >
                {c.value} ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

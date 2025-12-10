import type { Metadata } from "next";
import { Section } from "@/components/section";
import { portfolioIntro, projects } from "@/content/site";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Projects",
  description:
    "Projects by Jeremy Brinkworth, including Luna Hub, AgentSim, ChefByte, and LLM experiments.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <Section title={portfolioIntro.title} compact>
        <p className="max-w-3xl text-base text-slate-200">
          {portfolioIntro.description}
        </p>
      </Section>

      <div className="space-y-6 sm:space-y-8">
        {projects.map((project) => (
          <Section key={project.title} compact>
            <ProjectCard project={project} />
          </Section>
        ))}
      </div>
    </div>
  );
}


import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsBrowser } from "@/components/projects-browser";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Projects",
  description:
    "Selected work: LunaHub, ChefByte, CoachByte, ContinuousSteve, LiveNPC, Open Ethos, an LLM floor-plan experiment, and a 2018 self-driving go-kart.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={null}>
      <ProjectsBrowser />
    </Suspense>
  );
}

import type { Metadata } from "next";
import { ProjectsBrowser } from "@/components/projects-browser";

export const metadata: Metadata = {
  title: "OnTheBrinkAI | Projects",
  description:
    "Selected work — Luna Hub, ChefByte, CoachByte, ContinuousRocket, Live NPC, and a 2021 LLM floorplan experiment. Case studies with live links and stack details.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <ProjectsBrowser />;
}

export const navLinks = [
  { label: "Projects", href: "/portfolio" },
  { label: "Résumé", href: "/resume" },
  { label: "About Me & Links", href: "/about" },
];

export const heroContent = {
  title: "AI Systems Engineer",
  intro:
    "Shipping production AI end-to-end — MCP servers, agent orchestration, edge hardware, and embedded firmware.",
  ctaLabel: "Explore More",
  ctaHref: "/portfolio",
  images: [
    { src: "/assets/hero-tablet.jpg", alt: "Using a Tablet" },
    { src: "/assets/hero-dots-small.jpg", alt: "Dots on Circles" },
    { src: "/assets/hero-chip.jpg", alt: "Computer chip" },
    { src: "/assets/hero-rings.jpg", alt: "Digital rings" },
    { src: "/assets/hero-sphere.jpg", alt: "Abstract sphere" },
    { src: "/assets/hero-disintegrating.jpg", alt: "Disintegrating sphere" },
    { src: "/assets/hero-morphing.jpg", alt: "Morphing shape" },
    { src: "/assets/hero-dots-large.jpg", alt: "Dots on circles" },
  ],
};

export const featuredProject = {
  heading: "Featured Project",
  title: "Luna Hub: Personal Automation Platform",
  bullets: [
    "Production-deployed at lunahub.dev — three apps (Hub, ChefByte, CoachByte) unified behind a single agent endpoint I use every day",
    "Cloudflare Workers MCP server at mcp.lunahub.dev exposes 65 tools across 5 extensions — Obsidian, Todoist, Home Assistant, ChefByte, CoachByte — over Streamable HTTP + SSE",
    "OpenAI-compatible /v1/chat/completions endpoint with tool-call streaming and multi-round agent orchestration — any OpenAI-SDK client becomes a LunaHub agent",
    "Nightly Morning Review agent reconciles a tiered Obsidian goal stack with Todoist execution — the loop between intent and action closes automatically",
    "OAuth 2.1 + hashed API-key auth, Supabase Realtime across 31 tables, and a non-blocking observability layer that captures every tool call for eval",
  ],
  ctaLabel: "See how it's built",
  ctaHref: "/portfolio",
};

export const biography = {
  heading: "Biography",
  title: "Get to Know Me",
  body: [
    "Lead AI Engineer at RevUp AI, building agentic SQL migration systems and QA codegen pipelines on Amazon Bedrock. On the side I design and operate the Luna AI Platform (lunahub.dev) — a production MCP server, agent runtime, and three-app frontend I use every day. Based in Charlotte, NC; finishing an M.S. in Computer Science at WGU (expected May 2026).",
    "My interest in AI started in high school with GANs and AlphaZero, and my long-term goal is to contribute to alignment research — the work that decides whether advanced AI ends up a force multiplier for humanity or a failure mode. I also serve as a Corporal (E-4) Data Systems Administrator in the U.S. Marine Corps Reserve and hold an active SECRET clearance.",
  ],
  image: { src: "/assets/bio-headshot.png", alt: "Jeremy Brinkworth headshot" },
  ctaLabel: "Read More",
  ctaHref: "/about",
};

export const portfolioIntro = {
  title: "Projects",
  description:
    "Selected AI systems work: Luna Hub (personal automation platform), ChefByte (agent-native food inventory), CoachByte (serverless workout tracker), ContinuousRocket (hierarchical Minecraft agent research), Live NPC, and an LLM-based floorplan generator.",
};

export type Project = {
  title: string;
  introLabel?: string;
  intro?: string;
  summaryLabel?: string;
  summary?: string;
  featuresLabel?: string;
  features?: string[];
  resultsLabel?: string;
  results?: string[];
  stack?: string[];
  images: { src: string; alt: string }[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Luna Hub: Personal Automation Platform",
    introLabel: "What it is:",
    intro:
      "A production-deployed personal AI platform running at lunahub.dev that Jeremy uses daily. Three apps (Hub, ChefByte, CoachByte) sit behind a single agent endpoint connected to Obsidian notes, Todoist tasks, Home Assistant smart home, and more. You talk to it; it handles the rest.",
    summaryLabel: "How it works:",
    summary:
      "A Cloudflare Workers MCP server at mcp.lunahub.dev exposes 65 tools across 5 namespaced extensions (OBSIDIAN_*, TODOIST_*, HOMEASSISTANT_*, CHEFBYTE_*, COACHBYTE_*) over Streamable HTTP + SSE, secured with OAuth 2.1 via Supabase and hashed API-key auth. An OpenAI-compatible /v1/chat/completions endpoint supports tool-call streaming and multi-round agent orchestration, so any OpenAI-SDK client acts as a LunaHub agent. The frontend is a three-app React SPA backed by Supabase (31 tables), Cloudflare Workers, and Vercel. A nightly Morning Review agent reconciles the Obsidian goal stack with Todoist execution.",
    featuresLabel: "Features:",
    features: [
      "65 MCP tools across 5 namespaced extensions (OBSIDIAN_*, TODOIST_*, HOMEASSISTANT_*, CHEFBYTE_*, COACHBYTE_*) served over Streamable HTTP + SSE",
      "OpenAI-compatible /v1/chat/completions endpoint with tool-call streaming and multi-round agent orchestration",
      "OAuth 2.1 via Supabase and hashed API-key auth on the same endpoint",
      "Non-blocking observability layer captures every tool call (args, result, latency) for eval and debugging",
      "Supabase Realtime drives cross-device state for timers, plans, and macros across 31 tables",
      "Obsidian extension backed by the GitHub Contents API — project / date-range / patch tools over a tiered goal vault",
      "Nightly Morning Review agent reconciles yesterday's Todoist completions against commitments and produces the next-day plan",
    ],
    stack: [
      "Data: Supabase (Postgres, Auth, Realtime, Storage, Edge Functions) — 31 tables, schema-per-module (hub, coachbyte, chefbyte, private)",
      "Edge: Cloudflare Workers MCP server with Streamable HTTP + SSE, OAuth 2.1",
      "Frontend: React 18 + TypeScript, Vite 6, TanStack Query v5, Tailwind v4",
      "Monorepo: pnpm workspaces + Turborepo, deployed to Vercel",
    ],
    link: {
      label: "→ lunahub.dev — live platform",
      href: "https://lunahub.dev",
    },
    images: [
      { src: "/assets/luna/home.png", alt: "Luna Hub home" },
    ],
  },
  {
    title: "ChefByte: Agent-Native Food Management",
    introLabel: "What it is:",
    intro:
      "Most food inventory apps die the moment the user stops updating them — ChefByte removes the human from the loop entirely. Load cells under each shelf weigh items automatically, a vision-language model identifies what changed, and when stock runs low an agent adds items to the Walmart cart and has them delivered straight into the fridge.",
    summaryLabel: "How it works:",
    summary:
      "A Raspberry Pi acts as a cloud edge processor, not a standalone app — it pushes only event decisions (product_id + delta_g) to Supabase, never frames. Weight-change events from ESP8266-driven load cells trigger image capture, and a VLM diffs before/after shelf images to report semantic changes (items added or removed) without a custom CV model. One products catalog and one inventory live in Supabase; the Pi caches only the slice its classifier needs. Three shelf kinds share one schema: live shelf (multi-cell scale with camera), catch-all scale, and single-item scale. The vision capture pipeline was tuned from 0.5 fps / 72% CPU → 10 fps / 36% CPU.",
    featuresLabel: "Features:",
    features: [
      "28 MCP tools let AI agents manage inventory end-to-end: meal planning, shopping-list reconciliation, and Walmart cart deep-link checkout",
      "Passive Wi-Fi scale inventory — weight-change events trigger updates with no barcode scanning and no user input",
      "VLM change-detection: weight events trigger image capture; a vision-language model diffs before/after shelf images and reports semantic deltas",
      "ESP8266 firmware across three scale subsystems (scale-live, scale-catch-all, scale-single-item) sharing one event schema",
      "In-flight (NPI) tracker handles on_shelf → in_flight → out transitions with a 4h TTL reaper so temporary removals aren't misread as consumption",
      "LiveTrack Import Wizard — Pi scans a barcode, the analyze-product edge function normalizes it, Pi reads tare weight, an LLM computes net weight",
      "Event Viewer triage UI — filter Pi classifier events (All / Applied / Needs Review / Voided), accept or override macros, void events",
      "Lot-based inventory keyed on (product_id, location_id, expires_on) with nearest-expiration consumption order and recipe stock badges",
      "Walmart-in-Home closes the replenishment loop: shopping list → Walmart deep link → cart delivered directly into the fridge",
    ],
    stack: [
      "Edge: Raspberry Pi + Wemos D1 Mini + HX711 load cells + USB cameras",
      "Vision: VLM change-detection pipeline tuned from 0.5 fps / 72% CPU → 10 fps / 36% CPU",
      "Data: Supabase (Postgres, Storage, Realtime, RLS)",
      "Edge Functions: analyze-product, walmart-scrape, shelf-ingest, livetrack-session",
      "Firmware: C++ (ESP8266 scale nodes — scale-live, scale-catch-all, scale-single-item)",
      "Agent: 28-tool MCP surface inside the Luna Hub worker",
    ],
    link: {
      label: "ChefByte.app",
      href: "https://chefbyte.app",
    },
    images: [],
  },
  {
    title: "CoachByte: Serverless Workout Tracker",
    introLabel: "What it is:",
    intro:
      "A workout tracker where you just press one button between sets. It knows your split, calculates your loads, counts your rest timer, and syncs instantly across every device. No friction, no input between sets — the template, load resolution, plate breakdown, and 1RM math are already done.",
    summaryLabel: "How it works:",
    summary:
      "Runs entirely on Supabase — no edge functions — with Realtime subscriptions keeping the rest timer, today's plan, and PR toasts in sync wherever you are. A weekly split template bootstraps daily on app open, then sequential ordered completion takes over with ad-hoc set injection. A single-row timer state machine per user (running / paused / expired) pushes Realtime updates to every device. plpgsql SECURITY DEFINER functions wrap multi-step transactions (set completion, plan updates, PR detection). 15 MCP tools (COACHBYTE_*) let the Luna Hub agent log sets, update the split, or read history via natural language.",
    featuresLabel: "Highlights:",
    features: [
      "One-tap set completion — template, load resolution, plate breakdown, rest timer, and 1RM math are all pre-resolved so the lift is the only decision",
      "Weekly split template auto-bootstraps on app open into sequential ordered completion, with ad-hoc set injection for in-gym changes",
      "Single-row timer state machine per user (running / paused / expired) — Supabase Realtime keeps phone and desktop in sync mid-set",
      "plpgsql SECURITY DEFINER functions wrap multi-step transactions (set completion, plan updates, PR detection) — no edge functions needed",
      "15 MCP tools (COACHBYTE_*) let the Luna Hub agent log sets, update the split, or read history via natural language",
      "Five pages: Today, History (keyset pagination + exercise filter), Split (7-day grid with relative/absolute loads), PRs (Epley 1RM cards), Settings",
    ],
    stack: [
      "Frontend: React 18 + TypeScript, Vite 6, TanStack Query v5, Tailwind v4",
      "Data: Supabase (Postgres, Realtime)",
      "RPC: plpgsql SECURITY DEFINER functions in the private schema",
      "Agent: 15-tool MCP surface inside the Luna Hub worker",
    ],
    link: {
      label: "lunahub.dev/coach",
      href: "https://lunahub.dev/coach",
    },
    images: [],
  },
  {
    title: "ContinuousRocket: Hierarchical Minecraft Agent",
    introLabel: "What it is:",
    intro:
      "Original ML research on hierarchical AI agents, targeting an arXiv preprint / workshop submission. A two-speed cognition system pairs a fast reactive policy (VPT) with a vision-language planner, joined by a learned latent bridge that steers the body without discrete action tokens.",
    summaryLabel: "How it works:",
    summary:
      "The VPT policy body runs at ~20Hz for reactive Minecraft control; a VLM planner runs at ~1Hz for goal-directed behavior. The open research question is how to train the latent conditioning bridge between them — the project evaluates behavioral cloning from paired demos against RL with VLM-derived reward signals.",
    featuresLabel: "Research focus:",
    features: [
      "Two-speed cognition: fast reactive body (~20Hz VPT) + slow deliberate planner (~1Hz VLM)",
      "Latent conditioning bridge that steers the VPT body's policy state without discrete action tokens",
      "Bridge-training investigation: behavioral cloning from paired demos vs. RL with VLM-derived reward signals",
      "Target: arXiv preprint / workshop submission",
    ],
    stack: [
      "Foundation: VPT (Video PreTraining) policy body",
      "Planner: Vision-Language Model at planning frequency",
      "Bridge: learned latent conditioning layer",
      "Environment: Minecraft via MineRL",
    ],
    images: [],
  },
  {
    title: "Live NPC: Real-Time AI Societies for Games",
    introLabel: "What it is:",
    intro:
      "An agent framework that makes LLM-driven NPCs feel present in a live game world instead of trapped in turn-taking chat. Agents continuously perceive, navigate, act, and speak in context — and any game that exposes tools matching the contract can host them with minimal glue.",
    summaryLabel: "Why it matters:",
    summary:
      "Immersion breaks the moment an AI character pauses to \"think\" while the world moves on. Live NPC folds navigation, survival, and conversation into one continuous loop so humans can play alongside AI characters that stay in the moment.",
    featuresLabel: "Highlights:",
    features: [
      "Standardized real-time tool layer: plug into any host game that matches the spec",
      "Continuous perception + routing + actions with deterministic event/trigger loop",
      "Personality-first architecture that drives both behavior and dialogue tone",
      "Lightweight multi-agent testbed for latency, behavior loops, social dynamics, and human-facing conversation flow",
      "JSON socket protocol with trigger coalescing and survival/crafting systems for stress-testing",
    ],
    images: [{ src: "/assets/live-npc.png", alt: "Live NPC gameplay screenshot" }],
    link: {
      label: "huggingface.co/spaces/jbrinkw/live-npc",
      href: "https://huggingface.co/spaces/jbrinkw/live-npc",
    },
  },
  {
    title: "LLM Powered Floorplan Generator (OLD)",
    introLabel: "Project Motivation:",
    intro:
      "In 2021, with GPT-3 just out and text-to-image and text-to-3D rapidly maturing, the missing piece for text-driven virtual-world generation was a model with enough spatial reasoning to lay out a coherent game world. This project tackled that gap by augmenting an LLM with a hardcoded reasoning chain and automated error correction — years before agent scaffolding and tool-use were standard practice.",
    resultsLabel: "Results:",
    results: [
      "You can see an example of the the before and after to the left. As you can see in the before pictures the room placements are essentially random. The after is significantly more coherent.",
      "To get that result I hardcoded the reasoning chain of the model thinking about how to generate the coordinates of the room. By breaking up the thought process into about 7 different logical steps. For about half of the steps I implemented error checking via another LLM or a script that checked if the new values lined up with the values the LLM planned originally.",
    ],
    images: [
      { src: "/assets/portfolio-floorplan-after.png", alt: "Floorplan after" },
      { src: "/assets/portfolio-floorplan-before.png", alt: "Floorplan before" },
    ],
  },
];

export const about = {
  title: "About Me & Links",
  links: [
    { label: "Github", href: "https://github.com/jbrinkw" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeremy-brinkworth-424129180/",
    },
  ],
  paragraphs: [
    "Hi — I'm Jeremy Brinkworth, an AI systems engineer based in Charlotte, NC. As Lead AI Engineer at RevUp AI I lead RevMigrate, an agentic SQL Server → PostgreSQL migration system on Amazon Bedrock with async phase orchestration and per-object context assembly. I also upgraded the Agentic QA platform codegen pipeline for the UNSW web team, lifting Ghost Inspector triage accuracy from ~0.24 to ~0.68 via self-consistency ensemble evaluation.",
    "On the side I build and operate the Luna AI Platform at lunahub.dev — a production-deployed personal AI platform with a Cloudflare Workers MCP server exposing 65 tools over Streamable HTTP + SSE and an OpenAI-compatible chat endpoint that lets any OpenAI-SDK client act as a LunaHub agent. I'm finishing an M.S. in Computer Science at Western Governors University (expected May 2026); I completed my B.S. in CS there in February 2025.",
    "My interest in AI started in high school — GANs and AlphaZero were the two things that made me take the field seriously. I've been building toward alignment research ever since: the work that decides whether advanced AI ends up a force multiplier for humanity or a failure mode at scale. Most of what you see on this site is infrastructure and tooling that makes real AI useful on the way there.",
    "Outside of work I mountain bike, skydive, and run ultra-endurance races. I've also spent a considerable amount of time (and money) building out a home engineering lab — small robotics projects, custom RC planes and drones, and the hardware side of the ChefByte build.",
    "I serve as a Corporal (E-4) Data Systems Administrator in the U.S. Marine Corps Reserve (2021–present) and hold an active SECRET clearance. Certifications: AWS ML Engineer Associate, AWS AI Practitioner, AWS Cloud Practitioner, CompTIA Data+, LPI Linux Essentials.",
  ],
  images: [
    {
      src: "/assets/about-instagram.jpg",
      alt: "Jeremy Brinkworth outside",
    },
    {
      src: "/assets/about-portrait2.jpg",
      alt: "Jeremy Brinkworth portrait",
    },
  ],
};

export const resumeContent = {
  title: "Résumé",
  description:
    "Download or view my résumé for a concise overview of my experience, skills, and projects.",
  downloadLabel: "Download Résumé (PDF)",
  downloadHref: "/Jeremy_Brinkworth_Resume_4_26.pdf",
};

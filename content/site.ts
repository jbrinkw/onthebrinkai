export const navLinks = [
  { label: "Projects", href: "/portfolio" },
  { label: "Résumé", href: "/resume" },
  { label: "About Me & Links", href: "/about" },
];

export const heroContent = {
  title: "AI Systems Engineer",
  intro: "Building agentic platforms, multi-modal sensing, and the infrastructure that makes real AI useful.",
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
    "Three apps (Hub, ChefByte, CoachByte) shipped as a single React SPA with full dark mode",
    "~58-tool Cloudflare Worker + Durable Objects MCP at mcp.lunahub.dev — five namespaces spanning CHEFBYTE_* / COACHBYTE_* / OBSIDIAN_* / TODOIST_* / HOMEASSISTANT_*, OAuth 2.1 + API key auth",
    "OpenAI-compatible /v1/chat/completions endpoint with token-by-token SSE — powers Home Assistant voice preview against any model",
    "Supabase Realtime drives cross-device state for timers, plans, and macros; nightly Morning Review agent ties an Obsidian goal stack to Todoist execution",
    "~1,600 tests across pgTAP, web, and worker suites; per-tool observability wrapper on every MCP call",
  ],
  ctaLabel: "View more projects like this",
  ctaHref: "/portfolio",
};

export const biography = {
  heading: "Biography",
  title: "Get to Know Me",
  body: [
    "I'm an AI systems engineer based in Charlotte, NC. I currently lead AI engineering at RevUp Renewable Solutions, and I'm finishing an M.S. in AI at Western Governors University. My work spans agentic infrastructure, multi-modal sensing, and the tooling that makes production AI reliable.",
    "My interest in AI started in high school with GANs and AlphaZero, and my long-term goal is to contribute to alignment research — the work that determines whether advanced AI ends up a force multiplier for humanity or a failure mode. Active SECRET clearance.",
  ],
  image: { src: "/assets/bio-headshot.png", alt: "Jeremy Brinkworth headshot" },
  ctaLabel: "Read More",
  ctaHref: "/about",
};

export const portfolioIntro = {
  title: "Projects",
  description:
    "Selected AI systems work: Luna Hub (personal automation platform), ChefByte (weight + vision fusion inventory), CoachByte (serverless workout tracker), Live NPC, and an LLM-based floorplan generator.",
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
    summaryLabel: "Project Summary:",
    summary:
      "A production-deployed personal automation platform. Three apps (Hub, ChefByte, CoachByte) ship as a single React SPA backed by Supabase and a ~58-tool Cloudflare Worker + Durable Objects MCP endpoint. Extensions connect it to Obsidian, Todoist, and Home Assistant, and a nightly accountability agent closes the loop between a tiered Obsidian goal stack and daily execution in Todoist.",
    featuresLabel: "Features:",
    features: [
      "~58-tool Cloudflare Worker + Durable Objects MCP at mcp.lunahub.dev — five namespaces (CHEFBYTE_*, COACHBYTE_*, OBSIDIAN_*, TODOIST_*, HOMEASSISTANT_*), OAuth 2.1 + API key auth, per-tool observability wrapper",
      "OpenAI-compatible /v1/chat/completions endpoint with token-by-token SSE — powers Home Assistant voice preview against any model",
      "Three apps unified in one React 18 + TypeScript SPA with full dark mode, TanStack Query v5 code splitting, and optimistic updates",
      "Supabase Realtime drives cross-device state for rest timers, plan changes, and macro totals; schema-per-module (hub, coachbyte, chefbyte, private)",
      "Obsidian extension backed by the GitHub Contents API — project / date-range / patch tools over a tiered goal vault",
      "Todoist and Home Assistant extensions (task sync, device control, entity status, TV remote)",
      "Nightly Morning Review agent reconciles yesterday's Todoist completions against commitments and produces the next-day plan",
      "~1,600 tests across pgTAP, web, and worker suites; staging + prod deploys via Vercel",
    ],
    stack: [
      "Data: Supabase — schema-per-module (hub, coachbyte, chefbyte, private) with Postgres, Auth, Realtime, Storage, Edge Functions",
      "Edge: Cloudflare Workers + Durable Objects (MCP, OAuth 2.1)",
      "Frontend: React 18 + TypeScript, Vite 6, TanStack Query v5, Tailwind v4",
      "Monorepo: pnpm workspaces + Turborepo, deployed to Vercel",
    ],
    link: {
      label: "LunaHub.dev",
      href: "https://lunahub.dev",
    },
    images: [
      { src: "/assets/luna/home.png", alt: "Luna Hub home" },
    ],
  },
  {
    title: "CoachByte: Serverless Workout Tracker",
    introLabel: "What it is:",
    intro:
      "A workout tracker that turns a weekly split into sequential, one-tap set completion across every device you own. Runs entirely on Supabase — no edge functions — with Realtime subscriptions keeping the rest timer, today's plan, and PR toasts in sync wherever you are.",
    summaryLabel: "Why it matters:",
    summary:
      "Most trackers demand too much input between sets. CoachByte reduces a workout to pressing one button when you finish a set and watching the timer count you into the next one — the template, load resolution, plate breakdown, and 1RM math are all already done.",
    featuresLabel: "Highlights:",
    features: [
      "Five pages: Today (sequential set completion + plate breakdown), History (keyset pagination, exercise filter), Split (7-day grid editor with relative/absolute loads), PRs (Epley 1RM cards, rep-range pills), Settings",
      "Weekly split template → daily bootstrap on app open → sequential ordered completion with ad-hoc set injection",
      "Single-row timer state machine per user (running / paused / expired) — Realtime updates keep phone and desktop in sync",
      "plpgsql SECURITY DEFINER functions wrap multi-step transactions (set completion, plan updates, PR detection)",
      "15 MCP tools (COACHBYTE_*) let the Luna Hub agent log sets, update the split, or read history via natural language",
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
    title: "Live NPC: Real-Time AI Societies for Games",
    introLabel: "What it is:",
    intro:
      "A personality-first agent framework built for real-time worlds. Agents continuously perceive, navigate, coordinate, and speak in context—not just turn-taking chat. Any game that exposes tools matching the contract can host the agents with minimal glue.",
    summaryLabel: "Why it matters:",
    summary:
      "Keeps immersion by blending navigation, survival, and conversation in one loop so humans can play alongside AI characters that feel present in the moment.",
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
    title: "ChefByte: Weight + Vision Fusion Inventory",
    introLabel: "Project Motivation:",
    intro:
      "Barcode-first inventory apps die on ADHD friction — you stop scanning, the database diverges from reality, and the whole thing becomes noise. ChefByte replaces scanning with passive sensing: weight deltas from load cells under every shelf, a catch-all scale for everything else, and a camera pipeline that identifies what moved. Weight and vision have both been attempted for inventory separately; fusing them is what makes it work.",
    summaryLabel: "Architecture:",
    summary:
      "The Pi is a cloud edge processor, not a standalone app. One products catalog and one inventory live in Supabase; the Pi caches the slice its classifier needs, then pushes only event decisions (product_id + delta_g) back up — never frames or video. Three shelf kinds share one schema: live shelf (multi-cell scale with camera), catch-all scale (anything without a dedicated spot), and single-item scale (one scale per product, e.g. milk carton, protein tub).",
    featuresLabel: "Features:",
    features: [
      "Weight-triggered sessions with a close-on-stable state machine and a shelf_id discriminator across lots, sessions, and scale events (live_shelf / catch_all / single_item)",
      "In-flight (NPI) tracker handles on_shelf → in_flight → out transitions with consumption math + a 4h TTL reaper so temporary removals aren't misread as consumption",
      "LiveTrack Import Wizard — Pi scans a barcode, the analyze-product edge function normalizes it, the Pi reads tare weight, an LLM computes net weight; browser + Pi sync via a single Realtime-synced session row",
      "Event Viewer triage UI — filter Pi classifier events (All / Applied / Needs Review / Voided), accept or override macros, void events, configure scale pairings",
      "Barcode scanner with four modes (Purchase / Consume+Macros / Consume-NoMacros / Shopping List), OpenFoodFacts + Claude Haiku fallback for unknown items",
      "Lot-based inventory keyed on (product_id, location_id, expires_on) with nearest-expiration consumption order, recipe stock badges (CAN MAKE / PARTIAL / NO STOCK), and macro-density + active-time recipe filters",
      "Walmart-in-Home closes the replenishment loop: shopping list → Walmart deep link → cart delivered directly into the fridge",
    ],
    stack: [
      "Edge: Raspberry Pi + Wemos D1 Mini + HX711 load cells + USB cameras",
      "Data: Supabase (Postgres, Storage, Realtime, RLS)",
      "Edge Functions: analyze-product, walmart-scrape, shelf-ingest, livetrack-session",
      "Firmware: C++ (ESP8266 scale nodes — scale-live, scale-catch-all, scale-single-item)",
    ],
    link: {
      label: "ChefByte.app",
      href: "https://chefbyte.app",
    },
    images: [],
  },
  {
    title: "LLM Powered Floorplan Generator (OLD)",
    introLabel: "Project Motivation:",
    intro:
      "This project was an attempt at setting the foundation for infinite text driven generation of virtual world. In 2021 when I first had the idea for this I was trying to figure out what the barrier was to full stack text driven generation of video games. A lot of the fundamental forms of AI were already in place. GPT 3 had recently come out and it was good enough to outline the premise of a basic game and recursively generate game mechanics and storyline. Text to image was doing very well and text to 3D had just recently become useable. The only fundamental piece that was missing as a text driven model with enough spatial understanding to dynamically generate the layout of a game world. This project was my attempt at creating that model by augmenting existing LLMs with heavy prompt engineering and automated error correction.",
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
    "Hi — I'm Jeremy Brinkworth. I'm an AI systems engineer based in Charlotte, NC, currently leading AI engineering at RevUp Renewable Solutions and finishing an M.S. in AI at Western Governors University. Active SECRET clearance.",
    "My interest in AI started in high school — GANs and AlphaZero were the two things that made me take the field seriously. I've been building toward alignment research ever since: the work that decides whether advanced AI ends up a force multiplier for humanity or a failure mode at scale. Most of what you see on this site is infrastructure and tooling that makes real AI useful on the way there.",
    "Outside of work I mountain bike, skydive, and run ultra-endurance races. I've also spent a considerable amount of time (and money) building out a home engineering lab — small robotics projects, custom RC planes and drones, and the hardware side of the ChefByte build.",
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


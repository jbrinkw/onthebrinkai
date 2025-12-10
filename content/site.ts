export const navLinks = [
  { label: "Projects", href: "/portfolio" },
  { label: "Résumé", href: "/resume" },
  { label: "About Me & Links", href: "/about" },
];

export const heroContent = {
  title: "Designing Tomorrow's World",
  intro: "Welcome to my portfolio!",
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
  title: "Luna Hub: Tool & Service Hub",
  bullets: [
    "Supervisor-managed tool hub with Caddy + GitHub OAuth and OpenAI-compatible Agent API",
    "FastMCP hubs (main + named) to expose tools securely with per-service API keys",
    "Extension discovery, deterministic ports, restart-safe update queue and config sync",
    "Hub UI to manage tools, agent presets, extensions, services, and keys in one place",
    "Caddy front door for auth, Agent API, MCP, and supervisor API with TLS-friendly routing",
  ],
  ctaLabel: "View more projects like this",
  ctaHref: "/portfolio",
};

export const biography = {
  heading: "Biography",
  title: "Get to Know Me",
  body: [
    "My passion for AI began in high school when I discovered breakthroughs in GANs and DeepMind's AlphaZero. Since then, I've focused on AI research, recently earning a Computer Science degree from WGU. Now, I'm building a portfolio to enter AI engineering, with the long-term goal of advancing AI alignment research and shaping its future responsibly.",
  ],
  image: { src: "/assets/bio-headshot.png", alt: "Jeremy Brinkworth headshot" },
  ctaLabel: "Read More",
  ctaHref: "/about",
};

export const portfolioIntro = {
  title: "Projects",
  description:
    "Selected AI builds: Luna Hub, Live NPC, ChefByte, and an LLM-based floorplan generator.",
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
    title: "Luna Hub: Your Personal AI Automation Platform",
    summaryLabel: "Project Summary:",
    summary:
      "Supervisor-driven AI hub with Caddy as the single entry point, GitHub OAuth, OpenAI-compatible Agent API, and FastMCP. Extensions and services are auto-discovered, port-assigned, and secured with per-service API keys. Hub UI manages tools, presets, and an update queue that syncs configs and restarts cleanly.",
    featuresLabel: "Features:",
    features: [
      "Caddy + GitHub OAuth front door for auth, Agent API, MCP, and supervisor API",
      "OpenAI-compatible Agent API with FastMCP hubs (main + named hubs with API keys)",
      "Extension discovery with deterministic port assignment and per-service API key generation",
      "Supervisor orchestrates auth, Agent API, MCP, Hub UI dev server, and extension services",
      "Update queue + config sync keep master_config and .env consistent; restart-safe",
      "Hub UI Tool/Agent Preset manager for enabling tools per hub and creating scoped agents",
    ],
    stack: [
      "Backend: FastAPI Agent API, FastMCP, Caddy",
      "Frontend: React, Vite (Hub UI)",
      "Infrastructure: Supervisor, GitHub OAuth, Docker",
    ],
    link: {
      label: "LunaHub.dev",
      href: "https://lunahub.dev",
    },
    images: [
      { src: "/assets/luna/01-dashboard.png", alt: "Luna Hub dashboard overview" },
      { src: "/assets/luna/02-addon-store.png", alt: "Luna Hub addon store" },
      { src: "/assets/luna/03-tool-mcp-manager.png", alt: "Luna Hub MCP tool manager" },
      { src: "/assets/luna/04-extension-tools.png", alt: "Luna Hub extension tools" },
      { src: "/assets/luna/05-key-manager.png", alt: "Luna Hub key manager" },
      { src: "/assets/luna/06-infrastructure.png", alt: "Luna Hub infrastructure services" },
      { src: "/assets/luna/07-extension-manager.png", alt: "Luna Hub extension manager" },
      { src: "/assets/luna/08-update-manager.png", alt: "Luna Hub update manager" },
    ],
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
    title: "ChefByte: AI-Powered Meal Planning & Nutrition Tracking",
    introLabel: "Project Motivation:",
    intro:
      "ChefByte is a free, low-ops food inventory and macro platform. It combines barcode scanning, automated nutrition/storage/expiration fill, macro-density recipe search, shopping automation, and smart-scale ingestion—designed to run on a Supabase + Vercel free-tier footprint.",
    resultsLabel: "Results:",
    results: [
      "Barcode + manual entry with auto-filled nutrition/storage/expiration; macro-linked inventory",
      "Macro-density recipe search with availability filters and meal-plan integration",
      "Shopping automation: add-below-minimum, Walmart link generation, import-to-stock",
      "Price intelligence with batch Walmart scraping and progress tracking",
      "LiquidTrack device-key flow for smart scale ingestion (API key + Supabase RLS)",
      "Serverless endpoints on Vercel; Supabase Postgres with per-user RLS for multi-tenant use",
    ],
    images: [
      { src: "/assets/chefbyte/dashboard.png", alt: "ChefByte dashboard overview" },
      { src: "/assets/chefbyte/scanner.png", alt: "ChefByte barcode scanner" },
      { src: "/assets/chefbyte/inventory.png", alt: "ChefByte inventory view" },
      { src: "/assets/chefbyte/meal-plan.png", alt: "ChefByte meal plan view" },
      { src: "/assets/chefbyte/shopping.png", alt: "ChefByte shopping list" },
      { src: "/assets/chefbyte/recipes.png", alt: "ChefByte recipes list" },
      { src: "/assets/chefbyte/recipe-edit.png", alt: "ChefByte recipe editor" },
      { src: "/assets/chefbyte/walmart.png", alt: "ChefByte Walmart price manager" },
      { src: "/assets/chefbyte/liquidtrack-full.png", alt: "ChefByte LiquidTrack integration" },
      { src: "/assets/chefbyte/settings.png", alt: "ChefByte settings" },
    ],
    link: {
      label: "ChefByte.app",
      href: "https://chefbyte.app",
    },
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
    "Hi! My name is Jeremy Brinkworth. I have been focused on working in the AI industry since I was in high school. I believe AI has the potential to either drastically improve the world or amplify our problems tenfold. My goal is to be a driving force in ensuring AI development aligns with humanity's best interests, pushing it toward solutions that benefit everyone.",
    "In my personal time I enjoy sports like mountain biking, skydiving and ultra-endurance races. I also have spent a considerable amount time (and money) building out my home engineering lab. I've used it for a handful of small robotics projects, custom built RC planes and drones.",
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
    "Download or view my résumé for a concise overview of my experience, skills, and projects. Drop your résumé PDF into public/resume.pdf to replace this placeholder link.",
  downloadLabel: "Download Résumé (PDF)",
  downloadHref: "/resume.pdf",
};


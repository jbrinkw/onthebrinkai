// Portfolio data, ported from the "Signal" design direction.
// Shape mirrors window.PORTFOLIO_DATA from the design bundle so the JSX
// patterns in direction-a.jsx translate directly onto these fields.

export type Person = {
  name: string;
  role: string;
  location: string;
  tagline: string;
  availability: string;
  status: string;
  clearance: string;
  reserve: string;
  education: string;
  github: string;
  linkedin: string;
  email: string;
  now: string[];
};

export type SkillCategory =
  | "AI / Agents"
  | "Infra"
  | "Frontend"
  | "Hardware"
  | "Languages";

export type Skills = Record<SkillCategory, string[]>;

export type Experience = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type ProjectId =
  | "luna"
  | "chefbyte"
  | "coachbyte"
  | "rocket"
  | "openethos"
  | "floorplan";

export type ProjectTag = "agents" | "hardware" | "research";

export type ProjectMetric = readonly [value: string, label: string];

export type Project = {
  id: ProjectId;
  num: string;
  title: string;
  tag: string;
  year: string;
  status: string;
  summary: string;
  highlights: string[];
  stack: string[];
  metrics: ProjectMetric[];
  link?: string;
};

export const person: Person = {
  name: "Jeremy Brinkworth",
  role: "AI Systems Engineer",
  location: "Charlotte, NC",
  tagline:
    "Production AI, end-to-end. MCP servers, agent runtimes, edge hardware, embedded firmware.",
  availability: "Open to senior / staff AI infra roles",
  status: "Lead AI Engineer @ RevUp AI",
  clearance: "Active SECRET clearance",
  reserve: "Corporal (E-4), USMC Reserve",
  education: "M.S. Computer Science, WGU (expected May 2026)",
  github: "github.com/jbrinkw",
  linkedin: "linkedin.com/in/jeremy-brinkworth-424129180",
  email: "jeremy@onthebrink.ai",
  now: [
    "Shipping RevMigrate, an agentic SQL Server → PostgreSQL migration on Amazon Bedrock",
    "Operating lunahub.dev daily: 65 MCP tools across 5 extensions",
    "Nightly Morning Review agent reconciles Obsidian goals ↔ Todoist execution",
  ],
};

export const skills: Skills = {
  "AI / Agents": [
    "MCP servers",
    "Tool-calling",
    "Agent orchestration",
    "Bedrock",
    "OpenAI SDK",
    "VLMs",
    "RL + BC",
    "VPT",
  ],
  Infra: [
    "Cloudflare Workers",
    "Supabase",
    "Postgres",
    "Realtime",
    "OAuth 2.1",
    "Vercel",
    "Edge functions",
  ],
  Frontend: [
    "React 18",
    "TypeScript",
    "Vite",
    "TanStack Query",
    "Tailwind v4",
  ],
  Hardware: [
    "Raspberry Pi",
    "ESP8266",
    "HX711 load cells",
    "USB camera pipelines",
    "C++ firmware",
  ],
  Languages: ["TypeScript", "Python", "C++", "SQL", "plpgsql"],
};

export const experience: Experience[] = [
  {
    role: "Lead AI Engineer (Contract)",
    org: "RevUp AI",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    bullets: [
      "Lead RevMigrate: agentic SQL Server → PostgreSQL migration on Amazon Bedrock with async phase orchestration and per-object context assembly",
      "Upgraded the Agentic QA platform codegen pipeline for UNSW; lifted Ghost Inspector triage accuracy from 0.24 → 0.68 via self-consistency ensemble evaluation",
    ],
  },
  {
    role: "Data Systems Administrator, Corporal (E-4)",
    org: "U.S. Marine Corps Reserve",
    period: "2021 – present",
    location: "Active SECRET clearance",
    bullets: [
      "Administer secure data systems; drill schedule alongside full-time engineering role",
    ],
  },
  {
    role: "Founder / Solo builder",
    org: "Luna AI Platform",
    period: "2024 – present",
    location: "lunahub.dev",
    bullets: [
      "Cloudflare Workers MCP server exposing 65 tools over Streamable HTTP + SSE",
      "OpenAI-compatible /v1/chat/completions with tool-call streaming + multi-round orchestration",
      "Three React SPAs behind one agent endpoint; Supabase Realtime across 31 tables",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "M.S. Computer Science",
    school: "Western Governors University",
    period: "expected May 2026",
  },
  {
    degree: "B.S. Computer Science",
    school: "Western Governors University",
    period: "February 2025",
  },
];

export const certs: string[] = [
  "AWS ML Engineer Associate",
  "AWS AI Practitioner",
  "AWS Cloud Practitioner",
  "CompTIA Data+",
  "LPI Linux Essentials",
];

export const projects: Project[] = [
  {
    id: "luna",
    num: "01",
    title: "Luna Hub",
    tag: "Personal automation platform",
    year: "2024–",
    status: "Live in production",
    summary:
      "A publicly accessible AI platform at lunahub.dev. Three-app React SPA (Hub, ChefByte, CoachByte) on Postgres + Cloudflare Workers + Vercel. The thesis: give consumer AI real, structured access to a user's daily workflow via a production MCP server anyone on the internet can connect to.",
    highlights: [
      "65 MCP tools across 5 extensions (ChefByte 28, CoachByte 16, Obsidian 8, Todoist 8, Home Assistant 5) over Streamable HTTP + SSE",
      "OpenAI-compatible /v1/chat/completions with tool-call streaming and up to 10 tool rounds per session",
      "OAuth 2.1 discovery (RFC 8414 / 9728) + SHA-256-hashed API-key auth on the same endpoint",
      "Non-blocking observability via ctx.waitUntil(); every tool call logged with redacted args, status, duration",
      "Nightly agent calls 7 MCP tools to close yesterday, reconcile the goal stack, and write tomorrow's brief",
    ],
    stack: [
      "Cloudflare Workers",
      "Supabase (31 tables, 3 schemas)",
      "React 18 + TypeScript",
      "Vite",
      "Vercel",
      "OAuth 2.1",
    ],
    link: "lunahub.dev",
    metrics: [
      ["65", "MCP tools"],
      ["5", "integrations"],
      ["public", "server"],
    ],
  },
  {
    id: "chefbyte",
    num: "02",
    title: "ChefByte",
    tag: "Agent-native food management",
    year: "2024–",
    status: "Hardware + agent stack",
    summary:
      "Every food tracker dies on the barcode-scan problem. ChefByte removes the friction entirely: load cells under each shelf weigh what changed, a VLM diffs before/after shelf images to name it, and when stock runs low an agent generates a Walmart cart deep-link that delivers straight to the fridge.",
    highlights: [
      "Three ESP8266 scale kinds (live shelf / catch-all / single-item) share one event schema with EEPROM-versioned configs (magic 0xBEEF0007)",
      "Every shelf event triggers Claude Sonnet 4.6 change-detection: before/after diff, no custom CV model",
      "Pi is a cloud edge processor: only product_id + delta-gram events go upstream, never raw frames",
      "In-flight tracker reconciles on_shelf → in_flight → out with TTL reaper so temporary removals aren't misread as consumption",
      "Walmart cart deep-link closes the loop: shopping list → /ip/…/ID parse → bulk-add URL → delivered",
    ],
    stack: [
      "Raspberry Pi",
      "ESP8266 + HX711",
      "Claude Sonnet 4.6 VLM",
      "Supabase (17 tables)",
      "28 MCP tools",
    ],
    metrics: [
      ["3", "scale types"],
      ["28", "agent tools"],
      ["Walmart", "integration"],
    ],
  },
  {
    id: "coachbyte",
    num: "03",
    title: "CoachByte",
    tag: "Serverless workout tracker",
    year: "2024–",
    status: "Live",
    summary:
      "A serverless strength-training tracker inside LunaHub. Weekly split template → daily plan bootstrap → sequential set completion, with a DB-backed rest timer and Epley 1RM tracking. All business logic lives in plpgsql SECURITY DEFINER functions, no edge functions.",
    highlights: [
      "Single-row timer state machine per user: Supabase Realtime syncs pause / resume / reset mid-set across phone and desktop",
      "plpgsql SECURITY DEFINER wraps set completion, plan updates, ad-hoc set injection, and PR detection atomically",
      "16 COACHBYTE_* MCP tools let the LunaHub agent log sets, start timers, and read PR history via natural language",
      "Five pages: Today (sequential completion + plate breakdown), History (keyset pagination), Split (7-day editor), PRs (Epley cards), Settings",
    ],
    stack: [
      "Supabase Postgres + Realtime",
      "plpgsql SECURITY DEFINER",
      "React 18",
      "TanStack Query v5",
      "Tailwind v4",
    ],
    link: "lunahub.dev/coach",
    metrics: [
      ["16", "agent tools"],
      ["rest", "timer"],
      ["PR", "tracking"],
    ],
  },
  {
    id: "rocket",
    num: "04",
    title: "ContinuousRocket",
    tag: "Hierarchical Minecraft agent",
    year: "2025",
    status: "Research, arXiv target",
    summary:
      "A hierarchical Minecraft agent that splits cognition across two speeds. VPT (OpenAI's Video PreTraining model, trained on ~70k hours of Minecraft gameplay) handles reactive motor control at ~20Hz; a Qwen3-VL-8B planner handles scene understanding and goals at ~1Hz. The novel contribution is the learned latent bridge: continuous conditioning vectors instead of discrete commands.",
    highlights: [
      "Fast body (≈ 20Hz VPT) + slow planner (≈ 1Hz Qwen3-VL-8B): strategic context updates without blocking the 20Hz loop",
      "Latent conditioning bridge: VLM emits continuous vectors that steer VPT policy state directly. No text, no discrete subgoals",
      "Bridge-training: behavioral cloning from paired demos vs. RL with VLM-derived reward",
      "Builds on VPT, STEVE-1, GROOT, MineCLIP; departs by replacing command handoff with continuous conditioning across timescales",
      "Target venues: NeurIPS, ICML, ICLR (PhD-admissions differentiator)",
    ],
    stack: [
      "VPT",
      "Qwen3-VL-8B-Instruct",
      "MineStudio",
      "PyTorch",
      "RTX 4090 host",
    ],
    metrics: [
      ["20 Hz", "body"],
      ["1 Hz", "mind"],
      ["latent", "bridge"],
    ],
  },
  {
    id: "openethos",
    num: "05",
    title: "Open Ethos",
    tag: "Civic value calculator",
    year: "2025–",
    status: "Public beta",
    summary:
      "A weighted moral calculator at openethos.ai. Users set 0-1 weights across eight value axioms plus social-distance and time-discount parameters, then score a decision factor-by-factor on polarity, intensity, duration, confidence, and scale. Deterministic arithmetic, every parameter visible. The thesis: coherence-against-self is the verification standard for civic reasoning that sidesteps bias without appealing to external ground truth.",
    highlights: [
      "Eight axioms: life/health, bodily autonomy, civil liberty, wellbeing, fairness, truth/epistemic integrity, long-term societal capacity, social trust",
      "Per-factor scoring: polarity × intensity × duration × confidence × scale, composed with axiom weights, social-distance, and moral half-life. Fully visible arithmetic, no black-box inference",
      "Framework fixed, weights user-controlled: two users with opposite politics use the identical tool honestly and reach different verdicts",
      "'Magic factor' escape hatch lets users note what the axioms fail to capture; aggregated across users, becomes signal for framework evolution",
      "L3 (the mirror) of a planned 5-layer stack: bill ingestion, Socratic tutor, coherence loop, and aggregated deliberation to follow",
    ],
    stack: ["Next.js", "Vercel"],
    link: "openethos.ai",
    metrics: [
      ["8", "axioms"],
      ["0–1", "weights"],
      ["public", "beta"],
    ],
  },
  {
    id: "floorplan",
    num: "06",
    title: "LLM Floorplan Generator",
    tag: "Early spatial-reasoning experiment",
    year: "2021",
    status: "Archived",
    summary:
      "In 2021 (GPT-3 just out, years before tool-use was standard), augmenting an LLM with a hardcoded reasoning chain and automated error correction to generate coherent game-world layouts.",
    highlights: [
      "Hardcoded 7-step reasoning chain for room coordinate generation",
      "Per-step error checking via secondary LLM or validator scripts",
      "Pre-dates agent scaffolding; treats LLM as a constrained planner",
    ],
    stack: ["GPT-3", "Python", "validators"],
    metrics: [
      ["2021", "pre-agent era"],
      ["7-step", "reasoning chain"],
      ["GPT-3", "base model"],
    ],
  },
];

// Which project filter tags each project responds to. Mirrors the map in
// direction-a.jsx. "infra" was intentionally dropped per chat1.md feedback.
export const projectTagMap: Record<ProjectId, ProjectTag[]> = {
  luna: ["agents"],
  chefbyte: ["hardware", "agents"],
  coachbyte: ["agents"],
  rocket: ["research"],
  openethos: ["research"],
  floorplan: ["research"],
};

export const projectTags: readonly (ProjectTag | "all")[] = [
  "all",
  "agents",
  "hardware",
  "research",
];

export const portfolioData = {
  person,
  skills,
  experience,
  education,
  certs,
  projects,
};

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
  | "steve"
  | "livenpc"
  | "openethos"
  | "floorplan"
  | "driving";

export type ProjectTag = "agents" | "hardware" | "research";

export type ProjectImage = { src: string; alt: string };
export type ProjectVideo = { src: string; poster?: string; alt: string };

export type Project = {
  id: ProjectId;
  num: string;
  title: string;
  tag: string;
  year: string;
  status: string;
  paragraphs: string[];
  highlights: string[];
  stack: string[];
  link?: string;
  images?: ProjectImage[];
  video?: ProjectVideo;
};

export const person: Person = {
  name: "Jeremy Brinkworth",
  role: "AI Systems Engineer",
  location: "Charlotte, NC",
  tagline:
    "Production AI, end-to-end. MCP servers, agent runtimes, edge hardware, embedded firmware.",
  availability: "Open to senior / staff AI infra roles",
  status: "Founder, Luna AI Platform",
  clearance: "Active SECRET clearance",
  reserve: "Corporal (E-4), USMC Reserve",
  education: "M.S. Computer Science, WGU (expected May 2026)",
  github: "github.com/jbrinkw",
  linkedin: "linkedin.com/in/jeremy-brinkworth-424129180",
  email: "jeremy@onthebrink.ai",
  now: [
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
    title: "LunaHub",
    tag: "Personal automation platform",
    year: "2024–",
    status: "Live in production",
    link: "lunahub.dev",
    paragraphs: [
      "LunaHub is a serverless platform for managing MCP tools from various sources, free to sign up and use. It includes ChefByte and CoachByte, along with a few extensions targeted at productivity assistance. You can connect it to your AI chat account, like ChatGPT or Claude, and use all of your tools, as well as connect it to your compatible smart speaker.",
      "LunaHub originally started as a feature of my ChefByte project, as a way to bridge AI tools to a custom MCP server for AI chat interaction and an LLM agent server with the tools built in for my Home Assistant smart speaker. After I added a few of my other projects, I realized LunaHub itself would be a great product to develop on its own as an easy way to manage MCP tools from various sources and expose the API for the smart speaker. At the time, I developed it into a platform you could run in your own home lab or cloud machine, which is still on my GitHub today. I later pivoted it to a full serverless platform that would be essentially free to serve and way easier to use.",
    ],
    highlights: [
      "66 MCP tools across 5 extensions (ChefByte ~30, CoachByte 15, Obsidian 8, Todoist 8, Home Assistant 5) over Streamable HTTP at mcp.lunahub.dev - publicly addressable, not a localhost demo",
      "Dual auth on the same endpoint: SHA-256-hashed API keys OR OAuth 2.1 with /oauth/consent (RFC 8414 / 9728 discovery)",
      "Extension credentials live in Supabase Vault (pgsodium); UI only sees a vault_secret_id pointer - raw secrets never leave the database",
      "Per-user tool toggles enforced at request time; 'last 5 calls' tail per extension powered by Supabase Realtime over hub.mcp_tool_logs",
    ],
    stack: [
      "Cloudflare Workers",
      "Supabase Postgres + Realtime + Vault (pgsodium)",
      "React 18 + TypeScript + Vite",
      "TanStack Query v5",
      "OAuth 2.1 + SHA-256 API keys",
      "Anthropic API (proxied agent)",
    ],
  },
  {
    id: "chefbyte",
    num: "02",
    title: "ChefByte",
    tag: "Agent-native food management",
    year: "2024–",
    status: "Hardware + agent stack",
    link: "lunahub.dev/chef",
    paragraphs: [
      "I got the idea for ChefByte during a period when I was so focused on work that I didn't really have time to think about properly maintaining my diet. This is a pretty common issue that many people struggle with. Unfortunately, household food robots are still pretty far off, so I designed the next best thing. ChefByte is designed to remove as much friction from maintaining a healthy diet as possible, so busy people can stay on track without sacrificing their productivity.",
      "ChefByte can do all of the basic things other similar legacy apps can do, like track inventory, save recipes, create shopping lists, etc., alongside a set of features that differentiate it from every other product in the space. I already had a unique product when I combined a basic kitchen manager with macro tracking, all built around an MCP server you can plug into any AI agent system. But despite it being a major improvement over the current competition, I wasn't happy with the user experience yet. Both macro trackers and inventory managers are rarely used long-term by consumers because eventually the time and energy needed to keep these tools updated outweighs the benefit the user perceives. ChefByte tackles both of these problems primarily through the LiveTrack system, alongside a wider range of integrated features than any similar product.",
      "The end goal of ChefByte is that the user will have to spend next to zero time actively maintaining the system. It will be as simple as your watch tracking your steps and heart rate, just with a system that maintains itself and a pretty dashboard you can come back to at any time. LiveTrack is what gets ChefByte there.",
    ],
    highlights: [
      "LiveTrack rig: Pi 4 + 4× HX711 load cells + USB camera + door sensor; multi-item pickup OK during open session, one-at-a-time return enforced by LED",
      "Two-pass Sonnet classifier with auto-certify: certified pool → uncertified pool; pass-2 match flips an uncertified product to certified once tare + full weight resolve together",
      "Pi is a cloud edge processor - only product_id + delta-gram events go upstream, never raw frames",
      "Per-scan undo atomically rolls back stock/log/shopping side-effects; 6 h in-flight TTL reaper handles temporary removals",
    ],
    stack: [
      "Raspberry Pi 4 + ESP8266 + HX711 load cells",
      "Claude Sonnet 4.6 (VLM) + Haiku 4.5 (normalizer)",
      "Supabase Edge Functions",
      "Supabase Postgres + Realtime + Vault",
      "Flask + SQLite (Pi-local)",
      "SerpApi + OpenFoodFacts",
      "~30 MCP tools",
    ],
  },
  {
    id: "coachbyte",
    num: "03",
    title: "CoachByte",
    tag: "Agentic workout tracker",
    year: "2024–",
    status: "Live",
    link: "lunahub.dev/coach",
    paragraphs: [
      "CoachByte is a workout tracker currently targeted toward weight training. It does everything you'd expect a workout tracker to do, with a few special features. It is a LunaHub app, so it exposes the full control surface via MCP. You can have your AI agent view and update your workout plan day by day. If you're feeling off and want a lighter workout, you can describe how you're feeling, and the AI can adapt your plan on the fly. Another small feature, and my favorite, is that it has an API, so if you put something like a magnetic Zigbee button on your rack, it will ping the server to complete the current set, start the rest timer, and make a custom sound. So you can use Pavlovian training techniques to maintain your gains. I get a satisfying chime every time I finish a set.",
    ],
    highlights: [
      "DB-state-machine rest timer (running / paused / expired) with atomic-guarded transitions and exactly-once expiration via WHERE clauses; Realtime row events only, no client ticking",
      "Sequential set queue + PR detection in one plpgsql SECURITY DEFINER call; PRs derived from completed_sets via Epley, no separate PR table",
      "Daily plan bootstrap is UNIQUE-constrained and idempotent; weekday split copies with PR-resolved weights rounded to 5 lb / 2.5 kg",
      "15 COACHBYTE_* MCP tools let the LunaHub agent log sets, control the timer, and read PR history conversationally",
    ],
    stack: [
      "Supabase Postgres + Realtime",
      "plpgsql SECURITY DEFINER (search_path='')",
      "React 18 + TypeScript",
      "TanStack Query v5",
      "Tailwind v4",
      "15 MCP tools",
    ],
  },
  {
    id: "steve",
    num: "04",
    title: "ContinuousSteve",
    tag: "Hierarchical Minecraft agent",
    year: "2025",
    status: "Research, paused",
    paragraphs: [
      "ContinuousSteve was the natural successor to [LiveNPC](#livenpc). My first attempt with LiveNPC made it clear that no amount of harness development would get around the need for real-time models. After doing some domain research on Minecraft agents, it became clear that if I wanted both the reaction speed I was looking for and the planning, I would need a hierarchical model. None of the existing ones were built with my goal in mind. Most existing hierarchical Minecraft agents use either discrete behavior tokens or structured visual prompts between the natural language planner and the action model. Discrete and structured bottlenecks are not inherently bad, but in existing systems that use them with visual and text planners, they only have enough primitives between the planner and the action model to complete predefined benchmark tasks, not maneuver the environment in any arbitrary way.",
      "That's the gap I wanted to fill. I wanted to take the base models the existing hierarchical models use and retrain them to accept a continuous latent bridge between the planner and the action model. This is a relatively new area of research, so development has been slow, and I've taken a break to study the foundational pieces so I can come back and finish it.",
      "The end goal is to have a VPT-type model as the action layer, running at about 20Hz and handling all the direct controls. Then an intermediary VLA-type planner, running at about 1Hz, would observe the environment in parallel with the VPT model and, with the visual data and a text instruction, produce latents to drive the action model. On top of all that, there would be a frontier LLM over an API to handle long-term planning and tool calls for memory and voice or text chat. The one piece I haven't spent the time to figure out yet is how I want to extract event info from the VLM to inform the LLM about what is happening. Maybe I'll try to give the VLM two heads, one for the latent and one for an embedding I can decode into text. I'll cross that bridge when I get the latent bridge figured out.",
      "This may or may not match the existing setups on benchmark task completion, but the important part is the architecture. Fast-slow hierarchical pipelines with a low-frequency VLM producing continuous latents into a high-frequency action policy are established in robotics manipulation (HiRT, DuoCore-FS), but they are largely absent from the game-agent space, where the dominant patterns are still discrete behavior tokens, structured visual prompts, or static goal embeddings. ContinuousSteve adapts that fast-slow continuous-latent pattern to Minecraft, with VPT as the action layer instead of a small custom policy, and adds a third tier: a frontier LLM on top for long-term planning, memory, and tool calls, which the robotics work does not include. Until monolithic models can run fast enough to operate fluidly end-to-end, I think the structure of fluid game agents will look something like this.",
    ],
    highlights: [
      "Fast body (≈ 20Hz VPT) + slow planner (≈ 1Hz Qwen3-VL-8B): strategic context updates without blocking the 20Hz loop",
      "Latent conditioning bridge: VLM emits continuous vectors that steer VPT policy state directly - no text, no discrete subgoals between layers",
      "Adapts the fast-slow continuous-latent pattern from robotics manipulation (HiRT, DuoCore-FS) into the game-agent space, where VPT/STEVE-1/GROOT/MineCLIP currently rely on discrete or structured handoffs",
      "Three-tier architecture: VPT action policy, VLM planner, frontier LLM over API for long-term memory and tool calls",
    ],
    stack: [
      "VPT",
      "Qwen3-VL-8B-Instruct",
      "MineStudio",
      "PyTorch",
      "RTX 4090 host",
    ],
  },
  {
    id: "livenpc",
    num: "05",
    title: "LiveNPC",
    tag: "Generalizable game-agent harness",
    year: "2024",
    status: "POC, concluded",
    paragraphs: [
      "LiveNPC was my first real attempt at a game agent, followed by [ContinuousSteve](#steve), that would interact with its environment the way a human would. The intent was a generalizable harness that could be applied to any game to enable a level of natural interaction other harnesses don't: not topping benchmarks on score and achievements, but moving and reacting fluidly rather than mechanically.",
      "Sounds cool, but after I finished the initial POC in a simple survival grid world I made, I quickly realized this did not align with the vision I had in my head. As a rule of thumb with AI projects, it should be relatively easy to produce something that works \"alright\" to prove it is a valid path, and then the real work is refining the system to make it clean and reliable.",
      "After I finished my POC and started playing with it, it didn't take me long to make the judgment call that the initial results were not promising enough to warrant further refining. It was not necessarily a flaw in the design. The medium of relying primarily on orchestrated LLM calls was not going to get me the fluid, human-like behavior I was looking for, no matter the amount of scaffolding. I had my doubts about that before I started, but I chose that path anyway because, at the time, I didn't have experience building and fine-tuning custom models, so my only real option was regular LLM calls. Regardless, this project was a great study in harness design, and I don't regret spending time on it.",
    ],
    highlights: [
      "Generalizable game-agent harness designed for any game - focused on fluid, human-like interaction rather than benchmark scores",
      "Orchestrated LLM calls as the sole reasoning medium - no fine-tuning, no custom models",
      "POC tested in a custom survival grid world; concluded no amount of LLM-call scaffolding produces real-time fluid behavior",
      "Direct motivation for ContinuousSteve's hierarchical fast-slow architecture",
    ],
    stack: [
      "LLM orchestration",
      "Custom grid-world sim",
      "Python",
    ],
  },
  {
    id: "openethos",
    num: "06",
    title: "Open Ethos",
    tag: "Deterministic ethics engine",
    year: "2025–",
    status: "Public beta",
    link: "openethos.ai",
    paragraphs: [
      "It takes a lot to be an informed political citizen, as it requires much more time than most people have. My idea for OpenEthos was born out of frustration with how backwards, inefficient, and corrupt politics and government can be. So many things fly under the radar simply because there aren't enough smart, unbiased people to check everything. If there were a system that could deterministically evaluate decisions against the user's own values, or against the values a public figure or institution has committed to, you could flag the ones that don't hold up before they go into effect. That is the goal of OpenEthos. It is the ethical decision model at the core of a deterministic evaluation framework.",
      "The engine works by having the user calibrate weights across a fixed set of moral axioms, then scoring a specific decision by decomposing it into factors with explicit intensity, duration, confidence, and scope. The output is a verdict with a strength score that distinguishes a clean call from a contested one. Once a user has their calibration set, running new decisions through it becomes trivial, and popular presets lower the barrier for anyone starting fresh. Even coarse presets are enough to flag policy that fails by the standards it claims to represent. In effect, the system makes corruption and incoherence harder to sustain by collapsing the cost of catching them. More detail is in the [OpenEthos user guide](https://openethos.ai).",
    ],
    highlights: [
      "Per-factor scoring: polarity × intensity × duration × confidence × scale, composed with axiom weights, social-distance, and moral half-life - fully visible arithmetic, no black-box inference",
      "Framework fixed, weights user-controlled: two users with opposite politics use the identical tool honestly and reach different verdicts",
      "'Magic factor' escape hatch lets users note what the axioms fail to capture; aggregated across users, becomes signal for framework evolution",
      "L3 (the mirror) of a planned 5-layer stack: bill ingestion, Socratic tutor, coherence loop, and aggregated deliberation to follow",
    ],
    stack: ["Next.js", "Vercel"],
  },
  {
    id: "floorplan",
    num: "07",
    title: "LLM Floor Plan Generator",
    tag: "Early spatial-reasoning experiment",
    year: "2023",
    status: "Archived",
    paragraphs: [
      "This project was an attempt at setting the foundation for infinite text-driven generation of virtual worlds. In 2023, when I first had the idea for this, I was trying to figure out what the barrier was to full-stack text-driven generation of video games. A lot of the fundamental modalities were already in place. GPT-3 had recently come out, and it was good enough to outline the premise of a basic game and recursively generate game mechanics and storyline. Text-to-image was doing very well, and text-to-3D had just recently become usable. The only fundamental piece that was missing was a language model with enough spatial understanding to dynamically generate the layout of a game world. This project was my attempt at creating that model by augmenting existing LLMs with heavy prompt engineering and automated error correction. This was actually pushing SOTA for floor plan generation at the time, if I remember correctly.",
      "You can see an example of the before and after to the left. In the before pictures, the room placements are essentially random; the after is significantly more coherent. To get that result, I hardcoded the reasoning chain of the model around how to generate the coordinates of each room, breaking the thought process into about seven different logical steps. For about half of the steps, I implemented error checking, either via another LLM call or a script that checked whether the new values lined up with the values the LLM had originally planned.",
    ],
    highlights: [
      "Hardcoded 7-step reasoning chain for room coordinate generation, with per-step error checking via secondary LLM call or validator script",
      "Treats the LLM as a constrained planner - predates standard agent scaffolding",
      "Pushed SOTA for LLM-driven floor plan generation at the time",
    ],
    stack: ["GPT-3", "Python", "validators"],
    images: [
      { src: "/assets/portfolio-floorplan-after.avif", alt: "Floor plan after - coherent room placement" },
      { src: "/assets/portfolio-floorplan-before.avif", alt: "Floor plan before - random room placement" },
    ],
  },
  {
    id: "driving",
    num: "08",
    title: "Self-Driving Car",
    tag: "First AI project, 2018",
    year: "2018",
    status: "Archived",
    paragraphs: [
      "Way back in 2018, when I first got interested in AI, I had the bright idea to build a self-driving go-kart. I had no idea what I was doing and no one to teach me, but I dove right in. After a handful of [Sentdex](https://www.youtube.com/@sentdex) AI videos, I made a basic CNN. I built a driving track in Unity with prebuilt assets and drove around it myself. Every time I used an arrow key to steer, the program would take a screenshot and save it to a folder. From there, I set up a post-processing pipeline to create a mask of the road line, trained the CNN on my steering data, and after a little control-parameter tuning, it actually worked, to my great surprise. I never got the chance to apply my rudimentary model to a real go-kart because I didn't have the money, but I made a good attempt at the physical build by taking apart a broken treadmill and using some old wheels. This was my first AI project.",
    ],
    highlights: [
      "Trained a CNN from gameplay data: Unity driving track + arrow-key screenshot capture → road-line mask pipeline → working sim policy",
      "Physical go-kart build attempt: stripped a broken treadmill for motor and drivetrain",
      "First AI project - self-taught from Sentdex tutorials",
    ],
    stack: ["Python", "CNN", "Unity", "treadmill motor"],
    video: {
      src: "/assets/driving-demo.mp4",
      poster: "/assets/driving-demo-poster.jpg",
      alt: "CNN driving the Unity track in sim",
    },
    images: [
      { src: "/assets/driving-kart.jpg", alt: "Treadmill-motor go-kart build" },
    ],
  },
];

// Which project filter tags each project responds to. Self-Driving has no
// tags so it only appears under "All".
export const projectTagMap: Record<ProjectId, ProjectTag[]> = {
  luna: ["agents"],
  chefbyte: ["hardware", "agents"],
  coachbyte: ["agents"],
  steve: ["research"],
  livenpc: ["research"],
  openethos: ["research"],
  floorplan: ["research"],
  driving: [],
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

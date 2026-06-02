// Portfolio data, ported from the "Signal" design direction.
// Shape mirrors window.PORTFOLIO_DATA from the design bundle so the JSX
// patterns in direction-a.jsx translate directly onto these fields.

export type Person = {
  name: string;
  role: string;
  location: string;
  clearance: string;
  reserve: string;
  education: string;
  github: string;
  linkedin: string;
  email: string;
};

export type SkillCategory = "AI / Agents" | "Infra";

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

// Controls the "Read more" affordance in the project detail prose.
// - undefined: auto (clamp at 7 lines when total > 12)
// - false: disabled (no clamp, no button — even on long prose)
// - { paragraph, line }: always clamp at line N of paragraph M (1-indexed)
export type ReadMoreConfig = false | { paragraph: number; line: number };

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
  // Extra images that appear in the media rail only when the prose
  // Read More is expanded. Useful for supplementary detail that would
  // be visual noise on first glance.
  imagesExpanded?: ProjectImage[];
  video?: ProjectVideo;
  readMore?: ReadMoreConfig;
  wip?: boolean;
  live?: boolean;
};

export const person: Person = {
  name: "Jeremy Brinkworth",
  role: "AI Systems Engineer",
  location: "Charlotte, NC",
  clearance: "Active SECRET clearance",
  reserve: "Corporal (E-4), USMC Reserve",
  education: "M.S. Computer Science, WGU (expected July 2026)",
  github: "github.com/jbrinkw",
  linkedin: "linkedin.com/in/jeremy-brinkworth-424129180",
  email: "jeremy@onthebrink.ai",
};

export const skills: Skills = {
  "AI / Agents": [
    "MCP servers",
    "Agent orchestration",
    "Tool-calling",
    "OpenAI / Anthropic SDKs",
    "VLMs",
  ],
  Infra: [
    "Cloudflare Workers",
    "Supabase (Postgres + Realtime + Vault)",
    "Edge functions",
    "OAuth 2.1",
    "Vercel",
  ],
};

export const experience: Experience[] = [
  {
    role: "Lead AI Engineer (Contract)",
    org: "RevUp AI",
    period: "Dec 2025 – present",
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
    org: "LunaHub",
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
    period: "expected July 2026",
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
  "CompTIA SecAI+",
  "CompTIA Security+",
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
    live: true,
    paragraphs: [
      "LunaHub is a serverless platform for managing MCP tools from various sources, free to sign up and use. It includes ChefByte and CoachByte, along with a few extensions targeted at productivity assistance. You can connect it to your AI chat account, like ChatGPT or Claude, and use all of your tools, as well as connect it to your compatible smart speaker.",
      "LunaHub originally started as a feature of my ChefByte project, as a way to bridge AI tools to a custom MCP server for AI chat interaction and an LLM agent server with the tools built in for my Home Assistant smart speaker. After I added a few of my other projects, I realized LunaHub itself would be a great product to develop on its own as an easy way to manage MCP tools from various sources and expose the API for the smart speaker. At the time, I developed it into a platform you could run in your own home lab or cloud machine, which is still on my GitHub today. I later pivoted it to a full serverless platform that would be essentially free to serve and way easier to use.",
    ],
    highlights: [
      "Multi-tenant MCP platform at lunahub.dev. Anyone can sign up, plug ChatGPT / Claude / a smart-speaker agent into one endpoint, and get 65+ tools across food, fitness, notes, tasks, and home control.",
      "Runs on effectively $0/month of infrastructure (stateless Cloudflare Workers + Supabase free tier) because everything is request-scoped and shares one schema across users via RLS",
      "Same endpoint speaks API-key OR OAuth 2.1, so non-MCP-aware clients work via key and MCP-aware ones auto-discover through RFC 8414 / 9728",
    ],
    stack: [
      "Cloudflare Workers",
      "Supabase Postgres + Realtime + Vault (pgsodium)",
      "React 18 + TypeScript + Vite",
      "TanStack Query v5",
      "OAuth 2.1 + SHA-256 API keys",
      "Anthropic API",
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
    live: true,
    paragraphs: [
      "I got the idea for ChefByte during a period when I was so focused on work that I didn't really have time to think about properly maintaining my diet. This is a pretty common issue that many people struggle with. Unfortunately, household food robots are still pretty far off, so I designed the next best thing. ChefByte is designed to remove as much friction from maintaining a healthy diet as possible, so busy people can stay on track without sacrificing their productivity.",
      "ChefByte can do all of the basic things other similar legacy apps can do, like track inventory, save recipes, create shopping lists, etc., alongside a set of features that differentiate it from every other product in the space. I already had a unique product when I combined a basic kitchen manager with macro tracking, all built around an MCP server you can plug into any AI agent system. But despite it being a major improvement over the current competition, I wasn't happy with the user experience yet. Both macro trackers and inventory managers are rarely used long-term by consumers because eventually the time and energy needed to keep these tools updated outweighs the benefit the user perceives. ChefByte tackles both of these problems primarily through the LiveTrack system, alongside a wider range of integrated features than any similar product.",
      "The end goal of ChefByte is that the user will have to spend next to zero time actively maintaining the system. It will be as simple as your watch tracking your steps and heart rate, just with a system that maintains itself and a pretty dashboard you can come back to at any time. LiveTrack is what gets ChefByte there.",
    ],
    highlights: [
      "LiveTrack: passive food inventory with no scanning and no logging. Load cells + door sensor detect weight changes, a VLM diffs before/after shelf photos to name what moved. Designed to kill the manual-entry problem that ends every other food tracker.",
      "Walmart cart deep-link closes the buying loop. Shopping list → cart URL → delivered to the fridge (literally, via Walmart InHome). The pantry refills without you opening the Walmart app.",
      "Agent-native: ~30 MCP tools let your AI agent log meals, plan a week, build a shopping list, and reconcile against current inventory through natural language.",
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
    images: [
      {
        src: "/assets/chefbyte-livetrack.jpg",
        alt: "LiveTrack rig: HX711 load cells wired across a chest-freezer shelf",
      },
    ],
    imagesExpanded: [
      {
        src: "/assets/chefbyte-rig.jpg",
        alt: "Pi 4 + USB camera + HX711 single-item scale under a shelf",
      },
      {
        src: "/assets/chefbyte-shelf.jpg",
        alt: "Milk jug on a live-shelf scale in the fridge",
      },
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
    live: true,
    paragraphs: [
      "CoachByte is a workout tracker currently targeted toward weight training. It does everything you'd expect a workout tracker to do, with a few special features. It is a LunaHub app, so it exposes the full control surface via MCP. You can have your AI agent view and update your workout plan day by day. If you're feeling off and want a lighter workout, you can describe how you're feeling, and the AI can adapt your plan on the fly. Another small feature, and my favorite, is that it has an API, so if you put something like a magnetic Zigbee button on your rack, it will ping the server to complete the current set, start the rest timer, and make a custom sound. So you can use Pavlovian training techniques to maintain your gains. I get a satisfying chime every time I finish a set.",
    ],
    highlights: [
      "AI-adaptive plan: tell your agent 'feeling tired' or 'shoulder hurts' and it rewrites today's plan in place; 'build me a new push/pull/legs split' and you have one in seconds.",
      "Pavlovian Zigbee button on the rack: one press marks the set complete, starts the rest timer, and fires a chime. The dopamine hit is baked into the workout itself.",
      "Multi-device live sync via Supabase Realtime. Start the timer on your phone, watch it count down on the wall TV, finish on the desktop.",
    ],
    stack: [
      "Supabase Postgres + Realtime",
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
    wip: true,
    paragraphs: [
      "ContinuousSteve was the natural successor to [LiveNPC](#livenpc). My first attempt with LiveNPC made it clear that no amount of harness development would get around the need for real-time models. After doing some domain research on Minecraft agents, it became clear that if I wanted both the reaction speed I was looking for and the planning, I would need a hierarchical model. None of the existing ones were built with my goal in mind. Most existing hierarchical Minecraft agents use either discrete behavior tokens or structured visual prompts between the natural language planner and the action model. Discrete and structured bottlenecks are not inherently bad, but in existing systems that use them with visual and text planners, they only have enough primitives between the planner and the action model to complete predefined benchmark tasks, not maneuver the environment in any arbitrary way.",
      "That's the gap I wanted to fill. I wanted to take the base models the existing hierarchical models use and retrain them to accept a continuous latent bridge between the planner and the action model. This is a relatively new area of research, so development has been slow, and I've taken a break to study the foundational pieces so I can come back and finish it.",
      "The end goal is to have a VPT-type model as the action layer, running at about 20Hz and handling all the direct controls. Then an intermediary VLA-type planner, running at about 1Hz, would observe the environment in parallel with the VPT model and, with the visual data and a text instruction, produce latents to drive the action model. On top of all that, there would be a frontier LLM over an API to handle long-term planning and tool calls for memory and voice or text chat. The one piece I haven't spent the time to figure out yet is how I want to extract event info from the VLM to inform the LLM about what is happening. Maybe I'll try to give the VLM two heads, one for the latent and one for an embedding I can decode into text. I'll cross that bridge when I get the latent bridge figured out.",
      "This may or may not match the existing setups on benchmark task completion, but the important part is the architecture. Fast-slow hierarchical pipelines with a low-frequency VLM producing continuous latents into a high-frequency action policy are established in robotics manipulation (HiRT, DuoCore-FS), but they are largely absent from the game-agent space, where the dominant patterns are still discrete behavior tokens, structured visual prompts, or static goal embeddings. ContinuousSteve adapts that fast-slow continuous-latent pattern to Minecraft, with VPT as the action layer instead of a small custom policy, and adds a third tier: a frontier LLM on top for long-term planning, memory, and tool calls, which the robotics work does not include. Until monolithic models can run fast enough to operate fluidly end-to-end, I think the structure of fluid game agents will look something like this.",
    ],
    highlights: [
      "Started after [LiveNPC](#livenpc) ruled out the cheap path. That project made it clear orchestrated LLM calls can't drive real-time fluid game behavior. Steve is the answer to 'OK then what?'",
      "The architectural bet: a fast custom policy (VPT, OpenAI's 70k-hour Minecraft pretrained model) handles reactive control at ~20Hz, while a vision-language model (Qwen3-VL-8B) plans at ~1Hz and steers the body through a continuous latent bridge instead of discrete tokens or structured text.",
      "Pattern is borrowed from robotics manipulation (HiRT, DuoCore-FS), where fast-slow continuous-latent loops are well-established. Existing hierarchical Minecraft agents (STEVE-1, GROOT, MineCLIP) all bottleneck on discrete handoffs that limit fluid behavior.",
      "Three-tier with a frontier LLM on top for long-term memory and tool calls, which the robotics work doesn't include. Currently paused to deepen the underlying ML foundations before pushing further.",
    ],
    stack: [
      "VPT",
      "Qwen3-VL-8B-Instruct",
      "MineStudio",
      "PyTorch",
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
      "Tried to build a game agent that moves and reacts like a human, not one that maxes a benchmark. The whole bet was on a generalizable harness around plain LLM calls. No fine-tuning, no custom models.",
      "POC in a hand-built survival grid world made the ceiling obvious. Orchestrated LLM calls can't drive real-time fluid behavior, no matter how much scaffolding you stack on top.",
      "Great learning exercise in harness design. The LLM-orchestration patterns surface in LunaHub's agent layer, applied to problems where LLM-only is the right tool.",
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
    wip: true,
    live: true,
    paragraphs: [
      "It takes a lot to be an informed political citizen, as it requires much more time than most people have. My idea for OpenEthos was born out of frustration with how backwards, inefficient, and corrupt politics and government can be. So many things fly under the radar simply because there aren't enough smart, unbiased people to check everything. If there were a system that could deterministically evaluate decisions against the user's own values, or against the values a public figure or institution has committed to, you could flag the ones that don't hold up before they go into effect. That is the goal of OpenEthos. It is the ethical decision model at the core of a deterministic evaluation framework.",
      "The engine works by having the user calibrate weights across a fixed set of moral axioms, then scoring a specific decision by decomposing it into factors with explicit intensity, duration, confidence, and scope. The output is a verdict with a strength score that distinguishes a clean call from a contested one. Once a user has their calibration set, running new decisions through it becomes trivial, and popular presets lower the barrier for anyone starting fresh. Even coarse presets are enough to flag policy that fails by the standards it claims to represent. In effect, the system makes corruption and incoherence harder to sustain by collapsing the cost of catching them. More detail is in the [OpenEthos user guide](https://openethos.ai).",
    ],
    highlights: [
      "Deterministic ethics calculator: zero LLM inference inside the verdict. Just weighted moral axioms, factor decomposition, and visible arithmetic. Every verdict is auditable line by line.",
      "Framework fixed, weights user-controlled. Two users with opposite politics use the identical tool honestly and reach different verdicts. The standard isn't 'match my values'; it's 'stay coherent with the values you said you hold.'",
      "Aimed at civic decisions. Flag policies or public-figure positions that fail by the standards the actor themselves claims to represent. Coherence-against-self is cheaper to enforce than truth.",
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
      "You can see an example of the before and after to the right. In the before pictures, the room placements are essentially random; the after is significantly more coherent. To get that result, I hardcoded the reasoning chain of the model around how to generate the coordinates of each room, breaking the thought process into about seven different logical steps. For about half of the steps, I implemented error checking, either via another LLM call or a script that checked whether the new values lined up with the values the LLM had originally planned.",
    ],
    highlights: [
      "Built in 2023, before 'agent' was standard vocabulary. The reasoning chain and per-step validation are basically homemade agent scaffolding. Same pattern the field converged on a year later.",
      "7-step coordinate generation pipeline with secondary-LLM or script-based validation at each step. Treats the language model as a constrained planner, not a one-shot oracle.",
      "Pushed SOTA for LLM-driven floor-plan generation at the time, on a problem (spatial reasoning) the base models were still bad at.",
    ],
    stack: ["GPT-3", "Python"],
    images: [
      { src: "/assets/portfolio-floorplan-after.avif", alt: "Floor plan after: coherent room placement" },
      { src: "/assets/portfolio-floorplan-before.avif", alt: "Floor plan before: random room placement" },
    ],
    readMore: { paragraph: 2, line: 2 },
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
      "High-school project, 2018. Pre-ChatGPT, pre-mainstream AI. Self-taught from Sentdex YouTube tutorials with zero formal background.",
      "Full vertical solo: built a Unity training track, recorded my own arrow-key driving data, wrote a road-line mask post-processing pipeline, trained a CNN, and got a working sim policy.",
      "Built the physical go-kart partway too. Stripped a broken treadmill for the motor and drivetrain. Software worked in sim; budget ran out before the wheels turned.",
    ],
    stack: ["Python", "TensorFlow", "CNN", "Unity"],
    video: {
      src: "/assets/driving-demo.mp4",
      poster: "/assets/driving-demo-poster.jpg",
      alt: "CNN driving the Unity track in sim",
    },
    images: [
      { src: "/assets/driving-kart.jpg", alt: "Treadmill-motor go-kart build" },
    ],
    readMore: false,
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
